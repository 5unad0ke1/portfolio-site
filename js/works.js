import { IconHTML } from "./data.js";
import { WorkID } from "./data.js";

const worksData =[
    {
        id: WorkID.Grainium,
        name: "Grainium",
        about:"Unity向けエディター拡張",
        languages:[
            IconHTML.Unity,
            IconHTML.CS,
        ]
    },
    {
        id: WorkID.Silt,
        name: "Silt",
        about:"Unity向けフレームワーク",
        languages:[
            IconHTML.Unity,
            IconHTML.CS,
        ]
    },
    {
        id: WorkID.TierAIM,
        name: "TierA.I.M.",
        about:"2Dリアクションシューティング",
        languages:[
            IconHTML.Unity,
            IconHTML.CS,
        ]
    },
    {
        id: WorkID.GitHubToNASBackUp,
        name: "GitHub自動バックアップ",
        about:"リポジトリ消失リスクをゼロにする自動バックアップ基盤",
        languages:[
            IconHTML.Git,
            IconHTML.GitHub,
            IconHTML.Python,
        ]
    },
    {
        id:-1,
        name:"",
        about:"",
        languages:[],
    },
];


const hoge = "Devicon is a set of icons representing programming languages, designing, and development tools. You can use it as a font or directly copy/paste the SVG code into your project.Devicon is a set of icons representing programming languages, designing, and development tools. You can use it as a font or directly copy/paste the SVG code into your project.Devicon is a set of icons representing programming languages, designing, and development tools. You can use it as a font or directly copy/paste the SVG code into your project.Devicon is a set of icons representing programming languages, designing, and development tools. You can use it as a font or directly copy/paste the SVG code into your project.Devicon is a set of icons representing programming languages, designing, and development tools. You can use it as a font or directly copy/paste the SVG code into your project.Devicon is a set of icons representing programming languages, designing, and development tools. You can use it as a font or directly copy/paste the SVG code into your project.";


const worksList =  document.querySelector(".works");

worksData.forEach(work =>{
    const workClass = document.createElement("div");

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
    detail.appendChild(createDivText("",hoge));
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