const adminProducts = (img, name, price) => {
    const category__product = document.createElement("div");
    const allProducts =`
        <div class="category__product">
            <div class="product__card-edit">
                <a href="#"><img class="card__icon-edit" src="../assets/icon-edit.svg" alt="Icono de editar"></a>
                <a href="#"><img class="card__icon-delete" src="../assets/icon-delete.svg" alt="Icono de eliminar"></a>
            </div>
            <img class="category__img" src="${img}" alt="Imagen del producto">
            <h4 class="category__name">${name}</h4>
            <p class="category__price">$ ${price}</p>
        </div>
    `;
    category__product.innerHTML = allProducts;
    return category__product;
}

const productStock = document.querySelector("[data-products]");

const stockProductsAdmin = () => fetch("http://localhost:3000/products").then( resp => resp.json());

stockProductsAdmin().then((data) => {
    data.forEach( product => {
        const newProduct = adminProducts(product.img, product.name, product.price);
        productStock.appendChild(newProduct);
    });
}).catch((error) => alert('Ocurrio un error'));