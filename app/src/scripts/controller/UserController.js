import validationController from "./FormController.js";


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
        const validateFields = new validationController();
        
        
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
            "id"   : this.id, 
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
        let template = "";
        const userList = JSON.parse(localStorage.getItem('users'));
        const tempUserList = JSON.parse(localStorage.getItem('tempUsers'));
        const userListEl = document.getElementById('list-user');
        if (userListEl != null && userList != null){
            userListEl.innerHTML = '';

            userList.forEach((el) => {
                const listItem = document.createElement('li');
                listItem.classList.add('list-user-item');
                listItem.setAttribute('id', el.id);
                        template = `<div class="user-name-content">
                                        <span class="list-text" id="user-name">${el.name} - ${el.cpf}</span>
                                    </div>
                                    <div class="user-full-content">
                                        <div class="user-info">
                                            <span class="list-text" id="user-email"><strong>Email:</strong> ${el.email}</span>
                                            <span class="list-text" id="user-phone"><strong>Tel:</strong> ${el.phone}</span>
                                        </div>
                                        <div class="user-action">
                                            <button type="button" class="action-btn edit icon-pencil" data-id=${el.id} id="edit"></button>
                                            <button type="button" class="action-btn delete icon-cancel-circle" data-id=${el.id}></button>
                                        </div>
                                    </div>`;
                listItem.innerHTML = template;
                userListEl.appendChild(listItem);
            });
        } 
        if (userListEl != null && tempUserList != null && userList != null){
            if (userList == null || userList.length == 0) {
                userListEl.innerHTML = '';
                tempUserList.forEach((el) => {
                    const listItem = document.createElement('li');
                    listItem.classList.add('list-user-item');
                    listItem.setAttribute('id', el.id);
                    template = `<div class="user-name-content">
                                            <span class="list-text" id="user-name">${el.name} - ${el.cpf}</span>
                                        </div>
                                        <div class="user-full-content">
                                            <span class="list-text" id="user-email">Email: ${el.email}</span>
                                            <span class="list-text" id="user-phone">Tel: ${el.phone}</span>
                                        </div>`;
                    listItem.innerHTML = template;
                    userListEl.appendChild(listItem);
                }) ;              
                
            }
        }
        
        
    }

    promiseGet(){
        const userList = JSON.parse(localStorage.getItem('users'));
        const url = "https://private-21e8de-rafaellucio.apiary-mock.com/users";

        if (userList == null || userList.length == 0) {
            fetch(url, { headers: { "Content-Type": "application/json; charset=utf-8" } })
            .then(res => res.json())
            .then(response => {
                localStorage.setItem('tempUsers', JSON.stringify(response));
            })
            .catch(err => {               
                console.log("sorry, there are no results for your search")
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

    edit(itemId, name, email, cpf, phone){
        const userList = JSON.parse(localStorage.getItem('users'));
        for (let i = 0; i < userList.length; i++) {
            if (parseInt(itemId) == userList[i].id) {
                userList[i] = {
                    "id": userList[i].id,
                    "name": name,
                    "cpf": cpf,
                    "phone": phone,
                    "email": email 
                }
            }            
        }  
        
        localStorage.setItem('users', JSON.stringify(userList));
    }

}

module.exports = UserController;