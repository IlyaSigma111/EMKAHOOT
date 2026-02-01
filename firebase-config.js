// ============================================
// firebase-config.js - ГЛАВНЫЙ КОНФИГУРАЦИОННЫЙ ФАЙЛ
// ============================================

// 🔥 КОНФИГУРАЦИЯ FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyCGi5rusiXnTq0zsMVlPJ5WGvPoPVelToM",
    authDomain: "physicsproject-26763.firebaseapp.com",
    projectId: "physicsproject-26763",
    storageBucket: "physicsproject-26763.firebasestorage.app",
    messagingSenderId: "18769012791",
    appId: "1:18769012791:web:acb3392f7d6a728c5637b2"
};

// Инициализация Firebase
try {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    window.db = firebase.database();
    console.log("✅ Firebase инициализирован");
} catch (error) {
    console.error("❌ Ошибка Firebase:", error);
    alert("Ошибка подключения к базе данных. Проверьте консоль.");
}

// 📚 30 КОРОТКИХ ЗАДАНИЙ ПО ФИЗИКЕ (ЭЛЕКТРОМАГНИТНЫЕ ВОЛНЫ)
window.QUIZ_DATA = {
    id: "physics_waves_quiz",
    title: "Физика - Электромагнитные волны и сотовая связь",
    description: "30 вопросов по теме электромагнитных волн и их применению в сотовой связи",
    subject: "Физика",
    author: "Урок-конференция для 9 класса",
    version: "2025.1",
    questions: [
        // ЗАДАНИЯ 1-10: ОСНОВЫ ЭЛЕКТРОМАГНИТНЫХ ВОЛН
        {
            id: 1,
            type: "basics",
            text: "Что такое электромагнитная волна?",
            options: [
                "1) Колебание электрического и магнитного полей",
                "2) Звуковая волна в воздухе",
                "3) Волна на поверхности воды",
                "4) Тепловое излучение"
            ],
            correct: 0,
            explanation: "Электромагнитная волна - это распространяющееся в пространстве колебание электрического и магнитного полей.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 2,
            type: "basics",
            text: "Что отличает разные виды электромагнитных волн?",
            options: [
                "1) Длина волны и частота",
                "2) Цвет и яркость",
                "3) Скорость и температура",
                "4) Вес и плотность"
            ],
            correct: 0,
            explanation: "ЭМ волны отличаются длиной волны и частотой, при этом скорость в вакууме у всех одинакова.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 3,
            type: "basics",
            text: "Какова скорость электромагнитных волн в вакууме?",
            options: [
                "1) 300 000 км/с",
                "2) 340 м/с",
                "3) 1500 м/с",
                "4) 1000 км/ч"
            ],
            correct: 0,
            explanation: "Скорость света (ЭМ волн) в вакууме равна примерно 300 000 км/с (3×10⁸ м/с).",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 4,
            type: "spectrum",
            text: "Какие волны имеют наибольшую длину волны?",
            options: [
                "1) Радиоволны",
                "2) Видимый свет",
                "3) Рентгеновские лучи",
                "4) Гамма-лучи"
            ],
            correct: 0,
            explanation: "Радиоволны - самые длинные в спектре ЭМ волн.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 5,
            type: "spectrum",
            text: "Какие волны используются в микроволновых печах?",
            options: [
                "1) Микроволны",
                "2) Инфракрасные",
                "3) Ультрафиолетовые",
                "4) Радиоволны"
            ],
            correct: 0,
            explanation: "Микроволны используются для нагрева пищи в микроволновках.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 6,
            type: "spectrum",
            text: "Какой вид излучения мы воспринимаем как тепло?",
            options: [
                "1) Инфракрасное",
                "2) Ультрафиолетовое",
                "3) Радиоволны",
                "4) Видимый свет"
            ],
            correct: 0,
            explanation: "Инфракрасное излучение мы ощущаем как тепло.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 7,
            type: "spectrum",
            text: "Какие волны используются в пультах дистанционного управления?",
            options: [
                "1) Инфракрасные",
                "2) Радиоволны",
                "3) Микроволны",
                "4) Ультрафиолетовые"
            ],
            correct: 0,
            explanation: "Пульты ДУ используют инфракрасное излучение.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 8,
            type: "spectrum",
            text: "Какой диапазон ЭМ волн видит человеческий глаз?",
            options: [
                "1) Видимый свет",
                "2) Инфракрасный",
                "3) Ультрафиолетовый",
                "4) Радиоволны"
            ],
            correct: 0,
            explanation: "Человеческий глаз воспринимает только видимый свет (400-700 нм).",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 9,
            type: "spectrum",
            text: "Какое излучение вызывает загар?",
            options: [
                "1) Ультрафиолетовое",
                "2) Инфракрасное",
                "3) Видимый свет",
                "4) Радиоволны"
            ],
            correct: 0,
            explanation: "Ультрафиолетовое излучение вызывает загар и в больших дозах опасно.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 10,
            type: "spectrum",
            text: "Какие волны используются в рентгеновских аппаратах?",
            options: [
                "1) Рентгеновские",
                "2) Гамма-лучи",
                "3) Микроволны",
                "4) Радиоволны"
            ],
            correct: 0,
            explanation: "Рентгеновские лучи проникают сквозь мягкие ткани, но задерживаются костями.",
            points: 1,
            difficulty: "medium"
        },
        // ЗАДАНИЯ 11-20: СВЯЗЬ И ПРИМЕНЕНИЕ
        {
            id: 11,
            type: "communication",
            text: "Какие волны используются для сотовой связи?",
            options: [
                "1) Радиоволны",
                "2) Видимый свет",
                "3) Рентгеновские",
                "4) Гамма-лучи"
            ],
            correct: 0,
            explanation: "Мобильные телефоны используют радиоволны определенных частот.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 12,
            type: "communication",
            text: "Какой диапазон частот используется для 4G связи?",
            options: [
                "1) 800 МГц и 2600 МГц",
                "2) 1000-2000 Гц",
                "3) 50-60 Гц",
                "4) 10-20 кГц"
            ],
            correct: 0,
            explanation: "4G (LTE) использует частоты 800 МГц и 2600 МГц в России.",
            points: 1,
            difficulty: "medium"
        },
        {
            id: 13,
            type: "communication",
            text: "Что означает аббревиатура 5G?",
            options: [
                "1) Пятое поколение связи",
                "2) 5 Гигабайт",
                "3) 5 Герц",
                "4) 5 Гамма"
            ],
            correct: 0,
            explanation: "5G - пятое поколение мобильной связи с высокой скоростью.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 14,
            type: "communication",
            text: "Какой прибор передает сигнал от телефона к вышке?",
            options: [
                "1) Антенна телефона",
                "2) Динамик",
                "3) Микрофон",
                "4) Батарея"
            ],
            correct: 0,
            explanation: "Антенна в телефоне преобразует сигналы в радиоволны и передает их.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 15,
            type: "communication",
            text: "Почему сотовая связь называется 'сотовой'?",
            options: [
                "1) Зона покрытия делится на шестиугольники как соты",
                "2) Используется мед из сот",
                "3) Телефоны сделаны из сот",
                "4) Сигнал похож на жужжание пчел"
            ],
            correct: 0,
            explanation: "Территория делится на шестиугольные ячейки (соты), каждая обслуживается своей вышкой.",
            points: 1,
            difficulty: "medium"
        },
        {
            id: 16,
            type: "communication",
            text: "Что происходит при переходе телефона из одной соты в другую?",
            options: [
                "1) Хэндовер (передача вызова)",
                "2) Телефон выключается",
                "3) Сигнал прерывается",
                "4) Меняется номер телефона"
            ],
            correct: 0,
            explanation: "Хэндовер - автоматическая передача соединения от одной вышки к другой.",
            points: 1,
            difficulty: "medium"
        },
        {
            id: 17,
            type: "safety",
            text: "Безопасно ли излучение мобильного телефона?",
            options: [
                "1) Да, мощность мала и безопасна",
                "2) Нет, вызывает рак",
                "3) Только в самолете",
                "4) Только ночью"
            ],
            correct: 0,
            explanation: "Мощность излучения телефона (до 2 Вт) считается безопасной.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 18,
            type: "safety",
            text: "Когда телефон излучает сильнее всего?",
            options: [
                "1) При установлении соединения",
                "2) В режиме ожидания",
                "3) При разрядке батареи",
                "4) Ночью"
            ],
            correct: 0,
            explanation: "При установлении соединения телефон работает на максимальной мощности.",
            points: 1,
            difficulty: "medium"
        },
        {
            id: 19,
            type: "applications",
            text: "Какие волны используются в Wi-Fi?",
            options: [
                "1) Радиоволны (2.4-5 ГГц)",
                "2) Инфракрасные",
                "3) Ультрафиолетовые",
                "4) Рентгеновские"
            ],
            correct: 0,
            explanation: "Wi-Fi использует радиоволны частотой 2.4 ГГц и 5 ГГц.",
            points: 1,
            difficulty: "medium"
        },
        {
            id: 20,
            type: "applications",
            text: "Для чего используется GPS?",
            options: [
                "1) Определение местоположения",
                "2) Звонки",
                "3) Интернет",
                "4) Фотографии"
            ],
            correct: 0,
            explanation: "GPS использует радиоволны от спутников для определения координат.",
            points: 1,
            difficulty: "easy"
        },
        // ЗАДАНИЯ 21-30: СВОЙСТВА И ФИЗИКА ВОЛН
        {
            id: 21,
            type: "properties",
            text: "Что такое частота волны?",
            options: [
                "1) Количество колебаний в секунду",
                "2) Длина волны",
                "3) Скорость распространения",
                "4) Мощность излучения"
            ],
            correct: 0,
            explanation: "Частота измеряется в Герцах (Гц) - количество колебаний в секунду.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 22,
            type: "properties",
            text: "Как связаны частота и длина волны?",
            options: [
                "1) Чем больше частота, тем меньше длина",
                "2) Чем больше частота, тем больше длина",
                "3) Нет связи",
                "4) Прямо пропорциональны"
            ],
            correct: 0,
            explanation: "Частота и длина волны обратно пропорциональны: ν = c/λ.",
            points: 1,
            difficulty: "medium"
        },
        {
            id: 23,
            type: "properties",
            text: "Какие волны самые энергичные?",
            options: [
                "1) Гамма-лучи",
                "2) Радиоволны",
                "3) Инфракрасные",
                "4) Видимый свет"
            ],
            correct: 0,
            explanation: "Гамма-лучи имеют самую высокую частоту и энергию.",
            points: 1,
            difficulty: "medium"
        },
        {
            id: 24,
            type: "properties",
            text: "Могут ли ЭМ волны распространяться в вакууме?",
            options: [
                "1) Да, лучше всего",
                "2) Нет, нужна среда",
                "3) Только звуковые",
                "4) Только свет"
            ],
            correct: 0,
            explanation: "ЭМ волны не нуждаются в среде и лучше всего распространяются в вакууме.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 25,
            type: "history",
            text: "Кто открыл электромагнитные волны?",
            options: [
                "1) Генрих Герц",
                "2) Исаак Ньютон",
                "3) Альберт Эйнштейн",
                "4) Никола Тесла"
            ],
            correct: 0,
            explanation: "Генрих Герц экспериментально доказал существование ЭМ волн в 1887 году.",
            points: 1,
            difficulty: "medium"
        },
        {
            id: 26,
            type: "history",
            text: "Кто создал теорию электромагнитного поля?",
            options: [
                "1) Джеймс Максвелл",
                "2) Александр Попов",
                "3) Майкл Фарадей",
                "4) Мария Кюри"
            ],
            correct: 0,
            explanation: "Джеймс Максвелл создал теорию электромагнитного поля в 1860-х годах.",
            points: 1,
            difficulty: "medium"
        },
        {
            id: 27,
            type: "applications",
            text: "Что лечат с помощью рентгеновских лучей?",
            options: [
                "1) Диагностируют переломы",
                "2) Грипп",
                "3) Головную боль",
                "4) Аллергию"
            ],
            correct: 0,
            explanation: "Рентгеновские лучи используют для диагностики, но не для лечения.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 28,
            type: "applications",
            text: "Где используются микроволны кроме печей?",
            options: [
                "1) Радары и спутниковая связь",
                "2) Освещение",
                "3) Отопление домов",
                "4) Музыкальные колонки"
            ],
            correct: 0,
            explanation: "Микроволны используются в радарах, спутниковой связи и Wi-Fi.",
            points: 1,
            difficulty: "medium"
        },
        {
            id: 29,
            type: "applications",
            text: "Почему небо голубое?",
            options: [
                "1) Рассеяние синего света в атмосфере",
                "2) Отражение от океана",
                "3) Цвет атмосферы",
                "4) Солнечные пятна"
            ],
            correct: 0,
            explanation: "Короткие синие волны рассеиваются в атмосфере сильнее, чем длинные красные.",
            points: 1,
            difficulty: "medium"
        },
        {
            id: 30,
            type: "future",
            text: "Какое будущее у сотовой связи?",
            options: [
                "1) 6G и выше",
                "2) Возврат к проводной",
                "3) Отказ от связи",
                "4) Только спутниковая"
            ],
            correct: 0,
            explanation: "Развитие идет к 6G, что увеличит скорость и уменьшит задержки.",
            points: 1,
            difficulty: "easy"
        }
    ]
};

