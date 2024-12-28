function scroll(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('main'),
        smooth: true
    });
}

function page2 (){
    var con = document.querySelector('.elem-container');
    var fixed = document.querySelector('.fixed-image');
    con.addEventListener('mouseenter', () => {
        fixed.style.display = "block";
    
    });
    con.addEventListener('mouseleave', () => {
        fixed.style.display = "none";
    });
    
    var elems = document.querySelectorAll('.elem');
    
    elems.forEach(function (e) {
        e.addEventListener('mouseenter', function () {
            var image = e.getAttribute('data-image');
            fixed.style.backgroundImage = `url(${image})`;
        })
        fixed.addEventListener('mouseenter', function () {
            fixed.style.display = "block";
        })
        fixed.addEventListener('mouseleave', () => {
            fixed.style.display = 'none';
        })
    })
}

function page4(){
    // page 4
    var heading = document.querySelector('.heading');
    var blackRight = document.querySelector('.black-right');
    var blackElem = document.querySelectorAll('.black-img');
    var brImg = document.querySelector('.br-img');
    blackElem.forEach(function(e){
        e.addEventListener('click',function(){
        // console.log("hell")
            
            // heading.style.color = "red";
            brImg.style.display = 'none';
            var img = e.getAttribute('data-image');
            blackRight.style.backgroundImage = `url(${img})`;
            blackRight.style.transition = "all 0.4s ease";
        })
    })


    var text1 = document.querySelector('#text1');
    var text2 = document.querySelector('#text2');
    var text3 = document.querySelector('#text3');
    var para = document.querySelector('.para');



    text1.style.transform = 'translate(-30px,0)';
    text2.style.opacity = '0.6';
    text3.style.opacity = '0.6';

    text1.addEventListener('click', function () {
        text1.style.opacity = '1';
        text1.style.transform = 'translate(-30px,0)';
        text1.style.transition = 'all 0.4s ease';
    
        text2.style.opacity = '0.6';
        text2.style.transform = 'translate(30px,0)';
        text2.style.transition = 'all 0.4s ease';
    
        text3.style.opacity = '0.6';
        text3.style.transform = 'translate(30px,0)';
        text3.style.transition = 'all 0.4s ease';
    
        para.textContent = 'Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.';
    
    })
    text2.addEventListener('click', function () {
        text1.style.opacity = '0.6';
        text1.style.transform = 'translate(30px,0)';
        text1.style.transition = 'all 0.4s ease';
    
        text2.style.opacity = '1';
        text2.style.transform = 'translate(-30px,0)';
        text2.style.transition = 'all 0.4s ease';
    
        text3.style.opacity = '0.6';
        text3.style.transform = 'translate(30px,0)';
        text3.style.transition = 'all 0.4s ease';
    
        para.textContent = 'Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.';
    })
    
    text3.addEventListener('click', function () {
        text1.style.transform = 'translate(30px,0)';
        text1.style.opacity = '0.6';
        text1.style.transition = 'all 0.4s ease';
    
        text2.style.transform = 'translate(30px,0)';
        text2.style.opacity = '0.6';
        text2.style.transition = 'all 0.4s ease';
    
        text3.style.opacity = 1;
        text3.style.transform = 'translate(-30px,0)';
    
        text3.style.transition = 'all 0.4s ease';
        para.textContent = 'We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.';
    })

}    

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

function menuAni(){
    var menu =document.querySelector('nav h3');
    var full = document.querySelector('.full-scr');
    var navImg = document.querySelector('nav img');
    var flag = 0;
    menu.addEventListener('click',function(){
        if(flag == 0){
            full.style.top = 0;
            navImg.style.opacity = 0;
            flag=1;
            full.style.transition = 'all 0.4s ease';
        }
        else 
        {
            full.style.top = '-120%';
            navImg.style.opacity = 1;
            flag = 0;
        }
        
    })
}

function loaderAnimation(){
    var loader = document.querySelector('.loader');
    
    setTimeout(() => {
        loader.style.top = "-100%";
    }, 4000);
}

loaderAnimation();
menuAni();
scroll();
page2();
page4();
swiper();