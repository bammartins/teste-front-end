class FormController{
    animateForm(){
        const fields = document.querySelectorAll('.material-input');
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
        const urlParam = window.location;
        const parameter = urlParam.search.substring(1);
        let button = null;        
        if (parameter == "") {
            button = document.getElementById('send');
        }else{
            button = document.getElementById('alter');
        }
        const loader = document.getElementById('loader');
        const value = button.getAttribute('value')
        button.addEventListener('click', (e) => {
            button.setAttribute('value', '');
            loader.style.display = "block";
            setTimeout(() => {
                button.setAttribute('value', value);
                loader.style.display = "none";
                window.location.href = "/listuser.html"
            }, 1500);
        });
    }
}

module.exports = FormController;