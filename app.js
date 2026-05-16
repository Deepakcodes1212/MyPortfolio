const sideBar=document.querySelector(".sideBar");
const leftContainer=document.querySelector(".leftContainer");
let sidebarState=true;
sideBar.addEventListener("click",function(){
    if(sidebarState==true){
        leftContainer.style.visibility='hidden';
        sidebarState=false;

    }
    else{
        leftContainer.style.visibility='visible';
        sidebarState=true;

    }





})