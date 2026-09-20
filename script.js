
const darkLightButton = document.getElementById("darklight");

darkLightButton.addEventListener("click", function(){
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")){
        darkLightButton.textContent = "🌙";
        darkLightButton.setAttribute("aria-label", "Switch to light mode");
    } else {
        darkLightButton.textContent = "☀️";
        darkLightButton.setAttribute("aria-label", "Switch to dark mode");
    }
});


const menuButton = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", function(){
    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuButton.setAttribute("aria-expanded", isOpen);
});