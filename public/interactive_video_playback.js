// this javascript is used for interactive user-controlled video playback. It uses a Slide to control the playback speed, and a Selector to choose from a list of videos

// Set the following before use:
// [1] "vid" --- id of the video element
// [2] "slider" --- id of the slider attached
// [3] "output" --- id of the text area to display playing speed
// [4] "vnames" --- id of the file selector
  
output.innerHTML = slider.value;

slider.oninput = function () {
  if (this.value >= 1) {
    vid.playbackRate = 1.0 + this.value / 100.0;
  }
  else {
    vid.playbackRate = Math.exp((this.value - 1) / 100.0);
  }
  output.innerHTML = vid.playbackRate.toFixed(2);
}

function update() {
  //var vid = document.getElementById("JS");
  //var vnames = document.getElementById("JS-names");
  vid.src = vnames.options[vnames.selectedIndex].value;
  vid.playbackRate = 1.0;
  //var slider = document.getElementById("myRange");
  slider.value = 1;
  //var output = document.getElementById("demo");
  output.innerHTML = slider.value;
}
