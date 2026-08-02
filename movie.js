const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const searchInput = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const loginBtn = document.querySelector(".login-btn");
const watchBtn = document.querySelector(".watch-btn");
const listBtn = document.querySelector(".list-btn");
const newsletter = document.querySelector(".newsletter-form");
const header = document.querySelector(".header");
const scrollDown = document.querySelector(".scroll-down");

// Mobile Menu Toggle
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// Search
searchBtn.addEventListener("click", () => {
    const movie = searchInput.value.trim();

    if (movie === "") {
        alert("Please enter a movie name.");
    } else {
        alert(`Searching for "${movie}"`);
    }
});

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});

// Sign In
loginBtn.addEventListener("click", () => {
    alert("Sign In feature coming soon.");
});

// Watch Button
watchBtn.addEventListener("click", () => {
    alert("Enjoy your movie! 🍿");
});

// My List
listBtn.addEventListener("click", () => {
    alert("Added to My List ❤️");
});

// Play Buttons
document.querySelectorAll(".play-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const movie =
            btn.closest(".movie-card").querySelector("h3").innerText;

        alert("Now Playing: " + movie);
    });
});

// Favourite Buttons
document.querySelectorAll(".fav-btn").forEach(btn => {
    btn.addEventListener("click", () => {

        btn.classList.toggle("liked");

        if (btn.classList.contains("liked")) {
            btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
        } else {
            btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
        }
    });
});

// Newsletter
newsletter.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Thank you for subscribing!");

    newsletter.reset();
});

// Active Navigation
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .querySelectorAll(".nav-links a")
            .forEach(item => item.classList.remove("active"));

        link.classList.add("active");

        navLinks.classList.remove("show");

        menuBtn.querySelector("i").classList.remove("fa-xmark");
        menuBtn.querySelector("i").classList.add("fa-bars");
    });

});

// Header Background on Scroll
window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.style.background = "#000";
    } else {
        header.style.background = "rgba(0,0,0,.65)";
    }

});

// Scroll Down
scrollDown.addEventListener("click", () => {

    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });

});

// Welcome Message
window.addEventListener("load", () => {
    console.log("🎬 Welcome to HANZALA STUDIOS");
});