const cartList = JSON.parse(localStorage.getItem("cart")) || [];
const listProduct= JSON.parse(localStorage.getItem("productlist"))
const totalQuantity = cartList.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.number_product), 0);
const numberElement=document.querySelector('.number-cart')
const totalCartPriceEl=document.querySelectorAll('.total-price-cart ')
const numberElItems=document.querySelectorAll('.number-item')

const totalPrice=document.querySelector('.price-total')
const id = location.hash.slice(1);


numberElement.innerHTML=totalQuantity
const numberTotalPrices=cartList.map((item)=>{
    return item.total_price
})
const sumPrice = numberTotalPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
totalCartPriceEl[0].innerHTML=sumPrice
totalCartPriceEl[1].innerHTML=sumPrice
numberElItems[0].innerHTML=totalQuantity
numberElItems[1].innerHTML=totalQuantity

cartList.filter(item => {
    if (item.idProduct == id) {
        document.querySelector('.selected').value=item.number_product
        const totalNumberAndPrise=listProduct[id].price * item.number_product
        totalPrice.innerHTML=totalNumberAndPrise
    }
})