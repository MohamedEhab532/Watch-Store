let shoppingCart = document.querySelector("nav #menuItems .cart .icon i")
let card = document.querySelector(".card")
let close = document.querySelector(".card .checkout .close")

let heart = document.querySelector("nav #menuItems .wish .icon i")
let heartList = document.querySelector(".favourite")
let closeH = document.querySelector(".favourite .checkout .closeW")
let favList = document.querySelector(".favourite .wishList")
let wishQuantity = document.querySelector(".wish .wishQuantity")

let casioItems = document.querySelector(".Item-header .casio")
console.log(casioItems)
let omegaItems = document.querySelector(".Item-header .omega")
let fossilItems = document.querySelector(".Item-header .fossil")
let features = document.querySelector(".features")

let watchItems = document.querySelectorAll(".Item-header .items") 
let watches = document.querySelector(".categories")

let cardList = document.querySelector(".card .cardList")
let theTotal = document.querySelector(".card .total")
let quantity = document.querySelector(".cart .quantity")
let submit = document.querySelector(".card .submit")

let confirmed = document.querySelector(".confirm")

console.log(theTotal.innerText)

scrollUp = document.querySelector(".scrollUp")

// open shopping cart
shoppingCart.addEventListener("click", ()=>{
    card.style.left = "calc(100% - 400px)"
    features.style.cssText="width:calc(100% - 400px);transition:0.5s"
    watches.style.cssText="width:calc(100% - 400px);transition:0.5s"
    watchItems.forEach((e)=> e.style.cssText="width:calc(100% - 400px);transition:0.5s")
})

// close shopping cart
close.addEventListener("click", ()=>{
    card.style.left= "100%"
    features.style.cssText="width:100%;transition:0.5s"
    watches.style.cssText="width:100%;transition:0.5s"
    watchItems.forEach((e)=> e.style.cssText="width:100%;transition:0.5s")
})

// open wish list
heart.addEventListener("click", ()=>{
    heartList.style.left = "calc(100% - 400px)"
    features.style.cssText="width:calc(100% - 400px);transition:0.5s"
    watches.style.cssText="width:calc(100% - 400px);transition:0.5s"
    watchItems.forEach((e)=> e.style.cssText="width:calc(100% - 400px);transition:0.5s")
})
// close wish list
closeH.addEventListener("click", ()=>{
    heartList.style.left= "100%"
    features.style.cssText="width:100%;transition:0.5s"
    watches.style.cssText="width:100%;transition:0.5s"
    watchItems.forEach((e)=> e.style.cssText="width:100%;transition:0.5s")
})

console.log("###".repeat(20))

// start watch category 
let lis = document.querySelectorAll(".category li")
let images = document.querySelectorAll(".images div")
console.log(lis)
console.log(images)

lis.forEach((li)=>{
    li.addEventListener("click",()=>{
        images.forEach((i)=>{
            i.style.display = "none"
            if(i.classList.contains(li.classList.value)){
                i.style.display = "block"
                i.style.transform = `translateX ${-100}vx`
            }
        })
        
        console.log(li.classList.value)
    })
})
console.log("###".repeat(20))
// end watch category 


let products= [
    {
        id: 1,
        name: "casio 1",
        price: 30,
        image: "ca1.png"
    },
    {
        id :2 ,
        name:"casio 2 "
        ,price:50,
        "image":"ca2.png"
    },
    {
        id:  3,
        name:"casio 3 ",
        price:20,
        image:'ca3.png'
    },
    {
        id: 4,
        name: "omega 1",
        price: 50,
        image: "om1.png"
    },
    {
        id :5,
        name:"omega 2 ",
        price:60,
        "image":"om2.png"
    },
    {
        id:  6,
        name:"omega 3 ",
        price:40,
        image:'om3.png'
    },
    {
        id: 7,
        name: "fossil 1",
        price: 30,
        image: "fo1.png"
    },
    {
        id :8 ,
        name:"fossil 2 "
        ,price:50,
        "image":"fo2.png"
    },
    {
        id:  9,
        name:"fossil 3 ",
        price:20,
        image:'fo3.png'
    }
]


/* if(JSON.parse(localStorage.getItem("products"))){
    products=JSON.parse(localStorage.getItem("products"))
    console.log(products)


localStorage.setItem("products",JSON.stringify(products)) */

