import { worksData } from "./data/worksData.js";

const worksList = document.querySelector(".works");
const fragment = document.createDocumentFragment();

worksData.forEach(work => {
    const workClass = document.createElement("div");
    workClass.className = "left2right works-content animate-on-scroll";
    workClass.id = work.id;

    const h1 = createDivText("h1");

    const text = document.createElement("div");
    text.appendChild(createDivText("main", work.name));
    text.appendChild(createDivText("about", work.about));
    h1.appendChild(text);

    const icons = createDivText("image font-32");
    work.languages.forEach(iconHTML => {
        icons.insertAdjacentHTML("beforeend", iconHTML);
    });
    h1.appendChild(icons);

    workClass.appendChild(h1);

    const detail = createDivText("detail");
    detail.appendChild(document.createElement("br"));
    detail.appendChild(document.createTextNode(`概要: ${work.description}`));
    detail.appendChild(document.createElement("br"));
    detail.appendChild(document.createElement("br"));
    workClass.appendChild(detail);

    fragment.appendChild(workClass);
});

worksList.appendChild(fragment);

document.querySelectorAll(".works .works-content").forEach(content => {
    content.addEventListener("click", () => {
        const detail = content.querySelector(".detail");
        detail.classList.toggle("open");
    });
});

function createDivText(className, textContent = "") {
    const result = document.createElement("div");
    result.className = className;
    result.textContent = textContent;
    return result;
}
