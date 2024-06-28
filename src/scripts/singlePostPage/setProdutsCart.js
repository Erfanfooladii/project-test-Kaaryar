const list = JSON.parse(localStorage.getItem("productlist"));
const btnAddCart = document.querySelector(".btn-add-cart");
const selectCounter = document.querySelector('.selected');
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const numberCart = document.querySelector('.number-cart');
const notifay= document.querySelector(".notifay")
let isChangeState = true;

const setNumber = (number, idProduct, totalPrice) => {
    return {
        number_product: number,
        idProduct,
        total_price: Math.floor(totalPrice * number)
    };
};
const setNotifay=(value)=>{
    const text=notifay.querySelector(".text")
    text.innerHTML=value
    notifay.classList.add('open-notifay')
    setTimeout(() => {
        notifay.classList.remove('open-notifay')
    }, 1000);
}
const idProduct = location.hash.slice(1);

btnAddCart.addEventListener("click", (e) => {
    if (isChangeState) {
        isChangeState = false;
        e.target.innerHTML = "Remove from cart";
        setNotifay("Added to the cart")
        const numberProduct = selectCounter.value;
        const objIndex = cartItems.findIndex(obj => obj.idProduct === idProduct);
        if (objIndex !== -1) {
            cartItems[objIndex].number_product = numberProduct;
        } else {
            cartItems.push(setNumber(numberProduct, idProduct, list[idProduct].price));
        }
        localStorage.setItem("cart", JSON.stringify(cartItems));
        const totalQuantityLs = cartItems.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.number_product), 0);
        numberCart.innerHTML = totalQuantityLs;
        
    } else {
        isChangeState = true;
        e.target.innerHTML = "Add to cart";
        setNotifay("Removeid from the cart")
        const productIdDelete = cartItems.filter(item => item.idProduct !== idProduct);
        localStorage.setItem("cart", JSON.stringify(productIdDelete));
        const subtractQuantityLs = productIdDelete.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.number_product), 0);
        numberCart.innerHTML = subtractQuantityLs;
    }
});

selectCounter.addEventListener("change", () => {
    if (isChangeState == false) {
        isChangeState = true;
        btnAddCart.innerHTML = "Update";
    }
});

const filterProduct=cartItems.filter(item =>{
    return item.idProduct === idProduct
})
if (filterProduct[0].number_product >= 1) {
    isChangeState =false
    btnAddCart.innerHTML="Remove from cart"
}