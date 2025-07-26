function switchTheme() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
}

document.getElementById("switch-theme-button")
  .addEventListener("click", switchTheme);