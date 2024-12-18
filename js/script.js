
    const scroll = new LocomotiveScroll({
        el: document.querySelector('main'),
        smooth: true
    });

    var con = document.querySelector('.elem-container');
    var fixed = document.querySelector('.fixed-image');
    con.addEventListener('mouseenter',()=>{
        fixed.style.display = "block";
    
    });
    con.addEventListener('mouseleave',()=>{
        fixed.style.display = "none";
    });
    
    var elems = document.querySelectorAll('.elem');
    
    elems.forEach(function (e){
        e.addEventListener('mouseenter',function (){
            var image = e.getAttribute('data-image');
            fixed.style.backgroundImage = `url(${image})`;
        })
    })
// function swiperanimation(){
//     console.log("eyeye")
//     var swiper = new Swiper(".mySwiper", {
//         slidesPerView: "auto",
//         centeredSlides: true,
//         spaceBetween: 100,
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true
//         },
//     });
// }
// scl();
// page3();
// swiperanimation();
