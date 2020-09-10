const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if (inStock.includes(search)) {
	message = `Yes, we do have <strong>${search}</strong> in stock.`;
} else {
	message = `Sorry, we do not have ${search} in stock`;
}

document.querySelector('main').innerHTML = `<p>${message}</p>`;