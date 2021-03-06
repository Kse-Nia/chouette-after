!(function (e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  function n(e) {
    var t = e.length,
      n = G.type(e);
    return (
      "function" !== n &&
      !G.isWindow(e) &&
      (!(1 !== e.nodeType || !t) ||
        "array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  function r(e, t, n) {
    if (G.isFunction(t))
      return G.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return G.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ("string" == typeof t) {
      if (ne.test(t)) return G.filter(t, e, n);
      t = G.filter(t, e);
    }
    return G.grep(e, function (e) {
      return B.call(t, e) >= 0 !== n;
    });
  }
  function i(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function o() {
    V.removeEventListener("DOMContentLoaded", o, !1),
      e.removeEventListener("load", o, !1),
      G.ready();
  }
  function s() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function () {
        return {};
      },
    }),
      (this.expando = G.expando + Math.random());
  }
  function a(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(he, "-$1").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : de.test(n)
                ? G.parseJSON(n)
                : n));
        } catch (e) {}
        pe.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function u() {
    return !0;
  }
  function l() {
    return !1;
  }
  function c() {
    try {
      return V.activeElement;
    } catch (e) {}
  }
  function f(e, t) {
    return G.nodeName(e, "table") &&
      G.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function p(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function d(e) {
    var t = Ae.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function h(e, t) {
    for (var n = 0, r = e.length; r > n; n++)
      fe.set(e[n], "globalEval", !t || fe.get(t[n], "globalEval"));
  }
  function g(e, t) {
    var n, r, i, o, s, a, u, l;
    if (1 === t.nodeType) {
      if (
        fe.hasData(e) &&
        ((o = fe.access(e)), (s = fe.set(t, o)), (l = o.events))
      )
        for (i in (delete s.handle, (s.events = {}), l))
          for (n = 0, r = l[i].length; r > n; n++) G.event.add(t, i, l[i][n]);
      pe.hasData(e) &&
        ((a = pe.access(e)), (u = G.extend({}, a)), pe.set(t, u));
    }
  }
  function m(e, t) {
    var n = e.getElementsByTagName
      ? e.getElementsByTagName(t || "*")
      : e.querySelectorAll
      ? e.querySelectorAll(t || "*")
      : [];
    return void 0 === t || (t && G.nodeName(e, t)) ? G.merge([e], n) : n;
  }
  function v(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && ye.test(e.type)
      ? (t.checked = e.checked)
      : ("input" === n || "textarea" === n) &&
        (t.defaultValue = e.defaultValue);
  }
  function y(t, n) {
    var r = G(n.createElement(t)).appendTo(n.body),
      i = e.getDefaultComputedStyle
        ? e.getDefaultComputedStyle(r[0]).display
        : G.css(r[0], "display");
    return r.detach(), i;
  }
  function x(e) {
    var t = V,
      n = Oe[e];
    return (
      n ||
        (("none" !== (n = y(e, t)) && n) ||
          ((t = (He = (
            He || G("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(t.documentElement))[0].contentDocument).write(),
          t.close(),
          (n = y(e, t)),
          He.detach()),
        (Oe[e] = n)),
      n
    );
  }
  function b(e, t, n) {
    var r,
      i,
      o,
      s,
      a = e.style;
    return (
      (n = n || Me(e)) && (s = n.getPropertyValue(t) || n[t]),
      n &&
        ("" !== s || G.contains(e.ownerDocument, e) || (s = G.style(e, t)),
        Pe.test(s) &&
          Fe.test(t) &&
          ((r = a.width),
          (i = a.minWidth),
          (o = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = r),
          (a.minWidth = i),
          (a.maxWidth = o))),
      void 0 !== s ? s + "" : s
    );
  }
  function w(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  function T(e, t) {
    if (t in e) return t;
    for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = _e.length; i--; )
      if ((t = _e[i] + n) in e) return t;
    return r;
  }
  function C(e, t, n) {
    var r = We.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function N(e, t, n, r, i) {
    for (
      var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        s = 0;
      4 > o;
      o += 2
    )
      "margin" === n && (s += G.css(e, n + me[o], !0, i)),
        r
          ? ("content" === n && (s -= G.css(e, "padding" + me[o], !0, i)),
            "margin" !== n &&
              (s -= G.css(e, "border" + me[o] + "Width", !0, i)))
          : ((s += G.css(e, "padding" + me[o], !0, i)),
            "padding" !== n &&
              (s += G.css(e, "border" + me[o] + "Width", !0, i)));
    return s;
  }
  function k(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = Me(e),
      s = "border-box" === G.css(e, "boxSizing", !1, o);
    if (0 >= i || null == i) {
      if (((0 > (i = b(e, t, o)) || null == i) && (i = e.style[t]), Pe.test(i)))
        return i;
      (r = s && (U.boxSizingReliable() || i === e.style[t])),
        (i = parseFloat(i) || 0);
    }
    return i + N(e, t, n || (s ? "border" : "content"), r, o) + "px";
  }
  function E(e, t) {
    for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++)
      (r = e[s]).style &&
        ((o[s] = fe.get(r, "olddisplay")),
        (n = r.style.display),
        t
          ? (o[s] || "none" !== n || (r.style.display = ""),
            "" === r.style.display &&
              ve(r) &&
              (o[s] = fe.access(r, "olddisplay", x(r.nodeName))))
          : o[s] ||
            ((i = ve(r)),
            ((n && "none" !== n) || !i) &&
              fe.set(r, "olddisplay", i ? n : G.css(r, "display"))));
    for (s = 0; a > s; s++)
      (r = e[s]).style &&
        ((t && "none" !== r.style.display && "" !== r.style.display) ||
          (r.style.display = t ? o[s] || "" : "none"));
    return e;
  }
  function D(e, t, n, r, i) {
    return new D.prototype.init(e, t, n, r, i);
  }
  function j() {
    return (
      setTimeout(function () {
        Xe = void 0;
      }),
      (Xe = G.now())
    );
  }
  function S(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; 4 > r; r += 2 - t)
      i["margin" + (n = me[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function A(e, t, n) {
    for (
      var r, i = (Qe[t] || []).concat(Qe["*"]), o = 0, s = i.length;
      s > o;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function L(e, t, n) {
    var r,
      i,
      o = 0,
      s = Ge.length,
      a = G.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = Xe || j(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = 1 - (n / l.duration || 0),
            o = 0,
            s = l.tweens.length;
          s > o;
          o++
        )
          l.tweens[o].run(r);
        return (
          a.notifyWith(e, [l, r, n]),
          1 > r && s ? n : (a.resolveWith(e, [l]), !1)
        );
      },
      l = a.promise({
        elem: e,
        props: G.extend({}, t),
        opts: G.extend(!0, { specialEasing: {} }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Xe || j(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = G.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing
          );
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; r > n; n++) l.tweens[n].run(1);
          return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this;
        },
      }),
      c = l.props;
    for (
      (function (e, t) {
        var n, r, i, o, s;
        for (n in e)
          if (
            ((i = t[(r = G.camelCase(n))]),
            (o = e[n]),
            G.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (s = G.cssHooks[r]) && ("expand" in s))
          )
            for (n in ((o = s.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      s > o;
      o++
    )
      if ((r = Ge[o].call(l, e, c, l.opts))) return r;
    return (
      G.map(c, A, l),
      G.isFunction(l.opts.start) && l.opts.start.call(e, l),
      G.fx.timer(G.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always)
    );
  }
  function q(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(ue) || [];
      if (G.isFunction(n))
        for (; (r = o[i++]); )
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function H(e, t, n, r) {
    function i(a) {
      var u;
      return (
        (o[a] = !0),
        G.each(e[a] || [], function (e, a) {
          var l = a(t, n, r);
          return "string" != typeof l || s || o[l]
            ? s
              ? !(u = l)
              : void 0
            : (t.dataTypes.unshift(l), i(l), !1);
        }),
        u
      );
    }
    var o = {},
      s = e === dt;
    return i(t.dataTypes[0]) || (!o["*"] && i("*"));
  }
  function O(e, t) {
    var n,
      r,
      i = G.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && G.extend(!0, e, r), e;
  }
  function F(e, t, n, r) {
    var i;
    if (G.isArray(t))
      G.each(t, function (t, i) {
        n || mt.test(e)
          ? r(e, i)
          : F(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
      });
    else if (n || "object" !== G.type(t)) r(e, t);
    else for (i in t) F(e + "[" + i + "]", t[i], n, r);
  }
  function P(e) {
    return G.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  var M = [],
    R = M.slice,
    W = M.concat,
    $ = M.push,
    B = M.indexOf,
    I = {},
    _ = I.toString,
    X = I.hasOwnProperty,
    z = "".trim,
    U = {},
    V = e.document,
    Y = "2.1.0",
    G = function (e, t) {
      return new G.fn.init(e, t);
    },
    Q = /^-ms-/,
    J = /-([\da-z])/gi,
    K = function (e, t) {
      return t.toUpperCase();
    };
  (G.fn = G.prototype =
    {
      jquery: Y,
      constructor: G,
      selector: "",
      length: 0,
      toArray: function () {
        return R.call(this);
      },
      get: function (e) {
        return null != e
          ? 0 > e
            ? this[e + this.length]
            : this[e]
          : R.call(this);
      },
      pushStack: function (e) {
        var t = G.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e, t) {
        return G.each(this, e, t);
      },
      map: function (e) {
        return this.pushStack(
          G.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(R.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: $,
      sort: M.sort,
      splice: M.splice,
    }),
    (G.extend = G.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          s = arguments[0] || {},
          a = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof s && ((l = s), (s = arguments[a] || {}), a++),
            "object" == typeof s || G.isFunction(s) || (s = {}),
            a === u && ((s = this), a--);
          u > a;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (n = s[t]),
                s !== (r = e[t]) &&
                  (l && r && (G.isPlainObject(r) || (i = G.isArray(r)))
                    ? (i
                        ? ((i = !1), (o = n && G.isArray(n) ? n : []))
                        : (o = n && G.isPlainObject(n) ? n : {}),
                      (s[t] = G.extend(l, o, r)))
                    : void 0 !== r && (s[t] = r));
        return s;
      }),
    G.extend({
      expando: "jQuery" + (Y + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === G.type(e);
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        return e - parseFloat(e) >= 0;
      },
      isPlainObject: function (e) {
        if ("object" !== G.type(e) || e.nodeType || G.isWindow(e)) return !1;
        try {
          if (
            e.constructor &&
            !X.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (e) {
          return !1;
        }
        return !0;
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? I[_.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (e) {
        var t,
          n = eval;
        (e = G.trim(e)) &&
          (1 === e.indexOf("use strict")
            ? (((t = V.createElement("script")).text = e),
              V.head.appendChild(t).parentNode.removeChild(t))
            : n(e));
      },
      camelCase: function (e) {
        return e.replace(Q, "ms-").replace(J, K);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t, r) {
        var i = 0,
          o = e.length,
          s = n(e);
        if (r) {
          if (s) for (; o > i && !1 !== t.apply(e[i], r); i++);
          else for (i in e) if (!1 === t.apply(e[i], r)) break;
        } else if (s) for (; o > i && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : z.call(e);
      },
      makeArray: function (e, t) {
        var r = t || [];
        return (
          null != e &&
            (n(Object(e))
              ? G.merge(r, "string" == typeof e ? [e] : e)
              : $.call(r, e)),
          r
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : B.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, s = !n; o > i; i++)
          !t(e[i], i) !== s && r.push(e[i]);
        return r;
      },
      map: function (e, t, r) {
        var i,
          o = 0,
          s = e.length,
          a = [];
        if (n(e)) for (; s > o; o++) null != (i = t(e[o], o, r)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, r)) && a.push(i);
        return W.apply([], a);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r, i;
        return (
          "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
          G.isFunction(e)
            ? ((r = R.call(arguments, 2)),
              ((i = function () {
                return e.apply(t || this, r.concat(R.call(arguments)));
              }).guid = e.guid =
                e.guid || G.guid++),
              i)
            : void 0
        );
      },
      now: Date.now,
      support: U,
    }),
    G.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (e, t) {
        I["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var Z = (function (e) {
    function t(e, t, n, r) {
      var i, o, s, a, u, l, f, h, g, m;
      if (
        ((t ? t.ownerDocument || t : W) !== L && A(t),
        (n = n || []),
        !e || "string" != typeof e)
      )
        return n;
      if (1 !== (a = (t = t || L).nodeType) && 9 !== a) return [];
      if (H && !r) {
        if ((i = ve.exec(e)))
          if ((s = i[1])) {
            if (9 === a) {
              if (!(o = t.getElementById(s)) || !o.parentNode) return n;
              if (o.id === s) return n.push(o), n;
            } else if (
              t.ownerDocument &&
              (o = t.ownerDocument.getElementById(s)) &&
              M(t, o) &&
              o.id === s
            )
              return n.push(o), n;
          } else {
            if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
            if (
              (s = i[3]) &&
              T.getElementsByClassName &&
              t.getElementsByClassName
            )
              return K.apply(n, t.getElementsByClassName(s)), n;
          }
        if (T.qsa && (!O || !O.test(e))) {
          if (
            ((h = f = R),
            (g = t),
            (m = 9 === a && e),
            1 === a && "object" !== t.nodeName.toLowerCase())
          ) {
            for (
              l = p(e),
                (f = t.getAttribute("id"))
                  ? (h = f.replace(xe, "\\$&"))
                  : t.setAttribute("id", h),
                h = "[id='" + h + "'] ",
                u = l.length;
              u--;

            )
              l[u] = h + d(l[u]);
            (g = (ye.test(e) && c(t.parentNode)) || t), (m = l.join(","));
          }
          if (m)
            try {
              return K.apply(n, g.querySelectorAll(m)), n;
            } catch (e) {
            } finally {
              f || t.removeAttribute("id");
            }
        }
      }
      return b(e.replace(ae, "$1"), t, n, r);
    }
    function n() {
      var e = [];
      return function t(n, r) {
        return (
          e.push(n + " ") > C.cacheLength && delete t[e.shift()],
          (t[n + " "] = r)
        );
      };
    }
    function r(e) {
      return (e[R] = !0), e;
    }
    function i(e) {
      var t = L.createElement("div");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function o(e, t) {
      for (var n = e.split("|"), r = e.length; r--; ) C.attrHandle[n[r]] = t;
    }
    function s(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || V) - (~e.sourceIndex || V);
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function a(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function u(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function l(e) {
      return r(function (t) {
        return (
          (t = +t),
          r(function (n, r) {
            for (var i, o = e([], n.length, t), s = o.length; s--; )
              n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function c(e) {
      return e && typeof e.getElementsByTagName !== U && e;
    }
    function f() {}
    function p(e, n) {
      var r,
        i,
        o,
        s,
        a,
        u,
        l,
        c = _[e + " "];
      if (c) return n ? 0 : c.slice(0);
      for (a = e, u = [], l = C.preFilter; a; ) {
        for (s in ((!r || (i = ue.exec(a))) &&
          (i && (a = a.slice(i[0].length) || a), u.push((o = []))),
        (r = !1),
        (i = le.exec(a)) &&
          ((r = i.shift()),
          o.push({ value: r, type: i[0].replace(ae, " ") }),
          (a = a.slice(r.length))),
        C.filter))
          !(i = de[s].exec(a)) ||
            (l[s] && !(i = l[s](i))) ||
            ((r = i.shift()),
            o.push({ value: r, type: s, matches: i }),
            (a = a.slice(r.length)));
        if (!r) break;
      }
      return n ? a.length : a ? t.error(e) : _(e, u).slice(0);
    }
    function d(e) {
      for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
      return r;
    }
    function h(e, t, n) {
      var r = t.dir,
        i = n && "parentNode" === r,
        o = B++;
      return t.first
        ? function (t, n, o) {
            for (; (t = t[r]); ) if (1 === t.nodeType || i) return e(t, n, o);
          }
        : function (t, n, s) {
            var a,
              u,
              l = [$, o];
            if (s) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || i) && e(t, n, s)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || i) {
                  if (
                    (a = (u = t[R] || (t[R] = {}))[r]) &&
                    a[0] === $ &&
                    a[1] === o
                  )
                    return (l[2] = a[2]);
                  if (((u[r] = l), (l[2] = e(t, n, s)))) return !0;
                }
          };
    }
    function g(e) {
      return e.length > 1
        ? function (t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function m(e, t, n, r, i) {
      for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)
        (o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
      return s;
    }
    function v(e, n, i, o, s, a) {
      return (
        o && !o[R] && (o = v(o)),
        s && !s[R] && (s = v(s, a)),
        r(function (r, a, u, l) {
          var c,
            f,
            p,
            d = [],
            h = [],
            g = a.length,
            v =
              r ||
              (function (e, n, r) {
                for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
                return r;
              })(n || "*", u.nodeType ? [u] : u, []),
            y = !e || (!r && n) ? v : m(v, d, e, u, l),
            x = i ? (s || (r ? e : g || o) ? [] : a) : y;
          if ((i && i(y, x, u, l), o))
            for (c = m(x, h), o(c, [], u, l), f = c.length; f--; )
              (p = c[f]) && (x[h[f]] = !(y[h[f]] = p));
          if (r) {
            if (s || e) {
              if (s) {
                for (c = [], f = x.length; f--; )
                  (p = x[f]) && c.push((y[f] = p));
                s(null, (x = []), c, l);
              }
              for (f = x.length; f--; )
                (p = x[f]) &&
                  (c = s ? ee.call(r, p) : d[f]) > -1 &&
                  (r[c] = !(a[c] = p));
            }
          } else (x = m(x === a ? x.splice(g, x.length) : x)), s ? s(null, a, x, l) : K.apply(a, x);
        })
      );
    }
    function y(e) {
      for (
        var t,
          n,
          r,
          i = e.length,
          o = C.relative[e[0].type],
          s = o || C.relative[" "],
          a = o ? 1 : 0,
          u = h(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          l = h(
            function (e) {
              return ee.call(t, e) > -1;
            },
            s,
            !0
          ),
          c = [
            function (e, n, r) {
              return (
                (!o && (r || n !== D)) ||
                ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
              );
            },
          ];
        i > a;
        a++
      )
        if ((n = C.relative[e[a].type])) c = [h(g(c), n)];
        else {
          if ((n = C.filter[e[a].type].apply(null, e[a].matches))[R]) {
            for (r = ++a; i > r && !C.relative[e[r].type]; r++);
            return v(
              a > 1 && g(c),
              a > 1 &&
                d(
                  e
                    .slice(0, a - 1)
                    .concat({ value: " " === e[a - 2].type ? "*" : "" })
                ).replace(ae, "$1"),
              n,
              r > a && y(e.slice(a, r)),
              i > r && y((e = e.slice(r))),
              i > r && d(e)
            );
          }
          c.push(n);
        }
      return g(c);
    }
    function x(e, n) {
      var i = n.length > 0,
        o = e.length > 0,
        s = function (r, s, a, u, l) {
          var c,
            f,
            p,
            d = 0,
            h = "0",
            g = r && [],
            v = [],
            y = D,
            x = r || (o && C.find.TAG("*", l)),
            b = ($ += null == y ? 1 : Math.random() || 0.1),
            w = x.length;
          for (l && (D = s !== L && s); h !== w && null != (c = x[h]); h++) {
            if (o && c) {
              for (f = 0; (p = e[f++]); )
                if (p(c, s, a)) {
                  u.push(c);
                  break;
                }
              l && ($ = b);
            }
            i && ((c = !p && c) && d--, r && g.push(c));
          }
          if (((d += h), i && h !== d)) {
            for (f = 0; (p = n[f++]); ) p(g, v, s, a);
            if (r) {
              if (d > 0) for (; h--; ) g[h] || v[h] || (v[h] = Q.call(u));
              v = m(v);
            }
            K.apply(u, v),
              l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u);
          }
          return l && (($ = b), (D = y)), g;
        };
      return i ? r(s) : s;
    }
    function b(e, t, n, r) {
      var i,
        o,
        s,
        a,
        u,
        l = p(e);
      if (!r && 1 === l.length) {
        if (
          (o = l[0] = l[0].slice(0)).length > 2 &&
          "ID" === (s = o[0]).type &&
          T.getById &&
          9 === t.nodeType &&
          H &&
          C.relative[o[1].type]
        ) {
          if (!(t = (C.find.ID(s.matches[0].replace(be, we), t) || [])[0]))
            return n;
          e = e.slice(o.shift().value.length);
        }
        for (
          i = de.needsContext.test(e) ? 0 : o.length;
          i-- && ((s = o[i]), !C.relative[(a = s.type)]);

        )
          if (
            (u = C.find[a]) &&
            (r = u(
              s.matches[0].replace(be, we),
              (ye.test(o[0].type) && c(t.parentNode)) || t
            ))
          ) {
            if ((o.splice(i, 1), !(e = r.length && d(o))))
              return K.apply(n, r), n;
            break;
          }
      }
      return E(e, l)(r, t, !H, n, (ye.test(e) && c(t.parentNode)) || t), n;
    }
    var w,
      T,
      C,
      N,
      k,
      E,
      D,
      j,
      S,
      A,
      L,
      q,
      H,
      O,
      F,
      P,
      M,
      R = "sizzle" + -new Date(),
      W = e.document,
      $ = 0,
      B = 0,
      I = n(),
      _ = n(),
      X = n(),
      z = function (e, t) {
        return e === t && (S = !0), 0;
      },
      U = "undefined",
      V = 1 << 31,
      Y = {}.hasOwnProperty,
      G = [],
      Q = G.pop,
      J = G.push,
      K = G.push,
      Z = G.slice,
      ee =
        G.indexOf ||
        function (e) {
          for (var t = 0, n = this.length; n > t; t++)
            if (this[t] === e) return t;
          return -1;
        },
      te =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ne = "[\\x20\\t\\r\\n\\f]",
      re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ie = re.replace("w", "w#"),
      oe =
        "\\[" +
        ne +
        "*(" +
        re +
        ")" +
        ne +
        "*(?:([*^$|!~]?=)" +
        ne +
        "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
        ie +
        ")|)|)" +
        ne +
        "*\\]",
      se =
        ":(" +
        re +
        ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
        oe.replace(3, 8) +
        ")*)|.*)\\)|)",
      ae = new RegExp(
        "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
        "g"
      ),
      ue = new RegExp("^" + ne + "*," + ne + "*"),
      le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
      ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
      fe = new RegExp(se),
      pe = new RegExp("^" + ie + "$"),
      de = {
        ID: new RegExp("^#(" + re + ")"),
        CLASS: new RegExp("^\\.(" + re + ")"),
        TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + oe),
        PSEUDO: new RegExp("^" + se),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ne +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ne +
            "*(?:([+-]|)" +
            ne +
            "*(\\d+)|))" +
            ne +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + te + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ne +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ne +
            "*((?:-\\d)?\\d*)" +
            ne +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      he = /^(?:input|select|textarea|button)$/i,
      ge = /^h\d$/i,
      me = /^[^{]+\{\s*\[native \w/,
      ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ye = /[+~]/,
      xe = /'|\\/g,
      be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
      we = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n
          ? t
          : 0 > r
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      };
    try {
      K.apply((G = Z.call(W.childNodes)), W.childNodes),
        G[W.childNodes.length].nodeType;
    } catch (e) {
      K = {
        apply: G.length
          ? function (e, t) {
              J.apply(e, Z.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    for (w in ((T = t.support = {}),
    (k = t.isXML =
      function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName;
      }),
    (A = t.setDocument =
      function (e) {
        var t,
          n = e ? e.ownerDocument || e : W,
          r = n.defaultView;
        return n !== L && 9 === n.nodeType && n.documentElement
          ? ((L = n),
            (q = n.documentElement),
            (H = !k(n)),
            r &&
              r !== r.top &&
              (r.addEventListener
                ? r.addEventListener(
                    "unload",
                    function () {
                      A();
                    },
                    !1
                  )
                : r.attachEvent &&
                  r.attachEvent("onunload", function () {
                    A();
                  })),
            (T.attributes = i(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (T.getElementsByTagName = i(function (e) {
              return (
                e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (T.getElementsByClassName =
              me.test(n.getElementsByClassName) &&
              i(function (e) {
                return (
                  (e.innerHTML =
                    "<div class='a'></div><div class='a i'></div>"),
                  (e.firstChild.className = "i"),
                  2 === e.getElementsByClassName("i").length
                );
              })),
            (T.getById = i(function (e) {
              return (
                (q.appendChild(e).id = R),
                !n.getElementsByName || !n.getElementsByName(R).length
              );
            })),
            T.getById
              ? ((C.find.ID = function (e, t) {
                  if (typeof t.getElementById !== U && H) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : [];
                  }
                }),
                (C.filter.ID = function (e) {
                  var t = e.replace(be, we);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }))
              : (delete C.find.ID,
                (C.filter.ID = function (e) {
                  var t = e.replace(be, we);
                  return function (e) {
                    var n =
                      typeof e.getAttributeNode !== U &&
                      e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                })),
            (C.find.TAG = T.getElementsByTagName
              ? function (e, t) {
                  return typeof t.getElementsByTagName !== U
                    ? t.getElementsByTagName(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (C.find.CLASS =
              T.getElementsByClassName &&
              function (e, t) {
                return typeof t.getElementsByClassName !== U && H
                  ? t.getElementsByClassName(e)
                  : void 0;
              }),
            (F = []),
            (O = []),
            (T.qsa = me.test(n.querySelectorAll)) &&
              (i(function (e) {
                (e.innerHTML =
                  "<select t=''><option selected=''></option></select>"),
                  e.querySelectorAll("[t^='']").length &&
                    O.push("[*^$]=" + ne + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    O.push("\\[" + ne + "*(?:value|" + te + ")"),
                  e.querySelectorAll(":checked").length || O.push(":checked");
              }),
              i(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    O.push("name" + ne + "*[*^$|!~]?="),
                  e.querySelectorAll(":enabled").length ||
                    O.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  O.push(",.*:");
              })),
            (T.matchesSelector = me.test(
              (P =
                q.webkitMatchesSelector ||
                q.mozMatchesSelector ||
                q.oMatchesSelector ||
                q.msMatchesSelector)
            )) &&
              i(function (e) {
                (T.disconnectedMatch = P.call(e, "div")),
                  P.call(e, "[s!='']:x"),
                  F.push("!=", se);
              }),
            (O = O.length && new RegExp(O.join("|"))),
            (F = F.length && new RegExp(F.join("|"))),
            (t = me.test(q.compareDocumentPosition)),
            (M =
              t || me.test(q.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (z = t
              ? function (e, t) {
                  if (e === t) return (S = !0), 0;
                  var r =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    r ||
                    (1 &
                      (r =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!T.sortDetached && t.compareDocumentPosition(e) === r)
                      ? e === n || (e.ownerDocument === W && M(W, e))
                        ? -1
                        : t === n || (t.ownerDocument === W && M(W, t))
                        ? 1
                        : j
                        ? ee.call(j, e) - ee.call(j, t)
                        : 0
                      : 4 & r
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (S = !0), 0;
                  var r,
                    i = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    u = [e],
                    l = [t];
                  if (!o || !a)
                    return e === n
                      ? -1
                      : t === n
                      ? 1
                      : o
                      ? -1
                      : a
                      ? 1
                      : j
                      ? ee.call(j, e) - ee.call(j, t)
                      : 0;
                  if (o === a) return s(e, t);
                  for (r = e; (r = r.parentNode); ) u.unshift(r);
                  for (r = t; (r = r.parentNode); ) l.unshift(r);
                  for (; u[i] === l[i]; ) i++;
                  return i
                    ? s(u[i], l[i])
                    : u[i] === W
                    ? -1
                    : l[i] === W
                    ? 1
                    : 0;
                }),
            n)
          : L;
      }),
    (t.matches = function (e, n) {
      return t(e, null, null, n);
    }),
    (t.matchesSelector = function (e, n) {
      if (
        ((e.ownerDocument || e) !== L && A(e),
        (n = n.replace(ce, "='$1']")),
        !(!T.matchesSelector || !H || (F && F.test(n)) || (O && O.test(n))))
      )
        try {
          var r = P.call(e, n);
          if (
            r ||
            T.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return r;
        } catch (e) {}
      return t(n, L, null, [e]).length > 0;
    }),
    (t.contains = function (e, t) {
      return (e.ownerDocument || e) !== L && A(e), M(e, t);
    }),
    (t.attr = function (e, t) {
      (e.ownerDocument || e) !== L && A(e);
      var n = C.attrHandle[t.toLowerCase()],
        r = n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
      return void 0 !== r
        ? r
        : T.attributes || !H
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (t.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (t.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((S = !T.detectDuplicates),
        (j = !T.sortStable && e.slice(0)),
        e.sort(z),
        S)
      ) {
        for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
        for (; r--; ) e.splice(n[r], 1);
      }
      return (j = null), e;
    }),
    (N = t.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += N(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else for (; (t = e[r++]); ) n += N(t);
        return n;
      }),
    ((C = t.selectors =
      {
        cacheLength: 50,
        createPseudo: r,
        match: de,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(be, we)),
              (e[3] = (e[4] || e[5] || "").replace(be, we)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || t.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && t.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[5] && e[2];
            return de.CHILD.test(e[0])
              ? null
              : (e[3] && void 0 !== e[4]
                  ? (e[2] = e[4])
                  : n &&
                    fe.test(n) &&
                    (t = p(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(be, we).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = I[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
                I(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (typeof e.getAttribute !== U &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, n, r) {
            return function (i) {
              var o = t.attr(i, e);
              return null == o
                ? "!=" === n
                : !n ||
                    ((o += ""),
                    "=" === n
                      ? o === r
                      : "!=" === n
                      ? o !== r
                      : "^=" === n
                      ? r && 0 === o.indexOf(r)
                      : "*=" === n
                      ? r && o.indexOf(r) > -1
                      : "$=" === n
                      ? r && o.slice(-r.length) === r
                      : "~=" === n
                      ? (" " + o + " ").indexOf(r) > -1
                      : "|=" === n &&
                        (o === r || o.slice(0, r.length + 1) === r + "-"));
            };
          },
          CHILD: function (e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === r && 0 === i
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, u) {
                  var l,
                    c,
                    f,
                    p,
                    d,
                    h,
                    g = o !== s ? "nextSibling" : "previousSibling",
                    m = t.parentNode,
                    v = a && t.nodeName.toLowerCase(),
                    y = !u && !a;
                  if (m) {
                    if (o) {
                      for (; g; ) {
                        for (f = t; (f = f[g]); )
                          if (
                            a
                              ? f.nodeName.toLowerCase() === v
                              : 1 === f.nodeType
                          )
                            return !1;
                        h = g = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [s ? m.firstChild : m.lastChild]), s && y)) {
                      for (
                        d =
                          (l = (c = m[R] || (m[R] = {}))[e] || [])[0] === $ &&
                          l[1],
                          p = l[0] === $ && l[2],
                          f = d && m.childNodes[d];
                        (f = (++d && f && f[g]) || (p = d = 0) || h.pop());

                      )
                        if (1 === f.nodeType && ++p && f === t) {
                          c[e] = [$, d, p];
                          break;
                        }
                    } else if (
                      y &&
                      (l = (t[R] || (t[R] = {}))[e]) &&
                      l[0] === $
                    )
                      p = l[1];
                    else
                      for (
                        ;
                        (f = (++d && f && f[g]) || (p = d = 0) || h.pop()) &&
                        ((a
                          ? f.nodeName.toLowerCase() !== v
                          : 1 !== f.nodeType) ||
                          !++p ||
                          (y && ((f[R] || (f[R] = {}))[e] = [$, p]), f !== t));

                      );
                    return (p -= i) === r || (p % r == 0 && p / r >= 0);
                  }
                };
          },
          PSEUDO: function (e, n) {
            var i,
              o =
                C.pseudos[e] ||
                C.setFilters[e.toLowerCase()] ||
                t.error("unsupported pseudo: " + e);
            return o[R]
              ? o(n)
              : o.length > 1
              ? ((i = [e, e, "", n]),
                C.setFilters.hasOwnProperty(e.toLowerCase())
                  ? r(function (e, t) {
                      for (var r, i = o(e, n), s = i.length; s--; )
                        e[(r = ee.call(e, i[s]))] = !(t[r] = i[s]);
                    })
                  : function (e) {
                      return o(e, 0, i);
                    })
              : o;
          },
        },
        pseudos: {
          not: r(function (e) {
            var t = [],
              n = [],
              i = E(e.replace(ae, "$1"));
            return i[R]
              ? r(function (e, t, n, r) {
                  for (var o, s = i(e, null, r, []), a = e.length; a--; )
                    (o = s[a]) && (e[a] = !(t[a] = o));
                })
              : function (e, r, o) {
                  return (t[0] = e), i(t, null, o, n), !n.pop();
                };
          }),
          has: r(function (e) {
            return function (n) {
              return t(e, n).length > 0;
            };
          }),
          contains: r(function (e) {
            return function (t) {
              return (t.textContent || t.innerText || N(t)).indexOf(e) > -1;
            };
          }),
          lang: r(function (e) {
            return (
              pe.test(e || "") || t.error("unsupported lang: " + e),
              (e = e.replace(be, we).toLowerCase()),
              function (t) {
                var n;
                do
                  if (
                    (n = H
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === q;
          },
          focus: function (e) {
            return (
              e === L.activeElement &&
              (!L.hasFocus || L.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: function (e) {
            return !1 === e.disabled;
          },
          disabled: function (e) {
            return !0 === e.disabled;
          },
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !C.pseudos.empty(e);
          },
          header: function (e) {
            return ge.test(e.nodeName);
          },
          input: function (e) {
            return he.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: l(function () {
            return [0];
          }),
          last: l(function (e, t) {
            return [t - 1];
          }),
          eq: l(function (e, t, n) {
            return [0 > n ? n + t : n];
          }),
          even: l(function (e, t) {
            for (var n = 0; t > n; n += 2) e.push(n);
            return e;
          }),
          odd: l(function (e, t) {
            for (var n = 1; t > n; n += 2) e.push(n);
            return e;
          }),
          lt: l(function (e, t, n) {
            for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
            return e;
          }),
          gt: l(function (e, t, n) {
            for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = C.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      C.pseudos[w] = a(w);
    for (w in { submit: !0, reset: !0 }) C.pseudos[w] = u(w);
    return (
      (f.prototype = C.filters = C.pseudos),
      (C.setFilters = new f()),
      (E = t.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = X[e + " "];
          if (!o) {
            for (t || (t = p(e)), n = t.length; n--; )
              (o = y(t[n]))[R] ? r.push(o) : i.push(o);
            o = X(e, x(i, r));
          }
          return o;
        }),
      (T.sortStable = R.split("").sort(z).join("") === R),
      (T.detectDuplicates = !!S),
      A(),
      (T.sortDetached = i(function (e) {
        return 1 & e.compareDocumentPosition(L.createElement("div"));
      })),
      i(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        o("type|href|height|width", function (e, t, n) {
          return n
            ? void 0
            : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (T.attributes &&
        i(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        o("value", function (e, t, n) {
          return n || "input" !== e.nodeName.toLowerCase()
            ? void 0
            : e.defaultValue;
        }),
      i(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        o(te, function (e, t, n) {
          var r;
          return n
            ? void 0
            : !0 === e[t]
            ? t.toLowerCase()
            : (r = e.getAttributeNode(t)) && r.specified
            ? r.value
            : null;
        }),
      t
    );
  })(e);
  (G.find = Z),
    (G.expr = Z.selectors),
    (G.expr[":"] = G.expr.pseudos),
    (G.unique = Z.uniqueSort),
    (G.text = Z.getText),
    (G.isXMLDoc = Z.isXML),
    (G.contains = Z.contains);
  var ee = G.expr.match.needsContext,
    te = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ne = /^.[^:#\[\.,]*$/;
  (G.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? G.find.matchesSelector(r, e)
          ? [r]
          : []
        : G.find.matches(
            e,
            G.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    G.fn.extend({
      find: function (e) {
        var t,
          n = this.length,
          r = [],
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            G(e).filter(function () {
              for (t = 0; n > t; t++) if (G.contains(i[t], this)) return !0;
            })
          );
        for (t = 0; n > t; t++) G.find(e, i[t], r);
        return (
          ((r = this.pushStack(n > 1 ? G.unique(r) : r)).selector = this
            .selector
            ? this.selector + " " + e
            : e),
          r
        );
      },
      filter: function (e) {
        return this.pushStack(r(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(r(this, e || [], !0));
      },
      is: function (e) {
        return !!r(
          this,
          "string" == typeof e && ee.test(e) ? G(e) : e || [],
          !1
        ).length;
      },
    });
  var re,
    ie = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((G.fn.init = function (e, t) {
    var n, r;
    if (!e) return this;
    if ("string" == typeof e) {
      if (
        !(n =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : ie.exec(e)) ||
        (!n[1] && t)
      )
        return !t || t.jquery ? (t || re).find(e) : this.constructor(t).find(e);
      if (n[1]) {
        if (
          ((t = t instanceof G ? t[0] : t),
          G.merge(
            this,
            G.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : V, !0)
          ),
          te.test(n[1]) && G.isPlainObject(t))
        )
          for (n in t)
            G.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
        return this;
      }
      return (
        (r = V.getElementById(n[2])) &&
          r.parentNode &&
          ((this.length = 1), (this[0] = r)),
        (this.context = V),
        (this.selector = e),
        this
      );
    }
    return e.nodeType
      ? ((this.context = this[0] = e), (this.length = 1), this)
      : G.isFunction(e)
      ? void 0 !== re.ready
        ? re.ready(e)
        : e(G)
      : (void 0 !== e.selector &&
          ((this.selector = e.selector), (this.context = e.context)),
        G.makeArray(e, this));
  }).prototype = G.fn),
    (re = G(V));
  var oe = /^(?:parents|prev(?:Until|All))/,
    se = { children: !0, contents: !0, next: !0, prev: !0 };
  G.extend({
    dir: function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && G(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
  }),
    G.fn.extend({
      has: function (e) {
        var t = G(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; n > e; e++) if (G.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        for (
          var n,
            r = 0,
            i = this.length,
            o = [],
            s =
              ee.test(e) || "string" != typeof e ? G(e, t || this.context) : 0;
          i > r;
          r++
        )
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? s.index(n) > -1
                : 1 === n.nodeType && G.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
        return this.pushStack(o.length > 1 ? G.unique(o) : o);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? B.call(G(e), this[0])
            : B.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(G.unique(G.merge(this.get(), G(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
    G.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return G.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return G.dir(e, "parentNode", n);
        },
        next: function (e) {
          return i(e, "nextSibling");
        },
        prev: function (e) {
          return i(e, "previousSibling");
        },
        nextAll: function (e) {
          return G.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return G.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return G.dir(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return G.dir(e, "previousSibling", n);
        },
        siblings: function (e) {
          return G.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return G.sibling(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument || G.merge([], e.childNodes);
        },
      },
      function (e, t) {
        G.fn[e] = function (n, r) {
          var i = G.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = G.filter(r, i)),
            this.length > 1 &&
              (se[e] || G.unique(i), oe.test(e) && i.reverse()),
            this.pushStack(i)
          );
        };
      }
    );
  var ae,
    ue = /\S+/g,
    le = {};
  (G.Callbacks = function (e) {
    e =
      "string" == typeof e
        ? le[e] ||
          (function (e) {
            var t = (le[e] = {});
            return (
              G.each(e.match(ue) || [], function (e, n) {
                t[n] = !0;
              }),
              t
            );
          })(e)
        : G.extend({}, e);
    var t,
      n,
      r,
      i,
      o,
      s,
      a = [],
      u = !e.once && [],
      l = function (f) {
        for (
          t = e.memory && f, n = !0, s = i || 0, i = 0, o = a.length, r = !0;
          a && o > s;
          s++
        )
          if (!1 === a[s].apply(f[0], f[1]) && e.stopOnFalse) {
            t = !1;
            break;
          }
        (r = !1),
          a && (u ? u.length && l(u.shift()) : t ? (a = []) : c.disable());
      },
      c = {
        add: function () {
          if (a) {
            var n = a.length;
            !(function s(t) {
              G.each(t, function (t, n) {
                var r = G.type(n);
                "function" === r
                  ? (e.unique && c.has(n)) || a.push(n)
                  : n && n.length && "string" !== r && s(n);
              });
            })(arguments),
              r ? (o = a.length) : t && ((i = n), l(t));
          }
          return this;
        },
        remove: function () {
          return (
            a &&
              G.each(arguments, function (e, t) {
                for (var n; (n = G.inArray(t, a, n)) > -1; )
                  a.splice(n, 1), r && (o >= n && o--, s >= n && s--);
              }),
            this
          );
        },
        has: function (e) {
          return e ? G.inArray(e, a) > -1 : !(!a || !a.length);
        },
        empty: function () {
          return (a = []), (o = 0), this;
        },
        disable: function () {
          return (a = u = t = void 0), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (u = void 0), t || c.disable(), this;
        },
        locked: function () {
          return !u;
        },
        fireWith: function (e, t) {
          return (
            !a ||
              (n && !u) ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              r ? u.push(t) : l(t)),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        },
      };
    return c;
  }),
    G.extend({
      Deferred: function (e) {
        var t = [
            ["resolve", "done", G.Callbacks("once memory"), "resolved"],
            ["reject", "fail", G.Callbacks("once memory"), "rejected"],
            ["notify", "progress", G.Callbacks("memory")],
          ],
          n = "pending",
          r = {
            state: function () {
              return n;
            },
            always: function () {
              return i.done(arguments).fail(arguments), this;
            },
            then: function () {
              var e = arguments;
              return G.Deferred(function (n) {
                G.each(t, function (t, o) {
                  var s = G.isFunction(e[t]) && e[t];
                  i[o[1]](function () {
                    var e = s && s.apply(this, arguments);
                    e && G.isFunction(e.promise)
                      ? e
                          .promise()
                          .done(n.resolve)
                          .fail(n.reject)
                          .progress(n.notify)
                      : n[o[0] + "With"](
                          this === r ? n.promise() : this,
                          s ? [e] : arguments
                        );
                  });
                }),
                  (e = null);
              }).promise();
            },
            promise: function (e) {
              return null != e ? G.extend(e, r) : r;
            },
          },
          i = {};
        return (
          (r.pipe = r.then),
          G.each(t, function (e, o) {
            var s = o[2],
              a = o[3];
            (r[o[1]] = s.add),
              a &&
                s.add(
                  function () {
                    n = a;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (i[o[0]] = function () {
                return i[o[0] + "With"](this === i ? r : this, arguments), this;
              }),
              (i[o[0] + "With"] = s.fireWith);
          }),
          r.promise(i),
          e && e.call(i, i),
          i
        );
      },
      when: function (e) {
        var t,
          n,
          r,
          i = 0,
          o = R.call(arguments),
          s = o.length,
          a = 1 !== s || (e && G.isFunction(e.promise)) ? s : 0,
          u = 1 === a ? e : G.Deferred(),
          l = function (e, n, r) {
            return function (i) {
              (n[e] = this),
                (r[e] = arguments.length > 1 ? R.call(arguments) : i),
                r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r);
            };
          };
        if (s > 1)
          for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++)
            o[i] && G.isFunction(o[i].promise)
              ? o[i]
                  .promise()
                  .done(l(i, r, o))
                  .fail(u.reject)
                  .progress(l(i, n, t))
              : --a;
        return a || u.resolveWith(r, o), u.promise();
      },
    }),
    (G.fn.ready = function (e) {
      return G.ready.promise().done(e), this;
    }),
    G.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? G.readyWait++ : G.ready(!0);
      },
      ready: function (e) {
        (!0 === e ? --G.readyWait : G.isReady) ||
          ((G.isReady = !0),
          (!0 !== e && --G.readyWait > 0) ||
            (ae.resolveWith(V, [G]),
            G.fn.trigger && G(V).trigger("ready").off("ready")));
      },
    }),
    (G.ready.promise = function (t) {
      return (
        ae ||
          ((ae = G.Deferred()),
          "complete" === V.readyState
            ? setTimeout(G.ready)
            : (V.addEventListener("DOMContentLoaded", o, !1),
              e.addEventListener("load", o, !1))),
        ae.promise(t)
      );
    }),
    G.ready.promise();
  var ce = (G.access = function (e, t, n, r, i, o, s) {
    var a = 0,
      u = e.length,
      l = null == n;
    if ("object" === G.type(n))
      for (a in ((i = !0), n)) G.access(e, t, a, n[a], !0, o, s);
    else if (
      void 0 !== r &&
      ((i = !0),
      G.isFunction(r) || (s = !0),
      l &&
        (s
          ? (t.call(e, r), (t = null))
          : ((l = t),
            (t = function (e, t, n) {
              return l.call(G(e), n);
            }))),
      t)
    )
      for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  });
  (G.acceptData = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }),
    (s.uid = 1),
    (s.accepts = G.acceptData),
    (s.prototype = {
      key: function (e) {
        if (!s.accepts(e)) return 0;
        var t = {},
          n = e[this.expando];
        if (!n) {
          n = s.uid++;
          try {
            (t[this.expando] = { value: n }), Object.defineProperties(e, t);
          } catch (r) {
            (t[this.expando] = n), G.extend(e, t);
          }
        }
        return this.cache[n] || (this.cache[n] = {}), n;
      },
      set: function (e, t, n) {
        var r,
          i = this.key(e),
          o = this.cache[i];
        if ("string" == typeof t) o[t] = n;
        else if (G.isEmptyObject(o)) G.extend(this.cache[i], t);
        else for (r in t) o[r] = t[r];
        return o;
      },
      get: function (e, t) {
        var n = this.cache[this.key(e)];
        return void 0 === t ? n : n[t];
      },
      access: function (e, t, n) {
        var r;
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? void 0 !== (r = this.get(e, t))
            ? r
            : this.get(e, G.camelCase(t))
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r,
          i,
          o = this.key(e),
          s = this.cache[o];
        if (void 0 === t) this.cache[o] = {};
        else {
          G.isArray(t)
            ? (r = t.concat(t.map(G.camelCase)))
            : ((i = G.camelCase(t)),
              (r = t in s ? [t, i] : (r = i) in s ? [r] : r.match(ue) || [])),
            (n = r.length);
          for (; n--; ) delete s[r[n]];
        }
      },
      hasData: function (e) {
        return !G.isEmptyObject(this.cache[e[this.expando]] || {});
      },
      discard: function (e) {
        e[this.expando] && delete this.cache[e[this.expando]];
      },
    });
  var fe = new s(),
    pe = new s(),
    de = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    he = /([A-Z])/g;
  G.extend({
    hasData: function (e) {
      return pe.hasData(e) || fe.hasData(e);
    },
    data: function (e, t, n) {
      return pe.access(e, t, n);
    },
    removeData: function (e, t) {
      pe.remove(e, t);
    },
    _data: function (e, t, n) {
      return fe.access(e, t, n);
    },
    _removeData: function (e, t) {
      fe.remove(e, t);
    },
  }),
    G.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          s = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = pe.get(o)), 1 === o.nodeType && !fe.get(o, "hasDataAttrs"))
          ) {
            for (n = s.length; n--; )
              0 === (r = s[n].name).indexOf("data-") &&
                ((r = G.camelCase(r.slice(5))), a(o, r, i[r]));
            fe.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              pe.set(this, e);
            })
          : ce(
              this,
              function (t) {
                var n,
                  r = G.camelCase(e);
                if (o && void 0 === t) {
                  if (void 0 !== (n = pe.get(o, e))) return n;
                  if (void 0 !== (n = pe.get(o, r))) return n;
                  if (void 0 !== (n = a(o, r, void 0))) return n;
                } else
                  this.each(function () {
                    var n = pe.get(this, r);
                    pe.set(this, r, t),
                      -1 !== e.indexOf("-") &&
                        void 0 !== n &&
                        pe.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          pe.remove(this, e);
        });
      },
    }),
    G.extend({
      queue: function (e, t, n) {
        var r;
        return e
          ? ((t = (t || "fx") + "queue"),
            (r = fe.get(e, t)),
            n &&
              (!r || G.isArray(n)
                ? (r = fe.access(e, t, G.makeArray(n)))
                : r.push(n)),
            r || [])
          : void 0;
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = G.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = G._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                G.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          fe.get(e, n) ||
          fe.access(e, n, {
            empty: G.Callbacks("once memory").add(function () {
              fe.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    G.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? G.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = G.queue(this, e, t);
                G._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && G.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          G.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = G.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --r || i.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (n = fe.get(o[s], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(a));
        return a(), i.promise(t);
      },
    });
  var ge = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    me = ["Top", "Right", "Bottom", "Left"],
    ve = function (e, t) {
      return (
        (e = t || e),
        "none" === G.css(e, "display") || !G.contains(e.ownerDocument, e)
      );
    },
    ye = /^(?:checkbox|radio)$/i;
  !(function () {
    var e = V.createDocumentFragment().appendChild(V.createElement("div"));
    (e.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
      (U.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (U.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var xe = "undefined";
  U.focusinBubbles = "onfocusin" in e;
  var be = /^key/,
    we = /^(?:mouse|contextmenu)|click/,
    Te = /^(?:focusinfocus|focusoutblur)$/,
    Ce = /^([^.]*)(?:\.(.+)|)$/;
  (G.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        m = fe.get(e);
      if (m)
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            n.guid || (n.guid = G.guid++),
            (u = m.events) || (u = m.events = {}),
            (s = m.handle) ||
              (s = m.handle =
                function (t) {
                  return typeof G !== xe && G.event.triggered !== t.type
                    ? G.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            l = (t = (t || "").match(ue) || [""]).length;
          l--;

        )
          (d = g = (a = Ce.exec(t[l]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            d &&
              ((f = G.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = G.event.special[d] || {}),
              (c = G.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && G.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, r, h, s)) ||
                  (e.addEventListener && e.addEventListener(d, s, !1))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (G.event.global[d] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        m = fe.hasData(e) && fe.get(e);
      if (m && (u = m.events)) {
        for (l = (t = (t || "").match(ue) || [""]).length; l--; )
          if (
            ((d = g = (a = Ce.exec(t[l]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            d)
          ) {
            for (
              f = G.event.special[d] || {},
                p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = o = p.length;
              o--;

            )
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (a && !a.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            s &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) ||
                G.removeEvent(e, d, m.handle),
              delete u[d]);
          } else for (d in u) G.event.remove(e, d + t[l], n, r, !0);
        G.isEmptyObject(u) && (delete m.handle, fe.remove(e, "events"));
      }
    },
    trigger: function (t, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        p = [r || V],
        d = X.call(t, "type") ? t.type : t,
        h = X.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = a = r = r || V),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !Te.test(d + G.event.triggered) &&
          (d.indexOf(".") >= 0 &&
            ((h = d.split(".")), (d = h.shift()), h.sort()),
          (l = d.indexOf(":") < 0 && "on" + d),
          ((t = t[G.expando]
            ? t
            : new G.Event(d, "object" == typeof t && t)).isTrigger = i ? 2 : 3),
          (t.namespace = h.join(".")),
          (t.namespace_re = t.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : G.makeArray(n, [t])),
          (f = G.event.special[d] || {}),
          i || !f.trigger || !1 !== f.trigger.apply(r, n)))
      ) {
        if (!i && !f.noBubble && !G.isWindow(r)) {
          for (
            u = f.delegateType || d, Te.test(u + d) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            p.push(s), (a = s);
          a === (r.ownerDocument || V) &&
            p.push(a.defaultView || a.parentWindow || e);
        }
        for (o = 0; (s = p[o++]) && !t.isPropagationStopped(); )
          (t.type = o > 1 ? u : f.bindType || d),
            (c = (fe.get(s, "events") || {})[t.type] && fe.get(s, "handle")) &&
              c.apply(s, n),
            (c = l && s[l]) &&
              c.apply &&
              G.acceptData(s) &&
              ((t.result = c.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = d),
          i ||
            t.isDefaultPrevented() ||
            (f._default && !1 !== f._default.apply(p.pop(), n)) ||
            !G.acceptData(r) ||
            (l &&
              G.isFunction(r[d]) &&
              !G.isWindow(r) &&
              ((a = r[l]) && (r[l] = null),
              (G.event.triggered = d),
              r[d](),
              (G.event.triggered = void 0),
              a && (r[l] = a))),
          t.result
        );
      }
    },
    dispatch: function (e) {
      e = G.event.fix(e);
      var t,
        n,
        r,
        i,
        o,
        s = [],
        a = R.call(arguments),
        u = (fe.get(this, "events") || {})[e.type] || [],
        l = G.event.special[e.type] || {};
      if (
        ((a[0] = e),
        (e.delegateTarget = this),
        !l.preDispatch || !1 !== l.preDispatch.call(this, e))
      ) {
        for (
          s = G.event.handlers.call(this, e, u), t = 0;
          (i = s[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();

          )
            (!e.namespace_re || e.namespace_re.test(o.namespace)) &&
              ((e.handleObj = o),
              (e.data = o.data),
              void 0 !==
                (r = (
                  (G.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, a)) &&
                !1 === (e.result = r) &&
                (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        s = [],
        a = t.delegateCount,
        u = e.target;
      if (a && u.nodeType && (!e.button || "click" !== e.type))
        for (; u !== this; u = u.parentNode || this)
          if (!0 !== u.disabled || "click" !== e.type) {
            for (r = [], n = 0; a > n; n++)
              void 0 === r[(i = (o = t[n]).selector + " ")] &&
                (r[i] = o.needsContext
                  ? G(i, this).index(u) >= 0
                  : G.find(i, this, null, [u]).length),
                r[i] && r.push(o);
            r.length && s.push({ elem: u, handlers: r });
          }
      return a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, t) {
        var n,
          r,
          i,
          o = t.button;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((r = (n = e.target.ownerDocument || V).documentElement),
            (i = n.body),
            (e.pageX =
              t.clientX +
              ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) -
              ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((r && r.scrollTop) || (i && i.scrollTop) || 0) -
              ((r && r.clientTop) || (i && i.clientTop) || 0))),
          e.which ||
            void 0 === o ||
            (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
          e
        );
      },
    },
    fix: function (e) {
      if (e[G.expando]) return e;
      var t,
        n,
        r,
        i = e.type,
        o = e,
        s = this.fixHooks[i];
      for (
        s ||
          (this.fixHooks[i] = s =
            we.test(i) ? this.mouseHooks : be.test(i) ? this.keyHooks : {}),
          r = s.props ? this.props.concat(s.props) : this.props,
          e = new G.Event(o),
          t = r.length;
        t--;

      )
        e[(n = r[t])] = o[n];
      return (
        e.target || (e.target = V),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        s.filter ? s.filter(e, o) : e
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== c() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === c() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            G.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (e) {
          return G.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, n, r) {
      var i = G.extend(new G.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {},
      });
      r ? G.event.trigger(i, null, t) : G.event.dispatch.call(t, i),
        i.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (G.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n, !1);
    }),
    (G.Event = function (e, t) {
      return this instanceof G.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented &&
                  e.getPreventDefault &&
                  e.getPreventDefault())
                  ? u
                  : l))
            : (this.type = e),
          t && G.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || G.now()),
          void (this[G.expando] = !0))
        : new G.Event(e, t);
    }),
    (G.Event.prototype = {
      isDefaultPrevented: l,
      isPropagationStopped: l,
      isImmediatePropagationStopped: l,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = u),
          e && e.preventDefault && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = u),
          e && e.stopPropagation && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = u), this.stopPropagation();
      },
    }),
    G.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (e, t) {
        G.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = e.relatedTarget,
              i = e.handleObj;
            return (
              (!r || (r !== this && !G.contains(this, r))) &&
                ((e.type = i.origType),
                (n = i.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    U.focusinBubbles ||
      G.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          G.event.simulate(t, e.target, G.event.fix(e), !0);
        };
        G.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = fe.access(r, t);
            i || r.addEventListener(e, n, !0), fe.access(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = fe.access(r, t) - 1;
            i
              ? fe.access(r, t, i)
              : (r.removeEventListener(e, n, !0), fe.remove(r, t));
          },
        };
      }),
    G.fn.extend({
      on: function (e, t, n, r, i) {
        var o, s;
        if ("object" == typeof e) {
          for (s in ("string" != typeof t && ((n = n || t), (t = void 0)), e))
            this.on(s, t, n, e[s], i);
          return this;
        }
        if (
          (null == n && null == r
            ? ((r = t), (n = t = void 0))
            : null == r &&
              ("string" == typeof t
                ? ((r = n), (n = void 0))
                : ((r = n), (n = t), (t = void 0))),
          !1 === r)
        )
          r = l;
        else if (!r) return this;
        return (
          1 === i &&
            ((o = r),
            ((r = function (e) {
              return G().off(e), o.apply(this, arguments);
            }).guid = o.guid || (o.guid = G.guid++))),
          this.each(function () {
            G.event.add(this, e, r, n, t);
          })
        );
      },
      one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            G(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 === t || "function" == typeof t) && ((n = t), (t = void 0)),
          !1 === n && (n = l),
          this.each(function () {
            G.event.remove(this, e, n, t);
          })
        );
      },
      trigger: function (e, t) {
        return this.each(function () {
          G.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        return n ? G.event.trigger(e, t, n, !0) : void 0;
      },
    });
  var Ne =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    ke = /<([\w:]+)/,
    Ee = /<|&#?\w+;/,
    De = /<(?:script|style|link)/i,
    je = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Se = /^$|\/(?:java|ecma)script/i,
    Ae = /^true\/(.*)/,
    Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    qe = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (qe.optgroup = qe.option),
    (qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead),
    (qe.th = qe.td),
    G.extend({
      clone: function (e, t, n) {
        var r,
          i,
          o,
          s,
          a = e.cloneNode(!0),
          u = G.contains(e.ownerDocument, e);
        if (
          !(
            U.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            G.isXMLDoc(e)
          )
        )
          for (s = m(a), r = 0, i = (o = m(e)).length; i > r; r++)
            v(o[r], s[r]);
        if (t)
          if (n)
            for (o = o || m(e), s = s || m(a), r = 0, i = o.length; i > r; r++)
              g(o[r], s[r]);
          else g(e, a);
        return (s = m(a, "script")).length > 0 && h(s, !u && m(e, "script")), a;
      },
      buildFragment: function (e, t, n, r) {
        for (
          var i,
            o,
            s,
            a,
            u,
            l,
            c = t.createDocumentFragment(),
            f = [],
            p = 0,
            d = e.length;
          d > p;
          p++
        )
          if ((i = e[p]) || 0 === i)
            if ("object" === G.type(i)) G.merge(f, i.nodeType ? [i] : i);
            else if (Ee.test(i)) {
              for (
                o = o || c.appendChild(t.createElement("div")),
                  s = (ke.exec(i) || ["", ""])[1].toLowerCase(),
                  a = qe[s] || qe._default,
                  o.innerHTML = a[1] + i.replace(Ne, "<$1></$2>") + a[2],
                  l = a[0];
                l--;

              )
                o = o.lastChild;
              G.merge(f, o.childNodes), ((o = c.firstChild).textContent = "");
            } else f.push(t.createTextNode(i));
        for (c.textContent = "", p = 0; (i = f[p++]); )
          if (
            (!r || -1 === G.inArray(i, r)) &&
            ((u = G.contains(i.ownerDocument, i)),
            (o = m(c.appendChild(i), "script")),
            u && h(o),
            n)
          )
            for (l = 0; (i = o[l++]); ) Se.test(i.type || "") && n.push(i);
        return c;
      },
      cleanData: function (e) {
        for (
          var t, n, r, i, o, s, a = G.event.special, u = 0;
          void 0 !== (n = e[u]);
          u++
        ) {
          if (G.acceptData(n) && (o = n[fe.expando]) && (t = fe.cache[o])) {
            if ((r = Object.keys(t.events || {})).length)
              for (s = 0; void 0 !== (i = r[s]); s++)
                a[i] ? G.event.remove(n, i) : G.removeEvent(n, i, t.handle);
            fe.cache[o] && delete fe.cache[o];
          }
          delete pe.cache[n[pe.expando]];
        }
      },
    }),
    G.fn.extend({
      text: function (e) {
        return ce(
          this,
          function (e) {
            return void 0 === e
              ? G.text(this)
              : this.empty().each(function () {
                  (1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType) &&
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            f(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = f(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      remove: function (e, t) {
        for (
          var n, r = e ? G.filter(e, this) : this, i = 0;
          null != (n = r[i]);
          i++
        )
          t || 1 !== n.nodeType || G.cleanData(m(n)),
            n.parentNode &&
              (t && G.contains(n.ownerDocument, n) && h(m(n, "script")),
              n.parentNode.removeChild(n));
        return this;
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (G.cleanData(m(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return G.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return ce(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !De.test(e) &&
              !qe[(ke.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = e.replace(Ne, "<$1></$2>");
              try {
                for (; r > n; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (G.cleanData(m(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = arguments[0];
        return (
          this.domManip(arguments, function (t) {
            (e = this.parentNode),
              G.cleanData(m(this)),
              e && e.replaceChild(t, this);
          }),
          e && (e.length || e.nodeType) ? this : this.remove()
        );
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (e, t) {
        e = W.apply([], e);
        var n,
          r,
          i,
          o,
          s,
          a,
          u = 0,
          l = this.length,
          c = this,
          f = l - 1,
          h = e[0],
          g = G.isFunction(h);
        if (g || (l > 1 && "string" == typeof h && !U.checkClone && je.test(h)))
          return this.each(function (n) {
            var r = c.eq(n);
            g && (e[0] = h.call(this, n, r.html())), r.domManip(e, t);
          });
        if (
          l &&
          ((r = (n = G.buildFragment(e, this[0].ownerDocument, !1, this))
            .firstChild),
          1 === n.childNodes.length && (n = r),
          r)
        ) {
          for (o = (i = G.map(m(n, "script"), p)).length; l > u; u++)
            (s = n),
              u !== f &&
                ((s = G.clone(s, !0, !0)), o && G.merge(i, m(s, "script"))),
              t.call(this[u], s, u);
          if (o)
            for (
              a = i[i.length - 1].ownerDocument, G.map(i, d), u = 0;
              o > u;
              u++
            )
              (s = i[u]),
                Se.test(s.type || "") &&
                  !fe.access(s, "globalEval") &&
                  G.contains(a, s) &&
                  (s.src
                    ? G._evalUrl && G._evalUrl(s.src)
                    : G.globalEval(s.textContent.replace(Le, "")));
        }
        return this;
      },
    }),
    G.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        G.fn[e] = function (e) {
          for (var n, r = [], i = G(e), o = i.length - 1, s = 0; o >= s; s++)
            (n = s === o ? this : this.clone(!0)),
              G(i[s])[t](n),
              $.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var He,
    Oe = {},
    Fe = /^margin/,
    Pe = new RegExp("^(" + ge + ")(?!px)[a-z%]+$", "i"),
    Me = function (e) {
      return e.ownerDocument.defaultView.getComputedStyle(e, null);
    };
  !(function () {
    function t() {
      (s.style.cssText =
        "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%"),
        i.appendChild(o);
      var t = e.getComputedStyle(s, null);
      (n = "1%" !== t.top), (r = "4px" === t.width), i.removeChild(o);
    }
    var n,
      r,
      i = V.documentElement,
      o = V.createElement("div"),
      s = V.createElement("div");
    (s.style.backgroundClip = "content-box"),
      (s.cloneNode(!0).style.backgroundClip = ""),
      (U.clearCloneStyle = "content-box" === s.style.backgroundClip),
      (o.style.cssText =
        "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
      o.appendChild(s),
      e.getComputedStyle &&
        G.extend(U, {
          pixelPosition: function () {
            return t(), n;
          },
          boxSizingReliable: function () {
            return null == r && t(), r;
          },
          reliableMarginRight: function () {
            var t,
              n = s.appendChild(V.createElement("div"));
            return (
              (n.style.cssText = s.style.cssText =
                "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box"),
              (n.style.marginRight = n.style.width = "0"),
              (s.style.width = "1px"),
              i.appendChild(o),
              (t = !parseFloat(e.getComputedStyle(n, null).marginRight)),
              i.removeChild(o),
              (s.innerHTML = ""),
              t
            );
          },
        });
  })(),
    (G.swap = function (e, t, n, r) {
      var i,
        o,
        s = {};
      for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = s[o];
      return i;
    });
  var Re = /^(none|table(?!-c[ea]).+)/,
    We = new RegExp("^(" + ge + ")(.*)$", "i"),
    $e = new RegExp("^([+-])=(" + ge + ")", "i"),
    Be = { position: "absolute", visibility: "hidden", display: "block" },
    Ie = { letterSpacing: 0, fontWeight: 400 },
    _e = ["Webkit", "O", "Moz", "ms"];
  G.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = b(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
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
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          s,
          a = G.camelCase(t),
          u = e.style;
        return (
          (t = G.cssProps[a] || (G.cssProps[a] = T(u, a))),
          (s = G.cssHooks[t] || G.cssHooks[a]),
          void 0 === n
            ? s && "get" in s && void 0 !== (i = s.get(e, !1, r))
              ? i
              : u[t]
            : ("string" == (o = typeof n) &&
                (i = $e.exec(n)) &&
                ((n = (i[1] + 1) * i[2] + parseFloat(G.css(e, t))),
                (o = "number")),
              void (
                null != n &&
                n == n &&
                ("number" !== o || G.cssNumber[a] || (n += "px"),
                U.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (u[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
                  ((u[t] = ""), (u[t] = n)))
              ))
        );
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        s,
        a = G.camelCase(t);
      return (
        (t = G.cssProps[a] || (G.cssProps[a] = T(e.style, a))),
        (s = G.cssHooks[t] || G.cssHooks[a]) &&
          "get" in s &&
          (i = s.get(e, !0, n)),
        void 0 === i && (i = b(e, t, r)),
        "normal" === i && t in Ie && (i = Ie[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || G.isNumeric(o) ? o || 0 : i)
          : i
      );
    },
  }),
    G.each(["height", "width"], function (e, t) {
      G.cssHooks[t] = {
        get: function (e, n, r) {
          return n
            ? 0 === e.offsetWidth && Re.test(G.css(e, "display"))
              ? G.swap(e, Be, function () {
                  return k(e, t, r);
                })
              : k(e, t, r)
            : void 0;
        },
        set: function (e, n, r) {
          var i = r && Me(e);
          return C(
            0,
            n,
            r ? N(e, t, r, "border-box" === G.css(e, "boxSizing", !1, i), i) : 0
          );
        },
      };
    }),
    (G.cssHooks.marginRight = w(U.reliableMarginRight, function (e, t) {
      return t
        ? G.swap(e, { display: "inline-block" }, b, [e, "marginRight"])
        : void 0;
    })),
    G.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (G.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            4 > r;
            r++
          )
            i[e + me[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        Fe.test(e) || (G.cssHooks[e + t].set = C);
    }),
    G.fn.extend({
      css: function (e, t) {
        return ce(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              s = 0;
            if (G.isArray(t)) {
              for (r = Me(e), i = t.length; i > s; s++)
                o[t[s]] = G.css(e, t[s], !1, r);
              return o;
            }
            return void 0 !== n ? G.style(e, t, n) : G.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
      show: function () {
        return E(this, !0);
      },
      hide: function () {
        return E(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              ve(this) ? G(this).show() : G(this).hide();
            });
      },
    }),
    (G.Tween = D),
    (D.prototype = {
      constructor: D,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || "swing"),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (G.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = D.propHooks[this.prop];
        return e && e.get ? e.get(this) : D.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = D.propHooks[this.prop];
        return (
          (this.pos = t =
            this.options.duration
              ? G.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                )
              : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : D.propHooks._default.set(this),
          this
        );
      },
    }),
    (D.prototype.init.prototype = D.prototype),
    (D.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] ||
            (e.elem.style && null != e.elem.style[e.prop])
            ? (t = G.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0
            : e.elem[e.prop];
        },
        set: function (e) {
          G.fx.step[e.prop]
            ? G.fx.step[e.prop](e)
            : e.elem.style &&
              (null != e.elem.style[G.cssProps[e.prop]] || G.cssHooks[e.prop])
            ? G.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (D.propHooks.scrollTop = D.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (G.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
    }),
    (G.fx = D.prototype.init),
    (G.fx.step = {});
  var Xe,
    ze,
    Ue = /^(?:toggle|show|hide)$/,
    Ve = new RegExp("^(?:([+-])=|)(" + ge + ")([a-z%]*)$", "i"),
    Ye = /queueHooks$/,
    Ge = [
      function (e, t, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c = this,
          f = {},
          p = e.style,
          d = e.nodeType && ve(e),
          h = fe.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = G._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (u = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || u();
            })),
          a.unqueued++,
          c.always(function () {
            c.always(function () {
              a.unqueued--, G.queue(e, "fx").length || a.empty.fire();
            });
          })),
        1 === e.nodeType &&
          ("height" in t || "width" in t) &&
          ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
          "none" === (l = G.css(e, "display")) && (l = x(e.nodeName)),
          "inline" === l &&
            "none" === G.css(e, "float") &&
            (p.display = "inline-block")),
        n.overflow &&
          ((p.overflow = "hidden"),
          c.always(function () {
            (p.overflow = n.overflow[0]),
              (p.overflowX = n.overflow[1]),
              (p.overflowY = n.overflow[2]);
          })),
        t))
          if (((i = t[r]), Ue.exec(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (d ? "hide" : "show"))
            ) {
              if ("show" !== i || !h || void 0 === h[r]) continue;
              d = !0;
            }
            f[r] = (h && h[r]) || G.style(e, r);
          }
        if (!G.isEmptyObject(f))
          for (r in (h
            ? "hidden" in h && (d = h.hidden)
            : (h = fe.access(e, "fxshow", {})),
          o && (h.hidden = !d),
          d
            ? G(e).show()
            : c.done(function () {
                G(e).hide();
              }),
          c.done(function () {
            var t;
            for (t in (fe.remove(e, "fxshow"), f)) G.style(e, t, f[t]);
          }),
          f))
            (s = A(d ? h[r] : 0, r, c)),
              r in h ||
                ((h[r] = s.start),
                d &&
                  ((s.end = s.start),
                  (s.start = "width" === r || "height" === r ? 1 : 0)));
      },
    ],
    Qe = {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t),
            r = n.cur(),
            i = Ve.exec(t),
            o = (i && i[3]) || (G.cssNumber[e] ? "" : "px"),
            s =
              (G.cssNumber[e] || ("px" !== o && +r)) &&
              Ve.exec(G.css(n.elem, e)),
            a = 1,
            u = 20;
          if (s && s[3] !== o) {
            (o = o || s[3]), (i = i || []), (s = +r || 1);
            do (s /= a = a || ".5"), G.style(n.elem, e, s + o);
            while (a !== (a = n.cur() / r) && 1 !== a && --u);
          }
          return (
            i &&
              ((s = n.start = +s || +r || 0),
              (n.unit = o),
              (n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2])),
            n
          );
        },
      ],
    };
  (G.Animation = G.extend(L, {
    tweener: function (e, t) {
      G.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
      for (var n, r = 0, i = e.length; i > r; r++)
        (n = e[r]), (Qe[n] = Qe[n] || []), Qe[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? Ge.unshift(e) : Ge.push(e);
    },
  })),
    (G.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? G.extend({}, e)
          : {
              complete: n || (!n && t) || (G.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !G.isFunction(t) && t),
            };
      return (
        (r.duration = G.fx.off
          ? 0
          : "number" == typeof r.duration
          ? r.duration
          : r.duration in G.fx.speeds
          ? G.fx.speeds[r.duration]
          : G.fx.speeds._default),
        (null == r.queue || !0 === r.queue) && (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          G.isFunction(r.old) && r.old.call(this),
            r.queue && G.dequeue(this, r.queue);
        }),
        r
      );
    }),
    G.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ve)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = G.isEmptyObject(e),
          o = G.speed(t, n, r),
          s = function () {
            var t = L(this, G.extend({}, e), o);
            (i || fe.get(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = G.timers,
              s = fe.get(this);
            if (i) s[i] && s[i].stop && r(s[i]);
            else for (i in s) s[i] && s[i].stop && Ye.test(i) && r(s[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (t || !n) && G.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = fe.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = G.timers,
              s = r ? r.length : 0;
            for (
              n.finish = !0,
                G.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; s > t; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    G.each(["toggle", "show", "hide"], function (e, t) {
      var n = G.fn[t];
      G.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(S(t, !0), e, r, i);
      };
    }),
    G.each(
      {
        slideDown: S("show"),
        slideUp: S("hide"),
        slideToggle: S("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        G.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (G.timers = []),
    (G.fx.tick = function () {
      var e,
        t = 0,
        n = G.timers;
      for (Xe = G.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || G.fx.stop(), (Xe = void 0);
    }),
    (G.fx.timer = function (e) {
      G.timers.push(e), e() ? G.fx.start() : G.timers.pop();
    }),
    (G.fx.interval = 13),
    (G.fx.start = function () {
      ze || (ze = setInterval(G.fx.tick, G.fx.interval));
    }),
    (G.fx.stop = function () {
      clearInterval(ze), (ze = null);
    }),
    (G.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (G.fn.delay = function (e, t) {
      return (
        (e = (G.fx && G.fx.speeds[e]) || e),
        (t = t || "fx"),
        this.queue(t, function (t, n) {
          var r = setTimeout(t, e);
          n.stop = function () {
            clearTimeout(r);
          };
        })
      );
    }),
    (function () {
      var e = V.createElement("input"),
        t = V.createElement("select"),
        n = t.appendChild(V.createElement("option"));
      (e.type = "checkbox"),
        (U.checkOn = "" !== e.value),
        (U.optSelected = n.selected),
        (t.disabled = !0),
        (U.optDisabled = !n.disabled),
        ((e = V.createElement("input")).value = "t"),
        (e.type = "radio"),
        (U.radioValue = "t" === e.value);
    })();
  var Je,
    Ke = G.expr.attrHandle;
  G.fn.extend({
    attr: function (e, t) {
      return ce(this, G.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        G.removeAttr(this, e);
      });
    },
  }),
    G.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        return e && 3 !== o && 8 !== o && 2 !== o
          ? typeof e.getAttribute === xe
            ? G.prop(e, t, n)
            : ((1 === o && G.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (r =
                  G.attrHooks[t] || (G.expr.match.bool.test(t) ? Je : void 0))),
              void 0 === n
                ? r && "get" in r && null !== (i = r.get(e, t))
                  ? i
                  : null == (i = G.find.attr(e, t))
                  ? void 0
                  : i
                : null !== n
                ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : void G.removeAttr(e, t))
          : void 0;
      },
      removeAttr: function (e, t) {
        var n,
          r,
          i = 0,
          o = t && t.match(ue);
        if (o && 1 === e.nodeType)
          for (; (n = o[i++]); )
            (r = G.propFix[n] || n),
              G.expr.match.bool.test(n) && (e[r] = !1),
              e.removeAttribute(n);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!U.radioValue && "radio" === t && G.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
    }),
    (Je = {
      set: function (e, t, n) {
        return !1 === t ? G.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    G.each(G.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = Ke[t] || G.find.attr;
      Ke[t] = function (e, t, r) {
        var i, o;
        return (
          r ||
            ((o = Ke[t]),
            (Ke[t] = i),
            (i = null != n(e, t, r) ? t.toLowerCase() : null),
            (Ke[t] = o)),
          i
        );
      };
    });
  var Ze = /^(?:input|select|textarea|button)$/i;
  G.fn.extend({
    prop: function (e, t) {
      return ce(this, G.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[G.propFix[e] || e];
      });
    },
  }),
    G.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        return e && 3 !== o && 8 !== o && 2 !== o
          ? ((1 !== o || !G.isXMLDoc(e)) &&
              ((t = G.propFix[t] || t), (i = G.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t])
          : void 0;
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            return e.hasAttribute("tabindex") || Ze.test(e.nodeName) || e.href
              ? e.tabIndex
              : -1;
          },
        },
      },
    }),
    U.optSelected ||
      (G.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
      }),
    G.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        G.propFix[this.toLowerCase()] = this;
      }
    );
  var et = /[\t\r\n\f]/g;
  G.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        s,
        a = "string" == typeof e && e,
        u = 0,
        l = this.length;
      if (G.isFunction(e))
        return this.each(function (t) {
          G(this).addClass(e.call(this, t, this.className));
        });
      if (a)
        for (t = (e || "").match(ue) || []; l > u; u++)
          if (
            (r =
              1 === (n = this[u]).nodeType &&
              (n.className ? (" " + n.className + " ").replace(et, " ") : " "))
          ) {
            for (o = 0; (i = t[o++]); )
              r.indexOf(" " + i + " ") < 0 && (r += i + " ");
            (s = G.trim(r)), n.className !== s && (n.className = s);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        s,
        a = 0 === arguments.length || ("string" == typeof e && e),
        u = 0,
        l = this.length;
      if (G.isFunction(e))
        return this.each(function (t) {
          G(this).removeClass(e.call(this, t, this.className));
        });
      if (a)
        for (t = (e || "").match(ue) || []; l > u; u++)
          if (
            (r =
              1 === (n = this[u]).nodeType &&
              (n.className ? (" " + n.className + " ").replace(et, " ") : ""))
          ) {
            for (o = 0; (i = t[o++]); )
              for (; r.indexOf(" " + i + " ") >= 0; )
                r = r.replace(" " + i + " ", " ");
            (s = e ? G.trim(r) : ""), n.className !== s && (n.className = s);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : this.each(
            G.isFunction(e)
              ? function (n) {
                  G(this).toggleClass(e.call(this, n, this.className, t), t);
                }
              : function () {
                  if ("string" === n)
                    for (
                      var t, r = 0, i = G(this), o = e.match(ue) || [];
                      (t = o[r++]);

                    )
                      i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                  else
                    (n === xe || "boolean" === n) &&
                      (this.className &&
                        fe.set(this, "__className__", this.className),
                      (this.className =
                        this.className || !1 === e
                          ? ""
                          : fe.get(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
        if (
          1 === this[n].nodeType &&
          (" " + this[n].className + " ").replace(et, " ").indexOf(t) >= 0
        )
          return !0;
      return !1;
    },
  });
  var tt = /\r/g;
  G.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      return arguments.length
        ? ((r = G.isFunction(e)),
          this.each(function (n) {
            var i;
            1 === this.nodeType &&
              (null == (i = r ? e.call(this, n, G(this).val()) : e)
                ? (i = "")
                : "number" == typeof i
                ? (i += "")
                : G.isArray(i) &&
                  (i = G.map(i, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                G.valHooks[this.type] ||
                G.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, i, "value")) ||
                (this.value = i));
          }))
        : i
        ? (t = G.valHooks[i.type] || G.valHooks[i.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(i, "value"))
          ? n
          : "string" == typeof (n = i.value)
          ? n.replace(tt, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    G.extend({
      valHooks: {
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                o = "select-one" === e.type || 0 > i,
                s = o ? null : [],
                a = o ? i + 1 : r.length,
                u = 0 > i ? a : o ? i : 0;
              a > u;
              u++
            )
              if (
                !(
                  (!(n = r[u]).selected && u !== i) ||
                  (U.optDisabled
                    ? n.disabled
                    : null !== n.getAttribute("disabled")) ||
                  (n.parentNode.disabled &&
                    G.nodeName(n.parentNode, "optgroup"))
                )
              ) {
                if (((t = G(n).val()), o)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = G.makeArray(t), s = i.length;
              s--;

            )
              ((r = i[s]).selected = G.inArray(G(r).val(), o) >= 0) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    G.each(["radio", "checkbox"], function () {
      (G.valHooks[this] = {
        set: function (e, t) {
          return G.isArray(t)
            ? (e.checked = G.inArray(G(e).val(), t) >= 0)
            : void 0;
        },
      }),
        U.checkOn ||
          (G.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    G.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, t) {
        G.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    G.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    });
  var nt = G.now(),
    rt = /\?/;
  (G.parseJSON = function (e) {
    return JSON.parse(e + "");
  }),
    (G.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = new DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }
      return (
        (!t || t.getElementsByTagName("parsererror").length) &&
          G.error("Invalid XML: " + e),
        t
      );
    });
  var it,
    ot,
    st = /#.*$/,
    at = /([?&])_=[^&]*/,
    ut = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    lt = /^(?:GET|HEAD)$/,
    ct = /^\/\//,
    ft = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    pt = {},
    dt = {},
    ht = "*/".concat("*");
  try {
    ot = location.href;
  } catch (e) {
    ((ot = V.createElement("a")).href = ""), (ot = ot.href);
  }
  (it = ft.exec(ot.toLowerCase()) || []),
    G.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ot,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            it[1]
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": ht,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": G.parseJSON,
          "text xml": G.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? O(O(e, G.ajaxSettings), t) : O(G.ajaxSettings, e);
      },
      ajaxPrefilter: q(pt),
      ajaxTransport: q(dt),
      ajax: function (e, t) {
        function n(e, t, n, s) {
          var u,
            c,
            v,
            y,
            b,
            T = t;
          2 !== x &&
            ((x = 2),
            a && clearTimeout(a),
            (r = void 0),
            (o = s || ""),
            (w.readyState = e > 0 ? 4 : 0),
            (u = (e >= 200 && 300 > e) || 304 === e),
            n &&
              (y = (function (e, t, n) {
                for (
                  var r, i, o, s, a = e.contents, u = e.dataTypes;
                  "*" === u[0];

                )
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in a)
                    if (a[i] && a[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    s || (s = i);
                  }
                  o = o || s;
                }
                return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0;
              })(f, w, n)),
            (y = (function (e, t, n, r) {
              var i,
                o,
                s,
                a,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(s = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (a = i.split(" "))[1] === o &&
                          (s = l[u + " " + a[0]] || l["* " + a[0]])
                        ) {
                          !0 === s
                            ? (s = l[i])
                            : !0 !== l[i] && ((o = a[0]), c.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e["throws"]) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: s
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(f, y, w, u)),
            u
              ? (f.ifModified &&
                  ((b = w.getResponseHeader("Last-Modified")) &&
                    (G.lastModified[i] = b),
                  (b = w.getResponseHeader("etag")) && (G.etag[i] = b)),
                204 === e || "HEAD" === f.type
                  ? (T = "nocontent")
                  : 304 === e
                  ? (T = "notmodified")
                  : ((T = y.state), (c = y.data), (u = !(v = y.error))))
              : ((v = T), (e || !T) && ((T = "error"), 0 > e && (e = 0))),
            (w.status = e),
            (w.statusText = (t || T) + ""),
            u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]),
            w.statusCode(m),
            (m = void 0),
            l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]),
            g.fireWith(p, [w, T]),
            l &&
              (d.trigger("ajaxComplete", [w, f]),
              --G.active || G.event.trigger("ajaxStop")));
        }
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c,
          f = G.ajaxSetup({}, t),
          p = f.context || f,
          d = f.context && (p.nodeType || p.jquery) ? G(p) : G.event,
          h = G.Deferred(),
          g = G.Callbacks("once memory"),
          m = f.statusCode || {},
          v = {},
          y = {},
          x = 0,
          b = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (2 === x) {
                if (!s)
                  for (s = {}; (t = ut.exec(o)); ) s[t[1].toLowerCase()] = t[2];
                t = s[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return 2 === x ? o : null;
            },
            setRequestHeader: function (e, t) {
              var n = e.toLowerCase();
              return x || ((e = y[n] = y[n] || e), (v[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return x || (f.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (2 > x) for (t in e) m[t] = [m[t], e[t]];
                else w.always(e[w.status]);
              return this;
            },
            abort: function (e) {
              var t = e || b;
              return r && r.abort(t), n(0, t), this;
            },
          };
        if (
          ((h.promise(w).complete = g.add),
          (w.success = w.done),
          (w.error = w.fail),
          (f.url = ((e || f.url || ot) + "")
            .replace(st, "")
            .replace(ct, it[1] + "//")),
          (f.type = t.method || t.type || f.method || f.type),
          (f.dataTypes = G.trim(f.dataType || "*")
            .toLowerCase()
            .match(ue) || [""]),
          null == f.crossDomain &&
            ((u = ft.exec(f.url.toLowerCase())),
            (f.crossDomain = !(
              !u ||
              (u[1] === it[1] &&
                u[2] === it[2] &&
                (u[3] || ("http:" === u[1] ? "80" : "443")) ===
                  (it[3] || ("http:" === it[1] ? "80" : "443")))
            ))),
          f.data &&
            f.processData &&
            "string" != typeof f.data &&
            (f.data = G.param(f.data, f.traditional)),
          H(pt, f, t, w),
          2 === x)
        )
          return w;
        for (c in ((l = f.global) &&
          0 == G.active++ &&
          G.event.trigger("ajaxStart"),
        (f.type = f.type.toUpperCase()),
        (f.hasContent = !lt.test(f.type)),
        (i = f.url),
        f.hasContent ||
          (f.data &&
            ((i = f.url += (rt.test(i) ? "&" : "?") + f.data), delete f.data),
          !1 === f.cache &&
            (f.url = at.test(i)
              ? i.replace(at, "$1_=" + nt++)
              : i + (rt.test(i) ? "&" : "?") + "_=" + nt++)),
        f.ifModified &&
          (G.lastModified[i] &&
            w.setRequestHeader("If-Modified-Since", G.lastModified[i]),
          G.etag[i] && w.setRequestHeader("If-None-Match", G.etag[i])),
        ((f.data && f.hasContent && !1 !== f.contentType) || t.contentType) &&
          w.setRequestHeader("Content-Type", f.contentType),
        w.setRequestHeader(
          "Accept",
          f.dataTypes[0] && f.accepts[f.dataTypes[0]]
            ? f.accepts[f.dataTypes[0]] +
                ("*" !== f.dataTypes[0] ? ", " + ht + "; q=0.01" : "")
            : f.accepts["*"]
        ),
        f.headers))
          w.setRequestHeader(c, f.headers[c]);
        if (f.beforeSend && (!1 === f.beforeSend.call(p, w, f) || 2 === x))
          return w.abort();
        for (c in ((b = "abort"), { success: 1, error: 1, complete: 1 }))
          w[c](f[c]);
        if ((r = H(dt, f, t, w))) {
          (w.readyState = 1),
            l && d.trigger("ajaxSend", [w, f]),
            f.async &&
              f.timeout > 0 &&
              (a = setTimeout(function () {
                w.abort("timeout");
              }, f.timeout));
          try {
            (x = 1), r.send(v, n);
          } catch (e) {
            if (!(2 > x)) throw e;
            n(-1, e);
          }
        } else n(-1, "No Transport");
        return w;
      },
      getJSON: function (e, t, n) {
        return G.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return G.get(e, void 0, t, "script");
      },
    }),
    G.each(["get", "post"], function (e, t) {
      G[t] = function (e, n, r, i) {
        return (
          G.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
          G.ajax({ url: e, type: t, dataType: i, data: n, success: r })
        );
      };
    }),
    G.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        G.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (G._evalUrl = function (e) {
      return G.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    G.fn.extend({
      wrapAll: function (e) {
        var t;
        return G.isFunction(e)
          ? this.each(function (t) {
              G(this).wrapAll(e.call(this, t));
            })
          : (this[0] &&
              ((t = G(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this);
      },
      wrapInner: function (e) {
        return this.each(
          G.isFunction(e)
            ? function (t) {
                G(this).wrapInner(e.call(this, t));
              }
            : function () {
                var t = G(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              }
        );
      },
      wrap: function (e) {
        var t = G.isFunction(e);
        return this.each(function (n) {
          G(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            G.nodeName(this, "body") || G(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (G.expr.filters.hidden = function (e) {
      return e.offsetWidth <= 0 && e.offsetHeight <= 0;
    }),
    (G.expr.filters.visible = function (e) {
      return !G.expr.filters.hidden(e);
    });
  var gt = /%20/g,
    mt = /\[\]$/,
    vt = /\r?\n/g,
    yt = /^(?:submit|button|image|reset|file)$/i,
    xt = /^(?:input|select|textarea|keygen)/i;
  (G.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        (t = G.isFunction(t) ? t() : null == t ? "" : t),
          (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
      };
    if (
      (void 0 === t && (t = G.ajaxSettings && G.ajaxSettings.traditional),
      G.isArray(e) || (e.jquery && !G.isPlainObject(e)))
    )
      G.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) F(n, e[n], t, i);
    return r.join("&").replace(gt, "+");
  }),
    G.fn.extend({
      serialize: function () {
        return G.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = G.prop(this, "elements");
          return e ? G.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !G(this).is(":disabled") &&
              xt.test(this.nodeName) &&
              !yt.test(e) &&
              (this.checked || !ye.test(e))
            );
          })
          .map(function (e, t) {
            var n = G(this).val();
            return null == n
              ? null
              : G.isArray(n)
              ? G.map(n, function (e) {
                  return { name: t.name, value: e.replace(vt, "\r\n") };
                })
              : { name: t.name, value: n.replace(vt, "\r\n") };
          })
          .get();
      },
    }),
    (G.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (e) {}
    });
  var bt = 0,
    wt = {},
    Tt = { 0: 200, 1223: 204 },
    Ct = G.ajaxSettings.xhr();
  e.ActiveXObject &&
    G(e).on("unload", function () {
      for (var e in wt) wt[e]();
    }),
    (U.cors = !!Ct && "withCredentials" in Ct),
    (U.ajax = Ct = !!Ct),
    G.ajaxTransport(function (e) {
      var t;
      return U.cors || (Ct && !e.crossDomain)
        ? {
            send: function (n, r) {
              var i,
                o = e.xhr(),
                s = ++bt;
              if (
                (o.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
              )
                for (i in e.xhrFields) o[i] = e.xhrFields[i];
              for (i in (e.mimeType &&
                o.overrideMimeType &&
                o.overrideMimeType(e.mimeType),
              e.crossDomain ||
                n["X-Requested-With"] ||
                (n["X-Requested-With"] = "XMLHttpRequest"),
              n))
                o.setRequestHeader(i, n[i]);
              (t = function (e) {
                return function () {
                  t &&
                    (delete wt[s],
                    (t = o.onload = o.onerror = null),
                    "abort" === e
                      ? o.abort()
                      : "error" === e
                      ? r(o.status, o.statusText)
                      : r(
                          Tt[o.status] || o.status,
                          o.statusText,
                          "string" == typeof o.responseText
                            ? { text: o.responseText }
                            : void 0,
                          o.getAllResponseHeaders()
                        ));
                };
              }),
                (o.onload = t()),
                (o.onerror = t("error")),
                (t = wt[s] = t("abort")),
                o.send((e.hasContent && e.data) || null);
            },
            abort: function () {
              t && t();
            },
          }
        : void 0;
    }),
    G.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (e) {
          return G.globalEval(e), e;
        },
      },
    }),
    G.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    G.ajaxTransport("script", function (e) {
      var t, n;
      return e.crossDomain
        ? {
            send: function (r, i) {
              (t = G("<script>")
                .prop({ async: !0, charset: e.scriptCharset, src: e.url })
                .on(
                  "load error",
                  (n = function (e) {
                    t.remove(),
                      (n = null),
                      e && i("error" === e.type ? 404 : 200, e.type);
                  })
                )),
                V.head.appendChild(t[0]);
            },
            abort: function () {
              n && n();
            },
          }
        : void 0;
    });
  var Nt = [],
    kt = /(=)\?(?=&|$)|\?\?/;
  G.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Nt.pop() || G.expando + "_" + nt++;
      return (this[e] = !0), e;
    },
  }),
    G.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        s,
        a =
          !1 !== t.jsonp &&
          (kt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              !(t.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              kt.test(t.data) &&
              "data");
      return a || "jsonp" === t.dataTypes[0]
        ? ((i = t.jsonpCallback =
            G.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(kt, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (rt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return s || G.error(i + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            s = arguments;
          }),
          r.always(function () {
            (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), Nt.push(i)),
              s && G.isFunction(o) && o(s[0]),
              (s = o = void 0);
          }),
          "script")
        : void 0;
    }),
    (G.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && ((n = t), (t = !1)), (t = t || V);
      var r = te.exec(e),
        i = !n && [];
      return r
        ? [t.createElement(r[1])]
        : ((r = G.buildFragment([e], t, i)),
          i && i.length && G(i).remove(),
          G.merge([], r.childNodes));
    });
  var Et = G.fn.load;
  (G.fn.load = function (e, t, n) {
    if ("string" != typeof e && Et) return Et.apply(this, arguments);
    var r,
      i,
      o,
      s = this,
      a = e.indexOf(" ");
    return (
      a >= 0 && ((r = e.slice(a)), (e = e.slice(0, a))),
      G.isFunction(t)
        ? ((n = t), (t = void 0))
        : t && "object" == typeof t && (i = "POST"),
      s.length > 0 &&
        G.ajax({ url: e, type: i, dataType: "html", data: t })
          .done(function (e) {
            (o = arguments),
              s.html(r ? G("<div>").append(G.parseHTML(e)).find(r) : e);
          })
          .complete(
            n &&
              function (e, t) {
                s.each(n, o || [e.responseText, t, e]);
              }
          ),
      this
    );
  }),
    (G.expr.filters.animated = function (e) {
      return G.grep(G.timers, function (t) {
        return e === t.elem;
      }).length;
    });
  var Dt = e.document.documentElement;
  (G.offset = {
    setOffset: function (e, t, n) {
      var r,
        i,
        o,
        s,
        a,
        u,
        l = G.css(e, "position"),
        c = G(e),
        f = {};
      "static" === l && (e.style.position = "relative"),
        (a = c.offset()),
        (o = G.css(e, "top")),
        (u = G.css(e, "left")),
        ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1
          ? ((s = (r = c.position()).top), (i = r.left))
          : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
        G.isFunction(t) && (t = t.call(e, n, a)),
        null != t.top && (f.top = t.top - a.top + s),
        null != t.left && (f.left = t.left - a.left + i),
        "using" in t ? t.using.call(e, f) : c.css(f);
    },
  }),
    G.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                G.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0],
          i = { top: 0, left: 0 },
          o = r && r.ownerDocument;
        return o
          ? ((t = o.documentElement),
            G.contains(t, r)
              ? (typeof r.getBoundingClientRect !== xe &&
                  (i = r.getBoundingClientRect()),
                (n = P(o)),
                {
                  top: i.top + n.pageYOffset - t.clientTop,
                  left: i.left + n.pageXOffset - t.clientLeft,
                })
              : i)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = this[0],
            r = { top: 0, left: 0 };
          return (
            "fixed" === G.css(n, "position")
              ? (t = n.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                G.nodeName(e[0], "html") || (r = e.offset()),
                (r.top += G.css(e[0], "borderTopWidth", !0)),
                (r.left += G.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - r.top - G.css(n, "marginTop", !0),
              left: t.left - r.left - G.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent || Dt;
            e && !G.nodeName(e, "html") && "static" === G.css(e, "position");

          )
            e = e.offsetParent;
          return e || Dt;
        });
      },
    }),
    G.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, n) {
        var r = "pageYOffset" === n;
        G.fn[t] = function (i) {
          return ce(
            this,
            function (t, i, o) {
              var s = P(t);
              return void 0 === o
                ? s
                  ? s[n]
                  : t[i]
                : void (s
                    ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset)
                    : (t[i] = o));
            },
            t,
            i,
            arguments.length,
            null
          );
        };
      }
    ),
    G.each(["top", "left"], function (e, t) {
      G.cssHooks[t] = w(U.pixelPosition, function (e, n) {
        return n
          ? ((n = b(e, t)), Pe.test(n) ? G(e).position()[t] + "px" : n)
          : void 0;
      });
    }),
    G.each({ Height: "height", Width: "width" }, function (e, t) {
      G.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          G.fn[r] = function (r, i) {
            var o = arguments.length && (n || "boolean" != typeof r),
              s = n || (!0 === r || !0 === i ? "margin" : "border");
            return ce(
              this,
              function (t, n, r) {
                var i;
                return G.isWindow(t)
                  ? t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((i = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      i["scroll" + e],
                      t.body["offset" + e],
                      i["offset" + e],
                      i["client" + e]
                    ))
                  : void 0 === r
                  ? G.css(t, n, s)
                  : G.style(t, n, r, s);
              },
              t,
              o ? r : void 0,
              o,
              null
            );
          };
        }
      );
    }),
    (G.fn.size = function () {
      return this.length;
    }),
    (G.fn.andSelf = G.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return G;
      });
  var jt = e.jQuery,
    St = e.$;
  return (
    (G.noConflict = function (t) {
      return e.$ === G && (e.$ = St), t && e.jQuery === G && (e.jQuery = jt), G;
    }),
    typeof t === xe && (e.jQuery = e.$ = G),
    G
  );
});
