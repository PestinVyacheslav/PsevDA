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