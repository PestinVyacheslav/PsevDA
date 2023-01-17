let XML = new XMLHttpRequest();
let Img = document.querySelector("#ImageIteam");
let winfow = document.querySelector(".WindowsForImg");
let fakeBtn = document.querySelector(".btnImgFake");
let indicatorLoad = document.querySelector(".indicator");



Img.addEventListener("change", function(){

    let iteam = new FileReader();
   
    XML.open('POST', 'https://isidea.ru/rgups_file.php', true);
    XML.upload.onprogress = function(e){
        indicatorLoad.style.width = ((e.loaded/Img.files[0].size)*100) + "%";
    };
    XML.upload.onload = function(){        
        iteam.onload = function(e){
            fakeBtn.style.borderColor = fakeBtn.firstElementChild.lastElementChild.style.color = "#005F17";
            fakeBtn.firstElementChild.firstElementChild.style.fill = fakeBtn.firstElementChild.firstElementChild.style.stroke = "#005F17"
            fakeBtn.firstElementChild.lastElementChild.innerText = Img.files[0].name + " [" + ((Img.files[0].size/1024/1024).toFixed(2)) + "Мб]";
            winfow.lastElementChild.src = e.target.result;
        }      
        iteam.readAsDataURL(Img.files[0]); 
    }    
 XML.send(Img.files[0]);
});