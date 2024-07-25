const product = [
    {
        id: 0,
        image: 'Cart1.jpg',
        title: 'AIML',
        price: 120,
    },
    {
        id: 1,
        image: 'Cart2.png',
        title: 'Problem Solving',
        price: 60,
    },
    {
        id: 2,
        image: 'Cart3.jpg',
        title: 'DBMS',
        price: 230,
    },
    {
        id: 3,
        image: 'Cart4.jpg',
        title: 'FRONTEND',
        price: 100,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}


// Bill
function showSuccessMessage() {
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";

    playPopUpSound();

    setTimeout(function() {
        successMessage.style.display = "none";
    }, 3000); 
}

function playPopUpSound() {
    const audio = new Audio('QKTA234-pop.mp3'); 
    audio.play();
}
const paymentButton = document.getElementById("paymentButton");
paymentButton.addEventListener("click", function() {
    showSuccessMessage();
});
