function home(){
    window.location.href = "index.html"
}

function prod(){
window.location.href ="product.html"
}

function land(){
window.location.href ="login.html"
}

let div = document.getElementById("second");



//let value = JSON.parse(localStorage.getItem("items"));

let value = document.getElementById("price");

let cost= Number(value.innerHTML);
let mainCost=cost;
//console.log(cost)
let tem = cost + 2351;
let temp = cost + 3468;

let mainImg = document.getElementById("mainImg")
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");

//let price = document.getElementById("price");
function gridBox(cos){
    value.innerHTML=""
    value.innerHTML = `PRICE &#x20b9 ${cos}.00`;
}

gridBox(cost);

let butn1 = document.getElementById("sq2");
let butn = document.getElementById("sq1");
let butn2 = document.getElementById("sq3");

//detail info2
let chang = document.getElementById("chang");
let fVal = document.getElementById("fVal");
let weight = document.getElementById("weigh");


function change(){
    butn1.setAttribute("style","border: 1px solid rgb(238, 235, 235)");
    butn.setAttribute("style","border: 1px solid black");
    butn2.setAttribute("style","border: 1px solid rgb(238, 235, 235)");

    //detail info2
    chang.innerHTML = "&#x20b9"+" "+ (cost-831.75);
    fVal.innerHTML = "&#x20b9"+" "+ (cost)+".00";
    weight.innerHTML = "4.567g";
    value["weight"] = "4.567";

    mainCost = cost;
    gridBox(mainCost)
}

function change1(){
    butn1.setAttribute("style","border: 1px solid black");
    butn.setAttribute("style","border: 1px solid rgb(238, 235, 235)");
    butn2.setAttribute("style","border: 1px solid rgb(238, 235, 235)");

    //detail info2
    chang.innerHTML = "&#x20b9"+" "+ (tem-831.75)
    fVal.innerHTML = "&#x20b9"+" "+ (tem)+".00";
    weight.innerHTML = "4.845g";
     value["weight"] = "4.845";
    
    mainCost = tem;
    gridBox(mainCost)
}

function change2(){
    butn1.setAttribute("style","border: 1px solid rgb(238, 235, 235)");
    butn.setAttribute("style","border: 1px solid rgb(238, 235, 235)");
    butn2.setAttribute("style","border: 1px solid black");
    
    //detail info2
    chang.innerHTML = "&#x20b9"+" "+ (temp-831.75)
    fVal.innerHTML = "&#x20b9"+" "+ (temp)+".00";
    weight.innerHTML = "4.859g";
    value["weight"] = "4.859";

    mainCost = temp
    gridBox(mainCost);
}



//image change


let r1 = document.getElementById("r1");
let r2 = document.getElementById("r2");



function imageChange1(){
    r1.textContent ="";
    r2.innerHTML = "&#62";
    mainImg.src = img1.src;
    img1.setAttribute("style","border:1px solid black");
    img2.setAttribute("style","border:1px solid rgb(218, 215, 215)");
}

function imageChange2(){
    r2.textContent ="";
    r1.innerHTML = "&#60";
    mainImg.src = img2.src;
    img2.setAttribute("style","border:1px solid black");
    img1.setAttribute("style","border:1px solid rgb(218, 215, 215)");
}


//for drop down
let up = document.getElementById("up");
let i=0
let show = document.getElementById("show")

function down(){
    
    show.innerText="";

    if(i == 1){
        up.innerhtml="";
        up.innerHTML= "&#x2227";
        i--;
    }
    else {
        up.innerHTML="";
        up.innerHTML= "&#x2228";
        i++;
    }
    
    if(show.style.display === "none"){
        show.style.display = "block"
    }
    else {
        show.style.display = "none"
    }


    let show1 = document.createElement("div")
    show1.innerHTML= "FREE SHIPPING & FREE RETURNS ON ALL ORDERS";
    let show2 = document.createElement("div")
    show2.innerHTML = "Find out more about our<span style='text-decoration:underline'> Delivery </span>and <span style='text-decoration:underline'>Returns</span> policy.";
    show2.setAttribute("style","margin-top:0.5% ;font-size:20px");

    let grid_div = document.createElement("div")
    grid_div.setAttribute("class","grid")

    let gDiv1 = document.createElement("div");
    let subGD1 = document.createElement("div");
    subGD1.innerHTML = "COUNTRY";
    let subSelect = document.createElement("select");
    let sunOption1 = document.createElement("option");
    sunOption1.innerHTML = "India";
    let sunOption2 = document.createElement("option");
    sunOption2.innerHTML = "New Zealand";
    let sunOption3 = document.createElement("option");
    sunOption3.innerHTML = "Italy";

    subGD1.setAttribute("class","light");
    subSelect.setAttribute("id","select1")
    
    subSelect.append(sunOption1,sunOption2,sunOption3);
    gDiv1.style.marginLeft = "30%";

    gDiv1.append(subGD1,subSelect);

    let gDiv2 = document.createElement("div");
    let subGD2 = document.createElement("div");
    let text = document.createElement("input");
    text.setAttribute("id","text1")
    let butt = document.createElement("button");
    butt.setAttribute("id","bu1")
    butt.innerHTML = "CHECK";
    text.type = "number";
    subGD2.innerHTML = "PINCODE";
    gDiv2.style.marginLeft = "2%"
    
    subGD2.setAttribute("class","light");
    subGD2.style.paddingTop="1%";
    gDiv2.append(subGD2,text,butt)


    grid_div.append(gDiv1,gDiv2)


    show.append(show1,show2,grid_div)
}

//detail Page

let in1 = document.getElementById("info1")
let in2 = document.getElementById("info2")
let in3 = document.getElementById("info3")
let in4 = document.getElementById("info4")
let in5 = document.getElementById("info5")

