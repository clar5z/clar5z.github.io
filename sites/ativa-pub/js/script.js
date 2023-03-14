//menu
const btnMenu = document.getElementById("icon-menu");
const menuList = document.getElementById("menu-list");

menuList.style.display = "none";

btnMenu.addEventListener("click", (event) => {
    if (menuList.style.display == "none") {
        menuList.style.display = "block";
    } else {
        menuList.style.display = "none";
    }
})

//open/close
var checkOpenStatus = function () {
    var d = new Date();
    var date = d.getHours();
    var day = d.getDay();
    if ((date > 9) && (date < 20) && (day != 0)) {
        y = "<span style=\"color:#07ed11\">We're Open!</span>";
    } else {
        y = "<span style=\"color:#fc4b1c\">Sorry we're Closed.</span>";
    }
    document.getElementById("open-close").innerHTML = y;
    setTimeout(checkOpenStatus,15000);
};

checkOpenStatus();