import { IconHTML } from "./data.js";
import { WorkID } from "./data.js";

const skillsDatas = [
    {
        category: "#Game Development",
        item:[
            {
                id: WorkID.TierAIM,
                h1:"MVrP",
                h2:"R3を用い、View差し替えを前提としたMVrP設計ができる",
                icons:[
                    IconHTML.Unity,
                    IconHTML.CS,
                ],
            },
            {
                id: WorkID.Grainium,
                h1:"Editor Extension",
                h2:"実行時処理に影響しない前提でエディタ拡張を実装できる",
                icons:[
                    IconHTML.Unity,
                    IconHTML.CS,
                ],
            },
            {
                id: WorkID.TierAIM,
                h1:"URP / Custom Post Effect",
                h2:"Unity/URP環境で　既存Volumeに依存せず　ポストエフェクトを自作・運用できる",
                icons:[
                    IconHTML.Unity,
                    IconHTML.CS,
                ],
            },
        ],
    },
]

CreateAllIcons();
Generate();


function CreateAllIcons(){
    const icons = document.querySelector(".skills-new .test");
    if(!icons)
        return;

    Object.values(IconHTML).forEach(html =>{
        const divElement = document.createElement("div");
        
        divElement.innerHTML = html;
        icons.appendChild(divElement);
    });
}

function Generate(){
    const parent = document.querySelector(".skills-new .skills-contents");
    if(!parent)
        return;

    skillsDatas.forEach(content => {
        const title = document.createElement("div");
        title.textContent = content.category;
        parent.appendChild(title);
        parent.appendChild(document.createElement("br"));

        const group = document.createElement("div");
        group.className = "skills-group";
        content.item.forEach(skillData =>{
            const skill = document.createElement("a");
            skill.className = "skill animate-on-scroll down2up";
            skill.href = `#${skillData.id}`;

            skill.appendChild(createDivText("h1",skillData.h1));
            skill.appendChild(createDivText("h2",skillData.h2));

            const icons = createDivText("icons");
            skillData.icons.forEach(icon =>{
                icons.innerHTML += icon;
            });
            skill.appendChild(icons);
            group.appendChild(skill);
        });
        parent.appendChild(group);
        parent.appendChild(document.createElement("br"));
    });


    document.querySelectorAll('.skills-new .skill').forEach(link => {
    link.addEventListener('click', e => {
        const id = link.getAttribute('href').replace('#', '');
        openWork(id);
        });
    });
}



function openWork(id) {
    document.querySelectorAll('.detail')
        .forEach(e => e.classList.remove('open'));

    const target = document.getElementById(id).querySelector('.detail');
    if (target) {
        target.classList.add('open');
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

function createDivText(className,textContent = ""){
    const result = document.createElement("div");
    result.className = className;
    result.textContent = textContent;
    return result;
}