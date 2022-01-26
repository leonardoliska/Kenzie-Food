import { ShopCart } from "../modules/ShopCart.js";
import { Api } from "../modules/Api.js"

const productsList = await Api.getAll()

const shopcart = new ShopCart(productsList)

shopcart.updateCart()

console.log(await Api.getMyAll())

