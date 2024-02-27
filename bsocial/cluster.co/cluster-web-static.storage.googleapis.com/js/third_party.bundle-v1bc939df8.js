/*
 RequireJS 2.1.8 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/

/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */

/*!
 * Sizzle CSS Selector Engine v1.10.2
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03
 */

/*!
 * jQuery Mobile Events
 * by Ben Major
 *
 * Copyright 2011-2017, Ben Major
 * Licensed under the MIT License:
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */

/**
 * History.js jQuery Adapter
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

/**
 * History.js Core
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

/**
 * History.getInternetExplorerMajorVersion()
 * Get's the major version of Internet Explorer
 * @return {integer}
 * @license Public Domain
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @author James Padolsey <https://gist.github.com/527683>
 */

/**
 * History.isInternetExplorer()
 * Are we using Internet Explorer?
 * @return {boolean}
 * @license Public Domain
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 */

/*!
 * jQuery Popup Overlay
 *
 * @version 1.7.13
 * @requires jQuery v1.7.1+
 * @link http://vast-engineering.github.com/jquery-popup-overlay/
 */

/*! jQuery UI - v1.12.1 - 2017-05-20
 * http://jqueryui.com
 * Includes: widget.js, data.js, scroll-parent.js, widgets/sortable.js, widgets/mouse.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/*!
 * jQuery UI Sortable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/*!
 * jQuery UI Touch Punch Improved 0.3.1
 *
 *
 * Copyright 2013, Chris Hutchinson <chris@brushd.com>
 * Original jquery-ui-touch-punch Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 * jquery.ui.widget.js
 * jquery.ui.mouse.js
 */

