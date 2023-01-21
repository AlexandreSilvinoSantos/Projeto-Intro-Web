const locacaoDeEmpilhadeiras = []

const objeto1 = {
    nome: "Empilhadeira Hyster 50XT",
    preco: 3000,
    eletrica: false,
    descricao: ["capacidade 2ton", "transmissao manual", "diesel, gas", "torre simples"],
    imagem:"https://www.agrofy.com.br/empilhadeira-a-combust-o-hyster-h50xt-2-5-ton.html",
    site:"https://www.agrofy.com.br"
}

const objeto2 = {
    nome: "Empilhadeira Hyster H70FT",
    preco: 4200,
    eletrica: false,
    descricao: ["capacidade 3,5ton", "transmissao automatica", "diesel, gas", "torre duplex"],
    imagem:"https://www.agrofy.com.br/empilhadeira-hyster-h-70ft-diesel-2011.html",
    site:"https://www.agrofy.com.br"
}

const objeto3 = {
    nome: "Empilhadeira Eletrica Still E-20",
    preco: 8000,
    eletrica: true,
    descricao: ["capacidade 2ton", "transmissao automatica", "eletrica"],
    imagem:"https://www.still.com.br/empilhadeiras/empilhadeiras-novas/empilhadeiras-eletricas-frontais/e-20.html",
    site:"https://www.still.com.br"
}

let empilhadeiras = []
empilhadeiras.push(objeto1,objeto2,objeto3)
//console.log(empilhadeiras)

for (let i =0;i<empilhadeiras.length; i++) {
    if(empilhadeiras[i].eletrica === true) {
        locacaoDeEmpilhadeiras.push(empilhadeiras[i])
    }
}

for(let i=0;i<empilhadeiras.length;i++) {
    console.log(empilhadeiras[i].descricao.toString())
}

function empilhadeirasRelatorio(objeto) {
    console.log(`Nome:${objeto.nome.toUpperCase()}\nPreço:${objeto.preco}\nEletrica?${objeto.eletrica ?"sim":"não"}
    \nQual a descrição?${objeto.descricao}\n`)
}
for (let i=0;i<empilhadeiras.length;i++) {
    empilhadeirasRelatorio(empilhadeiras[i]);
};

function buscarEmpilhadeiras (empilhadeiras) {
    const nome = prompt("Qual modelo de empihadeira você deseja").toUpperCase()
    let objeto = empilhadeiras.filter(
        empilhadeira=>{
            return empilhadeira.descricao.toUpperCase().includes(nome)
        }
    )
    if(objeto.length === 0) {
        alert("empilhadeira não encontrada!")
    }else{
        console.log("Empilhadeira localizada!!!")
        return objeto
    }
}
//buscarEmpilhadeiras(empilhadeiras)

function criarCard (objeto) {
    const card = document.createElement("div")
    const imgEmp = document.createElement("img")
    const nomeEmp = document.createElement("a")
    const descricao = document.createElement("ul")
    const preco = document.createElement("li")

    imgEmp.src = objeto.imagem
    nomeEmp.innerText = objeto.nome
    nomeEmp.href = objeto.site
    nomeEmp.target = "_blank"
    preco.innerText = `Preço : R$ ${objeto.preco}`
    empilhadeiras.innerText = `Eletrica? ${objeto.eletrica? "Sim" : "Não"}`
    descricao.innerText = `Descrição: ${objeto.descricao.toString(" ")}`

    card.className = "card"
    dados.className = "texto"

    dados.append(nomeEmp, preco, descricao)
    card.append(imgEmp, dados)
console.log("card")
    return card
}

function renderizarEmp (list) {
    const secaoEmp = document.getElementById("secaoEmp")
    secaoEmp.innerHTML = ""
    console.log(list)

    list.forEach(empilhadeira => {
        const cardEmpCriado = criarCard(empilhadeira)
        secaoEmp.appendChild(cardEmpCriado)
    })
}

renderizarEmp(empilhadeiras)

function pesquisarEmpilhadeiras() {
    const inputPesquisa = document.getElementById("txtBusca")
    const botaoPesquisa = document.getElementById("btnBusca")

    botaoPesquisa.addEventListener("click", () => {
        const valor = inputPesquisa.value 

        const filtro = empilhadeiras.filter(empilhadeiras => empilhadeiras.nome === valor)
        console.log(filtro)

        if(filtro.length) {
            renderizarEmp(filtro)
        }else {
            renderizarEmp(empilhadeiras)
            alert("Empilhadeira não localizada!!!")
        }
    })
}

pesquisarEmpilhadeiras()