// start putting products in web
function pItmes (){
    products.forEach((value, key)=>{
        
        let newDiv = document.createElement("div")
        newDiv.classList.add("item", `${value.id}`)
        newDiv.innerHTML = `<img src = "images/${value.image}"/>
        <h4>${value.name[0].toUpperCase()}${value.name.slice(1)}</h4> 
        <p>$${value.price}</p>
        <div class="btns">
            <button onclick = "addToCart(${value.id-1})"> Add to Cart</button>
            <i class="fa-solid fa-heart ${key}"></i>
        </div>
        `
        if(value.name.includes("casio")){
            casioItems.appendChild(newDiv)
        }else if(value.name.includes("omega")){
            omegaItems.appendChild(newDiv)
        }
        else{
            fossilItems.appendChild(newDiv)
        }
        
    })
}

 
pItmes()
// end putting products in web
console.log("###".repeat(20))

//start add colors in product
let items = document.querySelectorAll(".Item-header .items .item")[7].children[2]
console.log(items)
let color = document.createElement("div")
color.classList.add("colors")
color.innerHTML = `<div class = "black" style = "background-color: black;border: 3px white solid; width:30px; height: 30px;border-radius: 50%;""></div>
<div class = "blue" style = "background-color: blue;border: 3px white solid; width:30px; height: 30px;border-radius: 50%;""></div>`

color.style.cssText = "display:flex; justify-content: space-evenly;padding: 0 70px;margin-bottom: 20px;"
items.after(color)
//end add colors in product


// start switching images according to colors
let imageChange = [...document.querySelectorAll(".Item-header .items .item")[7].children[3].children]
let foImage = document.querySelectorAll(".Item-header .items .item")[7].children[0]
console.log(foImage)




imageChange.forEach((e)=>{
e.addEventListener("click", ()=>{
    if(e.className=="blue"){
        foImage.setAttribute("src", "images/fo22.png")
        products[7].image = "fo22.png"
        localStorage.setItem("products",JSON.stringify(products))
    }else{
        foImage.setAttribute("src", "images/fo2.png")
        products[7].image = "fo2.png"
        localStorage.setItem("products",JSON.stringify(products))
    }
})
})

console.log("###".repeat(20))
// end switching images according to colors

// start add product in cart
let list = [];

function addToCart(key){

    /* if (list[key] == null){
        //list[key]= products[key]
        // list.push(products[key])
        //list[key].quantity = 1
        
        //console.log(list[key].quantity )
        localStorage.setItem("lists",JSON.stringify(list))
    } */
    products[key].quantity = 1
        list.push(products[key])
        list = [...new Set (list)]
        console.log(list)
    reloadCard()
}


function reloadCard(){
    cardList.innerHTML = '';
    let count = 0
    let total = 0
    list.forEach((value,key)=>{
        total = total +value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement("li")
            newDiv.innerHTML = `<div> <img src = "images/${value.image}" style ="width:100px; height:100px;"/></div>
            <div>${value.name}</div>
            <div>${value.price}</div>
            <div>
            <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
            <div class= "count"> ${value.quantity}</div>
            <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
            <button onclick="deleteProduct(${key})">Delete</button>`
            cardList.appendChild(newDiv)
        }

    })
    theTotal.innerText = `$${total.toLocaleString()}`
    quantity.innerText = count
}
// end add product in cart

// start submit
submit.addEventListener("click",()=>{
    confirmed.style.display="block"
    confirmed.childNodes[5].childNodes[1].innerText = theTotal.innerText

})

console.log(confirmed.childNodes[5].childNodes[1].innerText)


function ok(){
    console.log(confirmed)
    confirmed.style.display="none"
}
// end submit

// start change quantity and delete
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete list[key];
    }else{
        list[key].quantity = quantity;
        list[key].price = products[key].price * quantity;

    }
    reloadCard()
}

function deleteProduct (key){
    delete list[key];
    reloadCard()
}
// end change quantity and delete

//console.log(JSON.parse(localStorage.getItem("products"))[0])

console.log("###".repeat(20))

// wishlist
let wishList = document.querySelectorAll(".categories .Item-header .items .btns i")
// console.log(wishList)

