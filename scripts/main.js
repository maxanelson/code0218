const form = document.querySelector('form');
const items = document.querySelectorAll('.quantity');
const orderItemsList = document.querySelector('#order-items');
const totalPrice = document.querySelector('#total-price');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	let orderTotal = 0;
	const orderItems = [];

	for (const item of items) {
		if (item.value > 0) {
			const itemName = item.getAttribute('data-name');
			const itemPrice = item.getAttribute('data-price');
			const itemQuantity = item.value;
			const itemTotal = itemPrice * itemQuantity;
			orderItems.push({name: itemName, price: itemPrice, quantity: itemQuantity, total: itemTotal});
			orderTotal += itemTotal;
		}
	}

	orderItemsList.innerHTML = '';
	for (const item of orderItems) {
		const li = document.createElement('li');
		li.innerText = `${item.quantity} x ${item.name} - $${item.total}`;
		orderItemsList.appendChild(li);
	}

	totalPrice.innerText = `Total Price: $${orderTotal}`;
});
