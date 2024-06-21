const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const contador = document.querySelectorAll(".contador");


const tempoObjetivo1 = new Date (2024,7,6,21,30)
const tempoObjetivo2 = new Date (2024,9,10,5,33)
const tempoObjetivo3 = new Date (2024,7,16,10,50)
const tempoObjetivo4 = new Date (2024,11,01,11,28)
let agora = new Date();

contador[0].textContent = tempoObjetivo1-agora
contador[1].textContent = tempoObjetivo2-agora
contador[2].textContent = tempoObjetivo3-agora
contador[3].textContent = tempoObjetivo4-agora
let segundos
let minutos
let horas 
let dias 
segundos = (tempoObjetivo1-agora)/1000;
minutos = (tempoObjetivo1-agora)/60;
horas = (tempoObjetivo1-agora)/60;
dias = (tempoObjetivo1-agora)/24;
contador[0].textContent = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`

for(let i = 0 ; i < botoes.length; i++){
    botoes[i].onclick = function(){
     for (let j = 0; j< botoes.length ; j++){
         botoes[j].classList.remove("ativo")
         conteudo[j].classList.remove("ativo")
     }   
     botoes[i].classList.add("ativo")
     conteudo[i].classList.add("ativo")
    }
}
