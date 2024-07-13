// scripts.js

// Example: Add any interactive features if needed
document.addEventListener('DOMContentLoaded', function () {
    console.log('Website loaded');
    // Add any additional JavaScript here
});


document.addEventListener('DOMContentLoaded', function() {
    const audioElements = document.querySelectorAll('audio');

    audioElements.forEach(audio => {
        audio.addEventListener('play', () => {
            audioElements.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                    otherAudio.currentTime = 0;
                }
            });
        });
    });
});