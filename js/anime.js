const observerEnter = new IntersectionObserver((entries) => {
entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},
{
    rootMargin: "0px 0px -100px 0px",
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




window.addEventListener('scroll', () => {
  const target = document.querySelector('.background');
  
  target.style.transform= `translateY(${-scrollY * 0.02}px)`;
});