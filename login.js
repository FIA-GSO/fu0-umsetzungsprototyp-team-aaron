document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === 'admin' && password === 'password') {
        message.textContent = 'Login erfolgreich!';
        message.style.color = 'green';
        window.location.href = "./index.html";
    } else {
        message.textContent = 'Ungültiger Benutzername oder Passwort';
    }
});
