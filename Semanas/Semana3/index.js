listaDeArtistas = [
    objeto1 = {
        nomeArtista: "Racionais Mc.s",
        nomeAlbum: "Sobrevivendo no Inferno",
        anoLancamentoAlbum: 1997,
        artistaNacional: true,
        musicasPreferidasAlbum: ["Mágico de Oz", "Fórmula Mágica da Paz", "Capítulo 4, Versículo 3"]
        },

        objeto2 = {
            nomeArtista: "Eazy-E",
            nomeAlbum: "Eazy-Duz-It",
            anoLancamentoAlbum: 1988,
            artistaNacional: false,
            musicasPreferidasAlbum: ["Boyz-N-The Hood", "Eazy-Duz-It", "Nobody Move"]
            },
            
            objeto3 = {
            nomeArtista: "Tim Maia",
            nomeAlbum: "Tim Maia Disco Club",
            anoLancamentoAlbum: 1978,
            artistaNacional: true,
            musicasPreferidasAlbum: ["Sossego", "Se eu lembro faz doer", "Acenda o Farol"]    
            }
]
console.log ("Exercícios 1 e 2")

for (objetos of listaDeArtistas) {
    for (propriedades in objetos){
        console.log (`${propriedades}: ${objetos[propriedades]}`)
    }
    objetos.stringDoObjeto = objetos.musicasPreferidasAlbum.join(",")
}

console.log ("Exercício 3")
const relatorio = (listaDeArtistas) => {
    for (i in listaDeArtistas) {
        console.log (`Artista: ${listaDeArtistas[i].nomeArtista}; \nÉ uma artista nacional: ${
            listaDeArtistas[i].artistaNacional }; \nEscolhi o álbum "${listaDeArtistas[i].nomeAlbum}"
            como sugestão para que conheçam. Este álbum foi lançado em ${listaDeArtistas[i].anoLancamentoAlbum} e
            minhas músicas favoritas do álbum são: "${listaDeArtistas[i].musicasPreferidasAlbum}".`)
    }
}
relatorio(listaDeArtistas)

console.log ("Exercício 4")
const busca = (listaDeArtistas, string) => {
    const resultado = listaDeArtistas.filter((objeto) => {
        return objeto.nomeArtista === string || objeto.nomeAlbum === string || objeto.anoLancamentoAlbum === string
        || objeto.artistaNacional === string || objeto.musicasPreferidasAlbum === string
    })
    if (resultado.length > 0){
        console.log(resultado)
    }else{
        alert ("Nenhum item encontrado")
    }    
    }
    
    busca(listaDeArtistas, "Tim Maia Disco Club")