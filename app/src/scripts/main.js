import userController from "./controller/UserController.js"
import eventController from "./controller/EventController.js"
import formController from "./controller/FormController.js"
import formAnimation from "./components/FormAnimation.js"

document.addEventListener("DOMContentLoaded", () => {
    init();
});

const init = () =>{
    const form = new formAnimation();
    const eventHandler = new eventController();
    const formFill = new formController();
    const user = new userController();

    let urlParam = window.location;
    let parameter = urlParam.search.substring(1);
    
    let inputs = document.querySelectorAll('.material-input');
    let button = document.getElementById('send');
    
    form.animateForm();          
    eventHandler.deleteClick();
    eventHandler.editClick();
    eventHandler.buttonClick();
    eventHandler.alterClick();
    eventHandler.maskInputs();
    formFill.editForm();
    
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("blur", () => {
            if (formFill.validateFillFields()) {
                button.classList.remove('disabled');
                if(formFill.validateFields()){
                    form.loadButtonAnimate();
                }
            } 
        })
        if (formFill.validateFillFields()) {
            button.classList.remove('disabled');
            if (formFill.validateFields()) {
                form.loadButtonAnimate();
            }
        } 
    }   
    

    user.get();
    user.promiseGet();
}