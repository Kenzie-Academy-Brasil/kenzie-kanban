class Workspace{
    constructor(id,nome){
        this._id     = id;
        this._nome   = nome;
        this._secoes = [];

        // criar atributo idSecao para incrementar o id das seções, sempre que criar nova seção
        this._idSecao = 0;
    }
    
    set nome(nome){
        this._nome = nome
    }

    get nome(){
        return this._nome
    }

    get secoes(){
        return this._secoes
    }
    
    adicionarSecao(secao){
        // atribuimos o id para a seção criado
        secao.id = this._idSecao;
        this._secoes.push(secao)

        // precisamos incrementar o id para ser passado para a próxima seção
        this._idSecao++;
    }

    // criamos método para adicionar novo card
    // esse método recebe o idSecao, para saber em qual seção será adicionado
    // recebe também o card que sera adicionado
    adicionarCard(idSecao,card){
        const secoes = this.secoes
        // console.log(idSecao);
        // com o id da seção, identificamos a posição que o card vai ser adicionado na array de seções
        // e ai é chamado o método adicionarCard da seção, para que ele seja adicionado apenas numa seção específica
        secoes[idSecao].adicionarCard(card)
    }

    // removerSecao(secao){
        
    // }

}