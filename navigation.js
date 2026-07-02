console.log("Navigation loaded");

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

console.log(hamburger);
console.log(navLinks);

hamburger.addEventListener("click", () => {
    console.log("Clicked!");
    navLinks.classList.toggle("active");
});
