import userController from './UserController.js';
import eventController from './EventController.js';
import cpfValidate from '../helper/CpfValidate.js'

class FormController{
    constructor(){
        this.nameField    = document.getElementById('name').value;
        this.emailField   = document.getElementById('email').value;
        this.cpfField     = document.getElementById('cpf').value;
        this.phoneField   = document.getElementById('phone').value;
        this.errorMessage = null;
        this.cpfTest      = new cpfValidate();
        this.errorCount   = 0;
    }
    validateFillFields(){
        const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if(this.nameField.length < 3){
            this.errorMessage = "Campo deve conter 3 caracteres ou mais";
            document.getElementById('name-error').innerText = this.errorMessage;
            this.errorCount++;
        }
        if(this.cpfTest.validate(this.cpfField) == false){
            this.errorMessage = "Este CPF não é válido";
            document.getElementById('name-error').innerText = this.errorMessage;
            this.errorCount++;            
        }
        if(!this.emailField.match(mailRegex)){
            this.errorMessage = "Este Email não é válido";
            document.getElementById('email-error').innerText = this.errorMessage;
            this.errorCount++;            
        }
        if(this.phoneField == ""){
            this.errorMessage = "Este Telefone não é válido";
            document.getElementById('phone-error').innerText = this.errorMessage;
            this.errorCount++;
        }
    }
}

module.exports = FormController;