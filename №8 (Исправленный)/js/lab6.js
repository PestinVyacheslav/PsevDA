let MasivPostov = document.querySelectorAll(".iteam");
let MasivCategory= document.querySelectorAll(".down");
let MasivViboraCategory = document.querySelectorAll(".list a");

function searechPost (slCat){
    for(let keyArr in MasivPostov){
        if(keyArr<MasivPostov.length){
            for(let category of  MasivCategory[keyArr].children){
                if(category.innerHTML === slCat.innerHTML){
                    MasivPostov[keyArr].style.display = "block";
                    break;
                }else{
                    MasivPostov[keyArr].style.display = "none";
                }
            }
        }
    };
};

for(let btn of MasivViboraCategory){
    btn.addEventListener("click", function(e){
        e.preventDefault();
        searechPost (btn);
    });
};


let ovr = document.querySelector(".ovrl");
let modelview = document.querySelector(".modelview");
let OpenModelview = document.querySelector("nav a");
let CloseModelview = document.querySelector(".topElements img");
let dg = document.querySelector(".dg");

dg.onmousedown = function(event) {

let shiftX = event.clientX - modelview.getBoundingClientRect().left;
let shiftY = event.clientY - modelview.getBoundingClientRect().top;

document.body.append(modelview);

moveAt(event.pageX, event.pageY);
function moveAt(pageX, pageY) {
    modelview.style.left = pageX - shiftX + 'px';
    modelview.style.top = pageY - shiftY + 'px';
}

function onMouseMove(event) {
moveAt(event.pageX, event.pageY);
}
document.addEventListener('mousemove', onMouseMove);
dg.onmouseup = function() {
document.removeEventListener('mousemove', onMouseMove);
dg.onmouseup = null;
};

};

dg.ondragstart = function() {
return false;
};

CloseModelview.onclick = function(){
    modelview.style.display = ovr.style.display = "none";
    document.querySelector("body").style.userSelect = "unset"; 
};

OpenModelview.onclick = function(event){
    event.preventDefault();
    modelview.style.display = ovr.style.display = "flex";
    document.querySelector("body").style.userSelect = "none";
};
