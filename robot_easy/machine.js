
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
        machine_kle=false;
        let jetter_card = document.getElementById(kaf_machine[kaf_machine.length - 1].nom);

        if (jetter_card) {
                animate_3_j_card(kaf_machine[kaf_machine.length - 1].nom);
                await pause(800)
            
              
                hbout.push(kaf_machine[kaf_machine.length - 1]);
                kaf_machine.pop();
                afficher_hbout();
                if(hbout.length === 0){
                    document.getElementById("chkoba").style.display='block';
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
