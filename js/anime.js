init();

function init(){
    const observerEnter = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 1
    });

    const observerExit = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
            if(!entry.isIntersecting){
                entry.target.classList.remove("show");
            }
        });
    },
    {
        threshold: 0.1
    })

    const skills = document.querySelectorAll(".animate-on-scroll")
    skills.forEach(skill => observerEnter.observe(skill));
    skills.forEach(skill => observerExit.observe(skill));
}