// hamburger dropdown
const hamburgerMenu = document.querySelector(".hamburger-menu");
const dropdown = document.querySelector(".nav-content");

document.documentElement.addEventListener("click", () => {
	if (dropdown.classList.contains("drop")) {
		Dropdown();
	}
});

hamburgerMenu.addEventListener("click", (event) => {
	event.stopPropagation();
	Dropdown();
});

function Dropdown() {
	dropdown.classList.toggle("drop");
}

// menu carousel
const slider = document.querySelector(".orderLink");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
	isDown = true;
	slider.classList.add("active");
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", (_) => {
	isDown = false;
	slider.classList.remove("active");
});
slider.addEventListener("mouseup", (_) => {
	isDown = false;
	slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const SCROLL_SPEED = 1;
	const walk = (x - startX) * SCROLL_SPEED;
	slider.scrollLeft = scrollLeft - walk;
});

// item carousel
