export { Vitrine }

class Vitrine{
    constructor() {
        this.html = document.querySelector('.showcase')
        this.list = [
            {
                "id": 1,
                "nome": "Mousse de morango com a fruta",
                "preco": 27.5,
                "categoria": "Frutas",
                "descricao": "Sobremesa fácil, rápida e muito saborosa: a mousse de morango leva apenas 5 ingredientes; confira como fazer a receita",
                "imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/mousse.png",
                "createdAt": "2022-01-24T16:25:25.401Z",
                "updatedAt": "2022-01-24T16:25:25.401Z"
            },
            {
                "id": 2,
                "nome": "Panqueca de banana com aveia",
                "preco": 20,
                "categoria": "Panificadora",
                "descricao": "Esta receita serve muito bem 2 pessoas, deixa a gente bem satisfeito, se não tiver outra opção de café. Se tiver mais comida, como pães e frutas.",
                "imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/panqueca.png",
                "createdAt": "2022-01-24T16:26:44.903Z",
                "updatedAt": "2022-01-24T16:26:44.903Z"
            },
            {
                "id": 3,
                "nome": "Pastel de verduras vegano",
                "preco": 20,
                "categoria": "Panificadora",
                "descricao": "Todos nós fervemos vegetais, salteamos ou consumimos crus. Mas que tal comer vegetais como se fossem um bolo?",
                "imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/pastel.png",
                "createdAt": "2022-01-24T16:27:32.190Z",
                "updatedAt": "2022-01-24T16:27:32.190Z"
            }
        ]
    }

    createNewCard({ nome, preco, categoria, imagem, descricao, id}) {
        const card = document.createElement('div')
        const figure = document.createElement('figure')
        const image = document.createElement('img')
        const textContainer = document.createElement('div')
        const tag = document.createElement('span')
        const title = document.createElement('h2')
        const description = document.createElement('p')
        const price = document.createElement('h3')
        const button = document.createElement('button')


        card.classList.add('showcase-card')
        figure.classList.add('showcase-card__figure')
        image.classList.add('showcase-card__image')
        textContainer.classList.add('showcase-card__text-container')
        tag.classList.add('showcase-card__tag')
        title.classList.add('showcase-card__title')
        description.classList.add('showcase-card__description')
        price.classList.add('showcase-card__price')
        button.classList.add('showcase-card__button')

        button.addEventListener('click', (evt) => this.addToCart(evt))
        button.setAttribute('data-id', id)

        image.src = imagem
        image.alt = nome
        tag.innerHTML = categoria
        title.innerHTML = nome
        description.innerHTML = descricao
        price.innerHTML = `R$ ${preco.toFixed(2)}`

        
        card.appendChild(figure)
        figure.appendChild(image)
        textContainer.appendChild(tag)
        textContainer.appendChild(title)
        textContainer.appendChild(description)
        textContainer.appendChild(price)
        textContainer.appendChild(button)
        card.appendChild(textContainer)

        return card
    }

    addCardsFromListToHtml() {
        this.list.forEach((card) => {
            const createdCard = this.createNewCard(card)
            this.html.appendChild(createdCard)
        })
    }
}


