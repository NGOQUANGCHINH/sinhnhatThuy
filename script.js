window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bgMusic");
  const startBtn = document.getElementById("start-btn");

  // Bấm nút thì phát nhạc và ẩn nút
  startBtn.addEventListener("click", () => {
    audio.muted = false;
    audio.play();
    startBtn.style.display = "none"; // Ẩn nút sau khi bấm
  });
});
