commandForm = document.querySelector('form');
inputs = document.querySelectorAll('input');
i=0;
emailCheckForm =  /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;

email = 'hurol@gmail.com';


//CONTROLER LE FORMULAIRE DE COMMANDE

function commandCheck() {
    inputs.forEach(input => {
        if(input.value){
            i++;
        } 
    });
    if(i == 6){
        if(userName.value.length > 20 || userName.value.length < 3){
            alert(userName.value + " n'est pas un nom valide");
            userName.classList.add('inputError');
            if(!userMail.value.match(emailCheckForm)){
                alert('email incorrect');
                userMail.classList.add('inputError')
            }
        }else if(!userMail.value.match(emailCheckForm)){
            alert('email incorrect');
            userMail.classList.add('inputError')
        }else{
            alert('commande envoye');
            inputs.forEach(input => {
                input.value = "";
            });
        }
    }else{
        alert('tous les champs sont obligatoire')
    }
 
}

commandSubmit.addEventListener('click',(e)=>{
    e.preventDefault();
    commandCheck();
})



