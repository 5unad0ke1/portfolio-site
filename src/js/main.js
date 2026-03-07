init();
WorksInit();
SkillsInit();

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
        threshold: [0, 1]
    });

    document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));
}

function WorksInit() {
        document.querySelectorAll(".works .works-content").forEach(content => {
        content.addEventListener("click", () => {
            const detail = content.querySelector(".detail");
            if (detail) detail.classList.toggle("open");
        });
    });
}

function SkillsInit(){

    document.querySelectorAll('.skills .skill').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href) openWork(href.slice(1));
        });
    });
}

function openWork(id) {
    document.querySelectorAll('.detail').forEach(e => e.classList.remove('open'));

    const element = document.getElementById(id);
    if (!element) return;

    const target = element.querySelector('.detail');
    if (!target) return;

    target.classList.add('open');
    target.scrollIntoView({ behavior: 'smooth' });
}
