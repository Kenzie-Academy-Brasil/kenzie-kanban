//**********************************/
// INICIALIZANDO APLICAÇÃO MODELO
//***********************************/
//1 - CRIA WORKSPACE MODELO
const kenzieKanban = new Workspace(0,"Kenzie Kanban")

//2 - CRIA UMA NOVA SEÇÃO MODELO
const todo = new Secao("Todo")

//3 - CRIA CARD DE ATIVIDADES MODELO
//const fazerExercicio = new Card(0,"Fazer Exercícios da Kenzie","Preciso praticar mais")

//4 - ADICIONA O CARD DENTRO DA SEÇÃO MODELO
//todo.adicionarCard(fazerExercicio)

//5 - ADICIONA A SEÇÃO DENTRO DO WORKSPACE MODELO
kenzieKanban.adicionarSecao(todo)

//6 - IMPRIME MODELOS CRIADOS
const areaSecoes = document.querySelector(".app_secoes")
kenzieKanban.secoes.forEach(imprimirSecoes)

//**********************************/
// INICIALIZANDO APLICAÇÃO
//***********************************/

//SELECIONA INPUT PARA PEGAR O NOME DE UMA NOVA SEÇÃO
const inputNovaSecao = document.querySelector(".app_container_add_secao input");
//SELECIONA O INPUT PARA ADICIONAR SEÇÃO
const buttonNovaSecao = document.querySelector('.app_container_add_secao .app_input_add_secao');
//ADICONA EVENTO DE CLINE  NO INPUT PARA ADICIONAR SEÇÃO
buttonNovaSecao.addEventListener('click', salvarSecao);

function salvarSecao(){
    
    //1 - PEGA O NOME DA SEÇÃO DIGITADO NO CAMPO
    const nomeNovaSecao = inputNovaSecao.value;
    
    //2 - RESETA O VALOR DO CAMPO
    inputNovaSecao.value = '';

    if(validacao(nomeNovaSecao) !== false){
        //3 - CRIA UMA NOVA SEÇÃO
        const novaSecao = new Secao(nomeNovaSecao);
        
        //4 - ADICIONAR SEÇÃO NO WORKSPACE ATUAL
        kenzieKanban.adicionarSecao(novaSecao);
        
        //5 - LISTA SEÇÃO ADICIONADA NA PAGINA
        imprimirSecoes(novaSecao);
    }else{
        mostrarMensagemValidacao()
    }

}

// Função para salvar os cards
function salvarCard(){
    
    //1 - SELECIONA O CARD CLICADO
    const secaoId = this.id;
    const parent = this.parentElement;

    //2 - SELECIONA OS INPUTS COM OS VALORES
    const inputNomeCard = parent.querySelector('input');
    const inputDescricaoCard = parent.querySelector('textarea');

    //3 - SELECIONA OS VALORES
    const nomeCard = inputNomeCard.value;
    const descricaoCard = inputDescricaoCard.value;

    
    //4 -  RESETA OS CAMPOS
    inputNomeCard.value = '';
    inputDescricaoCard.value = '';

    if(validacao(nomeCard) !== false){
        //5 - CRIA UM NOVO CARD
        const novoCard = new Card(secaoId, nomeCard, descricaoCard);
        
        //6 - ADICIONA ESSE CARD NA SEÇÃO ATUAL 
        kenzieKanban.adicionarCard(secaoId, novoCard);

        //7 LISTA O CARD NA SEÇÃO ATUAL
        templateCards(novoCard);
    }else{
        mostrarMensagemValidacao()
    }
}

function imprimirSecoes(secao){
    const nomeSecao  = secao.nome

    // pegar o id da seção que vai ser criada
    const idSecao = secao.id;

    const header = appSecaoHeader(nomeSecao)
    const footer = appSecaoFooter(idSecao)

    const appSecao = document.createElement("div")
    appSecao.classList.add("app_secao")

    // passar o id para o elemento appSeção
    appSecao.dataset.id = idSecao

    const  listaCards = document.createElement("ul")

    appSecao.appendChild(header)
    appSecao.appendChild(listaCards)
    appSecao.appendChild(footer)
    areaSecoes.appendChild(appSecao)

    // adiciona os eventos de clique
    resetarControles();
}

function validacao(inputText){
    const valorTexto  = inputText.trim()

    if(valorTexto !== ""){
       return valorTexto
    }

    return false
}

