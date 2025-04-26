window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bgMusic");
  const startBtn = document.getElementById("start-btn");

  // Bấm nút thì phát nhạc và ẩn nút
  startBtn.addEventListener("click", () => {
    audio.muted = false;
    audio.play();
    startBtn.style.display = "none"; // Ẩn nút sau khi bấm
  });
}); // script.js
const startBtn = document.getElementById("start-btn");
const overlay = document.getElementById("overlay");
const bgMusic = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
  overlay.style.display = "none"; // Ẩn lớp khóa
  bgMusic.muted = false; // Bật tiếng
  bgMusic.play(); // Phát nhạc luôn
});
