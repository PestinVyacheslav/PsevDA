let postArr = document.querySelectorAll(".iteam");
let CategoryPostArr = document.querySelectorAll(".down");

let selectCategroy = document.querySelectorAll(".main-categorys span");

function searechPost (slCat){
    for(let keyArr in postArr){
        
        if(keyArr <= 5){
        
        console.log(keyArr);
            for(let category of  CategoryPostArr[keyArr].children){
                if(category.innerHTML === slCat.innerHTML){
                    postArr[keyArr].style.display = "flex";
                    break;
                }else{
                    postArr[keyArr].style.display = "none";
                }
            }
        }
    };
};

for(let btn of selectCategroy){
    btn.addEventListener("click", function(){
        searechPost (btn);
    });
};


let ovr = document.querySelector(".ovrl");
let modelview = document.querySelector(".modelview");
let OpenModelview = document.querySelector(".head>div>a:first-child");
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
