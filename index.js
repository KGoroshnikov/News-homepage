
function reloadPage(){
  location.reload();
}

let activeMenu = false;
function menuClicked(){
  activeMenu = !activeMenu;
  if (activeMenu){
    document.getElementById("blck").style.display = "block";
    document.getElementById("mobHeader").style.display = "flex";
  }
  else {
    document.getElementById("blck").style.display = "none";
    document.getElementById("mobHeader").style.display = "none";
  }
}