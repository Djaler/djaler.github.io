'use strict';

const prefix = './audio/';

const songs = [

  'Frederic Chopin - A comme amour.mp3',
  'Blonde Redhead - For The Damaged Coda.mp3'

];

function getRandomTrack() {

  return songs[Math.floor(Math.random() * songs.length)];

}

if (!((document.createElement("audio").play) ? true : false)) {

  alert('Здесь должна быть музыка, но ты - некрофил.');

} else {

  const player = new Audio(`${prefix}${getRandomTrack()}`);

  player.play();

  player.addEventListener('ended', () => {

    player.src = `${prefix}${getRandomTrack()}`;

    player.play();

    return;

  });

}
