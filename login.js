document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Credenciais corretas: ciclo / quintas
        if (username === 'ciclo' && password === 'quintas') {
            // Redireciona para a página principal
            window.location.href = 'main.html';
        } else {
            // Exibe mensagem de erro
            errorMessage.textContent = 'Login ou senha inválidos.';
        }
    });
});
