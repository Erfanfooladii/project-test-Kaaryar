const listItems = document.querySelector(".list-items");
const btnFilterProduct = document.querySelector(".filter-product");
const jsonProducts = [
  {
    id: 0,
    name: "Acer Aspire",
    product_category: "laptops",
    descriptons:
      "Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6&quot; Full HD IPS Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon Graphics | 8GB LPDDR5 | 128GB NVMe SSD |",
    price: "1080",
    main_price: "1200",
    image_link:"../../../assets/images/acer.webp",
  },
  {
    id: 1,
    name: "Apple Iphone",
    product_category: "mobiles",
    descriptons: "Apple iPhone 13 Mini, 256GB, Blue - Unlocked (Renewed)",
    price: "337.99",
    main_price: "374.99",
    image_link:
      "../../../assets/images/iphone.webp",
  },
  {
    id: 2,
    name: "CASEKOO",
    product_category: "mobile accessories",
    descriptons:
      "CASEKOO for iPhone 13 Pro Case Crystal Clear, [Not Yellowing] [Military Drop Protection] Shockproof Protective iPhone 13 Pro Phone Case 6.1 inch 2021, Clear",
    price: "12",
    main_price: "321.99",
    image_link:
      "../../../assets/images/Casekoo.webp",
  },
  {
    id: 3,
    name: "HP Notebook",
    product_category: "laptops",
    descriptons:
      "HP Notebook Laptop, 15.6&quot; HD Touchscreen, Intel Core i3-1115G4 Processor, 32GB RAM, 1TB PCIe SSD, Webcam, Type-C, HDMI, SD Card Reader, Wi-Fi, Windows 11 Home, Silver",
    price: "407",
    main_price: "453",
    image_link:
      "../../../assets/images/Hp.webp",
  },
  {
    id: 4,
    name: "Apple MacBook",
    product_category: "laptops",
    descriptons:
      "Apple 2022 MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera.",
    price: "756",
    main_price: "840",
    image_link:
      "../../../assets/images/Apple.webp",
  },
  {
    id: 5,
    name: "SAMSUNG Galaxy",
    product_category: "mobiles",
    descriptons:
      "SAMSUNG Galaxy S24 Ultra Cell Phone, 256GB AI Smartphone, Unlocked Android, 200MP, 100x Zoom Cameras, Long Battery Life, S Pen, US Version, 2024, Titanium Black",
    price: "944.1",
    main_price: "1049",
    image_link:
      "../../../assets/images/Samsung.webp",
  },
  {
    id: 6,
    name: "OGMAPLE Cell Phone",
    product_category: "mobile accessories",
    descriptons:
      "OGMAPLE Cell Phone Stand, Angle Height Adjustable Cell Phone Holder with Silicon Pad for Desk Fully Forldable Mobile Phone Holder Compatible with All Mobile Phones, MT-6, (White)",
    price: "4.7",
    main_price: "5",
    image_link:
      "../../../assets/images/Ogmaple.webp",
  },
];
localStorage.setItem("productlist", JSON.stringify(jsonProducts));

const listProducts = JSON.parse(localStorage.getItem("productlist"));

jsonProducts.map((item) => {
  listItems.innerHTML += `
        <div class="item" data-typeCategory="${item.product_category}">
            <div class="image-post">
              <a href="./public/single_post.html#${
                item.id
              }"><img src="${item.image_link}"  alt="image post"></a>
            </div>
            <div class="titles-post">
              <div>
                <div class="price-post">
                  <p>$</p>
                  <p>${item.price}</p>
                  <p>99</p>
                </div>
                <p class="main-price">$${item.main_price}</p>
              </div>
              <div class="star-description">
                <p class="description-post">
                  ${item.descriptons.slice(0, 110)}...
                </p>
                <div class="stars-post">
                  <img src="../assets/images/star.webp" alt="star icon">
                  <img src="../assets/images/star.webp" alt="star icon">
                  <img src="../assets/images/star.webp" alt="star icon">
                  <img src="../assets/images/star.webp" alt="star icon">
                  <img src="../assets/images/star.webp" alt="star icon">
                  <p>1,752</p>
                </div>
              </div>
              <a class="link-post" href="./single_post.html#${
                item.id
              }">see more...</a>
            </div>
          </div>
    `;
});

btnFilterProduct.addEventListener("change", () => {
  let input = document.querySelector(".filter-product");
  let filter = input.value;
  let ul = document.querySelector(".list-items");
  let li = ul.querySelectorAll(".item");

  for (i = 0; i < li.length; i++) {
    namels = li[i].getAttribute("data-typeCategory");
    if (namels == filter || filter == "All") {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
});
