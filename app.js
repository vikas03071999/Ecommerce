const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

// all products information
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors:[
            {
                code: "black",
                img: "./img/air.png"
            },
            {
                code: "darkblue",
                img: "./img/air2.png"
            }
        ]
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 210,
        colors:[
            {
                code: "lightgray",
                img: "./img/jordan.png"
            },
            {
                code: "green",
                img: "./img/jordan2.png"
            }
        ]
    },
    {
        id: 3,
        title: "Blazer",
        price: 150,
        colors:[
            {
                code: "lightgray",
                img: "./img/blazer.png"
            },
            {
                code: "green",
                img: "./img/blazer2.png"
            }
        ]
    },{
        id: 4,
        title: "Crater",
        price: 200,
        colors:[
            {
                code: "black",
                img: "./img/crater.png"
            },
            {
                code: "lightgray",
                img: "./img/crater2.png"
            }
        ]
    },
    {
        id: 5,
        title: "Hippie",
        price: 199,
        colors:[
            {
                code: "gray",
                img: "./img/hippie.png"
            },
            {
                code: "black",
                img: "./img/hippie2.png"
            }
        ]
    }
]

var choosenProduct = products[0];    // showing first product by default

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
// When clicking different products
menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        // changing the slide
        wrapper.style.transform = `translateX(${-100*index}vw)`;
        // change the choosen product
        choosenProduct = products[index];
        // change the product details
        currentProductImg.src = choosenProduct.colors[0].img;
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$"+choosenProduct.price;
        currentProductColors.forEach((item,index)=>{
            item.style.backgroundColor = choosenProduct.colors[index].code;
        })
        currentProductSizes.forEach(item=>{
            item.style.backgroundColor = "white";
            item.style.color = "black";
        })

    })

})

currentProductColors.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    })
})

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(item =>{
            item.style.backgroundColor = "white";
            item.style.color = "black";
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
    })
})

const buyNowBtn = document.querySelector('.buyBtn');
const paymentModal = document.querySelector('.payment');
const closeModal = document.querySelector('.close');

buyNowBtn.addEventListener("click",()=>{
    paymentModal.style.display = "flex";
})

closeModal.addEventListener("click",()=>{
    paymentModal.style.display = "none";
})