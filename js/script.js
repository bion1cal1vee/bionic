const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((el) => observer.observe(el));

const translations = {
  ru: {
    nav_about: 'Обо мне',
    nav_works: 'Работы',
    nav_services: 'Услуги',
    nav_contacts: 'Контакты',
    online_word: 'онлайн',
    hero_badge: '✦ открыт к проектам',
    hero_tagline: 'боты · сайты · дизайн',
    hero_btn: 'Связаться со мной',
    about_title: 'Обо мне',
    about_text: 'Я начинающий web-разработчик и дизайнер bionic. Работаю с Python, HTML, C/C++ и другими языками.',
    how_title: 'Как я работаю',
    step1_title: 'Обсуждение',
    step1_text: 'Вы рассказываете, что нужно. Обсуждаем задачу, сроки и бюджет.',
    step2_title: 'Макет',
    step2_text: 'Показываю структуру и дизайн, согласовываем детали.',
    step3_title: 'Разработка',
    step3_text: 'Собираю сайт или бота, делаю адаптивную вёрстку.',
    step4_title: 'Запуск и поддержка',
    step4_text: 'Публикую проект и остаюсь на связи для правок.',
    works_title: 'Мои работы',
    card1_title: 'Форма связи → Telegram',
    card1_text: 'Форма обратной связи на сайте отправляет сообщения мне в Telegram. Сервер на Python (Flask), хостинг PythonAnywhere.',
    card2_title: 'Погодный бот',
    card2_text: 'Telegram-бот: напишите город, отправьте геопозицию или нажмите кнопку — температура, шанс осадков и прогноз на 5 дней. Python (Flask) + OpenWeatherMap, вебхук на PythonAnywhere.',
    view: 'Смотреть →',
    contacts_title: 'Связаться со мной',
    contacts_sub: 'Напишите мне — отвечаю быстро.',
    form_name: 'Ваше имя',
    form_email: 'Ваш email',
    form_message: 'Ваше сообщение',
    form_submit: 'Отправить',
    form_success: '✓ Спасибо! Я свяжусь с вами.',
    form_error: 'Ошибка отправки. Напишите мне в Telegram.',
    copied: '✓ скопировано',
    footer_rights: 'Все права защищены.',
    services_title: 'Услуги и цены',
    services_sub: 'Прозрачные цены без скрытых платежей. Напишите — обсудим ваш проект.',
    price1_title: 'Сайт-визитка',
    price1_price: 'от 499 ₽',
    price1_1: '1–5 страниц',
    price1_2: 'Адаптивность: телефон и ПК',
    price1_3: 'Форма связи в Telegram',
    price1_4: 'Бесплатные правки 7 дней',
    price2_title: 'Telegram-бот',
    price2_price: 'от 699 ₽',
    price2_1: 'Запись, заказы, консультации',
    price2_2: 'Кнопки и меню',
    price2_3: 'Поддержка геопозиции',
    price2_4: 'Деплой на сервер',
    price3_title: 'Доработка и поддержка',
    price3_price: 'от 500 ₽',
    price3_1: 'Правки и новые страницы',
    price3_2: 'Новые функции на сайте',
    price3_3: 'Техподдержка после запуска',
    price3_4: 'Быстрый срок',
    price_badge: 'Популярно',
    price_btn: 'Заказать',
    reviews_title: 'Отзывы',
    rev1_text: '«Сделал сайт-визитку быстро и аккуратно. Всё работает, клиенты находят нас через интернет.»',
    rev1_name: 'Анна',
    rev1_role: 'Студия маникюра',
    rev2_text: '«Заказал Telegram-бота для записи клиентов. Работает отлично, клиенты сами выбирают время.»',
    rev2_name: 'Дмитрий',
    rev2_role: 'Барбершоп',
    rev3_text: '«Всё объяснил простыми словами, сделал в срок и потом ещё обучил пользоваться.»',
    rev3_name: 'Елена',
    rev3_role: 'Репетитор',
    title: 'bionic — портфолио'
  },
  en: {
    nav_about: 'About',
    nav_works: 'Works',
    nav_services: 'Services',
    nav_contacts: 'Contact',
    online_word: 'online',
    hero_badge: '✦ open to projects',
    hero_tagline: 'bots · websites · design',
    hero_btn: 'Contact me',
    about_title: 'About me',
    about_text: "I'm a beginner web developer and designer bionic. I work with Python, HTML, C/C++ and other languages.",
    how_title: 'How I work',
    step1_title: 'Discuss',
    step1_text: 'You tell me what you need. We discuss the task, timeline and budget.',
    step2_title: 'Mockup',
    step2_text: 'I show the structure and design, we agree on the details.',
    step3_title: 'Development',
    step3_text: 'I build the site or bot with a responsive layout.',
    step4_title: 'Launch & support',
    step4_text: 'I publish the project and stay in touch for edits.',
    works_title: 'My works',
    card1_title: 'Contact form → Telegram',
    card1_text: 'The site contact form sends messages to my Telegram. Backend in Python (Flask), hosted on PythonAnywhere.',
    card2_title: 'Weather bot',
    card2_text: 'Telegram bot: type a city, share your location or tap a button — temperature, chance of precipitation and 5-day forecast. Python (Flask) + OpenWeatherMap, webhook on PythonAnywhere.',
    view: 'View →',
    contacts_title: 'Contact me',
    contacts_sub: 'Write me — I reply fast.',
    form_name: 'Your name',
    form_email: 'Your email',
    form_message: 'Your message',
    form_submit: 'Send',
    form_success: '✓ Thanks! I will contact you.',
    form_error: 'Send failed. Write to me on Telegram.',
    copied: '✓ copied',
    footer_rights: 'All rights reserved.',
    services_title: 'Services & prices',
    services_sub: 'Transparent pricing, no hidden fees. Write me — let us discuss your project.',
    price1_title: 'Business website',
    price1_price: 'from 499 ₽',
    price1_1: '1–5 pages',
    price1_2: 'Responsive: mobile & desktop',
    price1_3: 'Contact form to Telegram',
    price1_4: 'Free edits for 7 days',
    price2_title: 'Telegram bot',
    price2_price: 'from 699 ₽',
    price2_1: 'Booking, orders, consultations',
    price2_2: 'Buttons & menu',
    price2_3: 'Location support',
    price2_4: 'Server deployment',
    price3_title: 'Edits & support',
    price3_price: 'from 500 ₽',
    price3_1: 'Edits and new pages',
    price3_2: 'New features on your site',
    price3_3: 'Support after launch',
    price3_4: 'Fast turnaround',
    price_badge: 'Popular',
    price_btn: 'Order',
    reviews_title: 'Reviews',
    rev1_text: '“He built my business website fast and neatly. Everything works, clients find us online.”',
    rev1_name: 'Anna',
    rev1_role: 'Nail studio',
    rev2_text: '“I ordered a Telegram bot for booking clients. Works great, clients pick a time themselves.”',
    rev2_name: 'Dmitry',
    rev2_role: 'Barbershop',
    rev3_text: '“He explained everything in simple words, delivered on time and then taught me how to use it.”',
    rev3_name: 'Elena',
    rev3_role: 'Tutor',
    title: 'bionic — portfolio'
  }
};

