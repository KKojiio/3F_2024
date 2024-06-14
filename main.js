const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const contador = document.querySelectorAll(".contador");
contador[0].textContent ="OLÁ"
const tempoObjetivo1 = new Date (2024,7,6,21,30)
const tempoObjetivo2 = new Date (2024,3,10,5,33)
const tempoObjetivo3 = new Date (2024,7,16,10,50)
const tempoObjetivo4 = new Date (2024,11,01,11,28)

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
