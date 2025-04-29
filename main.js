let mensagem = function() {
  console.log("bem-vindo(a)!")
}

let somar = function(valor1, valor2) {
  return valor1 + valor2
}

console.log(mensagem())
console.log(somar(10, 20))

let mensagem= () => {
  console.log("Ola, Tudo bem?")
} 

let somar = (valor1, valor2) => valor1 + valor2

let raizQuadrada = (valor1) => Math.sqrt(valor1)

console.log(mensagem())
console.log(somar(25, 768))
console.log(raizQuadrada(49))