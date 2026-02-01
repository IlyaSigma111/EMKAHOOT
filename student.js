// ============================================
// student.js - ПРОСТАЯ ВЕРСИЯ (без таймеров)
// ============================================

let currentGameId = null;
let playerName = null;
let currentQuestion = null;
let hasAnswered = false;
let selectedOption = null;

// DOM элементы
const joinScreen = document.getElementById('joinScreen');
const waitingScreen = document.getElementById('waitingScreen');
const questionScreen = document.getElementById('questionScreen');
const resultScreen = document.getElementById('resultScreen');
const playerNameInput = document.getElementById('playerName');
const gameCodeInput = document.getElementById('gameCode');
const displayName = document.getElementById('displayName');
const displayCode = document.getElementById('displayCode');
const roomPlayers = document.getElementById('roomPlayers');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const answerStatus = document.getElementById('answerStatus');
const resultContent = document.getElementById('resultContent');
const currentQ = document.getElementById('currentQ');
const questionType = document.getElementById('questionType');

// ================ ОСНОВНЫЕ ФУНКЦИИ ================

function joinGame() {
    const name = playerNameInput.value.trim();
    const code = gameCodeInput.value.trim();
    
    if (!name || name.length < 2) {
        alert("Введите имя (минимум 2 символа)");
        playerNameInput.focus();
        return;
    }
    
    if (!code || code.length !== 8 || !/^\d+$/.test(code)) {
        alert("Введите 8 цифр кода игры");
        gameCodeInput.focus();
        return;
    }
    
    playerName = name;
    currentGameId = "game_" + code;
    
    console.log(`🎮 Подключаюсь как "${name}" к игре ${code}`);
    
    // Проверить игру
    db.ref(`games/${currentGameId}`).once('value').then(snapshot => {
        if (!snapshot.exists()) {
            alert("Игра не найдена!");
            return;
        }
        
        const game = snapshot.val();
        
        // Проверить уникальность имени
        if (game.players && game.players[name]) {
            alert("Игрок с таким именем уже есть!");
            return;
        }
        
        // Зарегистрироваться
        const playerData = {
            name: name,
            joined: Date.now(),
            score: 0,
            device: /Mobi|Android/i.test(navigator.userAgent) ? "📱 Телефон" : "💻 Компьютер"
        };
        
        db.ref(`games/${currentGameId}/players/${name}`).set(playerData).then(() => {
            // Обновить UI
            displayName.textContent = name;
            displayCode.textContent = code;
            
            // Переключить экран
            switchScreen('waiting');
            
            // Слушать игру
            listenToGame();
            
            console.log(`✅ Подключен как ${name} к игре ${code}`);
            
        }).catch(error => {
            alert("Ошибка: " + error.message);
        });
        
    }).catch(error => {
        alert("Ошибка сети: " + error.message);
    });
}

function listenToGame() {
    if (!currentGameId) return;
    
    console.log(`👂 Слушаю игру ${currentGameId}`);
    
    db.ref(`games/${currentGameId}`).on('value', snapshot => {
        const game = snapshot.val();
        if (!game) {
            console.log("Игра удалена");
            leaveGame();
            return;
        }
        
        // Обновить счетчик
        if (game.players) {
            roomPlayers.textContent = Object.keys(game.players).length;
        }
        
        const currentQuestionId = game.currentQuestion;
        
        switch (game.status) {
            case "lobby":
            case "waiting":
                handleLobby();
                break;
                
            case "question_active":
                if (currentQuestionId && (!currentQuestion || currentQuestion.id !== currentQuestionId || !hasAnswered)) {
                    handleQuestionActive(game, currentQuestionId);
                }
                break;
                
            case "showing_results":
                handleShowingResults(game, currentQuestionId);
                break;
                
            case "finished":
                handleGameFinished();
                break;
        }
    }, error => {
        console.error("Ошибка слушателя:", error);
    });
}

function handleLobby() {
    if (!waitingScreen.classList.contains('active')) {
        switchScreen('waiting');
    }
    
    if (hasAnswered) {
        hasAnswered = false;
        selectedOption = null;
    }
}

