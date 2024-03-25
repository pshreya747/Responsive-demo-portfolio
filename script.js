function opentab(tabname) {
    var tablinks = document.querySelectorAll(".tab-links");
    var tabcontents = document.querySelectorAll(".tab-contents");

    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    document.getElementById(tabname).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}


var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}