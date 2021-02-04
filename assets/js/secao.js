class Secao{
    constructor(nome){
        this._id    = 0;
        this._nome  = nome;
        this._cards = []
    }

    set id(id){
        this._id = id
    }

    get id(){
        return  this._id
    }

    set nome(nome){
        this._nome = nome
    }

    get nome(){
        return  this._nome
    }

    get cards(){
        return this._cards
    }

    adicionarCard(card){
        this._cards.push(card)
    }

    removerCard(card){
        this._cards.push(card)
    }

}