export { ShopCart }

class ShopCart {
    constructor() {
        this.list           = []
        this.cartHtml       = document.querySelector('.shopcart-cards-box')
        this.quantityHtml   = document.querySelector('.shopcart__quantity-number')
        this.totalHtml      = document.querySelector('.shopcart__total-number')
        this.emptyBox       = document.querySelector('.shopcart__empty-box')
        this.itemsBox   = [
            document.querySelector('.shopcart-cards-box'), 
            document.querySelector('.shopcart__bottom-quantity'), 
            document.querySelector('.shopcart__bottom-total')
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
            this.cartHtml.appendChild(createdCard)
        })
    }
    

    updateCart() {
        this.cartHtml.innerHTML = ''

        if (this.list.length > 0) {
            this.itemsBox.forEach(element => element.classList.remove('hidden'))
            this.emptyBox.classList.add('hidden')
            this.addCardsFromListToHtml()
            this.updateTotal()
        } 
        else {
            this.itemsBox.forEach(element => element.classList.add('hidden'))
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