document.querySelector(".services").addEventListener("mouseenter", () => {
    gsap.to(".mega-menu", { opacity: 1, y: 10, duration: 0.3, display: "flex" });
});

document.querySelector(".services").addEventListener("mouseleave", () => {
    gsap.to(".mega-menu", { opacity: 0, y: 0, duration: 0.3, display: "none" });
});
