class loginData{
    constructor(name, password) {
        this.name = name
        this.password = password
        localStorage.setItem(name, password)
    }

    getName() {
        return this.name;
    }

    getPassword() {
        return this.password;
    }

    isEqual(login) {
        return this.getName() == login.getName() && this.getPassword() == login.getPassword()
    }
}

class login {
    message = document.getElementById('message');
    
    validLoginData = [
        new loginData("admin", "password"),
        new loginData("simon", "pokemänners"),
        new loginData("aaron", "weisserMonsterEnergy"),
        new loginData("sören", "gameBoyZocken123"),
        new loginData("grigorij", ":(:(:(:(")
    ]

    checkLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        let enteredLoginData = new loginData(username, password)

        let isLoginValid = false //this.validLoginData.some(element => element.isEqual(enteredLoginData));

        if(password == localStorage.getItem(username)){
            isLoginValid = true
        }

        if(isLoginValid) {
            this.displaySuccessMessage()
            this.redirect()
        }
        else {
            this.displayErrorMessage()
        }
    }

    displayErrorMessage() {
        message.textContent = 'Ungültiger Benutzername oder Passwort';
        message.style.color = 'red';
    }

    displaySuccessMessage() {        
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
    login.checkLogin();
})