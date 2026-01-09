const textElement = document.getElementById("typing-indicator"); 
if(!textElement){
    throw new Error("Element with ID 'typing-indicator' not found.");
}

const text = " Hello,\nI'm\n5unad0ke1\nNice to meet you."; 
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
        arrow.className = "header-arrow";
        document.querySelector(".header").appendChild(arrow);
    }
}