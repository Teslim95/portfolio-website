var typed = new Typed(".multiple-text", {
    strings: [
        "Frontend Developer",
        "Graphic Designer",
        "HTML Developer",
        "JavaScript Developer"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

};

scrollBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
const menuToggle = document.getElementById("menu-toggle");
const navLinksMenu = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinksMenu.classList.toggle("active");
});
gsap.registerPlugin(ScrollTrigger);

gsap.from(".about-content", {
    scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    },
    y: 100,
    opacity: 0,
    duration: 1
});
gsap.from(".skills-container", {
    scrollTrigger: {
        trigger: ".skills-container",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    },
    x: -100,
    opacity: 0,
    duration: 1
});

gsap.from(".services-container", {
    scrollTrigger: {
        trigger: ".services-container",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    },
    scale: 0.8,
    opacity: 0,
    duration: 1
});

gsap.from(".projects-container", {
    scrollTrigger: {
        trigger: ".projects-container",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    },
    x: 100,
    opacity: 0,
    duration: 1
});

gsap.from(".contact form", {
    scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    },
    y: 100,
    opacity: 0,
    duration: 1
});