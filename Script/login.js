/** @format */

function check(e) {
	e.preventDefault();
	let form = document.getElementById('form');
	let email = form.mobile.value;
	let password = form.password.value;
	console.log(email, password);
	let name = form.name.value;
	const admin = JSON.parse(localStorage.getItem('SignUp'));
	if (admin == null) {
		alert('You have not signup yet! Please signup first');
		window.location.href = 'signUp.html';
	}
	let count = 0;
	for (let i = 0; i < admin.length; i++) {
		let e = admin[i].email;
		let p = admin[i].password;
		let n = admin[i].name;
		if (e == email && p == password) {
			window.location.href = 'index.html';
			count++;

			let arr;
			arr = localStorage.getItem('Data');
			if (arr == null) {
				arr = [];
			} else {
				arr = JSON.parse(localStorage.getItem('Data'));
			}

			arr.push(n);

			localStorage.setItem('Data', JSON.stringify(arr));
		}
	}
	if (count == 0) {
		alert('invalid Credentials');
	}
}
