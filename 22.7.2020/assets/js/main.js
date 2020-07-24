const header = {
    init: function() {
        this.clickShowMenu('.humbeger', '.header__menu', 'showMenu');
    },
    clickShowMenu: function(button, menu, ClassShowMenu) {
        var btn = document.querySelector(button);
        var NavMenu = document.querySelector(menu);
        btn.addEventListener('click', () => {
            NavMenu.classList.toggle(ClassShowMenu);
        });
    }
}
header.init();
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-85px";

    }
}