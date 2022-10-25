
const eleEmailList= ['giorgio@gmail.com', 'gennaro@gmail.com', 'cloe@gmail.com', 'clara@gmail.com', 'boolen@gmail.com', 'iosonogroot@gmail.com'];
const Mail = document.getElementById('email');
const eleRisultato = document.getElementById('risultato');
const eleClick = document.getElementById('bottone1');

   
eleClick.addEventListener('click', 
    function() {
        if(eleEmailList.includes(Mail.value)){
            eleRisultato.innerHTML = 'EMAIL CORRETTA'
        }else{
            eleRisultato.innerHTML = 'EMAIL SBAGLIATA RIPROVA'
        }   
});

const eleRisultatoDadi = document.getElementById('risultato2');
const eleClickDadi = document.getElementById('bottone2');

 

eleClickDadi.addEventListener('click', 
    function() {
       let eleDadoGiocatore = Math.floor(Math.random() * 7);
       let eleDadoCompiuter = Math.floor(Math.random() * 7);
       console.log('numero compiuter' + eleDadoCompiuter)
       console.log( 'numero player' + eleDadoGiocatore)

        if(eleDadoGiocatore > eleDadoCompiuter){
            eleRisultatoDadi.innerHTML = 'HA VINTO IL PLAYER'
        }else if (eleDadoGiocatore < eleDadoCompiuter){
            eleRisultatoDadi.innerHTML = 'HA VINTO IL COMPIUTER'
        }else  
            eleRisultatoDadi.innerHTML = 'PAREGGIO'
});