console.log(`✅ Загружено ${QUIZ_DATA.questions.length} заданий по физике`);

// 🛠️ СИСТЕМА МОДЕРАТОРОВ
window.moderatorSystem = {
    MODERATOR_PASSWORD: "Physics2025",
    
    isModerator() {
        return localStorage.getItem('isModerator') === 'true';
    },
    
    setModerator(status) {
        localStorage.setItem('isModerator', status);
        console.log(`🔧 Статус модератора: ${status ? 'ВКЛ' : 'ВЫКЛ'}`);
    },
    
    showPasswordModal() {
        const modalHTML = `
            <div id="moderatorModal" style="
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                padding: 20px;
            ">
                <div style="
                    background: #1a1a2e;
                    padding: 30px;
                    border-radius: 15px;
                    max-width: 400px;
                    width: 100%;
                    border: 3px solid #00adb5;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
                ">
                    <h3 style="color: #00ff88; text-align: center; margin-bottom: 20px;">
                        🔧 Режим модератора
                    </h3>
                    <p style="color: #8f8f8f; text-align: center; margin-bottom: 20px;">
                        Введите пароль для доступа к функциям модератора
                    </p>
                    <input type="password" 
                           id="moderatorPassword" 
                           placeholder="Пароль"
                           style="
                                width: 100%;
                                padding: 15px;
                                background: rgba(255,255,255,0.1);
                                border: 2px solid #393e46;
                                border-radius: 8px;
                                color: white;
                                font-size: 16px;
                                margin-bottom: 15px;
                           ">
                    <div style="display: flex; gap: 10px;">
                        <button onclick="moderatorSystem.checkPassword()" 
                                style="
                                    flex: 1;
                                    padding: 15px;
                                    background: #00adb5;
                                    color: white;
                                    border: none;
                                    border-radius: 8px;
                                    font-weight: bold;
                                    cursor: pointer;
                                ">
                            Войти
                        </button>
                        <button onclick="moderatorSystem.hideModal()"
                                style="
                                    padding: 15px 25px;
                                    background: #ff416c;
                                    color: white;
                                    border: none;
                                    border-radius: 8px;
                                    font-weight: bold;
                                    cursor: pointer;
                                ">
                            Отмена
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        setTimeout(() => {
            const input = document.getElementById('moderatorPassword');
            if (input) input.focus();
        }, 100);
    },
    
    checkPassword() {
        const input = document.getElementById('moderatorPassword');
        if (!input) return;
        
        if (input.value === this.MODERATOR_PASSWORD) {
            this.setModerator(true);
            this.hideModal();
            this.showModeratorControls();
            alert('✅ Вы вошли как модератор!');
        } else {
            alert('❌ Неверный пароль!');
            input.value = '';
            input.focus();
        }
    },
    
    hideModal() {
        const modal = document.getElementById('moderatorModal');
        if (modal) modal.remove();
    },
    
    showModeratorControls() {
        const style = document.createElement('style');
        style.textContent = `
            .moderator-badge {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: linear-gradient(135deg, #ff9e00, #ff6d00);
                color: white;
                padding: 10px 15px;
                border-radius: 25px;
                font-weight: bold;
                z-index: 9999;
                box-shadow: 0 4px 15px rgba(255, 106, 0, 0.3);
                display: flex;
                align-items: center;
                gap: 8px;
                cursor: pointer;
            }
            
            .moderator-panel {
                position: fixed;
                bottom: 80px;
                right: 20px;
                background: #1a1a2e;
                border: 2px solid #ff9e00;
                border-radius: 10px;
                padding: 15px;
                z-index: 9998;
                min-width: 250px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                display: none;
            }
            
            .moderator-panel.active {
                display: block;
            }
            
            .moderator-btn {
                width: 100%;
                padding: 10px;
                margin: 5px 0;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid #ff9e00;
                color: white;
                border-radius: 5px;
                cursor: pointer;
                text-align: left;
            }
        `;
        document.head.appendChild(style);
        
        if (!document.getElementById('moderatorBadge')) {
            const badge = document.createElement('div');
            badge.id = 'moderatorBadge';
            badge.className = 'moderator-badge';
            badge.innerHTML = '🔧 Модератор';
            badge.onclick = () => {
                const panel = document.getElementById('moderatorPanel');
                if (panel) panel.classList.toggle('active');
            };
            document.body.appendChild(badge);
            
            const panel = document.createElement('div');
            panel.id = 'moderatorPanel';
            panel.className = 'moderator-panel';
            panel.innerHTML = `
                <h4 style="color: #ff9e00; margin-top: 0; margin-bottom: 10px;">Управление игрой</h4>
                <button class="moderator-btn" onclick="moderatorSystem.kickLastPlayer()">
                    🚫 Удалить последнего
                </button>
                <button class="moderator-btn" onclick="moderatorSystem.listPlayers()">
                    📋 Список игроков
                </button>
                <button class="moderator-btn" onclick="moderatorSystem.resetGame()">
                    🔄 Сбросить игру
                </button>
                <button class="moderator-btn" onclick="moderatorSystem.exitModerator()">
                    🚪 Выйти
                </button>
            `;
            document.body.appendChild(panel);
        }
    },
    
    kickLastPlayer() {
        if (!window.currentGameId) {
            alert('Сначала создайте игру!');
            return;
        }
        
        db.ref(`games/${currentGameId}/players`).once('value').then(snapshot => {
            const players = snapshot.val();
            if (!players) {
                alert('Нет игроков в игре');
                return;
            }
            
            const playerNames = Object.keys(players);
            const lastPlayer = playerNames[playerNames.length - 1];
            
            if (confirm(`Удалить игрока "${lastPlayer}"?`)) {
                db.ref(`games/${currentGameId}/players/${lastPlayer}`).remove()
                    .then(() => alert(`Игрок ${lastPlayer} удален`));
            }
        });
    },
    
    listPlayers() {
        if (!window.currentGameId) {
            alert('Сначала создайте игру!');
            return;
        }
        
        db.ref(`games/${currentGameId}/players`).once('value').then(snapshot => {
            const players = snapshot.val();
            if (!players) {
                alert('Нет игроков');
                return;
            }
            
            const list = Object.keys(players).map(name => `• ${name}`).join('\n');
            alert(`Игроки (${Object.keys(players).length}):\n\n${list}`);
        });
    },
    
    resetGame() {
        if (!window.currentGameId) {
            alert('Нет активной игры');
            return;
        }
        
        if (confirm('Сбросить всю игру? Все данные будут удалены.')) {
            db.ref(`games/${currentGameId}`).remove()
                .then(() => {
                    alert('Игра сброшена');
                    window.currentGameId = null;
                });
        }
    },
    
    exitModerator() {
        this.setModerator(false);
        const badge = document.getElementById('moderatorBadge');
        const panel = document.getElementById('moderatorPanel');
        if (badge) badge.remove();
        if (panel) panel.remove();
        alert('Режим модератора выключен');
    }
};

console.log("✅ Система модераторов загружена");
console.log("🔑 Пароль: Physics2025");

// 🔧 ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ
document.addEventListener('DOMContentLoaded', function() {
    console.log("📚 Квиз по физике готов к работе!");
    console.log(`Тема: ${QUIZ_DATA.title}`);
    console.log(`Вопросов: ${QUIZ_DATA.questions.length}`);
    
    // Скрытая кнопка для модератора (Shift + M)
    document.addEventListener('keydown', function(e) {
        if (e.shiftKey && e.key === 'M') {
            moderatorSystem.showPasswordModal();
        }
    });
    
    console.log("🔧 Для входа модератора нажмите Shift+M");
});
