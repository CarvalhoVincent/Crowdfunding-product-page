// Toggle mobile menu //

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

//     Bookmark    //

const bookmarkSpan = document.getElementById("bookmarkSpan");

if(window.matchMedia("(min-width:786px)").matches) {
    bookmarkSpan.classList.remove("sr-only");
  } else {
    bookmarkSpan.classList.add("sr-only");
  }

function resizing() {
if("matchMedia" in window) {
  if(window.matchMedia("(min-width:786px)").matches) {
        bookmarkSpan.classList.remove("sr-only");
    } else {
        bookmarkSpan.classList.add("sr-only");
    }
    }
}
window.addEventListener('resize', resizing, false);


function bookmark() {
    const bookmarkBtn = document.getElementById("bookmark-btn-svg");
    const bookmarkBtnBackground = document.getElementById("bookmark-btn");
    const bookmarkAria = document.querySelector(".bookmark-btn");

    bookmarkBtn.classList.toggle("bookmark-btn-svg");
    bookmarkBtnBackground.classList.toggle("bookmark-btn-background");
    bookmarkSpan.classList.toggle("bookmark-btn-text");

    if (bookmarkAria.getAttribute("aria-selected") === "false") {
        bookmarkSpan.innerHTML = "Bookmarked";
        bookmarkAria.setAttribute("aria-selected", true);
    } else {
        bookmarkSpan.innerHTML = "Bookmark";
        bookmarkAria.setAttribute("aria-selected", false);
    }
}