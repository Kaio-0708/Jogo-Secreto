alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 10000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;
let numerosDigitados = [];

while ( chute != numeroSecreto) {
    chute =  prompt(`escolha um número entre 1 e ${numeroMaximo}`);
     numerosDigitados.push(chute);
   
    alert(`Números digitados até agora: ${numerosDigitados.join(', ')}`);

   
    if (chute == numeroSecreto) {
       break;
    }  else {
        if(chute > numeroSecreto){
            alert(` O número secreto é menor que ${chute}`);        
        }
        else{
            alert(`O número secreto é maior que ${chute}`);
        }
          tentativas = tentativas + 1;
          
   
    } 

    
}


let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
 


/* modo díficil da etapa de cima
if(tentativas > 1){
    alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
   }
   else{
    alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
   } 
*/


let numerosDigitadosStr = numerosDigitados.join(', ');
alert(`Números digitados: ${numerosDigitadosStr}`);

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

