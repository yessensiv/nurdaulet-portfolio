(() => {
  let saved;
  try { saved = localStorage.getItem('portfolio-language'); } catch {}
  const requested = new URLSearchParams(location.search).get('lang');
  const lang = (requested || saved) === 'en' ? 'en' : 'ru';
  const dictionary = {
    'Skip to content':'Перейти к содержимому','About Me':'Обо мне','Services':'Услуги','Projects':'Проекты','Contact':'Контакты','Home':'Главная','Works':'Работы',
    '/Quick links':'/Навигация','/Contact':'/Контакты','Back to top ↗':'Наверх ↗','Ideas into':'От идей —','digital experiences.':'к цифровому опыту.',
    'Featured':'Избранные','Selected':'Избранные','Projects':'Проекты','Work.':'работы.','View All Work':'Все проекты','Hey!':'Привет!','Get in touch':'Связаться','Thoughts':'Заметки','How I work.':'Как я работаю.',
    'Let’s talk.':'Давай обсудим.','Have an idea, a project, or just want to say hello? Let’s start a conversation.':'Есть идея, проект или просто хочется поздороваться? Давай начнём разговор.',
    'Name':'Имя','Email':'Электронная почта','Your name':'Твоё имя','Your Project':'Твой проект','Tell me a little about your idea…':'Расскажи немного о своей идее…','Prepare email':'Подготовить письмо','Opens your email app with a prepared message.':'Откроется почтовое приложение с готовым письмом.',
    'All projects':'Все проекты','Visit project':'Открыть проект','View on GitHub':'Код на GitHub','Explore GitHub':'Посмотреть GitHub','Message on Telegram':'Написать в Telegram',
    'Code, projects, experiments—':'Код, проекты, эксперименты —','explore what I’m building.':'посмотри, что я создаю.',
    'Web experiences, Android apps, and AI tools. A selection of my projects and experiments.':'Сайты, Android-приложения и инструменты с ИИ. Мои проекты и эксперименты.',
    'Pause animation':'Остановить анимацию','Resume animation':'Продолжить анимацию','Pause title animation':'Остановить анимацию заголовка','Resume title animation':'Продолжить анимацию заголовка','Open navigation':'Открыть меню','Close navigation':'Закрыть меню',
    'SOFTWARE':'ВЕБ','FRONTEND':'ФРОНТЕНД','ANDROID':'ANDROID','CREATIVE':'КРЕАТИВНЫЙ','AI':'ИИ','DEVELOPER':'РАЗРАБОТЧИК','Developer — Nurdaulet Yessensary':'Разработчик — Nurdaulet Yessensary',
    'Web Development':'Веб-разработка','Creative Development':'Креативная разработка','Android Development':'Android-разработка','AI Tools':'Инструменты с ИИ','Native Apps':'Нативные приложения','Mobile':'Мобильная разработка','Document Assistants':'Работа с документами','Motion':'Анимация',
    'Start with why.':'Начинаю с идеи.','Keep it simple.':'Делаю проще.','Build with care.':'Внимание к деталям.','Keep exploring.':'Продолжаю искать.',
    'Understand the idea, the people it serves, and the problem worth solving.':'Разбираюсь в идее, её аудитории и задаче, которую стоит решить.',
    'Give every element a purpose. Make the important things easy to find and use.':'У каждого элемента есть цель. Важное должно быть легко найти и использовать.',
    'Think about the small screens, the keyboard users, and the details between the clicks.':'Учитываю маленькие экраны, управление с клавиатуры и детали каждого взаимодействия.',
    'Try a different approach. Learn something new. Make the next version a little better.':'Пробую другие подходы, изучаю новое и делаю следующую версию лучше.',
    'I’m Nurdaulet Yessensary — also known as yessensiv. I build web experiences, explore Android, and make AI tools.':'Я Nurdaulet Yessensary, также известный как yessensiv. Создаю сайты, изучаю Android и разрабатываю инструменты с ИИ.',
    'I work with Next.js and TypeScript on the web, explore Android with Kotlin, and build AI tools with Python.':'Для веба использую Next.js и TypeScript, для Android — Kotlin, а инструменты с ИИ создаю на Python.',
    'My projects span mathematics education, document assistants, and websites with motion. Code. Learn. Build. Repeat.':'Среди моих проектов — обучение математике, помощники для документов и сайты с анимацией. Пишу код. Учусь. Создаю. Повторяю.',
    'From an idea to something real. A place for thoughtful digital experiences, useful tools, and a little creative curiosity.':'От идеи до работающего проекта. Продуманный цифровой опыт, полезные инструменты и немного творческого любопытства.',
    'Learning, one step at a time':'Учиться шаг за шагом','Lessons, practice, and a personal learning route for mathematics.':'Уроки, практика и персональный маршрут изучения математики.',
    'Documents into understanding':'От документов к пониманию','Exploring summaries and questions with a Telegram document assistant.':'Краткие пересказы и ответы на вопросы с помощью Telegram-ассистента.',
    'A little':'Немного','off track.':'не туда.','This page doesn’t exist. Let’s get you back to the portfolio.':'Такой страницы нет. Вернёмся в портфолио.','Back home':'На главную',
    'AI city simulator · HackAlem AI — 94 points':'ИИ-симулятор города · HackAlem AI — 94 балла','Robot concept · Interactive 3D':'Концепт робота · Интерактивная 3D-модель','Creative tool · ASCII art studio':'Творческий инструмент · ASCII-арт','Personal tools · Journal & goals':'Личные инструменты · Блокнот и цели','Portfolio · Motion & design':'Портфолио · Анимация и дизайн','Brand website · Independent concept':'Сайт бренда · Независимый концепт','Portfolio · Creative development':'Портфолио · Креативная разработка','Education · Web platform':'Образование · Веб-платформа','Healthcare · Website demo':'Стоматология · Демо сайта','AI · Document assistant':'ИИ · Помощник для документов','Android · Video & audio':'Android · Видео и аудио','This Portfolio':'Это портфолио'
  };
  const descriptions = {
    'akim-ai':'Командный проект 3-Musketeers для HackAlem AI / Astana Innovations, получивший 94 балла. Учебный симулятор управления городом: выбери пять инициатив для пяти условных районов Астаны в рамках бюджета в 100 единиц, сравни сценарии и оцени влияние на качество жизни. Детерминированный движок на Python проверяет ограничения и рассчитывает оценку, а ИИ-советник объясняет компромиссы и проверенные альтернативы. Есть интерактивная схема районов, сравнение сценариев, экспорт JSON и демонстрационная таблица лидеров. Данные районов и эффекты решений синтетические. GitHub-форк сохраняет код и историю команды.',
    riov:'Авторский концепт сервисного робота с адаптивным лендингом и интерактивным просмотром на Three.js. Детализированный корпус, панорамный визор, ручку и четыре колеса можно рассмотреть с помощью вращения на 360°, масштабирования, готовых ракурсов и сравнения с рендером. Айдентика, созданные с помощью ИИ изображения и экспортируемая GLB-модель объединяют дизайн и цифровой опыт. Это визуальный концепт, а не изготовленный продукт или производственный CAD-чертёж.',
    'glyph-lab':'Браузерная студия для преобразования JPG, PNG, WebP и GIF в ASCII-арт. Настраивай плотность символов, яркость, контраст, цвет и дизеринг, сравнивай результат и экспортируй TXT, PNG или SVG. Изображения обрабатываются локально на устройстве. Есть русский и английский интерфейсы.',
    within:'Личный блокнот и коллекция целей с Markdown-записями, воспоминаниями, поиском и спокойным тёмным интерфейсом. React, Vite и TypeScript, локальный деморежим и возможность подключения Supabase.',
    'san-portfolio':'Многоязычное портфолио сайтов, приложений и графического дизайна. Тёмный интерфейс, композиция SAN на canvas, плавная прокрутка и галерея проектов. Доступны русский, казахский и английский языки.',
    'zaga-zaga':'Независимый дизайн-концепт сайта напитков с выразительной типографикой, интерактивными CSS-макетами банок, выбором вкусов и адаптивной вёрсткой. Это неофициальный концепт, не означающий сотрудничества с брендом.',
    'nurdaulet-portfolio':'Портфолио, которое ты сейчас смотришь: дизайн по мотивам Framer, реализованный на HTML, CSS и JavaScript. Смена специализаций, анимация портрета, плавная прокрутка, авторские обложки проектов и адаптация для телефона.',
    'ent-math':'Платформа для изучения математики в 5–11 классах и подготовки к ЕНТ в Казахстане. Уроки, практика, диагностика и отслеживание прогресса собраны в одном месте. Интерфейсы на русском и казахском языках.',
    dentalux:'Демонстрационный многостраничный сайт стоматологии на Next.js и TypeScript. Адаптивная вёрстка, анимации и понятная информация об услугах. Это проект для портфолио: формы клиники не отправляют заявки.',
    docmind:'Telegram-помощник для краткого пересказа TXT-документов и ответов на вопросы по их содержимому. Написан на Python, поддерживает локальный деморежим и работу через API, изоляцию документов и настраиваемые лимиты.',
    flow:'Android-приложение для загрузки видео и аудио на Kotlin. Выбор доступных форматов, прогресс загрузки и локальная библиотека сохранённых файлов. В репозитории также есть экспериментальный веб-прототип.'
  };
  const t = value => lang === 'ru' ? dictionary[value] || value : value;
  if(lang==='ru') {
    const translate = value => Array.isArray(value) ? value.map(translate) : value && typeof value==='object' ? Object.fromEntries(Object.entries(value).map(([key,item])=>[key,translate(item)])) : typeof value==='string' ? t(value) : value;
    window.portfolio = translate(window.portfolio);
    window.portfolio.projects.forEach(project=>{project.description=descriptions[project.slug] || project.description;});
  }
  document.documentElement.lang=lang;
  window.portfolioI18n = {lang,t,apply(){
    if(lang==='ru') {
      const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
      const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(node=>{if(!node.parentElement.closest('script,style')) {const key=node.textContent.trim();if(dictionary[key]) node.textContent=node.textContent.replace(key,t(key));node.textContent=node.textContent.replace(' · Project notes',' · О проекте');}});
      document.querySelectorAll('[placeholder],[aria-label]').forEach(el=>['placeholder','aria-label'].forEach(attr=>{if(el.hasAttribute(attr))el.setAttribute(attr,t(el.getAttribute(attr)));}));
      document.title=document.title.replace('Work —','Работы —').replace('Developer','Разработчик').replace('Page not found','Страница не найдена');
    }
    const switcher=document.createElement('div');switcher.className='language-switch';switcher.setAttribute('role','group');switcher.setAttribute('aria-label',lang==='ru'?'Язык сайта':'Site language');
    ['en','ru'].forEach(code=>{const button=document.createElement('button');button.type='button';button.textContent=code.toUpperCase();button.setAttribute('aria-pressed',String(lang===code));button.addEventListener('click',()=>{try{localStorage.setItem('portfolio-language',code);}catch{} const url=new URL(location.href);url.searchParams.set('lang',code);location.href=url.href;});switcher.append(button);});
    document.querySelector('.navigation').append(switcher);
  }};
})();
