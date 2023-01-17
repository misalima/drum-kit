//Detecting button press for playing sound
for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        playSound(this.innerHTML); 
        buttonAnimation(this.innerHTML);                      
    });
}

//Detecting keys pressed for playing sound
document.addEventListener("keydown", function (e) {
    playSound(e.key);
    buttonAnimation(e.key);
});

//The function that plays the sound; it gets the key or button pressed as parameter
function playSound(key) {
    let audio;
        switch(key) {
            case 'w':
                audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case 'a':
                audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            case 's':
                audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case 'd':
                audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case 'j':
                audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case 'k':
                audio = new Audio('sounds/hi-hat.mp3');
                audio.play();
                break;
            case 'l':
                audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            default:
                break;
        }   
}

function buttonAnimation(key) {
    let activeButton = document.querySelector("."+key);

    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

