const apiUrl = 'http://localhost:5000/api';

// Função de login
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.token) {
      localStorage.setItem('token', data.token);
      window.location.href = 'feed.html';
    }
  });
}

// Função de registro
function register() {
  const name = document.getElementById('name').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;

  fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, username, email, password })
  })
  .then(response => response.json())
  .then(data => {
    alert('Registrado com sucesso!');
  });
}

// Função de criação de post
function createPost() {
  const content = document.getElementById('postContent').value;

  fetch(`${apiUrl}/posts`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({ content })
  })
  .then(response => response.json())
  .then(() => {
    alert('Post criado com sucesso!');
    document.getElementById('postContent').value = '';
  });
}
