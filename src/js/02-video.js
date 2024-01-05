import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

function savePlaybackState() {
  player
    .getCurrentTime()
    .then(time => {
      localStorage.setItem(STORAGE_KEY, time);
    })
    .catch(e => {
      console.error(e);
    });
}

function resumePlayback() {
  const savedTime = localStorage.getItem(STORAGE_KEY);
  if (savedTime !== null) {
    player
      .setCurrentTime(savedTime)
      .then(() => {
        player.play();
      })
      .catch(e => {
        console.error('Error setting playback time:', e);
      });
  }
}

const throttlePlaybackState = throttle(savePlaybackState, 1000);
player.on('timeupdate', () => {
  throttlePlaybackState();
});

resumePlayback();
