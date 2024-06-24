
mekla_joueur=[]
mekla_machine=[]
kaf_joeur=[]
kaf_machine=[]
hbout=[]
cards_selectionned=[]
card_joueur={};

joueur_kle=false;
machine_kle=false;

chkeyeb_joueur=0;
chkeyeb_machine=0;


function background(){
    const background = localStorage.getItem('background');
    if (background) {
        document.body.style.backgroundImage=`url(${background})`;
    }
}




function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
function preloadCardImages(cardImages, callback) {
    var loadedImages = 0;
    var totalImages = cardImages.length;

    // Boucle à travers toutes les cartes et précharge les images
    cardImages.forEach(function(card) {
        var img = new Image();
        img.onload = function() {
            loadedImages++;
            if (loadedImages === totalImages) {
                callback(); // Appellez la fonction callback lorsque toutes les images sont chargées
            }
        };
        img.src = card.image;
    });
}




function start_jarya(){
    var contenuJoueur="";
    var contenumachine="";
    var contenuHbout="";
    for(let i=0;i<3;i++){
        kaf_joeur.push(chkoba[i]);
        
        contenuJoueur+=`<a href="#" id="${chkoba[i].nom}" onclick="ekel('${chkoba[i].nom}')" ondblclick="jetter('${chkoba[i].nom}')">
        <div class="card" style=" background: url(${chkoba[i].image}); background-size: contain; background-position: center; background-repeat: no-repeat;">
            <div class="card-content">
            
            </div>
        </div>
       
       
      </a>`
    }
    chkoba.splice(0, 3);
    for(let i=0;i<3;i++){
        kaf_machine.push(chkoba[i]);
        contenumachine+=`<div class="card-back" id="${chkoba[i].nom}"></div>`
    
    }
    chkoba.splice(0, 3);
    for(let i=0;i<4;i++){
        hbout.push(chkoba[i]);
        contenuHbout+=`<a href="#" id="${chkoba[i].nom}" onclick="cardClick('${chkoba[i].nom}')">
        <div class="card"   style=" background: url(${chkoba[i].image}); background-size: contain; background-position: center; background-repeat: no-repeat;">
            <div class="card-content">
            </div>
        </div>
        
      </a>`
    }
    chkoba.splice(0, 4);
    
    let joueur=document.getElementById("joueur");
    
    joueur.innerHTML=contenuJoueur;
    animate(kaf_joeur);
    
   
    let machine=document.getElementById("machine");
    machine.innerHTML=contenumachine;
    animate_2(kaf_machine);
    
    let hboutContainer=document.getElementsByClassName("card-container");
    hboutContainer[0].innerHTML=contenuHbout;
    animate_hbout(hbout);
    get_back_card();
   

}



function awed_ejri(){
    var contenuJoueur="";
    var contenumachine="";
    for(let i=0;i<3;i++){
        kaf_joeur.push(chkoba[i]);
        
        contenuJoueur+=`<a href="#" id="${chkoba[i].nom}" onclick="ekel('${chkoba[i].nom}')" ondblclick="jetter('${chkoba[i].nom}')">
        <div class="card" style=" background: url(${chkoba[i].image}); background-size: contain; background-position: center; background-repeat: no-repeat;">
            <div class="card-content">
            
            </div>
        </div>
       
       
      </a>`
    }
    chkoba.splice(0, 3);
    for(let i=0;i<3;i++){
        kaf_machine.push(chkoba[i]);
        contenumachine+=`<div class="card-back" id="${chkoba[i].nom}"></div>`
    
    }
    chkoba.splice(0, 3);
    

    let joueur=document.getElementById("joueur");
    joueur.innerHTML=contenuJoueur;
    animate(kaf_joeur);
    
    let machine=document.getElementById("machine");
    machine.innerHTML=contenumachine;
    animate_2(kaf_machine);
    get_back_card();
    
    
    
}



function afficher_hbout(){
    let hboutContainer = document.querySelector(".card-container");
    hboutContainer.innerHTML='';
    let contenuHbout='';
    for(let i=0;i<hbout.length;i++){
        
        contenuHbout+=`<a href="#" id="${hbout[i].nom}" onclick="cardClick('${hbout[i].nom}')">
        <div class="card"   style=" background: url(${hbout[i].image}); background-size: contain; background-position: center; background-repeat: no-repeat;">
            <div class="card-content">
            </div>
        </div>
        
      </a>`
    }
    hboutContainer.innerHTML=contenuHbout;
}

function afficher_cards_machine(){
    var contenumachine="";
    let machine=document.getElementById("machine");
    machine.innerHTML='';
   
    for(let i=0;i<kaf_machine.length;i++){
        
        contenumachine+=`<div class="card-back" id="${kaf_machine[i].nom}"></div>`
    }
    get_back_card();
   
    
    machine.innerHTML=contenumachine;
}



function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



