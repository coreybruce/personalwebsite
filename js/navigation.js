$(function(){
  $("#nav-placeholder").load("/nav.html");
});
function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '10px';
  }
}

function navhome() {
  window.location.href = "/index.html";
}
function navdesktopapps() {
  window.location.href = "/software.html";
}
function navnews() {
  window.location.href = "/news.html";
}
function navdocumentation() {
  window.location.href = "/documentation.html";
}
$(function(){
  $("#docnav-placeholder").load("/docnav.html");
});