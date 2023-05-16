const painel = document.body.querySelector("#painel");
const operador = document.body.querySelector(".operador");

let valor_atual = "";

var soma = false;
var sub = false;
var div = false;
var mult = false;


function Ler(event){

  const valorClicado = event.target.innerText;
  valor_atual += valorClicado;
  painel.value = valor_atual;

}

function Limpar(){
  valor_atual = "";
  painel.value = "";
}

function Apagar(){
  // Remover o ultimo caractere da string
  valor_atual = valor_atual.slice(0, -1);
  painel.value = valor_atual;
}

function Matriz(){

  valor_atual = valor_atual.replace(",",".");
  Number(valor_atual); // tranforma em numero

  valor_atual = valor_atual * (-1); // se for pos vira neg e vice versa

  valor_atual = valor_atual.toString().replace(".",","); // vira string
  painel.value = valor_atual; // entra no input

}

function Porcentagem(){

  valor_atual = valor_atual.replace(",",".");
  Number(valor_atual);

  valor_atual = valor_atual / 100;

  valor_atual = valor_atual.toString().replace(".",",");

  painel.value = valor_atual;

}

function Soma(){
  soma = true;
  
  aux = Number(valor_atual);
  valor_atual = "";
  painel.value = "";

}

function Subtracao(){
  sub = true;

  aux = Number(valor_atual);
  valor_atual = "";
  painel.value = "";
  
}

function Divisao(){
  div = true;

  aux = Number(valor_atual);
  valor_atual = "";
  painel.value = "";
  
}

function Multiplicacao(){
  mult = true;

  aux = Number(valor_atual);
  valor_atual = "";
  painel.value = "";
  
}

function Calcular(){

  LimparFoco();
  let resultado;
  //elemento.style.backgroundColor = 'orange';

  if (soma) {
    resultado = aux + Number(valor_atual);

  } else if (sub) {
    resultado = aux - Number(valor_atual);

  } else if (div) {
    resultado = aux / Number(valor_atual);

  } else if (mult) {
    resultado = aux * Number(valor_atual);
  }

  valor_atual = resultado.toString();
  painel.value = valor_atual;

  // Redefinir as variáveis dos operadores
  soma = false;
  sub = false;
  div = false;
  mult = false;
}

function Foco(event){
  var elemento = event.target;
  elemento.style.backgroundColor = 'red';
}

function LimparFoco(){
  var operadores = document.getElementsByClassName('operador');
  for(let i=0; i<operadores.length; i++){
    operadores[i].style.backgroundColor = 'orange';
  }
}