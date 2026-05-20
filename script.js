const menuOpnbtn=document.querySelector("#menu-open-btn");
const menuClsbtn=document.querySelector("#menu-close-button");

menuOpnbtn.addEventListener("click", () =>{

document.body.classList.toggle("show-mbl-menu");
});


menuClsbtn.addEventListener("click", () => menuOpnbtn.click());


const swiper= new Swiper('.slider-wrapper',{
    loop:true,
    spaceBetween:27,


    pagination: {
el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },


    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }

    }

});
