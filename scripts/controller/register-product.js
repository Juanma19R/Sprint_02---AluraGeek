import { productServices } from "../service/server.js";
const formAddProduct = document.querySelector("[data-form]");

formAddProduct.addEventListener("submit", (e) => {
    e.preventDefault();

    const img = document.querySelector("[data-img]").value;
    const category = document.querySelector("[data-category]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const desc = document.querySelector("[data-desc]").value;

    productServices
        .addProduct(img, category, name, price, desc)
        .then(resp => {
            window.location.href = "/pages/check.html";
        })
        .catch(err => console.log(err));
});