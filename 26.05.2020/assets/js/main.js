const header = {
    init: function() {
        this.clickShowMenu('.humbeger', '.header__back', 'showMenu');
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
header.fixedNavigation();

$('#carouselFade').carousel();









const tabs = {
    init: function() {
        this.tab('  .products-featured', '.tab__button', '.tab__panel');
    },
    tab: function(wrap, tabsButton, tabsItem) {
        const self = document.querySelector(wrap);
        if (self == null) return;
        const btns = self.querySelectorAll(tabsButton);
        const items = self.querySelectorAll(tabsItem);
        btns[0].classList.add('active');
        items[0].classList.add('active');
        btns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                btns.forEach(btn => btn.classList.remove('active'));
                items.forEach(item => item.classList.remove('active'));
                btns[index].classList.add('active');
                items[index].classList.add('active');
            })
        });
    }
}
tabs.init();