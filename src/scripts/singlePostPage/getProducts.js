const listProducts = JSON.parse(localStorage.getItem("productlist"));
const productPost=document.querySelector(".product-post")
const url=location.hash.slice(1)

const getProduct=(id)=>{
    let item=listProducts[id]
    productPost.innerHTML=`
    <div class="baner-top">
        <img src="../assets/images/topPage.webp" alt="baner image">
      </div>
      <div class="list-specs">
        <div class="item">
          <img src="${item.image_link}" alt="post image">
        </div>
        <div class="item">
          <div class="title">
            <h2>${item.descriptons}</h2>
          </div>
          <div class="links">
            <small><a href="#">Visit the acer Store</a></small>
            <div class="starts">
              <p>
                4.3
                <img src="../assets/images/star.webp" alt="star icon">
                <img src="../assets/images/star.webp" alt="star icon">
                <img src="../assets/images/star.webp" alt="star icon">
                <img src="../assets/images/star.webp" alt="star icon">
                <img src="../assets/images/star.webp" alt="star icon">
              </p>
               <small><a href="#">1,720 ratings</a> | <a href="#">Search this page</a></small>
            </div>
            <small>6K+ bought in past month</small>
          </div>

          <div class="price-spec">
            <div class="price">
              <span>-7%</span>
              <small>$</small>
              <p>${item.price}</p>
              <small>99</small>
            </div>
            <p class="price-off">
              List Price: <small>$${item.main_price}</small>
            </p>
            <small>
              $91.31 Shipping & Import Fees Deposit to Iran 
              <a class="drop-btn" href="#">Details <span class="material-symbols-outlined">arrow_drop_down</span></a>
              </small>
              <small><p>Available at a lower price from <a href="#">other sellers</a> that may not offer free Prime shipping.</p></small>
              <small><a href="#"><span class="yello-box">Extra Savings</span> Amazon Music offer with this purchase 1 Applicable Promotion</a></small>
          </div>

          <div class="technical-specs">
            <div class="title">
              <p>Style: <span>R3 7320U</span></p>
              <div>
                <span class="model">
                  <p>R3 7320U</p>
                  <small>$299.99</small>
                </span>
                <span class="model">
                  <p>R3 5700U</p>
                  <small>$499.99</small>
                </span>
              </div>
            </div>
            <div class="list-technical">
              <div class="ls">
                <ul>
                  <li>Brand</li>
                  <li>Model Name</li>
                  <li>Screen Size</li>
                  <li>Coler</li>
                  <li>Hard Disk Size</li>
                  <li>CPU Model</li>
                  <li>Ram Memory Installed Size</li>
                  <li>Operating System</li>
                  <li>Special Feature</li>
                  <li>Graphics Card Description</li>
                </ul>
                <ul>
                  <li>acer</li>
                  <li>Laptop</li>
                  <li>15.6 Inches</li>
                  <li>Silver</li>
                  <li>128 GB</li>
                  <li>Ryzen 3</li>
                  <li>8GB</li>
                  <li>Windows 11 S</li>
                  <li>Backit Keybord</li>
                  <li>Integrated</li>
                </ul>
              </div>
              <div class="footer-drop">
                <small><a href="#">Show more</a></small>
              </div>
            </div>
            <div class="about-list">
              <h3>About this item</h3>
              <ul>
                <li>Purposeful Design: Travel with ease and look great doing it with the Aspire's 3 thin, light design.</li>
                <li>Ready-to-Go Performance: The Aspire 3 is ready-to-go with the latest AMD Ryzen 3 7320U Processor with Radeon Graphics—ideal for the entire family, with performance and productivity at the core.</li>
                <li>Visibly Stunning: Experience sharp details and crisp colors on the 15.6" Full HD IPS display with 16:9 aspect ratio and narrow bezels.</li>
                <li>Internal Specifications: 8GB LPDDR5 Onboard Memory; 128GB NVMe solid-state drive storage to store your files and media</li>
                <li>The HD front-facing camera uses Acer’s TNR (Temporal Noise Reduction) technology for high-quality imagery in low-light conditions. Acer PurifiedVoice technology with AI Noise Reduction filters out any extra sound for clear communication over online meetings.</li>
                <li>Wireless Wi-Fi 6 Convenience: Maintain a strong, consistent wireless signal with Wi-Fi 6 (aka 802.11ax) and 2x2 MU-MIMO technology.</li>
                <li>Improved Thermals: With a 78% increase in fan surface area, enjoy an improved thermal system and an additional 17% thermal capacity. Allowing for longer, more efficient work sessions while not plugged in.</li>
                <li>Ports For All Your Accessories: 1 - USB Type-C Port USB 3.2 Gen 2 (up to 10 Gbps) DisplayPort over USB Type-C & USB Charging, 2 - USB 3.2 Gen 1 Ports, 1 - HDMI 2.1 Port with HDCP support, 1 - Headphone/Speaker/Line-Out Jack, DC-in for AC adapter</li>
                <li>What's In the Box: Acer Aspire Laptop, AC Adapter, Power Cord</li>
                <li>Keyboard backlight not present on this model</li>
              </ul>
            </div>
            <div class="footer-item">
              <small><span class="material-symbols-outlined">chat</span><a href="#">Report an issue with this product or seller</a></small>
              <p>
                <span>Note:</span> Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.
              </p>
            </div>
          </div>
        </div>
        <div class="buy-box">
            <div class="contnet">
              <div class="price-box">
                <p>Buy new:</p>
                <div class="price">
                  <small>$</small>
                  <span class="price-total" >${item.price}</span>
                  <small>99</small>
                </div>
                <p class="description-buy">
                  $91.31 Shipping & Import Fees Deposit to Iran Details Delivery <span>Wednesday, May 15</span>
                </p>
                <small class="btn-drop">
                  <span class="material-symbols-outlined"> location_on </span>
                  <a href="#">Deliver to Iran</a>
                </small>
              </div>
              <div class="select-product">
                <p class="title">In Stock</p>
              <select class="selected">
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
                <button class="btn-add-cart">
                  Add to cart
                </button>
              </div>
              <div class="links">
                <div class="item-link">
                  <p>Ships from</p>
                  <p>Amazon.com</p>
                </div>
                <div class="item-link">
                  <p>Shld by</p>
                  <p>Amazon.com</p>
                </div>
                <div class="item-link">
                  <p>Returns</p>
                  <small>
                    <a href="#">
                      Eligible for Return, Refund or Replacement within 30 days of receipt
                    </a>
                  </small>
                </div>
                <div class="item-link">
                  <p>Payments</p>
                  <small>
                    <a href="#">
                      Secure transaction
                    </a>
                  </small>
                </div>
                <div class="item-link">
                  <p>Support</p>
                  <small>
                    <a href="#">
                      Product support included
                    </a>
                  </small>
                </div>
              </div>
              <small>
                <a href="#">Show less</a>
              </small>
            </div>
        </div>
      </div>
  `
}
getProduct(url)
