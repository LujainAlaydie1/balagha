var audio; // Declare a global variable to store the audio element

function toggleAudio(url) {
    if (!audio) {
        audio = new Audio(url);
    }

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}