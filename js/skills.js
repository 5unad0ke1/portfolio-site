import { IconHTML } from "./data/iconHTML.js";
import { skillsData } from "./data/skillData.js";

Generate();
CreateAllIcons();

function CreateAllIcons(){
    const iconsContainer = document.querySelector(".skills .test");
    if(!iconsContainer) return;

    const fragment = document.createDocumentFragment();

    Object.values(IconHTML).forEach(html => {
        const divElement = document.createElement("div");
        divElement.insertAdjacentHTML("beforeend", html);
        fragment.appendChild(divElement);
    });

    iconsContainer.appendChild(fragment);
}

function Generate(){
    const parent = document.querySelector(".skills .skills-contents");
    if(!parent) return;

    const fragment = document.createDocumentFragment();

    skillsData.forEach(content => {
        const title = document.createElement("div");
        title.textContent = content.category;
        fragment.appendChild(title);
        fragment.appendChild(document.createElement("br"));

        const group = document.createElement("div");
        group.className = "skills-group";

        content.item.forEach(skillData => {
            const skill = document.createElement("a");
            skill.className = "skill animate-on-scroll down2up";
            skill.href = `#${skillData.id}`;

            skill.appendChild(createDivText("background"));
            skill.appendChild(createDivText("h1", skillData.h1));

            const h2 = createDivText("h2");
            h2.appendChild(createDivText("h2", skillData.h2));
            skill.appendChild(h2);

            const icons = createDivText("icons");
            skillData.icons.forEach(icon => {
                const wrapper = document.createElement('span');
                wrapper.insertAdjacentHTML("beforeend", icon);
                if(wrapper.firstChild) icons.appendChild(wrapper.firstChild);
            });
            skill.appendChild(icons);

            group.appendChild(skill);
        });

        fragment.appendChild(group);
        fragment.appendChild(document.createElement("br"));
    });

    parent.appendChild(fragment);

    document.querySelectorAll('.skills .skill').forEach(link => {
        link.addEventListener('click', e => {
            const id = link.getAttribute('href').slice(1);
            openWork(id);
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

function createDivText(className, textContent = "") {
    const result = document.createElement("div");
    result.className = className;
    result.textContent = textContent;
    return result;
}
