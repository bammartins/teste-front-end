import userController from "./controller/UserController.js"
import eventController from "./controller/EventController.js"
import formController from "./controller/FormController.js"
import formAnimation from "./components/FormAnimation.js"

document.addEventListener("DOMContentLoaded", () => {
    const form = new formAnimation();
    const eventHandler = new eventController();
    const formFill = new formController();
    let inputs = document.querySelectorAll('.material-input');
    eventHandler.buttonClick(); 
    form.animateForm();          
    
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("blur", () => {
            if (formFill.validateFillFields()) {
                form.loadButtonAnimate();
            } 
        })
    }
});