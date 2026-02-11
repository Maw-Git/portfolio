const themeToggleButton = document.getElementById("theme-toggle");

const applyTheme = (theme) => {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-mode", isDark);
  themeToggleButton.textContent = isDark ? "Modo claro" : "Modo oscuro";
  themeToggleButton.setAttribute("aria-pressed", String(isDark));
  localStorage.setItem("theme", theme);
};

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

if (themeToggleButton) {
  applyTheme(getInitialTheme());
  themeToggleButton.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
    applyTheme(nextTheme);
  });
}
