    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    email = document.getElementById('iemail')
    msgErro = document.getElementById('msg-erro')

    function noRefresh(event){
        event.preventDefault();
    }
    
    function erro(){
        msgErro.style.display = 'block';
        email.style.border = '1px solid red';
    }

    function removeErro(){
        msgErro.style.display = 'none';
        email.style.border = '1px solid #0066ff';
    }

    function validateEmail(){
        if(!emailRegex.test(email.value)){
            erro();
        }
        else{
            removeErro();
        }
    }
