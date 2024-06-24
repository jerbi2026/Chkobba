function change_card_back(back){
    document.getElementById("dialog").style.display='block';
    localStorage.setItem('back_card',back );
}
function background(){
    const background = localStorage.getItem('background');
    if (background) {
        document.body.style.backgroundImage=`url(${background})`;
    }
}

function change_background(back){
   document.body.style.backgroundImage=`url(${back})`;
   localStorage.setItem('background', back);
}

function go_home(){
    window.location.href="../index.html";
}


function close_dialog(){
    var dialog = document.getElementById("dialog");
    dialog.style.display="none";
}



window.onload=function(){
    background();
}