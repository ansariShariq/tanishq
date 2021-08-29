/** @format */

// function prod() {
// 	window.location.href = 'product.html';
// }
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
