const videoPicker = document.getElementById("fileInput");
const videoPlayer = document.querySelector("video");
const playPauseBtn = document.getElementById("playPauseBtn");
const  currentDuration=document.querySelector(".currentDuration");
const  totalDuration=document.querySelector(".currentDuration")


videoPicker.addEventListener("change", function () {
  const video = videoPicker.files[0];

  if (video) {
    const videoUrl = URL.createObjectURL(video);

    videoPlayer.setAttribute("src", videoUrl);
  }
});

playPauseBtn.addEventListener("click", function () {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playPauseBtn.textContent = "Pause";
  } else {
    videoPlayer.pause();
    playPauseBtn.textContent = "Play";
  }
});

videoPlayer.addEventListener("play", function () {
  console.log("Playing");
});

videoPlayer.addEventListener("loadedmetadata", function { 
    const duration
})