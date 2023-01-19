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