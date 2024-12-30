let is = [], gl = [];
(() => {
  let s = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < s.length; e++)
    (e % 2 ? gl : is).push(t = t + s[e]);
})();
function $h(s) {
  if (s < 768)
    return !1;
  for (let e = 0, t = is.length; ; ) {
    let i = e + t >> 1;
    if (s < is[i])
      t = i;
    else if (s >= gl[i])
      e = i + 1;
    else
      return !0;
    if (e == t)
      return !1;
  }
}
function Ar(s) {
  return s >= 127462 && s <= 127487;
}
const Or = 8205;
function Uh(s, e, t = !0, i = !0) {
  return (t ? ml : jh)(s, e, i);
}
function ml(s, e, t) {
  if (e == s.length)
    return e;
  e && yl(s.charCodeAt(e)) && bl(s.charCodeAt(e - 1)) && e--;
  let i = Rn(s, e);
  for (e += Mr(i); e < s.length; ) {
    let n = Rn(s, e);
    if (i == Or || n == Or || t && $h(n))
      e += Mr(n), i = n;
    else if (Ar(n)) {
      let r = 0, o = e - 2;
      for (; o >= 0 && Ar(Rn(s, o)); )
        r++, o -= 2;
      if (r % 2 == 0)
        break;
      e += 2;
    } else
      break;
  }
  return e;
}
function jh(s, e, t) {
  for (; e > 0; ) {
    let i = ml(s, e - 2, t);
    if (i < e)
      return i;
    e--;
  }
  return 0;
}
function Rn(s, e) {
  let t = s.charCodeAt(e);
  if (!bl(t) || e + 1 == s.length)
    return t;
  let i = s.charCodeAt(e + 1);
  return yl(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function yl(s) {
  return s >= 56320 && s < 57344;
}
function bl(s) {
  return s >= 55296 && s < 56320;
}
function Mr(s) {
  return s < 65536 ? 1 : 2;
}
class L {
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  replace(e, t, i) {
    [e, t] = Nt(this, e, t);
    let n = [];
    return this.decompose(0, e, n, 2), i.length && i.decompose(0, i.length, n, 3), this.decompose(t, this.length, n, 1), Fe.from(n, this.length - (t - e) + i.length);
  }
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  slice(e, t = this.length) {
    [e, t] = Nt(this, e, t);
    let i = [];
    return this.decompose(e, t, i, 0), Fe.from(i, t - e);
  }
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), n = new ei(this), r = new ei(e);
    for (let o = t, l = t; ; ) {
      if (n.next(o), r.next(o), o = 0, n.lineBreak != r.lineBreak || n.done != r.done || n.value != r.value)
        return !1;
      if (l += n.value.length, n.done || l >= i)
        return !0;
    }
  }
  iter(e = 1) {
    return new ei(this, e);
  }
  iterRange(e, t = this.length) {
    return new xl(this, e, t);
  }
  iterLines(e, t) {
    let i;
    if (e == null)
      i = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let n = this.line(e).from;
      i = this.iterRange(n, Math.max(n, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new kl(i);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  constructor() {
  }
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? L.empty : e.length <= 32 ? new j(e) : Fe.from(j.split(e, []));
  }
}
class j extends L {
  constructor(e, t = Qh(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, i, n) {
    for (let r = 0; ; r++) {
      let o = this.text[r], l = n + o.length;
      if ((t ? i : l) >= e)
        return new Kh(n, l, i, o);
      n = l + 1, i++;
    }
  }
  decompose(e, t, i, n) {
    let r = e <= 0 && t >= this.length ? this : new j(Dr(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (n & 1) {
      let o = i.pop(), l = qi(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32)
        i.push(new j(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        i.push(new j(l.slice(0, a)), new j(l.slice(a)));
      }
    } else
      i.push(r);
  }
  replace(e, t, i) {
    if (!(i instanceof j))
      return super.replace(e, t, i);
    [e, t] = Nt(this, e, t);
    let n = qi(this.text, qi(i.text, Dr(this.text, 0, e)), t), r = this.length + i.length - (t - e);
    return n.length <= 32 ? new j(n, r) : Fe.from(j.split(n, []), r);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Nt(this, e, t);
    let n = "";
    for (let r = 0, o = 0; r <= t && o < this.text.length; o++) {
      let l = this.text[o], a = r + l.length;
      r > e && o && (n += i), e < a && t > r && (n += l.slice(Math.max(0, e - r), t - r)), r = a + 1;
    }
    return n;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let i = [], n = -1;
    for (let r of e)
      i.push(r), n += r.length + 1, i.length == 32 && (t.push(new j(i, n)), i = [], n = -1);
    return n > -1 && t.push(new j(i, n)), t;
  }
}
class Fe extends L {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let i of e)
      this.lines += i.lines;
  }
  lineInner(e, t, i, n) {
    for (let r = 0; ; r++) {
      let o = this.children[r], l = n + o.length, a = i + o.lines - 1;
      if ((t ? a : l) >= e)
        return o.lineInner(e, t, i, n);
      n = l + 1, i = a + 1;
    }
  }
  decompose(e, t, i, n) {
    for (let r = 0, o = 0; o <= t && r < this.children.length; r++) {
      let l = this.children[r], a = o + l.length;
      if (e <= a && t >= o) {
        let f = n & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        o >= e && a <= t && !f ? i.push(l) : l.decompose(e - o, t - o, i, f);
      }
      o = a + 1;
    }
  }
  replace(e, t, i) {
    if ([e, t] = Nt(this, e, t), i.lines < this.lines)
      for (let n = 0, r = 0; n < this.children.length; n++) {
        let o = this.children[n], l = r + o.length;
        if (e >= r && t <= l) {
          let a = o.replace(e - r, t - r, i), f = this.lines - o.lines + a.lines;
          if (a.lines < f >> 5 - 1 && a.lines > f >> 5 + 1) {
            let h = this.children.slice();
            return h[n] = a, new Fe(h, this.length - (t - e) + i.length);
          }
          return super.replace(r, l, a);
        }
        r = l + 1;
      }
    return super.replace(e, t, i);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Nt(this, e, t);
    let n = "";
    for (let r = 0, o = 0; r < this.children.length && o <= t; r++) {
      let l = this.children[r], a = o + l.length;
      o > e && r && (n += i), e < a && t > o && (n += l.sliceString(e - o, t - o, i)), o = a + 1;
    }
    return n;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof Fe))
      return 0;
    let i = 0, [n, r, o, l] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; n += t, r += t) {
      if (n == o || r == l)
        return i;
      let a = this.children[n], f = e.children[r];
      if (a != f)
        return i + a.scanIdentical(f, t);
      i += a.length + 1;
    }
  }
  static from(e, t = e.reduce((i, n) => i + n.length + 1, -1)) {
    let i = 0;
    for (let d of e)
      i += d.lines;
    if (i < 32) {
      let d = [];
      for (let p of e)
        p.flatten(d);
      return new j(d, t);
    }
    let n = Math.max(32, i >> 5), r = n << 1, o = n >> 1, l = [], a = 0, f = -1, h = [];
    function c(d) {
      let p;
      if (d.lines > r && d instanceof Fe)
        for (let g of d.children)
          c(g);
      else
        d.lines > o && (a > o || !a) ? (u(), l.push(d)) : d instanceof j && a && (p = h[h.length - 1]) instanceof j && d.lines + p.lines <= 32 ? (a += d.lines, f += d.length + 1, h[h.length - 1] = new j(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > n && u(), a += d.lines, f += d.length + 1, h.push(d));
    }
    function u() {
      a != 0 && (l.push(h.length == 1 ? h[0] : Fe.from(h, f)), f = -1, a = h.length = 0);
    }
    for (let d of e)
      c(d);
    return u(), l.length == 1 ? l[0] : new Fe(l, t);
  }
}
L.empty = /* @__PURE__ */ new j([""], 0);
function Qh(s) {
  let e = -1;
  for (let t of s)
    e += t.length + 1;
  return e;
}
function qi(s, e, t = 0, i = 1e9) {
  for (let n = 0, r = 0, o = !0; r < s.length && n <= i; r++) {
    let l = s[r], a = n + l.length;
    a >= t && (a > i && (l = l.slice(0, i - n)), n < t && (l = l.slice(t - n)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), n = a + 1;
  }
  return e;
}
function Dr(s, e, t) {
  return qi(s, [""], e, t);
}
class ei {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof j ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, n = this.nodes[i], r = this.offsets[i], o = r >> 1, l = n instanceof j ? n.text.length : n.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (n instanceof j) {
        let a = n.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = n.children[o + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof j ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class xl {
  constructor(e, t, i) {
    this.value = "", this.done = !1, this.cursor = new ei(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let i = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), i -= e;
    let { value: n } = this.cursor.next(e);
    return this.pos += (n.length + e) * t, this.value = n.length <= i ? n : t < 0 ? n.slice(n.length - i) : n.slice(0, i), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class kl {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: t, lineBreak: i, value: n } = this.inner.next(e);
    return t && this.afterBreak ? (this.value = "", this.afterBreak = !1) : t ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = n, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (L.prototype[Symbol.iterator] = function() {
  return this.iter();
}, ei.prototype[Symbol.iterator] = xl.prototype[Symbol.iterator] = kl.prototype[Symbol.iterator] = function() {
  return this;
});
class Kh {
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.number = i, this.text = n;
  }
  get length() {
    return this.to - this.from;
  }
}
function Nt(s, e, t) {
  return e = Math.max(0, Math.min(s.length, e)), [e, Math.max(e, Math.min(s.length, t))];
}
function oe(s, e, t = !0, i = !0) {
  return Uh(s, e, t, i);
}
function Gh(s) {
  return s >= 56320 && s < 57344;
}
function Xh(s) {
  return s >= 55296 && s < 56320;
}
function ge(s, e) {
  let t = s.charCodeAt(e);
  if (!Xh(t) || e + 1 == s.length)
    return t;
  let i = s.charCodeAt(e + 1);
  return Gh(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function Ks(s) {
  return s <= 65535 ? String.fromCharCode(s) : (s -= 65536, String.fromCharCode((s >> 10) + 55296, (s & 1023) + 56320));
}
function Ve(s) {
  return s < 65536 ? 1 : 2;
}
const ns = /\r\n?|\n/;
var fe = /* @__PURE__ */ function(s) {
  return s[s.Simple = 0] = "Simple", s[s.TrackDel = 1] = "TrackDel", s[s.TrackBefore = 2] = "TrackBefore", s[s.TrackAfter = 3] = "TrackAfter", s;
}(fe || (fe = {}));
class qe {
  constructor(e) {
    this.sections = e;
  }
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2)
      e += this.sections[t];
    return e;
  }
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t + 1];
      e += i < 0 ? this.sections[t] : i;
    }
    return e;
  }
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  iterGaps(e) {
    for (let t = 0, i = 0, n = 0; t < this.sections.length; ) {
      let r = this.sections[t++], o = this.sections[t++];
      o < 0 ? (e(i, n, r), n += r) : n += o, i += r;
    }
  }
  iterChangedRanges(e, t = !1) {
    ss(this, e, t);
  }
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], n = this.sections[t++];
      n < 0 ? e.push(i, n) : e.push(n, i);
    }
    return new qe(e);
  }
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : wl(this, e);
  }
  mapDesc(e, t = !1) {
    return e.empty ? this : rs(this, e, t);
  }
  mapPos(e, t = -1, i = fe.Simple) {
    let n = 0, r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], f = n + l;
      if (a < 0) {
        if (f > e)
          return r + (e - n);
        r += l;
      } else {
        if (i != fe.Simple && f >= e && (i == fe.TrackDel && n < e && f > e || i == fe.TrackBefore && n < e || i == fe.TrackAfter && f > e))
          return null;
        if (f > e || f == e && t < 0 && !l)
          return e == n || t < 0 ? r : r + a;
        r += a;
      }
      n = f;
    }
    if (e > n)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${n}`);
    return r;
  }
  touchesRange(e, t = e) {
    for (let i = 0, n = 0; i < this.sections.length && n <= t; ) {
      let r = this.sections[i++], o = this.sections[i++], l = n + r;
      if (o >= 0 && n <= t && l >= e)
        return n < e && l > t ? "cover" : !0;
      n = l;
    }
    return !1;
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], n = this.sections[t++];
      e += (e ? " " : "") + i + (n >= 0 ? ":" + n : "");
    }
    return e;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new qe(e);
  }
  static create(e) {
    return new qe(e);
  }
}
class X extends qe {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return ss(this, (t, i, n, r, o) => e = e.replace(n, n + (i - t), o), !1), e;
  }
  mapDesc(e, t = !1) {
    return rs(this, e, t, !0);
  }
  invert(e) {
    let t = this.sections.slice(), i = [];
    for (let n = 0, r = 0; n < t.length; n += 2) {
      let o = t[n], l = t[n + 1];
      if (l >= 0) {
        t[n] = l, t[n + 1] = o;
        let a = n >> 1;
        for (; i.length < a; )
          i.push(L.empty);
        i.push(o ? e.slice(r, r + o) : L.empty);
      }
      r += o;
    }
    return new X(t, i);
  }
  compose(e) {
    return this.empty ? e : e.empty ? this : wl(this, e, !0);
  }
  map(e, t = !1) {
    return e.empty ? this : rs(this, e, t, !0);
  }
  iterChanges(e, t = !1) {
    ss(this, e, t);
  }
  get desc() {
    return qe.create(this.sections);
  }
  filter(e) {
    let t = [], i = [], n = [], r = new oi(this);
    e:
      for (let o = 0, l = 0; ; ) {
        let a = o == e.length ? 1e9 : e[o++];
        for (; l < a || l == a && r.len == 0; ) {
          if (r.done)
            break e;
          let h = Math.min(r.len, a - l);
          ie(n, h, -1);
          let c = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
          ie(t, h, c), c > 0 && it(i, t, r.text), r.forward(h), l += h;
        }
        let f = e[o++];
        for (; l < f; ) {
          if (r.done)
            break e;
          let h = Math.min(r.len, f - l);
          ie(t, h, -1), ie(n, h, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(h), l += h;
        }
      }
    return {
      changes: new X(t, i),
      filtered: qe.create(n)
    };
  }
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t], n = this.sections[t + 1];
      n < 0 ? e.push(i) : n == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  static of(e, t, i) {
    let n = [], r = [], o = 0, l = null;
    function a(h = !1) {
      if (!h && !n.length)
        return;
      o < t && ie(n, t - o, -1);
      let c = new X(n, r);
      l = l ? l.compose(c.map(l)) : c, n = [], r = [], o = 0;
    }
    function f(h) {
      if (Array.isArray(h))
        for (let c of h)
          f(c);
      else if (h instanceof X) {
        if (h.length != t)
          throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${t})`);
        a(), l = l ? l.compose(h.map(l)) : h;
      } else {
        let { from: c, to: u = c, insert: d } = h;
        if (c > u || c < 0 || u > t)
          throw new RangeError(`Invalid change range ${c} to ${u} (in doc of length ${t})`);
        let p = d ? typeof d == "string" ? L.of(d.split(i || ns)) : d : L.empty, g = p.length;
        if (c == u && g == 0)
          return;
        c < o && a(), c > o && ie(n, c - o, -1), ie(n, u - c, g), it(r, n, p), o = u;
      }
    }
    return f(e), a(!l), l;
  }
  static empty(e) {
    return new X(e ? [e, -1] : [], []);
  }
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], i = [];
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (typeof r == "number")
        t.push(r, -1);
      else {
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1)
          t.push(r[0], 0);
        else {
          for (; i.length < n; )
            i.push(L.empty);
          i[n] = L.of(r.slice(1)), t.push(r[0], i[n].length);
        }
      }
    }
    return new X(t, i);
  }
  static createSet(e, t) {
    return new X(e, t);
  }
}
function ie(s, e, t, i = !1) {
  if (e == 0 && t <= 0)
    return;
  let n = s.length - 2;
  n >= 0 && t <= 0 && t == s[n + 1] ? s[n] += e : n >= 0 && e == 0 && s[n] == 0 ? s[n + 1] += t : i ? (s[n] += e, s[n + 1] += t) : s.push(e, t);
}
function it(s, e, t) {
  if (t.length == 0)
    return;
  let i = e.length - 2 >> 1;
  if (i < s.length)
    s[s.length - 1] = s[s.length - 1].append(t);
  else {
    for (; s.length < i; )
      s.push(L.empty);
    s.push(t);
  }
}
function ss(s, e, t) {
  let i = s.inserted;
  for (let n = 0, r = 0, o = 0; o < s.sections.length; ) {
    let l = s.sections[o++], a = s.sections[o++];
    if (a < 0)
      n += l, r += l;
    else {
      let f = n, h = r, c = L.empty;
      for (; f += l, h += a, a && i && (c = c.append(i[o - 2 >> 1])), !(t || o == s.sections.length || s.sections[o + 1] < 0); )
        l = s.sections[o++], a = s.sections[o++];
      e(n, f, r, h, c), n = f, r = h;
    }
  }
}
function rs(s, e, t, i = !1) {
  let n = [], r = i ? [] : null, o = new oi(s), l = new oi(e);
  for (let a = -1; ; ) {
    if (o.done && l.len || l.done && o.len)
      throw new Error("Mismatched change set lengths");
    if (o.ins == -1 && l.ins == -1) {
      let f = Math.min(o.len, l.len);
      ie(n, f, -1), o.forward(f), l.forward(f);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !t))) {
      let f = l.len;
      for (ie(n, l.ins, -1); f; ) {
        let h = Math.min(o.len, f);
        o.ins >= 0 && a < o.i && o.len <= h && (ie(n, 0, o.ins), r && it(r, n, o.text), a = o.i), o.forward(h), f -= h;
      }
      l.next();
    } else if (o.ins >= 0) {
      let f = 0, h = o.len;
      for (; h; )
        if (l.ins == -1) {
          let c = Math.min(h, l.len);
          f += c, h -= c, l.forward(c);
        } else if (l.ins == 0 && l.len < h)
          h -= l.len, l.next();
        else
          break;
      ie(n, f, a < o.i ? o.ins : 0), r && a < o.i && it(r, n, o.text), a = o.i, o.forward(o.len - h);
    } else {
      if (o.done && l.done)
        return r ? X.createSet(n, r) : qe.create(n);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function wl(s, e, t = !1) {
  let i = [], n = t ? [] : null, r = new oi(s), o = new oi(e);
  for (let l = !1; ; ) {
    if (r.done && o.done)
      return n ? X.createSet(i, n) : qe.create(i);
    if (r.ins == 0)
      ie(i, r.len, 0, l), r.next();
    else if (o.len == 0 && !o.done)
      ie(i, 0, o.ins, l), n && it(n, i, o.text), o.next();
    else {
      if (r.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(r.len2, o.len), f = i.length;
        if (r.ins == -1) {
          let h = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          ie(i, a, h, l), n && h && it(n, i, o.text);
        } else
          o.ins == -1 ? (ie(i, r.off ? 0 : r.len, a, l), n && it(n, i, r.textBit(a))) : (ie(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), n && !o.off && it(n, i, o.text));
        l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > f), r.forward2(a), o.forward(a);
      }
    }
  }
}
class oi {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, t = this.i - 2 >> 1;
    return t >= e.length ? L.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, i = this.i - 2 >> 1;
    return i >= t.length && !e ? L.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class yt {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.flags = i;
  }
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  get empty() {
    return this.from == this.to;
  }
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  get goalColumn() {
    let e = this.flags >> 6;
    return e == 16777215 ? void 0 : e;
  }
  map(e, t = -1) {
    let i, n;
    return this.empty ? i = n = e.mapPos(this.from, t) : (i = e.mapPos(this.from, 1), n = e.mapPos(this.to, -1)), i == this.from && n == this.to ? this : new yt(i, n, this.flags);
  }
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor)
      return k.range(e, t);
    let i = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return k.range(this.anchor, i);
  }
  eq(e, t = !1) {
    return this.anchor == e.anchor && this.head == e.head && (!t || !this.empty || this.assoc == e.assoc);
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return k.range(e.anchor, e.head);
  }
  static create(e, t, i) {
    return new yt(e, t, i);
  }
}
class k {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  map(e, t = -1) {
    return e.empty ? this : k.create(this.ranges.map((i) => i.map(e, t)), this.mainIndex);
  }
  eq(e, t = !1) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let i = 0; i < this.ranges.length; i++)
      if (!this.ranges[i].eq(e.ranges[i], t))
        return !1;
    return !0;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return this.ranges.length == 1 ? this : new k([this.main], 0);
  }
  addRange(e, t = !0) {
    return k.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  replaceRange(e, t = this.mainIndex) {
    let i = this.ranges.slice();
    return i[t] = e, k.create(i, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new k(e.ranges.map((t) => yt.fromJSON(t)), e.main);
  }
  static single(e, t = e) {
    return new k([k.range(e, t)], 0);
  }
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, n = 0; n < e.length; n++) {
      let r = e[n];
      if (r.empty ? r.from <= i : r.from < i)
        return k.normalized(e.slice(), t);
      i = r.to;
    }
    return new k(e, t);
  }
  static cursor(e, t = 0, i, n) {
    return yt.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (n != null ? n : 16777215) << 6);
  }
  static range(e, t, i, n) {
    let r = (i != null ? i : 16777215) << 6 | (n == null ? 7 : Math.min(6, n));
    return t < e ? yt.create(t, e, 48 | r) : yt.create(e, t, (t > e ? 8 : 0) | r);
  }
  static normalized(e, t = 0) {
    let i = e[t];
    e.sort((n, r) => n.from - r.from), t = e.indexOf(i);
    for (let n = 1; n < e.length; n++) {
      let r = e[n], o = e[n - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from, a = Math.max(r.to, o.to);
        n <= t && t--, e.splice(--n, 2, r.anchor > r.head ? k.range(a, l) : k.range(l, a));
      }
    }
    return new k(e, t);
  }
}
function vl(s, e) {
  for (let t of s.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let Gs = 0;
class D {
  constructor(e, t, i, n, r) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = n, this.id = Gs++, this.default = e([]), this.extensions = typeof r == "function" ? r(this) : r;
  }
  get reader() {
    return this;
  }
  static define(e = {}) {
    return new D(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : Xs), !!e.static, e.enables);
  }
  of(e) {
    return new $i([], this, 0, e);
  }
  compute(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new $i(e, this, 1, t);
  }
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new $i(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
  }
}
function Xs(s, e) {
  return s == e || s.length == e.length && s.every((t, i) => t === e[i]);
}
class $i {
  constructor(e, t, i, n) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = n, this.id = Gs++;
  }
  dynamicSlot(e) {
    var t;
    let i = this.value, n = this.facet.compareInput, r = this.id, o = e[r] >> 1, l = this.type == 2, a = !1, f = !1, h = [];
    for (let c of this.dependencies)
      c == "doc" ? a = !0 : c == "selection" ? f = !0 : (((t = e[c.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && h.push(e[c.id]);
    return {
      create(c) {
        return c.values[o] = i(c), 1;
      },
      update(c, u) {
        if (a && u.docChanged || f && (u.docChanged || u.selection) || os(c, h)) {
          let d = i(c);
          if (l ? !Tr(d, c.values[o], n) : !n(d, c.values[o]))
            return c.values[o] = d, 1;
        }
        return 0;
      },
      reconfigure: (c, u) => {
        let d, p = u.config.address[r];
        if (p != null) {
          let g = en(u, p);
          if (this.dependencies.every((m) => m instanceof D ? u.facet(m) === c.facet(m) : m instanceof Pe ? u.field(m, !1) == c.field(m, !1) : !0) || (l ? Tr(d = i(c), g, n) : n(d = i(c), g)))
            return c.values[o] = g, 0;
        } else
          d = i(c);
        return c.values[o] = d, 1;
      }
    };
  }
}
function Tr(s, e, t) {
  if (s.length != e.length)
    return !1;
  for (let i = 0; i < s.length; i++)
    if (!t(s[i], e[i]))
      return !1;
  return !0;
}
function os(s, e) {
  let t = !1;
  for (let i of e)
    ti(s, i) & 1 && (t = !0);
  return t;
}
function Yh(s, e, t) {
  let i = t.map((a) => s[a.id]), n = t.map((a) => a.type), r = i.filter((a) => !(a & 1)), o = s[e.id] >> 1;
  function l(a) {
    let f = [];
    for (let h = 0; h < i.length; h++) {
      let c = en(a, i[h]);
      if (n[h] == 2)
        for (let u of c)
          f.push(u);
      else
        f.push(c);
    }
    return e.combine(f);
  }
  return {
    create(a) {
      for (let f of i)
        ti(a, f);
      return a.values[o] = l(a), 1;
    },
    update(a, f) {
      if (!os(a, r))
        return 0;
      let h = l(a);
      return e.compare(h, a.values[o]) ? 0 : (a.values[o] = h, 1);
    },
    reconfigure(a, f) {
      let h = os(a, i), c = f.config.facets[e.id], u = f.facet(e);
      if (c && !h && Xs(t, c))
        return a.values[o] = u, 0;
      let d = l(a);
      return e.compare(d, u) ? (a.values[o] = u, 0) : (a.values[o] = d, 1);
    }
  };
}
const Pr = /* @__PURE__ */ D.define({ static: !0 });
class Pe {
  constructor(e, t, i, n, r) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = n, this.spec = r, this.provides = void 0;
  }
  static define(e) {
    let t = new Pe(Gs++, e.create, e.update, e.compare || ((i, n) => i === n), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(Pr).find((i) => i.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (i) => (i.values[t] = this.create(i), 1),
      update: (i, n) => {
        let r = i.values[t], o = this.updateF(r, n);
        return this.compareF(r, o) ? 0 : (i.values[t] = o, 1);
      },
      reconfigure: (i, n) => n.config.address[this.id] != null ? (i.values[t] = n.field(this), 0) : (i.values[t] = this.create(i), 1)
    };
  }
  init(e) {
    return [this, Pr.of({ field: this, create: e })];
  }
  get extension() {
    return this;
  }
}
const mt = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function $t(s) {
  return (e) => new Sl(e, s);
}
const Ys = {
  highest: /* @__PURE__ */ $t(mt.highest),
  high: /* @__PURE__ */ $t(mt.high),
  default: /* @__PURE__ */ $t(mt.default),
  low: /* @__PURE__ */ $t(mt.low),
  lowest: /* @__PURE__ */ $t(mt.lowest)
};
class Sl {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class xn {
  of(e) {
    return new ls(this, e);
  }
  reconfigure(e) {
    return xn.reconfigure.of({ compartment: this, extension: e });
  }
  get(e) {
    return e.config.compartments.get(this);
  }
}
class ls {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class Zi {
  constructor(e, t, i, n, r, o) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = i, this.address = n, this.staticValues = r, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < i.length; )
      this.statusTemplate.push(0);
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, i) {
    let n = [], r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let u of Jh(e, t, o))
      u instanceof Pe ? n.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let l = /* @__PURE__ */ Object.create(null), a = [], f = [];
    for (let u of n)
      l[u.id] = f.length << 1, f.push((d) => u.slot(d));
    let h = i == null ? void 0 : i.config.facets;
    for (let u in r) {
      let d = r[u], p = d[0].facet, g = h && h[u] || [];
      if (d.every((m) => m.type == 0))
        if (l[p.id] = a.length << 1 | 1, Xs(g, d))
          a.push(i.facet(p));
        else {
          let m = p.combine(d.map((y) => y.value));
          a.push(i && p.compare(m, i.facet(p)) ? i.facet(p) : m);
        }
      else {
        for (let m of d)
          m.type == 0 ? (l[m.id] = a.length << 1 | 1, a.push(m.value)) : (l[m.id] = f.length << 1, f.push((y) => m.dynamicSlot(y)));
        l[p.id] = f.length << 1, f.push((m) => Yh(m, p, d));
      }
    }
    let c = f.map((u) => u(l));
    return new Zi(e, o, c, l, a, r);
  }
}
function Jh(s, e, t) {
  let i = [[], [], [], [], []], n = /* @__PURE__ */ new Map();
  function r(o, l) {
    let a = n.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let f = i[a].indexOf(o);
      f > -1 && i[a].splice(f, 1), o instanceof ls && t.delete(o.compartment);
    }
    if (n.set(o, l), Array.isArray(o))
      for (let f of o)
        r(f, l);
    else if (o instanceof ls) {
      if (t.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let f = e.get(o.compartment) || o.inner;
      t.set(o.compartment, f), r(f, l);
    } else if (o instanceof Sl)
      r(o.inner, o.prec);
    else if (o instanceof Pe)
      i[l].push(o), o.provides && r(o.provides, l);
    else if (o instanceof $i)
      i[l].push(o), o.facet.extensions && r(o.facet.extensions, mt.default);
    else {
      let f = o.extension;
      if (!f)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(f, l);
    }
  }
  return r(s, mt.default), i.reduce((o, l) => o.concat(l));
}
function ti(s, e) {
  if (e & 1)
    return 2;
  let t = e >> 1, i = s.status[t];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  s.status[t] = 4;
  let n = s.computeSlot(s, s.config.dynamicSlots[t]);
  return s.status[t] = 2 | n;
}
function en(s, e) {
  return e & 1 ? s.config.staticValues[e >> 1] : s.values[e >> 1];
}
const Cl = /* @__PURE__ */ D.define(), as = /* @__PURE__ */ D.define({
  combine: (s) => s.some((e) => e),
  static: !0
}), Al = /* @__PURE__ */ D.define({
  combine: (s) => s.length ? s[0] : void 0,
  static: !0
}), Ol = /* @__PURE__ */ D.define(), Ml = /* @__PURE__ */ D.define(), Dl = /* @__PURE__ */ D.define(), Tl = /* @__PURE__ */ D.define({
  combine: (s) => s.length ? s[0] : !1
});
class Ye {
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  static define() {
    return new Zh();
  }
}
class Zh {
  of(e) {
    return new Ye(this, e);
  }
}
class ef {
  constructor(e) {
    this.map = e;
  }
  of(e) {
    return new W(this, e);
  }
}
class W {
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new W(this.type, t);
  }
  is(e) {
    return this.type == e;
  }
  static define(e = {}) {
    return new ef(e.map || ((t) => t));
  }
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let i = [];
    for (let n of e) {
      let r = n.map(t);
      r && i.push(r);
    }
    return i;
  }
}
W.reconfigure = /* @__PURE__ */ W.define();
W.appendConfig = /* @__PURE__ */ W.define();
class Y {
  constructor(e, t, i, n, r, o) {
    this.startState = e, this.changes = t, this.selection = i, this.effects = n, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, i && vl(i, t.newLength), r.some((l) => l.type == Y.time) || (this.annotations = r.concat(Y.time.of(Date.now())));
  }
  static create(e, t, i, n, r, o) {
    return new Y(e, t, i, n, r, o);
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  annotation(e) {
    for (let t of this.annotations)
      if (t.type == e)
        return t.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(e) {
    let t = this.annotation(Y.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
Y.time = /* @__PURE__ */ Ye.define();
Y.userEvent = /* @__PURE__ */ Ye.define();
Y.addToHistory = /* @__PURE__ */ Ye.define();
Y.remote = /* @__PURE__ */ Ye.define();
function tf(s, e) {
  let t = [];
  for (let i = 0, n = 0; ; ) {
    let r, o;
    if (i < s.length && (n == e.length || e[n] >= s[i]))
      r = s[i++], o = s[i++];
    else if (n < e.length)
      r = e[n++], o = e[n++];
    else
      return t;
    !t.length || t[t.length - 1] < r ? t.push(r, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function Pl(s, e, t) {
  var i;
  let n, r, o;
  return t ? (n = e.changes, r = X.empty(e.changes.length), o = s.changes.compose(e.changes)) : (n = e.changes.map(s.changes), r = s.changes.mapDesc(e.changes, !0), o = s.changes.compose(n)), {
    changes: o,
    selection: e.selection ? e.selection.map(r) : (i = s.selection) === null || i === void 0 ? void 0 : i.map(n),
    effects: W.mapEffects(s.effects, n).concat(W.mapEffects(e.effects, r)),
    annotations: s.annotations.length ? s.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: s.scrollIntoView || e.scrollIntoView
  };
}
function hs(s, e, t) {
  let i = e.selection, n = Bt(e.annotations);
  return e.userEvent && (n = n.concat(Y.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof X ? e.changes : X.of(e.changes || [], t, s.facet(Al)),
    selection: i && (i instanceof k ? i : k.single(i.anchor, i.head)),
    effects: Bt(e.effects),
    annotations: n,
    scrollIntoView: !!e.scrollIntoView
  };
}
function Bl(s, e, t) {
  let i = hs(s, e.length ? e[0] : {}, s.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let r = 1; r < e.length; r++) {
    e[r].filter === !1 && (t = !1);
    let o = !!e[r].sequential;
    i = Pl(i, hs(s, e[r], o ? i.changes.newLength : s.doc.length), o);
  }
  let n = Y.create(s, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return sf(t ? nf(n) : n);
}
function nf(s) {
  let e = s.startState, t = !0;
  for (let n of e.facet(Ol)) {
    let r = n(s);
    if (r === !1) {
      t = !1;
      break;
    }
    Array.isArray(r) && (t = t === !0 ? r : tf(t, r));
  }
  if (t !== !0) {
    let n, r;
    if (t === !1)
      r = s.changes.invertedDesc, n = X.empty(e.doc.length);
    else {
      let o = s.changes.filter(t);
      n = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    s = Y.create(e, n, s.selection && s.selection.map(r), W.mapEffects(s.effects, r), s.annotations, s.scrollIntoView);
  }
  let i = e.facet(Ml);
  for (let n = i.length - 1; n >= 0; n--) {
    let r = i[n](s);
    r instanceof Y ? s = r : Array.isArray(r) && r.length == 1 && r[0] instanceof Y ? s = r[0] : s = Bl(e, Bt(r), !1);
  }
  return s;
}
function sf(s) {
  let e = s.startState, t = e.facet(Dl), i = s;
  for (let n = t.length - 1; n >= 0; n--) {
    let r = t[n](s);
    r && Object.keys(r).length && (i = Pl(i, hs(e, r, s.changes.newLength), !0));
  }
  return i == s ? s : Y.create(e, s.changes, s.selection, i.effects, i.annotations, i.scrollIntoView);
}
const rf = [];
function Bt(s) {
  return s == null ? rf : Array.isArray(s) ? s : [s];
}
var se = /* @__PURE__ */ function(s) {
  return s[s.Word = 0] = "Word", s[s.Space = 1] = "Space", s[s.Other = 2] = "Other", s;
}(se || (se = {}));
const of = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let fs;
try {
  fs = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function lf(s) {
  if (fs)
    return fs.test(s);
  for (let e = 0; e < s.length; e++) {
    let t = s[e];
    if (/\w/.test(t) || t > "\x80" && (t.toUpperCase() != t.toLowerCase() || of.test(t)))
      return !0;
  }
  return !1;
}
function af(s) {
  return (e) => {
    if (!/\S/.test(e))
      return se.Space;
    if (lf(e))
      return se.Word;
    for (let t = 0; t < s.length; t++)
      if (e.indexOf(s[t]) > -1)
        return se.Word;
    return se.Other;
  };
}
class I {
  constructor(e, t, i, n, r, o) {
    this.config = e, this.doc = t, this.selection = i, this.values = n, this.status = e.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      ti(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return ti(this, i), en(this, i);
  }
  update(...e) {
    return Bl(this, e, !0);
  }
  applyTransaction(e) {
    let t = this.config, { base: i, compartments: n } = t;
    for (let l of e.effects)
      l.is(xn.reconfigure) ? (t && (n = /* @__PURE__ */ new Map(), t.compartments.forEach((a, f) => n.set(f, a)), t = null), n.set(l.value.compartment, l.value.extension)) : l.is(W.reconfigure) ? (t = null, i = l.value) : l.is(W.appendConfig) && (t = null, i = Bt(i).concat(l.value));
    let r;
    t ? r = e.startState.values.slice() : (t = Zi.resolve(i, n, this), r = new I(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (a, f) => f.reconfigure(a, this), null).values);
    let o = e.startState.facet(as) ? e.newSelection : e.newSelection.asSingle();
    new I(t, e.newDoc, o, r, (l, a) => a.update(l, e), e);
  }
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
      changes: { from: t.from, to: t.to, insert: e },
      range: k.cursor(t.from + e.length)
    }));
  }
  changeByRange(e) {
    let t = this.selection, i = e(t.ranges[0]), n = this.changes(i.changes), r = [i.range], o = Bt(i.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), f = this.changes(a.changes), h = f.map(n);
      for (let u = 0; u < l; u++)
        r[u] = r[u].map(h);
      let c = n.mapDesc(f, !0);
      r.push(a.range.map(c)), n = n.compose(h), o = W.mapEffects(o, h).concat(W.mapEffects(Bt(a.effects), c));
    }
    return {
      changes: n,
      selection: k.create(r, t.mainIndex),
      effects: o
    };
  }
  changes(e = []) {
    return e instanceof X ? e : X.of(e, this.doc.length, this.facet(I.lineSeparator));
  }
  toText(e) {
    return L.of(e.split(this.facet(I.lineSeparator) || ns));
  }
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (ti(this, t), en(this, t));
  }
  toJSON(e) {
    let t = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let i in e) {
        let n = e[i];
        n instanceof Pe && this.config.address[n.id] != null && (t[i] = n.spec.toJSON(this.field(e[i]), this));
      }
    return t;
  }
  static fromJSON(e, t = {}, i) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let n = [];
    if (i) {
      for (let r in i)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          let o = i[r], l = e[r];
          n.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return I.create({
      doc: e.doc,
      selection: k.fromJSON(e.selection),
      extensions: t.extensions ? n.concat([t.extensions]) : n
    });
  }
  static create(e = {}) {
    let t = Zi.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof L ? e.doc : L.of((e.doc || "").split(t.staticFacet(I.lineSeparator) || ns)), n = e.selection ? e.selection instanceof k ? e.selection : k.single(e.selection.anchor, e.selection.head) : k.single(0);
    return vl(n, i.length), t.staticFacet(as) || (n = n.asSingle()), new I(t, i, n, t.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  get tabSize() {
    return this.facet(I.tabSize);
  }
  get lineBreak() {
    return this.facet(I.lineSeparator) || `
`;
  }
  get readOnly() {
    return this.facet(Tl);
  }
  phrase(e, ...t) {
    for (let i of this.facet(I.phrases))
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (i, n) => {
      if (n == "$")
        return "$";
      let r = +(n || 1);
      return !r || r > t.length ? i : t[r - 1];
    })), e;
  }
  languageDataAt(e, t, i = -1) {
    let n = [];
    for (let r of this.facet(Cl))
      for (let o of r(this, t, i))
        Object.prototype.hasOwnProperty.call(o, e) && n.push(o[e]);
    return n;
  }
  charCategorizer(e) {
    return af(this.languageDataAt("wordChars", e).join(""));
  }
  wordAt(e) {
    let { text: t, from: i, length: n } = this.doc.lineAt(e), r = this.charCategorizer(e), o = e - i, l = e - i;
    for (; o > 0; ) {
      let a = oe(t, o, !1);
      if (r(t.slice(a, o)) != se.Word)
        break;
      o = a;
    }
    for (; l < n; ) {
      let a = oe(t, l);
      if (r(t.slice(l, a)) != se.Word)
        break;
      l = a;
    }
    return o == l ? null : k.range(o + i, l + i);
  }
}
I.allowMultipleSelections = as;
I.tabSize = /* @__PURE__ */ D.define({
  combine: (s) => s.length ? s[0] : 4
});
I.lineSeparator = Al;
I.readOnly = Tl;
I.phrases = /* @__PURE__ */ D.define({
  compare(s, e) {
    let t = Object.keys(s), i = Object.keys(e);
    return t.length == i.length && t.every((n) => s[n] == e[n]);
  }
});
I.languageData = Cl;
I.changeFilter = Ol;
I.transactionFilter = Ml;
I.transactionExtender = Dl;
xn.reconfigure = /* @__PURE__ */ W.define();
function bi(s, e, t = {}) {
  let i = {};
  for (let n of s)
    for (let r of Object.keys(n)) {
      let o = n[r], l = i[r];
      if (l === void 0)
        i[r] = o;
      else if (!(l === o || o === void 0))
        if (Object.hasOwnProperty.call(t, r))
          i[r] = t[r](l, o);
        else
          throw new Error("Config merge conflict for field " + r);
    }
  for (let n in e)
    i[n] === void 0 && (i[n] = e[n]);
  return i;
}
class wt {
  eq(e) {
    return this == e;
  }
  range(e, t = e) {
    return li.create(e, t, this);
  }
}
wt.prototype.startSide = wt.prototype.endSide = 0;
wt.prototype.point = !1;
wt.prototype.mapMode = fe.TrackDel;
class li {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  static create(e, t, i) {
    return new li(e, t, i);
  }
}
function cs(s, e) {
  return s.from - e.from || s.value.startSide - e.value.startSide;
}
class Js {
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.value = i, this.maxPoint = n;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(e, t, i, n = 0) {
    let r = i ? this.to : this.from;
    for (let o = n, l = r.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, f = r[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o)
        return f >= 0 ? o : l;
      f >= 0 ? l = a : o = a + 1;
    }
  }
  between(e, t, i, n) {
    for (let r = this.findIndex(t, -1e9, !0), o = this.findIndex(i, 1e9, !1, r); r < o; r++)
      if (n(this.from[r] + e, this.to[r] + e, this.value[r]) === !1)
        return !1;
  }
  map(e, t) {
    let i = [], n = [], r = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let f = this.value[a], h = this.from[a] + e, c = this.to[a] + e, u, d;
      if (h == c) {
        let p = t.mapPos(h, f.startSide, f.mapMode);
        if (p == null || (u = d = p, f.startSide != f.endSide && (d = t.mapPos(h, f.endSide), d < u)))
          continue;
      } else if (u = t.mapPos(h, f.startSide), d = t.mapPos(c, f.endSide), u > d || u == d && f.startSide > 0 && f.endSide <= 0)
        continue;
      (d - u || f.endSide - f.startSide) < 0 || (o < 0 && (o = u), f.point && (l = Math.max(l, d - u)), i.push(f), n.push(u - o), r.push(d - o));
    }
    return { mapped: i.length ? new Js(n, r, i, l) : null, pos: o };
  }
}
class F {
  constructor(e, t, i, n) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = n;
  }
  static create(e, t, i, n) {
    return new F(e, t, i, n);
  }
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk)
      e += t.value.length;
    return e;
  }
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  update(e) {
    let { add: t = [], sort: i = !1, filterFrom: n = 0, filterTo: r = this.length } = e, o = e.filter;
    if (t.length == 0 && !o)
      return this;
    if (i && (t = t.slice().sort(cs)), this.isEmpty)
      return t.length ? F.of(t) : this;
    let l = new Rl(this, null, -1).goto(0), a = 0, f = [], h = new ai();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let c = t[a++];
        h.addInner(c.from, c.to, c.value) || f.push(c);
      } else
        l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || n > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && h.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || n > l.to || r < l.from || o(l.from, l.to, l.value)) && (h.addInner(l.from, l.to, l.value) || f.push(li.create(l.from, l.to, l.value))), l.next());
    return h.finishInner(this.nextLayer.isEmpty && !f.length ? F.empty : this.nextLayer.update({ add: f, filter: o, filterFrom: n, filterTo: r }));
  }
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], i = [], n = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], f = e.touchesRange(l, l + a.length);
      if (f === !1)
        n = Math.max(n, a.maxPoint), t.push(a), i.push(e.mapPos(l));
      else if (f === !0) {
        let { mapped: h, pos: c } = a.map(l, e);
        h && (n = Math.max(n, h.maxPoint), t.push(h), i.push(c));
      }
    }
    let r = this.nextLayer.map(e);
    return t.length == 0 ? r : new F(i, t, r || F.empty, n);
  }
  between(e, t, i) {
    if (!this.isEmpty) {
      for (let n = 0; n < this.chunk.length; n++) {
        let r = this.chunkPos[n], o = this.chunk[n];
        if (t >= r && e <= r + o.length && o.between(r, e - r, t - r, i) === !1)
          return;
      }
      this.nextLayer.between(e, t, i);
    }
  }
  iter(e = 0) {
    return hi.from([this]).goto(e);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(e, t = 0) {
    return hi.from(e).goto(t);
  }
  static compare(e, t, i, n, r = -1) {
    let o = e.filter((c) => c.maxPoint > 0 || !c.isEmpty && c.maxPoint >= r), l = t.filter((c) => c.maxPoint > 0 || !c.isEmpty && c.maxPoint >= r), a = Br(o, l, i), f = new Ut(o, a, r), h = new Ut(l, a, r);
    i.iterGaps((c, u, d) => Rr(f, c, h, u, d, n)), i.empty && i.length == 0 && Rr(f, 0, h, 0, 0, n);
  }
  static eq(e, t, i = 0, n) {
    n == null && (n = 1e9 - 1);
    let r = e.filter((h) => !h.isEmpty && t.indexOf(h) < 0), o = t.filter((h) => !h.isEmpty && e.indexOf(h) < 0);
    if (r.length != o.length)
      return !1;
    if (!r.length)
      return !0;
    let l = Br(r, o), a = new Ut(r, l, 0).goto(i), f = new Ut(o, l, 0).goto(i);
    for (; ; ) {
      if (a.to != f.to || !us(a.active, f.active) || a.point && (!f.point || !a.point.eq(f.point)))
        return !1;
      if (a.to > n)
        return !0;
      a.next(), f.next();
    }
  }
  static spans(e, t, i, n, r = -1) {
    let o = new Ut(e, null, r).goto(t), l = t, a = o.openStart;
    for (; ; ) {
      let f = Math.min(o.to, i);
      if (o.point) {
        let h = o.activeForPoint(o.to), c = o.pointFrom < t ? h.length + 1 : o.point.startSide < 0 ? h.length : Math.min(h.length, a);
        n.point(l, f, o.point, h, c, o.pointRank), a = Math.min(o.openEnd(f), h.length);
      } else
        f > l && (n.span(l, f, o.active, a), a = o.openEnd(f));
      if (o.to > i)
        return a + (o.point && o.to > i ? 1 : 0);
      l = o.to, o.next();
    }
  }
  static of(e, t = !1) {
    let i = new ai();
    for (let n of e instanceof li ? [e] : t ? hf(e) : e)
      i.add(n.from, n.to, n.value);
    return i.finish();
  }
  static join(e) {
    if (!e.length)
      return F.empty;
    let t = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--)
      for (let n = e[i]; n != F.empty; n = n.nextLayer)
        t = new F(n.chunkPos, n.chunk, t, Math.max(n.maxPoint, t.maxPoint));
    return t;
  }
}
F.empty = /* @__PURE__ */ new F([], [], null, -1);
function hf(s) {
  if (s.length > 1)
    for (let e = s[0], t = 1; t < s.length; t++) {
      let i = s[t];
      if (cs(e, i) > 0)
        return s.slice().sort(cs);
      e = i;
    }
  return s;
}
F.empty.nextLayer = F.empty;
class ai {
  finishChunk(e) {
    this.chunks.push(new Js(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  add(e, t, i) {
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new ai())).add(e, t, i);
  }
  addInner(e, t, i) {
    let n = e - this.lastTo || i.startSide - this.last.endSide;
    if (n <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return n < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = i, this.lastFrom = e, this.lastTo = t, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
  }
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let i = t.value.length - 1;
    return this.last = t.value[i], this.lastFrom = t.from[i] + e, this.lastTo = t.to[i] + e, !0;
  }
  finish() {
    return this.finishInner(F.empty);
  }
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = F.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function Br(s, e, t) {
  let i = /* @__PURE__ */ new Map();
  for (let r of s)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && i.set(r.chunk[o], r.chunkPos[o]);
  let n = /* @__PURE__ */ new Set();
  for (let r of e)
    for (let o = 0; o < r.chunk.length; o++) {
      let l = i.get(r.chunk[o]);
      l != null && (t ? t.mapPos(l) : l) == r.chunkPos[o] && !(t != null && t.touchesRange(l, l + r.chunk[o].length)) && n.add(r.chunk[o]);
    }
  return n;
}
class Rl {
  constructor(e, t, i, n = 0) {
    this.layer = e, this.skip = t, this.minPoint = i, this.rank = n;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this;
  }
  gotoInner(e, t, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let n = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(n) || this.layer.chunkEnd(this.chunkIndex) < e || n.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let n = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
      (!i || this.rangeIndex < n) && this.setRangeIndex(n);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], i = e + t.from[this.rangeIndex];
        if (this.from = i, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class hi {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let n = [];
    for (let r = 0; r < e.length; r++)
      for (let o = e[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= i && n.push(new Rl(o, t, i, r));
    return n.length == 1 ? n[0] : new hi(n);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap)
      i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      En(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap)
      i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      En(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), En(this.heap, 0);
    }
  }
}
function En(s, e) {
  for (let t = s[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= s.length)
      break;
    let n = s[i];
    if (i + 1 < s.length && n.compare(s[i + 1]) >= 0 && (n = s[i + 1], i++), t.compare(n) < 0)
      break;
    s[i] = t, s[e] = n, e = i;
  }
}
class Ut {
  constructor(e, t, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = hi.from(e, t, i);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    Ai(this.active, e), Ai(this.activeTo, e), Ai(this.activeRank, e), this.minActive = Er(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: n, rank: r } = this.cursor;
    for (; t < this.activeRank.length && (r - this.activeRank[t] || n - this.activeTo[t]) > 0; )
      t++;
    Oi(this.active, t, i), Oi(this.activeTo, t, n), Oi(this.activeRank, t, r), e && Oi(e, t, this.cursor.from), this.minActive = Er(this.active, this.activeTo);
  }
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let n = this.minActive;
      if (n > -1 && (this.activeTo[n] - this.cursor.from || this.active[n].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[n] > e) {
          this.to = this.activeTo[n], this.endSide = this.active[n].endSide;
          break;
        }
        this.removeActive(n), i && Ai(i, n);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let r = this.cursor.value;
          if (!r.point)
            this.addActive(i), this.cursor.next();
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = r, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let n = i.length - 1; n >= 0 && i[n] < e; n--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let t = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > e || this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide) && t.push(this.active[i]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--)
      t++;
    return t;
  }
}
function Rr(s, e, t, i, n, r) {
  s.goto(e), t.goto(i);
  let o = i + n, l = i, a = i - e;
  for (; ; ) {
    let f = s.to + a - t.to, h = f || s.endSide - t.endSide, c = h < 0 ? s.to + a : t.to, u = Math.min(c, o);
    if (s.point || t.point ? s.point && t.point && (s.point == t.point || s.point.eq(t.point)) && us(s.activeForPoint(s.to), t.activeForPoint(t.to)) || r.comparePoint(l, u, s.point, t.point) : u > l && !us(s.active, t.active) && r.compareRange(l, u, s.active, t.active), c > o)
      break;
    (f || s.openEnd != t.openEnd) && r.boundChange && r.boundChange(c), l = c, h <= 0 && s.next(), h >= 0 && t.next();
  }
}
function us(s, e) {
  if (s.length != e.length)
    return !1;
  for (let t = 0; t < s.length; t++)
    if (s[t] != e[t] && !s[t].eq(e[t]))
      return !1;
  return !0;
}
function Ai(s, e) {
  for (let t = e, i = s.length - 1; t < i; t++)
    s[t] = s[t + 1];
  s.pop();
}
function Oi(s, e, t) {
  for (let i = s.length - 1; i >= e; i--)
    s[i + 1] = s[i];
  s[e] = t;
}
function Er(s, e) {
  let t = -1, i = 1e9;
  for (let n = 0; n < e.length; n++)
    (e[n] - i || s[n].endSide - s[t].endSide) < 0 && (t = n, i = e[n]);
  return t;
}
function kn(s, e, t = s.length) {
  let i = 0;
  for (let n = 0; n < t; )
    s.charCodeAt(n) == 9 ? (i += e - i % e, n++) : (i++, n = oe(s, n));
  return i;
}
function ff(s, e, t, i) {
  for (let n = 0, r = 0; ; ) {
    if (r >= e)
      return n;
    if (n == s.length)
      break;
    r += s.charCodeAt(n) == 9 ? t - r % t : 1, n = oe(s, n);
  }
  return i === !0 ? -1 : s.length;
}
const ds = "\u037C", Lr = typeof Symbol > "u" ? "__" + ds : Symbol.for(ds), ps = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), Nr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class rt {
  constructor(e, t) {
    this.rules = [];
    let { finish: i } = t || {};
    function n(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function r(o, l, a, f) {
      let h = [], c = /^@(\w+)\b/.exec(o[0]), u = c && c[1] == "keyframes";
      if (c && l == null)
        return a.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          r(
            d.split(/,\s*/).map((g) => o.map((m) => g.replace(/&/, m))).reduce((g, m) => g.concat(m)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!c)
            throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          r(n(d), p, h, u);
        } else
          p != null && h.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (g) => "-" + g.toLowerCase()) + ": " + p + ";");
      }
      (h.length || u) && a.push((i && !c && !f ? o.map(i) : o).join(", ") + " {" + h.join(" ") + "}");
    }
    for (let o in e)
      r(n(o), e[o], this.rules);
  }
  getRules() {
    return this.rules.join(`
`);
  }
  static newName() {
    let e = Nr[Lr] || 1;
    return Nr[Lr] = e + 1, ds + e.toString(36);
  }
  static mount(e, t, i) {
    let n = e[ps], r = i && i.nonce;
    n ? r && n.setNonce(r) : n = new cf(e, r), n.mount(Array.isArray(t) ? t : [t], e);
  }
}
let Ir = /* @__PURE__ */ new Map();
class cf {
  constructor(e, t) {
    let i = e.ownerDocument || e, n = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && n.CSSStyleSheet) {
      let r = Ir.get(i);
      if (r)
        return e[ps] = r;
      this.sheet = new n.CSSStyleSheet(), Ir.set(i, this);
    } else
      this.styleTag = i.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[ps] = this;
  }
  mount(e, t) {
    let i = this.sheet, n = 0, r = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = this.modules.indexOf(l);
      if (a < r && a > -1 && (this.modules.splice(a, 1), r--, a = -1), a == -1) {
        if (this.modules.splice(r++, 0, l), i)
          for (let f = 0; f < l.rules.length; f++)
            i.insertRule(l.rules[f], n++);
      } else {
        for (; r < a; )
          n += this.modules[r++].rules.length;
        n += l.rules.length, r++;
      }
    }
    if (i)
      t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let o = "";
      for (let a = 0; a < this.modules.length; a++)
        o += this.modules[a].getRules() + `
`;
      this.styleTag.textContent = o;
      let l = t.head || t;
      this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
var ot = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, fi = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, uf = typeof navigator < "u" && /Mac/.test(navigator.platform), df = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var te = 0; te < 10; te++)
  ot[48 + te] = ot[96 + te] = String(te);
for (var te = 1; te <= 24; te++)
  ot[te + 111] = "F" + te;
for (var te = 65; te <= 90; te++)
  ot[te] = String.fromCharCode(te + 32), fi[te] = String.fromCharCode(te);
for (var Ln in ot)
  fi.hasOwnProperty(Ln) || (fi[Ln] = ot[Ln]);
function pf(s) {
  var e = uf && s.metaKey && s.shiftKey && !s.ctrlKey && !s.altKey || df && s.shiftKey && s.key && s.key.length == 1 || s.key == "Unidentified", t = !e && s.key || (s.shiftKey ? fi : ot)[s.keyCode] || s.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
function ci(s) {
  let e;
  return s.nodeType == 11 ? e = s.getSelection ? s : s.ownerDocument : e = s, e.getSelection();
}
function gs(s, e) {
  return e ? s == e || s.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function Ui(s, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return gs(s, e.anchorNode);
  } catch {
    return !1;
  }
}
function ui(s) {
  return s.nodeType == 3 ? St(s, 0, s.nodeValue.length).getClientRects() : s.nodeType == 1 ? s.getClientRects() : [];
}
function ii(s, e, t, i) {
  return t ? Fr(s, e, t, i, -1) || Fr(s, e, t, i, 1) : !1;
}
function vt(s) {
  for (var e = 0; ; e++)
    if (s = s.previousSibling, !s)
      return e;
}
function tn(s) {
  return s.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(s.nodeName);
}
function Fr(s, e, t, i, n) {
  for (; ; ) {
    if (s == t && e == i)
      return !0;
    if (e == (n < 0 ? 0 : $e(s))) {
      if (s.nodeName == "DIV")
        return !1;
      let r = s.parentNode;
      if (!r || r.nodeType != 1)
        return !1;
      e = vt(s) + (n < 0 ? 0 : 1), s = r;
    } else if (s.nodeType == 1) {
      if (s = s.childNodes[e + (n < 0 ? -1 : 0)], s.nodeType == 1 && s.contentEditable == "false")
        return !1;
      e = n < 0 ? $e(s) : 0;
    } else
      return !1;
  }
}
function $e(s) {
  return s.nodeType == 3 ? s.nodeValue.length : s.childNodes.length;
}
function wn(s, e) {
  let t = e ? s.left : s.right;
  return { left: t, right: t, top: s.top, bottom: s.bottom };
}
function gf(s) {
  let e = s.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: s.innerWidth,
    top: 0,
    bottom: s.innerHeight
  };
}
function El(s, e) {
  let t = e.width / s.offsetWidth, i = e.height / s.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - s.offsetWidth) < 1) && (t = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - s.offsetHeight) < 1) && (i = 1), { scaleX: t, scaleY: i };
}
function mf(s, e, t, i, n, r, o, l) {
  let a = s.ownerDocument, f = a.defaultView || window;
  for (let h = s, c = !1; h && !c; )
    if (h.nodeType == 1) {
      let u, d = h == a.body, p = 1, g = 1;
      if (d)
        u = gf(f);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(h).position) && (c = !0), h.scrollHeight <= h.clientHeight && h.scrollWidth <= h.clientWidth) {
          h = h.assignedSlot || h.parentNode;
          continue;
        }
        let x = h.getBoundingClientRect();
        ({ scaleX: p, scaleY: g } = El(h, x)), u = {
          left: x.left,
          right: x.left + h.clientWidth * p,
          top: x.top,
          bottom: x.top + h.clientHeight * g
        };
      }
      let m = 0, y = 0;
      if (n == "nearest")
        e.top < u.top ? (y = -(u.top - e.top + o), t > 0 && e.bottom > u.bottom + y && (y = e.bottom - u.bottom + y + o)) : e.bottom > u.bottom && (y = e.bottom - u.bottom + o, t < 0 && e.top - y < u.top && (y = -(u.top + y - e.top + o)));
      else {
        let x = e.bottom - e.top, w = u.bottom - u.top;
        y = (n == "center" && x <= w ? e.top + x / 2 - w / 2 : n == "start" || n == "center" && t < 0 ? e.top - o : e.bottom - w + o) - u.top;
      }
      if (i == "nearest" ? e.left < u.left ? (m = -(u.left - e.left + r), t > 0 && e.right > u.right + m && (m = e.right - u.right + m + r)) : e.right > u.right && (m = e.right - u.right + r, t < 0 && e.left < u.left + m && (m = -(u.left + m - e.left + r))) : m = (i == "center" ? e.left + (e.right - e.left) / 2 - (u.right - u.left) / 2 : i == "start" == l ? e.left - r : e.right - (u.right - u.left) + r) - u.left, m || y)
        if (d)
          f.scrollBy(m, y);
        else {
          let x = 0, w = 0;
          if (y) {
            let v = h.scrollTop;
            h.scrollTop += y / g, w = (h.scrollTop - v) * g;
          }
          if (m) {
            let v = h.scrollLeft;
            h.scrollLeft += m / p, x = (h.scrollLeft - v) * p;
          }
          e = {
            left: e.left - x,
            top: e.top - w,
            right: e.right - x,
            bottom: e.bottom - w
          }, x && Math.abs(x - m) < 1 && (i = "nearest"), w && Math.abs(w - y) < 1 && (n = "nearest");
        }
      if (d)
        break;
      h = h.assignedSlot || h.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
}
function yf(s) {
  let e = s.ownerDocument, t, i;
  for (let n = s.parentNode; n && !(n == e.body || t && i); )
    if (n.nodeType == 1)
      !i && n.scrollHeight > n.clientHeight && (i = n), !t && n.scrollWidth > n.clientWidth && (t = n), n = n.assignedSlot || n.parentNode;
    else if (n.nodeType == 11)
      n = n.host;
    else
      break;
  return { x: t, y: i };
}
class bf {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: i } = e;
    this.set(t, Math.min(e.anchorOffset, t ? $e(t) : 0), i, Math.min(e.focusOffset, i ? $e(i) : 0));
  }
  set(e, t, i, n) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = i, this.focusOffset = n;
  }
}
let Ot = null;
function Ll(s) {
  if (s.setActive)
    return s.setActive();
  if (Ot)
    return s.focus(Ot);
  let e = [];
  for (let t = s; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (s.focus(Ot == null ? {
    get preventScroll() {
      return Ot = { preventScroll: !0 }, !0;
    }
  } : void 0), !Ot) {
    Ot = !1;
    for (let t = 0; t < e.length; ) {
      let i = e[t++], n = e[t++], r = e[t++];
      i.scrollTop != n && (i.scrollTop = n), i.scrollLeft != r && (i.scrollLeft = r);
    }
  }
}
let Vr;
function St(s, e, t = e) {
  let i = Vr || (Vr = document.createRange());
  return i.setEnd(s, t), i.setStart(s, e), i;
}
function Rt(s, e, t, i) {
  let n = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  i && ({ altKey: n.altKey, ctrlKey: n.ctrlKey, shiftKey: n.shiftKey, metaKey: n.metaKey } = i);
  let r = new KeyboardEvent("keydown", n);
  r.synthetic = !0, s.dispatchEvent(r);
  let o = new KeyboardEvent("keyup", n);
  return o.synthetic = !0, s.dispatchEvent(o), r.defaultPrevented || o.defaultPrevented;
}
function xf(s) {
  for (; s; ) {
    if (s && (s.nodeType == 9 || s.nodeType == 11 && s.host))
      return s;
    s = s.assignedSlot || s.parentNode;
  }
  return null;
}
function Nl(s) {
  for (; s.attributes.length; )
    s.removeAttributeNode(s.attributes[0]);
}
function kf(s, e) {
  let t = e.focusNode, i = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != i)
    return !1;
  for (i = Math.min(i, $e(t)); ; )
    if (i) {
      if (t.nodeType != 1)
        return !1;
      let n = t.childNodes[i - 1];
      n.contentEditable == "false" ? i-- : (t = n, i = $e(t));
    } else {
      if (t == s)
        return !0;
      i = vt(t), t = t.parentNode;
    }
}
function Il(s) {
  return s.scrollTop > Math.max(1, s.scrollHeight - s.clientHeight - 4);
}
function Fl(s, e) {
  for (let t = s, i = e; ; ) {
    if (t.nodeType == 3 && i > 0)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i - 1], i = $e(t);
    } else if (t.parentNode && !tn(t))
      i = vt(t), t = t.parentNode;
    else
      return null;
  }
}
function Vl(s, e) {
  for (let t = s, i = e; ; ) {
    if (t.nodeType == 3 && i < t.nodeValue.length)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i], i = 0;
    } else if (t.parentNode && !tn(t))
      i = vt(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
class ne {
  constructor(e, t, i = !0) {
    this.node = e, this.offset = t, this.precise = i;
  }
  static before(e, t) {
    return new ne(e.parentNode, vt(e), t);
  }
  static after(e, t) {
    return new ne(e.parentNode, vt(e) + 1, t);
  }
}
const Zs = [];
class H {
  constructor() {
    this.parent = null, this.dom = null, this.flags = 2;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e) {
    let t = this.posAtStart;
    for (let i of this.children) {
      if (i == e)
        return t;
      t += i.length + i.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  sync(e, t) {
    if (this.flags & 2) {
      let i = this.dom, n = null, r;
      for (let o of this.children) {
        if (o.flags & 7) {
          if (!o.dom && (r = n ? n.nextSibling : i.firstChild)) {
            let l = H.get(r);
            (!l || !l.parent && l.canReuseDOM(o)) && o.reuseDOM(r);
          }
          o.sync(e, t), o.flags &= -8;
        }
        if (r = n ? n.nextSibling : i.firstChild, t && !t.written && t.node == i && r != o.dom && (t.written = !0), o.dom.parentNode == i)
          for (; r && r != o.dom; )
            r = Hr(r);
        else
          i.insertBefore(o.dom, r);
        n = o.dom;
      }
      for (r = n ? n.nextSibling : i.firstChild, r && t && t.node == i && (t.written = !0); r; )
        r = Hr(r);
    } else if (this.flags & 1)
      for (let i of this.children)
        i.flags & 7 && (i.sync(e, t), i.flags &= -8);
  }
  reuseDOM(e) {
  }
  localPosFromDOM(e, t) {
    let i;
    if (e == this.dom)
      i = this.dom.childNodes[t];
    else {
      let n = $e(e) == 0 ? 0 : t == 0 ? -1 : 1;
      for (; ; ) {
        let r = e.parentNode;
        if (r == this.dom)
          break;
        n == 0 && r.firstChild != r.lastChild && (e == r.firstChild ? n = -1 : n = 1), e = r;
      }
      n < 0 ? i = e : i = e.nextSibling;
    }
    if (i == this.dom.firstChild)
      return 0;
    for (; i && !H.get(i); )
      i = i.nextSibling;
    if (!i)
      return this.length;
    for (let n = 0, r = 0; ; n++) {
      let o = this.children[n];
      if (o.dom == i)
        return r;
      r += o.length + o.breakAfter;
    }
  }
  domBoundsAround(e, t, i = 0) {
    let n = -1, r = -1, o = -1, l = -1;
    for (let a = 0, f = i, h = i; a < this.children.length; a++) {
      let c = this.children[a], u = f + c.length;
      if (f < e && u > t)
        return c.domBoundsAround(e, t, f);
      if (u >= e && n == -1 && (n = a, r = f), f > t && c.dom.parentNode == this.dom) {
        o = a, l = h;
        break;
      }
      h = u, f = u + c.breakAfter;
    }
    return {
      from: r,
      to: l < 0 ? i + this.length : l,
      startDOM: (n ? this.children[n - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
    };
  }
  markDirty(e = !1) {
    this.flags |= 2, this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let t = this.parent; t; t = t.parent) {
      if (e && (t.flags |= 2), t.flags & 1)
        return;
      t.flags |= 1, e = !1;
    }
  }
  setParent(e) {
    this.parent != e && (this.parent = e, this.flags & 7 && this.markParentsDirty(!0));
  }
  setDOM(e) {
    this.dom != e && (this.dom && (this.dom.cmView = null), this.dom = e, e.cmView = this);
  }
  get rootView() {
    for (let e = this; ; ) {
      let t = e.parent;
      if (!t)
        return e;
      e = t;
    }
  }
  replaceChildren(e, t, i = Zs) {
    this.markDirty();
    for (let n = e; n < t; n++) {
      let r = this.children[n];
      r.parent == this && i.indexOf(r) < 0 && r.destroy();
    }
    i.length < 250 ? this.children.splice(e, t - e, ...i) : this.children = [].concat(this.children.slice(0, e), i, this.children.slice(t));
    for (let n = 0; n < i.length; n++)
      i[n].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new Hl(this.children, e, this.children.length);
  }
  childPos(e, t = 1) {
    return this.childCursor().findPos(e, t);
  }
  toString() {
    let e = this.constructor.name.replace("View", "");
    return e + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (e == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(e) {
    return e.cmView;
  }
  get isEditable() {
    return !0;
  }
  get isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  merge(e, t, i, n, r, o) {
    return !1;
  }
  become(e) {
    return !1;
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor && !((this.flags | e.flags) & 8);
  }
  getSide() {
    return 0;
  }
  destroy() {
    for (let e of this.children)
      e.parent == this && e.destroy();
    this.parent = null;
  }
}
H.prototype.breakAfter = 0;
function Hr(s) {
  let e = s.nextSibling;
  return s.parentNode.removeChild(s), e;
}
class Hl {
  constructor(e, t, i) {
    this.children = e, this.pos = t, this.i = i, this.off = 0;
  }
  findPos(e, t = 1) {
    for (; ; ) {
      if (e > this.pos || e == this.pos && (t > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
        return this.off = e - this.pos, this;
      let i = this.children[--this.i];
      this.pos -= i.length + i.breakAfter;
    }
  }
}
function zl(s, e, t, i, n, r, o, l, a) {
  let { children: f } = s, h = f.length ? f[e] : null, c = r.length ? r[r.length - 1] : null, u = c ? c.breakAfter : o;
  if (!(e == i && h && !o && !u && r.length < 2 && h.merge(t, n, r.length ? c : null, t == 0, l, a))) {
    if (i < f.length) {
      let d = f[i];
      d && (n < d.length || d.breakAfter && (c == null ? void 0 : c.breakAfter)) ? (e == i && (d = d.split(n), n = 0), !u && c && d.merge(0, n, c, !0, 0, a) ? r[r.length - 1] = d : ((n || d.children.length && !d.children[0].length) && d.merge(0, n, null, !1, 0, a), r.push(d))) : d != null && d.breakAfter && (c ? c.breakAfter = 1 : o = 1), i++;
    }
    for (h && (h.breakAfter = o, t > 0 && (!o && r.length && h.merge(t, h.length, r[0], !1, l, 0) ? h.breakAfter = r.shift().breakAfter : (t < h.length || h.children.length && h.children[h.children.length - 1].length == 0) && h.merge(t, h.length, null, !1, l, 0), e++)); e < i && r.length; )
      if (f[i - 1].become(r[r.length - 1]))
        i--, r.pop(), a = r.length ? 0 : l;
      else if (f[e].become(r[0]))
        e++, r.shift(), l = r.length ? 0 : a;
      else
        break;
    !r.length && e && i < f.length && !f[e - 1].breakAfter && f[i].merge(0, 0, f[e - 1], !1, l, a) && e--, (e < i || r.length) && s.replaceChildren(e, i, r);
  }
}
function Wl(s, e, t, i, n, r) {
  let o = s.childCursor(), { i: l, off: a } = o.findPos(t, 1), { i: f, off: h } = o.findPos(e, -1), c = e - t;
  for (let u of i)
    c += u.length;
  s.length += c, zl(s, f, h, l, a, i, 0, n, r);
}
let he = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, ms = typeof document < "u" ? document : { documentElement: { style: {} } };
const ys = /* @__PURE__ */ /Edge\/(\d+)/.exec(he.userAgent), _l = /* @__PURE__ */ /MSIE \d/.test(he.userAgent), bs = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(he.userAgent), vn = !!(_l || bs || ys), zr = !vn && /* @__PURE__ */ /gecko\/(\d+)/i.test(he.userAgent), Nn = !vn && /* @__PURE__ */ /Chrome\/(\d+)/.exec(he.userAgent), Wr = "webkitFontSmoothing" in ms.documentElement.style, ql = !vn && /* @__PURE__ */ /Apple Computer/.test(he.vendor), _r = ql && (/* @__PURE__ */ /Mobile\/\w+/.test(he.userAgent) || he.maxTouchPoints > 2);
var A = {
  mac: _r || /* @__PURE__ */ /Mac/.test(he.platform),
  windows: /* @__PURE__ */ /Win/.test(he.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(he.platform),
  ie: vn,
  ie_version: _l ? ms.documentMode || 6 : bs ? +bs[1] : ys ? +ys[1] : 0,
  gecko: zr,
  gecko_version: zr ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(he.userAgent) || [0, 0])[1] : 0,
  chrome: !!Nn,
  chrome_version: Nn ? +Nn[1] : 0,
  ios: _r,
  android: /* @__PURE__ */ /Android\b/.test(he.userAgent),
  webkit: Wr,
  safari: ql,
  webkit_version: Wr ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(he.userAgent) || [0, 0])[1] : 0,
  tabSize: ms.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const wf = 256;
class Me extends H {
  constructor(e) {
    super(), this.text = e;
  }
  get length() {
    return this.text.length;
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text));
  }
  sync(e, t) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (t && t.node == this.dom && (t.written = !0), this.dom.nodeValue = this.text);
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e);
  }
  merge(e, t, i) {
    return this.flags & 8 || i && (!(i instanceof Me) || this.length - (t - e) + i.length > wf || i.flags & 8) ? !1 : (this.text = this.text.slice(0, e) + (i ? i.text : "") + this.text.slice(t), this.markDirty(), !0);
  }
  split(e) {
    let t = new Me(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), t.flags |= this.flags & 8, t;
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new ne(this.dom, e);
  }
  domBoundsAround(e, t, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, t) {
    return vf(this.dom, e, t);
  }
}
class Xe extends H {
  constructor(e, t = [], i = 0) {
    super(), this.mark = e, this.children = t, this.length = i;
    for (let n of t)
      n.setParent(this);
  }
  setAttrs(e) {
    if (Nl(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
      for (let t in this.mark.attrs)
        e.setAttribute(t, this.mark.attrs[t]);
    return e;
  }
  canReuseDOM(e) {
    return super.canReuseDOM(e) && !((this.flags | e.flags) & 8);
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(e, t);
  }
  merge(e, t, i, n, r, o) {
    return i && (!(i instanceof Xe && i.mark.eq(this.mark)) || e && r <= 0 || t < this.length && o <= 0) ? !1 : (Wl(this, e, t, i ? i.children.slice() : [], r - 1, o - 1), this.markDirty(), !0);
  }
  split(e) {
    let t = [], i = 0, n = -1, r = 0;
    for (let l of this.children) {
      let a = i + l.length;
      a > e && t.push(i < e ? l.split(e - i) : l), n < 0 && i >= e && (n = r), i = a, r++;
    }
    let o = this.length - e;
    return this.length = e, n > -1 && (this.children.length = n, this.markDirty()), new Xe(this.mark, t, o);
  }
  domAtPos(e) {
    return $l(this, e);
  }
  coordsAt(e, t) {
    return jl(this, e, t);
  }
}
function vf(s, e, t) {
  let i = s.nodeValue.length;
  e > i && (e = i);
  let n = e, r = e, o = 0;
  e == 0 && t < 0 || e == i && t >= 0 ? A.chrome || A.gecko || (e ? (n--, o = 1) : r < i && (r++, o = -1)) : t < 0 ? n-- : r < i && r++;
  let l = St(s, n, r).getClientRects();
  if (!l.length)
    return null;
  let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
  return A.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (f) => f.width) || a), o ? wn(a, o < 0) : a || null;
}
class bt extends H {
  static create(e, t, i) {
    return new bt(e, t, i);
  }
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.side = i, this.prevWidget = null;
  }
  split(e) {
    let t = bt.create(this.widget, this.length - e, this.side);
    return this.length -= e, t;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(e, t, i, n, r, o) {
    return i && (!(i instanceof bt) || !this.widget.compare(i.widget) || e > 0 && r <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - t), !0);
  }
  become(e) {
    return e instanceof bt && e.side == this.side && this.widget.constructor == e.widget.constructor ? (this.widget.compare(e.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return L.empty;
    let e = this;
    for (; e.parent; )
      e = e.parent;
    let { view: t } = e, i = t && t.state.doc, n = this.posAtStart;
    return i ? i.slice(n, n + this.length) : L.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? ne.before(this.dom) : ne.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, t) {
    let i = this.widget.coordsAt(this.dom, e, t);
    if (i)
      return i;
    let n = this.dom.getClientRects(), r = null;
    if (!n.length)
      return null;
    let o = this.side ? this.side < 0 : e > 0;
    for (let l = o ? n.length - 1 : 0; r = n[l], !(e > 0 ? l == 0 : l == n.length - 1 || r.top < r.bottom); l += o ? -1 : 1)
      ;
    return wn(r, !o);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class It extends H {
  constructor(e) {
    super(), this.side = e;
  }
  get length() {
    return 0;
  }
  merge() {
    return !1;
  }
  become(e) {
    return e instanceof It && e.side == this.side;
  }
  split() {
    return new It(this.side);
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement("img");
      e.className = "cm-widgetBuffer", e.setAttribute("aria-hidden", "true"), this.setDOM(e);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(e) {
    return this.side > 0 ? ne.before(this.dom) : ne.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return L.empty;
  }
  get isHidden() {
    return !0;
  }
}
Me.prototype.children = bt.prototype.children = It.prototype.children = Zs;
function $l(s, e) {
  let t = s.dom, { children: i } = s, n = 0;
  for (let r = 0; n < i.length; n++) {
    let o = i[n], l = r + o.length;
    if (!(l == r && o.getSide() <= 0)) {
      if (e > r && e < l && o.dom.parentNode == t)
        return o.domAtPos(e - r);
      if (e <= r)
        break;
      r = l;
    }
  }
  for (let r = n; r > 0; r--) {
    let o = i[r - 1];
    if (o.dom.parentNode == t)
      return o.domAtPos(o.length);
  }
  for (let r = n; r < i.length; r++) {
    let o = i[r];
    if (o.dom.parentNode == t)
      return o.domAtPos(0);
  }
  return new ne(t, 0);
}
function Ul(s, e, t) {
  let i, { children: n } = s;
  t > 0 && e instanceof Xe && n.length && (i = n[n.length - 1]) instanceof Xe && i.mark.eq(e.mark) ? Ul(i, e.children[0], t - 1) : (n.push(e), e.setParent(s)), s.length += e.length;
}
function jl(s, e, t) {
  let i = null, n = -1, r = null, o = -1;
  function l(f, h) {
    for (let c = 0, u = 0; c < f.children.length && u <= h; c++) {
      let d = f.children[c], p = u + d.length;
      p >= h && (d.children.length ? l(d, h - u) : (!r || r.isHidden && t > 0) && (p > h || u == p && d.getSide() > 0) ? (r = d, o = h - u) : (u < h || u == p && d.getSide() < 0 && !d.isHidden) && (i = d, n = h - u)), u = p;
    }
  }
  l(s, e);
  let a = (t < 0 ? i : r) || i || r;
  return a ? a.coordsAt(Math.max(0, a == i ? n : o), t) : Sf(s);
}
function Sf(s) {
  let e = s.dom.lastChild;
  if (!e)
    return s.dom.getBoundingClientRect();
  let t = ui(e);
  return t[t.length - 1] || null;
}
function xs(s, e) {
  for (let t in s)
    t == "class" && e.class ? e.class += " " + s.class : t == "style" && e.style ? e.style += ";" + s.style : e[t] = s[t];
  return e;
}
const qr = /* @__PURE__ */ Object.create(null);
function nn(s, e, t) {
  if (s == e)
    return !0;
  s || (s = qr), e || (e = qr);
  let i = Object.keys(s), n = Object.keys(e);
  if (i.length - (t && i.indexOf(t) > -1 ? 1 : 0) != n.length - (t && n.indexOf(t) > -1 ? 1 : 0))
    return !1;
  for (let r of i)
    if (r != t && (n.indexOf(r) == -1 || s[r] !== e[r]))
      return !1;
  return !0;
}
function ks(s, e, t) {
  let i = !1;
  if (e)
    for (let n in e)
      t && n in t || (i = !0, n == "style" ? s.style.cssText = "" : s.removeAttribute(n));
  if (t)
    for (let n in t)
      e && e[n] == t[n] || (i = !0, n == "style" ? s.style.cssText = t[n] : s.setAttribute(n, t[n]));
  return i;
}
function Cf(s) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < s.attributes.length; t++) {
    let i = s.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class er {
  eq(e) {
    return !1;
  }
  updateDOM(e, t) {
    return !1;
  }
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(e) {
    return !0;
  }
  coordsAt(e, t, i) {
    return null;
  }
  get isHidden() {
    return !1;
  }
  get editable() {
    return !1;
  }
  destroy(e) {
  }
}
var xe = /* @__PURE__ */ function(s) {
  return s[s.Text = 0] = "Text", s[s.WidgetBefore = 1] = "WidgetBefore", s[s.WidgetAfter = 2] = "WidgetAfter", s[s.WidgetRange = 3] = "WidgetRange", s;
}(xe || (xe = {}));
class E extends wt {
  constructor(e, t, i, n) {
    super(), this.startSide = e, this.endSide = t, this.widget = i, this.spec = n;
  }
  get heightRelevant() {
    return !1;
  }
  static mark(e) {
    return new xi(e);
  }
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return t += i && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new lt(e, t, t, i, e.widget || null, !1);
  }
  static replace(e) {
    let t = !!e.block, i, n;
    if (e.isBlockGap)
      i = -5e8, n = 4e8;
    else {
      let { start: r, end: o } = Ql(e, t);
      i = (r ? t ? -3e8 : -1 : 5e8) - 1, n = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new lt(e, i, n, t, e.widget || null, !0);
  }
  static line(e) {
    return new ki(e);
  }
  static set(e, t = !1) {
    return F.of(e, t);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
E.none = F.empty;
class xi extends E {
  constructor(e) {
    let { start: t, end: i } = Ql(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var t, i;
    return this == e || e instanceof xi && this.tagName == e.tagName && (this.class || ((t = this.attrs) === null || t === void 0 ? void 0 : t.class)) == (e.class || ((i = e.attrs) === null || i === void 0 ? void 0 : i.class)) && nn(this.attrs, e.attrs, "class");
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
xi.prototype.point = !1;
class ki extends E {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof ki && this.spec.class == e.spec.class && nn(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
ki.prototype.mapMode = fe.TrackBefore;
ki.prototype.point = !0;
class lt extends E {
  constructor(e, t, i, n, r, o) {
    super(t, i, r, e), this.block = n, this.isReplace = o, this.mapMode = n ? t <= 0 ? fe.TrackBefore : fe.TrackAfter : fe.TrackDel;
  }
  get type() {
    return this.startSide != this.endSide ? xe.WidgetRange : this.startSide <= 0 ? xe.WidgetBefore : xe.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof lt && Af(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
lt.prototype.point = !0;
function Ql(s, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: i } = s;
  return t == null && (t = s.inclusive), i == null && (i = s.inclusive), { start: t != null ? t : e, end: i != null ? i : e };
}
function Af(s, e) {
  return s == e || !!(s && e && s.compare(e));
}
function ji(s, e, t, i = 0) {
  let n = t.length - 1;
  n >= 0 && t[n] + i >= s ? t[n] = Math.max(t[n], e) : t.push(s, e);
}
class K extends H {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  merge(e, t, i, n, r, o) {
    if (i) {
      if (!(i instanceof K))
        return !1;
      this.dom || i.transferDOM(this);
    }
    return n && this.setDeco(i ? i.attrs : null), Wl(this, e, t, i ? i.children.slice() : [], r, o), !0;
  }
  split(e) {
    let t = new K();
    if (t.breakAfter = this.breakAfter, this.length == 0)
      return t;
    let { i, off: n } = this.childPos(e);
    n && (t.append(this.children[i].split(n), 0), this.children[i].merge(n, this.children[i].length, null, !1, 0, 0), i++);
    for (let r = i; r < this.children.length; r++)
      t.append(this.children[r], 0);
    for (; i > 0 && this.children[i - 1].length == 0; )
      this.children[--i].destroy();
    return this.children.length = i, this.markDirty(), this.length = e, t;
  }
  transferDOM(e) {
    !this.dom || (this.markDirty(), e.setDOM(this.dom), e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(e) {
    nn(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, t) {
    Ul(this, e, t);
  }
  addLineDeco(e) {
    let t = e.spec.attributes, i = e.spec.class;
    t && (this.attrs = xs(t, this.attrs || {})), i && (this.attrs = xs({ class: i }, this.attrs || {}));
  }
  domAtPos(e) {
    return $l(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    var i;
    this.dom ? this.flags & 4 && (Nl(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (ks(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, t);
    let n = this.dom.lastChild;
    for (; n && H.get(n) instanceof Xe; )
      n = n.lastChild;
    if (!n || !this.length || n.nodeName != "BR" && ((i = H.get(n)) === null || i === void 0 ? void 0 : i.isEditable) == !1 && (!A.ios || !this.children.some((r) => r instanceof Me))) {
      let r = document.createElement("BR");
      r.cmIgnore = !0, this.dom.appendChild(r);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let e = 0, t;
    for (let i of this.children) {
      if (!(i instanceof Me) || /[^ -~]/.test(i.text))
        return null;
      let n = ui(i.dom);
      if (n.length != 1)
        return null;
      e += n[0].width, t = n[0].height;
    }
    return e ? {
      lineHeight: this.dom.getBoundingClientRect().height,
      charWidth: e / this.length,
      textHeight: t
    } : null;
  }
  coordsAt(e, t) {
    let i = jl(this, e, t);
    if (!this.children.length && i && this.parent) {
      let { heightOracle: n } = this.parent.view.viewState, r = i.bottom - i.top;
      if (Math.abs(r - n.lineHeight) < 2 && n.textHeight < r) {
        let o = (r - n.textHeight) / 2;
        return { top: i.top + o, bottom: i.bottom - o, left: i.left, right: i.left };
      }
    }
    return i;
  }
  become(e) {
    return e instanceof K && this.children.length == 0 && e.children.length == 0 && nn(this.attrs, e.attrs) && this.breakAfter == e.breakAfter;
  }
  covers() {
    return !0;
  }
  static find(e, t) {
    for (let i = 0, n = 0; i < e.children.length; i++) {
      let r = e.children[i], o = n + r.length;
      if (o >= t) {
        if (r instanceof K)
          return r;
        if (o > t)
          break;
      }
      n = o + r.breakAfter;
    }
    return null;
  }
}
class Ge extends H {
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.deco = i, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, t, i, n, r, o) {
    return i && (!(i instanceof Ge) || !this.widget.compare(i.widget) || e > 0 && r <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - t), !0);
  }
  domAtPos(e) {
    return e == 0 ? ne.before(this.dom) : ne.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let i = new Ge(this.widget, t, this.deco);
    return i.breakAfter = this.breakAfter, i;
  }
  get children() {
    return Zs;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : L.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof Ge && e.widget.constructor == this.widget.constructor ? (e.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.deco = e.deco, this.breakAfter = e.breakAfter, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  coordsAt(e, t) {
    let i = this.widget.coordsAt(this.dom, e, t);
    return i || (this.widget instanceof ws ? null : wn(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0));
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(e) {
    let { startSide: t, endSide: i } = this.deco;
    return t == i ? !1 : e < 0 ? t < 0 : i > 0;
  }
}
class ws extends er {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return e.className = "cm-gap", this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
class ni {
  constructor(e, t, i, n) {
    this.doc = e, this.pos = t, this.end = i, this.disallowBlockEffectsFor = n, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = t;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || e instanceof Ge && e.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new K()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(Mi(new It(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer(), this.curLine = null, this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(e && this.content.length && this.content[this.content.length - 1] instanceof Ge) && this.getLine();
  }
  buildText(e, t, i) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: r, lineBreak: o, done: l } = this.cursor.next(this.skip);
        if (this.skip = 0, l)
          throw new Error("Ran out of text content when drawing inline views");
        if (o) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, e--;
          continue;
        } else
          this.text = r, this.textOff = 0;
      }
      let n = Math.min(this.text.length - this.textOff, e, 512);
      this.flushBuffer(t.slice(t.length - i)), this.getLine().append(Mi(new Me(this.text.slice(this.textOff, this.textOff + n)), t), i), this.atCursorPos = !0, this.textOff += n, e -= n, i = 0;
    }
  }
  span(e, t, i, n) {
    this.buildText(t - e, i, n), this.pos = t, this.openStart < 0 && (this.openStart = n);
  }
  point(e, t, i, n, r, o) {
    if (this.disallowBlockEffectsFor[o] && i instanceof lt) {
      if (i.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (t > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = t - e;
    if (i instanceof lt)
      if (i.block)
        i.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new Ge(i.widget || Ft.block, l, i));
      else {
        let a = bt.create(i.widget || Ft.inline, l, l ? 0 : i.startSide), f = this.atCursorPos && !a.isEditable && r <= n.length && (e < t || i.startSide > 0), h = !a.isEditable && (e < t || r > n.length || i.startSide <= 0), c = this.getLine();
        this.pendingBuffer == 2 && !f && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(n), f && (c.append(Mi(new It(1), n), r), r = n.length + Math.max(0, r - n.length)), c.append(Mi(a, n), r), this.atCursorPos = h, this.pendingBuffer = h ? e < t || r > n.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = n.slice());
      }
    else
      this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = t), this.openStart < 0 && (this.openStart = r);
  }
  static build(e, t, i, n, r) {
    let o = new ni(e, t, i, r);
    return o.openEnd = F.spans(n, t, i, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
}
function Mi(s, e) {
  for (let t of e)
    s = new Xe(t, [s], s.length);
  return s;
}
class Ft extends er {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
Ft.inline = /* @__PURE__ */ new Ft("span");
Ft.block = /* @__PURE__ */ new Ft("div");
var Q = /* @__PURE__ */ function(s) {
  return s[s.LTR = 0] = "LTR", s[s.RTL = 1] = "RTL", s;
}(Q || (Q = {}));
const Ct = Q.LTR, tr = Q.RTL;
function Kl(s) {
  let e = [];
  for (let t = 0; t < s.length; t++)
    e.push(1 << +s[t]);
  return e;
}
const Of = /* @__PURE__ */ Kl("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), Mf = /* @__PURE__ */ Kl("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), vs = /* @__PURE__ */ Object.create(null), Ee = [];
for (let s of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ s.charCodeAt(0), t = /* @__PURE__ */ s.charCodeAt(1);
  vs[e] = t, vs[t] = -e;
}
function Gl(s) {
  return s <= 247 ? Of[s] : 1424 <= s && s <= 1524 ? 2 : 1536 <= s && s <= 1785 ? Mf[s - 1536] : 1774 <= s && s <= 2220 ? 4 : 8192 <= s && s <= 8204 ? 256 : 64336 <= s && s <= 65023 ? 4 : 1;
}
const Df = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class nt {
  get dir() {
    return this.level % 2 ? tr : Ct;
  }
  constructor(e, t, i) {
    this.from = e, this.to = t, this.level = i;
  }
  side(e, t) {
    return this.dir == t == e ? this.to : this.from;
  }
  forward(e, t) {
    return e == (this.dir == t);
  }
  static find(e, t, i, n) {
    let r = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == i)
          return o;
        (r < 0 || (n != 0 ? n < 0 ? l.from < t : l.to > t : e[r].level > l.level)) && (r = o);
      }
    }
    if (r < 0)
      throw new RangeError("Index out of range");
    return r;
  }
}
function Xl(s, e) {
  if (s.length != e.length)
    return !1;
  for (let t = 0; t < s.length; t++) {
    let i = s[t], n = e[t];
    if (i.from != n.from || i.to != n.to || i.direction != n.direction || !Xl(i.inner, n.inner))
      return !1;
  }
  return !0;
}
const V = [];
function Tf(s, e, t, i, n) {
  for (let r = 0; r <= i.length; r++) {
    let o = r ? i[r - 1].to : e, l = r < i.length ? i[r].from : t, a = r ? 256 : n;
    for (let f = o, h = a, c = a; f < l; f++) {
      let u = Gl(s.charCodeAt(f));
      u == 512 ? u = h : u == 8 && c == 4 && (u = 16), V[f] = u == 4 ? 2 : u, u & 7 && (c = u), h = u;
    }
    for (let f = o, h = a, c = a; f < l; f++) {
      let u = V[f];
      if (u == 128)
        f < l - 1 && h == V[f + 1] && h & 24 ? u = V[f] = h : V[f] = 256;
      else if (u == 64) {
        let d = f + 1;
        for (; d < l && V[d] == 64; )
          d++;
        let p = f && h == 8 || d < t && V[d] == 8 ? c == 1 ? 1 : 8 : 256;
        for (let g = f; g < d; g++)
          V[g] = p;
        f = d - 1;
      } else
        u == 8 && c == 1 && (V[f] = 1);
      h = u, u & 7 && (c = u);
    }
  }
}
function Pf(s, e, t, i, n) {
  let r = n == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
    let f = o ? i[o - 1].to : e, h = o < i.length ? i[o].from : t;
    for (let c = f, u, d, p; c < h; c++)
      if (d = vs[u = s.charCodeAt(c)])
        if (d < 0) {
          for (let g = l - 3; g >= 0; g -= 3)
            if (Ee[g + 1] == -d) {
              let m = Ee[g + 2], y = m & 2 ? n : m & 4 ? m & 1 ? r : n : 0;
              y && (V[c] = V[Ee[g]] = y), l = g;
              break;
            }
        } else {
          if (Ee.length == 189)
            break;
          Ee[l++] = c, Ee[l++] = u, Ee[l++] = a;
        }
      else if ((p = V[c]) == 2 || p == 1) {
        let g = p == n;
        a = g ? 0 : 1;
        for (let m = l - 3; m >= 0; m -= 3) {
          let y = Ee[m + 2];
          if (y & 2)
            break;
          if (g)
            Ee[m + 2] |= 2;
          else {
            if (y & 4)
              break;
            Ee[m + 2] |= 4;
          }
        }
      }
  }
}
function Bf(s, e, t, i) {
  for (let n = 0, r = i; n <= t.length; n++) {
    let o = n ? t[n - 1].to : s, l = n < t.length ? t[n].from : e;
    for (let a = o; a < l; ) {
      let f = V[a];
      if (f == 256) {
        let h = a + 1;
        for (; ; )
          if (h == l) {
            if (n == t.length)
              break;
            h = t[n++].to, l = n < t.length ? t[n].from : e;
          } else if (V[h] == 256)
            h++;
          else
            break;
        let c = r == 1, u = (h < e ? V[h] : i) == 1, d = c == u ? c ? 1 : 2 : i;
        for (let p = h, g = n, m = g ? t[g - 1].to : s; p > a; )
          p == m && (p = t[--g].from, m = g ? t[g - 1].to : s), V[--p] = d;
        a = h;
      } else
        r = f, a++;
    }
  }
}
function Ss(s, e, t, i, n, r, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == n % 2)
    for (let a = e, f = 0; a < t; ) {
      let h = !0, c = !1;
      if (f == r.length || a < r[f].from) {
        let g = V[a];
        g != l && (h = !1, c = g == 16);
      }
      let u = !h && l == 1 ? [] : null, d = h ? i : i + 1, p = a;
      e:
        for (; ; )
          if (f < r.length && p == r[f].from) {
            if (c)
              break e;
            let g = r[f];
            if (!h)
              for (let m = g.to, y = f + 1; ; ) {
                if (m == t)
                  break e;
                if (y < r.length && r[y].from == m)
                  m = r[y++].to;
                else {
                  if (V[m] == l)
                    break e;
                  break;
                }
              }
            if (f++, u)
              u.push(g);
            else {
              g.from > a && o.push(new nt(a, g.from, d));
              let m = g.direction == Ct != !(d % 2);
              Cs(s, m ? i + 1 : i, n, g.inner, g.from, g.to, o), a = g.to;
            }
            p = g.to;
          } else {
            if (p == t || (h ? V[p] != l : V[p] == l))
              break;
            p++;
          }
      u ? Ss(s, a, p, i + 1, n, u, o) : a < p && o.push(new nt(a, p, d)), a = p;
    }
  else
    for (let a = t, f = r.length; a > e; ) {
      let h = !0, c = !1;
      if (!f || a > r[f - 1].to) {
        let g = V[a - 1];
        g != l && (h = !1, c = g == 16);
      }
      let u = !h && l == 1 ? [] : null, d = h ? i : i + 1, p = a;
      e:
        for (; ; )
          if (f && p == r[f - 1].to) {
            if (c)
              break e;
            let g = r[--f];
            if (!h)
              for (let m = g.from, y = f; ; ) {
                if (m == e)
                  break e;
                if (y && r[y - 1].to == m)
                  m = r[--y].from;
                else {
                  if (V[m - 1] == l)
                    break e;
                  break;
                }
              }
            if (u)
              u.push(g);
            else {
              g.to < a && o.push(new nt(g.to, a, d));
              let m = g.direction == Ct != !(d % 2);
              Cs(s, m ? i + 1 : i, n, g.inner, g.from, g.to, o), a = g.from;
            }
            p = g.from;
          } else {
            if (p == e || (h ? V[p - 1] != l : V[p - 1] == l))
              break;
            p--;
          }
      u ? Ss(s, p, a, i + 1, n, u, o) : p < a && o.push(new nt(p, a, d)), a = p;
    }
}
function Cs(s, e, t, i, n, r, o) {
  let l = e % 2 ? 2 : 1;
  Tf(s, n, r, i, l), Pf(s, n, r, i, l), Bf(n, r, i, l), Ss(s, n, r, e, t, i, o);
}
function Rf(s, e, t) {
  if (!s)
    return [new nt(0, 0, e == tr ? 1 : 0)];
  if (e == Ct && !t.length && !Df.test(s))
    return Yl(s.length);
  if (t.length)
    for (; s.length > V.length; )
      V[V.length] = 256;
  let i = [], n = e == Ct ? 0 : 1;
  return Cs(s, n, n, t, 0, s.length, i), i;
}
function Yl(s) {
  return [new nt(0, s, 0)];
}
let Jl = "";
function Ef(s, e, t, i, n) {
  var r;
  let o = i.head - s.from, l = nt.find(e, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc), a = e[l], f = a.side(n, t);
  if (o == f) {
    let u = l += n ? 1 : -1;
    if (u < 0 || u >= e.length)
      return null;
    a = e[l = u], o = a.side(!n, t), f = a.side(n, t);
  }
  let h = oe(s.text, o, a.forward(n, t));
  (h < a.from || h > a.to) && (h = f), Jl = s.text.slice(Math.min(o, h), Math.max(o, h));
  let c = l == (n ? e.length - 1 : 0) ? null : e[l + (n ? 1 : -1)];
  return c && h == f && c.level + (n ? 0 : 1) < a.level ? k.cursor(c.side(!n, t) + s.from, c.forward(n, t) ? 1 : -1, c.level) : k.cursor(h + s.from, a.forward(n, t) ? -1 : 1, a.level);
}
function Lf(s, e, t) {
  for (let i = e; i < t; i++) {
    let n = Gl(s.charCodeAt(i));
    if (n == 1)
      return Ct;
    if (n == 2 || n == 4)
      return tr;
  }
  return Ct;
}
const Zl = /* @__PURE__ */ D.define(), ea = /* @__PURE__ */ D.define(), ta = /* @__PURE__ */ D.define(), ia = /* @__PURE__ */ D.define(), As = /* @__PURE__ */ D.define(), na = /* @__PURE__ */ D.define(), sa = /* @__PURE__ */ D.define(), ir = /* @__PURE__ */ D.define(), nr = /* @__PURE__ */ D.define(), ra = /* @__PURE__ */ D.define({
  combine: (s) => s.some((e) => e)
}), Nf = /* @__PURE__ */ D.define({
  combine: (s) => s.some((e) => e)
}), oa = /* @__PURE__ */ D.define();
class Et {
  constructor(e, t = "nearest", i = "nearest", n = 5, r = 5, o = !1) {
    this.range = e, this.y = t, this.x = i, this.yMargin = n, this.xMargin = r, this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new Et(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new Et(k.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Di = /* @__PURE__ */ W.define({ map: (s, e) => s.map(e) }), la = /* @__PURE__ */ W.define();
function Ce(s, e, t) {
  let i = s.facet(ia);
  i.length ? i[0](e) : window.onerror ? window.onerror(String(e), t, void 0, void 0, e) : t ? console.error(t + ":", e) : console.error(e);
}
const Ke = /* @__PURE__ */ D.define({ combine: (s) => s.length ? s[0] : !0 });
let If = 0;
const Xt = /* @__PURE__ */ D.define();
class De {
  constructor(e, t, i, n, r) {
    this.id = e, this.create = t, this.domEventHandlers = i, this.domEventObservers = n, this.extension = r(this);
  }
  static define(e, t) {
    const { eventHandlers: i, eventObservers: n, provide: r, decorations: o } = t || {};
    return new De(If++, e, i, n, (l) => {
      let a = [Xt.of(l)];
      return o && a.push(di.of((f) => {
        let h = f.plugin(l);
        return h ? o(h) : E.none;
      })), r && a.push(r(l)), a;
    });
  }
  static fromClass(e, t) {
    return De.define((i) => new e(i), t);
  }
}
class In {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(t);
          } catch (i) {
            if (Ce(t.state, i, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(e);
      } catch (t) {
        Ce(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        Ce(e.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const aa = /* @__PURE__ */ D.define(), sr = /* @__PURE__ */ D.define(), di = /* @__PURE__ */ D.define(), ha = /* @__PURE__ */ D.define(), rr = /* @__PURE__ */ D.define(), fa = /* @__PURE__ */ D.define();
function $r(s, e) {
  let t = s.state.facet(fa);
  if (!t.length)
    return t;
  let i = t.map((r) => r instanceof Function ? r(s) : r), n = [];
  return F.spans(i, e.from, e.to, {
    point() {
    },
    span(r, o, l, a) {
      let f = r - e.from, h = o - e.from, c = n;
      for (let u = l.length - 1; u >= 0; u--, a--) {
        let d = l[u].spec.bidiIsolate, p;
        if (d == null && (d = Lf(e.text, f, h)), a > 0 && c.length && (p = c[c.length - 1]).to == f && p.direction == d)
          p.to = h, c = p.inner;
        else {
          let g = { from: f, to: h, direction: d, inner: [] };
          c.push(g), c = g.inner;
        }
      }
    }
  }), n;
}
const ca = /* @__PURE__ */ D.define();
function or(s) {
  let e = 0, t = 0, i = 0, n = 0;
  for (let r of s.state.facet(ca)) {
    let o = r(s);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (n = Math.max(n, o.bottom)));
  }
  return { left: e, right: t, top: i, bottom: n };
}
const Yt = /* @__PURE__ */ D.define();
class ke {
  constructor(e, t, i, n) {
    this.fromA = e, this.toA = t, this.fromB = i, this.toB = n;
  }
  join(e) {
    return new ke(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, i = this;
    for (; t > 0; t--) {
      let n = e[t - 1];
      if (!(n.fromA > i.toA)) {
        if (n.toA < i.fromA)
          break;
        i = i.join(n), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, i), e;
  }
  static extendWithRanges(e, t) {
    if (t.length == 0)
      return e;
    let i = [];
    for (let n = 0, r = 0, o = 0, l = 0; ; n++) {
      let a = n == e.length ? null : e[n], f = o - l, h = a ? a.fromB : 1e9;
      for (; r < t.length && t[r] < h; ) {
        let c = t[r], u = t[r + 1], d = Math.max(l, c), p = Math.min(h, u);
        if (d <= p && new ke(d + f, p + f, d, p).addToSet(i), u > h)
          break;
        r += 2;
      }
      if (!a)
        return i;
      new ke(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), o = a.toA, l = a.toB;
    }
  }
}
class sn {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = X.empty(this.startState.doc.length);
    for (let r of i)
      this.changes = this.changes.compose(r.changes);
    let n = [];
    this.changes.iterChangedRanges((r, o, l, a) => n.push(new ke(r, o, l, a))), this.changedRanges = n;
  }
  static create(e, t, i) {
    return new sn(e, t, i);
  }
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
class Ur extends H {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = E.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new K()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new ke(0, 0, 0, e.state.doc.length)], 0, null);
  }
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: f, toA: h }) => h < this.minWidthFrom || f > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let n = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? n = this.domChanged.newSel.head : !qf(e.changes, this.hasComposition) && !e.selectionSet && (n = e.state.selection.main.head));
    let r = n > -1 ? Vf(this.view, e.changes, n) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: f, to: h } = this.hasComposition;
      i = new ke(f, h, e.changes.mapPos(f, -1), e.changes.mapPos(h, 1)).addToSet(i.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (A.ie || A.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, l = this.updateDeco(), a = Wf(o, l, e.changes);
    return i = ke.extendWithRanges(i, a), !(this.flags & 7) && i.length == 0 ? !1 : (this.updateInner(i, e.startState.doc.length, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  updateInner(e, t, i) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(e, t, i);
    let { observer: n } = this.view;
    n.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = A.chrome || A.ios ? { node: n.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, o), this.flags &= -8, o && (o.written || n.selectionRange.focusNode != o.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach((o) => o.flags &= -9);
    let r = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.children)
        o instanceof Ge && o.widget instanceof ws && r.push(o.dom);
    n.updateGaps(r);
  }
  updateChildren(e, t, i) {
    let n = i ? i.range.addToSet(e.slice()) : e, r = this.childCursor(t);
    for (let o = n.length - 1; ; o--) {
      let l = o >= 0 ? n[o] : null;
      if (!l)
        break;
      let { fromA: a, toA: f, fromB: h, toB: c } = l, u, d, p, g;
      if (i && i.range.fromB < c && i.range.toB > h) {
        let v = ni.build(this.view.state.doc, h, i.range.fromB, this.decorations, this.dynamicDecorationMap), C = ni.build(this.view.state.doc, i.range.toB, c, this.decorations, this.dynamicDecorationMap);
        d = v.breakAtStart, p = v.openStart, g = C.openEnd;
        let O = this.compositionView(i);
        C.breakAtStart ? O.breakAfter = 1 : C.content.length && O.merge(O.length, O.length, C.content[0], !1, C.openStart, 0) && (O.breakAfter = C.content[0].breakAfter, C.content.shift()), v.content.length && O.merge(0, 0, v.content[v.content.length - 1], !0, 0, v.openEnd) && v.content.pop(), u = v.content.concat(O).concat(C.content);
      } else
        ({ content: u, breakAtStart: d, openStart: p, openEnd: g } = ni.build(this.view.state.doc, h, c, this.decorations, this.dynamicDecorationMap));
      let { i: m, off: y } = r.findPos(f, 1), { i: x, off: w } = r.findPos(a, -1);
      zl(this, x, w, m, y, u, d, p, g);
    }
    i && this.fixCompositionDOM(i);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(la) && (this.editContextFormatting = i.value);
  }
  compositionView(e) {
    let t = new Me(e.text.nodeValue);
    t.flags |= 8;
    for (let { deco: n } of e.marks)
      t = new Xe(n, [t], t.length);
    let i = new K();
    return i.append(t, 0), i;
  }
  fixCompositionDOM(e) {
    let t = (r, o) => {
      o.flags |= 8 | (o.children.some((a) => a.flags & 7) ? 1 : 0), this.markedForComposition.add(o);
      let l = H.get(r);
      l && l != o && (l.dom = null), o.setDOM(r);
    }, i = this.childPos(e.range.fromB, 1), n = this.children[i.i];
    t(e.line, n);
    for (let r = e.marks.length - 1; r >= -1; r--)
      i = n.childPos(i.off, 1), n = n.children[i.i], t(r >= 0 ? e.marks[r].node : e.text, n);
  }
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let i = this.view.root.activeElement, n = i == this.dom, r = !n && !(this.view.state.facet(Ke) || this.dom.tabIndex > -1) && Ui(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
    if (!(n || t || r))
      return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, a = this.moveToLine(this.domAtPos(l.anchor)), f = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (A.gecko && l.empty && !this.hasComposition && Ff(a)) {
      let c = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(c, a.node.childNodes[a.offset] || null)), a = f = new ne(c, 0), o = !0;
    }
    let h = this.view.observer.selectionRange;
    (o || !h.focusNode || (!ii(a.node, a.offset, h.anchorNode, h.anchorOffset) || !ii(f.node, f.offset, h.focusNode, h.focusOffset)) && !this.suppressWidgetCursorChange(h, l)) && (this.view.observer.ignore(() => {
      A.android && A.chrome && this.dom.contains(h.focusNode) && _f(h.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let c = ci(this.view.root);
      if (c)
        if (l.empty) {
          if (A.gecko) {
            let u = Hf(a.node, a.offset);
            if (u && u != 3) {
              let d = (u == 1 ? Fl : Vl)(a.node, a.offset);
              d && (a = new ne(d.node, d.offset));
            }
          }
          c.collapse(a.node, a.offset), l.bidiLevel != null && c.caretBidiLevel !== void 0 && (c.caretBidiLevel = l.bidiLevel);
        } else if (c.extend) {
          c.collapse(a.node, a.offset);
          try {
            c.extend(f.node, f.offset);
          } catch {
          }
        } else {
          let u = document.createRange();
          l.anchor > l.head && ([a, f] = [f, a]), u.setEnd(f.node, f.offset), u.setStart(a.node, a.offset), c.removeAllRanges(), c.addRange(u);
        }
      r && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
    }), this.view.observer.setSelectionRange(a, f)), this.impreciseAnchor = a.precise ? null : new ne(h.anchorNode, h.anchorOffset), this.impreciseHead = f.precise ? null : new ne(h.focusNode, h.focusOffset);
  }
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && ii(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, i = ci(e.root), { anchorNode: n, anchorOffset: r } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify)
      return;
    let o = K.find(this, t.head);
    if (!o)
      return;
    let l = o.posAtStart;
    if (t.head == l || t.head == l + o.length)
      return;
    let a = this.coordsAt(t.head, -1), f = this.coordsAt(t.head, 1);
    if (!a || !f || a.bottom > f.top)
      return;
    let h = this.domAtPos(t.head + t.assoc);
    i.collapse(h.node, h.offset), i.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let c = e.observer.selectionRange;
    e.docView.posFromDOM(c.anchorNode, c.anchorOffset) != t.from && i.collapse(n, r);
  }
  moveToLine(e) {
    let t = this.dom, i;
    if (e.node != t)
      return e;
    for (let n = e.offset; !i && n < t.childNodes.length; n++) {
      let r = H.get(t.childNodes[n]);
      r instanceof K && (i = r.domAtPos(0));
    }
    for (let n = e.offset - 1; !i && n >= 0; n--) {
      let r = H.get(t.childNodes[n]);
      r instanceof K && (i = r.domAtPos(r.length));
    }
    return i ? new ne(i.node, i.offset, !0) : e;
  }
  nearest(e) {
    for (let t = e; t; ) {
      let i = H.get(t);
      if (i && i.rootView == this)
        return i;
      t = t.parentNode;
    }
    return null;
  }
  posFromDOM(e, t) {
    let i = this.nearest(e);
    if (!i)
      throw new RangeError("Trying to find position for a DOM position outside of the document");
    return i.localPosFromDOM(e, t) + i.posAtStart;
  }
  domAtPos(e) {
    let { i: t, off: i } = this.childCursor().findPos(e, -1);
    for (; t < this.children.length - 1; ) {
      let n = this.children[t];
      if (i < n.length || n instanceof K)
        break;
      t++, i = 0;
    }
    return this.children[t].domAtPos(i);
  }
  coordsAt(e, t) {
    let i = null, n = 0;
    for (let r = this.length, o = this.children.length - 1; o >= 0; o--) {
      let l = this.children[o], a = r - l.breakAfter, f = a - l.length;
      if (a < e)
        break;
      if (f <= e && (f < e || l.covers(-1)) && (a > e || l.covers(1)) && (!i || l instanceof K && !(i instanceof K && t >= 0)))
        i = l, n = f;
      else if (i && f == e && a == e && l instanceof Ge && Math.abs(t) < 2) {
        if (l.deco.startSide < 0)
          break;
        o && (i = null);
      }
      r = f;
    }
    return i ? i.coordsAt(e - n, t) : null;
  }
  coordsForChar(e) {
    let { i: t, off: i } = this.childPos(e, 1), n = this.children[t];
    if (!(n instanceof K))
      return null;
    for (; n.children.length; ) {
      let { i: l, off: a } = n.childPos(i, 1);
      for (; ; l++) {
        if (l == n.children.length)
          return null;
        if ((n = n.children[l]).length)
          break;
      }
      i = a;
    }
    if (!(n instanceof Me))
      return null;
    let r = oe(n.text, i);
    if (r == i)
      return null;
    let o = St(n.dom, i, r).getClientRects();
    for (let l = 0; l < o.length; l++) {
      let a = o[l];
      if (l == o.length - 1 || a.top < a.bottom && a.left < a.right)
        return a;
    }
    return null;
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: i, to: n } = e, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == Q.LTR;
    for (let f = 0, h = 0; h < this.children.length; h++) {
      let c = this.children[h], u = f + c.length;
      if (u > n)
        break;
      if (f >= i) {
        let d = c.dom.getBoundingClientRect();
        if (t.push(d.height), o) {
          let p = c.dom.lastChild, g = p ? ui(p) : [];
          if (g.length) {
            let m = g[g.length - 1], y = a ? m.right - d.left : d.right - m.left;
            y > l && (l = y, this.minWidth = r, this.minWidthFrom = f, this.minWidthTo = u);
          }
        }
      }
      f = u + c.breakAfter;
    }
    return t;
  }
  textDirectionAt(e) {
    let { i: t } = this.childPos(e, 1);
    return getComputedStyle(this.children[t].dom).direction == "rtl" ? Q.RTL : Q.LTR;
  }
  measureTextSize() {
    for (let r of this.children)
      if (r instanceof K) {
        let o = r.measureTextSize();
        if (o)
          return o;
      }
    let e = document.createElement("div"), t, i, n;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let r = ui(e.firstChild)[0];
      t = e.getBoundingClientRect().height, i = r ? r.width / 27 : 7, n = r ? r.height : t, e.remove();
    }), { lineHeight: t, charWidth: i, textHeight: n };
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new Hl(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, n = 0; ; n++) {
      let r = n == t.viewports.length ? null : t.viewports[n], o = r ? r.from - 1 : this.length;
      if (o > i) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(E.replace({
          widget: new ws(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, o));
      }
      if (!r)
        break;
      i = r.to + 1;
    }
    return E.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(di).map((r) => (this.dynamicDecorationMap[e++] = typeof r == "function") ? r(this.view) : r), i = !1, n = this.view.state.facet(ha).map((r, o) => {
      let l = typeof r == "function";
      return l && (i = !0), l ? r(this.view) : r;
    });
    for (n.length && (this.dynamicDecorationMap[e++] = i, t.push(F.join(n))), this.decorations = [
      this.editContextFormatting,
      ...t,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; e < this.decorations.length; )
      this.dynamicDecorationMap[e++] = !1;
    return this.decorations;
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let f = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = f.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let f of this.view.state.facet(oa))
      try {
        if (f(this.view, e.range, e))
          return !0;
      } catch (h) {
        Ce(this.view.state, h, "scroll handler");
      }
    let { range: t } = e, i = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1), n;
    if (!i)
      return;
    !t.empty && (n = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) && (i = {
      left: Math.min(i.left, n.left),
      top: Math.min(i.top, n.top),
      right: Math.max(i.right, n.right),
      bottom: Math.max(i.bottom, n.bottom)
    });
    let r = or(this.view), o = {
      left: i.left - r.left,
      top: i.top - r.top,
      right: i.right + r.right,
      bottom: i.bottom + r.bottom
    }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    mf(this.view.scrollDOM, o, t.head < t.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, a), -a), this.view.textDirection == Q.LTR);
  }
}
function Ff(s) {
  return s.node.nodeType == 1 && s.node.firstChild && (s.offset == 0 || s.node.childNodes[s.offset - 1].contentEditable == "false") && (s.offset == s.node.childNodes.length || s.node.childNodes[s.offset].contentEditable == "false");
}
function ua(s, e) {
  let t = s.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let i = Fl(t.focusNode, t.focusOffset), n = Vl(t.focusNode, t.focusOffset), r = i || n;
  if (n && i && n.node != i.node) {
    let l = H.get(n.node);
    if (!l || l instanceof Me && l.text != n.node.nodeValue)
      r = n;
    else if (s.docView.lastCompositionAfterCursor) {
      let a = H.get(i.node);
      !a || a instanceof Me && a.text != i.node.nodeValue || (r = n);
    }
  }
  if (s.docView.lastCompositionAfterCursor = r != i, !r)
    return null;
  let o = e - r.offset;
  return { from: o, to: o + r.node.nodeValue.length, node: r.node };
}
function Vf(s, e, t) {
  let i = ua(s, t);
  if (!i)
    return null;
  let { node: n, from: r, to: o } = i, l = n.nodeValue;
  if (/[\n\r]/.test(l) || s.state.doc.sliceString(i.from, i.to) != l)
    return null;
  let a = e.invertedDesc, f = new ke(a.mapPos(r), a.mapPos(o), r, o), h = [];
  for (let c = n.parentNode; ; c = c.parentNode) {
    let u = H.get(c);
    if (u instanceof Xe)
      h.push({ node: c, deco: u.mark });
    else {
      if (u instanceof K || c.nodeName == "DIV" && c.parentNode == s.contentDOM)
        return { range: f, text: n, marks: h, line: c };
      if (c != s.contentDOM)
        h.push({ node: c, deco: new xi({
          inclusive: !0,
          attributes: Cf(c),
          tagName: c.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
function Hf(s, e) {
  return s.nodeType != 1 ? 0 : (e && s.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < s.childNodes.length && s.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let zf = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    ji(e, t, this.changes);
  }
  comparePoint(e, t) {
    ji(e, t, this.changes);
  }
  boundChange(e) {
    ji(e, e, this.changes);
  }
};
function Wf(s, e, t) {
  let i = new zf();
  return F.compare(s, e, t, i), i.changes;
}
function _f(s, e) {
  for (let t = s; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function qf(s, e) {
  let t = !1;
  return e && s.iterChangedRanges((i, n) => {
    i < e.to && n > e.from && (t = !0);
  }), t;
}
function $f(s, e, t = 1) {
  let i = s.charCategorizer(e), n = s.doc.lineAt(e), r = e - n.from;
  if (n.length == 0)
    return k.cursor(e);
  r == 0 ? t = 1 : r == n.length && (t = -1);
  let o = r, l = r;
  t < 0 ? o = oe(n.text, r, !1) : l = oe(n.text, r);
  let a = i(n.text.slice(o, l));
  for (; o > 0; ) {
    let f = oe(n.text, o, !1);
    if (i(n.text.slice(f, o)) != a)
      break;
    o = f;
  }
  for (; l < n.length; ) {
    let f = oe(n.text, l);
    if (i(n.text.slice(l, f)) != a)
      break;
    l = f;
  }
  return k.range(o + n.from, l + n.from);
}
function Uf(s, e) {
  return e.left > s ? e.left - s : Math.max(0, s - e.right);
}
function jf(s, e) {
  return e.top > s ? e.top - s : Math.max(0, s - e.bottom);
}
function Fn(s, e) {
  return s.top < e.bottom - 1 && s.bottom > e.top + 1;
}
function jr(s, e) {
  return e < s.top ? { top: e, left: s.left, right: s.right, bottom: s.bottom } : s;
}
function Qr(s, e) {
  return e > s.bottom ? { top: s.top, left: s.left, right: s.right, bottom: e } : s;
}
function Os(s, e, t) {
  let i, n, r, o, l = !1, a, f, h, c;
  for (let p = s.firstChild; p; p = p.nextSibling) {
    let g = ui(p);
    for (let m = 0; m < g.length; m++) {
      let y = g[m];
      n && Fn(n, y) && (y = jr(Qr(y, n.bottom), n.top));
      let x = Uf(e, y), w = jf(t, y);
      if (x == 0 && w == 0)
        return p.nodeType == 3 ? Kr(p, e, t) : Os(p, e, t);
      if (!i || o > w || o == w && r > x) {
        i = p, n = y, r = x, o = w;
        let v = w ? t < y.top ? -1 : 1 : x ? e < y.left ? -1 : 1 : 0;
        l = !v || (v > 0 ? m < g.length - 1 : m > 0);
      }
      x == 0 ? t > y.bottom && (!h || h.bottom < y.bottom) ? (a = p, h = y) : t < y.top && (!c || c.top > y.top) && (f = p, c = y) : h && Fn(h, y) ? h = Qr(h, y.bottom) : c && Fn(c, y) && (c = jr(c, y.top));
    }
  }
  if (h && h.bottom >= t ? (i = a, n = h) : c && c.top <= t && (i = f, n = c), !i)
    return { node: s, offset: 0 };
  let u = Math.max(n.left, Math.min(n.right, e));
  if (i.nodeType == 3)
    return Kr(i, u, t);
  if (l && i.contentEditable != "false")
    return Os(i, u, t);
  let d = Array.prototype.indexOf.call(s.childNodes, i) + (e >= (n.left + n.right) / 2 ? 1 : 0);
  return { node: s, offset: d };
}
function Kr(s, e, t) {
  let i = s.nodeValue.length, n = -1, r = 1e9, o = 0;
  for (let l = 0; l < i; l++) {
    let a = St(s, l, l + 1).getClientRects();
    for (let f = 0; f < a.length; f++) {
      let h = a[f];
      if (h.top == h.bottom)
        continue;
      o || (o = e - h.left);
      let c = (h.top > t ? h.top - t : t - h.bottom) - 1;
      if (h.left - 1 <= e && h.right + 1 >= e && c < r) {
        let u = e >= (h.left + h.right) / 2, d = u;
        if ((A.chrome || A.gecko) && St(s, l).getBoundingClientRect().left == h.right && (d = !u), c <= 0)
          return { node: s, offset: l + (d ? 1 : 0) };
        n = l + (d ? 1 : 0), r = c;
      }
    }
  }
  return { node: s, offset: n > -1 ? n : o > 0 ? s.nodeValue.length : 0 };
}
function da(s, e, t, i = -1) {
  var n, r;
  let o = s.contentDOM.getBoundingClientRect(), l = o.top + s.viewState.paddingTop, a, { docHeight: f } = s.viewState, { x: h, y: c } = e, u = c - l;
  if (u < 0)
    return 0;
  if (u > f)
    return s.state.doc.length;
  for (let v = s.viewState.heightOracle.textHeight / 2, C = !1; a = s.elementAtHeight(u), a.type != xe.Text; )
    for (; u = i > 0 ? a.bottom + v : a.top - v, !(u >= 0 && u <= f); ) {
      if (C)
        return t ? null : 0;
      C = !0, i = -i;
    }
  c = l + u;
  let d = a.from;
  if (d < s.viewport.from)
    return s.viewport.from == 0 ? 0 : t ? null : Gr(s, o, a, h, c);
  if (d > s.viewport.to)
    return s.viewport.to == s.state.doc.length ? s.state.doc.length : t ? null : Gr(s, o, a, h, c);
  let p = s.dom.ownerDocument, g = s.root.elementFromPoint ? s.root : p, m = g.elementFromPoint(h, c);
  m && !s.contentDOM.contains(m) && (m = null), m || (h = Math.max(o.left + 1, Math.min(o.right - 1, h)), m = g.elementFromPoint(h, c), m && !s.contentDOM.contains(m) && (m = null));
  let y, x = -1;
  if (m && ((n = s.docView.nearest(m)) === null || n === void 0 ? void 0 : n.isEditable) != !1) {
    if (p.caretPositionFromPoint) {
      let v = p.caretPositionFromPoint(h, c);
      v && ({ offsetNode: y, offset: x } = v);
    } else if (p.caretRangeFromPoint) {
      let v = p.caretRangeFromPoint(h, c);
      v && ({ startContainer: y, startOffset: x } = v, (!s.contentDOM.contains(y) || A.safari && Qf(y, x, h) || A.chrome && Kf(y, x, h)) && (y = void 0));
    }
    y && (x = Math.min($e(y), x));
  }
  if (!y || !s.docView.dom.contains(y)) {
    let v = K.find(s.docView, d);
    if (!v)
      return u > a.top + a.height / 2 ? a.to : a.from;
    ({ node: y, offset: x } = Os(v.dom, h, c));
  }
  let w = s.docView.nearest(y);
  if (!w)
    return null;
  if (w.isWidget && ((r = w.dom) === null || r === void 0 ? void 0 : r.nodeType) == 1) {
    let v = w.dom.getBoundingClientRect();
    return e.y < v.top || e.y <= v.bottom && e.x <= (v.left + v.right) / 2 ? w.posAtStart : w.posAtEnd;
  } else
    return w.localPosFromDOM(y, x) + w.posAtStart;
}
function Gr(s, e, t, i, n) {
  let r = Math.round((i - e.left) * s.defaultCharacterWidth);
  if (s.lineWrapping && t.height > s.defaultLineHeight * 1.5) {
    let l = s.viewState.heightOracle.textHeight, a = Math.floor((n - t.top - (s.defaultLineHeight - l) * 0.5) / l);
    r += a * s.viewState.heightOracle.lineLength;
  }
  let o = s.state.sliceDoc(t.from, t.to);
  return t.from + ff(o, r, s.state.tabSize);
}
function Qf(s, e, t) {
  let i;
  if (s.nodeType != 3 || e != (i = s.nodeValue.length))
    return !1;
  for (let n = s.nextSibling; n; n = n.nextSibling)
    if (n.nodeType != 1 || n.nodeName != "BR")
      return !1;
  return St(s, i - 1, i).getBoundingClientRect().left > t;
}
function Kf(s, e, t) {
  if (e != 0)
    return !1;
  for (let n = s; ; ) {
    let r = n.parentNode;
    if (!r || r.nodeType != 1 || r.firstChild != n)
      return !1;
    if (r.classList.contains("cm-line"))
      break;
    n = r;
  }
  let i = s.nodeType == 1 ? s.getBoundingClientRect() : St(s, 0, Math.max(s.nodeValue.length, 1)).getBoundingClientRect();
  return t - i.left > 5;
}
function Gf(s, e) {
  let t = s.lineBlockAt(e);
  if (Array.isArray(t.type)) {
    for (let i of t.type)
      if (i.to > e || i.to == e && (i.to == t.to || i.type == xe.Text))
        return i;
  }
  return t;
}
function Xf(s, e, t, i) {
  let n = Gf(s, e.head), r = !i || n.type != xe.Text || !(s.lineWrapping || n.widgetLineBreaks) ? null : s.coordsAtPos(e.assoc < 0 && e.head > n.from ? e.head - 1 : e.head);
  if (r) {
    let o = s.dom.getBoundingClientRect(), l = s.textDirectionAt(n.from), a = s.posAtCoords({
      x: t == (l == Q.LTR) ? o.right - 1 : o.left + 1,
      y: (r.top + r.bottom) / 2
    });
    if (a != null)
      return k.cursor(a, t ? -1 : 1);
  }
  return k.cursor(t ? n.to : n.from, t ? -1 : 1);
}
function Xr(s, e, t, i) {
  let n = s.state.doc.lineAt(e.head), r = s.bidiSpans(n), o = s.textDirectionAt(n.from);
  for (let l = e, a = null; ; ) {
    let f = Ef(n, r, o, l, t), h = Jl;
    if (!f) {
      if (n.number == (t ? s.state.doc.lines : 1))
        return l;
      h = `
`, n = s.state.doc.line(n.number + (t ? 1 : -1)), r = s.bidiSpans(n), f = s.visualLineSide(n, !t);
    }
    if (a) {
      if (!a(h))
        return l;
    } else {
      if (!i)
        return f;
      a = i(h);
    }
    l = f;
  }
}
function Yf(s, e, t) {
  let i = s.state.charCategorizer(e), n = i(t);
  return (r) => {
    let o = i(r);
    return n == se.Space && (n = o), n == o;
  };
}
function Jf(s, e, t, i) {
  let n = e.head, r = t ? 1 : -1;
  if (n == (t ? s.state.doc.length : 0))
    return k.cursor(n, e.assoc);
  let o = e.goalColumn, l, a = s.contentDOM.getBoundingClientRect(), f = s.coordsAtPos(n, e.assoc || -1), h = s.documentTop;
  if (f)
    o == null && (o = f.left - a.left), l = r < 0 ? f.top : f.bottom;
  else {
    let d = s.viewState.lineBlockAt(n);
    o == null && (o = Math.min(a.right - a.left, s.defaultCharacterWidth * (n - d.from))), l = (r < 0 ? d.top : d.bottom) + h;
  }
  let c = a.left + o, u = i != null ? i : s.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let p = l + (u + d) * r, g = da(s, { x: c, y: p }, !1, r);
    if (p < a.top || p > a.bottom || (r < 0 ? g < n : g > n)) {
      let m = s.docView.coordsForChar(g), y = !m || p < m.top ? -1 : 1;
      return k.cursor(g, y, void 0, o);
    }
  }
}
function Qi(s, e, t) {
  for (; ; ) {
    let i = 0;
    for (let n of s)
      n.between(e - 1, e + 1, (r, o, l) => {
        if (e > r && e < o) {
          let a = i || t || (e - r < o - e ? -1 : 1);
          e = a < 0 ? r : o, i = a;
        }
      });
    if (!i)
      return e;
  }
}
function Vn(s, e, t) {
  let i = Qi(s.state.facet(rr).map((n) => n(s)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : k.cursor(i, i < t.from ? 1 : -1);
}
const Jt = "\uFFFF";
class Zf {
  constructor(e, t) {
    this.points = e, this.text = "", this.lineSeparator = t.facet(I.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += Jt;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let i = e.parentNode;
    for (let n = e; ; ) {
      this.findPointBefore(i, n);
      let r = this.text.length;
      this.readNode(n);
      let o = n.nextSibling;
      if (o == t)
        break;
      let l = H.get(n), a = H.get(o);
      (l && a ? l.breakAfter : (l ? l.breakAfter : tn(n)) || tn(o) && (n.nodeName != "BR" || n.cmIgnore) && this.text.length > r) && this.lineBreak(), n = o;
    }
    return this.findPointBefore(i, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
    for (let i = 0, n = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1, o = 1, l;
      if (this.lineSeparator ? (r = t.indexOf(this.lineSeparator, i), o = this.lineSeparator.length) : (l = n.exec(t)) && (r = l.index, o = l[0].length), this.append(t.slice(i, r < 0 ? t.length : r)), r < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      i = r + o;
    }
  }
  readNode(e) {
    if (e.cmIgnore)
      return;
    let t = H.get(e), i = t && t.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let n = i.iter(); !n.next().done; )
        n.lineBreak ? this.lineBreak() : this.append(n.value);
    } else
      e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let i of this.points)
      i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let i of this.points)
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (ec(e, i.node, i.offset) ? t : 0));
  }
}
function ec(s, e, t) {
  for (; ; ) {
    if (!e || t < $e(e))
      return !1;
    if (e == s)
      return !0;
    t = vt(e) + 1, e = e.parentNode;
  }
}
class Yr {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class tc {
  constructor(e, t, i, n) {
    this.typeOver = n, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: r, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, i, 0))) {
      let l = r || o ? [] : sc(e), a = new Zf(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = rc(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = r && r.node == l.focusNode && r.offset == l.focusOffset || !gs(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), f = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !gs(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset), h = e.viewport;
      if ((A.ios || A.chrome) && e.state.selection.main.empty && a != f && (h.from > 0 || h.to < e.state.doc.length)) {
        let c = Math.min(a, f), u = Math.max(a, f), d = h.from - c, p = h.to - u;
        (d == 0 || d == 1 || c == 0) && (p == 0 || p == -1 || u == e.state.doc.length) && (a = 0, f = e.state.doc.length);
      }
      this.newSel = k.single(f, a);
    }
  }
}
function pa(s, e) {
  let t, { newSel: i } = e, n = s.state.selection.main, r = s.inputState.lastKeyTime > Date.now() - 100 ? s.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, a = n.from, f = null;
    (r === 8 || A.android && e.text.length < l - o) && (a = n.to, f = "end");
    let h = nc(s.state.doc.sliceString(o, l, Jt), e.text, a - o, f);
    h && (A.chrome && r == 13 && h.toB == h.from + 2 && e.text.slice(h.from, h.toB) == Jt + Jt && h.toB--, t = {
      from: o + h.from,
      to: o + h.toA,
      insert: L.of(e.text.slice(h.from, h.toB).split(Jt))
    });
  } else
    i && (!s.hasFocus && s.state.facet(Ke) || i.main.eq(n)) && (i = null);
  if (!t && !i)
    return !1;
  if (!t && e.typeOver && !n.empty && i && i.main.empty ? t = { from: n.from, to: n.to, insert: s.state.doc.slice(n.from, n.to) } : t && t.from >= n.from && t.to <= n.to && (t.from != n.from || t.to != n.to) && n.to - n.from - (t.to - t.from) <= 4 ? t = {
    from: n.from,
    to: n.to,
    insert: s.state.doc.slice(n.from, t.from).append(t.insert).append(s.state.doc.slice(t.to, n.to))
  } : (A.mac || A.android) && t && t.from == t.to && t.from == n.head - 1 && /^\. ?$/.test(t.insert.toString()) && s.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = k.single(i.main.anchor - 1, i.main.head - 1)), t = { from: n.from, to: n.to, insert: L.of([" "]) }) : A.chrome && t && t.from == t.to && t.from == n.head && t.insert.toString() == `
 ` && s.lineWrapping && (i && (i = k.single(i.main.anchor - 1, i.main.head - 1)), t = { from: n.from, to: n.to, insert: L.of([" "]) }), t)
    return lr(s, t, i, r);
  if (i && !i.main.eq(n)) {
    let o = !1, l = "select";
    return s.inputState.lastSelectionTime > Date.now() - 50 && (s.inputState.lastSelectionOrigin == "select" && (o = !0), l = s.inputState.lastSelectionOrigin), s.dispatch({ selection: i, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
function lr(s, e, t, i = -1) {
  if (A.ios && s.inputState.flushIOSKey(e))
    return !0;
  let n = s.state.selection.main;
  if (A.android && (e.to == n.to && (e.from == n.from || e.from == n.from - 1 && s.state.sliceDoc(e.from, n.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && Rt(s.contentDOM, "Enter", 13) || (e.from == n.from - 1 && e.to == n.to && e.insert.length == 0 || i == 8 && e.insert.length < e.to - e.from && e.to > n.head) && Rt(s.contentDOM, "Backspace", 8) || e.from == n.from && e.to == n.to + 1 && e.insert.length == 0 && Rt(s.contentDOM, "Delete", 46)))
    return !0;
  let r = e.insert.toString();
  s.inputState.composing >= 0 && s.inputState.composing++;
  let o, l = () => o || (o = ic(s, e, t));
  return s.state.facet(na).some((a) => a(s, e.from, e.to, r, l)) || s.dispatch(l()), !0;
}
function ic(s, e, t) {
  let i, n = s.state, r = n.selection.main;
  if (e.from >= r.from && e.to <= r.to && e.to - e.from >= (r.to - r.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && s.inputState.composing < 0) {
    let l = r.from < e.from ? n.sliceDoc(r.from, e.from) : "", a = r.to > e.to ? n.sliceDoc(e.to, r.to) : "";
    i = n.replaceSelection(s.state.toText(l + e.insert.sliceString(0, void 0, s.state.lineBreak) + a));
  } else {
    let l = n.changes(e), a = t && t.main.to <= l.newLength ? t.main : void 0;
    if (n.selection.ranges.length > 1 && s.inputState.composing >= 0 && e.to <= r.to && e.to >= r.to - 10) {
      let f = s.state.sliceDoc(e.from, e.to), h, c = t && ua(s, t.main.head);
      if (c) {
        let p = e.insert.length - (e.to - e.from);
        h = { from: c.from, to: c.to - p };
      } else
        h = s.state.doc.lineAt(r.head);
      let u = r.to - e.to, d = r.to - r.from;
      i = n.changeByRange((p) => {
        if (p.from == r.from && p.to == r.to)
          return { changes: l, range: a || p.map(l) };
        let g = p.to - u, m = g - f.length;
        if (p.to - p.from != d || s.state.sliceDoc(m, g) != f || p.to >= h.from && p.from <= h.to)
          return { range: p };
        let y = n.changes({ from: m, to: g, insert: e.insert }), x = p.to - r.to;
        return {
          changes: y,
          range: a ? k.range(Math.max(0, a.anchor + x), Math.max(0, a.head + x)) : p.map(y)
        };
      });
    } else
      i = {
        changes: l,
        selection: a && n.selection.replaceRange(a)
      };
  }
  let o = "input.type";
  return (s.composing || s.inputState.compositionPendingChange && s.inputState.compositionEndedAt > Date.now() - 50) && (s.inputState.compositionPendingChange = !1, o += ".compose", s.inputState.compositionFirstChange && (o += ".start", s.inputState.compositionFirstChange = !1)), n.update(i, { userEvent: o, scrollIntoView: !0 });
}
function nc(s, e, t, i) {
  let n = Math.min(s.length, e.length), r = 0;
  for (; r < n && s.charCodeAt(r) == e.charCodeAt(r); )
    r++;
  if (r == n && s.length == e.length)
    return null;
  let o = s.length, l = e.length;
  for (; o > 0 && l > 0 && s.charCodeAt(o - 1) == e.charCodeAt(l - 1); )
    o--, l--;
  if (i == "end") {
    let a = Math.max(0, r - Math.min(o, l));
    t -= o + a - r;
  }
  if (o < r && s.length < e.length) {
    let a = t <= r && t >= o ? r - t : 0;
    r -= a, l = r + (l - o), o = r;
  } else if (l < r) {
    let a = t <= r && t >= l ? r - t : 0;
    r -= a, o = r + (o - l), l = r;
  }
  return { from: r, toA: o, toB: l };
}
function sc(s) {
  let e = [];
  if (s.root.activeElement != s.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: i, focusNode: n, focusOffset: r } = s.observer.selectionRange;
  return t && (e.push(new Yr(t, i)), (n != t || r != i) && e.push(new Yr(n, r))), e;
}
function rc(s, e) {
  if (s.length == 0)
    return null;
  let t = s[0].pos, i = s.length == 2 ? s[1].pos : t;
  return t > -1 && i > -1 ? k.single(t + e, i + e) : null;
}
class oc {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, A.safari && e.contentDOM.addEventListener("input", () => null), A.gecko && vc(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !pc(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || this.runHandlers(e.type, e);
  }
  runHandlers(e, t) {
    let i = this.handlers[e];
    if (i) {
      for (let n of i.observers)
        n(this.view, t);
      for (let n of i.handlers) {
        if (t.defaultPrevented)
          break;
        if (n(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = lc(e), i = this.handlers, n = this.view.contentDOM;
    for (let r in t)
      if (r != "scroll") {
        let o = !t[r].handlers.length, l = i[r];
        l && o != !l.handlers.length && (n.removeEventListener(r, this.handleEvent), l = null), l || n.addEventListener(r, this.handleEvent, { passive: o });
      }
    for (let r in i)
      r != "scroll" && !t[r] && n.removeEventListener(r, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && ma.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), A.android && A.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return A.ios && !e.synthetic && !e.altKey && !e.metaKey && ((t = ga.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || ac.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, Rt(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type) ? this.composing > 0 ? !0 : A.safari && !A.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.view.observer.update(e), this.mouseSelection && this.mouseSelection.update(e), this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function Jr(s, e) {
  return (t, i) => {
    try {
      return e.call(s, i, t);
    } catch (n) {
      Ce(t.state, n);
    }
  };
}
function lc(s) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of s) {
    let n = i.spec;
    if (n && n.domEventHandlers)
      for (let r in n.domEventHandlers) {
        let o = n.domEventHandlers[r];
        o && t(r).handlers.push(Jr(i.value, o));
      }
    if (n && n.domEventObservers)
      for (let r in n.domEventObservers) {
        let o = n.domEventObservers[r];
        o && t(r).observers.push(Jr(i.value, o));
      }
  }
  for (let i in Te)
    t(i).handlers.push(Te[i]);
  for (let i in ve)
    t(i).observers.push(ve[i]);
  return e;
}
const ga = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], ac = "dthko", ma = [16, 17, 18, 20, 91, 92, 224, 225], Ti = 6;
function Pi(s) {
  return Math.max(0, s) * 0.7 + 8;
}
function hc(s, e) {
  return Math.max(Math.abs(s.clientX - e.clientX), Math.abs(s.clientY - e.clientY));
}
class fc {
  constructor(e, t, i, n) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = n, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = yf(e.contentDOM), this.atoms = e.state.facet(rr).map((o) => o(e));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(I.allowMultipleSelections) && cc(e, t), this.dragging = dc(e, t) && xa(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && hc(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let t = 0, i = 0, n = 0, r = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: n, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: r, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = or(this.view);
    e.clientX - a.left <= n + Ti ? t = -Pi(n - e.clientX) : e.clientX + a.right >= o - Ti && (t = Pi(e.clientX - o)), e.clientY - a.top <= r + Ti ? i = -Pi(r - e.clientY) : e.clientY + a.bottom >= l - Ti && (i = Pi(e.clientY - l)), this.setScrollSpeed(t, i);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(e, t) {
    this.scrollSpeed = { x: e, y: t }, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: e, y: t } = this.scrollSpeed;
    e && this.scrollParents.x && (this.scrollParents.x.scrollLeft += e, e = 0), t && this.scrollParents.y && (this.scrollParents.y.scrollTop += t, t = 0), (e || t) && this.view.win.scrollBy(e, t), this.dragging === !1 && this.select(this.lastEvent);
  }
  skipAtoms(e) {
    let t = null;
    for (let i = 0; i < e.ranges.length; i++) {
      let n = e.ranges[i], r = null;
      if (n.empty) {
        let o = Qi(this.atoms, n.from, 0);
        o != n.from && (r = k.cursor(o, -1));
      } else {
        let o = Qi(this.atoms, n.from, -1), l = Qi(this.atoms, n.to, 1);
        (o != n.from || l != n.to) && (r = k.range(n.from == n.anchor ? o : l, n.from == n.head ? o : l));
      }
      r && (t || (t = e.ranges.slice()), t[i] = r);
    }
    return t ? k.create(t, e.mainIndex) : e;
  }
  select(e) {
    let { view: t } = this, i = this.skipAtoms(this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function cc(s, e) {
  let t = s.state.facet(Zl);
  return t.length ? t[0](e) : A.mac ? e.metaKey : e.ctrlKey;
}
function uc(s, e) {
  let t = s.state.facet(ea);
  return t.length ? t[0](e) : A.mac ? !e.altKey : !e.ctrlKey;
}
function dc(s, e) {
  let { main: t } = s.state.selection;
  if (t.empty)
    return !1;
  let i = ci(s.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let n = i.getRangeAt(0).getClientRects();
  for (let r = 0; r < n.length; r++) {
    let o = n[r];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function pc(s, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, i; t != s.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (i = H.get(t)) && i.ignoreEvent(e))
      return !1;
  return !0;
}
const Te = /* @__PURE__ */ Object.create(null), ve = /* @__PURE__ */ Object.create(null), ya = A.ie && A.ie_version < 15 || A.ios && A.webkit_version < 604;
function gc(s) {
  let e = s.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    s.focus(), t.remove(), ba(s, t.value);
  }, 50);
}
function Sn(s, e, t) {
  for (let i of s.facet(e))
    t = i(t, s);
  return t;
}
function ba(s, e) {
  e = Sn(s.state, ir, e);
  let { state: t } = s, i, n = 1, r = t.toText(e), o = r.lines == t.selection.ranges.length;
  if (Ms != null && t.selection.ranges.every((a) => a.empty) && Ms == r.toString()) {
    let a = -1;
    i = t.changeByRange((f) => {
      let h = t.doc.lineAt(f.from);
      if (h.from == a)
        return { range: f };
      a = h.from;
      let c = t.toText((o ? r.line(n++).text : e) + t.lineBreak);
      return {
        changes: { from: h.from, insert: c },
        range: k.cursor(f.from + c.length)
      };
    });
  } else
    o ? i = t.changeByRange((a) => {
      let f = r.line(n++);
      return {
        changes: { from: a.from, to: a.to, insert: f.text },
        range: k.cursor(a.from + f.length)
      };
    }) : i = t.replaceSelection(r);
  s.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
ve.scroll = (s) => {
  s.inputState.lastScrollTop = s.scrollDOM.scrollTop, s.inputState.lastScrollLeft = s.scrollDOM.scrollLeft;
};
Te.keydown = (s, e) => (s.inputState.setSelectionOrigin("select"), e.keyCode == 27 && s.inputState.tabFocusMode != 0 && (s.inputState.tabFocusMode = Date.now() + 2e3), !1);
ve.touchstart = (s, e) => {
  s.inputState.lastTouchTime = Date.now(), s.inputState.setSelectionOrigin("select.pointer");
};
ve.touchmove = (s) => {
  s.inputState.setSelectionOrigin("select.pointer");
};
Te.mousedown = (s, e) => {
  if (s.observer.flush(), s.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let t = null;
  for (let i of s.state.facet(ta))
    if (t = i(s, e), t)
      break;
  if (!t && e.button == 0 && (t = bc(s, e)), t) {
    let i = !s.hasFocus;
    s.inputState.startMouseSelection(new fc(s, e, t, i)), i && s.observer.ignore(() => {
      Ll(s.contentDOM);
      let r = s.root.activeElement;
      r && !r.contains(s.contentDOM) && r.blur();
    });
    let n = s.inputState.mouseSelection;
    if (n)
      return n.start(e), n.dragging === !1;
  }
  return !1;
};
function Zr(s, e, t, i) {
  if (i == 1)
    return k.cursor(e, t);
  if (i == 2)
    return $f(s.state, e, t);
  {
    let n = K.find(s.docView, e), r = s.state.doc.lineAt(n ? n.posAtEnd : e), o = n ? n.posAtStart : r.from, l = n ? n.posAtEnd : r.to;
    return l < s.state.doc.length && l == r.to && l++, k.range(o, l);
  }
}
let eo = (s, e, t) => e >= t.top && e <= t.bottom && s >= t.left && s <= t.right;
function mc(s, e, t, i) {
  let n = K.find(s.docView, e);
  if (!n)
    return 1;
  let r = e - n.posAtStart;
  if (r == 0)
    return 1;
  if (r == n.length)
    return -1;
  let o = n.coordsAt(r, -1);
  if (o && eo(t, i, o))
    return -1;
  let l = n.coordsAt(r, 1);
  return l && eo(t, i, l) ? 1 : o && o.bottom >= i ? -1 : 1;
}
function to(s, e) {
  let t = s.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: t, bias: mc(s, t, e.clientX, e.clientY) };
}
const yc = A.ie && A.ie_version <= 11;
let io = null, no = 0, so = 0;
function xa(s) {
  if (!yc)
    return s.detail;
  let e = io, t = so;
  return io = s, so = Date.now(), no = !e || t > Date.now() - 400 && Math.abs(e.clientX - s.clientX) < 2 && Math.abs(e.clientY - s.clientY) < 2 ? (no + 1) % 3 : 1;
}
function bc(s, e) {
  let t = to(s, e), i = xa(e), n = s.state.selection;
  return {
    update(r) {
      r.docChanged && (t.pos = r.changes.mapPos(t.pos), n = n.map(r.changes));
    },
    get(r, o, l) {
      let a = to(s, r), f, h = Zr(s, a.pos, a.bias, i);
      if (t.pos != a.pos && !o) {
        let c = Zr(s, t.pos, t.bias, i), u = Math.min(c.from, h.from), d = Math.max(c.to, h.to);
        h = u < h.from ? k.range(u, d) : k.range(d, u);
      }
      return o ? n.replaceRange(n.main.extend(h.from, h.to)) : l && i == 1 && n.ranges.length > 1 && (f = xc(n, a.pos)) ? f : l ? n.addRange(h) : k.create([h]);
    }
  };
}
function xc(s, e) {
  for (let t = 0; t < s.ranges.length; t++) {
    let { from: i, to: n } = s.ranges[t];
    if (i <= e && n >= e)
      return k.create(s.ranges.slice(0, t).concat(s.ranges.slice(t + 1)), s.mainIndex == t ? 0 : s.mainIndex - (s.mainIndex > t ? 1 : 0));
  }
  return null;
}
Te.dragstart = (s, e) => {
  let { selection: { main: t } } = s.state;
  if (e.target.draggable) {
    let n = s.docView.nearest(e.target);
    if (n && n.isWidget) {
      let r = n.posAtStart, o = r + n.length;
      (r >= t.to || o <= t.from) && (t = k.range(r, o));
    }
  }
  let { inputState: i } = s;
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", Sn(s.state, nr, s.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
Te.dragend = (s) => (s.inputState.draggedContent = null, !1);
function ro(s, e, t, i) {
  if (t = Sn(s.state, ir, t), !t)
    return;
  let n = s.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: r } = s.inputState, o = i && r && uc(s, e) ? { from: r.from, to: r.to } : null, l = { from: n, insert: t }, a = s.state.changes(o ? [o, l] : l);
  s.focus(), s.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(n, -1), head: a.mapPos(n, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  }), s.inputState.draggedContent = null;
}
Te.drop = (s, e) => {
  if (!e.dataTransfer)
    return !1;
  if (s.state.readOnly)
    return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let i = Array(t.length), n = 0, r = () => {
      ++n == t.length && ro(s, e, i.filter((o) => o != null).join(s.state.lineBreak), !1);
    };
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      l.onerror = r, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), r();
      }, l.readAsText(t[o]);
    }
    return !0;
  } else {
    let i = e.dataTransfer.getData("Text");
    if (i)
      return ro(s, e, i, !0), !0;
  }
  return !1;
};
Te.paste = (s, e) => {
  if (s.state.readOnly)
    return !0;
  s.observer.flush();
  let t = ya ? null : e.clipboardData;
  return t ? (ba(s, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (gc(s), !1);
};
function kc(s, e) {
  let t = s.dom.parentNode;
  if (!t)
    return;
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), s.focus();
  }, 50);
}
function wc(s) {
  let e = [], t = [], i = !1;
  for (let n of s.selection.ranges)
    n.empty || (e.push(s.sliceDoc(n.from, n.to)), t.push(n));
  if (!e.length) {
    let n = -1;
    for (let { from: r } of s.selection.ranges) {
      let o = s.doc.lineAt(r);
      o.number > n && (e.push(o.text), t.push({ from: o.from, to: Math.min(s.doc.length, o.to + 1) })), n = o.number;
    }
    i = !0;
  }
  return { text: Sn(s, nr, e.join(s.lineBreak)), ranges: t, linewise: i };
}
let Ms = null;
Te.copy = Te.cut = (s, e) => {
  let { text: t, ranges: i, linewise: n } = wc(s.state);
  if (!t && !n)
    return !1;
  Ms = n ? t : null, e.type == "cut" && !s.state.readOnly && s.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let r = ya ? null : e.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", t), !0) : (kc(s, t), !1);
};
const ka = /* @__PURE__ */ Ye.define();
function wa(s, e) {
  let t = [];
  for (let i of s.facet(sa)) {
    let n = i(s, e);
    n && t.push(n);
  }
  return t ? s.update({ effects: t, annotations: ka.of(!0) }) : null;
}
function va(s) {
  setTimeout(() => {
    let e = s.hasFocus;
    if (e != s.inputState.notifiedFocused) {
      let t = wa(s.state, e);
      t ? s.dispatch(t) : s.update([]);
    }
  }, 10);
}
ve.focus = (s) => {
  s.inputState.lastFocusTime = Date.now(), !s.scrollDOM.scrollTop && (s.inputState.lastScrollTop || s.inputState.lastScrollLeft) && (s.scrollDOM.scrollTop = s.inputState.lastScrollTop, s.scrollDOM.scrollLeft = s.inputState.lastScrollLeft), va(s);
};
ve.blur = (s) => {
  s.observer.clearSelectionRange(), va(s);
};
ve.compositionstart = ve.compositionupdate = (s) => {
  s.observer.editContext || (s.inputState.compositionFirstChange == null && (s.inputState.compositionFirstChange = !0), s.inputState.composing < 0 && (s.inputState.composing = 0));
};
ve.compositionend = (s) => {
  s.observer.editContext || (s.inputState.composing = -1, s.inputState.compositionEndedAt = Date.now(), s.inputState.compositionPendingKey = !0, s.inputState.compositionPendingChange = s.observer.pendingRecords().length > 0, s.inputState.compositionFirstChange = null, A.chrome && A.android ? s.observer.flushSoon() : s.inputState.compositionPendingChange ? Promise.resolve().then(() => s.observer.flush()) : setTimeout(() => {
    s.inputState.composing < 0 && s.docView.hasComposition && s.update([]);
  }, 50));
};
ve.contextmenu = (s) => {
  s.inputState.lastContextMenu = Date.now();
};
Te.beforeinput = (s, e) => {
  var t, i;
  if (e.inputType == "insertReplacementText" && s.observer.editContext) {
    let r = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), o = e.getTargetRanges();
    if (r && o.length) {
      let l = o[0], a = s.posAtDOM(l.startContainer, l.startOffset), f = s.posAtDOM(l.endContainer, l.endOffset);
      return lr(s, { from: a, to: f, insert: s.state.toText(r) }, null), !0;
    }
  }
  let n;
  if (A.chrome && A.android && (n = ga.find((r) => r.inputType == e.inputType)) && (s.observer.delayAndroidKey(n.key, n.keyCode), n.key == "Backspace" || n.key == "Delete")) {
    let r = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > r + 10 && s.hasFocus && (s.contentDOM.blur(), s.focus());
    }, 100);
  }
  return A.ios && e.inputType == "deleteContentForward" && s.observer.flushSoon(), A.safari && e.inputType == "insertText" && s.inputState.composing >= 0 && setTimeout(() => ve.compositionend(s, e), 20), !1;
};
const oo = /* @__PURE__ */ new Set();
function vc(s) {
  oo.has(s) || (oo.add(s), s.addEventListener("copy", () => {
  }), s.addEventListener("cut", () => {
  }));
}
const lo = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let Vt = !1;
function ao() {
  Vt = !1;
}
class Sc {
  constructor(e) {
    this.lineWrapping = e, this.doc = L.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(e, t) {
    let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return lo.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let i = 0; i < e.length; i++) {
      let n = e[i];
      n < 0 ? i++ : this.heightSamples[Math.floor(n * 10)] || (t = !0, this.heightSamples[Math.floor(n * 10)] = !0);
    }
    return t;
  }
  refresh(e, t, i, n, r, o) {
    let l = lo.indexOf(e) > -1, a = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = t, this.charWidth = i, this.textHeight = n, this.lineLength = r, a) {
      this.heightSamples = {};
      for (let f = 0; f < o.length; f++) {
        let h = o[f];
        h < 0 ? f++ : this.heightSamples[Math.floor(h * 10)] = !0;
      }
    }
    return a;
  }
}
class Cc {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class He {
  constructor(e, t, i, n, r) {
    this.from = e, this.length = t, this.top = i, this.height = n, this._content = r;
  }
  get type() {
    return typeof this._content == "number" ? xe.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof lt ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new He(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var _ = /* @__PURE__ */ function(s) {
  return s[s.ByPos = 0] = "ByPos", s[s.ByHeight = 1] = "ByHeight", s[s.ByPosNoHeight = 2] = "ByPosNoHeight", s;
}(_ || (_ = {}));
const Ki = 1e-3;
class le {
  constructor(e, t, i = 2) {
    this.length = e, this.height = t, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e) {
    this.height != e && (Math.abs(this.height - e) > Ki && (Vt = !0), this.height = e);
  }
  replace(e, t, i) {
    return le.of(i);
  }
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, i, n) {
    let r = this, o = i.doc;
    for (let l = n.length - 1; l >= 0; l--) {
      let { fromA: a, toA: f, fromB: h, toB: c } = n[l], u = r.lineAt(a, _.ByPosNoHeight, i.setDoc(t), 0, 0), d = u.to >= f ? u : r.lineAt(f, _.ByPosNoHeight, i, 0, 0);
      for (c += d.to - f, f = d.to; l > 0 && u.from <= n[l - 1].toA; )
        a = n[l - 1].fromA, h = n[l - 1].fromB, l--, a < u.from && (u = r.lineAt(a, _.ByPosNoHeight, i, 0, 0));
      h += u.from - a, a = u.from;
      let p = ar.build(i.setDoc(o), e, h, c);
      r = rn(r, r.replace(a, f, p));
    }
    return r.updateHeight(i, 0);
  }
  static empty() {
    return new pe(0, 0);
  }
  static of(e) {
    if (e.length == 1)
      return e[0];
    let t = 0, i = e.length, n = 0, r = 0;
    for (; ; )
      if (t == i)
        if (n > r * 2) {
          let l = e[t - 1];
          l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right), i += 1 + l.break, n -= l.size;
        } else if (r > n * 2) {
          let l = e[i];
          l.break ? e.splice(i, 1, l.left, null, l.right) : e.splice(i, 1, l.left, l.right), i += 2 + l.break, r -= l.size;
        } else
          break;
      else if (n < r) {
        let l = e[t++];
        l && (n += l.size);
      } else {
        let l = e[--i];
        l && (r += l.size);
      }
    let o = 0;
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, i++), new Ac(le.of(e.slice(0, t)), o, le.of(e.slice(i)));
  }
}
function rn(s, e) {
  return s == e ? s : (s.constructor != e.constructor && (Vt = !0), e);
}
le.prototype.size = 1;
class Sa extends le {
  constructor(e, t, i) {
    super(e, t), this.deco = i;
  }
  blockAt(e, t, i, n) {
    return new He(n, this.length, i, this.height, this.deco || 0);
  }
  lineAt(e, t, i, n, r) {
    return this.blockAt(0, i, n, r);
  }
  forEachLine(e, t, i, n, r, o) {
    e <= r + this.length && t >= r && o(this.blockAt(0, i, n, r));
  }
  updateHeight(e, t = 0, i = !1, n) {
    return n && n.from <= t && n.more && this.setHeight(n.heights[n.index++]), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class pe extends Sa {
  constructor(e, t) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, t, i, n) {
    return new He(n, this.length, i, this.height, this.breaks);
  }
  replace(e, t, i) {
    let n = i[0];
    return i.length == 1 && (n instanceof pe || n instanceof ee && n.flags & 4) && Math.abs(this.length - n.length) < 10 ? (n instanceof ee ? n = new pe(n.length, this.height) : n.height = this.height, this.outdated || (n.outdated = !1), n) : le.of(i);
  }
  updateHeight(e, t = 0, i = !1, n) {
    return n && n.from <= t && n.more ? this.setHeight(n.heights[n.index++]) : (i || this.outdated) && this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class ee extends le {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let i = e.doc.lineAt(t).number, n = e.doc.lineAt(t + this.length).number, r = n - i + 1, o, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * r);
      o = a / r, this.length > r + 1 && (l = (this.height - a) / (this.length - r - 1));
    } else
      o = this.height / r;
    return { firstLine: i, lastLine: n, perLine: o, perChar: l };
  }
  blockAt(e, t, i, n) {
    let { firstLine: r, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(t, n);
    if (t.lineWrapping) {
      let f = n + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)), h = t.doc.lineAt(f), c = l + h.length * a, u = Math.max(i, e - c / 2);
      return new He(h.from, h.length, u, c, 0);
    } else {
      let f = Math.max(0, Math.min(o - r, Math.floor((e - i) / l))), { from: h, length: c } = t.doc.line(r + f);
      return new He(h, c, i + l * f, l, 0);
    }
  }
  lineAt(e, t, i, n, r) {
    if (t == _.ByHeight)
      return this.blockAt(e, i, n, r);
    if (t == _.ByPosNoHeight) {
      let { from: d, to: p } = i.doc.lineAt(e);
      return new He(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, r), f = i.doc.lineAt(e), h = l + f.length * a, c = f.number - o, u = n + l * c + a * (f.from - r - c);
    return new He(f.from, f.length, Math.max(n, Math.min(u, n + this.height - h)), h, 0);
  }
  forEachLine(e, t, i, n, r, o) {
    e = Math.max(e, r), t = Math.min(t, r + this.length);
    let { firstLine: l, perLine: a, perChar: f } = this.heightMetrics(i, r);
    for (let h = e, c = n; h <= t; ) {
      let u = i.doc.lineAt(h);
      if (h == e) {
        let p = u.number - l;
        c += a * p + f * (e - r - p);
      }
      let d = a + f * u.length;
      o(new He(u.from, u.length, c, d, 0)), c += d, h = u.to + 1;
    }
  }
  replace(e, t, i) {
    let n = this.length - t;
    if (n > 0) {
      let r = i[i.length - 1];
      r instanceof ee ? i[i.length - 1] = new ee(r.length + n) : i.push(null, new ee(n - 1));
    }
    if (e > 0) {
      let r = i[0];
      r instanceof ee ? i[0] = new ee(e + r.length) : i.unshift(new ee(e - 1), null);
    }
    return le.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new ee(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new ee(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = !1, n) {
    let r = t + this.length;
    if (n && n.from <= t + this.length && n.more) {
      let o = [], l = Math.max(t, n.from), a = -1;
      for (n.from > t && o.push(new ee(n.from - t - 1).updateHeight(e, t)); l <= r && n.more; ) {
        let h = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let c = n.heights[n.index++];
        a == -1 ? a = c : Math.abs(c - a) >= Ki && (a = -2);
        let u = new pe(h, c);
        u.outdated = !1, o.push(u), l += h + 1;
      }
      l <= r && o.push(null, new ee(r - l).updateHeight(e, l));
      let f = le.of(o);
      return (a < 0 || Math.abs(f.height - this.height) >= Ki || Math.abs(a - this.heightMetrics(e, t).perLine) >= Ki) && (Vt = !0), rn(this, f);
    } else
      (i || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class Ac extends le {
  constructor(e, t, i) {
    super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)), this.left = e, this.right = i, this.size = e.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, i, n) {
    let r = i + this.left.height;
    return e < r ? this.left.blockAt(e, t, i, n) : this.right.blockAt(e, t, r, n + this.left.length + this.break);
  }
  lineAt(e, t, i, n, r) {
    let o = n + this.left.height, l = r + this.left.length + this.break, a = t == _.ByHeight ? e < o : e < l, f = a ? this.left.lineAt(e, t, i, n, r) : this.right.lineAt(e, t, i, o, l);
    if (this.break || (a ? f.to < l : f.from > l))
      return f;
    let h = t == _.ByPosNoHeight ? _.ByPosNoHeight : _.ByPos;
    return a ? f.join(this.right.lineAt(l, h, i, o, l)) : this.left.lineAt(l, h, i, n, r).join(f);
  }
  forEachLine(e, t, i, n, r, o) {
    let l = n + this.left.height, a = r + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, i, n, r, o), t >= a && this.right.forEachLine(e, t, i, l, a, o);
    else {
      let f = this.lineAt(a, _.ByPos, i, n, r);
      e < f.from && this.left.forEachLine(e, f.from - 1, i, n, r, o), f.to >= e && f.from <= t && o(f), t > f.to && this.right.forEachLine(f.to + 1, t, i, l, a, o);
    }
  }
  replace(e, t, i) {
    let n = this.left.length + this.break;
    if (t < n)
      return this.balanced(this.left.replace(e, t, i), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - n, t - n, i));
    let r = [];
    e > 0 && this.decomposeLeft(e, r);
    let o = r.length;
    for (let l of i)
      r.push(l);
    if (e > 0 && ho(r, o - 1), t < this.length) {
      let l = r.length;
      this.decomposeRight(t, r), ho(r, l);
    }
    return le.of(r);
  }
  decomposeLeft(e, t) {
    let i = this.left.length;
    if (e <= i)
      return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (i++, e >= i && t.push(null)), e > i && this.right.decomposeLeft(e - i, t);
  }
  decomposeRight(e, t) {
    let i = this.left.length, n = i + this.break;
    if (e >= n)
      return this.right.decomposeRight(e - n, t);
    e < i && this.left.decomposeRight(e, t), this.break && e < n && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? le.of(this.break ? [e, null, t] : [e, t]) : (this.left = rn(this.left, e), this.right = rn(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = !1, n) {
    let { left: r, right: o } = this, l = t + r.length + this.break, a = null;
    return n && n.from <= t + r.length && n.more ? a = r = r.updateHeight(e, t, i, n) : r.updateHeight(e, t, i), n && n.from <= l + o.length && n.more ? a = o = o.updateHeight(e, l, i, n) : o.updateHeight(e, l, i), a ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function ho(s, e) {
  let t, i;
  s[e] == null && (t = s[e - 1]) instanceof ee && (i = s[e + 1]) instanceof ee && s.splice(e - 1, 3, new ee(t.length + 1 + i.length));
}
const Oc = 5;
class ar {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd), n = this.nodes[this.nodes.length - 1];
      n instanceof pe ? n.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new pe(i - this.pos, -1)), this.writtenTo = i, t > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let n = i.widget ? i.widget.estimatedHeight : 0, r = i.widget ? i.widget.lineBreaks : 0;
      n < 0 && (n = this.oracle.lineHeight);
      let o = t - e;
      i.block ? this.addBlock(new Sa(o, n, i)) : (o || r || n >= Oc) && this.addLineDeco(n, r, o);
    } else
      t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new pe(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let i = new ee(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof pe)
      return e;
    let t = new pe(0, -1);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, i) {
    let n = this.ensureLine();
    n.length += i, n.collapsed += i, n.widgetHeight = Math.max(n.widgetHeight, e), n.breaks += t, this.writtenTo = this.pos = this.pos + i;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof pe) && !this.isCovered ? this.nodes.push(new pe(0, -1)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let n of this.nodes)
      n instanceof pe && n.updateHeight(this.oracle, i), i += n ? n.length : 1;
    return this.nodes;
  }
  static build(e, t, i, n) {
    let r = new ar(i, e);
    return F.spans(t, i, n, r, 0), r.finish(i);
  }
}
function Mc(s, e, t) {
  let i = new Dc();
  return F.compare(s, e, t, i, 0), i.changes;
}
class Dc {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, n) {
    (e < t || i && i.heightRelevant || n && n.heightRelevant) && ji(e, t, this.changes, 5);
  }
}
function Tc(s, e) {
  let t = s.getBoundingClientRect(), i = s.ownerDocument, n = i.defaultView || window, r = Math.max(0, t.left), o = Math.min(n.innerWidth, t.right), l = Math.max(0, t.top), a = Math.min(n.innerHeight, t.bottom);
  for (let f = s.parentNode; f && f != i.body; )
    if (f.nodeType == 1) {
      let h = f, c = window.getComputedStyle(h);
      if ((h.scrollHeight > h.clientHeight || h.scrollWidth > h.clientWidth) && c.overflow != "visible") {
        let u = h.getBoundingClientRect();
        r = Math.max(r, u.left), o = Math.min(o, u.right), l = Math.max(l, u.top), a = Math.min(f == s.parentNode ? n.innerHeight : a, u.bottom);
      }
      f = c.position == "absolute" || c.position == "fixed" ? h.offsetParent : h.parentNode;
    } else if (f.nodeType == 11)
      f = f.host;
    else
      break;
  return {
    left: r - t.left,
    right: Math.max(r, o) - t.left,
    top: l - (t.top + e),
    bottom: Math.max(l, a) - (t.top + e)
  };
}
function Pc(s, e) {
  let t = s.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class Hn {
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.size = i, this.displaySize = n;
  }
  static same(e, t) {
    if (e.length != t.length)
      return !1;
    for (let i = 0; i < e.length; i++) {
      let n = e[i], r = t[i];
      if (n.from != r.from || n.to != r.to || n.size != r.size)
        return !1;
    }
    return !0;
  }
  draw(e, t) {
    return E.replace({
      widget: new Bc(this.displaySize * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
}
class Bc extends er {
  constructor(e, t) {
    super(), this.size = e, this.vertical = t;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class fo {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !1, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = co, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Q.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let t = e.facet(sr).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    this.heightOracle = new Sc(t), this.stateDeco = e.facet(di).filter((i) => typeof i != "function"), this.heightMap = le.empty().applyChanges(this.stateDeco, L.empty, this.heightOracle.setDoc(e.doc), [new ke(0, 0, 0, e.doc.length)]);
    for (let i = 0; i < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); i++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = E.set(this.lineGaps.map((i) => i.draw(this, !1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let n = i ? t.head : t.anchor;
      if (!e.some(({ from: r, to: o }) => n >= r && n <= o)) {
        let { from: r, to: o } = this.lineBlockAt(n);
        e.push(new Bi(r, o));
      }
    }
    return this.viewports = e.sort((i, n) => i.from - n.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? co : new hr(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(Zt(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(di).filter((h) => typeof h != "function");
    let n = e.changedRanges, r = ke.extendWithRanges(n, Mc(i, this.stateDeco, e ? e.changes : X.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    ao(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), r), (this.heightMap.height != o || Vt) && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let a = r.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let f = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, e.flags |= this.updateForViewport(), (f || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(Nf) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM, i = window.getComputedStyle(t), n = this.heightOracle, r = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? Q.RTL : Q.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r), l = t.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let f = 0, h = 0;
    if (l.width && l.height) {
      let { scaleX: v, scaleY: C } = El(t, l);
      (v > 5e-3 && Math.abs(this.scaleX - v) > 5e-3 || C > 5e-3 && Math.abs(this.scaleY - C) > 5e-3) && (this.scaleX = v, this.scaleY = C, f |= 16, o = a = !0);
    }
    let c = (parseInt(i.paddingTop) || 0) * this.scaleY, u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != c || this.paddingBottom != u) && (this.paddingTop = c, this.paddingBottom = u, f |= 18), this.editorWidth != e.scrollDOM.clientWidth && (n.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, f |= 16);
    let d = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != d && (this.scrollAnchorHeight = -1, this.scrollTop = d), this.scrolledToBottom = Il(e.scrollDOM);
    let p = (this.printing ? Pc : Tc)(t, this.paddingTop), g = p.top - this.pixelViewport.top, m = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let y = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (y != this.inView && (this.inView = y, y && (a = !0)), !this.inView && !this.scrollTarget)
      return 0;
    let x = l.width;
    if ((this.contentDOMWidth != x || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, f |= 16), a) {
      let v = e.docView.measureVisibleLineHeights(this.viewport);
      if (n.mustRefreshForHeights(v) && (o = !0), o || n.lineWrapping && Math.abs(x - this.contentDOMWidth) > n.charWidth) {
        let { lineHeight: C, charWidth: O, textHeight: M } = e.docView.measureTextSize();
        o = C > 0 && n.refresh(r, C, O, M, x / O, v), o && (e.docView.minWidth = 0, f |= 16);
      }
      g > 0 && m > 0 ? h = Math.max(g, m) : g < 0 && m < 0 && (h = Math.min(g, m)), ao();
      for (let C of this.viewports) {
        let O = C.from == this.viewport.from ? v : e.docView.measureVisibleLineHeights(C);
        this.heightMap = (o ? le.empty().applyChanges(this.stateDeco, L.empty, this.heightOracle, [new ke(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(n, 0, o, new Cc(C.from, O));
      }
      Vt && (f |= 2);
    }
    let w = !this.viewportIsAppropriate(this.viewport, h) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return w && (f & 2 && (f |= this.updateScaler()), this.viewport = this.getViewport(h, this.scrollTarget), f |= this.updateForViewport()), (f & 2 || w) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 2e3 << 1) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), f |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), f;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), n = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new Bi(n.lineAt(o - i * 1e3, _.ByHeight, r, 0, 0).from, n.lineAt(l + (1 - i) * 1e3, _.ByHeight, r, 0, 0).to);
    if (t) {
      let { head: f } = t.range;
      if (f < a.from || f > a.to) {
        let h = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), c = n.lineAt(f, _.ByPos, r, 0, 0), u;
        t.y == "center" ? u = (c.top + c.bottom) / 2 - h / 2 : t.y == "start" || t.y == "nearest" && f < a.from ? u = c.top : u = c.bottom - h, a = new Bi(n.lineAt(u - 1e3 / 2, _.ByHeight, r, 0, 0).from, n.lineAt(u + h + 1e3 / 2, _.ByHeight, r, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1), n = t.mapPos(e.to, 1);
    return new Bi(this.heightMap.lineAt(i, _.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(n, _.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: n } = this.heightMap.lineAt(e, _.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(t, _.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || n <= o - Math.max(10, Math.min(-i, 250))) && (t == this.state.doc.length || r >= l + Math.max(10, Math.min(i, 250))) && n > o - 2 * 1e3 && r < l + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let i = [];
    for (let n of e)
      t.touchesRange(n.from, n.to) || i.push(new Hn(t.mapPos(n.from), t.mapPos(n.to), n.size, n.displaySize));
    return i;
  }
  ensureLineGaps(e, t) {
    let i = this.heightOracle.lineWrapping, n = i ? 1e4 : 2e3, r = n >> 1, o = n << 1;
    if (this.defaultTextDirection != Q.LTR && !i)
      return [];
    let l = [], a = (h, c, u, d) => {
      if (c - h < r)
        return;
      let p = this.state.selection.main, g = [p.from];
      p.empty || g.push(p.to);
      for (let y of g)
        if (y > h && y < c) {
          a(h, y - 10, u, d), a(y + 10, c, u, d);
          return;
        }
      let m = Ec(e, (y) => y.from >= u.from && y.to <= u.to && Math.abs(y.from - h) < r && Math.abs(y.to - c) < r && !g.some((x) => y.from < x && y.to > x));
      if (!m) {
        if (c < u.to && t && i && t.visibleRanges.some((w) => w.from <= c && w.to >= c)) {
          let w = t.moveToLineBoundary(k.cursor(c), !1, !0).head;
          w > h && (c = w);
        }
        let y = this.gapSize(u, h, c, d), x = i || y < 2e6 ? y : 2e6;
        m = new Hn(h, c, y, x);
      }
      l.push(m);
    }, f = (h) => {
      if (h.length < o || h.type != xe.Text)
        return;
      let c = Rc(h.from, h.to, this.stateDeco);
      if (c.total < o)
        return;
      let u = this.scrollTarget ? this.scrollTarget.range.head : null, d, p;
      if (i) {
        let g = n / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, y;
        if (u != null) {
          let x = Ei(c, u), w = ((this.visibleBottom - this.visibleTop) / 2 + g) / h.height;
          m = x - w, y = x + w;
        } else
          m = (this.visibleTop - h.top - g) / h.height, y = (this.visibleBottom - h.top + g) / h.height;
        d = Ri(c, m), p = Ri(c, y);
      } else {
        let g = c.total * this.heightOracle.charWidth, m = n * this.heightOracle.charWidth, y = 0;
        if (g > 2e6)
          for (let O of e)
            O.from >= h.from && O.from < h.to && O.size != O.displaySize && O.from * this.heightOracle.charWidth + y < this.pixelViewport.left && (y = O.size - O.displaySize);
        let x = this.pixelViewport.left + y, w = this.pixelViewport.right + y, v, C;
        if (u != null) {
          let O = Ei(c, u), M = ((w - x) / 2 + m) / g;
          v = O - M, C = O + M;
        } else
          v = (x - m) / g, C = (w + m) / g;
        d = Ri(c, v), p = Ri(c, C);
      }
      d > h.from && a(h.from, d, h, c), p < h.to && a(p, h.to, h, c);
    };
    for (let h of this.viewportLines)
      Array.isArray(h.type) ? h.type.forEach(f) : f(h);
    return l;
  }
  gapSize(e, t, i, n) {
    let r = Ei(n, i) - Ei(n, t);
    return this.heightOracle.lineWrapping ? e.height * r : n.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(e) {
    Hn.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = E.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let i = [];
    F.spans(t, this.viewport.from, this.viewport.to, {
      span(r, o) {
        i.push({ from: r, to: o });
      },
      point() {
      }
    }, 20);
    let n = 0;
    if (i.length != this.visibleRanges.length)
      n = 12;
    else
      for (let r = 0; r < i.length && !(n & 8); r++) {
        let o = this.visibleRanges[r], l = i[r];
        (o.from != l.from || o.to != l.to) && (n |= 4, e && e.mapPos(o.from, -1) == l.from && e.mapPos(o.to, 1) == l.to || (n |= 8));
      }
    return this.visibleRanges = i, n;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || Zt(this.heightMap.lineAt(e, _.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || Zt(this.heightMap.lineAt(this.scaler.fromDOM(e), _.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return Zt(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Bi {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function Rc(s, e, t) {
  let i = [], n = s, r = 0;
  return F.spans(t, s, e, {
    span() {
    },
    point(o, l) {
      o > n && (i.push({ from: n, to: o }), r += o - n), n = l;
    }
  }, 20), n < e && (i.push({ from: n, to: e }), r += e - n), { total: r, ranges: i };
}
function Ri({ total: s, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let i = Math.floor(s * t);
  for (let n = 0; ; n++) {
    let { from: r, to: o } = e[n], l = o - r;
    if (i <= l)
      return r + i;
    i -= l;
  }
}
function Ei(s, e) {
  let t = 0;
  for (let { from: i, to: n } of s.ranges) {
    if (e <= n) {
      t += e - i;
      break;
    }
    t += n - i;
  }
  return t / s.total;
}
function Ec(s, e) {
  for (let t of s)
    if (e(t))
      return t;
}
const co = {
  toDOM(s) {
    return s;
  },
  fromDOM(s) {
    return s;
  },
  scale: 1,
  eq(s) {
    return s == this;
  }
};
class hr {
  constructor(e, t, i) {
    let n = 0, r = 0, o = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let f = t.lineAt(l, _.ByPos, e, 0, 0).top, h = t.lineAt(a, _.ByPos, e, 0, 0).bottom;
      return n += h - f, { from: l, to: a, top: f, bottom: h, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - n) / (t.height - n);
    for (let l of this.viewports)
      l.domTop = o + (l.top - r) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), r = l.bottom;
  }
  toDOM(e) {
    for (let t = 0, i = 0, n = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.top)
        return n + (e - i) * this.scale;
      if (e <= r.bottom)
        return r.domTop + (e - r.top);
      i = r.bottom, n = r.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, i = 0, n = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.domTop)
        return i + (e - n) / this.scale;
      if (e <= r.domBottom)
        return r.top + (e - r.domTop);
      i = r.bottom, n = r.domBottom;
    }
  }
  eq(e) {
    return e instanceof hr ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to) : !1;
  }
}
function Zt(s, e) {
  if (e.scale == 1)
    return s;
  let t = e.toDOM(s.top), i = e.toDOM(s.bottom);
  return new He(s.from, s.length, t, i - t, Array.isArray(s._content) ? s._content.map((n) => Zt(n, e)) : s._content);
}
const Li = /* @__PURE__ */ D.define({ combine: (s) => s.join(" ") }), Ds = /* @__PURE__ */ D.define({ combine: (s) => s.indexOf(!0) > -1 }), Ts = /* @__PURE__ */ rt.newName(), Ca = /* @__PURE__ */ rt.newName(), Aa = /* @__PURE__ */ rt.newName(), Oa = { "&light": "." + Ca, "&dark": "." + Aa };
function Ps(s, e, t) {
  return new rt(e, {
    finish(i) {
      return /&/.test(i) ? i.replace(/&\w*/, (n) => {
        if (n == "&")
          return s;
        if (!t || !t[n])
          throw new RangeError(`Unsupported selector: ${n}`);
        return t[n];
      }) : s + " " + i;
    }
  });
}
const Lc = /* @__PURE__ */ Ps("." + Ts, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0,
    overflowAnchor: "none"
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#ddd"
  },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  ".cm-iso": {
    unicodeBidi: "isolate"
  },
  ".cm-announced": {
    position: "fixed",
    top: "-10000px"
  },
  "@media print": {
    ".cm-announced": { display: "none" }
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    insetInlineStart: 0,
    zIndex: 200
  },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    borderRight: "1px solid #ddd"
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0,
    zIndex: 300
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top"
  },
  ".cm-highlightSpace": {
    backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
    backgroundPosition: "center"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, Oa), Nc = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, zn = A.ie && A.ie_version <= 11;
class Ic {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new bf(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t)
        this.queue.push(i);
      (A.ie && A.ie_version <= 11 || A.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && e.constructor.EDIT_CONTEXT !== !1 && !(A.chrome && A.chrome_version < 126) && (this.editContext = new Vc(e), e.state.facet(Ke) && (e.contentDOM.editContext = this.editContext.editContext)), zn && (this.onCharData = (t) => {
      this.queue.push({
        target: t.target,
        type: "characterData",
        oldValue: t.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var t;
      ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((t) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t) => {
      t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(e) {
    (e.type == "change" || !e.type) && !e.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))) {
      this.gapIntersection.disconnect();
      for (let t of e)
        this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i } = this, n = this.selectionRange;
    if (i.state.facet(Ke) ? i.root.activeElement != this.dom : !Ui(this.dom, n))
      return;
    let r = n.anchorNode && i.docView.nearest(n.anchorNode);
    if (r && r.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (A.ie && A.ie_version <= 11 || A.android && A.chrome) && !i.state.selection.main.empty && n.focusNode && ii(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = ci(e.root);
    if (!t)
      return !1;
    let i = A.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && Fc(this.view, t) || t;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let n = Ui(this.dom, i);
    return n && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && kf(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), n && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, t = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == i ? e++ : t || (t = this.scrollTargets.slice(0, e)), t && t.push(i), i = i.assignedSlot || i.parentNode;
      else if (i.nodeType == 11)
        i = i.host;
      else
        break;
    if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
      for (let i of this.scrollTargets)
        i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = t)
        i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active)
      return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, Nc), zn && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    !this.active || (this.active = !1, this.observer.disconnect(), zn && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  delayAndroidKey(e, t) {
    var i;
    if (!this.delayedAndroidKey) {
      let n = () => {
        let r = this.delayedAndroidKey;
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && Rt(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(n);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = {
      key: e,
      keyCode: t,
      force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords())
      this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let t = -1, i = -1, n = !1;
    for (let r of e) {
      let o = this.readMutation(r);
      !o || (o.typeOver && (n = !0), t == -1 ? { from: t, to: i } = o : (t = Math.min(o.from, t), i = Math.max(o.to, i)));
    }
    return { from: t, to: i, typeOver: n };
  }
  readChange() {
    let { from: e, to: t, typeOver: i } = this.processRecords(), n = this.selectionChanged && Ui(this.dom, this.selectionRange);
    if (e < 0 && !n)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let r = new tc(this.view, e, t, i);
    return this.view.docView.domChanged = { newSel: r.newSel ? r.newSel.main : null }, r;
  }
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t)
      return this.view.requestMeasure(), !1;
    let i = this.view.state, n = pa(this.view, t);
    return this.view.state == i && (t.domChanged || t.newSel && !t.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), n;
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e))
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "attributes" && (t.flags |= 4), e.type == "childList") {
      let i = uo(t, e.previousSibling || e.target.previousSibling, -1), n = uo(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: i ? t.posAfter(i) : t.posAtStart,
        to: n ? t.posBefore(n) : t.posAtEnd,
        typeOver: !1
      };
    } else
      return e.type == "characterData" ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    this.editContext && (this.editContext.update(e), e.startState.facet(Ke) != e.state.facet(Ke) && (e.view.contentDOM.editContext = e.state.facet(Ke) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, t, i;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let n of this.scrollTargets)
      n.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function uo(s, e, t) {
  for (; e; ) {
    let i = H.get(e);
    if (i && i.parent == s)
      return i;
    let n = e.parentNode;
    e = n != s.dom ? n : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function po(s, e) {
  let t = e.startContainer, i = e.startOffset, n = e.endContainer, r = e.endOffset, o = s.docView.domAtPos(s.state.selection.main.anchor);
  return ii(o.node, o.offset, n, r) && ([t, i, n, r] = [n, r, t, i]), { anchorNode: t, anchorOffset: i, focusNode: n, focusOffset: r };
}
function Fc(s, e) {
  if (e.getComposedRanges) {
    let n = e.getComposedRanges(s.root)[0];
    if (n)
      return po(s, n);
  }
  let t = null;
  function i(n) {
    n.preventDefault(), n.stopImmediatePropagation(), t = n.getTargetRanges()[0];
  }
  return s.contentDOM.addEventListener("beforeinput", i, !0), s.dom.ownerDocument.execCommand("indent"), s.contentDOM.removeEventListener("beforeinput", i, !0), t ? po(s, t) : null;
}
class Vc {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = (i) => {
      let { anchor: n } = e.state.selection.main, r = this.toEditorPos(i.updateRangeStart), o = this.toEditorPos(i.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: r, drifted: !1 });
      let l = { from: r, to: o, insert: L.of(i.text.split(`
`)) };
      if (l.from == this.from && n < this.from ? l.from = n : l.to == this.to && n > this.to && (l.to = n), !(l.from == l.to && !l.insert.length)) {
        if (this.pendingContextChange = l, !e.state.readOnly) {
          let a = this.to - this.from + (l.to - l.from + l.insert.length);
          lr(e, l, k.single(this.toEditorPos(i.selectionStart, a), this.toEditorPos(i.selectionEnd, a)));
        }
        this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state));
      }
    }, this.handlers.characterboundsupdate = (i) => {
      let n = [], r = null;
      for (let o = this.toEditorPos(i.rangeStart), l = this.toEditorPos(i.rangeEnd); o < l; o++) {
        let a = e.coordsForChar(o);
        r = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || r || new DOMRect(), n.push(r);
      }
      t.updateCharacterBounds(i.rangeStart, n);
    }, this.handlers.textformatupdate = (i) => {
      let n = [];
      for (let r of i.getTextFormats()) {
        let o = r.underlineStyle, l = r.underlineThickness;
        if (o != "None" && l != "None") {
          let a = this.toEditorPos(r.rangeStart), f = this.toEditorPos(r.rangeEnd);
          if (a < f) {
            let h = `text-decoration: underline ${o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${l == "Thin" ? 1 : 2}px`;
            n.push(E.mark({ attributes: { style: h } }).range(a, f));
          }
        }
      }
      e.dispatch({ effects: la.of(E.set(n)) });
    }, this.handlers.compositionstart = () => {
      e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: i } = this.composing;
        this.composing = null, i && this.reset(e.state);
      }
    };
    for (let i in this.handlers)
      t.addEventListener(i, this.handlers[i]);
    this.measureReq = { read: (i) => {
      this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
      let n = ci(i.root);
      n && n.rangeCount && this.editContext.updateSelectionBounds(n.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let t = 0, i = !1, n = this.pendingContextChange;
    return e.changes.iterChanges((r, o, l, a, f) => {
      if (i)
        return;
      let h = f.length - (o - r);
      if (n && o >= n.to)
        if (n.from == r && n.to == o && n.insert.eq(f)) {
          n = this.pendingContextChange = null, t += h, this.to += h;
          return;
        } else
          n = null, this.revertPending(e.state);
      if (r += t, o += t, o <= this.from)
        this.from += h, this.to += h;
      else if (r < this.to) {
        if (r < this.from || o > this.to || this.to - this.from + f.length > 3e4) {
          i = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(r), this.toContextPos(o), f.toString()), this.to += h;
      }
      t += h;
    }), n && !i && this.revertPending(e.state), !i;
  }
  update(e) {
    let t = this.pendingContextChange;
    this.composing && (this.composing.drifted || e.transactions.some((i) => !i.isUserEvent("input.type") && i.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let { head: t } = e.selection.main;
    this.from = Math.max(0, t - 1e4), this.to = Math.min(e.doc.length, t + 1e4);
  }
  reset(e) {
    this.resetRange(e), this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to)), this.setSelection(e);
  }
  revertPending(e) {
    let t = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(t.from), this.toContextPos(t.from + t.insert.length), e.doc.sliceString(t.from, t.to));
  }
  setSelection(e) {
    let { main: t } = e.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))), n = this.toContextPos(t.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != n) && this.editContext.updateSelection(i, n);
  }
  rangeIsValid(e) {
    let { head: t } = e.selection.main;
    return !(this.from > 0 && t - this.from < 500 || this.to < e.doc.length && this.to - t < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(e, t = this.to - this.from) {
    e = Math.min(e, t);
    let i = this.composing;
    return i && i.drifted ? i.editorBase + (e - i.contextBase) : e + this.from;
  }
  toContextPos(e) {
    let t = this.composing;
    return t && t.drifted ? t.contextBase + (e - t.editorBase) : e - this.from;
  }
  destroy() {
    for (let e in this.handlers)
      this.editContext.removeEventListener(e, this.handlers[e]);
  }
}
class T {
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return this.inputState.composing > 0;
  }
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  get root() {
    return this._root;
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  constructor(e = {}) {
    var t;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e.parent && e.parent.appendChild(this.dom);
    let { dispatch: i } = e;
    this.dispatchTransactions = e.dispatchTransactions || i && ((n) => n.forEach((r) => i(r, this))) || ((n) => this.update(n)), this.dispatch = this.dispatch.bind(this), this._root = e.root || xf(e.parent) || document, this.viewState = new fo(e.state || I.create(e)), e.scrollTo && e.scrollTo.is(Di) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Xt).map((n) => new In(n));
    for (let n of this.plugins)
      n.update(this);
    this.observer = new Ic(this), this.inputState = new oc(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Ur(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof Y ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let t = !1, i = !1, n, r = this.state;
    for (let u of e) {
      if (u.startState != r)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      r = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    e.some((u) => u.annotation(ka)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = wa(r, o), a || (l = 1));
    let f = this.observer.delayedAndroidKey, h = null;
    if (f ? (this.observer.clearDelayedAndroidKey(), h = this.observer.readChange(), (h && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (h = null)) : this.observer.clear(), r.facet(I.phrases) != this.state.facet(I.phrases))
      return this.setState(r);
    n = sn.create(this, r, e), n.flags |= l;
    let c = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of e) {
        if (c && (c = c.map(u.changes)), u.scrollIntoView) {
          let { main: d } = u.state.selection;
          c = new Et(d.empty ? d : k.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of u.effects)
          d.is(Di) && (c = d.value.clip(this.state));
      }
      this.viewState.update(n, c), this.bidiCache = on.update(this.bidiCache, n.changes), n.empty || (this.updatePlugins(n), this.inputState.update(n)), t = this.docView.update(n), this.state.facet(Yt) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (n.startState.facet(Li) != n.state.facet(Li) && (this.viewState.mustMeasureContent = !0), (t || i || c || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !n.empty)
      for (let u of this.state.facet(As))
        try {
          u(n);
        } catch (d) {
          Ce(this.state, d, "update listener");
        }
    (a || h) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), h && !pa(this, h) && f.force && Rt(this.contentDOM, f.key, f.keyCode);
    });
  }
  setState(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new fo(e), this.plugins = e.facet(Xt).map((i) => new In(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new Ur(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(Xt), i = e.state.facet(Xt);
    if (t != i) {
      let n = [];
      for (let r of i) {
        let o = t.indexOf(r);
        if (o < 0)
          n.push(new In(r));
        else {
          let l = this.plugins[o];
          l.mustUpdate = e, n.push(l);
        }
      }
      for (let r of this.plugins)
        r.mustUpdate != e && r.destroy(this);
      this.plugins = n, this.pluginMap.clear();
    } else
      for (let n of this.plugins)
        n.mustUpdate = e;
    for (let n = 0; n < this.plugins.length; n++)
      this.plugins[n].update(this);
    t != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate)
        try {
          t.docViewUpdate(this);
        } catch (i) {
          Ce(this.state, i, "doc view update listener");
        }
    }
  }
  measure(e = !0) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, e && this.observer.forceFlush();
    let t = null, i = this.scrollDOM, n = i.scrollTop * this.scaleY, { scrollAnchorPos: r, scrollAnchorHeight: o } = this.viewState;
    Math.abs(n - this.viewState.scrollTop) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (Il(i))
            r = -1, o = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(n);
            r = d.from, o = d.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let f = [];
        a & 4 || ([this.measureRequests, f] = [f, this.measureRequests]);
        let h = f.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return Ce(this.state, p), go;
          }
        }), c = sn.create(this, this.state, []), u = !1;
        c.flags |= a, t ? t.flags |= a : t = c, this.updateState = 2, c.empty || (this.updatePlugins(c), this.inputState.update(c), this.updateAttrs(), u = this.docView.update(c), u && this.docViewUpdate());
        for (let d = 0; d < f.length; d++)
          if (h[d] != go)
            try {
              let p = f[d];
              p.write && p.write(h[d], this);
            } catch (p) {
              Ce(this.state, p);
            }
        if (u && this.docView.updateSelection(!0), !c.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
              continue;
            } else {
              let p = (r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - o;
              if (p > 1 || p < -1) {
                n = n + p, i.scrollTop = n / this.scaleY, o = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t && !t.empty)
      for (let l of this.state.facet(As))
        l(t);
  }
  get themeClasses() {
    return Ts + " " + (this.state.facet(Ds) ? Aa : Ca) + " " + this.state.facet(Li);
  }
  updateAttrs() {
    let e = mo(this, aa, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), t = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(Ke) ? "true" : "false",
      class: "cm-content",
      style: `${A.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (t["aria-readonly"] = "true"), mo(this, sr, t);
    let i = this.observer.ignore(() => {
      let n = ks(this.contentDOM, this.contentAttrs, t), r = ks(this.dom, this.editorAttrs, e);
      return n || r;
    });
    return this.editorAttrs = e, this.contentAttrs = t, i;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let i of e)
      for (let n of i.effects)
        if (n.is(T.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = n.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(Yt);
    let e = this.state.facet(T.cspNonce);
    rt.mount(this.root, this.styleModules.concat(Lc).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1)
        return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (t === void 0 || t && t.spec != e) && this.pluginMap.set(e, t = this.plugins.find((i) => i.spec == e) || null), t && t.update(this).value;
  }
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  get scaleX() {
    return this.viewState.scaleX;
  }
  get scaleY() {
    return this.viewState.scaleY;
  }
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(e, t, i) {
    return Vn(this, e, Xr(this, e, t, i));
  }
  moveByGroup(e, t) {
    return Vn(this, e, Xr(this, e, t, (i) => Yf(this, e.head, i)));
  }
  visualLineSide(e, t) {
    let i = this.bidiSpans(e), n = this.textDirectionAt(e.from), r = i[t ? i.length - 1 : 0];
    return k.cursor(r.side(t, n) + e.from, r.forward(!t, n) ? 1 : -1);
  }
  moveToLineBoundary(e, t, i = !0) {
    return Xf(this, e, t, i);
  }
  moveVertically(e, t, i) {
    return Vn(this, e, Jf(this, e, t, i));
  }
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    return this.readMeasured(), da(this, e, t);
  }
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(e, t);
    if (!i || i.left == i.right)
      return i;
    let n = this.state.doc.lineAt(e), r = this.bidiSpans(n), o = r[nt.find(r, e - n.from, -1, t)];
    return wn(i, o.dir == Q.LTR == t > 0);
  }
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  textDirectionAt(e) {
    return !this.state.facet(ra) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(e) {
    if (e.length > Hc)
      return Yl(e.length);
    let t = this.textDirectionAt(e.from), i;
    for (let r of this.bidiCache)
      if (r.from == e.from && r.dir == t && (r.fresh || Xl(r.isolates, i = $r(this, e))))
        return r.order;
    i || (i = $r(this, e));
    let n = Rf(e.text, t, i);
    return this.bidiCache.push(new on(e.from, e.to, t, i, !0, n)), n;
  }
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || A.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      Ll(this.contentDOM), this.docView.updateSelection();
    });
  }
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e of this.plugins)
      e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  static scrollIntoView(e, t = {}) {
    return Di.of(new Et(typeof e == "number" ? k.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
  }
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM, i = this.viewState.scrollAnchorAt(e);
    return Di.of(new Et(k.cursor(i.from), "start", "start", i.top - e, t, !0));
  }
  setTabFocusMode(e) {
    e == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e == "boolean" ? this.inputState.tabFocusMode = e ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
  }
  static domEventHandlers(e) {
    return De.define(() => ({}), { eventHandlers: e });
  }
  static domEventObservers(e) {
    return De.define(() => ({}), { eventObservers: e });
  }
  static theme(e, t) {
    let i = rt.newName(), n = [Li.of(i), Yt.of(Ps(`.${i}`, e))];
    return t && t.dark && n.push(Ds.of(!0)), n;
  }
  static baseTheme(e) {
    return Ys.lowest(Yt.of(Ps("." + Ts, e, Oa)));
  }
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"), n = i && H.get(i) || H.get(e);
    return ((t = n == null ? void 0 : n.rootView) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
T.styleModule = Yt;
T.inputHandler = na;
T.clipboardInputFilter = ir;
T.clipboardOutputFilter = nr;
T.scrollHandler = oa;
T.focusChangeEffect = sa;
T.perLineTextDirection = ra;
T.exceptionSink = ia;
T.updateListener = As;
T.editable = Ke;
T.mouseSelectionStyle = ta;
T.dragMovesSelection = ea;
T.clickAddsSelectionRange = Zl;
T.decorations = di;
T.outerDecorations = ha;
T.atomicRanges = rr;
T.bidiIsolatedRanges = fa;
T.scrollMargins = ca;
T.darkTheme = Ds;
T.cspNonce = /* @__PURE__ */ D.define({ combine: (s) => s.length ? s[0] : "" });
T.contentAttributes = sr;
T.editorAttributes = aa;
T.lineWrapping = /* @__PURE__ */ T.contentAttributes.of({ class: "cm-lineWrapping" });
T.announce = /* @__PURE__ */ W.define();
const Hc = 4096, go = {};
class on {
  constructor(e, t, i, n, r, o) {
    this.from = e, this.to = t, this.dir = i, this.isolates = n, this.fresh = r, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((r) => r.fresh))
      return e;
    let i = [], n = e.length ? e[e.length - 1].dir : Q.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let o = e[r];
      o.dir == n && !t.touchesRange(o.from, o.to) && i.push(new on(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return i;
  }
}
function mo(s, e, t) {
  for (let i = s.state.facet(e), n = i.length - 1; n >= 0; n--) {
    let r = i[n], o = typeof r == "function" ? r(s) : r;
    o && xs(o, t);
  }
  return t;
}
const zc = A.mac ? "mac" : A.windows ? "win" : A.linux ? "linux" : "key";
function Wc(s, e) {
  const t = s.split(/-(?!$)/);
  let i = t[t.length - 1];
  i == "Space" && (i = " ");
  let n, r, o, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const f = t[a];
    if (/^(cmd|meta|m)$/i.test(f))
      l = !0;
    else if (/^a(lt)?$/i.test(f))
      n = !0;
    else if (/^(c|ctrl|control)$/i.test(f))
      r = !0;
    else if (/^s(hift)?$/i.test(f))
      o = !0;
    else if (/^mod$/i.test(f))
      e == "mac" ? l = !0 : r = !0;
    else
      throw new Error("Unrecognized modifier name: " + f);
  }
  return n && (i = "Alt-" + i), r && (i = "Ctrl-" + i), l && (i = "Meta-" + i), o && (i = "Shift-" + i), i;
}
function Ni(s, e, t) {
  return e.altKey && (s = "Alt-" + s), e.ctrlKey && (s = "Ctrl-" + s), e.metaKey && (s = "Meta-" + s), t !== !1 && e.shiftKey && (s = "Shift-" + s), s;
}
const _c = /* @__PURE__ */ Ys.default(/* @__PURE__ */ T.domEventHandlers({
  keydown(s, e) {
    return jc(qc(e.state), s, e, "editor");
  }
})), Ma = /* @__PURE__ */ D.define({ enables: _c }), yo = /* @__PURE__ */ new WeakMap();
function qc(s) {
  let e = s.facet(Ma), t = yo.get(e);
  return t || yo.set(e, t = Uc(e.reduce((i, n) => i.concat(n), []))), t;
}
let tt = null;
const $c = 4e3;
function Uc(s, e = zc) {
  let t = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), n = (o, l) => {
    let a = i[o];
    if (a == null)
      i[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, r = (o, l, a, f, h) => {
    var c, u;
    let d = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((y) => Wc(y, e));
    for (let y = 1; y < p.length; y++) {
      let x = p.slice(0, y).join(" ");
      n(x, !0), d[x] || (d[x] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(w) => {
          let v = tt = { view: w, prefix: x, scope: o };
          return setTimeout(() => {
            tt == v && (tt = null);
          }, $c), !0;
        }]
      });
    }
    let g = p.join(" ");
    n(g, !1);
    let m = d[g] || (d[g] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((u = (c = d._any) === null || c === void 0 ? void 0 : c.run) === null || u === void 0 ? void 0 : u.slice()) || []
    });
    a && m.run.push(a), f && (m.preventDefault = !0), h && (m.stopPropagation = !0);
  };
  for (let o of s) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let f of l) {
        let h = t[f] || (t[f] = /* @__PURE__ */ Object.create(null));
        h._any || (h._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: c } = o;
        for (let u in h)
          h[u].run.push((d) => c(d, Bs));
      }
    let a = o[e] || o.key;
    if (!!a)
      for (let f of l)
        r(f, a, o.run, o.preventDefault, o.stopPropagation), o.shift && r(f, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
let Bs = null;
function jc(s, e, t, i) {
  Bs = e;
  let n = pf(e), r = ge(n, 0), o = Ve(r) == n.length && n != " ", l = "", a = !1, f = !1, h = !1;
  tt && tt.view == t && tt.scope == i && (l = tt.prefix + " ", ma.indexOf(e.keyCode) < 0 && (f = !0, tt = null));
  let c = /* @__PURE__ */ new Set(), u = (m) => {
    if (m) {
      for (let y of m.run)
        if (!c.has(y) && (c.add(y), y(t)))
          return m.stopPropagation && (h = !0), !0;
      m.preventDefault && (m.stopPropagation && (h = !0), f = !0);
    }
    return !1;
  }, d = s[i], p, g;
  return d && (u(d[l + Ni(n, e, !o)]) ? a = !0 : o && (e.altKey || e.metaKey || e.ctrlKey) && !(A.windows && e.ctrlKey && e.altKey) && (p = ot[e.keyCode]) && p != n ? (u(d[l + Ni(p, e, !0)]) || e.shiftKey && (g = fi[e.keyCode]) != n && g != p && u(d[l + Ni(g, e, !1)])) && (a = !0) : o && e.shiftKey && u(d[l + Ni(n, e, !0)]) && (a = !0), !a && u(d._any) && (a = !0)), f && (a = !0), a && h && e.stopPropagation(), Bs = null, a;
}
const Qc = !(A.ios && A.webkit && A.webkit_version < 534), bo = {
  ".cm-line": {
    "& ::selection, &::selection": { backgroundColor: "transparent !important" }
  },
  ".cm-content": {
    "& :focus": {
      caretColor: "initial !important",
      "&::selection, & ::selection": {
        backgroundColor: "Highlight !important"
      }
    }
  }
};
Qc && (bo[".cm-line"].caretColor = bo[".cm-content"].caretColor = "transparent !important");
function Kc() {
  return Xc;
}
const Gc = /* @__PURE__ */ E.line({ class: "cm-activeLine" }), Xc = /* @__PURE__ */ De.fromClass(class {
  constructor(s) {
    this.decorations = this.getDeco(s);
  }
  update(s) {
    (s.docChanged || s.selectionSet) && (this.decorations = this.getDeco(s.view));
  }
  getDeco(s) {
    let e = -1, t = [];
    for (let i of s.state.selection.ranges) {
      let n = s.lineBlockAt(i.head);
      n.from > e && (t.push(Gc.range(n.from)), e = n.from);
    }
    return E.set(t);
  }
}, {
  decorations: (s) => s.decorations
}), jt = "-10000px";
class Yc {
  constructor(e, t, i, n) {
    this.facet = t, this.createTooltipView = i, this.removeTooltipView = n, this.input = e.state.facet(t), this.tooltips = this.input.filter((o) => o);
    let r = null;
    this.tooltipViews = this.tooltips.map((o) => r = i(o, r));
  }
  update(e, t) {
    var i;
    let n = e.state.facet(this.facet), r = n.filter((a) => a);
    if (n === this.input) {
      for (let a of this.tooltipViews)
        a.update && a.update(e);
      return !1;
    }
    let o = [], l = t ? [] : null;
    for (let a = 0; a < r.length; a++) {
      let f = r[a], h = -1;
      if (!!f) {
        for (let c = 0; c < this.tooltips.length; c++) {
          let u = this.tooltips[c];
          u && u.create == f.create && (h = c);
        }
        if (h < 0)
          o[a] = this.createTooltipView(f, a ? o[a - 1] : null), l && (l[a] = !!f.above);
        else {
          let c = o[a] = this.tooltipViews[h];
          l && (l[a] = t[h]), c.update && c.update(e);
        }
      }
    }
    for (let a of this.tooltipViews)
      o.indexOf(a) < 0 && (this.removeTooltipView(a), (i = a.destroy) === null || i === void 0 || i.call(a));
    return t && (l.forEach((a, f) => t[f] = a), t.length = l.length), this.input = n, this.tooltips = r, this.tooltipViews = o, !0;
  }
}
function Jc(s) {
  let { win: e } = s;
  return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth };
}
const Wn = /* @__PURE__ */ D.define({
  combine: (s) => {
    var e, t, i;
    return {
      position: A.ios ? "absolute" : ((e = s.find((n) => n.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
      parent: ((t = s.find((n) => n.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
      tooltipSpace: ((i = s.find((n) => n.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || Jc
    };
  }
}), xo = /* @__PURE__ */ new WeakMap(), Da = /* @__PURE__ */ De.fromClass(class {
  constructor(s) {
    this.view = s, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = s.state.facet(Wn);
    this.position = e.position, this.parent = e.parent, this.classes = s.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new Yc(s, Ta, (t, i) => this.createTooltip(t, i), (t) => {
      this.resizeObserver && this.resizeObserver.unobserve(t.dom), t.dom.remove();
    }), this.above = this.manager.tooltips.map((t) => !!t.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((t) => {
      Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), s.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let s of this.manager.tooltipViews)
        this.intersectionObserver.observe(s.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(s) {
    s.transactions.length && (this.lastTransaction = Date.now());
    let e = this.manager.update(s, this.above);
    e && this.observeIntersection();
    let t = e || s.geometryChanged, i = s.state.facet(Wn);
    if (i.position != this.position && !this.madeAbsolute) {
      this.position = i.position;
      for (let n of this.manager.tooltipViews)
        n.dom.style.position = this.position;
      t = !0;
    }
    if (i.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = i.parent, this.createContainer();
      for (let n of this.manager.tooltipViews)
        this.container.appendChild(n.dom);
      t = !0;
    } else
      this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    t && this.maybeMeasure();
  }
  createTooltip(s, e) {
    let t = s.create(this.view), i = e ? e.dom : null;
    if (t.dom.classList.add("cm-tooltip"), s.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let n = document.createElement("div");
      n.className = "cm-tooltip-arrow", t.dom.appendChild(n);
    }
    return t.dom.style.position = this.position, t.dom.style.top = jt, t.dom.style.left = "0px", this.container.insertBefore(t.dom, i), t.mount && t.mount(this.view), this.resizeObserver && this.resizeObserver.observe(t.dom), t;
  }
  destroy() {
    var s, e, t;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let i of this.manager.tooltipViews)
      i.dom.remove(), (s = i.destroy) === null || s === void 0 || s.call(i);
    this.parent && this.container.remove(), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), (t = this.intersectionObserver) === null || t === void 0 || t.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let s = 1, e = 1, t = !1;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: r } = this.manager.tooltipViews[0];
      if (A.gecko)
        t = r.offsetParent != this.container.ownerDocument.body;
      else if (r.style.top == jt && r.style.left == "0px") {
        let o = r.getBoundingClientRect();
        t = Math.abs(o.top + 1e4) > 1 || Math.abs(o.left) > 1;
      }
    }
    if (t || this.position == "absolute")
      if (this.parent) {
        let r = this.parent.getBoundingClientRect();
        r.width && r.height && (s = r.width / this.parent.offsetWidth, e = r.height / this.parent.offsetHeight);
      } else
        ({ scaleX: s, scaleY: e } = this.view.viewState);
    let i = this.view.scrollDOM.getBoundingClientRect(), n = or(this.view);
    return {
      visible: {
        left: i.left + n.left,
        top: i.top + n.top,
        right: i.right - n.right,
        bottom: i.bottom - n.bottom
      },
      parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
      pos: this.manager.tooltips.map((r, o) => {
        let l = this.manager.tooltipViews[o];
        return l.getCoords ? l.getCoords(r.pos) : this.view.coordsAtPos(r.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: r }) => r.getBoundingClientRect()),
      space: this.view.state.facet(Wn).tooltipSpace(this.view),
      scaleX: s,
      scaleY: e,
      makeAbsolute: t
    };
  }
  writeMeasure(s) {
    var e;
    if (s.makeAbsolute) {
      this.madeAbsolute = !0, this.position = "absolute";
      for (let l of this.manager.tooltipViews)
        l.dom.style.position = "absolute";
    }
    let { visible: t, space: i, scaleX: n, scaleY: r } = s, o = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], f = this.manager.tooltipViews[l], { dom: h } = f, c = s.pos[l], u = s.size[l];
      if (!c || a.clip !== !1 && (c.bottom <= Math.max(t.top, i.top) || c.top >= Math.min(t.bottom, i.bottom) || c.right < Math.max(t.left, i.left) - 0.1 || c.left > Math.min(t.right, i.right) + 0.1)) {
        h.style.top = jt;
        continue;
      }
      let d = a.arrow ? f.dom.querySelector(".cm-tooltip-arrow") : null, p = d ? 7 : 0, g = u.right - u.left, m = (e = xo.get(f)) !== null && e !== void 0 ? e : u.bottom - u.top, y = f.offset || eu, x = this.view.textDirection == Q.LTR, w = u.width > i.right - i.left ? x ? i.left : i.right - u.width : x ? Math.max(i.left, Math.min(c.left - (d ? 14 : 0) + y.x, i.right - g)) : Math.min(Math.max(i.left, c.left - g + (d ? 14 : 0) - y.x), i.right - g), v = this.above[l];
      !a.strictSide && (v ? c.top - m - p - y.y < i.top : c.bottom + m + p + y.y > i.bottom) && v == i.bottom - c.bottom > c.top - i.top && (v = this.above[l] = !v);
      let C = (v ? c.top - i.top : i.bottom - c.bottom) - p;
      if (C < m && f.resize !== !1) {
        if (C < this.view.defaultLineHeight) {
          h.style.top = jt;
          continue;
        }
        xo.set(f, m), h.style.height = (m = C) / r + "px";
      } else
        h.style.height && (h.style.height = "");
      let O = v ? c.top - m - p - y.y : c.bottom + p + y.y, M = w + g;
      if (f.overlap !== !0)
        for (let N of o)
          N.left < M && N.right > w && N.top < O + m && N.bottom > O && (O = v ? N.top - m - 2 - p : N.bottom + p + 2);
      if (this.position == "absolute" ? (h.style.top = (O - s.parent.top) / r + "px", ko(h, (w - s.parent.left) / n)) : (h.style.top = O / r + "px", ko(h, w / n)), d) {
        let N = c.left + (x ? y.x : -y.x) - (w + 14 - 7);
        d.style.left = N / n + "px";
      }
      f.overlap !== !0 && o.push({ left: w, top: O, right: M, bottom: O + m }), h.classList.toggle("cm-tooltip-above", v), h.classList.toggle("cm-tooltip-below", !v), f.positioned && f.positioned(s.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let s of this.manager.tooltipViews)
        s.dom.style.top = jt;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
});
function ko(s, e) {
  let t = parseInt(s.style.left, 10);
  (isNaN(t) || Math.abs(e - t) > 1) && (s.style.left = e + "px");
}
const Zc = /* @__PURE__ */ T.baseTheme({
  ".cm-tooltip": {
    zIndex: 500,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: `${7}px`,
    width: `${7 * 2}px`,
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: `${7}px solid transparent`,
      borderRight: `${7}px solid transparent`
    },
    ".cm-tooltip-above &": {
      bottom: `-${7}px`,
      "&:before": {
        borderTop: `${7}px solid #bbb`
      },
      "&:after": {
        borderTop: `${7}px solid #f5f5f5`,
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: `-${7}px`,
      "&:before": {
        borderBottom: `${7}px solid #bbb`
      },
      "&:after": {
        borderBottom: `${7}px solid #f5f5f5`,
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
}), eu = { x: 0, y: 0 }, Ta = /* @__PURE__ */ D.define({
  enables: [Da, Zc]
});
function tu(s, e) {
  let t = s.plugin(Da);
  if (!t)
    return null;
  let i = t.manager.tooltips.indexOf(e);
  return i < 0 ? null : t.manager.tooltipViews[i];
}
class at extends wt {
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  eq(e) {
    return !1;
  }
  destroy(e) {
  }
}
at.prototype.elementClass = "";
at.prototype.toDOM = void 0;
at.prototype.mapMode = fe.TrackBefore;
at.prototype.startSide = at.prototype.endSide = -1;
at.prototype.point = !0;
const Gi = /* @__PURE__ */ D.define(), iu = /* @__PURE__ */ D.define(), Xi = /* @__PURE__ */ D.define(), Rs = /* @__PURE__ */ D.define({
  combine: (s) => s.some((e) => e)
});
function nu(s) {
  let e = [
    su
  ];
  return s && s.fixed === !1 && e.push(Rs.of(!0)), e;
}
const su = /* @__PURE__ */ De.fromClass(class {
  constructor(s) {
    this.view = s, this.prevViewport = s.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = s.state.facet(Xi).map((e) => new vo(s, e));
    for (let e of this.gutters)
      this.dom.appendChild(e.dom);
    this.fixed = !s.state.facet(Rs), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), s.scrollDOM.insertBefore(this.dom, s.contentDOM);
  }
  update(s) {
    if (this.updateGutters(s)) {
      let e = this.prevViewport, t = s.view.viewport, i = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(i < (t.to - t.from) * 0.8);
    }
    s.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"), this.view.state.facet(Rs) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = s.view.viewport;
  }
  syncGutters(s) {
    let e = this.dom.nextSibling;
    s && this.dom.remove();
    let t = F.iter(this.view.state.facet(Gi), this.view.viewport.from), i = [], n = this.gutters.map((r) => new ru(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(r.type)) {
        let o = !0;
        for (let l of r.type)
          if (l.type == xe.Text && o) {
            Es(t, i, l.from);
            for (let a of n)
              a.line(this.view, l, i);
            o = !1;
          } else if (l.widget)
            for (let a of n)
              a.widget(this.view, l);
      } else if (r.type == xe.Text) {
        Es(t, i, r.from);
        for (let o of n)
          o.line(this.view, r, i);
      } else if (r.widget)
        for (let o of n)
          o.widget(this.view, r);
    for (let r of n)
      r.finish();
    s && this.view.scrollDOM.insertBefore(this.dom, e);
  }
  updateGutters(s) {
    let e = s.startState.facet(Xi), t = s.state.facet(Xi), i = s.docChanged || s.heightChanged || s.viewportChanged || !F.eq(s.startState.facet(Gi), s.state.facet(Gi), s.view.viewport.from, s.view.viewport.to);
    if (e == t)
      for (let n of this.gutters)
        n.update(s) && (i = !0);
    else {
      i = !0;
      let n = [];
      for (let r of t) {
        let o = e.indexOf(r);
        o < 0 ? n.push(new vo(this.view, r)) : (this.gutters[o].update(s), n.push(this.gutters[o]));
      }
      for (let r of this.gutters)
        r.dom.remove(), n.indexOf(r) < 0 && r.destroy();
      for (let r of n)
        this.dom.appendChild(r.dom);
      this.gutters = n;
    }
    return i;
  }
  destroy() {
    for (let s of this.gutters)
      s.destroy();
    this.dom.remove();
  }
}, {
  provide: (s) => T.scrollMargins.of((e) => {
    let t = e.plugin(s);
    return !t || t.gutters.length == 0 || !t.fixed ? null : e.textDirection == Q.LTR ? { left: t.dom.offsetWidth * e.scaleX } : { right: t.dom.offsetWidth * e.scaleX };
  })
});
function wo(s) {
  return Array.isArray(s) ? s : [s];
}
function Es(s, e, t) {
  for (; s.value && s.from <= t; )
    s.from == t && e.push(s.value), s.next();
}
class ru {
  constructor(e, t, i) {
    this.gutter = e, this.height = i, this.i = 0, this.cursor = F.iter(e.markers, t.from);
  }
  addElement(e, t, i) {
    let { gutter: n } = this, r = (t.top - this.height) / e.scaleY, o = t.height / e.scaleY;
    if (this.i == n.elements.length) {
      let l = new Pa(e, o, r, i);
      n.elements.push(l), n.dom.appendChild(l.dom);
    } else
      n.elements[this.i].update(e, o, r, i);
    this.height = t.bottom, this.i++;
  }
  line(e, t, i) {
    let n = [];
    Es(this.cursor, n, t.from), i.length && (n = n.concat(i));
    let r = this.gutter.config.lineMarker(e, t, n);
    r && n.unshift(r);
    let o = this.gutter;
    n.length == 0 && !o.config.renderEmptyElements || this.addElement(e, t, n);
  }
  widget(e, t) {
    let i = this.gutter.config.widgetMarker(e, t.widget, t), n = i ? [i] : null;
    for (let r of e.state.facet(iu)) {
      let o = r(e, t.widget, t);
      o && (n || (n = [])).push(o);
    }
    n && this.addElement(e, t, n);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class vo {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in t.domEventHandlers)
      this.dom.addEventListener(i, (n) => {
        let r = n.target, o;
        if (r != this.dom && this.dom.contains(r)) {
          for (; r.parentNode != this.dom; )
            r = r.parentNode;
          let a = r.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else
          o = n.clientY;
        let l = e.lineBlockAtHeight(o - e.documentTop);
        t.domEventHandlers[i](e, l, n) && n.preventDefault();
      });
    this.markers = wo(t.markers(e)), t.initialSpacer && (this.spacer = new Pa(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = wo(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let n = this.config.updateSpacer(this.spacer.markers[0], e);
      n != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [n]);
    }
    let i = e.view.viewport;
    return !F.eq(this.markers, t, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class Pa {
  constructor(e, t, i, n) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, i, n);
  }
  update(e, t, i, n) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), ou(this.markers, n) || this.setMarkers(e, n);
  }
  setMarkers(e, t) {
    let i = "cm-gutterElement", n = this.dom.firstChild;
    for (let r = 0, o = 0; ; ) {
      let l = o, a = r < t.length ? t[r++] : null, f = !1;
      if (a) {
        let h = a.elementClass;
        h && (i += " " + h);
        for (let c = o; c < this.markers.length; c++)
          if (this.markers[c].compare(a)) {
            l = c, f = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; o < l; ) {
        let h = this.markers[o++];
        if (h.toDOM) {
          h.destroy(n);
          let c = n.nextSibling;
          n.remove(), n = c;
        }
      }
      if (!a)
        break;
      a.toDOM && (f ? n = n.nextSibling : this.dom.insertBefore(a.toDOM(e), n)), f && o++;
    }
    this.dom.className = i, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function ou(s, e) {
  if (s.length != e.length)
    return !1;
  for (let t = 0; t < s.length; t++)
    if (!s[t].compare(e[t]))
      return !1;
  return !0;
}
const lu = /* @__PURE__ */ D.define(), au = /* @__PURE__ */ D.define(), Dt = /* @__PURE__ */ D.define({
  combine(s) {
    return bi(s, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, t) {
        let i = Object.assign({}, e);
        for (let n in t) {
          let r = i[n], o = t[n];
          i[n] = r ? (l, a, f) => r(l, a, f) || o(l, a, f) : o;
        }
        return i;
      }
    });
  }
});
class _n extends at {
  constructor(e) {
    super(), this.number = e;
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function qn(s, e) {
  return s.state.facet(Dt).formatNumber(e, s.state);
}
const hu = /* @__PURE__ */ Xi.compute([Dt], (s) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(lu);
  },
  lineMarker(e, t, i) {
    return i.some((n) => n.toDOM) ? null : new _n(qn(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: (e, t, i) => {
    for (let n of e.state.facet(au)) {
      let r = n(e, t, i);
      if (r)
        return r;
    }
    return null;
  },
  lineMarkerChange: (e) => e.startState.facet(Dt) != e.state.facet(Dt),
  initialSpacer(e) {
    return new _n(qn(e, So(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let i = qn(t.view, So(t.view.state.doc.lines));
    return i == e.number ? e : new _n(i);
  },
  domEventHandlers: s.facet(Dt).domEventHandlers
}));
function fu(s = {}) {
  return [
    Dt.of(s),
    nu(),
    hu
  ];
}
function So(s) {
  let e = 9;
  for (; e < s; )
    e = e * 10 + 9;
  return e;
}
const cu = /* @__PURE__ */ new class extends at {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), uu = /* @__PURE__ */ Gi.compute(["selection"], (s) => {
  let e = [], t = -1;
  for (let i of s.selection.ranges) {
    let n = s.doc.lineAt(i.head).from;
    n > t && (t = n, e.push(cu.range(n)));
  }
  return F.of(e);
});
function du() {
  return uu;
}
const Ba = 1024;
let pu = 0;
class $n {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class B {
  constructor(e = {}) {
    this.id = pu++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
  }
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = ue.match(e)), (t) => {
      let i = e(t);
      return i === void 0 ? null : [this, i];
    };
  }
}
B.closedBy = new B({ deserialize: (s) => s.split(" ") });
B.openedBy = new B({ deserialize: (s) => s.split(" ") });
B.group = new B({ deserialize: (s) => s.split(" ") });
B.isolate = new B({ deserialize: (s) => {
  if (s && s != "rtl" && s != "ltr" && s != "auto")
    throw new RangeError("Invalid value for isolate: " + s);
  return s || "auto";
} });
B.contextHash = new B({ perNode: !0 });
B.lookAhead = new B({ perNode: !0 });
B.mounted = new B({ perNode: !0 });
class ln {
  constructor(e, t, i) {
    this.tree = e, this.overlay = t, this.parser = i;
  }
  static get(e) {
    return e && e.props && e.props[B.mounted.id];
  }
}
const gu = /* @__PURE__ */ Object.create(null);
class ue {
  constructor(e, t, i, n = 0) {
    this.name = e, this.props = t, this.id = i, this.flags = n;
  }
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : gu, i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), n = new ue(e.name || "", t, e.id, i);
    if (e.props) {
      for (let r of e.props)
        if (Array.isArray(r) || (r = r(n)), r) {
          if (r[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[r[0].id] = r[1];
        }
    }
    return n;
  }
  prop(e) {
    return this.props[e.id];
  }
  get isTop() {
    return (this.flags & 1) > 0;
  }
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  get isError() {
    return (this.flags & 4) > 0;
  }
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  is(e) {
    if (typeof e == "string") {
      if (this.name == e)
        return !0;
      let t = this.prop(B.group);
      return t ? t.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  static match(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e)
      for (let n of i.split(" "))
        t[n] = e[i];
    return (i) => {
      for (let n = i.prop(B.group), r = -1; r < (n ? n.length : 0); r++) {
        let o = t[r < 0 ? i.name : n[r]];
        if (o)
          return o;
      }
    };
  }
}
ue.none = new ue("", /* @__PURE__ */ Object.create(null), 0, 8);
class fr {
  constructor(e) {
    this.types = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].id != t)
        throw new RangeError("Node type ids should correspond to array positions when creating a node set");
  }
  extend(...e) {
    let t = [];
    for (let i of this.types) {
      let n = null;
      for (let r of e) {
        let o = r(i);
        o && (n || (n = Object.assign({}, i.props)), n[o[0].id] = o[1]);
      }
      t.push(n ? new ue(i.name, n, i.id, i.flags) : i);
    }
    return new fr(t);
  }
}
const Ii = /* @__PURE__ */ new WeakMap(), Co = /* @__PURE__ */ new WeakMap();
var J;
(function(s) {
  s[s.ExcludeBuffers = 1] = "ExcludeBuffers", s[s.IncludeAnonymous = 2] = "IncludeAnonymous", s[s.IgnoreMounts = 4] = "IgnoreMounts", s[s.IgnoreOverlays = 8] = "IgnoreOverlays";
})(J || (J = {}));
class G {
  constructor(e, t, i, n, r) {
    if (this.type = e, this.children = t, this.positions = i, this.length = n, this.props = null, r && r.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of r)
        this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  toString() {
    let e = ln.get(this);
    if (e && !e.overlay)
      return e.tree.toString();
    let t = "";
    for (let i of this.children) {
      let n = i.toString();
      n && (t && (t += ","), t += n);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  cursor(e = 0) {
    return new Ns(this.topNode, e);
  }
  cursorAt(e, t = 0, i = 0) {
    let n = Ii.get(this) || this.topNode, r = new Ns(n);
    return r.moveTo(e, t), Ii.set(this, r._tree), r;
  }
  get topNode() {
    return new we(this, 0, 0, null);
  }
  resolve(e, t = 0) {
    let i = pi(Ii.get(this) || this.topNode, e, t, !1);
    return Ii.set(this, i), i;
  }
  resolveInner(e, t = 0) {
    let i = pi(Co.get(this) || this.topNode, e, t, !0);
    return Co.set(this, i), i;
  }
  resolveStack(e, t = 0) {
    return bu(this, e, t);
  }
  iterate(e) {
    let { enter: t, leave: i, from: n = 0, to: r = this.length } = e, o = e.mode || 0, l = (o & J.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | J.IncludeAnonymous); ; ) {
      let f = !1;
      if (a.from <= r && a.to >= n && (!l && a.type.isAnonymous || t(a) !== !1)) {
        if (a.firstChild())
          continue;
        f = !0;
      }
      for (; f && i && (l || !a.type.isAnonymous) && i(a), !a.nextSibling(); ) {
        if (!a.parent())
          return;
        f = !0;
      }
    }
  }
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  get propValues() {
    let e = [];
    if (this.props)
      for (let t in this.props)
        e.push([+t, this.props[t]]);
    return e;
  }
  balance(e = {}) {
    return this.children.length <= 8 ? this : dr(ue.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, i, n) => new G(this.type, t, i, n, this.propValues), e.makeTree || ((t, i, n) => new G(ue.none, t, i, n)));
  }
  static build(e) {
    return xu(e);
  }
}
G.empty = new G(ue.none, [], [], 0);
class cr {
  constructor(e, t) {
    this.buffer = e, this.index = t;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new cr(this.buffer, this.index);
  }
}
class ht {
  constructor(e, t, i) {
    this.buffer = e, this.length = t, this.set = i;
  }
  get type() {
    return ue.none;
  }
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; )
      e.push(this.childString(t)), t = this.buffer[t + 3];
    return e.join(",");
  }
  childString(e) {
    let t = this.buffer[e], i = this.buffer[e + 3], n = this.set.types[t], r = n.name;
    if (/\W/.test(r) && !n.isError && (r = JSON.stringify(r)), e += 4, i == e)
      return r;
    let o = [];
    for (; e < i; )
      o.push(this.childString(e)), e = this.buffer[e + 3];
    return r + "(" + o.join(",") + ")";
  }
  findChild(e, t, i, n, r) {
    let { buffer: o } = this, l = -1;
    for (let a = e; a != t && !(Ra(r, n, o[a + 1], o[a + 2]) && (l = a, i > 0)); a = o[a + 3])
      ;
    return l;
  }
  slice(e, t, i) {
    let n = this.buffer, r = new Uint16Array(t - e), o = 0;
    for (let l = e, a = 0; l < t; ) {
      r[a++] = n[l++], r[a++] = n[l++] - i;
      let f = r[a++] = n[l++] - i;
      r[a++] = n[l++] - e, o = Math.max(o, f);
    }
    return new ht(r, o, this.set);
  }
}
function Ra(s, e, t, i) {
  switch (s) {
    case -2:
      return t < e;
    case -1:
      return i >= e && t < e;
    case 0:
      return t < e && i > e;
    case 1:
      return t <= e && i > e;
    case 2:
      return i > e;
    case 4:
      return !0;
  }
}
function pi(s, e, t, i) {
  for (var n; s.from == s.to || (t < 1 ? s.from >= e : s.from > e) || (t > -1 ? s.to <= e : s.to < e); ) {
    let o = !i && s instanceof we && s.index < 0 ? null : s.parent;
    if (!o)
      return s;
    s = o;
  }
  let r = i ? 0 : J.IgnoreOverlays;
  if (i)
    for (let o = s, l = o.parent; l; o = l, l = o.parent)
      o instanceof we && o.index < 0 && ((n = l.enter(e, t, r)) === null || n === void 0 ? void 0 : n.from) != o.from && (s = l);
  for (; ; ) {
    let o = s.enter(e, t, r);
    if (!o)
      return s;
    s = o;
  }
}
class Ea {
  cursor(e = 0) {
    return new Ns(this, e);
  }
  getChild(e, t = null, i = null) {
    let n = Ao(this, e, t, i);
    return n.length ? n[0] : null;
  }
  getChildren(e, t = null, i = null) {
    return Ao(this, e, t, i);
  }
  resolve(e, t = 0) {
    return pi(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return pi(this, e, t, !0);
  }
  matchContext(e) {
    return Ls(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e), i = this;
    for (; t; ) {
      let n = t.lastChild;
      if (!n || n.to != t.to)
        break;
      n.type.isError && n.from == n.to ? (i = t, t = n.prevSibling) : t = n;
    }
    return i;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class we extends Ea {
  constructor(e, t, i, n) {
    super(), this._tree = e, this.from = t, this.index = i, this._parent = n;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, i, n, r = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, f = t > 0 ? l.length : -1; e != f; e += t) {
        let h = l[e], c = a[e] + o.from;
        if (!!Ra(n, i, c, c + h.length)) {
          if (h instanceof ht) {
            if (r & J.ExcludeBuffers)
              continue;
            let u = h.findChild(0, h.buffer.length, t, i - c, n);
            if (u > -1)
              return new st(new mu(o, h, e, c), null, u);
          } else if (r & J.IncludeAnonymous || !h.type.isAnonymous || ur(h)) {
            let u;
            if (!(r & J.IgnoreMounts) && (u = ln.get(h)) && !u.overlay)
              return new we(u.tree, c, e, o);
            let d = new we(h, c, e, o);
            return r & J.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(t < 0 ? h.children.length - 1 : 0, t, i, n);
          }
        }
      }
      if (r & J.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? e = o.index + t : e = t < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(0, 1, 0, 4);
  }
  get lastChild() {
    return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
  }
  childAfter(e) {
    return this.nextChild(0, 1, e, 2);
  }
  childBefore(e) {
    return this.nextChild(this._tree.children.length - 1, -1, e, -2);
  }
  enter(e, t, i = 0) {
    let n;
    if (!(i & J.IgnoreOverlays) && (n = ln.get(this._tree)) && n.overlay) {
      let r = e - this.from;
      for (let { from: o, to: l } of n.overlay)
        if ((t > 0 ? o <= r : o < r) && (t < 0 ? l >= r : l > r))
          return new we(n.tree, n.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, i);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; )
      e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  toString() {
    return this._tree.toString();
  }
}
function Ao(s, e, t, i) {
  let n = s.cursor(), r = [];
  if (!n.firstChild())
    return r;
  if (t != null) {
    for (let o = !1; !o; )
      if (o = n.type.is(t), !n.nextSibling())
        return r;
  }
  for (; ; ) {
    if (i != null && n.type.is(i))
      return r;
    if (n.type.is(e) && r.push(n.node), !n.nextSibling())
      return i == null ? r : [];
  }
}
function Ls(s, e, t = e.length - 1) {
  for (let i = s; t >= 0; i = i.parent) {
    if (!i)
      return !1;
    if (!i.type.isAnonymous) {
      if (e[t] && e[t] != i.name)
        return !1;
      t--;
    }
  }
  return !0;
}
class mu {
  constructor(e, t, i, n) {
    this.parent = e, this.buffer = t, this.index = i, this.start = n;
  }
}
class st extends Ea {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, i) {
    super(), this.context = e, this._parent = t, this.index = i, this.type = e.buffer.set.types[e.buffer.buffer[i]];
  }
  child(e, t, i) {
    let { buffer: n } = this.context, r = n.findChild(this.index + 4, n.buffer[this.index + 3], e, t - this.context.start, i);
    return r < 0 ? null : new st(this.context, this, r);
  }
  get firstChild() {
    return this.child(1, 0, 4);
  }
  get lastChild() {
    return this.child(-1, 0, 4);
  }
  childAfter(e) {
    return this.child(1, e, 2);
  }
  childBefore(e) {
    return this.child(-1, e, -2);
  }
  enter(e, t, i = 0) {
    if (i & J.ExcludeBuffers)
      return null;
    let { buffer: n } = this.context, r = n.findChild(this.index + 4, n.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return r < 0 ? null : new st(this.context, this, r);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
  }
  get nextSibling() {
    let { buffer: e } = this.context, t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new st(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new st(this.context, this._parent, e.findChild(t, this.index, -1, 0, 4));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], t = [], { buffer: i } = this.context, n = this.index + 4, r = i.buffer[this.index + 3];
    if (r > n) {
      let o = i.buffer[this.index + 1];
      e.push(i.slice(n, r, o)), t.push(0);
    }
    return new G(this.type, e, t, this.to - this.from);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function La(s) {
  if (!s.length)
    return null;
  let e = 0, t = s[0];
  for (let r = 1; r < s.length; r++) {
    let o = s[r];
    (o.from > t.from || o.to < t.to) && (t = o, e = r);
  }
  let i = t instanceof we && t.index < 0 ? null : t.parent, n = s.slice();
  return i ? n[e] = i : n.splice(e, 1), new yu(n, t);
}
class yu {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return La(this.heads);
  }
}
function bu(s, e, t) {
  let i = s.resolveInner(e, t), n = null;
  for (let r = i instanceof we ? i : i.context.parent; r; r = r.parent)
    if (r.index < 0) {
      let o = r.parent;
      (n || (n = [i])).push(o.resolve(e, t)), r = o;
    } else {
      let o = ln.get(r.tree);
      if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
        let l = new we(o.tree, o.overlay[0].from + r.from, -1, r);
        (n || (n = [i])).push(pi(l, e, t, !1));
      }
    }
  return n ? La(n) : i;
}
class Ns {
  get name() {
    return this.type.name;
  }
  constructor(e, t = 0) {
    if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof we)
      this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let i = e._parent; i; i = i._parent)
        this.stack.unshift(i.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: i, buffer: n } = this.buffer;
    return this.type = t || n.set.types[n.buffer[e]], this.from = i + n.buffer[e + 1], this.to = i + n.buffer[e + 2], !0;
  }
  yield(e) {
    return e ? e instanceof we ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
  }
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  enterChild(e, t, i) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, i, this.mode));
    let { buffer: n } = this.buffer, r = n.findChild(this.index + 4, n.buffer[this.index + 3], e, t - this.buffer.start, i);
    return r < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(r));
  }
  firstChild() {
    return this.enterChild(1, 0, 4);
  }
  lastChild() {
    return this.enterChild(-1, 0, 4);
  }
  childAfter(e) {
    return this.enterChild(1, e, 2);
  }
  childBefore(e) {
    return this.enterChild(-1, e, -2);
  }
  enter(e, t, i = this.mode) {
    return this.buffer ? i & J.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, i));
  }
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & J.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & J.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
    let { buffer: t } = this.buffer, i = this.stack.length - 1;
    if (e < 0) {
      let n = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != n)
        return this.yieldBuf(t.findChild(n, this.index, -1, 0, 4));
    } else {
      let n = t.buffer[this.index + 3];
      if (n < (i < 0 ? t.buffer.length : t.buffer[this.stack[i] + 3]))
        return this.yieldBuf(n);
    }
    return i < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1;
  }
  nextSibling() {
    return this.sibling(1);
  }
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t, i, { buffer: n } = this;
    if (n) {
      if (e > 0) {
        if (this.index < n.buffer.buffer.length)
          return !1;
      } else
        for (let r = 0; r < this.index; r++)
          if (n.buffer.buffer[r + 3] < this.index)
            return !1;
      ({ index: t, parent: i } = n);
    } else
      ({ index: t, _parent: i } = this._tree);
    for (; i; { index: t, _parent: i } = i)
      if (t > -1)
        for (let r = t + e, o = e < 0 ? -1 : i._tree.children.length; r != o; r += e) {
          let l = i._tree.children[r];
          if (this.mode & J.IncludeAnonymous || l instanceof ht || !l.type.isAnonymous || ur(l))
            return !1;
        }
    return !0;
  }
  move(e, t) {
    if (t && this.enterChild(e, 0, 4))
      return !0;
    for (; ; ) {
      if (this.sibling(e))
        return !0;
      if (this.atLastNode(e) || !this.parent())
        return !1;
    }
  }
  next(e = !0) {
    return this.move(1, e);
  }
  prev(e = !0) {
    return this.move(-1, e);
  }
  moveTo(e, t = 0) {
    for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(); )
      ;
    for (; this.enterChild(1, e, t); )
      ;
    return this;
  }
  get node() {
    if (!this.buffer)
      return this._tree;
    let e = this.bufferNode, t = null, i = 0;
    if (e && e.context == this.buffer) {
      e:
        for (let n = this.index, r = this.stack.length; r >= 0; ) {
          for (let o = e; o; o = o._parent)
            if (o.index == n) {
              if (n == this.index)
                return o;
              t = o, i = r + 1;
              break e;
            }
          n = this.stack[--r];
        }
    }
    for (let n = i; n < this.stack.length; n++)
      t = new st(this.buffer, t, this.stack[n]);
    return this.bufferNode = new st(this.buffer, t, this.index);
  }
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  iterate(e, t) {
    for (let i = 0; ; ) {
      let n = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (n = !0);
      }
      for (; ; ) {
        if (n && t && t(this), n = this.type.isAnonymous, !i)
          return;
        if (this.nextSibling())
          break;
        this.parent(), i--, n = !0;
      }
    }
  }
  matchContext(e) {
    if (!this.buffer)
      return Ls(this.node.parent, e);
    let { buffer: t } = this.buffer, { types: i } = t.set;
    for (let n = e.length - 1, r = this.stack.length - 1; n >= 0; r--) {
      if (r < 0)
        return Ls(this._tree, e, n);
      let o = i[t.buffer[this.stack[r]]];
      if (!o.isAnonymous) {
        if (e[n] && e[n] != o.name)
          return !1;
        n--;
      }
    }
    return !0;
  }
}
function ur(s) {
  return s.children.some((e) => e instanceof ht || !e.type.isAnonymous || ur(e));
}
function xu(s) {
  var e;
  let { buffer: t, nodeSet: i, maxBufferLength: n = Ba, reused: r = [], minRepeatType: o = i.types.length } = s, l = Array.isArray(t) ? new cr(t, t.length) : t, a = i.types, f = 0, h = 0;
  function c(C, O, M, N, z, U) {
    let { id: R, start: P, end: q, size: $ } = l, Z = h, Je = f;
    for (; $ < 0; )
      if (l.next(), $ == -1) {
        let je = r[R];
        M.push(je), N.push(P - C);
        return;
      } else if ($ == -3) {
        f = R;
        return;
      } else if ($ == -4) {
        h = R;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${$}`);
    let qt = a[R], Si, ct, Sr = P - C;
    if (q - P <= n && (ct = m(l.pos - O, z))) {
      let je = new Uint16Array(ct.size - ct.skip), me = l.pos - ct.size, Re = je.length;
      for (; l.pos > me; )
        Re = y(ct.start, je, Re);
      Si = new ht(je, q - ct.start, i), Sr = ct.start - C;
    } else {
      let je = l.pos - $;
      l.next();
      let me = [], Re = [], ut = R >= o ? R : -1, At = 0, Ci = q;
      for (; l.pos > je; )
        ut >= 0 && l.id == ut && l.size >= 0 ? (l.end <= Ci - n && (p(me, Re, P, At, l.end, Ci, ut, Z, Je), At = me.length, Ci = l.end), l.next()) : U > 2500 ? u(P, je, me, Re) : c(P, je, me, Re, ut, U + 1);
      if (ut >= 0 && At > 0 && At < me.length && p(me, Re, P, At, P, Ci, ut, Z, Je), me.reverse(), Re.reverse(), ut > -1 && At > 0) {
        let Cr = d(qt, Je);
        Si = dr(qt, me, Re, 0, me.length, 0, q - P, Cr, Cr);
      } else
        Si = g(qt, me, Re, q - P, Z - q, Je);
    }
    M.push(Si), N.push(Sr);
  }
  function u(C, O, M, N) {
    let z = [], U = 0, R = -1;
    for (; l.pos > O; ) {
      let { id: P, start: q, end: $, size: Z } = l;
      if (Z > 4)
        l.next();
      else {
        if (R > -1 && q < R)
          break;
        R < 0 && (R = $ - n), z.push(P, q, $), U++, l.next();
      }
    }
    if (U) {
      let P = new Uint16Array(U * 4), q = z[z.length - 2];
      for (let $ = z.length - 3, Z = 0; $ >= 0; $ -= 3)
        P[Z++] = z[$], P[Z++] = z[$ + 1] - q, P[Z++] = z[$ + 2] - q, P[Z++] = Z;
      M.push(new ht(P, z[2] - q, i)), N.push(q - C);
    }
  }
  function d(C, O) {
    return (M, N, z) => {
      let U = 0, R = M.length - 1, P, q;
      if (R >= 0 && (P = M[R]) instanceof G) {
        if (!R && P.type == C && P.length == z)
          return P;
        (q = P.prop(B.lookAhead)) && (U = N[R] + P.length + q);
      }
      return g(C, M, N, z, U, O);
    };
  }
  function p(C, O, M, N, z, U, R, P, q) {
    let $ = [], Z = [];
    for (; C.length > N; )
      $.push(C.pop()), Z.push(O.pop() + M - z);
    C.push(g(i.types[R], $, Z, U - z, P - U, q)), O.push(z - M);
  }
  function g(C, O, M, N, z, U, R) {
    if (U) {
      let P = [B.contextHash, U];
      R = R ? [P].concat(R) : [P];
    }
    if (z > 25) {
      let P = [B.lookAhead, z];
      R = R ? [P].concat(R) : [P];
    }
    return new G(C, O, M, N, R);
  }
  function m(C, O) {
    let M = l.fork(), N = 0, z = 0, U = 0, R = M.end - n, P = { size: 0, start: 0, skip: 0 };
    e:
      for (let q = M.pos - C; M.pos > q; ) {
        let $ = M.size;
        if (M.id == O && $ >= 0) {
          P.size = N, P.start = z, P.skip = U, U += 4, N += 4, M.next();
          continue;
        }
        let Z = M.pos - $;
        if ($ < 0 || Z < q || M.start < R)
          break;
        let Je = M.id >= o ? 4 : 0, qt = M.start;
        for (M.next(); M.pos > Z; ) {
          if (M.size < 0)
            if (M.size == -3)
              Je += 4;
            else
              break e;
          else
            M.id >= o && (Je += 4);
          M.next();
        }
        z = qt, N += $, U += Je;
      }
    return (O < 0 || N == C) && (P.size = N, P.start = z, P.skip = U), P.size > 4 ? P : void 0;
  }
  function y(C, O, M) {
    let { id: N, start: z, end: U, size: R } = l;
    if (l.next(), R >= 0 && N < o) {
      let P = M;
      if (R > 4) {
        let q = l.pos - (R - 4);
        for (; l.pos > q; )
          M = y(C, O, M);
      }
      O[--M] = P, O[--M] = U - C, O[--M] = z - C, O[--M] = N;
    } else
      R == -3 ? f = N : R == -4 && (h = N);
    return M;
  }
  let x = [], w = [];
  for (; l.pos > 0; )
    c(s.start || 0, s.bufferStart || 0, x, w, -1, 0);
  let v = (e = s.length) !== null && e !== void 0 ? e : x.length ? w[0] + x[0].length : 0;
  return new G(a[s.topID], x.reverse(), w.reverse(), v);
}
const Oo = /* @__PURE__ */ new WeakMap();
function Yi(s, e) {
  if (!s.isAnonymous || e instanceof ht || e.type != s)
    return 1;
  let t = Oo.get(e);
  if (t == null) {
    t = 1;
    for (let i of e.children) {
      if (i.type != s || !(i instanceof G)) {
        t = 1;
        break;
      }
      t += Yi(s, i);
    }
    Oo.set(e, t);
  }
  return t;
}
function dr(s, e, t, i, n, r, o, l, a) {
  let f = 0;
  for (let p = i; p < n; p++)
    f += Yi(s, e[p]);
  let h = Math.ceil(f * 1.5 / 8), c = [], u = [];
  function d(p, g, m, y, x) {
    for (let w = m; w < y; ) {
      let v = w, C = g[w], O = Yi(s, p[w]);
      for (w++; w < y; w++) {
        let M = Yi(s, p[w]);
        if (O + M >= h)
          break;
        O += M;
      }
      if (w == v + 1) {
        if (O > h) {
          let M = p[v];
          d(M.children, M.positions, 0, M.children.length, g[v] + x);
          continue;
        }
        c.push(p[v]);
      } else {
        let M = g[w - 1] + p[w - 1].length - C;
        c.push(dr(s, p, g, v, w, C, M, null, a));
      }
      u.push(C + x - r);
    }
  }
  return d(e, t, i, n, 0), (l || a)(c, u, o);
}
class kt {
  constructor(e, t, i, n, r = !1, o = !1) {
    this.from = e, this.to = t, this.tree = i, this.offset = n, this.open = (r ? 1 : 0) | (o ? 2 : 0);
  }
  get openStart() {
    return (this.open & 1) > 0;
  }
  get openEnd() {
    return (this.open & 2) > 0;
  }
  static addTree(e, t = [], i = !1) {
    let n = [new kt(0, e.length, e, 0, !1, i)];
    for (let r of t)
      r.to > e.length && n.push(r);
    return n;
  }
  static applyChanges(e, t, i = 128) {
    if (!t.length)
      return e;
    let n = [], r = 1, o = e.length ? e[0] : null;
    for (let l = 0, a = 0, f = 0; ; l++) {
      let h = l < t.length ? t[l] : null, c = h ? h.fromA : 1e9;
      if (c - a >= i)
        for (; o && o.from < c; ) {
          let u = o;
          if (a >= u.from || c <= u.to || f) {
            let d = Math.max(u.from, a) - f, p = Math.min(u.to, c) - f;
            u = d >= p ? null : new kt(d, p, u.tree, u.offset + f, l > 0, !!h);
          }
          if (u && n.push(u), o.to > c)
            break;
          o = r < e.length ? e[r++] : null;
        }
      if (!h)
        break;
      a = h.toA, f = h.toA - h.toB;
    }
    return n;
  }
}
class Na {
  startParse(e, t, i) {
    return typeof e == "string" && (e = new ku(e)), i = i ? i.length ? i.map((n) => new $n(n.from, n.to)) : [new $n(0, 0)] : [new $n(0, e.length)], this.createParse(e, t || [], i);
  }
  parse(e, t, i) {
    let n = this.startParse(e, t, i);
    for (; ; ) {
      let r = n.advance();
      if (r)
        return r;
    }
  }
}
class ku {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return !1;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
}
new B({ perNode: !0 });
let wu = 0;
class ye {
  constructor(e, t, i, n) {
    this.name = e, this.set = t, this.base = i, this.modified = n, this.id = wu++;
  }
  toString() {
    let { name: e } = this;
    for (let t of this.modified)
      t.name && (e = `${t.name}(${e})`);
    return e;
  }
  static define(e, t) {
    let i = typeof e == "string" ? e : "?";
    if (e instanceof ye && (t = e), t != null && t.base)
      throw new Error("Can not derive from a modified tag");
    let n = new ye(i, [], null, []);
    if (n.set.push(n), t)
      for (let r of t.set)
        n.set.push(r);
    return n;
  }
  static defineModifier(e) {
    let t = new an(e);
    return (i) => i.modified.indexOf(t) > -1 ? i : an.get(i.base || i, i.modified.concat(t).sort((n, r) => n.id - r.id));
  }
}
let vu = 0;
class an {
  constructor(e) {
    this.name = e, this.instances = [], this.id = vu++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let i = t[0].instances.find((l) => l.base == e && Su(t, l.modified));
    if (i)
      return i;
    let n = [], r = new ye(e.name, n, e, t);
    for (let l of t)
      l.instances.push(r);
    let o = Cu(t);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of o)
          n.push(an.get(l, a));
    return r;
  }
}
function Su(s, e) {
  return s.length == e.length && s.every((t, i) => t == e[i]);
}
function Cu(s) {
  let e = [[]];
  for (let t = 0; t < s.length; t++)
    for (let i = 0, n = e.length; i < n; i++)
      e.push(e[i].concat(s[t]));
  return e.sort((t, i) => i.length - t.length);
}
function Ia(s) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in s) {
    let i = s[t];
    Array.isArray(i) || (i = [i]);
    for (let n of t.split(" "))
      if (n) {
        let r = [], o = 2, l = n;
        for (let c = 0; ; ) {
          if (l == "..." && c > 0 && c + 3 == n.length) {
            o = 1;
            break;
          }
          let u = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!u)
            throw new RangeError("Invalid path: " + n);
          if (r.push(u[0] == "*" ? "" : u[0][0] == '"' ? JSON.parse(u[0]) : u[0]), c += u[0].length, c == n.length)
            break;
          let d = n[c++];
          if (c == n.length && d == "!") {
            o = 0;
            break;
          }
          if (d != "/")
            throw new RangeError("Invalid path: " + n);
          l = n.slice(c);
        }
        let a = r.length - 1, f = r[a];
        if (!f)
          throw new RangeError("Invalid path: " + n);
        let h = new hn(i, o, a > 0 ? r.slice(0, a) : null);
        e[f] = h.sort(e[f]);
      }
  }
  return Fa.add(e);
}
const Fa = new B();
class hn {
  constructor(e, t, i, n) {
    this.tags = e, this.mode = t, this.context = i, this.next = n;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
hn.empty = new hn([], 2, null);
function Va(s, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r of s)
    if (!Array.isArray(r.tag))
      t[r.tag.id] = r.class;
    else
      for (let o of r.tag)
        t[o.id] = r.class;
  let { scope: i, all: n = null } = e || {};
  return {
    style: (r) => {
      let o = n;
      for (let l of r)
        for (let a of l.set) {
          let f = t[a.id];
          if (f) {
            o = o ? o + " " + f : f;
            break;
          }
        }
      return o;
    },
    scope: i
  };
}
function Au(s, e) {
  let t = null;
  for (let i of s) {
    let n = i.style(e);
    n && (t = t ? t + " " + n : n);
  }
  return t;
}
function Ou(s, e, t, i = 0, n = s.length) {
  let r = new Mu(i, Array.isArray(e) ? e : [e], t);
  r.highlightRange(s.cursor(), i, n, "", r.highlighters), r.flush(n);
}
class Mu {
  constructor(e, t, i) {
    this.at = e, this.highlighters = t, this.span = i, this.class = "";
  }
  startSpan(e, t) {
    t != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = t);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, i, n, r) {
    let { type: o, from: l, to: a } = e;
    if (l >= i || a <= t)
      return;
    o.isTop && (r = this.highlighters.filter((d) => !d.scope || d.scope(o)));
    let f = n, h = Du(e) || hn.empty, c = Au(r, h.tags);
    if (c && (f && (f += " "), f += c, h.mode == 1 && (n += (n ? " " : "") + c)), this.startSpan(Math.max(t, l), f), h.opaque)
      return;
    let u = e.tree && e.tree.prop(B.mounted);
    if (u && u.overlay) {
      let d = e.node.enter(u.overlay[0].from + l, 1), p = this.highlighters.filter((m) => !m.scope || m.scope(u.tree.type)), g = e.firstChild();
      for (let m = 0, y = l; ; m++) {
        let x = m < u.overlay.length ? u.overlay[m] : null, w = x ? x.from + l : a, v = Math.max(t, y), C = Math.min(i, w);
        if (v < C && g)
          for (; e.from < C && (this.highlightRange(e, v, C, n, r), this.startSpan(Math.min(C, e.to), f), !(e.to >= w || !e.nextSibling())); )
            ;
        if (!x || w > i)
          break;
        y = x.to + l, y > t && (this.highlightRange(d.cursor(), Math.max(t, x.from + l), Math.min(i, y), "", p), this.startSpan(Math.min(i, y), f));
      }
      g && e.parent();
    } else if (e.firstChild()) {
      u && (n = "");
      do
        if (!(e.to <= t)) {
          if (e.from >= i)
            break;
          this.highlightRange(e, t, i, n, r), this.startSpan(Math.min(i, e.to), f);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function Du(s) {
  let e = s.type.prop(Fa);
  for (; e && e.context && !s.matchContext(e.context); )
    e = e.next;
  return e || null;
}
const S = ye.define, Fi = S(), Ze = S(), Mo = S(Ze), Do = S(Ze), et = S(), Vi = S(et), Un = S(et), Ie = S(), dt = S(Ie), Le = S(), Ne = S(), Is = S(), Qt = S(Is), Hi = S(), b = {
  comment: Fi,
  lineComment: S(Fi),
  blockComment: S(Fi),
  docComment: S(Fi),
  name: Ze,
  variableName: S(Ze),
  typeName: Mo,
  tagName: S(Mo),
  propertyName: Do,
  attributeName: S(Do),
  className: S(Ze),
  labelName: S(Ze),
  namespace: S(Ze),
  macroName: S(Ze),
  literal: et,
  string: Vi,
  docString: S(Vi),
  character: S(Vi),
  attributeValue: S(Vi),
  number: Un,
  integer: S(Un),
  float: S(Un),
  bool: S(et),
  regexp: S(et),
  escape: S(et),
  color: S(et),
  url: S(et),
  keyword: Le,
  self: S(Le),
  null: S(Le),
  atom: S(Le),
  unit: S(Le),
  modifier: S(Le),
  operatorKeyword: S(Le),
  controlKeyword: S(Le),
  definitionKeyword: S(Le),
  moduleKeyword: S(Le),
  operator: Ne,
  derefOperator: S(Ne),
  arithmeticOperator: S(Ne),
  logicOperator: S(Ne),
  bitwiseOperator: S(Ne),
  compareOperator: S(Ne),
  updateOperator: S(Ne),
  definitionOperator: S(Ne),
  typeOperator: S(Ne),
  controlOperator: S(Ne),
  punctuation: Is,
  separator: S(Is),
  bracket: Qt,
  angleBracket: S(Qt),
  squareBracket: S(Qt),
  paren: S(Qt),
  brace: S(Qt),
  content: Ie,
  heading: dt,
  heading1: S(dt),
  heading2: S(dt),
  heading3: S(dt),
  heading4: S(dt),
  heading5: S(dt),
  heading6: S(dt),
  contentSeparator: S(Ie),
  list: S(Ie),
  quote: S(Ie),
  emphasis: S(Ie),
  strong: S(Ie),
  link: S(Ie),
  monospace: S(Ie),
  strikethrough: S(Ie),
  inserted: S(),
  deleted: S(),
  changed: S(),
  invalid: S(),
  meta: Hi,
  documentMeta: S(Hi),
  annotation: S(Hi),
  processingInstruction: S(Hi),
  definition: ye.defineModifier("definition"),
  constant: ye.defineModifier("constant"),
  function: ye.defineModifier("function"),
  standard: ye.defineModifier("standard"),
  local: ye.defineModifier("local"),
  special: ye.defineModifier("special")
};
for (let s in b) {
  let e = b[s];
  e instanceof ye && (e.name = s);
}
Va([
  { tag: b.link, class: "tok-link" },
  { tag: b.heading, class: "tok-heading" },
  { tag: b.emphasis, class: "tok-emphasis" },
  { tag: b.strong, class: "tok-strong" },
  { tag: b.keyword, class: "tok-keyword" },
  { tag: b.atom, class: "tok-atom" },
  { tag: b.bool, class: "tok-bool" },
  { tag: b.url, class: "tok-url" },
  { tag: b.labelName, class: "tok-labelName" },
  { tag: b.inserted, class: "tok-inserted" },
  { tag: b.deleted, class: "tok-deleted" },
  { tag: b.literal, class: "tok-literal" },
  { tag: b.string, class: "tok-string" },
  { tag: b.number, class: "tok-number" },
  { tag: [b.regexp, b.escape, b.special(b.string)], class: "tok-string2" },
  { tag: b.variableName, class: "tok-variableName" },
  { tag: b.local(b.variableName), class: "tok-variableName tok-local" },
  { tag: b.definition(b.variableName), class: "tok-variableName tok-definition" },
  { tag: b.special(b.variableName), class: "tok-variableName2" },
  { tag: b.definition(b.propertyName), class: "tok-propertyName tok-definition" },
  { tag: b.typeName, class: "tok-typeName" },
  { tag: b.namespace, class: "tok-namespace" },
  { tag: b.className, class: "tok-className" },
  { tag: b.macroName, class: "tok-macroName" },
  { tag: b.propertyName, class: "tok-propertyName" },
  { tag: b.operator, class: "tok-operator" },
  { tag: b.comment, class: "tok-comment" },
  { tag: b.meta, class: "tok-meta" },
  { tag: b.invalid, class: "tok-invalid" },
  { tag: b.punctuation, class: "tok-punctuation" }
]);
var jn;
const Tt = /* @__PURE__ */ new B();
function Tu(s) {
  return D.define({
    combine: s ? (e) => e.concat(s) : void 0
  });
}
const Pu = /* @__PURE__ */ new B();
class Ae {
  constructor(e, t, i = [], n = "") {
    this.data = e, this.name = n, I.prototype.hasOwnProperty("tree") || Object.defineProperty(I.prototype, "tree", { get() {
      return ae(this);
    } }), this.parser = t, this.extension = [
      zt.of(this),
      I.languageData.of((r, o, l) => {
        let a = To(r, o, l), f = a.type.prop(Tt);
        if (!f)
          return [];
        let h = r.facet(f), c = a.type.prop(Pu);
        if (c) {
          let u = a.resolve(o - a.from, l);
          for (let d of c)
            if (d.test(u, r)) {
              let p = r.facet(d.facet);
              return d.type == "replace" ? p : p.concat(h);
            }
        }
        return h;
      })
    ].concat(i);
  }
  isActiveAt(e, t, i = -1) {
    return To(e, t, i).type.prop(Tt) == this.data;
  }
  findRegions(e) {
    let t = e.facet(zt);
    if ((t == null ? void 0 : t.data) == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting)
      return [];
    let i = [], n = (r, o) => {
      if (r.prop(Tt) == this.data) {
        i.push({ from: o, to: o + r.length });
        return;
      }
      let l = r.prop(B.mounted);
      if (l) {
        if (l.tree.prop(Tt) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              i.push({ from: a.from + o, to: a.to + o });
          else
            i.push({ from: o, to: o + r.length });
          return;
        } else if (l.overlay) {
          let a = i.length;
          if (n(l.tree, l.overlay[0].from + o), i.length > a)
            return;
        }
      }
      for (let a = 0; a < r.children.length; a++) {
        let f = r.children[a];
        f instanceof G && n(f, r.positions[a] + o);
      }
    };
    return n(ae(e), 0), i;
  }
  get allowsNesting() {
    return !0;
  }
}
Ae.setState = /* @__PURE__ */ W.define();
function To(s, e, t) {
  let i = s.facet(zt), n = ae(s).topNode;
  if (!i || i.allowsNesting)
    for (let r = n; r; r = r.enter(e, t, J.ExcludeBuffers))
      r.type.isTop && (n = r);
  return n;
}
class fn extends Ae {
  constructor(e, t, i) {
    super(e, t, [], i), this.parser = t;
  }
  static define(e) {
    let t = Tu(e.languageData);
    return new fn(t, e.parser.configure({
      props: [Tt.add((i) => i.isTop ? t : void 0)]
    }), e.name);
  }
  configure(e, t) {
    return new fn(this.data, this.parser.configure(e), t || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function ae(s) {
  let e = s.field(Ae.state, !1);
  return e ? e.tree : G.empty;
}
class Bu {
  constructor(e) {
    this.doc = e, this.cursorPos = 0, this.string = "", this.cursor = e.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(e, t) {
    let i = this.cursorPos - this.string.length;
    return e < i || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - i, t - i);
  }
}
let Kt = null;
class cn {
  constructor(e, t, i = [], n, r, o, l, a) {
    this.parser = e, this.state = t, this.fragments = i, this.tree = n, this.treeLen = r, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  static create(e, t, i) {
    return new cn(e, t, [], G.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new Bu(this.state.doc), this.fragments);
  }
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != G.empty && this.isDone(t != null ? t : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var i;
      if (typeof e == "number") {
        let n = Date.now() + e;
        e = () => Date.now() > n;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let n = this.parse.advance();
        if (n)
          if (this.fragments = this.withoutTempSkipped(kt.addTree(n, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = n, this.parse = null, this.treeLen < (t != null ? t : this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (e())
          return !1;
      }
    });
  }
  takeTree() {
    let e, t;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(t = this.parse.advance()); )
        ;
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(kt.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let t = Kt;
    Kt = this;
    try {
      return e();
    } finally {
      Kt = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); )
      e = Po(e, t.from, t.to);
    return e;
  }
  changes(e, t) {
    let { fragments: i, tree: n, treeLen: r, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((f, h, c, u) => a.push({ fromA: f, toA: h, fromB: c, toB: u })), i = kt.applyChanges(i, a), n = G.empty, r = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let f of this.skipped) {
          let h = e.mapPos(f.from, 1), c = e.mapPos(f.to, -1);
          h < c && l.push({ from: h, to: c });
        }
      }
    }
    return new cn(this.parser, t, i, n, r, o, l, this.scheduleOn);
  }
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to)
      return !1;
    this.viewport = e;
    let t = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: n, to: r } = this.skipped[i];
      n < e.to && r > e.from && (this.fragments = Po(this.fragments, n, r), this.skipped.splice(i--, 1));
    }
    return this.skipped.length >= t ? !1 : (this.reset(), !0);
  }
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  static getSkippingParser(e) {
    return new class extends Na {
      createParse(t, i, n) {
        let r = n[0].from, o = n[n.length - 1].to;
        return {
          parsedPos: r,
          advance() {
            let a = Kt;
            if (a) {
              for (let f of n)
                a.tempSkipped.push(f);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return this.parsedPos = o, new G(ue.none, [], [], o - r);
          },
          stoppedAt: null,
          stopAt() {
          }
        };
      }
    }();
  }
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  static get() {
    return Kt;
  }
}
function Po(s, e, t) {
  return kt.applyChanges(s, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class Ht {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let t = this.context.changes(e.changes, e.state), i = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, i) || t.takeTree(), new Ht(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), i = cn.create(e.facet(zt).parser, e, { from: 0, to: t });
    return i.work(20, t) || i.takeTree(), new Ht(i);
  }
}
Ae.state = /* @__PURE__ */ Pe.define({
  create: Ht.init,
  update(s, e) {
    for (let t of e.effects)
      if (t.is(Ae.setState))
        return t.value;
    return e.startState.facet(zt) != e.state.facet(zt) ? Ht.init(e.state) : s.apply(e);
  }
});
let Ha = (s) => {
  let e = setTimeout(() => s(), 500);
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (Ha = (s) => {
  let e = -1, t = setTimeout(() => {
    e = requestIdleCallback(s, { timeout: 500 - 100 });
  }, 100);
  return () => e < 0 ? clearTimeout(t) : cancelIdleCallback(e);
});
const Qn = typeof navigator < "u" && ((jn = navigator.scheduling) === null || jn === void 0 ? void 0 : jn.isInputPending) ? () => navigator.scheduling.isInputPending() : null, Ru = /* @__PURE__ */ De.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(Ae.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, t = e.field(Ae.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = Ha(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i, viewport: { to: n } } = this.view, r = i.field(Ae.state);
    if (r.tree == r.context.tree && r.context.isDone(n + 1e5))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !Qn ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = r.context.treeLen < n && i.doc.length > n + 1e3, a = r.context.work(() => Qn && Qn() || Date.now() > o, n + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (r.context.takeTree(), this.view.dispatch({ effects: Ae.setState.of(new Ht(r.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(r.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => Ce(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, {
  eventHandlers: { focus() {
    this.scheduleWork();
  } }
}), zt = /* @__PURE__ */ D.define({
  combine(s) {
    return s.length ? s[0] : null;
  },
  enables: (s) => [
    Ae.state,
    Ru,
    T.contentAttributes.compute([s], (e) => {
      let t = e.facet(s);
      return t && t.name ? { "data-language": t.name } : {};
    })
  ]
});
class Eu {
  constructor(e, t = []) {
    this.language = e, this.support = t, this.extension = [e, t];
  }
}
const Lu = /* @__PURE__ */ D.define(), Cn = /* @__PURE__ */ D.define({
  combine: (s) => {
    if (!s.length)
      return "  ";
    let e = s[0];
    if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(s[0]));
    return e;
  }
});
function un(s) {
  let e = s.facet(Cn);
  return e.charCodeAt(0) == 9 ? s.tabSize * e.length : e.length;
}
function gi(s, e) {
  let t = "", i = s.tabSize, n = s.facet(Cn)[0];
  if (n == "	") {
    for (; e >= i; )
      t += "	", e -= i;
    n = " ";
  }
  for (let r = 0; r < e; r++)
    t += n;
  return t;
}
function pr(s, e) {
  s instanceof I && (s = new An(s));
  for (let i of s.state.facet(Lu)) {
    let n = i(s, e);
    if (n !== void 0)
      return n;
  }
  let t = ae(s.state);
  return t.length >= e ? Nu(s, t, e) : null;
}
class An {
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = un(e);
  }
  lineAt(e, t = 1) {
    let i = this.state.doc.lineAt(e), { simulateBreak: n, simulateDoubleBreak: r } = this.options;
    return n != null && n >= i.from && n <= i.to ? r && n == e ? { text: "", from: e } : (t < 0 ? n < e : n <= e) ? { text: i.text.slice(n - i.from), from: n } : { text: i.text.slice(0, n - i.from), from: i.from } : i;
  }
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: i, from: n } = this.lineAt(e, t);
    return i.slice(e - n, Math.min(i.length, e + 100 - n));
  }
  column(e, t = 1) {
    let { text: i, from: n } = this.lineAt(e, t), r = this.countColumn(i, e - n), o = this.options.overrideIndentation ? this.options.overrideIndentation(n) : -1;
    return o > -1 && (r += o - this.countColumn(i, i.search(/\S|$/))), r;
  }
  countColumn(e, t = e.length) {
    return kn(e, this.state.tabSize, t);
  }
  lineIndent(e, t = 1) {
    let { text: i, from: n } = this.lineAt(e, t), r = this.options.overrideIndentation;
    if (r) {
      let o = r(n);
      if (o > -1)
        return o;
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const za = /* @__PURE__ */ new B();
function Nu(s, e, t) {
  let i = e.resolveStack(t), n = e.resolveInner(t, -1).resolve(t, 0).enterUnfinishedNodesBefore(t);
  if (n != i.node) {
    let r = [];
    for (let o = n; o && !(o.from == i.node.from && o.type == i.node.type); o = o.parent)
      r.push(o);
    for (let o = r.length - 1; o >= 0; o--)
      i = { node: r[o], next: i };
  }
  return Wa(i, s, t);
}
function Wa(s, e, t) {
  for (let i = s; i; i = i.next) {
    let n = Fu(i.node);
    if (n)
      return n(gr.create(e, t, i));
  }
  return 0;
}
function Iu(s) {
  return s.pos == s.options.simulateBreak && s.options.simulateDoubleBreak;
}
function Fu(s) {
  let e = s.type.prop(za);
  if (e)
    return e;
  let t = s.firstChild, i;
  if (t && (i = t.type.prop(B.closedBy))) {
    let n = s.lastChild, r = n && i.indexOf(n.name) > -1;
    return (o) => Wu(o, !0, 1, void 0, r && !Iu(o) ? n.from : void 0);
  }
  return s.parent == null ? Vu : null;
}
function Vu() {
  return 0;
}
class gr extends An {
  constructor(e, t, i) {
    super(e.state, e.options), this.base = e, this.pos = t, this.context = i;
  }
  get node() {
    return this.context.node;
  }
  static create(e, t, i) {
    return new gr(e, t, i);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  baseIndentFor(e) {
    let t = this.state.doc.lineAt(e.from);
    for (; ; ) {
      let i = e.resolve(t.from);
      for (; i.parent && i.parent.from == i.from; )
        i = i.parent;
      if (Hu(i, e))
        break;
      t = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(t.from);
  }
  continue() {
    return Wa(this.context.next, this.base, this.pos);
  }
}
function Hu(s, e) {
  for (let t = e; t; t = t.parent)
    if (s == t)
      return !0;
  return !1;
}
function zu(s) {
  let e = s.node, t = e.childAfter(e.from), i = e.lastChild;
  if (!t)
    return null;
  let n = s.options.simulateBreak, r = s.state.doc.lineAt(t.from), o = n == null || n <= r.from ? r.to : Math.min(r.to, n);
  for (let l = t.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == i)
      return null;
    if (!a.type.isSkipped) {
      if (a.from >= o)
        return null;
      let f = /^ */.exec(r.text.slice(t.to - r.from))[0].length;
      return { from: t.from, to: t.to + f };
    }
    l = a.to;
  }
}
function Wu(s, e, t, i, n) {
  let r = s.textAfter, o = r.match(/^\s*/)[0].length, l = i && r.slice(o, o + i.length) == i || n == s.pos + o, a = e ? zu(s) : null;
  return a ? l ? s.column(a.from) : s.column(a.to) : s.baseIndent + (l ? 0 : s.unit * t);
}
function _u({ except: s, units: e = 1 } = {}) {
  return (t) => {
    let i = s && s.test(t.textAfter);
    return t.baseIndent + (i ? 0 : e * t.unit);
  };
}
const qu = 200;
function $u() {
  return I.transactionFilter.of((s) => {
    if (!s.docChanged || !s.isUserEvent("input.type") && !s.isUserEvent("input.complete"))
      return s;
    let e = s.startState.languageDataAt("indentOnInput", s.startState.selection.main.head);
    if (!e.length)
      return s;
    let t = s.newDoc, { head: i } = s.newSelection.main, n = t.lineAt(i);
    if (i > n.from + qu)
      return s;
    let r = t.sliceString(n.from, i);
    if (!e.some((f) => f.test(r)))
      return s;
    let { state: o } = s, l = -1, a = [];
    for (let { head: f } of o.selection.ranges) {
      let h = o.doc.lineAt(f);
      if (h.from == l)
        continue;
      l = h.from;
      let c = pr(o, h.from);
      if (c == null)
        continue;
      let u = /^\s*/.exec(h.text)[0], d = gi(o, c);
      u != d && a.push({ from: h.from, to: h.from + u.length, insert: d });
    }
    return a.length ? [s, { changes: a, sequential: !0 }] : s;
  });
}
const Uu = /* @__PURE__ */ new B();
class wi {
  constructor(e, t) {
    this.specs = e;
    let i;
    function n(l) {
      let a = rt.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const r = typeof t.all == "string" ? t.all : t.all ? n(t.all) : void 0, o = t.scope;
    this.scope = o instanceof Ae ? (l) => l.prop(Tt) == o.data : o ? (l) => l == o : void 0, this.style = Va(e.map((l) => ({
      tag: l.tag,
      class: l.class || n(Object.assign({}, l, { tag: null }))
    })), {
      all: r
    }).style, this.module = i ? new rt(i) : null, this.themeType = t.themeType;
  }
  static define(e, t) {
    return new wi(e, t || {});
  }
}
const Fs = /* @__PURE__ */ D.define(), _a = /* @__PURE__ */ D.define({
  combine(s) {
    return s.length ? [s[0]] : null;
  }
});
function Kn(s) {
  let e = s.facet(Fs);
  return e.length ? e : s.facet(_a);
}
function ju(s, e) {
  let t = [Ku], i;
  return s instanceof wi && (s.module && t.push(T.styleModule.of(s.module)), i = s.themeType), e != null && e.fallback ? t.push(_a.of(s)) : i ? t.push(Fs.computeN([T.darkTheme], (n) => n.facet(T.darkTheme) == (i == "dark") ? [s] : [])) : t.push(Fs.of(s)), t;
}
class Qu {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = ae(e.state), this.decorations = this.buildDeco(e, Kn(e.state)), this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let t = ae(e.state), i = Kn(e.state), n = i != Kn(e.startState), { viewport: r } = e.view, o = e.changes.mapPos(this.decoratedTo, 1);
    t.length < r.to && !n && t.type == this.tree.type && o >= r.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = o) : (t != this.tree || e.viewportChanged || n) && (this.tree = t, this.decorations = this.buildDeco(e.view, i), this.decoratedTo = r.to);
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length)
      return E.none;
    let i = new ai();
    for (let { from: n, to: r } of e.visibleRanges)
      Ou(this.tree, t, (o, l, a) => {
        i.add(o, l, this.markCache[a] || (this.markCache[a] = E.mark({ class: a })));
      }, n, r);
    return i.finish();
  }
}
const Ku = /* @__PURE__ */ Ys.high(/* @__PURE__ */ De.fromClass(Qu, {
  decorations: (s) => s.decorations
}));
b.meta, b.link, b.heading, b.emphasis, b.strong, b.strikethrough, b.keyword, b.atom, b.bool, b.url, b.contentSeparator, b.labelName, b.literal, b.inserted, b.string, b.deleted, b.regexp, b.escape, b.string, b.variableName, b.variableName, b.typeName, b.namespace, b.className, b.variableName, b.macroName, b.propertyName, b.comment, b.invalid;
const Gu = /* @__PURE__ */ T.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), qa = 1e4, $a = "()[]{}", Ua = /* @__PURE__ */ D.define({
  combine(s) {
    return bi(s, {
      afterCursor: !0,
      brackets: $a,
      maxScanDistance: qa,
      renderMatch: Ju
    });
  }
}), Xu = /* @__PURE__ */ E.mark({ class: "cm-matchingBracket" }), Yu = /* @__PURE__ */ E.mark({ class: "cm-nonmatchingBracket" });
function Ju(s) {
  let e = [], t = s.matched ? Xu : Yu;
  return e.push(t.range(s.start.from, s.start.to)), s.end && e.push(t.range(s.end.from, s.end.to)), e;
}
const Zu = /* @__PURE__ */ Pe.define({
  create() {
    return E.none;
  },
  update(s, e) {
    if (!e.docChanged && !e.selection)
      return s;
    let t = [], i = e.state.facet(Ua);
    for (let n of e.state.selection.ranges) {
      if (!n.empty)
        continue;
      let r = We(e.state, n.head, -1, i) || n.head > 0 && We(e.state, n.head - 1, 1, i) || i.afterCursor && (We(e.state, n.head, 1, i) || n.head < e.state.doc.length && We(e.state, n.head + 1, -1, i));
      r && (t = t.concat(i.renderMatch(r, e.state)));
    }
    return E.set(t, !0);
  },
  provide: (s) => T.decorations.from(s)
}), ed = [
  Zu,
  Gu
];
function td(s = {}) {
  return [Ua.of(s), ed];
}
const id = /* @__PURE__ */ new B();
function Vs(s, e, t) {
  let i = s.prop(e < 0 ? B.openedBy : B.closedBy);
  if (i)
    return i;
  if (s.name.length == 1) {
    let n = t.indexOf(s.name);
    if (n > -1 && n % 2 == (e < 0 ? 1 : 0))
      return [t[n + e]];
  }
  return null;
}
function Hs(s) {
  let e = s.type.prop(id);
  return e ? e(s.node) : s;
}
function We(s, e, t, i = {}) {
  let n = i.maxScanDistance || qa, r = i.brackets || $a, o = ae(s), l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let f = Vs(a.type, t, r);
    if (f && a.from < a.to) {
      let h = Hs(a);
      if (h && (t > 0 ? e >= h.from && e < h.to : e > h.from && e <= h.to))
        return nd(s, e, t, a, h, f, r);
    }
  }
  return sd(s, e, t, o, l.type, n, r);
}
function nd(s, e, t, i, n, r, o) {
  let l = i.parent, a = { from: n.from, to: n.to }, f = 0, h = l == null ? void 0 : l.cursor();
  if (h && (t < 0 ? h.childBefore(i.from) : h.childAfter(i.to)))
    do
      if (t < 0 ? h.to <= i.from : h.from >= i.to) {
        if (f == 0 && r.indexOf(h.type.name) > -1 && h.from < h.to) {
          let c = Hs(h);
          return { start: a, end: c ? { from: c.from, to: c.to } : void 0, matched: !0 };
        } else if (Vs(h.type, t, o))
          f++;
        else if (Vs(h.type, -t, o)) {
          if (f == 0) {
            let c = Hs(h);
            return {
              start: a,
              end: c && c.from < c.to ? { from: c.from, to: c.to } : void 0,
              matched: !1
            };
          }
          f--;
        }
      }
    while (t < 0 ? h.prevSibling() : h.nextSibling());
  return { start: a, matched: !1 };
}
function sd(s, e, t, i, n, r, o) {
  let l = t < 0 ? s.sliceDoc(e - 1, e) : s.sliceDoc(e, e + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != t > 0)
    return null;
  let f = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e }, h = s.doc.iterRange(e, t > 0 ? s.doc.length : 0), c = 0;
  for (let u = 0; !h.next().done && u <= r; ) {
    let d = h.value;
    t < 0 && (u += d.length);
    let p = e + u * t;
    for (let g = t > 0 ? 0 : d.length - 1, m = t > 0 ? d.length : -1; g != m; g += t) {
      let y = o.indexOf(d[g]);
      if (!(y < 0 || i.resolveInner(p + g, 1).type != n))
        if (y % 2 == 0 == t > 0)
          c++;
        else {
          if (c == 1)
            return { start: f, end: { from: p + g, to: p + g + 1 }, matched: y >> 1 == a >> 1 };
          c--;
        }
    }
    t > 0 && (u += d.length);
  }
  return h.done ? { start: f, matched: !1 } : null;
}
const rd = /* @__PURE__ */ Object.create(null), Bo = [ue.none], Ro = [], Eo = /* @__PURE__ */ Object.create(null), od = /* @__PURE__ */ Object.create(null);
for (let [s, e] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"]
])
  od[s] = /* @__PURE__ */ ld(rd, e);
function Gn(s, e) {
  Ro.indexOf(s) > -1 || (Ro.push(s), console.warn(e));
}
function ld(s, e) {
  let t = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let f of l.split(".")) {
      let h = s[f] || b[f];
      h ? typeof h == "function" ? a.length ? a = a.map(h) : Gn(f, `Modifier ${f} used at start of tag`) : a.length ? Gn(f, `Tag ${f} used as modifier`) : a = Array.isArray(h) ? h : [h] : Gn(f, `Unknown highlighting tag ${f}`);
    }
    for (let f of a)
      t.push(f);
  }
  if (!t.length)
    return 0;
  let i = e.replace(/ /g, "_"), n = i + " " + t.map((l) => l.id), r = Eo[n];
  if (r)
    return r.id;
  let o = Eo[n] = ue.define({
    id: Bo.length,
    name: i,
    props: [Ia({ [i]: t })]
  });
  return Bo.push(o), o.id;
}
Q.RTL, Q.LTR;
const ad = (s) => {
  let { state: e } = s, t = e.doc.lineAt(e.selection.main.from), i = yr(s.state, t.from);
  return i.line ? hd(s) : i.block ? cd(s) : !1;
};
function mr(s, e) {
  return ({ state: t, dispatch: i }) => {
    if (t.readOnly)
      return !1;
    let n = s(e, t);
    return n ? (i(t.update(n)), !0) : !1;
  };
}
const hd = /* @__PURE__ */ mr(pd, 0), fd = /* @__PURE__ */ mr(ja, 0), cd = /* @__PURE__ */ mr((s, e) => ja(s, e, dd(e)), 0);
function yr(s, e) {
  let t = s.languageDataAt("commentTokens", e);
  return t.length ? t[0] : {};
}
const Gt = 50;
function ud(s, { open: e, close: t }, i, n) {
  let r = s.sliceDoc(i - Gt, i), o = s.sliceDoc(n, n + Gt), l = /\s*$/.exec(r)[0].length, a = /^\s*/.exec(o)[0].length, f = r.length - l;
  if (r.slice(f - e.length, f) == e && o.slice(a, a + t.length) == t)
    return {
      open: { pos: i - l, margin: l && 1 },
      close: { pos: n + a, margin: a && 1 }
    };
  let h, c;
  n - i <= 2 * Gt ? h = c = s.sliceDoc(i, n) : (h = s.sliceDoc(i, i + Gt), c = s.sliceDoc(n - Gt, n));
  let u = /^\s*/.exec(h)[0].length, d = /\s*$/.exec(c)[0].length, p = c.length - d - t.length;
  return h.slice(u, u + e.length) == e && c.slice(p, p + t.length) == t ? {
    open: {
      pos: i + u + e.length,
      margin: /\s/.test(h.charAt(u + e.length)) ? 1 : 0
    },
    close: {
      pos: n - d - t.length,
      margin: /\s/.test(c.charAt(p - 1)) ? 1 : 0
    }
  } : null;
}
function dd(s) {
  let e = [];
  for (let t of s.selection.ranges) {
    let i = s.doc.lineAt(t.from), n = t.to <= i.to ? i : s.doc.lineAt(t.to);
    n.from > i.from && n.from == t.to && (n = t.to == i.to + 1 ? i : s.doc.lineAt(t.to - 1));
    let r = e.length - 1;
    r >= 0 && e[r].to > i.from ? e[r].to = n.to : e.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: n.to });
  }
  return e;
}
function ja(s, e, t = e.selection.ranges) {
  let i = t.map((r) => yr(e, r.from).block);
  if (!i.every((r) => r))
    return null;
  let n = t.map((r, o) => ud(e, i[o], r.from, r.to));
  if (s != 2 && !n.every((r) => r))
    return { changes: e.changes(t.map((r, o) => n[o] ? [] : [{ from: r.from, insert: i[o].open + " " }, { from: r.to, insert: " " + i[o].close }])) };
  if (s != 1 && n.some((r) => r)) {
    let r = [];
    for (let o = 0, l; o < n.length; o++)
      if (l = n[o]) {
        let a = i[o], { open: f, close: h } = l;
        r.push({ from: f.pos - a.open.length, to: f.pos + f.margin }, { from: h.pos - h.margin, to: h.pos + a.close.length });
      }
    return { changes: r };
  }
  return null;
}
function pd(s, e, t = e.selection.ranges) {
  let i = [], n = -1;
  for (let { from: r, to: o } of t) {
    let l = i.length, a = 1e9, f = yr(e, r).line;
    if (!!f) {
      for (let h = r; h <= o; ) {
        let c = e.doc.lineAt(h);
        if (c.from > n && (r == o || o > c.from)) {
          n = c.from;
          let u = /^\s*/.exec(c.text)[0].length, d = u == c.length, p = c.text.slice(u, u + f.length) == f ? u : -1;
          u < c.text.length && u < a && (a = u), i.push({ line: c, comment: p, token: f, indent: u, empty: d, single: !1 });
        }
        h = c.to + 1;
      }
      if (a < 1e9)
        for (let h = l; h < i.length; h++)
          i[h].indent < i[h].line.text.length && (i[h].indent = a);
      i.length == l + 1 && (i[l].single = !0);
    }
  }
  if (s != 2 && i.some((r) => r.comment < 0 && (!r.empty || r.single))) {
    let r = [];
    for (let { line: l, token: a, indent: f, empty: h, single: c } of i)
      (c || !h) && r.push({ from: l.from + f, insert: a + " " });
    let o = e.changes(r);
    return { changes: o, selection: e.selection.map(o, 1) };
  } else if (s != 1 && i.some((r) => r.comment >= 0)) {
    let r = [];
    for (let { line: o, comment: l, token: a } of i)
      if (l >= 0) {
        let f = o.from + l, h = f + a.length;
        o.text[h - o.from] == " " && h++, r.push({ from: f, to: h });
      }
    return { changes: r };
  }
  return null;
}
const zs = /* @__PURE__ */ Ye.define(), gd = /* @__PURE__ */ Ye.define(), md = /* @__PURE__ */ D.define(), Qa = /* @__PURE__ */ D.define({
  combine(s) {
    return bi(s, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (e, t) => t
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (e, t) => (i, n) => e(i, n) || t(i, n)
    });
  }
}), Ka = /* @__PURE__ */ Pe.define({
  create() {
    return _e.empty;
  },
  update(s, e) {
    let t = e.state.facet(Qa), i = e.annotation(zs);
    if (i) {
      let a = ce.fromTransaction(e, i.selection), f = i.side, h = f == 0 ? s.undone : s.done;
      return a ? h = dn(h, h.length, t.minDepth, a) : h = Ya(h, e.startState.selection), new _e(f == 0 ? i.rest : h, f == 0 ? h : i.rest);
    }
    let n = e.annotation(gd);
    if ((n == "full" || n == "before") && (s = s.isolate()), e.annotation(Y.addToHistory) === !1)
      return e.changes.empty ? s : s.addMapping(e.changes.desc);
    let r = ce.fromTransaction(e), o = e.annotation(Y.time), l = e.annotation(Y.userEvent);
    return r ? s = s.addChanges(r, o, l, t, e) : e.selection && (s = s.addSelection(e.startState.selection, o, l, t.newGroupDelay)), (n == "full" || n == "after") && (s = s.isolate()), s;
  },
  toJSON(s) {
    return { done: s.done.map((e) => e.toJSON()), undone: s.undone.map((e) => e.toJSON()) };
  },
  fromJSON(s) {
    return new _e(s.done.map(ce.fromJSON), s.undone.map(ce.fromJSON));
  }
});
function yd(s = {}) {
  return [
    Ka,
    Qa.of(s),
    T.domEventHandlers({
      beforeinput(e, t) {
        let i = e.inputType == "historyUndo" ? Ga : e.inputType == "historyRedo" ? Ws : null;
        return i ? (e.preventDefault(), i(t)) : !1;
      }
    })
  ];
}
function On(s, e) {
  return function({ state: t, dispatch: i }) {
    if (!e && t.readOnly)
      return !1;
    let n = t.field(Ka, !1);
    if (!n)
      return !1;
    let r = n.pop(s, t, e);
    return r ? (i(r), !0) : !1;
  };
}
const Ga = /* @__PURE__ */ On(0, !1), Ws = /* @__PURE__ */ On(1, !1), bd = /* @__PURE__ */ On(0, !0), xd = /* @__PURE__ */ On(1, !0);
class ce {
  constructor(e, t, i, n, r) {
    this.changes = e, this.effects = t, this.mapped = i, this.startSelection = n, this.selectionsAfter = r;
  }
  setSelAfter(e) {
    return new ce(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, t, i;
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
      startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(),
      selectionsAfter: this.selectionsAfter.map((n) => n.toJSON())
    };
  }
  static fromJSON(e) {
    return new ce(e.changes && X.fromJSON(e.changes), [], e.mapped && qe.fromJSON(e.mapped), e.startSelection && k.fromJSON(e.startSelection), e.selectionsAfter.map(k.fromJSON));
  }
  static fromTransaction(e, t) {
    let i = be;
    for (let n of e.startState.facet(md)) {
      let r = n(e);
      r.length && (i = i.concat(r));
    }
    return !i.length && e.changes.empty ? null : new ce(e.changes.invert(e.startState.doc), i, void 0, t || e.startState.selection, be);
  }
  static selection(e) {
    return new ce(void 0, be, void 0, void 0, e);
  }
}
function dn(s, e, t, i) {
  let n = e + 1 > t + 20 ? e - t - 1 : 0, r = s.slice(n, e);
  return r.push(i), r;
}
function kd(s, e) {
  let t = [], i = !1;
  return s.iterChangedRanges((n, r) => t.push(n, r)), e.iterChangedRanges((n, r, o, l) => {
    for (let a = 0; a < t.length; ) {
      let f = t[a++], h = t[a++];
      l >= f && o <= h && (i = !0);
    }
  }), i;
}
function wd(s, e) {
  return s.ranges.length == e.ranges.length && s.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0;
}
function Xa(s, e) {
  return s.length ? e.length ? s.concat(e) : s : e;
}
const be = [], vd = 200;
function Ya(s, e) {
  if (s.length) {
    let t = s[s.length - 1], i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - vd));
    return i.length && i[i.length - 1].eq(e) ? s : (i.push(e), dn(s, s.length - 1, 1e9, t.setSelAfter(i)));
  } else
    return [ce.selection([e])];
}
function Sd(s) {
  let e = s[s.length - 1], t = s.slice();
  return t[s.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
function Xn(s, e) {
  if (!s.length)
    return s;
  let t = s.length, i = be;
  for (; t; ) {
    let n = Cd(s[t - 1], e, i);
    if (n.changes && !n.changes.empty || n.effects.length) {
      let r = s.slice(0, t);
      return r[t - 1] = n, r;
    } else
      e = n.mapped, t--, i = n.selectionsAfter;
  }
  return i.length ? [ce.selection(i)] : be;
}
function Cd(s, e, t) {
  let i = Xa(s.selectionsAfter.length ? s.selectionsAfter.map((l) => l.map(e)) : be, t);
  if (!s.changes)
    return ce.selection(i);
  let n = s.changes.map(e), r = e.mapDesc(s.changes, !0), o = s.mapped ? s.mapped.composeDesc(r) : r;
  return new ce(n, W.mapEffects(s.effects, e), o, s.startSelection.map(r), i);
}
const Ad = /^(input\.type|delete)($|\.)/;
class _e {
  constructor(e, t, i = 0, n = void 0) {
    this.done = e, this.undone = t, this.prevTime = i, this.prevUserEvent = n;
  }
  isolate() {
    return this.prevTime ? new _e(this.done, this.undone) : this;
  }
  addChanges(e, t, i, n, r) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!i || Ad.test(i)) && (!l.selectionsAfter.length && t - this.prevTime < n.newGroupDelay && n.joinToEvent(r, kd(l.changes, e.changes)) || i == "input.type.compose") ? o = dn(o, o.length - 1, n.minDepth, new ce(e.changes.compose(l.changes), Xa(W.mapEffects(e.effects, l.changes), l.effects), l.mapped, l.startSelection, be)) : o = dn(o, o.length, n.minDepth, e), new _e(o, be, t, i);
  }
  addSelection(e, t, i, n) {
    let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : be;
    return r.length > 0 && t - this.prevTime < n && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && wd(r[r.length - 1], e) ? this : new _e(Ya(this.done, e), this.undone, t, i);
  }
  addMapping(e) {
    return new _e(Xn(this.done, e), Xn(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, i) {
    let n = e == 0 ? this.done : this.undone;
    if (n.length == 0)
      return null;
    let r = n[n.length - 1], o = r.selectionsAfter[0] || t.selection;
    if (i && r.selectionsAfter.length)
      return t.update({
        selection: r.selectionsAfter[r.selectionsAfter.length - 1],
        annotations: zs.of({ side: e, rest: Sd(n), selection: o }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (r.changes) {
      let l = n.length == 1 ? be : n.slice(0, n.length - 1);
      return r.mapped && (l = Xn(l, r.mapped)), t.update({
        changes: r.changes,
        selection: r.startSelection,
        effects: r.effects,
        annotations: zs.of({ side: e, rest: l, selection: o }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
_e.empty = /* @__PURE__ */ new _e(be, be);
const Od = [
  { key: "Mod-z", run: Ga, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: Ws, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: Ws, preventDefault: !0 },
  { key: "Mod-u", run: bd, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: xd, preventDefault: !0 }
];
function Wt(s, e) {
  return k.create(s.ranges.map(e), s.mainIndex);
}
function Ue(s, e) {
  return s.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function Be({ state: s, dispatch: e }, t) {
  let i = Wt(s.selection, t);
  return i.eq(s.selection, !0) ? !1 : (e(Ue(s, i)), !0);
}
function Mn(s, e) {
  return k.cursor(e ? s.to : s.from);
}
function Ja(s, e) {
  return Be(s, (t) => t.empty ? s.moveByChar(t, e) : Mn(t, e));
}
function re(s) {
  return s.textDirectionAt(s.state.selection.main.head) == Q.LTR;
}
const Za = (s) => Ja(s, !re(s)), eh = (s) => Ja(s, re(s));
function th(s, e) {
  return Be(s, (t) => t.empty ? s.moveByGroup(t, e) : Mn(t, e));
}
const Md = (s) => th(s, !re(s)), Dd = (s) => th(s, re(s));
function Td(s, e, t) {
  if (e.type.prop(t))
    return !0;
  let i = e.to - e.from;
  return i && (i > 2 || /[^\s,.;:]/.test(s.sliceDoc(e.from, e.to))) || e.firstChild;
}
function Dn(s, e, t) {
  let i = ae(s).resolveInner(e.head), n = t ? B.closedBy : B.openedBy;
  for (let a = e.head; ; ) {
    let f = t ? i.childAfter(a) : i.childBefore(a);
    if (!f)
      break;
    Td(s, f, n) ? i = f : a = t ? f.to : f.from;
  }
  let r = i.type.prop(n), o, l;
  return r && (o = t ? We(s, i.from, 1) : We(s, i.to, -1)) && o.matched ? l = t ? o.end.to : o.end.from : l = t ? i.to : i.from, k.cursor(l, t ? -1 : 1);
}
const Pd = (s) => Be(s, (e) => Dn(s.state, e, !re(s))), Bd = (s) => Be(s, (e) => Dn(s.state, e, re(s)));
function ih(s, e) {
  return Be(s, (t) => {
    if (!t.empty)
      return Mn(t, e);
    let i = s.moveVertically(t, e);
    return i.head != t.head ? i : s.moveToLineBoundary(t, e);
  });
}
const nh = (s) => ih(s, !1), sh = (s) => ih(s, !0);
function rh(s) {
  let e = s.scrollDOM.clientHeight < s.scrollDOM.scrollHeight - 2, t = 0, i = 0, n;
  if (e) {
    for (let r of s.state.facet(T.scrollMargins)) {
      let o = r(s);
      o != null && o.top && (t = Math.max(o == null ? void 0 : o.top, t)), o != null && o.bottom && (i = Math.max(o == null ? void 0 : o.bottom, i));
    }
    n = s.scrollDOM.clientHeight - t - i;
  } else
    n = (s.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: t,
    marginBottom: i,
    selfScroll: e,
    height: Math.max(s.defaultLineHeight, n - 5)
  };
}
function oh(s, e) {
  let t = rh(s), { state: i } = s, n = Wt(i.selection, (o) => o.empty ? s.moveVertically(o, e, t.height) : Mn(o, e));
  if (n.eq(i.selection))
    return !1;
  let r;
  if (t.selfScroll) {
    let o = s.coordsAtPos(i.selection.main.head), l = s.scrollDOM.getBoundingClientRect(), a = l.top + t.marginTop, f = l.bottom - t.marginBottom;
    o && o.top > a && o.bottom < f && (r = T.scrollIntoView(n.main.head, { y: "start", yMargin: o.top - a }));
  }
  return s.dispatch(Ue(i, n), { effects: r }), !0;
}
const Lo = (s) => oh(s, !1), _s = (s) => oh(s, !0);
function ft(s, e, t) {
  let i = s.lineBlockAt(e.head), n = s.moveToLineBoundary(e, t);
  if (n.head == e.head && n.head != (t ? i.to : i.from) && (n = s.moveToLineBoundary(e, t, !1)), !t && n.head == i.from && i.length) {
    let r = /^\s*/.exec(s.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    r && e.head != i.from + r && (n = k.cursor(i.from + r));
  }
  return n;
}
const Rd = (s) => Be(s, (e) => ft(s, e, !0)), Ed = (s) => Be(s, (e) => ft(s, e, !1)), Ld = (s) => Be(s, (e) => ft(s, e, !re(s))), Nd = (s) => Be(s, (e) => ft(s, e, re(s))), Id = (s) => Be(s, (e) => k.cursor(s.lineBlockAt(e.head).from, 1)), Fd = (s) => Be(s, (e) => k.cursor(s.lineBlockAt(e.head).to, -1));
function Vd(s, e, t) {
  let i = !1, n = Wt(s.selection, (r) => {
    let o = We(s, r.head, -1) || We(s, r.head, 1) || r.head > 0 && We(s, r.head - 1, 1) || r.head < s.doc.length && We(s, r.head + 1, -1);
    if (!o || !o.end)
      return r;
    i = !0;
    let l = o.start.from == r.head ? o.end.to : o.end.from;
    return t ? k.range(r.anchor, l) : k.cursor(l);
  });
  return i ? (e(Ue(s, n)), !0) : !1;
}
const Hd = ({ state: s, dispatch: e }) => Vd(s, e, !1);
function Se(s, e) {
  let t = Wt(s.state.selection, (i) => {
    let n = e(i);
    return k.range(i.anchor, n.head, n.goalColumn, n.bidiLevel || void 0);
  });
  return t.eq(s.state.selection) ? !1 : (s.dispatch(Ue(s.state, t)), !0);
}
function lh(s, e) {
  return Se(s, (t) => s.moveByChar(t, e));
}
const ah = (s) => lh(s, !re(s)), hh = (s) => lh(s, re(s));
function fh(s, e) {
  return Se(s, (t) => s.moveByGroup(t, e));
}
const zd = (s) => fh(s, !re(s)), Wd = (s) => fh(s, re(s)), _d = (s) => Se(s, (e) => Dn(s.state, e, !re(s))), qd = (s) => Se(s, (e) => Dn(s.state, e, re(s)));
function ch(s, e) {
  return Se(s, (t) => s.moveVertically(t, e));
}
const uh = (s) => ch(s, !1), dh = (s) => ch(s, !0);
function ph(s, e) {
  return Se(s, (t) => s.moveVertically(t, e, rh(s).height));
}
const No = (s) => ph(s, !1), Io = (s) => ph(s, !0), $d = (s) => Se(s, (e) => ft(s, e, !0)), Ud = (s) => Se(s, (e) => ft(s, e, !1)), jd = (s) => Se(s, (e) => ft(s, e, !re(s))), Qd = (s) => Se(s, (e) => ft(s, e, re(s))), Kd = (s) => Se(s, (e) => k.cursor(s.lineBlockAt(e.head).from)), Gd = (s) => Se(s, (e) => k.cursor(s.lineBlockAt(e.head).to)), Fo = ({ state: s, dispatch: e }) => (e(Ue(s, { anchor: 0 })), !0), Vo = ({ state: s, dispatch: e }) => (e(Ue(s, { anchor: s.doc.length })), !0), Ho = ({ state: s, dispatch: e }) => (e(Ue(s, { anchor: s.selection.main.anchor, head: 0 })), !0), zo = ({ state: s, dispatch: e }) => (e(Ue(s, { anchor: s.selection.main.anchor, head: s.doc.length })), !0), Xd = ({ state: s, dispatch: e }) => (e(s.update({ selection: { anchor: 0, head: s.doc.length }, userEvent: "select" })), !0), Yd = ({ state: s, dispatch: e }) => {
  let t = Tn(s).map(({ from: i, to: n }) => k.range(i, Math.min(n + 1, s.doc.length)));
  return e(s.update({ selection: k.create(t), userEvent: "select" })), !0;
}, Jd = ({ state: s, dispatch: e }) => {
  let t = Wt(s.selection, (i) => {
    let n = ae(s), r = n.resolveStack(i.from, 1);
    if (i.empty) {
      let o = n.resolveStack(i.from, -1);
      o.node.from >= r.node.from && o.node.to <= r.node.to && (r = o);
    }
    for (let o = r; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < i.from && l.to >= i.to || l.to > i.to && l.from <= i.from) && o.next)
        return k.range(l.to, l.from);
    }
    return i;
  });
  return t.eq(s.selection) ? !1 : (e(Ue(s, t)), !0);
}, Zd = ({ state: s, dispatch: e }) => {
  let t = s.selection, i = null;
  return t.ranges.length > 1 ? i = k.create([t.main]) : t.main.empty || (i = k.create([k.cursor(t.main.head)])), i ? (e(Ue(s, i)), !0) : !1;
};
function vi(s, e) {
  if (s.state.readOnly)
    return !1;
  let t = "delete.selection", { state: i } = s, n = i.changeByRange((r) => {
    let { from: o, to: l } = r;
    if (o == l) {
      let a = e(r);
      a < o ? (t = "delete.backward", a = zi(s, a, !1)) : a > o && (t = "delete.forward", a = zi(s, a, !0)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = zi(s, o, !1), l = zi(s, l, !0);
    return o == l ? { range: r } : { changes: { from: o, to: l }, range: k.cursor(o, o < r.head ? -1 : 1) };
  });
  return n.changes.empty ? !1 : (s.dispatch(i.update(n, {
    scrollIntoView: !0,
    userEvent: t,
    effects: t == "delete.selection" ? T.announce.of(i.phrase("Selection deleted")) : void 0
  })), !0);
}
function zi(s, e, t) {
  if (s instanceof T)
    for (let i of s.state.facet(T.atomicRanges).map((n) => n(s)))
      i.between(e, e, (n, r) => {
        n < e && r > e && (e = t ? r : n);
      });
  return e;
}
const gh = (s, e, t) => vi(s, (i) => {
  let n = i.from, { state: r } = s, o = r.doc.lineAt(n), l, a;
  if (t && !e && n > o.from && n < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, n - o.from))) {
    if (l[l.length - 1] == "	")
      return n - 1;
    let f = kn(l, r.tabSize), h = f % un(r) || un(r);
    for (let c = 0; c < h && l[l.length - 1 - c] == " "; c++)
      n--;
    a = n;
  } else
    a = oe(o.text, n - o.from, e, e) + o.from, a == n && o.number != (e ? r.doc.lines : 1) ? a += e ? 1 : -1 : !e && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, n - o.from)) && (a = oe(o.text, a - o.from, !1, !1) + o.from);
  return a;
}), qs = (s) => gh(s, !1, !0), mh = (s) => gh(s, !0, !1), yh = (s, e) => vi(s, (t) => {
  let i = t.head, { state: n } = s, r = n.doc.lineAt(i), o = n.charCategorizer(i);
  for (let l = null; ; ) {
    if (i == (e ? r.to : r.from)) {
      i == t.head && r.number != (e ? n.doc.lines : 1) && (i += e ? 1 : -1);
      break;
    }
    let a = oe(r.text, i - r.from, e) + r.from, f = r.text.slice(Math.min(i, a) - r.from, Math.max(i, a) - r.from), h = o(f);
    if (l != null && h != l)
      break;
    (f != " " || i != t.head) && (l = h), i = a;
  }
  return i;
}), bh = (s) => yh(s, !1), ep = (s) => yh(s, !0), tp = (s) => vi(s, (e) => {
  let t = s.lineBlockAt(e.head).to;
  return e.head < t ? t : Math.min(s.state.doc.length, e.head + 1);
}), ip = (s) => vi(s, (e) => {
  let t = s.moveToLineBoundary(e, !1).head;
  return e.head > t ? t : Math.max(0, e.head - 1);
}), np = (s) => vi(s, (e) => {
  let t = s.moveToLineBoundary(e, !0).head;
  return e.head < t ? t : Math.min(s.state.doc.length, e.head + 1);
}), sp = ({ state: s, dispatch: e }) => {
  if (s.readOnly)
    return !1;
  let t = s.changeByRange((i) => ({
    changes: { from: i.from, to: i.to, insert: L.of(["", ""]) },
    range: k.cursor(i.from)
  }));
  return e(s.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
}, rp = ({ state: s, dispatch: e }) => {
  if (s.readOnly)
    return !1;
  let t = s.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == s.doc.length)
      return { range: i };
    let n = i.from, r = s.doc.lineAt(n), o = n == r.from ? n - 1 : oe(r.text, n - r.from, !1) + r.from, l = n == r.to ? n + 1 : oe(r.text, n - r.from, !0) + r.from;
    return {
      changes: { from: o, to: l, insert: s.doc.slice(n, l).append(s.doc.slice(o, n)) },
      range: k.cursor(l)
    };
  });
  return t.changes.empty ? !1 : (e(s.update(t, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function Tn(s) {
  let e = [], t = -1;
  for (let i of s.selection.ranges) {
    let n = s.doc.lineAt(i.from), r = s.doc.lineAt(i.to);
    if (!i.empty && i.to == r.from && (r = s.doc.lineAt(i.to - 1)), t >= n.number) {
      let o = e[e.length - 1];
      o.to = r.to, o.ranges.push(i);
    } else
      e.push({ from: n.from, to: r.to, ranges: [i] });
    t = r.number + 1;
  }
  return e;
}
function xh(s, e, t) {
  if (s.readOnly)
    return !1;
  let i = [], n = [];
  for (let r of Tn(s)) {
    if (t ? r.to == s.doc.length : r.from == 0)
      continue;
    let o = s.doc.lineAt(t ? r.to + 1 : r.from - 1), l = o.length + 1;
    if (t) {
      i.push({ from: r.to, to: o.to }, { from: r.from, insert: o.text + s.lineBreak });
      for (let a of r.ranges)
        n.push(k.range(Math.min(s.doc.length, a.anchor + l), Math.min(s.doc.length, a.head + l)));
    } else {
      i.push({ from: o.from, to: r.from }, { from: r.to, insert: s.lineBreak + o.text });
      for (let a of r.ranges)
        n.push(k.range(a.anchor - l, a.head - l));
    }
  }
  return i.length ? (e(s.update({
    changes: i,
    scrollIntoView: !0,
    selection: k.create(n, s.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const op = ({ state: s, dispatch: e }) => xh(s, e, !1), lp = ({ state: s, dispatch: e }) => xh(s, e, !0);
function kh(s, e, t) {
  if (s.readOnly)
    return !1;
  let i = [];
  for (let n of Tn(s))
    t ? i.push({ from: n.from, insert: s.doc.slice(n.from, n.to) + s.lineBreak }) : i.push({ from: n.to, insert: s.lineBreak + s.doc.slice(n.from, n.to) });
  return e(s.update({ changes: i, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const ap = ({ state: s, dispatch: e }) => kh(s, e, !1), hp = ({ state: s, dispatch: e }) => kh(s, e, !0), fp = (s) => {
  if (s.state.readOnly)
    return !1;
  let { state: e } = s, t = e.changes(Tn(e).map(({ from: n, to: r }) => (n > 0 ? n-- : r < e.doc.length && r++, { from: n, to: r }))), i = Wt(e.selection, (n) => {
    let r;
    if (s.lineWrapping) {
      let o = s.lineBlockAt(n.head), l = s.coordsAtPos(n.head, n.assoc || 1);
      l && (r = o.bottom + s.documentTop - l.bottom + s.defaultLineHeight / 2);
    }
    return s.moveVertically(n, !0, r);
  }).map(t);
  return s.dispatch({ changes: t, selection: i, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function cp(s, e) {
  if (/\(\)|\[\]|\{\}/.test(s.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let t = ae(s).resolveInner(e), i = t.childBefore(e), n = t.childAfter(e), r;
  return i && n && i.to <= e && n.from >= e && (r = i.type.prop(B.closedBy)) && r.indexOf(n.name) > -1 && s.doc.lineAt(i.to).from == s.doc.lineAt(n.from).from && !/\S/.test(s.sliceDoc(i.to, n.from)) ? { from: i.to, to: n.from } : null;
}
const Wo = /* @__PURE__ */ wh(!1), up = /* @__PURE__ */ wh(!0);
function wh(s) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly)
      return !1;
    let i = e.changeByRange((n) => {
      let { from: r, to: o } = n, l = e.doc.lineAt(r), a = !s && r == o && cp(e, r);
      s && (r = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let f = new An(e, { simulateBreak: r, simulateDoubleBreak: !!a }), h = pr(f, r);
      for (h == null && (h = kn(/^\s*/.exec(e.doc.lineAt(r).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: r, to: o } = a : r > l.from && r < l.from + 100 && !/\S/.test(l.text.slice(0, r)) && (r = l.from);
      let c = ["", gi(e, h)];
      return a && c.push(gi(e, f.lineIndent(l.from, -1))), {
        changes: { from: r, to: o, insert: L.of(c) },
        range: k.cursor(r + 1 + c[1].length)
      };
    });
    return t(e.update(i, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function br(s, e) {
  let t = -1;
  return s.changeByRange((i) => {
    let n = [];
    for (let o = i.from; o <= i.to; ) {
      let l = s.doc.lineAt(o);
      l.number > t && (i.empty || i.to > l.from) && (e(l, n, i), t = l.number), o = l.to + 1;
    }
    let r = s.changes(n);
    return {
      changes: n,
      range: k.range(r.mapPos(i.anchor, 1), r.mapPos(i.head, 1))
    };
  });
}
const dp = ({ state: s, dispatch: e }) => {
  if (s.readOnly)
    return !1;
  let t = /* @__PURE__ */ Object.create(null), i = new An(s, { overrideIndentation: (r) => {
    let o = t[r];
    return o == null ? -1 : o;
  } }), n = br(s, (r, o, l) => {
    let a = pr(i, r.from);
    if (a == null)
      return;
    /\S/.test(r.text) || (a = 0);
    let f = /^\s*/.exec(r.text)[0], h = gi(s, a);
    (f != h || l.from < r.from + f.length) && (t[r.from] = a, o.push({ from: r.from, to: r.from + f.length, insert: h }));
  });
  return n.changes.empty || e(s.update(n, { userEvent: "indent" })), !0;
}, vh = ({ state: s, dispatch: e }) => s.readOnly ? !1 : (e(s.update(br(s, (t, i) => {
  i.push({ from: t.from, insert: s.facet(Cn) });
}), { userEvent: "input.indent" })), !0), Sh = ({ state: s, dispatch: e }) => s.readOnly ? !1 : (e(s.update(br(s, (t, i) => {
  let n = /^\s*/.exec(t.text)[0];
  if (!n)
    return;
  let r = kn(n, s.tabSize), o = 0, l = gi(s, Math.max(0, r - un(s)));
  for (; o < n.length && o < l.length && n.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  i.push({ from: t.from + o, to: t.from + n.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), pp = (s) => (s.setTabFocusMode(), !0), gp = [
  { key: "Ctrl-b", run: Za, shift: ah, preventDefault: !0 },
  { key: "Ctrl-f", run: eh, shift: hh },
  { key: "Ctrl-p", run: nh, shift: uh },
  { key: "Ctrl-n", run: sh, shift: dh },
  { key: "Ctrl-a", run: Id, shift: Kd },
  { key: "Ctrl-e", run: Fd, shift: Gd },
  { key: "Ctrl-d", run: mh },
  { key: "Ctrl-h", run: qs },
  { key: "Ctrl-k", run: tp },
  { key: "Ctrl-Alt-h", run: bh },
  { key: "Ctrl-o", run: sp },
  { key: "Ctrl-t", run: rp },
  { key: "Ctrl-v", run: _s }
], mp = /* @__PURE__ */ [
  { key: "ArrowLeft", run: Za, shift: ah, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: Md, shift: zd, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: Ld, shift: jd, preventDefault: !0 },
  { key: "ArrowRight", run: eh, shift: hh, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: Dd, shift: Wd, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: Nd, shift: Qd, preventDefault: !0 },
  { key: "ArrowUp", run: nh, shift: uh, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: Fo, shift: Ho },
  { mac: "Ctrl-ArrowUp", run: Lo, shift: No },
  { key: "ArrowDown", run: sh, shift: dh, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: Vo, shift: zo },
  { mac: "Ctrl-ArrowDown", run: _s, shift: Io },
  { key: "PageUp", run: Lo, shift: No },
  { key: "PageDown", run: _s, shift: Io },
  { key: "Home", run: Ed, shift: Ud, preventDefault: !0 },
  { key: "Mod-Home", run: Fo, shift: Ho },
  { key: "End", run: Rd, shift: $d, preventDefault: !0 },
  { key: "Mod-End", run: Vo, shift: zo },
  { key: "Enter", run: Wo, shift: Wo },
  { key: "Mod-a", run: Xd },
  { key: "Backspace", run: qs, shift: qs },
  { key: "Delete", run: mh },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: bh },
  { key: "Mod-Delete", mac: "Alt-Delete", run: ep },
  { mac: "Mod-Backspace", run: ip },
  { mac: "Mod-Delete", run: np }
].concat(/* @__PURE__ */ gp.map((s) => ({ mac: s.key, run: s.run, shift: s.shift }))), yp = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: Pd, shift: _d },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: Bd, shift: qd },
  { key: "Alt-ArrowUp", run: op },
  { key: "Shift-Alt-ArrowUp", run: ap },
  { key: "Alt-ArrowDown", run: lp },
  { key: "Shift-Alt-ArrowDown", run: hp },
  { key: "Escape", run: Zd },
  { key: "Mod-Enter", run: up },
  { key: "Alt-l", mac: "Ctrl-l", run: Yd },
  { key: "Mod-i", run: Jd, preventDefault: !0 },
  { key: "Mod-[", run: Sh },
  { key: "Mod-]", run: vh },
  { key: "Mod-Alt-\\", run: dp },
  { key: "Shift-Mod-k", run: fp },
  { key: "Shift-Mod-\\", run: Hd },
  { key: "Mod-/", run: ad },
  { key: "Alt-A", run: fd },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: pp }
].concat(mp), bp = { key: "Tab", run: vh, shift: Sh }, _o = typeof String.prototype.normalize == "function" ? (s) => s.normalize("NFKD") : (s) => s;
class Ch {
  constructor(e, t, i = 0, n = e.length, r, o) {
    this.test = o, this.value = { from: 0, to: 0 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(i, n), this.bufferStart = i, this.normalize = r ? (l) => r(_o(l)) : _o, this.query = this.normalize(t);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return ge(this.buffer, this.bufferPos);
  }
  next() {
    for (; this.matches.length; )
      this.matches.pop();
    return this.nextOverlapping();
  }
  nextOverlapping() {
    for (; ; ) {
      let e = this.peek();
      if (e < 0)
        return this.done = !0, this;
      let t = Ks(e), i = this.bufferStart + this.bufferPos;
      this.bufferPos += Ve(e);
      let n = this.normalize(t);
      if (n.length)
        for (let r = 0, o = i; ; r++) {
          let l = n.charCodeAt(r), a = this.match(l, o, this.bufferPos + this.bufferStart);
          if (r == n.length - 1) {
            if (a)
              return this.value = a, this;
            break;
          }
          o == i && r < t.length && t.charCodeAt(r) == l && o++;
        }
    }
  }
  match(e, t, i) {
    let n = null;
    for (let r = 0; r < this.matches.length; r += 2) {
      let o = this.matches[r], l = !1;
      this.query.charCodeAt(o) == e && (o == this.query.length - 1 ? n = { from: this.matches[r + 1], to: i } : (this.matches[r]++, l = !0)), l || (this.matches.splice(r, 2), r -= 2);
    }
    return this.query.charCodeAt(0) == e && (this.query.length == 1 ? n = { from: t, to: i } : this.matches.push(1, t)), n && this.test && !this.test(n.from, n.to, this.buffer, this.bufferStart) && (n = null), n;
  }
}
typeof Symbol < "u" && (Ch.prototype[Symbol.iterator] = function() {
  return this;
});
const xp = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, Ah = /* @__PURE__ */ D.define({
  combine(s) {
    return bi(s, xp, {
      highlightWordAroundCursor: (e, t) => e || t,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function kp(s) {
  let e = [Ap, Cp];
  return s && e.push(Ah.of(s)), e;
}
const wp = /* @__PURE__ */ E.mark({ class: "cm-selectionMatch" }), vp = /* @__PURE__ */ E.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function qo(s, e, t, i) {
  return (t == 0 || s(e.sliceDoc(t - 1, t)) != se.Word) && (i == e.doc.length || s(e.sliceDoc(i, i + 1)) != se.Word);
}
function Sp(s, e, t, i) {
  return s(e.sliceDoc(t, t + 1)) == se.Word && s(e.sliceDoc(i - 1, i)) == se.Word;
}
const Cp = /* @__PURE__ */ De.fromClass(class {
  constructor(s) {
    this.decorations = this.getDeco(s);
  }
  update(s) {
    (s.selectionSet || s.docChanged || s.viewportChanged) && (this.decorations = this.getDeco(s.view));
  }
  getDeco(s) {
    let e = s.state.facet(Ah), { state: t } = s, i = t.selection;
    if (i.ranges.length > 1)
      return E.none;
    let n = i.main, r, o = null;
    if (n.empty) {
      if (!e.highlightWordAroundCursor)
        return E.none;
      let a = t.wordAt(n.head);
      if (!a)
        return E.none;
      o = t.charCategorizer(n.head), r = t.sliceDoc(a.from, a.to);
    } else {
      let a = n.to - n.from;
      if (a < e.minSelectionLength || a > 200)
        return E.none;
      if (e.wholeWords) {
        if (r = t.sliceDoc(n.from, n.to), o = t.charCategorizer(n.head), !(qo(o, t, n.from, n.to) && Sp(o, t, n.from, n.to)))
          return E.none;
      } else if (r = t.sliceDoc(n.from, n.to), !r)
        return E.none;
    }
    let l = [];
    for (let a of s.visibleRanges) {
      let f = new Ch(t.doc, r, a.from, a.to);
      for (; !f.next().done; ) {
        let { from: h, to: c } = f.value;
        if ((!o || qo(o, t, h, c)) && (n.empty && h <= n.from && c >= n.to ? l.push(vp.range(h, c)) : (h >= n.to || c <= n.from) && l.push(wp.range(h, c)), l.length > e.maxMatches))
          return E.none;
      }
    }
    return E.set(l);
  }
}, {
  decorations: (s) => s.decorations
}), Ap = /* @__PURE__ */ T.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
});
class Op {
  constructor(e, t, i, n) {
    this.state = e, this.pos = t, this.explicit = i, this.view = n, this.abortListeners = [], this.abortOnDocChange = !1;
  }
  tokenBefore(e) {
    let t = ae(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0; )
      t = t.parent;
    return t ? {
      from: t.from,
      to: this.pos,
      text: this.state.sliceDoc(t.from, this.pos),
      type: t.type
    } : null;
  }
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos), i = Math.max(t.from, this.pos - 250), n = t.text.slice(i - t.from, this.pos - t.from), r = n.search(Mh(e, !1));
    return r < 0 ? null : { from: i + r, to: this.pos, text: n.slice(r) };
  }
  get aborted() {
    return this.abortListeners == null;
  }
  addEventListener(e, t, i) {
    e == "abort" && this.abortListeners && (this.abortListeners.push(t), i && i.onDocChange && (this.abortOnDocChange = !0));
  }
}
function $o(s) {
  let e = Object.keys(s).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function Mp(s) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: n } of s) {
    e[n[0]] = !0;
    for (let r = 1; r < n.length; r++)
      t[n[r]] = !0;
  }
  let i = $o(e) + $o(t) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
function Oh(s) {
  let e = s.map((n) => typeof n == "string" ? { label: n } : n), [t, i] = e.every((n) => /^\w+$/.test(n.label)) ? [/\w*$/, /\w+$/] : Mp(e);
  return (n) => {
    let r = n.matchBefore(i);
    return r || n.explicit ? { from: r ? r.from : n.pos, options: e, validFor: t } : null;
  };
}
function Dp(s, e) {
  return (t) => {
    for (let i = ae(t.state).resolveInner(t.pos, -1); i; i = i.parent) {
      if (s.indexOf(i.name) > -1)
        return null;
      if (i.type.isTop)
        break;
    }
    return e(t);
  };
}
class Uo {
  constructor(e, t, i, n) {
    this.completion = e, this.source = t, this.match = i, this.score = n;
  }
}
function si(s) {
  return s.selection.main.from;
}
function Mh(s, e) {
  var t;
  let { source: i } = s, n = e && i[0] != "^", r = i[i.length - 1] != "$";
  return !n && !r ? s : new RegExp(`${n ? "^" : ""}(?:${i})${r ? "$" : ""}`, (t = s.flags) !== null && t !== void 0 ? t : s.ignoreCase ? "i" : "");
}
const Dh = /* @__PURE__ */ Ye.define();
function Tp(s, e, t, i) {
  let { main: n } = s.selection, r = t - n.from, o = i - n.from;
  return Object.assign(Object.assign({}, s.changeByRange((l) => {
    if (l != n && t != i && s.sliceDoc(l.from + r, l.from + o) != s.sliceDoc(t, i))
      return { range: l };
    let a = s.toText(e);
    return {
      changes: { from: l.from + r, to: i == n.from ? l.to : l.from + o, insert: a },
      range: k.cursor(l.from + r + a.length)
    };
  })), { scrollIntoView: !0, userEvent: "input.complete" });
}
const jo = /* @__PURE__ */ new WeakMap();
function Pp(s) {
  if (!Array.isArray(s))
    return s;
  let e = jo.get(s);
  return e || jo.set(s, e = Oh(s)), e;
}
const Th = /* @__PURE__ */ W.define(), xr = /* @__PURE__ */ W.define();
class Bp {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t = 0; t < e.length; ) {
      let i = ge(e, t), n = Ve(i);
      this.chars.push(i);
      let r = e.slice(t, t + n), o = r.toUpperCase();
      this.folded.push(ge(o == r ? r.toLowerCase() : o, 0)), t += n;
    }
    this.astral = e.length != this.chars.length;
  }
  ret(e, t) {
    return this.score = e, this.matched = t, this;
  }
  match(e) {
    if (this.pattern.length == 0)
      return this.ret(-100, []);
    if (e.length < this.pattern.length)
      return null;
    let { chars: t, folded: i, any: n, precise: r, byWord: o } = this;
    if (t.length == 1) {
      let x = ge(e, 0), w = Ve(x), v = w == e.length ? 0 : -100;
      if (x != t[0])
        if (x == i[0])
          v += -200;
        else
          return null;
      return this.ret(v, [0, w]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length, f = 0;
    if (l < 0) {
      for (let x = 0, w = Math.min(e.length, 200); x < w && f < a; ) {
        let v = ge(e, x);
        (v == t[f] || v == i[f]) && (n[f++] = x), x += Ve(v);
      }
      if (f < a)
        return null;
    }
    let h = 0, c = 0, u = !1, d = 0, p = -1, g = -1, m = /[a-z]/.test(e), y = !0;
    for (let x = 0, w = Math.min(e.length, 200), v = 0; x < w && c < a; ) {
      let C = ge(e, x);
      l < 0 && (h < a && C == t[h] && (r[h++] = x), d < a && (C == t[d] || C == i[d] ? (d == 0 && (p = x), g = x + 1, d++) : d = 0));
      let O, M = C < 255 ? C >= 48 && C <= 57 || C >= 97 && C <= 122 ? 2 : C >= 65 && C <= 90 ? 1 : 0 : (O = Ks(C)) != O.toLowerCase() ? 1 : O != O.toUpperCase() ? 2 : 0;
      (!x || M == 1 && m || v == 0 && M != 0) && (t[c] == C || i[c] == C && (u = !0) ? o[c++] = x : o.length && (y = !1)), v = M, x += Ve(C);
    }
    return c == a && o[0] == 0 && y ? this.result(-100 + (u ? -200 : 0), o, e) : d == a && p == 0 ? this.ret(-200 - e.length + (g == e.length ? 0 : -100), [0, g]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : d == a ? this.ret(-200 + -700 - e.length, [p, g]) : c == a ? this.result(-100 + (u ? -200 : 0) + -700 + (y ? 0 : -1100), o, e) : t.length == 2 ? null : this.result((n[0] ? -700 : 0) + -200 + -1100, n, e);
  }
  result(e, t, i) {
    let n = [], r = 0;
    for (let o of t) {
      let l = o + (this.astral ? Ve(ge(i, o)) : 1);
      r && n[r - 1] == o ? n[r - 1] = l : (n[r++] = o, n[r++] = l);
    }
    return this.ret(e - i.length, n);
  }
}
class Rp {
  constructor(e) {
    this.pattern = e, this.matched = [], this.score = 0, this.folded = e.toLowerCase();
  }
  match(e) {
    if (e.length < this.pattern.length)
      return null;
    let t = e.slice(0, this.pattern.length), i = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
    return i == null ? null : (this.matched = [0, t.length], this.score = i + (e.length == this.pattern.length ? 0 : -100), this);
  }
}
const ze = /* @__PURE__ */ D.define({
  combine(s) {
    return bi(s, {
      activateOnTyping: !0,
      activateOnCompletion: () => !1,
      activateOnTypingDelay: 100,
      selectOnOpen: !0,
      override: null,
      closeOnBlur: !0,
      maxRenderedOptions: 100,
      defaultKeymap: !0,
      tooltipClass: () => "",
      optionClass: () => "",
      aboveCursor: !1,
      icons: !0,
      addToOptions: [],
      positionInfo: Ep,
      filterStrict: !1,
      compareCompletions: (e, t) => e.label.localeCompare(t.label),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: (e, t) => e && t,
      closeOnBlur: (e, t) => e && t,
      icons: (e, t) => e && t,
      tooltipClass: (e, t) => (i) => Qo(e(i), t(i)),
      optionClass: (e, t) => (i) => Qo(e(i), t(i)),
      addToOptions: (e, t) => e.concat(t),
      filterStrict: (e, t) => e || t
    });
  }
});
function Qo(s, e) {
  return s ? e ? s + " " + e : s : e;
}
function Ep(s, e, t, i, n, r) {
  let o = s.textDirection == Q.RTL, l = o, a = !1, f = "top", h, c, u = e.left - n.left, d = n.right - e.right, p = i.right - i.left, g = i.bottom - i.top;
  if (l && u < Math.min(p, d) ? l = !1 : !l && d < Math.min(p, u) && (l = !0), p <= (l ? u : d))
    h = Math.max(n.top, Math.min(t.top, n.bottom - g)) - e.top, c = Math.min(400, l ? u : d);
  else {
    a = !0, c = Math.min(400, (o ? e.right : n.right - e.left) - 30);
    let x = n.bottom - e.bottom;
    x >= g || x > e.top ? h = t.bottom - e.top : (f = "bottom", h = e.bottom - t.top);
  }
  let m = (e.bottom - e.top) / r.offsetHeight, y = (e.right - e.left) / r.offsetWidth;
  return {
    style: `${f}: ${h / m}px; max-width: ${c / y}px`,
    class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right")
  };
}
function Lp(s) {
  let e = s.addToOptions.slice();
  return s.icons && e.push({
    render(t) {
      let i = document.createElement("div");
      return i.classList.add("cm-completionIcon"), t.type && i.classList.add(...t.type.split(/\s+/g).map((n) => "cm-completionIcon-" + n)), i.setAttribute("aria-hidden", "true"), i;
    },
    position: 20
  }), e.push({
    render(t, i, n, r) {
      let o = document.createElement("span");
      o.className = "cm-completionLabel";
      let l = t.displayLabel || t.label, a = 0;
      for (let f = 0; f < r.length; ) {
        let h = r[f++], c = r[f++];
        h > a && o.appendChild(document.createTextNode(l.slice(a, h)));
        let u = o.appendChild(document.createElement("span"));
        u.appendChild(document.createTextNode(l.slice(h, c))), u.className = "cm-completionMatchedText", a = c;
      }
      return a < l.length && o.appendChild(document.createTextNode(l.slice(a))), o;
    },
    position: 50
  }, {
    render(t) {
      if (!t.detail)
        return null;
      let i = document.createElement("span");
      return i.className = "cm-completionDetail", i.textContent = t.detail, i;
    },
    position: 80
  }), e.sort((t, i) => t.position - i.position).map((t) => t.render);
}
function Yn(s, e, t) {
  if (s <= t)
    return { from: 0, to: s };
  if (e < 0 && (e = 0), e <= s >> 1) {
    let n = Math.floor(e / t);
    return { from: n * t, to: (n + 1) * t };
  }
  let i = Math.floor((s - e) / t);
  return { from: s - (i + 1) * t, to: s - i * t };
}
class Np {
  constructor(e, t, i) {
    this.view = e, this.stateField = t, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (a) => this.placeInfo(a),
      key: this
    }, this.space = null, this.currentClass = "";
    let n = e.state.field(t), { options: r, selected: o } = n.open, l = e.state.facet(ze);
    this.optionContent = Lp(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = Yn(r.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: f } = e.state.field(t).open;
      for (let h = a.target, c; h && h != this.dom; h = h.parentNode)
        if (h.nodeName == "LI" && (c = /-(\d+)$/.exec(h.id)) && +c[1] < f.length) {
          this.applyCompletion(e, f[+c[1]]), a.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (a) => {
      let f = e.state.field(this.stateField, !1);
      f && f.tooltip && e.state.facet(ze).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: xr.of(null) });
    }), this.showOptions(r, n.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(e, t) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(e, t, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(e) {
    var t;
    let i = e.state.field(this.stateField), n = e.startState.field(this.stateField);
    if (this.updateTooltipClass(e.state), i != n) {
      let { options: r, selected: o, disabled: l } = i.open;
      (!n.open || n.open.options != r) && (this.range = Yn(r.length, o, e.state.facet(ze).maxRenderedOptions), this.showOptions(r, i.id)), this.updateSel(), l != ((t = n.open) === null || t === void 0 ? void 0 : t.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
    }
  }
  updateTooltipClass(e) {
    let t = this.tooltipClass(e);
    if (t != this.currentClass) {
      for (let i of this.currentClass.split(" "))
        i && this.dom.classList.remove(i);
      for (let i of t.split(" "))
        i && this.dom.classList.add(i);
      this.currentClass = t;
    }
  }
  positioned(e) {
    this.space = e, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField), t = e.open;
    if ((t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = Yn(t.options.length, t.selected, this.view.state.facet(ze).maxRenderedOptions), this.showOptions(t.options, e.id)), this.updateSelectedOption(t.selected)) {
      this.destroyInfo();
      let { completion: i } = t.options[t.selected], { info: n } = i;
      if (!n)
        return;
      let r = typeof n == "string" ? document.createTextNode(n) : n(i);
      if (!r)
        return;
      "then" in r ? r.then((o) => {
        o && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(o, i);
      }).catch((o) => Ce(this.view.state, o, "completion info")) : this.addInfoPane(r, i);
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let i = this.info = document.createElement("div");
    if (i.className = "cm-tooltip cm-completionInfo", e.nodeType != null)
      i.appendChild(e), this.infoDestroy = null;
    else {
      let { dom: n, destroy: r } = e;
      i.appendChild(n), this.infoDestroy = r || null;
    }
    this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let i = this.list.firstChild, n = this.range.from; i; i = i.nextSibling, n++)
      i.nodeName != "LI" || !i.id ? n-- : n == e ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), t = i) : i.hasAttribute("aria-selected") && i.removeAttribute("aria-selected");
    return t && Fp(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info)
      return null;
    let t = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), n = e.getBoundingClientRect(), r = this.space;
    if (!r) {
      let o = this.dom.ownerDocument.defaultView || window;
      r = { left: 0, top: 0, right: o.innerWidth, bottom: o.innerHeight };
    }
    return n.top > Math.min(r.bottom, t.bottom) - 10 || n.bottom < Math.max(r.top, t.top) + 10 ? null : this.view.state.facet(ze).positionInfo(this.view, t, n, i, r, this.dom);
  }
  placeInfo(e) {
    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(e, t, i) {
    const n = document.createElement("ul");
    n.id = t, n.setAttribute("role", "listbox"), n.setAttribute("aria-expanded", "true"), n.setAttribute("aria-label", this.view.state.phrase("Completions"));
    let r = null;
    for (let o = i.from; o < i.to; o++) {
      let { completion: l, match: a } = e[o], { section: f } = l;
      if (f) {
        let u = typeof f == "string" ? f : f.name;
        if (u != r && (o > i.from || i.from == 0))
          if (r = u, typeof f != "string" && f.header)
            n.appendChild(f.header(f));
          else {
            let d = n.appendChild(document.createElement("completion-section"));
            d.textContent = u;
          }
      }
      const h = n.appendChild(document.createElement("li"));
      h.id = t + "-" + o, h.setAttribute("role", "option");
      let c = this.optionClass(l);
      c && (h.className = c);
      for (let u of this.optionContent) {
        let d = u(l, this.view.state, this.view, a);
        d && h.appendChild(d);
      }
    }
    return i.from && n.classList.add("cm-completionListIncompleteTop"), i.to < e.length && n.classList.add("cm-completionListIncompleteBottom"), n;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function Ip(s, e) {
  return (t) => new Np(t, s, e);
}
function Fp(s, e) {
  let t = s.getBoundingClientRect(), i = e.getBoundingClientRect(), n = t.height / s.offsetHeight;
  i.top < t.top ? s.scrollTop -= (t.top - i.top) / n : i.bottom > t.bottom && (s.scrollTop += (i.bottom - t.bottom) / n);
}
function Ko(s) {
  return (s.boost || 0) * 100 + (s.apply ? 10 : 0) + (s.info ? 5 : 0) + (s.type ? 1 : 0);
}
function Vp(s, e) {
  let t = [], i = null, n = (f) => {
    t.push(f);
    let { section: h } = f.completion;
    if (h) {
      i || (i = []);
      let c = typeof h == "string" ? h : h.name;
      i.some((u) => u.name == c) || i.push(typeof h == "string" ? { name: c } : h);
    }
  }, r = e.facet(ze);
  for (let f of s)
    if (f.hasResult()) {
      let h = f.result.getMatch;
      if (f.result.filter === !1)
        for (let c of f.result.options)
          n(new Uo(c, f.source, h ? h(c) : [], 1e9 - t.length));
      else {
        let c = e.sliceDoc(f.from, f.to), u, d = r.filterStrict ? new Rp(c) : new Bp(c);
        for (let p of f.result.options)
          if (u = d.match(p.label)) {
            let g = p.displayLabel ? h ? h(p, u.matched) : [] : u.matched;
            n(new Uo(p, f.source, g, u.score + (p.boost || 0)));
          }
      }
    }
  if (i) {
    let f = /* @__PURE__ */ Object.create(null), h = 0, c = (u, d) => {
      var p, g;
      return ((p = u.rank) !== null && p !== void 0 ? p : 1e9) - ((g = d.rank) !== null && g !== void 0 ? g : 1e9) || (u.name < d.name ? -1 : 1);
    };
    for (let u of i.sort(c))
      h -= 1e5, f[u.name] = h;
    for (let u of t) {
      let { section: d } = u.completion;
      d && (u.score += f[typeof d == "string" ? d : d.name]);
    }
  }
  let o = [], l = null, a = r.compareCompletions;
  for (let f of t.sort((h, c) => c.score - h.score || a(h.completion, c.completion))) {
    let h = f.completion;
    !l || l.label != h.label || l.detail != h.detail || l.type != null && h.type != null && l.type != h.type || l.apply != h.apply || l.boost != h.boost ? o.push(f) : Ko(f.completion) > Ko(l) && (o[o.length - 1] = f), l = f.completion;
  }
  return o;
}
class Pt {
  constructor(e, t, i, n, r, o) {
    this.options = e, this.attrs = t, this.tooltip = i, this.timestamp = n, this.selected = r, this.disabled = o;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new Pt(this.options, Go(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, i, n, r, o) {
    if (n && !o && e.some((f) => f.isPending))
      return n.setDisabled();
    let l = Vp(e, t);
    if (!l.length)
      return n && e.some((f) => f.isPending) ? n.setDisabled() : null;
    let a = t.facet(ze).selectOnOpen ? 0 : -1;
    if (n && n.selected != a && n.selected != -1) {
      let f = n.options[n.selected].completion;
      for (let h = 0; h < l.length; h++)
        if (l[h].completion == f) {
          a = h;
          break;
        }
    }
    return new Pt(l, Go(i, a), {
      pos: e.reduce((f, h) => h.hasResult() ? Math.min(f, h.from) : f, 1e8),
      create: Up,
      above: r.aboveCursor
    }, n ? n.timestamp : Date.now(), a, !1);
  }
  map(e) {
    return new Pt(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: e.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new Pt(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
  }
}
class pn {
  constructor(e, t, i) {
    this.active = e, this.id = t, this.open = i;
  }
  static start() {
    return new pn(_p, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e, i = t.facet(ze), r = (i.override || t.languageDataAt("autocomplete", si(t)).map(Pp)).map((a) => (this.active.find((h) => h.source == a) || new Oe(a, this.active.some((h) => h.state != 0) ? 1 : 0)).update(e, i));
    r.length == this.active.length && r.every((a, f) => a == this.active[f]) && (r = this.active);
    let o = this.open, l = e.effects.some((a) => a.is(Ph));
    o && e.docChanged && (o = o.map(e.changes)), e.selection || r.some((a) => a.hasResult() && e.changes.touchesRange(a.from, a.to)) || !Hp(r, this.active) || l ? o = Pt.build(r, t, this.id, o, i, l) : o && o.disabled && !r.some((a) => a.isPending) && (o = null), !o && r.every((a) => !a.isPending) && r.some((a) => a.hasResult()) && (r = r.map((a) => a.hasResult() ? new Oe(a.source, 0) : a));
    for (let a of e.effects)
      a.is(Bh) && (o = o && o.setSelected(a.value, this.id));
    return r == this.active && o == this.open ? this : new pn(r, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? zp : Wp;
  }
}
function Hp(s, e) {
  if (s == e)
    return !0;
  for (let t = 0, i = 0; ; ) {
    for (; t < s.length && !s[t].hasResult(); )
      t++;
    for (; i < e.length && !e[i].hasResult(); )
      i++;
    let n = t == s.length, r = i == e.length;
    if (n || r)
      return n == r;
    if (s[t++].result != e[i++].result)
      return !1;
  }
}
const zp = {
  "aria-autocomplete": "list"
}, Wp = {};
function Go(s, e) {
  let t = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": s
  };
  return e > -1 && (t["aria-activedescendant"] = s + "-" + e), t;
}
const _p = [];
function qp(s, e) {
  if (s.isUserEvent("input.complete")) {
    let i = s.annotation(Dh);
    if (i && e.activateOnCompletion(i))
      return 12;
  }
  let t = s.isUserEvent("input.type");
  return t && e.activateOnTyping ? 5 : t ? 1 : s.isUserEvent("delete.backward") ? 2 : s.selection ? 8 : s.docChanged ? 16 : 0;
}
class Oe {
  constructor(e, t, i = !1) {
    this.source = e, this.state = t, this.explicit = i;
  }
  hasResult() {
    return !1;
  }
  get isPending() {
    return this.state == 1;
  }
  update(e, t) {
    let i = qp(e, t), n = this;
    (i & 8 || i & 16 && this.touches(e)) && (n = new Oe(n.source, 0)), i & 4 && n.state == 0 && (n = new Oe(this.source, 1)), n = n.updateFor(e, i);
    for (let r of e.effects)
      if (r.is(Th))
        n = new Oe(n.source, 1, r.value);
      else if (r.is(xr))
        n = new Oe(n.source, 0);
      else if (r.is(Ph))
        for (let o of r.value)
          o.source == n.source && (n = o);
    return n;
  }
  updateFor(e, t) {
    return this.map(e.changes);
  }
  map(e) {
    return this;
  }
  touches(e) {
    return e.changes.touchesRange(si(e.state));
  }
}
class ri extends Oe {
  constructor(e, t, i, n, r, o) {
    super(e, 3, t), this.limit = i, this.result = n, this.from = r, this.to = o;
  }
  hasResult() {
    return !0;
  }
  updateFor(e, t) {
    var i;
    if (!(t & 3))
      return this.map(e.changes);
    let n = this.result;
    n.map && !e.changes.empty && (n = n.map(n, e.changes));
    let r = e.changes.mapPos(this.from), o = e.changes.mapPos(this.to, 1), l = si(e.state);
    if (l > o || !n || t & 2 && (si(e.startState) == this.from || l < this.limit))
      return new Oe(this.source, t & 4 ? 1 : 0);
    let a = e.changes.mapPos(this.limit);
    return $p(n.validFor, e.state, r, o) ? new ri(this.source, this.explicit, a, n, r, o) : n.update && (n = n.update(n, r, o, new Op(e.state, l, !1))) ? new ri(this.source, this.explicit, a, n, n.from, (i = n.to) !== null && i !== void 0 ? i : si(e.state)) : new Oe(this.source, 1, this.explicit);
  }
  map(e) {
    return e.empty ? this : (this.result.map ? this.result.map(this.result, e) : this.result) ? new ri(this.source, this.explicit, e.mapPos(this.limit), this.result, e.mapPos(this.from), e.mapPos(this.to, 1)) : new Oe(this.source, 0);
  }
  touches(e) {
    return e.changes.touchesRange(this.from, this.to);
  }
}
function $p(s, e, t, i) {
  if (!s)
    return !1;
  let n = e.sliceDoc(t, i);
  return typeof s == "function" ? s(n, t, i, e) : Mh(s, !0).test(n);
}
const Ph = /* @__PURE__ */ W.define({
  map(s, e) {
    return s.map((t) => t.map(e));
  }
}), Bh = /* @__PURE__ */ W.define(), _t = /* @__PURE__ */ Pe.define({
  create() {
    return pn.start();
  },
  update(s, e) {
    return s.update(e);
  },
  provide: (s) => [
    Ta.from(s, (e) => e.tooltip),
    T.contentAttributes.from(s, (e) => e.attrs)
  ]
});
function Rh(s, e) {
  const t = e.completion.apply || e.completion.label;
  let i = s.state.field(_t).active.find((n) => n.source == e.source);
  return i instanceof ri ? (typeof t == "string" ? s.dispatch(Object.assign(Object.assign({}, Tp(s.state, t, i.from, i.to)), { annotations: Dh.of(e.completion) })) : t(s, e.completion, i.from, i.to), !0) : !1;
}
const Up = /* @__PURE__ */ Ip(_t, Rh);
function Wi(s, e = "option") {
  return (t) => {
    let i = t.state.field(_t, !1);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < t.state.facet(ze).interactionDelay)
      return !1;
    let n = 1, r;
    e == "page" && (r = tu(t, i.open.tooltip)) && (n = Math.max(2, Math.floor(r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = i.open.options, l = i.open.selected > -1 ? i.open.selected + n * (s ? 1 : -1) : s ? 0 : o - 1;
    return l < 0 ? l = e == "page" ? 0 : o - 1 : l >= o && (l = e == "page" ? o - 1 : 0), t.dispatch({ effects: Bh.of(l) }), !0;
  };
}
const jp = (s) => {
  let e = s.state.field(_t, !1);
  return s.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < s.state.facet(ze).interactionDelay ? !1 : Rh(s, e.open.options[e.open.selected]);
}, Xo = (s) => s.state.field(_t, !1) ? (s.dispatch({ effects: Th.of(!0) }), !0) : !1, Qp = (s) => {
  let e = s.state.field(_t, !1);
  return !e || !e.active.some((t) => t.state != 0) ? !1 : (s.dispatch({ effects: xr.of(null) }), !0);
}, mi = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, xt = /* @__PURE__ */ W.define({
  map(s, e) {
    let t = e.mapPos(s, -1, fe.TrackAfter);
    return t == null ? void 0 : t;
  }
}), kr = /* @__PURE__ */ new class extends wt {
}();
kr.startSide = 1;
kr.endSide = -1;
const Eh = /* @__PURE__ */ Pe.define({
  create() {
    return F.empty;
  },
  update(s, e) {
    if (s = s.map(e.changes), e.selection) {
      let t = e.state.doc.lineAt(e.selection.main.head);
      s = s.update({ filter: (i) => i >= t.from && i <= t.to });
    }
    for (let t of e.effects)
      t.is(xt) && (s = s.update({ add: [kr.range(t.value, t.value + 1)] }));
    return s;
  }
});
function Kp() {
  return [Xp, Eh];
}
const Jn = "()[]{}<>";
function Lh(s) {
  for (let e = 0; e < Jn.length; e += 2)
    if (Jn.charCodeAt(e) == s)
      return Jn.charAt(e + 1);
  return Ks(s < 128 ? s : s + 1);
}
function Nh(s, e) {
  return s.languageDataAt("closeBrackets", e)[0] || mi;
}
const Gp = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), Xp = /* @__PURE__ */ T.inputHandler.of((s, e, t, i) => {
  if ((Gp ? s.composing : s.compositionStarted) || s.state.readOnly)
    return !1;
  let n = s.state.selection.main;
  if (i.length > 2 || i.length == 2 && Ve(ge(i, 0)) == 1 || e != n.from || t != n.to)
    return !1;
  let r = Zp(s.state, i);
  return r ? (s.dispatch(r), !0) : !1;
}), Yp = ({ state: s, dispatch: e }) => {
  if (s.readOnly)
    return !1;
  let i = Nh(s, s.selection.main.head).brackets || mi.brackets, n = null, r = s.changeByRange((o) => {
    if (o.empty) {
      let l = eg(s.doc, o.head);
      for (let a of i)
        if (a == l && Pn(s.doc, o.head) == Lh(ge(a, 0)))
          return {
            changes: { from: o.head - a.length, to: o.head + a.length },
            range: k.cursor(o.head - a.length)
          };
    }
    return { range: n = o };
  });
  return n || e(s.update(r, { scrollIntoView: !0, userEvent: "delete.backward" })), !n;
}, Jp = [
  { key: "Backspace", run: Yp }
];
function Zp(s, e) {
  let t = Nh(s, s.selection.main.head), i = t.brackets || mi.brackets;
  for (let n of i) {
    let r = Lh(ge(n, 0));
    if (e == n)
      return r == n ? ng(s, n, i.indexOf(n + n + n) > -1, t) : tg(s, n, r, t.before || mi.before);
    if (e == r && Ih(s, s.selection.main.from))
      return ig(s, n, r);
  }
  return null;
}
function Ih(s, e) {
  let t = !1;
  return s.field(Eh).between(0, s.doc.length, (i) => {
    i == e && (t = !0);
  }), t;
}
function Pn(s, e) {
  let t = s.sliceString(e, e + 2);
  return t.slice(0, Ve(ge(t, 0)));
}
function eg(s, e) {
  let t = s.sliceString(e - 2, e);
  return Ve(ge(t, 0)) == t.length ? t : t.slice(1);
}
function tg(s, e, t, i) {
  let n = null, r = s.changeByRange((o) => {
    if (!o.empty)
      return {
        changes: [{ insert: e, from: o.from }, { insert: t, from: o.to }],
        effects: xt.of(o.to + e.length),
        range: k.range(o.anchor + e.length, o.head + e.length)
      };
    let l = Pn(s.doc, o.head);
    return !l || /\s/.test(l) || i.indexOf(l) > -1 ? {
      changes: { insert: e + t, from: o.head },
      effects: xt.of(o.head + e.length),
      range: k.cursor(o.head + e.length)
    } : { range: n = o };
  });
  return n ? null : s.update(r, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function ig(s, e, t) {
  let i = null, n = s.changeByRange((r) => r.empty && Pn(s.doc, r.head) == t ? {
    changes: { from: r.head, to: r.head + t.length, insert: t },
    range: k.cursor(r.head + t.length)
  } : i = { range: r });
  return i ? null : s.update(n, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function ng(s, e, t, i) {
  let n = i.stringPrefixes || mi.stringPrefixes, r = null, o = s.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }],
        effects: xt.of(l.to + e.length),
        range: k.range(l.anchor + e.length, l.head + e.length)
      };
    let a = l.head, f = Pn(s.doc, a), h;
    if (f == e) {
      if (Yo(s, a))
        return {
          changes: { insert: e + e, from: a },
          effects: xt.of(a + e.length),
          range: k.cursor(a + e.length)
        };
      if (Ih(s, a)) {
        let u = t && s.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
        return {
          changes: { from: a, to: a + u.length, insert: u },
          range: k.cursor(a + u.length)
        };
      }
    } else {
      if (t && s.sliceDoc(a - 2 * e.length, a) == e + e && (h = Jo(s, a - 2 * e.length, n)) > -1 && Yo(s, h))
        return {
          changes: { insert: e + e + e + e, from: a },
          effects: xt.of(a + e.length),
          range: k.cursor(a + e.length)
        };
      if (s.charCategorizer(a)(f) != se.Word && Jo(s, a, n) > -1 && !sg(s, a, e, n))
        return {
          changes: { insert: e + e, from: a },
          effects: xt.of(a + e.length),
          range: k.cursor(a + e.length)
        };
    }
    return { range: r = l };
  });
  return r ? null : s.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Yo(s, e) {
  let t = ae(s).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function sg(s, e, t, i) {
  let n = ae(s).resolveInner(e, -1), r = i.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = s.sliceDoc(n.from, Math.min(n.to, n.from + t.length + r)), a = l.indexOf(t);
    if (!a || a > -1 && i.indexOf(l.slice(0, a)) > -1) {
      let h = n.firstChild;
      for (; h && h.from == n.from && h.to - h.from > t.length + a; ) {
        if (s.sliceDoc(h.to - t.length, h.to) == t)
          return !1;
        h = h.firstChild;
      }
      return !0;
    }
    let f = n.to == e && n.parent;
    if (!f)
      break;
    n = f;
  }
  return !1;
}
function Jo(s, e, t) {
  let i = s.charCategorizer(e);
  if (i(s.sliceDoc(e - 1, e)) != se.Word)
    return e;
  for (let n of t) {
    let r = e - n.length;
    if (s.sliceDoc(r, e) == n && i(s.sliceDoc(r - 1, r)) != se.Word)
      return r;
  }
  return -1;
}
const rg = [
  { key: "Ctrl-Space", run: Xo },
  { mac: "Alt-`", run: Xo },
  { key: "Escape", run: Qp },
  { key: "ArrowDown", run: /* @__PURE__ */ Wi(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ Wi(!1) },
  { key: "PageDown", run: /* @__PURE__ */ Wi(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ Wi(!1, "page") },
  { key: "Enter", run: jp }
];
class gn {
  constructor(e, t, i, n, r, o, l, a, f, h = 0, c) {
    this.p = e, this.stack = t, this.state = i, this.reducePos = n, this.pos = r, this.score = o, this.buffer = l, this.bufferBase = a, this.curContext = f, this.lookAhead = h, this.parent = c;
  }
  toString() {
    return `[${this.stack.filter((e, t) => t % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
  }
  static start(e, t, i = 0) {
    let n = e.parser.context;
    return new gn(e, [], t, i, i, 0, [], 0, n ? new Zo(n, n.start) : null, 0, null);
  }
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  pushState(e, t) {
    this.stack.push(this.state, t, this.bufferBase + this.buffer.length), this.state = e;
  }
  reduce(e) {
    var t;
    let i = e >> 19, n = e & 65535, { parser: r } = this.p, o = this.reducePos < this.pos - 25;
    o && this.setLookAhead(this.pos);
    let l = r.dynamicPrecedence(n);
    if (l && (this.score += l), i == 0) {
      this.pushState(r.getGoto(this.state, n, !0), this.reducePos), n < r.minRepeatTerm && this.storeNode(n, this.reducePos, this.reducePos, o ? 8 : 4, !0), this.reduceContext(n, this.reducePos);
      return;
    }
    let a = this.stack.length - (i - 1) * 3 - (e & 262144 ? 6 : 0), f = a ? this.stack[a - 2] : this.p.ranges[0].from, h = this.reducePos - f;
    h >= 2e3 && !(!((t = this.p.parser.nodeSet.types[n]) === null || t === void 0) && t.isAnonymous) && (f == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = h) : this.p.lastBigReductionSize < h && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = f, this.p.lastBigReductionSize = h));
    let c = a ? this.stack[a - 1] : 0, u = this.bufferBase + this.buffer.length - c;
    if (n < r.minRepeatTerm || e & 131072) {
      let d = r.stateFlag(this.state, 1) ? this.pos : this.reducePos;
      this.storeNode(n, f, d, u + 4, !0);
    }
    if (e & 262144)
      this.state = this.stack[a];
    else {
      let d = this.stack[a - 3];
      this.state = r.getGoto(d, n, !0);
    }
    for (; this.stack.length > a; )
      this.stack.pop();
    this.reduceContext(n, f);
  }
  storeNode(e, t, i, n = 4, r = !1) {
    if (e == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let o = this, l = this.buffer.length;
      if (l == 0 && o.parent && (l = o.bufferBase - o.parent.bufferBase, o = o.parent), l > 0 && o.buffer[l - 4] == 0 && o.buffer[l - 1] > -1) {
        if (t == i)
          return;
        if (o.buffer[l - 2] >= t) {
          o.buffer[l - 2] = i;
          return;
        }
      }
    }
    if (!r || this.pos == i)
      this.buffer.push(e, t, i, n);
    else {
      let o = this.buffer.length;
      if (o > 0 && this.buffer[o - 4] != 0) {
        let l = !1;
        for (let a = o; a > 0 && this.buffer[a - 2] > i; a -= 4)
          if (this.buffer[a - 1] >= 0) {
            l = !0;
            break;
          }
        if (l)
          for (; o > 0 && this.buffer[o - 2] > i; )
            this.buffer[o] = this.buffer[o - 4], this.buffer[o + 1] = this.buffer[o - 3], this.buffer[o + 2] = this.buffer[o - 2], this.buffer[o + 3] = this.buffer[o - 1], o -= 4, n > 4 && (n -= 4);
      }
      this.buffer[o] = e, this.buffer[o + 1] = t, this.buffer[o + 2] = i, this.buffer[o + 3] = n;
    }
  }
  shift(e, t, i, n) {
    if (e & 131072)
      this.pushState(e & 65535, this.pos);
    else if ((e & 262144) == 0) {
      let r = e, { parser: o } = this.p;
      (n > this.pos || t <= o.maxNode) && (this.pos = n, o.stateFlag(r, 1) || (this.reducePos = n)), this.pushState(r, i), this.shiftContext(t, i), t <= o.maxNode && this.buffer.push(t, i, n, 4);
    } else
      this.pos = n, this.shiftContext(t, i), t <= this.p.parser.maxNode && this.buffer.push(t, i, n, 4);
  }
  apply(e, t, i, n) {
    e & 65536 ? this.reduce(e) : this.shift(e, t, i, n);
  }
  useNode(e, t) {
    let i = this.p.reused.length - 1;
    (i < 0 || this.p.reused[i] != e) && (this.p.reused.push(e), i++);
    let n = this.pos;
    this.reducePos = this.pos = n + e.length, this.pushState(t, n), this.buffer.push(i, n, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, e, this, this.p.stream.reset(this.pos - e.length)));
  }
  split() {
    let e = this, t = e.buffer.length;
    for (; t > 0 && e.buffer[t - 2] > e.reducePos; )
      t -= 4;
    let i = e.buffer.slice(t), n = e.bufferBase + t;
    for (; e && n == e.bufferBase; )
      e = e.parent;
    return new gn(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, i, n, this.curContext, this.lookAhead, e);
  }
  recoverByDelete(e, t) {
    let i = e <= this.p.parser.maxNode;
    i && this.storeNode(e, this.pos, t, 4), this.storeNode(0, this.pos, t, i ? 8 : 4), this.pos = this.reducePos = t, this.score -= 190;
  }
  canShift(e) {
    for (let t = new og(this); ; ) {
      let i = this.p.parser.stateSlot(t.state, 4) || this.p.parser.hasAction(t.state, e);
      if (i == 0)
        return !1;
      if ((i & 65536) == 0)
        return !0;
      t.reduce(i);
    }
  }
  recoverByInsert(e) {
    if (this.stack.length >= 300)
      return [];
    let t = this.p.parser.nextStates(this.state);
    if (t.length > 4 << 1 || this.stack.length >= 120) {
      let n = [];
      for (let r = 0, o; r < t.length; r += 2)
        (o = t[r + 1]) != this.state && this.p.parser.hasAction(o, e) && n.push(t[r], o);
      if (this.stack.length < 120)
        for (let r = 0; n.length < 4 << 1 && r < t.length; r += 2) {
          let o = t[r + 1];
          n.some((l, a) => a & 1 && l == o) || n.push(t[r], o);
        }
      t = n;
    }
    let i = [];
    for (let n = 0; n < t.length && i.length < 4; n += 2) {
      let r = t[n + 1];
      if (r == this.state)
        continue;
      let o = this.split();
      o.pushState(r, this.pos), o.storeNode(0, o.pos, o.pos, 4, !0), o.shiftContext(t[n], this.pos), o.reducePos = this.pos, o.score -= 200, i.push(o);
    }
    return i;
  }
  forceReduce() {
    let { parser: e } = this.p, t = e.stateSlot(this.state, 5);
    if ((t & 65536) == 0)
      return !1;
    if (!e.validAction(this.state, t)) {
      let i = t >> 19, n = t & 65535, r = this.stack.length - i * 3;
      if (r < 0 || e.getGoto(this.stack[r], n, !1) < 0) {
        let o = this.findForcedReduction();
        if (o == null)
          return !1;
        t = o;
      }
      this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100;
    }
    return this.reducePos = this.pos, this.reduce(t), !0;
  }
  findForcedReduction() {
    let { parser: e } = this.p, t = [], i = (n, r) => {
      if (!t.includes(n))
        return t.push(n), e.allActions(n, (o) => {
          if (!(o & 393216))
            if (o & 65536) {
              let l = (o >> 19) - r;
              if (l > 1) {
                let a = o & 65535, f = this.stack.length - l * 3;
                if (f >= 0 && e.getGoto(this.stack[f], a, !1) >= 0)
                  return l << 19 | 65536 | a;
              }
            } else {
              let l = i(o, r + 1);
              if (l != null)
                return l;
            }
        });
    };
    return i(this.state, 0);
  }
  forceAll() {
    for (; !this.p.parser.stateFlag(this.state, 2); )
      if (!this.forceReduce()) {
        this.storeNode(0, this.pos, this.pos, 4, !0);
        break;
      }
    return this;
  }
  get deadEnd() {
    if (this.stack.length != 3)
      return !1;
    let { parser: e } = this.p;
    return e.data[e.stateSlot(this.state, 1)] == 65535 && !e.stateSlot(this.state, 4);
  }
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0;
  }
  sameState(e) {
    if (this.state != e.state || this.stack.length != e.stack.length)
      return !1;
    for (let t = 0; t < this.stack.length; t += 3)
      if (this.stack[t] != e.stack[t])
        return !1;
    return !0;
  }
  get parser() {
    return this.p.parser;
  }
  dialectEnabled(e) {
    return this.p.parser.dialect.flags[e];
  }
  shiftContext(e, t) {
    this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, e, this, this.p.stream.reset(t)));
  }
  reduceContext(e, t) {
    this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, e, this, this.p.stream.reset(t)));
  }
  emitContext() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -3) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
  }
  emitLookAhead() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -4) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
  }
  updateContext(e) {
    if (e != this.curContext.context) {
      let t = new Zo(this.curContext.tracker, e);
      t.hash != this.curContext.hash && this.emitContext(), this.curContext = t;
    }
  }
  setLookAhead(e) {
    e > this.lookAhead && (this.emitLookAhead(), this.lookAhead = e);
  }
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
  }
}
class Zo {
  constructor(e, t) {
    this.tracker = e, this.context = t, this.hash = e.strict ? e.hash(t) : 0;
  }
}
class og {
  constructor(e) {
    this.start = e, this.state = e.state, this.stack = e.stack, this.base = this.stack.length;
  }
  reduce(e) {
    let t = e & 65535, i = e >> 19;
    i == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (i - 1) * 3;
    let n = this.start.p.parser.getGoto(this.stack[this.base - 3], t, !0);
    this.state = n;
  }
}
class mn {
  constructor(e, t, i) {
    this.stack = e, this.pos = t, this.index = i, this.buffer = e.buffer, this.index == 0 && this.maybeNext();
  }
  static create(e, t = e.bufferBase + e.buffer.length) {
    return new mn(e, t, t - e.bufferBase);
  }
  maybeNext() {
    let e = this.stack.parent;
    e != null && (this.index = this.stack.bufferBase - e.bufferBase, this.stack = e, this.buffer = e.buffer);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    this.index -= 4, this.pos -= 4, this.index == 0 && this.maybeNext();
  }
  fork() {
    return new mn(this.stack, this.pos, this.index);
  }
}
function _i(s, e = Uint16Array) {
  if (typeof s != "string")
    return s;
  let t = null;
  for (let i = 0, n = 0; i < s.length; ) {
    let r = 0;
    for (; ; ) {
      let o = s.charCodeAt(i++), l = !1;
      if (o == 126) {
        r = 65535;
        break;
      }
      o >= 92 && o--, o >= 34 && o--;
      let a = o - 32;
      if (a >= 46 && (a -= 46, l = !0), r += a, l)
        break;
      r *= 46;
    }
    t ? t[n++] = r : t = new e(r);
  }
  return t;
}
class Ji {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
}
const el = new Ji();
class lg {
  constructor(e, t) {
    this.input = e, this.ranges = t, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = el, this.rangeIndex = 0, this.pos = this.chunkPos = t[0].from, this.range = t[0], this.end = t[t.length - 1].to, this.readNext();
  }
  resolveOffset(e, t) {
    let i = this.range, n = this.rangeIndex, r = this.pos + e;
    for (; r < i.from; ) {
      if (!n)
        return null;
      let o = this.ranges[--n];
      r -= i.from - o.to, i = o;
    }
    for (; t < 0 ? r > i.to : r >= i.to; ) {
      if (n == this.ranges.length - 1)
        return null;
      let o = this.ranges[++n];
      r += o.from - i.to, i = o;
    }
    return r;
  }
  clipPos(e) {
    if (e >= this.range.from && e < this.range.to)
      return e;
    for (let t of this.ranges)
      if (t.to > e)
        return Math.max(e, t.from);
    return this.end;
  }
  peek(e) {
    let t = this.chunkOff + e, i, n;
    if (t >= 0 && t < this.chunk.length)
      i = this.pos + e, n = this.chunk.charCodeAt(t);
    else {
      let r = this.resolveOffset(e, 1);
      if (r == null)
        return -1;
      if (i = r, i >= this.chunk2Pos && i < this.chunk2Pos + this.chunk2.length)
        n = this.chunk2.charCodeAt(i - this.chunk2Pos);
      else {
        let o = this.rangeIndex, l = this.range;
        for (; l.to <= i; )
          l = this.ranges[++o];
        this.chunk2 = this.input.chunk(this.chunk2Pos = i), i + this.chunk2.length > l.to && (this.chunk2 = this.chunk2.slice(0, l.to - i)), n = this.chunk2.charCodeAt(0);
      }
    }
    return i >= this.token.lookAhead && (this.token.lookAhead = i + 1), n;
  }
  acceptToken(e, t = 0) {
    let i = t ? this.resolveOffset(t, -1) : this.pos;
    if (i == null || i < this.token.start)
      throw new RangeError("Token end out of bounds");
    this.token.value = e, this.token.end = i;
  }
  acceptTokenTo(e, t) {
    this.token.value = e, this.token.end = t;
  }
  getChunk() {
    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
      let { chunk: e, chunkPos: t } = this;
      this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = e, this.chunk2Pos = t, this.chunkOff = this.pos - this.chunkPos;
    } else {
      this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
      let e = this.input.chunk(this.pos), t = this.pos + e.length;
      this.chunk = t > this.range.to ? e.slice(0, this.range.to - this.pos) : e, this.chunkPos = this.pos, this.chunkOff = 0;
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
  }
  advance(e = 1) {
    for (this.chunkOff += e; this.pos + e >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1)
        return this.setDone();
      e -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
    }
    return this.pos += e, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
  }
  setDone() {
    return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1;
  }
  reset(e, t) {
    if (t ? (this.token = t, t.start = e, t.lookAhead = e + 1, t.value = t.extended = -1) : this.token = el, this.pos != e) {
      if (this.pos = e, e == this.end)
        return this.setDone(), this;
      for (; e < this.range.from; )
        this.range = this.ranges[--this.rangeIndex];
      for (; e >= this.range.to; )
        this.range = this.ranges[++this.rangeIndex];
      e >= this.chunkPos && e < this.chunkPos + this.chunk.length ? this.chunkOff = e - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext();
    }
    return this;
  }
  read(e, t) {
    if (e >= this.chunkPos && t <= this.chunkPos + this.chunk.length)
      return this.chunk.slice(e - this.chunkPos, t - this.chunkPos);
    if (e >= this.chunk2Pos && t <= this.chunk2Pos + this.chunk2.length)
      return this.chunk2.slice(e - this.chunk2Pos, t - this.chunk2Pos);
    if (e >= this.range.from && t <= this.range.to)
      return this.input.read(e, t);
    let i = "";
    for (let n of this.ranges) {
      if (n.from >= t)
        break;
      n.to > e && (i += this.input.read(Math.max(n.from, e), Math.min(n.to, t)));
    }
    return i;
  }
}
class Lt {
  constructor(e, t) {
    this.data = e, this.id = t;
  }
  token(e, t) {
    let { parser: i } = t.p;
    hg(this.data, e, t, this.id, i.data, i.tokenPrecTable);
  }
}
Lt.prototype.contextual = Lt.prototype.fallback = Lt.prototype.extend = !1;
Lt.prototype.fallback = Lt.prototype.extend = !1;
class ag {
  constructor(e, t = {}) {
    this.token = e, this.contextual = !!t.contextual, this.fallback = !!t.fallback, this.extend = !!t.extend;
  }
}
function hg(s, e, t, i, n, r) {
  let o = 0, l = 1 << i, { dialect: a } = t.p.parser;
  e:
    for (; (l & s[o]) != 0; ) {
      let f = s[o + 1];
      for (let d = o + 3; d < f; d += 2)
        if ((s[d + 1] & l) > 0) {
          let p = s[d];
          if (a.allows(p) && (e.token.value == -1 || e.token.value == p || fg(p, e.token.value, n, r))) {
            e.acceptToken(p);
            break;
          }
        }
      let h = e.next, c = 0, u = s[o + 2];
      if (e.next < 0 && u > c && s[f + u * 3 - 3] == 65535) {
        o = s[f + u * 3 - 1];
        continue e;
      }
      for (; c < u; ) {
        let d = c + u >> 1, p = f + d + (d << 1), g = s[p], m = s[p + 1] || 65536;
        if (h < g)
          u = d;
        else if (h >= m)
          c = d + 1;
        else {
          o = s[p + 2], e.advance();
          continue e;
        }
      }
      break;
    }
}
function tl(s, e, t) {
  for (let i = e, n; (n = s[i]) != 65535; i++)
    if (n == t)
      return i - e;
  return -1;
}
function fg(s, e, t, i) {
  let n = tl(t, i, e);
  return n < 0 || tl(t, i, s) < n;
}
const de = typeof process < "u" && process.env && /\bparse\b/.test(process.env.LOG);
let Zn = null;
function il(s, e, t) {
  let i = s.cursor(J.IncludeAnonymous);
  for (i.moveTo(e); ; )
    if (!(t < 0 ? i.childBefore(e) : i.childAfter(e)))
      for (; ; ) {
        if ((t < 0 ? i.to < e : i.from > e) && !i.type.isError)
          return t < 0 ? Math.max(0, Math.min(i.to - 1, e - 25)) : Math.min(s.length, Math.max(i.from + 1, e + 25));
        if (t < 0 ? i.prevSibling() : i.nextSibling())
          break;
        if (!i.parent())
          return t < 0 ? 0 : s.length;
      }
}
class cg {
  constructor(e, t) {
    this.fragments = e, this.nodeSet = t, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let e = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (e) {
      for (this.safeFrom = e.openStart ? il(e.tree, e.from + e.offset, 1) - e.offset : e.from, this.safeTo = e.openEnd ? il(e.tree, e.to + e.offset, -1) - e.offset : e.to; this.trees.length; )
        this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(e.tree), this.start.push(-e.offset), this.index.push(0), this.nextStart = this.safeFrom;
    } else
      this.nextStart = 1e9;
  }
  nodeAt(e) {
    if (e < this.nextStart)
      return null;
    for (; this.fragment && this.safeTo <= e; )
      this.nextFragment();
    if (!this.fragment)
      return null;
    for (; ; ) {
      let t = this.trees.length - 1;
      if (t < 0)
        return this.nextFragment(), null;
      let i = this.trees[t], n = this.index[t];
      if (n == i.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let r = i.children[n], o = this.start[t] + i.positions[n];
      if (o > e)
        return this.nextStart = o, null;
      if (r instanceof G) {
        if (o == e) {
          if (o < this.safeFrom)
            return null;
          let l = o + r.length;
          if (l <= this.safeTo) {
            let a = r.prop(B.lookAhead);
            if (!a || l + a < this.fragment.to)
              return r;
          }
        }
        this.index[t]++, o + r.length >= Math.max(this.safeFrom, e) && (this.trees.push(r), this.start.push(o), this.index.push(0));
      } else
        this.index[t]++, this.nextStart = o + r.length;
    }
  }
}
class ug {
  constructor(e, t) {
    this.stream = t, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = e.tokenizers.map((i) => new Ji());
  }
  getActions(e) {
    let t = 0, i = null, { parser: n } = e.p, { tokenizers: r } = n, o = n.stateSlot(e.state, 3), l = e.curContext ? e.curContext.hash : 0, a = 0;
    for (let f = 0; f < r.length; f++) {
      if ((1 << f & o) == 0)
        continue;
      let h = r[f], c = this.tokens[f];
      if (!(i && !h.fallback) && ((h.contextual || c.start != e.pos || c.mask != o || c.context != l) && (this.updateCachedToken(c, h, e), c.mask = o, c.context = l), c.lookAhead > c.end + 25 && (a = Math.max(c.lookAhead, a)), c.value != 0)) {
        let u = t;
        if (c.extended > -1 && (t = this.addActions(e, c.extended, c.end, t)), t = this.addActions(e, c.value, c.end, t), !h.extend && (i = c, t > u))
          break;
      }
    }
    for (; this.actions.length > t; )
      this.actions.pop();
    return a && e.setLookAhead(a), !i && e.pos == this.stream.end && (i = new Ji(), i.value = e.p.parser.eofTerm, i.start = i.end = e.pos, t = this.addActions(e, i.value, i.end, t)), this.mainToken = i, this.actions;
  }
  getMainToken(e) {
    if (this.mainToken)
      return this.mainToken;
    let t = new Ji(), { pos: i, p: n } = e;
    return t.start = i, t.end = Math.min(i + 1, n.stream.end), t.value = i == n.stream.end ? n.parser.eofTerm : 0, t;
  }
  updateCachedToken(e, t, i) {
    let n = this.stream.clipPos(i.pos);
    if (t.token(this.stream.reset(n, e), i), e.value > -1) {
      let { parser: r } = i.p;
      for (let o = 0; o < r.specialized.length; o++)
        if (r.specialized[o] == e.value) {
          let l = r.specializers[o](this.stream.read(e.start, e.end), i);
          if (l >= 0 && i.p.parser.dialect.allows(l >> 1)) {
            (l & 1) == 0 ? e.value = l >> 1 : e.extended = l >> 1;
            break;
          }
        }
    } else
      e.value = 0, e.end = this.stream.clipPos(n + 1);
  }
  putAction(e, t, i, n) {
    for (let r = 0; r < n; r += 3)
      if (this.actions[r] == e)
        return n;
    return this.actions[n++] = e, this.actions[n++] = t, this.actions[n++] = i, n;
  }
  addActions(e, t, i, n) {
    let { state: r } = e, { parser: o } = e.p, { data: l } = o;
    for (let a = 0; a < 2; a++)
      for (let f = o.stateSlot(r, a ? 2 : 1); ; f += 3) {
        if (l[f] == 65535)
          if (l[f + 1] == 1)
            f = Qe(l, f + 2);
          else {
            n == 0 && l[f + 1] == 2 && (n = this.putAction(Qe(l, f + 2), t, i, n));
            break;
          }
        l[f] == t && (n = this.putAction(Qe(l, f + 1), t, i, n));
      }
    return n;
  }
}
class dg {
  constructor(e, t, i, n) {
    this.parser = e, this.input = t, this.ranges = n, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new lg(t, n), this.tokens = new ug(e, this.stream), this.topTerm = e.top[1];
    let { from: r } = n[0];
    this.stacks = [gn.start(this, e.top[0], r)], this.fragments = i.length && this.stream.end - r > e.bufferLength * 4 ? new cg(i, e.nodeSet) : null;
  }
  get parsedPos() {
    return this.minStackPos;
  }
  advance() {
    let e = this.stacks, t = this.minStackPos, i = this.stacks = [], n, r;
    if (this.bigReductionCount > 300 && e.length == 1) {
      let [o] = e;
      for (; o.forceReduce() && o.stack.length && o.stack[o.stack.length - 2] >= this.lastBigReductionStart; )
        ;
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      for (; ; ) {
        if (this.tokens.mainToken = null, l.pos > t)
          i.push(l);
        else {
          if (this.advanceStack(l, i, e))
            continue;
          {
            n || (n = [], r = []), n.push(l);
            let a = this.tokens.getMainToken(l);
            r.push(a.value, a.end);
          }
        }
        break;
      }
    }
    if (!i.length) {
      let o = n && gg(n);
      if (o)
        return de && console.log("Finish with " + this.stackID(o)), this.stackToTree(o);
      if (this.parser.strict)
        throw de && n && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + t);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && n) {
      let o = this.stoppedAt != null && n[0].pos > this.stoppedAt ? n[0] : this.runRecovery(n, r, i);
      if (o)
        return de && console.log("Force-finish " + this.stackID(o)), this.stackToTree(o.forceAll());
    }
    if (this.recovering) {
      let o = this.recovering == 1 ? 1 : this.recovering * 3;
      if (i.length > o)
        for (i.sort((l, a) => a.score - l.score); i.length > o; )
          i.pop();
      i.some((l) => l.reducePos > t) && this.recovering--;
    } else if (i.length > 1) {
      e:
        for (let o = 0; o < i.length - 1; o++) {
          let l = i[o];
          for (let a = o + 1; a < i.length; a++) {
            let f = i[a];
            if (l.sameState(f) || l.buffer.length > 500 && f.buffer.length > 500)
              if ((l.score - f.score || l.buffer.length - f.buffer.length) > 0)
                i.splice(a--, 1);
              else {
                i.splice(o--, 1);
                continue e;
              }
          }
        }
      i.length > 12 && i.splice(12, i.length - 12);
    }
    this.minStackPos = i[0].pos;
    for (let o = 1; o < i.length; o++)
      i[o].pos < this.minStackPos && (this.minStackPos = i[o].pos);
    return null;
  }
  stopAt(e) {
    if (this.stoppedAt != null && this.stoppedAt < e)
      throw new RangeError("Can't move stoppedAt forward");
    this.stoppedAt = e;
  }
  advanceStack(e, t, i) {
    let n = e.pos, { parser: r } = this, o = de ? this.stackID(e) + " -> " : "";
    if (this.stoppedAt != null && n > this.stoppedAt)
      return e.forceReduce() ? e : null;
    if (this.fragments) {
      let f = e.curContext && e.curContext.tracker.strict, h = f ? e.curContext.hash : 0;
      for (let c = this.fragments.nodeAt(n); c; ) {
        let u = this.parser.nodeSet.types[c.type.id] == c.type ? r.getGoto(e.state, c.type.id) : -1;
        if (u > -1 && c.length && (!f || (c.prop(B.contextHash) || 0) == h))
          return e.useNode(c, u), de && console.log(o + this.stackID(e) + ` (via reuse of ${r.getName(c.type.id)})`), !0;
        if (!(c instanceof G) || c.children.length == 0 || c.positions[0] > 0)
          break;
        let d = c.children[0];
        if (d instanceof G && c.positions[0] == 0)
          c = d;
        else
          break;
      }
    }
    let l = r.stateSlot(e.state, 4);
    if (l > 0)
      return e.reduce(l), de && console.log(o + this.stackID(e) + ` (via always-reduce ${r.getName(l & 65535)})`), !0;
    if (e.stack.length >= 8400)
      for (; e.stack.length > 6e3 && e.forceReduce(); )
        ;
    let a = this.tokens.getActions(e);
    for (let f = 0; f < a.length; ) {
      let h = a[f++], c = a[f++], u = a[f++], d = f == a.length || !i, p = d ? e : e.split(), g = this.tokens.mainToken;
      if (p.apply(h, c, g ? g.start : p.pos, u), de && console.log(o + this.stackID(p) + ` (via ${(h & 65536) == 0 ? "shift" : `reduce of ${r.getName(h & 65535)}`} for ${r.getName(c)} @ ${n}${p == e ? "" : ", split"})`), d)
        return !0;
      p.pos > n ? t.push(p) : i.push(p);
    }
    return !1;
  }
  advanceFully(e, t) {
    let i = e.pos;
    for (; ; ) {
      if (!this.advanceStack(e, null, null))
        return !1;
      if (e.pos > i)
        return nl(e, t), !0;
    }
  }
  runRecovery(e, t, i) {
    let n = null, r = !1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = t[o << 1], f = t[(o << 1) + 1], h = de ? this.stackID(l) + " -> " : "";
      if (l.deadEnd && (r || (r = !0, l.restart(), de && console.log(h + this.stackID(l) + " (restarted)"), this.advanceFully(l, i))))
        continue;
      let c = l.split(), u = h;
      for (let d = 0; c.forceReduce() && d < 10 && (de && console.log(u + this.stackID(c) + " (via force-reduce)"), !this.advanceFully(c, i)); d++)
        de && (u = this.stackID(c) + " -> ");
      for (let d of l.recoverByInsert(a))
        de && console.log(h + this.stackID(d) + " (via recover-insert)"), this.advanceFully(d, i);
      this.stream.end > l.pos ? (f == l.pos && (f++, a = 0), l.recoverByDelete(a, f), de && console.log(h + this.stackID(l) + ` (via recover-delete ${this.parser.getName(a)})`), nl(l, i)) : (!n || n.score < l.score) && (n = l);
    }
    return n;
  }
  stackToTree(e) {
    return e.close(), G.build({
      buffer: mn.create(e),
      nodeSet: this.parser.nodeSet,
      topID: this.topTerm,
      maxBufferLength: this.parser.bufferLength,
      reused: this.reused,
      start: this.ranges[0].from,
      length: e.pos - this.ranges[0].from,
      minRepeatType: this.parser.minRepeatTerm
    });
  }
  stackID(e) {
    let t = (Zn || (Zn = /* @__PURE__ */ new WeakMap())).get(e);
    return t || Zn.set(e, t = String.fromCodePoint(this.nextStackID++)), t + e;
  }
}
function nl(s, e) {
  for (let t = 0; t < e.length; t++) {
    let i = e[t];
    if (i.pos == s.pos && i.sameState(s)) {
      e[t].score < s.score && (e[t] = s);
      return;
    }
  }
  e.push(s);
}
class pg {
  constructor(e, t, i) {
    this.source = e, this.flags = t, this.disabled = i;
  }
  allows(e) {
    return !this.disabled || this.disabled[e] == 0;
  }
}
class yn extends Na {
  constructor(e) {
    if (super(), this.wrappers = [], e.version != 14)
      throw new RangeError(`Parser version (${e.version}) doesn't match runtime version (${14})`);
    let t = e.nodeNames.split(" ");
    this.minRepeatTerm = t.length;
    for (let l = 0; l < e.repeatNodeCount; l++)
      t.push("");
    let i = Object.keys(e.topRules).map((l) => e.topRules[l][1]), n = [];
    for (let l = 0; l < t.length; l++)
      n.push([]);
    function r(l, a, f) {
      n[l].push([a, a.deserialize(String(f))]);
    }
    if (e.nodeProps)
      for (let l of e.nodeProps) {
        let a = l[0];
        typeof a == "string" && (a = B[a]);
        for (let f = 1; f < l.length; ) {
          let h = l[f++];
          if (h >= 0)
            r(h, a, l[f++]);
          else {
            let c = l[f + -h];
            for (let u = -h; u > 0; u--)
              r(l[f++], a, c);
            f++;
          }
        }
      }
    this.nodeSet = new fr(t.map((l, a) => ue.define({
      name: a >= this.minRepeatTerm ? void 0 : l,
      id: a,
      props: n[a],
      top: i.indexOf(a) > -1,
      error: a == 0,
      skipped: e.skippedNodes && e.skippedNodes.indexOf(a) > -1
    }))), e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)), this.strict = !1, this.bufferLength = Ba;
    let o = _i(e.tokenData);
    this.context = e.context, this.specializerSpecs = e.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let l = 0; l < this.specializerSpecs.length; l++)
      this.specialized[l] = this.specializerSpecs[l].term;
    this.specializers = this.specializerSpecs.map(sl), this.states = _i(e.states, Uint32Array), this.data = _i(e.stateData), this.goto = _i(e.goto), this.maxTerm = e.maxTerm, this.tokenizers = e.tokenizers.map((l) => typeof l == "number" ? new Lt(o, l) : l), this.topRules = e.topRules, this.dialects = e.dialects || {}, this.dynamicPrecedences = e.dynamicPrecedences || null, this.tokenPrecTable = e.tokenPrec, this.termNames = e.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(e, t, i) {
    let n = new dg(this, e, t, i);
    for (let r of this.wrappers)
      n = r(n, e, t, i);
    return n;
  }
  getGoto(e, t, i = !1) {
    let n = this.goto;
    if (t >= n[0])
      return -1;
    for (let r = n[t + 1]; ; ) {
      let o = n[r++], l = o & 1, a = n[r++];
      if (l && i)
        return a;
      for (let f = r + (o >> 1); r < f; r++)
        if (n[r] == e)
          return a;
      if (l)
        return -1;
    }
  }
  hasAction(e, t) {
    let i = this.data;
    for (let n = 0; n < 2; n++)
      for (let r = this.stateSlot(e, n ? 2 : 1), o; ; r += 3) {
        if ((o = i[r]) == 65535)
          if (i[r + 1] == 1)
            o = i[r = Qe(i, r + 2)];
          else {
            if (i[r + 1] == 2)
              return Qe(i, r + 2);
            break;
          }
        if (o == t || o == 0)
          return Qe(i, r + 1);
      }
    return 0;
  }
  stateSlot(e, t) {
    return this.states[e * 6 + t];
  }
  stateFlag(e, t) {
    return (this.stateSlot(e, 0) & t) > 0;
  }
  validAction(e, t) {
    return !!this.allActions(e, (i) => i == t ? !0 : null);
  }
  allActions(e, t) {
    let i = this.stateSlot(e, 4), n = i ? t(i) : void 0;
    for (let r = this.stateSlot(e, 1); n == null; r += 3) {
      if (this.data[r] == 65535)
        if (this.data[r + 1] == 1)
          r = Qe(this.data, r + 2);
        else
          break;
      n = t(Qe(this.data, r + 1));
    }
    return n;
  }
  nextStates(e) {
    let t = [];
    for (let i = this.stateSlot(e, 1); ; i += 3) {
      if (this.data[i] == 65535)
        if (this.data[i + 1] == 1)
          i = Qe(this.data, i + 2);
        else
          break;
      if ((this.data[i + 2] & 1) == 0) {
        let n = this.data[i + 1];
        t.some((r, o) => o & 1 && r == n) || t.push(this.data[i], n);
      }
    }
    return t;
  }
  configure(e) {
    let t = Object.assign(Object.create(yn.prototype), this);
    if (e.props && (t.nodeSet = this.nodeSet.extend(...e.props)), e.top) {
      let i = this.topRules[e.top];
      if (!i)
        throw new RangeError(`Invalid top rule name ${e.top}`);
      t.top = i;
    }
    return e.tokenizers && (t.tokenizers = this.tokenizers.map((i) => {
      let n = e.tokenizers.find((r) => r.from == i);
      return n ? n.to : i;
    })), e.specializers && (t.specializers = this.specializers.slice(), t.specializerSpecs = this.specializerSpecs.map((i, n) => {
      let r = e.specializers.find((l) => l.from == i.external);
      if (!r)
        return i;
      let o = Object.assign(Object.assign({}, i), { external: r.to });
      return t.specializers[n] = sl(o), o;
    })), e.contextTracker && (t.context = e.contextTracker), e.dialect && (t.dialect = this.parseDialect(e.dialect)), e.strict != null && (t.strict = e.strict), e.wrap && (t.wrappers = t.wrappers.concat(e.wrap)), e.bufferLength != null && (t.bufferLength = e.bufferLength), t;
  }
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  getName(e) {
    return this.termNames ? this.termNames[e] : String(e <= this.maxNode && this.nodeSet.types[e].name || e);
  }
  get eofTerm() {
    return this.maxNode + 1;
  }
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  dynamicPrecedence(e) {
    let t = this.dynamicPrecedences;
    return t == null ? 0 : t[e] || 0;
  }
  parseDialect(e) {
    let t = Object.keys(this.dialects), i = t.map(() => !1);
    if (e)
      for (let r of e.split(" ")) {
        let o = t.indexOf(r);
        o >= 0 && (i[o] = !0);
      }
    let n = null;
    for (let r = 0; r < t.length; r++)
      if (!i[r])
        for (let o = this.dialects[t[r]], l; (l = this.data[o++]) != 65535; )
          (n || (n = new Uint8Array(this.maxTerm + 1)))[l] = 1;
    return new pg(e, i, n);
  }
  static deserialize(e) {
    return new yn(e);
  }
}
function Qe(s, e) {
  return s[e] | s[e + 1] << 16;
}
function gg(s) {
  let e = null;
  for (let t of s) {
    let i = t.p.stoppedAt;
    (t.pos == t.p.stream.end || i != null && t.pos > i) && t.p.parser.stateFlag(t.state, 2) && (!e || e.score < t.score) && (e = t);
  }
  return e;
}
function sl(s) {
  if (s.external) {
    let e = s.extend ? 1 : 0;
    return (t, i) => s.external(t, i) << 1 | e;
  }
  return s.get;
}
const mg = 36, rl = 1, yg = 2, Mt = 3, es = 4, bg = 5, xg = 6, kg = 7, wg = 8, vg = 9, Sg = 10, Cg = 11, Ag = 12, Og = 13, Mg = 14, Dg = 15, Tg = 16, Pg = 17, ol = 18, Bg = 19, Fh = 20, Vh = 21, ll = 22, Rg = 23, Eg = 24;
function $s(s) {
  return s >= 65 && s <= 90 || s >= 97 && s <= 122 || s >= 48 && s <= 57;
}
function Lg(s) {
  return s >= 48 && s <= 57 || s >= 97 && s <= 102 || s >= 65 && s <= 70;
}
function gt(s, e, t) {
  for (let i = !1; ; ) {
    if (s.next < 0)
      return;
    if (s.next == e && !i) {
      s.advance();
      return;
    }
    i = t && !i && s.next == 92, s.advance();
  }
}
function Ng(s, e) {
  e:
    for (; ; ) {
      if (s.next < 0)
        return;
      if (s.next == 36) {
        s.advance();
        for (let t = 0; t < e.length; t++) {
          if (s.next != e.charCodeAt(t))
            continue e;
          s.advance();
        }
        if (s.next == 36) {
          s.advance();
          return;
        }
      } else
        s.advance();
    }
}
function Ig(s, e) {
  let t = "[{<(".indexOf(String.fromCharCode(e)), i = t < 0 ? e : "]}>)".charCodeAt(t);
  for (; ; ) {
    if (s.next < 0)
      return;
    if (s.next == i && s.peek(1) == 39) {
      s.advance(2);
      return;
    }
    s.advance();
  }
}
function Us(s, e) {
  for (; !(s.next != 95 && !$s(s.next)); )
    e != null && (e += String.fromCharCode(s.next)), s.advance();
  return e;
}
function Fg(s) {
  if (s.next == 39 || s.next == 34 || s.next == 96) {
    let e = s.next;
    s.advance(), gt(s, e, !1);
  } else
    Us(s);
}
function al(s, e) {
  for (; s.next == 48 || s.next == 49; )
    s.advance();
  e && s.next == e && s.advance();
}
function hl(s, e) {
  for (; ; ) {
    if (s.next == 46) {
      if (e)
        break;
      e = !0;
    } else if (s.next < 48 || s.next > 57)
      break;
    s.advance();
  }
  if (s.next == 69 || s.next == 101)
    for (s.advance(), (s.next == 43 || s.next == 45) && s.advance(); s.next >= 48 && s.next <= 57; )
      s.advance();
}
function fl(s) {
  for (; !(s.next < 0 || s.next == 10); )
    s.advance();
}
function pt(s, e) {
  for (let t = 0; t < e.length; t++)
    if (e.charCodeAt(t) == s)
      return !0;
  return !1;
}
const ts = ` 	\r
`;
function Hh(s, e, t) {
  let i = /* @__PURE__ */ Object.create(null);
  i.true = i.false = bg, i.null = i.unknown = xg;
  for (let n of s.split(" "))
    n && (i[n] = Fh);
  for (let n of e.split(" "))
    n && (i[n] = Vh);
  for (let n of (t || "").split(" "))
    n && (i[n] = Eg);
  return i;
}
const zh = "array binary bit boolean char character clob date decimal double float int integer interval large national nchar nclob numeric object precision real smallint time timestamp varchar varying ", Wh = "absolute action add after all allocate alter and any are as asc assertion at authorization before begin between both breadth by call cascade cascaded case cast catalog check close collate collation column commit condition connect connection constraint constraints constructor continue corresponding count create cross cube current current_date current_default_transform_group current_transform_group_for_type current_path current_role current_time current_timestamp current_user cursor cycle data day deallocate declare default deferrable deferred delete depth deref desc describe descriptor deterministic diagnostics disconnect distinct do domain drop dynamic each else elseif end end-exec equals escape except exception exec execute exists exit external fetch first for foreign found from free full function general get global go goto grant group grouping handle having hold hour identity if immediate in indicator initially inner inout input insert intersect into is isolation join key language last lateral leading leave left level like limit local localtime localtimestamp locator loop map match method minute modifies module month names natural nesting new next no none not of old on only open option or order ordinality out outer output overlaps pad parameter partial path prepare preserve primary prior privileges procedure public read reads recursive redo ref references referencing relative release repeat resignal restrict result return returns revoke right role rollback rollup routine row rows savepoint schema scroll search second section select session session_user set sets signal similar size some space specific specifictype sql sqlexception sqlstate sqlwarning start state static system_user table temporary then timezone_hour timezone_minute to trailing transaction translation treat trigger under undo union unique unnest until update usage user using value values view when whenever where while with without work write year zone ", js = {
  backslashEscapes: !1,
  hashComments: !1,
  spaceAfterDashes: !1,
  slashComments: !1,
  doubleQuotedStrings: !1,
  doubleDollarQuotedStrings: !1,
  unquotedBitLiterals: !1,
  treatBitsAsBytes: !1,
  charSetCasts: !1,
  plsqlQuotingMechanism: !1,
  operatorChars: "*+-%<>!=&|~^/",
  specialVar: "?",
  identifierQuotes: '"',
  caseInsensitiveIdentifiers: !1,
  words: /* @__PURE__ */ Hh(Wh, zh)
};
function Vg(s, e, t, i) {
  let n = {};
  for (let r in js)
    n[r] = (s.hasOwnProperty(r) ? s : js)[r];
  return e && (n.words = Hh(e, t || "", i)), n;
}
function _h(s) {
  return new ag((e) => {
    var t;
    let { next: i } = e;
    if (e.advance(), pt(i, ts)) {
      for (; pt(e.next, ts); )
        e.advance();
      e.acceptToken(mg);
    } else if (i == 36 && s.doubleDollarQuotedStrings) {
      let n = Us(e, "");
      e.next == 36 && (e.advance(), Ng(e, n), e.acceptToken(Mt));
    } else if (i == 39 || i == 34 && s.doubleQuotedStrings)
      gt(e, i, s.backslashEscapes), e.acceptToken(Mt);
    else if (i == 35 && s.hashComments || i == 47 && e.next == 47 && s.slashComments)
      fl(e), e.acceptToken(rl);
    else if (i == 45 && e.next == 45 && (!s.spaceAfterDashes || e.peek(1) == 32))
      fl(e), e.acceptToken(rl);
    else if (i == 47 && e.next == 42) {
      e.advance();
      for (let n = 1; ; ) {
        let r = e.next;
        if (e.next < 0)
          break;
        if (e.advance(), r == 42 && e.next == 47) {
          if (n--, e.advance(), !n)
            break;
        } else
          r == 47 && e.next == 42 && (n++, e.advance());
      }
      e.acceptToken(yg);
    } else if ((i == 101 || i == 69) && e.next == 39)
      e.advance(), gt(e, 39, !0), e.acceptToken(Mt);
    else if ((i == 110 || i == 78) && e.next == 39 && s.charSetCasts)
      e.advance(), gt(e, 39, s.backslashEscapes), e.acceptToken(Mt);
    else if (i == 95 && s.charSetCasts)
      for (let n = 0; ; n++) {
        if (e.next == 39 && n > 1) {
          e.advance(), gt(e, 39, s.backslashEscapes), e.acceptToken(Mt);
          break;
        }
        if (!$s(e.next))
          break;
        e.advance();
      }
    else if (s.plsqlQuotingMechanism && (i == 113 || i == 81) && e.next == 39 && e.peek(1) > 0 && !pt(e.peek(1), ts)) {
      let n = e.peek(1);
      e.advance(2), Ig(e, n), e.acceptToken(Mt);
    } else if (i == 40)
      e.acceptToken(kg);
    else if (i == 41)
      e.acceptToken(wg);
    else if (i == 123)
      e.acceptToken(vg);
    else if (i == 125)
      e.acceptToken(Sg);
    else if (i == 91)
      e.acceptToken(Cg);
    else if (i == 93)
      e.acceptToken(Ag);
    else if (i == 59)
      e.acceptToken(Og);
    else if (s.unquotedBitLiterals && i == 48 && e.next == 98)
      e.advance(), al(e), e.acceptToken(ll);
    else if ((i == 98 || i == 66) && (e.next == 39 || e.next == 34)) {
      const n = e.next;
      e.advance(), s.treatBitsAsBytes ? (gt(e, n, s.backslashEscapes), e.acceptToken(Rg)) : (al(e, n), e.acceptToken(ll));
    } else if (i == 48 && (e.next == 120 || e.next == 88) || (i == 120 || i == 88) && e.next == 39) {
      let n = e.next == 39;
      for (e.advance(); Lg(e.next); )
        e.advance();
      n && e.next == 39 && e.advance(), e.acceptToken(es);
    } else if (i == 46 && e.next >= 48 && e.next <= 57)
      hl(e, !0), e.acceptToken(es);
    else if (i == 46)
      e.acceptToken(Mg);
    else if (i >= 48 && i <= 57)
      hl(e, !1), e.acceptToken(es);
    else if (pt(i, s.operatorChars)) {
      for (; pt(e.next, s.operatorChars); )
        e.advance();
      e.acceptToken(Dg);
    } else if (pt(i, s.specialVar))
      e.next == i && e.advance(), Fg(e), e.acceptToken(Pg);
    else if (pt(i, s.identifierQuotes))
      gt(e, i, !1), e.acceptToken(Bg);
    else if (i == 58 || i == 44)
      e.acceptToken(Tg);
    else if ($s(i)) {
      let n = Us(e, String.fromCharCode(i));
      e.acceptToken(e.next == 46 || e.peek(-n.length - 1) == 46 ? ol : (t = s.words[n.toLowerCase()]) !== null && t !== void 0 ? t : ol);
    }
  });
}
const qh = /* @__PURE__ */ _h(js), Hg = /* @__PURE__ */ yn.deserialize({
  version: 14,
  states: "%vQ]QQOOO#wQRO'#DSO$OQQO'#CwO%eQQO'#CxO%lQQO'#CyO%sQQO'#CzOOQQ'#DS'#DSOOQQ'#C}'#C}O'UQRO'#C{OOQQ'#Cv'#CvOOQQ'#C|'#C|Q]QQOOQOQQOOO'`QQO'#DOO(xQRO,59cO)PQQO,59cO)UQQO'#DSOOQQ,59d,59dO)cQQO,59dOOQQ,59e,59eO)jQQO,59eOOQQ,59f,59fO)qQQO,59fOOQQ-E6{-E6{OOQQ,59b,59bOOQQ-E6z-E6zOOQQ,59j,59jOOQQ-E6|-E6|O+VQRO1G.}O+^QQO,59cOOQQ1G/O1G/OOOQQ1G/P1G/POOQQ1G/Q1G/QP+kQQO'#C}O+rQQO1G.}O)PQQO,59cO,PQQO'#Cw",
  stateData: ",[~OtOSPOSQOS~ORUOSUOTUOUUOVROXSOZTO]XO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O^]ORvXSvXTvXUvXVvXXvXZvX]vX_vX`vXavXbvXcvXdvXevXfvXgvXhvX~OsvX~P!jOa_Ob_Oc_O~ORUOSUOTUOUUOVROXSOZTO^tO_UO`UOa`Ob`Oc`OdUOeUOfUOgUOhUO~OWaO~P$ZOYcO~P$ZO[eO~P$ZORUOSUOTUOUUOVROXSOZTO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O]hOsoX~P%zOajObjOcjO~O^]ORkaSkaTkaUkaVkaXkaZka]ka_ka`kaakabkackadkaekafkagkahka~Oska~P'kO^]O~OWvXYvX[vX~P!jOWnO~P$ZOYoO~P$ZO[pO~P$ZO^]ORkiSkiTkiUkiVkiXkiZki]ki_ki`kiakibkickidkiekifkigkihki~Oski~P)xOWkaYka[ka~P'kO]hO~P$ZOWkiYki[ki~P)xOasObsOcsO~O",
  goto: "#hwPPPPPPPPPPPPPPPPPPPPPPPPPPx||||!Y!^!d!xPPP#[TYOZeUORSTWZbdfqT[OZQZORiZSWOZQbRQdSQfTZgWbdfqQ^PWk^lmrQl_Qm`RrseVORSTWZbdfq",
  nodeNames: "\u26A0 LineComment BlockComment String Number Bool Null ( ) { } [ ] ; . Operator Punctuation SpecialVar Identifier QuotedIdentifier Keyword Type Bits Bytes Builtin Script Statement CompositeIdentifier Parens Braces Brackets Statement",
  maxTerm: 38,
  nodeProps: [
    ["isolate", -4, 1, 2, 3, 19, ""]
  ],
  skippedNodes: [0, 1, 2],
  repeatNodeCount: 3,
  tokenData: "RORO",
  tokenizers: [0, qh],
  topRules: { Script: [0, 25] },
  tokenPrec: 0
});
function Qs(s) {
  let e = s.cursor().moveTo(s.from, -1);
  for (; /Comment/.test(e.name); )
    e.moveTo(e.from, -1);
  return e.node;
}
function yi(s, e) {
  let t = s.sliceString(e.from, e.to), i = /^([`'"])(.*)\1$/.exec(t);
  return i ? i[2] : t;
}
function bn(s) {
  return s && (s.name == "Identifier" || s.name == "QuotedIdentifier");
}
function zg(s, e) {
  if (e.name == "CompositeIdentifier") {
    let t = [];
    for (let i = e.firstChild; i; i = i.nextSibling)
      bn(i) && t.push(yi(s, i));
    return t;
  }
  return [yi(s, e)];
}
function cl(s, e) {
  for (let t = []; ; ) {
    if (!e || e.name != ".")
      return t;
    let i = Qs(e);
    if (!bn(i))
      return t;
    t.unshift(yi(s, i)), e = Qs(i);
  }
}
function Wg(s, e) {
  let t = ae(s).resolveInner(e, -1), i = qg(s.doc, t);
  return t.name == "Identifier" || t.name == "QuotedIdentifier" || t.name == "Keyword" ? {
    from: t.from,
    quoted: t.name == "QuotedIdentifier" ? s.doc.sliceString(t.from, t.from + 1) : null,
    parents: cl(s.doc, Qs(t)),
    aliases: i
  } : t.name == "." ? { from: e, quoted: null, parents: cl(s.doc, t), aliases: i } : { from: e, quoted: null, parents: [], empty: !0, aliases: i };
}
const _g = /* @__PURE__ */ new Set(/* @__PURE__ */ "where group having order union intersect except all distinct limit offset fetch for".split(" "));
function qg(s, e) {
  let t;
  for (let n = e; !t; n = n.parent) {
    if (!n)
      return null;
    n.name == "Statement" && (t = n);
  }
  let i = null;
  for (let n = t.firstChild, r = !1, o = null; n; n = n.nextSibling) {
    let l = n.name == "Keyword" ? s.sliceString(n.from, n.to).toLowerCase() : null, a = null;
    if (!r)
      r = l == "from";
    else if (l == "as" && o && bn(n.nextSibling))
      a = yi(s, n.nextSibling);
    else {
      if (l && _g.has(l))
        break;
      o && bn(n) && (a = yi(s, n));
    }
    a && (i || (i = /* @__PURE__ */ Object.create(null)), i[a] = zg(s, o)), o = /Identifier$/.test(n.name) ? n : null;
  }
  return i;
}
function $g(s, e) {
  return s ? e.map((t) => Object.assign(Object.assign({}, t), { label: t.label[0] == s ? t.label : s + t.label + s, apply: void 0 })) : e;
}
const Ug = /^\w*$/, jg = /^[`'"]?\w*[`'"]?$/;
function ul(s) {
  return s.self && typeof s.self.label == "string";
}
class wr {
  constructor(e, t) {
    this.idQuote = e, this.idCaseInsensitive = t, this.list = [], this.children = void 0;
  }
  child(e) {
    let t = this.children || (this.children = /* @__PURE__ */ Object.create(null)), i = t[e];
    return i || (e && !this.list.some((n) => n.label == e) && this.list.push(dl(e, "type", this.idQuote, this.idCaseInsensitive)), t[e] = new wr(this.idQuote, this.idCaseInsensitive));
  }
  maybeChild(e) {
    return this.children ? this.children[e] : null;
  }
  addCompletion(e) {
    let t = this.list.findIndex((i) => i.label == e.label);
    t > -1 ? this.list[t] = e : this.list.push(e);
  }
  addCompletions(e) {
    for (let t of e)
      this.addCompletion(typeof t == "string" ? dl(t, "property", this.idQuote, this.idCaseInsensitive) : t);
  }
  addNamespace(e) {
    Array.isArray(e) ? this.addCompletions(e) : ul(e) ? this.addNamespace(e.children) : this.addNamespaceObject(e);
  }
  addNamespaceObject(e) {
    for (let t of Object.keys(e)) {
      let i = e[t], n = null, r = t.replace(/\\?\./g, (l) => l == "." ? "\0" : l).split("\0"), o = this;
      ul(i) && (n = i.self, i = i.children);
      for (let l = 0; l < r.length; l++)
        n && l == r.length - 1 && o.addCompletion(n), o = o.child(r[l].replace(/\\\./g, "."));
      o.addNamespace(i);
    }
  }
}
function dl(s, e, t, i) {
  return new RegExp("^[a-z_][a-z_\\d]*$", i ? "i" : "").test(s) ? { label: s, type: e } : { label: s, type: e, apply: t + s + t };
}
function Qg(s, e, t, i, n, r) {
  var o;
  let l = ((o = r == null ? void 0 : r.spec.identifierQuotes) === null || o === void 0 ? void 0 : o[0]) || '"', a = new wr(l, !!(r != null && r.spec.caseInsensitiveIdentifiers)), f = n ? a.child(n) : null;
  return a.addNamespace(s), e && (f || a).addCompletions(e), t && a.addCompletions(t), f && a.addCompletions(f.list), i && a.addCompletions((f || a).child(i).list), (h) => {
    let { parents: c, from: u, quoted: d, empty: p, aliases: g } = Wg(h.state, h.pos);
    if (p && !h.explicit)
      return null;
    g && c.length == 1 && (c = g[c[0]] || c);
    let m = a;
    for (let w of c) {
      for (; !m.children || !m.children[w]; )
        if (m == a && f)
          m = f;
        else if (m == f && i)
          m = m.child(i);
        else
          return null;
      let v = m.maybeChild(w);
      if (!v)
        return null;
      m = v;
    }
    let y = d && h.state.sliceDoc(h.pos, h.pos + 1) == d, x = m.list;
    return m == a && g && (x = x.concat(Object.keys(g).map((w) => ({ label: w, type: "constant" })))), {
      from: u,
      to: y ? h.pos + 1 : void 0,
      options: $g(d, x),
      validFor: d ? jg : Ug
    };
  };
}
function Kg(s) {
  return s == Vh ? "type" : s == Fh ? "keyword" : "variable";
}
function Gg(s, e, t) {
  let i = Object.keys(s).map((n) => t(e ? n.toUpperCase() : n, Kg(s[n])));
  return Dp(["QuotedIdentifier", "SpecialVar", "String", "LineComment", "BlockComment", "."], Oh(i));
}
let Xg = /* @__PURE__ */ Hg.configure({
  props: [
    /* @__PURE__ */ za.add({
      Statement: /* @__PURE__ */ _u()
    }),
    /* @__PURE__ */ Uu.add({
      Statement(s, e) {
        return { from: Math.min(s.from + 100, e.doc.lineAt(s.from).to), to: s.to };
      },
      BlockComment(s) {
        return { from: s.from + 2, to: s.to - 2 };
      }
    }),
    /* @__PURE__ */ Ia({
      Keyword: b.keyword,
      Type: b.typeName,
      Builtin: /* @__PURE__ */ b.standard(b.name),
      Bits: b.number,
      Bytes: b.string,
      Bool: b.bool,
      Null: b.null,
      Number: b.number,
      String: b.string,
      Identifier: b.name,
      QuotedIdentifier: /* @__PURE__ */ b.special(b.string),
      SpecialVar: /* @__PURE__ */ b.special(b.name),
      LineComment: b.lineComment,
      BlockComment: b.blockComment,
      Operator: b.operator,
      "Semi Punctuation": b.punctuation,
      "( )": b.paren,
      "{ }": b.brace,
      "[ ]": b.squareBracket
    })
  ]
});
class Bn {
  constructor(e, t, i) {
    this.dialect = e, this.language = t, this.spec = i;
  }
  get extension() {
    return this.language.extension;
  }
  static define(e) {
    let t = Vg(e, e.keywords, e.types, e.builtin), i = fn.define({
      name: "sql",
      parser: Xg.configure({
        tokenizers: [{ from: qh, to: _h(t) }]
      }),
      languageData: {
        commentTokens: { line: "--", block: { open: "/*", close: "*/" } },
        closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] }
      }
    });
    return new Bn(t, i, e);
  }
}
function Yg(s, e) {
  return { label: s, type: e, boost: -1 };
}
function Jg(s, e = !1, t) {
  return Gg(s.dialect.words, e, t || Yg);
}
function Zg(s) {
  return s.schema ? Qg(s.schema, s.tables, s.schemas, s.defaultTable, s.defaultSchema, s.dialect || vr) : () => null;
}
function em(s) {
  return s.schema ? (s.dialect || vr).language.data.of({
    autocomplete: Zg(s)
  }) : [];
}
function tm(s = {}) {
  let e = s.dialect || vr;
  return new Eu(e.language, [
    em(s),
    e.language.data.of({
      autocomplete: Jg(e, s.upperCaseKeywords, s.keywordCompletion)
    })
  ]);
}
const vr = /* @__PURE__ */ Bn.define({}), im = /* @__PURE__ */ Bn.define({
  charSetCasts: !0,
  doubleDollarQuotedStrings: !0,
  operatorChars: "+-*/<>=~!@#%^&|`?",
  specialVar: "",
  keywords: Wh + "abort abs absent access according ada admin aggregate alias also always analyse analyze array_agg array_max_cardinality asensitive assert assignment asymmetric atomic attach attribute attributes avg backward base64 begin_frame begin_partition bernoulli bit_length blocked bom cache called cardinality catalog_name ceil ceiling chain char_length character_length character_set_catalog character_set_name character_set_schema characteristics characters checkpoint class class_origin cluster coalesce cobol collation_catalog collation_name collation_schema collect column_name columns command_function command_function_code comment comments committed concurrently condition_number configuration conflict connection_name constant constraint_catalog constraint_name constraint_schema contains content control conversion convert copy corr cost covar_pop covar_samp csv cume_dist current_catalog current_row current_schema cursor_name database datalink datatype datetime_interval_code datetime_interval_precision db debug defaults defined definer degree delimiter delimiters dense_rank depends derived detach detail dictionary disable discard dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue document dump dynamic_function dynamic_function_code element elsif empty enable encoding encrypted end_frame end_partition endexec enforced enum errcode error event every exclude excluding exclusive exp explain expression extension extract family file filter final first_value flag floor following force foreach fortran forward frame_row freeze fs functions fusion generated granted greatest groups handler header hex hierarchy hint id ignore ilike immediately immutable implementation implicit import include including increment indent index indexes info inherit inherits inline insensitive instance instantiable instead integrity intersection invoker isnull key_member key_type label lag last_value lead leakproof least length library like_regex link listen ln load location lock locked log logged lower mapping matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text min minvalue mod mode more move multiset mumps name namespace nfc nfd nfkc nfkd nil normalize normalized nothing notice notify notnull nowait nth_value ntile nullable nullif nulls number occurrences_regex octet_length octets off offset oids operator options ordering others over overlay overriding owned owner parallel parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partition pascal passing passthrough password percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding prepared print_strict_params procedural procedures program publication query quote raise range rank reassign recheck recovery refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex rename repeatable replace replica requiring reset respect restart restore result_oid returned_cardinality returned_length returned_octet_length returned_sqlstate returning reverse routine_catalog routine_name routine_schema routines row_count row_number rowtype rule scale schema_name schemas scope scope_catalog scope_name scope_schema security selective self sensitive sequence sequences serializable server server_name setof share show simple skip slice snapshot source specific_name sqlcode sqlerror sqrt stable stacked standalone statement statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time table_name tables tablesample tablespace temp template ties token top_level_count transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex trigger_catalog trigger_name trigger_schema trim trim_array truncate trusted type types uescape unbounded uncommitted unencrypted unlink unlisten unlogged unnamed untyped upper uri use_column use_variable user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema vacuum valid validate validator value_of var_pop var_samp varbinary variable_conflict variadic verbose version versioning views volatile warning whitespace width_bucket window within wrapper xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate yes",
  types: zh + "bigint int8 bigserial serial8 varbit bool box bytea cidr circle precision float8 inet int4 json jsonb line lseg macaddr macaddr8 money numeric pg_lsn point polygon float4 int2 smallserial serial2 serial serial4 text timetz timestamptz tsquery tsvector txid_snapshot uuid xml"
});
function pl(s, e, t) {
  const i = wi.define([
    { tag: b.keyword, color: "#FFD596" },
    { tag: b.null, color: "#FFD596" },
    { tag: b.typeName, color: "#9CE7FF" },
    { tag: b.bool, color: "#fdffab" },
    { tag: b.number, color: "#fdffab" },
    { tag: b.operator, color: "#FFAFF3" },
    { tag: b.punctuation, color: "#FFAFF3" },
    { tag: b.brace, color: "#D16DCD" },
    { tag: b.paren, color: "#D16DCD" },
    { tag: b.bracket, color: "#D16DCD" },
    { tag: b.string, color: "#C8FFA7" },
    { tag: b.comment, color: "#888888", fontStyle: "italic" }
  ]);
  return I.create({
    doc: s,
    extensions: [
      kp(),
      yd(),
      $u(),
      Cn.of("    "),
      td(),
      ju(i),
      Kp(),
      fu(),
      du(),
      Kc(),
      Ma.of([
        bp,
        ...Jp,
        ...yp,
        ...Od,
        ...rg
      ]),
      T.updateListener.of((n) => {
        n.docChanged && t(n.state.doc.toString());
      }),
      T.editable.of(e),
      tm({ dialect: im })
    ]
  });
}
class nm extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["value"];
  }
  onUpdateValue(e) {
    this.value = e, this.dispatchEvent(new Event("input"));
  }
  attributeChangedCallback(e, t, i) {
    !this.editor || e === "value" && this.value == null && (this.editor.setState(
      pl(
        i,
        this.editable,
        (n) => this.onUpdateValue(n)
      )
    ), this.dispatchEvent(new Event("input")));
  }
  connectedCallback() {
    var e, t;
    this.editor = null, this.editable = ((e = this.getAttribute("editable")) != null ? e : !1) == "true", this.shadowRoot.innerHTML = `
            <div id="code-mirror-editor"></div>
            <style>
            :host {
                display: block;
                height: 100%;
                overflow: auto;
            }

            #code-mirror-editor {
                height: 100%;
            }

            #code-mirror-editor .cm-editor.cm-focused {
                outline: 0 !important;
            }

            #code-mirror-editor .cm-gutters {
                user-select: none;
                background-color: inherit;
                border-right: 0;
            }

            #code-mirror-editor .cm-lineNumbers {
                background-color: #2e2e2e;
            }

            #code-mirror-editor .cm-scroller {
                font-family: Menlo, Monaco, Consolas, 'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback';
                font-size: 14px;
                overflow: auto;
            }

            #code-mirror-editor .cm-editor.cm-focused .cm-activeLine,
            #code-mirror-editor .cm-editor.cm-focused .cm-activeLineGutter {
                background-color: rgb(130, 130, 130, 0.1);
            }

            #code-mirror-editor .cm-editor:not(.cm-focused) .cm-activeLine,
            #code-mirror-editor .cm-editor:not(.cm-focused) .cm-activeLineGutter {
                background-color: transparent;
            }

            #code-mirror-editor .cm-foldGutter span {
                font-size: 1.1rem;
                line-height: 1.1rem;
                color: rgb(130, 130, 130, 0.5);
            }

            #code-mirror-editor .cm-foldGutter span:hover {
                color: #999999;
            }

            #code-mirror-editor .cm-editor {
                height: 100%;
            }

            #code-mirror-editor .cm-editor .cm-content {
                caret-color: #ffffff;
            }
            </style>
        `, this.editor = new T({
      parent: this.shadowRoot.querySelector("#code-mirror-editor"),
      state: pl(
        (t = this.getAttribute("value")) != null ? t : "-- type your query here",
        this.editable,
        (i) => this.onUpdateValue(i)
      )
    }), this.hasAttribute("autofocus") && this.editor.focus();
  }
}
customElements.define("code-mirror", nm);
