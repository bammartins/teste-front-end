import cpfValidate from '../helper/CpfValidate.js';
import formValidate from "../utils/FormValidate.js";

class FormController{
    constructor(){
        this.nameField    = document.getElementById('name');
        this.emailField   = document.getElementById('email');
        this.cpfField     = document.getElementById('cpf');
        this.phoneField   = document.getElementById('phone');
        this.errorMessage = null;
        this.error        = false;
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
        const validateForm = new formValidate()
        if (!validateForm.validateName(this.nameField.value)) {
            this.nameField.classList.add('error');
            this.errorMessage = "Campo deve conter 3 caracteres ou mais";
            document.getElementById('name-error').innerText = this.errorMessage;
            this.error = true;
        } else {
            this.nameField.classList.remove('error');            
            this.error = false;
            document.getElementById('name-error').innerText = "";
        }
        if (!validateForm.validateCpf(this.cpfField.value)) {
            this.cpfField.classList.add('error');
            this.errorMessage = "Este CPF não é válido";
            document.getElementById('cpf-error').innerText = this.errorMessage;
            this.error = true;
        } else {
            this.cpfField.classList.remove('error');
            this.error = false;        
            document.getElementById('cpf-error').innerText = "";
        }
        if (!validateForm.validateEmail(this.emailField.value)) {
            this.emailField.classList.add('error');
            this.errorMessage = "Este Email não é válido";
            document.getElementById('email-error').innerText = this.errorMessage;
            this.error = true;
        } else {
            this.emailField.classList.remove('error');
            this.error = false;         
            document.getElementById('email-error').innerText = "";
        }
        if (!validateForm.validatePhone(this.phoneField.value)) {
            this.phoneField.classList.add('error');
            this.errorMessage = "Este Telefone não é válido";
            document.getElementById('phone-error').innerText = this.errorMessage;
            this.error = true;
        } else {
            this.phoneField.classList.remove('error');
            this.error = false;            
            document.getElementById('phone-error').innerText = "";
        }

        return this.error;
    }
    
    editForm() {
        const urlParam = window.location;
        const parameter = urlParam.search.substring(1);
        let id = null;
        const button = document.getElementById('send');
        if (parameter != "") {
            const userList = JSON.parse(localStorage.getItem('users'));
            id = parameter.split('=');

            for (let i = 0; i < userList.length; i++) {
                if (parseInt(id[1]) == userList[i].id) {
                    this.nameField.value = userList[i].name;
                    this.emailField.value = userList[i].email;
                    this.cpfField.value = userList[i].cpf;
                    this.phoneField.value = userList[i].phone;

                    this.nameField.classList.add('has-value');
                    this.emailField.classList.add('has-value');
                    this.cpfField.classList.add('has-value');
                    this.phoneField.classList.add('has-value');

                    button.setAttribute("value", "Alterar");
                    button.classList.add('alter');
                    button.setAttribute('id', 'alter');
                }

            }
        }

    }
  
}

module.exports = FormController;