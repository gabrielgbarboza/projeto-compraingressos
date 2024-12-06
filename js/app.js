
function comprar() {
  let tipoIngresso = document.getElementById("tipo-ingresso").value;
  let quantidadeIngresso = document.getElementById("qtd").value;
  let pista = document.getElementById("qtd-pista");
  let cadeiraSuperior = document.getElementById("qtd-superior");
  let cadeiraInferior = document.getElementById("qtd-inferior");
  let quantidadePista = pista.textContent;
  let quantidadeCadeiraSuperior = cadeiraSuperior.textContent;
  let quantidadeCadeiraInferior = cadeiraInferior.textContent;
  let disponivelPista = quantidadePista - quantidadeIngresso;
  let disponivelCadeiraSuperior = quantidadeCadeiraSuperior - quantidadeIngresso;
  let disponivelCadeiraInferior = quantidadeCadeiraInferior - quantidadeIngresso;
  
  if (tipoIngresso == "pista" && disponivelPista >= 0) { 
  pista.textContent = disponivelPista;
} else if (tipoIngresso == "superior" && disponivelCadeiraSuperior >= 0)  {
  cadeiraSuperior.textContent = disponivelCadeiraSuperior;
}
 else if (tipoIngresso == "inferior" && disponivelCadeiraInferior >= 0) {
    cadeiraInferior.textContent = disponivelCadeiraInferior;
  } 
  else {
    alert("Número de ingressos superior ao disponível ou esgotado")
  }
}


