const textElement = document.getElementById("text"); 
const text = " Hello\nI'm\nOIKAWA Yuki.\nNice to meet you."; 
let index = 0; 

function typeWriter(){ 
    if (index < text.length){ 
        const char = text.charAt(index);
        
        if (char === '\n') {
            textElement.innerHTML += '<br>';
        } 
        else {
            textElement.innerHTML += char;
        }
        
        index++;
        setTimeout(typeWriter, 80); 
    }
    else{
        setTimeout(Reset, 1000); 
    }
}
function Reset(){
    return;
        index = 0;
    textElement.innerHTML = "";
    typeWriter();
}
typeWriter(); 








document.querySelectorAll('.skill .name').forEach(text => {
    const parentWidth = text.parentElement.clientWidth;

    // 試しに大きめでセット
    text.style.fontSize = "100%";

    // あふれるなら縮小
    const scale = Math.min(1, parentWidth / text.scrollWidth);
    text.style.fontSize = (scale * 95) + "%";
});