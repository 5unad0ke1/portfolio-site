const worksData =[
    {
        name: "Grainium",
        about:"Unity用のエディター拡張機能を提供します",
        languages:[
            { iconHTML: "<i class='devicon-unity-plain'></i>"},
            { iconHTML: "<i class='devicon-csharp-plain'></i>"},
        ]
    },
    {
        name: "Silt",
        about:"Unity向けフレームワーク",
        languages:[
            { iconHTML: "<i class='devicon-unity-plain'></i>"},
            { iconHTML: "<i class='devicon-csharp-plain'></i>"},
        ]
    },
    {
        name: "TierA.I.M.",
        about:"2Dリアクションシューティング",
        languages:[
            { iconHTML: "<i class='devicon-unity-plain'></i>"},
            { iconHTML: "<i class='devicon-csharp-plain'></i>"},
        ]
    },
];


const worksList =  document.querySelector(".works");

worksData.forEach(work =>{
    const workClass = document.createElement("div");

    workClass.className = "left2right works-content animate-on-scroll";

    const text = document.createElement("div");
    const workName = document.createElement("div");
    workName.className = "main";
    workName.textContent = `${work.name}`;
    text.appendChild(workName);

    const workAbout = document.createElement("div");
    workAbout.className = "about";
    workAbout.textContent = `${work.about}`;
    text.appendChild(workAbout);

    workClass.appendChild(text);
    
    const icons = document.createElement("div");
    icons.className = "image";
    work.languages.forEach(iconHTML =>{
        icons.innerHTML += iconHTML.iconHTML;
    });
    workClass.appendChild(icons);

    worksList.appendChild(workClass);
});