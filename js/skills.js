
const skillsData = [
  {
    category: "#Game Development",
    item: [
      { name: "Unity", level: 4, iconHTML: `<i class="devicon-unity-plain"></i>` },
      { name: "C#", level: 4, iconHTML: "<img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' width='80' height='80' />" },
      { name: "Blender", level: 2, iconHTML: `<i class="devicon-blender-original colored"></i>` }
    ]
  },
  {
    category: "#Web Development",
    item: [
      { name: "HTML", level: 3, iconHTML: `<i class="devicon-html5-plain-wordmark colored"></i>` },
      { name: "CSS", level: 3, iconHTML: `<i class="devicon-css3-plain-wordmark colored"></i>` },
      { name: "JavaScript", level: 3, iconHTML: `<i class="devicon-javascript-plain colored"></i>` }
    ]
  },
  {
    category: "#IDE & Tools",
    item: [
      { name: "Visual Studio", level: 3, iconHTML: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" height="80" width="80" />` },
      { name: "Visual Studio Code", level: 3, iconHTML: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" height="80" width="80"/>` },
      { name: "Python", level: 3, iconHTML: `<i class="devicon-python-plain colored"></i>`},
    ]
  },
  {
    category: "#Version Control & Communication",
    item: [
      { name:"GitHub", level: 3, iconHTML: '<i class="devicon-github-original"></i>' },
      { name:"Git", level: 2, iconHTML: '<i class="devicon-git-plain colored"></i>' },
      { name:"Sourcetree", level: 3, iconHTML: '<i class="devicon-sourcetree-original colored"></i>' },
      { name:"Slack", level: 3, iconHTML: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" height="80" width="80" />' },
      { name:"Notion", level: 2, iconHTML: '<i class="devicon-notion-plain"></i>' }
    ]
  }
]


const skillsList = document.querySelector(".skills .skills-contents");

if(skillsList){
  skillsData.forEach(group => {
      const groupClass = document.createElement("li");

      groupClass.className = "skills-group";

      const categoryHeading = document.createElement("div");
      categoryHeading.textContent = `${group.category}`; 
      skillsList.appendChild(categoryHeading);
      skillsList.appendChild(document.createElement("br"));

      group.item.forEach(skill =>{
          const skillClass = document.createElement("div");
          skillClass.className = "skill animate-on-scroll down2up";

          skillClass.innerHTML = `
                      ${skill.iconHTML}
                      ${skill.level}/5
                      <br>
                      <span class="star">${renderStars(skill.level)}</span>
                      <span class="name">${skill.name}</span>`;

          groupClass.appendChild(skillClass);
      });

      skillsList.appendChild(groupClass);
      skillsList.appendChild(document.createElement("br"));
  });
}
document.querySelectorAll(".skills .skill .name").forEach(text => {
    const parentWidth = text.parentElement.clientWidth;

    text.style.fontSize = "100%";

    const scale = Math.min(1, parentWidth / text.scrollWidth);
    text.style.fontSize = (scale * 95) + "%";
});



function renderStars(level, max = 5) {
  return `${'★'.repeat(level)}${'・'.repeat(max - level)}`;
}