// JAVASCRIPTS PRACTICE START
const box=document.querySelector('.content__box p');
const balb=document.querySelector('.content__box button')
var amily=0
balb.addEventListener('click', function(){

        if(amily == 0){
            balb.innerHTML='Remove request'
            box.innerHTML='Friend'
            amily=1
        }
        else{
            balb.innerHTML='Add Friend'
            box.innerHTML='Stranger'
            amily=0
        }
    
 
});

const heartBody=document.querySelector('.gg')
const heartbtn=document.querySelector('.show')

heartBody.addEventListener("dblclick", function(){
    heartbtn.style.transform='translate(-50%, -50%) scale(1)'
    heartbtn.style.opacity=1
    heartbtn.style.color='red'

    setTimeout(function(){
        heartbtn.style.color='white'
    },1000)

    setTimeout(function(){
        heartbtn.style.opacity=0
    },2000)

    setTimeout(function(){
        heartbtn.style.transform='translate(-50%, -50%) scale(0)'
    },3000)
})
// JAVASCRIPTS PRACTICE END



$('.teamslide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$('.testimonial_box ').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('.brand').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// AOS
AOS.init({
    duration:3000,
});

// our work mixitup
var confi=document.querySelector('.mixcount');
var mixer=mixitup(confi);

// couter up
jQuery(document).ready(function($) {
    $('.counter').counterUp({
            delay: 10,
            time: 5000
        });
});

// MOUSE___REACTION

var maouseReact=document.querySelector('.mouse__reaction')

document.addEventListener('mousemove', (dets) => {
  gsap.to(maouseReact, {
    left: dets.x-13,
    top: dets.y-10,
    scale: 1,
    opacity: 1,  
   
  })
});

document.addEventListener('mouseleave', (dets) => {
    gsap.to(maouseReact, {
      scale: 0,
      opacity: 0,       
    })
  });


var arry=[10,2,11,3,5,22,33,11,66,33]

var newArry=[];

arry.forEach(function(x){
    newArry.push(x)
})

  console.log(newArry);

  const mapArry=arry.filter((e)=>{
    return e>20;
  })
  console.log(mapArry);


 var imgHero=document.querySelector('.hero_img')
 var heroBlock=document.querySelector('.hero_col2')
 var heroTitle=document.querySelector('.hero_title h2')
 var heroTitletext=document.querySelector('.hero_title h5')



 heroBlock.addEventListener("mousemove",(dets)=>{
  gsap.to(imgHero,{
    scale:1,
    opacity:0.8,
    duration:4,
    rotate:360,
  })
 })

 heroBlock.addEventListener("mouseleave",(dets)=>{
    gsap.to(imgHero,{
      scale:1,
      opacity:1,
      duration:4,
      rotate:0
    })
   })
//    heroTitle.addEventListener("mousemove",(dets)=>{
//     gsap.to(heroTitle,{
//       scale:0.7,
//       opacity:0.3,
//       duration:3,
//       rotate:-360,
//     })
//    })

//    heroTitle.addEventListener("mouseleave",(dets)=>{
//     gsap.to(heroTitle,{
//       scale:1,
//       opacity:1,
//       duration:3
//     })
//    })

gsap.to(heroTitle, {
    duration: 4,
    text: "I'm Zahid Hasan",
    ease: "power1.out",
     opacity:0.6,
  });

gsap.to(heroTitletext, {
    duration: 4,
    text: "Web Developer",
    ease: "power1.out",
  });



var formS=document.getElementById('product__upload');

function productAdd(prodouctInfo){
  var productCodeHtml=`

  <div class="col-xl-3">
  <div id="Product__body">

      <div class="product__img">
          <img src="${prodouctInfo.pdurl}" alt="">
      </div>

      <div class="product___title_card">
          <h3>${prodouctInfo.pdtitle}</h3>
      </div>

      <div class="product___description">
          <p>${prodouctInfo.pddescription}</p>
      </div>

      <div class="product__value">${prodouctInfo.pdprice}</div>

      <div class="product__review">
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
      </div>

      <a href="${prodouctInfo.pddetails}"  target="_blank">Details</a>


  </div>

</div>
   
  `;
  return productCodeHtml;
}


formS.addEventListener('submit', (el)=>{
  el.preventDefault();

  var pdurl=el.target.pdurl.value;
  var pdtitle=el.target.pdtitle.value;
  var pddetails=el.target.pddetails.value;
  var pddescription=el.target.pddescription.value;
  var pdprice=el.target.pdprice.value;

 let prodouctInfo={
  pdurl,
  pdtitle,
  pddescription,
  pdprice,
  pddetails,
 }

 var productSet=productAdd(prodouctInfo);
  var ProductList=document.getElementById('Product__list');


  ProductList.innerHTML +=productSet;

})