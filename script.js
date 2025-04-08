//your JS code here. If required.
const sounds = ['sound1', 'sound2', 'sound3'];
const audioElements = {};

sounds.forEach((sound, index) => {
  const audio = new Audio(`sounds/${sound}.mp3`);
  audioElements[sound] = audio;

  document.querySelectorAll('.btn')[index].addEventListener('click', () => {
    stopAllSounds();
    audio.play();
  });
});

document.querySelector('.stop').addEventListener('click', () => {
  stopAllSounds();
});

function stopAllSounds() {
  Object.values(audioElements).forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}
