let listItemCart = JSON.parse(localStorage.getItem("cart")) || [];
let isChangeBtnState = true;
const lsProduct = JSON.parse(localStorage.getItem("productlist"));
const btnStatus = document.querySelectorAll('.btn-status');
const selectorQuantity = document.querySelectorAll('.counter');
const numberItemCart=document.querySelectorAll('.number-item')
const setNewChangeNumber = (number, idProduct, totalPrice) => {
    return {
        number_product: number,
        idProduct,
        total_price: Math.floor(totalPrice * number)
    };
};

const handleButtonClick = (e, itemCart, index) => {
    e.preventDefault();
    if (isChangeBtnState) {
        e.target.innerHTML = 'Delete';
        listItemCart = listItemCart.filter((item) => item.idProduct !== itemCart.idProduct);
        localStorage.setItem('cart', JSON.stringify(listItemCart));
        location.reload()
    } else {
        isChangeBtnState=true
        const values = selectorQuantity[index].value;
        const objIndex = listItemCart.findIndex(obj => obj.idProduct === listItemCart[index].idProduct);
        if (objIndex !== -1) {
            listItemCart[objIndex].number_product = values;
        } else {
            listItemCart.push(setNewChangeNumber(values, idProduct, list[idProduct].price));
        }
        const totalQuantityLs = listItemCart.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.number_product), 0);
        document.querySelector('.number-cart').innerHTML = totalQuantityLs;
        numberItemCart[0].innerHTML=totalQuantityLs;
        numberItemCart[1].innerHTML=totalQuantityLs;
        const lsd=lsProduct.filter(item => item.id == itemCart.idProduct)
        const totalPrice=itemCart.number_product * lsd[index].price
        localStorage.setItem("cart", JSON.stringify(listItemCart));
        e.target.innerHTML="Delete"
    }
};


const handleQuantityChange = (index) => {
    isChangeBtnState = false;
    btnStatus[index].innerHTML = 'Update';
};

const handleClick = (itemCart, index) => {
    btnStatus[index].addEventListener('click', (e) => handleButtonClick(e, itemCart, index));
    selectorQuantity[index].value = itemCart.number_product;
    selectorQuantity[index].addEventListener('change', () => handleQuantityChange(index));
};

listItemCart.forEach((itemCart, index) => {
    handleClick(itemCart, index);
});
  