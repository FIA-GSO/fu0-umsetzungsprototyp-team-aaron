class loginData{
    constructor(name, password) {
        this.name = name
        this.password = password
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

    handleSubmit() {
        this.checkLogin();
    }

    checkLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        let enteredLoginData = new loginData(username, password)

        this.validLoginData.forEach(element => {
            if(element.isEqual(enteredLoginData))
            {
                console.log("huh")
                this.displaySuccessMessage()
                this.redirect()
                return
            }
        });
        
        this.displayErrorMessage()
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