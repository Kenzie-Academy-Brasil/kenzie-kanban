
const kenzieKanban = new Workspace(1,"Kenzie Kanban")
const todo = new Secao("Todo")
const fazerExercicio = new Card(1,"Fazer Exercícios da Kenzie","Preciso praticar mais")

todo.adicionarCard(fazerExercicio)
kenzieKanban.adicionarSecao(todo)

const areaSecoes = document.querySelector(".app_secoes")


kenzieKanban.secoes.forEach(imprimirSecoes)

function imprimirSecoes(secao){
    const nomeSecao  = secao.nome

    const header = appSecaoHeader(nomeSecao)
    const footer = appSecaoFooter(1)

    const appSecao = document.createElement("div")
    appSecao.classList.add("app_secao")

    const  listaCards = document.createElement("ul")

    appSecao.appendChild(header)
    appSecao.appendChild(listaCards)
    appSecao.appendChild(footer)
    areaSecoes.appendChild(appSecao)
}

const inputNovaSecao = document.querySelector(".app_container_add_secao input").value

























/************************** 
TEMPLATE HEADER SEÇÃO
***************************/
function appSecaoHeader(secaoNome){
    
    const appSecaoHeader = document.createElement("div")
    appSecaoHeader.classList.add("app_secao_header")

    const input = document.createElement("input")
    input.value = secaoNome
    input.type  = "text"
    input.placeholder = "Nome seção"
    appSecaoHeader.appendChild(input)
    
    return appSecaoHeader
}
/************************** 
TEMPLATE CARD
***************************/
function templateCards(idSecao,card) {
    const secao = document.querySelector(`.app_secao[data-id="${idSecao}"] ul`)
    const li = document.createElement("li")
    const h2 = document.createElement("h2")
    h2.innerText = card.nome
    const p  = document.createElement("p")
    p.innerText = card.descricao
    li.appendChild(h2)
    li.appendChild(p)

    secao.appendChild(li)
}

/************************** 
TEMPLATE  FOOTER 
***************************/
function appSecaoFooter(secaoId){
    const appSecaoFooter = document.createElement("div")
    appSecaoFooter.classList.add("app_secao_footer")

    const templateFooter = `<button>Adicionar novo card</button>
    <div class='app_secao_footer_card hidden'>
    <input type='text' name='tituloCard' placeholder='Título do card'>
    <textarea placeholder='Descrição' name='descricaoCard' id='descricaoCard' value='Descrção do card'></textarea>
    <button class='app_secao_footer_salvar_card' id='${secaoId}'>Add</button></div>`
    appSecaoFooter.innerHTML = templateFooter
    return appSecaoFooter
}

const appButtonabrirSecao = document.querySelector('.app_add_secao .app_button_add_secao');
const appContainerAddSecao = document.querySelector('.app_add_secao .app_container_add_secao');
appButtonabrirSecao.addEventListener('click', function(){
    appContainerAddSecao.classList.toggle('hidden');
})


