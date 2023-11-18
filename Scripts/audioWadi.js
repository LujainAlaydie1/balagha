
function toggleAudio(url) {
    var audio; // Declare a global variable to store the audio element
    if (!audio) {
        audio = new Audio(url);
    }

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}