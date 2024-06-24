
function ekel(name) {
    cards_selectionned.splice(0,cards_selectionned.length);
    //let buttons = document.getElementsByClassName("button");
    let cards  = document.getElementsByClassName("card");
    console.log(cards)
    for(let i=0;i<cards.length;i++){
        cards[i].parentNode.style.opacity=1;
      
        

    }
    /*for(let i=0;i<buttons.length;i++){
        buttons[i].style.display="none";

    }*/
   
    let card=document.getElementById(name);
    card.style.opacity=0.5;
  
    //card.children[1].style.display="block"
    card_joueur=kaf_joeur.find(elt => elt.nom === name);
    
    
    
    
}




function somme_cards(){
    let somme=0;
    for(let i=0;i<cards_selectionned.length;i++){
        somme+=cards_selectionned[i].valeur;
    }
    return somme;

}



async function cardClick(name) {
   
    cards_selectionned.push(hbout.find(elt => elt.nom === name));
    document.getElementById(name).style.opacity=0.5;
    
    if (card_joueur.valeur === somme_cards()) {
        joueur_kle=true;
        
       

       
        for (let i = 0; i < cards_selectionned.length; i++) {
            animate_3_j_card(cards_selectionned[i].nom);
           
        }
        animate_3_j_card(card_joueur.nom);
      

        await pause(800);
    
        mekla_joueur.push(card_joueur);
    
        let index = kaf_joeur.indexOf(card_joueur);
        if (index !== -1) {
            kaf_joeur.splice(index, 1);
        }
    
        mekla_joueur = mekla_joueur.concat(cards_selectionned);
    
        for (let i = 0; i < cards_selectionned.length; i++) {
            let index = hbout.indexOf(cards_selectionned[i]);
            if (index !== -1) {
                hbout.splice(index, 1);
            }
        }
    
        cards_selectionned.splice(0, cards_selectionned.length);
    
        for (let i = 0; i < kaf_joeur.length; i++) {
            let card = document.getElementById(kaf_joeur[i].nom);
            if (card) {
                card.style.pointerEvents = "none";
                card.style.opacity = "0.5";
            }
        }
    
        for (let j = 0; j < hbout.length; j++) {
            let card = document.getElementById(hbout[j].nom);
            if (card) {
                card.style.pointerEvents = "none";
            }
        }
        if(hbout.length === 0){
            document.getElementById("chkoba").style.display = 'block'; 
            playAudio();
           
            setTimeout(function() {
                document.getElementById("chkoba").style.display = 'none'; 
                var audioChkoba = document.getElementById('audioChkoba');
                var audio = document.getElementById('myAudio');
                audio.play();
                audioChkoba.pause();
            }, 4000); 
           playAudio();
           chkeyeb_joueur++;

        }

        afficher_hbout();
        jouer_machine();
    }
    
}


function jetter(id) {
    joueur_kle=false;
    let card = document.getElementById(id);

    if (card) {
        

        animate_4_m_card(id);


        
        let warka = kaf_joeur.find(elt => elt.nom === id);

        if (warka) {
            

            hbout.push(warka);

            let index = kaf_joeur.indexOf(warka);
            document.getElementById(kaf_joeur[index].nom).style.display="none";
            kaf_joeur.splice(index, 1);
            for (let i = 0; i < kaf_joeur.length; i++) {
                let card = document.getElementById(kaf_joeur[i].nom);
                if (card) {
                    card.style.pointerEvents = "none";
                    card.style.opacity = "0.5";
                }
            }
            for(let j=0;j<hbout.length;j++){
                let card = document.getElementById(hbout[j].nom);
                if (card) {
                    card.style.pointerEvents = "none";
                }
            }
            afficher_hbout();
            jouer_machine();
            
            

            

        } else {
            console.error("Card with specified id not found in kaf_joeur array.");
            
        }
    } else {
        console.error("Card element with specified id not found.");
    }
}




