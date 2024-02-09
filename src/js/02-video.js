import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const CURRENT_TIME_KEY = 'current-time'

const currentTime = throttle((event) => {
    const currentTime = event.seconds;
    localStorage.setItem(CURRENT_TIME_KEY, currentTime);
}, 1000);

player.on('timeupdate', currentTime);

const savedTime = localStorage.getItem(CURRENT_TIME_KEY);
if (savedTime) {
  player.setCurrentTime(savedTime);
}