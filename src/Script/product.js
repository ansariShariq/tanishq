/** @format */

function prod(){
window.location.href ="product.html"

}

function add(){
window.location.href="Cart.html"
}
let myarray=document.getElementById("cartNo");
let v=JSON.parse(localStorage.getItem("cart"));
if(v!=null){
    myarray.innerHTML = v.length;
}


function land(){
window.location.href="login.html"
}

/** @format */

const data = [
	{
		name: 'Opulent Elaborate Pendant',
		price: 28812,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220PPVAAA00_1.jpg?impolicy=pqmed&imwidth=640',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220PPVAAA00_2.jpg?impolicy=pqmedlow&imwidth=320',
	},
	{
		name: 'Delicate Paisley Pendant',
		price: 26207,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220PPYAAA00_1.jpg?impolicy=pqmed&imwidth=640',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220PPYAAA00_2.jpg?impolicy=pqmedlow&imwidth=320',
	},
	{
		name: 'Diamond Ring In Yellow',
		price: 30761,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220PPZAAA00_1.jpg?impolicy=pqmed&imwidth=640',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220PPZAAA00_2.jpg?impolicy=pqmedlow&imwidth=320',
	},
	{
		name: 'Opulent Elaborate pendant',
		price: 30216,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220PQGAAA00_1.jpg?impolicy=pqmed&imwidth=640',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220PQGAAA00_2.jpg?impolicy=pqmedlow&imwidth=320',
	},
	{
		name: ' Floral Diamond Pendant',
		price: 33451,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/503120PDOAAA09_1.jpg?impolicy=pqmed&imwidth=640',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/503120PDOAAA09_2.jpg?impolicy=pqmedlow&imwidth=320',
	},
	{
		name: 'Ornate Nature Inspired Pendant',
		price: 26866,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/503120PDSAAA09_1.jpg?impolicy=pqmed&imwidth=640',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/503120PDSAAA09_2.jpg?impolicy=pqmedlow&imwidth=320',
	},
];

const showItem = document.getElementById('showItem');

function showData() {
	data.forEach((el, i) => {
		// console.log(el)
		let productitem = document.createElement('div');
		productitem.setAttribute('class', 'item');
		productitem.innerHTML = `<div id=id${i}  class="productitem">
                   <img class="imgfile" 
                        src=${el.image1}
                        alt="">
                    <h3 >${el.name}</h3>
                    <h4>₹ ${el.price}</h4>
                    <button class="trybtn">${el.try}</button>
                    <button  class="quickview">${el.quick}</button>
                </div>`;

		showItem.appendChild(productitem);
	});
}
showData();
let count = 0;
function filterPrice1(a, b, c) {
	count++;

	if (count % 2 == 1) {
		let data1 = document.getElementById(a);
		data1.style.display = 'none';
		let data2 = document.getElementById(b);
		data2.style.display = 'none';
		let data3 = document.getElementById(c);
		data3.style.display = 'none';
		filterPrice1_1('id6', 'id7', 'id8', 'id10', 'id14');
	} else {
		let data1 = document.getElementById(a);
		data1.style.display = 'flex';
		let data2 = document.getElementById(b);
		data2.style.display = 'flex';
		let data3 = document.getElementById(c);
		data3.style.display = 'flex';
		filterPrice1_1('id6', 'id7', 'id8', 'id10', 'id14');
	}
}
let count2 = 0;
function filterPrice2(a, b, c) {
	count2++;

	if (count2 % 2 == 1) {
		let data1 = document.getElementById(a);
		data1.style.display = 'none';
		let data2 = document.getElementById(b);
		data2.style.display = 'none';
		let data3 = document.getElementById(c);
		data3.style.display = 'none';
		filterPrice2_2('id6', 'id7', 'id8', 'id10', 'id14');
	} else {
		let data1 = document.getElementById(a);
		data1.style.display = 'flex';
		let data2 = document.getElementById(b);
		data2.style.display = 'flex';
		let data3 = document.getElementById(c);
		data3.style.display = 'flex';
		filterPrice2_2('id6', 'id7', 'id8', 'id10', 'id14');
	}
}
let count4 = 0;
function filterPrice3(a, b, c) {
	count4++;

	if (count4 % 2 == 1) {
		let data1 = document.getElementById(a);
		data1.style.display = 'none';
		let data2 = document.getElementById(b);
		data2.style.display = 'none';
		let data3 = document.getElementById(c);
		data3.style.display = 'none';
		filterPrice3_3('id9', 'id11', 'id12', 'id13');
	} else {
		let data1 = document.getElementById(a);
		data1.style.display = 'flex';
		let data2 = document.getElementById(b);
		data2.style.display = 'flex';
		let data3 = document.getElementById(c);
		data3.style.display = 'flex';
		filterPrice3_3('id9', 'id11', 'id12', 'id13');
	}
}
let productitem0 = document.getElementById('id0');

