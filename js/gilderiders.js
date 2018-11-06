// function classToggle() {
//     const navs = document.querySelectorAll('.menu')      
//     navs.forEach(nav => nav.classList.toggle('menutoggle'));
   
//    //document.getElementById("menunav").style.width="100px";
//    document.getElementById("menunav").style.height="210px";
//    document.getElementById("menunav").style.visibility="visible";
//    document.getElementById("menuicon").innerHTML = '<i class="fas fa-times"></i>';
// }

// document.querySelector(".menubar").addEventListener('click', classToggle);
var menuOpen = false;

function openclose() {
   if (!menuOpen) {
    document.getElementById("menunav").style.height="210px";
    document.getElementById("menunav").style.visibility="visible";
    document.getElementById("menuicon").innerHTML = '<i class="fas fa-times"></i>';
    menuOpen = true;
   } else {
    document.getElementById("menunav").style.height="0";
    document.getElementById("menunav").style.visibility="hidden";
    document.getElementById("menuicon").innerHTML = '<i class="fas fa-bars"></i>'; 
    menuOpen = false;
   }
}

document.querySelector(".menubar").addEventListener('click', openclose);



