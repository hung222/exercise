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





window.onload = (() => {
    if (navigation = {
            init: function() {
                this.openClose(), this.openCloseSub(".menu__link", ".menu__sub"),
                    this.openCloseSub(".submenu__link", ".submenu__submenu2"),

                    this.fixedNavigation()
            },
            openClose: function() {
                const e = document.querySelector(".menu__moblie"),
                    t = document.querySelector(".navigation__button"),
                    n = document.querySelector("#close__menu");
                t.addEventListener("click", () => { e.classList.add("click"), n.classList.add("show") }), n.addEventListener("click", () => { e.classList.remove("click"), n.classList.remove("show") })
            },
            openCloseSub: function(e, t) {
                const n = document.querySelectorAll(e),
                    o = document.querySelectorAll(t);
                n.forEach(e => e.addEventListener("click", e => { o.forEach(e => e.classList.remove("active")), e.target.parentNode.querySelector(t).classList.toggle("active") }))
            },
            fixedNavigation: function() {
                const e = document.querySelector(".navigation");
                window.addEventListener("scroll", () => { window.scrollY > 400 ? e.classList.add("fixed") : e.classList.remove("fixed") })
            }
        }, navigation.init(), scrollOnTop = {
            init: function() { this.show() },
            show: function() {
                const e = document.querySelector(".scrollOnTop");
                window.addEventListener("scroll", () => { window.scrollY > 400 ? e.classList.add("show") : e.classList.remove("show") })
            }
        }, scrollOnTop.init(), slider = {
            init: function() { this.slide() },
            slide: function() {
                const e = document.querySelectorAll(".slider__item");
                if (0 == e.length) return;
                let t = 0;
                setInterval(function() {
                    e.forEach(e => e.classList.remove("active"));
                    let n = ++t % e.length;
                    e[n].classList.add("active")
                }, 9e3)
            }
        }, slider.init(), lazyLoad = {
            init: function() { this.load() },
            load: function() {
                const e = document.querySelectorAll("[data-src]");
                const t = new IntersectionObserver(e => {
                    e.forEach(e => {
                        e.isIntersecting && (! function(e) {
                            const t = e.getAttribute("data-src");
                            t && (e.src = t)
                        }(e.target), t.unobserve(e.target))
                    })
                }, { threshold: 0, rootMargin: "0px 0px 50px 0px" });
                e.forEach(e => { t.observe(e) })
            }
        }, lazyLoad.init(), {
            init: function() { this.clickButton(".guest") },
            clickButton: function(e) {
                const t = document.querySelectorAll(".guest__item");
                if (0 == t.length) return;
                const n = document.querySelector(e).querySelector("#wrap"),
                    o = document.getElementById("next"),
                    i = document.getElementById("prev");
                let r, c, s = !1;
                n.addEventListener("mousedown", e => { s = !0, r = e.pageX - n.offsetLeft, c = n.scrollLeft, n.style.scrollBehavior = "unset" }), n.addEventListener("mouseleave", () => { s = !1 }), n.addEventListener("mouseup", () => { s = !1 }), n.addEventListener("mousemove", e => {
                    if (!s) return;
                    e.preventDefault();
                    const t = e.pageX - n.offsetLeft - r;
                    n.scrollLeft = c - t
                });
                let l = 0,
                    a = t[0].offsetWidth;
                n.scrollLeft = `${a*l}`, o.addEventListener("click", () => { l >= t.length - 1 || (l++, n.style.scrollBehavior = "smooth", n.scrollLeft = `${a*l}`) }), i.addEventListener("click", () => { l <= 0 || (l--, n.style.scrollBehavior = "smooth", n.scrollLeft = `${a*l}`) }), setInterval(function() { l++, l %= t.length, n.style.scrollBehavior = "smooth", n.scrollLeft = `${a*l}` }, 5e3)
            }
        }.init(), {
            init: function() { this.clickBtn() },
            clickBtn: function() {
                const e = document.querySelectorAll(".loadRequest"),
                    t = document.querySelector(".loadmore");
                let n = e.length;
                null !== t && t.addEventListener("click", () => {
                    (n -= 6) <= 0 && (t.style.display = "none");
                    const o = new IntersectionObserver(e => {
                        e.forEach(e => {
                            e.isIntersecting && (! function(e) {
                                const t = e.getAttribute("data-load");
                                t && (e.src = t)
                            }(e.target), o.unobserve(e.target))
                        })
                    }, { threshold: 1, rootMargin: "100px 100px 100px 100px" });
                    for (let t = 0; t <= n + 6; t++) o.observe(e[t])
                })
            }
        }.init(), null !== document.querySelector(".grid")) {
        var e = new Isotope(".grid", { itemSelector: ".element-item", layoutMode: "masonry", transitionDuration: 1e3, hiddenStyle: { opacity: 0 }, visibleStyle: { opacity: 1 } }),
            t = { numberGreaterThan50: function(e) { var t = e.querySelector(".number").textContent; return parseInt(t, 10) > 50 }, ium: function(e) { return e.querySelector(".name").textContent.match(/ium$/) } };
        document.querySelector(".filters-button-group").addEventListener("click", function(n) {
            if (matchesSelector(n.target, "button")) {
                var o = n.target.getAttribute("data-filter");
                o = t[o] || o, e.arrange({ filter: o })
            }
        });
        for (var n = document.querySelectorAll(".button-group"), o = 0, i = n.length; o < i; o++) { r(n[o]) }
    }

    function r(e) { e.addEventListener("click", function(t) { matchesSelector(t.target, "button") && (e.querySelector(".is-checked").classList.remove("is-checked"), t.target.classList.add("is-checked")) }) }
});