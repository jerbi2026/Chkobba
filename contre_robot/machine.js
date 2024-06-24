
function testez_mekla_machine() {
    kaf_machine = kaf_machine.sort((a, b) => b.prior - a.prior);

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
            let card_kaf_machine = document.getElementById(card_mekla[1].nom);
            mekla_machine.push(card_mekla[1]);
            let index = hbout.indexOf(card_mekla[1]);
            hbout.splice(index, 1);
            if (card_kaf_machine) {
               animate_4_m_card(card_mekla[1].nom);
                
            }
           

            let card_kaf_machine2 = document.getElementById(card_mekla[0].nom);
            let index2 = kaf_machine.indexOf(card_mekla[0]);
            mekla_machine.push(card_mekla[0]);
            kaf_machine.splice(index2, 1);
            if (card_kaf_machine2) {
                animate_4_m_card(card_mekla[0].nom);
                
            }
            await pause(800);
            afficher_hbout();
            if(hbout.length === 0){
                document.getElementById("chkoba").style.display='block';
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

          

            
        }
        else{
            machine_kle=false;
            let jetter_card = document.getElementById(kaf_machine[kaf_machine.length - 1].nom);

            if (jetter_card) {
                animate_3_j_card(kaf_machine[kaf_machine.length - 1].nom);
                await pause(800)
            
              
                hbout.push(kaf_machine[kaf_machine.length - 1]);
                kaf_machine.pop();
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
