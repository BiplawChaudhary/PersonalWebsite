function more_post1(){
   var para= document.getElementById("post1");
   var btn=document.getElementById("btn1");

   if(para.style.display == "block"){
       btn.innerHTML="Show more";
       para.style.display="none";
   }else{
       btn.innerHTML="Show sess";
       para.style.display="block";

   }

}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showMenu() {
    document.getElementById("mobileMenu").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show');
    }
    }
}