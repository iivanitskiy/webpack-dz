"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.scss");
var rainSound = require('./assets/sounds/rain.mp3');
var summerSound = require('./assets/sounds/summer.mp3');
var winterSound = require('./assets/sounds/winter.mp3');
var rainBackground = require('./assets/rainy-bg.jpg');
var summerBackground = require('./assets/summer-bg.jpg');
var winterBackground = require('./assets/winter-bg.jpg');
var bgImage = document.querySelector('.backgroundImage');
var root = document.querySelector('#app');
root.className = "container";
// buttons
var buttonIds = ["Summer", "Rain", "Winter"];
var buttonContainer = document.createElement('div');
buttonContainer.className = "buttonContainer";
buttonIds.forEach(function (id) {
    var buttonBg = document.createElement('div');
    buttonBg.className = 'buttonBg';
    buttonBg.id = id;
    var button = document.createElement('button');
    button.className = id;
    buttonBg.appendChild(button);
    buttonContainer.appendChild(buttonBg);
});
root.appendChild(buttonContainer);
var rain = new Audio(rainSound);
rain.loop = true;
var summer = new Audio(summerSound);
summer.loop = true;
var winter = new Audio(winterSound);
winter.loop = true;
function stopAllSounds() {
    rain.pause();
    summer.pause();
    winter.pause();
}
function changeBackground(imageUrl) {
    bgImage.style.backgroundImage = "url(".concat(imageUrl, ")");
}
var rainButton = document.getElementById('Rain');
rainButton.addEventListener('click', function () {
    if (rain.paused) {
        stopAllSounds();
        rain.play();
        changeBackground(rainBackground);
    }
    else {
        rain.pause();
    }
});
var summerButton = document.getElementById('Summer');
summerButton.addEventListener('click', function () {
    if (summer.paused) {
        stopAllSounds();
        summer.play();
        changeBackground(summerBackground);
    }
    else {
        summer.pause();
    }
});
var winterButton = document.getElementById('Winter');
winterButton.addEventListener('click', function () {
    if (winter.paused) {
        stopAllSounds();
        winter.play();
        changeBackground(winterBackground);
    }
    else {
        winter.pause();
    }
});
// volume
var volume = document.createElement("input");
volume.type = "range";
volume.id = "volume";
volume.min = "0";
volume.max = "1";
volume.step = "0.1";
volume.value = "0.5";
root.append(volume);
volume.addEventListener('input', function () {
    var value = volume.value;
    rain.volume = Number(value);
    summer.volume = Number(value);
    winter.volume = Number(value);
});
