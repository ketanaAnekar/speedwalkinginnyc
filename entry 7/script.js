const playButton = document.getElementById("box");
const audioElement = document.getElementById("audioElement");

playButton.addEventListener("click", function () {
    if (audioElement.paused) {
        audioElement.play();
        playButton.textContent = "PUSHING ON";
    } else {
        audioElement.pause();
        playButton.textContent = "PUSHING ON";
    }
});
var audio = new Audio();

var currentAudioElement = null;

function toggleAudio(songPath) {
    var audioElement = document.getElementById("afraidAudio");

    // Check if the same audio is already playing
    if (currentAudioElement === audioElement && !audioElement.paused) {
        audioElement.pause();
    } else {
        // Stop the previous audio if any
        if (currentAudioElement) {
            currentAudioElement.pause();
        }

        // Set the new audio source and play
        audioElement.src = songPath;
        audioElement.play();
        currentAudioElement = audioElement;
    }
}
