/*
Durante a resolução desta bateria de exercícios você verá 
erros no console do navegador. 

Fazer os erros desaparecerem é parte da resolução dos 
exercícios. 

Importante: o número da linha na qual o erro é lançado 
é exibida ao lado da mensagem no console. Caso não consiga 
descobrir como resolver o erro, comente a linha 
que está lançando o erro e vá para o próximo exercício.
*/

/*
01

A expressão abaixo da declaração do array está lançando um 
erro no console. 

Conserte o erro. 

Após consertar, a expressão deve retornar o número 7.
*/
//Não existe propriedade ou metodo em undefined

const objs = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: 5, y: 6 },
  { x: 7, y: 8 }
]

objs[3].x
//console.log(objs[3].x)

/*
02

A expressão abaixo da declaração do objeto está lançando 
um erro no console. 

Faça os 2 únicos ajustes necessários para consertar o erro.

Após consertar, a expressão deve retornar o caractere w.
*/

const obj = {
  x: () => 'y',
  y: function () { 
     return 'w'
  },
  w () { 
    return 'x'
  }
}

//obj.z()
//Toda função que não retorna valor, retorna undefined
obj.y()
//console.log(obj.y())

/*
03

Crie uma função que retorna um boolean indicando se o 
argumento que a função recebeu é null.

Invoque a função 3x. A cada invocação, o argumento deve 
ser um valor diferente do anterior. 

Faça com que uma das invocações retorne true.
*/
const eNull = arg => arg === null
eNull()
//console.log(eNull()) //false, retorna false porque nenhum argumento foi colocado na função. Sendo assim, ARG recebeu undefined. E undefined é diferente de null
//Para true:
eNull(null)
//console.log(eNull(null))
//console.log(eNull({})) //objeto - false

/*
04

Crie uma função com as seguintes características:

1. A função deve receber 3 argumentos;

2. Se qualquer um dos três argumentos não estiverem 
preenchidos, a função deve retornar a string abaixo:

'Insira todos os argumentos!'

3. O retorno da função deve ser a multiplicação dos 3 
argumentos.
*/
const multiplicar = (a, b, c) => {
  if (a === undefined || b === undefined || c === undefined){
    return 'Insira todos os argumentos!'
  } 

  return a * b * c
}
multiplicar()
//console.log(multiplicar())
multiplicar(1, 2, 3)
//console.log(multiplicar(1,2,3))


/*
05

Descomente o console.log do código abaixo. 

Ifs aninhados tendem a deixar a leitura do código mais 
complexa. Por isso, sua missão neste exercício é refatorar 
a função abaixo para que ela tenha apenas um if e continue 
funcionando como já está. 

Deixe a expressão/condição do if mais fácil de ser lida. 

Não mexa na invocação da função. Sua refatoração deve 
envolver apenas as linhas de código dentro do bloco da 
função. 
*/

const y = w => {
  //Refatorando:
  const eIgualFalse = w[2] === false
  const eIgualB = 'b' === w[0]
  const eIgual3 = w[1] === 3

  if ( eIgualFalse && eIgualB && eIgual3){
    console.log('Executou if!')
  }

  // if (w[2] === false) {
  //   if ('b' === w[0]) {
  //     if (w[1] === 3) {
  //       console.log('Executou if!')
  //     }
  //   }
  // }
}

const a = 'b'
const b = false
const c = 3

y([a, c, b])

/*
06

Crie uma função com as seguintes características:

1. A função deve receber 3 argumentos.

2. Se somente um argumento for passado, retorne o valor do 
argumento.

3. Se dois argumentos forem passados, retorne a soma dos 
dois argumentos.

4. Se todos os argumentos forem passados, retorne a soma do 
primeiro com o terceiro.

5. Se nenhum argumento for passado, retorne o valor booleano 
false.

6. E ainda, se nenhuma das condições acima forem atendidas, 
retorne null.
*/

/*
07

Invoque a função acima testando as possibilidades abaixo: 

- Com nenhum argumento;
- Com um argumento;
- Com dois argumentos;
- Com três argumentos.
*/