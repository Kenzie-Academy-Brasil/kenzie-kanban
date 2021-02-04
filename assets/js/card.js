class Card {
    constructor(id,nome,descricao){
        this._id        = id;
        this._nome      = nome;
        this._descricao = descricao
    }

    set nome(nome){
        this._nome = nome
    }

    get nome(){
        return this._nome 
    }

    set descricao(descricao){
        this._descricao = descricao
    }

    get descricao(){
        return this._descricao 
    }
}