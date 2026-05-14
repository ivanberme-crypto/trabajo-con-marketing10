const USERS = [
  { username: 'admin',   password: '1234'    },
  { username: 'usuario', password: 'pass123' }
];

document.getElementById('toggle-pass').addEventListener('click', function () {
  const input  = document.getElementById('password');
  const eyeOn  = document.getElementById('icon-eye');
  const eyeOff = document.getElementById('icon-eye-off');
  const visible = input.type === 'text';

  input.type           = visible ? 'password' : 'text';
  eyeOn.style.display  = visible ? '' : 'none';
  eyeOff.style.display = visible ? 'none' : '';
});

document.addEventListener('keydown', e => { if (e.key === 'Enter') handleLogin(); });

function clearErrors() {
  ['err-user', 'err-pass'].forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
  ['username', 'password'].forEach(id => {
    document.getElementById(id).classList.remove('error-input');
  });
}

function showError(errId, inputId) {
  document.getElementById(errId).style.display = 'flex';
  document.getElementById(inputId).classList.add('error-input');
}

function handleLogin() {
  clearErrors();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (!username) { showError('err-user', 'username'); return; }
  if (!password) { showError('err-pass', 'password'); return; }

  const user = USERS.find(u => u.username === username);

  if (!user)                     { showError('err-user', 'username'); return; }
  if (user.password !== password) { showError('err-pass', 'password'); return; }

  const btn = document.getElementById('login-btn');
  btn.innerHTML = `
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
      stroke-linecap="round" stroke-linejoin="round" style="animation:spin .7s linear infinite">
      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    </svg>
    Verificando...`;
  btn.classList.add('loading');

  setTimeout(() => {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('success').style.display = 'block';
    localStorage.setItem('notasapp_user', username);
    setTimeout(() => { window.location.href = 'dashboard.html'; }, 1400);
  }, 1000);
}
