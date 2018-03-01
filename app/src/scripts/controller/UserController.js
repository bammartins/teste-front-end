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

    get(){
        const userList = JSON.parse(localStorage.getItem('users'));
    }

    edit(){

    }

    delete(){

    }
}

module.exports = UserController;