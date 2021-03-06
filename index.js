const fs = require('fs');
const ffmpeg = require('./build/Release/ffmpeg');
const {Video} = ffmpeg

const v = new Video();

console.log(v.width, v.height, v.currentTime, v.duration);

const encodedData = fs.readFileSync('./sample.mpeg');
v.load(encodedData);

console.log(v.width, v.height, v.currentTime, v.duration);

v.currentTime = 10;

console.log(v.currentTime, v.duration);
console.log(v.data.slice(v.data.length / 2, v.data.length / 2 + 4));

v.play();
setTimeout(() => {
  console.log(v.data.slice(v.data.length / 2, v.data.length / 2 + 4));

  v.pause();

  clearInterval(interval);
}, 1000);

const interval = setInterval(() => {
  Video.updateAll();
}, 1000 / 90);

module.exports = ffmpeg;
