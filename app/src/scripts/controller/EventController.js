import userController from './UserController.js';

class EventHandler{
    constructor(){
        this.user = new userController();
        this.nameField = document.getElementById('name');
        this.emailField = document.getElementById('email');
        this.cpfField = document.getElementById('cpf');
        this.phoneField = document.getElementById('phone');
    }

    buttonClick(){
        const urlParam = window.location;
        const parameter = urlParam.search.substring(1);
        const button  = document.getElementById('send');
        if (button != null && parameter == ""){
            button.addEventListener('click', (e)=>{            
                e.preventDefault();
                e.stopPropagation();
                
                if (button.classList.value.indexOf('disabled') == -1) {
                    this.user.set(this.nameField.value, this.emailField.value, this.cpfField.value, this.phoneField.value);
                }
            });
        }
    }
    deleteClick(){
        const deleteBtn  = document.querySelector('.list-user');
        let currentEl  = null;
        let listItem   = null;
        if (deleteBtn != null){
            deleteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (e.target && e.target.classList.contains( 'delete' ) ) {
                    currentEl = e.target;
                    listItem = document.getElementById(currentEl.getAttribute('data-id')).remove();
                    this.user.delete(currentEl.getAttribute('data-id'));
                }
            });                    
        }
    }
    editClick(){
        const editBtn = document.querySelector('.list-user');
        let currentEl = null;
        
        if (editBtn != null) {
            editBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (e.target && e.target.classList.contains('edit')){
                    currentEl = e.target;
                    document.location.href = `/?editUser=${currentEl.getAttribute('data-id')}`
                }
            });
        }
    }
    alterClick() {
        const saveBtn = document.querySelector('form');
        const urlParam = window.location;
        const parameter = urlParam.search.substring(1);
        const id = parameter.split('=');

        if (saveBtn != null) {
            saveBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (e.target && e.target.classList.contains('alter')) {
                    this.user.edit(
                        id[1], 
                        this.nameField.value, 
                        this.emailField.value, 
                        this.cpfField.value, 
                        this.phoneField.value
                    );

                }
            });
        }
    }
    maskInputs() {
        const cpfField = document.getElementById('cpf');
        const phoneField = document.getElementById('phone');

        if (phoneField != null && cpfField != null) {
            phoneField.addEventListener('keypress', (e) => {                             
                switch (phoneField.value.length) {
                    case 1:
                        phoneField.value = "(" + phoneField.value;
                        break;
                    case 3:
                        phoneField.value = phoneField.value + ") ";
                        break;
                    case 9:
                        phoneField.value = phoneField.value + "-";
                        break;                    
                    case 14:
                        phoneField.value = phoneField.value.substring(0, 9) + phoneField.value.charAt(10) + '-' + phoneField.value.substring(11);
                        break;
                }

                if (e.charCode > 47 && e.charCode < 58) {                    
                    return true;
                }else{ 
                    return false;
                }



            });
            
            cpfField.addEventListener('keypress', (e) => {
                switch (cpfField.value.length) {
                    case 3:
                        cpfField.value = cpfField.value + ".";
                        break;
                    case 7:
                        cpfField.value = cpfField.value + ".";
                        break;                        
                    case 11:
                        cpfField.value = cpfField.value + "-";
                        break;                        
                    default:
                        break;
                }
            });
        }
    } 
}

module.exports = EventHandler;