const darkLightButton = document.getElementById("darklight_btn");
const menuButton = document.getElementById("menu_toggle");
const navMenu = document.getElementById("nav_menu");

darkLightButton.addEventListener("click", function(){
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")){
        darkLightButton.textContent = "☀️";
        darkLightButton.setAttribute("aria-label", "Ubah ke dark mode");
    } else {
        darkLightButton.textContent = "🌙";
        darkLightButton.setAttribute("aria-label", "Ubah ke light mode");
    }
});

menuButton.addEventListener("click", function(){
    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");
    menuButton.setAttribute("aria-expanded", isOpen);
});