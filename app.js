const burgerMenu = document.querySelector(".burger-menu");
const bar1Ele = document.querySelector(".burger-menu>.bar:nth-child(1)");
const bar2Ele = document.querySelector(".burger-menu>.bar:nth-child(2)");
const bar3Ele = document.querySelector(".burger-menu>.bar:nth-child(3)");

const mainNav = document.querySelector(".main-nav");
const overlayEle = document.querySelector(".overlay");


// Burger menu functionalities
let navMenuActive = false;

const toggleNavMenuActive = () => {
    navMenuActive ? (navMenuActive = false) : (navMenuActive = true);
};

const stopScrolling = () => {
    window.scrollTo(0, 0);
};
const animateMenuBar = () => {
    if (!navMenuActive) {
        bar1Ele.style.width = "30px";
        bar3Ele.style.width = "30px";
        bar2Ele.style.transform = `translateX(-50px)`;
        bar2Ele.style.opacity = `0`;
        bar1Ele.style.transform = `translateY(8.5px) rotate(45deg)`;
        bar3Ele.style.transform = `translateY(-8.5px) rotate(-45deg)`;
    } else {
        bar1Ele.style.width = "40px";
        bar3Ele.style.width = "40px";
        bar2Ele.style.transform = `translateX(0)`;
        bar2Ele.style.opacity = `1`;
        bar1Ele.style.transform = `rotate(0deg)`;
        bar3Ele.style.transform = `rotate(0deg)`;
    }
};

const toggleNavBar = () => { };
burgerMenu.addEventListener("click", function () {
    // Burger Menu animation
    animateMenuBar();

    //   Toggle navbar
    if (window.innerWidth < 850) {
        if (!navMenuActive) {
            mainNav.classList.add("moveInNav");
            overlayEle.classList.add("active-overlay");
            window.addEventListener("scroll", stopScrolling);
        } else {
            mainNav.classList.remove("moveInNav");
            overlayEle.classList.remove("active-overlay");
            window.removeEventListener("scroll", stopScrolling);
        }
    }

    toggleNavMenuActive();
});
