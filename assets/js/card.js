class Card {
    constructor(idSecao,nome,descricao){
        this._idSecao   = idSecao;
        this._id        = 0;
        this._nome      = nome;
        this._descricao = descricao
    }

    set id(id){
        this._id = id
    }

    get id(){
        return this._id 
    }

    set idSecao(idSecao){
        this._idSecao = idSecao
    }

    get idSecao(){
        return this._idSecao 
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