function handleQuestionActive(game, questionId) {
    currentQuestion = QUIZ_DATA.questions.find(q => q.id === questionId);
    if (!currentQuestion) return;
    
    hasAnswered = false;
    selectedOption = null;
    
    switchScreen('question');
    displayQuestion(currentQuestion);
}

function displayQuestion(question) {
    const questionIndex = QUIZ_DATA.questions.findIndex(q => q.id === question.id) + 1;
    currentQ.textContent = questionIndex;
    questionType.textContent = getTypeLabel(question.type);
    
    questionText.textContent = question.text;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${option}</span>
        `;
        button.onclick = () => selectAnswer(index, button);
        optionsContainer.appendChild(button);
    });
    
    answerStatus.textContent = "Выберите вариант ответа";
    answerStatus.style.color = "#00ff88";
    
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.classList.remove('selected');
    });
}

function selectAnswer(answerIndex, buttonElement) {
    if (hasAnswered || !currentQuestion || !currentGameId || !playerName) return;
    
    selectedOption = answerIndex;
    
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    buttonElement.classList.add('selected');
    
    submitAnswer(answerIndex);
}

function submitAnswer(answerIndex) {
    if (hasAnswered) return;
    
    hasAnswered = true;
    
    // Блокировать кнопки
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.6';
    });
    
    // Простая проверка правильности
    const isCorrect = (answerIndex === currentQuestion.correct);
    
    const answerData = {
        answerIndex: answerIndex,
        isCorrect: isCorrect,
        timestamp: Date.now()
    };
    
    db.ref(`games/${currentGameId}/answers/${currentQuestion.id}/${playerName}`).set(answerData).then(() => {
        if (isCorrect) {
            answerStatus.innerHTML = '<i class="fas fa-check-circle"></i> Правильно!';
            answerStatus.style.color = '#00ff88';
            
            db.ref(`games/${currentGameId}/players/${playerName}/score`).transaction(score => {
                return (score || 0) + (currentQuestion.points || 5);
            });
        } else {
            answerStatus.innerHTML = '<i class="fas fa-times-circle"></i> Неправильно!';
            answerStatus.style.color = '#ff416c';
        }
    }).catch(error => {
        answerStatus.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Ошибка';
        answerStatus.style.color = '#ff9e00';
    });
}

function handleShowingResults(game, questionId) {
    if (!currentQuestion || currentQuestion.id !== questionId) {
        currentQuestion = QUIZ_DATA.questions.find(q => q.id === questionId);
    }
    
    if (!currentQuestion) return;
    
    switchScreen('result');
    
    db.ref(`games/${currentGameId}/answers/${currentQuestion.id}/${playerName}`).once('value').then(snapshot => {
        const userAnswer = snapshot.val();
        showResult(userAnswer, currentQuestion);
    }).catch(() => {
        showResult(null, currentQuestion);
    });
}

function showResult(userAnswer, question) {
    let resultHTML = '';
    
    const correctAnswerText = question.options[question.correct] || `Вариант ${question.correct + 1}`;
    
    if (userAnswer && userAnswer.answerIndex >= 0) {
        const isCorrect = userAnswer.isCorrect;
        const userAnswerText = question.options[userAnswer.answerIndex] || `Вариант ${userAnswer.answerIndex + 1}`;
        
        resultHTML = `
            <div style="color: ${isCorrect ? '#00ff88' : '#ff416c'}; font-size: 1.5rem; margin-bottom: 20px;">
                <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                ${isCorrect ? 'ПРАВИЛЬНО!' : 'НЕПРАВИЛЬНО'}
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; margin: 15px 0;">
                <div style="color: #8f8f8f; margin-bottom: 8px;">Ваш ответ:</div>
                <div style="color: white; font-size: 1.2rem;">${userAnswerText}</div>
            </div>
            <div style="background: rgba(0,255,136,0.1); padding: 20px; border-radius: 12px; margin: 15px 0; border: 2px solid #00ff88;">
                <div style="color: #8f8f8f; margin-bottom: 8px;">Правильный ответ:</div>
                <div style="color: #00ff88; font-size: 1.2rem; font-weight: bold;">${correctAnswerText}</div>
            </div>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
                <div style="color: #8f8f8f; font-style: italic;">${question.explanation}</div>
            </div>
        `;
    } else {
        resultHTML = `
            <div style="color: #ff9e00; font-size: 1.5rem; margin-bottom: 20px;">
                <i class="fas fa-clock"></i> ВЫ НЕ УСПЕЛИ ОТВЕТИТЬ
            </div>
            <div style="background: rgba(0,255,136,0.1); padding: 20px; border-radius: 12px; margin: 15px 0; border: 2px solid #00ff88;">
                <div style="color: #8f8f8f; margin-bottom: 8px;">Правильный ответ:</div>
                <div style="color: #00ff88; font-size: 1.2rem; font-weight: bold;">${correctAnswerText}</div>
            </div>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
                <div style="color: #8f8f8f; font-style: italic;">${question.explanation}</div>
            </div>
        `;
    }
    
    resultContent.innerHTML = resultHTML;
}

function handleGameFinished() {
    switchScreen('result');
    
    db.ref(`games/${currentGameId}/players/${playerName}`).once('value').then(snapshot => {
        const playerData = snapshot.val();
        
        resultContent.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 2rem; color: #00adb5; margin-bottom: 20px;">
                    <i class="fas fa-flag-checkered"></i> ИГРА ЗАВЕРШЕНА
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 25px; border-radius: 15px; margin: 20px 0;">
                    <div style="color: #00ff88; font-size: 2.5rem; margin-bottom: 10px;">${playerData.score || 0} очков</div>
                    <div style="color: #8f8f8f;">Ваш финальный результат</div>
                </div>
                <button onclick="location.reload()" style="
                    background: linear-gradient(45deg, #00adb5, #0077b6);
                    color: white;
                    border: none;
                    padding: 18px 35px;
                    border-radius: 12px;
                    font-size: 1.1rem;
                    font-weight: bold;
                    cursor: pointer;
                    margin-top: 20px;
                    transition: all 0.3s ease;
                ">
                    <i class="fas fa-redo"></i> НАЧАТЬ ЗАНОВО
                </button>
            </div>
        `;
    });
}

