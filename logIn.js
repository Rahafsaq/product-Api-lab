let user_Name = document.getElementById('userName');
let e_Mail = document.getElementById('e-mail');
let pass = document.getElementById('password');
let btn = document.getElementById('login-btn');

btn.addEventListener('click', () => {
	let eMail = e_Mail.value;
	let password = pass.value;
	fetch('https://65520e525c69a77903297a7e.mockapi.io/user-data', { method: 'GET' })
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			for (let i = 0; i < data.length; i++) {
				if (eMail == data[i].eMail && password == data[i].password) {
					console.log(data[i]), (window.location.href = 'product.html');
				}
			}
		})
		.catch((error) => console.error('The error is:', error));
});
