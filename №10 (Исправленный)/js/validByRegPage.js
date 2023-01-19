let submit = document.querySelector("form button");
let check = document.querySelector("#cb");

function disabledBtn(){
    if(check.checked){
        submit.disabled = false;
    }else{
        submit.disabled = true;
    }
};

window.onload = function(){
    disabledBtn();
};
check.onclick = function(){
    disabledBtn();
};


let ConditionsArr = document.querySelectorAll(".Conditions");
let InputArr = document.querySelectorAll("#loginPerson,#passwordPerson,#requaredPasswordPerson");

function ValidForm(id){            
            if(id == 0 || id == "reload"){
                ConditionsArr[0].style.display = "flex";                    
                    if(InputArr[0].value.match(/[a-zA-Z@+-_]+/)){
                        ConditionsArr[0].children[0].firstChild.src = "./css/Iteam/Ok.png";
                        ConditionsArr[0].children[0].style.color = "#3CA255";
                    }else{
                        ConditionsArr[0].children[0].firstChild.src = "./css/Iteam/X.png";
                        ConditionsArr[0].children[0].style.color = "rgba(238, 34, 34, 0.9)";
                    }
                    if(InputArr[0].value.length <= 150){
                        ConditionsArr[0].children[1].firstChild.src = "./css/Iteam/Ok.png";
                        ConditionsArr[0].children[1].style.color = "#3CA255";
                    }else{
                        ConditionsArr[0].children[1].firstChild.src = "./css/Iteam/X.png";
                        ConditionsArr[0].children[1].style.color = "rgba(238, 34, 34, 0.9)";
                    }
            }
            if(id == 1 || id == "reload"){
                    ConditionsArr[1].style.display = "flex";
                    if(InputArr[1].value.length >= 8){
                        ConditionsArr[1].children[0].firstChild.src = "./css/Iteam/Ok.png";
                        ConditionsArr[1].children[0].style.color = "#3CA255";
                    }else{
                        ConditionsArr[1].children[0].firstChild.src = "./css/Iteam/X.png";
                        ConditionsArr[1].children[0].style.color = "rgba(238, 34, 34, 0.9)";
                    }
                    if(InputArr[1].value.match(/^([a-zA-Zа-яёА-ЯЁ])+$/)){
                        ConditionsArr[1].children[1].firstChild.src = "./css/Iteam/Ok.png";
                        ConditionsArr[1].children[1].style.color = "#3CA255";
                    }else{
                        ConditionsArr[1].children[1].firstChild.src = "./css/Iteam/X.png";
                        ConditionsArr[1].children[1].style.color = "rgba(238, 34, 34, 0.9)";
                    }
                    if(InputArr[1].value != InputArr[0].value){
                        ConditionsArr[1].children[2].firstChild.src = "./css/Iteam/Ok.png";
                        ConditionsArr[1].children[2].style.color = "#3CA255";
                    }else{
                        ConditionsArr[1].children[2].firstChild.src = "./css/Iteam/X.png";
                        ConditionsArr[1].children[2].style.color = "rgba(238, 34, 34, 0.9)";
                    }
            }
            if(id == 2 || id == "reload"){
                ConditionsArr[2].style.display = "flex"
                    if(InputArr[2].value == InputArr[1].value){
                        ConditionsArr[2].children[0].firstChild.src = "./css/Iteam/Ok.png";
                        ConditionsArr[2].children[0].style.color = "#3CA255";
                        InputArr[2].style.color = "#3CA255";
                        InputArr[2].style.borderColor = "#3CA255";
                    }else{
                        ConditionsArr[2].children[0].firstChild.src = "./css/Iteam/X.png";
                        ConditionsArr[2].children[0].style.color = "rgba(238, 34, 34, 0.9)";
                        InputArr[2].style.color = "rgba(238, 34, 34, 0.9)";
                        InputArr[2].style.borderColor = "rgba(238, 34, 34, 0.9)";
                    }
            }
        
    
};

window.onload = function(){
    ValidForm("reload");
};

for(let idInput in InputArr){
    if(idInput <=InputArr.length ){
        console.log(idInput)
        InputArr[idInput].addEventListener("keyup", function(){
            ValidForm(idInput)
        });
    }
}

function checkValidOrNot (){
    let result = "not";
    let i = 0;
        for(let Conditions of ConditionsArr){
            for(let Condition of Conditions.children){
                if(Condition.style.color === "rgb(60, 162, 85)"){
                    i++;
                }else{
                    i--;
                }
            }
        }

        if(i==6){
            return result="ok";
        }else{
            return result;
        }

}

let InputAllArr = document.querySelectorAll("input");
let sbuForm = document.querySelector(".sbmButton");
sbuForm.addEventListener("click",function(event){

    event.preventDefault();
    console.log(checkValidOrNot ());
    if(checkValidOrNot () == "ok"){
        let PreRegistation = {
            NameUser: InputAllArr[0].value,
            FamilyUser: InputAllArr[1].value,
            LoginUser: InputAllArr[2].value,
            MailUser: InputAllArr[3].value,
            PasswordUser: InputAllArr[4].value
        };
        localStorage.setItem("PreRegistation", JSON.stringify(PreRegistation));
    }
    
});

window.addEventListener("load", function(){
    let PreRegistation = JSON.parse(localStorage.getItem("PreRegistation"));
    if (PreRegistation) {
        InputAllArr[0].value = PreRegistation.NameUser;
        InputAllArr[1].value = PreRegistation.FamilyUser;
        InputAllArr[2].value = PreRegistation.LoginUser;
        InputAllArr[3].value = PreRegistation.MailUser;
        InputAllArr[4].value = PreRegistation.PasswordUser;
    }
});