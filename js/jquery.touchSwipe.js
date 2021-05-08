!(function (e) {
  "function" == typeof define && define.amd && define.amd.jQuery
    ? define(["jquery"], e)
    : e(
        "undefined" != typeof module && module.exports
          ? require("jquery")
          : jQuery
      );
})(function (ae) {
  "use strict";
  function i(e, o) {
    function t(e) {
      if (
        !(
          !0 === B.data(ke + "_intouch") ||
          0 < ae(e.target).closest(o.excludedElements, B).length
        )
      ) {
        var t = e.originalEvent || e;
        if (
          !t.pointerType ||
          "mouse" != t.pointerType ||
          0 != o.fallbackToMouseEvents
        ) {
          var n,
            i = t.touches,
            r = i ? i[0] : t;
          return (
            (J = Se),
            i
              ? (K = i.length)
              : !1 !== o.preventDefaultEvents && e.preventDefault(),
            (G = F = C = null),
            (W = 1),
            (z = V = Y = X = Q = 0),
            ((e = {})[ue] = L(ue)),
            (e[se] = L(se)),
            (e.up = L(ce)),
            (e[pe] = L(pe)),
            (Z = e),
            x(),
            M(0, r),
            !i || K === o.fingers || o.fingers === xe || g()
              ? ((ee = I()),
                2 == K && (M(1, i[1]), (Y = V = k($[0].start, $[1].start))),
                (o.swipeStatus || o.pinchStatus) && (n = s(t, J)))
              : (n = !1),
            !1 === n
              ? (s(t, (J = De)), n)
              : (o.hold &&
                  (oe = setTimeout(
                    ae.proxy(function () {
                      B.trigger("hold", [t.target]),
                        o.hold && (n = o.hold.call(B, t, t.target));
                    }, this),
                    o.longTapThreshold
                  )),
                O(!0),
                null)
          );
        }
      }
    }
    function n(e) {
      var t,
        n,
        i,
        r,
        l = e.originalEvent || e;
      J === Me ||
        J === De ||
        S() ||
        ((i = D((r = l.touches) ? r[0] : l)),
        (te = I()),
        r && (K = r.length),
        o.hold && clearTimeout(oe),
        (J = Oe),
        2 == K &&
          (0 == Y
            ? (M(1, r[1]), (Y = V = k($[0].start, $[1].start)))
            : (D(r[1]),
              (V = k($[0].end, $[1].end)),
              $[0].end,
              $[1].end,
              (G = W < 1 ? de : he)),
          (W = ((V / Y) * 1).toFixed(2)),
          (z = Math.abs(Y - V))),
        K === o.fingers || o.fingers === xe || !r || g()
          ? ((C = A(i.start, i.end)),
            (function (e, t) {
              if (!1 !== o.preventDefaultEvents)
                if (o.allowPageScroll === fe) e.preventDefault();
                else {
                  var n = o.allowPageScroll === ge;
                  switch (t) {
                    case ue:
                      ((o.swipeLeft && n) || (!n && o.allowPageScroll != Ee)) &&
                        e.preventDefault();
                      break;
                    case se:
                      ((o.swipeRight && n) ||
                        (!n && o.allowPageScroll != Ee)) &&
                        e.preventDefault();
                      break;
                    case ce:
                      ((o.swipeUp && n) || (!n && o.allowPageScroll != me)) &&
                        e.preventDefault();
                      break;
                    case pe:
                      ((o.swipeDown && n) || (!n && o.allowPageScroll != me)) &&
                        e.preventDefault();
                  }
                }
            })(e, (F = A(i.last, i.end))),
            (n = i.start),
            (t = i.end),
            (Q = Math.round(
              Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2))
            )),
            (X = R()),
            (r = Q),
            (e = C) != fe && ((r = Math.max(r, P(e))), (Z[e].distance = r)),
            (t = s(l, J)),
            (o.triggerOnTouchEnd && !o.triggerOnTouchLeave) ||
              ((n = !0),
              o.triggerOnTouchLeave &&
                ((e = {
                  left: (r = (e = ae((e = this))).offset()).left,
                  right: r.left + e.outerWidth(),
                  top: r.top,
                  bottom: r.top + e.outerHeight(),
                }),
                (n =
                  (i = i.end).x > e.left &&
                  i.x < e.right &&
                  i.y > e.top &&
                  i.y < e.bottom)),
              !o.triggerOnTouchEnd && n
                ? (J = u(Oe))
                : o.triggerOnTouchLeave && !n && (J = u(Me)),
              (J != De && J != Me) || s(l, J)))
          : s(l, (J = De)),
        !1 === t && s(l, (J = De)));
    }
    function i(e) {
      var t,
        n = e.originalEvent || e,
        i = n.touches;
      if (i) {
        if (i.length && !S())
          return (t = n), (ne = I()), (ie = t.touches.length + 1), !0;
        if (i.length && S()) return !0;
      }
      return (
        S() && (K = ie),
        (te = I()),
        (X = R()),
        h() || !p()
          ? s(n, (J = De))
          : o.triggerOnTouchEnd || (!1 === o.triggerOnTouchEnd && J === Oe)
          ? (!1 !== o.preventDefaultEvents &&
              !1 !== e.cancelable &&
              e.preventDefault(),
            s(n, (J = Me)))
          : !o.triggerOnTouchEnd && y()
          ? c(n, (J = Me), ve)
          : J === Oe && s(n, (J = De)),
        O(!1),
        null
      );
    }
    function r() {
      (V = Y = ee = te = K = 0), x(), O(!(W = 1));
    }
    function l(e) {
      e = e.originalEvent || e;
      o.triggerOnTouchLeave && s(e, (J = u(Me)));
    }
    function a() {
      B.unbind(j, t),
        B.unbind(q, r),
        B.unbind(N, n),
        B.unbind(H, i),
        _ && B.unbind(_, l),
        O(!1);
    }
    function u(e) {
      var t = e,
        n = d(),
        i = p(),
        r = h();
      return (
        !n || r
          ? (t = De)
          : !i || e != Oe || (o.triggerOnTouchEnd && !o.triggerOnTouchLeave)
          ? !i && e == Me && o.triggerOnTouchLeave && (t = De)
          : (t = Me),
        t
      );
    }
    function s(e, t) {
      var n,
        i = e.touches;
      return (
        ((w() && T()) || T()) && (n = c(e, t, we)),
        ((f() && g()) || g()) && !1 !== n && (n = c(e, t, Te)),
        m() && E() && !1 !== n
          ? (n = c(e, t, be))
          : X > o.longTapThreshold && Q < 10 && o.longTap && !1 !== n
          ? (n = c(e, t, ye))
          : (1 !== K && Pe) ||
            !(isNaN(Q) || Q < o.threshold) ||
            !y() ||
            !1 === n ||
            (n = c(e, t, ve)),
        t === De && r(),
        t === Me && ((i && i.length) || r()),
        n
      );
    }
    function c(e, t, n) {
      var i;
      if (n == we) {
        if (
          (B.trigger("swipeStatus", [t, C || null, Q || 0, X || 0, K, $, F]),
          o.swipeStatus &&
            !1 ===
              (i = o.swipeStatus.call(
                B,
                e,
                t,
                C || null,
                Q || 0,
                X || 0,
                K,
                $,
                F
              )))
        )
          return !1;
        if (t == Me && w()) {
          if (
            (clearTimeout(le),
            clearTimeout(oe),
            B.trigger("swipe", [C, Q, X, K, $, F]),
            o.swipe && !1 === (i = o.swipe.call(B, e, C, Q, X, K, $, F)))
          )
            return !1;
          switch (C) {
            case ue:
              B.trigger("swipeLeft", [C, Q, X, K, $, F]),
                o.swipeLeft && (i = o.swipeLeft.call(B, e, C, Q, X, K, $, F));
              break;
            case se:
              B.trigger("swipeRight", [C, Q, X, K, $, F]),
                o.swipeRight && (i = o.swipeRight.call(B, e, C, Q, X, K, $, F));
              break;
            case ce:
              B.trigger("swipeUp", [C, Q, X, K, $, F]),
                o.swipeUp && (i = o.swipeUp.call(B, e, C, Q, X, K, $, F));
              break;
            case pe:
              B.trigger("swipeDown", [C, Q, X, K, $, F]),
                o.swipeDown && (i = o.swipeDown.call(B, e, C, Q, X, K, $, F));
          }
        }
      }
      if (n == Te) {
        if (
          (B.trigger("pinchStatus", [t, G || null, z || 0, X || 0, K, W, $]),
          o.pinchStatus &&
            !1 ===
              (i = o.pinchStatus.call(
                B,
                e,
                t,
                G || null,
                z || 0,
                X || 0,
                K,
                W,
                $
              )))
        )
          return !1;
        if (t == Me && f())
          switch (G) {
            case he:
              B.trigger("pinchIn", [G || null, z || 0, X || 0, K, W, $]),
                o.pinchIn &&
                  (i = o.pinchIn.call(
                    B,
                    e,
                    G || null,
                    z || 0,
                    X || 0,
                    K,
                    W,
                    $
                  ));
              break;
            case de:
              B.trigger("pinchOut", [G || null, z || 0, X || 0, K, W, $]),
                o.pinchOut &&
                  (i = o.pinchOut.call(
                    B,
                    e,
                    G || null,
                    z || 0,
                    X || 0,
                    K,
                    W,
                    $
                  ));
          }
      }
      return (
        n == ve
          ? (t !== De && t !== Me) ||
            (clearTimeout(le),
            clearTimeout(oe),
            E() && !m()
              ? ((re = I()),
                (le = setTimeout(
                  ae.proxy(function () {
                    (re = null),
                      B.trigger("tap", [e.target]),
                      o.tap && (i = o.tap.call(B, e, e.target));
                  }, this),
                  o.doubleTapThreshold
                )))
              : ((re = null),
                B.trigger("tap", [e.target]),
                o.tap && (i = o.tap.call(B, e, e.target))))
          : n == be
          ? (t !== De && t !== Me) ||
            (clearTimeout(le),
            clearTimeout(oe),
            (re = null),
            B.trigger("doubletap", [e.target]),
            o.doubleTap && (i = o.doubleTap.call(B, e, e.target)))
          : n == ye &&
            ((t !== De && t !== Me) ||
              (clearTimeout(le),
              (re = null),
              B.trigger("longtap", [e.target]),
              o.longTap && (i = o.longTap.call(B, e, e.target)))),
        i
      );
    }
    function p() {
      var e = !0;
      return null !== o.threshold && (e = Q >= o.threshold), e;
    }
    function h() {
      var e = !1;
      return (
        null !== o.cancelThreshold &&
          null !== C &&
          (e = P(C) - Q >= o.cancelThreshold),
        e
      );
    }
    function d() {
      return !(o.maxTimeThreshold && X >= o.maxTimeThreshold);
    }
    function f() {
      var e = v(),
        t = b(),
        n = null === o.pinchThreshold || z >= o.pinchThreshold;
      return e && t && n;
    }
    function g() {
      return o.pinchStatus || o.pinchIn || o.pinchOut;
    }
    function w() {
      var e = d(),
        t = p(),
        n = v(),
        i = b();
      return !h() && i && n && t && e;
    }
    function T() {
      return (
        o.swipe ||
        o.swipeStatus ||
        o.swipeLeft ||
        o.swipeRight ||
        o.swipeUp ||
        o.swipeDown
      );
    }
    function v() {
      return K === o.fingers || o.fingers === xe || !Pe;
    }
    function b() {
      return 0 !== $[0].end.x;
    }
    function y() {
      return o.tap;
    }
    function E() {
      return !!o.doubleTap;
    }
    function m() {
      if (null != re) {
        var e = I();
        return E() && e - re <= o.doubleTapThreshold;
      }
    }
    function x() {
      ie = ne = 0;
    }
    function S() {
      var e = !1;
      return ne && I() - ne <= o.fingerReleaseThreshold && (e = !0), e;
    }
    function O(e) {
      B &&
        (!0 === e
          ? (B.bind(N, n), B.bind(H, i), _ && B.bind(_, l))
          : (B.unbind(N, n, !1), B.unbind(H, i, !1), _ && B.unbind(_, l, !1)),
        B.data(ke + "_intouch", !0 === e));
    }
    function M(e, t) {
      var n = {
        start: { x: 0, y: 0 },
        last: { x: 0, y: 0 },
        end: { x: 0, y: 0 },
      };
      return (
        (n.start.x = n.last.x = n.end.x = t.pageX || t.clientX),
        (n.start.y = n.last.y = n.end.y = t.pageY || t.clientY),
        ($[e] = n)
      );
    }
    function D(e) {
      var t = void 0 !== e.identifier ? e.identifier : 0,
        n = $[t] || null;
      return (
        null === n && (n = M(t, e)),
        (n.last.x = n.end.x),
        (n.last.y = n.end.y),
        (n.end.x = e.pageX || e.clientX),
        (n.end.y = e.pageY || e.clientY),
        n
      );
    }
    function P(e) {
      if (Z[e]) return Z[e].distance;
    }
    function L(e) {
      return { direction: e, distance: 0 };
    }
    function R() {
      return te - ee;
    }
    function k(e, t) {
      var n = Math.abs(e.x - t.x),
        t = Math.abs(e.y - t.y);
      return Math.round(Math.sqrt(n * n + t * t));
    }
    function A(e, t) {
      if (e.x == t.x && e.y == t.y) return fe;
      var n,
        n =
          ((n = e.x - t.x),
          (e = t.y - e.y),
          (n = Math.atan2(e, n)),
          (n = Math.round((180 * n) / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
          n);
      return (n <= 45 && 0 <= n) || (n <= 360 && 315 <= n)
        ? ue
        : 135 <= n && n <= 225
        ? se
        : 45 < n && n < 135
        ? pe
        : ce;
    }
    function I() {
      return new Date().getTime();
    }
    o = ae.extend({}, o);
    var U = Pe || Re || !o.fallbackToMouseEvents,
      j = U
        ? Re
          ? Le
            ? "MSPointerDown"
            : "pointerdown"
          : "touchstart"
        : "mousedown",
      N = U
        ? Re
          ? Le
            ? "MSPointerMove"
            : "pointermove"
          : "touchmove"
        : "mousemove",
      H = U
        ? Re
          ? Le
            ? "MSPointerUp"
            : "pointerup"
          : "touchend"
        : "mouseup",
      _ = !U || Re ? "mouseleave" : null,
      q = Re ? (Le ? "MSPointerCancel" : "pointercancel") : "touchcancel",
      Q = 0,
      C = null,
      F = null,
      X = 0,
      Y = 0,
      V = 0,
      W = 1,
      z = 0,
      G = 0,
      Z = null,
      B = ae(e),
      J = "start",
      K = 0,
      $ = {},
      ee = 0,
      te = 0,
      ne = 0,
      ie = 0,
      re = 0,
      le = null,
      oe = null;
    try {
      B.bind(j, t), B.bind(q, r);
    } catch (e) {
      ae.error("events not supported " + j + "," + q + " on jQuery.swipe");
    }
    (this.enable = function () {
      return this.disable(), B.bind(j, t), B.bind(q, r), B;
    }),
      (this.disable = function () {
        return a(), B;
      }),
      (this.destroy = function () {
        a(), B.data(ke, null), (B = null);
      }),
      (this.option = function (e, t) {
        if ("object" == typeof e) o = ae.extend(o, e);
        else if (void 0 !== o[e]) {
          if (void 0 === t) return o[e];
          o[e] = t;
        } else {
          if (!e) return o;
          ae.error("Option " + e + " does not exist on jQuery.swipe.options");
        }
        return null;
      });
  }
  var ue = "left",
    se = "right",
    ce = "up",
    pe = "down",
    he = "in",
    de = "out",
    fe = "none",
    ge = "auto",
    we = "swipe",
    Te = "pinch",
    ve = "tap",
    be = "doubletap",
    ye = "longtap",
    Ee = "horizontal",
    me = "vertical",
    xe = "all",
    Se = "start",
    Oe = "move",
    Me = "end",
    De = "cancel",
    Pe = "ontouchstart" in window,
    Le =
      window.navigator.msPointerEnabled &&
      !window.navigator.pointerEnabled &&
      !Pe,
    Re =
      (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) &&
      !Pe,
    ke = "TouchSwipe";
  (ae.fn.swipe = function (e) {
    var t = ae(this),
      n = t.data(ke);
    if (n && "string" == typeof e) {
      if (n[e]) return n[e].apply(n, Array.prototype.slice.call(arguments, 1));
      ae.error("Method " + e + " does not exist on jQuery.swipe");
    } else if (n && "object" == typeof e) n.option.apply(n, arguments);
    else if (!(n || ("object" != typeof e && e)))
      return function (n) {
        return (
          !n ||
            void 0 !== n.allowPageScroll ||
            (void 0 === n.swipe && void 0 === n.swipeStatus) ||
            (n.allowPageScroll = fe),
          void 0 !== n.click && void 0 === n.tap && (n.tap = n.click),
          (n = n || {}),
          (n = ae.extend({}, ae.fn.swipe.defaults, n)),
          this.each(function () {
            var e = ae(this),
              t = e.data(ke);
            t || ((t = new i(this, n)), e.data(ke, t));
          })
        );
      }.apply(this, arguments);
    return t;
  }),
    (ae.fn.swipe.version = "1.6.18"),
    (ae.fn.swipe.defaults = {
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
    }),
    (ae.fn.swipe.phases = {
      PHASE_START: Se,
      PHASE_MOVE: Oe,
      PHASE_END: Me,
      PHASE_CANCEL: De,
    }),
    (ae.fn.swipe.directions = {
      LEFT: ue,
      RIGHT: se,
      UP: ce,
      DOWN: pe,
      IN: he,
      OUT: de,
    }),
    (ae.fn.swipe.pageScroll = {
      NONE: fe,
      HORIZONTAL: Ee,
      VERTICAL: me,
      AUTO: ge,
    }),
    (ae.fn.swipe.fingers = {
      ONE: 1,
      TWO: 2,
      THREE: 3,
      FOUR: 4,
      FIVE: 5,
      ALL: xe,
    });
});
