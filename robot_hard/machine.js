
function testez_mekla_machine() {
    kaf_machine = kaf_machine.sort((a, b) => a.prior - b.prior);

    let trouv = null;
    for (let i = 0; i < kaf_machine.length; i++) {
        trouv = hbout.find(elt => elt.valeur === kaf_machine[i].valeur);
        if (trouv) {
            return [ kaf_machine[i],trouv];
        }
    }

    return null;
}




function findAllSums(cards, targetSum, currentSum = 0, currentIndex = 0, currentCombination = []) {
    const allCombinations = []; 
    function exploreCombinations(cards, targetSum, currentSum, currentIndex, currentCombination) {
        if (currentSum > targetSum) {
            return;
        }

        if (currentSum === targetSum) {
            allCombinations.push([...currentCombination]); 
            return;
        }

        for (let i = currentIndex; i < cards.length; i++) {
            const card = cards[i];

            
            if (card.prior > 0 && currentSum + card.valeur > targetSum) {
                continue;
            }

            
            if (currentCombination.includes(card)) {
                continue;
            }

          
            currentCombination.push(card);

          
            exploreCombinations(cards, targetSum, currentSum + card.valeur, i, currentCombination);

            
            currentCombination.pop();
        }
    }

    exploreCombinations(cards, targetSum, currentSum, currentIndex, currentCombination);
    return allCombinations;
}