productitem0.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data[0];
	localStorage.setItem('items', JSON.stringify(arr));
	window.location.href ="item.html"
});
let productitem1 = document.getElementById('id1');

productitem1.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data[1];
	localStorage.setItem('items', JSON.stringify(arr));
	window.location.href ="item.html"
});
let productitem2 = document.getElementById('id2');

productitem2.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data[2];
	localStorage.setItem('items', JSON.stringify(arr));
	window.location.href ="item.html"
});
let productitem3 = document.getElementById('id3');

productitem3.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data[3];
	localStorage.setItem('items', JSON.stringify(arr));
	window.location.href ="item.html"
});
let productitem4 = document.getElementById('id4');

productitem4.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data[4];
	localStorage.setItem('items', JSON.stringify(arr));
	window.location.href ="item.html"
});
let productitem5 = document.getElementById('id5');

productitem5.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data[5];
	localStorage.setItem('items', JSON.stringify(arr));
	window.location.href ="item.html"
});
const data1 = [
	{
		name: 'Opulent Elaborate Pendant',
		price: 41246,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513920DGJABA00_1.jpg?impolicy=pqmed&imwidth=640',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513920DGJABA00_2.jpg?impolicy=pqmedlow&imwidth=320',
	},
	{
		name: 'Opulent Elaborate Pendant',
		price: 44782,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/503920DEEABA29_1.jpg?impolicy=pqmed&imwidth=640',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/503920DEEABA29_2.jpg?impolicy=pqmedlow&imwidth=320',
	},
	{
		name: 'Opulent Elaborate Pendant',
		price: 35962,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/503220DRBABAP5_1.jpg?impolicy=pqmed&imwidth=640',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/503220DRBABAP5_2.jpg?impolicy=pqmedlow&imwidth=320',
	},
	{
		name: 'Opulent Elaborate Pendant',
		price: 28358,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/504025HMQAAA00_1.jpg?impolicy=pqmed&imwidth=640',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/504025HMQAAA00_2.jpg?impolicy=pqmedlow&imwidth=320',
	},
	{
		name: 'Sophisticated Diamond Ring',
		price: 33395,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/511920SOCABA00_1.jpg?impolicy=pqmed&imwidth=640',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/511920SOCABA00_2.jpg?impolicy=pqmedlow&imwidth=320',
	},
	{
		name: 'Opulent Elaborate Pendant',
		price: 29249,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220DBNABA00_1.jpg?impolicy=pqmed&imwidth=640',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220DBNABA00_2.jpg?impolicy=pqmedlow&imwidth=320',
	},
	{
		name: 'Opulent Elaborate Pendant',
		price: 29249,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/512220PJQAAA00_1.jpg?impolicy=pqmed&imwidth=640',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/512220PJQAAA00_2.jpg?impolicy=pqmedlow&imwidth=320',
	},
	{
		name: 'Opulent Elaborate Pendant',
		price: 29249,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220DICABAP1_1.jpg?impolicy=pqmed&imwidth=640',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220DICABAP1_2.jpg?impolicy=pqmedlow&imwidth=320',
	},
	{
		name: 'Stunning Gold Drop Earrings',
		price: 44911,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220DFZAAA00_1.jpg?impolicy=pqmed&imwidth=640',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220DFZAAA00_2.jpg?impolicy=pqmedlow&imwidth=320',
	},
];

