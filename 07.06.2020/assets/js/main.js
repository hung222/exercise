 document.addEventListener("DOMContentLoaded", function() {
     var menu = document.querySelectorAll('div.header');
     var menu = menu[0];
     //Truy xuất div menu
     var trangthai = "duoi300";
     window.addEventListener("scroll", function() {
         var x = pageYOffset;
         if (x > 300) {
             if (trangthai == "duoi300") {
                 trangthai = "tren300";
                 menu.classList.add('menutora');
             }
         } else {
             if (trangthai == "tren300") {
                 menu.classList.remove('menutora');
                 trangthai = "duoi300";
             }
         }

     })
 })


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