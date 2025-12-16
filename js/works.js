const worksData =[
    {
        name: "Grainium",
    },
    {
        name: "Silt",
    },
    {
        name: "TierA.I.M.",
    },
];


const worksList =  document.querySelector(".works");

worksData.forEach(work =>{
    const workClass = document.createElement("div");

    workClass.className = "works-content animate-on-scroll";
    workClass.innerHTML = `${work.name}`;

    worksList.appendChild(workClass);
});