function calcul_score(){
    let score1=0;
    let score2=0;
    let score_joueur="";
    let score_machine="";

    
   if(mekla_joueur.length>mekla_machine.length){
    score1++;
    score_joueur+='<button class="add" >carta</button>';
    
   }
   else if(mekla_joueur.length<mekla_machine.length){
    
    score2++;
    score_machine+='<button class="add" >carta</button>';
   }
   
   
   let trouv = mekla_joueur.find(elt => elt.nom === "7_dineri");

   if (trouv !== null) {
    score1++;
    score_joueur+='<button class="add" >Haya</button>';
       
   } else {
    score2++;
    score_machine+='<button class="add" >Haya</button>';
   }
   

   
   let trouv_dineri = mekla_joueur.filter(elt => elt.nom.includes("dineri"));
   if(trouv_dineri.length>5){
    score1++;
    score_joueur+='<button class="add" >carta</button>';
   
   }
   else if(trouv_dineri.length<5){
    score2++;
    score_machine+='<button class="add" >Dineri</button>';
    
   }
  


   let trouv_bermila = mekla_joueur.filter(elt => elt.nom.includes("7"));
   
   if(trouv_bermila.length>2){
    score1++;
    score_joueur+='<button class="add" >Bermila</button>';
   }
   else if (trouv_bermila.length>2){
    score2++;
    score_machine+='<button class="add" >Bermila</button>';
   }
   else{
    let trouv_sdous= mekla_joueur.filter(elt => elt.nom.includes("6"));
    if(trouv_sdous.length>2){
        score1++;
        score_joueur+='<button class="add" >Bermila</button>';
    }
    else if (trouv_sdous.length>2){
        score2++;
        score_machine+='<button class="add" >Bermila</button>';
        
    }
   
    
   }

   
   if(chkeyeb_joueur!=0){
    score1+=chkeyeb_joueur;
    score_joueur+=`<button class="add" >${chkeyeb_joueur}_chkoba</button>`;

   }
   if(chkeyeb_machine!=0){
    score2+=chkeyeb_machine;
    score_machine+=`<button class="add" >${chkeyeb_machine}_chkoba</button>`;

   }

  

   
    let score_joueur_div = document.getElementById("score_joueur");
    score_joueur_div.innerHTML=score_joueur;
    let score_machine_div = document.getElementById("score_machine");
    score_machine_div.innerHTML=score_machine;
    document.getElementById("score1").textContent=score1.toString();
    document.getElementById("score2").textContent=score2.toString();

   var dialog = document.getElementById("dialog");
   dialog.style.display="block";





}


function close_dialog(){
    var dialog = document.getElementById("dialog");
   dialog.style.display="none";
   location.href="../index.html"

}

function close_dialog_chkoba(){
    var dialog = document.getElementById("chkoba");
    dialog.style.display="none";
    var audio = document.getElementById('myAudio');
    if(audio.paused){
        audio.play();
    }
    var audioChkoba = document.getElementById('audioChkoba');
    audioChkoba.pause();


}


function get_back_card(){
    const machineSection = document.getElementById('machine');
    const machineDivs = machineSection.getElementsByTagName('div');
    const back_card = localStorage.getItem('back_card');
    const element = document.getElementsByClassName('card-back');
    if (back_card !== null) {
        
        for (let i = 0; i < machineDivs.length; i++) {
            machineDivs[i].style.backgroundImage = `url(${back_card})`;
        }
        for (let i = 0; i < element.length; i++) {
            element[i].style.backgroundImage = `url(${back_card})`;
        }
    }
    
}





function open_setting(){
    var dialog = document.getElementById("setting");
    dialog.style.display="block";
   
}

function close_setting(){
    var dialog = document.getElementById("setting");
    dialog.style.display="none";
   
}

function open_musique(){
    var dialog = document.getElementById("musique");
    dialog.style.display="block";
}
function close_musique(){
    var dialog = document.getElementById("musique");
    dialog.style.display="none";
}


function changer_music(music){
    document.getElementById("changement").style.display='block';
    localStorage.setItem('music',music );
    var audio = document.getElementById('myAudio');
    audio.src=music;
    audio.play();
}

function close_changement(){
    document.getElementById("changement").style.display='none';
}




function open_guide1(id){
    document.getElementById(id).style.display="none";
    var dialog = document.getElementById("guide1");
    dialog.style.display="block";
}

function close_guide1(){
    var dialog = document.getElementById("guide1");
    dialog.style.display="none";
}

function open_guide2(id){
    document.getElementById(id).style.display="none";
    var dialog = document.getElementById("guide2");
    dialog.style.display="block";
}

function close_guide2(){
    
    var dialog = document.getElementById("guide2");
    dialog.style.display="none";
}

function open_guide3(id){
    document.getElementById(id).style.display="none";
    var dialog = document.getElementById("guide3");
    dialog.style.display="block";
}

function close_guide3(){
    var dialog = document.getElementById("guide3");
    dialog.style.display="none";
}

function open_guide4(id){
    document.getElementById(id).style.display="none";
    var dialog = document.getElementById("guide4");
    dialog.style.display="block";
}

function close_guide4(){
    var dialog = document.getElementById("guide4");
    dialog.style.display="none";
}
function open_guide5(id){
    document.getElementById(id).style.display="none";
    var dialog = document.getElementById("guide5");
    dialog.style.display="block";
}

function close_guide5(){
    var dialog = document.getElementById("guide5");
    dialog.style.display="none";
}

function open_guide6(id){
    document.getElementById(id).style.display="none";
    var dialog = document.getElementById("guide6");
    dialog.style.display="block";
}

function close_guide6(){
    var dialog = document.getElementById("guide6");
    dialog.style.display="none";
}





window.onload=function(){
    get_back_card();
    background();
    shuffle(chkoba);
    preloadCardImages(chkoba, start_jarya);

    animate_jarya();
   
    
    
   
    
    
    
}