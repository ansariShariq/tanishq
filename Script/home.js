/** @format */

function prod() {
	window.location.href = 'product.html';
}
function item() {
	window.location.href = 'item.html';
}
let cartn = document.getElementById('cartNo');
let my = JSON.parse(localStorage.getItem('cart'));
if (my != null) {
	cartn.innerHTML = my.length;
}

function slideShow() {
	const arr = [
		'https://www.tanishq.co.in/wps/wcm/connect/tanishq/c5537234-e369-4ed1-8f76-0f9e623c444e/desktop/little-big-moments-2500x950.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-c5537234-e369-4ed1-8f76-0f9e623c444e-desktop-nG9o.eX&impolicy=pqlow',
		'https://www.tanishq.co.in/wps/wcm/connect/tanishq/7e7c306b-9abc-4cfa-a413-d26309f48dec/desktop/Tanishq+GoEx+HPBanner-2500-X-950-3.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-7e7c306b-9abc-4cfa-a413-d26309f48dec-desktop-nDbhZMT&impolicy=pqlow',
		'https://www.tanishq.co.in/wps/wcm/connect/tanishq/7dd97ddb-3f8a-4e0f-84a9-5d666ab545d9/desktop/Digi-Gold-Home-Banner-+2500x950+%28304KB%29+V7.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-7dd97ddb-3f8a-4e0f-84a9-5d666ab545d9-desktop-nB5OH-A&impolicy=pqlow',
		'https://www.tanishq.co.in/wps/wcm/connect/tanishq/acb0fe1f-1574-4283-b9a6-9d65650dd08c/desktop/2500x950.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-acb0fe1f-1574-4283-b9a6-9d65650dd08c-desktop-nEjA2ad&impolicy=pqlow',
		'https://www.tanishq.co.in/wps/wcm/connect/tanishq/e66759c1-82f0-4707-bf00-dbe26322bbc3/desktop/2500x950.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-e66759c1-82f0-4707-bf00-dbe26322bbc3-desktop-nGa5Jt1&impolicy=pqlow',
		'https://www.tanishq.co.in/wps/wcm/connect/tanishq/a13a732d-b60b-4482-a3da-6abb25c0aa2c/desktop/Desktop2500x950-min.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-a13a732d-b60b-4482-a3da-6abb25c0aa2c-desktop-nubx98P&impolicy=pqlow',
	];
	let div = document.getElementById('slideShow');
	let img = document.createElement('img');
	img.src = arr[0];
	div.append(img);
	let i = 0;
	setInterval(function () {
		if (i == arr.length) {
			i = 0;
		}
		img.src = arr[i];
		i++;
	}, 4000);
}
slideShow();

