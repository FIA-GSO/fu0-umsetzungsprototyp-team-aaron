class login {
    message = document.getElementById('message');

    handleSubmit = function () {
        this.checkLogin();
    }

    checkLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'password') {
            this.displaySuccessMessage()
            this.redirect()
        } else {
            this.displayErrorMessage()
        }
    }

    displayErrorMessage() {
        message.textContent = 'Ungültiger Benutzername oder Passwort';
    }

    displaySuccessMessage() {
        const message = document.getElementById('message');
        
        message.textContent = 'Login erfolgreich!';
        message.style.color = 'green';
    }

    redirect() {
        window.location.href = "./index.html";
    }
    
}

login = new login()
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    login.handleSubmit();
})
