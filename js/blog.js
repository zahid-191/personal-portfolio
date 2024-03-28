
AOS.init({
    duration:3000,
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