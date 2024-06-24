var audio;



function load_music(){
    
    var music = localStorage.getItem('music');
    audio = document.getElementById('myAudio');
    audio.src=music;
}

document.addEventListener('DOMContentLoaded', function () {
   
    audio = document.getElementById('myAudio');
    
    
    var volumeRange = document.getElementById('volumeRange');
    
    
    audio.volume = volumeRange.value / 100;
    
    
   
        
    
   

  
    volumeRange.addEventListener('input', function () {
        
        audio.volume = volumeRange.value / 100;
        
        
    });
});


function lancer_music() {
    var toggle = document.getElementById('toggle');
   
    if (toggle.checked) {
       
        audio.play();
    } else {
        audio.pause(); 
    }
}







function playAudio() {
    var audioChkoba = document.getElementById('audioChkoba');
    audio = document.getElementById('myAudio');
    if(!audio.paused){
        audio.pause();
    }
    
    if (audioChkoba.paused) {
        audioChkoba.play();
    } else {
      
        audioChkoba.currentTime = 0;
        audioChkoba.play();
        
    }
}

