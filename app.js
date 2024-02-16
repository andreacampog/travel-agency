const htmlElement = document.querySelector("html");
const toogleButtonLgMoon = document.querySelector("#toogle-lg-moon");
const toogleButtonLgSun = document.querySelector("#toogle-lg-sun");
const toogleButtonSmMoon = document.querySelector("#toogle-sm-moon");
const toogleButtonSmSun = document.querySelector("#toogle-sm-sun");


toogleButtonSmMoon.addEventListener("click",function(){  
    htmlElement.classList.add("dark");    
});


toogleButtonSmSun.addEventListener("click",function(){  
        htmlElement.classList.remove("dark");        
});

    
toogleButtonLgMoon.addEventListener("click",function(){  
    htmlElement.classList.add("dark");    
});

toogleButtonLgSun.addEventListener("click",function(){  
    htmlElement.classList.remove("dark");        
});

