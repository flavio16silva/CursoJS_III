/*
Nunca é demais lembrar: resolva os exercícios usando apenas 
as funcionalidades da linguagem mostradas no Aquecimento 
para a Semana do JavaScript. 

Assim, você se certifica se realmente aprendeu o que foi 
mostrado =)
*/

/*
01

No código abaixo, o nome da rua em que João Almeida mora 
foi modificado acidentalmente. 

Refatore o código para que Joana more na mesma cidade e 
estado que João, mas a rua seja 'Rua Rio de Janeiro'.

Sua refatoração pode ser feita na criação do objeto person2.

Teste o seu código através das duas condições descritas 
abaixo:

1) Rua do objeto person é diferente de rua do objeto 
person2.

2) Objeto address de person é diferente de objeto address 
de person2.

As duas condições devem retornar true.
*/


//Quando tenho objeto aninhado e uso SPREAD o objeto não foi copiado e sim referenciado.
//Para realmente copiar o que fazer
const person = {
  name: 'João Almeida',
  age: 29,
  address: {                         //aqui estão como tipos primitvos dentro do objeto
    street: 'Rua Minas Gerais',
    city: 'São Paulo',
    state: 'São Paulo'
  }
}

const person2 = {
  ...person,
  name: 'Joana Cruz',
  address: {
    ...person.address,                           //tem todas as propriedades. espalhou as copias das propriedades street, city e state. São tipos primitivos 
    street:'Rua Rio de Janeiro'                  //Subscrevendo a propriedade street com o desejado
  }
}

person2.address.street = 'Rua Rio de Janeiro'
//console.log(person2.address)
//console.log(`Rua de ${person.name}: ${person.address.street}`)
//console.log(`Rua de ${person2.name}: ${person2.address.street}`)
//console.log(person.address.street !== person2.address.street)       //Duas strings diferentes
//console.log(person.address !== person2.address)                     //Dois objetos diferentes em memoria

/*
02

Crie uma função getMessage que recebe como argumento o 
array que a função getHeroes retorna. 

Na função getMessage, cada item do array deve ser 
acessado e a função deve retornar a seguinte string:

O nome do herói no 1º item é Batman e seu nome verdadeiro é Bruce Wayne.
O nome da heroína no 2º item é Wonder Woman e seu nome verdadeiro é Diana Prince.
O nome do herói no 3º item é Spider-Man e seu nome verdadeiro é Peter Parker.

Sua string deve ter 3 linhas, exatamente como formatado 
acima. Para quebrar linha em uma string, você pode usar o 
caractere especial \n no fim de cada linha.

Evite a repetição de "obj." em seu código.
*/

const getHeroes = () => [
  { name: 'Batman', realName: 'Bruce Wayne', gender: 'Male' },
  { name: 'Wonder Woman', realName: 'Diana Prince', gender: 'Female' },
  { name: 'Spider-Man', realName: 'Peter Parker', gender: 'Male' }
]

const getMessage = arr => {
  let message = ''                   //para identificar que essa let irá receber uma string   
  
  arr.forEach(({name, realName, gender}, i) => {
      const heroGender = gender === 'Male' ? 'heroi' : 'heroína' //verificando o genero do heroi ou heroina
      const preposition = gender === 'Male' ? 'do' : 'da'        //verificando a preposição 'do' e 'da'

      message += `O nome ${preposition} ${heroGender} no ${i + 1}º item ${name} e seu nome verdadeiro é ${realName} \n ` //montagem de forma dinâmica 

  })

  return message 

}

const heroes = getHeroes()
//console.log(getMessage(heroes))

/*
03

Crie uma função multiply que recebe como argumento o 
array objs. 

A função multiply deve retornar a multiplicação entre id 
do primeiro objeto do array e code do segundo objeto. 

Evite a repetição de "arr[index]" em seu código.
*/

const objs = [{ id: 3, code: 31 }, { id: 7, code: 21 }]

const multiply = /*arr*/([{id}, {code}]) => {          //recebendo array como parametro. Mas fazendo destructing podemos alterar os nomes do arr para item1 e item2. 
  return id * code                              //E tb fazendo um destructing de um objeto na linha acima
}

//console.log(multiply(objs))

/*
04

Embora a propriedade uva exista no objeto fruits, a função 
está retornando a string à direita do operador "ou" (||).

Faça o único ajuste necessário na linha do return para que 
a função retorne o valor da propriedade uva. 

Não substitua fruits.fruit por fruits.uva. 
*/

const getfruitBenefits = fruit => {
  const fruits = { 
    abacaxi: 'Ajuda a fortalecer o sistema imunológico e eliminar inflamações.',
    banana: 'Auxilia a regular o sistema nervoso e o aparelho digestivo.',
    uva: 'Rica em carboidratos, altamente energética.'
  }
  //bastou inserir colchetes e tirar o ponto: fruits.fruit 
  return fruits[fruit] || 'Não há informações da fruta =/' //por debaixo dos panos no JS ocorre isso: return fruits['uva']
}

const benefits = getfruitBenefits('uva')    //essa string é passada como parametro para a função

//console.log(benefits)

/*
05

Modifique a linha do return abaixo de forma que a 
propriedade dentro do objeto payload seja nomeada 
dinamicamente. 

Após esta modificação, a const product deve armazenar um 
objeto como este: 

{
  type: 'UPDATE_SIZE',
  payload: {
    g: 'Jaqueta Trucker Jeans Com Recortes E Forro De Sherpa Azul Claro'
  }
}
*/

const updateInfo = product => {
  const { name, value } = product.target
  const action = name.includes('size-') ? 'UPDATE_SIZE' : 'UPDATE_FIELD'
  const fieldName = name.includes('size-') ? name.replace('size-', '') : name

  return { type: action, payload: { [fieldName]: value } }  //inserimos colchetes no fieldName
}

const product = updateInfo({ 
  target: {
    name: 'size-g', 
    value: 'Jaqueta Trucker Jeans Com Recortes E Forro De Sherpa Azul Claro' 
  }
})

//console.log(product)

/*
06

O código abaixo está funcionando e é de um exercício que 
fizemos anteriormente. 

======== Renomeie o que está em português para inglês =========== .
*/

const getUserAnswers = () => ['A', 'B', 'A', 'D']

const gScore = uAnswers => {
  const lastAnswer = uAnswers[3]

  if (lastAnswer === 'A') {
    return 50
  } else if (lastAnswer === 'C') {
    return 25
  } else {
    return 100
  }
}

const uAnswers = getUserAnswers()
const scor = gScore(uAnswers)

//console.log(score)

/*
07

Refatore a função que anteriormente se chamava 
pegaPontuacao. 

Dicas:

Você pode substituir if, else if e else por uma estrutura 
de dados e acessar os dados de forma dinâmica.
*/

const getScore = userAnswers => {
  const lastAnswer = userAnswers[userAnswers.length - 1]
  const obj = {A: 50, C: 25}

  return obj[lastAnswer] || 100

  // if (lastAnswer === 'A') {
  //   return 50
  // } else if (lastAnswer === 'C') {
  //   return 25
  // } else {
  //   return 100
  // }
}

const userAnswers = getUserAnswers()
const score = getScore(userAnswers)

console.log(score)