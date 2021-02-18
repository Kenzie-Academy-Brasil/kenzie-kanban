class Secao{
    constructor(nome){
        this._id     = 0;
        this._nome   = nome;
        this._cards  = [];
        this._idCard = 0;
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

        card.id      = this._idCard
        card.idSecao = this._id
        
        this._cards.push(card)

        this._idCard++
    }

    removerCard(idCard){
        this._cards.splice(idCard,1)
    }

}
