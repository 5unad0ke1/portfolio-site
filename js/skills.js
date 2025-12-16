const skillsData =[
    {
        category: "#Programing",
        item: [
            {   
                name: "Unity",
                level: 4,
                iconHTML: `<i class="devicon-unity-plain"></i>`
            },
            {
                name: "C#",
                level: 4,
                iconHTML: "<img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' width='80' height='80'/>"
            },
            {
                name: "Python",
                level: 3,
                iconHTML: `<i class="devicon-python-plain colored"></i>`
            },
            {
                name: "HTML",
                level: 3,
                iconHTML: `<i class="devicon-html5-plain-wordmark colored"></i>`
            },
            {
                name: "CSS",
                level: 3,
                iconHTML: `<i class="devicon-css3-plain-wordmark colored"></i>`
            },
            {
                name: "JavaScript",
                level: 3,
                iconHTML: `<i class="devicon-javascript-plain colored"></i>`
            },
            {
                name: "Visual Studio",
                level: 3,
                iconHTML: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" height="80" width="80" />` 
            },
            {
                name: "Visual Studio Code",
                level: 3,
                iconHTML: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" height="80" width="80"/>`
            },
            {
                name: "Blender",
                level: 2,
                iconHTML: `<i class="devicon-blender-original colored"></i>`
            },
        ]
    },
    {
        category:"#Version Control",
        item: [
            {
                name:"GitHub",
                level: 3,
                iconHTML: '<i class="devicon-github-original"></i>'
            },
            {
                name:"Git",
                level: 2,
                iconHTML: '<i class="devicon-git-plain colored"></i>'
            },
            {
                name:"Sourcetree",
                level: 3,
                iconHTML: '<i class="devicon-sourcetree-original colored"></i>'
            },
            {
                name:"Slack",
                level: 3,
                iconHTML: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" height="80" width="80" />'
            },
            {
                name:"Notion",
                level: 2,
                iconHTML: '<i class="devicon-notion-plain"></i>'
            },
        ],
    }
]


const list = document.querySelector(".skills-contents");

skillsData.forEach(group => {
    const groupClass = document.createElement("li");
    groupClass.className = "skills-group";

    list.innerHTML += `${group.category}`;

    group.item.forEach(skill =>{
        const skillClass = document.createElement("div");
        skillClass.className = "skill animate-on-scroll";

        skillClass.innerHTML = `
                    ${skill.iconHTML}
                    ${skill.level}/5
                    <br>
                    <span class="star">${renderStars(skill.level)}</span>
                    <span class="name">${skill.name}</span>`;

        groupClass.appendChild(skillClass);
    });

    list.appendChild(groupClass);
    list.innerHTML += `<br>`;
});

function renderStars(level, max = 5) {
  return `${'★'.repeat(level)}${'・'.repeat(max - level)}`;
}