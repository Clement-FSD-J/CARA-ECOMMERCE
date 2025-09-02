const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

//activate nav bar for mobile size
if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active')
    })
}

//to close the nav bar
if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active')
    })
}

// // CART FUNCTIONALITY

// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Add to Cart
// function addToCart(productId, productName, productPrice, productImg) {
//     const existingItem = cart.find(item => item.id === productId);

//     if (existingItem) {
//         existingItem.quantity++;
//     } else {
//         cart.push({
//             id: productId,
//             name: productName,
//             price: productPrice,
//             img: productImg,
//             quantity: 1
//         });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     alert(`${productName} added to cart`);
//     updateCartDisplay();
// }

// // Remove from Cart
// function removeFromCart(productId) {
//     cart = cart.filter(item => item.id !== productId);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartDisplay();
// }

// // Update Quantity
// function updateQuantity(productId, qty) {
//     const item = cart.find(item => item.id === productId);
//     if (item) {
//         item.quantity = qty > 0 ? qty : 1;
//     }
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartDisplay();
// }

// // Update Cart Display (on Cart Page)
// function updateCartDisplay() {
//     const cartContainer = document.getElementById("cart-items");
//     const cartTotal = document.getElementById("cart-total");

//     if (!cartContainer || !cartTotal) return; // Run only on cart page

//     cartContainer.innerHTML = "";

//     let total = 0;

//     cart.forEach(item => {
//         total += item.price * item.quantity;
    
//         cartContainer.innerHTML += `
//             <tr>
//                 <td><a href="#" onclick="removeFromCart('${item.id}')"><i class="far fa-times-circle"></i></a></td>
//                 <td><img src="${item.img}" alt="${item.name}" width="50"></td>
//                 <td>${item.name}</td>
//                 <td>$${item.price}</td>
//                 <td>
//                     <input type="number" value="${item.quantity}" min="1" 
//                            onchange="updateQuantity('${item.id}', this.value)">
//                 </td>
//                 <td>$${item.price * item.quantity}</td>
//             </tr>
//         `;
//     });
    
//     cartTotal.innerText = "$" + total;
// }

// // Load Cart on Cart Page
// document.addEventListener("DOMContentLoaded", updateCartDisplay);
