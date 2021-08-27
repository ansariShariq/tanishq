/** @format */

function store(e) {
	e.preventDefault();
	let form = document.getElementById('form');
	let fname = form.fname.value;
	let lname = form.lname.value;
	let contact = form.mobile.value;
	let email = form.email.value;
	let password = form.password.value;
	console.log(lname, contact, email, password);
	if (
		fname != '' &&
		lname != '' &&
		contact != '' &&
		email != '' &&
		password != ''
	) {
		let data = {
			fname,
			lname,
			contact,
			email,
			password,
		};

		let arr;
		arr = localStorage.getItem('SignUp');
		if (arr == null) {
			arr = [];
		} else {
			arr = JSON.parse(localStorage.getItem('SignUp'));
		}

		arr.push(data);
		localStorage.setItem('SignUp', JSON.stringify(arr));
		alert('Your Sign Up details are saved succesfully Click OK to login ');
		window.location.href = 'login.html';
	} else {
		alert('Fill all the Box');
	}
}
