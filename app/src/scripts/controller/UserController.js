class UserController{
    constructor(){
        this.id;
        this.name;
        this.email;
        this.cpf;
        this.phone;
    }

    set(id, name, email, cpf, phone){
        let arrUser = [];
        let newUser = {};
        let autoIncrement = 1;            
        let button  = document.getElementById('send');
        
        if (localStorage.getItem('users') != null){
            arrUser = JSON.parse(localStorage.getItem('users'));
        }
        if (localStorage.getItem("lastId") != null) {
            autoIncrement = parseInt(localStorage.getItem("lastId")) + 1;
            console.log(autoIncrement);
        }
        button.addEventListener('click', (e)=>{            
            e.preventDefault();
            e.stopPropagation();
            this.id = autoIncrement++;
            this.name = document.getElementById('name').value;
            this.email = document.getElementById('email').value;
            this.cpf = document.getElementById('cpf').value;
            this.phone = document.getElementById('phone').value;
            newUser = {
                "id":this.id, 
                "name": this.name, 
                "cpf": this.cpf, 
                "phone": this.phone, 
                "email": this.email 
            };
            arrUser.push(newUser);
            localStorage.setItem('users', JSON.stringify(arrUser));
            localStorage.setItem('lastId', this.id);
        });        
    }

    get(){

    }

    edit(){

    }

    delete(){

    }
}

module.exports = UserController;