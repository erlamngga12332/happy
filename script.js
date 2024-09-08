document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready');
    const video = document.querySelector('video');
    video.addEventListener('play', () => {
        console.log('Video is playing');
    });

    const audio = document.querySelector('audio');
    audio.addEventListener('play', () => {
        console.log('Audio is playing');
    });
});
