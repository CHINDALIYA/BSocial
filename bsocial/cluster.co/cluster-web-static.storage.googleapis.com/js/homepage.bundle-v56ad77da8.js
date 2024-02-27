/*!
 * headroom.js v0.4.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

/*
 *	jQuery OwlCarousel v1.31
 *
 *	Copyright (c) 2013 Bartosz Wojciechowski
 *	http://www.owlgraphic.com/owlcarousel/
 *
 *	Licensed under MIT
 *
 */

/*!
    jQuery scrollTopTop v1.0 - 2013-03-15
    (c) 2013 Yang Zhao - geniuscarrier.com
    license: http://www.opensource.org/licenses/mit-license.php
*/

! function(t, e) {
    "use strict";

    function o(t) {
        this.callback = t, this.ticking = !1
    }

    function i(t) {
        if (arguments.length <= 0) throw new Error("Missing arguments in extend function");
        var e, o, n = t || {};
        for (o = 1; o < arguments.length; o++) {
            var s = arguments[o] || {};
            for (e in s) "object" == typeof n[e] ? n[e] = i(n[e], s[e]) : n[e] = n[e] || s[e]
        }
        return n
    }

    function n(t, e) {
        e = i(e, n.options), this.lastKnownScrollY = 0, this.elem = t, this.debouncer = new o(this.update.bind(this)), this.tolerance = e.tolerance, this.classes = e.classes, this.offset = e.offset, this.initialised = !1, this.onPin = e.onPin, this.onUnpin = e.onUnpin
    }
    var s = {
        bind: !! function() {}.bind,
        classList: "classList" in e.documentElement,
        rAF: !!(t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame)
    };
    t.requestAnimationFrame = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame, o.prototype = {
        constructor: o,
        update: function() {
            this.callback && this.callback(), this.ticking = !1
        },
        requestTick: function() {
            this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0)
        },
        handleEvent: function() {
            this.requestTick()
        }
    }, n.prototype = {
        constructor: n,
        init: function() {
            if (n.cutsTheMustard) return this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this
        },
        destroy: function() {
            var e = this.classes;
            this.initialised = !1, t.removeEventListener("scroll", this.debouncer, !1), this.elem.classList.remove(e.unpinned, e.pinned, e.initial)
        },
        attachEvent: function() {
            this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, t.addEventListener("scroll", this.debouncer, !1))
        },
        unpin: function() {
            var t = this.elem.classList,
                e = this.classes;
            !t.contains(e.pinned) && t.contains(e.unpinned) || (t.add(e.unpinned), t.remove(e.pinned), this.onUnpin && this.onUnpin.call(this))
        },
        pin: function() {
            var t = this.elem.classList,
                e = this.classes;
            t.contains(e.unpinned) && (t.remove(e.unpinned), t.add(e.pinned), this.onPin && this.onPin.call(this))
        },
        getScrollY: function() {
            return void 0 !== t.pageYOffset ? t.pageYOffset : (e.documentElement || e.body.parentNode || e.body).scrollTop
        },
        getViewportHeight: function() {
            return t.innerHeight || e.documentElement.clientHeight || e.body.clientHeight
        },
        getDocumentHeight: function() {
            var t = e.body,
                o = e.documentElement;
            return Math.max(t.scrollHeight, o.scrollHeight, t.offsetHeight, o.offsetHeight, t.clientHeight, o.clientHeight)
        },
        isOutOfBounds: function(t) {
            var e = t < 0,
                o = t + this.getViewportHeight() > this.getDocumentHeight();
            return e || o
        },
        toleranceExceeded: function(t) {
            return Math.abs(t - this.lastKnownScrollY) >= this.tolerance
        },
        shouldUnpin: function(t, e) {
            var o = t > this.lastKnownScrollY,
                i = t >= this.offset;
            return o && i && e
        },
        shouldPin: function(t, e) {
            var o = t < this.lastKnownScrollY,
                i = t <= this.offset;
            return o && e || i
        },
        update: function() {
            var t = this.getScrollY(),
                e = this.toleranceExceeded(t);
            this.isOutOfBounds(t) || (this.shouldUnpin(t, e) ? this.unpin() : this.shouldPin(t, e) && this.pin(), this.lastKnownScrollY = t)
        }
    }, n.options = {
        tolerance: 0,
        offset: 0,
        classes: {
            pinned: "headroom--pinned",
            unpinned: "headroom--unpinned",
            initial: "headroom"
        }
    }, n.cutsTheMustard = void 0 !== s && s.rAF && s.bind && s.classList, t.Headroom = n
}(window, document), define("https://cluster-web-static.storage.googleapis.com/js/homepage/headroom-v5d31d4fa5.js", function() {}), "function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function(t, e, o, i) {
        var n = {
            init: function(e, o) {
                var i = this;
                i.$elem = t(o), i.options = t.extend({}, t.fn.owlCarousel.options, i.$elem.data(), e), i.userOptions = e, i.loadContent()
            },
            loadContent: function() {
                function e(t) {
                    if ("function" == typeof o.options.jsonSuccess) o.options.jsonSuccess.apply(this, [t]);
                    else {
                        var e = "";
                        for (var i in t.owl) e += t.owl[i].item;
                        o.$elem.html(e)
                    }
                    o.logIn()
                }
                var o = this;
                if ("function" == typeof o.options.beforeInit && o.options.beforeInit.apply(this, [o.$elem]), "string" == typeof o.options.jsonPath) {
                    var i = o.options.jsonPath;
                    t.getJSON(i, e)
                } else o.logIn()
            },
            logIn: function(t) {
                var e = this;
                e.$elem.data("owl-originalStyles", e.$elem.attr("style")).data("owl-originalClasses", e.$elem.attr("class")), e.$elem.css({
                    opacity: 0
                }), e.orignalItems = e.options.items, e.checkBrowser(), e.wrapperWidth = 0, e.checkVisible, e.setVars()
            },
            setVars: function() {
                var t = this;
                if (0 === t.$elem.children().length) return !1;
                t.baseClass(), t.eventTypes(), t.$userItems = t.$elem.children(), t.itemsAmount = t.$userItems.length, t.wrapItems(), t.$owlItems = t.$elem.find(".owl-item"), t.$owlWrapper = t.$elem.find(".owl-wrapper"), t.playDirection = "next", t.prevItem = 0, t.prevArr = [0], t.currentItem = 0, t.customEvents(), t.onStartup()
            },
            onStartup: function() {
                var t = this;
                t.updateItems(), t.calculateAll(), t.buildControls(), t.updateControls(), t.response(), t.moveEvents(), t.stopOnHover(), t.owlStatus(), !1 !== t.options.transitionStyle && t.transitionTypes(t.options.transitionStyle), !0 === t.options.autoPlay && (t.options.autoPlay = 5e3), t.play(), t.$elem.find(".owl-wrapper").css("display", "block"), t.$elem.is(":visible") ? t.$elem.css("opacity", 1) : t.watchVisibility(), t.onstartup = !1, t.eachMoveUpdate(), "function" == typeof t.options.afterInit && t.options.afterInit.apply(this, [t.$elem])
            },
            eachMoveUpdate: function() {
                var t = this;
                !0 === t.options.lazyLoad && t.lazyLoad(), !0 === t.options.autoHeight && t.autoHeight(), t.onVisibleItems(), "function" == typeof t.options.afterAction && t.options.afterAction.apply(this, [t.$elem])
            },
            updateVars: function() {
                var t = this;
                "function" == typeof t.options.beforeUpdate && t.options.beforeUpdate.apply(this, [t.$elem]), t.watchVisibility(), t.updateItems(), t.calculateAll(), t.updatePosition(), t.updateControls(), t.eachMoveUpdate(), "function" == typeof t.options.afterUpdate && t.options.afterUpdate.apply(this, [t.$elem])
            },
            reload: function(t) {
                var e = this;
                setTimeout(function() {
                    e.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var t = this;
                if (!1 !== t.$elem.is(":visible")) return !1;
                t.$elem.css({
                    opacity: 0
                }), clearInterval(t.autoPlayInterval), clearInterval(t.checkVisible), t.checkVisible = setInterval(function() {
                    t.$elem.is(":visible") && (t.reload(), t.$elem.animate({
                        opacity: 1
                    }, 200), clearInterval(t.checkVisible))
                }, 500)
            },
            wrapItems: function() {
                var t = this;
                t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), t.wrapperOuter = t.$elem.find(".owl-wrapper-outer"), t.$elem.css("display", "block")
            },
            baseClass: function() {
                var t = this,
                    e = t.$elem.hasClass(t.options.baseClass),
                    o = t.$elem.hasClass(t.options.theme);
                e || t.$elem.addClass(t.options.baseClass), o || t.$elem.addClass(t.options.theme)
            },
            updateItems: function() {
                var e = this;
                if (!1 === e.options.responsive) return !1;
                if (!0 === e.options.singleItem) return e.options.items = e.orignalItems = 1, e.options.itemsCustom = !1, e.options.itemsDesktop = !1, e.options.itemsDesktopSmall = !1, e.options.itemsTablet = !1, e.options.itemsTabletSmall = !1, e.options.itemsMobile = !1, !1;
                var o = t(e.options.responsiveBaseWidth).width();
                if (o > (e.options.itemsDesktop[0] || e.orignalItems) && (e.options.items = e.orignalItems), void 0 !== e.options.itemsCustom && !1 !== e.options.itemsCustom) {
                    e.options.itemsCustom.sort(function(t, e) {
                        return t[0] - e[0]
                    });
                    for (var i in e.options.itemsCustom) void 0 !== e.options.itemsCustom[i] && e.options.itemsCustom[i][0] <= o && (e.options.items = e.options.itemsCustom[i][1])
                } else o <= e.options.itemsDesktop[0] && !1 !== e.options.itemsDesktop && (e.options.items = e.options.itemsDesktop[1]), o <= e.options.itemsDesktopSmall[0] && !1 !== e.options.itemsDesktopSmall && (e.options.items = e.options.itemsDesktopSmall[1]), o <= e.options.itemsTablet[0] && !1 !== e.options.itemsTablet && (e.options.items = e.options.itemsTablet[1]), o <= e.options.itemsTabletSmall[0] && !1 !== e.options.itemsTabletSmall && (e.options.items = e.options.itemsTabletSmall[1]), o <= e.options.itemsMobile[0] && !1 !== e.options.itemsMobile && (e.options.items = e.options.itemsMobile[1]);
                e.options.items > e.itemsAmount && !0 === e.options.itemsScaleUp && (e.options.items = e.itemsAmount)
            },
            response: function() {
                var o, i = this;
                if (!0 !== i.options.responsive) return !1;
                var n = t(e).width();
                i.resizer = function() {
                    t(e).width() !== n && (!1 !== i.options.autoPlay && clearInterval(i.autoPlayInterval), clearTimeout(o), o = setTimeout(function() {
                        n = t(e).width(), i.updateVars()
                    }, i.options.responsiveRefreshRate))
                }, t(e).resize(i.resizer)
            },
            updatePosition: function() {
                var t = this;
                t.jumpTo(t.currentItem), !1 !== t.options.autoPlay && t.checkAp()
            },
            appendItemsSizes: function() {
                var e = this,
                    o = 0,
                    i = e.itemsAmount - e.options.items;
                e.$owlItems.each(function(n) {
                    var s = t(this);
                    s.css({
                        width: e.itemWidth
                    }).data("owl-item", Number(n)), n % e.options.items != 0 && n !== i || n > i || (o += 1), s.data("owl-roundPages", o)
                })
            },
            appendWrapperSizes: function() {
                var t = this,
                    e = 0,
                    e = t.$owlItems.length * t.itemWidth;
                t.$owlWrapper.css({
                    width: 2 * e,
                    left: 0
                }), t.appendItemsSizes()
            },
            calculateAll: function() {
                var t = this;
                t.calculateWidth(), t.appendWrapperSizes(), t.loops(), t.max()
            },
            calculateWidth: function() {
                var t = this;
                t.itemWidth = Math.round(t.$elem.width() / t.options.items)
            },
            max: function() {
                var t = this,
                    e = -1 * (t.itemsAmount * t.itemWidth - t.options.items * t.itemWidth);
                return t.options.items > t.itemsAmount ? (t.maximumItem = 0, e = 0, t.maximumPixels = 0) : (t.maximumItem = t.itemsAmount - t.options.items, t.maximumPixels = e), e
            },
            min: function() {
                return 0
            },
            loops: function() {
                var e = this;
                e.positionsInArray = [0], e.pagesInArray = [];
                for (var o = 0, i = 0, n = 0; n < e.itemsAmount; n++)
                    if (i += e.itemWidth, e.positionsInArray.push(-i), !0 === e.options.scrollPerPage) {
                        var s = t(e.$owlItems[n]),
                            a = s.data("owl-roundPages");
                        a !== o && (e.pagesInArray[o] = e.positionsInArray[n], o = a)
                    }
            },
            buildControls: function() {
                var e = this;
                !0 !== e.options.navigation && !0 !== e.options.pagination || (e.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !e.browser.isTouch).appendTo(e.$elem)), !0 === e.options.pagination && e.buildPagination(), !0 === e.options.navigation && e.buildButtons()
            },
            buildButtons: function() {
                var e = this,
                    o = t('<div class="owl-buttons"/>');
                e.owlControls.append(o), e.buttonPrev = t("<div/>", {
                    class: "owl-prev",
                    html: e.options.navigationText[0] || ""
                }), e.buttonNext = t("<div/>", {
                    class: "owl-next",
                    html: e.options.navigationText[1] || ""
                }), o.append(e.buttonPrev).append(e.buttonNext), o.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(t) {
                    t.preventDefault()
                }), o.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(o) {
                    o.preventDefault(), t(this).hasClass("owl-next") ? e.next() : e.prev()
                })
            },
            buildPagination: function() {
                var e = this;
                e.paginationWrapper = t('<div class="owl-pagination"/>'), e.owlControls.append(e.paginationWrapper), e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(o) {
                    o.preventDefault(), Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0)
                })
            },
            updatePagination: function() {
                var e = this;
                if (!1 === e.options.pagination) return !1;
                e.paginationWrapper.html("");
                for (var o = 0, i = e.itemsAmount - e.itemsAmount % e.options.items, n = 0; n < e.itemsAmount; n++)
                    if (n % e.options.items == 0) {
                        if (o += 1, i === n) var s = e.itemsAmount - e.options.items;
                        var a = t("<div/>", {
                                class: "owl-page"
                            }),
                            r = t("<span></span>", {
                                text: !0 === e.options.paginationNumbers ? o : "",
                                class: !0 === e.options.paginationNumbers ? "owl-numbers" : ""
                            });
                        a.append(r), a.data("owl-page", i === n ? s : n), a.data("owl-roundPages", o), e.paginationWrapper.append(a)
                    }
                e.checkPagination()
            },
            checkPagination: function() {
                var e = this;
                if (!1 === e.options.pagination) return !1;
                e.paginationWrapper.find(".owl-page").each(function(o, i) {
                    t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"))
                })
            },
            checkNavigation: function() {
                var t = this;
                if (!1 === t.options.navigation) return !1;
                !1 === t.options.rewindNav && (0 === t.currentItem && 0 === t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.addClass("disabled")) : 0 === t.currentItem && 0 !== t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.removeClass("disabled")) : t.currentItem === t.maximumItem ? (t.buttonPrev.removeClass("disabled"), t.buttonNext.addClass("disabled")) : 0 !== t.currentItem && t.currentItem !== t.maximumItem && (t.buttonPrev.removeClass("disabled"), t.buttonNext.removeClass("disabled")))
            },
            updateControls: function() {
                var t = this;
                t.updatePagination(), t.checkNavigation(), t.owlControls && (t.options.items >= t.itemsAmount ? t.owlControls.hide() : t.owlControls.show())
            },
            destroyControls: function() {
                var t = this;
                t.owlControls && t.owlControls.remove()
            },
            next: function(t) {
                var e = this;
                if (e.isTransition) return !1;
                if (e.currentItem += !0 === e.options.scrollPerPage ? e.options.items : 1, e.currentItem > e.maximumItem + (1 == e.options.scrollPerPage ? e.options.items - 1 : 0)) {
                    if (!0 !== e.options.rewindNav) return e.currentItem = e.maximumItem, !1;
                    e.currentItem = 0, t = "rewind"
                }
                e.goTo(e.currentItem, t)
            },
            prev: function(t) {
                var e = this;
                if (e.isTransition) return !1;
                if (!0 === e.options.scrollPerPage && e.currentItem > 0 && e.currentItem < e.options.items ? e.currentItem = 0 : e.currentItem -= !0 === e.options.scrollPerPage ? e.options.items : 1, e.currentItem < 0) {
                    if (!0 !== e.options.rewindNav) return e.currentItem = 0, !1;
                    e.currentItem = e.maximumItem, t = "rewind"
                }
                e.goTo(e.currentItem, t)
            },
            goTo: function(t, e, o) {
                var i = this;
                if (i.isTransition) return !1;
                if ("function" == typeof i.options.beforeMove && i.options.beforeMove.apply(this, [i.$elem]), t >= i.maximumItem ? t = i.maximumItem : t <= 0 && (t = 0), i.currentItem = i.owl.currentItem = t, !1 !== i.options.transitionStyle && "drag" !== o && 1 === i.options.items && !0 === i.browser.support3d) return i.swapSpeed(0), !0 === i.browser.support3d ? i.transition3d(i.positionsInArray[t]) : i.css2slide(i.positionsInArray[t], 1), i.afterGo(), i.singleItemTransition(), !1;
                var n = i.positionsInArray[t];
                !0 === i.browser.support3d ? (i.isCss3Finish = !1, !0 === e ? (i.swapSpeed("paginationSpeed"), setTimeout(function() {
                    i.isCss3Finish = !0
                }, i.options.paginationSpeed)) : "rewind" === e ? (i.swapSpeed(i.options.rewindSpeed), setTimeout(function() {
                    i.isCss3Finish = !0
                }, i.options.rewindSpeed)) : (i.swapSpeed("slideSpeed"), setTimeout(function() {
                    i.isCss3Finish = !0
                }, i.options.slideSpeed)), i.transition3d(n)) : !0 === e ? i.css2slide(n, i.options.paginationSpeed) : "rewind" === e ? i.css2slide(n, i.options.rewindSpeed) : i.css2slide(n, i.options.slideSpeed), i.afterGo()
            },
            jumpTo: function(t) {
                var e = this;
                "function" == typeof e.options.beforeMove && e.options.beforeMove.apply(this, [e.$elem]), t >= e.maximumItem || -1 === t ? t = e.maximumItem : t <= 0 && (t = 0), e.swapSpeed(0), !0 === e.browser.support3d ? e.transition3d(e.positionsInArray[t]) : e.css2slide(e.positionsInArray[t], 1), e.currentItem = e.owl.currentItem = t, e.afterGo()
            },
            afterGo: function() {
                var t = this;
                t.prevArr.push(t.currentItem), t.prevItem = t.owl.prevItem = t.prevArr[t.prevArr.length - 2], t.prevArr.shift(0), t.prevItem !== t.currentItem && (t.checkPagination(), t.checkNavigation(), t.eachMoveUpdate(), !1 !== t.options.autoPlay && t.checkAp()), "function" == typeof t.options.afterMove && t.prevItem !== t.currentItem && t.options.afterMove.apply(this, [t.$elem])
            },
            stop: function() {
                var t = this;
                t.apStatus = "stop", clearInterval(t.autoPlayInterval)
            },
            checkAp: function() {
                var t = this;
                "stop" !== t.apStatus && t.play()
            },
            play: function() {
                var t = this;
                if (t.apStatus = "play", !1 === t.options.autoPlay) return !1;
                clearInterval(t.autoPlayInterval), t.autoPlayInterval = setInterval(function() {
                    t.next(!0)
                }, t.options.autoPlay)
            },
            swapSpeed: function(t) {
                var e = this;
                "slideSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)) : "paginationSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)) : "string" != typeof t && e.$owlWrapper.css(e.addCssSpeed(t))
            },
            addCssSpeed: function(t) {
                return {
                    "-webkit-transition": "all " + t + "ms ease",
                    "-moz-transition": "all " + t + "ms ease",
                    "-o-transition": "all " + t + "ms ease",
                    transition: "all " + t + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(t) {
                return {
                    "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
                    transform: "translate3d(" + t + "px, 0px,0px)"
                }
            },
            transition3d: function(t) {
                var e = this;
                e.$owlWrapper.css(e.doTranslate(t))
            },
            css2move: function(t) {
                this.$owlWrapper.css({
                    left: t
                })
            },
            css2slide: function(t, e) {
                var o = this;
                o.isCssFinish = !1, o.$owlWrapper.stop(!0, !0).animate({
                    left: t
                }, {
                    duration: e || o.options.slideSpeed,
                    complete: function() {
                        o.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var t = this,
                    i = "translate3d(0px, 0px, 0px)",
                    n = o.createElement("div");
                n.style.cssText = "  -moz-transform:" + i + "; -ms-transform:" + i + "; -o-transform:" + i + "; -webkit-transform:" + i + "; transform:" + i;
                var s = /translate3d\(0px, 0px, 0px\)/g,
                    a = n.style.cssText.match(s),
                    r = null !== a && 1 === a.length,
                    l = "ontouchstart" in e || navigator.msMaxTouchPoints;
                t.browser = {
                    support3d: r,
                    isTouch: l
                }
            },
            moveEvents: function() {
                var t = this;
                !1 === t.options.mouseDrag && !1 === t.options.touchDrag || (t.gestures(), t.disabledEvents())
            },
            eventTypes: function() {
                var t = this,
                    e = ["s", "e", "x"];
                t.ev_types = {}, !0 === t.options.mouseDrag && !0 === t.options.touchDrag ? e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === t.options.mouseDrag && !0 === t.options.touchDrag ? e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === t.options.mouseDrag && !1 === t.options.touchDrag && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), t.ev_types.start = e[0], t.ev_types.move = e[1], t.ev_types.end = e[2]
            },
            disabledEvents: function() {
                var e = this;
                e.$elem.on("dragstart.owl", function(t) {
                    t.preventDefault()
                }), e.$elem.on("mousedown.disableTextSelect", function(e) {
                    return t(e.target).is("input, textarea, select, option")
                })
            },
            gestures: function() {
                function n(t) {
                    return t.touches ? {
                        x: t.touches[0].pageX,
                        y: t.touches[0].pageY
                    } : t.pageX !== i ? {
                        x: t.pageX,
                        y: t.pageY
                    } : {
                        x: t.clientX,
                        y: t.clientY
                    }
                }

                function s(e) {
                    "on" === e ? (t(o).on(p.ev_types.move, r), t(o).on(p.ev_types.end, l)) : "off" === e && (t(o).off(p.ev_types.move), t(o).off(p.ev_types.end))
                }

                function a(o) {
                    var o = o.originalEvent || o || e.event;
                    if (3 === o.which) return !1;
                    if (!(p.itemsAmount <= p.options.items)) {
                        if (!1 === p.isCssFinish && !p.options.dragBeforeAnimFinish) return !1;
                        if (!1 === p.isCss3Finish && !p.options.dragBeforeAnimFinish) return !1;
                        !1 !== p.options.autoPlay && clearInterval(p.autoPlayInterval), !0 === p.browser.isTouch || p.$owlWrapper.hasClass("grabbing") || p.$owlWrapper.addClass("grabbing"), p.newPosX = 0, p.newRelativeX = 0, t(this).css(p.removeTransition());
                        var i = t(this).position();
                        u.relativePos = i.left, u.offsetX = n(o).x - i.left, u.offsetY = n(o).y - i.top, s("on"), u.sliding = !1, u.targetElement = o.target || o.srcElement
                    }
                }

                function r(i) {
                    var i = i.originalEvent || i || e.event;
                    p.newPosX = n(i).x - u.offsetX, p.newPosY = n(i).y - u.offsetY, p.newRelativeX = p.newPosX - u.relativePos, "function" == typeof p.options.startDragging && !0 !== u.dragging && 0 !== p.newRelativeX && (u.dragging = !0, p.options.startDragging.apply(p, [p.$elem])), (p.newRelativeX > 8 || p.newRelativeX < -8 && !0 === p.browser.isTouch) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1, u.sliding = !0), (p.newPosY > 10 || p.newPosY < -10) && !1 === u.sliding && t(o).off("touchmove.owl");
                    p.newPosX = Math.max(Math.min(p.newPosX, function() {
                        return p.newRelativeX / 5
                    }()), function() {
                        return p.maximumPixels + p.newRelativeX / 5
                    }()), !0 === p.browser.support3d ? p.transition3d(p.newPosX) : p.css2move(p.newPosX)
                }

                function l(o) {
                    var o = o.originalEvent || o || e.event;
                    if (o.target = o.target || o.srcElement, u.dragging = !1, !0 !== p.browser.isTouch && p.$owlWrapper.removeClass("grabbing"), p.newRelativeX < 0 ? p.dragDirection = p.owl.dragDirection = "left" : p.dragDirection = p.owl.dragDirection = "right", 0 !== p.newRelativeX) {
                        var i = p.getNewPosition();
                        if (p.goTo(i, !1, "drag"), u.targetElement === o.target && !0 !== p.browser.isTouch) {
                            t(o.target).on("click.disable", function(e) {
                                e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(o.target).off("click.disable")
                            });
                            var n = t._data(o.target, "events").click,
                                a = n.pop();
                            n.splice(0, 0, a)
                        }
                    }
                    s("off")
                }
                var p = this,
                    u = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                p.isCssFinish = !0, p.$elem.on(p.ev_types.start, ".owl-wrapper", a)
            },
            getNewPosition: function() {
                var t, e = this;
                return t = e.closestItem(), t > e.maximumItem ? (e.currentItem = e.maximumItem, t = e.maximumItem) : e.newPosX >= 0 && (t = 0, e.currentItem = 0), t
            },
            closestItem: function() {
                var e = this,
                    o = !0 === e.options.scrollPerPage ? e.pagesInArray : e.positionsInArray,
                    i = e.newPosX,
                    n = null;
                return t.each(o, function(s, a) {
                    i - e.itemWidth / 20 > o[s + 1] && i - e.itemWidth / 20 < a && "left" === e.moveDirection() ? (n = a, !0 === e.options.scrollPerPage ? e.currentItem = t.inArray(n, e.positionsInArray) : e.currentItem = s) : i + e.itemWidth / 20 < a && i + e.itemWidth / 20 > (o[s + 1] || o[s] - e.itemWidth) && "right" === e.moveDirection() && (!0 === e.options.scrollPerPage ? (n = o[s + 1] || o[o.length - 1], e.currentItem = t.inArray(n, e.positionsInArray)) : (n = o[s + 1], e.currentItem = s + 1))
                }), e.currentItem
            },
            moveDirection: function() {
                var t, e = this;
                return e.newRelativeX < 0 ? (t = "right", e.playDirection = "next") : (t = "left", e.playDirection = "prev"), t
            },
            customEvents: function() {
                var t = this;
                t.$elem.on("owl.next", function() {
                    t.next()
                }), t.$elem.on("owl.prev", function() {
                    t.prev()
                }), t.$elem.on("owl.play", function(e, o) {
                    t.options.autoPlay = o, t.play(), t.hoverStatus = "play"
                }), t.$elem.on("owl.stop", function() {
                    t.stop(), t.hoverStatus = "stop"
                }), t.$elem.on("owl.goTo", function(e, o) {
                    t.goTo(o)
                }), t.$elem.on("owl.jumpTo", function(e, o) {
                    t.jumpTo(o)
                })
            },
            stopOnHover: function() {
                var t = this;
                !0 === t.options.stopOnHover && !0 !== t.browser.isTouch && !1 !== t.options.autoPlay && (t.$elem.on("mouseover", function() {
                    t.stop()
                }), t.$elem.on("mouseout", function() {
                    "stop" !== t.hoverStatus && t.play()
                }))
            },
            lazyLoad: function() {
                var e = this;
                if (!1 === e.options.lazyLoad) return !1;
                for (var o = 0; o < e.itemsAmount; o++) {
                    var n = t(e.$owlItems[o]);
                    if ("loaded" !== n.data("owl-loaded")) {
                        var s = n.data("owl-item"),
                            a = n.find(".lazyOwl");
                        "string" == typeof a.data("src") ? (n.data("owl-loaded") === i && (a.hide(), n.addClass("loading").data("owl-loaded", "checked")), (!0 !== e.options.lazyFollow || s >= e.currentItem) && s < e.currentItem + e.options.items && a.length && e.lazyPreload(n, a)) : n.data("owl-loaded", "loaded")
                    }
                }
            },
            lazyPreload: function(t, e) {
                function o() {
                    s += 1, n.completeImg(e.get(0)) || !0 === a ? i() : s <= 100 ? setTimeout(o, 100) : i()
                }

                function i() {
                    t.data("owl-loaded", "loaded").removeClass("loading"), e.removeAttr("data-src"), "fade" === n.options.lazyEffect ? e.fadeIn(400) : e.show(), "function" == typeof n.options.afterLazyLoad && n.options.afterLazyLoad.apply(this, [n.$elem])
                }
                var n = this,
                    s = 0;
                if ("DIV" === e.prop("tagName")) {
                    e.css("background-image", "url(" + e.data("src") + ")");
                    var a = !0
                } else e[0].src = e.data("src");
                o()
            },
            autoHeight: function() {
                function e() {
                    a += 1, n.completeImg(s.get(0)) ? o() : a <= 100 ? setTimeout(e, 100) : n.wrapperOuter.css("height", "")
                }

                function o() {
                    var e = t(n.$owlItems[n.currentItem]).height();
                    n.wrapperOuter.css("height", e + "px"), n.wrapperOuter.hasClass("autoHeight") || setTimeout(function() {
                        n.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }
                var n = this,
                    s = t(n.$owlItems[n.currentItem]).find("img");
                if (s.get(0) !== i) {
                    var a = 0;
                    e()
                } else o()
            },
            completeImg: function(t) {
                return !!t.complete && (void 0 === t.naturalWidth || 0 != t.naturalWidth)
            },
            onVisibleItems: function() {
                var e = this;
                !0 === e.options.addClassActive && e.$owlItems.removeClass("active"), e.visibleItems = [];
                for (var o = e.currentItem; o < e.currentItem + e.options.items; o++) e.visibleItems.push(o), !0 === e.options.addClassActive && t(e.$owlItems[o]).addClass("active");
                e.owl.visibleItems = e.visibleItems
            },
            transitionTypes: function(t) {
                var e = this;
                e.outClass = "owl-" + t + "-out", e.inClass = "owl-" + t + "-in"
            },
            singleItemTransition: function() {
                var t = this;
                t.isTransition = !0;
                var e = t.outClass,
                    o = t.inClass,
                    i = t.$owlItems.eq(t.currentItem),
                    n = t.$owlItems.eq(t.prevItem),
                    s = Math.abs(t.positionsInArray[t.currentItem]) + t.positionsInArray[t.prevItem],
                    a = Math.abs(t.positionsInArray[t.currentItem]) + t.itemWidth / 2;
                t.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": a + "px",
                    "-moz-perspective-origin": a + "px",
                    "perspective-origin": a + "px"
                });
                var r = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                n.css(function(t, e) {
                    return {
                        position: "relative",
                        left: t + "px"
                    }
                }(s, 10)).addClass(e).on(r, function() {
                    t.endPrev = !0, n.off(r), t.clearTransStyle(n, e)
                }), i.addClass(o).on(r, function() {
                    t.endCurrent = !0, i.off(r), t.clearTransStyle(i, o)
                })
            },
            clearTransStyle: function(t, e) {
                var o = this;
                t.css({
                    position: "",
                    left: ""
                }).removeClass(e), o.endPrev && o.endCurrent && (o.$owlWrapper.removeClass("owl-origin"), o.endPrev = !1, o.endCurrent = !1, o.isTransition = !1)
            },
            owlStatus: function() {
                var t = this;
                t.owl = {
                    userOptions: t.userOptions,
                    baseElement: t.$elem,
                    userItems: t.$userItems,
                    owlItems: t.$owlItems,
                    currentItem: t.currentItem,
                    prevItem: t.prevItem,
                    visibleItems: t.visibleItems,
                    isTouch: t.browser.isTouch,
                    browser: t.browser,
                    dragDirection: t.dragDirection
                }
            },
            clearEvents: function() {
                var i = this;
                i.$elem.off(".owl owl mousedown.disableTextSelect"), t(o).off(".owl owl"), t(e).off("resize", i.resizer)
            },
            unWrap: function() {
                var t = this;
                0 !== t.$elem.children().length && (t.$owlWrapper.unwrap(), t.$userItems.unwrap().unwrap(), t.owlControls && t.owlControls.remove()), t.clearEvents(), t.$elem.attr("style", t.$elem.data("owl-originalStyles") || "").attr("class", t.$elem.data("owl-originalClasses"))
            },
            destroy: function() {
                var t = this;
                t.stop(), clearInterval(t.checkVisible), t.unWrap(), t.$elem.removeData()
            },
            reinit: function(e) {
                var o = this,
                    i = t.extend({}, o.userOptions, e);
                o.unWrap(), o.init(i, o.$elem)
            },
            addItem: function(t, e) {
                var o, n = this;
                return !!t && (0 === n.$elem.children().length ? (n.$elem.append(t), n.setVars(), !1) : (n.unWrap(), o = e === i || -1 === e ? -1 : e, o >= n.$userItems.length || -1 === o ? n.$userItems.eq(-1).after(t) : n.$userItems.eq(o).before(t), void n.setVars()))
            },
            removeItem: function(t) {
                var e, o = this;
                if (0 === o.$elem.children().length) return !1;
                e = t === i || -1 === t ? -1 : t, o.unWrap(), o.$userItems.eq(e).remove(), o.setVars()
            }
        };
        t.fn.owlCarousel = function(e) {
            return this.each(function() {
                if (!0 === t(this).data("owl-init")) return !1;
                t(this).data("owl-init", !0);
                var o = Object.create(n);
                o.init(e, this), t.data(this, "owlCarousel", o)
            })
        }, t.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: e,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document), define("https://cluster-web-static.storage.googleapis.com/js/homepage/owl.carousel-v1d01c7013.js", function() {}),
    function(t) {
        t && (t.fn.headroom = function(e) {
            return this.each(function() {
                var o = t(this),
                    i = o.data("headroom"),
                    n = "object" == typeof e && e;
                n = t.extend(!0, {}, Headroom.options, n), i || (i = new Headroom(this, n), i.init(), o.data("headroom", i)), "string" == typeof e && i[e]()
            })
        }, t("[data-headroom]").each(function() {
            var e = t(this);
            e.headroom(e.data())
        }))
    }(window.Zepto || window.jQuery), define("https://cluster-web-static.storage.googleapis.com/js/homepage/jquery.headroom-v0b724c9f3.js", function() {}),
    function(t) {
        t.fn.scrollToTop = function(e) {
            var o = {
                speed: 800
            };
            return e && t.extend(o, {
                speed: e
            }), this.each(function() {
                var e = t(this);
                t(window).scroll(function() {
                    100 < t(this).scrollTop() ? e.fadeIn() : e.fadeOut()
                }), e.click(function(e) {
                    e.preventDefault(), t("body, html").animate({
                        scrollTop: 0
                    }, o.speed)
                })
            })
        }
    }(jQuery), define("https://cluster-web-static.storage.googleapis.com/js/homepage/jquery.scrollToTop.min-ve1b60be8f.js", function() {});