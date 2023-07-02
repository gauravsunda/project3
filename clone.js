var moreIcon = document.querySelector(".more");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
moreIcon.onclick = function(){
    sidebar.classList.toggle("mini-sidebar");
    container.classList.toggle("big-container");
}