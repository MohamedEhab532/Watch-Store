// trying another way to insert itmes in cart by localStorange

/* if(JSON.parse(localStorage.getItem("lists"))){
    list = list.concat(JSON.parse(localStorage.getItem("lists")))
    // let list = JSON.parse(localStorage.getItem("lists")) 
    console.log(list)
    cardList.innerHTML = '';
    let count = 0
    let total = 0
    list.forEach((value)=>{
        let newDiv = document.createElement("li")
            newDiv.innerHTML = `<div> <img src = "images/${value.image}" style ="width:100px; height:100px;"/></div>
            <div>${value.name}</div>
            <div>${value.price}</div>
            <div>
            <button >-</button>
            <div class= "count"> ${value.quantity}</div>
            <button >+</button>
            </div>
            <button >Delete</button>`
            cardList.appendChild(newDiv)
        console.log(list)
        total = total +value.price;
        count = count + value.quantity;
    })

    theTotal.innerText = total.toLocaleString()
    quantity.innerText = count
        
}  */






/* if(localStorage.getItem("wish")){
    favouriteList = favouriteList.concat(JSON.parse(localStorage.getItem("wish")))
    favList.innerHTML="";
    console.log(favouriteList)
    favouriteList.forEach((value)=>{
        let newDiv = document.createElement("li")
            newDiv.innerHTML = `<div> <img src = "images/${value.image}" style ="width:100px; height:100px;"/></div>
            <div>${value.name}</div>
            <div>${value.price}</div>
            <button onclick="deleteProduct()">Delete</button>`
            favList.appendChild(newDiv)
    })
    
} */

favouriteList.forEach((value)=>{
    let newDiv = document.createElement("li")
        newDiv.innerHTML = `<div> <img src = "images/${value.image}" style ="width:100px; height:100px;"/></div>
        <div>${value.name}</div>
        <div>${value.price}</div>
        <button onclick="deleteProduct()">Delete</button>`
        favList.appendChild(newDiv)
})
function wish (){
    wishList.forEach((value,key)=>{
        value.addEventListener("click",(()=>{
            if(!value.classList.contains("active")){
                value.classList.add("active")
                value.style.cssText="color:red"
                favouriteList[key] = products[key] 
                //favouriteList.push(products[key])
                //favouriteList = new Set (favouriteList)
                console.table(favouriteList)
                //localStorage.setItem("wish",JSON.stringify(favouriteList))
            }else if(value.classList.contains("active")){
                value.classList.remove("active")
                value.style.cssText="color:white"
                let index = favouriteList.indexOf(products[key])
                favouriteList.splice(index,1)
                console.table(favouriteList)
                //localStorage.setItem("wish",JSON.stringify(favouriteList))
            }
        }))
        
        //console.log(value)
    })
}
wish()





//complex way to add products in cart

/* let casioProducts = [
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
    }
]

function c (){
    
    casioProducts.forEach((value, key)=>{
        let newDiv = document.createElement("div")
        newDiv.classList.add("item")
        newDiv.innerHTML = `<img src = "images/${value.image}"/>
        <h4>${value.name[0].toUpperCase()}${value.name.slice(1)}</h4> 
        <p>$${value.price}</p>
        <button onclick = "addToCart${key}"> Add to Cart</button>`
        
        casioItems.appendChild(newDiv)
    })
}

c()


let omegaProducts = [
    {
        id: 1,
        name: "omega 1",
        price: 50,
        image: "om1.png"
    },
    {
        id :2 ,
        name:"omega 2 ",
        price:60,
        "image":"om2.png"
    },
    {
        id:  3,
        name:"omega 3 ",
        price:40,
        image:'om3.png'
    }
]

function o (){
    
    omegaProducts.forEach((value, key)=>{
        let newDiv = document.createElement("div")
        newDiv.classList.add("item")
        newDiv.innerHTML = `<img src = "images/${value.image}"/>
        <h4>${value.name[0].toUpperCase()}${value.name.slice(1)}</h4> 
        <p>$${value.price}</p>
        <button onclick = "addToCart${key}"> Add to Cart</button>`
        
        omegaItems.appendChild(newDiv)
    })
}

o()


let fossilProducts = [
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
    }
]

function f (){
    
    casioProducts.forEach((value, key)=>{
        let newDiv = document.createElement("div")
        newDiv.classList.add("item")
        newDiv.innerHTML = `<img src = "images/${value.image}"/>
        <h4>${value.name[0].toUpperCase()}${value.name.slice(1)}</h4> 
        <p>$${value.price}</p>
        <button onclick = "addToCart${key}"> Add to Cart</button>`
        
        fossilItems.appendChild(newDiv)
    })
}

f() */


