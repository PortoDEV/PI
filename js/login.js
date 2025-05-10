const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (username === 'admin@gmail.com' && password === '1234') {
        alert('Login bem-sucedido!');
        window.location.href = './pages/home.html'; 
    } else {
        alert('Usuário ou senha inválidos.');
    }
});