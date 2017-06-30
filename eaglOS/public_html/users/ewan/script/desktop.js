var bar = document.getElementById("bar");
var menu = document.getElementById("menu");
var isvisible = false;
document.getElementById("menu").style.visibility = "hidden";
bar.addEventListener('click', function(){
      if (isvisible === false){
    document.getElementById("menu").style.visibility = "visible";
    isvisible = true;
    } else{
      document.getElementById("menu").style.visibility = "hidden"; 
      isvisible = false;
    }
}); 
menu.addEventListener('click', function(){
    if (isvisible === false){
    document.getElementById("menu").style.visibility = "visible";
    isvisible = true;
    } else{
      document.getElementById("menu").style.visibility = "hidden"; 
      isvisible = false;
    }
});