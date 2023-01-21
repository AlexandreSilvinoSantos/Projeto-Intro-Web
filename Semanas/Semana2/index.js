/* 1 - Transforme os itens que criamos nas últimas semanas em objetos.*/
const objeto1 = {
nomeArtista: "Racionais Mc.s",
nomeAlbum: "Sobrevivendo no Inferno",
anoLancamentoAlbum: 1997,
artistaNacional: true,
musicasPreferidasAlbum: ["Mágico de Oz", "Fórmula Mágica da Paz", "Capítulo 4, Versículo 3"]
}

const objeto2 = {
nomeArtista: "Eazy-E",
nomeAlbum: "Eazy-Duz-It",
anoLancamentoAlbum: 1988,
artistaNacional: false,
musicasPreferidasAlbum: ["Boyz-N-The Hood", "Eazy-Duz-It", "Nobody Move"]
}

const objeto3 = {
nomeArtista: "Tim Maia",
nomeAlbum: "Tim Maia Disco Club",
anoLancamentoAlbum: 1978,
artistaNacional: true,
musicasPreferidasAlbum: ["Sossego", "Se eu lembro faz doer", "Acenda o Farol"]    
}

/* 2 - Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;*/
let primeiroArray = [];
/*console.log (primeiroArray)*/

/* 3 - Adicione os objetos criados no item 1 ao array de objetos no item 2, utilizando o push()*/
let segundoArray = primeiroArray.splice();
/*segundoArray.push(objeto1, objeto2, objeto3)*/
/*console.log (segundoArray)*/

/* 4 - Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3),
para criar uma verificação antes de dar o push. A característica booleana do objeto deve ser validada.
Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;/*
/* 5 - Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando
para o usuário que o item não foi adicionado, e não faça o push.*/
if (objeto1.artistaNacional === true){
    segundoArray.push(objeto1);
    console.log(segundoArray)
}else {
    alert ("O artista é brasileiro? NÃO \nOBJETO 1 não adicionado.")
}if (objeto2.artistaNacional === true){
    segundoArray.push(objeto2)
    console.log(segundoArray)
}else{
    alert ("O artista é brasileiro? NÃO \nOBJETO 2 não adicionado.")
}if (objeto3.artistaNacional === true){
    segundoArray.push(objeto3)
    console.log(segundoArray)
}else{
    alert ("O artista é brasileiro? NÃO \nOBJETO 3 não adicionado.")
}

