const addProduct = (img, category, name, price, desc) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({img, category, name, price, desc, id: uuid.v4()})
    });
}

export const productServices = {
    addProduct
}