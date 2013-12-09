$(document).ready(function(){
  var video = document.getElementById("video");

  // Buttons
  var playButton = document.getElementById("play-pause");
  var muteButton = document.getElementById("mute");
  var fullScreenButton = document.getElementById("full-screen");

  // Sliders
  var seekBar = document.getElementById("seek-bar");
  var volumeBar = document.getElementById("volume-bar");

  //Play-Pause Handler
  playButton.addEventListener("click", function() {
    if (video.paused == true) {
      video.play();
      playButton.innerHTML = "<img width='20px' height='20px' src='/assets/pause.png'>";
    } else {
      video.pause();
      playButton.innerHTML = "<img width='20px' height='20px' src='/assets/play.png'>";
    }
  });

  //Mute Handler
  muteButton.addEventListener("click", function() {
    if (video.muted == false) {
      video.muted = true;
      muteButton.innerHTML = "<img width='20px' height='20px' src='/assets/mute.png'>";
    } else {
      video.muted = false;
      muteButton.innerHTML = "<img width='20px' height='20px' src='/assets/unmute.png'>";
    }
  });

  //FullScreen Handler
  fullScreenButton.addEventListener("click", function() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Chrome and Safari
    }
  });

  //Seekbar Handler
  seekBar.addEventListener("change", function() {
    var time = video.duration * (seekBar.value / 100);
    video.currentTime = time;
  });

  // Pause the video when the slider is dragged
  seekBar.addEventListener("mousedown", function() {
    video.pause();
  });

  // Play the video when the slider handle is dropped
  seekBar.addEventListener("mouseup", function() {
    video.play();
  });

  video.addEventListener("timeupdate", function() {
    var value = (100 / video.duration) * video.currentTime;
    seekBar.value = value;
  });

  //Volume Handler
  volumeBar.addEventListener("change", function() {
    video.volume = volumeBar.value;
  });
});