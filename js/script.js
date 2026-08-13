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
    nav_contacts: 'Контакты',
    online_word: 'онлайн',
    hero_badge: '✦ открыт к проектам',
    hero_role: '— веб-разработчик и дизайнер',
    hero_btn: 'Связаться со мной',
    about_title: 'Обо мне',
    about_text: 'Я начинающий web-разработчик и дизайнер bionic. Работаю с Python, HTML, C/C++ и другими языками.',
    works_title: 'Мои работы',
    card1_title: 'Проект 1',
    card1_text: 'Мои Telegram-боты.',
    card2_title: 'Проект 2',
    card2_text: 'Краткое описание проекта. Ссылка на работу добавляется внизу.',
    card3_title: 'Проект 3',
    card3_text: 'Краткое описание проекта. Ссылка на работу добавляется внизу.',
    view: 'Смотреть →',
    contacts_title: 'Связаться со мной',
    contacts_sub: 'Напишите мне — отвечаю быстро.',
    form_name: 'Ваше имя',
    form_email: 'Ваш email',
    form_message: 'Ваше сообщение',
    form_submit: 'Отправить',
    copied: '✓ скопировано',
    footer_rights: 'Все права защищены.',
    title: 'bionic — портфолио'
  },
  en: {
    nav_about: 'About',
    nav_works: 'Works',
    nav_contacts: 'Contact',
    online_word: 'online',
    hero_badge: '✦ open to projects',
    hero_role: '— web developer & designer',
    hero_btn: 'Contact me',
    about_title: 'About me',
    about_text: "I'm a beginner web developer and designer bionic. I work with Python, HTML, C/C++ and other languages.",
    works_title: 'My works',
    card1_title: 'Project 1',
    card1_text: 'My Telegram bots.',
    card2_title: 'Project 2',
    card2_text: 'Short project description. Link is added below.',
    card3_title: 'Project 3',
    card3_text: 'Short project description. Link is added below.',
    view: 'View →',
    contacts_title: 'Contact me',
    contacts_sub: 'Write me — I reply fast.',
    form_name: 'Your name',
    form_email: 'Your email',
    form_message: 'Your message',
    form_submit: 'Send',
    copied: '✓ copied',
    footer_rights: 'All rights reserved.',
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
  dot.style.animationDelay = Math.random() * 6 + 's';
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
