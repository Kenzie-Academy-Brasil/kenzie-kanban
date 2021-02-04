class Workspace{
    constructor(id,nome){
        this._id     = id;
        this._nome   = nome;
        this._secoes = [];
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
        this._secoes.push(secao)
    }

    removerSecao(secao){
        
    }

}