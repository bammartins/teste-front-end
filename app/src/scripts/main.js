import userController from "./controller/UserController.js"
import formAnimation from "./components/FormAnimation.js"

document.addEventListener("DOMContentLoaded", () => {
    const form = new formAnimation();
    const user = new userController();
    form.animateForm();   
    user.set();
});