let favouriteList =[]
let heartt =[]

if(localStorage.getItem("fav")){
    favouriteList= JSON.parse(localStorage.getItem("fav"))
}
getLocal()

wishList.forEach((value,key)=>{
    value.addEventListener("click",()=>{
        if(!value.classList.contains("active")){
            value.classList.add("active")
            value.setAttribute("data-set","red")
            value.style.color="red";
            products[key].heart = value.getAttribute("data-set")
            products[key].quantity = 1
            favouriteList.push(products[key])
            
            //favouriteList[key].quantity = 1
            //favouriteList[key] = products[key]
            console.table(favouriteList)
        }/* else if (value.classList.contains("active")){
            //value.classList.remove("active")
            //value.removeAttribute("data-set")
            //value.style.color="white"
            value.style.color="white"
                value.classList.remove("active")
            favouriteList = [...new Set (favouriteList)]
        } */
        addWishList(favouriteList)
        addLocal(favouriteList)
    })
    
})
console.table(JSON.parse(localStorage.getItem("fav")))

function addWishList(favouriteList){
    favList.innerHTML = "";
    let count = 0
    
    favouriteList.forEach((fav,key)=>{
        wishList.forEach((value,key)=>{
            //console.table(value.getAttribute("class")[18])
            //console.table(fav.id)
            if((fav.id -1)== value.getAttribute("class")[18]){
                value.style.color=fav.heart
                console.log(value)
            }
        })
        count = count + fav.quantity
        
        let newDiv = document.createElement("li")
        newDiv.setAttribute("id",fav.id)
        newDiv.innerHTML = `<div> <img src = "images/${fav.image}" style ="width:100px; height:100px;"/></div>
    <div>${fav.name}</div>
    <div>$${fav.price}</div>
    <button onclick = "addToCart(${fav.id -1})"> Add to Cart</button>
    <button class=" del ${key}">Delete</button>`
    favList.appendChild(newDiv)
    })

    wishQuantity.innerText = count
}

favList.addEventListener("click",(e,i)=>{
    if(e.target.classList.contains("del")){
        e.target.parentElement.remove();
        deleteWish(e.target.parentElement.getAttribute("id"))
        wishList.forEach((value,key)=>{
            if((e.target.parentElement.getAttribute("id")-1)==value.getAttribute("class")[18]){
                value.style.color="white"
                value.classList.remove("active")
            }
        })
        
        console.log(e.target.parentElement.getAttribute("id"))
    }
    wishQuantity.innerHTML = parseInt(wishQuantity.innerHTML)-1
})

function addLocal(favouriteList){
    localStorage.setItem('fav', JSON.stringify(favouriteList))
}
function getLocal(){
    let data = localStorage.getItem("fav")
    if(data){
        let fav = JSON.parse(data)
        addWishList(favouriteList)
    }
}

function deleteWish(wishId){
    favouriteList = favouriteList.filter((fav)=> fav.id !=wishId)
    addLocal(favouriteList)
}

// scroll
window.onscroll= (()=>{
    if(window.scrollY >= 780){
        scrollUp.style.cssText="display:block;animation: backInUp 2s;"
    }else{
        scrollUp.style.cssText="display:none;"
    }

    if(window.scrollY >= 1000){
        casioItems.style.cssText="animation: backInUp 2s;"
    }
    if(window.scrollY >= 1810){
        omegaItems.style.cssText="animation: backInUp 2s;"
    }
    if(window.scrollY >= 2610){
        fossilItems.style.cssText="animation: backInUp 2s;"
    }
    //console.log(scrollY)

})


scrollUp.addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"});
})


/* window.scrollBy({
    top: 1000,
    left: 1000,
    behavior: "smooth",
  }); */





  function makeRequest(location) {
    return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`)
    if (location === 'Google') {
    resolve('Google says hi')
    } else {
    reject('We can only talk to Google')
    }
    })
    }
    function processRequest(response) {
    return new Promise((resolve, reject) => {
    console.log('Processing response')
    resolve(`Extra Information + ${response}`)
    })
    }
    
    
   
    async function doWork() {
        const response = await makeRequest('Google')
        
        console.log('Response Received')
        console.log(response)
        const processedResponse = await processRequest (response)
        console.log(processedResponse)
        }
        doWork()
        
