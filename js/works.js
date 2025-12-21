import { worksData } from "./data/worksData.js";


const worksList =  document.querySelector(".works");

worksData.forEach(work =>{
    const workClass = document.createElement("div");

    console.log("Creating work:", work.name);
    workClass.className = "left2right works-content animate-on-scroll";
    workClass.id =work.id;

    const h1 = createDivText("h1");

    const text = document.createElement("div");
    text.appendChild(createDivText("main",work.name));
    text.appendChild(createDivText("about",work.about));
    h1.appendChild(text);
    
    const icons = createDivText("image");
    work.languages.forEach(iconHTML =>{
        icons.innerHTML += iconHTML;
    });
    h1.appendChild(icons);
    workClass.appendChild(h1);

    const detail = createDivText("detail");
    detail.appendChild(document.createElement("br"));
    detail.appendChild(createDivText("",work.description));
    detail.appendChild(document.createElement("br"));
    workClass.appendChild(detail);

    worksList.appendChild(workClass);
});

function createDivText(className,textContent = ""){
    const result = document.createElement("div");
    result.className = className;
    result.textContent = textContent;
    return result;
}

document.querySelectorAll(".works .works-content")
        .forEach(content =>{
            content.addEventListener("click",() =>{
                content.querySelector(".detail").classList.toggle("open");
            });
        });