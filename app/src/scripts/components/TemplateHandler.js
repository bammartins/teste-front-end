import userController from "../controller/UserController.js";

class TemplateHandler{
    constructor(){
        this.userList = new userController();
    }

    renderList(){
        let template     = "";
        const userListEl = document.getElementById('list-user');
        const userList   = this.userList.get();

        if (userListEl != null && userList != null) {
            userListEl.innerHTML = '';

            userList.forEach((el) => {
                const listItem = document.createElement('li');
                listItem.classList.add('list-user-item');
                if (el.id) {
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
                }else{
                    template = `<div class="user-name-content">
                                        <span class="list-text" id="user-name">${el.name} - ${el.cpf}</span>
                                    </div>
                                    <div class="user-full-content">
                                        <div class="user-info">
                                            <span class="list-text" id="user-email"><strong>Email:</strong> ${el.email}</span>
                                            <span class="list-text" id="user-phone"><strong>Tel:</strong> ${el.phone}</span>
                                        </div>
                                    </div>`;
                }
                listItem.innerHTML = template;
                userListEl.appendChild(listItem);
            });
        } 
    }
}

module.exports = TemplateHandler;