src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js';
src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
function boder(e) {
	let data = document.getElementById(e);
	data.style.boxShadow = '1px 1px 2px 3px lightgrey';
}
function noboder(e) {
	let data = document.getElementById(e);
	data.style.boxShadow = 'none';
}
function openChat() {
	document.getElementById('chatbox').style.display = 'block';
	$('.btn-chat').hide();
}
function closeChat() {
	document.getElementById('chatbox').style.display = 'none';
	$('.btn-chat').show();
}
$('form').submit(function () {
	var text = $(this).find("textarea[name='msg']").val();

	alert(text);
});
function x() {
	let data = document.getElementById('widget');
	data.style.display = 'none';
}
function help() {
	document.getElementById('chatbox').style.display = 'block';
	document.getElementById('chat').style.display = 'none';
	document.getElementById('how').style.display = 'none';
}
function stopChat() {
	document.getElementById('chatbox').style.display = 'none';
}
let items = [
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/GCTanishq_1.jpg?impolicy=pqlow',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/GCTanishq_1.jpg?impolicy=pqlow',
		name: 'TANISHQ GIFT CARD',
		price: 1000,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/510433SEAAGA00_1.jpg?impolicy=pqlow',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/510433SEAAGA00_2.jpg?impolicy=pqmedlow&imwidth=320',
		name: 'ROMANTIC STUD EARRINGS',
		price: 7529,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/500063OXAAAB04_1.jpg?impolicy=pqlow',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/500063OXAAAB04_2.jpg?impolicy=pqmedlow&imwidth=320',
		name: 'GLIMMERING SINGLE STUD DIAM..',

		price: 7428,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/500063OFAABA02_1.jpg?impolicy=pqlow',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/500063OFAABA02_2.jpg?impolicy=pqmedlow&imwidth=320',
		name: 'TANISHQ 18 KARAT DIAMOND NO..',
		price: 5116,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/5111541XCABA00_1.jpg?impolicy=pqlow',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/5111541XCABA00_2.jpg?impolicy=pqmedlow&imwidth=320',
		name: 'RADIANT GOLD PENDANT AND EAR...',
		price: 35087,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/510805SIAAGA00_1.jpg?impolicy=pqlow',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/510805SIAAGA00_2.jpg?impolicy=pqmedlow&imwidth=320',
		name: 'DAINTY CURVY GOLD STUD EARRI..',
		price: 7529,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/500063OXAABB02_1.jpg?impolicy=pqlow',
		image2: '',
		name: '18 KARAT GOLD AND DIAMOND N..',
		price: 7118,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/510160SPAAGA00_1.jpg?impolicy=pqlow',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/510160SPAAGA00_2.jpg?impolicy=pqmedlow&imwidth=320',
		name: 'ALLURING FLORAL GOLD STUD EAR..',
		price: 11258,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/501720SDHAAA00_1.jpg?impolicy=pqlow',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/501720SDHAAA00_2.jpg?impolicy=pqmedlow&imwidth=320',
		name: 'GLEAMING ROUND GOLD STUD EAR...',
		price: 9296,
	},
	{
		image:
			'https://staticimg.titan.co.in/Tanishq/Catalog/512814PHZAAA00_1.jpg?impolicy=pqlow',
		image2: '',
		name: 'ETHEREAL GANPATI GOLD PANDANTS',
		price: 6668,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/502998SBZAAA09_1.jpg?impolicy=pqlow',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/502998SBZAAA09_2.jpg?impolicy=pqmedlow&imwidth=320',
		name: 'ROMANTIC DIAMOND HEART STU..',
		price: 9303,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/501032DHAABA18_1.jpg?impolicy=pqlow',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/501032DHAABA18_2.jpg?impolicy=pqmedlow&imwidth=320',
		name: 'KUMUDA RUBY DROP EARRINGS',
		price: 20705,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/503213CADAA00_1.jpg?impolicy=pqlow',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/503213CADAA00_2.jpg?impolicy=pqmedlow&imwidth=320',
		name: '18 Karat Gold Chain',
		price: 24466,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220VIX2A00_1.jpg?impolicy=pqlow',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220VIX2A00_2.jpg?impolicy=pqmedlow&imwidth=320',
		name: 'Stylish Sleek Bangle',
		price: 41699,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/512216VIO1A00_1.jpg?impolicy=pqlow',
		image2: '',
		name: 'Minimalastic Gold Kada For Men',
		price: 38590,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/511518YKBAA00_1.jpg?impolicy=pqlow',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/511518YKBAA00_2.jpg?impolicy=pqmedlow&imwidth=320',
		name: 'ManglaSutra Chain In 22 Karat Ye..',
		price: 130757,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/5111541XCABA00_1.jpg?impolicy=pqlow',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/5111541XCABA00_2.jpg?impolicy=pqmedlow&imwidth=320',
		name: 'Radaint Gold Mesh Ring',
		price: 15772,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/511156CTHAA00_1.jpg?impolicy=pqlow',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/511156CTHAA00_2.jpg?impolicy=pqmedlow&imwidth=320',
		name: 'Eligant Gold Chain For Kids',
		price: 27665,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/510160SPAAGA00_1.jpg?impolicy=pqlow',
		image2: '',
		name: 'Brilant Charming Bangle',
		price: 42104,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/510082CNAAA00_1.jpg?impolicy=pqlow',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/510082CNAAA00_2.jpg?impolicy=pqmedlow&imwidth=320',
		name: 'Simple And Classy Gold Chain For...',
		price: 19556,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/5110982JQAAA00_1.jpg?impolicy=pqlow',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/5110982JQAAA00_2.jpg?impolicy=pqmedlow&imwidth=320',
		name: 'Shimmering Gold Neckwear set for...',
		price: 95370,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/5137192FA1BA00_1.jpg?impolicy=pqlow',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/5137192FA1BA00_2.jpg?impolicy=pqmedlow&imwidth=320',
		name: 'Resplendent Gold Neckwear Set',
		price: 477551,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/5027202ATABA32_1.jpg?impolicy=pqlow',
		image2:
			'https://staticimg.titan.co.in/Tanishq/Catalog/5027202ATABA32_3.jpg?impolicy=pqmedlow&imwidth=320',
		name: 'Winter Chandelier',
		price: 929211,
	},
	{
		image1:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513319VFO2A00_1.jpg?impolicy=pqlow',
		image2: '',
		name: 'Lustrious Gold Bangles',
		price: 60008,
	},
];
function store(s) {
	let arr;
	arr = localStorage.getItem('items');
	arr = items[s];
	localStorage.setItem('items', JSON.stringify(arr));
}
function loginAs() {
	const admin = JSON.parse(localStorage.getItem('SignUp'));
	let boss = document.getElementById('boss');
	console.log(admin);
	if (admin == null) {
		document.getElementById('loginName').style.display = 'none';
	}
	if (admin != null) {
		boss.innerText = admin[admin.length - 1].fname;
		document.getElementById('l').style.color = 'white';
		//div.append(p);
		//boss.append(div);
	}
}
loginAs();