function leaveGame() {
    console.log("🚪 Выхожу из игры...");
    
    if (currentGameId && playerName) {
        try {
            db.ref(`games/${currentGameId}/players/${playerName}`).remove();
        } catch (e) {}
    }
    
    resetGameState();
    switchScreen('join');
}

function resetGameState() {
    currentGameId = null;
    playerName = null;
    currentQuestion = null;
    hasAnswered = false;
    selectedOption = null;
    playerNameInput.value = '';
    gameCodeInput.value = '';
}

function switchScreen(screenName) {
    [joinScreen, waitingScreen, questionScreen, resultScreen].forEach(screen => {
        screen.classList.remove('active');
    });
    
    switch(screenName) {
        case 'join':
            joinScreen.classList.add('active');
            break;
        case 'waiting':
            waitingScreen.classList.add('active');
            break;
        case 'question':
            questionScreen.classList.add('active');
            break;
        case 'result':
            resultScreen.classList.add('active');
            break;
    }
}

function getTypeLabel(type) {
    const labels = {
        basics: "⚛️ Основы ЭМ волн",
        spectrum: "🌈 Спектр волн",
        communication: "📡 Связь",
        safety: "🛡️ Безопасность",
        applications: "🔧 Применение",
        properties: "📊 Свойства",
        history: "📜 История",
        future: "🚀 Будущее"
    };
    return labels[type] || type;
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ Student app loaded");
    
    // Автофокус
    playerNameInput.focus();
    
    // Enter для удобства
    playerNameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') gameCodeInput.focus();
    });
    
    gameCodeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') joinGame();
    });
    
    // Проверяем загрузку Firebase
    if (!window.db) {
        console.error("❌ Firebase не загружен!");
        alert("Ошибка загрузки базы данных. Обновите страницу.");
    }
    
    // Проверяем загрузку вопросов
    if (!window.QUIZ_DATA) {
        console.error("❌ QUIZ_DATA не загружен!");
        alert("Ошибка загрузки вопросов. Обновите страницу.");
    } else {
        console.log(`📚 Загружено ${QUIZ_DATA.questions.length} вопросов по физике`);
    }
});

// Глобальные функции для вызова из HTML
window.joinGame = joinGame;
window.leaveGame = leaveGame;
window.selectAnswer = selectAnswer;
