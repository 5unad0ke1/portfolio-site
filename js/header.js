const textElement = document.getElementById("text"); 
const text = " Hello\nI'm\nOIKAWA Yuki.\nNice to meet you."; 
let index = 0; 
typeWriter(); 

function typeWriter(){ 
    if (index < text.length){ 
        const char = text.charAt(index);
        
        if (char === "\n") {
            textElement.innerHTML += "<br>";
        } 
        else {
            textElement.innerHTML += char;
        }
        
        index++;
        setTimeout(typeWriter, 80); 
    }
    else{
        const arrow = document.createElement("div");
        arrow.className = "test";
        document.querySelector(".header").appendChild(arrow);
    }
}