var requirejs, require, define;
! function(Z) {
    function H(e) {
        return "[object Function]" === L.call(e)
    }

    function I(e) {
        return "[object Array]" === L.call(e)
    }

    function y(e, t) {
        if (e) {
            var n;
            for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
        }
    }

    function M(e, t) {
        if (e) {
            var n;
            for (n = e.length - 1; - 1 < n && (!e[n] || !t(e[n], n, e)); n -= 1);
        }
    }

    function s(e, t) {
        return ga.call(e, t)
    }

    function l(e, t) {
        return s(e, t) && e[t]
    }

    function F(e, t) {
        for (var n in e)
            if (s(e, n) && t(e[n], n)) break
    }

    function Q(e, t, n, i) {
        return t && F(t, function(t, o) {
            !n && s(e, o) || (i && "string" != typeof t ? (e[o] || (e[o] = {}), Q(e[o], t, n, i)) : e[o] = t)
        }), e
    }

    function u(e, t) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function aa(e) {
        throw e
    }

    function ba(e) {
        if (!e) return e;
        var t = Z;
        return y(e.split("."), function(e) {
            t = t[e]
        }), t
    }

    function A(e, t, n, i) {
        return t = Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e), t.requireType = e, t.requireModules = i, n && (t.originalError = n), t
    }

    function ha(e) {
        function t(e, t, n) {
            var i, o, r, s, a, c, u, p = t && t.split("/");
            i = p;
            var h = C.map,
                d = h && h["*"];
            if (e && "." === e.charAt(0))
                if (t) {
                    for (i = l(C.pkgs, t) ? p = [t] : p.slice(0, p.length - 1), t = e = i.concat(e.split("/")), i = 0; t[i]; i += 1)
                        if ("." === (o = t[i])) t.splice(i, 1), i -= 1;
                        else if (".." === o) {
                        if (1 === i && (".." === t[2] || ".." === t[0])) break;
                        0 < i && (t.splice(i - 1, 2), i -= 2)
                    }
                    i = l(C.pkgs, t = e[0]), e = e.join("/"), i && e === t + "/" + i.main && (e = t)
                } else 0 === e.indexOf("./") && (e = e.substring(2));
            if (n && h && (p || d)) {
                for (t = e.split("/"), i = t.length; 0 < i; i -= 1) {
                    if (r = t.slice(0, i).join("/"), p)
                        for (o = p.length; 0 < o; o -= 1)
                            if ((n = l(h, p.slice(0, o).join("/"))) && (n = l(n, r))) {
                                s = n, a = i;
                                break
                            }
                    if (s) break;
                    !c && d && l(d, r) && (c = l(d, r), u = i)
                }!s && c && (s = c, a = u), s && (t.splice(0, a, s), e = t.join("/"))
            }
            return e
        }

        function n(e) {
            z && y(document.getElementsByTagName("script"), function(t) {
                if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === _.contextName) return t.parentNode.removeChild(t), !0
            })
        }

        function i(e) {
            var t = l(C.paths, e);
            if (t && I(t) && 1 < t.length) return n(e), t.shift(), _.require.undef(e), _.require([e]), !0
        }

        function o(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function r(e, n, i, r) {
            var s, a, c = null,
                u = n ? n.name : null,
                p = e,
                h = !0,
                d = "";
            return e || (h = !1, e = "_@r" + (q += 1)), e = o(e), c = e[0], e = e[1], c && (c = t(c, u, r), a = l(M, c)), e && (c ? d = a && a.normalize ? a.normalize(e, function(e) {
                return t(e, u, r)
            }) : t(e, u, r) : (d = t(e, u, r), e = o(d), c = e[0], d = e[1], i = !0, s = _.nameToUrl(d))), i = !c || a || i ? "" : "_unnormalized" + (B += 1), {
                prefix: c,
                name: d,
                parentMap: n,
                unnormalized: !!i,
                url: s,
                originalName: p,
                isDefine: h,
                id: (c ? c + "!" + d : d) + i
            }
        }

        function a(e) {
            var t = e.id,
                n = l(E, t);
            return n || (n = E[t] = new _.Module(e)), n
        }

        function c(e, t, n) {
            var i = e.id,
                o = l(E, i);
            !s(M, i) || o && !o.defineEmitComplete ? (o = a(e), o.error && "error" === t ? n(o.error) : o.on(t, n)) : "defined" === t && n(M[i])
        }

        function p(e, t) {
            var n = e.requireModules,
                i = !1;
            t ? t(e) : (y(n, function(t) {
                (t = l(E, t)) && (t.error = e, t.events.error && (i = !0, t.emit("error", e)))
            }), i || j.onError(e))
        }

        function h() {
            R.length && (ia.apply(D, [D.length - 1, 0].concat(R)), R = [])
        }

        function d(e) {
            delete E[e], delete k[e]
        }

        function f(e, t, n) {
            var i = e.map.id;
            e.error ? e.emit("error", e.error) : (t[i] = !0, y(e.depMaps, function(i, o) {
                var r = i.id,
                    s = l(E, r);
                s && !e.depMatched[o] && !n[r] && (l(t, r) ? (e.defineDep(o, M[r]), e.check()) : f(s, t, n))
            }), n[i] = !0)
        }

        function g() {
            var e, t, o, r, s = (o = 1e3 * C.waitSeconds) && _.startTime + o < (new Date).getTime(),
                a = [],
                l = [],
                c = !1,
                u = !0;
            if (!x) {
                if (x = !0, F(k, function(o) {
                        if (e = o.map, t = e.id, o.enabled && (e.isDefine || l.push(o), !o.error))
                            if (!o.inited && s) i(t) ? c = r = !0 : (a.push(t), n(t));
                            else if (!o.inited && o.fetched && e.isDefine && (c = !0, !e.prefix)) return u = !1
                    }), s && a.length) return o = A("timeout", "Load timeout for modules: " + a, null, a), o.contextName = _.contextName, p(o);
                u && y(l, function(e) {
                    f(e, {}, {})
                }), s && !r || !c || !z && !da || S || (S = setTimeout(function() {
                    S = 0, g()
                }, 50)), x = !1
            }
        }

        function m(e) {
            s(M, e[0]) || a(r(e[0], null, !0)).init(e[1], e[2])
        }

        function v(e) {
            var e = e.currentTarget || e.srcElement,
                t = _.onScriptLoad;
            return e.detachEvent && !W ? e.detachEvent("onreadystatechange", t) : e.removeEventListener("load", t, !1), t = _.onScriptError, (!e.detachEvent || W) && e.removeEventListener("error", t, !1), {
                node: e,
                id: e && e.getAttribute("data-requiremodule")
            }
        }

        function b() {
            var e;
            for (h(); D.length;) {
                if (e = D.shift(), null === e[0]) return p(A("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                m(e)
            }
        }
        var x, w, _, T, S, C = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            E = {},
            k = {},
            N = {},
            D = [],
            M = {},
            L = {},
            q = 1,
            B = 1;
        return T = {
            require: function(e) {
                return e.require ? e.require : e.require = _.makeRequire(e.map)
            },
            exports: function(e) {
                if (e.usingExports = !0, e.map.isDefine) return e.exports ? e.exports : e.exports = M[e.map.id] = {}
            },
            module: function(e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function() {
                        var t = l(C.pkgs, e.map.id);
                        return (t ? l(C.config, e.map.id + "/" + t.main) : l(C.config, e.map.id)) || {}
                    },
                    exports: M[e.map.id]
                }
            }
        }, w = function(e) {
            this.events = l(N, e.id) || {}, this.map = e, this.shim = l(C.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, w.prototype = {
            init: function(e, t, n, i) {
                i = i || {}, this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = u(this, function(e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = i.ignore, i.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function(e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0, _.startTime = (new Date).getTime();
                    var e = this.map;
                    if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
                    _.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], u(this, function() {
                        return e.prefix ? this.callPlugin() : this.load()
                    }))
                }
            },
            load: function() {
                var e = this.map.url;
                L[e] || (L[e] = !0, _.load(this.map.id, e))
            },
            check: function() {
                if (this.enabled && !this.enabling) {
                    var e, t, n = this.map.id;
                    t = this.depExports;
                    var i = this.exports,
                        o = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0, 1 > this.depCount && !this.defined) {
                                if (H(o)) {
                                    if (this.events.error && this.map.isDefine || j.onError !== aa) try {
                                        i = _.execCb(n, o, t, i)
                                    } catch (t) {
                                        e = t
                                    } else i = _.execCb(n, o, t, i);
                                    if (this.map.isDefine && ((t = this.module) && void 0 !== t.exports && t.exports !== this.exports ? i = t.exports : void 0 === i && this.usingExports && (i = this.exports)), e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", p(this.error = e)
                                } else i = o;
                                this.exports = i, this.map.isDefine && !this.ignore && (M[n] = i, j.onResourceLoad) && j.onResourceLoad(_, this.map, this.depMaps), d(n), this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            },
            callPlugin: function() {
                var e = this.map,
                    n = e.id,
                    i = r(e.prefix);
                this.depMaps.push(i), c(i, "defined", u(this, function(i) {
                    var o, h;
                    h = this.map.name;
                    var f = this.map.parentMap ? this.map.parentMap.name : null,
                        g = _.makeRequire(e.parentMap, {
                            enableBuildCallback: !0
                        });
                    this.map.unnormalized ? (i.normalize && (h = i.normalize(h, function(e) {
                        return t(e, f, !0)
                    }) || ""), i = r(e.prefix + "!" + h, this.map.parentMap), c(i, "defined", u(this, function(e) {
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0,
                            ignore: !0
                        })
                    })), (h = l(E, i.id)) && (this.depMaps.push(i), this.events.error && h.on("error", u(this, function(e) {
                        this.emit("error", e)
                    })), h.enable())) : (o = u(this, function(e) {
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0
                        })
                    }), o.error = u(this, function(e) {
                        this.inited = !0, this.error = e, e.requireModules = [n], F(E, function(e) {
                            0 === e.map.id.indexOf(n + "_unnormalized") && d(e.map.id)
                        }), p(e)
                    }), o.fromText = u(this, function(t, i) {
                        var l = e.name,
                            c = r(l),
                            u = O;
                        i && (t = i), u && (O = !1), a(c), s(C.config, n) && (C.config[l] = C.config[n]);
                        try {
                            j.exec(t)
                        } catch (e) {
                            return p(A("fromtexteval", "fromText eval for " + n + " failed: " + e, e, [n]))
                        }
                        u && (O = !0), this.depMaps.push(c), _.completeLoad(l), g([l], o)
                    }), i.load(e.name, g, o, C))
                })), _.enable(i, this), this.pluginMaps[i.id] = i
            },
            enable: function() {
                k[this.map.id] = this, this.enabling = this.enabled = !0, y(this.depMaps, u(this, function(e, t) {
                    var n, i;
                    if ("string" == typeof e) {
                        if (e = r(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, n = l(T, e.id)) return void(this.depExports[t] = n(this));
                        this.depCount += 1, c(e, "defined", u(this, function(e) {
                            this.defineDep(t, e), this.check()
                        })), this.errback && c(e, "error", u(this, this.errback))
                    }
                    n = e.id, i = E[n], !s(T, n) && i && !i.enabled && _.enable(e, this)
                })), F(this.pluginMaps, u(this, function(e) {
                    var t = l(E, e.id);
                    t && !t.enabled && _.enable(e, this)
                })), this.enabling = !1, this.check()
            },
            on: function(e, t) {
                var n = this.events[e];
                n || (n = this.events[e] = []), n.push(t)
            },
            emit: function(e, t) {
                y(this.events[e], function(e) {
                    e(t)
                }), "error" === e && delete this.events[e]
            }
        }, _ = {
            config: C,
            contextName: e,
            registry: E,
            defined: M,
            urlFetched: L,
            defQueue: D,
            Module: w,
            makeModuleMap: r,
            nextTick: j.nextTick,
            onError: p,
            configure: function(e) {
                e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                var t = C.pkgs,
                    n = C.shim,
                    i = {
                        paths: !0,
                        config: !0,
                        map: !0
                    };
                F(e, function(e, t) {
                    i[t] ? "map" === t ? (C.map || (C.map = {}), Q(C[t], e, !0, !0)) : Q(C[t], e, !0) : C[t] = e
                }), e.shim && (F(e.shim, function(e, t) {
                    I(e) && (e = {
                        deps: e
                    }), !e.exports && !e.init || e.exportsFn || (e.exportsFn = _.makeShimExports(e)), n[t] = e
                }), C.shim = n), e.packages && (y(e.packages, function(e) {
                    e = "string" == typeof e ? {
                        name: e
                    } : e, t[e.name] = {
                        name: e.name,
                        location: e.location || e.name,
                        main: (e.main || "main").replace(ja, "").replace(ea, "")
                    }
                }), C.pkgs = t), F(E, function(e, t) {
                    !e.inited && !e.map.unnormalized && (e.map = r(t))
                }), (e.deps || e.callback) && _.require(e.deps || [], e.callback)
            },
            makeShimExports: function(e) {
                return function() {
                    var t;
                    return e.init && (t = e.init.apply(Z, arguments)), t || e.exports && ba(e.exports)
                }
            },
            makeRequire: function(n, i) {
                function o(t, l, c) {
                    var u, h;
                    return i.enableBuildCallback && l && H(l) && (l.__requireJsBuild = !0), "string" == typeof t ? H(l) ? p(A("requireargs", "Invalid require call"), c) : n && s(T, t) ? T[t](E[n.id]) : j.get ? j.get(_, t, n, o) : (u = r(t, n, !1, !0), u = u.id, s(M, u) ? M[u] : p(A("notloaded", 'Module name "' + u + '" has not been loaded yet for context: ' + e + (n ? "" : ". Use require([])")))) : (b(), _.nextTick(function() {
                        b(), h = a(r(null, n)), h.skipMap = i.skipMap, h.init(t, l, c, {
                            enabled: !0
                        }), g()
                    }), o)
                }
                return i = i || {}, Q(o, {
                    isBrowser: z,
                    toUrl: function(e) {
                        var i, o = e.lastIndexOf("."),
                            r = e.split("/")[0];
                        return -1 !== o && ("." !== r && ".." !== r || 1 < o) && (i = e.substring(o, e.length), e = e.substring(0, o)), _.nameToUrl(t(e, n && n.id, !0), i, !0)
                    },
                    defined: function(e) {
                        return s(M, r(e, n, !1, !0).id)
                    },
                    specified: function(e) {
                        return e = r(e, n, !1, !0).id, s(M, e) || s(E, e)
                    }
                }), n || (o.undef = function(e) {
                    h();
                    var t = r(e, n, !0),
                        i = l(E, e);
                    delete M[e], delete L[t.url], delete N[e], i && (i.events.defined && (N[e] = i.events), d(e))
                }), o
            },
            enable: function(e) {
                l(E, e.id) && a(e).enable()
            },
            completeLoad: function(e) {
                var t, n, o = l(C.shim, e) || {},
                    r = o.exports;
                for (h(); D.length;) {
                    if (n = D.shift(), null === n[0]) {
                        if (n[0] = e, t) break;
                        t = !0
                    } else n[0] === e && (t = !0);
                    m(n)
                }
                if (n = l(E, e), !t && !s(M, e) && n && !n.inited) {
                    if (C.enforceDefine && (!r || !ba(r))) return i(e) ? void 0 : p(A("nodefine", "No define call for " + e, null, [e]));
                    m([e, o.deps || [], o.exportsFn])
                }
                g()
            },
            nameToUrl: function(e, t, n) {
                var i, o, r, s, a, c;
                if (j.jsExtRegExp.test(e)) s = e + (t || "");
                else {
                    for (i = C.paths, o = C.pkgs, s = e.split("/"), a = s.length; 0 < a; a -= 1) {
                        if (c = s.slice(0, a).join("/"), r = l(o, c), c = l(i, c)) {
                            I(c) && (c = c[0]), s.splice(0, a, c);
                            break
                        }
                        if (r) {
                            e = e === r.name ? r.location + "/" + r.main : r.location, s.splice(0, a, e);
                            break
                        }
                    }
                    s = s.join("/"), s += t || (/\?/.test(s) || n ? "" : ".js"), s = ("/" === s.charAt(0) || s.match(/^[\w\+\.\-]+:/) ? "" : C.baseUrl) + s
                }
                return C.urlArgs ? s + (-1 === s.indexOf("?") ? "?" : "&") + C.urlArgs : s
            },
            load: function(e, t) {
                j.load(_, e, t)
            },
            execCb: function(e, t, n, i) {
                return t.apply(i, n)
            },
            onScriptLoad: function(e) {
                ("load" === e.type || ka.test((e.currentTarget || e.srcElement).readyState)) && (P = null, e = v(e), _.completeLoad(e.id))
            },
            onScriptError: function(e) {
                var t = v(e);
                if (!i(t.id)) return p(A("scripterror", "Script error for: " + t.id, e, [t.id]))
            }
        }, _.require = _.makeRequire(), _
    }
    var j, w, x, C, J, D, P, K, q, fa, la = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
        ma = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        ea = /\.js$/,
        ja = /^\.\//;
    w = Object.prototype;
    var L = w.toString,
        ga = w.hasOwnProperty,
        ia = Array.prototype.splice,
        z = !("undefined" == typeof window || !navigator || !window.document),
        da = !z && "undefined" != typeof importScripts,
        ka = z && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        W = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        E = {},
        t = {},
        R = [],
        O = !1;
    if (void 0 === define) {
        if (void 0 !== requirejs) {
            if (H(requirejs)) return;
            t = requirejs, requirejs = void 0
        }
        void 0 !== require && !H(require) && (t = require, require = void 0), j = requirejs = function(e, t, n, i) {
            var o, r = "_";
            return !I(e) && "string" != typeof e && (o = e, I(t) ? (e = t, t = n, n = i) : e = []), o && o.context && (r = o.context), (i = l(E, r)) || (i = E[r] = j.s.newContext(r)), o && i.configure(o), i.require(e, t, n)
        }, j.config = function(e) {
            return j(e)
        }, j.nextTick = "undefined" != typeof setTimeout ? function(e) {
            setTimeout(e, 4)
        } : function(e) {
            e()
        }, require || (require = j), j.version = "2.1.8", j.jsExtRegExp = /^\/|:|\?|\.js$/, j.isBrowser = z, w = j.s = {
            contexts: E,
            newContext: ha
        }, j({}), y(["toUrl", "undef", "defined", "specified"], function(e) {
            j[e] = function() {
                var t = E._;
                return t.require[e].apply(t, arguments)
            }
        }), z && (x = w.head = document.getElementsByTagName("head")[0], C = document.getElementsByTagName("base")[0]) && (x = w.head = C.parentNode), j.onError = aa, j.createNode = function(e) {
            var t = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            return t.type = e.scriptType || "text/javascript", t.charset = "utf-8", t.async = !0, t
        }, j.load = function(e, t, n) {
            var i = e && e.config || {};
            if (z) return i = j.createNode(i, t, n), i.setAttribute("data-requirecontext", e.contextName), i.setAttribute("data-requiremodule", t), !i.attachEvent || i.attachEvent.toString && 0 > i.attachEvent.toString().indexOf("[native code") || W ? (i.addEventListener("load", e.onScriptLoad, !1), i.addEventListener("error", e.onScriptError, !1)) : (O = !0, i.attachEvent("onreadystatechange", e.onScriptLoad)), i.src = n, K = i, C ? x.insertBefore(i, C) : x.appendChild(i), K = null, i;
            if (da) try {
                importScripts(n), e.completeLoad(t)
            } catch (i) {
                e.onError(A("importscripts", "importScripts failed for " + t + " at " + n, i, [t]))
            }
        }, z && M(document.getElementsByTagName("script"), function(e) {
            if (x || (x = e.parentNode), J = e.getAttribute("data-main")) return q = J, t.baseUrl || (D = q.split("/"), q = D.pop(), fa = D.length ? D.join("/") + "/" : "./", t.baseUrl = fa), q = q.replace(ea, ""), j.jsExtRegExp.test(q) && (q = J), t.deps = t.deps ? t.deps.concat(q) : [q], !0
        }), define = function(e, t, n) {
            var i, o;
            "string" != typeof e && (n = t, t = e, e = null), I(t) || (n = t, t = null), !t && H(n) && (t = [], n.length && (n.toString().replace(la, "").replace(ma, function(e, n) {
                t.push(n)
            }), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t))), O && ((i = K) || (P && "interactive" === P.readyState || M(document.getElementsByTagName("script"), function(e) {
                if ("interactive" === e.readyState) return P = e
            }), i = P), i && (e || (e = i.getAttribute("data-requiremodule")), o = E[i.getAttribute("data-requirecontext")])), (o ? o.defQueue : R).push([e, t, n])
        }, define.amd = {
            jQuery: !0
        }, j.exec = function(b) {
            return eval(b)
        }, j(t)
    }
}(this), define("third_party/require", function() {}),
    function(e, t) {
        function n(e) {
            var t = e.length,
                n = ce.type(e);
            return !ce.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
        }

        function i(e) {
            var t = Se[e] = {};
            return ce.each(e.match(pe) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function o(e, n, i, o) {
            if (ce.acceptData(e)) {
                var r, s, a = ce.expando,
                    l = e.nodeType,
                    c = l ? ce.cache : e,
                    u = l ? e[a] : e[a] && a;
                if (u && c[u] && (o || c[u].data) || i !== t || "string" != typeof n) return u || (u = l ? e[a] = te.pop() || ce.guid++ : a), c[u] || (c[u] = l ? {} : {
                    toJSON: ce.noop
                }), "object" != typeof n && "function" != typeof n || (o ? c[u] = ce.extend(c[u], n) : c[u].data = ce.extend(c[u].data, n)), s = c[u], o || (s.data || (s.data = {}), s = s.data), i !== t && (s[ce.camelCase(n)] = i), "string" == typeof n ? null == (r = s[n]) && (r = s[ce.camelCase(n)]) : r = s, r
            }
        }

        function r(e, t, n) {
            if (ce.acceptData(e)) {
                var i, o, r = e.nodeType,
                    s = r ? ce.cache : e,
                    l = r ? e[ce.expando] : ce.expando;
                if (s[l]) {
                    if (t && (i = n ? s[l] : s[l].data)) {
                        ce.isArray(t) ? t = t.concat(ce.map(t, ce.camelCase)) : t in i ? t = [t] : (t = ce.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                        for (; o--;) delete i[t[o]];
                        if (n ? !a(i) : !ce.isEmptyObject(i)) return
                    }(n || (delete s[l].data, a(s[l]))) && (r ? ce.cleanData([e], !0) : ce.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null)
                }
            }
        }

        function s(e, n, i) {
            if (i === t && 1 === e.nodeType) {
                var o = "data-" + n.replace(Ee, "-$1").toLowerCase();
                if ("string" == typeof(i = e.getAttribute(o))) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Ce.test(i) ? ce.parseJSON(i) : i)
                    } catch (e) {}
                    ce.data(e, n, i)
                } else i = t
            }
            return i
        }

        function a(e) {
            var t;
            for (t in e)
                if (("data" !== t || !ce.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function l() {
            return !0
        }

        function c() {
            return !1
        }

        function u() {
            try {
                return K.activeElement
            } catch (e) {}
        }

        function p(e, t) {
            do {
                e = e[t]
            } while (e && 1 !== e.nodeType);
            return e
        }

        function h(e, t, n) {
            if (ce.isFunction(t)) return ce.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return ce.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (Be.test(t)) return ce.filter(t, e, n);
                t = ce.filter(t, e)
            }
            return ce.grep(e, function(e) {
                return ce.inArray(e, t) >= 0 !== n
            })
        }

        function d(e) {
            var t = Ye.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function f(e, t) {
            return ce.nodeName(e, "table") && ce.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function g(e) {
            return e.type = (null !== ce.find.attr(e, "type")) + "/" + e.type, e
        }

        function m(e) {
            var t = it.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function v(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) ce._data(n, "globalEval", !t || ce._data(t[i], "globalEval"))
        }

        function y(e, t) {
            if (1 === t.nodeType && ce.hasData(e)) {
                var n, i, o, r = ce._data(e),
                    s = ce._data(t, r),
                    a = r.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (n in a)
                        for (i = 0, o = a[n].length; i < o; i++) ce.event.add(t, n, a[n][i])
                }
                s.data && (s.data = ce.extend({}, s.data))
            }
        }

        function b(e, t) {
            var n, i, o;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ce.support.noCloneEvent && t[ce.expando]) {
                    o = ce._data(t);
                    for (i in o.events) ce.removeEvent(t, i, o.handle);
                    t.removeAttribute(ce.expando)
                }
                "script" === n && t.text !== e.text ? (g(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ce.support.html5Clone && e.innerHTML && !ce.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }

        function x(e, n) {
            var i, o, r = 0,
                s = typeof e.getElementsByTagName !== Q ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== Q ? e.querySelectorAll(n || "*") : t;
            if (!s)
                for (s = [], i = e.childNodes || e; null != (o = i[r]); r++) !n || ce.nodeName(o, n) ? s.push(o) : ce.merge(s, x(o, n));
            return n === t || n && ce.nodeName(e, n) ? ce.merge([e], s) : s
        }

        function w(e) {
            et.test(e.type) && (e.defaultChecked = e.checked)
        }

        function _(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = Tt.length; o--;)
                if ((t = Tt[o] + n) in e) return t;
            return i
        }

        function T(e, t) {
            return e = t || e, "none" === ce.css(e, "display") || !ce.contains(e.ownerDocument, e)
        }

        function S(e, t) {
            for (var n, i, o, r = [], s = 0, a = e.length; s < a; s++) i = e[s], i.style && (r[s] = ce._data(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && T(i) && (r[s] = ce._data(i, "olddisplay", N(i.nodeName)))) : r[s] || (o = T(i), (n && "none" !== n || !o) && ce._data(i, "olddisplay", o ? n : ce.css(i, "display"))));
            for (s = 0; s < a; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
            return e
        }

        function C(e, t, n) {
            var i = mt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function E(e, t, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; r < 4; r += 2) "margin" === n && (s += ce.css(e, n + _t[r], !0, o)), i ? ("content" === n && (s -= ce.css(e, "padding" + _t[r], !0, o)), "margin" !== n && (s -= ce.css(e, "border" + _t[r] + "Width", !0, o))) : (s += ce.css(e, "padding" + _t[r], !0, o), "padding" !== n && (s += ce.css(e, "border" + _t[r] + "Width", !0, o)));
            return s
        }

        function k(e, t, n) {
            var i = !0,
                o = "width" === t ? e.offsetWidth : e.offsetHeight,
                r = ct(e),
                s = ce.support.boxSizing && "border-box" === ce.css(e, "boxSizing", !1, r);
            if (o <= 0 || null == o) {
                if (o = ut(e, t, r), (o < 0 || null == o) && (o = e.style[t]), vt.test(o)) return o;
                i = s && (ce.support.boxSizingReliable || o === e.style[t]), o = parseFloat(o) || 0
            }
            return o + E(e, t, n || (s ? "border" : "content"), i, r) + "px"
        }

        function N(e) {
            var t = K,
                n = bt[e];
            return n || (n = I(e, t), "none" !== n && n || (lt = (lt || ce("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (lt[0].contentWindow || lt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = I(e, t), lt.detach()), bt[e] = n), n
        }

        function I(e, t) {
            var n = ce(t.createElement(e)).appendTo(t.body),
                i = ce.css(n[0], "display");
            return n.remove(), i
        }

        function D(e, t, n, i) {
            var o;
            if (ce.isArray(t)) ce.each(t, function(t, o) {
                n || Ct.test(e) ? i(e, o) : D(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
            });
            else if (n || "object" !== ce.type(t)) i(e, t);
            else
                for (o in t) D(e + "[" + o + "]", t[o], n, i)
        }

        function A(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0,
                    r = t.toLowerCase().match(pe) || [];
                if (ce.isFunction(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function j(e, t, n, i) {
            function o(a) {
                var l;
                return r[a] = !0, ce.each(e[a] || [], function(e, a) {
                    var c = a(t, n, i);
                    return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
                }), l
            }
            var r = {},
                s = e === Xt;
            return o(t.dataTypes[0]) || !r["*"] && o("*")
        }

        function P(e, n) {
            var i, o, r = ce.ajaxSettings.flatOptions || {};
            for (o in n) n[o] !== t && ((r[o] ? e : i || (i = {}))[o] = n[o]);
            return i && ce.extend(!0, e, i), e
        }

        function M(e, n, i) {
            for (var o, r, s, a, l = e.contents, c = e.dataTypes;
                "*" === c[0];) c.shift(), r === t && (r = e.mimeType || n.getResponseHeader("Content-Type"));
            if (r)
                for (a in l)
                    if (l[a] && l[a].test(r)) {
                        c.unshift(a);
                        break
                    }
            if (c[0] in i) s = c[0];
            else {
                for (a in i) {
                    if (!c[0] || e.converters[a + " " + c[0]]) {
                        s = a;
                        break
                    }
                    o || (o = a)
                }
                s = s || o
            }
            if (s) return s !== c[0] && c.unshift(s), i[s]
        }

        function H(e, t, n, i) {
            var o, r, s, a, l, c = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
            for (r = u.shift(); r;)
                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (!(s = c[l + " " + r] || c["* " + r]))
                    for (o in c)
                        if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                            !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                            break
                        }
                if (!0 !== s)
                    if (s && e.throws) t = s(t);
                    else try {
                        t = s(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: s ? e : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function L() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {}
        }

        function q() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function O() {
            return setTimeout(function() {
                Kt = t
            }), Kt = ce.now()
        }

        function F(e, t, n) {
            for (var i, o = (nn[t] || []).concat(nn["*"]), r = 0, s = o.length; r < s; r++)
                if (i = o[r].call(n, t, e)) return i
        }

        function z(e, t, n) {
            var i, o, r = 0,
                s = tn.length,
                a = ce.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var t = Kt || O(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; s < l; s++) c.tweens[s].run(r);
                    return a.notifyWith(e, [c, r, n]), r < 1 && l ? n : (a.resolveWith(e, [c]), !1)
                },
                c = a.promise({
                    elem: e,
                    props: ce.extend({}, t),
                    opts: ce.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Kt || O(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = ce.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) c.tweens[n].run(1);
                        return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (B(u, c.opts.specialEasing); r < s; r++)
                if (i = tn[r].call(c, e, u, c.opts)) return i;
            return ce.map(u, F, c), ce.isFunction(c.opts.start) && c.opts.start.call(e, c), ce.fx.timer(ce.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function B(e, t) {
            var n, i, o, r, s;
            for (n in e)
                if (i = ce.camelCase(n), o = t[i], r = e[n], ce.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = ce.cssHooks[i]) && "expand" in s) {
                    r = s.expand(r), delete e[i];
                    for (n in r) n in e || (e[n] = r[n], t[n] = o)
                } else t[i] = o
        }

        function X(e, t, n) {
            var i, o, r, s, a, l, c = this,
                u = {},
                p = e.style,
                h = e.nodeType && T(e),
                d = ce._data(e, "fxshow");
            n.queue || (a = ce._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, c.always(function() {
                c.always(function() {
                    a.unqueued--, ce.queue(e, "fx").length || a.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ce.css(e, "display") && "none" === ce.css(e, "float") && (ce.support.inlineBlockNeedsLayout && "inline" !== N(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ce.support.shrinkWrapBlocks || c.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (o = t[i], Gt.exec(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) continue;
                    u[i] = d && d[i] || ce.style(e, i)
                }
            if (!ce.isEmptyObject(u)) {
                d ? "hidden" in d && (h = d.hidden) : d = ce._data(e, "fxshow", {}), r && (d.hidden = !h), h ? ce(e).show() : c.done(function() {
                    ce(e).hide()
                }), c.done(function() {
                    var t;
                    ce._removeData(e, "fxshow");
                    for (t in u) ce.style(e, t, u[t])
                });
                for (i in u) s = F(h ? d[i] : 0, i, c), i in d || (d[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function W(e, t, n, i, o) {
            return new W.prototype.init(e, t, n, i, o)
        }

        function R(e, t) {
            var n, i = {
                    height: e
                },
                o = 0;
            for (t = t ? 1 : 0; o < 4; o += 2 - t) n = _t[o], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function Y(e) {
            return ce.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var U, $, Q = typeof t,
            V = e.location,
            K = e.document,
            J = K.documentElement,
            G = e.jQuery,
            Z = e.$,
            ee = {},
            te = [],
            ne = te.concat,
            ie = te.push,
            oe = te.slice,
            re = te.indexOf,
            se = ee.toString,
            ae = ee.hasOwnProperty,
            le = "1.10.2".trim,
            ce = function(e, t) {
                return new ce.fn.init(e, t, $)
            },
            ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            pe = /\S+/g,
            he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            de = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            fe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ge = /^[\],:{}\s]*$/,
            me = /(?:^|:|,)(?:\s*\[)+/g,
            ve = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            ye = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            be = /^-ms-/,
            xe = /-([\da-z])/gi,
            we = function(e, t) {
                return t.toUpperCase()
            },
            _e = function(e) {
                (K.addEventListener || "load" === e.type || "complete" === K.readyState) && (Te(), ce.ready())
            },
            Te = function() {
                K.addEventListener ? (K.removeEventListener("DOMContentLoaded", _e, !1), e.removeEventListener("load", _e, !1)) : (K.detachEvent("onreadystatechange", _e), e.detachEvent("onload", _e))
            };
        ce.fn = ce.prototype = {
                jquery: "1.10.2",
                constructor: ce,
                init: function(e, n, i) {
                    var o, r;
                    if (!e) return this;
                    if ("string" == typeof e) {
                        if (!(o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : de.exec(e)) || !o[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                        if (o[1]) {
                            if (n = n instanceof ce ? n[0] : n, ce.merge(this, ce.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : K, !0)), fe.test(o[1]) && ce.isPlainObject(n))
                                for (o in n) ce.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                            return this
                        }
                        if ((r = K.getElementById(o[2])) && r.parentNode) {
                            if (r.id !== o[2]) return i.find(e);
                            this.length = 1, this[0] = r
                        }
                        return this.context = K, this.selector = e, this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ce.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ce.makeArray(e, this))
                },
                selector: "",
                length: 0,
                toArray: function() {
                    return oe.call(this)
                },
                get: function(e) {
                    return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
                },
                pushStack: function(e) {
                    var t = ce.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function(e, t) {
                    return ce.each(this, e, t)
                },
                ready: function(e) {
                    return ce.ready.promise().done(e), this
                },
                slice: function() {
                    return this.pushStack(oe.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                map: function(e) {
                    return this.pushStack(ce.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: ie,
                sort: [].sort,
                splice: [].splice
            }, ce.fn.init.prototype = ce.fn, ce.extend = ce.fn.extend = function() {
                var e, n, i, o, r, s, a = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ce.isFunction(a) || (a = {}), c === l && (a = this, --l); l < c; l++)
                    if (null != (r = arguments[l]))
                        for (o in r) e = a[o], i = r[o], a !== i && (u && i && (ce.isPlainObject(i) || (n = ce.isArray(i))) ? (n ? (n = !1, s = e && ce.isArray(e) ? e : []) : s = e && ce.isPlainObject(e) ? e : {}, a[o] = ce.extend(u, s, i)) : i !== t && (a[o] = i));
                return a
            }, ce.extend({
                expando: "jQuery" + ("1.10.2" + Math.random()).replace(/\D/g, ""),
                noConflict: function(t) {
                    return e.$ === ce && (e.$ = Z), t && e.jQuery === ce && (e.jQuery = G), ce
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? ce.readyWait++ : ce.ready(!0)
                },
                ready: function(e) {
                    if (!0 === e ? !--ce.readyWait : !ce.isReady) {
                        if (!K.body) return setTimeout(ce.ready);
                        ce.isReady = !0, !0 !== e && --ce.readyWait > 0 || (U.resolveWith(K, [ce]), ce.fn.trigger && ce(K).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(e) {
                    return "function" === ce.type(e)
                },
                isArray: Array.isArray || function(e) {
                    return "array" === ce.type(e)
                },
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? ee[se.call(e)] || "object" : typeof e
                },
                isPlainObject: function(e) {
                    var n;
                    if (!e || "object" !== ce.type(e) || e.nodeType || ce.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !ae.call(e, "constructor") && !ae.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (e) {
                        return !1
                    }
                    if (ce.support.ownLast)
                        for (n in e) return ae.call(e, n);
                    for (n in e);
                    return n === t || ae.call(e, n)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                error: function(e) {
                    throw new Error(e)
                },
                parseHTML: function(e, t, n) {
                    if (!e || "string" != typeof e) return null;
                    "boolean" == typeof t && (n = t, t = !1), t = t || K;
                    var i = fe.exec(e),
                        o = !n && [];
                    return i ? [t.createElement(i[1])] : (i = ce.buildFragment([e], t, o), o && ce(o).remove(), ce.merge([], i.childNodes))
                },
                parseJSON: function(t) {
                    return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = ce.trim(t)) && ge.test(t.replace(ve, "@").replace(ye, "]").replace(me, "")) ? new Function("return " + t)() : void ce.error("Invalid JSON: " + t)
                },
                parseXML: function(n) {
                    var i, o;
                    if (!n || "string" != typeof n) return null;
                    try {
                        e.DOMParser ? (o = new DOMParser, i = o.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                    } catch (e) {
                        i = t
                    }
                    return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ce.error("Invalid XML: " + n), i
                },
                noop: function() {},
                globalEval: function(t) {
                    t && ce.trim(t) && (e.execScript || function(t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function(e) {
                    return e.replace(be, "ms-").replace(xe, we)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t, i) {
                    var o = 0,
                        r = e.length,
                        s = n(e);
                    if (i) {
                        if (s)
                            for (; o < r && !1 !== t.apply(e[o], i); o++);
                        else
                            for (o in e)
                                if (!1 === t.apply(e[o], i)) break
                    } else if (s)
                        for (; o < r && !1 !== t.call(e[o], o, e[o]); o++);
                    else
                        for (o in e)
                            if (!1 === t.call(e[o], o, e[o])) break;
                    return e
                },
                trim: le && !le.call("\ufeff ") ? function(e) {
                    return null == e ? "" : le.call(e)
                } : function(e) {
                    return null == e ? "" : (e + "").replace(he, "")
                },
                makeArray: function(e, t) {
                    var i = t || [];
                    return null != e && (n(Object(e)) ? ce.merge(i, "string" == typeof e ? [e] : e) : ie.call(i, e)), i
                },
                inArray: function(e, t, n) {
                    var i;
                    if (t) {
                        if (re) return re.call(t, e, n);
                        for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function(e, n) {
                    var i = n.length,
                        o = e.length,
                        r = 0;
                    if ("number" == typeof i)
                        for (; r < i; r++) e[o++] = n[r];
                    else
                        for (; n[r] !== t;) e[o++] = n[r++];
                    return e.length = o, e
                },
                grep: function(e, t, n) {
                    var i, o = [],
                        r = 0,
                        s = e.length;
                    for (n = !!n; r < s; r++) i = !!t(e[r], r), n !== i && o.push(e[r]);
                    return o
                },
                map: function(e, t, i) {
                    var o, r = 0,
                        s = e.length,
                        a = n(e),
                        l = [];
                    if (a)
                        for (; r < s; r++) null != (o = t(e[r], r, i)) && (l[l.length] = o);
                    else
                        for (r in e) null != (o = t(e[r], r, i)) && (l[l.length] = o);
                    return ne.apply([], l)
                },
                guid: 1,
                proxy: function(e, n) {
                    var i, o, r;
                    return "string" == typeof n && (r = e[n], n = e, e = r), ce.isFunction(e) ? (i = oe.call(arguments, 2), o = function() {
                        return e.apply(n || this, i.concat(oe.call(arguments)))
                    }, o.guid = e.guid = e.guid || ce.guid++, o) : t
                },
                access: function(e, n, i, o, r, s, a) {
                    var l = 0,
                        c = e.length,
                        u = null == i;
                    if ("object" === ce.type(i)) {
                        r = !0;
                        for (l in i) ce.access(e, n, l, i[l], !0, s, a)
                    } else if (o !== t && (r = !0, ce.isFunction(o) || (a = !0), u && (a ? (n.call(e, o), n = null) : (u = n, n = function(e, t, n) {
                            return u.call(ce(e), n)
                        })), n))
                        for (; l < c; l++) n(e[l], i, a ? o : o.call(e[l], l, n(e[l], i)));
                    return r ? e : u ? n.call(e) : c ? n(e[0], i) : s
                },
                now: function() {
                    return (new Date).getTime()
                },
                swap: function(e, t, n, i) {
                    var o, r, s = {};
                    for (r in t) s[r] = e.style[r], e.style[r] = t[r];
                    o = n.apply(e, i || []);
                    for (r in t) e.style[r] = s[r];
                    return o
                }
            }), ce.ready.promise = function(t) {
                if (!U)
                    if (U = ce.Deferred(), "complete" === K.readyState) setTimeout(ce.ready);
                    else if (K.addEventListener) K.addEventListener("DOMContentLoaded", _e, !1), e.addEventListener("load", _e, !1);
                else {
                    K.attachEvent("onreadystatechange", _e), e.attachEvent("onload", _e);
                    var n = !1;
                    try {
                        n = null == e.frameElement && K.documentElement
                    } catch (e) {}
                    n && n.doScroll && function e() {
                        if (!ce.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (t) {
                                return setTimeout(e, 50)
                            }
                            Te(), ce.ready()
                        }
                    }()
                }
                return U.promise(t)
            }, ce.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                ee["[object " + t + "]"] = t.toLowerCase()
            }), $ = ce(K),
            function(e, t) {
                function n(e, t, n, i) {
                    var o, r, s, a, l, c, h, d, f, g;
                    if ((t ? t.ownerDocument || t : O) !== D && I(t), t = t || D, n = n || [], !e || "string" != typeof e) return n;
                    if (1 !== (a = t.nodeType) && 9 !== a) return [];
                    if (j && !i) {
                        if (o = me.exec(e))
                            if (s = o[1]) {
                                if (9 === a) {
                                    if (!(r = t.getElementById(s)) || !r.parentNode) return n;
                                    if (r.id === s) return n.push(r), n
                                } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && L(t, r) && r.id === s) return n.push(r), n
                            } else {
                                if (o[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                                if ((s = o[3]) && w.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(s)), n
                            }
                        if (w.qsa && (!P || !P.test(e))) {
                            if (d = h = q, f = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                                for (c = u(e), (h = t.getAttribute("id")) ? d = h.replace(be, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;) c[l] = d + p(c[l]);
                                f = ue.test(e) && t.parentNode || t, g = c.join(",")
                            }
                            if (g) try {
                                return J.apply(n, f.querySelectorAll(g)), n
                            } catch (e) {} finally {
                                h || t.removeAttribute("id")
                            }
                        }
                    }
                    return b(e.replace(se, "$1"), t, n, i)
                }

                function i() {
                    function e(n, i) {
                        return t.push(n += " ") > T.cacheLength && delete e[t.shift()], e[n] = i
                    }
                    var t = [];
                    return e
                }

                function o(e) {
                    return e[q] = !0, e
                }

                function r(e) {
                    var t = D.createElement("div");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function s(e, t) {
                    for (var n = e.split("|"), i = e.length; i--;) T.attrHandle[n[i]] = t
                }

                function a(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function l(e) {
                    return o(function(t) {
                        return t = +t, o(function(n, i) {
                            for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                        })
                    })
                }

                function c() {}

                function u(e, t) {
                    var i, o, r, s, a, l, c, u = X[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (a = e, l = [], c = T.preFilter; a;) {
                        i && !(o = ae.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = le.exec(a)) && (i = o.shift(), r.push({
                            value: i,
                            type: o[0].replace(se, " ")
                        }), a = a.slice(i.length));
                        for (s in T.filter) !(o = fe[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                            value: i,
                            type: s,
                            matches: o
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return t ? a.length : a ? n.error(e) : X(e, l).slice(0)
                }

                function p(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i
                }

                function h(e, t, n) {
                    var i = t.dir,
                        o = n && "parentNode" === i,
                        r = z++;
                    return t.first ? function(t, n, r) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || o) return e(t, n, r)
                    } : function(t, n, s) {
                        var a, l, c, u = F + " " + r;
                        if (s) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || o)
                                    if (c = t[q] || (t[q] = {}), (l = c[i]) && l[0] === u) {
                                        if (!0 === (a = l[1]) || a === _) return !0 === a
                                    } else if (l = c[i] = [u], l[1] = e(t, n, s) || _, !0 === l[1]) return !0
                    }
                }

                function d(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var o = e.length; o--;)
                            if (!e[o](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function f(e, t, n, i, o) {
                    for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
                    return s
                }

                function g(e, t, n, i, r, s) {
                    return i && !i[q] && (i = g(i)), r && !r[q] && (r = g(r, s)), o(function(o, s, a, l) {
                        var c, u, p, h = [],
                            d = [],
                            g = s.length,
                            m = o || y(t || "*", a.nodeType ? [a] : a, []),
                            v = !e || !o && t ? m : f(m, h, e, a, l),
                            b = n ? r || (o ? e : g || i) ? [] : s : v;
                        if (n && n(v, b, a, l), i)
                            for (c = f(b, d), i(c, [], a, l), u = c.length; u--;)(p = c[u]) && (b[d[u]] = !(v[d[u]] = p));
                        if (o) {
                            if (r || e) {
                                if (r) {
                                    for (c = [], u = b.length; u--;)(p = b[u]) && c.push(v[u] = p);
                                    r(null, b = [], c, l)
                                }
                                for (u = b.length; u--;)(p = b[u]) && (c = r ? Z.call(o, p) : h[u]) > -1 && (o[c] = !(s[c] = p))
                            }
                        } else b = f(b === s ? b.splice(g, b.length) : b), r ? r(null, s, b, l) : J.apply(s, b)
                    })
                }

                function m(e) {
                    for (var t, n, i, o = e.length, r = T.relative[e[0].type], s = r || T.relative[" "], a = r ? 1 : 0, l = h(function(e) {
                            return e === t
                        }, s, !0), c = h(function(e) {
                            return Z.call(t, e) > -1
                        }, s, !0), u = [function(e, n, i) {
                            return !r && (i || n !== k) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
                        }]; a < o; a++)
                        if (n = T.relative[e[a].type]) u = [h(d(u), n)];
                        else {
                            if (n = T.filter[e[a].type].apply(null, e[a].matches), n[q]) {
                                for (i = ++a; i < o && !T.relative[e[i].type]; i++);
                                return g(a > 1 && d(u), a > 1 && p(e.slice(0, a - 1).concat({
                                    value: " " === e[a - 2].type ? "*" : ""
                                })).replace(se, "$1"), n, a < i && m(e.slice(a, i)), i < o && m(e = e.slice(i)), i < o && p(e))
                            }
                            u.push(n)
                        }
                    return d(u)
                }

                function v(e, t) {
                    var i = 0,
                        r = t.length > 0,
                        s = e.length > 0,
                        a = function(o, a, l, c, u) {
                            var p, h, d, g = [],
                                m = 0,
                                v = "0",
                                y = o && [],
                                b = null != u,
                                x = k,
                                w = o || s && T.find.TAG("*", u && a.parentNode || a),
                                S = F += null == x ? 1 : Math.random() || .1;
                            for (b && (k = a !== D && a, _ = i); null != (p = w[v]); v++) {
                                if (s && p) {
                                    for (h = 0; d = e[h++];)
                                        if (d(p, a, l)) {
                                            c.push(p);
                                            break
                                        }
                                    b && (F = S, _ = ++i)
                                }
                                r && ((p = !d && p) && m--, o && y.push(p))
                            }
                            if (m += v, r && v !== m) {
                                for (h = 0; d = t[h++];) d(y, g, a, l);
                                if (o) {
                                    if (m > 0)
                                        for (; v--;) y[v] || g[v] || (g[v] = V.call(c));
                                    g = f(g)
                                }
                                J.apply(c, g), b && !o && g.length > 0 && m + t.length > 1 && n.uniqueSort(c)
                            }
                            return b && (F = S, k = x), y
                        };
                    return r ? o(a) : a
                }

                function y(e, t, i) {
                    for (var o = 0, r = t.length; o < r; o++) n(e, t[o], i);
                    return i
                }

                function b(e, t, n, i) {
                    var o, r, s, a, l, c = u(e);
                    if (!i && 1 === c.length) {
                        if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === t.nodeType && j && T.relative[r[1].type]) {
                            if (!(t = (T.find.ID(s.matches[0].replace(xe, we), t) || [])[0])) return n;
                            e = e.slice(r.shift().value.length)
                        }
                        for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !T.relative[a = s.type]);)
                            if ((l = T.find[a]) && (i = l(s.matches[0].replace(xe, we), ue.test(r[0].type) && t.parentNode || t))) {
                                if (r.splice(o, 1), !(e = i.length && p(r))) return J.apply(n, i), n;
                                break
                            }
                    }
                    return E(e, c)(i, t, !j, n, ue.test(e)), n
                }
                var x, w, _, T, S, C, E, k, N, I, D, A, j, P, M, H, L, q = "sizzle" + -new Date,
                    O = e.document,
                    F = 0,
                    z = 0,
                    B = i(),
                    X = i(),
                    W = i(),
                    R = !1,
                    Y = function(e, t) {
                        return e === t ? (R = !0, 0) : 0
                    },
                    U = 1 << 31,
                    $ = {}.hasOwnProperty,
                    Q = [],
                    V = Q.pop,
                    K = Q.push,
                    J = Q.push,
                    G = Q.slice,
                    Z = Q.indexOf || function(e) {
                        for (var t = 0, n = this.length; t < n; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    te = "[\\x20\\t\\r\\n\\f]",
                    ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ie = ne.replace("w", "w#"),
                    oe = "\\[" + te + "*(" + ne + ")" + te + "*(?:([*^$|!~]?=)" + te + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ie + ")|)|)" + te + "*\\]",
                    re = ":(" + ne + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + oe.replace(3, 8) + ")*)|.*)\\)|)",
                    se = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
                    ae = new RegExp("^" + te + "*," + te + "*"),
                    le = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
                    ue = new RegExp(te + "*[+~]"),
                    pe = new RegExp("=" + te + "*([^\\]'\"]*)" + te + "*\\]", "g"),
                    he = new RegExp(re),
                    de = new RegExp("^" + ie + "$"),
                    fe = {
                        ID: new RegExp("^#(" + ne + ")"),
                        CLASS: new RegExp("^\\.(" + ne + ")"),
                        TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + oe),
                        PSEUDO: new RegExp("^" + re),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + ee + ")$", "i"),
                        needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i")
                    },
                    ge = /^[^{]+\{\s*\[native \w/,
                    me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ve = /^(?:input|select|textarea|button)$/i,
                    ye = /^h\d$/i,
                    be = /'|\\/g,
                    xe = new RegExp("\\\\([\\da-f]{1,6}" + te + "?|(" + te + ")|.)", "ig"),
                    we = function(e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    };
                try {
                    J.apply(Q = G.call(O.childNodes), O.childNodes), Q[O.childNodes.length].nodeType
                } catch (e) {
                    J = {
                        apply: Q.length ? function(e, t) {
                            K.apply(e, G.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
                C = n.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, w = n.support = {}, I = n.setDocument = function(e) {
                    var t = e ? e.ownerDocument || e : O,
                        n = t.defaultView;
                    return t !== D && 9 === t.nodeType && t.documentElement ? (D = t, A = t.documentElement, j = !C(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function() {
                        I()
                    }), w.attributes = r(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), w.getElementsByTagName = r(function(e) {
                        return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
                    }), w.getElementsByClassName = r(function(e) {
                        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                    }), w.getById = r(function(e) {
                        return A.appendChild(e).id = q, !t.getElementsByName || !t.getElementsByName(q).length
                    }), w.getById ? (T.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && j) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, T.filter.ID = function(e) {
                        var t = e.replace(xe, we);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete T.find.ID, T.filter.ID = function(e) {
                        var t = e.replace(xe, we);
                        return function(e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                        if (void 0 !== t.getElementsByTagName) return t.getElementsByTagName(e)
                    } : function(e, t) {
                        var n, i = [],
                            o = 0,
                            r = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return r
                    }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && j) return t.getElementsByClassName(e)
                    }, M = [], P = [], (w.qsa = ge.test(t.querySelectorAll)) && (r(function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || P.push("\\[" + te + "*(?:value|" + ee + ")"), e.querySelectorAll(":checked").length || P.push(":checked")
                    }), r(function(e) {
                        var n = t.createElement("input");
                        n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && P.push("[*^$]=" + te + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
                    })), (w.matchesSelector = ge.test(H = A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && r(function(e) {
                        w.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), M.push("!=", re)
                    }), P = P.length && new RegExp(P.join("|")), M = M.length && new RegExp(M.join("|")), L = ge.test(A.contains) || A.compareDocumentPosition ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, Y = A.compareDocumentPosition ? function(e, n) {
                        if (e === n) return R = !0, 0;
                        var i = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                        return i ? 1 & i || !w.sortDetached && n.compareDocumentPosition(e) === i ? e === t || L(O, e) ? -1 : n === t || L(O, n) ? 1 : N ? Z.call(N, e) - Z.call(N, n) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                    } : function(e, n) {
                        var i, o = 0,
                            r = e.parentNode,
                            s = n.parentNode,
                            l = [e],
                            c = [n];
                        if (e === n) return R = !0, 0;
                        if (!r || !s) return e === t ? -1 : n === t ? 1 : r ? -1 : s ? 1 : N ? Z.call(N, e) - Z.call(N, n) : 0;
                        if (r === s) return a(e, n);
                        for (i = e; i = i.parentNode;) l.unshift(i);
                        for (i = n; i = i.parentNode;) c.unshift(i);
                        for (; l[o] === c[o];) o++;
                        return o ? a(l[o], c[o]) : l[o] === O ? -1 : c[o] === O ? 1 : 0
                    }, t) : D
                }, n.matches = function(e, t) {
                    return n(e, null, null, t)
                }, n.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== D && I(e), t = t.replace(pe, "='$1']"), w.matchesSelector && j && (!M || !M.test(t)) && (!P || !P.test(t))) try {
                        var i = H.call(e, t);
                        if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (e) {}
                    return n(t, D, null, [e]).length > 0
                }, n.contains = function(e, t) {
                    return (e.ownerDocument || e) !== D && I(e), L(e, t)
                }, n.attr = function(e, t) {
                    (e.ownerDocument || e) !== D && I(e);
                    var n = T.attrHandle[t.toLowerCase()],
                        i = n && $.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
                    return void 0 === i ? w.attributes || !j ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null : i
                }, n.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, n.uniqueSort = function(e) {
                    var t, n = [],
                        i = 0,
                        o = 0;
                    if (R = !w.detectDuplicates, N = !w.sortStable && e.slice(0), e.sort(Y), R) {
                        for (; t = e[o++];) t === e[o] && (i = n.push(o));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return e
                }, S = n.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        for (; t = e[i]; i++) n += S(t);
                    return n
                }, T = n.selectors = {
                    cacheLength: 50,
                    createPseudo: o,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(xe, we), e[3] = (e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[5] && e[2];
                            return fe.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && he.test(n) && (t = u(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(xe, we).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = B[e + " "];
                            return t || (t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) && B(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, i) {
                            return function(o) {
                                var r = n.attr(o, e);
                                return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === i : "!=" === t ? r !== i : "^=" === t ? i && 0 === r.indexOf(i) : "*=" === t ? i && r.indexOf(i) > -1 : "$=" === t ? i && r.slice(-i.length) === i : "~=" === t ? (" " + r + " ").indexOf(i) > -1 : "|=" === t && (r === i || r.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(e, t, n, i, o) {
                            var r = "nth" !== e.slice(0, 3),
                                s = "last" !== e.slice(-4),
                                a = "of-type" === t;
                            return 1 === i && 0 === o ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, l) {
                                var c, u, p, h, d, f, g = r !== s ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    v = a && t.nodeName.toLowerCase(),
                                    y = !l && !a;
                                if (m) {
                                    if (r) {
                                        for (; g;) {
                                            for (p = t; p = p[g];)
                                                if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                            f = g = "only" === e && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                        for (u = m[q] || (m[q] = {}), c = u[e] || [], d = c[0] === F && c[1], h = c[0] === F && c[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (h = d = 0) || f.pop();)
                                            if (1 === p.nodeType && ++h && p === t) {
                                                u[e] = [F, d, h];
                                                break
                                            }
                                    } else if (y && (c = (t[q] || (t[q] = {}))[e]) && c[0] === F) h = c[1];
                                    else
                                        for (;
                                            (p = ++d && p && p[g] || (h = d = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++h || (y && ((p[q] || (p[q] = {}))[e] = [F, h]), p !== t)););
                                    return (h -= o) === i || h % i == 0 && h / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var i, r = T.pseudos[e] || T.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                            return r[q] ? r(t) : r.length > 1 ? (i = [e, e, "", t], T.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, n) {
                                for (var i, o = r(e, t), s = o.length; s--;) i = Z.call(e, o[s]), e[i] = !(n[i] = o[s])
                            }) : function(e) {
                                return r(e, 0, i)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: o(function(e) {
                            var t = [],
                                n = [],
                                i = E(e.replace(se, "$1"));
                            return i[q] ? o(function(e, t, n, o) {
                                for (var r, s = i(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                            }) : function(e, o, r) {
                                return t[0] = e, i(t, null, r, n), !n.pop()
                            }
                        }),
                        has: o(function(e) {
                            return function(t) {
                                return n(e, t).length > 0
                            }
                        }),
                        contains: o(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                            }
                        }),
                        lang: o(function(e) {
                            return de.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(),
                                function(t) {
                                    var n;
                                    do {
                                        if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === A
                        },
                        focus: function(e) {
                            return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return !1 === e.disabled
                        },
                        disabled: function(e) {
                            return !0 === e.disabled
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !T.pseudos.empty(e)
                        },
                        header: function(e) {
                            return ye.test(e.nodeName)
                        },
                        input: function(e) {
                            return ve.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                        },
                        first: l(function() {
                            return [0]
                        }),
                        last: l(function(e, t) {
                            return [t - 1]
                        }),
                        eq: l(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: l(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: l(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: l(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: l(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }, T.pseudos.nth = T.pseudos.eq;
                for (x in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) T.pseudos[x] = function(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }(x);
                for (x in {
                        submit: !0,
                        reset: !0
                    }) T.pseudos[x] = function(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }(x);
                c.prototype = T.filters = T.pseudos, T.setFilters = new c, E = n.compile = function(e, t) {
                    var n, i = [],
                        o = [],
                        r = W[e + " "];
                    if (!r) {
                        for (t || (t = u(e)), n = t.length; n--;) r = m(t[n]), r[q] ? i.push(r) : o.push(r);
                        r = W(e, v(o, i))
                    }
                    return r
                }, w.sortStable = q.split("").sort(Y).join("") === q, w.detectDuplicates = R, I(), w.sortDetached = r(function(e) {
                    return 1 & e.compareDocumentPosition(D.createElement("div"))
                }), r(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || s("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), w.attributes && r(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || s("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), r(function(e) {
                    return null == e.getAttribute("disabled")
                }) || s(ee, function(e, t, n) {
                    var i;
                    if (!n) return (i = e.getAttributeNode(t)) && i.specified ? i.value : !0 === e[t] ? t.toLowerCase() : null
                }), ce.find = n, ce.expr = n.selectors, ce.expr[":"] = ce.expr.pseudos, ce.unique = n.uniqueSort, ce.text = n.getText, ce.isXMLDoc = n.isXML, ce.contains = n.contains
            }(e);
        var Se = {};
        ce.Callbacks = function(e) {
            e = "string" == typeof e ? Se[e] || i(e) : ce.extend({}, e);
            var n, o, r, s, a, l, c = [],
                u = !e.once && [],
                p = function(t) {
                    for (o = e.memory && t, r = !0, a = l || 0, l = 0, s = c.length, n = !0; c && a < s; a++)
                        if (!1 === c[a].apply(t[0], t[1]) && e.stopOnFalse) {
                            o = !1;
                            break
                        }
                    n = !1, c && (u ? u.length && p(u.shift()) : o ? c = [] : h.disable())
                },
                h = {
                    add: function() {
                        if (c) {
                            var t = c.length;
                            ! function t(n) {
                                ce.each(n, function(n, i) {
                                    var o = ce.type(i);
                                    "function" === o ? e.unique && h.has(i) || c.push(i) : i && i.length && "string" !== o && t(i)
                                })
                            }(arguments), n ? s = c.length : o && (l = t, p(o))
                        }
                        return this
                    },
                    remove: function() {
                        return c && ce.each(arguments, function(e, t) {
                            for (var i;
                                (i = ce.inArray(t, c, i)) > -1;) c.splice(i, 1), n && (i <= s && s--, i <= a && a--)
                        }), this
                    },
                    has: function(e) {
                        return e ? ce.inArray(e, c) > -1 : !(!c || !c.length)
                    },
                    empty: function() {
                        return c = [], s = 0, this
                    },
                    disable: function() {
                        return c = u = o = t, this
                    },
                    disabled: function() {
                        return !c
                    },
                    lock: function() {
                        return u = t, o || h.disable(), this
                    },
                    locked: function() {
                        return !u
                    },
                    fireWith: function(e, t) {
                        return !c || r && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : p(t)), this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return h
        }, ce.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", ce.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ce.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ce.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return ce.Deferred(function(n) {
                                ce.each(t, function(t, r) {
                                    var s = r[0],
                                        a = ce.isFunction(e[t]) && e[t];
                                    o[r[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && ce.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? ce.extend(e, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, ce.each(t, function(e, r) {
                    var s = r[2],
                        a = r[3];
                    i[r[1]] = s.add, a && s.add(function() {
                        n = a
                    }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), i.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t, n, i, o = 0,
                    r = oe.call(arguments),
                    s = r.length,
                    a = 1 !== s || e && ce.isFunction(e.promise) ? s : 0,
                    l = 1 === a ? e : ce.Deferred(),
                    c = function(e, n, i) {
                        return function(o) {
                            n[e] = this, i[e] = arguments.length > 1 ? oe.call(arguments) : o, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (t = new Array(s), n = new Array(s), i = new Array(s); o < s; o++) r[o] && ce.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, t)) : --a;
                return a || l.resolveWith(i, r), l.promise()
            }
        }), ce.support = function(t) {
            var n, i, o, r, s, a, l, c, u, p = K.createElement("div");
            if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], !(i = p.getElementsByTagName("a")[0]) || !i.style || !n.length) return t;
            r = K.createElement("select"), a = r.appendChild(K.createElement("option")), o = p.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== p.className, t.leadingWhitespace = 3 === p.firstChild.nodeType, t.tbody = !p.getElementsByTagName("tbody").length, t.htmlSerialize = !!p.getElementsByTagName("link").length, t.style = /top/.test(i.getAttribute("style")), t.hrefNormalized = "/a" === i.getAttribute("href"), t.opacity = /^0.5/.test(i.style.opacity), t.cssFloat = !!i.style.cssFloat, t.checkOn = !!o.value, t.optSelected = a.selected, t.enctype = !!K.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== K.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, r.disabled = !0, t.optDisabled = !a.disabled;
            try {
                delete p.test
            } catch (e) {
                t.deleteExpando = !1
            }
            o = K.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), s = K.createDocumentFragment(), s.appendChild(o), t.appendChecked = o.checked, t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() {
                t.noCloneEvent = !1
            }), p.cloneNode(!0).click());
            for (u in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) p.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || !1 === p.attributes[l].expando;
            p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === p.style.backgroundClip;
            for (u in ce(t)) break;
            return t.ownLast = "0" !== u, ce(function() {
                var n, i, o, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    s = K.getElementsByTagName("body")[0];
                s && (n = K.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = p.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ce.swap(s, null != s.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    t.boxSizing = 4 === p.offsetWidth
                }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
                    width: "4px"
                }).width, i = p.appendChild(K.createElement("div")), i.style.cssText = p.style.cssText = r, i.style.marginRight = i.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof p.style.zoom !== Q && (p.innerHTML = "", p.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(n), n = p = o = i = null)
            }), n = r = s = a = i = o = null, t
        }({});
        var Ce = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            Ee = /([A-Z])/g;
        ce.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return !!(e = e.nodeType ? ce.cache[e[ce.expando]] : e[ce.expando]) && !a(e)
            },
            data: function(e, t, n) {
                return o(e, t, n)
            },
            removeData: function(e, t) {
                return r(e, t)
            },
            _data: function(e, t, n) {
                return o(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return r(e, t, !0)
            },
            acceptData: function(e) {
                if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
                var t = e.nodeName && ce.noData[e.nodeName.toLowerCase()];
                return !t || !0 !== t && e.getAttribute("classid") === t
            }
        }), ce.fn.extend({
            data: function(e, n) {
                var i, o, r = null,
                    a = 0,
                    l = this[0];
                if (e === t) {
                    if (this.length && (r = ce.data(l), 1 === l.nodeType && !ce._data(l, "parsedAttrs"))) {
                        for (i = l.attributes; a < i.length; a++) o = i[a].name, 0 === o.indexOf("data-") && (o = ce.camelCase(o.slice(5)), s(l, o, r[o]));
                        ce._data(l, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    ce.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    ce.data(this, e, n)
                }) : l ? s(l, e, ce.data(l, e)) : null
            },
            removeData: function(e) {
                return this.each(function() {
                    ce.removeData(this, e)
                })
            }
        }), ce.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = ce._data(e, t), n && (!i || ce.isArray(n) ? i = ce._data(e, t, ce.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = ce.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = ce._queueHooks(e, t),
                    s = function() {
                        ce.dequeue(e, t)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ce._data(e, n) || ce._data(e, n, {
                    empty: ce.Callbacks("once memory").add(function() {
                        ce._removeData(e, t + "queue"), ce._removeData(e, n)
                    })
                })
            }
        }), ce.fn.extend({
            queue: function(e, n) {
                var i = 2;
                return "string" != typeof e && (n = e, e = "fx", i--), arguments.length < i ? ce.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = ce.queue(this, e, n);
                    ce._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ce.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ce.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = ce.fx ? ce.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var i, o = 1,
                    r = ce.Deferred(),
                    s = this,
                    a = this.length,
                    l = function() {
                        --o || r.resolveWith(s, [s])
                    };
                for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;)(i = ce._data(s[a], e + "queueHooks")) && i.empty && (o++, i.empty.add(l));
                return l(), r.promise(n)
            }
        });
        var ke, Ne, Ie = /[\t\r\n\f]/g,
            De = /\r/g,
            Ae = /^(?:input|select|textarea|button|object)$/i,
            je = /^(?:a|area)$/i,
            Pe = /^(?:checked|selected)$/i,
            Me = ce.support.getSetAttribute,
            He = ce.support.input;
        ce.fn.extend({
            attr: function(e, t) {
                return ce.access(this, ce.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ce.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return ce.access(this, ce.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = ce.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = t, delete this[e]
                    } catch (e) {}
                })
            },
            addClass: function(e) {
                var t, n, i, o, r, s = 0,
                    a = this.length,
                    l = "string" == typeof e && e;
                if (ce.isFunction(e)) return this.each(function(t) {
                    ce(this).addClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(pe) || []; s < a; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ie, " ") : " ")) {
                            for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            n.className = ce.trim(i)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, o, r, s = 0,
                    a = this.length,
                    l = 0 === arguments.length || "string" == typeof e && e;
                if (ce.isFunction(e)) return this.each(function(t) {
                    ce(this).removeClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(pe) || []; s < a; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ie, " ") : "")) {
                            for (r = 0; o = t[r++];)
                                for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                            n.className = e ? ce.trim(i) : ""
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ce.isFunction(e) ? this.each(function(n) {
                    ce(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var t, i = 0, o = ce(this), r = e.match(pe) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else n !== Q && "boolean" !== n || (this.className && ce._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ce._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ie, " ").indexOf(t) >= 0) return !0;
                return !1
            },
            val: function(e) {
                var n, i, o, r = this[0]; {
                    if (arguments.length) return o = ce.isFunction(e), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = o ? e.call(this, n, ce(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : ce.isArray(r) && (r = ce.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })), (i = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, r, "value") !== t || (this.value = r))
                    });
                    if (r) return (i = ce.valHooks[r.type] || ce.valHooks[r.nodeName.toLowerCase()]) && "get" in i && (n = i.get(r, "value")) !== t ? n : (n = r.value, "string" == typeof n ? n.replace(De, "") : null == n ? "" : n)
                }
            }
        }), ce.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = ce.find.attr(e, "value");
                        return null != t ? t : e.text
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, s = r ? null : [], a = r ? o + 1 : i.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
                            if (n = i[l], (n.selected || l === o) && (ce.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ce.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ce(n).val(), r) return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, r = ce.makeArray(t), s = o.length; s--;) i = o[s], (i.selected = ce.inArray(ce(i).val(), r) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), r
                    }
                }
            },
            attr: function(e, n, i) {
                var o, r, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === Q ? ce.prop(e, n, i) : (1 === s && ce.isXMLDoc(e) || (n = n.toLowerCase(), o = ce.attrHooks[n] || (ce.expr.match.bool.test(n) ? Ne : ke)), i === t ? o && "get" in o && null !== (r = o.get(e, n)) ? r : (r = ce.find.attr(e, n), null == r ? t : r) : null !== i ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r : (e.setAttribute(n, i + ""), i) : void ce.removeAttr(e, n))
            },
            removeAttr: function(e, t) {
                var n, i, o = 0,
                    r = t && t.match(pe);
                if (r && 1 === e.nodeType)
                    for (; n = r[o++];) i = ce.propFix[n] || n, ce.expr.match.bool.test(n) ? He && Me || !Pe.test(n) ? e[i] = !1 : e[ce.camelCase("default-" + n)] = e[i] = !1 : ce.attr(e, n, ""), e.removeAttribute(Me ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ce.support.radioValue && "radio" === t && ce.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function(e, n, i) {
                var o, r, s, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !ce.isXMLDoc(e), s && (n = ce.propFix[n] || n, r = ce.propHooks[n]), i !== t ? r && "set" in r && (o = r.set(e, i, n)) !== t ? o : e[n] = i : r && "get" in r && null !== (o = r.get(e, n)) ? o : e[n]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = ce.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Ae.test(e.nodeName) || je.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), Ne = {
            set: function(e, t, n) {
                return !1 === t ? ce.removeAttr(e, n) : He && Me || !Pe.test(n) ? e.setAttribute(!Me && ce.propFix[n] || n, n) : e[ce.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e, n) {
            var i = ce.expr.attrHandle[n] || ce.find.attr;
            ce.expr.attrHandle[n] = He && Me || !Pe.test(n) ? function(e, n, o) {
                var r = ce.expr.attrHandle[n],
                    s = o ? t : (ce.expr.attrHandle[n] = t) != i(e, n, o) ? n.toLowerCase() : null;
                return ce.expr.attrHandle[n] = r, s
            } : function(e, n, i) {
                return i ? t : e[ce.camelCase("default-" + n)] ? n.toLowerCase() : null
            }
        }), He && Me || (ce.attrHooks.value = {
            set: function(e, t, n) {
                if (!ce.nodeName(e, "input")) return ke && ke.set(e, t, n);
                e.defaultValue = t
            }
        }), Me || (ke = {
            set: function(e, n, i) {
                var o = e.getAttributeNode(i);
                return o || e.setAttributeNode(o = e.ownerDocument.createAttribute(i)), o.value = n += "", "value" === i || n === e.getAttribute(i) ? n : t
            }
        }, ce.expr.attrHandle.id = ce.expr.attrHandle.name = ce.expr.attrHandle.coords = function(e, n, i) {
            var o;
            return i ? t : (o = e.getAttributeNode(n)) && "" !== o.value ? o.value : null
        }, ce.valHooks.button = {
            get: function(e, n) {
                var i = e.getAttributeNode(n);
                return i && i.specified ? i.value : t
            },
            set: ke.set
        }, ce.attrHooks.contenteditable = {
            set: function(e, t, n) {
                ke.set(e, "" !== t && t, n)
            }
        }, ce.each(["width", "height"], function(e, t) {
            ce.attrHooks[t] = {
                set: function(e, n) {
                    if ("" === n) return e.setAttribute(t, "auto"), n
                }
            }
        })), ce.support.hrefNormalized || ce.each(["href", "src"], function(e, t) {
            ce.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ce.support.style || (ce.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }), ce.support.optSelected || (ce.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ce.propFix[this.toLowerCase()] = this
        }), ce.support.enctype || (ce.propFix.enctype = "encoding"), ce.each(["radio", "checkbox"], function() {
            ce.valHooks[this] = {
                set: function(e, t) {
                    if (ce.isArray(t)) return e.checked = ce.inArray(ce(e).val(), t) >= 0
                }
            }, ce.support.checkOn || (ce.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Le = /^(?:input|select|textarea)$/i,
            qe = /^key/,
            Oe = /^(?:mouse|contextmenu)|click/,
            Fe = /^(?:focusinfocus|focusoutblur)$/,
            ze = /^([^.]*)(?:\.(.+)|)$/;
        ce.event = {
            global: {},
            add: function(e, n, i, o, r) {
                var s, a, l, c, u, p, h, d, f, g, m, v = ce._data(e);
                if (v) {
                    for (i.handler && (c = i, i = c.handler, r = c.selector), i.guid || (i.guid = ce.guid++), (a = v.events) || (a = v.events = {}), (p = v.handle) || (p = v.handle = function(e) {
                            return typeof ce === Q || e && ce.event.triggered === e.type ? t : ce.event.dispatch.apply(p.elem, arguments)
                        }, p.elem = e), n = (n || "").match(pe) || [""], l = n.length; l--;) s = ze.exec(n[l]) || [], f = m = s[1], g = (s[2] || "").split(".").sort(), f && (u = ce.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = ce.event.special[f] || {}, h = ce.extend({
                        type: f,
                        origType: m,
                        data: o,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && ce.expr.match.needsContext.test(r),
                        namespace: g.join(".")
                    }, c), (d = a[f]) || (d = a[f] = [], d.delegateCount = 0, u.setup && !1 !== u.setup.call(e, o, g, p) || (e.addEventListener ? e.addEventListener(f, p, !1) : e.attachEvent && e.attachEvent("on" + f, p))), u.add && (u.add.call(e, h), h.handler.guid || (h.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, h) : d.push(h), ce.event.global[f] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, o) {
                var r, s, a, l, c, u, p, h, d, f, g, m = ce.hasData(e) && ce._data(e);
                if (m && (u = m.events)) {
                    for (t = (t || "").match(pe) || [""], c = t.length; c--;)
                        if (a = ze.exec(t[c]) || [], d = g = a[1], f = (a[2] || "").split(".").sort(), d) {
                            for (p = ce.event.special[d] || {}, d = (i ? p.delegateType : p.bindType) || d, h = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = h.length; r--;) s = h[r], !o && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (h.splice(r, 1), s.selector && h.delegateCount--, p.remove && p.remove.call(e, s));
                            l && !h.length && (p.teardown && !1 !== p.teardown.call(e, f, m.handle) || ce.removeEvent(e, d, m.handle), delete u[d])
                        } else
                            for (d in u) ce.event.remove(e, d + t[c], n, i, !0);
                    ce.isEmptyObject(u) && (delete m.handle, ce._removeData(e, "events"))
                }
            },
            trigger: function(n, i, o, r) {
                var s, a, l, c, u, p, h, d = [o || K],
                    f = ae.call(n, "type") ? n.type : n,
                    g = ae.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = p = o = o || K, 3 !== o.nodeType && 8 !== o.nodeType && !Fe.test(f + ce.event.triggered) && (f.indexOf(".") >= 0 && (g = f.split("."), f = g.shift(), g.sort()), a = f.indexOf(":") < 0 && "on" + f, n = n[ce.expando] ? n : new ce.Event(f, "object" == typeof n && n), n.isTrigger = r ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = o), i = null == i ? [n] : ce.makeArray(i, [n]), u = ce.event.special[f] || {}, r || !u.trigger || !1 !== u.trigger.apply(o, i))) {
                    if (!r && !u.noBubble && !ce.isWindow(o)) {
                        for (c = u.delegateType || f, Fe.test(c + f) || (l = l.parentNode); l; l = l.parentNode) d.push(l), p = l;
                        p === (o.ownerDocument || K) && d.push(p.defaultView || p.parentWindow || e)
                    }
                    for (h = 0;
                        (l = d[h++]) && !n.isPropagationStopped();) n.type = h > 1 ? c : u.bindType || f, s = (ce._data(l, "events") || {})[n.type] && ce._data(l, "handle"), s && s.apply(l, i), (s = a && l[a]) && ce.acceptData(l) && s.apply && !1 === s.apply(l, i) && n.preventDefault();
                    if (n.type = f, !r && !n.isDefaultPrevented() && (!u._default || !1 === u._default.apply(d.pop(), i)) && ce.acceptData(o) && a && o[f] && !ce.isWindow(o)) {
                        p = o[a], p && (o[a] = null), ce.event.triggered = f;
                        try {
                            o[f]()
                        } catch (e) {}
                        ce.event.triggered = t, p && (o[a] = p)
                    }
                    return n.result
                }
            },
            dispatch: function(e) {
                e = ce.event.fix(e);
                var n, i, o, r, s, a = [],
                    l = oe.call(arguments),
                    c = (ce._data(this, "events") || {})[e.type] || [],
                    u = ce.event.special[e.type] || {};
                if (l[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                    for (a = ce.event.handlers.call(this, e, c), n = 0;
                        (r = a[n++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, s = 0;
                            (o = r.handlers[s++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, (i = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) !== t && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, n) {
                var i, o, r, s, a = [],
                    l = n.delegateCount,
                    c = e.target;
                if (l && c.nodeType && (!e.button || "click" !== e.type))
                    for (; c != this; c = c.parentNode || this)
                        if (1 === c.nodeType && (!0 !== c.disabled || "click" !== e.type)) {
                            for (r = [], s = 0; s < l; s++) o = n[s], i = o.selector + " ", r[i] === t && (r[i] = o.needsContext ? ce(i, this).index(c) >= 0 : ce.find(i, this, null, [c]).length), r[i] && r.push(o);
                            r.length && a.push({
                                elem: c,
                                handlers: r
                            })
                        }
                return l < n.length && a.push({
                    elem: this,
                    handlers: n.slice(l)
                }), a
            },
            fix: function(e) {
                if (e[ce.expando]) return e;
                var t, n, i, o = e.type,
                    r = e,
                    s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = Oe.test(o) ? this.mouseHooks : qe.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new ce.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || K), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var i, o, r, s = n.button,
                        a = n.fromElement;
                    return null == e.pageX && null != n.clientX && (o = e.target.ownerDocument || K, r = o.documentElement, i = o.body, e.pageX = n.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== u() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === u() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (ce.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    },
                    _default: function(e) {
                        return ce.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var o = ce.extend(new ce.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? ce.event.trigger(o, null, t) : ce.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, ce.removeEvent = K.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === Q && (e[i] = null), e.detachEvent(i, n))
        }, ce.Event = function(e, t) {
            if (!(this instanceof ce.Event)) return new ce.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || ce.now(), this[ce.expando] = !0
        }, ce.Event.prototype = {
            isDefaultPrevented: c,
            isPropagationStopped: c,
            isImmediatePropagationStopped: c,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = l, this.stopPropagation()
            }
        }, ce.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            ce.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        o = e.relatedTarget,
                        r = e.handleObj;
                    return o && (o === i || ce.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ce.support.submitBubbles || (ce.event.special.submit = {
            setup: function() {
                if (ce.nodeName(this, "form")) return !1;
                ce.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        i = ce.nodeName(n, "input") || ce.nodeName(n, "button") ? n.form : t;
                    i && !ce._data(i, "submitBubbles") && (ce.event.add(i, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), ce._data(i, "submitBubbles", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ce.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                if (ce.nodeName(this, "form")) return !1;
                ce.event.remove(this, "._submit")
            }
        }), ce.support.changeBubbles || (ce.event.special.change = {
            setup: function() {
                if (Le.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (ce.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), ce.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), ce.event.simulate("change", this, e, !0)
                })), !1;
                ce.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Le.test(t.nodeName) && !ce._data(t, "changeBubbles") && (ce.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || ce.event.simulate("change", this.parentNode, e, !0)
                    }), ce._data(t, "changeBubbles", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return ce.event.remove(this, "._change"), !Le.test(this.nodeName)
            }
        }), ce.support.focusinBubbles || ce.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                i = function(e) {
                    ce.event.simulate(t, e.target, ce.event.fix(e), !0)
                };
            ce.event.special[t] = {
                setup: function() {
                    0 == n++ && K.addEventListener(e, i, !0)
                },
                teardown: function() {
                    0 == --n && K.removeEventListener(e, i, !0)
                }
            }
        }), ce.fn.extend({
            on: function(e, n, i, o, r) {
                var s, a;
                if ("object" == typeof e) {
                    "string" != typeof n && (i = i || n, n = t);
                    for (s in e) this.on(s, n, i, e[s], r);
                    return this
                }
                if (null == i && null == o ? (o = n, i = n = t) : null == o && ("string" == typeof n ? (o = i, i = t) : (o = i, i = n, n = t)), !1 === o) o = c;
                else if (!o) return this;
                return 1 === r && (a = o, o = function(e) {
                    return ce().off(e), a.apply(this, arguments)
                }, o.guid = a.guid || (a.guid = ce.guid++)), this.each(function() {
                    ce.event.add(this, e, o, i, n)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, n, i) {
                var o, r;
                if (e && e.preventDefault && e.handleObj) return o = e.handleObj, ce(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, n, e[r]);
                    return this
                }
                return !1 !== n && "function" != typeof n || (i = n, n = t), !1 === i && (i = c), this.each(function() {
                    ce.event.remove(this, e, i, n)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    ce.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return ce.event.trigger(e, t, n, !0)
            }
        });
        var Be = /^.[^:#\[\.,]*$/,
            Xe = /^(?:parents|prev(?:Until|All))/,
            We = ce.expr.match.needsContext,
            Re = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ce.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    o = i.length;
                if ("string" != typeof e) return this.pushStack(ce(e).filter(function() {
                    for (t = 0; t < o; t++)
                        if (ce.contains(i[t], this)) return !0
                }));
                for (t = 0; t < o; t++) ce.find(e, i[t], n);
                return n = this.pushStack(o > 1 ? ce.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            has: function(e) {
                var t, n = ce(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; t < i; t++)
                        if (ce.contains(this, n[t])) return !0
                })
            },
            not: function(e) {
                return this.pushStack(h(this, e || [], !0))
            },
            filter: function(e) {
                return this.pushStack(h(this, e || [], !1))
            },
            is: function(e) {
                return !!h(this, "string" == typeof e && We.test(e) ? ce(e) : e || [], !1).length
            },
            closest: function(e, t) {
                for (var n, i = 0, o = this.length, r = [], s = We.test(e) || "string" != typeof e ? ce(e, t || this.context) : 0; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
                            n = r.push(n);
                            break
                        }
                return this.pushStack(r.length > 1 ? ce.unique(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ce.inArray(this[0], ce(e)) : ce.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                var n = "string" == typeof e ? ce(e, t) : ce.makeArray(e && e.nodeType ? [e] : e),
                    i = ce.merge(this.get(), n);
                return this.pushStack(ce.unique(i))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ce.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return ce.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return ce.dir(e, "parentNode", n)
            },
            next: function(e) {
                return p(e, "nextSibling")
            },
            prev: function(e) {
                return p(e, "previousSibling")
            },
            nextAll: function(e) {
                return ce.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return ce.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return ce.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return ce.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return ce.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return ce.sibling(e.firstChild)
            },
            contents: function(e) {
                return ce.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ce.merge([], e.childNodes)
            }
        }, function(e, t) {
            ce.fn[e] = function(n, i) {
                var o = ce.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = ce.filter(i, o)), this.length > 1 && (Re[e] || (o = ce.unique(o)), Xe.test(e) && (o = o.reverse())), this.pushStack(o)
            }
        }), ce.extend({
            filter: function(e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ce.find.matchesSelector(i, e) ? [i] : [] : ce.find.matches(e, ce.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            },
            dir: function(e, n, i) {
                for (var o = [], r = e[n]; r && 9 !== r.nodeType && (i === t || 1 !== r.nodeType || !ce(r).is(i));) 1 === r.nodeType && o.push(r), r = r[n];
                return o
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var Ye = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Ue = / jQuery\d+="(?:null|\d+)"/g,
            $e = new RegExp("<(?:" + Ye + ")[\\s/>]", "i"),
            Qe = /^\s+/,
            Ve = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Ke = /<([\w:]+)/,
            Je = /<tbody/i,
            Ge = /<|&#?\w+;/,
            Ze = /<(?:script|style|link)/i,
            et = /^(?:checkbox|radio)$/i,
            tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            nt = /^$|\/(?:java|ecma)script/i,
            it = /^true\/(.*)/,
            ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            rt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ce.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            st = d(K),
            at = st.appendChild(K.createElement("div"));
        rt.optgroup = rt.option, rt.tbody = rt.tfoot = rt.colgroup = rt.caption = rt.thead, rt.th = rt.td, ce.fn.extend({
            text: function(e) {
                return ce.access(this, function(e) {
                    return e === t ? ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || K).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        f(this, e).appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = f(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? ce.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || ce.cleanData(x(n)), n.parentNode && (t && ce.contains(n.ownerDocument, n) && v(x(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ce.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && ce.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return ce.clone(this, e, t)
                })
            },
            html: function(e) {
                return ce.access(this, function(e) {
                    var n = this[0] || {},
                        i = 0,
                        o = this.length;
                    if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ue, "") : t;
                    if ("string" == typeof e && !Ze.test(e) && (ce.support.htmlSerialize || !$e.test(e)) && (ce.support.leadingWhitespace || !Qe.test(e)) && !rt[(Ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Ve, "<$1></$2>");
                        try {
                            for (; i < o; i++) n = this[i] || {}, 1 === n.nodeType && (ce.cleanData(x(n, !1)), n.innerHTML = e);
                            n = 0
                        } catch (e) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = ce.map(this, function(e) {
                        return [e.nextSibling, e.parentNode]
                    }),
                    t = 0;
                return this.domManip(arguments, function(n) {
                    var i = e[t++],
                        o = e[t++];
                    o && (i && i.parentNode !== o && (i = this.nextSibling), ce(this).remove(), o.insertBefore(n, i))
                }, !0), t ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t, n) {
                e = ne.apply([], e);
                var i, o, r, s, a, l, c = 0,
                    u = this.length,
                    p = this,
                    h = u - 1,
                    d = e[0],
                    f = ce.isFunction(d);
                if (f || !(u <= 1 || "string" != typeof d || ce.support.checkClone) && tt.test(d)) return this.each(function(i) {
                    var o = p.eq(i);
                    f && (e[0] = d.call(this, i, o.html())), o.domManip(e, t, n)
                });
                if (u && (l = ce.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                    for (s = ce.map(x(l, "script"), g), r = s.length; c < u; c++) o = l, c !== h && (o = ce.clone(o, !0, !0), r && ce.merge(s, x(o, "script"))), t.call(this[c], o, c);
                    if (r)
                        for (a = s[s.length - 1].ownerDocument, ce.map(s, m), c = 0; c < r; c++) o = s[c], nt.test(o.type || "") && !ce._data(o, "globalEval") && ce.contains(a, o) && (o.src ? ce._evalUrl(o.src) : ce.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
                    l = i = null
                }
                return this
            }
        }), ce.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            ce.fn[e] = function(e) {
                for (var n, i = 0, o = [], r = ce(e), s = r.length - 1; i <= s; i++) n = i === s ? this : this.clone(!0), ce(r[i])[t](n), ie.apply(o, n.get());
                return this.pushStack(o)
            }
        }), ce.extend({
            clone: function(e, t, n) {
                var i, o, r, s, a, l = ce.contains(e.ownerDocument, e);
                if (ce.support.html5Clone || ce.isXMLDoc(e) || !$e.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (at.innerHTML = e.outerHTML, at.removeChild(r = at.firstChild)), !(ce.support.noCloneEvent && ce.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e)))
                    for (i = x(r), a = x(e), s = 0; null != (o = a[s]); ++s) i[s] && b(o, i[s]);
                if (t)
                    if (n)
                        for (a = a || x(e), i = i || x(r), s = 0; null != (o = a[s]); s++) y(o, i[s]);
                    else y(e, r);
                return i = x(r, "script"), i.length > 0 && v(i, !l && x(e, "script")), i = a = o = null, r
            },
            buildFragment: function(e, t, n, i) {
                for (var o, r, s, a, l, c, u, p = e.length, h = d(t), f = [], g = 0; g < p; g++)
                    if ((r = e[g]) || 0 === r)
                        if ("object" === ce.type(r)) ce.merge(f, r.nodeType ? [r] : r);
                        else if (Ge.test(r)) {
                    for (a = a || h.appendChild(t.createElement("div")), l = (Ke.exec(r) || ["", ""])[1].toLowerCase(), u = rt[l] || rt._default, a.innerHTML = u[1] + r.replace(Ve, "<$1></$2>") + u[2], o = u[0]; o--;) a = a.lastChild;
                    if (!ce.support.leadingWhitespace && Qe.test(r) && f.push(t.createTextNode(Qe.exec(r)[0])), !ce.support.tbody)
                        for (r = "table" !== l || Je.test(r) ? "<table>" !== u[1] || Je.test(r) ? 0 : a : a.firstChild, o = r && r.childNodes.length; o--;) ce.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                    for (ce.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = h.lastChild
                } else f.push(t.createTextNode(r));
                for (a && h.removeChild(a), ce.support.appendChecked || ce.grep(x(f, "input"), w), g = 0; r = f[g++];)
                    if ((!i || -1 === ce.inArray(r, i)) && (s = ce.contains(r.ownerDocument, r), a = x(h.appendChild(r), "script"), s && v(a), n))
                        for (o = 0; r = a[o++];) nt.test(r.type || "") && n.push(r);
                return a = null, h
            },
            cleanData: function(e, t) {
                for (var n, i, o, r, s = 0, a = ce.expando, l = ce.cache, c = ce.support.deleteExpando, u = ce.event.special; null != (n = e[s]); s++)
                    if ((t || ce.acceptData(n)) && (o = n[a], r = o && l[o])) {
                        if (r.events)
                            for (i in r.events) u[i] ? ce.event.remove(n, i) : ce.removeEvent(n, i, r.handle);
                        l[o] && (delete l[o], c ? delete n[a] : typeof n.removeAttribute !== Q ? n.removeAttribute(a) : n[a] = null, te.push(o))
                    }
            },
            _evalUrl: function(e) {
                return ce.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }
        }), ce.fn.extend({
            wrapAll: function(e) {
                if (ce.isFunction(e)) return this.each(function(t) {
                    ce(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = ce(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return ce.isFunction(e) ? this.each(function(t) {
                    ce(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = ce(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ce.isFunction(e);
                return this.each(function(n) {
                    ce(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ce.nodeName(this, "body") || ce(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var lt, ct, ut, pt = /alpha\([^)]*\)/i,
            ht = /opacity\s*=\s*([^)]*)/,
            dt = /^(top|right|bottom|left)$/,
            ft = /^(none|table(?!-c[ea]).+)/,
            gt = /^margin/,
            mt = new RegExp("^(" + ue + ")(.*)$", "i"),
            vt = new RegExp("^(" + ue + ")(?!px)[a-z%]+$", "i"),
            yt = new RegExp("^([+-])=(" + ue + ")", "i"),
            bt = {
                BODY: "block"
            },
            xt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            wt = {
                letterSpacing: 0,
                fontWeight: 400
            },
            _t = ["Top", "Right", "Bottom", "Left"],
            Tt = ["Webkit", "O", "Moz", "ms"];
        ce.fn.extend({
            css: function(e, n) {
                return ce.access(this, function(e, n, i) {
                    var o, r, s = {},
                        a = 0;
                    if (ce.isArray(n)) {
                        for (r = ct(e), o = n.length; a < o; a++) s[n[a]] = ce.css(e, n[a], !1, r);
                        return s
                    }
                    return i !== t ? ce.style(e, n, i) : ce.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return S(this, !0)
            },
            hide: function() {
                return S(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    T(this) ? ce(this).show() : ce(this).hide()
                })
            }
        }), ce.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = ut(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: ce.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, n, i, o) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, s, a, l = ce.camelCase(n),
                        c = e.style;
                    if (n = ce.cssProps[l] || (ce.cssProps[l] = _(c, l)), a = ce.cssHooks[n] || ce.cssHooks[l], i === t) return a && "get" in a && (r = a.get(e, !1, o)) !== t ? r : c[n];
                    if (!(s = typeof i, "string" === s && (r = yt.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(ce.css(e, n)), s = "number"), null == i || "number" === s && isNaN(i) || ("number" !== s || ce.cssNumber[l] || (i += "px"), ce.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"), a && "set" in a && (i = a.set(e, i, o)) === t))) try {
                        c[n] = i
                    } catch (e) {}
                }
            },
            css: function(e, n, i, o) {
                var r, s, a, l = ce.camelCase(n);
                return n = ce.cssProps[l] || (ce.cssProps[l] = _(e.style, l)), a = ce.cssHooks[n] || ce.cssHooks[l], a && "get" in a && (s = a.get(e, !0, i)), s === t && (s = ut(e, n, o)), "normal" === s && n in wt && (s = wt[n]), "" === i || i ? (r = parseFloat(s), !0 === i || ce.isNumeric(r) ? r || 0 : s) : s
            }
        }), e.getComputedStyle ? (ct = function(t) {
            return e.getComputedStyle(t, null)
        }, ut = function(e, n, i) {
            var o, r, s, a = i || ct(e),
                l = a ? a.getPropertyValue(n) || a[n] : t,
                c = e.style;
            return a && ("" !== l || ce.contains(e.ownerDocument, e) || (l = ce.style(e, n)), vt.test(l) && gt.test(n) && (o = c.width, r = c.minWidth, s = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = a.width, c.width = o, c.minWidth = r, c.maxWidth = s)), l
        }) : K.documentElement.currentStyle && (ct = function(e) {
            return e.currentStyle
        }, ut = function(e, n, i) {
            var o, r, s, a = i || ct(e),
                l = a ? a[n] : t,
                c = e.style;
            return null == l && c && c[n] && (l = c[n]), vt.test(l) && !dt.test(n) && (o = c.left, r = e.runtimeStyle, s = r && r.left, s && (r.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = o, s && (r.left = s)), "" === l ? "auto" : l
        }), ce.each(["height", "width"], function(e, t) {
            ce.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n) return 0 === e.offsetWidth && ft.test(ce.css(e, "display")) ? ce.swap(e, xt, function() {
                        return k(e, t, i)
                    }) : k(e, t, i)
                },
                set: function(e, n, i) {
                    var o = i && ct(e);
                    return C(e, n, i ? E(e, t, i, ce.support.boxSizing && "border-box" === ce.css(e, "boxSizing", !1, o), o) : 0)
                }
            }
        }), ce.support.opacity || (ce.cssHooks.opacity = {
            get: function(e, t) {
                return ht.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    o = ce.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === ce.trim(r.replace(pt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = pt.test(r) ? r.replace(pt, o) : r + " " + o)
            }
        }), ce(function() {
            ce.support.reliableMarginRight || (ce.cssHooks.marginRight = {
                get: function(e, t) {
                    if (t) return ce.swap(e, {
                        display: "inline-block"
                    }, ut, [e, "marginRight"])
                }
            }), !ce.support.pixelPosition && ce.fn.position && ce.each(["top", "left"], function(e, t) {
                ce.cssHooks[t] = {
                    get: function(e, n) {
                        if (n) return n = ut(e, t), vt.test(n) ? ce(e).position()[t] + "px" : n
                    }
                }
            })
        }), ce.expr && ce.expr.filters && (ce.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ce.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ce.css(e, "display"))
        }, ce.expr.filters.visible = function(e) {
            return !ce.expr.filters.hidden(e)
        }), ce.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            ce.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + _t[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, gt.test(e) || (ce.cssHooks[e + t].set = C)
        });
        var St = /%20/g,
            Ct = /\[\]$/,
            Et = /\r?\n/g,
            kt = /^(?:submit|button|image|reset|file)$/i,
            Nt = /^(?:input|select|textarea|keygen)/i;
        ce.fn.extend({
            serialize: function() {
                return ce.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ce.prop(this, "elements");
                    return e ? ce.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ce(this).is(":disabled") && Nt.test(this.nodeName) && !kt.test(e) && (this.checked || !et.test(e))
                }).map(function(e, t) {
                    var n = ce(this).val();
                    return null == n ? null : ce.isArray(n) ? ce.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Et, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Et, "\r\n")
                    }
                }).get()
            }
        }), ce.param = function(e, n) {
            var i, o = [],
                r = function(e, t) {
                    t = ce.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = ce.ajaxSettings && ce.ajaxSettings.traditional), ce.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (i in e) D(i, e[i], n, r);
            return o.join("&").replace(St, "+")
        }, ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            ce.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ce.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var It, Dt, At = ce.now(),
            jt = /\?/,
            Pt = /#.*$/,
            Mt = /([?&])_=[^&]*/,
            Ht = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Lt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            qt = /^(?:GET|HEAD)$/,
            Ot = /^\/\//,
            Ft = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            zt = ce.fn.load,
            Bt = {},
            Xt = {},
            Wt = "*/".concat("*");
        try {
            Dt = V.href
        } catch (e) {
            Dt = K.createElement("a"), Dt.href = "", Dt = Dt.href
        }
        It = Ft.exec(Dt.toLowerCase()) || [], ce.fn.load = function(e, n, i) {
            if ("string" != typeof e && zt) return zt.apply(this, arguments);
            var o, r, s, a = this,
                l = e.indexOf(" ");
            return l >= 0 && (o = e.slice(l, e.length), e = e.slice(0, l)), ce.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (s = "POST"), a.length > 0 && ce.ajax({
                url: e,
                type: s,
                dataType: "html",
                data: n
            }).done(function(e) {
                r = arguments, a.html(o ? ce("<div>").append(ce.parseHTML(e)).find(o) : e)
            }).complete(i && function(e, t) {
                a.each(i, r || [e.responseText, t, e])
            }), this
        }, ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            ce.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), ce.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Dt,
                type: "GET",
                isLocal: Lt.test(It[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Wt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ce.parseJSON,
                    "text xml": ce.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? P(P(e, ce.ajaxSettings), t) : P(ce.ajaxSettings, e)
            },
            ajaxPrefilter: A(Bt),
            ajaxTransport: A(Xt),
            ajax: function(e, n) {
                function i(e, n, i, o) {
                    var r, p, y, b, w, T = n;
                    2 !== x && (x = 2, l && clearTimeout(l), u = t, a = o || "", _.readyState = e > 0 ? 4 : 0, r = e >= 200 && e < 300 || 304 === e, i && (b = M(h, _, i)), b = H(h, b, _, r), r ? (h.ifModified && (w = _.getResponseHeader("Last-Modified"), w && (ce.lastModified[s] = w), (w = _.getResponseHeader("etag")) && (ce.etag[s] = w)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, p = b.data, y = b.error, r = !y)) : (y = T, !e && T || (T = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (n || T) + "", r ? g.resolveWith(d, [p, T, _]) : g.rejectWith(d, [_, T, y]), _.statusCode(v), v = t, c && f.trigger(r ? "ajaxSuccess" : "ajaxError", [_, h, r ? p : y]), m.fireWith(d, [_, T]), c && (f.trigger("ajaxComplete", [_, h]), --ce.active || ce.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = t), n = n || {};
                var o, r, s, a, l, c, u, p, h = ce.ajaxSetup({}, n),
                    d = h.context || h,
                    f = h.context && (d.nodeType || d.jquery) ? ce(d) : ce.event,
                    g = ce.Deferred(),
                    m = ce.Callbacks("once memory"),
                    v = h.statusCode || {},
                    y = {},
                    b = {},
                    x = 0,
                    w = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === x) {
                                if (!p)
                                    for (p = {}; t = Ht.exec(a);) p[t[1].toLowerCase()] = t[2];
                                t = p[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return x || (e = b[n] = b[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return x || (h.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (x < 2)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else _.always(e[_.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return u && u.abort(t), i(0, t), this
                        }
                    };
                if (g.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, h.url = ((e || h.url || Dt) + "").replace(Pt, "").replace(Ot, It[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = ce.trim(h.dataType || "*").toLowerCase().match(pe) || [""], null == h.crossDomain && (o = Ft.exec(h.url.toLowerCase()), h.crossDomain = !(!o || o[1] === It[1] && o[2] === It[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (It[3] || ("http:" === It[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = ce.param(h.data, h.traditional)), j(Bt, h, n, _), 2 === x) return _;
                c = h.global, c && 0 == ce.active++ && ce.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !qt.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (jt.test(s) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = Mt.test(s) ? s.replace(Mt, "$1_=" + At++) : s + (jt.test(s) ? "&" : "?") + "_=" + At++)), h.ifModified && (ce.lastModified[s] && _.setRequestHeader("If-Modified-Since", ce.lastModified[s]), ce.etag[s] && _.setRequestHeader("If-None-Match", ce.etag[s])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && _.setRequestHeader("Content-Type", h.contentType), _.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : h.accepts["*"]);
                for (r in h.headers) _.setRequestHeader(r, h.headers[r]);
                if (h.beforeSend && (!1 === h.beforeSend.call(d, _, h) || 2 === x)) return _.abort();
                w = "abort";
                for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) _[r](h[r]);
                if (u = j(Xt, h, n, _)) {
                    _.readyState = 1, c && f.trigger("ajaxSend", [_, h]), h.async && h.timeout > 0 && (l = setTimeout(function() {
                        _.abort("timeout")
                    }, h.timeout));
                    try {
                        x = 1, u.send(y, i)
                    } catch (e) {
                        if (!(x < 2)) throw e;
                        i(-1, e)
                    }
                } else i(-1, "No Transport");
                return _
            },
            getJSON: function(e, t, n) {
                return ce.get(e, t, n, "json")
            },
            getScript: function(e, n) {
                return ce.get(e, t, n, "script")
            }
        }), ce.each(["get", "post"], function(e, n) {
            ce[n] = function(e, i, o, r) {
                return ce.isFunction(i) && (r = r || o, o = i, i = t), ce.ajax({
                    url: e,
                    type: n,
                    dataType: r,
                    data: i,
                    success: o
                })
            }
        }), ce.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return ce.globalEval(e), e
                }
            }
        }), ce.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), ce.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, i = K.head || ce("head")[0] || K.documentElement;
                return {
                    send: function(t, o) {
                        n = K.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || o(200, "success"))
                        }, i.insertBefore(n, i.firstChild)
                    },
                    abort: function() {
                        n && n.onload(t, !0)
                    }
                }
            }
        });
        var Rt = [],
            Yt = /(=)\?(?=&|$)|\?\?/;
        ce.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Rt.pop() || ce.expando + "_" + At++;
                return this[e] = !0, e
            }
        }), ce.ajaxPrefilter("json jsonp", function(n, i, o) {
            var r, s, a, l = !1 !== n.jsonp && (Yt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(n.data) && "data");
            if (l || "jsonp" === n.dataTypes[0]) return r = n.jsonpCallback = ce.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Yt, "$1" + r) : !1 !== n.jsonp && (n.url += (jt.test(n.url) ? "&" : "?") + n.jsonp + "=" + r), n.converters["script json"] = function() {
                return a || ce.error(r + " was not called"), a[0]
            }, n.dataTypes[0] = "json", s = e[r], e[r] = function() {
                a = arguments
            }, o.always(function() {
                e[r] = s, n[r] && (n.jsonpCallback = i.jsonpCallback, Rt.push(r)), a && ce.isFunction(s) && s(a[0]), a = s = t
            }), "script"
        });
        var Ut, $t, Qt = 0,
            Vt = e.ActiveXObject && function() {
                var e;
                for (e in Ut) Ut[e](t, !0)
            };
        ce.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && L() || q()
        } : L, $t = ce.ajaxSettings.xhr(), ce.support.cors = !!$t && "withCredentials" in $t, ($t = ce.support.ajax = !!$t) && ce.ajaxTransport(function(n) {
            if (!n.crossDomain || ce.support.cors) {
                var i;
                return {
                    send: function(o, r) {
                        var s, a, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                            for (a in n.xhrFields) l[a] = n.xhrFields[a];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (a in o) l.setRequestHeader(a, o[a])
                        } catch (e) {}
                        l.send(n.hasContent && n.data || null), i = function(e, o) {
                            var a, c, u, p;
                            try {
                                if (i && (o || 4 === l.readyState))
                                    if (i = t, s && (l.onreadystatechange = ce.noop, Vt && delete Ut[s]), o) 4 !== l.readyState && l.abort();
                                    else {
                                        p = {}, a = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                        try {
                                            u = l.statusText
                                        } catch (e) {
                                            u = ""
                                        }
                                        a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = p.text ? 200 : 404
                                    }
                            } catch (e) {
                                o || r(-1, e)
                            }
                            p && r(a, u, p, c)
                        }, n.async ? 4 === l.readyState ? setTimeout(i) : (s = ++Qt, Vt && (Ut || (Ut = {}, ce(e).unload(Vt)), Ut[s] = i), l.onreadystatechange = i) : i()
                    },
                    abort: function() {
                        i && i(t, !0)
                    }
                }
            }
        });
        var Kt, Jt, Gt = /^(?:toggle|show|hide)$/,
            Zt = new RegExp("^(?:([+-])=|)(" + ue + ")([a-z%]*)$", "i"),
            en = /queueHooks$/,
            tn = [X],
            nn = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        o = Zt.exec(t),
                        r = o && o[3] || (ce.cssNumber[e] ? "" : "px"),
                        s = (ce.cssNumber[e] || "px" !== r && +i) && Zt.exec(ce.css(n.elem, e)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== r) {
                        r = r || s[3], o = o || [], s = +i || 1;
                        do {
                            a = a || ".5", s /= a, ce.style(n.elem, e, s + r)
                        } while (a !== (a = n.cur() / i) && 1 !== a && --l)
                    }
                    return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };
        ce.Animation = ce.extend(z, {
            tweener: function(e, t) {
                ce.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, o = e.length; i < o; i++) n = e[i], nn[n] = nn[n] || [], nn[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tn.unshift(e) : tn.push(e)
            }
        }), ce.Tween = W, W.prototype = {
            constructor: W,
            init: function(e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ce.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = W.propHooks[this.prop];
                return e && e.get ? e.get(this) : W.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = W.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : W.propHooks._default.set(this), this
            }
        }, W.prototype.init.prototype = W.prototype, W.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ce.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ce.cssProps[e.prop]] || ce.cssHooks[e.prop]) ? ce.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ce.each(["toggle", "show", "hide"], function(e, t) {
            var n = ce.fn[t];
            ce.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, i, o)
            }
        }), ce.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(T).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = ce.isEmptyObject(e),
                    r = ce.speed(t, n, i),
                    s = function() {
                        var t = z(this, ce.extend({}, e), r);
                        (o || ce._data(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(e, n, i) {
                var o = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        r = ce.timers,
                        s = ce._data(this);
                    if (n) s[n] && s[n].stop && o(s[n]);
                    else
                        for (n in s) s[n] && s[n].stop && en.test(n) && o(s[n]);
                    for (n = r.length; n--;) r[n].elem !== this || null != e && r[n].queue !== e || (r[n].anim.stop(i), t = !1, r.splice(n, 1));
                    !t && i || ce.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = ce._data(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = ce.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, ce.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ce.each({
            slideDown: R("show"),
            slideUp: R("hide"),
            slideToggle: R("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ce.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), ce.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? ce.extend({}, e) : {
                complete: n || !n && t || ce.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ce.isFunction(t) && t
            };
            return i.duration = ce.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ce.fx.speeds ? ce.fx.speeds[i.duration] : ce.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ce.isFunction(i.old) && i.old.call(this), i.queue && ce.dequeue(this, i.queue)
            }, i
        }, ce.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, ce.timers = [], ce.fx = W.prototype.init, ce.fx.tick = function() {
            var e, n = ce.timers,
                i = 0;
            for (Kt = ce.now(); i < n.length; i++)(e = n[i])() || n[i] !== e || n.splice(i--, 1);
            n.length || ce.fx.stop(), Kt = t
        }, ce.fx.timer = function(e) {
            e() && ce.timers.push(e) && ce.fx.start()
        }, ce.fx.interval = 13, ce.fx.start = function() {
            Jt || (Jt = setInterval(ce.fx.tick, ce.fx.interval))
        }, ce.fx.stop = function() {
            clearInterval(Jt), Jt = null
        }, ce.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ce.fx.step = {}, ce.expr && ce.expr.filters && (ce.expr.filters.animated = function(e) {
            return ce.grep(ce.timers, function(t) {
                return e === t.elem
            }).length
        }), ce.fn.offset = function(e) {
            if (arguments.length) return e === t ? this : this.each(function(t) {
                ce.offset.setOffset(this, e, t)
            });
            var n, i, o = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                s = r && r.ownerDocument;
            if (s) return n = s.documentElement, ce.contains(n, r) ? (typeof r.getBoundingClientRect !== Q && (o = r.getBoundingClientRect()), i = Y(s), {
                top: o.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: o.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : o
        }, ce.offset = {
            setOffset: function(e, t, n) {
                var i = ce.css(e, "position");
                "static" === i && (e.style.position = "relative");
                var o, r, s = ce(e),
                    a = s.offset(),
                    l = ce.css(e, "top"),
                    c = ce.css(e, "left"),
                    u = ("absolute" === i || "fixed" === i) && ce.inArray("auto", [l, c]) > -1,
                    p = {},
                    h = {};
                u ? (h = s.position(), o = h.top, r = h.left) : (o = parseFloat(l) || 0, r = parseFloat(c) || 0), ce.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + o), null != t.left && (p.left = t.left - a.left + r), "using" in t ? t.using.call(e, p) : s.css(p)
            }
        }, ce.fn.extend({
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === ce.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ce.nodeName(e[0], "html") || (n = e.offset()), n.top += ce.css(e[0], "borderTopWidth", !0), n.left += ce.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - ce.css(i, "marginTop", !0),
                        left: t.left - n.left - ce.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || J; e && !ce.nodeName(e, "html") && "static" === ce.css(e, "position");) e = e.offsetParent;
                    return e || J
                })
            }
        }), ce.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var i = /Y/.test(n);
            ce.fn[e] = function(o) {
                return ce.access(this, function(e, o, r) {
                    var s = Y(e);
                    if (r === t) return s ? n in s ? s[n] : s.document.documentElement[o] : e[o];
                    s ? s.scrollTo(i ? ce(s).scrollLeft() : r, i ? r : ce(s).scrollTop()) : e[o] = r
                }, e, o, arguments.length, null)
            }
        }), ce.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            ce.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(i, o) {
                ce.fn[o] = function(o, r) {
                    var s = arguments.length && (i || "boolean" != typeof o),
                        a = i || (!0 === o || !0 === r ? "margin" : "border");
                    return ce.access(this, function(n, i, o) {
                        var r;
                        return ce.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (r = n.documentElement, Math.max(n.body["scroll" + e], r["scroll" + e], n.body["offset" + e], r["offset" + e], r["client" + e])) : o === t ? ce.css(n, i, a) : ce.style(n, i, o, a)
                    }, n, s ? o : t, s, null)
                }
            })
        }), ce.fn.size = function() {
            return this.length
        }, ce.fn.andSelf = ce.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ce : (e.jQuery = e.$ = ce, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ce
        }))
    }(window), define("third_party/jquery", function() {}),
    function(e) {
        function t() {
            var e = r();
            e !== s && (s = e, c.trigger("orientationchange"))
        }

        function n(t, n, i, o) {
            var r = i.type;
            i.type = n, e.event.dispatch.call(t, i, o), i.type = r
        }
        e.attrFn = e.attrFn || {};
        var i = "ontouchstart" in window,
            o = {
                tap_pixel_range: 5,
                swipe_h_threshold: 0,
                swipe_v_threshold: 0,
                taphold_threshold: 200,
                doubletap_int: 500,
                touch_capable: i,
                orientation_support: "orientation" in window && "onorientationchange" in window,
                startevent: i ? "touchstart" : "mousedown",
                endevent: i ? "touchend" : "mouseup",
                moveevent: i ? "touchmove" : "mousemove",
                tapevent: i ? "tap" : "click",
                scrollevent: i ? "touchmove" : "scroll",
                hold_timer: null,
                tap_timer: null
            };
        e.isTouchCapable = function() {
            return o.touch_capable
        }, e.getStartEvent = function() {
            return o.startevent
        }, e.getEndEvent = function() {
            return o.endevent
        }, e.getMoveEvent = function() {
            return o.moveevent
        }, e.getTapEvent = function() {
            return o.tapevent
        }, e.getScrollEvent = function() {
            return o.scrollevent
        }, e.each(["tapstart", "tapend", "tapmove", "tap", "tap2", "tap3", "tap4", "singletap", "doubletap", "taphold", "swipe", "swipeup", "swiperight", "swipedown", "swipeleft", "swipeend", "scrollstart", "scrollend", "orientationchange"], function(t, n) {
            e.fn[n] = function(e) {
                return e ? this.on(n, e) : this.trigger(n)
            }, e.attrFn[n] = !0
        }), e.event.special.tapstart = {
            setup: function() {
                var t = this,
                    i = e(t);
                i.on(o.startevent, function e(r) {
                    if (i.data("callee", e), r.which && 1 !== r.which) return !1;
                    var s = r.originalEvent,
                        a = {
                            position: {
                                x: o.touch_capable ? s.touches[0].screenX : r.screenX,
                                y: o.touch_capable ? s.touches[0].screenY : r.screenY
                            },
                            offset: {
                                x: o.touch_capable ? Math.round(s.changedTouches[0].pageX - (i.offset() ? i.offset().left : 0)) : Math.round(r.pageX - (i.offset() ? i.offset().left : 0)),
                                y: o.touch_capable ? Math.round(s.changedTouches[0].pageY - (i.offset() ? i.offset().top : 0)) : Math.round(r.pageY - (i.offset() ? i.offset().top : 0))
                            },
                            time: Date.now(),
                            target: r.target
                        };
                    return n(t, "tapstart", r, a), !0
                })
            },
            remove: function() {
                e(this).off(o.startevent, e(this).data.callee)
            }
        }, e.event.special.tapmove = {
            setup: function() {
                var t = this,
                    i = e(t);
                i.on(o.moveevent, function e(r) {
                    i.data("callee", e);
                    var s = r.originalEvent,
                        a = {
                            position: {
                                x: o.touch_capable ? s.touches[0].screenX : r.screenX,
                                y: o.touch_capable ? s.touches[0].screenY : r.screenY
                            },
                            offset: {
                                x: o.touch_capable ? Math.round(s.changedTouches[0].pageX - (i.offset() ? i.offset().left : 0)) : Math.round(r.pageX - (i.offset() ? i.offset().left : 0)),
                                y: o.touch_capable ? Math.round(s.changedTouches[0].pageY - (i.offset() ? i.offset().top : 0)) : Math.round(r.pageY - (i.offset() ? i.offset().top : 0))
                            },
                            time: Date.now(),
                            target: r.target
                        };
                    return n(t, "tapmove", r, a), !0
                })
            },
            remove: function() {
                e(this).off(o.moveevent, e(this).data.callee)
            }
        }, e.event.special.tapend = {
            setup: function() {
                var t = this,
                    i = e(t);
                i.on(o.endevent, function e(r) {
                    i.data("callee", e);
                    var s = r.originalEvent,
                        a = {
                            position: {
                                x: o.touch_capable ? s.changedTouches[0].screenX : r.screenX,
                                y: o.touch_capable ? s.changedTouches[0].screenY : r.screenY
                            },
                            offset: {
                                x: o.touch_capable ? Math.round(s.changedTouches[0].pageX - (i.offset() ? i.offset().left : 0)) : Math.round(r.pageX - (i.offset() ? i.offset().left : 0)),
                                y: o.touch_capable ? Math.round(s.changedTouches[0].pageY - (i.offset() ? i.offset().top : 0)) : Math.round(r.pageY - (i.offset() ? i.offset().top : 0))
                            },
                            time: Date.now(),
                            target: r.target
                        };
                    return n(t, "tapend", r, a), !0
                })
            },
            remove: function() {
                e(this).off(o.endevent, e(this).data.callee)
            }
        }, e.event.special.taphold = {
            setup: function() {
                var t, i = this,
                    r = e(i),
                    s = {
                        x: 0,
                        y: 0
                    },
                    a = 0,
                    l = 0;
                r.on(o.startevent, function e(c) {
                    if (c.which && 1 !== c.which) return !1;
                    r.data("tapheld", !1), t = c.target;
                    var u = c.originalEvent,
                        p = Date.now(),
                        h = {
                            x: o.touch_capable ? u.touches[0].screenX : c.screenX,
                            y: o.touch_capable ? u.touches[0].screenY : c.screenY
                        },
                        d = {
                            x: o.touch_capable ? u.touches[0].pageX - u.touches[0].target.offsetLeft : c.offsetX,
                            y: o.touch_capable ? u.touches[0].pageY - u.touches[0].target.offsetTop : c.offsetY
                        };
                    s.x = c.originalEvent.targetTouches ? c.originalEvent.targetTouches[0].pageX : c.pageX, s.y = c.originalEvent.targetTouches ? c.originalEvent.targetTouches[0].pageY : c.pageY, a = s.x, l = s.y;
                    var f = r.parent().data("threshold") ? r.parent().data("threshold") : r.data("threshold"),
                        g = void 0 !== f && !1 !== f && parseInt(f) ? parseInt(f) : o.taphold_threshold;
                    return o.hold_timer = window.setTimeout(function() {
                        var f = s.x - a,
                            g = s.y - l;
                        if (c.target == t && (s.x == a && s.y == l || f >= -o.tap_pixel_range && f <= o.tap_pixel_range && g >= -o.tap_pixel_range && g <= o.tap_pixel_range)) {
                            r.data("tapheld", !0);
                            var m = Date.now(),
                                v = {
                                    x: o.touch_capable ? u.touches[0].screenX : c.screenX,
                                    y: o.touch_capable ? u.touches[0].screenY : c.screenY
                                },
                                y = {
                                    x: o.touch_capable ? Math.round(u.changedTouches[0].pageX - (r.offset() ? r.offset().left : 0)) : Math.round(c.pageX - (r.offset() ? r.offset().left : 0)),
                                    y: o.touch_capable ? Math.round(u.changedTouches[0].pageY - (r.offset() ? r.offset().top : 0)) : Math.round(c.pageY - (r.offset() ? r.offset().top : 0))
                                },
                                b = m - p,
                                x = {
                                    startTime: p,
                                    endTime: m,
                                    startPosition: h,
                                    startOffset: d,
                                    endPosition: v,
                                    endOffset: y,
                                    duration: b,
                                    target: c.target
                                };
                            r.data("callee1", e), n(i, "taphold", c, x)
                        }
                    }, g), !0
                }).on(o.endevent, function e() {
                    r.data("callee2", e), r.data("tapheld", !1), window.clearTimeout(o.hold_timer)
                }).on(o.moveevent, function e(t) {
                    r.data("callee3", e), a = t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0].pageX : t.pageX, l = t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0].pageY : t.pageY
                })
            },
            remove: function() {
                e(this).off(o.startevent, e(this).data.callee1).off(o.endevent, e(this).data.callee2).off(o.moveevent, e(this).data.callee3)
            }
        }, e.event.special.doubletap = {
            setup: function() {
                var t, i, r, s, a = this,
                    l = e(a),
                    c = null,
                    u = !1;
                l.on(o.startevent, function e(n) {
                    return (!n.which || 1 === n.which) && (l.data("doubletapped", !1), t = n.target, l.data("callee1", e), r = n.originalEvent, c || (c = {
                        position: {
                            x: o.touch_capable ? r.touches[0].screenX : n.screenX,
                            y: o.touch_capable ? r.touches[0].screenY : n.screenY
                        },
                        offset: {
                            x: o.touch_capable ? Math.round(r.changedTouches[0].pageX - (l.offset() ? l.offset().left : 0)) : Math.round(n.pageX - (l.offset() ? l.offset().left : 0)),
                            y: o.touch_capable ? Math.round(r.changedTouches[0].pageY - (l.offset() ? l.offset().top : 0)) : Math.round(n.pageY - (l.offset() ? l.offset().top : 0))
                        },
                        time: Date.now(),
                        target: n.target
                    }), !0)
                }).on(o.endevent, function e(p) {
                    var h = Date.now(),
                        d = l.data("lastTouch") || h + 1,
                        f = h - d;
                    if (window.clearTimeout(i), l.data("callee2", e), f < o.doubletap_int && p.target == t && f > 100) {
                        l.data("doubletapped", !0), window.clearTimeout(o.tap_timer);
                        var g = {
                                position: {
                                    x: o.touch_capable ? p.originalEvent.changedTouches[0].screenX : p.screenX,
                                    y: o.touch_capable ? p.originalEvent.changedTouches[0].screenY : p.screenY
                                },
                                offset: {
                                    x: o.touch_capable ? Math.round(r.changedTouches[0].pageX - (l.offset() ? l.offset().left : 0)) : Math.round(p.pageX - (l.offset() ? l.offset().left : 0)),
                                    y: o.touch_capable ? Math.round(r.changedTouches[0].pageY - (l.offset() ? l.offset().top : 0)) : Math.round(p.pageY - (l.offset() ? l.offset().top : 0))
                                },
                                time: Date.now(),
                                target: p.target
                            },
                            m = {
                                firstTap: c,
                                secondTap: g,
                                interval: g.time - c.time
                            };
                        u || (n(a, "doubletap", p, m), c = null), u = !0, s = window.setTimeout(function() {
                            u = !1
                        }, o.doubletap_int)
                    } else l.data("lastTouch", h), i = window.setTimeout(function() {
                        c = null, window.clearTimeout(i)
                    }, o.doubletap_int, [p]);
                    l.data("lastTouch", h)
                })
            },
            remove: function() {
                e(this).off(o.startevent, e(this).data.callee1).off(o.endevent, e(this).data.callee2)
            }
        }, e.event.special.singletap = {
            setup: function() {
                var t = this,
                    i = e(t),
                    r = null,
                    s = null,
                    a = {
                        x: 0,
                        y: 0
                    };
                i.on(o.startevent, function e(t) {
                    return (!t.which || 1 === t.which) && (s = Date.now(), r = t.target, i.data("callee1", e), a.x = t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0].pageX : t.pageX, a.y = t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0].pageY : t.pageY, !0)
                }).on(o.endevent, function e(l) {
                    if (i.data("callee2", e), l.target == r) {
                        var c = l.originalEvent.changedTouches ? l.originalEvent.changedTouches[0].pageX : l.pageX,
                            u = l.originalEvent.changedTouches ? l.originalEvent.changedTouches[0].pageY : l.pageY;
                        o.tap_timer = window.setTimeout(function() {
                            var e = a.x - c,
                                r = a.y - u;
                            if (!i.data("doubletapped") && !i.data("tapheld") && (a.x == c && a.y == u || e >= -o.tap_pixel_range && e <= o.tap_pixel_range && r >= -o.tap_pixel_range && r <= o.tap_pixel_range)) {
                                var p = l.originalEvent,
                                    h = {
                                        position: {
                                            x: o.touch_capable ? p.changedTouches[0].screenX : l.screenX,
                                            y: o.touch_capable ? p.changedTouches[0].screenY : l.screenY
                                        },
                                        offset: {
                                            x: o.touch_capable ? Math.round(p.changedTouches[0].pageX - (i.offset() ? i.offset().left : 0)) : Math.round(l.pageX - (i.offset() ? i.offset().left : 0)),
                                            y: o.touch_capable ? Math.round(p.changedTouches[0].pageY - (i.offset() ? i.offset().top : 0)) : Math.round(l.pageY - (i.offset() ? i.offset().top : 0))
                                        },
                                        time: Date.now(),
                                        target: l.target
                                    };
                                h.time - s < o.taphold_threshold && n(t, "singletap", l, h)
                            }
                        }, o.doubletap_int)
                    }
                })
            },
            remove: function() {
                e(this).off(o.startevent, e(this).data.callee1).off(o.endevent, e(this).data.callee2)
            }
        }, e.event.special.tap = {
            setup: function() {
                var t, i, r = this,
                    s = e(r),
                    a = !1,
                    l = null,
                    c = {
                        x: 0,
                        y: 0
                    };
                s.on(o.startevent, function e(n) {
                    return s.data("callee1", e), (!n.which || 1 === n.which) && (a = !0, c.x = n.originalEvent.targetTouches ? n.originalEvent.targetTouches[0].pageX : n.pageX, c.y = n.originalEvent.targetTouches ? n.originalEvent.targetTouches[0].pageY : n.pageY, t = Date.now(), l = n.target, i = n.originalEvent.targetTouches ? n.originalEvent.targetTouches : [n], !0)
                }).on(o.endevent, function e(u) {
                    s.data("callee2", e);
                    var p = u.originalEvent.targetTouches ? u.originalEvent.changedTouches[0].pageX : u.pageX,
                        h = u.originalEvent.targetTouches ? u.originalEvent.changedTouches[0].pageY : u.pageY,
                        d = c.x - p,
                        f = c.y - h;
                    if (l == u.target && a && Date.now() - t < o.taphold_threshold && (c.x == p && c.y == h || d >= -o.tap_pixel_range && d <= o.tap_pixel_range && f >= -o.tap_pixel_range && f <= o.tap_pixel_range)) {
                        for (var g = u.originalEvent, m = [], v = 0; v < i.length; v++) {
                            var y = {
                                position: {
                                    x: o.touch_capable ? g.changedTouches[v].screenX : u.screenX,
                                    y: o.touch_capable ? g.changedTouches[v].screenY : u.screenY
                                },
                                offset: {
                                    x: o.touch_capable ? Math.round(g.changedTouches[v].pageX - (s.offset() ? s.offset().left : 0)) : Math.round(u.pageX - (s.offset() ? s.offset().left : 0)),
                                    y: o.touch_capable ? Math.round(g.changedTouches[v].pageY - (s.offset() ? s.offset().top : 0)) : Math.round(u.pageY - (s.offset() ? s.offset().top : 0))
                                },
                                time: Date.now(),
                                target: u.target
                            };
                            m.push(y)
                        }
                        n(r, "tap", u, m)
                    }
                })
            },
            remove: function() {
                e(this).off(o.startevent, e(this).data.callee1).off(o.endevent, e(this).data.callee2)
            }
        }, e.event.special.swipe = {
            setup: function() {
                function t(n) {
                    a = e(n.currentTarget), a.data("callee1", t), u.x = n.originalEvent.targetTouches ? n.originalEvent.targetTouches[0].pageX : n.pageX, u.y = n.originalEvent.targetTouches ? n.originalEvent.targetTouches[0].pageY : n.pageY, p.x = u.x, p.y = u.y, l = !0;
                    var i = n.originalEvent;
                    r = {
                        position: {
                            x: o.touch_capable ? i.touches[0].screenX : n.screenX,
                            y: o.touch_capable ? i.touches[0].screenY : n.screenY
                        },
                        offset: {
                            x: o.touch_capable ? Math.round(i.changedTouches[0].pageX - (a.offset() ? a.offset().left : 0)) : Math.round(n.pageX - (a.offset() ? a.offset().left : 0)),
                            y: o.touch_capable ? Math.round(i.changedTouches[0].pageY - (a.offset() ? a.offset().top : 0)) : Math.round(n.pageY - (a.offset() ? a.offset().top : 0))
                        },
                        time: Date.now(),
                        target: n.target
                    }
                }

                function n(t) {
                    a = e(t.currentTarget), a.data("callee2", n), p.x = t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0].pageX : t.pageX, p.y = t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0].pageY : t.pageY;
                    var i, s = a.parent().data("xthreshold") ? a.parent().data("xthreshold") : a.data("xthreshold"),
                        h = a.parent().data("ythreshold") ? a.parent().data("ythreshold") : a.data("ythreshold"),
                        d = void 0 !== s && !1 !== s && parseInt(s) ? parseInt(s) : o.swipe_h_threshold,
                        f = void 0 !== h && !1 !== h && parseInt(h) ? parseInt(h) : o.swipe_v_threshold;
                    if (u.y > p.y && u.y - p.y > f && (i = "swipeup"), u.x < p.x && p.x - u.x > d && (i = "swiperight"), u.y < p.y && p.y - u.y > f && (i = "swipedown"), u.x > p.x && u.x - p.x > d && (i = "swipeleft"), void 0 != i && l) {
                        u.x = 0, u.y = 0, p.x = 0, p.y = 0, l = !1;
                        var g = t.originalEvent,
                            m = {
                                position: {
                                    x: o.touch_capable ? g.touches[0].screenX : t.screenX,
                                    y: o.touch_capable ? g.touches[0].screenY : t.screenY
                                },
                                offset: {
                                    x: o.touch_capable ? Math.round(g.changedTouches[0].pageX - (a.offset() ? a.offset().left : 0)) : Math.round(t.pageX - (a.offset() ? a.offset().left : 0)),
                                    y: o.touch_capable ? Math.round(g.changedTouches[0].pageY - (a.offset() ? a.offset().top : 0)) : Math.round(t.pageY - (a.offset() ? a.offset().top : 0))
                                },
                                time: Date.now(),
                                target: t.target
                            },
                            v = Math.abs(r.position.x - m.position.x),
                            y = Math.abs(r.position.y - m.position.y),
                            b = {
                                startEvnt: r,
                                endEvnt: m,
                                direction: i.replace("swipe", ""),
                                xAmount: v,
                                yAmount: y,
                                duration: m.time - r.time
                            };
                        c = !0, a.trigger("swipe", b).trigger(i, b)
                    }
                }

                function i(t) {
                    a = e(t.currentTarget);
                    var n = "";
                    if (a.data("callee3", i), c) {
                        var s = a.data("xthreshold"),
                            u = a.data("ythreshold"),
                            p = void 0 !== s && !1 !== s && parseInt(s) ? parseInt(s) : o.swipe_h_threshold,
                            h = void 0 !== u && !1 !== u && parseInt(u) ? parseInt(u) : o.swipe_v_threshold,
                            d = t.originalEvent,
                            f = {
                                position: {
                                    x: o.touch_capable ? d.changedTouches[0].screenX : t.screenX,
                                    y: o.touch_capable ? d.changedTouches[0].screenY : t.screenY
                                },
                                offset: {
                                    x: o.touch_capable ? Math.round(d.changedTouches[0].pageX - (a.offset() ? a.offset().left : 0)) : Math.round(t.pageX - (a.offset() ? a.offset().left : 0)),
                                    y: o.touch_capable ? Math.round(d.changedTouches[0].pageY - (a.offset() ? a.offset().top : 0)) : Math.round(t.pageY - (a.offset() ? a.offset().top : 0))
                                },
                                time: Date.now(),
                                target: t.target
                            };
                        r.position.y > f.position.y && r.position.y - f.position.y > h && (n = "swipeup"), r.position.x < f.position.x && f.position.x - r.position.x > p && (n = "swiperight"), r.position.y < f.position.y && f.position.y - r.position.y > h && (n = "swipedown"), r.position.x > f.position.x && r.position.x - f.position.x > p && (n = "swipeleft");
                        var g = Math.abs(r.position.x - f.position.x),
                            m = Math.abs(r.position.y - f.position.y),
                            v = {
                                startEvnt: r,
                                endEvnt: f,
                                direction: n.replace("swipe", ""),
                                xAmount: g,
                                yAmount: m,
                                duration: f.time - r.time
                            };
                        a.trigger("swipeend", v)
                    }
                    l = !1, c = !1
                }
                var r, s = this,
                    a = e(s),
                    l = !1,
                    c = !1,
                    u = {
                        x: 0,
                        y: 0
                    },
                    p = {
                        x: 0,
                        y: 0
                    };
                a.on(o.startevent, t), a.on(o.moveevent, n), a.on(o.endevent, i)
            },
            remove: function() {
                e(this).off(o.startevent, e(this).data.callee1).off(o.moveevent, e(this).data.callee2).off(o.endevent, e(this).data.callee3)
            }
        }, e.event.special.scrollstart = {
            setup: function() {
                function t(e, t) {
                    i = t, n(s, i ? "scrollstart" : "scrollend", e)
                }
                var i, r, s = this,
                    a = e(s);
                a.on(o.scrollevent, function e(n) {
                    a.data("callee", e), i || t(n, !0), clearTimeout(r), r = setTimeout(function() {
                        t(n, !1)
                    }, 50)
                })
            },
            remove: function() {
                e(this).off(o.scrollevent, e(this).data.callee)
            }
        };
        var r, s, a, l, c = e(window),
            u = {
                0: !0,
                180: !0
            };
        if (o.orientation_support) {
            var p = window.innerWidth || c.width(),
                h = window.innerHeight || c.height();
            a = p > h && p - h > 50, l = u[window.orientation], (a && l || !a && !l) && (u = {
                "-90": !0,
                90: !0
            })
        }
        e.event.special.orientationchange = {
            setup: function() {
                return !o.orientation_support && (s = r(), c.on("throttledresize", t), !0)
            },
            teardown: function() {
                return !o.orientation_support && (c.off("throttledresize", t), !0)
            },
            add: function(e) {
                var t = e.handler;
                e.handler = function(e) {
                    return e.orientation = r(), t.apply(this, arguments)
                }
            }
        }, e.event.special.orientationchange.orientation = r = function() {
            var e = !0,
                t = document.documentElement;
            return e = o.orientation_support ? u[window.orientation] : t && t.clientWidth / t.clientHeight < 1.1, e ? "portrait" : "landscape"
        }, e.event.special.throttledresize = {
            setup: function() {
                e(this).on("resize", m)
            },
            teardown: function() {
                e(this).off("resize", m)
            }
        };
        var d, f, g, m = function() {
                f = Date.now(), g = f - v, g >= 250 ? (v = f, e(this).trigger("throttledresize")) : (d && window.clearTimeout(d), d = window.setTimeout(t, 250 - g))
            },
            v = 0;
        e.each({
            scrollend: "scrollstart",
            swipeup: "swipe",
            swiperight: "swipe",
            swipedown: "swipe",
            swipeleft: "swipe",
            swipeend: "swipe",
            tap2: "tap"
        }, function(t, n) {
            e.event.special[t] = {
                setup: function() {
                    e(this).on(n, e.noop)
                }
            }
        })
    }(jQuery), define("third_party/jquery.mobile-events", function() {}),
    function(e, t) {
        "use strict";
        var n = e.History = e.History || {},
            i = e.jQuery;
        if (void 0 !== n.Adapter) throw new Error("History.js Adapter has already been loaded...");
        n.Adapter = {
            bind: function(e, t, n) {
                i(e).bind(t, n)
            },
            trigger: function(e, t, n) {
                i(e).trigger(t, n)
            },
            extractEventData: function(e, t, n) {
                return t && t.originalEvent && t.originalEvent[e] || n && n[e] || void 0
            },
            onDomLoad: function(e) {
                i(e)
            }
        }, void 0 !== n.init && n.init()
    }(window),
    function(e, t) {
        "use strict";
        var n = e.console || void 0,
            i = e.document,
            o = e.navigator,
            r = e.sessionStorage || !1,
            s = e.setTimeout,
            a = e.clearTimeout,
            l = e.setInterval,
            c = e.clearInterval,
            u = e.JSON,
            p = e.alert,
            h = e.History = e.History || {},
            d = e.history;
        try {
            r.setItem("TEST", "1"), r.removeItem("TEST")
        } catch (e) {
            r = !1
        }
        if (u.stringify = u.stringify || u.encode, u.parse = u.parse || u.decode, void 0 !== h.init) throw new Error("History.js Core has already been loaded...");
        h.init = function(e) {
            return void 0 !== h.Adapter && (void 0 !== h.initCore && h.initCore(), void 0 !== h.initHtml4 && h.initHtml4(), !0)
        }, h.initCore = function(t) {
            if (void 0 !== h.initCore.initialized) return !1;
            if (h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.disableSuid = h.options.disableSuid || !1, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || i.title, h.options.html4Mode = h.options.html4Mode || !1, h.options.delayInit = h.options.delayInit || !1, h.intervalList = [], h.clearAllIntervals = function() {
                    var e, t = h.intervalList;
                    if (void 0 !== t && null !== t) {
                        for (e = 0; e < t.length; e++) c(t[e]);
                        h.intervalList = null
                    }
                }, h.debug = function() {
                    h.options.debug && h.log.apply(h, arguments)
                }, h.log = function() {
                    var e, t, o, r, s, a = !(void 0 === n || void 0 === n.log || void 0 === n.log.apply),
                        l = i.getElementById("log");
                    for (a ? (r = Array.prototype.slice.call(arguments), e = r.shift(), void 0 !== n.debug ? n.debug.apply(n, [e, r]) : n.log.apply(n, [e, r])) : e = "\n" + arguments[0] + "\n", t = 1, o = arguments.length; t < o; ++t) {
                        if ("object" == typeof(s = arguments[t]) && void 0 !== u) try {
                            s = u.stringify(s)
                        } catch (e) {}
                        e += "\n" + s + "\n"
                    }
                    return l ? (l.value += e + "\n-----\n", l.scrollTop = l.scrollHeight - l.clientHeight) : a || p(e), !0
                }, h.getInternetExplorerMajorVersion = function() {
                    return h.getInternetExplorerMajorVersion.cached = void 0 !== h.getInternetExplorerMajorVersion.cached ? h.getInternetExplorerMajorVersion.cached : function() {
                        for (var e = 3, t = i.createElement("div"), n = t.getElementsByTagName("i");
                            (t.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e") && n[0];);
                        return e > 4 && e
                    }()
                }, h.isInternetExplorer = function() {
                    return h.isInternetExplorer.cached = void 0 !== h.isInternetExplorer.cached ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion())
                }, h.options.html4Mode ? h.emulated = {
                    pushState: !0,
                    hashChange: !0
                } : h.emulated = {
                    pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !(/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(o.userAgent) || /AppleWebKit\/5([0-2]|3[0-2])/i.test(o.userAgent))),
                    hashChange: Boolean(!("onhashchange" in e || "onhashchange" in i) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
                }, h.enabled = !h.emulated.pushState, h.bugs = {
                    setHash: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === o.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(o.userAgent)),
                    safariPoll: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === o.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(o.userAgent)),
                    ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
                    hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
                }, h.isEmptyObject = function(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }, h.cloneObject = function(e) {
                    var t, n;
                    return e ? (t = u.stringify(e), n = u.parse(t)) : n = {}, n
                }, h.getRootUrl = function() {
                    var e = i.location.protocol + "//" + (i.location.hostname || i.location.host);
                    return i.location.port && (e += ":" + i.location.port), e += "/"
                }, h.getBaseHref = function() {
                    var e = i.getElementsByTagName("base"),
                        t = null,
                        n = "";
                    return 1 === e.length && (t = e[0], n = t.href.replace(/[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n && (n += "/"), n
                }, h.getBaseUrl = function() {
                    return h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl()
                }, h.getPageUrl = function() {
                    var e = h.getState(!1, !1),
                        t = (e || {}).url || h.getLocationHref();
                    return t.replace(/\/+$/, "").replace(/[^\/]+$/, function(e, t, n) {
                        return /\./.test(e) ? e : e + "/"
                    })
                }, h.getBasePageUrl = function() {
                    return h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(e, t, n) {
                        return /[^\/]$/.test(e) ? "" : e
                    }).replace(/\/+$/, "") + "/"
                }, h.getFullUrl = function(e, t) {
                    var n = e,
                        i = e.substring(0, 1);
                    return t = void 0 === t || t, /[a-z]+\:\/\//.test(e) || (n = "/" === i ? h.getRootUrl() + e.replace(/^\/+/, "") : "#" === i ? h.getPageUrl().replace(/#.*/, "") + e : "?" === i ? h.getPageUrl().replace(/[\?#].*/, "") + e : t ? h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
                }, h.getShortUrl = function(e) {
                    var t = e,
                        n = h.getBaseUrl(),
                        i = h.getRootUrl();
                    return h.emulated.pushState && (t = t.replace(n, "")), t = t.replace(i, "/"), h.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                }, h.getLocationHref = function(e) {
                    return e = e || i, e.URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : -1 == e.URL.indexOf("#") && -1 != e.location.href.indexOf("#") ? e.location.href : e.URL || e.location.href
                }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function() {
                    h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
                }, h.getState = function(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var n = h.getLastSavedState();
                    return !n && t && (n = h.createStateObject()), e && (n = h.cloneObject(n), n.url = n.cleanUrl || n.url), n
                }, h.getIdByState = function(e) {
                    var t, n = h.extractId(e.url);
                    if (!n)
                        if (t = h.getStateString(e), void 0 !== h.stateToId[t]) n = h.stateToId[t];
                        else if (void 0 !== h.store.stateToId[t]) n = h.store.stateToId[t];
                    else {
                        for (;;)
                            if (n = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), void 0 === h.idToState[n] && void 0 === h.store.idToState[n]) break;
                        h.stateToId[t] = n, h.idToState[n] = e
                    }
                    return n
                }, h.normalizeState = function(e) {
                    var t, n;
                    return e && "object" == typeof e || (e = {}), void 0 !== e.normalized ? e : (e.data && "object" == typeof e.data || (e.data = {}), t = {}, t.normalized = !0, t.title = e.title || "", t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref()), t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(e.data), t.id = h.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !h.isEmptyObject(t.data), (t.title || n) && !0 !== h.options.disableSuid && (t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t)
                }, h.createStateObject = function(e, t, n) {
                    var i = {
                        data: e,
                        title: t,
                        url: n
                    };
                    return i = h.normalizeState(i)
                }, h.getStateById = function(e) {
                    return e = String(e), h.idToState[e] || h.store.idToState[e] || void 0
                }, h.getStateString = function(e) {
                    var t, n;
                    return t = h.normalizeState(e), n = {
                        data: t.data,
                        title: e.title,
                        url: e.url
                    }, u.stringify(n)
                }, h.getStateId = function(e) {
                    var t;
                    return t = h.normalizeState(e), t.id
                }, h.getHashByState = function(e) {
                    var t;
                    return t = h.normalizeState(e), t.hash
                }, h.extractId = function(e) {
                    var t, n;
                    return n = -1 != e.indexOf("#") ? e.split("#")[0] : e, t = /(.*)\&_suid=([0-9]+)$/.exec(n), t ? t[1] || e : e, (t ? String(t[2] || "") : "") || !1
                }, h.isTraditionalAnchor = function(e) {
                    return !/[\/\?\.]/.test(e)
                }, h.extractState = function(e, t) {
                    var n, i, o = null;
                    return t = t || !1, n = h.extractId(e), n && (o = h.getStateById(n)), o || (i = h.getFullUrl(e), n = h.getIdByUrl(i) || !1, n && (o = h.getStateById(n)), o || !t || h.isTraditionalAnchor(e) || (o = h.createStateObject(null, null, i))), o
                }, h.getIdByUrl = function(e) {
                    return h.urlToId[e] || h.store.urlToId[e] || void 0
                }, h.getLastSavedState = function() {
                    return h.savedStates[h.savedStates.length - 1] || void 0
                }, h.getLastStoredState = function() {
                    return h.storedStates[h.storedStates.length - 1] || void 0
                }, h.hasUrlDuplicate = function(e) {
                    var t;
                    return t = h.extractState(e.url), t && t.id !== e.id
                }, h.storeState = function(e) {
                    return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(e)), e
                }, h.isLastSavedState = function(e) {
                    var t, n, i, o = !1;
                    return h.savedStates.length && (t = e.id, n = h.getLastSavedState(), i = n.id, o = t === i), o
                }, h.saveState = function(e) {
                    return !h.isLastSavedState(e) && (h.savedStates.push(h.cloneObject(e)), !0)
                }, h.getStateByIndex = function(e) {
                    return void 0 === e ? h.savedStates[h.savedStates.length - 1] : e < 0 ? h.savedStates[h.savedStates.length + e] : h.savedStates[e]
                }, h.getCurrentIndex = function() {
                    return h.savedStates.length < 1 ? 0 : h.savedStates.length - 1
                }, h.getHash = function(e) {
                    var t = h.getLocationHref(e);
                    return h.getHashByUrl(t)
                }, h.unescapeHash = function(e) {
                    var t = h.normalizeHash(e);
                    return t = decodeURIComponent(t)
                }, h.normalizeHash = function(e) {
                    return e.replace(/[^#]*#/, "").replace(/#.*/, "")
                }, h.setHash = function(e, t) {
                    var n, o;
                    return !1 !== t && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.setHash,
                        args: arguments,
                        queue: t
                    }), !1) : (h.busy(!0), n = h.extractState(e, !0), n && !h.emulated.pushState ? h.pushState(n.data, n.title, n.url, !1) : h.getHash() !== e && (h.bugs.setHash ? (o = h.getPageUrl(), h.pushState(null, null, o + "#" + e, !1)) : i.location.hash = e), h)
                }, h.escapeHash = function(t) {
                    var n = h.normalizeHash(t);
                    return n = e.encodeURIComponent(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
                }, h.getHashByUrl = function(e) {
                    var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                    return t = h.unescapeHash(t)
                }, h.setTitle = function(e) {
                    var t, n = e.title;
                    n || (t = h.getStateByIndex(0)) && t.url === e.url && (n = t.title || h.options.initialTitle);
                    try {
                        i.getElementsByTagName("title")[0].innerHTML = n.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (e) {}
                    return i.title = n, h
                }, h.queues = [], h.busy = function(e) {
                    if (void 0 !== e ? h.busy.flag = e : void 0 === h.busy.flag && (h.busy.flag = !1), !h.busy.flag) {
                        a(h.busy.timeout);
                        var t = function() {
                            var e, n, i;
                            if (!h.busy.flag)
                                for (e = h.queues.length - 1; e >= 0; --e) n = h.queues[e], 0 !== n.length && (i = n.shift(), h.fireQueueItem(i), h.busy.timeout = s(t, h.options.busyDelay))
                        };
                        h.busy.timeout = s(t, h.options.busyDelay)
                    }
                    return h.busy.flag
                }, h.busy.flag = !1, h.fireQueueItem = function(e) {
                    return e.callback.apply(e.scope || h, e.args || [])
                }, h.pushQueue = function(e) {
                    return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [], h.queues[e.queue || 0].push(e), h
                }, h.queue = function(e, t) {
                    return "function" == typeof e && (e = {
                        callback: e
                    }), void 0 !== t && (e.queue = t), h.busy() ? h.pushQueue(e) : h.fireQueueItem(e), h
                }, h.clearQueue = function() {
                    return h.busy.flag = !1, h.queues = [], h
                }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function() {
                    return h.stateChanged = !0, h.doubleCheckClear(), h
                }, h.doubleCheckClear = function() {
                    return h.doubleChecker && (a(h.doubleChecker), h.doubleChecker = !1), h
                }, h.doubleCheck = function(e) {
                    return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = s(function() {
                        return h.doubleCheckClear(), h.stateChanged || e(), !0
                    }, h.options.doubleCheckInterval)), h
                }, h.safariStatePoll = function() {
                    var t, n = h.extractState(h.getLocationHref());
                    if (!h.isLastSavedState(n)) return t = n, t || (t = h.createStateObject()), h.Adapter.trigger(e, "popstate"), h
                }, h.back = function(e) {
                    return !1 !== e && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.back,
                        args: arguments,
                        queue: e
                    }), !1) : (h.busy(!0), h.doubleCheck(function() {
                        h.back(!1)
                    }), d.go(-1), !0)
                }, h.forward = function(e) {
                    return !1 !== e && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.forward,
                        args: arguments,
                        queue: e
                    }), !1) : (h.busy(!0), h.doubleCheck(function() {
                        h.forward(!1)
                    }), d.go(1), !0)
                }, h.go = function(e, t) {
                    var n;
                    if (e > 0)
                        for (n = 1; n <= e; ++n) h.forward(t);
                    else {
                        if (!(e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                        for (n = -1; n >= e; --n) h.back(t)
                    }
                    return h
                }, h.emulated.pushState) {
                var f = function() {};
                h.pushState = h.pushState || f, h.replaceState = h.replaceState || f
            } else h.onPopState = function(t, n) {
                var i, o, r = !1,
                    s = !1;
                return h.doubleCheckComplete(), (i = h.getHash()) ? (o = h.extractState(i || h.getLocationHref(), !0), o ? h.replaceState(o.data, o.title, o.url, !1) : (h.Adapter.trigger(e, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : (r = h.Adapter.extractEventData("state", t, n) || !1, s = r ? h.getStateById(r) : h.expectedStateId ? h.getStateById(h.expectedStateId) : h.extractState(h.getLocationHref()), s || (s = h.createStateObject(null, null, h.getLocationHref())), h.expectedStateId = !1, h.isLastSavedState(s) ? (h.busy(!1), !1) : (h.storeState(s), h.saveState(s), h.setTitle(s), h.Adapter.trigger(e, "statechange"), h.busy(!1), !0))
            }, h.Adapter.bind(e, "popstate", h.onPopState), h.pushState = function(t, n, i, o) {
                if (h.getHashByUrl(i) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== o && h.busy()) return h.pushQueue({
                    scope: h,
                    callback: h.pushState,
                    args: arguments,
                    queue: o
                }), !1;
                h.busy(!0);
                var r = h.createStateObject(t, n, i);
                return h.isLastSavedState(r) ? h.busy(!1) : (h.storeState(r), h.expectedStateId = r.id, d.pushState(r.id, r.title, r.url), h.Adapter.trigger(e, "popstate")), !0
            }, h.replaceState = function(t, n, i, o) {
                if (h.getHashByUrl(i) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== o && h.busy()) return h.pushQueue({
                    scope: h,
                    callback: h.replaceState,
                    args: arguments,
                    queue: o
                }), !1;
                h.busy(!0);
                var r = h.createStateObject(t, n, i);
                return h.isLastSavedState(r) ? h.busy(!1) : (h.storeState(r), h.expectedStateId = r.id, d.replaceState(r.id, r.title, r.url), h.Adapter.trigger(e, "popstate")), !0
            };
            if (r) {
                try {
                    h.store = u.parse(r.getItem("History.store")) || {}
                } catch (e) {
                    h.store = {}
                }
                h.normalizeStore()
            } else h.store = {}, h.normalizeStore();
            h.Adapter.bind(e, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))), r && (h.onUnload = function() {
                var e, t, n;
                try {
                    e = u.parse(r.getItem("History.store")) || {}
                } catch (t) {
                    e = {}
                }
                e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {};
                for (t in h.idToState) h.idToState.hasOwnProperty(t) && (e.idToState[t] = h.idToState[t]);
                for (t in h.urlToId) h.urlToId.hasOwnProperty(t) && (e.urlToId[t] = h.urlToId[t]);
                for (t in h.stateToId) h.stateToId.hasOwnProperty(t) && (e.stateToId[t] = h.stateToId[t]);
                h.store = e, h.normalizeStore(), n = u.stringify(e);
                try {
                    r.setItem("History.store", n)
                } catch (e) {
                    if (e.code !== DOMException.QUOTA_EXCEEDED_ERR) throw e;
                    r.length && (r.removeItem("History.store"), r.setItem("History.store", n))
                }
            }, h.intervalList.push(l(h.onUnload, h.options.storeInterval)), h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter.bind(e, "unload", h.onUnload)), h.emulated.pushState || (h.bugs.safariPoll && h.intervalList.push(l(h.safariStatePoll, h.options.safariPollInterval)), "Apple Computer, Inc." !== o.vendor && "Mozilla" !== (o.appCodeName || "") || (h.Adapter.bind(e, "hashchange", function() {
                h.Adapter.trigger(e, "popstate")
            }), h.getHash() && h.Adapter.onDomLoad(function() {
                h.Adapter.trigger(e, "hashchange")
            })))
        }, h.options && h.options.delayInit || h.init()
    }(window), define("third_party/jquery-history", function() {}),
    function(e) {
        var t, n, i = e(window),
            o = {},
            r = [],
            s = [],
            a = null,
            l = [],
            c = null,
            u = /(iPad|iPhone|iPod)/g.test(navigator.userAgent),
            p = {
                _init: function(t) {
                    var n = e(t),
                        i = n.data("popupoptions");
                    s[t.id] = !1, r[t.id] = 0, n.data("popup-initialized") || (n.attr("data-popup-initialized", "true"), p._initonce(t)), i.autoopen && setTimeout(function() {
                        p.show(t, 0)
                    }, 0)
                },
                _initonce: function(n) {
                    var i, o, r = e(n),
                        s = e("body"),
                        l = r.data("popupoptions");
                    if (a = parseInt(s.css("margin-right"), 10), c = void 0 !== document.body.style.webkitTransition || void 0 !== document.body.style.MozTransition || void 0 !== document.body.style.msTransition || void 0 !== document.body.style.OTransition || void 0 !== document.body.style.transition, "tooltip" == l.type && (l.background = !1, l.scrolllock = !1), l.backgroundactive && (l.background = !1, l.blur = !1, l.scrolllock = !1), l.scrolllock) {
                        var h, d;
                        void 0 === t && (h = e('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), d = h.children(), t = d.innerWidth() - d.height(99).innerWidth(), h.remove())
                    }
                    if (r.attr("id") || r.attr("id", "j-popup-" + parseInt(1e8 * Math.random(), 10)), r.addClass("popup_content"), l.background && !e("#" + n.id + "_background").length) {
                        s.append('<div id="' + n.id + '_background" class="popup_background"></div>');
                        var f = e("#" + n.id + "_background");
                        f.css({
                            opacity: 0,
                            visibility: "hidden",
                            backgroundColor: l.color,
                            position: "fixed",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }), l.setzindex && !l.autozindex && f.css("z-index", "100000"), l.transition && f.css("transition", l.transition)
                    }
                    s.append(n), r.wrap('<div id="' + n.id + '_wrapper" class="popup_wrapper" />'), i = e("#" + n.id + "_wrapper"), i.css({
                        opacity: 0,
                        visibility: "hidden",
                        position: "absolute"
                    }), u && i.css("cursor", "pointer"), "overlay" == l.type && i.css("overflow", "auto"), r.css({
                        opacity: 0,
                        visibility: "hidden",
                        display: "inline-block"
                    }), l.setzindex && !l.autozindex && i.css("z-index", "100001"), l.outline || r.css("outline", "none"), l.transition && (r.css("transition", l.transition), i.css("transition", l.transition)), r.attr("aria-hidden", !0), "overlay" == l.type && (r.css({
                        textAlign: "left",
                        position: "relative",
                        verticalAlign: "middle"
                    }), o = {
                        position: "fixed",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        textAlign: "center"
                    }, l.backgroundactive && (o.position = "absolute", o.height = "0", o.overflow = "visible"), i.css(o), i.append('<div class="popup_align" />'), e(".popup_align").css({
                        display: "inline-block",
                        verticalAlign: "middle",
                        height: "100%"
                    })), r.attr("role", "dialog");
                    var g = l.openelement ? l.openelement : "." + n.id + "_open";
                    e(g).each(function(t, n) {
                        e(n).attr("data-popup-ordinal", t), n.id || e(n).attr("id", "open_" + parseInt(1e8 * Math.random(), 10))
                    }), r.attr("aria-labelledby") || r.attr("aria-label") || r.attr("aria-labelledby", e(g).attr("id")), "hover" == l.action ? (l.keepfocus = !1, e(g).on("mouseenter", function(t) {
                        p.show(n, e(this).data("popup-ordinal"))
                    }), e(g).on("mouseleave", function(e) {
                        p.hide(n)
                    })) : e(document).on("click", g, function(t) {
                        t.preventDefault();
                        var i = e(this).data("popup-ordinal");
                        setTimeout(function() {
                            p.show(n, i)
                        }, 0)
                    }), l.closebutton && p.addclosebutton(n), l.detach ? r.hide().detach() : i.hide()
                },
                show: function(o, u) {
                    var d = e(o);
                    if (!d.data("popup-visible")) {
                        d.data("popup-initialized") || p._init(o), d.attr("data-popup-initialized", "true");
                        var f = e("body"),
                            g = d.data("popupoptions"),
                            m = e("#" + o.id + "_wrapper"),
                            v = e("#" + o.id + "_background");
                        if (h(o, u, g.beforeopen), s[o.id] = u, setTimeout(function() {
                                l.push(o.id)
                            }, 0), g.autozindex) {
                            for (var y = document.getElementsByTagName("*"), b = y.length, x = 0, w = 0; w < b; w++) {
                                var _ = e(y[w]).css("z-index");
                                "auto" !== _ && (_ = parseInt(_, 10), x < _ && (x = _))
                            }
                            r[o.id] = x, g.background && r[o.id] > 0 && e("#" + o.id + "_background").css({
                                zIndex: r[o.id] + 1
                            }), r[o.id] > 0 && m.css({
                                zIndex: r[o.id] + 2
                            })
                        }
                        g.detach ? (m.prepend(o), d.show()) : m.show(), n = setTimeout(function() {
                            m.css({
                                visibility: "visible",
                                opacity: 1
                            }), e("html").addClass("popup_visible").addClass("popup_visible_" + o.id), m.addClass("popup_wrapper_visible")
                        }, 20), g.scrolllock && (f.css("overflow", "hidden"), f.height() > i.height() && f.css("margin-right", a + t)), g.backgroundactive && d.css({
                            top: (i.height() - (d.get(0).offsetHeight + parseInt(d.css("margin-top"), 10) + parseInt(d.css("margin-bottom"), 10))) / 2 + "px"
                        }), d.css({
                            visibility: "visible",
                            opacity: 1
                        }), g.background && (v.css({
                            visibility: "visible",
                            opacity: g.opacity
                        }), setTimeout(function() {
                            v.css({
                                opacity: g.opacity
                            })
                        }, 0)), d.data("popup-visible", !0), p.reposition(o, u), d.data("focusedelementbeforepopup", document.activeElement), g.keepfocus && (d.attr("tabindex", -1), setTimeout(function() {
                            "closebutton" === g.focuselement ? e("#" + o.id + " ." + o.id + "_close:first").focus() : g.focuselement ? e(g.focuselement).focus() : d.focus()
                        }, g.focusdelay)), e(g.pagecontainer).attr("aria-hidden", !0), d.attr("aria-hidden", !1), h(o, u, g.onopen), c ? m.one("transitionend", function() {
                            h(o, u, g.opentransitionend)
                        }) : h(o, u, g.opentransitionend), "tooltip" == g.type && e(window).on("resize." + o.id, function() {
                            p.reposition(o, u)
                        })
                    }
                },
                hide: function(t, i) {
                    var o = e.inArray(t.id, l);
                    if (-1 !== o) {
                        n && clearTimeout(n);
                        var r = e("body"),
                            u = e(t),
                            p = u.data("popupoptions"),
                            d = e("#" + t.id + "_wrapper"),
                            f = e("#" + t.id + "_background");
                        u.data("popup-visible", !1), 1 === l.length ? e("html").removeClass("popup_visible").removeClass("popup_visible_" + t.id) : e("html").hasClass("popup_visible_" + t.id) && e("html").removeClass("popup_visible_" + t.id), l.splice(o, 1), d.hasClass("popup_wrapper_visible") && d.removeClass("popup_wrapper_visible"), p.keepfocus && !i && setTimeout(function() {
                            e(u.data("focusedelementbeforepopup")).is(":visible") && u.data("focusedelementbeforepopup").focus()
                        }, 0), d.css({
                            visibility: "hidden",
                            opacity: 0
                        }), u.css({
                            visibility: "hidden",
                            opacity: 0
                        }), p.background && f.css({
                            visibility: "hidden",
                            opacity: 0
                        }), e(p.pagecontainer).attr("aria-hidden", !1), u.attr("aria-hidden", !0), h(t, s[t.id], p.onclose), c && "0s" !== u.css("transition-duration") ? u.one("transitionend", function(e) {
                            u.data("popup-visible") || (p.detach ? u.hide().detach() : d.hide()), p.scrolllock && setTimeout(function() {
                                r.css({
                                    overflow: "visible",
                                    "margin-right": a
                                })
                            }, 10), h(t, s[t.id], p.closetransitionend)
                        }) : (p.detach ? u.hide().detach() : d.hide(), p.scrolllock && setTimeout(function() {
                            r.css({
                                overflow: "visible",
                                "margin-right": a
                            })
                        }, 10), h(t, s[t.id], p.closetransitionend)), "tooltip" == p.type && e(window).off("resize." + t.id)
                    }
                },
                toggle: function(t, n) {
                    e(t).data("popup-visible") ? p.hide(t) : setTimeout(function() {
                        p.show(t, n)
                    }, 0)
                },
                reposition: function(t, n) {
                    var o = e(t),
                        r = o.data("popupoptions"),
                        s = e("#" + t.id + "_wrapper");
                    e("#" + t.id + "_background");
                    if (n = n || 0, "tooltip" == r.type) {
                        s.css({
                            position: "absolute"
                        });
                        var a;
                        a = r.tooltipanchor ? e(r.tooltipanchor) : r.openelement ? e(r.openelement).filter('[data-popup-ordinal="' + n + '"]') : e("." + t.id + '_open[data-popup-ordinal="' + n + '"]');
                        var l = a.offset();
                        "right" == r.horizontal ? s.css("left", l.left + a.outerWidth() + r.offsetleft) : "leftedge" == r.horizontal ? s.css("left", l.left + a.outerWidth() - a.outerWidth() + r.offsetleft) : "left" == r.horizontal ? s.css("right", i.width() - l.left - r.offsetleft) : "rightedge" == r.horizontal ? s.css("right", i.width() - l.left - a.outerWidth() - r.offsetleft) : s.css("left", l.left + a.outerWidth() / 2 - o.outerWidth() / 2 - parseFloat(o.css("marginLeft")) + r.offsetleft), "bottom" == r.vertical ? s.css("top", l.top + a.outerHeight() + r.offsettop) : "bottomedge" == r.vertical ? s.css("top", l.top + a.outerHeight() - o.outerHeight() + r.offsettop) : "top" == r.vertical ? s.css("bottom", i.height() - l.top - r.offsettop) : "topedge" == r.vertical ? s.css("bottom", i.height() - l.top - o.outerHeight() - r.offsettop) : s.css("top", l.top + a.outerHeight() / 2 - o.outerHeight() / 2 - parseFloat(o.css("marginTop")) + r.offsettop)
                    } else "overlay" == r.type && (r.horizontal ? s.css("text-align", r.horizontal) : s.css("text-align", "center"), r.vertical ? o.css("vertical-align", r.vertical) : o.css("vertical-align", "middle"))
                },
                addclosebutton: function(t) {
                    var n;
                    n = e(t).data("popupoptions").closebuttonmarkup ? e(o.closebuttonmarkup).addClass(t.id + "_close") : '<button class="popup_close ' + t.id + '_close" title="Close" aria-label="Close"><span aria-hidden="true">×</span></button>', e(t).data("popup-initialized") && e(t).append(n)
                }
            },
            h = function(t, n, i) {
                var o = e(t).data("popupoptions"),
                    r = o.openelement ? o.openelement : "." + t.id + "_open",
                    s = e(r + '[data-popup-ordinal="' + n + '"]');
                "function" == typeof i && i.call(e(t), t, s)
            };
        e(document).on("keydown", function(t) {
            if (l.length) {
                var n = l[l.length - 1],
                    i = document.getElementById(n);
                e(i).data("popupoptions").escape && 27 == t.keyCode && p.hide(i)
            }
        }), e(document).on("click", function(t) {
            if (l.length) {
                var n = l[l.length - 1],
                    i = document.getElementById(n),
                    o = e(i).data("popupoptions").closeelement ? e(i).data("popupoptions").closeelement : "." + i.id + "_close";
                e(t.target).closest(o).length && (t.preventDefault(), p.hide(i)), e(i).data("popupoptions").blur && !e(t.target).closest("#" + n).length && 2 !== t.which && e(t.target).is(":visible") && (e(i).data("popupoptions").background ? (p.hide(i), t.preventDefault()) : p.hide(i, !0))
            }
        }), e(document).on("keydown", function(t) {
            if (l.length && 9 == t.which) {
                var n = l[l.length - 1],
                    i = document.getElementById(n),
                    o = e(i).find("*"),
                    r = o.filter("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(":visible"),
                    s = e(":focus"),
                    a = r.length,
                    c = r.index(s);
                0 === a ? (e(i).focus(), t.preventDefault()) : t.shiftKey ? 0 === c && (r.get(a - 1).focus(), t.preventDefault()) : c == a - 1 && (r.get(0).focus(), t.preventDefault())
            }
        }), e.fn.popup = function(t) {
            return this.each(function() {
                var n = e(this);
                if ("object" == typeof t) {
                    var i = e.extend({}, e.fn.popup.defaults, n.data("popupoptions"), t);
                    n.data("popupoptions", i), o = n.data("popupoptions"), p._init(this)
                } else "string" == typeof t ? (n.data("popupoptions") || (n.data("popupoptions", e.fn.popup.defaults), o = n.data("popupoptions")), p[t].call(this, this)) : (n.data("popupoptions") || (n.data("popupoptions", e.fn.popup.defaults), o = n.data("popupoptions")), p._init(this))
            })
        }, e.fn.popup.defaults = {
            type: "overlay",
            autoopen: !1,
            background: !0,
            backgroundactive: !1,
            color: "black",
            opacity: "0.5",
            horizontal: "center",
            vertical: "middle",
            offsettop: 0,
            offsetleft: 0,
            escape: !0,
            blur: !0,
            setzindex: !0,
            autozindex: !1,
            scrolllock: !1,
            closebutton: !1,
            closebuttonmarkup: null,
            keepfocus: !0,
            focuselement: null,
            focusdelay: 50,
            outline: !1,
            pagecontainer: null,
            detach: !1,
            openelement: null,
            closeelement: null,
            transition: null,
            tooltipanchor: null,
            beforeopen: null,
            onclose: null,
            onopen: null,
            opentransitionend: null,
            closetransitionend: null
        }
    }(jQuery), define("third_party/jquery-popupoverlay", function() {}),
    function(e) {
        ! function(e) {
            e.ui = e.ui || {};
            var t = (e.ui.version = "1.12.1", 0),
                n = Array.prototype.slice;
            e.cleanData = function(t) {
                return function(n) {
                    var i, o, r;
                    for (r = 0; null != (o = n[r]); r++) try {
                        i = e._data(o, "events"), i && i.remove && e(o).triggerHandler("remove")
                    } catch (e) {}
                    t(n)
                }
            }(e.cleanData), e.widget = function(t, n, i) {
                var o, r, s, a = {},
                    l = t.split(".")[0];
                t = t.split(".")[1];
                var c = l + "-" + t;
                return i || (i = n, n = e.Widget), e.isArray(i) && (i = e.extend.apply(null, [{}].concat(i))), e.expr[":"][c.toLowerCase()] = function(t) {
                    return !!e.data(t, c)
                }, e[l] = e[l] || {}, o = e[l][t], r = e[l][t] = function(e, t) {
                    if (!this._createWidget) return new r(e, t);
                    arguments.length && this._createWidget(e, t)
                }, e.extend(r, o, {
                    version: i.version,
                    _proto: e.extend({}, i),
                    _childConstructors: []
                }), s = new n, s.options = e.widget.extend({}, s.options), e.each(i, function(t, i) {
                    if (!e.isFunction(i)) return void(a[t] = i);
                    a[t] = function() {
                        function e() {
                            return n.prototype[t].apply(this, arguments)
                        }

                        function o(e) {
                            return n.prototype[t].apply(this, e)
                        }
                        return function() {
                            var t, n = this._super,
                                r = this._superApply;
                            return this._super = e, this._superApply = o, t = i.apply(this, arguments), this._super = n, this._superApply = r, t
                        }
                    }()
                }), r.prototype = e.widget.extend(s, {
                    widgetEventPrefix: o ? s.widgetEventPrefix || t : t
                }, a, {
                    constructor: r,
                    namespace: l,
                    widgetName: t,
                    widgetFullName: c
                }), o ? (e.each(o._childConstructors, function(t, n) {
                    var i = n.prototype;
                    e.widget(i.namespace + "." + i.widgetName, r, n._proto)
                }), delete o._childConstructors) : n._childConstructors.push(r), e.widget.bridge(t, r), r
            }, e.widget.extend = function(t) {
                for (var i, o, r = n.call(arguments, 1), s = 0, a = r.length; s < a; s++)
                    for (i in r[s]) o = r[s][i], r[s].hasOwnProperty(i) && void 0 !== o && (e.isPlainObject(o) ? t[i] = e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], o) : e.widget.extend({}, o) : t[i] = o);
                return t
            }, e.widget.bridge = function(t, i) {
                var o = i.prototype.widgetFullName || t;
                e.fn[t] = function(r) {
                    var s = "string" == typeof r,
                        a = n.call(arguments, 1),
                        l = this;
                    return s ? this.length || "instance" !== r ? this.each(function() {
                        var n, i = e.data(this, o);
                        return "instance" === r ? (l = i, !1) : i ? e.isFunction(i[r]) && "_" !== r.charAt(0) ? (n = i[r].apply(i, a), n !== i && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, !1) : void 0) : e.error("no such method '" + r + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + r + "'")
                    }) : l = void 0 : (a.length && (r = e.widget.extend.apply(null, [r].concat(a))), this.each(function() {
                        var t = e.data(this, o);
                        t ? (t.option(r || {}), t._init && t._init()) : e.data(this, o, new i(r, this))
                    })), l
                }
            }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    classes: {},
                    disabled: !1,
                    create: null
                },
                _createWidget: function(n, i) {
                    i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = t++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), this.classesElementLookup = {}, i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                        remove: function(e) {
                            e.target === i && this.destroy()
                        }
                    }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), n), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
                },
                _getCreateOptions: function() {
                    return {}
                },
                _getCreateEventData: e.noop,
                _create: e.noop,
                _init: e.noop,
                destroy: function() {
                    var t = this;
                    this._destroy(), e.each(this.classesElementLookup, function(e, n) {
                        t._removeClass(n, e)
                    }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
                },
                _destroy: e.noop,
                widget: function() {
                    return this.element
                },
                option: function(t, n) {
                    var i, o, r, s = t;
                    if (0 === arguments.length) return e.widget.extend({}, this.options);
                    if ("string" == typeof t)
                        if (s = {}, i = t.split("."), t = i.shift(), i.length) {
                            for (o = s[t] = e.widget.extend({}, this.options[t]), r = 0; r < i.length - 1; r++) o[i[r]] = o[i[r]] || {}, o = o[i[r]];
                            if (t = i.pop(), 1 === arguments.length) return void 0 === o[t] ? null : o[t];
                            o[t] = n
                        } else {
                            if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                            s[t] = n
                        }
                    return this._setOptions(s), this
                },
                _setOptions: function(e) {
                    var t;
                    for (t in e) this._setOption(t, e[t]);
                    return this
                },
                _setOption: function(e, t) {
                    return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this
                },
                _setOptionClasses: function(t) {
                    var n, i, o;
                    for (n in t) o = this.classesElementLookup[n], t[n] !== this.options.classes[n] && o && o.length && (i = e(o.get()), this._removeClass(o, n), i.addClass(this._classes({
                        element: i,
                        keys: n,
                        classes: t,
                        add: !0
                    })))
                },
                _setOptionDisabled: function(e) {
                    this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
                },
                enable: function() {
                    return this._setOptions({
                        disabled: !1
                    })
                },
                disable: function() {
                    return this._setOptions({
                        disabled: !0
                    })
                },
                _classes: function(t) {
                    function n(n, r) {
                        var s, a;
                        for (a = 0; a < n.length; a++) s = o.classesElementLookup[n[a]] || e(), s = e(t.add ? e.unique(s.get().concat(t.element.get())) : s.not(t.element).get()), o.classesElementLookup[n[a]] = s, i.push(n[a]), r && t.classes[n[a]] && i.push(t.classes[n[a]])
                    }
                    var i = [],
                        o = this;
                    return t = e.extend({
                        element: this.element,
                        classes: this.options.classes || {}
                    }, t), this._on(t.element, {
                        remove: "_untrackClassesElement"
                    }), t.keys && n(t.keys.match(/\S+/g) || [], !0), t.extra && n(t.extra.match(/\S+/g) || []), i.join(" ")
                },
                _untrackClassesElement: function(t) {
                    var n = this;
                    e.each(n.classesElementLookup, function(i, o) {
                        -1 !== e.inArray(t.target, o) && (n.classesElementLookup[i] = e(o.not(t.target).get()))
                    })
                },
                _removeClass: function(e, t, n) {
                    return this._toggleClass(e, t, n, !1)
                },
                _addClass: function(e, t, n) {
                    return this._toggleClass(e, t, n, !0)
                },
                _toggleClass: function(e, t, n, i) {
                    i = "boolean" == typeof i ? i : n;
                    var o = "string" == typeof e || null === e,
                        r = {
                            extra: o ? t : n,
                            keys: o ? e : t,
                            element: o ? this.element : e,
                            add: i
                        };
                    return r.element.toggleClass(this._classes(r), i), this
                },
                _on: function(t, n, i) {
                    var o, r = this;
                    "boolean" != typeof t && (i = n, n = t, t = !1), i ? (n = o = e(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, o = this.widget()), e.each(i, function(i, s) {
                        function a() {
                            if (t || !0 !== r.options.disabled && !e(this).hasClass("ui-state-disabled")) return ("string" == typeof s ? r[s] : s).apply(r, arguments)
                        }
                        "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || e.guid++);
                        var l = i.match(/^([\w:-]*)\s*(.*)$/),
                            c = l[1] + r.eventNamespace,
                            u = l[2];
                        u ? o.on(c, u, a) : n.on(c, a)
                    })
                },
                _off: function(t, n) {
                    n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(n).off(n), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
                },
                _delay: function(e, t) {
                    function n() {
                        return ("string" == typeof e ? i[e] : e).apply(i, arguments)
                    }
                    var i = this;
                    return setTimeout(n, t || 0)
                },
                _hoverable: function(t) {
                    this.hoverable = this.hoverable.add(t), this._on(t, {
                        mouseenter: function(t) {
                            this._addClass(e(t.currentTarget), null, "ui-state-hover")
                        },
                        mouseleave: function(t) {
                            this._removeClass(e(t.currentTarget), null, "ui-state-hover")
                        }
                    })
                },
                _focusable: function(t) {
                    this.focusable = this.focusable.add(t), this._on(t, {
                        focusin: function(t) {
                            this._addClass(e(t.currentTarget), null, "ui-state-focus")
                        },
                        focusout: function(t) {
                            this._removeClass(e(t.currentTarget), null, "ui-state-focus")
                        }
                    })
                },
                _trigger: function(t, n, i) {
                    var o, r, s = this.options[t];
                    if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], r = n.originalEvent)
                        for (o in r) o in n || (n[o] = r[o]);
                    return this.element.trigger(n, i), !(e.isFunction(s) && !1 === s.apply(this.element[0], [n].concat(i)) || n.isDefaultPrevented())
                }
            }, e.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(t, n) {
                e.Widget.prototype["_" + t] = function(i, o, r) {
                    "string" == typeof o && (o = {
                        effect: o
                    });
                    var s, a = o ? !0 === o || "number" == typeof o ? n : o.effect || n : t;
                    o = o || {}, "number" == typeof o && (o = {
                        duration: o
                    }), s = !e.isEmptyObject(o), o.complete = r, o.delay && i.delay(o.delay), s && e.effects && e.effects.effect[a] ? i[t](o) : a !== t && i[a] ? i[a](o.duration, o.easing, r) : i.queue(function(n) {
                        e(this)[t](), r && r.call(i[0]), n()
                    })
                }
            });
            var i = (e.widget, e.extend(e.expr[":"], {
                data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                    return function(n) {
                        return !!e.data(n, t)
                    }
                }) : function(t, n, i) {
                    return !!e.data(t, i[3])
                }
            }), e.fn.scrollParent = function(t) {
                var n = this.css("position"),
                    i = "absolute" === n,
                    o = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    r = this.parents().filter(function() {
                        var t = e(this);
                        return (!i || "static" !== t.css("position")) && o.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== n && r.length ? r : e(this[0].ownerDocument || document)
            }, e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), !1);
            e(document).on("mouseup", function() {
                i = !1
            });
            e.widget("ui.mouse", {
                version: "1.12.1",
                options: {
                    cancel: "input, textarea, button, select, option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function() {
                    var t = this;
                    this.element.on("mousedown." + this.widgetName, function(e) {
                        return t._mouseDown(e)
                    }).on("click." + this.widgetName, function(n) {
                        if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
                    }), this.started = !1
                },
                _mouseDestroy: function() {
                    this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
                },
                _mouseDown: function(t) {
                    if (!i) {
                        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                        var n = this,
                            o = 1 === t.which,
                            r = !("string" != typeof this.options.cancel || !t.target.nodeName) && e(t.target).closest(this.options.cancel).length;
                        return !(o && !r && this._mouseCapture(t)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                            n.mouseDelayMet = !0
                        }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                            return n._mouseMove(e)
                        }, this._mouseUpDelegate = function(e) {
                            return n._mouseUp(e)
                        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), i = !0, !0))
                    }
                },
                _mouseMove: function(t) {
                    if (this._mouseMoved) {
                        if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                        if (!t.which)
                            if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                            else if (!this.ignoreMissingWhich) return this._mouseUp(t)
                    }
                    return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
                },
                _mouseUp: function(t) {
                    this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0),
                        this._mouseStop(t)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, i = !1, t.preventDefault()
                },
                _mouseDistanceMet: function(e) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
                },
                _mouseDelayMet: function() {
                    return this.mouseDelayMet
                },
                _mouseStart: function() {},
                _mouseDrag: function() {},
                _mouseStop: function() {},
                _mouseCapture: function() {
                    return !0
                }
            }), e.widget("ui.sortable", e.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "sort",
                ready: !1,
                options: {
                    appendTo: "parent",
                    axis: !1,
                    connectWith: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    dropOnEmpty: !0,
                    forcePlaceholderSize: !1,
                    forceHelperSize: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    items: "> *",
                    opacity: !1,
                    placeholder: !1,
                    revert: !1,
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    scope: "default",
                    tolerance: "intersect",
                    zIndex: 1e3,
                    activate: null,
                    beforeStop: null,
                    change: null,
                    deactivate: null,
                    out: null,
                    over: null,
                    receive: null,
                    remove: null,
                    sort: null,
                    start: null,
                    stop: null,
                    update: null
                },
                _isOverAxis: function(e, t, n) {
                    return e >= t && e < t + n
                },
                _isFloating: function(e) {
                    return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
                },
                _create: function() {
                    this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
                },
                _setOption: function(e, t) {
                    this._super(e, t), "handle" === e && this._setHandleClassName()
                },
                _setHandleClassName: function() {
                    var t = this;
                    this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), e.each(this.items, function() {
                        t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
                    })
                },
                _destroy: function() {
                    this._mouseDestroy();
                    for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
                    return this
                },
                _mouseCapture: function(t, n) {
                    var i = null,
                        o = !1,
                        r = this;
                    return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(t), e(t.target).parents().each(function() {
                        if (e.data(this, r.widgetName + "-item") === r) return i = e(this), !1
                    }), e.data(t.target, r.widgetName + "-item") === r && (i = e(t.target)), !!i && (!(this.options.handle && !n && (e(this.options.handle, i).find("*").addBack().each(function() {
                        this === t.target && (o = !0)
                    }), !o)) && (this.currentItem = i, this._removeCurrentsFromItems(), !0))))
                },
                _mouseStart: function(t, n, i) {
                    var o, r, s = this.options;
                    if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                            top: this.offset.top - this.margins.top,
                            left: this.offset.left - this.margins.left
                        }, e.extend(this.offset, {
                            click: {
                                left: t.pageX - this.offset.left,
                                top: t.pageY - this.offset.top
                            },
                            parent: this._getParentOffset(),
                            relative: this._getRelativeOffset()
                        }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {
                            prev: this.currentItem.prev()[0],
                            parent: this.currentItem.parent()[0]
                        }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && "auto" !== s.cursor && (r = this.document.find("body"), this.storedCursor = r.css("cursor"), r.css("cursor", s.cursor), this.storedStylesheet = e("<style>*{ cursor: " + s.cursor + " !important; }</style>").appendTo(r)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i)
                        for (o = this.containers.length - 1; o >= 0; o--) this.containers[o]._trigger("activate", t, this._uiHash(this));
                    return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(t), !0
                },
                _mouseDrag: function(t) {
                    var n, i, o, r, s = this.options,
                        a = !1;
                    for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < s.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + s.scrollSpeed : t.pageY - this.overflowOffset.top < s.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - s.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < s.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + s.scrollSpeed : t.pageX - this.overflowOffset.left < s.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - s.scrollSpeed)) : (t.pageY - this.document.scrollTop() < s.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - s.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < s.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + s.scrollSpeed)), t.pageX - this.document.scrollLeft() < s.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - s.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < s.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + s.scrollSpeed))), !1 !== a && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), n = this.items.length - 1; n >= 0; n--)
                        if (i = this.items[n], o = i.item[0], (r = this._intersectsWithPointer(i)) && i.instance === this.currentContainer && !(o === this.currentItem[0] || this.placeholder[1 === r ? "next" : "prev"]()[0] === o || e.contains(this.placeholder[0], o) || "semi-dynamic" === this.options.type && e.contains(this.element[0], o))) {
                            if (this.direction = 1 === r ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
                            this._rearrange(t, i), this._trigger("change", t, this._uiHash());
                            break
                        }
                    return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
                },
                _mouseStop: function(t, n) {
                    if (t) {
                        if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                            var i = this,
                                o = this.placeholder.offset(),
                                r = this.options.axis,
                                s = {};
                            r && "x" !== r || (s.left = o.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), r && "y" !== r || (s.top = o.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(s, parseInt(this.options.revert, 10) || 500, function() {
                                i._clear(t)
                            })
                        } else this._clear(t, n);
                        return !1
                    }
                },
                cancel: function() {
                    if (this.dragging) {
                        this._mouseUp(new e.Event("mouseup", {
                            target: null
                        })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                        for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
                    }
                    return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                        helper: null,
                        dragging: !1,
                        reverting: !1,
                        _noFinalSort: null
                    }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
                },
                serialize: function(t) {
                    var n = this._getItemsAsjQuery(t && t.connected),
                        i = [];
                    return t = t || {}, e(n).each(function() {
                        var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                        n && i.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
                    }), !i.length && t.key && i.push(t.key + "="), i.join("&")
                },
                toArray: function(t) {
                    var n = this._getItemsAsjQuery(t && t.connected),
                        i = [];
                    return t = t || {}, n.each(function() {
                        i.push(e(t.item || this).attr(t.attribute || "id") || "")
                    }), i
                },
                _intersectsWith: function(e) {
                    var t = this.positionAbs.left,
                        n = t + this.helperProportions.width,
                        i = this.positionAbs.top,
                        o = i + this.helperProportions.height,
                        r = e.left,
                        s = r + e.width,
                        a = e.top,
                        l = a + e.height,
                        c = this.offset.click.top,
                        u = this.offset.click.left,
                        p = "x" === this.options.axis || i + c > a && i + c < l,
                        h = "y" === this.options.axis || t + u > r && t + u < s,
                        d = p && h;
                    return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? d : r < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < s && a < i + this.helperProportions.height / 2 && o - this.helperProportions.height / 2 < l
                },
                _intersectsWithPointer: function(e) {
                    var t, n, i = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                        o = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width);
                    return !(!i || !o) && (t = this._getDragVerticalDirection(), n = this._getDragHorizontalDirection(), this.floating ? "right" === n || "down" === t ? 2 : 1 : t && ("down" === t ? 2 : 1))
                },
                _intersectsWithSides: function(e) {
                    var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                        n = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                        i = this._getDragVerticalDirection(),
                        o = this._getDragHorizontalDirection();
                    return this.floating && o ? "right" === o && n || "left" === o && !n : i && ("down" === i && t || "up" === i && !t)
                },
                _getDragVerticalDirection: function() {
                    var e = this.positionAbs.top - this.lastPositionAbs.top;
                    return 0 !== e && (e > 0 ? "down" : "up")
                },
                _getDragHorizontalDirection: function() {
                    var e = this.positionAbs.left - this.lastPositionAbs.left;
                    return 0 !== e && (e > 0 ? "right" : "left")
                },
                refresh: function(e) {
                    return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this
                },
                _connectWith: function() {
                    var e = this.options;
                    return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
                },
                _getItemsAsjQuery: function(t) {
                    function n() {
                        a.push(this)
                    }
                    var i, o, r, s, a = [],
                        l = [],
                        c = this._connectWith();
                    if (c && t)
                        for (i = c.length - 1; i >= 0; i--)
                            for (r = e(c[i], this.document[0]), o = r.length - 1; o >= 0; o--)(s = e.data(r[o], this.widgetFullName)) && s !== this && !s.options.disabled && l.push([e.isFunction(s.options.items) ? s.options.items.call(s.element) : e(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s]);
                    for (l.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                            options: this.options,
                            item: this.currentItem
                        }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = l.length - 1; i >= 0; i--) l[i][0].each(n);
                    return e(a)
                },
                _removeCurrentsFromItems: function() {
                    var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                    this.items = e.grep(this.items, function(e) {
                        for (var n = 0; n < t.length; n++)
                            if (t[n] === e.item[0]) return !1;
                        return !0
                    })
                },
                _refreshItems: function(t) {
                    this.items = [], this.containers = [this];
                    var n, i, o, r, s, a, l, c, u = this.items,
                        p = [
                            [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                                item: this.currentItem
                            }) : e(this.options.items, this.element), this]
                        ],
                        h = this._connectWith();
                    if (h && this.ready)
                        for (n = h.length - 1; n >= 0; n--)
                            for (o = e(h[n], this.document[0]), i = o.length - 1; i >= 0; i--)(r = e.data(o[i], this.widgetFullName)) && r !== this && !r.options.disabled && (p.push([e.isFunction(r.options.items) ? r.options.items.call(r.element[0], t, {
                                item: this.currentItem
                            }) : e(r.options.items, r.element), r]), this.containers.push(r));
                    for (n = p.length - 1; n >= 0; n--)
                        for (s = p[n][1], a = p[n][0], i = 0, c = a.length; i < c; i++) l = e(a[i]), l.data(this.widgetName + "-item", s), u.push({
                            item: l,
                            instance: s,
                            width: 0,
                            height: 0,
                            left: 0,
                            top: 0
                        })
                },
                refreshPositions: function(t) {
                    this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                    var n, i, o, r;
                    for (n = this.items.length - 1; n >= 0; n--) i = this.items[n], i.instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (o = this.options.toleranceElement ? e(this.options.toleranceElement, i.item) : i.item, t || (i.width = o.outerWidth(), i.height = o.outerHeight()), r = o.offset(), i.left = r.left, i.top = r.top);
                    if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                    else
                        for (n = this.containers.length - 1; n >= 0; n--) r = this.containers[n].element.offset(), this.containers[n].containerCache.left = r.left, this.containers[n].containerCache.top = r.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
                    return this
                },
                _createPlaceholder: function(t) {
                    t = t || this;
                    var n, i = t.options;
                    i.placeholder && i.placeholder.constructor !== String || (n = i.placeholder, i.placeholder = {
                        element: function() {
                            var i = t.currentItem[0].nodeName.toLowerCase(),
                                o = e("<" + i + ">", t.document[0]);
                            return t._addClass(o, "ui-sortable-placeholder", n || t.currentItem[0].className)._removeClass(o, "ui-sortable-helper"), "tbody" === i ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), e("<tr>", t.document[0]).appendTo(o)) : "tr" === i ? t._createTrPlaceholder(t.currentItem, o) : "img" === i && o.attr("src", t.currentItem.attr("src")), n || o.css("visibility", "hidden"), o
                        },
                        update: function(e, o) {
                            n && !i.forcePlaceholderSize || (o.height() || o.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), o.width() || o.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                        }
                    }), t.placeholder = e(i.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), i.placeholder.update(t, t.placeholder)
                },
                _createTrPlaceholder: function(t, n) {
                    var i = this;
                    t.children().each(function() {
                        e("<td>&#160;</td>", i.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(n)
                    })
                },
                _contactContainers: function(t) {
                    var n, i, o, r, s, a, l, c, u, p, h = null,
                        d = null;
                    for (n = this.containers.length - 1; n >= 0; n--)
                        if (!e.contains(this.currentItem[0], this.containers[n].element[0]))
                            if (this._intersectsWith(this.containers[n].containerCache)) {
                                if (h && e.contains(this.containers[n].element[0], h.element[0])) continue;
                                h = this.containers[n], d = n
                            } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", t, this._uiHash(this)), this.containers[n].containerCache.over = 0);
                    if (h)
                        if (1 === this.containers.length) this.containers[d].containerCache.over || (this.containers[d]._trigger("over", t, this._uiHash(this)), this.containers[d].containerCache.over = 1);
                        else {
                            for (o = 1e4, r = null, u = h.floating || this._isFloating(this.currentItem), s = u ? "left" : "top", a = u ? "width" : "height", p = u ? "pageX" : "pageY", i = this.items.length - 1; i >= 0; i--) e.contains(this.containers[d].element[0], this.items[i].item[0]) && this.items[i].item[0] !== this.currentItem[0] && (l = this.items[i].item.offset()[s], c = !1, t[p] - l > this.items[i][a] / 2 && (c = !0), Math.abs(t[p] - l) < o && (o = Math.abs(t[p] - l), r = this.items[i], this.direction = c ? "up" : "down"));
                            if (!r && !this.options.dropOnEmpty) return;
                            if (this.currentContainer === this.containers[d]) return void(this.currentContainer.containerCache.over || (this.containers[d]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1));
                            r ? this._rearrange(t, r, null, !0) : this._rearrange(t, null, this.containers[d].element, !0), this._trigger("change", t, this._uiHash()), this.containers[d]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[d], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", t, this._uiHash(this)), this.containers[d].containerCache.over = 1
                        }
                },
                _createHelper: function(t) {
                    var n = this.options,
                        i = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === n.helper ? this.currentItem.clone() : this.currentItem;
                    return i.parents("body").length || e("parent" !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                        width: this.currentItem[0].style.width,
                        height: this.currentItem[0].style.height,
                        position: this.currentItem.css("position"),
                        top: this.currentItem.css("top"),
                        left: this.currentItem.css("left")
                    }), i[0].style.width && !n.forceHelperSize || i.width(this.currentItem.width()), i[0].style.height && !n.forceHelperSize || i.height(this.currentItem.height()), i
                },
                _adjustOffsetFromHelper: function(t) {
                    "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                        left: +t[0],
                        top: +t[1] || 0
                    }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
                },
                _getParentOffset: function() {
                    this.offsetParent = this.helper.offsetParent();
                    var t = this.offsetParent.offset();
                    return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                        top: 0,
                        left: 0
                    }), {
                        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                },
                _getRelativeOffset: function() {
                    if ("relative" === this.cssPosition) {
                        var e = this.currentItem.position();
                        return {
                            top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                            left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                        }
                    }
                    return {
                        top: 0,
                        left: 0
                    }
                },
                _cacheMargins: function() {
                    this.margins = {
                        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                    }
                },
                _cacheHelperProportions: function() {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    }
                },
                _setContainment: function() {
                    var t, n, i, o = this.options;
                    "parent" === o.containment && (o.containment = this.helper[0].parentNode), "document" !== o.containment && "window" !== o.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === o.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === o.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(o.containment) || (t = e(o.containment)[0], n = e(o.containment).offset(), i = "hidden" !== e(t).css("overflow"), this.containment = [n.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
                },
                _convertPositionTo: function(t, n) {
                    n || (n = this.position);
                    var i = "absolute" === t ? 1 : -1,
                        o = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                        r = /(html|body)/i.test(o[0].tagName);
                    return {
                        top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : o.scrollTop()) * i,
                        left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : o.scrollLeft()) * i
                    }
                },
                _generatePosition: function(t) {
                    var n, i, o = this.options,
                        r = t.pageX,
                        s = t.pageY,
                        a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                        l = /(html|body)/i.test(a[0].tagName);
                    return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (r = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (r = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)), o.grid && (n = this.originalPageY + Math.round((s - this.originalPageY) / o.grid[1]) * o.grid[1], s = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - o.grid[1] : n + o.grid[1] : n, i = this.originalPageX + Math.round((r - this.originalPageX) / o.grid[0]) * o.grid[0], r = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - o.grid[0] : i + o.grid[0] : i)), {
                        top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                        left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
                    }
                },
                _rearrange: function(e, t, n, i) {
                    n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                    var o = this.counter;
                    this._delay(function() {
                        o === this.counter && this.refreshPositions(!i)
                    })
                },
                _clear: function(e, t) {
                    function n(e, t, n) {
                        return function(i) {
                            n._trigger(e, i, t._uiHash(t))
                        }
                    }
                    this.reverting = !1;
                    var i, o = [];
                    if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                        for (i in this._storedCSS) "auto" !== this._storedCSS[i] && "static" !== this._storedCSS[i] || (this._storedCSS[i] = "");
                        this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
                    } else this.currentItem.show();
                    for (this.fromOutside && !t && o.push(function(e) {
                            this._trigger("receive", e, this._uiHash(this.fromOutside))
                        }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || o.push(function(e) {
                            this._trigger("update", e, this._uiHash())
                        }), this !== this.currentContainer && (t || (o.push(function(e) {
                            this._trigger("remove", e, this._uiHash())
                        }), o.push(function(e) {
                            return function(t) {
                                e._trigger("receive", t, this._uiHash(this))
                            }
                        }.call(this, this.currentContainer)), o.push(function(e) {
                            return function(t) {
                                e._trigger("update", t, this._uiHash(this))
                            }
                        }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) t || o.push(n("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (o.push(n("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
                    if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
                        for (i = 0; i < o.length; i++) o[i].call(this, e);
                        this._trigger("stop", e, this._uiHash())
                    }
                    return this.fromOutside = !1, !this.cancelHelperRemoval
                },
                _trigger: function() {
                    !1 === e.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
                },
                _uiHash: function(t) {
                    var n = t || this;
                    return {
                        helper: n.helper,
                        placeholder: n.placeholder || e([]),
                        position: n.position,
                        originalPosition: n.originalPosition,
                        offset: n.positionAbs,
                        item: n.currentItem,
                        sender: t ? t.element : null
                    }
                }
            })
        }(jQuery)
    }(), define("third_party/jquery-ui", function() {}),
    function(e) {
        ! function(e) {
            function t(e) {
                var t = window.pageXOffset,
                    n = window.pageYOffset,
                    i = e.clientX,
                    o = e.clientY;
                return 0 === e.pageY && Math.floor(o) > Math.floor(e.pageY) || 0 === e.pageX && Math.floor(i) > Math.floor(e.pageX) ? (i -= t, o -= n) : (o < e.pageY - n || i < e.pageX - t) && (i = e.pageX - t, o = e.pageY - n), {
                    clientX: i,
                    clientY: o
                }
            }

            function n(n, o) {
                if (!(!i && n.originalEvent.touches.length > 1 || i && !n.isPrimary)) {
                    var r = i ? n.originalEvent : n.originalEvent.changedTouches[0],
                        s = document.createEvent("MouseEvents"),
                        a = t(r);
                    e(r.target).is("input") || e(r.target).is("textarea") ? n.stopPropagation() : n.preventDefault(), s.initMouseEvent(o, !0, !0, window, 1, n.screenX || r.screenX, n.screenY || r.screenY, n.clientX || a.clientX, n.clientY || a.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(s)
                }
            }
            var i = window.navigator.pointerEnabled || window.navigator.msPointerEnabled;
            if (e.support.touch = "ontouchend" in document || i, e.support.touch && e.ui.mouse) {
                var o, r = e.ui.mouse.prototype,
                    s = r._mouseInit;
                r._touchStart = function(e) {
                    var t = this;
                    o || !i && !t._mouseCapture(e.originalEvent.changedTouches[0]) || (o = !0, t._touchMoved = !1, n(e, "mouseover"), n(e, "mousemove"), n(e, "mousedown"))
                }, r._touchMove = function(e) {
                    o && (this._touchMoved = !0, n(e, "mousemove"))
                }, r._touchEnd = function(e) {
                    o && (n(e, "mouseup"), n(e, "mouseout"), this._touchMoved || n(e, "click"), o = !1)
                }, r._mouseInit = function() {
                    var t = this;
                    t.element.on({
                        taphold: e.proxy(t, "_touchStart"),
                        touchmove: e.proxy(t, "_touchMove"),
                        touchend: e.proxy(t, "_touchEnd"),
                        pointerDown: e.proxy(t, "_touchStart"),
                        pointerMove: e.proxy(t, "_touchMove"),
                        pointerUp: e.proxy(t, "_touchEnd"),
                        MSPointerDown: e.proxy(t, "_touchStart"),
                        MSPointerMove: e.proxy(t, "_touchMove"),
                        MSPointerUp: e.proxy(t, "_touchEnd")
                    }), s.call(t)
                }
            }
        }(jQuery)
    }(), define("third_party/jquery.ui.touch-punch", function() {});