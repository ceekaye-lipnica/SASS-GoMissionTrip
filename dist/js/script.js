const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".nav");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
toggleMenu.classList.toggle("open");
headNav.classList.toggle("open");
header.classList.toggle("open");
});

const headerr = document.querySelector(".header");
window.addEventListener("scroll", () => {
	console.log(window.pageYOffset);
	if (window.pageYOffset >= 100) {
		headerr.classList.add("blue");
	} else {
		headerr.classList.remove("blue");
	}
});