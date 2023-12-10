//Operadores and e or, if, else if e else


/*
Operadores and - &&
Usamos quando desejamos que a informação da direita e esquerda retornem = TRUE
*/

const x = 3
const y = 7

const a = x === 3 && y > 7
console.log(a)

/*
Operadores or - ||
Usamos quando desejamos que uma das informações retorne = TRUE
*/

const b = 3
const c = 7
let w = 0

const aa = x === 3 || y > 7
console.log(aa)


/*
Estrutura Condicional
Serve para tomada decisões em seu código
*/

//IF
if (x === '3' || y === "7"){
  w++
} else {
  w = 9
}
console.log(w)

//Sempre que temos IF e ELSE somente um dos dois será executado. 

/*
Else IF: senão Se

if (x === '3' || y === "7"){
  w++
} else if (x === '3'){
  w = 5
} else {
  w = 9
}
console.log(w)
*/
