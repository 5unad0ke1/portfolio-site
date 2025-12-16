const observerEnter = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show"); // 範囲内
        }
  });
},
{
    rootMargin: "0px 0px -49px 0px",
  threshold: 1
}); // 20%見えたら発火

const observerExit = new IntersectionObserver((entiries) => {
    entiries.forEach(entry =>{
        if(!entry.isIntersecting){
            entry.target.classList.remove("show"); // 範囲外で消える
        }
    });
},
{
    threshold: 0.1
})

const skills = document.querySelectorAll(".animate-on-scroll")
skills.forEach(skill => observerEnter.observe(skill));
skills.forEach(skill => observerExit.observe(skill));