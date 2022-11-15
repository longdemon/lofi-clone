import { ref } from "vue";

const styleMusicState = ref({
  isPlay: false,
  playlist: [
    "../src/assets/mainmusic/sleepy1.mp3",
    "../src/assets/mainmusic/sleepy2.mp3",
    "../src/assets/mainmusic/sleepy3.mp3",
  ],
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
        styleMusicState.value.playlist = [
          "../src/assets/mainmusic/sleepy1.mp3",
          "../src/assets/mainmusic/sleepy2.mp3",
          "../src/assets/mainmusic/sleepy3.mp3",
        ];
        break;
      }
      case "chill": {
        styleMusicState.value.playlist = [
          "../src/assets/mainmusic/chill1.mp3",
          "../src/assets/mainmusic/chill2.mp3",
          "../src/assets/mainmusic/chill3.mp3",
        ];
        break;
      }
      case "jazzy": {
        styleMusicState.value.playlist = [
          "../src/assets/mainmusic/jazz1.mp3",
          "../src/assets/mainmusic/jazz2.mp3",
          "../src/assets/mainmusic/jazz3.mp3",
        ];
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
