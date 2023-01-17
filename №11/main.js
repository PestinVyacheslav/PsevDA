let Inputs = document.querySelectorAll("input[rel=phone]");

    for(let input of Inputs){
        input.oninput = function(){
            let replaceInput = input.value.replace(/[\D]/g, "");

            input.value = "+";    
            if(replaceInput.substr(0,1) != 7){
                input.value += "7";
            }    
            else{
                input.value += replaceInput.substr(0,1);
            }
            if(replaceInput.length > 1){
                input.value += " "+replaceInput.substr(1,3);
            }    
            if(replaceInput.length > 4){
                input.value += " " + replaceInput.substr(4,3);
            }    
            if(replaceInput.length > 7){
                input.value += " " + replaceInput.substr(7,2);
            }    
            if(replaceInput.length > 9){
                input.value += " " + replaceInput.substr(9,2);
            }
        }
    }
