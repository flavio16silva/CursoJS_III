/*
Apenas relembrando, por que é importante:

Se o exercício não especificou nome do identificador 
(variável, parâmetro, propriedade, função), declare ele com 
o nome de sua preferência.

Alguns exercícios contém dicas nas últimas linhas. 

Leia as dicas apenas se precisar. 
*/

/*
01

Use a função eUndefined para melhorar a legibilidade das 
expressões das consts dentro da função somar.

Dica:

Há um operador que pode ser usado em conjunto com a 
invocação da função eUndefined.
*/

const eUndefined = arg => arg === undefined

const somar = (arg1, arg2, arg3) => {
  const temSoArg1 = !eUndefined(arg1)  && eUndefined(arg2) && eUndefined(arg3)
  const temSoArg1E2 = !eUndefined(arg1) && !eUndefined(arg2) && eUndefined(arg3)
  const temTodosArgs = !eUndefined(arg1) && !eUndefined(arg2) && !eUndefined(arg3)
  const temNenhumArg = eUndefined(arg1) && eUndefined(arg2) && eUndefined(arg3)

  if (temSoArg1) {
    return arg1
  }
  
  if (temSoArg1E2) {
    return arg1 + arg2
  }
  
  if (temTodosArgs) {
    return arg1 + arg3
  }
  
  if (temNenhumArg) {
    return false
  }

  return null
}

somar(1)
somar(1, 2)
somar(1, 2, 3)
somar()
somar(undefined, 1, 2)

/*
02

Crie uma função pegaNomeConcurso. Esta função deve receber 
um id como argumento e retornar o nome do concurso, se ele 
existir no array concursos.

Se o concurso não existir no array, a função deve retornar 
'Concurso não encontrado'.

Use todos os ids do array concursos para testar a função. 
Teste também o caso onde o concurso não existe no array. 

Dica:

Você pode usar um loop dentro da função. 
*/
//Na função abaixo é possivel eliminar a MUTAÇÃO. Como fazemos isso?
//Eliminando a let e aplicando um return

const pegaNomeConcurso  = id => {
  //let nomeConcurso = ''          //Indica que o tipo de dado armazenado é STRING. Colocada fora do for, para que a cada execução do for ela não seja limpada da memoria e consiga armazenar os valores a cada execução do for. 

  for (let i = 0; i < concursos.length; i++) {
    if (id === concursos[i].id) {       //concursos: é o array abaixo a ser recebido. Comparando a STRING do id da função com o id da string do objeto, dentro do array. 
    //nomeConcurso = concursos[i].nome //nome do concurso do objeto**** 
    return concursos[i].nome
  }
}
  //return nomeConcurso || 'Concurso não encontrado'*** //a esquerda sendo true é retornado, mas se nomeConcurso retornar uma string vazio é false, retornará: Concurso não encontrado que esta a direita. 
  
  return 'Concurso não encontrado'

}
// ----------------- ARRAY dos IDs ----------------------------------
const concursos = [
  { id: 'ysdyhsa8a', nome: 'Concurso Loteria XPTO' },
  { id: '7yerdf8fk', nome: 'Concurso Proibido Dançar Mas se Quiser Pode' },
  { id: '9d8f5skui', nome: 'Concurso de Sobrancelha' },
  { id: 'd8sduqsd3', nome: 'Concurso Supermercado Galão' },
  { id: 'd687jsfke', nome: 'Concurso Programadores Garotos de Programa' },
]

//Use todos os ids do array concursos para testar a função. 
  for(let i = 0; i < concursos.length; i++ ) {
    console.log(pegaNomeConcurso(concursos[i].id))    
  }

  //Teste também o caso onde o concurso não existe no array.
    console.log(pegaNomeConcurso()) //Concurso não encontrado

/*
03

Refatore a função abaixo para apenas uma única linha.
*/
//Esta função retornará string sim ou não baseado no retorno do IF
// ================= DEPOIS: REFATORADO =========================
const eAMelhorSerie = serie => serie === 'Breaking Bad' ? '✅ Sim' : '❌ Não'
console.log(eAMelhorSerie('Breaking Bad'))
console.log(eAMelhorSerie('Game of Thrones'))


// ================= ANTES =========================
/*
const eAMelhorSerie = serie => {
  if (serie === 'Breaking Bad') {
    return '✅ Sim'
  }
  
  return '❌ Não'
}

eAMelhorSerie('Breaking Bad')
eAMelhorSerie('Game of Thrones')
//console.log(eAMelhorSerie('Breaking Bad'))
//console.log(eAMelhorSerie('Game of Thrones')) 
*/

/*
04

Crie uma função que retorna a média do total de custos do 
array abaixo.

A função deve receber o array custos como argumento. 

Para testar a invocação da função, exiba a seguinte 
mensagem no console:

`A média é ${suaFuncao(custos)}`

Dica:

Para obter a média, basta dividir a soma total dos custos 
pela quantidade de meses.
*/

const pegaMedia = custos => { //custos é declarado como parametro.
  let soma = 0

  for(let i = 0; i < custos.length; i++) {
    soma += custos[i].custoTotal          //acessando o array, pegando a propriedade dentro do objeto
  }

  return soma / custos.length           //custos.length: total de custos do objeto

}
// ----------------- ARRAY ----------------------------------
const custos = [
  { mes: 'janeiro', custoTotal: 5672 },
  { mes: 'fevereiro', custoTotal: 2357 },
  { mes: 'março', custoTotal: 5347 },
  { mes: 'abril', custoTotal: 6325 },
  { mes: 'maio', custoTotal: 6748 },
]

pegaMedia(custos)                      //invocando a função com o parametro custos
console.log(`A média é ${pegaMedia(custos)}`)

/*
05

Crie uma função que recebe um array de palavras como 
argumento e retorna apenas as palavras com mais de 3 
caracteres.

A função deve retornar um array.

Teste a função utilizando o array abaixo.
*/
const filtraPalavras = palavras => {  //parametro: palavras
  const filtradas = []

  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length > 3) {
      filtradas.push(palavras[i])
    }
  }
  return filtradas
}
const palavras = ['ovo', 'áudio', 'oi', 'telefones', 'ovni']

filtraPalavras(palavras)                   //invocando a função
console.log(filtraPalavras(palavras))
/*
06

Descomente o console.log abaixo. 

A invocação da função dobrar deveria retornar um array com 
cada número do array recebido como argumento multiplicado 
por 2. 

O array [1, 2, 3] foi inserido como argumento e a função 
deveria retornar [2, 4, 6]. 

Porém, ela está retornando [2].

Conserte a função para que ela retorne o array esperado. 
*/

const dobrar = numeros => {
  let numerosDobrados = []

  for (let i = 0; i < numeros.length; i++) {
    numerosDobrados.push(numeros[i] * 2)
    //return numerosDobrados                  //erro localizado - Return é palavra chave de função
  }
  return numerosDobrados                     //Só executará depois que o loop do FOR for totalmente executado. 
}

console.log(dobrar([1, 2, 3]))
