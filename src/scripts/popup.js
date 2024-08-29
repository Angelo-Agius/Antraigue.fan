document.querySelector("#close-popup").addEventListener("click", function(){
    document.querySelector(".popup-frame").style.display = "none";
    document.querySelector("body").style.overflowY = "visible";
    document.querySelector("custom-header").style.filter = "none";
    document.querySelector("custom-footer").style.filter = "none";
    document.querySelector(".main-page").style.filter = "none";
});