const sideBarBtn=document.querySelector(".sideBarToggle");
const leftContainer=document.querySelector(".leftContainer");

if (sideBarBtn && leftContainer) {

    sideBarBtn.addEventListener("click", function() {
        
        
        leftContainer.classList.toggle("collapsed");

       
        const isExpanded = sideBarBtn.getAttribute("aria-expanded") === "true";
        sideBarBtn.setAttribute("aria-expanded", !isExpanded);
    });
}