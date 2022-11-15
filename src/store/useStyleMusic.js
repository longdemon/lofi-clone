import { ref } from "vue";

import sleepy from "../assets/mainmusic/sleepy1.mp3";
import sleepy2 from "../assets/mainmusic/sleepy2.mp3";
import sleepy3 from "../assets/mainmusic/sleepy3.mp3";
import sleepy4 from "../assets/mainmusic/sleepy4.mp3";

import chill from "../assets/mainmusic/chill1.mp3";
import chill2 from "../assets/mainmusic/chill2.mp3";
import chill3 from "../assets/mainmusic/chill3.mp3";

import jazz from "../assets/mainmusic/jazz1.mp3";
import jazz2 from "../assets/mainmusic/jazz2.mp3";
import jazz3 from "../assets/mainmusic/jazz3.mp3";

const styleMusicState = ref({
  isPlay: false,
  playlist: [sleepy, sleepy2, sleepy3],
  volume: 50,
});

export function useStyleMusicState() {
  const hanleChangeVolume = (value) => {
    styleMusicState.value.volume = value;
  };

  const handlePlay = () => {
    styleMusicState.value.isPlay = !styleMusicState.value.isPlay;
  };

  const hanleChangeStyle = (value) => {
    switch (value) {
      case "sleepy": {
        styleMusicState.value.playlist = [sleepy, sleepy2, sleepy3, sleepy4];
        break;
      }
      case "chill": {
        styleMusicState.value.playlist = [chill, chill2, chill3];
        break;
      }
      case "jazzy": {
        styleMusicState.value.playlist = [jazz, jazz2, jazz3];
        break;
      }
    }
  };

  return {
    styleMusicState,
    handlePlay,
    hanleChangeVolume,
    hanleChangeStyle,
  };
}
