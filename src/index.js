import './index.scss';
import rainSound from './assets/sounds/rain.mp3';
import summerSound from './assets/sounds/summer.mp3';
import winterSound from './assets/sounds/winter.mp3';
import rainBackground from './assets/rainy-bg.jpg';
import summerBackground from './assets/summer-bg.jpg';
import winterBackground from './assets/winter-bg.jpg';

const bgImage = document.querySelector('.backgroundImage');

const root = document.querySelector('#app');
root.className = "container";

// buttons
const buttonIds = ["Summer", "Rain", "Winter"];
const buttonContainer = document.createElement('div');
buttonContainer.className = "buttonContainer";

buttonIds.forEach(id => {
  const buttonBg = document.createElement('div');
  buttonBg.className = 'buttonBg';
  buttonBg.id = id;
  const button = document.createElement('button');
  button.className = id;
  buttonBg.appendChild(button);
  buttonContainer.appendChild(buttonBg);
});

root.appendChild(buttonContainer);

const rain = new Audio(rainSound);
rain.loop = true;
const summer = new Audio(summerSound);
summer.loop = true;
const winter = new Audio(winterSound);
winter.loop = true;

function stopAllSounds() {
  rain.pause();
  summer.pause();
  winter.pause();
};

function changeBackground(imageUrl) {
  bgImage.style.backgroundImage = `url(${imageUrl})`;
};

const rainButton = document.getElementById('Rain');

rainButton.addEventListener('click', () => {
  if (rain.paused) {
    stopAllSounds();
    rain.play();
    changeBackground(rainBackground);
  } else {
    rain.pause();
  }
});

const summerButton = document.getElementById('Summer');

summerButton.addEventListener('click', () => {
  if (summer.paused) {
    stopAllSounds();
    summer.play();
    changeBackground(summerBackground);
  } else {
    summer.pause();
  }
});

const winterButton = document.getElementById('Winter');

winterButton.addEventListener('click', () => {
  if (winter.paused) {
    stopAllSounds();
    winter.play();
    changeBackground(winterBackground);
  } else {
    winter.pause();
  }
});

// volume
const volume = document.createElement("input");
volume.type="range" 
volume.id="volume"; 
volume.min="0"; 
volume.max="1";
volume.step="0.1"; 
volume.value="0.5";
root.append(volume);

volume.addEventListener('input', () => {
  const value = volume.value;
  rain.volume = value;
  summer.volume = value;
  winter.volume = value;
});