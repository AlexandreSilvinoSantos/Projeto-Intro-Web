/* 1 - Lista de cantores contendo: Nome do artista, nome do álbum, ano de lançamento, é artista nacional?
2 - Criar três conjuntos de variábeis utilizando as características que você definiu acima. Lembre-se que
deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.*/

const nomeArtista1 = ( 'Racionais Mc.s')
const nomeAlbum1 = ('Sobrevivendo no Inferno')
const anoLancamentoAlbum1 = 1997
const artistaNacional1 = true

const nomeArtista2 = ( 'Eazy-E')
const nomeAlbum2 = ('Eazy-Duz-It')
const anoLancamentoAlbum2 = 1988
const artistaNacional2 = false

const nomeArtista3 = ( 'Tim Maia')
const nomeAlbum3 = ('Tim Maia Disco Club')
const anoLancamentoAlbum3 = 1978
const artistaNacional3 = true

/* 3 - Faça um cálculo de média, entre os valores númericos respectivos de cada item. Imprima o valor da
média utilizando um console.log. Guarde este valor em uma const;*/
const media = (anoLancamentoAlbum1 + anoLancamentoAlbum2 + anoLancamentoAlbum3) / 3
console.log (`O valor da média dos valores numéricos é ${media};`)

/* 4 - Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de
variáveis booleanas criadas até aqui são verdadeiras.*/
console.log (`Todos os calores de variáveis booleanas(artista nacional) criadas até aqui são verdadeiras?
${artistaNacional1 && artistaNacional2 && artistaNacional3 === true};`)

/* 5 - Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um 
array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.*/
const musicasPreferidasAlbum1 = ["Mágico de Oz", "Fórmula Mágica da Paz", "Capítulo 4, Versículo 3"]
const musicasPreferidasAlbum2 = ["Boyz-N-The Hood", "Eazy-Duz-It", "Nobody Move"]
const musicasPreferidasAlbum3 = ["Sossego", "Se eu lembro faz doer", "Acenda o Farol"]

/* 6 - Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui.*/
console.log (`
Nome do Artista: ${nomeArtista1.toUpperCase()};
Nome do Álbum: ${nomeAlbum1};
Ano de Lançamento do Álbum: ${anoLancamentoAlbum1}.`)

console.log (`
Nome do Artista: ${nomeArtista2.toUpperCase()};
Nome do Álbum: ${nomeAlbum2};
Ano de Lançamento do Álbum: ${anoLancamentoAlbum2}.`)

console.log (`
Nome do Artista: ${nomeArtista3.toUpperCase()};
Nome do Álbum: ${nomeAlbum3};
Ano de Lançamento do Álbum: ${anoLancamentoAlbum3}.`)

