
const eleEmailList= ['giorgio@gmail.com', 'gennaro@gmail.com', 'cloe@gmail.com', 'clara@gmail.com', 'boolen@gmail.com', 'iosonogroot@gmail.com'];
const Mail = document.getElementById('email');
const eleRisultato = document.getElementById('risultato');
const eleClick = document.getElementById("bottone1");

   
eleClick.addEventListener('click', 
    function() {
        if(eleEmailList.includes(Mail)){
            eleRisultato.innerHTML = 'EMAIL CORRETTA'
        }else{
            eleRisultato.innerHTML = 'EMAIL SBAGLIATA RIPROVA'
        }   
});