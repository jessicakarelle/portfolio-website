const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;

        const t = e.target;
        t.classList.add("visible");

        // Animation des nombres
        if (t.classList.contains("stat-number")) {
            let c = 0, max = +t.dataset.target;
            const i = setInterval(() => (t.textContent = ++c) >= max && clearInterval(i), 20);
        }

        observer.unobserve(t);
    });
}, { threshold: 0.3 });

// Observer toutes les boxes et stats
document.querySelectorAll(".box, .stat-number").forEach(el => observer.observe(el));

// Parallax hero
const hero = document.querySelector(".hero-section .container");
window.addEventListener("scroll", () => {
    if (!hero) return;
    const s = window.scrollY;
    hero.style.transform = `translateY(${s*0.3}px)`;
    hero.style.opacity = 1 - s/1000;
});
