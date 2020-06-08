const left = document.querySelector(".left");
const right = document.querySelector(".right");
const myContainer = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
    myContainer.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
    myContainer.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
    myContainer.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
    myContainer.classList.remove("hover-right");
});
