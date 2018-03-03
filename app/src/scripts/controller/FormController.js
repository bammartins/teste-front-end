import cpfValidate from '../helper/CpfValidate.js';

class FormController{
    constructor(){
        this.nameField    = document.getElementById('name');
        this.emailField   = document.getElementById('email');
        this.cpfField     = document.getElementById('cpf');
        this.phoneField   = document.getElementById('phone');
        this.errorMessage = null;
        this.errorCount   = 0;
    }

    validateFillFields(){
        let inputs = document.querySelectorAll('.material-input');
        let count = 0;
        
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.length > 0) {
                count++;
            }            
        }

        if (count == inputs.length) {
            return true;
        }else{
            return false;
        }
    }

    validateFields(){
        const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        let cpfTest = new cpfValidate();
        if (this.nameField.value.length < 3) {
            this.errorMessage = "Campo deve conter 3 caracteres ou mais";
            document.getElementById('name-error').innerText = this.errorMessage;
            this.errorCount++;
        } else {
            this.errorCount--;
            document.getElementById('name-error').innerText = "";
        }
        if (cpfTest.validate(this.cpfField.value) == false) {
            this.errorMessage = "Este CPF não é válido";
            document.getElementById('cpf-error').innerText = this.errorMessage;
            this.errorCount++;
        } else {
            this.errorCount--;            
            document.getElementById('cpf-error').innerText = "";
        }
        if (!this.emailField.value.match(mailRegex)) {
            this.errorMessage = "Este Email não é válido";
            document.getElementById('email-error').innerText = this.errorMessage;
            this.errorCount++;
        } else {
            this.errorCount--;            
            document.getElementById('email-error').innerText = "";
        }
        if (this.phoneField.value == "") {
            this.errorMessage = "Este Telefone não é válido";
            document.getElementById('phone-error').innerText = this.errorMessage;
            this.errorCount++;
        } else {
            this.errorCount--;            
            document.getElementById('phone-error').innerText = "";
        }

        if (this.errorCount > 0) {
            return false;
        } else {
            return true;
        }
    }  
}

module.exports = FormController;