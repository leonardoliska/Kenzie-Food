export { ShopCart }

class ShopCart {
    constructor() {
        this.html           = document.querySelector('.shopcart-cards-box')
        this.quantityHtml   = document.querySelector('.shopcart__quantity-number')
        this.totalHtml      = document.querySelector('.shopcart__total-number')
        this.emptyBox       = document.querySelector('.shopcart__empty-box')
        this.cartItemsBox   = [
            document.querySelector('.shopcart-cards-box'), 
            document.querySelector('.shopcart__bottom-quantity'), 
            document.querySelector('.shopcart__bottom-total')
        ]
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
    createNewCard({nome, preco, categoria, imagem}, index) {
        const card      = document.createElement('div')
        const figure    = document.createElement('figure')
        const image     = document.createElement('img')
        const name      = document.createElement('h2')
        const price     = document.createElement('span')
        const tag       = document.createElement('span')
        const button    = document.createElement('button')

        card.classList.add('shopcart-card')
        figure.classList.add('shopcart-card__figure')
        image.classList.add('shopcart-card__image')
        name.classList.add('shopcart-card__title')
        price.classList.add('shopcart-card__price')
        tag.classList.add('shopcart-card__tag')
        button.classList.add('shopcart-card__button')

        button.addEventListener('click', (evt) => this.removeFromCart(evt))

        button.setAttribute('data-id', index)

        image.src       = imagem
        image.alt       = nome
        name.innerHTML  = nome
        price.innerHTML = `R$ ${preco.toFixed(2)}`
        tag.innerHTML   = categoria

        card.appendChild(figure)
        figure.appendChild(image)
        card.appendChild(name)
        card.appendChild(price)
        card.appendChild(tag)
        card.appendChild(button)

        return card
    }
    
    addCardsFromListToHtml() {
        this.list.forEach((card, index) => {
            const createdCard = this.createNewCard(card, index)
            this.html.appendChild(createdCard)
        })
    }

    updateCart() {
        this.html.innerHTML = ''

        if (this.list.length > 0) {
            this.cartItemsBox.forEach(element => element.classList.remove('hidden'))
            this.emptyBox.classList.add('hidden')
            this.addCardsFromListToHtml()
            this.updateTotal()
        } 
        else {
            this.cartItemsBox.forEach(element => element.classList.add('hidden'))
            this.emptyBox.classList.remove('hidden')
        }
    }
    removeFromCart(evt) {
        const id = evt.currentTarget.dataset.id

        this.list.splice(id, 1)

        this.updateCart()
    }
    updateTotal() {
        const totalPrice = this.list.reduce((previousValue, currentValue) => previousValue + currentValue.preco, 0) 
        const totalQuantity = this.list.length

        this.quantityHtml.innerHTML = totalQuantity
        this.totalHtml.innerHTML    = `R$ ${totalPrice.toFixed(2)}`
    }
}