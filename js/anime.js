init();

function init() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        const el = entry.target;
        const isShown = el.classList.contains("show");

        if (entry.isIntersecting && !isShown) {
            el.classList.add("show");
        } else if (!entry.isIntersecting && isShown) {
            el.classList.remove("show");
        }
        });
    }, {
        threshold: [0, 0.5] // 緩めて負荷を減らす
    });

    document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));
}