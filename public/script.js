
const validarEmail = (email) => {
    // Expressão regular para validar um email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email)){
        return true
    }else{
        return false
    }
}


function botao(){
    document.getElementById('botaoform').addEventListener('click', (e)=>{
        
    
        const email = document.getElementById('email').value.trim();
        const nome = document.getElementById('nome').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const emailinvalido = document.getElementById('emailinvalido');
      
        if (!validarEmail(email)) {
            emailinvalido.style.display = 'block';
            document.getElementById('email').style.border = '1px solid red'
           
        }
        else {
            emailinvalido.style.display = 'none';
            document.getElementById('email').style.border = '1px solid green'
        }
        
        
        if(!nome){
            emailinvalido.style.display = 'block';
            document.getElementById('nome').style.border = '1px solid red'
        }else {
            emailinvalido.style.display = 'none';
            document.getElementById('nome').style.border = '1px solid green'
        } 


        if(!telefone){
            emailinvalido.style.display = 'block';
            document.getElementById('telefone').style.border = '1px solid red'
        }   
        else {
            emailinvalido.style.display = 'none';
            document.getElementById('telefone').style.border = '1px solid green'
        }
    });
    
}



botao()