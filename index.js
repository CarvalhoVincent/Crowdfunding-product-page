// Toggle Menu //

function displayMenu() {
    const menu = document.getElementById("primary-navigation");
    const state = document.querySelector(".mobile-nav-toggle");
    const footer = document.querySelector("footer");
    menu.classList.toggle("primary-navigation-toggle");

    if(state.getAttribute("data-visible") === "false") {
        menu.style = "box-shadow: 0px 0px 200px 100vh rgba(0,0,0,0.5);"
        state.style = "background-image: url(./images/icon-close-menu.svg); position: fixed;";
        state.setAttribute("data-visible", true);
        state.setAttribute("aria-expanded", true);
        footer.style.background = "#000000";
        footer.style.opacity = ".5";
    } else {
        menu.style = "box-shadow: none;"
        state.style = "background-image: url(./images/icon-hamburger.svg); position: absolute;";
        state.setAttribute("data-visible", false);
        state.setAttribute("aria-expanded", false);
        footer.style.background = "";
        footer.style.opacity = "";
    }
}
