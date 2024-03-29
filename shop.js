function addToCart(productName, price) {
    localStorage.setItem('productName', productName);
    localStorage.setItem('price', price);
    window.location.href = 'order.html';
}