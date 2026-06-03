const toggleBtn = document.getElementById("themeToggle");
const body = document.getElementById("body");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.innerText = "☀ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.innerText = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});

window.onload = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.innerText = "☀ Light Mode";
  }
};