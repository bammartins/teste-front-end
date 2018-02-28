import userController from "./controller/UserController.js"
import eventController from "./controller/EventController.js"
import formAnimation from "./components/FormAnimation.js"

document.addEventListener("DOMContentLoaded", () => {
    const form = new formAnimation();
    const eventHandler = new eventController();
    form.animateForm();  
    eventHandler.buttonClick(); 
    document.getElementById('send').disable = true;
});