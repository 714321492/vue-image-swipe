!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("VueImageSwipe", [], t) : "object" == typeof exports ? exports.VueImageSwipe = t() : e.VueImageSwipe = t()
}(window, function () {
  return function (e) {
    var t = {};

    function n(o) {
      if (t[o])return t[o].exports;
      var i = t[o] = {i: o, l: !1, exports: {}};
      return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    return n.m = e, n.c = t, n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t)return e;
      if (4 & t && "object" == typeof e && e && e.__esModule)return e;
      var o = Object.create(null);
      if (n.r(o), Object.defineProperty(o, "default", {
          enumerable: !0,
          value: e
        }), 2 & t && "string" != typeof e)for (var i in e)n.d(o, i, function (t) {
        return e[t]
      }.bind(null, i));
      return o
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return n.d(t, "a", t), t
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 13)
  }([function (e, t, n) {
    var o = n(11);
    "string" == typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
    (0, n(1).default)("f8f3f614", o, !1, {})
  }, function (e, t, n) {
    "use strict";
    function o(e, t) {
      for (var n = [], o = {}, i = 0; i < t.length; i++) {
        var r = t[i], a = r[0], l = {id: e + ":" + i, css: r[1], media: r[2], sourceMap: r[3]};
        o[a] ? o[a].parts.push(l) : n.push(o[a] = {id: a, parts: [l]})
      }
      return n
    }

    n.r(t), n.d(t, "default", function () {
      return m
    });
    var i = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var r = {}, a = i && (document.head || document.getElementsByTagName("head")[0]), l = null, s = 0, u = !1,
      c = function () {
      }, d = null, p = "data-vue-ssr-id",
      f = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

    function m(e, t, n, i) {
      u = n, d = i || {};
      var a = o(e, t);
      return h(a), function (t) {
        for (var n = [], i = 0; i < a.length; i++) {
          var l = a[i];
          (s = r[l.id]).refs--, n.push(s)
        }
        t ? h(a = o(e, t)) : a = [];
        for (i = 0; i < n.length; i++) {
          var s;
          if (0 === (s = n[i]).refs) {
            for (var u = 0; u < s.parts.length; u++)s.parts[u]();
            delete r[s.id]
          }
        }
      }
    }

    function h(e) {
      for (var t = 0; t < e.length; t++) {
        var n = e[t], o = r[n.id];
        if (o) {
          o.refs++;
          for (var i = 0; i < o.parts.length; i++)o.parts[i](n.parts[i]);
          for (; i < n.parts.length; i++)o.parts.push(g(n.parts[i]));
          o.parts.length > n.parts.length && (o.parts.length = n.parts.length)
        } else {
          var a = [];
          for (i = 0; i < n.parts.length; i++)a.push(g(n.parts[i]));
          r[n.id] = {id: n.id, refs: 1, parts: a}
        }
      }
    }

    function v() {
      var e = document.createElement("style");
      return e.type = "text/css", a.appendChild(e), e
    }

    function g(e) {
      var t, n, o = document.querySelector("style[" + p + '~="' + e.id + '"]');
      if (o) {
        if (u)return c;
        o.parentNode.removeChild(o)
      }
      if (f) {
        var i = s++;
        o = l || (l = v()), t = w.bind(null, o, i, !1), n = w.bind(null, o, i, !0)
      } else o = v(), t = function (e, t) {
        var n = t.css, o = t.media, i = t.sourceMap;
        o && e.setAttribute("media", o);
        d.ssrId && e.setAttribute(p, t.id);
        i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        if (e.styleSheet) e.styleSheet.cssText = n; else {
          for (; e.firstChild;)e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n))
        }
      }.bind(null, o), n = function () {
        o.parentNode.removeChild(o)
      };
      return t(e), function (o) {
        if (o) {
          if (o.css === e.css && o.media === e.media && o.sourceMap === e.sourceMap)return;
          t(e = o)
        } else n()
      }
    }

    var y = function () {
      var e = [];
      return function (t, n) {
        return e[t] = n, e.filter(Boolean).join("\n")
      }
    }();

    function w(e, t, n, o) {
      var i = n ? "" : o.css;
      if (e.styleSheet) e.styleSheet.cssText = y(t, i); else {
        var r = document.createTextNode(i), a = e.childNodes;
        a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
      }
    }
  }, function (e, t, n) {
    var o, i;
    /*! PhotoSwipe - v4.1.2 - 2017-04-05
     * http://photoswipe.com
     * Copyright (c) 2017 Dmitry Semenov; */
    void 0 === (i = "function" == typeof(o = function () {
      "use strict";
      return function (e, t, n, o) {
        var i = {
          features: null, bind: function (e, t, n, o) {
            var i = (o ? "remove" : "add") + "EventListener";
            t = t.split(" ");
            for (var r = 0; r < t.length; r++)t[r] && e[i](t[r], n, !1)
          }, isArray: function (e) {
            return e instanceof Array
          }, createEl: function (e, t) {
            var n = document.createElement(t || "div");
            return e && (n.className = e), n
          }, getScrollY: function () {
            var e = window.pageYOffset;
            return void 0 !== e ? e : document.documentElement.scrollTop
          }, unbind: function (e, t, n) {
            i.bind(e, t, n, !0)
          }, removeClass: function (e, t) {
            var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
            e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
          }, addClass: function (e, t) {
            i.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
          }, hasClass: function (e, t) {
            return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
          }, getChildByClass: function (e, t) {
            for (var n = e.firstChild; n;) {
              if (i.hasClass(n, t))return n;
              n = n.nextSibling
            }
          }, arraySearch: function (e, t, n) {
            for (var o = e.length; o--;)if (e[o][n] === t)return o;
            return -1
          }, extend: function (e, t, n) {
            for (var o in t)if (t.hasOwnProperty(o)) {
              if (n && e.hasOwnProperty(o))continue;
              e[o] = t[o]
            }
          }, easing: {
            sine: {
              out: function (e) {
                return Math.sin(e * (Math.PI / 2))
              }, inOut: function (e) {
                return -(Math.cos(Math.PI * e) - 1) / 2
              }
            }, cubic: {
              out: function (e) {
                return --e * e * e + 1
              }
            }
          }, detectFeatures: function () {
            if (i.features)return i.features;
            var e = i.createEl(), t = e.style, n = "", o = {};
            if (o.oldIE = document.all && !document.addEventListener, o.touch = "ontouchstart" in window, window.requestAnimationFrame && (o.raf = window.requestAnimationFrame, o.caf = window.cancelAnimationFrame), o.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !o.pointerEvent) {
              var r = navigator.userAgent;
              if (/iP(hone|od)/.test(navigator.platform)) {
                var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                a && a.length > 0 && (a = parseInt(a[1], 10)) >= 1 && a < 8 && (o.isOldIOSPhone = !0)
              }
              var l = r.match(/Android\s([0-9\.]*)/), s = l ? l[1] : 0;
              (s = parseFloat(s)) >= 1 && (s < 4.4 && (o.isOldAndroid = !0), o.androidVersion = s), o.isMobileOpera = /opera mini|opera mobi/i.test(r)
            }
            for (var u, c, d = ["transform", "perspective", "animationName"], p = ["", "webkit", "Moz", "ms", "O"],
                   f = 0; f < 4; f++) {
              n = p[f];
              for (var m = 0; m < 3; m++)u = d[m], c = n + (n ? u.charAt(0).toUpperCase() + u.slice(1) : u), !o[u] && c in t && (o[u] = c);
              n && !o.raf && (n = n.toLowerCase(), o.raf = window[n + "RequestAnimationFrame"], o.raf && (o.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
            }
            if (!o.raf) {
              var h = 0;
              o.raf = function (e) {
                var t = (new Date).getTime(), n = Math.max(0, 16 - (t - h)), o = window.setTimeout(function () {
                  e(t + n)
                }, n);
                return h = t + n, o
              }, o.caf = function (e) {
                clearTimeout(e)
              }
            }
            return o.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, i.features = o, o
          }
        };
        i.detectFeatures(), i.features.oldIE && (i.bind = function (e, t, n, o) {
          t = t.split(" ");
          for (var i, r = (o ? "detach" : "attach") + "Event", a = function () {
            n.handleEvent.call(n)
          }, l = 0; l < t.length; l++)if (i = t[l])if ("object" == typeof n && n.handleEvent) {
            if (o) {
              if (!n["oldIE" + i])return !1
            } else n["oldIE" + i] = a;
            e[r]("on" + i, n["oldIE" + i])
          } else e[r]("on" + i, n)
        });
        var r = this, a = {
          allowPanToNext: !0,
          spacing: .12,
          bgOpacity: 1,
          mouseUsed: !1,
          loop: !0,
          pinchToClose: !0,
          closeOnScroll: !0,
          closeOnVerticalDrag: !0,
          verticalDragRange: .75,
          hideAnimationDuration: 333,
          showAnimationDuration: 333,
          showHideOpacity: !1,
          focus: !0,
          escKey: !0,
          arrowKeys: !0,
          mainScrollEndFriction: .35,
          panEndFriction: .35,
          isClickableElement: function (e) {
            return "A" === e.tagName
          },
          getDoubleTapZoom: function (e, t) {
            return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
          },
          maxSpreadZoom: 1.33,
          modal: !0,
          scaleMode: "fit"
        };
        i.extend(a, o);
        var l, s, u, c, d, p, f, m, h, v, g, y, w, x, b, _, C, I, T, E, S, O, D, M, A, k, F, R, P, L, Z, z, N, U, K, B,
          W, H, G, j, $, Y, V, q, X, J, Q, ee, te, ne, oe, ie, re, ae, le, se, ue = {x: 0, y: 0}, ce = {x: 0, y: 0},
          de = {x: 0, y: 0}, pe = {}, fe = 0, me = {}, he = {x: 0, y: 0}, ve = 0, ge = !0, ye = [], we = {}, xe = !1,
          be = function (e, t) {
            i.extend(r, t.publicMethods), ye.push(e)
          }, _e = function (e) {
            var t = Kt();
            return e > t - 1 ? e - t : e < 0 ? t + e : e
          }, Ce = {}, Ie = function (e, t) {
            return Ce[e] || (Ce[e] = []), Ce[e].push(t)
          }, Te = function (e) {
            var t = Ce[e];
            if (t) {
              var n = Array.prototype.slice.call(arguments);
              n.shift();
              for (var o = 0; o < t.length; o++)t[o].apply(r, n)
            }
          }, Ee = function () {
            return (new Date).getTime()
          }, Se = function (e) {
            ae = e, r.bg.style.opacity = e * a.bgOpacity
          }, Oe = function (e, t, n, o, i) {
            // window.$('.swipe-image-div').html(e, t, n, o, i);
            (!xe || i && i !== r.currItem) && (o /= i ? i.fitRatio : r.currItem.fitRatio), e[O] = y + t + "px, " + n + "px" + w + " scale(" + o + ")"
          }, De = function (e) {
            te && (e && (v > r.currItem.fitRatio ? xe || (qt(r.currItem, !1, !0), xe = !0) : xe && (qt(r.currItem), xe = !1)), Oe(te, de.x, de.y, v))
          }, Me = function (e) {
            e.container && Oe(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
          }, Ae = function (e, t) {
            t[O] = y + e + "px, 0px" + w
          }, ke = function (e, t) {
            if (!a.loop && t) {
              var n = c + (he.x * fe - e) / he.x, o = Math.round(e - ct.x);
              (n < 0 && o > 0 || n >= Kt() - 1 && o < 0) && (e = ct.x + o * a.mainScrollEndFriction)
            }
            ct.x = e, Ae(e, d)
          }, Fe = function (e, t) {
            var n = dt[e] - me[e];
            return ce[e] + ue[e] + n - n * (t / g)
          }, Re = function (e, t) {
            e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
          }, Pe = function (e) {
            e.x = Math.round(e.x), e.y = Math.round(e.y)
          }, Le = null, Ze = function () {
            Le && (i.unbind(document, "mousemove", Ze), i.addClass(e, "pswp--has_mouse"), a.mouseUsed = !0, Te("mouseUsed")), Le = setTimeout(function () {
              Le = null
            }, 100)
          }, ze = function (e, t) {
            var n = jt(r.currItem, pe, e);
            return t && (ee = n), n
          }, Ne = function (e) {
            return e || (e = r.currItem), e.initialZoomLevel
          }, Ue = function (e) {
            return e || (e = r.currItem), e.w > 0 ? a.maxSpreadZoom : 1
          }, Ke = function (e, t, n, o) {
            return o === r.currItem.initialZoomLevel ? (n[e] = r.currItem.initialPosition[e], !0) : (n[e] = Fe(e, o), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
          }, Be = function (e) {
            var t = "";
            a.escKey && 27 === e.keyCode ? t = "close" : a.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, r[t]()))
          }, We = function (e) {
            e && (Y || $ || ne || W) && (e.preventDefault(), e.stopPropagation())
          }, He = function () {
            r.setScrollOffset(0, i.getScrollY())
          }, Ge = {}, je = 0, $e = function (e) {
            Ge[e] && (Ge[e].raf && k(Ge[e].raf), je--, delete Ge[e])
          }, Ye = function (e) {
            Ge[e] && $e(e), Ge[e] || (je++, Ge[e] = {})
          }, Ve = function () {
            for (var e in Ge)Ge.hasOwnProperty(e) && $e(e)
          }, qe = function (e, t, n, o, i, r, a) {
            var l, s = Ee();
            Ye(e);
            var u = function () {
              if (Ge[e]) {
                if ((l = Ee() - s) >= o)return $e(e), r(n), void(a && a());
                r((n - t) * i(l / o) + t), Ge[e].raf = A(u)
              }
            };
            u()
          }, Xe = {
            shout: Te, listen: Ie, viewportSize: pe, options: a, isMainScrollAnimating: function () {
              return ne
            }, getZoomLevel: function () {
              return v
            }, getCurrentIndex: function () {
              return c
            }, isDragging: function () {
              return G
            }, isZooming: function () {
              return J
            }, setScrollOffset: function (e, t) {
              me.x = e, L = me.y = t, Te("updateScrollOffset", me)
            }, applyZoomPan: function (e, t, n, o) {
              de.x = t, de.y = n, v = e, De(o)
            }, init: function () {
              if (!l && !s) {
                var n;
                r.framework = i, r.template = e, r.bg = i.getChildByClass(e, "pswp__bg"), F = e.className, l = !0, Z = i.detectFeatures(), A = Z.raf, k = Z.caf, O = Z.transform, P = Z.oldIE, r.scrollWrap = i.getChildByClass(e, "pswp__scroll-wrap"), r.container = i.getChildByClass(r.scrollWrap, "pswp__container"), d = r.container.style, r.itemHolders = _ = [{
                  el: r.container.children[0],
                  wrap: 0,
                  index: -1
                }, {el: r.container.children[1], wrap: 0, index: -1}, {
                  el: r.container.children[2],
                  wrap: 0,
                  index: -1
                }], _[0].el.style.display = _[2].el.style.display = "none", function () {
                  if (O) {
                    var t = Z.perspective && !M;
                    return y = "translate" + (t ? "3d(" : "("), void(w = Z.perspective ? ", 0px)" : ")")
                  }
                  O = "left", i.addClass(e, "pswp--ie"), Ae = function (e, t) {
                    t.left = e + "px"
                  }, Me = function (e) {
                    var t = e.fitRatio > 1 ? 1 : e.fitRatio, n = e.container.style, o = t * e.w, i = t * e.h;
                    n.width = o + "px", n.height = i + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
                  }, De = function () {
                    if (te) {
                      var e = te, t = r.currItem, n = t.fitRatio > 1 ? 1 : t.fitRatio, o = n * t.w, i = n * t.h;
                      e.width = o + "px", e.height = i + "px", e.left = de.x + "px", e.top = de.y + "px"
                    }
                  }
                }(), h = {
                  resize: r.updateSize, orientationchange: function () {
                    clearTimeout(z), z = setTimeout(function () {
                      pe.x !== r.scrollWrap.clientWidth && r.updateSize()
                    }, 500)
                  }, scroll: He, keydown: Be, click: We
                };
                var o = Z.isOldIOSPhone || Z.isOldAndroid || Z.isMobileOpera;
                for (Z.animationName && Z.transform && !o || (a.showAnimationDuration = a.hideAnimationDuration = 0), n = 0; n < ye.length; n++)r["init" + ye[n]]();
                if (t) {
                  var u = r.ui = new t(r, i);
                  u.init()
                }
                Te("firstUpdate"), c = c || a.index || 0, (isNaN(c) || c < 0 || c >= Kt()) && (c = 0), r.currItem = Ut(c), (Z.isOldIOSPhone || Z.isOldAndroid) && (ge = !1), e.setAttribute("aria-hidden", "false"), a.modal && (ge ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = i.getScrollY() + "px")), void 0 === L && (Te("initialLayout"), L = R = i.getScrollY());
                var f = "pswp--open ";
                for (a.mainClass && (f += a.mainClass + " "), a.showHideOpacity && (f += "pswp--animate_opacity "), f += M ? "pswp--touch" : "pswp--notouch", f += Z.animationName ? " pswp--css_animation" : "", f += Z.svg ? " pswp--svg" : "", i.addClass(e, f), r.updateSize(), p = -1, ve = null, n = 0; n < 3; n++)Ae((n + p) * he.x, _[n].el.style);
                P || i.bind(r.scrollWrap, m, r), Ie("initialZoomInEnd", function () {
                  r.setContent(_[0], c - 1), r.setContent(_[2], c + 1), _[0].el.style.display = _[2].el.style.display = "block", a.focus && e.focus(), i.bind(document, "keydown", r), Z.transform && i.bind(r.scrollWrap, "click", r), a.mouseUsed || i.bind(document, "mousemove", Ze), i.bind(window, "resize scroll orientationchange", r), Te("bindEvents")
                }), r.setContent(_[1], c), r.updateCurrItem(), Te("afterInit"), ge || (x = setInterval(function () {
                  je || G || J || v !== r.currItem.initialZoomLevel || r.updateSize()
                }, 1e3)), i.addClass(e, "pswp--visible")
              }
            }, close: function () {
              l && (l = !1, s = !0, Te("close"), i.unbind(window, "resize scroll orientationchange", r), i.unbind(window, "scroll", h.scroll), i.unbind(document, "keydown", r), i.unbind(document, "mousemove", Ze), Z.transform && i.unbind(r.scrollWrap, "click", r), G && i.unbind(window, f, r), clearTimeout(z), Te("unbindEvents"), Bt(r.currItem, null, !0, r.destroy))
            }, destroy: function () {
              Te("destroy"), Lt && clearTimeout(Lt), e.setAttribute("aria-hidden", "true"), e.className = F, x && clearInterval(x), i.unbind(r.scrollWrap, m, r), i.unbind(window, "scroll", r), mt(), Ve(), Ce = null
            }, panTo: function (e, t, n) {
              n || (e > ee.min.x ? e = ee.min.x : e < ee.max.x && (e = ee.max.x), t > ee.min.y ? t = ee.min.y : t < ee.max.y && (t = ee.max.y)), de.x = e, de.y = t, De()
            }, handleEvent: function (e) {
              e = e || window.event, h[e.type] && h[e.type](e)
            }, goTo: function (e) {
              var t = (e = _e(e)) - c;
              ve = t, c = e, r.currItem = Ut(c), fe -= t, ke(he.x * fe), Ve(), ne = !1, r.updateCurrItem()
            }, next: function () {
              r.goTo(c + 1)
            }, prev: function () {
              r.goTo(c - 1)
            }, updateCurrZoomItem: function (e) {
              if (e && Te("beforeChange", 0), _[1].el.children.length) {
                var t = _[1].el.children[0];
                te = i.hasClass(t, "pswp__zoom-wrap") ? t.style : null
              } else te = null;
              ee = r.currItem.bounds, g = v = r.currItem.initialZoomLevel, de.x = ee.center.x, de.y = ee.center.y, e && Te("afterChange")
            }, invalidateCurrItems: function () {
              b = !0;
              for (var e = 0; e < 3; e++)_[e].item && (_[e].item.needsUpdate = !0)
            }, updateCurrItem: function (e) {
              if (0 !== ve) {
                var t, n = Math.abs(ve);
                if (!(e && n < 2)) {
                  r.currItem = Ut(c), xe = !1, Te("beforeChange", ve), n >= 3 && (p += ve + (ve > 0 ? -3 : 3), n = 3);
                  for (var o = 0; o < n; o++)ve > 0 ? (t = _.shift(), _[2] = t, Ae((++p + 2) * he.x, t.el.style), r.setContent(t, c - n + o + 1 + 1)) : (t = _.pop(), _.unshift(t), Ae(--p * he.x, t.el.style), r.setContent(t, c + n - o - 1 - 1));
                  if (te && 1 === Math.abs(ve)) {
                    var i = Ut(C);
                    i.initialZoomLevel !== v && (jt(i, pe), qt(i), Me(i))
                  }
                  ve = 0, r.updateCurrZoomItem(), C = c, Te("afterChange")
                }
              }
            }, updateSize: function (t) {
              if (!ge && a.modal) {
                var n = i.getScrollY();
                if (L !== n && (e.style.top = n + "px", L = n), !t && we.x === window.innerWidth && we.y === window.innerHeight)return;
                we.x = window.innerWidth, we.y = window.innerHeight, e.style.height = we.y + "px"
              }
              if (pe.x = r.scrollWrap.clientWidth, pe.y = r.scrollWrap.clientHeight, He(), he.x = pe.x + Math.round(pe.x * a.spacing), he.y = pe.y, ke(he.x * fe), Te("beforeResize"), void 0 !== p) {
                for (var o, l, s,
                       u = 0; u < 3; u++)o = _[u], Ae((u + p) * he.x, o.el.style), s = c + u - 1, a.loop && Kt() > 2 && (s = _e(s)), (l = Ut(s)) && (b || l.needsUpdate || !l.bounds) ? (r.cleanSlide(l), r.setContent(o, s), 1 === u && (r.currItem = l, r.updateCurrZoomItem(!0)), l.needsUpdate = !1) : -1 === o.index && s >= 0 && r.setContent(o, s), l && l.container && (jt(l, pe), qt(l), Me(l));
                b = !1
              }
              g = v = r.currItem.initialZoomLevel, (ee = r.currItem.bounds) && (de.x = ee.center.x, de.y = ee.center.y, De(!0)), Te("resize")
            }, zoomTo: function (e, t, n, o, r) {
              t && (g = v, dt.x = Math.abs(t.x) - de.x, dt.y = Math.abs(t.y) - de.y, Re(ce, de));
              var a = ze(e, !1), l = {};
              Ke("x", a, l, e), Ke("y", a, l, e);
              var s = v, u = {x: de.x, y: de.y};
              Pe(l);
              var c = function (t) {
                1 === t ? (v = e, de.x = l.x, de.y = l.y) : (v = (e - s) * t + s, de.x = (l.x - u.x) * t + u.x, de.y = (l.y - u.y) * t + u.y), r && r(t), De(1 === t)
              };
              n ? qe("customZoomTo", 0, 1, n, o || i.easing.sine.inOut, c) : c(1)
            }
          }, Je = {}, Qe = {}, et = {}, tt = {}, nt = {}, ot = [], it = {}, rt = [], at = {}, lt = 0, st = {x: 0, y: 0},
          ut = 0, ct = {x: 0, y: 0}, dt = {x: 0, y: 0}, pt = {x: 0, y: 0}, ft = function (e, t) {
            return at.x = Math.abs(e.x - t.x), at.y = Math.abs(e.y - t.y), Math.sqrt(at.x * at.x + at.y * at.y)
          }, mt = function () {
            V && (k(V), V = null)
          }, ht = function () {
            G && (V = A(ht), Dt())
          }, vt = function (e, t) {
            return !(!e || e === document) && !(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : vt(e.parentNode, t))
          }, gt = {}, yt = function (e, t) {
            return gt.prevent = !vt(e.target, a.isClickableElement), Te("preventDragEvent", e, t, gt), gt.prevent
          }, wt = function (e, t) {
            return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
          }, xt = function (e, t, n) {
            n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
          }, bt = function () {
            var e = de.y - r.currItem.initialPosition.y;
            return 1 - Math.abs(e / (pe.y / 2))
          }, _t = {}, Ct = {}, It = [], Tt = function (e) {
            for (; It.length > 0;)It.pop();
            return D ? (se = 0, ot.forEach(function (e) {
              0 === se ? It[0] = e : 1 === se && (It[1] = e), se++
            })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (It[0] = wt(e.touches[0], _t), e.touches.length > 1 && (It[1] = wt(e.touches[1], Ct))) : (_t.x = e.pageX, _t.y = e.pageY, _t.id = "", It[0] = _t), It
          }, Et = function (e, t) {
            var n, o, i, l, s = de[e] + t[e], u = t[e] > 0, c = ct.x + t.x, d = ct.x - it.x;
            if (n = s > ee.min[e] || s < ee.max[e] ? a.panEndFriction : 1, s = de[e] + t[e] * n, (a.allowPanToNext || v === r.currItem.initialZoomLevel) && (te ? "h" !== oe || "x" !== e || $ || (u ? (s > ee.min[e] && (n = a.panEndFriction, ee.min[e], o = ee.min[e] - ce[e]), (o <= 0 || d < 0) && Kt() > 1 ? (l = c, d < 0 && c > it.x && (l = it.x)) : ee.min.x !== ee.max.x && (i = s)) : (s < ee.max[e] && (n = a.panEndFriction, ee.max[e], o = ce[e] - ee.max[e]), (o <= 0 || d > 0) && Kt() > 1 ? (l = c, d > 0 && c < it.x && (l = it.x)) : ee.min.x !== ee.max.x && (i = s))) : l = c, "x" === e))return void 0 !== l && (ke(l, !0), q = l !== it.x), ee.min.x !== ee.max.x && (void 0 !== i ? de.x = i : q || (de.x += t.x * n)), void 0 !== l;
            ne || q || v > r.currItem.fitRatio && (de[e] += t[e] * n)
          }, St = function (e) {
            if (!("mousedown" === e.type && e.button > 0))if (Nt) e.preventDefault(); else if (!H || "mousedown" !== e.type) {
              if (yt(e, !0) && e.preventDefault(), Te("pointerDown"), D) {
                var t = i.arraySearch(ot, e.pointerId, "id");
                t < 0 && (t = ot.length), ot[t] = {x: e.pageX, y: e.pageY, id: e.pointerId}
              }
              var n = Tt(e), o = n.length;
              X = null, Ve(), G && 1 !== o || (G = ie = !0, i.bind(window, f, r), B = le = re = W = q = Y = j = $ = !1, oe = null, Te("firstTouchStart", n), Re(ce, de), ue.x = ue.y = 0, Re(tt, n[0]), Re(nt, tt), it.x = he.x * fe, rt = [{
                x: tt.x,
                y: tt.y
              }], U = N = Ee(), ze(v, !0), mt(), ht()), !J && o > 1 && !ne && !q && (g = v, $ = !1, J = j = !0, ue.y = ue.x = 0, Re(ce, de), Re(Je, n[0]), Re(Qe, n[1]), xt(Je, Qe, pt), dt.x = Math.abs(pt.x) - de.x, dt.y = Math.abs(pt.y) - de.y, Q = ft(Je, Qe))
            }
          }, Ot = function (e) {
            if (e.preventDefault(), D) {
              var t = i.arraySearch(ot, e.pointerId, "id");
              if (t > -1) {
                var n = ot[t];
                n.x = e.pageX, n.y = e.pageY
              }
            }
            if (G) {
              var o = Tt(e);
              if (oe || Y || J) X = o; else if (ct.x !== he.x * fe) oe = "h"; else {
                var r = Math.abs(o[0].x - tt.x) - Math.abs(o[0].y - tt.y);
                Math.abs(r) >= 10 && (oe = r > 0 ? "h" : "v", X = o)
              }
            }
          }, Dt = function () {
            if (X) {
              var e = X.length;
              if (0 !== e)if (Re(Je, X[0]), et.x = Je.x - tt.x, et.y = Je.y - tt.y, J && e > 1) {
                if (tt.x = Je.x, tt.y = Je.y, !et.x && !et.y && function (e, t) {
                    return e.x === t.x && e.y === t.y
                  }(X[1], Qe))return;
                Re(Qe, X[1]), $ || ($ = !0, Te("zoomGestureStarted"));
                var t = ft(Je, Qe), n = Rt(t);
                n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (le = !0);
                var o = 1, i = Ne(), l = Ue();
                if (n < i)if (a.pinchToClose && !le && g <= r.currItem.initialZoomLevel) {
                  var s = i - n, u = 1 - s / (i / 1.2);
                  Se(u), Te("onPinchClose", u), re = !0
                } else(o = (i - n) / i) > 1 && (o = 1), n = i - o * (i / 3); else n > l && ((o = (n - l) / (6 * i)) > 1 && (o = 1), n = l + o * i);
                o < 0 && (o = 0), xt(Je, Qe, st), ue.x += st.x - pt.x, ue.y += st.y - pt.y, Re(pt, st), de.x = Fe("x", n), de.y = Fe("y", n), B = n > v, v = n, De()
              } else {
                if (!oe)return;
                if (ie && (ie = !1, Math.abs(et.x) >= 10 && (et.x -= X[0].x - nt.x), Math.abs(et.y) >= 10 && (et.y -= X[0].y - nt.y)), tt.x = Je.x, tt.y = Je.y, 0 === et.x && 0 === et.y)return;
                if ("v" === oe && a.closeOnVerticalDrag && "fit" === a.scaleMode && v === r.currItem.initialZoomLevel) {
                  ue.y += et.y, de.y += et.y;
                  var c = bt();
                  return W = !0, Te("onVerticalDrag", c), Se(c), void De()
                }
                !function (e, t, n) {
                  if (e - U > 50) {
                    var o = rt.length > 2 ? rt.shift() : {};
                    o.x = t, o.y = n, rt.push(o), U = e
                  }
                }(Ee(), Je.x, Je.y), Y = !0, ee = r.currItem.bounds;
                var d = Et("x", et);
                d || (Et("y", et), Pe(de), De())
              }
            }
          }, Mt = function (e) {
            if (Z.isOldAndroid) {
              if (H && "mouseup" === e.type)return;
              e.type.indexOf("touch") > -1 && (clearTimeout(H), H = setTimeout(function () {
                H = 0
              }, 600))
            }
            var t;
            if (Te("pointerUp"), yt(e, !1) && e.preventDefault(), D) {
              var n = i.arraySearch(ot, e.pointerId, "id");
              n > -1 && (t = ot.splice(n, 1)[0], navigator.pointerEnabled ? t.type = e.pointerType || "mouse" : (t.type = {
                4: "mouse",
                2: "touch",
                3: "pen"
              }[e.pointerType], t.type || (t.type = e.pointerType || "mouse")))
            }
            var o, l = Tt(e), s = l.length;
            if ("mouseup" === e.type && (s = 0), 2 === s)return X = null, !0;
            1 === s && Re(nt, l[0]), 0 !== s || oe || ne || (t || ("mouseup" === e.type ? t = {
              x: e.pageX,
              y: e.pageY,
              type: "mouse"
            } : e.changedTouches && e.changedTouches[0] && (t = {
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY,
                type: "touch"
              })), Te("touchRelease", e, t));
            var u = -1;
            if (0 === s && (G = !1, i.unbind(window, f, r), mt(), J ? u = 0 : -1 !== ut && (u = Ee() - ut)), ut = 1 === s ? Ee() : -1, o = -1 !== u && u < 150 ? "zoom" : "swipe", J && s < 2 && (J = !1, 1 === s && (o = "zoomPointerUp"), Te("zoomGestureEnded")), X = null, Y || $ || ne || W)if (Ve(), K || (K = At()), K.calculateSwipeSpeed("x"), W) {
              var c = bt();
              if (c < a.verticalDragRange) r.close(); else {
                var d = de.y, p = ae;
                qe("verticalDrag", 0, 1, 300, i.easing.cubic.out, function (e) {
                  de.y = (r.currItem.initialPosition.y - d) * e + d, Se((1 - p) * e + p), De()
                }), Te("onVerticalDrag", 1)
              }
            } else {
              if ((q || ne) && 0 === s) {
                var m = Ft(o, K);
                if (m)return;
                o = "zoomPointerUp"
              }
              ne || ("swipe" === o ? !q && v > r.currItem.fitRatio && kt(K) : Pt())
            }
          }, At = function () {
            var e, t, n = {
              lastFlickOffset: {},
              lastFlickDist: {},
              lastFlickSpeed: {},
              slowDownRatio: {},
              slowDownRatioReverse: {},
              speedDecelerationRatio: {},
              speedDecelerationRatioAbs: {},
              distanceOffset: {},
              backAnimDestination: {},
              backAnimStarted: {},
              calculateSwipeSpeed: function (o) {
                rt.length > 1 ? (e = Ee() - U + 50, t = rt[rt.length - 2][o]) : (e = Ee() - N, t = nt[o]), n.lastFlickOffset[o] = tt[o] - t, n.lastFlickDist[o] = Math.abs(n.lastFlickOffset[o]), n.lastFlickDist[o] > 20 ? n.lastFlickSpeed[o] = n.lastFlickOffset[o] / e : n.lastFlickSpeed[o] = 0, Math.abs(n.lastFlickSpeed[o]) < .1 && (n.lastFlickSpeed[o] = 0), n.slowDownRatio[o] = .95, n.slowDownRatioReverse[o] = 1 - n.slowDownRatio[o], n.speedDecelerationRatio[o] = 1
              },
              calculateOverBoundsAnimOffset: function (e, t) {
                n.backAnimStarted[e] || (de[e] > ee.min[e] ? n.backAnimDestination[e] = ee.min[e] : de[e] < ee.max[e] && (n.backAnimDestination[e] = ee.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, qe("bounceZoomPan" + e, de[e], n.backAnimDestination[e], t || 300, i.easing.sine.out, function (t) {
                  de[e] = t, De()
                }))))
              },
              calculateAnimOffset: function (e) {
                n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, de[e] += n.distanceOffset[e])
              },
              panAnimLoop: function () {
                if (Ge.zoomPan && (Ge.zoomPan.raf = A(n.panAnimLoop), n.now = Ee(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), De(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05))return de.x = Math.round(de.x), de.y = Math.round(de.y), De(), void $e("zoomPan")
              }
            };
            return n
          }, kt = function (e) {
            if (e.calculateSwipeSpeed("y"), ee = r.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05)return e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0;
            Ye("zoomPan"), e.lastNow = Ee(), e.panAnimLoop()
          }, Ft = function (e, t) {
            var n, o, l;
            if (ne || (lt = c), "swipe" === e) {
              var s = tt.x - nt.x, u = t.lastFlickDist.x < 10;
              s > 30 && (u || t.lastFlickOffset.x > 20) ? o = -1 : s < -30 && (u || t.lastFlickOffset.x < -20) && (o = 1)
            }
            o && ((c += o) < 0 ? (c = a.loop ? Kt() - 1 : 0, l = !0) : c >= Kt() && (c = a.loop ? 0 : Kt() - 1, l = !0), l && !a.loop || (ve += o, fe -= o, n = !0));
            var d, p = he.x * fe, f = Math.abs(p - ct.x);
            return n || p > ct.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? f / Math.abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, lt === c && (n = !1), ne = !0, Te("mainScrollAnimStart"), qe("mainScroll", ct.x, p, d, i.easing.cubic.out, ke, function () {
              Ve(), ne = !1, lt = -1, (n || lt !== c) && r.updateCurrItem(), Te("mainScrollAnimComplete")
            }), n && r.updateCurrItem(!0), n
          }, Rt = function (e) {
            return 1 / Q * e * g
          }, Pt = function () {
            var e = v, t = Ne(), n = Ue();
            v < t ? e = t : v > n && (e = n);
            var o, a = ae;
            return re && !B && !le && v < t ? (r.close(), !0) : (re && (o = function (e) {
              Se((1 - a) * e + a)
            }), r.zoomTo(e, 0, 200, i.easing.cubic.out, o), !0)
          };
        be("Gestures", {
          publicMethods: {
            initGestures: function () {
              var e = function (e, t, n, o, i) {
                I = e + t, T = e + n, E = e + o, S = i ? e + i : ""
              };
              (D = Z.pointerEvent) && Z.touch && (Z.touch = !1), D ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : Z.touch ? (e("touch", "start", "move", "end", "cancel"), M = !0) : e("mouse", "down", "move", "up"), f = T + " " + E + " " + S, m = I, D && !M && (M = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = M, h[I] = St, h[T] = Ot, h[E] = Mt, S && (h[S] = h[E]), Z.touch && (m += " mousedown", f += " mousemove mouseup", h.mousedown = h[I], h.mousemove = h[T], h.mouseup = h[E]), M || (a.allowPanToNext = !1)
            }
          }
        });
        var Lt, Zt, zt, Nt, Ut, Kt, Bt = function (t, n, o, l) {
          var s;
          Lt && clearTimeout(Lt), Nt = !0, zt = !0, t.initialLayout ? (s = t.initialLayout, t.initialLayout = null) : s = a.getThumbBoundsFn && a.getThumbBoundsFn(c);
          var d = o ? a.hideAnimationDuration : a.showAnimationDuration, p = function () {
            $e("initialZoom"), o ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (Se(1), n && (n.style.display = "block"), i.addClass(e, "pswp--animated-in"), Te("initialZoom" + (o ? "OutEnd" : "InEnd"))), l && l(), Nt = !1
          };
          if (!d || !s || void 0 === s.x)return Te("initialZoom" + (o ? "Out" : "In")), v = t.initialZoomLevel, Re(de, t.initialPosition), De(), e.style.opacity = o ? 0 : 1, Se(1), void(d ? setTimeout(function () {
            p()
          }, d) : p());
          !function () {
            var n = u, l = !r.currItem.src || r.currItem.loadError || a.showHideOpacity;
            t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), o || (v = s.w / t.w, de.x = s.x, de.y = s.y - R, r[l ? "template" : "bg"].style.opacity = .001, De()), Ye("initialZoom"), o && !n && i.removeClass(e, "pswp--animated-in"), l && (o ? i[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function () {
              i.addClass(e, "pswp--animate_opacity")
            }, 30)), Lt = setTimeout(function () {
              if (Te("initialZoom" + (o ? "Out" : "In")), o) {
                var r = s.w / t.w, a = {x: de.x, y: de.y}, u = v, c = ae, f = function (t) {
                  1 === t ? (v = r, de.x = s.x, de.y = s.y - L) : (v = (r - u) * t + u, de.x = (s.x - a.x) * t + a.x, de.y = (s.y - L - a.y) * t + a.y), De(), l ? e.style.opacity = 1 - t : Se(c - t * c)
                };
                n ? qe("initialZoom", 0, 1, d, i.easing.cubic.out, f, p) : (f(1), Lt = setTimeout(p, d + 20))
              } else v = t.initialZoomLevel, Re(de, t.initialPosition), De(), Se(1), l ? e.style.opacity = 1 : Se(1), Lt = setTimeout(p, d + 20)
            }, o ? 25 : 90)
          }()
        }, Wt = {}, Ht = [], Gt = {
          index: 0,
          errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
          forceProgressiveLoading: !1,
          preload: [1, 1],
          getNumItemsFn: function () {
            return Zt.length
          }
        }, jt = function (e, t, n) {
          if (e.src && !e.loadError) {
            var o = !n;
            if (o && (e.vGap || (e.vGap = {
                top: 0,
                bottom: 0
              }), Te("parseVerticalMargin", e)), Wt.x = t.x, Wt.y = t.y - e.vGap.top - e.vGap.bottom, o) {
              var i = Wt.x / e.w, r = Wt.y / e.h;
              e.fitRatio = i < r ? i : r;
              var l = a.scaleMode;
              "orig" === l ? n = 1 : "fit" === l && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = {
                center: {
                  x: 0,
                  y: 0
                }, max: {x: 0, y: 0}, min: {x: 0, y: 0}
              })
            }
            if (!n)return;
            return function (e, t, n) {
              var o = e.bounds;
              o.center.x = Math.round((Wt.x - t) / 2), o.center.y = Math.round((Wt.y - n) / 2) + e.vGap.top, o.max.x = t > Wt.x ? Math.round(Wt.x - t) : o.center.x, o.max.y = n > Wt.y ? Math.round(Wt.y - n) + e.vGap.top : o.center.y, o.min.x = t > Wt.x ? 0 : o.center.x, o.min.y = n > Wt.y ? e.vGap.top : o.center.y
            }(e, e.w * n, e.h * n), o && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
          }
          return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = {
            center: {x: 0, y: 0},
            max: {x: 0, y: 0},
            min: {x: 0, y: 0}
          }, e.initialPosition = e.bounds.center, e.bounds
        }, $t = function (e, t, n, o, i, a) {
          t.loadError || o && (t.imageAppended = !0, qt(t, o, t === r.currItem && xe), n.appendChild(o), a && setTimeout(function () {
            t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
          }, 500))
        }, Yt = function (e) {
          e.loading = !0, e.loaded = !1;
          var t = e.img = i.createEl("pswp__img", "img"), n = function () {
            e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
          };
          return t.onload = n, t.onerror = function () {
            e.loadError = !0, n()
          }, t.src = e.src, t
        }, Vt = function (e, t) {
          if (e.src && e.loadError && e.container)return t && (e.container.innerHTML = ""), e.container.innerHTML = a.errorMsg.replace("%url%", e.src), !0
        }, qt = function (e, t, n) {
          if (e.src) {
            t || (t = e.container.lastChild);
            var o = n ? e.w : Math.round(e.w * e.fitRatio), i = n ? e.h : Math.round(e.h * e.fitRatio);
            e.placeholder && !e.loaded && (e.placeholder.style.width = o + "px", e.placeholder.style.height = i + "px"), t.style.width = o + "px", t.style.height = i + "px"
          }
        }, Xt = function () {
          if (Ht.length) {
            for (var e,
                   t = 0; t < Ht.length; t++)(e = Ht[t]).holder.index === e.index && $t(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
            Ht = []
          }
        };
        be("Controller", {
          publicMethods: {
            lazyLoadItem: function (e) {
              e = _e(e);
              var t = Ut(e);
              t && (!t.loaded && !t.loading || b) && (Te("gettingData", e, t), t.src && Yt(t))
            }, initController: function () {
              i.extend(a, Gt, !0), r.items = Zt = n, Ut = r.getItemAt, Kt = a.getNumItemsFn, a.loop, Kt() < 3 && (a.loop = !1), Ie("beforeChange", function (e) {
                var t, n = a.preload, o = null === e || e >= 0, i = Math.min(n[0], Kt()), l = Math.min(n[1], Kt());
                for (t = 1; t <= (o ? l : i); t++)r.lazyLoadItem(c + t);
                for (t = 1; t <= (o ? i : l); t++)r.lazyLoadItem(c - t)
              }), Ie("initialLayout", function () {
                r.currItem.initialLayout = a.getThumbBoundsFn && a.getThumbBoundsFn(c)
              }), Ie("mainScrollAnimComplete", Xt), Ie("initialZoomInEnd", Xt), Ie("destroy", function () {
                for (var e,
                       t = 0; t < Zt.length; t++)(e = Zt[t]).container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                Ht = null
              })
            }, getItemAt: function (e) {
              return e >= 0 && void 0 !== Zt[e] && Zt[e]
            }, allowProgressiveImg: function () {
              return a.forceProgressiveLoading || !M || a.mouseUsed || screen.width > 1200
            }, setContent: function (e, t) {
              a.loop && (t = _e(t));
              var n = r.getItemAt(e.index);
              n && (n.container = null);
              var o, s = r.getItemAt(t);
              if (s) {
                Te("gettingData", t, s), e.index = t, e.item = s;
                var u = s.container = i.createEl("pswp__zoom-wrap");
                if (!s.src && s.html && (s.html.tagName ? u.appendChild(s.html) : u.innerHTML = s.html), Vt(s), jt(s, pe), !s.src || s.loadError || s.loaded) s.src && !s.loadError && ((o = i.createEl("pswp__img", "img")).style.opacity = 1, o.src = s.src, qt(s, o), $t(0, s, u, o)); else {
                  if (s.loadComplete = function (n) {
                      if (l) {
                        if (e && e.index === t) {
                          if (Vt(n, !0))return n.loadComplete = n.img = null, jt(n, pe), Me(n), void(e.index === c && r.updateCurrZoomItem());
                          n.imageAppended ? !Nt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : Z.transform && (ne || Nt) ? Ht.push({
                            item: n,
                            baseDiv: u,
                            img: n.img,
                            index: t,
                            holder: e,
                            clearPlaceholder: !0
                          }) : $t(0, n, u, n.img, 0, !0)
                        }
                        n.loadComplete = null, n.img = null, Te("imageLoadComplete", t, n)
                      }
                    }, i.features.transform) {
                    var d = "pswp__img pswp__img--placeholder";
                    d += s.msrc ? "" : " pswp__img--placeholder--blank";
                    var p = i.createEl(d, s.msrc ? "img" : "");
                    s.msrc && (p.src = s.msrc), qt(s, p), u.appendChild(p), s.placeholder = p
                  }
                  s.loading || Yt(s), r.allowProgressiveImg() && (!zt && Z.transform ? Ht.push({
                    item: s,
                    baseDiv: u,
                    img: s.img,
                    index: t,
                    holder: e
                  }) : $t(0, s, u, s.img, 0, !0))
                }
                zt || t !== c ? Me(s) : (te = u.style, Bt(s, o || s.img)), e.el.innerHTML = "", e.el.appendChild(u)
              } else e.el.innerHTML = ""
            }, cleanSlide: function (e) {
              e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
            }
          }
        });
        var Jt, Qt, en = {}, tn = function (e, t, n) {
          var o = document.createEvent("CustomEvent"),
            i = {origEvent: e, target: e.target, releasePoint: t, pointerType: n || "touch"};
          o.initCustomEvent("pswpTap", !0, !0, i), e.target.dispatchEvent(o)
        };
        be("Tap", {
          publicMethods: {
            initTap: function () {
              Ie("firstTouchStart", r.onTapStart), Ie("touchRelease", r.onTapRelease), Ie("destroy", function () {
                en = {}, Jt = null
              })
            }, onTapStart: function (e) {
              e.length > 1 && (clearTimeout(Jt), Jt = null)
            }, onTapRelease: function (e, t) {
              if (t && !Y && !j && !je) {
                var n = t;
                if (Jt && (clearTimeout(Jt), Jt = null, function (e, t) {
                    return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25
                  }(n, en)))return void Te("doubleTap", n);
                if ("mouse" === t.type)return void tn(e, t, "mouse");
                var o = e.target.tagName.toUpperCase();
                if ("BUTTON" === o || i.hasClass(e.target, "pswp__single-tap"))return void tn(e, t);
                Re(en, n), Jt = setTimeout(function () {
                  tn(e, t), Jt = null
                }, 300)
              }
            }
          }
        }), be("DesktopZoom", {
          publicMethods: {
            initDesktopZoom: function () {
              P || (M ? Ie("mouseUsed", function () {
                r.setupDesktopZoom()
              }) : r.setupDesktopZoom(!0))
            }, setupDesktopZoom: function (t) {
              Qt = {};
              var n = "wheel mousewheel DOMMouseScroll";
              Ie("bindEvents", function () {
                i.bind(e, n, r.handleMouseWheel)
              }), Ie("unbindEvents", function () {
                Qt && i.unbind(e, n, r.handleMouseWheel)
              }), r.mouseZoomedIn = !1;
              var o, a = function () {
                r.mouseZoomedIn && (i.removeClass(e, "pswp--zoomed-in"), r.mouseZoomedIn = !1), v < 1 ? i.addClass(e, "pswp--zoom-allowed") : i.removeClass(e, "pswp--zoom-allowed"), l()
              }, l = function () {
                o && (i.removeClass(e, "pswp--dragging"), o = !1)
              };
              Ie("resize", a), Ie("afterChange", a), Ie("pointerDown", function () {
                r.mouseZoomedIn && (o = !0, i.addClass(e, "pswp--dragging"))
              }), Ie("pointerUp", l), t || a()
            }, handleMouseWheel: function (e) {
              if (v <= r.currItem.fitRatio)return a.modal && (!a.closeOnScroll || je || G ? e.preventDefault() : O && Math.abs(e.deltaY) > 2 && (u = !0, r.close())), !0;
              if (e.stopPropagation(), Qt.x = 0, "deltaX" in e) 1 === e.deltaMode ? (Qt.x = 18 * e.deltaX, Qt.y = 18 * e.deltaY) : (Qt.x = e.deltaX, Qt.y = e.deltaY); else if ("wheelDelta" in e) e.wheelDeltaX && (Qt.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? Qt.y = -.16 * e.wheelDeltaY : Qt.y = -.16 * e.wheelDelta; else {
                if (!("detail" in e))return;
                Qt.y = e.detail
              }
              ze(v, !0);
              var t = de.x - Qt.x, n = de.y - Qt.y;
              (a.modal || t <= ee.min.x && t >= ee.max.x && n <= ee.min.y && n >= ee.max.y) && e.preventDefault(), r.panTo(t, n)
            }, toggleDesktopZoom: function (t) {
              t = t || {x: pe.x / 2 + me.x, y: pe.y / 2 + me.y};
              var n = a.getDoubleTapZoom(!0, r.currItem), o = v === n;
              r.mouseZoomedIn = !o, r.zoomTo(o ? r.currItem.initialZoomLevel : n, t, 333), i[(o ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
            }
          }
        });
        var nn, on, rn, an, ln, sn, un, cn, dn, pn, fn, mn, hn = {history: !0, galleryUID: 1}, vn = function () {
          return fn.hash.substring(1)
        }, gn = function () {
          nn && clearTimeout(nn), rn && clearTimeout(rn)
        }, yn = function () {
          var e = vn(), t = {};
          if (e.length < 5)return t;
          var n, o = e.split("&");
          for (n = 0; n < o.length; n++)if (o[n]) {
            var i = o[n].split("=");
            i.length < 2 || (t[i[0]] = i[1])
          }
          if (a.galleryPIDs) {
            var r = t.pid;
            for (t.pid = 0, n = 0; n < Zt.length; n++)if (Zt[n].pid === r) {
              t.pid = n;
              break
            }
          } else t.pid = parseInt(t.pid, 10) - 1;
          return t.pid < 0 && (t.pid = 0), t
        }, wn = function () {
          if (rn && clearTimeout(rn), je || G) rn = setTimeout(wn, 500); else {
            an ? clearTimeout(on) : an = !0;
            var e = c + 1, t = Ut(c);
            t.hasOwnProperty("pid") && (e = t.pid);
            var n = un + "&gid=" + a.galleryUID + "&pid=" + e;
            cn || -1 === fn.hash.indexOf(n) && (pn = !0);
            var o = fn.href.split("#")[0] + "#" + n;
            mn ? "#" + n !== window.location.hash && history[cn ? "replaceState" : "pushState"]("", document.title, o) : cn ? fn.replace(o) : fn.hash = n, cn = !0, on = setTimeout(function () {
              an = !1
            }, 60)
          }
        };
        be("History", {
          publicMethods: {
            initHistory: function () {
              if (i.extend(a, hn, !0), a.history) {
                fn = window.location, pn = !1, dn = !1, cn = !1, un = vn(), mn = "pushState" in history, un.indexOf("gid=") > -1 && (un = (un = un.split("&gid=")[0]).split("?gid=")[0]), Ie("afterChange", r.updateURL), Ie("unbindEvents", function () {
                  i.unbind(window, "hashchange", r.onHashChange)
                });
                var e = function () {
                  sn = !0, dn || (pn ? history.back() : un ? fn.hash = un : mn ? history.pushState("", document.title, fn.pathname + fn.search) : fn.hash = ""), gn()
                };
                Ie("unbindEvents", function () {
                  u && e()
                }), Ie("destroy", function () {
                  sn || e()
                }), Ie("firstUpdate", function () {
                  c = yn().pid
                });
                var t = un.indexOf("pid=");
                t > -1 && "&" === (un = un.substring(0, t)).slice(-1) && (un = un.slice(0, -1)), setTimeout(function () {
                  l && i.bind(window, "hashchange", r.onHashChange)
                }, 40)
              }
            }, onHashChange: function () {
              if (vn() === un)return dn = !0, void r.close();
              an || (ln = !0, r.goTo(yn().pid), ln = !1)
            }, updateURL: function () {
              gn(), ln || (cn ? nn = setTimeout(wn, 800) : wn())
            }
          }
        }), i.extend(r, Xe)
      }
    }) ? o.call(t, n, t, e) : o) || (e.exports = i)
  }, function (e, t, n) {
    var o, i;
    /*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
     * http://photoswipe.com
     * Copyright (c) 2017 Dmitry Semenov; */
    void 0 === (i = "function" == typeof(o = function () {
      "use strict";
      return function (e, t) {
        var n, o, i, r, a, l, s, u, c, d, p, f, m, h, v, g, y, w, x = this, b = !1, _ = !0, C = !0, I = {
          barsSize: {top: 44, bottom: "auto"},
          closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
          timeToIdle: 4e3,
          timeToIdleOutside: 1e3,
          loadingIndicatorDelay: 1e3,
          addCaptionHTMLFn: function (e, t) {
            return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
          },
          closeEl: !0,
          captionEl: !0,
          fullscreenEl: !0,
          zoomEl: !0,
          shareEl: !0,
          counterEl: !0,
          arrowEl: !0,
          preloaderEl: !0,
          tapToClose: !1,
          tapToToggleControls: !0,
          clickToCloseNonZoomable: !0,
          shareButtons: [{
            id: "facebook",
            label: "Share on Facebook",
            url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
          }, {
            id: "twitter",
            label: "Tweet",
            url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
          }, {
            id: "pinterest",
            label: "Pin it",
            url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
          }, {id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0}],
          getImageURLForShare: function () {
            return e.currItem.src || ""
          },
          getPageURLForShare: function () {
            return window.location.href
          },
          getTextForShare: function () {
            return e.currItem.title || ""
          },
          indexIndicatorSep: " / ",
          fitControlsWidth: 1200
        }, T = function (e) {
          if (g)return !0;
          e = e || window.event, v.timeToIdle && v.mouseUsed && !c && R();
          for (var n, o, i = e.target || e.srcElement, r = i.getAttribute("class") || "",
                 a = 0; a < z.length; a++)(n = z[a]).onTap && r.indexOf("pswp__" + n.name) > -1 && (n.onTap(), o = !0);
          if (o) {
            e.stopPropagation && e.stopPropagation(), g = !0;
            var l = t.features.isOldAndroid ? 600 : 30;
            setTimeout(function () {
              g = !1
            }, l)
          }
        }, E = function (e, n, o) {
          t[(o ? "add" : "remove") + "Class"](e, "pswp__" + n)
        }, S = function () {
          var e = 1 === v.getNumItemsFn();
          e !== h && (E(o, "ui--one-slide", e), h = e)
        }, O = function () {
          E(s, "share-modal--hidden", C)
        }, D = function () {
          return (C = !C) ? (t.removeClass(s, "pswp__share-modal--fade-in"), setTimeout(function () {
            C && O()
          }, 300)) : (O(), setTimeout(function () {
            C || t.addClass(s, "pswp__share-modal--fade-in")
          }, 30)), C || A(), !1
        }, M = function (t) {
          var n = (t = t || window.event).target || t.srcElement;
          return e.shout("shareLinkClick", t, n), !(!n.href || !n.hasAttribute("download") && (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), C || D(), 1))
        }, A = function () {
          for (var e, t, n, o, i, r = "",
                 a = 0; a < v.shareButtons.length; a++)e = v.shareButtons[a], n = v.getImageURLForShare(e), o = v.getPageURLForShare(e), i = v.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(o)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(i)), r += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", v.parseShareButtonOut && (r = v.parseShareButtonOut(e, r));
          s.children[0].innerHTML = r, s.children[0].onclick = M
        }, k = function (e) {
          for (var n = 0; n < v.closeElClasses.length; n++)if (t.hasClass(e, "pswp__" + v.closeElClasses[n]))return !0
        }, F = 0, R = function () {
          clearTimeout(w), F = 0, c && x.setIdle(!1)
        }, P = function (e) {
          var t = (e = e || window.event).relatedTarget || e.toElement;
          t && "HTML" !== t.nodeName || (clearTimeout(w), w = setTimeout(function () {
            x.setIdle(!0)
          }, v.timeToIdleOutside))
        }, L = function (e) {
          f !== e && (E(p, "preloader--active", !e), f = e)
        }, Z = function (n) {
          var a = n.vGap;
          if (!e.likelyTouchDevice || v.mouseUsed || screen.width > v.fitControlsWidth) {
            var l = v.barsSize;
            if (v.captionEl && "auto" === l.bottom)if (r || ((r = t.createEl("pswp__caption pswp__caption--fake")).appendChild(t.createEl("pswp__caption__center")), o.insertBefore(r, i), t.addClass(o, "pswp__ui--fit")), v.addCaptionHTMLFn(n, r, !0)) {
              var s = r.clientHeight;
              a.bottom = parseInt(s, 10) || 44
            } else a.bottom = l.top; else a.bottom = "auto" === l.bottom ? 0 : l.bottom;
            a.top = l.top
          } else a.top = a.bottom = 0
        }, z = [{
          name: "caption", option: "captionEl", onInit: function (e) {
            i = e
          }
        }, {
          name: "share-modal", option: "shareEl", onInit: function (e) {
            s = e
          }, onTap: function () {
            D()
          }
        }, {
          name: "button--share", option: "shareEl", onInit: function (e) {
            l = e
          }, onTap: function () {
            D()
          }
        }, {name: "button--zoom", option: "zoomEl", onTap: e.toggleDesktopZoom}, {
          name: "counter",
          option: "counterEl",
          onInit: function (e) {
            a = e
          }
        }, {name: "button--close", option: "closeEl", onTap: e.close}, {
          name: "button--arrow--left",
          option: "arrowEl",
          onTap: e.prev
        }, {name: "button--arrow--right", option: "arrowEl", onTap: e.next}, {
          name: "button--fs",
          option: "fullscreenEl",
          onTap: function () {
            n.isFullscreen() ? n.exit() : n.enter()
          }
        }, {
          name: "preloader", option: "preloaderEl", onInit: function (e) {
            p = e
          }
        }];
        x.init = function () {
          t.extend(e.options, I, !0), v = e.options, o = t.getChildByClass(e.scrollWrap, "pswp__ui"), d = e.listen, function () {
            var e;
            d("onVerticalDrag", function (e) {
              _ && e < .95 ? x.hideControls() : !_ && e >= .95 && x.showControls()
            }), d("onPinchClose", function (t) {
              _ && t < .9 ? (x.hideControls(), e = !0) : e && !_ && t > .9 && x.showControls()
            }), d("zoomGestureEnded", function () {
              (e = !1) && !_ && x.showControls()
            })
          }(), d("beforeChange", x.update), d("doubleTap", function (t) {
            var n = e.currItem.initialZoomLevel;
            e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(v.getDoubleTapZoom(!1, e.currItem), t, 333)
          }), d("preventDragEvent", function (e, t, n) {
            var o = e.target || e.srcElement;
            o && o.getAttribute("class") && e.type.indexOf("mouse") > -1 && (o.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(o.tagName)) && (n.prevent = !1)
          }), d("bindEvents", function () {
            t.bind(o, "pswpTap click", T), t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", x.onMouseOver)
          }), d("unbindEvents", function () {
            C || D(), y && clearInterval(y), t.unbind(document, "mouseout", P), t.unbind(document, "mousemove", R), t.unbind(o, "pswpTap click", T), t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", x.onMouseOver), n && (t.unbind(document, n.eventK, x.updateFullscreen), n.isFullscreen() && (v.hideAnimationDuration = 0, n.exit()), n = null)
          }), d("destroy", function () {
            v.captionEl && (r && o.removeChild(r), t.removeClass(i, "pswp__caption--empty")), s && (s.children[0].onclick = null), t.removeClass(o, "pswp__ui--over-close"), t.addClass(o, "pswp__ui--hidden"), x.setIdle(!1)
          }), v.showAnimationDuration || t.removeClass(o, "pswp__ui--hidden"), d("initialZoomIn", function () {
            v.showAnimationDuration && t.removeClass(o, "pswp__ui--hidden")
          }), d("initialZoomOut", function () {
            t.addClass(o, "pswp__ui--hidden")
          }), d("parseVerticalMargin", Z), function () {
            var e, n, i, r = function (o) {
              if (o)for (var r = o.length, a = 0; a < r; a++) {
                e = o[a], n = e.className;
                for (var l = 0; l < z.length; l++)i = z[l], n.indexOf("pswp__" + i.name) > -1 && (v[i.option] ? (t.removeClass(e, "pswp__element--disabled"), i.onInit && i.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
              }
            };
            r(o.children);
            var a = t.getChildByClass(o, "pswp__top-bar");
            a && r(a.children)
          }(), v.shareEl && l && s && (C = !0), S(), v.timeToIdle && d("mouseUsed", function () {
            t.bind(document, "mousemove", R), t.bind(document, "mouseout", P), y = setInterval(function () {
              2 == ++F && x.setIdle(!0)
            }, v.timeToIdle / 2)
          }), v.fullscreenEl && !t.features.isOldAndroid && (n || (n = x.getFullscreenAPI()), n ? (t.bind(document, n.eventK, x.updateFullscreen), x.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs")), v.preloaderEl && (L(!0), d("beforeChange", function () {
            clearTimeout(m), m = setTimeout(function () {
              e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && L(!1) : L(!0)
            }, v.loadingIndicatorDelay)
          }), d("imageLoadComplete", function (t, n) {
            e.currItem === n && L(!0)
          }))
        }, x.setIdle = function (e) {
          c = e, E(o, "ui--idle", e)
        }, x.update = function () {
          _ && e.currItem ? (x.updateIndexIndicator(), v.captionEl && (v.addCaptionHTMLFn(e.currItem, i), E(i, "caption--empty", !e.currItem.title)), b = !0) : b = !1, C || D(), S()
        }, x.updateFullscreen = function (o) {
          o && setTimeout(function () {
            e.setScrollOffset(0, t.getScrollY())
          }, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
        }, x.updateIndexIndicator = function () {
          v.counterEl && (a.innerHTML = e.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn())
        }, x.onGlobalTap = function (n) {
          var o = (n = n || window.event).target || n.srcElement;
          if (!g)if (n.detail && "mouse" === n.detail.pointerType) {
            if (k(o))return void e.close();
            t.hasClass(o, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? v.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
          } else if (v.tapToToggleControls && (_ ? x.hideControls() : x.showControls()), v.tapToClose && (t.hasClass(o, "pswp__img") || k(o)))return void e.close()
        }, x.onMouseOver = function (e) {
          var t = (e = e || window.event).target || e.srcElement;
          E(o, "ui--over-close", k(t))
        }, x.hideControls = function () {
          t.addClass(o, "pswp__ui--hidden"), _ = !1
        }, x.showControls = function () {
          _ = !0, b || x.update(), t.removeClass(o, "pswp__ui--hidden")
        }, x.supportsFullscreen = function () {
          var e = document;
          return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
        }, x.getFullscreenAPI = function () {
          var t, n = document.documentElement, o = "fullscreenchange";
          return n.requestFullscreen ? t = {
            enterK: "requestFullscreen",
            exitK: "exitFullscreen",
            elementK: "fullscreenElement",
            eventK: o
          } : n.mozRequestFullScreen ? t = {
            enterK: "mozRequestFullScreen",
            exitK: "mozCancelFullScreen",
            elementK: "mozFullScreenElement",
            eventK: "moz" + o
          } : n.webkitRequestFullscreen ? t = {
            enterK: "webkitRequestFullscreen",
            exitK: "webkitExitFullscreen",
            elementK: "webkitFullscreenElement",
            eventK: "webkit" + o
          } : n.msRequestFullscreen && (t = {
              enterK: "msRequestFullscreen",
              exitK: "msExitFullscreen",
              elementK: "msFullscreenElement",
              eventK: "MSFullscreenChange"
            }), t && (t.enter = function () {
            if (u = v.closeOnScroll, v.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK)return e.template[this.enterK]();
            e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
          }, t.exit = function () {
            return v.closeOnScroll = u, document[this.exitK]()
          }, t.isFullscreen = function () {
            return document[this.elementK]
          }), t
        }
      }
    }) ? o.call(t, n, t, e) : o) || (e.exports = i)
  }, function (e, t, n) {
    var o = n(5);
    "string" == typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
    (0, n(1).default)("edd1bb48", o, !1, {})
  }, function (e, t, n) {
  }, , function (e, t, n) {
    var o = n(8);
    "string" == typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
    (0, n(1).default)("713951a0", o, !1, {})
  }, function (e, t, n) {
  }, , function (e, t, n) {
    "use strict";
    var o = n(0);
    n.n(o).a
  }, function (e, t, n) {
  }, , function (e, t, n) {
    "use strict";
    n.r(t);
    var o = function () {
      var e = this, t = e.$createElement, n = e._self._c || t;
      return e.data.length ? n("div", [n("div", {
        ref: "myGallery",
        staticClass: "my-gallery",
        attrs: {"data-pswp-uid": "1"}
      }, e._l(e.slides, function (t, o) {
        return e.slides.length ? n("div", {key: o}, [n("img", {attrs: {preview: "", src: t, alt: ""}})]) : e._e()
      })), e._v(" "), n("div", {
        ref: "pswpWrap",
        staticClass: "pswp",
        attrs: {tabindex: "-1", role: "dialog", "aria-hidden": "true"}
      }, [n("div", {staticClass: "pswp__bg"}), e._v(" "), e._m(0)])]) : e._e()
    };
    o._withStripped = !0;
    n(4), n(7);
    var i = n(2), r = n.n(i), a = n(3), l = n.n(a);

    function s(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    var u = {
      name: "PreviewImage", props: {
        data: {
          type: Array, default: function () {
            return []
          }
        }, imageIndex: {type: Number, default: 0}, options: {
          type: Object, default: function () {
          }
        }
      }, data: function () {
        return {slides: this.data || [], gallery: null}
      }, watch: {
        data: function (e) {
          var t = this;
          Array.isArray(e) && (this.slides = Object.assign([], e), e.length > 0 && this.$nextTick(function () {
            t.initPhotoSwipe()
          }))
        }
      }, mounted: function () {
        var e = this;
        this.slides.length > 0 && this.$nextTick(function () {
          e.initPhotoSwipe()
        })
      }, methods: {
        initPhotoSwipe: function () {
          var e = this, t = this, n = this.options, o = this.imageIndex;
          n = n || {}, n = Object.assign({
            fullscreenEl: !0,
            shareEl: !1,
            arrowEl: !0,
            preloaderEl: !0,
            loop: !1,
            bgOpacity: .85,
            showHideOpacity: !0,
            errorMsg: '<div class="pswp__error-msg">图片加载失败</div>'
          }, n, {index: o});
          var i = this.$refs.myGallery, a = this.$refs.pswpWrap, u = this.transThumbnailElements(), c = function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}, o = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), o.forEach(function (t) {
                s(e, t, n[t])
              })
            }
            return e
          }({
            galleryUID: i.getAttribute("data-pswp-uid"), getThumbBoundsFn: function (e) {
              var t = u[e].el, n = window.pageYOffset || document.documentElement.scrollTop,
                o = t.getBoundingClientRect();
              return {x: o.left, y: o.top + n, w: o.width}
            }
          }, n);
          this.gallery = new r.a(a, l.a, u, c), this.gallery.init(), this.gallery.listen("close", function () {
            e.gallery && (e.gallery.close(), e.gallery = null), t.$emit("close")
          })
        }, transThumbnailElements: function () {
          for (var e = [], t = document.getElementsByClassName('content-box')[0].getElementsByTagName('img'), n = 0, o = t.length; n < o; n++) {
            var i = t[n], r = 0, a = 0;
            if (void 0 === i.naturalWidth) {
              var l = new window.Image;
              l.src = i.getAttribute("src"), r = l.width, a = l.height
            } else r = i.naturalWidth, a = i.naturalHeight;
            e.push({el: i, src: i.getAttribute("src"), w: r, h: a})
          }
          return e
        }
      }, beforeDestroy: function () {
        this.gallery && (this.gallery.close(), this.gallery = null)
      }
    };
    n(10);
    var c = function (e, t, n, o, i, r, a, l) {
      var s, u = "function" == typeof e ? e.options : e;
      if (t && (u.render = t, u.staticRenderFns = n, u._compiled = !0), o && (u.functional = !0), r && (u._scopeId = "data-v-" + r), a ? (s = function (e) {
          (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a)
        }, u._ssrRegister = s) : i && (s = l ? function () {
            i.call(this, this.$root.$options.shadowRoot)
          } : i), s)if (u.functional) {
        u._injectStyles = s;
        var c = u.render;
        u.render = function (e, t) {
          return s.call(t), c(e, t)
        }
      } else {
        var d = u.beforeCreate;
        u.beforeCreate = d ? [].concat(d, s) : [s]
      }
      return {exports: e, options: u}
    }(u, o, [function () {
      var e = this, t = e.$createElement, n = e._self._c || t;
      return n("div", {staticClass: "pswp__scroll-wrap"}, [n("div", {staticClass: "pswp__container"}, [n("div", {staticClass: "pswp__item"}), e._v(" "), n("div", {staticClass: "pswp__item"}), e._v(" "), n("div", {staticClass: "pswp__item"})]), e._v(" "), n("div", {staticClass: "pswp__ui pswp__ui--hidden"}, [n("div", {staticClass: "pswp__top-bar"}, [n("div", {staticClass: "pswp__counter"}), e._v(" "), n("button", {
        staticClass: "pswp__button pswp__button--close",
        attrs: {title: "Close (Esc)"}
      }), e._v(" "), n("button", {
        staticClass: "pswp__button pswp__button--share",
        attrs: {title: "Share"}
      }), e._v(" "), n("button", {
        staticClass: "pswp__button pswp__button--fs",
        attrs: {title: "Toggle fullscreen"}
      }), e._v(" "), n("button", {
        staticClass: "pswp__button pswp__button--zoom",
        attrs: {title: "Zoom in/out"}
      }), e._v(" "), n("div", {staticClass: "pswp__preloader"}, [n("div", {staticClass: "pswp__preloader__icn"}, [n("div", {staticClass: "pswp__preloader__cut"}, [n("div", {staticClass: "pswp__preloader__donut"})])])])]), e._v(" "), n("div", {staticClass: "pswp__share-modal pswp__share-modal--hidden pswp__single-tap"}, [n("div", {staticClass: "pswp__share-tooltip"})]), e._v(" "), n("button", {
        staticClass: "pswp__button pswp__button--arrow--left",
        attrs: {title: "Previous (arrow left)"}
      }), e._v(" "), n("button", {
        staticClass: "pswp__button pswp__button--arrow--right",
        attrs: {title: "Next (arrow right)"}
      }), e._v(" "), n("div", {staticClass: "pswp__caption"}, [n("div", {staticClass: "pswp__caption__center"})])])])
    }], !1, null, "5ac397f5", null);
    c.options.__file = "src/lib/preview.vue";
    var d = c.exports, p = {
      install: function (e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var t = e.extend(d);
        t.prototype.close = function () {
          this.data = [], this.options = {}, this.imageIndex = 0
        }, e.prototype.$imagePreview = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = document.createElement("div"), o = new t;
          o.$mount(n), o.data = e.images || [], o.imageIndex = e.index || 0, o.options = e.defaultOpt || {}, document.body.appendChild(o.$el), o.$on("close", function () {
            o.close(), document.body.removeChild(o.$el), o = null
          })
        }
      }
    };
    "undefined" != typeof window && window.Vue && window.Vue.use(p);
    t.default = p
  }])
});
