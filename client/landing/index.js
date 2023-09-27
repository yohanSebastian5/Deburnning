import * as THREE from"https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
import * as DOTS from "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.dots.min.js"

VANTA.DOTS({
    el: "#containerPuntos",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0xffffff,
    size: 7.10,
    spacing: 24.00,
    showLines: false
  })



    ScrollReveal({reset : false}).reveal('.elemento', {
        delay: 300,   
        duration: 1000,  
        origin: 'bottom',  
        distance: '20px',  
        easing: 'ease-in-out',  
        reset: true    
    });
    ScrollReveal({}).reveal('.navbar', {
        delay: 300,   
        duration: 1000,  
        origin: 'bottom',  
        distance: '20px',  
        easing: 'ease-in-out',  
        reset: true    
    });

