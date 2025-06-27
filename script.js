// toggle for dropdown
function toggleUserMenu() {
    document.getElementById("subMenu").classList.toggle("open-menu");
}

// for closing dropdown menu

window.addEventListener("click", function (e) {
    const icon = document.querySelector(".user-icon");
    const menu = document.getElementById("subMenu");

    if(!icon.contains(e.target)) {
        menu.classList.remove("open.menu");
    }
});

// toggle for small screens

function toggleMenu() {
    const menuList = document.getElementById("menuList");
    menuList.classList.toggle("open");
}