import { ShopCart } from "../modules/ShopCart.js"
import { ShowCase } from "../modules/ShowCase.js"
import { Api } from "../modules/Api.js"

const productsList = await Api.getAll()

const shopcart = new ShopCart(productsList)
shopcart.updateCart()

const showcase = new ShowCase(productsList)
showcase.addCardsFromListToHtml()

const showcaseHtml = document.querySelector('.showcase')

showcaseHtml.addEventListener("click", (evt) => {
    const buyButton =evt.target
    if(buyButton.tagName === 'BUTTON'){
        const idProduct = buyButton.getAttribute('data-id') 
        const product = showcase.getProduct(idProduct)
        console.log(product)
        shopcart.list.push(product)
        shopcart.updateCart()
    }
})

