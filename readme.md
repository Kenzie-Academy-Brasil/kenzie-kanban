## Bora Codar - Gerenciador de Projetos Kenzie Kanban 

Nessa série vamos aprender __juntos como desenvolver um gerenciador de tarefaz__, utilizando apenas javaScrip com conceitos de __Oritentação a Objeto__.


- [Playlist da primeira temporada do Bora Codar](https://www.youtube.com/watch?v=biwpmimjHtU&list=PL0Yihm-vUJs91vtobNQbQIw9hgFoPgYqh)
- [Bora Codar: Criando um Gerenciador de Tarefas #1](https://www.youtube.com/watch?v=biwpmimjHtU&list=PL0Yihm-vUJs91vtobNQbQIw9hgFoPgYqh)
- [Bora Codar: Criando um Gerenciador de Tarefas #2](https://www.youtube.com/watch?v=_cP7n8NKtfY&list=PL0Yihm-vUJs91vtobNQbQIw9hgFoPgYqh&index=2)
-[Bora Codar: Criando um Gerenciador de Tarefas #3](https://www.youtube.com/watch?v=PcIzrfKli-0&list=PL0Yihm-vUJs91vtobNQbQIw9hgFoPgYqh&index=3)

---

## Último desafio

### Para completar o desafio, você precisa cumprir as seguintes etapas.

- Mover os cards utilizando o conceito do Drag and Drop.
- Subir em um repositório github
- Enviar no direct do instagram da Kenzie Academy (@kenzieAcademyBr)
- Tirar uma foto ou fazer um vídeo da aplicação funcionando
- Marcar Instagram da Kenzie  (@kenzieAcademyBr)
- Você pode mudar o template mas precisa ser em javaScript (então aproveite para fazer com a sua cara!) mude as cores, adicione coisas novas.
- __Apenas os 5 primeiros__
- __Data de entrega 18/02/2021 18:00hr__

---

### Não obrigatório

Para esse desafio você não precisa executar as funcionalidades de (salvar o card na seção toda as vezes que você alterar o card) Pode ser representativo no funcional apenas no front.

---

### Referencias Drag and Drop:

- [Drag and Drop w3schools](https://www.w3schools.com/html/html5_draganddrop.asp)
- [Drag and Drop MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag and Drop Web Dev](https://web.dev/drag-and-drop/)

---

### Dicas: 
``` Javascript
function imprimirSecoes(secao){
    const nomeSecao  = secao.nome
    
    const idSecao = secao.id;

    const header = appSecaoHeader(nomeSecao)
    const footer = appSecaoFooter(idSecao)

    const appSecao = document.createElement("div")
    appSecao.classList.add("app_secao")

    appSecao.dataset.id = idSecao
   
    const  listaCards = document.createElement("ul")
    listaCards.classList.add("dropzone")
    listaCards.addEventListener("drop",drop)    
    listaCards.addEventListener("dragover",allowDrop) 

    appSecao.appendChild(header)
    appSecao.appendChild(listaCards)
    appSecao.appendChild(footer)
    areaSecoes.appendChild(appSecao)

    resetarControles();
}

```

---

### Não esqueça!!!

Deixa o like, se inscrevam no nosso canal e nos acompanhem nas redes sociais:
- [Youtube](https://www.youtube.com/channel/UC6rcCbDzhVoIm1V7WnwPDIQ)
- [Instagram](https://www.instagram.com/kenzieacademybr/)
- [Linkedin](https://www.linkedin.com/school/kenzie-academy-brasil/)
- [Facebook](https://www.facebook.com/search/top?q=kenzie%20academy%20brasil)
- Para mais informações - [site](https://kenzie.com.br/)


E até a próxima! 

