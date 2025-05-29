let play=document.getElementById("play");
    function playmusic(){
        let audio= new Audio("./assets/aisources/rset.mp3");
            audio.play();
        }
play.addEventListener("click",playmusic);
