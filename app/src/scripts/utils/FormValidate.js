import cpfValidate from '../helper/CpfValidate.js';

class FormValidate{

    validateName(value){
        if (value.length < 3) {
            return false;
        }else{
            return true;
        }
    }
    
    validateCpf(value){
        const cpfTest = new cpfValidate();

        if (cpfTest.validate(value) == false) {
            return false;
        }else{
            return true;
        }
    }

    validateEmail(value){
        const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!value.match(mailRegex)) {
            return false;
        }else{
            return true;
        }
    }

    validatePhone(value){
        const phoneRegex = /\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}/
        if (!value.match(phoneRegex)) {
            return false;
        }else{
            return true;
        }
    }
}

module.exports = FormValidate;