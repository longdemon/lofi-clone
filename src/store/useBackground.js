import { ref } from "vue";

const backgroundState = ref({
  isDay: true,
  isStarry: true,
  sceneStarryDay: "@/assets/BDR STARRY DAY - Christmas ver.mp4",
  sceneStarryNight: "@/assets/BDR STARRY NIGHT - Christmas ver.mp4",
  sceneRainDay: "@/assets/BDR RAINY DAY - Christmas ver.mp4",
  sceneRainNight: "@/assets/BDR RAINY NIGHT - Christmas ver.mp4",
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
          "@/assets/BDR STARRY DAY - Christmas ver.mp4";
        backgroundState.value.sceneStarryNight =
          "@/assets/BDR STARRY NIGHT - Christmas ver.mp4";
        backgroundState.value.sceneRainDay =
          "@/assets/BDR RAINY DAY - Christmas ver.mp4";
        backgroundState.value.sceneRainNight =
          "@/assets/BDR RAINY NIGHT - Christmas ver.mp4";

        break;
      }
      case "new-york": {
        backgroundState.value.sceneStarryDay =
          "@/assets/New+York+Bedroom+Day.mp4";
        backgroundState.value.sceneStarryNight =
          "@/assets/New+York+Bedroom+Night.mp4";
        backgroundState.value.sceneRainDay =
          "@/assets/New+York+Bedroom+Rainy+Day.mp4";
        backgroundState.value.sceneRainNight =
          "@/assets/New+York+Bedroom+Rainy+Night.mp4";
          
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
