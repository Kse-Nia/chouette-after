!(function (t) {
  "function" == typeof define && define.amd && define.amd.jQuery
    ? define(["jquery"], t)
    : t(
        "undefined" != typeof module && module.exports
          ? require("jquery")
          : jQuery
      );
})(function (t) {
  "use strict";
  function e(e) {
    return (
      !e ||
        void 0 !== e.allowPageScroll ||
        (void 0 === e.swipe && void 0 === e.swipeStatus) ||
        (e.allowPageScroll = c),
      void 0 !== e.click && void 0 === e.tap && (e.tap = e.click),
      e || (e = {}),
      (e = t.extend({}, t.fn.swipe.defaults, e)),
      this.each(function () {
        var i = t(this),
          o = i.data(N);
        o || ((o = new n(this, e)), i.data(N, o));
      })
    );
  }
  function n(e, n) {
    function i(e) {
      if (!(ut() || t(e.target).closest(n.excludedElements, zt).length > 0)) {
        var i = e.originalEvent ? e.originalEvent : e;
        if (
          !i.pointerType ||
          "mouse" != i.pointerType ||
          0 != n.fallbackToMouseEvents
        ) {
          var o,
            r = i.touches,
            s = r ? r[0] : i;
          return (
            (Xt = x),
            r
              ? (Vt = r.length)
              : n.preventDefaultEvents !== !1 && e.preventDefault(),
            (Rt = 0),
            (Pt = null),
            (Ht = null),
            (Bt = null),
            (qt = 0),
            (Mt = 0),
            (Ft = 0),
            (Wt = 1),
            (Ut = 0),
            (_t = vt()),
            at(),
            pt(0, s),
            !r || Vt === n.fingers || n.fingers === b || B()
              ? ((Yt = St()),
                2 == Vt &&
                  (pt(1, r[1]), (Mt = Ft = bt(Qt[0].start, Qt[1].start))),
                (n.swipeStatus || n.pinchStatus) && (o = R(i, Xt)))
              : (o = !1),
            o === !1
              ? ((Xt = E), R(i, Xt), o)
              : (n.hold &&
                  (ee = setTimeout(
                    t.proxy(function () {
                      zt.trigger("hold", [i.target]),
                        n.hold && (o = n.hold.call(zt, i, i.target));
                    }, this),
                    n.longTapThreshold
                  )),
                ct(!0),
                null)
          );
        }
      }
    }
    function D(t) {
      var e = t.originalEvent ? t.originalEvent : t;
      if (Xt !== C && Xt !== E && !lt()) {
        var i,
          o = e.touches,
          r = o ? o[0] : e,
          s = ft(r);
        if (
          ((Gt = St()),
          o && (Vt = o.length),
          n.hold && clearTimeout(ee),
          (Xt = T),
          2 == Vt &&
            (0 == Mt
              ? (pt(1, o[1]), (Mt = Ft = bt(Qt[0].start, Qt[1].start)))
              : (ft(o[1]),
                (Ft = bt(Qt[0].end, Qt[1].end)),
                (Bt = xt(Qt[0].end, Qt[1].end))),
            (Wt = wt(Mt, Ft)),
            (Ut = Math.abs(Mt - Ft))),
          Vt === n.fingers || n.fingers === b || !o || B())
        ) {
          if (
            ((Pt = Et(s.start, s.end)),
            (Ht = Et(s.last, s.end)),
            W(t, Ht),
            (Rt = Tt(s.start, s.end)),
            (qt = yt()),
            ht(Pt, Rt),
            (i = R(e, Xt)),
            !n.triggerOnTouchEnd || n.triggerOnTouchLeave)
          ) {
            var a = !0;
            if (n.triggerOnTouchLeave) {
              var l = kt(this);
              a = $t(s.end, l);
            }
            !n.triggerOnTouchEnd && a
              ? (Xt = I(T))
              : n.triggerOnTouchLeave && !a && (Xt = I(C)),
              (Xt != E && Xt != C) || R(e, Xt);
          }
        } else (Xt = E), R(e, Xt);
        i === !1 && ((Xt = E), R(e, Xt));
      }
    }
    function A(t) {
      var e = t.originalEvent ? t.originalEvent : t,
        i = e.touches;
      if (i) {
        if (i.length && !lt()) return st(e), !0;
        if (i.length && lt()) return !0;
      }
      return (
        lt() && (Vt = Kt),
        (Gt = St()),
        (qt = yt()),
        q() || !H()
          ? ((Xt = E), R(e, Xt))
          : n.triggerOnTouchEnd || (n.triggerOnTouchEnd === !1 && Xt === T)
          ? (n.preventDefaultEvents !== !1 &&
              t.cancelable !== !1 &&
              t.preventDefault(),
            (Xt = C),
            R(e, Xt))
          : !n.triggerOnTouchEnd && G()
          ? ((Xt = C), P(e, Xt, h))
          : Xt === T && ((Xt = E), R(e, Xt)),
        ct(!1),
        null
      );
    }
    function j() {
      (Vt = 0), (Gt = 0), (Yt = 0), (Mt = 0), (Ft = 0), (Wt = 1), at(), ct(!1);
    }
    function O(t) {
      var e = t.originalEvent ? t.originalEvent : t;
      n.triggerOnTouchLeave && ((Xt = I(C)), R(e, Xt));
    }
    function L() {
      zt.unbind(At, i),
        zt.unbind(It, j),
        zt.unbind(jt, D),
        zt.unbind(Ot, A),
        Lt && zt.unbind(Lt, O),
        ct(!1);
    }
    function I(t) {
      var e = t,
        i = F(),
        o = H(),
        r = q();
      return (
        !i || r
          ? (e = E)
          : !o || t != T || (n.triggerOnTouchEnd && !n.triggerOnTouchLeave)
          ? !o && t == C && n.triggerOnTouchLeave && (e = E)
          : (e = C),
        e
      );
    }
    function R(t, e) {
      var n,
        i = t.touches;
      return (
        (V() || X()) && (n = P(t, e, f)),
        (_() || B()) && n !== !1 && (n = P(t, e, d)),
        ot() && n !== !1
          ? (n = P(t, e, g))
          : rt() && n !== !1
          ? (n = P(t, e, v))
          : it() && n !== !1 && (n = P(t, e, h)),
        e === E && j(t),
        e === C && (i ? i.length || j(t) : j(t)),
        n
      );
    }
    function P(e, i, c) {
      var p;
      if (c == f) {
        if (
          (zt.trigger("swipeStatus", [
            i,
            Pt || null,
            Rt || 0,
            qt || 0,
            Vt,
            Qt,
            Ht,
          ]),
          n.swipeStatus &&
            ((p = n.swipeStatus.call(
              zt,
              e,
              i,
              Pt || null,
              Rt || 0,
              qt || 0,
              Vt,
              Qt,
              Ht
            )),
            p === !1))
        )
          return !1;
        if (i == C && z()) {
          if (
            (clearTimeout(te),
            clearTimeout(ee),
            zt.trigger("swipe", [Pt, Rt, qt, Vt, Qt, Ht]),
            n.swipe &&
              ((p = n.swipe.call(zt, e, Pt, Rt, qt, Vt, Qt, Ht)), p === !1))
          )
            return !1;
          switch (Pt) {
            case o:
              zt.trigger("swipeLeft", [Pt, Rt, qt, Vt, Qt, Ht]),
                n.swipeLeft &&
                  (p = n.swipeLeft.call(zt, e, Pt, Rt, qt, Vt, Qt, Ht));
              break;
            case r:
              zt.trigger("swipeRight", [Pt, Rt, qt, Vt, Qt, Ht]),
                n.swipeRight &&
                  (p = n.swipeRight.call(zt, e, Pt, Rt, qt, Vt, Qt, Ht));
              break;
            case s:
              zt.trigger("swipeUp", [Pt, Rt, qt, Vt, Qt, Ht]),
                n.swipeUp &&
                  (p = n.swipeUp.call(zt, e, Pt, Rt, qt, Vt, Qt, Ht));
              break;
            case a:
              zt.trigger("swipeDown", [Pt, Rt, qt, Vt, Qt, Ht]),
                n.swipeDown &&
                  (p = n.swipeDown.call(zt, e, Pt, Rt, qt, Vt, Qt, Ht));
          }
        }
      }
      if (c == d) {
        if (
          (zt.trigger("pinchStatus", [
            i,
            Bt || null,
            Ut || 0,
            qt || 0,
            Vt,
            Wt,
            Qt,
          ]),
          n.pinchStatus &&
            ((p = n.pinchStatus.call(
              zt,
              e,
              i,
              Bt || null,
              Ut || 0,
              qt || 0,
              Vt,
              Wt,
              Qt
            )),
            p === !1))
        )
          return !1;
        if (i == C && U())
          switch (Bt) {
            case l:
              zt.trigger("pinchIn", [Bt || null, Ut || 0, qt || 0, Vt, Wt, Qt]),
                n.pinchIn &&
                  (p = n.pinchIn.call(
                    zt,
                    e,
                    Bt || null,
                    Ut || 0,
                    qt || 0,
                    Vt,
                    Wt,
                    Qt
                  ));
              break;
            case u:
              zt.trigger("pinchOut", [
                Bt || null,
                Ut || 0,
                qt || 0,
                Vt,
                Wt,
                Qt,
              ]),
                n.pinchOut &&
                  (p = n.pinchOut.call(
                    zt,
                    e,
                    Bt || null,
                    Ut || 0,
                    qt || 0,
                    Vt,
                    Wt,
                    Qt
                  ));
          }
      }
      return (
        c == h
          ? (i !== E && i !== C) ||
            (clearTimeout(te),
            clearTimeout(ee),
            J() && !tt()
              ? ((Zt = St()),
                (te = setTimeout(
                  t.proxy(function () {
                    (Zt = null),
                      zt.trigger("tap", [e.target]),
                      n.tap && (p = n.tap.call(zt, e, e.target));
                  }, this),
                  n.doubleTapThreshold
                )))
              : ((Zt = null),
                zt.trigger("tap", [e.target]),
                n.tap && (p = n.tap.call(zt, e, e.target))))
          : c == g
          ? (i !== E && i !== C) ||
            (clearTimeout(te),
            clearTimeout(ee),
            (Zt = null),
            zt.trigger("doubletap", [e.target]),
            n.doubleTap && (p = n.doubleTap.call(zt, e, e.target)))
          : c == v &&
            ((i !== E && i !== C) ||
              (clearTimeout(te),
              (Zt = null),
              zt.trigger("longtap", [e.target]),
              n.longTap && (p = n.longTap.call(zt, e, e.target)))),
        p
      );
    }
    function H() {
      var t = !0;
      return null !== n.threshold && (t = Rt >= n.threshold), t;
    }
    function q() {
      var t = !1;
      return (
        null !== n.cancelThreshold &&
          null !== Pt &&
          (t = gt(Pt) - Rt >= n.cancelThreshold),
        t
      );
    }
    function M() {
      return null === n.pinchThreshold || Ut >= n.pinchThreshold;
    }
    function F() {
      var t;
      return (t = !(n.maxTimeThreshold && qt >= n.maxTimeThreshold));
    }
    function W(t, e) {
      if (n.preventDefaultEvents !== !1)
        if (n.allowPageScroll === c) t.preventDefault();
        else {
          var i = n.allowPageScroll === p;
          switch (e) {
            case o:
              ((n.swipeLeft && i) || (!i && n.allowPageScroll != m)) &&
                t.preventDefault();
              break;
            case r:
              ((n.swipeRight && i) || (!i && n.allowPageScroll != m)) &&
                t.preventDefault();
              break;
            case s:
              ((n.swipeUp && i) || (!i && n.allowPageScroll != y)) &&
                t.preventDefault();
              break;
            case a:
              ((n.swipeDown && i) || (!i && n.allowPageScroll != y)) &&
                t.preventDefault();
              break;
            case c:
          }
        }
    }
    function U() {
      var t = Q(),
        e = Y(),
        n = M();
      return t && e && n;
    }
    function B() {
      return !!(n.pinchStatus || n.pinchIn || n.pinchOut);
    }
    function _() {
      return !(!U() || !B());
    }
    function z() {
      var t = F(),
        e = H(),
        n = Q(),
        i = Y(),
        o = q(),
        r = !o && i && n && e && t;
      return r;
    }
    function X() {
      return !!(
        n.swipe ||
        n.swipeStatus ||
        n.swipeLeft ||
        n.swipeRight ||
        n.swipeUp ||
        n.swipeDown
      );
    }
    function V() {
      return !(!z() || !X());
    }
    function Q() {
      return Vt === n.fingers || n.fingers === b || !S;
    }
    function Y() {
      return 0 !== Qt[0].end.x;
    }
    function G() {
      return !!n.tap;
    }
    function J() {
      return !!n.doubleTap;
    }
    function K() {
      return !!n.longTap;
    }
    function Z() {
      if (null == Zt) return !1;
      var t = St();
      return J() && t - Zt <= n.doubleTapThreshold;
    }
    function tt() {
      return Z();
    }
    function et() {
      return (1 === Vt || !S) && (isNaN(Rt) || Rt < n.threshold);
    }
    function nt() {
      return qt > n.longTapThreshold && w > Rt;
    }
    function it() {
      return !(!et() || !G());
    }
    function ot() {
      return !(!Z() || !J());
    }
    function rt() {
      return !(!nt() || !K());
    }
    function st(t) {
      (Jt = St()), (Kt = t.touches.length + 1);
    }
    function at() {
      (Jt = 0), (Kt = 0);
    }
    function lt() {
      var t = !1;
      if (Jt) {
        var e = St() - Jt;
        e <= n.fingerReleaseThreshold && (t = !0);
      }
      return t;
    }
    function ut() {
      return !(zt.data(N + "_intouch") !== !0);
    }
    function ct(t) {
      zt &&
        (t === !0
          ? (zt.bind(jt, D), zt.bind(Ot, A), Lt && zt.bind(Lt, O))
          : (zt.unbind(jt, D, !1),
            zt.unbind(Ot, A, !1),
            Lt && zt.unbind(Lt, O, !1)),
        zt.data(N + "_intouch", t === !0));
    }
    function pt(t, e) {
      var n = {
        start: { x: 0, y: 0 },
        last: { x: 0, y: 0 },
        end: { x: 0, y: 0 },
      };
      return (
        (n.start.x = n.last.x = n.end.x = e.pageX || e.clientX),
        (n.start.y = n.last.y = n.end.y = e.pageY || e.clientY),
        (Qt[t] = n),
        n
      );
    }
    function ft(t) {
      var e = void 0 !== t.identifier ? t.identifier : 0,
        n = dt(e);
      return (
        null === n && (n = pt(e, t)),
        (n.last.x = n.end.x),
        (n.last.y = n.end.y),
        (n.end.x = t.pageX || t.clientX),
        (n.end.y = t.pageY || t.clientY),
        n
      );
    }
    function dt(t) {
      return Qt[t] || null;
    }
    function ht(t, e) {
      t != c && ((e = Math.max(e, gt(t))), (_t[t].distance = e));
    }
    function gt(t) {
      return _t[t] ? _t[t].distance : void 0;
    }
    function vt() {
      var t = {};
      return (t[o] = mt(o)), (t[r] = mt(r)), (t[s] = mt(s)), (t[a] = mt(a)), t;
    }
    function mt(t) {
      return { direction: t, distance: 0 };
    }
    function yt() {
      return Gt - Yt;
    }
    function bt(t, e) {
      var n = Math.abs(t.x - e.x),
        i = Math.abs(t.y - e.y);
      return Math.round(Math.sqrt(n * n + i * i));
    }
    function wt(t, e) {
      var n = (e / t) * 1;
      return n.toFixed(2);
    }
    function xt() {
      return 1 > Wt ? u : l;
    }
    function Tt(t, e) {
      return Math.round(
        Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
      );
    }
    function Ct(t, e) {
      var n = t.x - e.x,
        i = e.y - t.y,
        o = Math.atan2(i, n),
        r = Math.round((180 * o) / Math.PI);
      return 0 > r && (r = 360 - Math.abs(r)), r;
    }
    function Et(t, e) {
      if (Nt(t, e)) return c;
      var n = Ct(t, e);
      return 45 >= n && n >= 0
        ? o
        : 360 >= n && n >= 315
        ? o
        : n >= 135 && 225 >= n
        ? r
        : n > 45 && 135 > n
        ? a
        : s;
    }
    function St() {
      var t = new Date();
      return t.getTime();
    }
    function kt(e) {
      e = t(e);
      var n = e.offset(),
        i = {
          left: n.left,
          right: n.left + e.outerWidth(),
          top: n.top,
          bottom: n.top + e.outerHeight(),
        };
      return i;
    }
    function $t(t, e) {
      return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom;
    }
    function Nt(t, e) {
      return t.x == e.x && t.y == e.y;
    }
    var n = t.extend({}, n),
      Dt = S || $ || !n.fallbackToMouseEvents,
      At = Dt
        ? $
          ? k
            ? "MSPointerDown"
            : "pointerdown"
          : "touchstart"
        : "mousedown",
      jt = Dt
        ? $
          ? k
            ? "MSPointerMove"
            : "pointermove"
          : "touchmove"
        : "mousemove",
      Ot = Dt
        ? $
          ? k
            ? "MSPointerUp"
            : "pointerup"
          : "touchend"
        : "mouseup",
      Lt = Dt ? ($ ? "mouseleave" : null) : "mouseleave",
      It = $ ? (k ? "MSPointerCancel" : "pointercancel") : "touchcancel",
      Rt = 0,
      Pt = null,
      Ht = null,
      qt = 0,
      Mt = 0,
      Ft = 0,
      Wt = 1,
      Ut = 0,
      Bt = 0,
      _t = null,
      zt = t(e),
      Xt = "start",
      Vt = 0,
      Qt = {},
      Yt = 0,
      Gt = 0,
      Jt = 0,
      Kt = 0,
      Zt = 0,
      te = null,
      ee = null;
    try {
      zt.bind(At, i), zt.bind(It, j);
    } catch (ne) {
      t.error("events not supported " + At + "," + It + " on jQuery.swipe");
    }
    (this.enable = function () {
      return this.disable(), zt.bind(At, i), zt.bind(It, j), zt;
    }),
      (this.disable = function () {
        return L(), zt;
      }),
      (this.destroy = function () {
        L(), zt.data(N, null), (zt = null);
      }),
      (this.option = function (e, i) {
        if ("object" == typeof e) n = t.extend(n, e);
        else if (void 0 !== n[e]) {
          if (void 0 === i) return n[e];
          n[e] = i;
        } else {
          if (!e) return n;
          t.error("Option " + e + " does not exist on jQuery.swipe.options");
        }
        return null;
      });
  }
  var i = "1.6.18",
    o = "left",
    r = "right",
    s = "up",
    a = "down",
    l = "in",
    u = "out",
    c = "none",
    p = "auto",
    f = "swipe",
    d = "pinch",
    h = "tap",
    g = "doubletap",
    v = "longtap",
    m = "horizontal",
    y = "vertical",
    b = "all",
    w = 10,
    x = "start",
    T = "move",
    C = "end",
    E = "cancel",
    S = "ontouchstart" in window,
    k =
      window.navigator.msPointerEnabled &&
      !window.navigator.pointerEnabled &&
      !S,
    $ =
      (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) &&
      !S,
    N = "TouchSwipe",
    D = {
      fingers: 1,
      threshold: 75,
      cancelThreshold: null,
      pinchThreshold: 20,
      maxTimeThreshold: null,
      fingerReleaseThreshold: 250,
      longTapThreshold: 500,
      doubleTapThreshold: 200,
      swipe: null,
      swipeLeft: null,
      swipeRight: null,
      swipeUp: null,
      swipeDown: null,
      swipeStatus: null,
      pinchIn: null,
      pinchOut: null,
      pinchStatus: null,
      click: null,
      tap: null,
      doubleTap: null,
      longTap: null,
      hold: null,
      triggerOnTouchEnd: !0,
      triggerOnTouchLeave: !1,
      allowPageScroll: "auto",
      fallbackToMouseEvents: !0,
      excludedElements: ".noSwipe",
      preventDefaultEvents: !0,
    };
  (t.fn.swipe = function (n) {
    var i = t(this),
      o = i.data(N);
    if (o && "string" == typeof n) {
      if (o[n]) return o[n].apply(o, Array.prototype.slice.call(arguments, 1));
      t.error("Method " + n + " does not exist on jQuery.swipe");
    } else if (o && "object" == typeof n) o.option.apply(o, arguments);
    else if (!(o || ("object" != typeof n && n)))
      return e.apply(this, arguments);
    return i;
  }),
    (t.fn.swipe.version = i),
    (t.fn.swipe.defaults = D),
    (t.fn.swipe.phases = {
      PHASE_START: x,
      PHASE_MOVE: T,
      PHASE_END: C,
      PHASE_CANCEL: E,
    }),
    (t.fn.swipe.directions = {
      LEFT: o,
      RIGHT: r,
      UP: s,
      DOWN: a,
      IN: l,
      OUT: u,
    }),
    (t.fn.swipe.pageScroll = { NONE: c, HORIZONTAL: m, VERTICAL: y, AUTO: p }),
    (t.fn.swipe.fingers = {
      ONE: 1,
      TWO: 2,
      THREE: 3,
      FOUR: 4,
      FIVE: 5,
      ALL: b,
    });
});
