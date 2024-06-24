function background(){
    const background = localStorage.getItem('background');
    const isHomePage = window.location.pathname.toLowerCase().endsWith('/index.html');
    if(isHomePage){
        if(background){
            
            document.body.style.backgroundImage=`url(${background.slice(3)})`;
        }
        
    }
    else{
        if (background) {
            document.body.style.backgroundImage=`url(${background})`;
        }

    }
   
}



function go_setting(){
    window.location.href="settings/settings.html";
}

function go_jeu_robot(){
    window.location.href="../contre_robot/robot.html";
}

function go_jeu_robot_easy(){
    window.location.href="../robot_easy/robot.html";
}

function go_jeu_robot_hard(){
    //window.location.href="../robot_hard/robot.html";
    document.getElementById("dialog").style.display="block";
}


function go_niveau(){
    window.location.href="niveau/niveau.html";
}



function go_home(){
    window.location.href="../index.html";
}


function close_dialog(){
    document.getElementById("dialog").style.display="none";

}


window.onload=function(){
    
    
    background();
}
