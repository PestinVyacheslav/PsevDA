let XML = new XMLHttpRequest();
let Img = document.querySelector("#ImgNewPublush");
let winfow = document.querySelector(".WindowsForImg");
let fakeBtn = document.querySelector(".addImgButton");
let indicatorLoad = document.querySelector(".progress");



Img.addEventListener("change", function(){

    let iteam = new FileReader();
   
    XML.open('POST', 'https://isidea.ru/rgups_file.php', true);
    XML.upload.onprogress = function(e){
        indicatorLoad.style.width = ((e.loaded/Img.files[0].size)*100) + "%";
    };
    XML.upload.onload = function(){        
        iteam.onload = function(e){
            fakeBtn.classList.add("ok");
            fakeBtn.firstElementChild.lastElementChild.innerHTML = Img.files[0].name + " [" + ((Img.files[0].size/1024/1024).toFixed(2)) + "Мб]";
            winfow.style.display = "block";
            winfow.src = e.target.result;
        }      
        iteam.readAsDataURL(Img.files[0]); 
    }    
 XML.send(Img.files[0]);
});