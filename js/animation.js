



function animate(cards) {
   for(let i=0;i<cards.length;i++){
    const element = document.getElementById(cards[i].nom);

    element.style.transform = 'translateY(250px)'; 
    element.style.opacity = '0.5';

    
    element.offsetHeight;

    element.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
    element.style.transform = 'translateY(0)'; 
    element.style.opacity = '1';
    if(i==0){
        element.style.transform="translateY(15px) rotate(-15deg)"
    }
    if(i==2){
        element.style.transform="translateY(15px) rotate(15deg)"
    }

   }
}

function animate_2(cards) {
    for (let i = 0; i < cards.length; i++) {
        const element = document.getElementById(cards[i].nom);
        element.style.animation = 'none';
    
        element.style.transform = 'translateY(-250px)'; 
        element.style.opacity = '0.5';

    
        element.offsetHeight;

        element.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
        element.style.transform = 'translateY(0)'; 
        element.style.opacity = '1';
    }
}




function animate_hbout(cards){
    for(let i=0;i<hbout.length;i++){

        const element = document.getElementById(cards[i].nom);
        

        element.style.transform = 'translateX(-250px)'; 
        element.style.opacity = '0';

        element.offsetHeight;

        element.style.transition = 'transform 1s ease-in-out 0.5s, opacity 1s ease-in-out 0.5s';
        element.style.transform = 'translateX(0)'; 
        element.style.opacity = '1';


    
    }
}




function animate_3_j(cards) {
    for (let i = 0; i < cards.length; i++) {
        const element = document.getElementById(cards[i].nom);
        element.style.animation = 'none';
        element.style.transform = 'translateY(0) rotate(0deg)'; 
        element.style.opacity = '0.5';
    
            
        element.offsetHeight;
    
        element.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
        setTimeout(function() {
        
            element.style.transform = 'translateY(250px)  rotate(360deg)';
        }, 100);  
        element.style.opacity = '0';
        
    
    }
}



function animate_3_j_card(nom) {
    const element = document.getElementById(nom);
    element.style.animation = 'none';

    element.style.transform = 'translateY(0) rotate(0deg)'; 
    element.style.opacity = '0.5';
    
            
    element.offsetHeight;
    element.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
    setTimeout(function() {
        
        element.style.transform = 'translateY(250px)  rotate(360deg)';
    }, 100); 
    element.style.opacity = '0';
   
    
   
}









function animate_4_m(cards) {
    for (let i = 0; i < cards.length; i++) {
        const element = document.getElementById(cards[i].nom);
        element.style.animation = 'none';
        setTimeout(()=>{
            element.style.transform = 'translateY(0) rotate(0deg)'; 
        element.style.opacity = '0.5';

        element.offsetHeight;

        element.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
        element.style.transform = 'translateY(-250px) rotate(360deg)'; 
        element.style.opacity = '0';

        }, 800)
        
        
    }
}

function animate_4_m_card(nom) {
    const element = document.getElementById(nom);
    element.style.animation = 'none';
    element.style.transform = 'translateY(0) rotate(0deg)'; 
    element.style.opacity = '0.5';

    element.offsetHeight;

    element.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
    element.style.transform = 'translateY(-250px) rotate(360deg)'; 
    element.style.opacity = '0';
        

}


function animate_jarya(){
    const element = document.getElementsByClassName('card-back');
    for(let i=0;i<element.length;i++){
        element[i].style.opacity = '0.5';

        element[i].offsetHeight;
    
        element[i].style.transition = 'opacity 1s ease-in-out 0.5s';
        element[i].style.opacity = '1';

    }
   

}
function finir_jarya() {
    const element = document.getElementsByClassName('card-back');
    for(let i=0;i<element.length;i++){
        element[i].offsetHeight;
        element[i].style.animation = 'none';
        element[i].style.opacity = '1';

        element[i].offsetHeight;
    
        element[i].style.transition = 'opacity 1s ease-in-out 0.5s';
        element[i].style.opacity = '0.25';
        

    }
}




