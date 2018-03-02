class FormController{
    animateForm(){
        let fields = document.querySelectorAll('.material-input');
        for (let index = 0; index < fields.length; index++) {            
            fields[index].addEventListener('change', ()=>{
                if (fields[index].value != "") {
                    fields[index].classList.add('has-value');
                } else {
                    fields[index].classList.remove('has-value');
                }
            })
            
            if (fields[index].value != ""){
                fields[index].classList.add('has-value');
            }else{
                fields[index].classList.remove('has-value');
            }
        }
    }
    
    loadButtonAnimate(){
        let button = document.getElementById('send');
        let loader = document.getElementById('loader');
        button.addEventListener('click', (e) => {
            button.setAttribute('value', '');
            loader.style.display = "block";
            setTimeout(() => {
                button.setAttribute('value', 'Cadastrar');
                loader.style.display = "none";
            }, 1500);
        });
    }
}

module.exports = FormController;