//convert numbers to roman 

/* function solution(number){
    // convert the number to a roman numeral
    var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var ans = '';
    decimals.map((e,i)=>{
        while(number >= e){
            ans += roman[i]
            number -= e
            console.log(roman[i])
            console.log(number)
            
        }
        
    })
    console.log(ans)
    }
    
    solution(4) */




//Pete, the baker

/*     let recipe = {flour: 500, sugar: 200, eggs: 1};
    let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
let x= Object.keys(recipe).every((e)=>{
    //return e.includes(Object.keys(available))
    return Object.keys(available).includes(e)
})
console.log(x)

function cakes(recipe, available) {
    let amount =[]
    let indicator = Object.keys(recipe).every((e)=>{
        //return e.includes(Object.keys(available))
        return Object.keys(available).includes(e)
    })
    if(indicator ===false){
        amount = 0
    }else{
        for(let i=0; i<Object.keys(recipe).length;i++){
            amount.push(Math.floor(available[Object.keys(recipe)[i]] / recipe[Object.keys(recipe)[i]]));
            console.log(amount)
        }
    }
    amount = Math.min(...amount)
    console.log(amount);
    return amount
  }



  //Pete, the baker
    cakes(recipe, available) */

    /* function cakes(recipe, available) {
        return Object.keys(recipe).reduce(function (val, ingredient) {
          return Math.min(
            Math.floor(available[ingredient] / recipe[ingredient] || 0),
            val
          )
        }, Infinity)
      } */



//sum digits
/* function digitalRoot(n) {
// ...
let sum = 0
n= n.toLocaleString().split(",").join("").split("")
console.log(n)
    for(let i=0; i<n.length;i++){
    if(n.length >1){
    sum+= parseInt(n[i])
        console.log(sum)
    }
    }
    console.log(sum)
    return sum >= 10 ? digitalRoot(sum) : sum

//console.log(n.toLocaleString().length)
}

digitalRoot(326710) */


//max sum
/* var maxSequence = function(arr){
    // ...
    let sum = 0, sum2 =0

    if(arr.length <= 0){
        return (0)
    }else{
        for(let i=0;i<arr.length;i++){
            sum+=arr[i];
            if (sum<=0){
                sum =0
            }else if(sum> sum2){sum2 = sum}
            
        }
        
        return sum2
        
    }
    
  }

  maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) */


  //Product of consecutive Fib numbers
/*     function productFib(prod){
    // ...
    let sum1 = 0,sum2=1 ,t=0
    for (let i=0;i<prod;i++){
        t = sum1 + sum2
        sum1 = sum2
        sum2 = t

        console.log(sum1 ,sum2, t)
        if((sum1 * sum2) == prod){
            t = true
            break
        }
        if((sum1 * sum2) >prod){
            t= false
            break
        }
    }
    return ([sum1, sum2, t])
    }

    productFib(447577) */

//Product of consecutive Fib numbers (simple answer)
/* function productFib(prod){
    var n = 0;
    var nPlus = 1;  
    while(n*nPlus < prod) {
        nPlus = n + nPlus;
        n = nPlus - n;
    }
    return [n, nPlus, n*nPlus===prod];
    } */


    /* function isValidWalk(walk) {
    //insert brilliant code here
    //let walking = walk
    let count =0
    if (walk.length == 10){
        for (let i = 0; i<walk.length;i++){
            if(walk[i] != walk[i+1])
            {count++}
            else{
                console.log("should return false")
                break
            }
        }
        if (count == 10){
            console.log("should return true")
        }
        
    }else{
    console.log("should return false")
    }
    }
    
    isValidWalk(['n','s','n','s','n','s','n','s','n','s']) */