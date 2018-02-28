import userController from './UserController.js';

class EventHandler{
    constructor(){
        this.user = new userController();
    }

    buttonClick(){
        let button  = document.getElementById('send');

        button.addEventListener('click', (e)=>{            
            e.preventDefault();
            e.stopPropagation();
            let nameField  = document.getElementById('name').value;
            let emailField = document.getElementById('email').value;
            let cpfField   = document.getElementById('cpf').value;
            let phoneField = document.getElementById('phone').value;

            this.user.set(nameField, emailField, cpfField, phoneField);
        });  
    }
}

module.exports = EventHandler;