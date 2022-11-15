import { ref } from "vue";
import christmasStarryDay from "../assets/BDR STARRY DAY - Christmas ver.mp4";
import christmasStarryNight from "../assets/BDR STARRY NIGHT - Christmas ver.mp4";
import christmasRainDay from "../assets/BDR RAINY DAY - Christmas ver.mp4";
import christmasRainNight from "../assets/BDR RAINY NIGHT - Christmas ver.mp4";

import newyorkStarryDay from "../assets/New+York+Bedroom+Day.mp4";
import newyorkStarryNight from "../assets/New+York+Bedroom+Night.mp4";
import newyorkRainDay from "../assets/New+York+Bedroom+Rainy+Day.mp4";
import newyorkRainNight from "../assets/New+York+Bedroom+Rainy+Night.mp4";

const backgroundState = ref({
  isDay: true,
  isStarry: true,
  sceneStarryDay: christmasStarryDay,
  sceneStarryNight: christmasStarryNight,
  sceneRainDay: christmasRainDay,
  sceneRainNight: christmasRainNight,
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
        backgroundState.value.sceneStarryDay = christmasStarryDay;
        backgroundState.value.sceneStarryNight = christmasStarryNight;
        backgroundState.value.sceneRainDay = christmasRainDay;
        backgroundState.value.sceneRainNight = christmasRainNight;

        break;
      }
      case "new-york": {
        backgroundState.value.sceneStarryDay = newyorkStarryDay;
        backgroundState.value.sceneStarryNight = newyorkStarryNight;
        backgroundState.value.sceneRainDay = newyorkRainDay;
        backgroundState.value.sceneRainNight = newyorkRainNight;

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
