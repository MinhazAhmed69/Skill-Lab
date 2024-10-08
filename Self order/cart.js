let total = 0;

// Add item to cart and update total
function addToCart(price) {
    total += price;
    document.getElementById('total').textContent = total;
}

// Clear cart and reset total
function clearCart() {
    total = 0;
    document.getElementById('total').textContent = total;
}

// Open the modal
function openModal() {
    if (total === 0) {
        alert('Your cart is empty! Please add some items.');
    } else {
        document.getElementById('orderModal').style.display = 'block';
    }
}

// Close the modal
function closeModal() {
    document.getElementById('orderModal').style.display = 'none';
}

// Submit the order and show success message
function submitOrder() {
    let customerName = document.getElementById('customerName').value;
    let tableNo = document.getElementById('tableNo').value;
    let contactNo = document.getElementById('contactNo').value;

    // Validation to ensure fields are not empty
    if (customerName === '' || tableNo === '' || contactNo === '') {
        alert('Please fill out all the details.');
        return;
    }

    // Display order success message
    alert(`Order placed successfully!\n\nName: ${customerName}\nTable No: ${tableNo}\nContact: ${contactNo}\nTotal: ₹${total}`);

    // Clear the modal and reset the cart
    closeModal();
    clearCart();
}

// Close the modal when user clicks anywhere outside the modal content
window.onclick = function(event) {
    if (event.target == document.getElementById('orderModal')) {
        closeModal();
    }
}