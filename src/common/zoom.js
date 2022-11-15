var html = document.querySelector("html");
const zoomBtn = document.querySelector("#zoom");
zoomBtn.onclick = (e) => {
  e.stopPropagation();
  var isFullScreen = document.fullscreenElement;
  if (isFullScreen === null) {
    html.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};
