! function(a) {
    "use strict";
    a(window).scroll(function() {
        function e(e) {
            var t = a(window).scrollTop(),
                s = t + a(window).height(),
                n = a(e).offset().top;
            n + a(e).height();
            return s >= n
        }
        var t = a(window).scrollTop();
        t > 50 ? a(".brandbx").addClass("affix") : a(".brandbx").removeClass("affix"), t > 700 ? a(".guideline").find(".single-page-nav").css({
            opacity: "1",
            "-webkit-transition": "all 0.4s linear",
            "-moz-transition": "all 0.4s linear",
            "-ms-transition": "all 0.4s linear"
        }) : a(".guideline").find(".single-page-nav").css({
            opacity: "0",
            "-webkit-transition": "all 0.1s linear",
            "-moz-transition": "all 0.4s linear",
            "-ms-transition": "all 0.4s linear"
        }), a(".counter").each(function() {
            var e = a(this),
                t = e.attr("data-count");
            a({
                countNum: e.text()
            }).animate({
                countNum: t
            }, {
                duration: 400,
                easing: "linear",
                step: function() {
                    e.text(Math.floor(this.countNum))
                },
                complete: function() {
                    e.text(this.countNum)
                }
            })
        }), a(".object").each(function() {
            e(this) === !0 && a(this).addClass("active")
        }), a("#quality_saftey").each(function() {
            e(this) === !0 && a(this).addClass("active")
        }), a(".objectrt").each(function() {
            e(this) === !0 && a(this).addClass("active")
        }), a(".objectrt1").each(function() {
            e(this) === !0 && a(this).addClass("active")
        }), a(".darkop").each(function() {
            e(this) === !0 && a(this).addClass("active")
        }), a(".sm_bar").each(function() {
            e(this) === !0 && a(this).addClass("active")
        }), a(".num").each(function() {
            e(this) === !0 && a(this).addClass("counter")
        }), a("#our_clients").each(function() {
            e(this) === !0 && a(this).addClass("active")
        });
        var t = a(window).scrollTop();
        a(".poster_wrap").css({
            transform: "scale(" + (900 + t / 5) / 900 + "," + (700 + t / 5) / 700 + ")"
        }), a(".headbanner").css("opacity", 1 - t / 1200)
    }), a(document).ready(function() {
        /* for testi slider*/
                jQuery('.carousel').carousel();
                
        a("#toggle").click(function() {
            a(this).hasClass("active") ? a("#overlay").toggleClass("open") : a("#overlay").toggleClass("open")
        }), a("#cl_menu").click(function() {
            a(this).hasClass("active") ? a("#overlay").toggleClass("open") : a("#overlay").toggleClass("open")
        }), a(".scroll-top").click(function() {
            a("body,html").animate({
                scrollTop: 0
            }, 2e3)
        }), a(".start_proj").click(function() {
            a("#pro_inquiry").addClass("active")
        }), a(".start_proj").click(function() {
            a(".mob_form").addClass("active")
        }), a(".back_btn").click(function() {
            a("#pro_inquiry").removeClass("active")
        }), a(".back_btn").click(function() {
            a(".mob_form").removeClass("active")
        }), setInterval(function() {
            a(".acme_master").removeClass("hide")
        }, 5e3), setInterval(function() {
            a("#inner").removeClass("none")
        }, 2e3), setInterval(function() {
            a(".revelal_layer1").removeClass("hide")
        }, 4100), setInterval(function() {
            a("#preloader").addClass("hide")
        }, 4600), setInterval(function() {
            a(".headbanner").addClass("fix")
        }, 2e3), setInterval(function() {
            a(".bread").addClass("active")
        }, 1700), setInterval(function() {
            a(".sub_tit2").addClass("active")
        }, 13e3), setInterval(function() {
            a(".pos_title").addClass("active")
        }, 3e3), setInterval(function() {
            a(".para1").addClass("active")
        }, 4400), setInterval(function() {
            a(".para2").addClass("active")
        }, 4600), setInterval(function() {
            a("#alllocation").addClass("active")
        }, 4600), setInterval(function() {
            a("#brand_name_bar.objectrt").addClass("active")
        }, 2200), setInterval(function() {
            a(".scroll_down").addClass("active")
        }, 5e3), setInterval(function() {
            a(".modal1").addClass("active")
        }, 3e3), setTimeout(function() {
            a(".pages").css("display", "block")
        }, 5e3), setTimeout(function() {
            a(".acme_zoom_slider .dot-nav").find("span.active").find(".ylbar").addClass("active fast")
        }, 6e3), setTimeout(function() {
            a(".load_object").addClass("active")
        }, 2e3);

        //  setTimeout(function() {
        //  jQuery(".project-slide .hero_video").get(0).play();
        // }, 5000);
        //  setTimeout(function() {
        // jQuery(".project-slide .hero_video").get(1).play();
        // }, 10000);
        //   setTimeout(function() {
        // jQuery(".project-slide .hero_video").get(2).play();
        // }, 15000);
        //    setTimeout(function() {
        // jQuery(".project-slide .hero_video").get(3).play();
        // }, 20000);

        var e = 0,
            t = 0,
            s = 0;
        a("#sld1").click(function() {
            0 == e && (n.scramble(3e3, 20, "numbers", !0), i.scramble(3e3, 20, "numbers", !0), c.scramble(3e3, 20, "alphabet", !0), l.scramble(3e3, 20, "numbers", !0), e = 1)
        }), a("#sld2").click(function() {
            0 == t && (o.scramble(2e3, 20, "alphabet", !0), r.scramble(2250, 20, "alphabet", !0), m.scramble(2500, 20, "alphabet", !0), t = 1)
        }), a("#sld3").click(function() {
            0 == s && (u.scramble(2e3, 20, "numbers", !0), d.scramble(2250, 20, "numbers", !0), b.scramble(2250, 20, "alphabet", !0), f.scramble(2500, 20, "alphabet", !0), v.scramble(2500, 20, "alphabet", !0), s = 1)
        });
        var n = a(".scramble"),
            i = a(".scramble1"),
            c = a(".scramble2"),
            l = a(".scramble3"),
            o = a(".scramble4"),
            r = a(".scramble5"),
            m = a(".scramble6"),
            u = a(".scramble7"),
            d = a(".scramble8"),
            b = a(".scramble9"),
            f = a(".scramble10"),
            v = a(".scramble11");
        setTimeout(function() {
            n.scramble(1e3, 20, "numbers", !0), i.scramble(1250, 20, "numbers", !0), c.scramble(1250, 20, "alphabet", !0), l.scramble(1500, 20, "numbers", !0), e = 1
        }, 4700);
        a("#item51").hover(function() {
            a(".ftr_bx").css("background-image", 'url("../acme/img/all_project/XL-Catlin-2560x1440.jpg")')
        }), a("#item52").hover(function() {
            a(".ftr_bx").css("background-image", 'url("../acme/img/all_project/Astra-Zeneca-2560x1440.jpg")')
        }), a("#item53").hover(function() {
            a(".ftr_bx").css("background-image", 'url("../acme/img/all_project/HPEC2-2560x1440.jpg")')
        }), a("#item54").hover(function() {
            a(".ftr_bx").css("background-image", 'url("../acme/img/HP-Chennai/HP-Chennai-2560x1440.jpg")')
        }), a("#item55").hover(function() {
            a(".ftr_bx").css("background-image", 'url("../acme/img/Genpact/Genpact-Cover-2560x1440.jpg")')
        }), a("#item56").hover(function() {
            a(".ftr_bx").css("background-image", 'url("../acme/img/IBNI/IBNI-2560x1440.jpg")')
        }), a(".overlay-menu li a").click(function() {
            a(".overlay-menu li a").removeClass("active"), a(this).addClass("active")
        }), a(".headbanner").addClass("active"), a("body").on("contextmenu", function(a) {
            return !1
        });
        var h = a(window).width();
        767 > h && a(".desk_form").remove()
    }), a(window).resize(function() {
        var e = a(window).width();
        767 > e && a(".desk_form").remove()
    })
}(jQuery);