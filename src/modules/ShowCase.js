export { ShowCase }

class ShowCase {
    constructor(productsList) {
        this.html = document.querySelector('.showcase')
        this.list = productsList
    }

    createNewCard({ nome, preco, categoria, imagem, descricao, id }) {
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

    getProduct(idProduto) {
        const findProduct = this.list.find(function (productsList) {
            return productsList.id == idProduto
        })
        return findProduct
    }

}