async function jouer_machine() {
    var card_mekla = testez_mekla_machine();
        if (card_mekla && card_mekla.length > 0) {
            machine_kle=true;
           
           

            let card_kaf_machine2 = document.getElementById(card_mekla[0].nom);
            let index2 = kaf_machine.indexOf(card_mekla[0]);
            /*document.getElementById(card_mekla[0].nom).style.display = "none";
            var nouvelElement = document.createElement("div");
            nouvelElement.id = card_mekla[0].nom;
            nouvelElement.className = "card";
            nouvelElement.style.background = `url(${card_mekla[0].image})`;
            nouvelElement.style.backgroundSize = "contain";
            nouvelElement.style.backgroundPosition = "center";
            nouvelElement.style.backgroundRepeat = "no-repeat";
            var cardContent = document.createElement("div");
            cardContent.className = "card-content";
            nouvelElement.appendChild(cardContent);
            let machine = document.getElementById("machine");
            machine.appendChild(nouvelElement);*/
            var contenumachine="";
            let machine=document.getElementById("machine");
            machine.innerHTML='';
           
            for(let i=0;i<kaf_machine.length;i++){
                if(kaf_machine[i].nom==card_mekla[0].nom){
                    contenumachine+=` <div class="card" id="${kaf_machine[i].nom}"  style=" background: url(${kaf_machine[i].image}); background-size: contain; background-position: center; background-repeat: no-repeat;">
                    <div class="card-content">
                    </div>
                </div>` 
                }else{
                    contenumachine+=`<div class="card-back" id="${kaf_machine[i].nom}"></div>`
                }
                
                
            }
            get_back_card();
           
            
            machine.innerHTML=contenumachine; 
            await pause(500);
            let card_kaf_machine = document.getElementById(card_mekla[1].nom);
            mekla_machine.push(card_mekla[1]);
            let index = hbout.indexOf(card_mekla[1]);
            hbout.splice(index, 1);
            if (card_kaf_machine) {
               animate_4_m_card(card_mekla[1].nom);

                
            }

            mekla_machine.push(card_mekla[0]);
            kaf_machine.splice(index2, 1);
            if (card_kaf_machine2) {
                animate_4_m_card(card_mekla[0].nom);
                document.getElementById(card_mekla[0].nom).style.display="none";
                
                
            }

            await pause(800);
            afficher_hbout();
            if(hbout.length === 0){
                document.getElementById("chkoba").style.display = 'block'; 
                playAudio();
                setTimeout(function() {
                    document.getElementById("chkoba").style.display = 'none'; 
                    var audioChkoba = document.getElementById('audioChkoba');
                    var audio = document.getElementById('myAudio');
                    audio.play();
                    audioChkoba.pause();
                }, 3000); 
                chkeyeb_machine++;
     
             }
           

            

            for (let i = 0; i < kaf_joeur.length; i++) {
                let card = document.getElementById(kaf_joeur[i].nom);
                if (card) {
                    card.style.pointerEvents = "auto";
                    card.style.opacity = "1";
                }
            }

            for (let j = 0; j < hbout.length; j++) {
                let card = document.getElementById(hbout[j].nom);
                if (card) {
                    card.style.pointerEvents = "auto";
                }
            }
            afficher_cards_machine();

          

            
        }
        else{
            hbout = hbout.sort((a, b) => a.prior - b.prior);
            kaf_machine = kaf_machine.sort((a, b) => a.prior - b.prior);

            var mekla = [];
            var  i;
            var kle_hard=false;
            for ( i = 0; i < kaf_machine.length; i++) {
                mekla = findAllSums(hbout, kaf_machine[i].valeur);
                console.log(mekla);
                if (mekla != null && mekla.length>0) {
                    machine_kle=true;
                    kle_hard=true;
                    mekla = mekla.sort((a, b) => b.length - a.length);
                    document.getElementById(kaf_machine[i].nom).remove();
                    var nouvelElement = document.createElement("div");
                    nouvelElement.id = kaf_machine[i].nom;
                    nouvelElement.className = "card";
                    nouvelElement.style.background = `url(${kaf_machine[i].image})`;
                    nouvelElement.style.backgroundSize = "contain";
                    nouvelElement.style.backgroundPosition = "center";
                    nouvelElement.style.backgroundRepeat = "no-repeat";
                    var cardContent = document.createElement("div");
                    cardContent.className = "card-content";
                    nouvelElement.appendChild(cardContent);
                    let machine = document.getElementById("machine");
                    machine.appendChild(nouvelElement);
                    await pause(500);
                    

                    
                    animate_4_m_card(kaf_machine[i].nom);

                    mekla_machine.push(kaf_machine[i]);
                    kaf_machine.splice(i, 1);

                    for (let j = 0; j < mekla[0].length; j++) {
                        
                        animate_4_m_card(mekla[0][j].nom);
                        

                        let index = hbout.indexOf(mekla[0][j]);
                        mekla_machine.push(mekla[0][j]);
                        hbout.splice(index, 1);

                        
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
                        chkeyeb_machine++;
         
                    }
                    await pause(800);
                    
                    afficher_hbout();

                    tour_user = true;
    
                     
    
                    for (let i = 0; i < kaf_joeur.length; i++) {
                        let cardy = document.getElementById(kaf_joeur[i].nom);
                        if (cardy) {
                            cardy.style.pointerEvents = "auto";
                            cardy.style.opacity = "1";
                        }
                    }
    
                    for (let j = 0; j < hbout.length; j++) {
                        let cardy = document.getElementById(hbout[j].nom);
                        if (cardy) {
                            cardy.style.pointerEvents = "auto";
                        }
                    }
    
                   
                    break;
                }
                
                
            }
            if(kle_hard==false){
                machine_kle=false;
                let jetter_card = document.getElementById(kaf_machine[0].nom);

                if (jetter_card) {
                    animate_3_j_card(kaf_machine[0].nom);
                    await pause(800)
            
              
                    hbout.push(kaf_machine[0]);
                    kaf_machine.pop();
                    afficher_hbout();
                    
             
            
                    for (let i = 0; i < kaf_joeur.length; i++) {
                        let cardy = document.getElementById(kaf_joeur[i].nom);
                        if (cardy) {
                            cardy.style.pointerEvents = "auto";
                            cardy.style.opacity = "1";
                        }
                    }
            
                    for (let j = 0; j < hbout.length; j++) {
                        let cardy = document.getElementById(hbout[j].nom);
                        if (cardy) {
                            cardy.style.pointerEvents = "auto";
                        }
                    }
            }
    
              

                

            }

        }
        if(kaf_machine.length==0 && chkoba.length>0){
            awed_ejri();
            
        }
        if(kaf_machine.length==0 && chkoba.length==0){
            if(hbout.length>0){
                if(machine_kle==true){
                    for(let j=0;j<hbout.length;j++){
                        mekla_machine.push(hbout[j]);

                    }
                    animate_4_m(hbout);
                    await pause(1500);
                    
                   
                }
                else {
                    for(let j=0;j<hbout.length;j++){
                        mekla_joueur.push(hbout[j]);

                    }
                    animate_3_j(hbout);
                    await pause(1500);
                    
                    
                }
                hbout=[];
                afficher_hbout();
            }

           
            finir_jarya();
            await pause(800);
            console.log(mekla_joueur);
            console.log(mekla_machine);
            calcul_score();
        }

}