const langOptions = document.querySelectorAll('.lang-option');
let currentLang = localStorage.getItem('bionic-lang') || 'ru';
let lastVisits = null;
let renderVisitsWord = function () {};

const typedText = document.getElementById('typed-text');
const phraseSets = {
  ru: ['Создаю современные сайты и Telegram-ботов.', 'Люблю Python, HTML и дизайн.'],
  en: ['I build modern websites and Telegram bots.', 'I love Python, HTML and design.']
};
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;
let typeToken = 0;

function startTyping() {
  typeToken++;
  phraseIndex = 0;
  charIndex = 0;
  deleting = false;
  const token = typeToken;
  const phrases = phraseSets[currentLang];

  function type() {
    if (token !== typeToken) return;
    const current = phrases[phraseIndex];

    if (!deleting) {
      typedText.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(type, 2200);
        return;
      }
      setTimeout(type, 60);
    } else {
      typedText.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 400);
        return;
      }
      setTimeout(type, 30);
    }
  }

  type();
}

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('bionic-lang', lang);
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t[el.dataset.i18n] || el.textContent;
  });

  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    el.placeholder = t[el.dataset.i18nPh] || el.placeholder;
  });

  document.title = t.title;
  langOptions.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  startTyping();
  renderVisitsWord();
}

langOptions.forEach((btn) => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

applyLang(currentLang);

const themeOptions = document.querySelectorAll('.theme-option');
const savedTheme = localStorage.getItem('bionic-theme') || 'dark';

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  themeOptions.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.themeOpt === theme);
  });
  localStorage.setItem('bionic-theme', theme);
}

themeOptions.forEach((btn) => {
  btn.addEventListener('click', () => applyTheme(btn.dataset.themeOpt));
});

applyTheme(savedTheme);

const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', (e) => {
  if (nav.classList.contains('open') && !nav.contains(e.target) && !burger.contains(e.target)) {
    nav.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

const copyMail = document.getElementById('copy-mail');
const copyTip = document.getElementById('copy-tip');

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  return new Promise((resolve, reject) => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand('copy');
      resolve();
    } catch (err) {
      reject(err);
    }
    ta.remove();
  });
}

