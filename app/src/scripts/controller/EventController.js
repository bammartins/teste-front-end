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
}

module.exports = EventHandler;