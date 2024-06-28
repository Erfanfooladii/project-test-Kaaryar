const listProductsCart= JSON.parse(localStorage.getItem("productlist"))
const listCarts = JSON.parse(localStorage.getItem("cart")) || [];


const cartProductsEl=document.querySelector('.list-items-cart')
const elementCreat=({
    image_link,
    descriptons,
    price,
    id,
    number_product
})=>{
    return `
        <div class="item">
                    <div class="image-product">
                      <img src="${image_link}" alt="product image">
                    </div>
                    <div class="details-item">
                      <div class="title-details">
                        <p class="title-product">${descriptons}</p>
                        <span calss="price-total">$${price}</span>
                      </div>
                      <div class="body-item">
                        <h6 class="g-color">In Stock</h6>
                        <img src="../assets/images/prime.webp" alt="prime logo">
                        <div class="check">
                          <input type="checkbox">
                          <p>This will be a gift <a href="#">Learn more</a></p>
                        </div>
                        <span class="name-style"><h6>Style Name:</h6>0.5 litre work container</span>
                        <span class="name-colour"><h6>Colour name:</h6>white</span>
                        <div class="list-links">
                          <select class="counter set-${id}">
                            <option value="1">Quantity: 1</option>
                            <option value="2">Quantity: 2</option>
                            <option value="3">Quantity: 3</option>
                            <option value="4">Quantity: 4</option>
                            <option value="5">Quantity: 5</option>
                            <option value="6">Quantity: 6</option>
                            <option value="7">Quantity: 7</option>
                            <option value="8">Quantity: 8</option>
                            <option value="9">Quantity: 9</option>
                            <option value="10">Quantity: 10</option>
                            <option value="11">Quantity: 11</option>
                            <option value="12">Quantity: 12</option>
                            <option value="13">Quantity: 13</option>
                            <option value="14">Quantity: 14</option>
                            <option value="15">Quantity: 15</option>
                            <option value="16">Quantity: 16</option>
                            <option value="17">Quantity: 17</option>
                            <option value="18">Quantity: 18</option>
                            <option value="19">Quantity: 19</option>
                            <option value="20">Quantity: 20</option>
                          </select>
                          <a class="btn-status">Delete</a>
                          <a href="#">Save for later</a>
                          <a href="#">See more like this</a>
                          <a href="#">Share</a>
                        </div>
                      </div>
                    </div>
                  </div>
    `
}

let cartProductsHTML = '';
listCarts.forEach(item => {
  const itemProduct = listProductsCart[item.idProduct];
  
  
  const elSelected = document.querySelector(`.set-${itemProduct.id}`);
  const itemCart=listCarts.filter((cartItem)=>{
    return cartItem.idProduct == item.idProduct
  })

  itemCart.forEach((item,index) =>{
    cartProductsHTML += elementCreat({
      image_link: itemProduct.image_link,
      descriptons: itemProduct.descriptons,
      price: item.total_price,
      id: itemProduct.id,
      number_product: itemProduct.number_product
  });
  })
  if (elSelected) {
      elSelected.value = item.number_product;
  }
});
cartProductsEl.innerHTML = cartProductsHTML;

if (cartProductsEl.innerHTML == "") {
    document.querySelector('.container-cart').innerHTML=`
        <div class="empty-cart">
            <h1>Your Amazon Basket is empty.</h1>
            <p>Check products page for shopping.<a href="./index.html">continue shopping</a></p>
        <div/>
    `
    document.querySelector('.total-price').style.display='none'
}

const btnDeleteAll=document.querySelector('.btn-delete-all')
btnDeleteAll.addEventListener("click",()=>{
  localStorage.clear()
  location.reload()
})