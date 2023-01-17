let ConditionsArr = document.querySelectorAll(".Conditions");
let InputArr = document.querySelectorAll("#LoginUser,#PasswordUser,#PasswordConfirmation");

function ValidForm(id){
    for(let Condition in ConditionsArr[id].children){
        if(Condition <= ConditionsArr[id].children.length ){
            
            if(id == 0){
                ConditionsArr[id].style.display = "flex";
                console.log(Condition + " "+id)
                if(Condition == 0){
                    
                    if(InputArr[id].value.match(/[a-zA-Z@+-_]+/)){
                        ConditionsArr[id].children[Condition].firstChild.src = "./Iteam/Ok.png";
                        ConditionsArr[id].children[Condition].style.color = "#3CA255";
                    }else{
                        ConditionsArr[id].children[Condition].firstChild.src = "./Iteam/X.png";
                        ConditionsArr[id].children[Condition].style.color = "rgba(238, 34, 34, 0.9)";
                    }
                    
                }
                if(Condition == 1){
                    if(InputArr[id].value.length <= 150){
                        ConditionsArr[id].children[Condition].firstChild.src = "./Iteam/Ok.png";
                        ConditionsArr[id].children[Condition].style.color = "#3CA255";
                    }else{
                        ConditionsArr[id].children[Condition].firstChild.src = "./Iteam/X.png";
                        ConditionsArr[id].children[Condition].style.color = "rgba(238, 34, 34, 0.9)";
                    }
                }
            }
            if(id == 1){
                console.log(Condition + " "+id)
                if(Condition == 0){
                    ConditionsArr[id].style.display = "flex";
                    if(InputArr[id].value.length >= 8){
                        ConditionsArr[id].children[Condition].firstChild.src = "./Iteam/Ok.png";
                        ConditionsArr[id].children[Condition].style.color = "#3CA255";
                    }else{
                        ConditionsArr[id].children[Condition].firstChild.src = "./Iteam/X.png";
                        ConditionsArr[id].children[Condition].style.color = "rgba(238, 34, 34, 0.9)";
                    }
                    
                }
                if(Condition == 1){
                    if(InputArr[id].value.match(/^([a-zA-Zа-яёА-ЯЁ])+$/)){
                        ConditionsArr[id].children[Condition].firstChild.src = "./Iteam/Ok.png";
                        ConditionsArr[id].children[Condition].style.color = "#3CA255";
                    }else{
                        ConditionsArr[id].children[Condition].firstChild.src = "./Iteam/X.png";
                        ConditionsArr[id].children[Condition].style.color = "rgba(238, 34, 34, 0.9)";
                    }
                }
                if(Condition == 2){
                    if(InputArr[id].value != InputArr[0].value){
                        ConditionsArr[id].children[Condition].firstChild.src = "./Iteam/Ok.png";
                        ConditionsArr[id].children[Condition].style.color = "#3CA255";
                    }else{
                        ConditionsArr[id].children[Condition].firstChild.src = "./Iteam/X.png";
                        ConditionsArr[id].children[Condition].style.color = "rgba(238, 34, 34, 0.9)";
                    }
                }
            }
            console.log(Condition + " "+id)
            if(id == 2){
                console.log(Condition + " "+id)
                ConditionsArr[id].style.display = "flex"
                if(Condition == 0){
                    if(InputArr[id].value == InputArr[1].value){
                        ConditionsArr[id].children[Condition].firstChild.src = "./Iteam/Ok.png";
                        ConditionsArr[id].children[Condition].style.color = "#3CA255";
                        InputArr[id].style.color = "#3CA255";
                        InputArr[id].style.borderColor = "#3CA255";
                    }else{
                        ConditionsArr[id].children[Condition].firstChild.src = "./Iteam/X.png";
                        ConditionsArr[id].children[Condition].style.color = "rgba(238, 34, 34, 0.9)";
                        InputArr[id].style.color = "rgba(238, 34, 34, 0.9)";
                        InputArr[id].style.borderColor = "rgba(238, 34, 34, 0.9)";
                    }
                    
                }
            }
        }
    }
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
document.querySelector(".sbmButton").addEventListener("click",function(event){

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
        InputAllArr[5].value = "";
    }
});