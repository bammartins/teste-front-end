import userController from './UserController.js';


class EventHandler{
    constructor(){
        this.user = new userController();
    }

    buttonClick(){
        let button  = document.getElementById('send');
        if (button != null){
            button.addEventListener('click', (e)=>{            
                e.preventDefault();
                e.stopPropagation();
                let nameField  = document.getElementById('name').value;
                let emailField = document.getElementById('email').value;
                let cpfField   = document.getElementById('cpf').value;
                let phoneField = document.getElementById('phone').value;
                
                if (button.classList.value.indexOf('disabled') == -1) {
                    this.user.set(nameField, emailField, cpfField, phoneField);
                }
            });
        }
    }

    deleteClick(){
        let deleteBtn  = document.querySelector('.list-user');
        let currentEl  = null;
        let listItem   = null;
        if (deleteBtn != null){
            deleteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if ( e.target && e.target.classList.contains( 'delete' ) ) {
                    currentEl = e.target;
                    listItem = document.getElementById(currentEl.getAttribute('data-id')).remove();
                    this.user.delete(currentEl.getAttribute('data-id'));
                }
            });                    
        }
    }

    maskInputs() {
        let cpfField = document.getElementById('cpf');
        let phoneField = document.getElementById('phone');

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