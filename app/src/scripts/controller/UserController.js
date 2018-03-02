import validationController from "./FormController.js";
import createEl from "../helper/CreateElement.js";


class UserController{
    constructor(){
        this.id;
        this.name;
        this.email;
        this.cpf;
        this.phone;
    }

    set(name, email, cpf, phone){
        let arrUser = [];
        let newUser = {};
        let id = 1;
        let validateFields = new validationController();
        
        
        if (localStorage.getItem('users') != null){
            arrUser = JSON.parse(localStorage.getItem('users'));
        }
        if (localStorage.getItem("lastId") != null) {
            id = parseInt(localStorage.getItem("lastId")) + 1;
        }

        this.id    = id++;
        this.name  = name;
        this.email = email;
        this.cpf   = cpf;
        this.phone = phone;

        newUser = {
            "id"   :this.id, 
            "name" : this.name, 
            "cpf"  : this.cpf, 
            "phone": this.phone, 
            "email": this.email 
        };

        if (validateFields.validateFields()) {
            arrUser.push(newUser);
            localStorage.setItem('users', JSON.stringify(arrUser));
            localStorage.setItem('lastId', this.id);       
        }
    }

    get(funcDelete){
        let template = "";
        const userList = JSON.parse(localStorage.getItem('users'));
        const userListEl = document.getElementById('list-user');
        if(userListEl != null){
            userListEl.innerHTML = '';

            userList.forEach((el) => {
                let listItem = document.createElement('li');
                listItem.classList.add('list-user-item');
                listItem.setAttribute('id', el.id);
                        template = `<div class="user-name-content">
                                        <span class="list-text" id="user-name">${el.name}</span>
                                    </div>
                                    <div class="user-full-content">
                                        <span class="list-text" id="user-email">${el.email}</span>
                                        <span class="list-text" id="user-cpf">${el.cpf}</span>
                                        <span class="list-text" id="user-phone">${el.phone}</span>
                                        <button type="button" id="edit">Editar</button>
                                        <button type="button" class="delete" data-id=${el.id}>Deletar</button>
                                    </div>`;
                listItem.innerHTML = template;
                userListEl.appendChild(listItem);
            });
        }                        
    }

    delete(itemId){
        const userList = JSON.parse(localStorage.getItem('users'));
        for (var i = 0; i < userList.length; i++) {
            if(parseInt(itemId) == userList[i].id){
                userList.splice(i, 1);
            }            
        }
        localStorage.setItem('users', JSON.stringify(userList));
    }

    edit(){

    }

}

module.exports = UserController;