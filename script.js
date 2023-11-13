function getProduct() {
	fetch('https://fakestoreapi.com/products')
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			for (let i = 0; i < data.length; i++) {
				let container = document.getElementById('container');
				let product = document.createElement('div');
				product.classList.add('products');
				// product.style.cssText =
				// 'width: 30vw;height: 60vh;justify-content: center;align-items: center;border: 1px solid black;display: flex;flex-direction: column;box-shadow: 2px 2px 3px grey;		border-radius: 10px;';
				container.appendChild(product);
				let image = document.createElement('img');
				image.classList.add('images');
				let name = document.createElement('h3');
				name.classList.add('name');
				let price = document.createElement('p');
				image.src = data[i].image;
				name.innerHTML = data[i].title;
				price.innerHTML = `price: ${data[i].price}`;
				product.appendChild(image);
				product.appendChild(name);
				product.appendChild(price);
			}
		});
}

getProduct();
