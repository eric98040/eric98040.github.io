// Theme toggle and mobile menu. Pages stay readable without JavaScript.
(function () {
  var root = document.documentElement;

  var themeButton = document.querySelector("[data-theme-toggle]");
  if (themeButton) {
    themeButton.addEventListener("click", function () {
      var dark = root.classList.toggle("dark");
      try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
      themeButton.setAttribute("aria-pressed", String(dark));
    });
    themeButton.setAttribute("aria-pressed", String(root.classList.contains("dark")));
  }

  var menuButton = document.querySelector("[data-menu-toggle]");
  var menu = document.getElementById("mobile-menu");
  if (menuButton && menu) {
    menuButton.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }
})();
