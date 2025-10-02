document.addEventListener('keydown',function(event){
    if(event.key === 'a'){
        playClap(); // a clap
    }
    if(event.key === 's'){
        playHiiHat(); // s drums8
    }
    if(event.key === 'd'){
        playDrum(); // d drum
    }
    if(event.key === 'f'){
        playTrumphet(); // f trumphet
    }
    if(event.key === 'g'){
        playWhistle(); // g whistle
    }
    if(event.key === 'h'){
        playGoofy(); // h goofy
    }
    
    if(event.key === 'j'){
        playRatatata(); // j ratatata
    }
    
    if(event.key === 'k'){
        playBoing(); // k booing
    }
    
    if(event.key === 'l'){
        playAhh(); // l ahhh
    }
});
function playClap(){
    const aud = document.createElement('audio');
    aud.src = "clap.wav";
    aud.play();
}
function playDrum(){
    const aud = document.createElement('audio');
    aud.src = "drum.wav";
    aud.play();
}
function playHiiHat(){
    const aud = document.createElement('audio');
    aud.src = "drums_8.mp3";
    aud.play();
}
function playTrumphet(){
    const aud = document.createElement('audio');
    aud.src = "trumphet.wav";
    aud.play();
}
function playWhistle(){
    const aud = document.createElement('audio');
    aud.src = "whistle.wav";
    aud.play();
}
function playGoofy(){
    const aud = document.createElement('audio');
    aud.src = "goofy_sound.mp3";
    aud.play();
}
function playRatatata(){
    const aud = document.createElement('audio');
    aud.src = "ratatata.mp3";
    aud.play();
}
function playBoing(){
    const aud = document.createElement('audio');
    aud.src = "goofy_ahh_boing.mp3";
    aud.play();
}
function playAhh(){
    const aud = document.createElement('audio');
    aud.src = "aaaaaaaaaaaaaaaaagh.mp3";
    aud.play();
}