copyMail.addEventListener('click', (e) => {
  e.preventDefault();
  copyText(copyMail.textContent.trim()).then(() => {
    copyTip.textContent = translations[currentLang].copied;
    copyTip.classList.add('show');
    setTimeout(() => copyTip.classList.remove('show'), 2000);
  });
});

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const payload = {
    name: contactForm.name.value.trim(),
    email: contactForm.email.value.trim(),
    message: contactForm.message.value.trim()
  };

  formStatus.textContent = '';
  formStatus.classList.remove('error');

  fetch('https://bionic1.pythonanywhere.com/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then((res) => res.json())
    .then((data) => {
      formStatus.textContent = translations[currentLang][data.ok ? 'form_success' : 'form_error'];
      formStatus.classList.toggle('error', !data.ok);
      if (data.ok) contactForm.reset();
    })
    .catch(() => {
      formStatus.textContent = translations[currentLang].form_error;
      formStatus.classList.add('error');
    });
});

const onlineEls = document.querySelectorAll('.online-count');

if (typeof firebase !== 'undefined') {
  firebase.initializeApp({
    apiKey: "AIzaSyCcst4P7mGpoQ7imUE0ObiHtN8VAb7fBSQ",
    authDomain: "bionic-site.firebaseapp.com",
    databaseURL: "https://bionic-site-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bionic-site",
    storageBucket: "bionic-site.firebasestorage.app",
    messagingSenderId: "499266973339",
    appId: "1:499266973339:web:faace03feeea77b705203e"
  });

  const db = firebase.database();
  const storageKey = 'bionic-visitor-id';
  let visitorId = sessionStorage.getItem(storageKey);
  if (!visitorId) {
    visitorId = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem(storageKey, visitorId);
  }
  const presenceRef = db.ref('online/' + visitorId);

  let realOnline = null;

  const visitsEls = document.querySelectorAll('.visits-count');
  const visitsWordEls = document.querySelectorAll('.visits-word');
  const countedKey = 'bionic-visit-counted';
  const visitForms = {
    ru: ['визит', 'визита', 'визитов'],
    en: ['visit', 'visits', 'visits']
  };

  renderVisitsWord = function () {
    if (lastVisits === null) return;
    const word = plural(lastVisits, visitForms[currentLang]);
    visitsWordEls.forEach((el) => {
      el.textContent = word;
    });
  };

  function plural(n, forms) {
    const abs = Math.abs(n) % 100;
    const d = abs % 10;
    if (abs > 10 && abs < 20) return forms[2];
    if (d > 1 && d < 5) return forms[1];
    if (d === 1) return forms[0];
    return forms[2];
  }

  async function initOnlineCounter() {
    try {
      await firebase.auth().signInAnonymously();
    } catch (e) {}

    try {
      const visitsRef = db.ref('visits');

      if (!localStorage.getItem(countedKey)) {
        visitsRef.set(firebase.database.ServerValue.increment(1));
        localStorage.setItem(countedKey, '1');
      }

      visitsRef.on('value', (snap) => {
        const v = snap.val() || 0;
        lastVisits = v;
        const text = v.toLocaleString(currentLang === 'ru' ? 'ru-RU' : 'en-US');
        visitsEls.forEach((el) => {
          el.textContent = text;
        });
        renderVisitsWord();
      });
    } catch (e) {
      visitsEl.textContent = '—';
    }

    db.ref('online').on('value', cleanup);
    heartbeat();
    setInterval(heartbeat, 3000);
  }

  initOnlineCounter();

  function heartbeat() {
    presenceRef.set(firebase.database.ServerValue.TIMESTAMP);
  }

  function cleanup(snap) {
    const now = Date.now();
    const stale = [];
    let count = 0;

    snap.forEach((child) => {
      const ts = child.val();
      if (typeof ts === 'number' && now - ts <= 8000) {
        count++;
      } else {
        stale.push(child.ref);
      }
    });

    stale.forEach((ref) => ref.remove());

    realOnline = count;
    onlineEls.forEach((el) => {
      el.textContent = count;
    });
  }

  let online = Math.floor(Math.random() * 8) + 3;

  function updateOnline() {
    if (realOnline !== null) return;
    const delta = Math.floor(Math.random() * 3) - 1;
    online = Math.max(2, Math.min(18, online + delta));
    onlineEls.forEach((el) => {
      el.textContent = online;
    });
    setTimeout(updateOnline, 4000);
  }

  updateOnline();
}

const toTop = document.getElementById('to-top');

window.addEventListener('scroll', () => {
  toTop.classList.toggle('visible', window.scrollY > 400);
});

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const hero = document.querySelector('.hero');
const particleCount = 40;

for (let i = 0; i < particleCount; i++) {
  const dot = document.createElement('span');
  dot.className = 'particle';
  dot.style.left = Math.random() * 100 + '%';
  dot.style.top = Math.random() * 100 + '%';
  dot.style.animationDelay = -Math.random() * 6 + 's';
  dot.style.animationDuration = 5 + Math.random() * 6 + 's';
  hero.appendChild(dot);
}

const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${y * -8}deg) translateY(-8px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
