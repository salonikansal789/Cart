
//coffee : price_1NqV2ySH0iH1pQbWbggZakxU
//sunglasses: price_1NqV43SH0iH1pQbWukXt3sMt
////camers: price_1NqV4uSH0iH1pQbWAy7Bx5gP

const productsArray = [
    {
        id: "price_1NqV2ySH0iH1pQbWbggZakxU",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1NqV43SH0iH1pQbWukXt3sMt",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1NqV4uSH0iH1pQbWAy7Bx5gP",
        title: "Camera",
        price: 39.99
    }
];
function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}
export { productsArray, getProductData };