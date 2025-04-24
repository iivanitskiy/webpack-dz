import './index.scss';
const rainSound = require('./assets/sounds/rain.mp3');
const summerSound= require('./assets/sounds/summer.mp3');
const winterSound = require('./assets/sounds/winter.mp3');
const rainBackground = require('./assets/rainy-bg.jpg');
const summerBackground = require('./assets/summer-bg.jpg');
const winterBackground = require('./assets/winter-bg.jpg');

const bgImage = document.querySelector('.backgroundImage') as HTMLElement;

const root = document.querySelector('#app') as HTMLElement;
root.className = "container";

// buttons
const buttonIds: string[] = ["Summer", "Rain", "Winter"];
const buttonContainer: HTMLDivElement = document.createElement('div');
buttonContainer.className = "buttonContainer";

buttonIds.forEach((id: string): void => {
    const buttonBg: HTMLDivElement = document.createElement('div');
    buttonBg.className = 'buttonBg';
    buttonBg.id = id;
    const button: HTMLButtonElement = document.createElement('button');
    button.className = id;
    buttonBg.appendChild(button);
    buttonContainer.appendChild(buttonBg);
});

root.appendChild(buttonContainer);

const rain: HTMLAudioElement = new Audio(rainSound);
rain.loop = true;
const summer: HTMLAudioElement = new Audio(summerSound);
summer.loop = true;
const winter: HTMLAudioElement = new Audio(winterSound);
winter.loop = true;

function stopAllSounds(): void {
  rain.pause();
  summer.pause();
  winter.pause();
}

function changeBackground(imageUrl: string): void {
  bgImage.style.backgroundImage = `url(${imageUrl})`;
}

const rainButton = document.getElementById('Rain') as HTMLElement;

rainButton.addEventListener('click', (): void => {
  if (rain.paused) {
    stopAllSounds();
    rain.play();
    changeBackground(rainBackground);
  } else {
    rain.pause();
  }
});

const summerButton = document.getElementById('Summer') as HTMLElement;

summerButton.addEventListener('click', (): void => {
  if (summer.paused) {
    stopAllSounds();
    summer.play();
    changeBackground(summerBackground);
  } else {
    summer.pause();
  }
});

const winterButton = document.getElementById('Winter') as HTMLElement;

winterButton.addEventListener('click', (): void => {
  if (winter.paused) {
    stopAllSounds();
    winter.play();
    changeBackground(winterBackground);
  } else {
    winter.pause();
  }
});

// volume
const volume: HTMLInputElement = document.createElement("input");
volume.type = "range";
volume.id = "volume";
volume.min = "0";
volume.max = "1";
volume.step = "0.1";
volume.value = "0.5";
root.append(volume);

volume.addEventListener('input', (): void => {
  const value: string = volume.value;
  rain.volume = Number(value);
  summer.volume = Number(value);
  winter.volume = Number(value);
});