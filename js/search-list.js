const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;


if ( !search) {
 	message = `<strong>In stock: </strong> ${inStock.join(', ')}`;	
} else if (inStock.includes(search.toLowerCase())) {
	message = `Yes, we do have <strong>${search.toLowerCase()}</strong> in stock. It's currently #${inStock.indexOf(search) + 1} in our list.`;
} else {
	message = `Sorry, we do not have <strong>${search.toLowerCase()}</strong> in stock`;
}

document.querySelector('main').innerHTML = `<p>${message}</p>`;