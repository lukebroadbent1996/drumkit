let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tink = document.getElementById("tink");
let tom = document.getElementById("tom");

document.addEventListener("keydown", () => {
    if (event.keyCode == 81){
        boom.pause();
        boom.currentTime = 0
        boom.play(); 
    }
    else if (event.keyCode == 87){
        clap.pause();
        clap.currentTime = 0
        clap.play();
    }
    else if (event.keyCode == 69){
        hihat.pause();
        hihat.currentTime = 0
        hihat.play();
    }
    else if (event.keyCode == 82){
        kick.pause();
        kick.currentTime = 0
        kick.play();
    }
    else if (event.keyCode == 84){
        openhat.pause();
        openhat.currentTime = 0
        openhat.play();
    }
    else if (event.keyCode == 89){
        ride.pause();
        ride.currentTime = 0
        ride.play();
    }
    else if (event.keyCode == 65){
        snare.pause();
        snare.currentTime = 0
        snare.play();
    }
    else if (event.keyCode == 83){
        tink.pause();
        tink.currentTime = 0
        tink.play();
    }
    else if (event.keyCode == 68){
        tom.pause();
        tom.currentTime = 0
        tom.play();
    }
})