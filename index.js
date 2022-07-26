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



//    Modal Section   //
const modal = document.getElementById("modal");
const select0 = document.getElementById("checked0");
const select1 = document.getElementById("checked1");
const select2 = document.getElementById("checked2");
const border0 = document.getElementById("pledge0");
const border1 = document.getElementById("pledge1");
const border2 = document.getElementById("pledge2");
const checkRadio1 = document.getElementById("bambooStand")
const checkRadio2 = document.getElementById("blackEdition")
const thanks = document.getElementById("successModal");


function displayModal() {
    modal.style.display = "initial";
};

function hideModal() {
    modal.style.display = "none";
};


function pledgeSelected(select, select1, select2, border, border1, border2) {

    select.style.display = "flex";
    select1.style.display = "none";
    select2.style.display = "none";

    border.style = "border: 2px solid hsl( var(--clr-cyan) );";
    border1.style = "border: 1px solid rgba(0, 0, 0, 0.15);";
    border2.style = "border: 1px solid rgba(0, 0, 0, 0.15);";
}

function selectBamboo() {
    displayModal();
    select1.style.display = "flex";
    border1.style = "border: 2px solid hsl( var(--clr-cyan) );";
    checkRadio1.checked = true;

    border0.style = "border: 1px solid rgba(0, 0, 0, 0.15);";
    border2.style = "border: 1px solid rgba(0, 0, 0, 0.15);";
}

function selectBlack() {
    displayModal();
    select2.style.display = "flex";
    border2.style = "border: 2px solid hsl( var(--clr-cyan) );";
    checkRadio2.checked = true;

    border0.style = "border: 1px solid rgba(0, 0, 0, 0.15);";
    border1.style = "border: 1px solid rgba(0, 0, 0, 0.15);";
}

//     Thanks     //
const totalBacked = document.getElementById("total-backed");
const totalBackers = document.getElementById("total-backers");


function displayThanks0() {
    thanks.style.display = "initial";
    const data = new FormData();
    var rewardInput = document.querySelector("#noRewardInput");
    var field = document.querySelector("#noReward");
        
    if (field.checked) {                 
        data.append(rewardInput.name, rewardInput.value);
        countBacked = parseInt(rewardInput.value, 10) + parseInt(totalBacked.innerHTML, 10);
        totalBacked.innerHTML = countBacked;
    }  
    return false;
}

function displayThanks1() {
    thanks.style.display = "initial";
    const data1 = new FormData();  
    var rewardInput1 = document.querySelector("#rewardBamboo");
    var field1 = document.querySelector("#bambooStand");
    const bambooLeft = document.getElementById("bamboo-pack-left");
    const bambooLeft1 = document.getElementById("bamboo-pack-left1");

        
    if (field1.checked) {                 
        data1.append(rewardInput1.name, rewardInput1.value);
        countBacked = parseInt(rewardInput1.value, 10) + parseInt(totalBacked.innerHTML, 10);
        totalBacked.innerHTML = countBacked;

        countBamboo = bambooLeft.innerHTML;
        countBamboo--;
        bambooLeft.innerHTML = countBamboo;
        countBamboo1 = bambooLeft1.innerHTML;
        countBamboo1--;
        bambooLeft1.innerHTML = countBamboo1;
    }  
    return false;
}

function displayThanks2() {
    thanks.style.display = "initial";
    const data2 = new FormData();
    var rewardInput2 = document.querySelector("#rewardBlack");
    var field2 = document.querySelector("#blackEdition");
    const blackLeft = document.getElementById("black-pack-left");
    const blackLeft1 = document.getElementById("black-pack-left1");
        
    if (field2.checked) {                 
        data2.append(rewardInput2.name, rewardInput2.value);
        countBacked = parseInt(rewardInput2.value, 10) + parseInt(totalBacked.innerHTML, 10);
        totalBacked.innerHTML = countBacked;

        countBlack = blackLeft.innerHTML;
        countBlack--;
        blackLeft.innerHTML = countBlack;
        countBlack1 = blackLeft1.innerHTML;
        countBlack1--;
        blackLeft1.innerHTML = countBlack1;
    }  
    return false;
}


//    Store Data     //

function homeUpdate() {
    
    count = totalBackers.innerHTML;
    count++;
    totalBackers.innerHTML = count;

    var progressBar = document.getElementById("progress-bar");
    var progressValue = parseInt(totalBacked.innerHTML, 10) / 1000;
    progressBar.style.width = progressValue + "%";
    modal.style.display = "none";
    thanks.style.display = "none";

    if(progressValue > 100) {
        window.location.reload();
    };
}