const showItem1 = document.getElementById('showItem1');
function showData1() {
	data1.forEach((el, i) => {
		// console.log(el)
		let productitem = document.createElement('div');
		productitem.setAttribute('class', 'item');
		productitem.innerHTML = `<div id=id${i + 6} class="productitem">
                    <img class="imgfile"
                        src=${el.image1}
                        alt="">
                    <h3>${el.name}</h3>
                    <h4>₹${el.price}</h4>
                    <button class="trybtn">${el.try}</button>
                    <button class="quickview">${el.quick}</button>
                </div>`;

		showItem1.appendChild(productitem);
	});
}
showData1();
let count1 = 0;
function filterPrice1_1(a, b, c, d, e) {
	count1++;

	if (count % 2 == 1) {
		let data1 = document.getElementById(a);
		data1.style.display = 'none';
		let data2 = document.getElementById(b);
		data2.style.display = 'none';
		let data3 = document.getElementById(c);
		data3.style.display = 'none';
		let data4 = document.getElementById(d);
		data4.style.display = 'none';
		let data5 = document.getElementById(e);
		data5.style.display = 'none';
	} else {
		let data1 = document.getElementById(a);
		data1.style.display = 'flex';
		let data2 = document.getElementById(b);
		data2.style.display = 'flex';
		let data3 = document.getElementById(c);
		data3.style.display = 'flex';
		let data4 = document.getElementById(d);
		data4.style.display = 'flex';
		let data5 = document.getElementById(e);
		data5.style.display = 'flex';
	}
}
let count3 = 0;
function filterPrice2_2(a, b, c, d, e) {
	count3++;

	if (count3 % 2 == 1) {
		let data1 = document.getElementById(a);
		data1.style.display = 'none';
		let data2 = document.getElementById(b);
		data2.style.display = 'none';
		let data3 = document.getElementById(c);
		data3.style.display = 'none';
		let data4 = document.getElementById(d);
		data4.style.display = 'none';
		let data5 = document.getElementById(e);
		data5.style.display = 'none';
	} else {
		let data1 = document.getElementById(a);
		data1.style.display = 'flex';
		let data2 = document.getElementById(b);
		data2.style.display = 'flex';
		let data3 = document.getElementById(c);
		data3.style.display = 'flex';
		let data4 = document.getElementById(d);
		data4.style.display = 'flex';
		let data5 = document.getElementById(e);
		data5.style.display = 'flex';
	}
}
let count5 = 0;
function filterPrice3_3(a, b, c, d) {
	count5++;

	if (count5 % 2 == 1) {
		let data1 = document.getElementById(a);
		data1.style.display = 'none';
		let data2 = document.getElementById(b);
		data2.style.display = 'none';
		let data3 = document.getElementById(c);
		data3.style.display = 'none';
		let data4 = document.getElementById(d);
		data4.style.display = 'none';
	} else {
		let data1 = document.getElementById(a);
		data1.style.display = 'flex';
		let data2 = document.getElementById(b);
		data2.style.display = 'flex';
		let data3 = document.getElementById(c);
		data3.style.display = 'flex';
		let data4 = document.getElementById(d);
		data4.style.display = 'flex';
	}
}
let productitem6 = document.getElementById('id6');

productitem6.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data1[0];
	localStorage.setItem('items', JSON.stringify(arr));
	window.location.href ="item.html"
});
let productitem7 = document.getElementById('id7');

productitem7.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data1[1];
	localStorage.setItem('items', JSON.stringify(arr));
	window.location.href ="item.html"
});
let productitem8 = document.getElementById('id8');

productitem8.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data1[2];
	localStorage.setItem('items', JSON.stringify(arr));
	window.location.href ="item.html"
});
let productitem9 = document.getElementById('id9');

productitem9.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data1[3];
	localStorage.setItem('items', JSON.stringify(arr));
	window.location.href ="item.html"
});
let productitem10 = document.getElementById('id10');

productitem10.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data1[4];
	localStorage.setItem('items', JSON.stringify(arr));
	window.location.href ="item.html"
});
let productitem11 = document.getElementById('id11');

productitem11.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data1[5];
	localStorage.setItem('items', JSON.stringify(arr));
	window.location.href ="item.html"
});
let productitem12 = document.getElementById('id12');

productitem12.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data1[6];
	localStorage.setItem('items', JSON.stringify(arr));
	window.location.href ="item.html"
});
let productitem13 = document.getElementById('id13');

productitem13.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data1[7];
	localStorage.setItem('items', JSON.stringify(arr));
	window.location.href ="item.html"
});
let productitem14 = document.getElementById('id14');

productitem14.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data1[8];
	localStorage.setItem('items', JSON.stringify(arr));
	window.location.href ="item.html"
});
var price = true;
function showPrice() {
	var btn = document.querySelector('.btnPrice');
	var price_div = document.querySelector('#price_div');
	price = !price;
	price ? (btn.innerHTML = '+') : (btn.innerHTML = '-');

	if (price) {
		price_div.style.display = 'none';
	} else {
		price_div.style.display = 'block';
	}
}

var jwType = true;
function showjewelleryType() {
	var btn = document.querySelector('.btnType');
	var type_div = document.querySelector('#type_div');
	jwType = !jwType;
	jwType ? (btn.innerHTML = '+') : (btn.innerHTML = '-');

	if (jwType) {
		type_div.style.display = 'none';
	} else {
		type_div.style.display = 'block';
	}
}

var proType = true;
function showproductType() {
	var btn = document.querySelector('.productType');
	var type_div = document.querySelector('#product_div');
	proType = !proType;
	proType ? (btn.innerHTML = '+') : (btn.innerHTML = '-');

	if (proType) {
		product_div.style.display = 'none';
	} else {
		product_div.style.display = 'block';
	}
}