let id1 = document.getElementById("tem1")
let id2 = document.getElementById("tem2")
let id3 = document.getElementById("tem3")
let id4 = document.getElementById("tem4")
let id5 = document.getElementById("tem5")

function info1(){
    in2.style.display = "none";
    in3.style.display = "none";
    in4.style.display = "none";
    in5.style.display = "none";
    if(in1.style.display === "none"){
        in1.style.display = "block"
    }

    id2.style.textDecoration = "none"
    id1.style.textDecoration = "underline"
    id3.style.textDecoration = "none"
    id4.style.textDecoration = "none"
    id5.style.textDecoration = "none"

    tem1.scrollIntoView();

}

function info2(){
    in1.style.display = "none";
    in3.style.display = "none";
    in4.style.display = "none";
    in5.style.display = "none";
    if(in2.style.display === "none"){
        in2.style.display = "block"
    }

    cost = cost-831.75
    chang.innerHTML = "&#x20b9"+" "+ (cost);
    cost = cost + 831.75
    fVal.innerHTML = "&#x20b9"+" "+ (cost) +".00";
    weight.innerHTML = "4.567g";


    

    id2.style.textDecoration = "underline"
    id1.style.textDecoration = "none"
    id3.style.textDecoration = "none"
    id4.style.textDecoration = "none"
    id5.style.textDecoration = "none"

    tem2.scrollIntoView();
    

}

function info3(){
    in2.style.display = "none";
    in1.style.display = "none";
    in4.style.display = "none";
    in5.style.display = "none";
    if(in3.style.display === "none"){
        in3.style.display = "block"
    }

    id2.style.textDecoration = "none"
    id3.style.textDecoration = "underline"
    id1.style.textDecoration = "none"
    id4.style.textDecoration = "none"
    id5.style.textDecoration = "none"

}

function info4(){
    in2.style.display = "none";
    in1.style.display = "none";
    in3.style.display = "none";
    in5.style.display = "none";
    if(in4.style.display === "none"){
        in4.style.display = "block"
    }

    id2.style.textDecoration = "none"
    id4.style.textDecoration = "underline"
    id1.style.textDecoration = "none"
    id3.style.textDecoration = "none"
    id5.style.textDecoration = "none"

}

function info5(){
    in2.style.display = "none";
    in1.style.display = "none";
    in3.style.display = "none";
    in4.style.display = "none";
    if(in5.style.display === "none"){
        in5.style.display = "block"
    }

    id2.style.textDecoration = "none"
    id5.style.textDecoration = "underline"
    id1.style.textDecoration = "none"
    id3.style.textDecoration = "none"
    id4.style.textDecoration = "none"

}


//cart

let cartn = document.getElementById("cartNo");
let my = JSON.parse(localStorage.getItem("cart"));
if(my != null){
    cartn.innerHTML = my.length;
}

function go(){
    window.location.href="Cart.html";
}


//add to cart option
function cartPage(i,n,d){
    
    let alert1 = document.getElementById("alert1");
    let alert2 = document.getElementById("absolute");

    //childs of alert2
    let child1 = document.createElement("div");
    child1.setAttribute("style","margin: 3% 0% 7% 8%")
    child1.innerHTML= "Item Succesfully Added to Cart";
    let child2 = document.createElement("div");
    child2.setAttribute("class","myC2");
    let child21 = document.createElement("img");
    child21.setAttribute("class","myC21");
    child21.src= img1.src;
    let child22 = document.createElement("div");
    child22.setAttribute("style","font-size:17px;")
    let child221 = document.createElement("div");
    child221.setAttribute("style","margin-bottom:10%")
    child221.innerHTML = document.getElementById("hh").innerHTML;
    let child222 = document.createElement("div");
    child222.innerHTML = `${"&#x20b9"} ${mainCost} <br><br>Quantity : 1`;
    child22.append(child221,child222);
    child2.append(child21,child22);
    let child3 = document.createElement("div");
    let newChild = document.createElement("a");
    newChild.innerHTML = "View Cart";
    child3.setAttribute("class","cartBtn");
    newChild.setAttribute("class","cartBtn");
    newChild.setAttribute("style","margin-left:30%");
    newChild.href = "/home/products/cart";
    child3.append(newChild);


    fetch("http://localhost:4321/home/add")
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        let res=true;
        if(String(data) == String([])){
            alert2.style.display="block";
            alert2.textContent ="";
            alert2.append(child1,child2,child3);
            setTimeout(function(){
                alert2.style.display = "none";
            },5000);
        }
        else{
            data.forEach((ele)=>{
                if(ele.id == d){
                    res = false;
                }
            })
            if(res == true){
                alert2.style.display="block";
                alert2.textContent ="";
                alert2.append(child1,child2,child3);
                setTimeout(function(){
                    alert2.style.display = "none";
                },5000);
            }
            else{
                alert1.innerHTML="";
                document.getElementById("hh").scrollIntoView();
                alert1.innerHTML= "Sorry! You can only add the displayed number of items to the cart. Please enter quantity up to 1.";
            }
        }
    })
    .catch(err =>{
        console.log(err);
    })
    

    fetch("http://localhost:4321/home/add",{
        method: "POST",
        body: JSON.stringify({
               id : d,
               name : n,
               image : i,
               price: mainCost
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
    
}


//zoom image
let expand = document.getElementById("zooo")
function zoom(){
    let zoo = document.createElement("img");
    zoo.src=  mainImg.src;
    zoo.setAttribute("class","zoome");
    zoo.setAttribute("style","display:block;");
    setTimeout(function(){
        zoo.style.display = "none"
    },2000)
    expand.append(zoo);
}