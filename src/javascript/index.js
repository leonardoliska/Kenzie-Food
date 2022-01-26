import { ShopCart } from "../modules/ShopCart.js";
import { Vitrine } from "../modules/Vitrine.js";

const shopcart = new ShopCart()

shopcart.updateCart()

const vitrine = new Vitrine()
vitrine.addCardsFromListToHtml()
