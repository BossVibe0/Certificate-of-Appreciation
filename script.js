const toggleBtn = document.getElementById("modeToggle");
const body = document.body;
const certificateImg = document.getElementById("certificateImage");
const downloadLight = document.getElementById("downloadLight");
const downloadDark = document.getElementById("downloadDark");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const isDark = body.classList.contains("dark-mode");

  toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  toggleBtn.classList.toggle("btn-dark", !isDark);
  toggleBtn.classList.toggle("btn-light", isDark);
  toggleBtn.style.color = isDark ? "#000" : "#fff";
  toggleBtn.style.borderColor = isDark ? "#000" : "#fff";

  certificateImg.src = isDark
    ? "assets/Certificate_Dark.png"
    : "assets/Certificate_Light.png";

  downloadLight.classList.toggle("d-none", isDark);
  downloadDark.classList.toggle("d-none", !isDark);
});
