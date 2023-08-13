//Inglês e destructuring em arrays e objetos

//Spread - faz cópia rasa, ou seja, não cópia objetos aninhados.

const obj = {
  prop: 1,
  prop2: 2,
  prop3: [1, 2, 3]   //esse array é um objeto aninhado no objeto inicial
}

// const obj2 = {
//   ...obj,                                 //propriedades de obj foram espalhadas ali dentro - Spread
//   prop: 'x',                              // alterou a propriedade de prop
//   prop3: [...obj.prop3, 4]                //False, pq são dois arrays diferentes em memoria
// }

//obj2.prop3.push(4)
const obj2 = structuredClone(obj)            //Retorna: false, 2 arrays diferentes em memoria.

console.log('prop3 do obj2:', obj2.prop3)
console.log('prop3 do obj:', obj.prop3)
console.log(obj.prop3 === obj2.prop3)         //Estao armazenando o mesmo array em memoria: true

//Cuidado ao usar structuredClone
//Será que seu objeto precisa ter todas as propriedades do objeto original.
//Melhor: cria um clone somente com as propriedades que serão usadas e não todas as propriedades do objeto. 



//============= Destructuring Assignment
//expressao que possibilida a atribuição de valores de um objeto de forma mais concisa/simples. 
//Atribução com desistruração
//Um dos problemas que são resolvidos de interpolação com uso de Destructuring

const playlist = {
  nome: 'JavaSript do Zero',
  videos: 34,
  visualizacoes: 7.059,
  visibilidade: 'Publica'
}

// =============== Usando:
const {nome, videos, visualizacoes, visibilidade } = playlist    // a abertura e fechamento de chaves a esquerda do sinal de atribição é Destructuring
//Tudo que encontra-se dentro da chave absorveu o valor da propriedade do objeto acima: playlist
// ======== Com Destructuring
const mensagem = `A playlist "${nome}" esta com ${videos} videos, tem ${visualizacoes} visualizacoes e tem a visibilidade ${visibilidade}`


// ======= Modo Normal
// const mensagem = `A playlist "${playlist.nome}" esta com ${playlist.videos} videos, tem ${playlist.visualizacoes} visualizacoes e tem a visibilidade ${playlist.visibilidade}`
console.log(mensagem)

// ========== Declaração de Parametro
// ========== ANTES
const pegaMensagem = obj => `A playlist "${obj.nome}" esta com ${obj.videos} videos, tem ${obj.visualizacoes} visualizacoes e tem a visibilidade ${obj.visibilidade}`  
console.log(pegaMensagem(playlist))

// ========== DEPOIS, com aplicação em um parametro. Onde armazenam o valor da propriedade
const novaMensagem = ({nome, videos, visualizacoes, visibilidade}) => `A playlist "${nome}" esta com ${videos} videos, tem ${visualizacoes} visualizacoes e tem a visibilidade ${visibilidade}`  
console.log(pegaMensagem(playlist))


const config = {
  formatoModulo: 'esm',
  futuro: {           //propriedade
    v2headers: true,
    v2Meta: true
  }
}
// =============== Se o tipo em questão é objeto, ele não faz copia apenas referencia
// const apanhaMensagem = ({futuro}) => `v2Meta é true? ${futuro.v2Meta === true } ` //futuro é um objeto, somente uma referencia para o objeto principal
// const mens = apanhaMensagem(config) //objeto passado como argumento
// console.log(mens) 

const apanhaMensagem = ({futuro}) => {
    return {...futuro, v2Meta: false}             //criando novo objeto já com a propriedade desejada.
  //`v2Meta é true? ${futuro.v2Meta === true } `
} 


const mens = apanhaMensagem(config)
console.log(config.futuro.v2Meta)
console.log(mens.v2Meta) //armazena falso que foi o valor setado dentro do return


// ============= Quando seu Destructuring, fica ilegivel: EVITAR
const pegueMensagem = ({futuro: {v2Meta}}) => `v2Meta é true? ${v2Meta === true } ` //Evitar faz aninhamento de Destructuring
const m = pegueMensagem(config)
console.log(m) 


//Qual o problema que Destructuring resolve em ARRAY
//========================== EXEMPLO 1 ================================
const arr = ['Joao', 'Silva']
const n = arr[0]
const s = arr[1]

const nomeCompleto = `${n} ${s}`

console.log(n)
console.log(s)
console.log(nomeCompleto)

//========================== EXEMPLO 2 ================================
const array = [5, num => num * 2]
//const numero = array[0] = comentado para testes linha 115***
//const dobrar = array[1] = comentado para testes linha 115***
//console.log(dobrar(5)) //array2

// ============= OU
//const res = dobrar(numero) //array1
//console.log(res)

//Usando o Destructuring na pratica
const [numero, dobrar] = array //armazena primeiro e segundo itens do array acima. usando apenas uma linha de codigo
const r = dobrar(numero)
console.log(r)


//Destructuring de ARRAY, usado em declaração de parametros
const trazNomeCompleto = arr => `${arr[0]} ${arr[1]}` //arr = array por parametro. Descrição: nomedoarray:arr[index]
const ar = ['Pedro', 'Silva']                         //o array com Pedro Silva
const nCompleto = trazNomeCompleto(ar)                //passando com argumento aqui na função, para ser invocada
console.log(nCompleto)                                //função retorna uma string

//Uso da expressão de Destructing
//const trazNomeCompleto = ([nome, sobrenome]) => `${nome} ${sobrenome}`


//Porque nomear em Ingles
const getFullName = ([name, surname]) => `${name} ${surname}`
const strings = ['Pedro', 'Silva'] 
const FullName = getFullName(strings)
console.log(FullName)

//Usando sintaxe de colchetes para acesso a propriedades de objetos:

const props = { prop1: 'value 1'}
const proName = 'prop1'
console.log(props.proName) //undefined, procurando de forma estatica
console.log(props[proName]) //value 1, acessando o valor de uma propriedade de forma dinamica, atraves da notação de colchetes

//Criar uma propriedade de forma dinamica 
//Forma tradicional:
const prop = {pro1: 'value 1'}
prop.pro2 = 'value 2'
console.log(prop)

//Notação de Colchetes
const newp = 'prop2'
const p = {pro1: 'value 1', [newp]: 'value 2'}
console.log(p)

//Em uso de parametros
const gobj = newP => ({prop1: 'value 1', [newP]: 'value 2'})
const newP = 'prop2'
const objeto = gobj(newP)
console.log(objeto)





