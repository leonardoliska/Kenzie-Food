import { ShopCart } from "../modules/ShopCart.js"
import { Vitrine } from "../modules/Vitrine.js"
import { Api } from "../modules/Api.js"

const productsList = await Api.getAll()

const shopcart = new ShopCart(productsList)

shopcart.updateCart()

const vitrine = new Vitrine()
vitrine.addCardsFromListToHtml()

