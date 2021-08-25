

//cart
function checkout(){
window.location.href ="checkout.html"

}
function prod(){
window.location.href ="product.html"

}
function home(){
window.location.href ="index.html"

}


let cartn = document.getElementById("cartNo");
let my = JSON.parse(localStorage.getItem("cart"));
if(my != null){
    cartn.innerHTML = my.length;
}

var alert1 = document.getElementById("alert1");
var alert2 = document.getElementById("absolute")
let j=0;

function cartPage(){
    let tempo = true;
    if(j==0){
        let myarr;
        if(localStorage.getItem("cart") == null){
            myarr = [];
            myarr.push(value);
            alert2.style.display="block";
            alert2.textContent ="";
            alert2.textContent = "Item Succesfully Added to Cart"
            tempo=false;
            setTimeout(function(){
                alert2.style.display = "none";
            },5000);
        }
        else {
            myarr = JSON.parse(localStorage.getItem("cart"));
        }
    
        for(let k=0 ; k<myarr.length ; k++){
            if((myarr[k].name != value.name) && (myarr[k].image1 != value.image1)){
                myarr.push(value);
                tempo = false;
                alert2.style.display="block";
                alert2.textContent ="";
                alert2.textContent = "Item Succesfully Added to Cart"
                setTimeout(function(){
                    alert2.style.display = "none";
                },5000);
                break;
            }
        }
        localStorage.setItem("cart",JSON.stringify(myarr));
        cartn.innerHTML = myarr.length;
    }
    j++;
    if(tempo){
        alert1.innerHTML="";
        alert1.innerHTML= "Sorry! You can only add the displayed number of items to the cart. Please enter quantity up to 1.";
    }
}

function displayCart() {
    let cartn = localStorage.getItem("cart")
    cartn = JSON.parse(cartn)
    
    let productContainer = document.querySelector
        (".product-details");
    
    
    console.log(cartn);
    if (cartn && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartn).map(item => {
            productContainer.innerHTML += `
            <img src="${item.image1}">
					</div>
					<div class="product-dis">
						<p>${item.name}</p>
						<p id="product-urn">54681PPVVAAA02EA000070</p>
						<p style="margin-top: -10px;"> &#x20b9; ${item.price}.00</p>
						<p id="weight">Weight (g): ${item.weight}</p>
						<div>
							<button type="button" data-toggle="dropdown" class="wishlist-btn">
								<span style="float: left;">Move to Wishlist</span>
							</button>
						</div>
					</div>
					<div class="product-quantity">
                        <div>
							<div class="quantity-div">
							<button class= "fld minus-btn disabled" type= "button">-</button>
							<input type="text" class="input-quntity" value="1">
							<button  class= "fld plus-btn" type= "button">+</button>
						        </div>
						</div>
						<button onclick="removeItemsfromCart(${item.price}.00)" type="submit" id="remove-product">
							REMOVE
						</button>
						<div class="checkbox">
						<input id="input" type="checkbox" style="height: 20px; width: 20px;" >
						<label class="label" style="margin-top: -30px;">Add a gift message</label>
						</div>
					</div>
					<span id="product_price">
						<p class = "cartPrice"> &#x20b9; ${item.price}.00</p>
					</span>
				</div>
				<hr style="margin-top: 300px;">
				<div class="shipping-container">
					<div style="float: left;">
					<p>SHIPPING METHOD:</p>
					<button type="submit" class="home-delivery">HOME DELIVERY</button>
					</div>
					<div class="contry">
						<p>COUNTRY</p>
						<select>
							<option>INDIA</option>
							<option>Afghanistan</option>
							<option>Albania</option>
							<option>Algeria</option>
							<option>Barbados</option>
							<option>Nigeria</option>
							<option>Japan</option>
						</select>
					</div>
					<div class="pin">
						<p style="color: gray;">Pin-Code/Zip-Code</p>
						<input type="text">
						<button>CHECK</button>
					</div>
				</div>
				<hr style="margin-top: 150px;">
            `
        });
          let totalPrice = 0;
    let  cartPrice = productContainer.getElementsByClassName("cartPrice");
    for (var i = 0; i < cartPrice.length; i++) {
        priceFormatedNumb = cartPrice[i].innerText.replace('₹', '').replace(',', '');
        totalPrice = totalPrice + parseInt((priceFormatedNumb));
    }
    document.getElementsByClassName('total-price')[0].innerText = new Number(totalPrice).toLocaleString('en');;
        
    }
       document.querySelector(".minus-btn").setAttribute("disabled", "disabled")

    var valueCount = 0;

    document.querySelector(".plus-btn").addEventListener("click", function () {
        valueCount = document.querySelector(".input-quntity").value;
        if (valueCount < 1) {
            valueCount++;
            document.querySelector(".input-quntity").value = valueCount;
        } else {

            alert("Sorry! You can only add the displayed number of items to the cart. Please enter quantity up to 1.")
        }
        
    })
   
}
let totalPrice = 0;

function removeItemsfromCart(pid) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    
    let newcart = cart.filter((item) => item.price != pid)

    localStorage.setItem("cart", JSON.stringify(newcart))

    displayCart();
}


   



displayCart();
