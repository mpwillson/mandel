;(function(){
var g, aa = this;
function p(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ba(a) {
  var b = p(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function ca(a) {
  return "string" == typeof a;
}
function da(a) {
  return "function" == p(a);
}
function ea(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
function ga(a) {
  return a[ha] || (a[ha] = ++ia);
}
var ha = "closure_uid_" + (1E9 * Math.random() >>> 0), ia = 0;
function ja(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ka(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function la(a, b, c) {
  la = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
  return la.apply(null, arguments);
}
function ma(a, b) {
  var c = a.split("."), d = aa;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b;
  }
}
function na(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.eb = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
}
;function oa(a) {
  if (!pa.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(qa, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(ra, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(sa, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(ua, "\x26quot;"));
  return a;
}
var qa = /&/g, ra = /</g, sa = />/g, ua = /\"/g, pa = /[&<>\"]/;
function va(a) {
  for (var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
}
;var wa = Array.prototype, xa = wa.indexOf ? function(a, b, c) {
  return wa.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ca(a)) {
    return ca(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, ya = wa.forEach ? function(a, b, c) {
  wa.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = ca(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
};
function za(a, b) {
  var c = xa(a, b);
  0 <= c && wa.splice.call(a, c, 1);
}
function Aa(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
function Ca(a, b, c, d) {
  wa.splice.apply(a, Da(arguments, 1));
}
function Da(a, b, c) {
  return 2 >= arguments.length ? wa.slice.call(a, b) : wa.slice.call(a, b, c);
}
;function Ea(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
var Fa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ga(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < Fa.length;f++) {
      c = Fa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;function Ha(a, b) {
  null != a && this.append.apply(this, arguments);
}
Ha.prototype.La = "";
Ha.prototype.append = function(a, b, c) {
  this.La += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.La += arguments[d];
    }
  }
  return this;
};
Ha.prototype.toString = function() {
  return this.La;
};
var Ia, Ja = null;
function Ka() {
  return new La(null, 5, [Ma, !0, Na, !0, Oa, !1, Pa, !1, Qa, null], null);
}
function r(a) {
  return null != a && !1 !== a;
}
function Ra(a) {
  return r(a) ? !1 : !0;
}
function s(a, b) {
  return a[p(null == b ? null : b)] ? !0 : a._ ? !0 : t ? !1 : null;
}
function Sa(a) {
  return null == a ? null : a.constructor;
}
function u(a, b) {
  var c = Sa(b), c = r(r(c) ? c.hc : c) ? c.gc : p(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Ta(a) {
  var b = a.gc;
  return r(b) ? b : "" + v(a);
}
function x(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Ua = {}, Wa = {};
function Xa(a) {
  if (a ? a.M : a) {
    return a.M(a);
  }
  var b;
  b = Xa[p(null == a ? null : a)];
  if (!b && (b = Xa._, !b)) {
    throw u("ICounted.-count", a);
  }
  return b.call(null, a);
}
function Ya(a) {
  if (a ? a.J : a) {
    return a.J(a);
  }
  var b;
  b = Ya[p(null == a ? null : a)];
  if (!b && (b = Ya._, !b)) {
    throw u("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
function Za(a, b) {
  if (a ? a.D : a) {
    return a.D(a, b);
  }
  var c;
  c = Za[p(null == a ? null : a)];
  if (!c && (c = Za._, !c)) {
    throw u("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var $a = {}, y = function() {
  function a(a, b, c) {
    if (a ? a.ba : a) {
      return a.ba(a, b, c);
    }
    var h;
    h = y[p(null == a ? null : a)];
    if (!h && (h = y._, !h)) {
      throw u("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.C : a) {
      return a.C(a, b);
    }
    var c;
    c = y[p(null == a ? null : a)];
    if (!c && (c = y._, !c)) {
      throw u("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), ab = {};
function z(a) {
  if (a ? a.Q : a) {
    return a.Q(a);
  }
  var b;
  b = z[p(null == a ? null : a)];
  if (!b && (b = z._, !b)) {
    throw u("ISeq.-first", a);
  }
  return b.call(null, a);
}
function A(a) {
  if (a ? a.U : a) {
    return a.U(a);
  }
  var b;
  b = A[p(null == a ? null : a)];
  if (!b && (b = A._, !b)) {
    throw u("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var bb = {}, cb = {}, B = function() {
  function a(a, b, c) {
    if (a ? a.O : a) {
      return a.O(a, b, c);
    }
    var h;
    h = B[p(null == a ? null : a)];
    if (!h && (h = B._, !h)) {
      throw u("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.N : a) {
      return a.N(a, b);
    }
    var c;
    c = B[p(null == a ? null : a)];
    if (!c && (c = B._, !c)) {
      throw u("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function db(a, b) {
  if (a ? a.wb : a) {
    return a.wb(a, b);
  }
  var c;
  c = db[p(null == a ? null : a)];
  if (!c && (c = db._, !c)) {
    throw u("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function eb(a, b, c) {
  if (a ? a.Ua : a) {
    return a.Ua(a, b, c);
  }
  var d;
  d = eb[p(null == a ? null : a)];
  if (!d && (d = eb._, !d)) {
    throw u("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var fb = {}, gb = {};
function hb(a) {
  if (a ? a.Nb : a) {
    return a.Nb();
  }
  var b;
  b = hb[p(null == a ? null : a)];
  if (!b && (b = hb._, !b)) {
    throw u("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function ib(a) {
  if (a ? a.bc : a) {
    return a.bc();
  }
  var b;
  b = ib[p(null == a ? null : a)];
  if (!b && (b = ib._, !b)) {
    throw u("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var jb = {}, kb = {};
function lb(a, b, c) {
  if (a ? a.Ob : a) {
    return a.Ob(a, b, c);
  }
  var d;
  d = lb[p(null == a ? null : a)];
  if (!d && (d = lb._, !d)) {
    throw u("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function C(a) {
  if (a ? a.vc : a) {
    return a.state;
  }
  var b;
  b = C[p(null == a ? null : a)];
  if (!b && (b = C._, !b)) {
    throw u("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var mb = {};
function nb(a) {
  if (a ? a.F : a) {
    return a.F(a);
  }
  var b;
  b = nb[p(null == a ? null : a)];
  if (!b && (b = nb._, !b)) {
    throw u("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var ob = {};
function pb(a, b) {
  if (a ? a.H : a) {
    return a.H(a, b);
  }
  var c;
  c = pb[p(null == a ? null : a)];
  if (!c && (c = pb._, !c)) {
    throw u("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var rb = {}, sb = function() {
  function a(a, b, c) {
    if (a ? a.T : a) {
      return a.T(a, b, c);
    }
    var h;
    h = sb[p(null == a ? null : a)];
    if (!h && (h = sb._, !h)) {
      throw u("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.S : a) {
      return a.S(a, b);
    }
    var c;
    c = sb[p(null == a ? null : a)];
    if (!c && (c = sb._, !c)) {
      throw u("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function tb(a, b) {
  if (a ? a.v : a) {
    return a.v(a, b);
  }
  var c;
  c = tb[p(null == a ? null : a)];
  if (!c && (c = tb._, !c)) {
    throw u("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function ub(a) {
  if (a ? a.w : a) {
    return a.w(a);
  }
  var b;
  b = ub[p(null == a ? null : a)];
  if (!b && (b = ub._, !b)) {
    throw u("IHash.-hash", a);
  }
  return b.call(null, a);
}
var vb = {};
function wb(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = wb[p(null == a ? null : a)];
  if (!b && (b = wb._, !b)) {
    throw u("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var xb = {};
function D(a, b) {
  if (a ? a.fc : a) {
    return a.fc(0, b);
  }
  var c;
  c = D[p(null == a ? null : a)];
  if (!c && (c = D._, !c)) {
    throw u("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var yb = {};
function zb(a, b, c) {
  if (a ? a.A : a) {
    return a.A(a, b, c);
  }
  var d;
  d = zb[p(null == a ? null : a)];
  if (!d && (d = zb._, !d)) {
    throw u("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function Ab(a, b, c) {
  if (a ? a.ec : a) {
    return a.ec(0, b, c);
  }
  var d;
  d = Ab[p(null == a ? null : a)];
  if (!d && (d = Ab._, !d)) {
    throw u("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function Bb(a) {
  if (a ? a.Va : a) {
    return a.Va(a);
  }
  var b;
  b = Bb[p(null == a ? null : a)];
  if (!b && (b = Bb._, !b)) {
    throw u("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function Cb(a, b) {
  if (a ? a.Ha : a) {
    return a.Ha(a, b);
  }
  var c;
  c = Cb[p(null == a ? null : a)];
  if (!c && (c = Cb._, !c)) {
    throw u("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function Db(a) {
  if (a ? a.Ia : a) {
    return a.Ia(a);
  }
  var b;
  b = Db[p(null == a ? null : a)];
  if (!b && (b = Db._, !b)) {
    throw u("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function Eb(a, b, c) {
  if (a ? a.Xa : a) {
    return a.Xa(a, b, c);
  }
  var d;
  d = Eb[p(null == a ? null : a)];
  if (!d && (d = Eb._, !d)) {
    throw u("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Fb(a, b, c) {
  if (a ? a.dc : a) {
    return a.dc(0, b, c);
  }
  var d;
  d = Fb[p(null == a ? null : a)];
  if (!d && (d = Fb._, !d)) {
    throw u("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Gb(a) {
  if (a ? a.Zb : a) {
    return a.Zb();
  }
  var b;
  b = Gb[p(null == a ? null : a)];
  if (!b && (b = Gb._, !b)) {
    throw u("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function Hb(a) {
  if (a ? a.yb : a) {
    return a.yb(a);
  }
  var b;
  b = Hb[p(null == a ? null : a)];
  if (!b && (b = Hb._, !b)) {
    throw u("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function G(a) {
  if (a ? a.zb : a) {
    return a.zb(a);
  }
  var b;
  b = G[p(null == a ? null : a)];
  if (!b && (b = G._, !b)) {
    throw u("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Ib(a) {
  if (a ? a.xb : a) {
    return a.xb(a);
  }
  var b;
  b = Ib[p(null == a ? null : a)];
  if (!b && (b = Ib._, !b)) {
    throw u("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Jb(a) {
  this.Mc = a;
  this.q = 0;
  this.h = 1073741824;
}
Jb.prototype.fc = function(a, b) {
  return this.Mc.append(b);
};
function Kb(a) {
  var b = new Ha;
  a.A(null, new Jb(b), Ka());
  return "" + v(b);
}
function Lb(a, b) {
  if (r(Mb.a ? Mb.a(a, b) : Mb.call(null, a, b))) {
    return 0;
  }
  var c = Ra(a.V);
  if (r(c ? b.V : c)) {
    return-1;
  }
  if (r(a.V)) {
    if (Ra(b.V)) {
      return 1;
    }
    c = Nb.a ? Nb.a(a.V, b.V) : Nb.call(null, a.V, b.V);
    return 0 === c ? Nb.a ? Nb.a(a.name, b.name) : Nb.call(null, a.name, b.name) : c;
  }
  return Ob ? Nb.a ? Nb.a(a.name, b.name) : Nb.call(null, a.name, b.name) : null;
}
function Pb(a, b, c, d, e) {
  this.V = a;
  this.name = b;
  this.Fa = c;
  this.Ga = d;
  this.ea = e;
  this.h = 2154168321;
  this.q = 4096;
}
g = Pb.prototype;
g.A = function(a, b) {
  return D(b, this.Fa);
};
g.w = function() {
  var a = this.Ga;
  return null != a ? a : this.Ga = a = Qb.a ? Qb.a(H.c ? H.c(this.V) : H.call(null, this.V), H.c ? H.c(this.name) : H.call(null, this.name)) : Qb.call(null, H.c ? H.c(this.V) : H.call(null, this.V), H.c ? H.c(this.name) : H.call(null, this.name));
};
g.H = function(a, b) {
  return new Pb(this.V, this.name, this.Fa, this.Ga, b);
};
g.F = function() {
  return this.ea;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return B.b(c, this, null);
      case 3:
        return B.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.c = function(a) {
  return B.b(a, this, null);
};
g.a = function(a, b) {
  return B.b(a, this, b);
};
g.v = function(a, b) {
  return b instanceof Pb ? this.Fa === b.Fa : !1;
};
g.toString = function() {
  return this.Fa;
};
var Rb = function() {
  function a(a, b) {
    var c = null != a ? [v(a), v("/"), v(b)].join("") : b;
    return new Pb(a, b, c, null, null);
  }
  function b(a) {
    return a instanceof Pb ? a : c.a(null, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}();
function I(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.h & 8388608 || a.Tc)) {
    return a.G(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Sb(a, 0);
  }
  if (s(vb, a)) {
    return wb(a);
  }
  if (t) {
    throw Error([v(a), v("is not ISeqable")].join(""));
  }
  return null;
}
function J(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.h & 64 || a.Wa)) {
    return a.Q(null);
  }
  a = I(a);
  return null == a ? null : z(a);
}
function K(a) {
  return null != a ? a && (a.h & 64 || a.Wa) ? a.U(null) : (a = I(a)) ? A(a) : L : L;
}
function M(a) {
  return null == a ? null : a && (a.h & 128 || a.cc) ? a.X(null) : I(K(a));
}
var Mb = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || tb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (M(e)) {
            a = d, d = J(e), e = M(e);
          } else {
            return b.a(d, J(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.p = 2;
    a.l = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return c(b, d, a);
    };
    a.g = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.g(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.l = c.l;
  b.c = function() {
    return!0;
  };
  b.a = a;
  b.g = c.g;
  return b;
}();
Wa["null"] = !0;
Xa["null"] = function() {
  return 0;
};
Date.prototype.v = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
tb.number = function(a, b) {
  return a === b;
};
mb["function"] = !0;
nb["function"] = function() {
  return null;
};
Ua["function"] = !0;
ub._ = function(a) {
  return ga(a);
};
var Tb = function() {
  function a(a, b, c, d) {
    for (var l = Xa(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, y.a(a, d)) : b.call(null, c, y.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = Xa(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, y.a(a, l)) : b.call(null, c, y.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = Xa(a);
    if (0 === c) {
      return b.aa ? b.aa() : b.call(null);
    }
    for (var d = y.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, y.a(a, l)) : b.call(null, d, y.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.n = a;
  return d;
}(), Ub = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.aa ? b.aa() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.n = a;
  return d;
}();
function Vb(a) {
  return a ? a.h & 2 || a.uc ? !0 : a.h ? !1 : s(Wa, a) : s(Wa, a);
}
function Wb(a) {
  return a ? a.h & 16 || a.$b ? !0 : a.h ? !1 : s($a, a) : s($a, a);
}
function Sb(a, b) {
  this.e = a;
  this.o = b;
  this.h = 166199550;
  this.q = 8192;
}
g = Sb.prototype;
g.w = function() {
  return Xb.c ? Xb.c(this) : Xb.call(null, this);
};
g.X = function() {
  return this.o + 1 < this.e.length ? new Sb(this.e, this.o + 1) : null;
};
g.D = function(a, b) {
  return O.a ? O.a(b, this) : O.call(null, b, this);
};
g.toString = function() {
  return Kb(this);
};
g.S = function(a, b) {
  return Ub.n(this.e, b, this.e[this.o], this.o + 1);
};
g.T = function(a, b, c) {
  return Ub.n(this.e, b, c, this.o);
};
g.G = function() {
  return this;
};
g.M = function() {
  return this.e.length - this.o;
};
g.Q = function() {
  return this.e[this.o];
};
g.U = function() {
  return this.o + 1 < this.e.length ? new Sb(this.e, this.o + 1) : L;
};
g.v = function(a, b) {
  return Yb.a ? Yb.a(this, b) : Yb.call(null, this, b);
};
g.C = function(a, b) {
  var c = b + this.o;
  return c < this.e.length ? this.e[c] : null;
};
g.ba = function(a, b, c) {
  a = b + this.o;
  return a < this.e.length ? this.e[a] : c;
};
g.J = function() {
  return L;
};
var Zb = function() {
  function a(a, b) {
    return b < a.length ? new Sb(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}(), N = function() {
  function a(a, b) {
    return Zb.a(a, b);
  }
  function b(a) {
    return Zb.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}();
tb._ = function(a, b) {
  return a === b;
};
var $b = function() {
  function a(a, b) {
    return null != a ? Za(a, b) : Za(L, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (r(e)) {
          a = b.a(a, d), d = J(e), e = M(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.p = 2;
    a.l = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return c(b, d, a);
    };
    a.g = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.g(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.l = c.l;
  b.a = a;
  b.g = c.g;
  return b;
}();
function P(a) {
  if (null != a) {
    if (a && (a.h & 2 || a.uc)) {
      a = a.M(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (s(Wa, a)) {
            a = Xa(a);
          } else {
            if (t) {
              a: {
                a = I(a);
                for (var b = 0;;) {
                  if (Vb(a)) {
                    a = b + Xa(a);
                    break a;
                  }
                  a = M(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var ac = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return I(a) ? J(a) : c;
      }
      if (Wb(a)) {
        return y.b(a, b, c);
      }
      if (I(a)) {
        a = M(a), b -= 1;
      } else {
        return t ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (I(a)) {
          return J(a);
        }
        throw Error("Index out of bounds");
      }
      if (Wb(a)) {
        return y.a(a, b);
      }
      if (I(a)) {
        var c = M(a), h = b - 1;
        a = c;
        b = h;
      } else {
        if (t) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), R = function() {
  function a(a, b, c) {
    if (null != a) {
      if (a && (a.h & 16 || a.$b)) {
        return a.ba(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (s($a, a)) {
        return y.a(a, b);
      }
      if (t) {
        if (a ? a.h & 64 || a.Wa || (a.h ? 0 : s(ab, a)) : s(ab, a)) {
          return ac.b(a, b, c);
        }
        throw Error([v("nth not supported on this type "), v(Ta(Sa(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.h & 16 || a.$b)) {
      return a.C(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (s($a, a)) {
      return y.a(a, b);
    }
    if (t) {
      if (a ? a.h & 64 || a.Wa || (a.h ? 0 : s(ab, a)) : s(ab, a)) {
        return ac.a(a, b);
      }
      throw Error([v("nth not supported on this type "), v(Ta(Sa(a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), S = function() {
  function a(a, b, c) {
    return null != a ? a && (a.h & 256 || a.ac) ? a.O(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : s(cb, a) ? B.b(a, b, c) : t ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.h & 256 || a.ac) ? a.N(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : s(cb, a) ? B.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), cc = function() {
  function a(a, b, c) {
    return null != a ? eb(a, b, c) : bc.a ? bc.a([b], [c]) : bc.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var n = null;
      3 < arguments.length && (n = N(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, n);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.b(a, d, e), r(l)) {
          d = J(l), e = J(M(l)), l = M(M(l));
        } else {
          return a;
        }
      }
    }
    a.p = 3;
    a.l = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var l = J(a);
      a = K(a);
      return c(b, d, l, a);
    };
    a.g = c;
    return a;
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.g(b, e, f, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 3;
  b.l = c.l;
  b.b = a;
  b.g = c.g;
  return b;
}();
function dc(a) {
  var b = da(a);
  return b ? b : a ? r(r(null) ? null : a.tc) ? !0 : a.Xc ? !1 : s(Ua, a) : s(Ua, a);
}
var fc = function ec(b, c) {
  return dc(b) && !(b ? b.h & 262144 || b.Fc || (b.h ? 0 : s(ob, b)) : s(ob, b)) ? ec(function() {
    "undefined" === typeof Ia && (Ia = function(b, c, f, h) {
      this.j = b;
      this.bb = c;
      this.Oc = f;
      this.Kc = h;
      this.q = 0;
      this.h = 393217;
    }, Ia.hc = !0, Ia.gc = "cljs.core/t5276", Ia.Gc = function(b) {
      return D(b, "cljs.core/t5276");
    }, Ia.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return T.a ? T.a(b.bb, d) : T.call(null, b.bb, d);
      }
      b.p = 1;
      b.l = function(b) {
        var d = J(b);
        b = K(b);
        return c(d, b);
      };
      b.g = c;
      return b;
    }(), Ia.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(x(c)));
    }, Ia.prototype.a = function() {
      function b(d) {
        var h = null;
        0 < arguments.length && (h = N(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, h);
      }
      function c(b) {
        return T.a ? T.a(self__.bb, b) : T.call(null, self__.bb, b);
      }
      b.p = 0;
      b.l = function(b) {
        b = I(b);
        return c(b);
      };
      b.g = c;
      return b;
    }(), Ia.prototype.tc = !0, Ia.prototype.F = function() {
      return this.Kc;
    }, Ia.prototype.H = function(b, c) {
      return new Ia(this.j, this.bb, this.Oc, c);
    });
    return new Ia(c, b, ec, null);
  }(), c) : null == b ? null : pb(b, c);
};
function gc(a) {
  var b = null != a;
  return(b ? a ? a.h & 131072 || a.xc || (a.h ? 0 : s(mb, a)) : s(mb, a) : b) ? nb(a) : null;
}
var hc = {}, ic = 0;
function H(a) {
  if (a && (a.h & 4194304 || a.Rc)) {
    a = a.w(null);
  } else {
    if ("number" === typeof a) {
      a = Math.floor(a) % 2147483647;
    } else {
      if (!0 === a) {
        a = 1;
      } else {
        if (!1 === a) {
          a = 0;
        } else {
          if ("string" === typeof a) {
            255 < ic && (hc = {}, ic = 0);
            var b = hc[a];
            "number" !== typeof b && (b = va(a), hc[a] = b, ic += 1);
            a = b;
          } else {
            a = null == a ? 0 : t ? ub(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function jc(a) {
  return a ? a.h & 16777216 || a.Uc ? !0 : a.h ? !1 : s(xb, a) : s(xb, a);
}
function kc(a) {
  return null == a ? !1 : a ? a.h & 1024 || a.Sc ? !0 : a.h ? !1 : s(fb, a) : s(fb, a);
}
function lc(a) {
  return a ? a.h & 16384 || a.Wc ? !0 : a.h ? !1 : s(kb, a) : s(kb, a);
}
function mc(a) {
  return a ? a.q & 512 || a.Pc ? !0 : !1 : !1;
}
function nc(a) {
  var b = [];
  Ea(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function oc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var pc = {};
function qc(a) {
  return null == a ? !1 : a ? a.h & 64 || a.Wa ? !0 : a.h ? !1 : s(ab, a) : s(ab, a);
}
function rc(a) {
  return r(a) ? !0 : !1;
}
function Nb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (Sa(a) === Sa(b)) {
    return a && (a.q & 2048 || a.jb) ? a.kb(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (t) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var tc = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = Nb(R.a(a, h), R.a(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = P(a), h = P(b);
    return f < h ? -1 : f > h ? 1 : t ? c.n(a, b, f, 0) : null;
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.n = a;
  return c;
}(), vc = function() {
  function a(a, b, c) {
    for (c = I(c);;) {
      if (c) {
        b = a.a ? a.a(b, J(c)) : a.call(null, b, J(c)), c = M(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = I(b);
    return c ? uc.b ? uc.b(a, J(c), M(c)) : uc.call(null, a, J(c), M(c)) : a.aa ? a.aa() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), uc = function() {
  function a(a, b, c) {
    return c && (c.h & 524288 || c.zc) ? c.T(null, a, b) : c instanceof Array ? Ub.b(c, a, b) : "string" === typeof c ? Ub.b(c, a, b) : s(rb, c) ? sb.b(c, a, b) : t ? vc.b(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.h & 524288 || b.zc) ? b.S(null, a) : b instanceof Array ? Ub.a(b, a) : "string" === typeof b ? Ub.a(b, a) : s(rb, b) ? sb.a(b, a) : t ? vc.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function wc(a) {
  return 0 <= a ? Math.floor.c ? Math.floor.c(a) : Math.floor.call(null, a) : Math.ceil.c ? Math.ceil.c(a) : Math.ceil.call(null, a);
}
function xc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var v = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new Ha(b.c(a)), l = d;;) {
        if (r(l)) {
          e = e.append(b.c(J(l))), l = M(l);
        } else {
          return e.toString();
        }
      }
    }
    a.p = 1;
    a.l = function(a) {
      var b = J(a);
      a = K(a);
      return c(b, a);
    };
    a.g = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 1;
  b.l = c.l;
  b.aa = function() {
    return "";
  };
  b.c = a;
  b.g = c.g;
  return b;
}(), yc = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return a.substring(c);
  };
  a.b = function(a, c, d) {
    return a.substring(c, d);
  };
  return a;
}();
function Yb(a, b) {
  return rc(jc(b) ? function() {
    for (var c = I(a), d = I(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (Mb.a(J(c), J(d))) {
        c = M(c), d = M(d);
      } else {
        return t ? !1 : null;
      }
    }
  }() : null);
}
function Qb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Xb(a) {
  if (I(a)) {
    var b = H(J(a));
    for (a = M(a);;) {
      if (null == a) {
        return b;
      }
      b = Qb(b, H(J(a)));
      a = M(a);
    }
  } else {
    return 0;
  }
}
function zc(a) {
  var b = 0;
  for (a = I(a);;) {
    if (a) {
      var c = J(a), b = (b + (H(Ac.c ? Ac.c(c) : Ac.call(null, c)) ^ H(Bc.c ? Bc.c(c) : Bc.call(null, c)))) % 4503599627370496;
      a = M(a);
    } else {
      return b;
    }
  }
}
function Cc(a, b, c, d, e) {
  this.j = a;
  this.$a = b;
  this.va = c;
  this.count = d;
  this.m = e;
  this.h = 65937646;
  this.q = 8192;
}
g = Cc.prototype;
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Xb(this);
};
g.X = function() {
  return 1 === this.count ? null : this.va;
};
g.D = function(a, b) {
  return new Cc(this.j, b, this, this.count + 1, null);
};
g.toString = function() {
  return Kb(this);
};
g.S = function(a, b) {
  return vc.a(b, this);
};
g.T = function(a, b, c) {
  return vc.b(b, c, this);
};
g.G = function() {
  return this;
};
g.M = function() {
  return this.count;
};
g.Q = function() {
  return this.$a;
};
g.U = function() {
  return 1 === this.count ? L : this.va;
};
g.v = function(a, b) {
  return Yb(this, b);
};
g.H = function(a, b) {
  return new Cc(b, this.$a, this.va, this.count, this.m);
};
g.F = function() {
  return this.j;
};
g.J = function() {
  return L;
};
function Dc(a) {
  this.j = a;
  this.h = 65937614;
  this.q = 8192;
}
g = Dc.prototype;
g.w = function() {
  return 0;
};
g.X = function() {
  return null;
};
g.D = function(a, b) {
  return new Cc(this.j, b, null, 1, null);
};
g.toString = function() {
  return Kb(this);
};
g.S = function(a, b) {
  return vc.a(b, this);
};
g.T = function(a, b, c) {
  return vc.b(b, c, this);
};
g.G = function() {
  return null;
};
g.M = function() {
  return 0;
};
g.Q = function() {
  return null;
};
g.U = function() {
  return L;
};
g.v = function(a, b) {
  return Yb(this, b);
};
g.H = function(a, b) {
  return new Dc(b);
};
g.F = function() {
  return this.j;
};
g.J = function() {
  return this;
};
var L = new Dc(null), Ec = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Sb && 0 === a.o) {
      b = a.e;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.Q(null)), a = a.X(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = L;;) {
      if (0 < a) {
        var f = a - 1, e = e.D(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.p = 0;
  a.l = function(a) {
    a = I(a);
    return b(a);
  };
  a.g = b;
  return a;
}();
function Fc(a, b, c, d) {
  this.j = a;
  this.$a = b;
  this.va = c;
  this.m = d;
  this.h = 65929452;
  this.q = 8192;
}
g = Fc.prototype;
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Xb(this);
};
g.X = function() {
  return null == this.va ? null : I(this.va);
};
g.D = function(a, b) {
  return new Fc(null, b, this, this.m);
};
g.toString = function() {
  return Kb(this);
};
g.S = function(a, b) {
  return vc.a(b, this);
};
g.T = function(a, b, c) {
  return vc.b(b, c, this);
};
g.G = function() {
  return this;
};
g.Q = function() {
  return this.$a;
};
g.U = function() {
  return null == this.va ? L : this.va;
};
g.v = function(a, b) {
  return Yb(this, b);
};
g.H = function(a, b) {
  return new Fc(b, this.$a, this.va, this.m);
};
g.F = function() {
  return this.j;
};
g.J = function() {
  return fc(L, this.j);
};
function O(a, b) {
  var c = null == b;
  return(c ? c : b && (b.h & 64 || b.Wa)) ? new Fc(null, a, b, null) : new Fc(null, a, I(b), null);
}
function U(a, b, c, d) {
  this.V = a;
  this.name = b;
  this.za = c;
  this.Ga = d;
  this.h = 2153775105;
  this.q = 4096;
}
g = U.prototype;
g.A = function(a, b) {
  return D(b, [v(":"), v(this.za)].join(""));
};
g.w = function() {
  null == this.Ga && (this.Ga = Qb(H(this.V), H(this.name)) + 2654435769);
  return this.Ga;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return S.a(c, this);
      case 3:
        return S.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.c = function(a) {
  return S.a(a, this);
};
g.a = function(a, b) {
  return S.b(a, this, b);
};
g.v = function(a, b) {
  return b instanceof U ? this.za === b.za : !1;
};
g.toString = function() {
  return[v(":"), v(this.za)].join("");
};
var Hc = function() {
  function a(a, b) {
    return new U(a, b, [v(r(a) ? [v(a), v("/")].join("") : null), v(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof U) {
      return a;
    }
    if (a instanceof Pb) {
      var b;
      if (a && (a.q & 4096 || a.yc)) {
        b = a.V;
      } else {
        throw Error([v("Doesn't support namespace: "), v(a)].join(""));
      }
      return new U(b, Gc.c ? Gc.c(a) : Gc.call(null, a), a.Fa, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new U(b[0], b[1], a, null) : new U(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}();
function Ic(a, b, c, d) {
  this.j = a;
  this.Pa = b;
  this.t = c;
  this.m = d;
  this.q = 0;
  this.h = 32374988;
}
g = Ic.prototype;
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Xb(this);
};
g.X = function() {
  wb(this);
  return null == this.t ? null : M(this.t);
};
g.D = function(a, b) {
  return O(b, this);
};
g.toString = function() {
  return Kb(this);
};
function Jc(a) {
  null != a.Pa && (a.t = a.Pa.aa ? a.Pa.aa() : a.Pa.call(null), a.Pa = null);
  return a.t;
}
g.S = function(a, b) {
  return vc.a(b, this);
};
g.T = function(a, b, c) {
  return vc.b(b, c, this);
};
g.G = function() {
  Jc(this);
  if (null == this.t) {
    return null;
  }
  for (var a = this.t;;) {
    if (a instanceof Ic) {
      a = Jc(a);
    } else {
      return this.t = a, I(this.t);
    }
  }
};
g.Q = function() {
  wb(this);
  return null == this.t ? null : J(this.t);
};
g.U = function() {
  wb(this);
  return null != this.t ? K(this.t) : L;
};
g.v = function(a, b) {
  return Yb(this, b);
};
g.H = function(a, b) {
  return new Ic(b, this.Pa, this.t, this.m);
};
g.F = function() {
  return this.j;
};
g.J = function() {
  return fc(L, this.j);
};
function Kc(a, b) {
  this.ub = a;
  this.end = b;
  this.q = 0;
  this.h = 2;
}
Kc.prototype.M = function() {
  return this.end;
};
Kc.prototype.add = function(a) {
  this.ub[this.end] = a;
  return this.end += 1;
};
Kc.prototype.W = function() {
  var a = new Lc(this.ub, 0, this.end);
  this.ub = null;
  return a;
};
function Lc(a, b, c) {
  this.e = a;
  this.B = b;
  this.end = c;
  this.q = 0;
  this.h = 524306;
}
g = Lc.prototype;
g.S = function(a, b) {
  return Ub.n(this.e, b, this.e[this.B], this.B + 1);
};
g.T = function(a, b, c) {
  return Ub.n(this.e, b, c, this.B);
};
g.Zb = function() {
  if (this.B === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Lc(this.e, this.B + 1, this.end);
};
g.C = function(a, b) {
  return this.e[this.B + b];
};
g.ba = function(a, b, c) {
  return 0 <= b && b < this.end - this.B ? this.e[this.B + b] : c;
};
g.M = function() {
  return this.end - this.B;
};
var Mc = function() {
  function a(a, b, c) {
    return new Lc(a, b, c);
  }
  function b(a, b) {
    return new Lc(a, b, a.length);
  }
  function c(a) {
    return new Lc(a, 0, a.length);
  }
  var d = null, d = function(d, f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.a = b;
  d.b = a;
  return d;
}();
function Nc(a, b, c, d) {
  this.W = a;
  this.oa = b;
  this.j = c;
  this.m = d;
  this.h = 31850732;
  this.q = 1536;
}
g = Nc.prototype;
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Xb(this);
};
g.X = function() {
  if (1 < Xa(this.W)) {
    return new Nc(Gb(this.W), this.oa, this.j, null);
  }
  var a = wb(this.oa);
  return null == a ? null : a;
};
g.D = function(a, b) {
  return O(b, this);
};
g.toString = function() {
  return Kb(this);
};
g.G = function() {
  return this;
};
g.Q = function() {
  return y.a(this.W, 0);
};
g.U = function() {
  return 1 < Xa(this.W) ? new Nc(Gb(this.W), this.oa, this.j, null) : null == this.oa ? L : this.oa;
};
g.xb = function() {
  return null == this.oa ? null : this.oa;
};
g.v = function(a, b) {
  return Yb(this, b);
};
g.H = function(a, b) {
  return new Nc(this.W, this.oa, b, this.m);
};
g.F = function() {
  return this.j;
};
g.J = function() {
  return fc(L, this.j);
};
g.yb = function() {
  return this.W;
};
g.zb = function() {
  return null == this.oa ? L : this.oa;
};
function Oc(a, b) {
  return 0 === Xa(a) ? b : new Nc(a, b, null, null);
}
function Pc(a) {
  for (var b = [];;) {
    if (I(a)) {
      b.push(J(a)), a = M(a);
    } else {
      return b;
    }
  }
}
function Qc(a, b) {
  if (Vb(a)) {
    return P(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && I(c)) {
      c = M(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var Sc = function Rc(b) {
  return null == b ? null : null == M(b) ? I(J(b)) : t ? O(J(b), Rc(M(b))) : null;
}, Tc = function() {
  function a(a, b) {
    return new Ic(null, function() {
      var c = I(a);
      return c ? mc(c) ? Oc(Hb(c), d.a(G(c), b)) : O(J(c), d.a(K(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new Ic(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new Ic(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function q(a, b) {
        return new Ic(null, function() {
          var c = I(a);
          return c ? mc(c) ? Oc(Hb(c), q(G(c), b)) : O(J(c), q(K(c), b)) : r(b) ? q(J(b), M(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.p = 2;
    a.l = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return b(c, d, a);
    };
    a.g = b;
    return a;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, h);
      default:
        return e.g(d, h, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.p = 2;
  d.l = e.l;
  d.aa = c;
  d.c = b;
  d.a = a;
  d.g = e.g;
  return d;
}(), Uc = function() {
  function a(a, b, c, d) {
    return O(a, O(b, O(c, d)));
  }
  function b(a, b, c) {
    return O(a, O(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, n, m) {
      var q = null;
      4 < arguments.length && (q = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, n, q);
    }
    function b(a, c, d, e, f) {
      return O(a, O(c, O(d, O(e, Sc(f)))));
    }
    a.p = 4;
    a.l = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var m = J(a);
      a = K(a);
      return b(c, d, e, m, a);
    };
    a.g = b;
    return a;
  }(), c = function(c, f, h, k, l) {
    switch(arguments.length) {
      case 1:
        return I(c);
      case 2:
        return O(c, f);
      case 3:
        return b.call(this, c, f, h);
      case 4:
        return a.call(this, c, f, h, k);
      default:
        return d.g(c, f, h, k, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = 4;
  c.l = d.l;
  c.c = function(a) {
    return I(a);
  };
  c.a = function(a, b) {
    return O(a, b);
  };
  c.b = b;
  c.n = a;
  c.g = d.g;
  return c;
}(), Vc = function() {
  var a = null, b = function() {
    function a(c, f, h) {
      var k = null;
      2 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = Cb(a, c), r(d)) {
          c = J(d), d = M(d);
        } else {
          return a;
        }
      }
    }
    a.p = 2;
    a.l = function(a) {
      var c = J(a);
      a = M(a);
      var h = J(a);
      a = K(a);
      return b(c, h, a);
    };
    a.g = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return Cb(a, d);
      default:
        return b.g(a, d, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = 2;
  a.l = b.l;
  a.a = function(a, b) {
    return Cb(a, b);
  };
  a.g = b.g;
  return a;
}(), Wc = function() {
  var a = null, b = function() {
    function a(c, f, h, k) {
      var l = null;
      3 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, h, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = Eb(a, c, d), r(k)) {
          c = J(k), d = J(M(k)), k = M(M(k));
        } else {
          return a;
        }
      }
    }
    a.p = 3;
    a.l = function(a) {
      var c = J(a);
      a = M(a);
      var h = J(a);
      a = M(a);
      var k = J(a);
      a = K(a);
      return b(c, h, k, a);
    };
    a.g = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return Eb(a, d, e);
      default:
        return b.g(a, d, e, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = 3;
  a.l = b.l;
  a.b = function(a, b, e) {
    return Eb(a, b, e);
  };
  a.g = b.g;
  return a;
}();
function Xc(a, b, c) {
  var d = I(c);
  if (0 === b) {
    return a.aa ? a.aa() : a.call(null);
  }
  c = z(d);
  var e = A(d);
  if (1 === b) {
    return a.c ? a.c(c) : a.c ? a.c(c) : a.call(null, c);
  }
  var d = z(e), f = A(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = z(f), h = A(f);
  if (3 === b) {
    return a.b ? a.b(c, d, e) : a.b ? a.b(c, d, e) : a.call(null, c, d, e);
  }
  var f = z(h), k = A(h);
  if (4 === b) {
    return a.n ? a.n(c, d, e, f) : a.n ? a.n(c, d, e, f) : a.call(null, c, d, e, f);
  }
  h = z(k);
  k = A(k);
  if (5 === b) {
    return a.K ? a.K(c, d, e, f, h) : a.K ? a.K(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  a = z(k);
  var l = A(k);
  if (6 === b) {
    return a.ra ? a.ra(c, d, e, f, h, a) : a.ra ? a.ra(c, d, e, f, h, a) : a.call(null, c, d, e, f, h, a);
  }
  var k = z(l), n = A(l);
  if (7 === b) {
    return a.Ma ? a.Ma(c, d, e, f, h, a, k) : a.Ma ? a.Ma(c, d, e, f, h, a, k) : a.call(null, c, d, e, f, h, a, k);
  }
  var l = z(n), m = A(n);
  if (8 === b) {
    return a.Lb ? a.Lb(c, d, e, f, h, a, k, l) : a.Lb ? a.Lb(c, d, e, f, h, a, k, l) : a.call(null, c, d, e, f, h, a, k, l);
  }
  var n = z(m), q = A(m);
  if (9 === b) {
    return a.Mb ? a.Mb(c, d, e, f, h, a, k, l, n) : a.Mb ? a.Mb(c, d, e, f, h, a, k, l, n) : a.call(null, c, d, e, f, h, a, k, l, n);
  }
  var m = z(q), w = A(q);
  if (10 === b) {
    return a.Ab ? a.Ab(c, d, e, f, h, a, k, l, n, m) : a.Ab ? a.Ab(c, d, e, f, h, a, k, l, n, m) : a.call(null, c, d, e, f, h, a, k, l, n, m);
  }
  var q = z(w), E = A(w);
  if (11 === b) {
    return a.Bb ? a.Bb(c, d, e, f, h, a, k, l, n, m, q) : a.Bb ? a.Bb(c, d, e, f, h, a, k, l, n, m, q) : a.call(null, c, d, e, f, h, a, k, l, n, m, q);
  }
  var w = z(E), F = A(E);
  if (12 === b) {
    return a.Cb ? a.Cb(c, d, e, f, h, a, k, l, n, m, q, w) : a.Cb ? a.Cb(c, d, e, f, h, a, k, l, n, m, q, w) : a.call(null, c, d, e, f, h, a, k, l, n, m, q, w);
  }
  var E = z(F), Q = A(F);
  if (13 === b) {
    return a.Db ? a.Db(c, d, e, f, h, a, k, l, n, m, q, w, E) : a.Db ? a.Db(c, d, e, f, h, a, k, l, n, m, q, w, E) : a.call(null, c, d, e, f, h, a, k, l, n, m, q, w, E);
  }
  var F = z(Q), fa = A(Q);
  if (14 === b) {
    return a.Eb ? a.Eb(c, d, e, f, h, a, k, l, n, m, q, w, E, F) : a.Eb ? a.Eb(c, d, e, f, h, a, k, l, n, m, q, w, E, F) : a.call(null, c, d, e, f, h, a, k, l, n, m, q, w, E, F);
  }
  var Q = z(fa), ta = A(fa);
  if (15 === b) {
    return a.Fb ? a.Fb(c, d, e, f, h, a, k, l, n, m, q, w, E, F, Q) : a.Fb ? a.Fb(c, d, e, f, h, a, k, l, n, m, q, w, E, F, Q) : a.call(null, c, d, e, f, h, a, k, l, n, m, q, w, E, F, Q);
  }
  var fa = z(ta), Ba = A(ta);
  if (16 === b) {
    return a.Gb ? a.Gb(c, d, e, f, h, a, k, l, n, m, q, w, E, F, Q, fa) : a.Gb ? a.Gb(c, d, e, f, h, a, k, l, n, m, q, w, E, F, Q, fa) : a.call(null, c, d, e, f, h, a, k, l, n, m, q, w, E, F, Q, fa);
  }
  var ta = z(Ba), Va = A(Ba);
  if (17 === b) {
    return a.Hb ? a.Hb(c, d, e, f, h, a, k, l, n, m, q, w, E, F, Q, fa, ta) : a.Hb ? a.Hb(c, d, e, f, h, a, k, l, n, m, q, w, E, F, Q, fa, ta) : a.call(null, c, d, e, f, h, a, k, l, n, m, q, w, E, F, Q, fa, ta);
  }
  var Ba = z(Va), sc = A(Va);
  if (18 === b) {
    return a.Ib ? a.Ib(c, d, e, f, h, a, k, l, n, m, q, w, E, F, Q, fa, ta, Ba) : a.Ib ? a.Ib(c, d, e, f, h, a, k, l, n, m, q, w, E, F, Q, fa, ta, Ba) : a.call(null, c, d, e, f, h, a, k, l, n, m, q, w, E, F, Q, fa, ta, Ba);
  }
  Va = z(sc);
  sc = A(sc);
  if (19 === b) {
    return a.Jb ? a.Jb(c, d, e, f, h, a, k, l, n, m, q, w, E, F, Q, fa, ta, Ba, Va) : a.Jb ? a.Jb(c, d, e, f, h, a, k, l, n, m, q, w, E, F, Q, fa, ta, Ba, Va) : a.call(null, c, d, e, f, h, a, k, l, n, m, q, w, E, F, Q, fa, ta, Ba, Va);
  }
  var qb = z(sc);
  A(sc);
  if (20 === b) {
    return a.Kb ? a.Kb(c, d, e, f, h, a, k, l, n, m, q, w, E, F, Q, fa, ta, Ba, Va, qb) : a.Kb ? a.Kb(c, d, e, f, h, a, k, l, n, m, q, w, E, F, Q, fa, ta, Ba, Va, qb) : a.call(null, c, d, e, f, h, a, k, l, n, m, q, w, E, F, Q, fa, ta, Ba, Va, qb);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var T = function() {
  function a(a, b, c, d, f) {
    b = Uc.n(b, c, d, f);
    c = a.p;
    return a.l ? (d = Qc(b, c + 1), d <= c ? Xc(a, d, b) : a.l(b)) : a.apply(a, Pc(b));
  }
  function b(a, b, c, d) {
    b = Uc.b(b, c, d);
    c = a.p;
    return a.l ? (d = Qc(b, c + 1), d <= c ? Xc(a, d, b) : a.l(b)) : a.apply(a, Pc(b));
  }
  function c(a, b, c) {
    b = Uc.a(b, c);
    c = a.p;
    if (a.l) {
      var d = Qc(b, c + 1);
      return d <= c ? Xc(a, d, b) : a.l(b);
    }
    return a.apply(a, Pc(b));
  }
  function d(a, b) {
    var c = a.p;
    if (a.l) {
      var d = Qc(b, c + 1);
      return d <= c ? Xc(a, d, b) : a.l(b);
    }
    return a.apply(a, Pc(b));
  }
  var e = null, f = function() {
    function a(c, d, f, e, h, E) {
      var F = null;
      5 < arguments.length && (F = N(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, e, h, F);
    }
    function b(a, c, d, f, e, h) {
      c = O(c, O(d, O(f, O(e, Sc(h)))));
      d = a.p;
      return a.l ? (f = Qc(c, d + 1), f <= d ? Xc(a, f, c) : a.l(c)) : a.apply(a, Pc(c));
    }
    a.p = 5;
    a.l = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var f = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var h = J(a);
      a = K(a);
      return b(c, d, f, e, h, a);
    };
    a.g = b;
    return a;
  }(), e = function(e, k, l, n, m, q) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, n);
      case 5:
        return a.call(this, e, k, l, n, m);
      default:
        return f.g(e, k, l, n, m, N(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.p = 5;
  e.l = f.l;
  e.a = d;
  e.b = c;
  e.n = b;
  e.K = a;
  e.g = f.g;
  return e;
}();
function Yc(a, b) {
  for (;;) {
    if (null == I(b)) {
      return!0;
    }
    if (r(a.c ? a.c(J(b)) : a.call(null, J(b)))) {
      var c = a, d = M(b);
      a = c;
      b = d;
    } else {
      return t ? !1 : null;
    }
  }
}
function Zc(a) {
  for (var b = $c;;) {
    if (I(a)) {
      var c = b.c ? b.c(J(a)) : b.call(null, J(a));
      if (r(c)) {
        return c;
      }
      a = M(a);
    } else {
      return null;
    }
  }
}
function $c(a) {
  return a;
}
var ad = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = N(Array.prototype.slice.call(arguments, 0), 0));
        return m.call(this, b);
      }
      function m(e) {
        return T.K(a, b, c, d, e);
      }
      e.p = 0;
      e.l = function(a) {
        a = I(a);
        return m(a);
      };
      e.g = m;
      return e;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = N(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return T.n(a, b, c, d);
      }
      d.p = 0;
      d.l = function(a) {
        a = I(a);
        return e(a);
      };
      d.g = e;
      return d;
    }();
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = N(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return T.b(a, b, c);
      }
      c.p = 0;
      c.l = function(a) {
        a = I(a);
        return d(a);
      };
      c.g = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, q) {
      var w = null;
      4 < arguments.length && (w = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = N(Array.prototype.slice.call(arguments, 0), 0));
          return h.call(this, c);
        }
        function h(b) {
          return T.K(a, c, d, e, Tc.a(f, b));
        }
        b.p = 0;
        b.l = function(a) {
          a = I(a);
          return h(a);
        };
        b.g = h;
        return b;
      }();
    }
    a.p = 4;
    a.l = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var f = J(a);
      a = K(a);
      return b(c, d, e, f, a);
    };
    a.g = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.g(d, h, k, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.p = 4;
  d.l = e.l;
  d.c = function(a) {
    return a;
  };
  d.a = c;
  d.b = b;
  d.n = a;
  d.g = e.g;
  return d;
}(), bd = function() {
  function a(a, b, c, e) {
    return new Ic(null, function() {
      var n = I(b), m = I(c), q = I(e);
      return n && m && q ? O(a.b ? a.b(J(n), J(m), J(q)) : a.call(null, J(n), J(m), J(q)), d.n(a, K(n), K(m), K(q))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Ic(null, function() {
      var e = I(b), n = I(c);
      return e && n ? O(a.a ? a.a(J(e), J(n)) : a.call(null, J(e), J(n)), d.b(a, K(e), K(n))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new Ic(null, function() {
      var c = I(b);
      if (c) {
        if (mc(c)) {
          for (var e = Hb(c), n = P(e), m = new Kc(Array(n), 0), q = 0;;) {
            if (q < n) {
              var w = a.c ? a.c(y.a(e, q)) : a.call(null, y.a(e, q));
              m.add(w);
              q += 1;
            } else {
              break;
            }
          }
          return Oc(m.W(), d.a(a, G(c)));
        }
        return O(a.c ? a.c(J(c)) : a.call(null, J(c)), d.a(a, K(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, q) {
      var w = null;
      4 < arguments.length && (w = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, e, f, h) {
      return d.a(function(b) {
        return T.a(a, b);
      }, function E(a) {
        return new Ic(null, function() {
          var b = d.a(I, a);
          return Yc($c, b) ? O(d.a(J, b), E(d.a(K, b))) : null;
        }, null, null);
      }($b.g(h, f, N([e, c], 0))));
    }
    a.p = 4;
    a.l = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var f = J(a);
      a = K(a);
      return b(c, d, e, f, a);
    };
    a.g = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.g(d, h, k, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.p = 4;
  d.l = e.l;
  d.a = c;
  d.b = b;
  d.n = a;
  d.g = e.g;
  return d;
}();
function cd(a) {
  return function c(a, e) {
    return new Ic(null, function() {
      var f = I(a);
      return f ? O(J(f), c(K(f), e)) : I(e) ? c(J(e), K(e)) : null;
    }, null, null);
  }(null, a);
}
var dd = function() {
  function a(a, b) {
    return cd(bd.a(a, b));
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return cd(T.n(bd, a, c, d));
    }
    a.p = 2;
    a.l = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return b(c, d, a);
    };
    a.g = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.g(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.l = c.l;
  b.a = a;
  b.g = c.g;
  return b;
}(), fd = function ed(b, c) {
  return new Ic(null, function() {
    var d = I(c);
    if (d) {
      if (mc(d)) {
        for (var e = Hb(d), f = P(e), h = new Kc(Array(f), 0), k = 0;;) {
          if (k < f) {
            if (r(b.c ? b.c(y.a(e, k)) : b.call(null, y.a(e, k)))) {
              var l = y.a(e, k);
              h.add(l);
            }
            k += 1;
          } else {
            break;
          }
        }
        return Oc(h.W(), ed(b, G(d)));
      }
      e = J(d);
      d = K(d);
      return r(b.c ? b.c(e) : b.call(null, e)) ? O(e, ed(b, d)) : ed(b, d);
    }
    return null;
  }, null, null);
};
function gd(a) {
  return function c(a) {
    return new Ic(null, function() {
      return O(a, r(jc.c ? jc.c(a) : jc.call(null, a)) ? dd.a(c, I.c ? I.c(a) : I.call(null, a)) : null);
    }, null, null);
  }(a);
}
function hd(a) {
  return fd(function(a) {
    return!jc(a);
  }, K(gd(a)));
}
function kd(a, b) {
  var c;
  null != a ? a && (a.q & 4 || a.Qc) ? (c = uc.b(Cb, Bb(a), b), c = Db(c)) : c = uc.b(Za, a, b) : c = uc.b($b, L, b);
  return c;
}
var ld = function() {
  function a(a, b, c) {
    var h = pc;
    for (b = I(b);;) {
      if (b) {
        var k = a;
        if (k ? k.h & 256 || k.ac || (k.h ? 0 : s(cb, k)) : s(cb, k)) {
          a = S.b(a, J(b), h);
          if (h === a) {
            return c;
          }
          b = M(b);
        } else {
          return c;
        }
      } else {
        return a;
      }
    }
  }
  function b(a, b) {
    return c.b(a, b, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function md(a, b) {
  this.r = a;
  this.e = b;
}
function nd(a) {
  return new md(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function od(a) {
  a = a.k;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function pd(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = nd(a);
    d.e[0] = c;
    c = d;
    b -= 5;
  }
}
var rd = function qd(b, c, d, e) {
  var f = new md(d.r, x(d.e)), h = b.k - 1 >>> c & 31;
  5 === c ? f.e[h] = e : (d = d.e[h], b = null != d ? qd(b, c - 5, d, e) : pd(null, c - 5, e), f.e[h] = b);
  return f;
};
function sd(a, b) {
  throw Error([v("No item "), v(a), v(" in vector of length "), v(b)].join(""));
}
function td(a, b) {
  if (0 <= b && b < a.k) {
    if (b >= od(a)) {
      return a.R;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.e[b >>> d & 31], d = e
      } else {
        return c.e;
      }
    }
  } else {
    return sd(b, a.k);
  }
}
var vd = function ud(b, c, d, e, f) {
  var h = new md(d.r, x(d.e));
  if (0 === c) {
    h.e[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = ud(b, c - 5, d.e[k], e, f);
    h.e[k] = b;
  }
  return h;
};
function V(a, b, c, d, e, f) {
  this.j = a;
  this.k = b;
  this.shift = c;
  this.root = d;
  this.R = e;
  this.m = f;
  this.q = 8196;
  this.h = 167668511;
}
g = V.prototype;
g.Va = function() {
  return new wd(this.k, this.shift, xd.c ? xd.c(this.root) : xd.call(null, this.root), yd.c ? yd.c(this.R) : yd.call(null, this.R));
};
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Xb(this);
};
g.N = function(a, b) {
  return y.b(this, b, null);
};
g.O = function(a, b, c) {
  return y.b(this, b, c);
};
g.Ua = function(a, b, c) {
  if ("number" === typeof b) {
    return lb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.C(null, c);
      case 3:
        return this.ba(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.c = function(a) {
  return this.C(null, a);
};
g.a = function(a, b) {
  return this.ba(null, a, b);
};
g.D = function(a, b) {
  if (32 > this.k - od(this)) {
    for (var c = this.R.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.R[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new V(this.j, this.k + 1, this.shift, this.root, d, null);
  }
  c = (d = this.k >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = nd(null), d.e[0] = this.root, e = pd(null, this.shift, new md(null, this.R)), d.e[1] = e) : d = rd(this, this.shift, this.root, new md(null, this.R));
  return new V(this.j, this.k + 1, c, d, [b], null);
};
g.Nb = function() {
  return y.a(this, 0);
};
g.bc = function() {
  return y.a(this, 1);
};
g.toString = function() {
  return Kb(this);
};
g.S = function(a, b) {
  return Tb.a(this, b);
};
g.T = function(a, b, c) {
  return Tb.b(this, b, c);
};
g.G = function() {
  return 0 === this.k ? null : 32 > this.k ? N.c(this.R) : t ? zd.b ? zd.b(this, 0, 0) : zd.call(null, this, 0, 0) : null;
};
g.M = function() {
  return this.k;
};
g.Ob = function(a, b, c) {
  if (0 <= b && b < this.k) {
    return od(this) <= b ? (a = x(this.R), a[b & 31] = c, new V(this.j, this.k, this.shift, this.root, a, null)) : new V(this.j, this.k, this.shift, vd(this, this.shift, this.root, b, c), this.R, null);
  }
  if (b === this.k) {
    return Za(this, c);
  }
  if (t) {
    throw Error([v("Index "), v(b), v(" out of bounds  [0,"), v(this.k), v("]")].join(""));
  }
  return null;
};
g.v = function(a, b) {
  return Yb(this, b);
};
g.H = function(a, b) {
  return new V(b, this.k, this.shift, this.root, this.R, this.m);
};
g.F = function() {
  return this.j;
};
g.C = function(a, b) {
  return td(this, b)[b & 31];
};
g.ba = function(a, b, c) {
  return 0 <= b && b < this.k ? y.a(this, b) : c;
};
g.J = function() {
  return fc(Ad, this.j);
};
var Bd = new md(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Ad = new V(null, 0, 5, Bd, [], 0);
function Cd(a) {
  return Db(uc.b(Cb, Bb(Ad), a));
}
function Dd(a, b, c, d, e, f) {
  this.L = a;
  this.da = b;
  this.o = c;
  this.B = d;
  this.j = e;
  this.m = f;
  this.h = 32243948;
  this.q = 1536;
}
g = Dd.prototype;
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Xb(this);
};
g.X = function() {
  if (this.B + 1 < this.da.length) {
    var a = zd.n ? zd.n(this.L, this.da, this.o, this.B + 1) : zd.call(null, this.L, this.da, this.o, this.B + 1);
    return null == a ? null : a;
  }
  return Ib(this);
};
g.D = function(a, b) {
  return O(b, this);
};
g.toString = function() {
  return Kb(this);
};
g.S = function(a, b) {
  return Tb.a(Ed.b ? Ed.b(this.L, this.o + this.B, P(this.L)) : Ed.call(null, this.L, this.o + this.B, P(this.L)), b);
};
g.T = function(a, b, c) {
  return Tb.b(Ed.b ? Ed.b(this.L, this.o + this.B, P(this.L)) : Ed.call(null, this.L, this.o + this.B, P(this.L)), b, c);
};
g.G = function() {
  return this;
};
g.Q = function() {
  return this.da[this.B];
};
g.U = function() {
  if (this.B + 1 < this.da.length) {
    var a = zd.n ? zd.n(this.L, this.da, this.o, this.B + 1) : zd.call(null, this.L, this.da, this.o, this.B + 1);
    return null == a ? L : a;
  }
  return G(this);
};
g.xb = function() {
  var a = this.da.length, a = this.o + a < Xa(this.L) ? zd.b ? zd.b(this.L, this.o + a, 0) : zd.call(null, this.L, this.o + a, 0) : null;
  return null == a ? null : a;
};
g.v = function(a, b) {
  return Yb(this, b);
};
g.H = function(a, b) {
  return zd.K ? zd.K(this.L, this.da, this.o, this.B, b) : zd.call(null, this.L, this.da, this.o, this.B, b);
};
g.J = function() {
  return fc(Ad, this.j);
};
g.yb = function() {
  return Mc.a(this.da, this.B);
};
g.zb = function() {
  var a = this.da.length, a = this.o + a < Xa(this.L) ? zd.b ? zd.b(this.L, this.o + a, 0) : zd.call(null, this.L, this.o + a, 0) : null;
  return null == a ? L : a;
};
var zd = function() {
  function a(a, b, c, d, l) {
    return new Dd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Dd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Dd(a, td(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, h);
      case 4:
        return b.call(this, d, f, h, k);
      case 5:
        return a.call(this, d, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.n = b;
  d.K = a;
  return d;
}();
function Fd(a, b, c, d, e) {
  this.j = a;
  this.pa = b;
  this.start = c;
  this.end = d;
  this.m = e;
  this.h = 166617887;
  this.q = 8192;
}
g = Fd.prototype;
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Xb(this);
};
g.N = function(a, b) {
  return y.b(this, b, null);
};
g.O = function(a, b, c) {
  return y.b(this, b, c);
};
g.Ua = function(a, b, c) {
  if ("number" === typeof b) {
    return lb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.C(null, c);
      case 3:
        return this.ba(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.c = function(a) {
  return this.C(null, a);
};
g.a = function(a, b) {
  return this.ba(null, a, b);
};
g.D = function(a, b) {
  return Gd.K ? Gd.K(this.j, lb(this.pa, this.end, b), this.start, this.end + 1, null) : Gd.call(null, this.j, lb(this.pa, this.end, b), this.start, this.end + 1, null);
};
g.toString = function() {
  return Kb(this);
};
g.S = function(a, b) {
  return Tb.a(this, b);
};
g.T = function(a, b, c) {
  return Tb.b(this, b, c);
};
g.G = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : O(y.a(a.pa, d), new Ic(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
g.M = function() {
  return this.end - this.start;
};
g.Ob = function(a, b, c) {
  var d = this, e = d.start + b;
  return Gd.K ? Gd.K(d.j, cc.b(d.pa, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : Gd.call(null, d.j, cc.b(d.pa, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
g.v = function(a, b) {
  return Yb(this, b);
};
g.H = function(a, b) {
  return Gd.K ? Gd.K(b, this.pa, this.start, this.end, this.m) : Gd.call(null, b, this.pa, this.start, this.end, this.m);
};
g.F = function() {
  return this.j;
};
g.C = function(a, b) {
  return 0 > b || this.end <= this.start + b ? sd(b, this.end - this.start) : y.a(this.pa, this.start + b);
};
g.ba = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : y.b(this.pa, this.start + b, c);
};
g.J = function() {
  return fc(Ad, this.j);
};
function Gd(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Fd) {
      c = b.start + c, d = b.start + d, b = b.pa;
    } else {
      var f = P(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Fd(a, b, c, d, e);
    }
  }
}
var Ed = function() {
  function a(a, b, c) {
    return Gd(null, a, b, c, null);
  }
  function b(a, b) {
    return c.b(a, b, P(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function xd(a) {
  return new md({}, x(a.e));
}
function yd(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  oc(a, 0, b, 0, a.length);
  return b;
}
var Id = function Hd(b, c, d, e) {
  d = b.root.r === d.r ? d : new md(b.root.r, x(d.e));
  var f = b.k - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.e[f];
    b = null != h ? Hd(b, c - 5, h, e) : pd(b.root.r, c - 5, e);
  }
  d.e[f] = b;
  return d;
};
function wd(a, b, c, d) {
  this.k = a;
  this.shift = b;
  this.root = c;
  this.R = d;
  this.h = 275;
  this.q = 88;
}
g = wd.prototype;
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.O(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.c = function(a) {
  return this.N(null, a);
};
g.a = function(a, b) {
  return this.O(null, a, b);
};
g.N = function(a, b) {
  return y.b(this, b, null);
};
g.O = function(a, b, c) {
  return y.b(this, b, c);
};
g.C = function(a, b) {
  if (this.root.r) {
    return td(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.ba = function(a, b, c) {
  return 0 <= b && b < this.k ? y.a(this, b) : c;
};
g.M = function() {
  if (this.root.r) {
    return this.k;
  }
  throw Error("count after persistent!");
};
g.dc = function(a, b, c) {
  var d = this;
  if (d.root.r) {
    if (0 <= b && b < d.k) {
      return od(this) <= b ? d.R[b & 31] = c : (a = function f(a, k) {
        var l = d.root.r === k.r ? k : new md(d.root.r, x(k.e));
        if (0 === a) {
          l.e[b & 31] = c;
        } else {
          var n = b >>> a & 31, m = f(a - 5, l.e[n]);
          l.e[n] = m;
        }
        return l;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.k) {
      return Cb(this, c);
    }
    if (t) {
      throw Error([v("Index "), v(b), v(" out of bounds for TransientVector of length"), v(d.k)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
g.Xa = function(a, b, c) {
  return Fb(this, b, c);
};
g.Ha = function(a, b) {
  if (this.root.r) {
    if (32 > this.k - od(this)) {
      this.R[this.k & 31] = b;
    } else {
      var c = new md(this.root.r, this.R), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.R = d;
      if (this.k >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = pd(this.root.r, this.shift, c);
        this.root = new md(this.root.r, d);
        this.shift = e;
      } else {
        this.root = Id(this, this.shift, this.root, c);
      }
    }
    this.k += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.Ia = function() {
  if (this.root.r) {
    this.root.r = null;
    var a = this.k - od(this), b = Array(a);
    oc(this.R, 0, b, 0, a);
    return new V(null, this.k, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Jd(a, b, c, d) {
  this.j = a;
  this.ga = b;
  this.Da = c;
  this.m = d;
  this.q = 0;
  this.h = 31850572;
}
g = Jd.prototype;
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Xb(this);
};
g.D = function(a, b) {
  return O(b, this);
};
g.toString = function() {
  return Kb(this);
};
g.G = function() {
  return this;
};
g.Q = function() {
  return J(this.ga);
};
g.U = function() {
  var a = M(this.ga);
  return a ? new Jd(this.j, a, this.Da, null) : null == this.Da ? Ya(this) : new Jd(this.j, this.Da, null, null);
};
g.v = function(a, b) {
  return Yb(this, b);
};
g.H = function(a, b) {
  return new Jd(b, this.ga, this.Da, this.m);
};
g.F = function() {
  return this.j;
};
g.J = function() {
  return fc(L, this.j);
};
function Kd(a, b, c, d, e) {
  this.j = a;
  this.count = b;
  this.ga = c;
  this.Da = d;
  this.m = e;
  this.h = 31858766;
  this.q = 8192;
}
g = Kd.prototype;
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Xb(this);
};
g.D = function(a, b) {
  var c;
  r(this.ga) ? (c = this.Da, c = new Kd(this.j, this.count + 1, this.ga, $b.a(r(c) ? c : Ad, b), null)) : c = new Kd(this.j, this.count + 1, $b.a(this.ga, b), Ad, null);
  return c;
};
g.toString = function() {
  return Kb(this);
};
g.G = function() {
  var a = I(this.Da), b = this.ga;
  return r(r(b) ? b : a) ? new Jd(null, this.ga, I(a), null) : null;
};
g.M = function() {
  return this.count;
};
g.Q = function() {
  return J(this.ga);
};
g.U = function() {
  return K(I(this));
};
g.v = function(a, b) {
  return Yb(this, b);
};
g.H = function(a, b) {
  return new Kd(b, this.count, this.ga, this.Da, this.m);
};
g.F = function() {
  return this.j;
};
g.J = function() {
  return Ld;
};
var Ld = new Kd(null, 0, null, Ad, 0);
function Md() {
  this.q = 0;
  this.h = 2097152;
}
Md.prototype.v = function() {
  return!1;
};
var Nd = new Md;
function Od(a, b) {
  return rc(kc(b) ? P(a) === P(b) ? Yc($c, bd.a(function(a) {
    return Mb.a(S.b(b, J(a), Nd), J(M(a)));
  }, a)) : null : null);
}
function Pd(a, b) {
  var c = a.e;
  if (b instanceof U) {
    a: {
      for (var d = c.length, e = b.za, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var h = c[f];
        if (h instanceof U && e === h.za) {
          c = f;
          break a;
        }
        if (t) {
          f += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if (ca(b) || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (t) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof Pb) {
        a: {
          d = c.length;
          e = b.Fa;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            h = c[f];
            if (h instanceof Pb && e === h.Fa) {
              c = f;
              break a;
            }
            if (t) {
              f += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              if (t) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (t) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (Mb.a(b, c[e])) {
                  c = e;
                  break a;
                }
                if (t) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function Qd(a, b, c) {
  this.e = a;
  this.o = b;
  this.ea = c;
  this.q = 0;
  this.h = 32374990;
}
g = Qd.prototype;
g.w = function() {
  return Xb(this);
};
g.X = function() {
  return this.o < this.e.length - 2 ? new Qd(this.e, this.o + 2, this.ea) : null;
};
g.D = function(a, b) {
  return O(b, this);
};
g.toString = function() {
  return Kb(this);
};
g.S = function(a, b) {
  return vc.a(b, this);
};
g.T = function(a, b, c) {
  return vc.b(b, c, this);
};
g.G = function() {
  return this;
};
g.M = function() {
  return(this.e.length - this.o) / 2;
};
g.Q = function() {
  return new V(null, 2, 5, Bd, [this.e[this.o], this.e[this.o + 1]], null);
};
g.U = function() {
  return this.o < this.e.length - 2 ? new Qd(this.e, this.o + 2, this.ea) : L;
};
g.v = function(a, b) {
  return Yb(this, b);
};
g.H = function(a, b) {
  return new Qd(this.e, this.o, b);
};
g.F = function() {
  return this.ea;
};
g.J = function() {
  return fc(L, this.ea);
};
function La(a, b, c, d) {
  this.j = a;
  this.k = b;
  this.e = c;
  this.m = d;
  this.q = 8196;
  this.h = 16123663;
}
g = La.prototype;
g.Va = function() {
  return new Rd({}, this.e.length, x(this.e));
};
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = zc(this);
};
g.N = function(a, b) {
  return B.b(this, b, null);
};
g.O = function(a, b, c) {
  a = Pd(this, b);
  return-1 === a ? c : this.e[a + 1];
};
g.Ua = function(a, b, c) {
  a = Pd(this, b);
  if (-1 === a) {
    if (this.k < Sd) {
      a = this.e;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new La(this.j, this.k + 1, e, null);
    }
    return pb(eb(kd(Td, this), b, c), this.j);
  }
  return c === this.e[a + 1] ? this : t ? (b = x(this.e), b[a + 1] = c, new La(this.j, this.k, b, null)) : null;
};
g.wb = function(a, b) {
  return-1 !== Pd(this, b);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.O(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.c = function(a) {
  return this.N(null, a);
};
g.a = function(a, b) {
  return this.O(null, a, b);
};
g.D = function(a, b) {
  return lc(b) ? eb(this, y.a(b, 0), y.a(b, 1)) : uc.b(Za, this, b);
};
g.toString = function() {
  return Kb(this);
};
g.G = function() {
  return 0 <= this.e.length - 2 ? new Qd(this.e, 0, null) : null;
};
g.M = function() {
  return this.k;
};
g.v = function(a, b) {
  return Od(this, b);
};
g.H = function(a, b) {
  return new La(b, this.k, this.e, this.m);
};
g.F = function() {
  return this.j;
};
g.J = function() {
  return pb(Ud, this.j);
};
var Ud = new La(null, 0, [], null), Sd = 8;
function Vd(a) {
  for (var b = a.length, c = 0, d = Bb(Ud);;) {
    if (c < b) {
      var e = c + 2, d = Eb(d, a[c], a[c + 1]), c = e
    } else {
      return Db(d);
    }
  }
}
function Rd(a, b, c) {
  this.Na = a;
  this.ua = b;
  this.e = c;
  this.q = 56;
  this.h = 258;
}
g = Rd.prototype;
g.Xa = function(a, b, c) {
  if (r(this.Na)) {
    a = Pd(this, b);
    if (-1 === a) {
      return this.ua + 2 <= 2 * Sd ? (this.ua += 2, this.e.push(b), this.e.push(c), this) : Wc.b(Wd.a ? Wd.a(this.ua, this.e) : Wd.call(null, this.ua, this.e), b, c);
    }
    c !== this.e[a + 1] && (this.e[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
g.Ha = function(a, b) {
  if (r(this.Na)) {
    if (b ? b.h & 2048 || b.wc || (b.h ? 0 : s(gb, b)) : s(gb, b)) {
      return Eb(this, Ac.c ? Ac.c(b) : Ac.call(null, b), Bc.c ? Bc.c(b) : Bc.call(null, b));
    }
    for (var c = I(b), d = this;;) {
      var e = J(c);
      if (r(e)) {
        c = M(c), d = Eb(d, Ac.c ? Ac.c(e) : Ac.call(null, e), Bc.c ? Bc.c(e) : Bc.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.Ia = function() {
  if (r(this.Na)) {
    return this.Na = !1, new La(null, wc((this.ua - this.ua % 2) / 2), this.e, null);
  }
  throw Error("persistent! called twice");
};
g.N = function(a, b) {
  return B.b(this, b, null);
};
g.O = function(a, b, c) {
  if (r(this.Na)) {
    return a = Pd(this, b), -1 === a ? c : this.e[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.M = function() {
  if (r(this.Na)) {
    return wc((this.ua - this.ua % 2) / 2);
  }
  throw Error("count after persistent!");
};
function Wd(a, b) {
  for (var c = Bb(Td), d = 0;;) {
    if (d < a) {
      c = Wc.b(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Xd() {
  this.qa = !1;
}
function Yd(a, b) {
  return a === b ? !0 : a === b || a instanceof U && b instanceof U && a.za === b.za ? !0 : t ? Mb.a(a, b) : null;
}
var Zd = function() {
  function a(a, b, c, h, k) {
    a = x(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = x(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.K = a;
  return c;
}(), $d = function() {
  function a(a, b, c, h, k, l) {
    a = a.Oa(b);
    a.e[c] = h;
    a.e[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.Oa(b);
    a.e[c] = h;
    return a;
  }
  var c = null, c = function(c, e, f, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, h);
      case 6:
        return a.call(this, c, e, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.n = b;
  c.ra = a;
  return c;
}();
function ae(a, b, c) {
  this.r = a;
  this.I = b;
  this.e = c;
}
g = ae.prototype;
g.ia = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = xc(this.I & h - 1);
  if (0 === (this.I & h)) {
    var l = xc(this.I);
    if (2 * l < this.e.length) {
      a = this.Oa(a);
      b = a.e;
      f.qa = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.I |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = be.ia(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.I >>> d & 1) && (k[d] = null != this.e[e] ? be.ia(a, b + 5, H(this.e[e]), this.e[e], this.e[e + 1], f) : this.e[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new ce(a, l + 1, k);
    }
    return t ? (b = Array(2 * (l + 4)), oc(this.e, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, oc(this.e, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.qa = !0, a = this.Oa(a), a.e = b, a.I |= h, a) : null;
  }
  l = this.e[2 * k];
  h = this.e[2 * k + 1];
  return null == l ? (l = h.ia(a, b + 5, c, d, e, f), l === h ? this : $d.n(this, a, 2 * k + 1, l)) : Yd(d, l) ? e === h ? this : $d.n(this, a, 2 * k + 1, e) : t ? (f.qa = !0, $d.ra(this, a, 2 * k, null, 2 * k + 1, de.Ma ? de.Ma(a, b + 5, l, h, c, d, e) : de.call(null, a, b + 5, l, h, c, d, e))) : null;
};
g.ab = function() {
  return ee.c ? ee.c(this.e) : ee.call(null, this.e);
};
g.Oa = function(a) {
  if (a === this.r) {
    return this;
  }
  var b = xc(this.I), c = Array(0 > b ? 4 : 2 * (b + 1));
  oc(this.e, 0, c, 0, 2 * b);
  return new ae(a, this.I, c);
};
g.ha = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = xc(this.I & f - 1);
  if (0 === (this.I & f)) {
    var k = xc(this.I);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = be.ha(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.I >>> c & 1) && (h[c] = null != this.e[d] ? be.ha(a + 5, H(this.e[d]), this.e[d], this.e[d + 1], e) : this.e[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new ce(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    oc(this.e, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    oc(this.e, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.qa = !0;
    return new ae(null, this.I | f, a);
  }
  k = this.e[2 * h];
  f = this.e[2 * h + 1];
  return null == k ? (k = f.ha(a + 5, b, c, d, e), k === f ? this : new ae(null, this.I, Zd.b(this.e, 2 * h + 1, k))) : Yd(c, k) ? d === f ? this : new ae(null, this.I, Zd.b(this.e, 2 * h + 1, d)) : t ? (e.qa = !0, new ae(null, this.I, Zd.K(this.e, 2 * h, null, 2 * h + 1, de.ra ? de.ra(a + 5, k, f, b, c, d) : de.call(null, a + 5, k, f, b, c, d)))) : null;
};
g.Aa = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.I & e)) {
    return d;
  }
  var f = xc(this.I & e - 1), e = this.e[2 * f], f = this.e[2 * f + 1];
  return null == e ? f.Aa(a + 5, b, c, d) : Yd(c, e) ? f : t ? d : null;
};
var be = new ae(null, 0, []);
function ce(a, b, c) {
  this.r = a;
  this.k = b;
  this.e = c;
}
g = ce.prototype;
g.ia = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.e[h];
  if (null == k) {
    return a = $d.n(this, a, h, be.ia(a, b + 5, c, d, e, f)), a.k += 1, a;
  }
  b = k.ia(a, b + 5, c, d, e, f);
  return b === k ? this : $d.n(this, a, h, b);
};
g.ab = function() {
  return fe.c ? fe.c(this.e) : fe.call(null, this.e);
};
g.Oa = function(a) {
  return a === this.r ? this : new ce(a, this.k, x(this.e));
};
g.ha = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.e[f];
  if (null == h) {
    return new ce(null, this.k + 1, Zd.b(this.e, f, be.ha(a + 5, b, c, d, e)));
  }
  a = h.ha(a + 5, b, c, d, e);
  return a === h ? this : new ce(null, this.k, Zd.b(this.e, f, a));
};
g.Aa = function(a, b, c, d) {
  var e = this.e[b >>> a & 31];
  return null != e ? e.Aa(a + 5, b, c, d) : d;
};
function ge(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Yd(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function he(a, b, c, d) {
  this.r = a;
  this.xa = b;
  this.k = c;
  this.e = d;
}
g = he.prototype;
g.ia = function(a, b, c, d, e, f) {
  if (c === this.xa) {
    b = ge(this.e, this.k, d);
    if (-1 === b) {
      if (this.e.length > 2 * this.k) {
        return a = $d.ra(this, a, 2 * this.k, d, 2 * this.k + 1, e), f.qa = !0, a.k += 1, a;
      }
      c = this.e.length;
      b = Array(c + 2);
      oc(this.e, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.qa = !0;
      f = this.k + 1;
      a === this.r ? (this.e = b, this.k = f, a = this) : a = new he(this.r, this.xa, f, b);
      return a;
    }
    return this.e[b + 1] === e ? this : $d.n(this, a, b + 1, e);
  }
  return(new ae(a, 1 << (this.xa >>> b & 31), [null, this, null, null])).ia(a, b, c, d, e, f);
};
g.ab = function() {
  return ee.c ? ee.c(this.e) : ee.call(null, this.e);
};
g.Oa = function(a) {
  if (a === this.r) {
    return this;
  }
  var b = Array(2 * (this.k + 1));
  oc(this.e, 0, b, 0, 2 * this.k);
  return new he(a, this.xa, this.k, b);
};
g.ha = function(a, b, c, d, e) {
  return b === this.xa ? (a = ge(this.e, this.k, c), -1 === a ? (a = 2 * this.k, b = Array(a + 2), oc(this.e, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.qa = !0, new he(null, this.xa, this.k + 1, b)) : Mb.a(this.e[a], d) ? this : new he(null, this.xa, this.k, Zd.b(this.e, a + 1, d))) : (new ae(null, 1 << (this.xa >>> a & 31), [null, this])).ha(a, b, c, d, e);
};
g.Aa = function(a, b, c, d) {
  a = ge(this.e, this.k, c);
  return 0 > a ? d : Yd(c, this.e[a]) ? this.e[a + 1] : t ? d : null;
};
var de = function() {
  function a(a, b, c, h, k, l, n) {
    var m = H(c);
    if (m === k) {
      return new he(null, m, 2, [c, h, l, n]);
    }
    var q = new Xd;
    return be.ia(a, b, m, c, h, q).ia(a, b, k, l, n, q);
  }
  function b(a, b, c, h, k, l) {
    var n = H(b);
    if (n === h) {
      return new he(null, n, 2, [b, c, k, l]);
    }
    var m = new Xd;
    return be.ha(a, n, b, c, m).ha(a, h, k, l, m);
  }
  var c = null, c = function(c, e, f, h, k, l, n) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, h, k, l);
      case 7:
        return a.call(this, c, e, f, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ra = b;
  c.Ma = a;
  return c;
}();
function ie(a, b, c, d, e) {
  this.j = a;
  this.ka = b;
  this.o = c;
  this.t = d;
  this.m = e;
  this.q = 0;
  this.h = 32374860;
}
g = ie.prototype;
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Xb(this);
};
g.D = function(a, b) {
  return O(b, this);
};
g.toString = function() {
  return Kb(this);
};
g.S = function(a, b) {
  return vc.a(b, this);
};
g.T = function(a, b, c) {
  return vc.b(b, c, this);
};
g.G = function() {
  return this;
};
g.Q = function() {
  return null == this.t ? new V(null, 2, 5, Bd, [this.ka[this.o], this.ka[this.o + 1]], null) : J(this.t);
};
g.U = function() {
  return null == this.t ? ee.b ? ee.b(this.ka, this.o + 2, null) : ee.call(null, this.ka, this.o + 2, null) : ee.b ? ee.b(this.ka, this.o, M(this.t)) : ee.call(null, this.ka, this.o, M(this.t));
};
g.v = function(a, b) {
  return Yb(this, b);
};
g.H = function(a, b) {
  return new ie(b, this.ka, this.o, this.t, this.m);
};
g.F = function() {
  return this.j;
};
g.J = function() {
  return fc(L, this.j);
};
var ee = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new ie(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (r(h) && (h = h.ab(), r(h))) {
            return new ie(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new ie(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.b(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.b = a;
  return c;
}();
function je(a, b, c, d, e) {
  this.j = a;
  this.ka = b;
  this.o = c;
  this.t = d;
  this.m = e;
  this.q = 0;
  this.h = 32374860;
}
g = je.prototype;
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Xb(this);
};
g.D = function(a, b) {
  return O(b, this);
};
g.toString = function() {
  return Kb(this);
};
g.S = function(a, b) {
  return vc.a(b, this);
};
g.T = function(a, b, c) {
  return vc.b(b, c, this);
};
g.G = function() {
  return this;
};
g.Q = function() {
  return J(this.t);
};
g.U = function() {
  return fe.n ? fe.n(null, this.ka, this.o, M(this.t)) : fe.call(null, null, this.ka, this.o, M(this.t));
};
g.v = function(a, b) {
  return Yb(this, b);
};
g.H = function(a, b) {
  return new je(b, this.ka, this.o, this.t, this.m);
};
g.F = function() {
  return this.j;
};
g.J = function() {
  return fc(L, this.j);
};
var fe = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (r(k) && (k = k.ab(), r(k))) {
            return new je(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new je(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.n(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.n = a;
  return c;
}();
function ke(a, b, c, d, e, f) {
  this.j = a;
  this.k = b;
  this.root = c;
  this.Y = d;
  this.ca = e;
  this.m = f;
  this.q = 8196;
  this.h = 16123663;
}
g = ke.prototype;
g.Va = function() {
  return new le({}, this.root, this.k, this.Y, this.ca);
};
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = zc(this);
};
g.N = function(a, b) {
  return B.b(this, b, null);
};
g.O = function(a, b, c) {
  return null == b ? this.Y ? this.ca : c : null == this.root ? c : t ? this.root.Aa(0, H(b), b, c) : null;
};
g.Ua = function(a, b, c) {
  if (null == b) {
    return this.Y && c === this.ca ? this : new ke(this.j, this.Y ? this.k : this.k + 1, this.root, !0, c, null);
  }
  a = new Xd;
  b = (null == this.root ? be : this.root).ha(0, H(b), b, c, a);
  return b === this.root ? this : new ke(this.j, a.qa ? this.k + 1 : this.k, b, this.Y, this.ca, null);
};
g.wb = function(a, b) {
  return null == b ? this.Y : null == this.root ? !1 : t ? this.root.Aa(0, H(b), b, pc) !== pc : null;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.O(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.c = function(a) {
  return this.N(null, a);
};
g.a = function(a, b) {
  return this.O(null, a, b);
};
g.D = function(a, b) {
  return lc(b) ? eb(this, y.a(b, 0), y.a(b, 1)) : uc.b(Za, this, b);
};
g.toString = function() {
  return Kb(this);
};
g.G = function() {
  if (0 < this.k) {
    var a = null != this.root ? this.root.ab() : null;
    return this.Y ? O(new V(null, 2, 5, Bd, [null, this.ca], null), a) : a;
  }
  return null;
};
g.M = function() {
  return this.k;
};
g.v = function(a, b) {
  return Od(this, b);
};
g.H = function(a, b) {
  return new ke(b, this.k, this.root, this.Y, this.ca, this.m);
};
g.F = function() {
  return this.j;
};
g.J = function() {
  return pb(Td, this.j);
};
var Td = new ke(null, 0, null, !1, null, 0);
function bc(a, b) {
  for (var c = a.length, d = 0, e = Bb(Td);;) {
    if (d < c) {
      var f = d + 1, e = e.Xa(null, a[d], b[d]), d = f
    } else {
      return Db(e);
    }
  }
}
function le(a, b, c, d, e) {
  this.r = a;
  this.root = b;
  this.count = c;
  this.Y = d;
  this.ca = e;
  this.q = 56;
  this.h = 258;
}
g = le.prototype;
g.Xa = function(a, b, c) {
  return me(this, b, c);
};
g.Ha = function(a, b) {
  var c;
  a: {
    if (this.r) {
      if (b ? b.h & 2048 || b.wc || (b.h ? 0 : s(gb, b)) : s(gb, b)) {
        c = me(this, Ac.c ? Ac.c(b) : Ac.call(null, b), Bc.c ? Bc.c(b) : Bc.call(null, b));
        break a;
      }
      c = I(b);
      for (var d = this;;) {
        var e = J(c);
        if (r(e)) {
          c = M(c), d = me(d, Ac.c ? Ac.c(e) : Ac.call(null, e), Bc.c ? Bc.c(e) : Bc.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
g.Ia = function() {
  var a;
  if (this.r) {
    this.r = null, a = new ke(null, this.count, this.root, this.Y, this.ca, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.N = function(a, b) {
  return null == b ? this.Y ? this.ca : null : null == this.root ? null : this.root.Aa(0, H(b), b);
};
g.O = function(a, b, c) {
  return null == b ? this.Y ? this.ca : c : null == this.root ? c : this.root.Aa(0, H(b), b, c);
};
g.M = function() {
  if (this.r) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function me(a, b, c) {
  if (a.r) {
    if (null == b) {
      a.ca !== c && (a.ca = c), a.Y || (a.count += 1, a.Y = !0);
    } else {
      var d = new Xd;
      b = (null == a.root ? be : a.root).ia(a.r, 0, H(b), b, c, d);
      b !== a.root && (a.root = b);
      d.qa && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var ne = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = I(a);
    for (var b = Bb(Td);;) {
      if (a) {
        var e = M(M(a)), b = Wc.b(b, J(a), J(M(a)));
        a = e;
      } else {
        return Db(b);
      }
    }
  }
  a.p = 0;
  a.l = function(a) {
    a = I(a);
    return b(a);
  };
  a.g = b;
  return a;
}();
function oe(a, b) {
  this.Ca = a;
  this.ea = b;
  this.q = 0;
  this.h = 32374988;
}
g = oe.prototype;
g.w = function() {
  return Xb(this);
};
g.X = function() {
  var a = this.Ca, a = (a ? a.h & 128 || a.cc || (a.h ? 0 : s(bb, a)) : s(bb, a)) ? this.Ca.X(null) : M(this.Ca);
  return null == a ? null : new oe(a, this.ea);
};
g.D = function(a, b) {
  return O(b, this);
};
g.toString = function() {
  return Kb(this);
};
g.S = function(a, b) {
  return vc.a(b, this);
};
g.T = function(a, b, c) {
  return vc.b(b, c, this);
};
g.G = function() {
  return this;
};
g.Q = function() {
  return this.Ca.Q(null).Nb();
};
g.U = function() {
  var a = this.Ca, a = (a ? a.h & 128 || a.cc || (a.h ? 0 : s(bb, a)) : s(bb, a)) ? this.Ca.X(null) : M(this.Ca);
  return null != a ? new oe(a, this.ea) : L;
};
g.v = function(a, b) {
  return Yb(this, b);
};
g.H = function(a, b) {
  return new oe(this.Ca, b);
};
g.F = function() {
  return this.ea;
};
g.J = function() {
  return fc(L, this.ea);
};
function pe(a) {
  return(a = I(a)) ? new oe(a, null) : null;
}
function Ac(a) {
  return hb(a);
}
function Bc(a) {
  return ib(a);
}
var qe = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return r(Zc(a)) ? uc.a(function(a, b) {
      return $b.a(r(a) ? a : Ud, b);
    }, a) : null;
  }
  a.p = 0;
  a.l = function(a) {
    a = I(a);
    return b(a);
  };
  a.g = b;
  return a;
}();
function re(a, b, c) {
  this.j = a;
  this.Qa = b;
  this.m = c;
  this.q = 8196;
  this.h = 15077647;
}
g = re.prototype;
g.Va = function() {
  return new se(Bb(this.Qa));
};
g.w = function() {
  var a = this.m;
  if (null != a) {
    return a;
  }
  a: {
    for (var a = 0, b = I(this);;) {
      if (b) {
        var c = J(b), a = (a + H(c)) % 4503599627370496, b = M(b)
      } else {
        break a;
      }
    }
    a = void 0;
  }
  return this.m = a;
};
g.N = function(a, b) {
  return B.b(this, b, null);
};
g.O = function(a, b, c) {
  return db(this.Qa, b) ? b : c;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.O(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.c = function(a) {
  return this.N(null, a);
};
g.a = function(a, b) {
  return this.O(null, a, b);
};
g.D = function(a, b) {
  return new re(this.j, cc.b(this.Qa, b, null), null);
};
g.toString = function() {
  return Kb(this);
};
g.G = function() {
  return pe(this.Qa);
};
g.M = function() {
  return Xa(this.Qa);
};
g.v = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.h & 4096 || b.Vc ? !0 : b.h ? !1 : s(jb, b) : s(jb, b)) && P(c) === P(b) && Yc(function(a) {
    return S.b(c, a, pc) === pc ? !1 : !0;
  }, b);
};
g.H = function(a, b) {
  return new re(b, this.Qa, this.m);
};
g.F = function() {
  return this.j;
};
g.J = function() {
  return fc(te, this.j);
};
var te = new re(null, Ud, 0);
function se(a) {
  this.wa = a;
  this.h = 259;
  this.q = 136;
}
g = se.prototype;
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return B.b(this.wa, c, pc) === pc ? null : c;
      case 3:
        return B.b(this.wa, c, pc) === pc ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.c = function(a) {
  return B.b(this.wa, a, pc) === pc ? null : a;
};
g.a = function(a, b) {
  return B.b(this.wa, a, pc) === pc ? b : a;
};
g.N = function(a, b) {
  return B.b(this, b, null);
};
g.O = function(a, b, c) {
  return B.b(this.wa, b, pc) === pc ? c : b;
};
g.M = function() {
  return P(this.wa);
};
g.Ha = function(a, b) {
  this.wa = Wc.b(this.wa, b, null);
  return this;
};
g.Ia = function() {
  return new re(null, Db(this.wa), null);
};
function ue(a) {
  a = I(a);
  if (null == a) {
    return te;
  }
  if (a instanceof Sb && 0 === a.o) {
    a = a.e;
    a: {
      for (var b = 0, c = Bb(te);;) {
        if (b < a.length) {
          var d = b + 1, c = c.Ha(null, a[b]), b = d
        } else {
          a = c;
          break a;
        }
      }
      a = void 0;
    }
    return a.Ia(null);
  }
  if (t) {
    for (d = Bb(te);;) {
      if (null != a) {
        b = a.X(null), d = d.Ha(null, a.Q(null)), a = b;
      } else {
        return d.Ia(null);
      }
    }
  } else {
    return null;
  }
}
function Gc(a) {
  if (a && (a.q & 4096 || a.yc)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([v("Doesn't support name: "), v(a)].join(""));
}
function ve(a, b, c, d, e) {
  this.j = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.m = e;
  this.h = 32375006;
  this.q = 8192;
}
g = ve.prototype;
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Xb(this);
};
g.X = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new ve(this.j, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new ve(this.j, this.start + this.step, this.end, this.step, null) : null;
};
g.D = function(a, b) {
  return O(b, this);
};
g.toString = function() {
  return Kb(this);
};
g.S = function(a, b) {
  return Tb.a(this, b);
};
g.T = function(a, b, c) {
  return Tb.b(this, b, c);
};
g.G = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
g.M = function() {
  return Ra(wb(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
g.Q = function() {
  return null == wb(this) ? null : this.start;
};
g.U = function() {
  return null != wb(this) ? new ve(this.j, this.start + this.step, this.end, this.step, null) : L;
};
g.v = function(a, b) {
  return Yb(this, b);
};
g.H = function(a, b) {
  return new ve(b, this.start, this.end, this.step, this.m);
};
g.F = function() {
  return this.j;
};
g.C = function(a, b) {
  if (b < Xa(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
g.ba = function(a, b, c) {
  return b < Xa(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
g.J = function() {
  return fc(L, this.j);
};
var we = function() {
  function a(a, b, c) {
    return new ve(null, a, b, c, null);
  }
  function b(a, b) {
    return e.b(a, b, 1);
  }
  function c(a) {
    return e.b(0, a, 1);
  }
  function d() {
    return e.b(0, Number.MAX_VALUE, 1);
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, h);
      case 3:
        return a.call(this, e, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.aa = d;
  e.c = c;
  e.a = b;
  e.b = a;
  return e;
}();
function xe(a, b) {
  var c = a.exec(b);
  return Mb.a(J(c), b) ? 1 === P(c) ? J(c) : Cd(c) : null;
}
function ye(a) {
  var b;
  a = /^(?:\(\?([idmsux]*)\))?(.*)/.exec(a);
  b = null == a ? null : 1 === P(a) ? J(a) : Cd(a);
  R.b(b, 0, null);
  a = R.b(b, 1, null);
  b = R.b(b, 2, null);
  return RegExp(b, a);
}
function ze(a, b, c, d, e, f, h) {
  var k = Ja;
  try {
    Ja = null == Ja ? null : Ja - 1;
    if (null != Ja && 0 > Ja) {
      return D(a, "#");
    }
    D(a, c);
    I(h) && (b.b ? b.b(J(h), a, f) : b.call(null, J(h), a, f));
    for (var l = M(h), n = Qa.c(f);l && (null == n || 0 !== n);) {
      D(a, d);
      b.b ? b.b(J(l), a, f) : b.call(null, J(l), a, f);
      var m = M(l);
      c = n - 1;
      l = m;
      n = c;
    }
    r(Qa.c(f)) && (D(a, d), b.b ? b.b("...", a, f) : b.call(null, "...", a, f));
    return D(a, e);
  } finally {
    Ja = k;
  }
}
var Ae = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = I(b), f = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = f.C(null, k);
        D(a, l);
        k += 1;
      } else {
        if (e = I(e)) {
          f = e, mc(f) ? (e = Hb(f), h = G(f), f = e, l = P(e), e = h, h = l) : (l = J(f), D(a, l), e = M(f), f = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.p = 1;
  a.l = function(a) {
    var d = J(a);
    a = K(a);
    return b(d, a);
  };
  a.g = b;
  return a;
}(), Be = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Ce(a) {
  return[v('"'), v(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Be[a];
  })), v('"')].join("");
}
var W = function De(b, c, d) {
  if (null == b) {
    return D(c, "nil");
  }
  if (void 0 === b) {
    return D(c, "#\x3cundefined\x3e");
  }
  if (t) {
    r(function() {
      var c = S.a(d, Oa);
      return r(c) ? (c = b ? b.h & 131072 || b.xc ? !0 : b.h ? !1 : s(mb, b) : s(mb, b)) ? gc(b) : c : c;
    }()) && (D(c, "^"), De(gc(b), c, d), D(c, " "));
    if (null == b) {
      return D(c, "nil");
    }
    if (b.hc) {
      return b.Gc(c);
    }
    if (b && (b.h & 2147483648 || b.P)) {
      return b.A(null, c, d);
    }
    if (Sa(b) === Boolean || "number" === typeof b) {
      return D(c, "" + v(b));
    }
    if (null != b && b.constructor === Object) {
      return D(c, "#js "), Ee.n ? Ee.n(bd.a(function(c) {
        return new V(null, 2, 5, Bd, [Hc.c(c), b[c]], null);
      }, nc(b)), De, c, d) : Ee.call(null, bd.a(function(c) {
        return new V(null, 2, 5, Bd, [Hc.c(c), b[c]], null);
      }, nc(b)), De, c, d);
    }
    if (b instanceof Array) {
      return ze(c, De, "#js [", " ", "]", d, b);
    }
    if (ca(b)) {
      return r(Na.c(d)) ? D(c, Ce(b)) : D(c, b);
    }
    if (dc(b)) {
      return Ae.g(c, N(["#\x3c", "" + v(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + v(b);;) {
          if (P(d) < c) {
            d = [v("0"), v(d)].join("");
          } else {
            return d;
          }
        }
      };
      return Ae.g(c, N(['#inst "', "" + v(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? Ae.g(c, N(['#"', b.source, '"'], 0)) : (b ? b.h & 2147483648 || b.P || (b.h ? 0 : s(yb, b)) : s(yb, b)) ? zb(b, c, d) : t ? Ae.g(c, N(["#\x3c", "" + v(b), "\x3e"], 0)) : null;
  }
  return null;
}, Fe = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (null == a || Ra(I(a))) {
      b = "";
    } else {
      b = v;
      var e = Ka(), f = new Ha;
      a: {
        var h = new Jb(f);
        W(J(a), h, e);
        a = I(M(a));
        for (var k = null, l = 0, n = 0;;) {
          if (n < l) {
            var m = k.C(null, n);
            D(h, " ");
            W(m, h, e);
            n += 1;
          } else {
            if (a = I(a)) {
              k = a, mc(k) ? (a = Hb(k), l = G(k), k = a, m = P(a), a = l, l = m) : (m = J(k), D(h, " "), W(m, h, e), a = M(k), k = null, l = 0), n = 0;
            } else {
              break a;
            }
          }
        }
      }
      b = "" + b(f);
    }
    return b;
  }
  a.p = 0;
  a.l = function(a) {
    a = I(a);
    return b(a);
  };
  a.g = b;
  return a;
}();
function Ee(a, b, c, d) {
  return ze(c, function(a, c, d) {
    b.b ? b.b(hb(a), c, d) : b.call(null, hb(a), c, d);
    D(c, " ");
    return b.b ? b.b(ib(a), c, d) : b.call(null, ib(a), c, d);
  }, "{", ", ", "}", d, I(a));
}
oe.prototype.P = !0;
oe.prototype.A = function(a, b, c) {
  return ze(b, W, "(", " ", ")", c, this);
};
Sb.prototype.P = !0;
Sb.prototype.A = function(a, b, c) {
  return ze(b, W, "(", " ", ")", c, this);
};
Fd.prototype.P = !0;
Fd.prototype.A = function(a, b, c) {
  return ze(b, W, "[", " ", "]", c, this);
};
Nc.prototype.P = !0;
Nc.prototype.A = function(a, b, c) {
  return ze(b, W, "(", " ", ")", c, this);
};
La.prototype.P = !0;
La.prototype.A = function(a, b, c) {
  return Ee(this, W, b, c);
};
Kd.prototype.P = !0;
Kd.prototype.A = function(a, b, c) {
  return ze(b, W, "#queue [", " ", "]", c, I(this));
};
Ic.prototype.P = !0;
Ic.prototype.A = function(a, b, c) {
  return ze(b, W, "(", " ", ")", c, this);
};
ie.prototype.P = !0;
ie.prototype.A = function(a, b, c) {
  return ze(b, W, "(", " ", ")", c, this);
};
Dd.prototype.P = !0;
Dd.prototype.A = function(a, b, c) {
  return ze(b, W, "(", " ", ")", c, this);
};
ke.prototype.P = !0;
ke.prototype.A = function(a, b, c) {
  return Ee(this, W, b, c);
};
re.prototype.P = !0;
re.prototype.A = function(a, b, c) {
  return ze(b, W, "#{", " ", "}", c, this);
};
V.prototype.P = !0;
V.prototype.A = function(a, b, c) {
  return ze(b, W, "[", " ", "]", c, this);
};
Cc.prototype.P = !0;
Cc.prototype.A = function(a, b, c) {
  return ze(b, W, "(", " ", ")", c, this);
};
Qd.prototype.P = !0;
Qd.prototype.A = function(a, b, c) {
  return ze(b, W, "(", " ", ")", c, this);
};
Dc.prototype.P = !0;
Dc.prototype.A = function(a, b) {
  return D(b, "()");
};
Fc.prototype.P = !0;
Fc.prototype.A = function(a, b, c) {
  return ze(b, W, "(", " ", ")", c, this);
};
ve.prototype.P = !0;
ve.prototype.A = function(a, b, c) {
  return ze(b, W, "(", " ", ")", c, this);
};
je.prototype.P = !0;
je.prototype.A = function(a, b, c) {
  return ze(b, W, "(", " ", ")", c, this);
};
V.prototype.jb = !0;
V.prototype.kb = function(a, b) {
  return tc.a(this, b);
};
Fd.prototype.jb = !0;
Fd.prototype.kb = function(a, b) {
  return tc.a(this, b);
};
U.prototype.jb = !0;
U.prototype.kb = function(a, b) {
  return Lb(this, b);
};
Pb.prototype.jb = !0;
Pb.prototype.kb = function(a, b) {
  return Lb(this, b);
};
function Ge(a, b) {
  if (a ? a.Ac : a) {
    return a.Ac(a, b);
  }
  var c;
  c = Ge[p(null == a ? null : a)];
  if (!c && (c = Ge._, !c)) {
    throw u("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var He = function() {
  function a(a, b, c, d, e) {
    if (a ? a.Ec : a) {
      return a.Ec(a, b, c, d, e);
    }
    var m;
    m = He[p(null == a ? null : a)];
    if (!m && (m = He._, !m)) {
      throw u("ISwap.-swap!", a);
    }
    return m.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.Dc : a) {
      return a.Dc(a, b, c, d);
    }
    var e;
    e = He[p(null == a ? null : a)];
    if (!e && (e = He._, !e)) {
      throw u("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.Cc : a) {
      return a.Cc(a, b, c);
    }
    var d;
    d = He[p(null == a ? null : a)];
    if (!d && (d = He._, !d)) {
      throw u("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.Bc : a) {
      return a.Bc(a, b);
    }
    var c;
    c = He[p(null == a ? null : a)];
    if (!c && (c = He._, !c)) {
      throw u("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
      case 4:
        return b.call(this, e, h, k, l);
      case 5:
        return a.call(this, e, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.a = d;
  e.b = c;
  e.n = b;
  e.K = a;
  return e;
}();
function Ie(a, b, c, d) {
  this.state = a;
  this.j = b;
  this.Nc = c;
  this.sc = d;
  this.h = 2153938944;
  this.q = 16386;
}
g = Ie.prototype;
g.w = function() {
  return ga(this);
};
g.ec = function(a, b, c) {
  a = I(this.sc);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.C(null, f), k = R.b(h, 0, null), h = R.b(h, 1, null);
      h.n ? h.n(k, this, b, c) : h.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = I(a)) {
        mc(a) ? (d = Hb(a), a = G(a), k = d, e = P(d), d = k) : (d = J(a), k = R.b(d, 0, null), h = R.b(d, 1, null), h.n ? h.n(k, this, b, c) : h.call(null, k, this, b, c), a = M(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
g.A = function(a, b, c) {
  D(b, "#\x3cAtom: ");
  W(this.state, b, c);
  return D(b, "\x3e");
};
g.F = function() {
  return this.j;
};
g.vc = function() {
  return this.state;
};
g.v = function(a, b) {
  return this === b;
};
var Ke = function() {
  function a(a) {
    return new Ie(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = qc(c) ? T.a(ne, c) : c, e = S.a(d, Je), d = S.a(d, Oa);
      return new Ie(a, d, e, null);
    }
    a.p = 1;
    a.l = function(a) {
      var c = J(a);
      a = K(a);
      return b(c, a);
    };
    a.g = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 1;
  b.l = c.l;
  b.c = a;
  b.g = c.g;
  return b;
}();
function Le(a, b) {
  if (a instanceof Ie) {
    var c = a.Nc;
    if (null != c && !r(c.c ? c.c(b) : c.call(null, b))) {
      throw Error([v("Assert failed: "), v("Validator rejected reference state"), v("\n"), v(Fe.g(N([Ec(new Pb(null, "validate", "validate", 1233162959, null), new Pb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.sc && Ab(a, c, b);
    return b;
  }
  return Ge(a, b);
}
var Me = function() {
  function a(a, b, c, d) {
    return a instanceof Ie ? Le(a, b.b ? b.b(a.state, c, d) : b.call(null, a.state, c, d)) : He.n(a, b, c, d);
  }
  function b(a, b, c) {
    return a instanceof Ie ? Le(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c)) : He.b(a, b, c);
  }
  function c(a, b) {
    return a instanceof Ie ? Le(a, b.c ? b.c(a.state) : b.call(null, a.state)) : He.a(a, b);
  }
  var d = null, e = function() {
    function a(c, d, e, f, q) {
      var w = null;
      4 < arguments.length && (w = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return a instanceof Ie ? Le(a, T.K(c, a.state, d, e, f)) : He.K(a, c, d, e, f);
    }
    a.p = 4;
    a.l = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var f = J(a);
      a = K(a);
      return b(c, d, e, f, a);
    };
    a.g = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.g(d, h, k, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.p = 4;
  d.l = e.l;
  d.a = c;
  d.b = b;
  d.n = a;
  d.g = e.g;
  return d;
}();
function Ne(a) {
  this.Yb = a;
  this.q = 0;
  this.h = 2153775104;
}
Ne.prototype.w = function() {
  return va(Fe.g(N([this], 0)));
};
Ne.prototype.A = function(a, b) {
  return D(b, [v('#uuid "'), v(this.Yb), v('"')].join(""));
};
Ne.prototype.v = function(a, b) {
  return b instanceof Ne && this.Yb === b.Yb;
};
var Pa = new U(null, "dup", "dup"), Oe = new U(null, "imaginaryorigin", "imaginaryorigin"), Pe = new U(null, "pb", "pb"), Ob = new U(null, "default", "default"), Qe = new U(null, "mandelCanvas", "mandelCanvas"), Re = new U(null, "width", "width"), Se = new U(null, "realorigin", "realorigin"), Te = new U(null, "iplane", "iplane"), Ma = new U(null, "flush-on-newline", "flush-on-newline"), Ue = new U(null, "image", "image"), Ve = new U(null, "version", "version"), We = new U(null, "side", "side"), Qa = 
new U(null, "print-length", "print-length"), Xe = new U(null, "message", "message"), t = new U(null, "else", "else"), Na = new U(null, "readably", "readably"), Je = new U(null, "validator", "validator"), Oa = new U(null, "meta", "meta"), Ye = new U(null, "origin", "origin"), Ze = new U(null, "height", "height"), $e = new U(null, "tag", "tag");
function af(a, b, c) {
  var d = qc(b) ? T.a(ne, b) : b;
  b = S.a(d, We);
  var e = S.a(d, Oe), d = S.a(d, Se), f = b / c, h = d + a * f;
  return Cd(function() {
    return function l(a) {
      return new Ic(null, function() {
        for (;;) {
          var b = I(a);
          if (b) {
            if (mc(b)) {
              var c = Hb(b), d = P(c), E = new Kc(Array(d), 0);
              return function() {
                for (var a = 0;;) {
                  if (a < d) {
                    var b = y.a(c, a), l = E;
                    a: {
                      for (var b = e + b * f, n = 0, m = 0, F = 0, qb = 1E3;;) {
                        var id = m * m, jd = F * F, m = b + 2 * F * m, F = h + (id - jd);
                        if (2 < Math.sqrt(jd + id) || 0 === qb) {
                          b = Mb.a(n, 1E3) ? 0 : n;
                          break a;
                        }
                        id = F;
                        jd = m;
                        qb -= 1;
                        n += 1;
                        m = id;
                        F = jd;
                      }
                      b = void 0;
                    }
                    l.add(b);
                    a += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? Oc(E.W(), l(G(b))) : Oc(E.W(), null);
            }
            var F = J(b);
            return O(function() {
              for (var a = e + F * f, b = 0, c = 0, d = 0, l = 1E3;;) {
                var m = c * c, n = d * d, c = a + 2 * d * c, d = h + (m - n);
                if (2 < Math.sqrt(n + m) || 0 === l) {
                  return Mb.a(b, 1E3) ? 0 : b;
                }
                m = d;
                n = c;
                l -= 1;
                b += 1;
                c = m;
                d = n;
              }
            }(), l(K(b)));
          }
          return null;
        }
      }, null, null);
    }(we.c(c));
  }());
}
var bf = Ke.c(Ad);
function cf(a, b, c) {
  a = af(a, b, c);
  Me.b(bf, $b, a);
}
;var df, ef, ff, gf;
function hf() {
  return aa.navigator ? aa.navigator.userAgent : null;
}
gf = ff = ef = df = !1;
var jf;
if (jf = hf()) {
  var kf = aa.navigator;
  df = 0 == jf.indexOf("Opera");
  ef = !df && -1 != jf.indexOf("MSIE");
  ff = !df && -1 != jf.indexOf("WebKit");
  gf = !df && !ff && "Gecko" == kf.product;
}
var lf = df, mf = ef, nf = gf, of = ff;
function pf() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var qf;
a: {
  var rf = "", sf;
  if (lf && aa.opera) {
    var tf = aa.opera.version, rf = "function" == typeof tf ? tf() : tf
  } else {
    if (nf ? sf = /rv\:([^\);]+)(\)|;)/ : mf ? sf = /MSIE\s+([^\);]+)(\)|;)/ : of && (sf = /WebKit\/(\S+)/), sf) {
      var uf = sf.exec(hf()), rf = uf ? uf[1] : ""
    }
  }
  if (mf) {
    var vf = pf();
    if (vf > parseFloat(rf)) {
      qf = String(vf);
      break a;
    }
  }
  qf = rf;
}
var wf = {};
function xf(a) {
  var b;
  if (!(b = wf[a])) {
    b = 0;
    for (var c = String(qf).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
      do {
        var m = l.exec(h) || ["", "", ""], q = n.exec(k) || ["", "", ""];
        if (0 == m[0].length && 0 == q[0].length) {
          break;
        }
        b = ((0 == m[1].length ? 0 : parseInt(m[1], 10)) < (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? -1 : (0 == m[1].length ? 0 : parseInt(m[1], 10)) > (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? 1 : 0) || ((0 == m[2].length) < (0 == q[2].length) ? -1 : (0 == m[2].length) > (0 == q[2].length) ? 1 : 0) || (m[2] < q[2] ? -1 : m[2] > q[2] ? 1 : 0);
      } while (0 == b);
    }
    b = wf[a] = 0 <= b;
  }
  return b;
}
var yf = aa.document, zf = yf && mf ? pf() || ("CSS1Compat" == yf.compatMode ? parseInt(qf, 10) : 5) : void 0;
var Af;
var Bf = !mf || mf && 9 <= zf, Cf = mf && !xf("9");
!of || xf("528");
nf && xf("1.9b") || mf && xf("8") || lf && xf("9.5") || of && xf("528");
nf && !xf("8") || mf && xf("9");
function Df() {
  0 != Ef && ga(this);
}
var Ef = 0;
function Ff(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
}
Ff.prototype.Ta = !1;
Ff.prototype.defaultPrevented = !1;
Ff.prototype.sb = !0;
Ff.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.sb = !1;
};
function Gf(a) {
  Gf[" "](a);
  return a;
}
Gf[" "] = function() {
};
function Hf(a, b) {
  a && this.qb(a, b);
}
na(Hf, Ff);
g = Hf.prototype;
g.target = null;
g.relatedTarget = null;
g.offsetX = 0;
g.offsetY = 0;
g.clientX = 0;
g.clientY = 0;
g.screenX = 0;
g.screenY = 0;
g.button = 0;
g.keyCode = 0;
g.charCode = 0;
g.ctrlKey = !1;
g.altKey = !1;
g.shiftKey = !1;
g.metaKey = !1;
g.lc = null;
g.qb = function(a, b) {
  var c = this.type = a.type;
  Ff.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (nf) {
      var e;
      a: {
        try {
          Gf(d.nodeName);
          e = !0;
          break a;
        } catch (f) {
        }
        e = !1;
      }
      e || (d = null);
    }
  } else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  }
  this.relatedTarget = d;
  this.offsetX = of || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = of || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.lc = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Ta;
};
g.preventDefault = function() {
  Hf.eb.preventDefault.call(this);
  var a = this.lc;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Cf) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var If = !mf || mf && 9 <= zf;
!nf && !mf || mf && mf && 9 <= zf || nf && xf("1.9.1");
mf && xf("9");
function Jf(a) {
  a = a.className;
  return ca(a) && a.match(/\S+/g) || [];
}
function Kf(a, b) {
  for (var c = Jf(a), d = Da(arguments, 1), e = c.length + d.length, f = c, h = 0;h < d.length;h++) {
    0 <= xa(f, d[h]) || f.push(d[h]);
  }
  a.className = c.join(" ");
  return c.length == e;
}
;function Lf(a) {
  return a ? new Mf(Nf(a)) : Af || (Af = new Mf);
}
function Of(a, b) {
  Ea(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Pf ? a.setAttribute(Pf[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var Pf = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Qf(a, b, c, d) {
  function e(c) {
    c && b.appendChild(ca(c) ? a.createTextNode(c) : c);
  }
  for (;d < c.length;d++) {
    var f = c[d];
    !ba(f) || ea(f) && 0 < f.nodeType ? e(f) : ya(Rf(f) ? Aa(f) : f, e);
  }
}
function Nf(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
function Sf(a) {
  var b = Tf(Xe);
  if ("textContent" in b) {
    b.textContent = a;
  } else {
    if (b.firstChild && 3 == b.firstChild.nodeType) {
      for (;b.lastChild != b.firstChild;) {
        b.removeChild(b.lastChild);
      }
      b.firstChild.data = a;
    } else {
      for (var c;c = b.firstChild;) {
        b.removeChild(c);
      }
      b.appendChild(Nf(b).createTextNode(String(a)));
    }
  }
}
function Rf(a) {
  if (a && "number" == typeof a.length) {
    if (ea(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (da(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
}
function Mf(a) {
  this.Za = a || aa.document || document;
}
g = Mf.prototype;
g.Qb = Lf;
g.$ = function(a) {
  return ca(a) ? this.Za.getElementById(a) : a;
};
g.Ya = function(a, b, c) {
  var d = this.Za, e = arguments, f = e[0], h = e[1];
  if (!If && h && (h.name || h.type)) {
    f = ["\x3c", f];
    h.name && f.push(' name\x3d"', oa(h.name), '"');
    if (h.type) {
      f.push(' type\x3d"', oa(h.type), '"');
      var k = {};
      Ga(k, h);
      delete k.type;
      h = k;
    }
    f.push("\x3e");
    f = f.join("");
  }
  f = d.createElement(f);
  h && (ca(h) ? f.className = h : "array" == p(h) ? Kf.apply(null, [f].concat(h)) : Of(f, h));
  2 < e.length && Qf(d, f, e, 2);
  return f;
};
g.createElement = function(a) {
  return this.Za.createElement(a);
};
g.createTextNode = function(a) {
  return this.Za.createTextNode(String(a));
};
g.appendChild = function(a, b) {
  a.appendChild(b);
};
g.append = function(a, b) {
  Qf(Nf(a), a, arguments, 1);
};
var Uf = 0;
function Vf() {
}
g = Vf.prototype;
g.key = 0;
g.Ka = !1;
g.hb = !1;
g.qb = function(a, b, c, d, e, f) {
  if (da(a)) {
    this.pc = !0;
  } else {
    if (a && a.handleEvent && da(a.handleEvent)) {
      this.pc = !1;
    } else {
      throw Error("Invalid listener argument");
    }
  }
  this.Ba = a;
  this.rc = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Rb = f;
  this.hb = !1;
  this.key = ++Uf;
  this.Ka = !1;
};
g.handleEvent = function(a) {
  return this.pc ? this.Ba.call(this.Rb || this.src, a) : this.Ba.handleEvent.call(this.Ba, a);
};
var Wf = {}, Xf = {}, Yf = {}, Zf = {};
function $f(a, b, c, d, e) {
  if ("array" == p(b)) {
    for (var f = 0;f < b.length;f++) {
      $f(a, b[f], c, d, e);
    }
    return null;
  }
  a: {
    if (!b) {
      throw Error("Invalid event type");
    }
    d = !!d;
    var h = Xf;
    b in h || (h[b] = {fa:0, Z:0});
    h = h[b];
    d in h || (h[d] = {fa:0, Z:0}, h.fa++);
    var h = h[d], f = ga(a), k;
    h.Z++;
    if (h[f]) {
      k = h[f];
      for (var l = 0;l < k.length;l++) {
        if (h = k[l], h.Ba == c && h.Rb == e) {
          if (h.Ka) {
            break;
          }
          k[l].hb = !1;
          a = k[l];
          break a;
        }
      }
    } else {
      k = h[f] = [], h.fa++;
    }
    l = ag();
    h = new Vf;
    h.qb(c, l, a, b, d, e);
    h.hb = !1;
    l.src = a;
    l.Ba = h;
    k.push(h);
    Yf[f] || (Yf[f] = []);
    Yf[f].push(h);
    a.addEventListener ? a != aa && a.kc || a.addEventListener(b, l, d) : a.attachEvent(b in Zf ? Zf[b] : Zf[b] = "on" + b, l);
    a = h;
  }
  b = a.key;
  Wf[b] = a;
  return b;
}
function ag() {
  var a = bg, b = Bf ? function(c) {
    return a.call(b.src, b.Ba, c);
  } : function(c) {
    c = a.call(b.src, b.Ba, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function cg(a, b, c, d, e) {
  if ("array" == p(b)) {
    for (var f = 0;f < b.length;f++) {
      cg(a, b[f], c, d, e);
    }
  } else {
    d = !!d;
    a: {
      f = Xf;
      if (b in f && (f = f[b], d in f && (f = f[d], a = ga(a), f[a]))) {
        a = f[a];
        break a;
      }
      a = null;
    }
    if (a) {
      for (f = 0;f < a.length;f++) {
        if (a[f].Ba == c && a[f].capture == d && a[f].Rb == e) {
          dg(a[f].key);
          break;
        }
      }
    }
  }
}
function dg(a) {
  var b = Wf[a];
  if (b && !b.Ka) {
    var c = b.src, d = b.type, e = b.rc, f = b.capture;
    c.removeEventListener ? c != aa && c.kc || c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Zf ? Zf[d] : Zf[d] = "on" + d, e);
    c = ga(c);
    Yf[c] && (e = Yf[c], za(e, b), 0 == e.length && delete Yf[c]);
    b.Ka = !0;
    if (b = Xf[d][f][c]) {
      b.qc = !0, eg(d, f, c, b);
    }
    delete Wf[a];
  }
}
function eg(a, b, c, d) {
  if (!d.rb && d.qc) {
    for (var e = 0, f = 0;e < d.length;e++) {
      d[e].Ka ? d[e].rc.src = null : (e != f && (d[f] = d[e]), f++);
    }
    d.length = f;
    d.qc = !1;
    0 == f && (delete Xf[a][b][c], Xf[a][b].fa--, 0 == Xf[a][b].fa && (delete Xf[a][b], Xf[a].fa--), 0 == Xf[a].fa && delete Xf[a]);
  }
}
function fg(a) {
  var b = 0;
  if (null != a) {
    if (a = ga(a), Yf[a]) {
      a = Yf[a];
      for (var c = a.length - 1;0 <= c;c--) {
        var d = a[c];
        "mousemove" == d.type && (dg(d.key), b++);
      }
    }
  } else {
    Ea(Wf, function(a, c) {
      dg(c);
      b++;
    });
  }
  return b;
}
function gg(a, b, c, d, e) {
  var f = 1;
  b = ga(b);
  if (a[b]) {
    var h = --a.Z, k = a[b];
    k.rb ? k.rb++ : k.rb = 1;
    try {
      for (var l = k.length, n = 0;n < l;n++) {
        var m = k[n];
        m && !m.Ka && (f &= !1 !== hg(m, e));
      }
    } finally {
      a.Z = Math.max(h, a.Z), k.rb--, eg(c, d, b, k);
    }
  }
  return Boolean(f);
}
function hg(a, b) {
  a.hb && dg(a.key);
  return a.handleEvent(b);
}
function bg(a, b) {
  if (a.Ka) {
    return!0;
  }
  var c = a.type, d = Xf;
  if (!(c in d)) {
    return!0;
  }
  var d = d[c], e, f;
  if (!Bf) {
    var h;
    if (!(h = b)) {
      a: {
        h = ["window", "event"];
        for (var k = aa;e = h.shift();) {
          if (null != k[e]) {
            k = k[e];
          } else {
            h = null;
            break a;
          }
        }
        h = k;
      }
    }
    e = h;
    h = !0 in d;
    k = !1 in d;
    if (h) {
      if (0 > e.keyCode || void 0 != e.returnValue) {
        return!0;
      }
      a: {
        var l = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (n) {
            l = !0;
          }
        }
        if (l || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
    }
    l = new Hf;
    l.qb(e, this);
    e = !0;
    try {
      if (h) {
        for (var m = [], q = l.currentTarget;q;q = q.parentNode) {
          m.push(q);
        }
        f = d[!0];
        f.Z = f.fa;
        for (var w = m.length - 1;!l.Ta && 0 <= w && f.Z;w--) {
          l.currentTarget = m[w], e &= gg(f, m[w], c, !0, l);
        }
        if (k) {
          for (f = d[!1], f.Z = f.fa, w = 0;!l.Ta && w < m.length && f.Z;w++) {
            l.currentTarget = m[w], e &= gg(f, m[w], c, !1, l);
          }
        }
      } else {
        e = hg(a, l);
      }
    } finally {
      m && (m.length = 0);
    }
    return e;
  }
  c = new Hf(b, this);
  return e = hg(a, c);
}
;function ig() {
  Df.call(this);
}
na(ig, Df);
g = ig.prototype;
g.kc = !0;
g.Ub = null;
g.Wb = function(a) {
  this.Ub = a;
};
g.addEventListener = function(a, b, c, d) {
  $f(this, a, b, c, d);
};
g.removeEventListener = function(a, b, c, d) {
  cg(this, a, b, c, d);
};
g.dispatchEvent = function(a) {
  var b = a.type || a, c = Xf;
  if (b in c) {
    if (ca(a)) {
      a = new Ff(a, this);
    } else {
      if (a instanceof Ff) {
        a.target = a.target || this;
      } else {
        var d = a;
        a = new Ff(b, this);
        Ga(a, d);
      }
    }
    var d = 1, e, c = c[b], b = !0 in c, f;
    if (b) {
      e = [];
      for (f = this;f;f = f.Ub) {
        e.push(f);
      }
      f = c[!0];
      f.Z = f.fa;
      for (var h = e.length - 1;!a.Ta && 0 <= h && f.Z;h--) {
        a.currentTarget = e[h], d &= gg(f, e[h], a.type, !0, a) && !1 != a.sb;
      }
    }
    if (!1 in c) {
      if (f = c[!1], f.Z = f.fa, b) {
        for (h = 0;!a.Ta && h < e.length && f.Z;h++) {
          a.currentTarget = e[h], d &= gg(f, e[h], a.type, !1, a) && !1 != a.sb;
        }
      } else {
        for (e = this;!a.Ta && e && f.Z;e = e.Ub) {
          a.currentTarget = e, d &= gg(f, e, a.type, !1, a) && !1 != a.sb;
        }
      }
    }
    a = Boolean(d);
  } else {
    a = !0;
  }
  return a;
};
function jg(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  if ("undefined" == typeof d) {
    throw Error("[goog.string.format] Template required");
  }
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, k, l, n, m, q) {
    if ("%" == n) {
      return "%";
    }
    var w = c.shift();
    if ("undefined" == typeof w) {
      throw Error("[goog.string.format] Not enough arguments");
    }
    arguments[0] = w;
    return jg.sa[n].apply(null, arguments);
  });
}
jg.sa = {};
jg.sa.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a;
};
jg.sa.f = function(a, b, c, d, e) {
  d = a.toString();
  isNaN(e) || "" == e || (d = a.toFixed(e));
  var f;
  f = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (d = f + d);
  if (isNaN(c) || d.length >= c) {
    return d;
  }
  d = isNaN(e) ? Math.abs(a).toString() : Math.abs(a).toFixed(e);
  a = c - d.length - f.length;
  return d = 0 <= b.indexOf("-", 0) ? f + d + Array(a + 1).join(" ") : f + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d;
};
jg.sa.d = function(a, b, c, d, e, f, h, k) {
  return jg.sa.f(parseInt(a, 10), b, c, d, 0, f, h, k);
};
jg.sa.i = jg.sa.d;
jg.sa.u = jg.sa.d;
function kg() {
}
kg.mc = function() {
  return kg.oc ? kg.oc : kg.oc = new kg;
};
kg.prototype.Lc = 0;
kg.mc();
function lg(a) {
  Df.call(this);
  this.Pb = a || Lf();
}
na(lg, ig);
g = lg.prototype;
g.Jc = kg.mc();
g.nc = null;
g.Ra = !1;
g.ya = null;
g.cb = null;
g.vb = null;
g.ib = null;
g.$ = function() {
  return this.ya;
};
g.Wb = function(a) {
  if (this.cb && this.cb != a) {
    throw Error("Method not supported");
  }
  lg.eb.Wb.call(this, a);
};
g.Qb = function() {
  return this.Pb;
};
g.Ya = function() {
  this.ya = this.Pb.createElement("div");
};
g.lb = function() {
  this.Ra = !0;
  mg(this, function(a) {
    !a.Ra && a.$() && a.lb();
  });
};
g.mb = function() {
  mg(this, function(a) {
    a.Ra && a.mb();
  });
  this.Hc && this.Hc.Yc();
  this.Ra = !1;
};
function mg(a, b) {
  a.vb && ya(a.vb, b, void 0);
}
g.removeChild = function(a, b) {
  if (a) {
    var c = ca(a) ? a : a.nc || (a.nc = ":" + (a.Jc.Lc++).toString(36));
    a = this.ib && c ? (c in this.ib ? this.ib[c] : void 0) || null : null;
    if (c && a) {
      var d = this.ib;
      c in d && delete d[c];
      za(this.vb, a);
      b && (a.mb(), a.ya && (c = a.ya) && c.parentNode && c.parentNode.removeChild(c));
      c = a;
      if (null == c) {
        throw Error("Unable to set parent component");
      }
      c.cb = null;
      lg.eb.Wb.call(c, null);
    }
  }
  if (!a) {
    throw Error("Child is not in parent component");
  }
  return a;
};
function ng(a) {
  if (!da(a)) {
    if (a && "function" == typeof a.handleEvent) {
      a = la(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return aa.setTimeout(a, 5);
}
;function og() {
  Df.call(this);
}
na(og, ig);
g = og.prototype;
g.gb = 0;
g.ja = 0;
g.na = 100;
g.ma = 0;
g.Xb = 1;
g.ta = !1;
g.Tb = !1;
g.Ea = function(a) {
  a = pg(this, a);
  this.gb != a && (this.gb = a + this.ma > this.na ? this.na - this.ma : a < this.ja ? this.ja : a, this.ta || this.Tb || this.dispatchEvent("change"));
};
g.pb = function() {
  return pg(this, this.gb);
};
g.Vb = function(a) {
  if (this.ja != a) {
    var b = this.ta;
    this.ta = !0;
    this.ja = a;
    a + this.ma > this.na && (this.ma = this.na - this.ja);
    a > this.gb && this.Ea(a);
    a > this.na && (this.ma = 0, this.tb(a), this.Ea(a));
    (this.ta = b) || this.Tb || this.dispatchEvent("change");
  }
};
g.ob = function() {
  return pg(this, this.ja);
};
g.tb = function(a) {
  a = pg(this, a);
  if (this.na != a) {
    var b = this.ta;
    this.ta = !0;
    this.na = a;
    a < this.gb + this.ma && this.Ea(a - this.ma);
    a < this.ja && (this.ma = 0, this.Vb(a), this.Ea(this.na));
    a < this.ja + this.ma && (this.ma = this.na - this.ja);
    (this.ta = b) || this.Tb || this.dispatchEvent("change");
  }
};
g.nb = function() {
  return pg(this, this.na);
};
function pg(a, b) {
  return null == a.Xb ? b : a.ja + Math.round((b - a.ja) / a.Xb) * a.Xb;
}
;function qg(a) {
  lg.call(this, a);
  this.Ja = new og;
  $f(this.Ja, "change", this.Ic, !1, this);
}
na(qg, lg);
var rg = {vertical:"progress-bar-vertical", horizontal:"progress-bar-horizontal"};
g = qg.prototype;
g.Ya = function() {
  this.la = this.Qb().Ya("div", "progress-bar-thumb");
  var a = rg[this.Sa];
  this.ya = this.Qb().Ya("div", a, this.la);
  sg(this);
  tg(this);
  ug(this);
};
g.lb = function() {
  qg.eb.lb.call(this);
  mf && 7 > qf && $f(this.$(), "resize", this.fb, !1, this);
  this.fb();
  var a = this.$();
  a.setAttribute("role", "progressbar");
  a.setAttribute("aria-live", "polite");
};
g.mb = function() {
  qg.eb.mb.call(this);
  mf && 7 > qf && cg(this.$(), "resize", this.fb, !1, this);
};
g.pb = function() {
  return this.Ja.pb();
};
g.Ea = function(a) {
  this.Ja.Ea(a);
  this.$() && sg(this);
};
function sg(a) {
  var b = a.pb();
  a.$().setAttribute("aria-valuenow", b);
}
g.ob = function() {
  return this.Ja.ob();
};
g.Vb = function(a) {
  this.Ja.Vb(a);
  this.$() && tg(this);
};
function tg(a) {
  var b = a.ob();
  a.$().setAttribute("aria-valuemin", b);
}
g.nb = function() {
  return this.Ja.nb();
};
g.tb = function(a) {
  this.Ja.tb(a);
  this.$() && ug(this);
};
function ug(a) {
  var b = a.nb();
  a.$().setAttribute("aria-valuemax", b);
}
g.Sa = "horizontal";
g.Ic = function() {
  this.fb();
  this.dispatchEvent("change");
};
g.fb = function() {
  if (this.la) {
    var a = this.ob(), b = this.nb(), a = (this.pb() - a) / (b - a), b = Math.round(100 * a);
    "vertical" == this.Sa ? mf && 7 > qf ? (this.la.style.top = 0, this.la.style.height = "100%", b = this.la.offsetHeight, a = Math.round(a * b), this.la.style.top = b - a + "px", this.la.style.height = a + "px") : (this.la.style.top = 100 - b + "%", this.la.style.height = b + "%") : this.la.style.width = b + "%";
  }
};
function X(a) {
  if (a ? a.ic : a) {
    return a.ic();
  }
  var b;
  b = X[p(null == a ? null : a)];
  if (!b && (b = X._, !b)) {
    throw u("PushbackReader.read-char", a);
  }
  return b.call(null, a);
}
function vg(a, b) {
  if (a ? a.jc : a) {
    return a.jc(0, b);
  }
  var c;
  c = vg[p(null == a ? null : a)];
  if (!c && (c = vg._, !c)) {
    throw u("PushbackReader.unread", a);
  }
  return c.call(null, a, b);
}
function wg(a, b, c) {
  this.t = a;
  this.buffer = b;
  this.Sb = c;
}
wg.prototype.ic = function() {
  return 0 === this.buffer.length ? (this.Sb += 1, this.t[this.Sb]) : this.buffer.pop();
};
wg.prototype.jc = function(a, b) {
  return this.buffer.push(b);
};
function xg(a) {
  var b = !/[^\t\n\r ]/.test(a);
  return r(b) ? b : "," === a;
}
var Y = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    throw Error(T.a(v, b));
  }
  a.p = 1;
  a.l = function(a) {
    J(a);
    a = K(a);
    return b(0, a);
  };
  a.g = b;
  return a;
}();
function yg(a, b) {
  for (var c = new Ha(b), d = X(a);;) {
    var e;
    if (!(e = null == d) && !(e = xg(d))) {
      e = d;
      var f = "#" !== e;
      e = f ? (f = "'" !== e) ? (f = ":" !== e) ? zg.c ? zg.c(e) : zg.call(null, e) : f : f : f;
    }
    if (e) {
      return vg(a, d), c.toString();
    }
    c.append(d);
    d = X(a);
  }
}
function Ag(a) {
  for (;;) {
    var b = X(a);
    if ("\n" === b || "\r" === b || null == b) {
      return a;
    }
  }
}
var Bg = ye("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?"), Cg = ye("([-+]?[0-9]+)/([0-9]+)"), Dg = ye("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?"), Eg = ye("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
function Fg(a, b) {
  var c = a.exec(b);
  return null == c ? null : 1 === c.length ? c[0] : c;
}
function Gg(a, b) {
  var c = a.exec(b);
  return null != c && c[0] === b ? 1 === c.length ? c[0] : c : null;
}
var Hg = ye("[0-9A-Fa-f]{2}"), Ig = ye("[0-9A-Fa-f]{4}");
function Jg(a, b, c, d) {
  return r(xe(a, d)) ? d : Y.g(b, N(["Unexpected unicode escape \\", c, d], 0));
}
function Kg(a) {
  return String.fromCharCode(parseInt(a, 16));
}
function Lg(a) {
  var b = X(a), c = "t" === b ? "\t" : "r" === b ? "\r" : "n" === b ? "\n" : "\\" === b ? "\\" : '"' === b ? '"' : "b" === b ? "\b" : "f" === b ? "\f" : null;
  return r(c) ? c : "x" === b ? Kg(Jg(Hg, a, b, (new Ha(X(a), X(a))).toString())) : "u" === b ? Kg(Jg(Ig, a, b, (new Ha(X(a), X(a), X(a), X(a))).toString())) : /[^0-9]/.test(b) ? t ? Y.g(a, N(["Unexpected unicode escape \\", b], 0)) : null : String.fromCharCode(b);
}
function Mg(a, b) {
  for (var c = Bb(Ad);;) {
    var d;
    a: {
      d = xg;
      for (var e = b, f = X(e);;) {
        if (r(d.c ? d.c(f) : d.call(null, f))) {
          f = X(e);
        } else {
          d = f;
          break a;
        }
      }
      d = void 0;
    }
    r(d) || Y.g(b, N(["EOF while reading"], 0));
    if (a === d) {
      return Db(c);
    }
    e = zg.c ? zg.c(d) : zg.call(null, d);
    r(e) ? d = e.a ? e.a(b, d) : e.call(null, b, d) : (vg(b, d), d = Z.n ? Z.n(b, !0, null, !0) : Z.call(null, b, !0, null));
    c = d === b ? c : Vc.a(c, d);
  }
}
function Ng(a, b) {
  return Y.g(a, N(["Reader for ", b, " not implemented yet"], 0));
}
function Og(a, b) {
  var c = X(a), d = Pg.c ? Pg.c(c) : Pg.call(null, c);
  if (r(d)) {
    return d.a ? d.a(a, b) : d.call(null, a, b);
  }
  d = Qg.a ? Qg.a(a, c) : Qg.call(null, a, c);
  return r(d) ? d : Y.g(a, N(["No dispatch macro for ", c], 0));
}
function Rg(a, b) {
  return Y.g(a, N(["Unmached delimiter ", b], 0));
}
function Sg(a) {
  return T.a(Ec, Mg(")", a));
}
function Tg(a) {
  return Mg("]", a);
}
function Ug(a) {
  var b = Mg("}", a);
  var c = P(b);
  if ("number" !== typeof c || isNaN(c) || Infinity === c || parseFloat(c) !== parseInt(c, 10)) {
    throw Error([v("Argument must be an integer: "), v(c)].join(""));
  }
  0 !== (c & 1) && Y.g(a, N(["Map literal must contain an even number of forms"], 0));
  return T.a(ne, b);
}
function Vg(a) {
  for (var b = new Ha, c = X(a);;) {
    if (null == c) {
      return Y.g(a, N(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(Lg(a)), c = X(a);
    } else {
      if ('"' === c) {
        return b.toString();
      }
      if (Ob) {
        b.append(c), c = X(a);
      } else {
        return null;
      }
    }
  }
}
function Wg(a, b) {
  var c = yg(a, b);
  if (r(-1 != c.indexOf("/"))) {
    c = Rb.a(yc.b(c, 0, c.indexOf("/")), yc.b(c, c.indexOf("/") + 1, c.length));
  } else {
    var d = Rb.c(c), c = "nil" === c ? null : "true" === c ? !0 : "false" === c ? !1 : t ? d : null
  }
  return c;
}
function Xg(a) {
  var b = yg(a, X(a)), c = Gg(Eg, b), b = c[0], d = c[1], c = c[2];
  return void 0 !== d && ":/" === d.substring(d.length - 2, d.length) || ":" === c[c.length - 1] || -1 !== b.indexOf("::", 1) ? Y.g(a, N(["Invalid token: ", b], 0)) : null != d && 0 < d.length ? Hc.a(d.substring(0, d.indexOf("/")), c) : Hc.c(b);
}
function Yg(a) {
  return function(b) {
    return Za(Za(L, Z.n ? Z.n(b, !0, null, !0) : Z.call(null, b, !0, null)), a);
  };
}
function Zg() {
  return function(a) {
    return Y.g(a, N(["Unreadable form"], 0));
  };
}
function $g(a) {
  var b;
  b = Z.n ? Z.n(a, !0, null, !0) : Z.call(null, a, !0, null);
  b = b instanceof Pb ? new La(null, 1, [$e, b], null) : "string" === typeof b ? new La(null, 1, [$e, b], null) : b instanceof U ? new Vd([b, !0]) : t ? b : null;
  kc(b) || Y.g(a, N(["Metadata must be Symbol,Keyword,String or Map"], 0));
  var c = Z.n ? Z.n(a, !0, null, !0) : Z.call(null, a, !0, null);
  return(c ? c.h & 262144 || c.Fc || (c.h ? 0 : s(ob, c)) : s(ob, c)) ? fc(c, qe.g(N([gc(c), b], 0))) : Y.g(a, N(["Metadata can only be applied to IWithMetas"], 0));
}
function ah(a) {
  return ue(Mg("}", a));
}
function bh(a) {
  return ye(Vg(a));
}
function ch(a) {
  Z.n ? Z.n(a, !0, null, !0) : Z.call(null, a, !0, null);
  return a;
}
function zg(a) {
  return'"' === a ? Vg : ":" === a ? Xg : ";" === a ? Ag : "'" === a ? Yg(new Pb(null, "quote", "quote", -1532577739, null)) : "@" === a ? Yg(new Pb(null, "deref", "deref", -1545057749, null)) : "^" === a ? $g : "`" === a ? Ng : "~" === a ? Ng : "(" === a ? Sg : ")" === a ? Rg : "[" === a ? Tg : "]" === a ? Rg : "{" === a ? Ug : "}" === a ? Rg : "\\" === a ? X : "#" === a ? Og : null;
}
function Pg(a) {
  return "{" === a ? ah : "\x3c" === a ? Zg() : '"' === a ? bh : "!" === a ? Ag : "_" === a ? ch : null;
}
function Z(a, b, c) {
  for (;;) {
    var d = X(a);
    if (null == d) {
      return r(b) ? Y.g(a, N(["EOF while reading"], 0)) : c;
    }
    if (!xg(d)) {
      if (";" === d) {
        a = Ag.a ? Ag.a(a, d) : Ag.call(null, a);
      } else {
        if (t) {
          var e = zg(d);
          if (r(e)) {
            e = e.a ? e.a(a, d) : e.call(null, a, d);
          } else {
            var e = a, f = void 0;
            !(f = !/[^0-9]/.test(d)) && (f = void 0, f = "+" === d || "-" === d) && (f = X(e), vg(e, f), f = !/[^0-9]/.test(f));
            if (f) {
              a: {
                e = a;
                d = new Ha(d);
                for (f = X(e);;) {
                  var h;
                  h = null == f;
                  h || (h = (h = xg(f)) ? h : zg.c ? zg.c(f) : zg.call(null, f));
                  if (r(h)) {
                    vg(e, f);
                    d = d.toString();
                    if (r(Gg(Bg, d))) {
                      if (h = Fg(Bg, d), f = h[2], null == f || 1 > f.length) {
                        var f = "-" === h[1] ? -1 : 1, k = r(h[3]) ? [h[3], 10] : r(h[4]) ? [h[4], 16] : r(h[5]) ? [h[5], 8] : r(h[7]) ? [h[7], parseInt(h[7])] : Ob ? [null, null] : null;
                        h = k[0];
                        k = k[1];
                        f = null == h ? null : f * parseInt(h, k);
                      } else {
                        f = 0;
                      }
                    } else {
                      r(Gg(Cg, d)) ? (f = Fg(Cg, d), f = parseInt(f[1]) / parseInt(f[2])) : f = r(Gg(Dg, d)) ? parseFloat(d) : null;
                    }
                    e = r(f) ? f : Y.g(e, N(["Invalid number format [", d, "]"], 0));
                    break a;
                  }
                  d.append(f);
                  f = X(e);
                }
                e = void 0;
              }
            } else {
              e = t ? Wg(a, d) : null;
            }
          }
          if (e !== a) {
            return e;
          }
        } else {
          return null;
        }
      }
    }
  }
}
function dh(a) {
  return Z(new wg(a, [], -1), !0, null);
}
function eh(a) {
  if (Mb.a(3, P(a))) {
    return a;
  }
  if (3 < P(a)) {
    return yc.b(a, 0, 3);
  }
  if (t) {
    for (a = new Ha(a);;) {
      if (3 > a.La.length) {
        a = a.append("0");
      } else {
        return a.toString();
      }
    }
  } else {
    return null;
  }
}
var fh = function() {
  var a = new V(null, 13, 5, Bd, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), b = new V(null, 13, 5, Bd, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null);
  return function(c, d) {
    return S.a(r(d) ? b : a, c);
  };
}(), gh = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function hh(a) {
  a = parseInt(a);
  return Ra(isNaN(a)) ? a : null;
}
function ih(a, b, c, d) {
  a <= b && b <= c || Y.g(null, N([[v(d), v(" Failed:  "), v(a), v("\x3c\x3d"), v(b), v("\x3c\x3d"), v(c)].join("")], 0));
  return b;
}
function jh(a) {
  var b = xe(gh, a);
  R.b(b, 0, null);
  var c = R.b(b, 1, null), d = R.b(b, 2, null), e = R.b(b, 3, null), f = R.b(b, 4, null), h = R.b(b, 5, null), k = R.b(b, 6, null), l = R.b(b, 7, null), n = R.b(b, 8, null), m = R.b(b, 9, null), q = R.b(b, 10, null);
  if (Ra(b)) {
    return Y.g(null, N([[v("Unrecognized date/time syntax: "), v(a)].join("")], 0));
  }
  a = hh(c);
  var b = function() {
    var a = hh(d);
    return r(a) ? a : 1;
  }(), c = function() {
    var a = hh(e);
    return r(a) ? a : 1;
  }(), w = function() {
    var a = hh(f);
    return r(a) ? a : 0;
  }(), E = function() {
    var a = hh(h);
    return r(a) ? a : 0;
  }(), F = function() {
    var a = hh(k);
    return r(a) ? a : 0;
  }(), Q = function() {
    var a = hh(eh(l));
    return r(a) ? a : 0;
  }(), n = (Mb.a(n, "-") ? -1 : 1) * (60 * function() {
    var a = hh(m);
    return r(a) ? a : 0;
  }() + function() {
    var a = hh(q);
    return r(a) ? a : 0;
  }());
  return new V(null, 8, 5, Bd, [a, ih(1, b, 12, "timestamp month field must be in range 1..12"), ih(1, c, fh.a ? fh.a(b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)) : fh.call(null, b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)), "timestamp day field must be in range 1..last day in month"), ih(0, w, 23, "timestamp hour field must be in range 0..23"), ih(0, E, 59, "timestamp minute field must be in range 0..59"), 
  ih(0, F, Mb.a(E, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), ih(0, Q, 999, "timestamp millisecond field must be in range 0..999"), n], null);
}
var kh = Ke.c(new La(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = jh(a), r(b)) {
      a = R.b(b, 0, null);
      var c = R.b(b, 1, null), d = R.b(b, 2, null), e = R.b(b, 3, null), f = R.b(b, 4, null), h = R.b(b, 5, null), k = R.b(b, 6, null);
      b = R.b(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, f, h, k) - 6E4 * b);
    } else {
      b = Y.g(null, N([[v("Unrecognized date/time syntax: "), v(a)].join("")], 0));
    }
  } else {
    b = Y.g(null, N(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new Ne(a) : Y.g(null, N(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return lc(a) ? kd(Ld, a) : Y.g(null, N(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (lc(a)) {
    var b = [];
    a = I(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.C(null, e);
        b.push(f);
        e += 1;
      } else {
        if (a = I(a)) {
          c = a, mc(c) ? (a = Hb(c), e = G(c), c = a, d = P(a), a = e) : (a = J(c), b.push(a), a = M(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (kc(a)) {
    b = {};
    a = I(a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var h = c.C(null, e), f = R.b(h, 0, null), h = R.b(h, 1, null);
        b[Gc(f)] = h;
        e += 1;
      } else {
        if (a = I(a)) {
          mc(a) ? (d = Hb(a), a = G(a), c = d, d = P(d)) : (d = J(a), c = R.b(d, 0, null), d = R.b(d, 1, null), b[Gc(c)] = d, a = M(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return t ? Y.g(null, N([[v("JS literal expects a vector or map containing "), v("only string or unqualified keyword keys")].join("")], 0)) : null;
}], null)), lh = Ke.c(null);
function Qg(a, b) {
  var c = Wg(a, b), d = S.a(C(kh), "" + v(c)), e = C(lh);
  return r(d) ? d.c ? d.c(Z(a, !0, null)) : d.call(null, Z(a, !0, null)) : r(e) ? e.a ? e.a(c, Z(a, !0, null)) : e.call(null, c, Z(a, !0, null)) : t ? Y.g(a, N(["Could not find tag parser for ", "" + v(c), " in ", Fe.g(N([pe(C(kh))], 0))], 0)) : null;
}
;var mh = Ke.c(Ud), nh = Ke.c(null), oh = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    return T.b(jg, a, b);
  }
  a.p = 1;
  a.l = function(a) {
    var d = J(a);
    a = K(a);
    return b(d, a);
  };
  a.g = b;
  return a;
}();
function Tf(a) {
  return document.getElementById(Gc(a));
}
function ph(a, b) {
  var c = R.b(a, 0, null), d = R.b(a, 1, null), e = R.b(b, 0, null), f = R.b(b, 1, null);
  return new V(null, 2, 5, Bd, [c < e ? c : e, d < f ? d : f], null);
}
var $ = new qg;
function qh(a) {
  var b = a.offsetX, c = a.offsetY;
  return r(r(b) ? c : b) ? new V(null, 2, 5, Bd, [b, c], null) : new V(null, 2, 5, Bd, [a.layerX, a.layerY], null);
}
function rh(a) {
  var b = a.target, c = qh(a), d = Ye.c(C(mh));
  a = ph(d, c);
  var e;
  e = R.b(d, 0, null);
  R.b(d, 1, null);
  var f = R.b(c, 0, null);
  R.b(c, 1, null);
  e = Math.abs(e - f);
  R.b(d, 0, null);
  d = R.b(d, 1, null);
  R.b(c, 0, null);
  c = R.b(c, 1, null);
  c = Math.abs(d - c);
  c = e > c ? e : c;
  e = R.b(a, 0, null);
  a = R.b(a, 1, null);
  b = b.getContext("2d");
  Me.g(mh, cc, Re, c, N([Ze, c], 0));
  b.putImageData(C(nh), 0, 0);
  b.fillStyle = "rgba(200,200,200,0.5)";
  return b.fillRect(e, a, c, c);
}
function sh(a) {
  var b = qh(a);
  a = a.target;
  var c = a.getContext("2d");
  Me.n(mh, cc, Ye, b);
  r(C(nh)) || Le(nh, c.getImageData(0, 0, a.width, a.height));
  return $f(a, "mousemove", rh);
}
function th(a) {
  var b = a.target;
  a = qh(a);
  Me.n(mh, cc, Ye, ph(Ye.c(C(mh)), a));
  return fg(b);
}
function uh(a, b, c, d) {
  0 === d ? d = "#000000" : (d = (33 * d % 255 + 255) % 255, d = oh.g("rgb(%d,%d,%d)", N([d, d / 5, 200], 0)));
  a.fillStyle = d;
  a.fillRect(b, c, 1, 1);
}
function vh(a, b, c, d) {
  a = Tf(a).getContext("2d");
  Le(nh, null);
  for (var e = I(we.c(c)), f = null, h = 0, k = 0;;) {
    if (k < h) {
      c = f.C(null, k);
      for (var l = I(we.c(d)), n = null, m = 0, q = 0;;) {
        if (q < m) {
          var w = n.C(null, q), E = ld.a(b, new V(null, 2, 5, Bd, [c, w], null));
          uh(a, c, w, E);
          q += 1;
        } else {
          if (l = I(l)) {
            mc(l) ? (m = Hb(l), l = G(l), n = m, m = P(m)) : (n = J(l), m = ld.a(b, new V(null, 2, 5, Bd, [c, n], null)), uh(a, c, n, m), l = M(l), n = null, m = 0), q = 0;
          } else {
            break;
          }
        }
      }
      k += 1;
    } else {
      if (c = I(e)) {
        e = c;
        if (mc(e)) {
          f = Hb(e), e = G(e), c = f, h = P(f), f = c;
        } else {
          c = J(e);
          f = I(we.c(d));
          h = null;
          for (l = k = 0;;) {
            if (l < k) {
              n = h.C(null, l), m = ld.a(b, new V(null, 2, 5, Bd, [c, n], null)), uh(a, c, n, m), l += 1;
            } else {
              if (f = I(f)) {
                mc(f) ? (k = Hb(f), f = G(f), h = k, k = P(k)) : (h = J(f), k = ld.a(b, new V(null, 2, 5, Bd, [c, h], null)), uh(a, c, h, k), f = M(f), h = null, k = 0), l = 0;
              } else {
                break;
              }
            }
          }
          e = M(e);
          f = null;
          h = 0;
        }
        k = 0;
      } else {
        return null;
      }
    }
  }
}
;var wh = Ke.c(new La(null, 3, [Se, -2, Oe, -1.25, We, 2.5], null)), xh = Ke.c(L);
function yh() {
  for (var a = I(pe(C(wh))), b = null, c = 0, d = 0;;) {
    if (d < c) {
      var e = b.C(null, d), f = e.c ? e.c(C(wh)) : e.call(null, C(wh));
      Tf(e).value = f;
      d += 1;
    } else {
      if (a = I(a)) {
        mc(a) ? (b = Hb(a), a = G(a), e = b, c = P(b), b = e) : (e = J(a), b = e.c ? e.c(C(wh)) : e.call(null, C(wh)), Tf(e).value = b, a = M(a), b = null, c = 0), d = 0;
      } else {
        break;
      }
    }
  }
}
function zh() {
  var a = pe(C(wh)), b = hd(function() {
    return function(a) {
      return function e(b) {
        return new Ic(null, function() {
          return function() {
            for (;;) {
              var a = I(b);
              if (a) {
                if (mc(a)) {
                  var c = Hb(a), l = P(c), n = new Kc(Array(l), 0);
                  a: {
                    for (var m = 0;;) {
                      if (m < l) {
                        var q = y.a(c, m), q = Za(Za(L, dh(Tf(q).value)), q);
                        n.add(q);
                        m += 1;
                      } else {
                        c = !0;
                        break a;
                      }
                    }
                    c = void 0;
                  }
                  return c ? Oc(n.W(), e(G(a))) : Oc(n.W(), null);
                }
                n = J(a);
                return O(Za(Za(L, dh(Tf(n).value)), n), e(K(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(a)(a);
  }());
  Me.b(wh, ad.a(T, cc), b);
}
var Bh = function Ah(b) {
  var c = Tf(Qe).width;
  cf(b, C(wh), c);
  if (Mb.a(b, c)) {
    return Sf("Processing ... done"), vh(Qe, C(bf), c, c);
  }
  $.Ea(b);
  return ng(function() {
    return Ah(b + 1);
  });
};
function Ch() {
  Le(bf, Ad);
  Sf("Processing ...");
  $.Ea(0);
  return Bh(0);
}
ma("mandel.core.display_params", function() {
  zh();
  return Ch();
});
ma("mandel.core.zoom", function() {
  var a, b = C(mh);
  a = I(b) ? b : null;
  if (r(a)) {
    var b = Tf(Qe).width, c = C(wh), d = qc(c) ? T.a(ne, c) : c, c = S.a(d, We), e = S.a(d, Oe), d = S.a(d, Se), f = qc(a) ? T.a(ne, a) : a;
    S.a(f, Ze);
    a = S.a(f, Re);
    var h = S.a(f, Ye), f = R.b(h, 0, null), h = R.b(h, 1, null), b = new La(null, 3, [Se, c * f / b + d, Oe, c * h / b + e, We, a / b * c], null), c = I(pe(b)), e = null;
    for (a = d = 0;;) {
      if (a < d) {
        f = e.C(null, a), h = f.c ? f.c(b) : f.call(null, b), Tf(f).value = h, a += 1;
      } else {
        if (c = I(c)) {
          mc(c) ? (d = Hb(c), c = G(c), e = d, d = P(d)) : (e = J(c), d = e.c ? e.c(b) : e.call(null, b), Tf(e).value = d, c = M(c), e = null, d = 0), a = 0;
        } else {
          break;
        }
      }
    }
    c = new La(null, 2, [Te, C(wh), Ue, C(nh)], null);
    Me.b(xh, $b, c);
    Le(wh, b);
    return Ch();
  }
  return null;
});
ma("mandel.core.back", function() {
  var a = J(C(xh));
  Me.a(xh, K);
  if (r(a)) {
    Le(mh, Ud);
    Le(wh, Te.c(a));
    yh();
    var a = Ue.c(a), b = Tf(Qe).getContext("2d");
    Le(nh, a);
    return b.putImageData(a, 0, 0);
  }
  return null;
});
ma("mandel.core.setup", function() {
  var a = [v("v"), v("0.1")].join("");
  Tf(Ve).value = a;
  yh();
  a = Tf(Qe).width;
  $.tb(a);
  if ("horizontal" != $.Sa) {
    var a = rg[$.Sa], b = rg.horizontal;
    $.Sa = "horizontal";
    if ($.$()) {
      for (var c = $.$(), d = Jf(c), e = !1, f = 0;f < d.length;f++) {
        d[f] == a && (Ca(d, f--, 1), e = !0);
      }
      e && (d.push(b), c.className = d.join(" "));
      a = $.la.style;
      "vertical" == $.Sa ? (a.left = 0, a.width = "100%") : (a.top = a.left = 0, a.height = "100%");
      $.fb();
    }
  }
  a = Tf(Pe);
  if ($.Ra) {
    throw Error("Component already rendered");
  }
  $.ya || $.Ya();
  a ? a.insertBefore($.ya, null) : $.Pb.Za.body.appendChild($.ya);
  $.cb && !$.cb.Ra || $.lb();
  a = Tf(Qe);
  $f(a, "mouseup", th);
  return $f(a, "mousedown", sh);
});

})();

//# sourceMappingURL=mandel.js.map