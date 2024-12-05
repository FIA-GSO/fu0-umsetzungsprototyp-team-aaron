document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    // Simple validation (for demonstration purposes)
    if (username === 'admin' && password === 'password') {
        message.textContent = 'Login erfolgreich!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Ungültiger Benutzername oder Passwort.';
    }
});
