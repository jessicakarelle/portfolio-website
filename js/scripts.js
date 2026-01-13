const boxes = document.querySelectorAll(".box");
const stats = document.querySelectorAll(".stat-number");

function animateNumber(el) {
    let max = parseInt(el.dataset.target);
    let count = 0;

    const interval = setInterval(() => {
        count++;
        el.textContent = count;

        if (count >= max) {
            clearInterval(interval);
        }
    }, 20);
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains("box")) {
            entry.target.classList.add("visible");
        }

        if (entry.isIntersecting && entry.target.classList.contains("stat-number")) {
            animateNumber(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

boxes.forEach(el => observer.observe(el));
stats.forEach(el => observer.observe(el));

const hero = document.querySelector(".hero-section .container");

window.addEventListener("scroll", () => {
    if (!hero) return;

    const scroll = window.scrollY;

    if (scroll < window.innerHeight) {
        hero.style.transform = `translateY(${scroll * 0.3}px)`;
        hero.style.opacity = 1 - scroll / 1000;
    }
});
