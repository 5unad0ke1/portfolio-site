const textElement = document.getElementById("typing-indicator"); 
if(!textElement){
    throw new Error("Element with ID 'typing-indicator' not found.");
}

const text = " Hello,\nI'm\n5unad0ke1.\nNice to meet you."; 
let index = 0;

// DocumentFragmentでまとめてノード作成
const fragment = document.createDocumentFragment();

function typeWriter(){ 
    if (index < text.length){ 
        const char = text.charAt(index);
        
        if (char === "\n") {
            fragment.appendChild(document.createElement("br"));
        } else {
            fragment.appendChild(document.createTextNode(char));
        }
        
        index++;

        // まとめて追加（1文字ずつだと負荷軽減は微小だが安全）
        textElement.appendChild(fragment);

        setTimeout(typeWriter, 80); 
    }
    else{
        const arrow = document.createElement("div");
        arrow.className = "header-arrow";
        document.querySelector(".header").appendChild(arrow);
    }
}

// 開始
typeWriter();