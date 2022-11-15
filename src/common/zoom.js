class FunctionCommon {
  handleZoom() {
    var html = document.querySelector("html");
    var isFullScreen = document.fullscreenElement;

    if (isFullScreen === null) {
      html.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
}

export default new FunctionCommon();
