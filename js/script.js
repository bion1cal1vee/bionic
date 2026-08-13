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

const typedText = document.getElementById('typed-text');
const phrases = [
  'Создаю современные сайты и Telegram-ботов.',
  'Люблю Python, HTML и дизайн.',
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
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

const visitsEl = document.getElementById('visits-count');

async function loadVisits() {
  try {
    const res = await fetch('https://api.countapi.xyz/hit/bion1cal1vee-bionic/visits');
    const data = await res.json();
    visitsEl.textContent = data.value.toLocaleString('ru-RU');
  } catch (e) {
    visitsEl.textContent = '—';
  }
}

loadVisits();

const onlineEl = document.getElementById('online-count');

if (typeof firebase !== 'undefined') {
  firebase.initializeApp({
    apiKey: "AIzaSyCcst4P7mGpoQ7imUE0ObiHtN8VAb7fBSQ",
    authDomain: "bionic-site.firebaseapp.com",
    databaseURL: "https://bionic-site-default-rtdb.firebaseio.com",
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

  function heartbeat() {
    presenceRef.set(firebase.database.ServerValue.TIMESTAMP);
  }

  function cleanup(snap) {
    const now = Date.now();
    const stale = [];
    let count = 0;

    snap.forEach((child) => {
      const ts = child.val();
      if (typeof ts === 'number' && now - ts > 30000) {
        stale.push(child.ref);
      } else {
        count++;
      }
    });

    stale.forEach((ref) => ref.remove());

    realOnline = count;
    onlineEl.textContent = count;
  }

  db.ref('online').on('value', cleanup);
  heartbeat();
  setInterval(heartbeat, 10000);

  let online = Math.floor(Math.random() * 8) + 3;

  function updateOnline() {
    if (realOnline !== null) return;
    const delta = Math.floor(Math.random() * 3) - 1;
    online = Math.max(2, Math.min(18, online + delta));
    onlineEl.textContent = online;
    setTimeout(updateOnline, 4000);
  }

  updateOnline();
}

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
