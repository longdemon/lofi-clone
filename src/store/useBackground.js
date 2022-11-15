import { ref } from "vue";

const backgroundState = ref({
  isDay: true,
  isStarry: true,
  sceneStarryDay: "../../src/assets/BDR STARRY DAY - Christmas ver.mp4",
  sceneStarryNight: "../../src/assets/BDR STARRY NIGHT - Christmas ver.mp4",
  sceneRainDay: "../../src/assets/BDR RAINY DAY - Christmas ver.mp4",
  sceneRainNight: "../../src/assets/BDR RAINY NIGHT - Christmas ver.mp4",
});

export function useBackgroundState() {
  const toggleDayNight = () => {
    if (backgroundState.value.isDay) {
      backgroundState.value.isDay = false;
    } else {
      backgroundState.value.isDay = true;
    }
  };

  const toggleStarryRain = (value) => {
    backgroundState.value.isStarry = value;
  };

  const hanleChangeScene = (value) => {
    switch (value) {
      case "christmas": {
        backgroundState.value.sceneStarryDay =
          "../../src/assets/BDR STARRY DAY - Christmas ver.mp4";
        backgroundState.value.sceneStarryNight =
          "../../src/assets/BDR STARRY NIGHT - Christmas ver.mp4";
        backgroundState.value.sceneRainDay =
          "../../src/assets/BDR RAINY DAY - Christmas ver.mp4";
        backgroundState.value.sceneRainNight =
          "../../src/assets/BDR RAINY NIGHT - Christmas ver.mp4";

        break;
      }
      case "new-york": {
        backgroundState.value.sceneStarryDay =
          "../../src/assets/New+York+Bedroom+Day.mp4";
        backgroundState.value.sceneStarryNight =
          "../../src/assets/New+York+Bedroom+Night.mp4";
        backgroundState.value.sceneRainDay =
          "../../src/assets/New+York+Bedroom+Rainy+Day.mp4";
        backgroundState.value.sceneRainNight =
          "../../src/assets/New+York+Bedroom+Rainy+Night.mp4";
          
        break;
      }
    }
  };

  return {
    backgroundState,
    toggleDayNight,
    toggleStarryRain,
    hanleChangeScene,
  };
}
