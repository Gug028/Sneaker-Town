// Smoot Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
	anchor.addEventListener('click',function(e) {
		e.preventDefault();
		const targetId = this.getAttribute('href').substring(1);

		document.getElementById(targetId).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// Basic Cart Functionality
let cart = [];

// Function to add sneakers to the cart
function addToCart(sneaker) {
	cart.push(sneaker);
	alert(`${sneaker.name} has been added to your cart.`);
	console.log("Current cart:", cart);
}

// Event listeners for "Add to Cart" buttons
document.querySelectorAll('.sneaker-card .btn').forEach((button, index) =>{
	button.addEventListener('click', () => {
		const sneaker = {
			name:
			document.querySelectorAll('.sneaker-card h3')[index].innerText, price:
			document.querySelectorAll('.sneaker-card p')[index].innerText
		};
		addToCart(sneaker);
	});
});
