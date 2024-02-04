document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const stopBtn = document.getElementById("stopBtn");
    const seekSlider = document.getElementById("seekSlider");
    const currentTime = document.getElementById("currentTime");
    const duration = document.getElementById("duration");

    playPauseBtn.addEventListener("click", togglePlayPause);
    stopBtn.addEventListener("click", stopAudio);
    audioPlayer.addEventListener("timeupdate", updateSeekSlider);

    function togglePlayPause() {
        if (audioPlayer.paused || audioPlayer.ended) {
            playPauseBtn.textContent = "Pause";
            audioPlayer.play();
        } else {
            playPauseBtn.textContent = "Play";
            audioPlayer.pause();
        }
    }

    function stopAudio() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        playPauseBtn.textContent = "Play";
    }

    function updateSeekSlider() {
        const currentTimeValue = Math.floor(audioPlayer.currentTime);
        const durationValue = Math.floor(audioPlayer.duration);

        seekSlider.value = currentTimeValue;
        currentTime.textContent = formatTime(currentTimeValue);
        duration.textContent = formatTime(durationValue);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    }

    // Function to change the current song
    window.changeSong = function (songFile) {
        audioPlayer.src = songFile;
        audioPlayer.play();
        playPauseBtn.textContent = "Pause";
    };
});
