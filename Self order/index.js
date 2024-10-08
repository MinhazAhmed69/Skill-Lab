let cart = [];
let totalPrice = 0;

function addToCart(dishName, price) {
    cart.push({ name: dishName, price: price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total-price');
    
    // Clear current cart items
    cartItems.innerHTML = '';
    
    // Add each item in the cart to the cart section
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.innerText = `${item.name} - ₹${item.price.toFixed(2)}`;
        cartItems.appendChild(itemElement);
    });

    // Update total price
    totalElement.innerText = `Total: $${totalPrice.toFixed(2)}`;
}

function submitOrder() {
    const tableNumber = document.getElementById('table-number').value;

    if (!tableNumber) {
        alert("Please enter your table number!");
        return;
    }

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Display confirmation or send the order to the kitchen (this is a mockup)
    alert(`Order placed successfully for Table ${tableNumber}!\nTotal: $${totalPrice.toFixed(2)}`);

    // Clear the cart and reset the total
    cart = [];
    totalPrice = 0;
    updateCart();
}