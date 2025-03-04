const it = "primary", ct = "secondary", lt = "tertiary", at = "ghost", ut = "text", ft = "link", pt = "icon", dt = "neutral", ht = "delete", _t = "cancel", gt = "with-icon", mt = "size-medium", Et = "size-small", yt = "is-loadable", St = "is-loading", Nt = "is-success";
function bt() {
  const e = {
    PRIMARY: it,
    SECONDARY: ct,
    TERTIARY: lt,
    GHOST: at,
    TEXT: ut,
    LINK: ft,
    ICON: pt
  }, t = {
    NEUTRAL: dt,
    DELETE: ht,
    CANCEL: _t
  }, n = {
    WITH_ICON: gt,
    SIZE_MEDIUM: mt,
    SIZE_SMALL: Et,
    LOADABLE: yt,
    LOADING: St,
    SUCCESS: Nt
  };
  return {
    getStyleClass: (r, o, l) => {
      if (r) {
        const a = Object.values(e);
        a.includes(r) || console.error(
          `Invalid button variant: "${r}". Remove or use one of these: ${a}`
        );
      }
      let i = "";
      switch (!r && o !== t.NEUTRAL && (r = e.SECONDARY), r !== e.ICON && (i += "button "), r) {
        case e.PRIMARY:
          i += "btn-primary";
          break;
        case e.SECONDARY:
          i += "btn-secondary";
          break;
        case e.TERTIARY:
          i += "btn-tertiary";
          break;
        case e.GHOST:
          i += "btn-ghost";
          break;
        case e.LINK:
          i += "btn-link is-underlined";
          break;
        case e.TEXT:
          i += "btn-text";
          break;
      }
      switch (o) {
        case t.DELETE:
          i += " btn-danger";
          break;
        case t.CANCEL:
          i += " btn-cancel";
          break;
      }
      if (l)
        for (const a of l)
          switch (a) {
            case n.WITH_ICON:
              i += " with-icon";
              break;
            case n.SIZE_MEDIUM:
              i += " size-medium";
              break;
            case n.SIZE_SMALL:
              i += " size-small";
              break;
            case n.LOADABLE:
              i += " loadable";
              break;
            case n.LOADING:
              i += " loading";
              break;
            case n.SUCCESS:
              i += " success";
              break;
          }
      return i;
    },
    VARIANTS: e,
    INTENTS: t,
    ATTRIBUTES: n
  };
}
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ce = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, vt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Te = () => {
}, Tt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), V = Object.assign, m = Array.isArray, Ot = (e) => de(e) === "[object Map]", Ct = (e) => de(e) === "[object Set]", T = (e) => typeof e == "function", S = (e) => typeof e == "string", Q = (e) => typeof e == "symbol", b = (e) => e !== null && typeof e == "object", Oe = Object.prototype.toString, de = (e) => Oe.call(e), Dt = (e) => de(e) === "[object Object]", Ce = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, It = /-(\w)/g, Y = Ce(
  (e) => e.replace(It, (t, n) => n ? n.toUpperCase() : "")
), le = Ce((e) => e.charAt(0).toUpperCase() + e.slice(1)), Rt = (e, t) => !Object.is(e, t);
let ye;
const ee = () => ye || (ye = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function F(e) {
  if (m(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = S(s) ? At(s) : F(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (S(e) || b(e))
    return e;
}
const wt = /;(?![^(]*\))/g, kt = /:([^]+)/, Vt = /\/\*[^]*?\*\//g;
function At(e) {
  const t = {};
  return e.replace(Vt, "").split(wt).forEach((n) => {
    if (n) {
      const s = n.split(kt);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function M(e) {
  let t = "";
  if (S(e))
    t = e;
  else if (m(e))
    for (let n = 0; n < e.length; n++) {
      const s = M(e[n]);
      s && (t += s + " ");
    }
  else if (b(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const De = (e) => !!(e && e.__v_isRef === !0), Ie = (e) => S(e) ? e : e == null ? "" : m(e) || b(e) && (e.toString === Oe || !T(e.toString)) ? De(e) ? Ie(e.value) : JSON.stringify(e, Re, 2) : String(e), Re = (e, t) => De(t) ? Re(e, t.value) : Ot(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[ne(s, o) + " =>"] = r, n),
    {}
  )
} : Ct(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ne(n))
} : Q(t) ? ne(t) : b(t) && !m(t) && !Dt(t) ? String(t) : t, ne = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Q(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function xt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let p, we = 0, L, $;
function Lt(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = $, $ = e;
    return;
  }
  e.next = L, L = e;
}
function $t() {
  we++;
}
function Ft() {
  if (--we > 0)
    return;
  if ($) {
    let t = $;
    for ($ = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; L; ) {
    let t = L;
    for (L = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Mt(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Bt(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Ve(s), Pt(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Ht(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ke(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ke(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === K))
    return;
  e.globalVersion = K;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Ht(e)) {
    e.flags &= -3;
    return;
  }
  const n = p, s = D;
  p = e, D = !0;
  try {
    Mt(e);
    const r = e.fn(e._value);
    (t.version === 0 || Rt(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    p = n, D = s, Bt(e), e.flags &= -3;
  }
}
function Ve(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Ve(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Pt(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let D = !0;
const Ae = [];
function xe() {
  Ae.push(D), D = !1;
}
function Le() {
  const e = Ae.pop();
  D = e === void 0 ? !0 : e;
}
let K = 0;
class Ut {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class zt {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!p || !D || p === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== p)
      n = this.activeLink = new Ut(p, this), p.deps ? (n.prevDep = p.depsTail, p.depsTail.nextDep = n, p.depsTail = n) : p.deps = p.depsTail = n, $e(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = p.depsTail, n.nextDep = void 0, p.depsTail.nextDep = n, p.depsTail = n, p.deps === n && (p.deps = s);
    }
    return process.env.NODE_ENV !== "production" && p.onTrack && p.onTrack(
      V(
        {
          effect: p
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, K++, this.notify(t);
  }
  notify(t) {
    $t();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            V(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ft();
    }
  }
}
function $e(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        $e(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
);
Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
);
Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Q)
);
function Fe(e) {
  return ae(e) ? Fe(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ae(e) {
  return !!(e && e.__v_isReadonly);
}
function se(e) {
  return !!(e && e.__v_isShallow);
}
function ue(e) {
  return e ? !!e.__v_raw : !1;
}
function I(e) {
  const t = e && e.__v_raw;
  return t ? I(t) : e;
}
function he(e) {
  return e ? e.__v_isRef === !0 : !1;
}
class jt {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new zt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = K - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    p !== this)
      return Lt(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return ke(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && xt("Write operation failed: computed value is readonly");
  }
}
function Wt(e, t, n = !1) {
  let s, r;
  T(e) ? s = e : (s = e.get, r = e.set);
  const o = new jt(s, r, n);
  return process.env.NODE_ENV, o;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const R = [];
function Yt(e) {
  R.push(e);
}
function Kt() {
  R.pop();
}
let oe = !1;
function v(e, ...t) {
  if (oe) return;
  oe = !0, xe();
  const n = R.length ? R[R.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = Gt();
  if (s)
    _e(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var l, i;
          return (i = (l = o.toString) == null ? void 0 : l.call(o)) != null ? i : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: o }) => `at <${ot(n, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...Jt(r)), console.warn(...o);
  }
  Le(), oe = !1;
}
function Gt() {
  let e = R[R.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Jt(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Zt(n));
  }), t;
}
function Zt({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${ot(
    e.component,
    e.type,
    s
  )}`, o = ">" + n;
  return e.props ? [r, ...qt(e.props), o] : [r + o];
}
function qt(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Me(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Me(e, t, n) {
  return S(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : he(t) ? (t = Me(e, I(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : T(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = I(t), n ? t : [`${e}=`, t]);
}
const Be = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function _e(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    He(r, t, n);
  }
}
function He(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: l } = t && t.appContext.config || ce;
  if (t) {
    let i = t.parent;
    const a = t.proxy, _ = process.env.NODE_ENV !== "production" ? Be[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const E = i.ec;
      if (E) {
        for (let c = 0; c < E.length; c++)
          if (E[c](e, a, _) === !1)
            return;
      }
      i = i.parent;
    }
    if (o) {
      xe(), _e(o, null, 10, [
        e,
        a,
        _
      ]), Le();
      return;
    }
  }
  Xt(e, n, r, s, l);
}
function Xt(e, t, n, s = !0, r = !1) {
  if (process.env.NODE_ENV !== "production") {
    const o = Be[t];
    if (n && Yt(n), v(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && Kt(), s)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const g = [];
let N = -1;
const k = [];
let O = null, w = 0;
const Qt = /* @__PURE__ */ Promise.resolve();
let fe = null;
const en = 100;
function tn(e) {
  let t = N + 1, n = g.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = g[s], o = B(r);
    o < e || o === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function nn(e) {
  if (!(e.flags & 1)) {
    const t = B(e), n = g[g.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= B(n) ? g.push(e) : g.splice(tn(t), 0, e), e.flags |= 1, Pe();
  }
}
function Pe() {
  fe || (fe = Qt.then(Ue));
}
function sn(e) {
  m(e) ? k.push(...e) : O && e.id === -1 ? O.splice(w + 1, 0, e) : e.flags & 1 || (k.push(e), e.flags |= 1), Pe();
}
function on(e) {
  if (k.length) {
    const t = [...new Set(k)].sort(
      (n, s) => B(n) - B(s)
    );
    if (k.length = 0, O) {
      O.push(...t);
      return;
    }
    for (O = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), w = 0; w < O.length; w++) {
      const n = O[w];
      process.env.NODE_ENV !== "production" && ze(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    O = null, w = 0;
  }
}
const B = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ue(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => ze(e, n) : Te;
  try {
    for (N = 0; N < g.length; N++) {
      const n = g[N];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), _e(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; N < g.length; N++) {
      const n = g[N];
      n && (n.flags &= -2);
    }
    N = -1, g.length = 0, on(e), fe = null, (g.length || k.length) && Ue(e);
  }
}
function ze(e, t) {
  const n = e.get(t) || 0;
  if (n > en) {
    const s = t.i, r = s && Ee(s.type);
    return He(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const re = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (ee().__VUE_HMR_RUNTIME__ = {
  createRecord: ie(rn),
  rerender: ie(cn),
  reload: ie(ln)
});
const G = /* @__PURE__ */ new Map();
function rn(e, t) {
  return G.has(e) ? !1 : (G.set(e, {
    initialDef: J(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function J(e) {
  return rt(e) ? e.__vccOpts : e;
}
function cn(e, t) {
  const n = G.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, J(s.type).render = t), s.renderCache = [], s.update();
  }));
}
function ln(e, t) {
  const n = G.get(e);
  if (!n) return;
  t = J(t), Se(n.initialDef, t);
  const s = [...n.instances];
  for (let r = 0; r < s.length; r++) {
    const o = s[r], l = J(o.type);
    let i = re.get(l);
    i || (l !== n.initialDef && Se(l, t), re.set(l, i = /* @__PURE__ */ new Set())), i.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (i.add(o), o.ceReload(t.styles), i.delete(o)) : o.parent ? nn(() => {
      o.parent.update(), i.delete(o);
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(l);
  }
  sn(() => {
    re.clear();
  });
}
function Se(e, t) {
  V(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ie(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let C, x = [], pe = !1;
function an(e, ...t) {
  C ? C.emit(e, ...t) : pe || x.push({ event: e, args: t });
}
function je(e, t) {
  var n, s;
  C = e, C ? (C.enabled = !0, x.forEach(({ event: r, args: o }) => C.emit(r, ...o)), x = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    je(o, t);
  }), setTimeout(() => {
    C || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, pe = !0, x = []);
  }, 3e3)) : (pe = !0, x = []);
}
const un = /* @__PURE__ */ fn(
  "component:updated"
  /* COMPONENT_UPDATED */
);
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function fn(e) {
  return (t) => {
    an(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
let d = null, We = null;
function Ne(e) {
  const t = d;
  return d = e, We = e && e.type.__scopeId || null, t;
}
function pn(e, t = d, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && ve(-1);
    const o = Ne(t);
    let l;
    try {
      l = e(...r);
    } finally {
      Ne(o), s._d && ve(1);
    }
    return process.env.NODE_ENV !== "production" && un(t), l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
const dn = (e) => e.__isTeleport;
function Ye(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ye(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
ee().requestIdleCallback;
ee().cancelIdleCallback;
const hn = (e) => !!e.type.__asyncLoader, _n = "components", Ke = Symbol.for("v-ndc");
function gn(e) {
  return S(e) ? mn(_n, e, !1) || e : e || Ke;
}
function mn(e, t, n = !0, s = !1) {
  const r = d || me;
  if (r) {
    const o = r.type;
    {
      const i = Ee(
        o,
        !1
      );
      if (i && (i === t || i === Y(t) || i === le(Y(t))))
        return o;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      be(r[e] || o[e], t) || // global registration
      be(r.appContext[e], t)
    );
    return !l && s ? o : (process.env.NODE_ENV !== "production" && n && !l && v(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), l);
  } else process.env.NODE_ENV !== "production" && v(
    `resolve${le(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function be(e, t) {
  return e && (e[t] || e[Y(t)] || e[le(Y(t))]);
}
function En(e, t, n = {}, s, r) {
  if (d.ce || d.parent && hn(d.parent) && d.parent.ce)
    return P(), q(
      H,
      null,
      [te("slot", n, s && s())],
      64
    );
  let o = e[t];
  process.env.NODE_ENV !== "production" && o && o.length > 1 && (v(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), o = () => []), o && o._c && (o._d = !1), P();
  const l = o && Ge(o(n)), i = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  l && l.key, a = q(
    H,
    {
      key: (i && !Q(i) ? i : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!l && s ? "_fb" : "")
    },
    l || (s ? s() : []),
    l && e._ === 1 ? 64 : -2
  );
  return a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), o && o._c && (o._d = !0), a;
}
function Ge(e) {
  return e.some((t) => qe(t) ? !(t.type === Z || t.type === H && !Ge(t.children)) : !0) ? e : null;
}
const yn = {};
process.env.NODE_ENV !== "production" && (yn.ownKeys = (e) => (v(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const Sn = {}, Je = (e) => Object.getPrototypeOf(e) === Sn, Nn = (e) => e.__isSuspense, H = Symbol.for("v-fgt"), bn = Symbol.for("v-txt"), Z = Symbol.for("v-cmt"), j = [];
let h = null;
function P(e = !1) {
  j.push(h = e ? null : []);
}
function vn() {
  j.pop(), h = j[j.length - 1] || null;
}
let U = 1;
function ve(e, t = !1) {
  U += e, e < 0 && h && t && (h.hasOnce = !0);
}
function Ze(e) {
  return e.dynamicChildren = U > 0 ? h || vt : null, vn(), U > 0 && h && h.push(e), e;
}
function Tn(e, t, n, s, r, o) {
  return Ze(
    Qe(
      e,
      t,
      n,
      s,
      r,
      o,
      !0
    )
  );
}
function q(e, t, n, s, r) {
  return Ze(
    te(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function qe(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const On = (...e) => et(
  ...e
), Xe = ({ key: e }) => e ?? null, W = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? S(e) || he(e) || T(e) ? { i: d, r: e, k: t, f: !!n } : e : null);
function Qe(e, t = null, n = null, s = 0, r = null, o = e === H ? 0 : 1, l = !1, i = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Xe(t),
    ref: t && W(t),
    scopeId: We,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: d
  };
  return i ? (ge(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= S(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && v("VNode created with invalid key (NaN). VNode type:", a.type), U > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  h && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && h.push(a), a;
}
const te = process.env.NODE_ENV !== "production" ? On : et;
function et(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === Ke) && (process.env.NODE_ENV !== "production" && !e && v(`Invalid vnode type when creating vnode: ${e}.`), e = Z), qe(e)) {
    const i = X(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ge(i, n), U > 0 && !o && h && (i.shapeFlag & 6 ? h[h.indexOf(e)] = i : h.push(i)), i.patchFlag = -2, i;
  }
  if (rt(e) && (e = e.__vccOpts), t) {
    t = Cn(t);
    let { class: i, style: a } = t;
    i && !S(i) && (t.class = M(i)), b(a) && (ue(a) && !m(a) && (a = V({}, a)), t.style = F(a));
  }
  const l = S(e) ? 1 : Nn(e) ? 128 : dn(e) ? 64 : b(e) ? 4 : T(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && l & 4 && ue(e) && (e = I(e), v(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Qe(
    e,
    t,
    n,
    s,
    r,
    l,
    o,
    !0
  );
}
function Cn(e) {
  return e ? ue(e) || Je(e) ? V({}, e) : e : null;
}
function X(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: l, children: i, transition: a } = e, _ = t ? In(r || {}, t) : r, E = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: _,
    key: _ && Xe(_),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? m(o) ? o.concat(W(t)) : [o, W(t)] : W(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && l === -1 && m(i) ? i.map(tt) : i,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== H ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && X(e.ssContent),
    ssFallback: e.ssFallback && X(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Ye(
    E,
    a.clone(E)
  ), E;
}
function tt(e) {
  const t = X(e);
  return m(e.children) && (t.children = e.children.map(tt)), t;
}
function nt(e = " ", t = 0) {
  return te(bn, null, e, t);
}
function Dn(e = "", t = !1) {
  return t ? (P(), q(Z, null, e)) : te(Z, null, e);
}
function ge(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (m(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), ge(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Je(t) ? t._ctx = d : r === 3 && d && (d.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else T(t) ? (t = { default: t, _ctx: d }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [nt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function In(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = M([t.class, s.class]));
      else if (r === "style")
        t.style = F([t.style, s.style]);
      else if (Tt(r)) {
        const o = t[r], l = s[r];
        l && o !== l && !(m(o) && o.includes(l)) && (t[r] = o ? [].concat(o, l) : l);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
let me = null;
const Rn = () => me || d;
{
  const e = ee(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((l) => l(o)) : r[0](o);
    };
  };
  t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => me = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => st = n
  );
}
let st = !1;
process.env.NODE_ENV;
const wn = /(?:^|[-_])(\w)/g, kn = (e) => e.replace(wn, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ee(e, t = !0) {
  return T(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ot(e, t, n = !1) {
  let s = Ee(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (o) => {
      for (const l in o)
        if (o[l] === t)
          return l;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? kn(s) : n ? "App" : "Anonymous";
}
function rt(e) {
  return T(e) && "__vccOpts" in e;
}
const z = (e, t) => {
  const n = Wt(e, t, st);
  if (process.env.NODE_ENV !== "production") {
    const s = Rn();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Vn() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(c) {
      return b(c) ? c.__isVue ? ["div", e, "VueInstance"] : he(c) ? [
        "div",
        {},
        ["span", e, E(c)],
        "<",
        // avoid debugger accessing value affecting behavior
        i("_value" in c ? c._value : c),
        ">"
      ] : Fe(c) ? [
        "div",
        {},
        ["span", e, se(c) ? "ShallowReactive" : "Reactive"],
        "<",
        i(c),
        `>${ae(c) ? " (readonly)" : ""}`
      ] : ae(c) ? [
        "div",
        {},
        ["span", e, se(c) ? "ShallowReadonly" : "Readonly"],
        "<",
        i(c),
        ">"
      ] : null : null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...o(c.$)
        ];
    }
  };
  function o(c) {
    const f = [];
    c.type.props && c.props && f.push(l("props", I(c.props))), c.setupState !== ce && f.push(l("setup", c.setupState)), c.data !== ce && f.push(l("data", I(c.data)));
    const u = a(c, "computed");
    u && f.push(l("computed", u));
    const y = a(c, "inject");
    return y && f.push(l("injected", y)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), f;
  }
  function l(c, f) {
    return f = V({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((u) => [
          "div",
          {},
          ["span", s, u + ": "],
          i(f[u], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function i(c, f = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", s, c] : b(c) ? ["object", { object: f ? I(c) : c }] : ["span", n, String(c)];
  }
  function a(c, f) {
    const u = c.type;
    if (T(u))
      return;
    const y = {};
    for (const A in c.ctx)
      _(u, A, f) && (y[A] = c.ctx[A]);
    return y;
  }
  function _(c, f, u) {
    const y = c[u];
    if (m(y) && y.includes(f) || b(y) && f in y || c.extends && _(c.extends, f, u) || c.mixins && c.mixins.some((A) => _(A, f, u)))
      return !0;
  }
  function E(c) {
    return se(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function An() {
  Vn();
}
process.env.NODE_ENV !== "production" && An();
const xn = {
  __name: "en-button",
  props: {
    as: {
      type: String,
      default: "button"
    },
    label: {
      type: String
    },
    variant: {
      type: String
    },
    intent: {
      type: String
    },
    inertia: {
      type: Boolean,
      default: !1
    },
    href: {
      type: String
    },
    linkPageButton: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String
    },
    iconRight: {
      type: Boolean,
      default: !1
    },
    sizeMedium: {
      type: Boolean,
      default: !1
    },
    sizeSmall: {
      type: Boolean,
      default: !1
    },
    loadable: {
      type: Boolean,
      default: !1
    },
    isLoading: {
      type: Boolean,
      default: !1
    },
    isSuccess: {
      type: Boolean,
      default: !1
    },
    noWrap: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const { getStyleClass: n, VARIANTS: s, INTENTS: r, ATTRIBUTES: o } = bt(), l = t, i = e, a = z(() => {
      const u = [];
      return i.icon && u.push(o.WITH_ICON), i.sizeMedium ? u.push(o.SIZE_MEDIUM) : i.sizeSmall && u.push(o.SIZE_SMALL), i.loadable && u.push(o.LOADABLE), i.isLoading && u.push(o.LOADING), i.isSuccess && u.push(o.SUCCESS), u;
    }), _ = () => {
      l("click");
    }, E = z(() => i.inertia ? "Link" : i.href ? "a" : "button"), c = z(() => {
      if (i.linkPageButton) {
        let u = n(s.GHOST);
        return u += " w-full py-2 mb-2 is-justify-content-flex-start wrap", u;
      }
      return n(i.variant, i.intent, a.value);
    }), f = z(() => {
      if (i.icon) {
        const u = [i.sizeSmall ? "is-size-7" : "is-size-6"];
        return i.icon.startsWith("fa") ? (u.push(i.icon), i.icon.includes("fa-") && u.push("fas")) : u.push("fas", "fa-" + i.icon), i.iconRight ? u.push("ml-3") : u.push("mr-3"), u;
      }
      return null;
    });
    return (u, y) => (P(), q(gn(E.value), {
      class: M([c.value]),
      href: e.href,
      onClick: _,
      as: i.as,
      style: F(i.noWrap ? { whiteSpace: "nowrap" } : null)
    }, {
      default: pn(() => [
        i.icon ? (P(), Tn("span", {
          key: 0,
          class: M(f.value),
          style: F(e.iconRight ? { order: 1 } : null)
        }, null, 6)) : Dn("", !0),
        En(u.$slots, "default", {}, () => [
          nt(Ie(e.label), 1)
        ])
      ]),
      _: 3
    }, 8, ["class", "href", "as", "style"]));
  }
};
export {
  xn as EnButton,
  bt as useButtonStyles
};
