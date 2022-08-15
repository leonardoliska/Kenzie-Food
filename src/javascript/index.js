import { ShopCart } from "../modules/ShopCart.js";
import { ShowCase } from "../modules/ShowCase.js";
import { Api } from "../modules/Api.js";

const productsList = await Api.getAll();
const localStorageList = localStorage.getItem("cartList");

const shopcart = new ShopCart(localStorageList);
shopcart.updateCart();

const showcase = new ShowCase(productsList);
showcase.addCardsFromListToHtml(productsList);

const showcaseHtml = document.querySelector(".showcase");

showcaseHtml.addEventListener("click", (evt) => {
  const buyButton = evt.target;
  if (buyButton.tagName === "BUTTON") {
    const idProduct = buyButton.getAttribute("data-id");
    const product = showcase.getProduct(idProduct);
    shopcart.list.push(product);
    shopcart.updateCart();
    localStorage.setItem("cartList", JSON.stringify(shopcart.list));
  }
});

const navFilter = document.querySelector(".nav-filter");

navFilter.addEventListener("click", (evt) => {
  const navButton = evt.target;
  if (navButton.tagName === "BUTTON") {
    const buttonName = navButton.value;
    showcase.filterByTag(buttonName);
  }
});

const headerInput = document.querySelector(".header__input");

headerInput.addEventListener("input", (evt) => {
  const inputSearch = document.querySelector(".header__input");
  const inputValue = inputSearch.value.toLowerCase();
  showcase.filterBySearch(inputValue);
});
