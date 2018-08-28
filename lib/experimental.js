(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global.Experimental = factory(global.React));
}(this, (function (_react) { 'use strict';

	var _react__default = 'default' in _react ? _react['default'] : _react;

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	function emptyFunction() {}

	var factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = factoryWithThrowingShims();
	}
	});

	function memoize(fn) {
	  var cache = {};
	  return function (arg) {
	    if (cache[arg] === undefined) cache[arg] = fn(arg);
	    return cache[arg];
	  };
	}

	var unitlessKeys = {
	  animationIterationCount: 1,
	  borderImageOutset: 1,
	  borderImageSlice: 1,
	  borderImageWidth: 1,
	  boxFlex: 1,
	  boxFlexGroup: 1,
	  boxOrdinalGroup: 1,
	  columnCount: 1,
	  columns: 1,
	  flex: 1,
	  flexGrow: 1,
	  flexPositive: 1,
	  flexShrink: 1,
	  flexNegative: 1,
	  flexOrder: 1,
	  gridRow: 1,
	  gridRowEnd: 1,
	  gridRowSpan: 1,
	  gridRowStart: 1,
	  gridColumn: 1,
	  gridColumnEnd: 1,
	  gridColumnSpan: 1,
	  gridColumnStart: 1,
	  fontWeight: 1,
	  lineHeight: 1,
	  opacity: 1,
	  order: 1,
	  orphans: 1,
	  tabSize: 1,
	  widows: 1,
	  zIndex: 1,
	  zoom: 1,
	  WebkitLineClamp: 1,
	  // SVG-related properties
	  fillOpacity: 1,
	  floodOpacity: 1,
	  stopOpacity: 1,
	  strokeDasharray: 1,
	  strokeDashoffset: 1,
	  strokeMiterlimit: 1,
	  strokeOpacity: 1,
	  strokeWidth: 1
	};

	/* eslint-disable */
	// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
	function murmurhash2_32_gc(str) {
	  var l = str.length,
	      h = l ^ l,
	      i = 0,
	      k;

	  while (l >= 4) {
	    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
	    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	    k ^= k >>> 24;
	    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
	    l -= 4;
	    ++i;
	  }

	  switch (l) {
	    case 3:
	      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

	    case 2:
	      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

	    case 1:
	      h ^= str.charCodeAt(i) & 0xff;
	      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	  }

	  h ^= h >>> 13;
	  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	  h ^= h >>> 15;
	  return (h >>> 0).toString(36);
	}

	var W = function da(X) {
	  function M(d, c, e, h, a) {
	    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, J = 0, k, u = k = q = 0, l = 0, r = 0, z = 0, t = 0, K = e.length, I = K - 1, y, f = '', p = '', F = '', G = '', C; l < K;) {
	      g = e.charCodeAt(l);
	      l === I && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, K++, I++);

	      if (0 === b + n + v + m) {
	        if (l === I && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
	          switch (g) {
	            case 32:
	            case 9:
	            case 59:
	            case 13:
	            case 10:
	              break;

	            default:
	              f += e.charAt(l);
	          }

	          g = 59;
	        }

	        switch (g) {
	          case 123:
	            f = f.trim();
	            q = f.charCodeAt(0);
	            k = 1;

	            for (t = ++l; l < K;) {
	              switch (g = e.charCodeAt(l)) {
	                case 123:
	                  k++;
	                  break;

	                case 125:
	                  k--;
	                  break;

	                case 47:
	                  switch (g = e.charCodeAt(l + 1)) {
	                    case 42:
	                    case 47:
	                      a: {
	                        for (u = l + 1; u < I; ++u) {
	                          switch (e.charCodeAt(u)) {
	                            case 47:
	                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
	                                l = u + 1;
	                                break a;
	                              }

	                              break;

	                            case 10:
	                              if (47 === g) {
	                                l = u + 1;
	                                break a;
	                              }

	                          }
	                        }

	                        l = u;
	                      }

	                  }

	                  break;

	                case 91:
	                  g++;

	                case 40:
	                  g++;

	                case 34:
	                case 39:
	                  for (; l++ < I && e.charCodeAt(l) !== g;) {
	                  }

	              }

	              if (0 === k) break;
	              l++;
	            }

	            k = e.substring(t, l);
	            0 === q && (q = (f = f.replace(ea, '').trim()).charCodeAt(0));

	            switch (q) {
	              case 64:
	                0 < r && (f = f.replace(N, ''));
	                g = f.charCodeAt(1);

	                switch (g) {
	                  case 100:
	                  case 109:
	                  case 115:
	                  case 45:
	                    r = c;
	                    break;

	                  default:
	                    r = O;
	                }

	                k = M(c, r, k, g, a + 1);
	                t = k.length;
	                0 < B && (r = Y(O, f, z), C = H(3, k, r, c, D, A, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
	                if (0 < t) switch (g) {
	                  case 115:
	                    f = f.replace(fa, ha);

	                  case 100:
	                  case 109:
	                  case 45:
	                    k = f + '{' + k + '}';
	                    break;

	                  case 107:
	                    f = f.replace(ia, '$1 $2');
	                    k = f + '{' + k + '}';
	                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
	                    break;

	                  default:
	                    k = f + k, 112 === h && (k = (p += k, ''));
	                } else k = '';
	                break;

	              default:
	                k = M(c, Y(c, f, z), k, h, a + 1);
	            }

	            F += k;
	            k = z = r = u = q = 0;
	            f = '';
	            g = e.charCodeAt(++l);
	            break;

	          case 125:
	          case 59:
	            f = (0 < r ? f.replace(N, '') : f).trim();
	            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < B && void 0 !== (C = H(1, f, c, d, D, A, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
	              case 0:
	                break;

	              case 64:
	                if (105 === g || 99 === g) {
	                  G += f + e.charAt(l);
	                  break;
	                }

	              default:
	                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
	            }
	            z = r = u = q = 0;
	            f = '';
	            g = e.charCodeAt(++l);
	        }
	      }

	      switch (g) {
	        case 13:
	        case 10:
	          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
	          0 < B * Z && H(0, f, c, d, D, A, p.length, h, a, h);
	          A = 1;
	          D++;
	          break;

	        case 59:
	        case 125:
	          if (0 === b + n + v + m) {
	            A++;
	            break;
	          }

	        default:
	          A++;
	          y = e.charAt(l);

	          switch (g) {
	            case 9:
	            case 32:
	              if (0 === n + m + b) switch (x) {
	                case 44:
	                case 58:
	                case 9:
	                case 32:
	                  y = '';
	                  break;

	                default:
	                  32 !== g && (y = ' ');
	              }
	              break;

	            case 0:
	              y = '\\0';
	              break;

	            case 12:
	              y = '\\f';
	              break;

	            case 11:
	              y = '\\v';
	              break;

	            case 38:
	              0 === n + b + m && (r = z = 1, y = '\f' + y);
	              break;

	            case 108:
	              if (0 === n + b + m + E && 0 < u) switch (l - u) {
	                case 2:
	                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

	                case 8:
	                  111 === J && (E = J);
	              }
	              break;

	            case 58:
	              0 === n + b + m && (u = l);
	              break;

	            case 44:
	              0 === b + v + n + m && (r = 1, y += '\r');
	              break;

	            case 34:
	            case 39:
	              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
	              break;

	            case 91:
	              0 === n + b + v && m++;
	              break;

	            case 93:
	              0 === n + b + v && m--;
	              break;

	            case 41:
	              0 === n + b + m && v--;
	              break;

	            case 40:
	              if (0 === n + b + m) {
	                if (0 === q) switch (2 * x + 3 * J) {
	                  case 533:
	                    break;

	                  default:
	                    q = 1;
	                }
	                v++;
	              }

	              break;

	            case 64:
	              0 === b + v + n + m + u + k && (k = 1);
	              break;

	            case 42:
	            case 47:
	              if (!(0 < n + m + v)) switch (b) {
	                case 0:
	                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
	                    case 235:
	                      b = 47;
	                      break;

	                    case 220:
	                      t = l, b = 42;
	                  }

	                  break;

	                case 42:
	                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
	              }
	          }

	          0 === b && (f += y);
	      }

	      J = x;
	      x = g;
	      l++;
	    }

	    t = p.length;

	    if (0 < t) {
	      r = c;
	      if (0 < B && (C = H(2, p, r, d, D, A, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
	      p = r.join(',') + '{' + p + '}';

	      if (0 !== w * E) {
	        2 !== w || L(p, 2) || (E = 0);

	        switch (E) {
	          case 111:
	            p = p.replace(ja, ':-moz-$1') + p;
	            break;

	          case 112:
	            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
	        }

	        E = 0;
	      }
	    }

	    return G + p + F;
	  }

	  function Y(d, c, e) {
	    var h = c.trim().split(ka);
	    c = h;
	    var a = h.length,
	        m = d.length;

	    switch (m) {
	      case 0:
	      case 1:
	        var b = 0;

	        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
	          c[b] = aa(d, c[b], e, m).trim();
	        }

	        break;

	      default:
	        var v = b = 0;

	        for (c = []; b < a; ++b) {
	          for (var n = 0; n < m; ++n) {
	            c[v++] = aa(d[n] + ' ', h[b], e, m).trim();
	          }
	        }

	    }

	    return c;
	  }

	  function aa(d, c, e) {
	    var h = c.charCodeAt(0);
	    33 > h && (h = (c = c.trim()).charCodeAt(0));

	    switch (h) {
	      case 38:
	        return c.replace(F, '$1' + d.trim());

	      case 58:
	        return d.trim() + c.replace(F, '$1' + d.trim());

	      default:
	        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
	    }

	    return d + c;
	  }

	  function P(d, c, e, h) {
	    var a = d + ';',
	        m = 2 * c + 3 * e + 4 * h;

	    if (944 === m) {
	      d = a.indexOf(':', 9) + 1;
	      var b = a.substring(d, a.length - 1).trim();
	      b = a.substring(0, d).trim() + b + ';';
	      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
	    }

	    if (0 === w || 2 === w && !L(a, 1)) return a;

	    switch (m) {
	      case 1015:
	        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

	      case 951:
	        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

	      case 963:
	        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

	      case 1009:
	        if (100 !== a.charCodeAt(4)) break;

	      case 969:
	      case 942:
	        return '-webkit-' + a + a;

	      case 978:
	        return '-webkit-' + a + '-moz-' + a + a;

	      case 1019:
	      case 983:
	        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

	      case 883:
	        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
	        if (0 < a.indexOf('image-set(', 11)) return a.replace(la, '$1-webkit-$2') + a;
	        break;

	      case 932:
	        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
	          case 103:
	            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

	          case 115:
	            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

	          case 98:
	            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
	        }
	        return '-webkit-' + a + '-ms-' + a + a;

	      case 964:
	        return '-webkit-' + a + '-ms-flex-' + a + a;

	      case 1023:
	        if (99 !== a.charCodeAt(8)) break;
	        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
	        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

	      case 1005:
	        return ma.test(a) ? a.replace(ba, ':-webkit-') + a.replace(ba, ':-moz-') + a : a;

	      case 1e3:
	        b = a.substring(13).trim();
	        c = b.indexOf('-') + 1;

	        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
	          case 226:
	            b = a.replace(G, 'tb');
	            break;

	          case 232:
	            b = a.replace(G, 'tb-rl');
	            break;

	          case 220:
	            b = a.replace(G, 'lr');
	            break;

	          default:
	            return a;
	        }

	        return '-webkit-' + a + '-ms-' + b + a;

	      case 1017:
	        if (-1 === a.indexOf('sticky', 9)) break;

	      case 975:
	        c = (a = d).length - 10;
	        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

	        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
	          case 203:
	            if (111 > b.charCodeAt(8)) break;

	          case 115:
	            a = a.replace(b, '-webkit-' + b) + ';' + a;
	            break;

	          case 207:
	          case 102:
	            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
	        }

	        return a + ';';

	      case 938:
	        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
	          case 105:
	            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

	          case 115:
	            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ca, '') + a;

	          default:
	            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ca, '') + a;
	        }
	        break;

	      case 973:
	      case 989:
	        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

	      case 931:
	      case 953:
	        if (!0 === na.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
	        break;

	      case 962:
	        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(oa, '$1-webkit-$2') + a;
	    }

	    return a;
	  }

	  function L(d, c) {
	    var e = d.indexOf(1 === c ? ':' : '{'),
	        h = d.substring(0, 3 !== c ? e : 10);
	    e = d.substring(e + 1, d.length - 1);
	    return R(2 !== c ? h : h.replace(pa, '$1'), e, c);
	  }

	  function ha(d, c) {
	    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
	    return e !== c + ';' ? e.replace(qa, ' or ($1)').substring(4) : '(' + c + ')';
	  }

	  function H(d, c, e, h, a, m, b, v, n, q) {
	    for (var g = 0, x = c, w; g < B; ++g) {
	      switch (w = S[g].call(z, d, x, e, h, a, m, b, v, n, q)) {
	        case void 0:
	        case !1:
	        case !0:
	        case null:
	          break;

	        default:
	          x = w;
	      }
	    }

	    if (x !== c) return x;
	  }

	  function T(d) {
	    switch (d) {
	      case void 0:
	      case null:
	        B = S.length = 0;
	        break;

	      default:
	        switch (d.constructor) {
	          case Array:
	            for (var c = 0, e = d.length; c < e; ++c) {
	              T(d[c]);
	            }

	            break;

	          case Function:
	            S[B++] = d;
	            break;

	          case Boolean:
	            Z = !!d | 0;
	        }

	    }

	    return T;
	  }

	  function U(d) {
	    d = d.prefix;
	    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
	    return U;
	  }

	  function z(d, c) {
	    if (void 0 !== this && this.constructor === z) return da(d);
	    var e = d;
	    33 > e.charCodeAt(0) && (e = e.trim());
	    V = e;
	    e = [V];

	    if (0 < B) {
	      var h = H(-1, c, e, e, D, A, 0, 0, 0, 0);
	      void 0 !== h && 'string' === typeof h && (c = h);
	    }

	    var a = M(O, e, c, 0, 0);
	    0 < B && (h = H(-2, a, e, e, D, A, a.length, 0, 0, 0), void 0 !== h && (a = h));
	    V = '';
	    E = 0;
	    A = D = 1;
	    return a;
	  }

	  var ea = /^\0+/g,
	      N = /[\0\r\f]/g,
	      ba = /: */g,
	      ma = /zoo|gra/,
	      oa = /([,: ])(transform)/g,
	      ka = /,\r+?/g,
	      F = /([\t\r\n ])*\f?&/g,
	      ia = /@(k\w+)\s*(\S*)\s*/,
	      Q = /::(place)/g,
	      ja = /:(read-only)/g,
	      G = /[svh]\w+-[tblr]{2}/,
	      fa = /\(\s*(.*)\s*\)/g,
	      qa = /([\s\S]*?);/g,
	      ca = /-self|flex-/g,
	      pa = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
	      na = /stretch|:\s*\w+\-(?:conte|avail)/,
	      la = /([^-])(image-set\()/,
	      A = 1,
	      D = 1,
	      E = 0,
	      w = 1,
	      O = [],
	      S = [],
	      B = 0,
	      R = null,
	      Z = 0,
	      V = '';
	  z.use = T;
	  z.set = U;
	  void 0 !== X && U(X);
	  return z;
	};

	var stylisRuleSheet = createCommonjsModule(function (module, exports) {
	(function (factory) {
		module['exports'] = factory();
	}(function () {

		return function (insertRule) {
			var delimiter = '/*|*/';
			var needle = delimiter+'}';

			function toSheet (block) {
				if (block)
					try {
						insertRule(block + '}');
					} catch (e) {}
			}

			return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
				switch (context) {
					// property
					case 1:
						// @import
						if (depth === 0 && content.charCodeAt(0) === 64)
							return insertRule(content+';'), ''
						break
					// selector
					case 2:
						if (ns === 0)
							return content + delimiter
						break
					// at-rule
					case 3:
						switch (ns) {
							// @font-face, @page
							case 102:
							case 112:
								return insertRule(selectors[0]+content), ''
							default:
								return content + (at === 0 ? delimiter : '')
						}
					case -2:
						content.split(needle).forEach(toSheet);
				}
			}
		}
	}));
	});

	var hyphenateRegex = /[A-Z]|^ms/g;
	var processStyleName = memoize(function (styleName) {
	  return styleName.replace(hyphenateRegex, '-$&').toLowerCase();
	});
	var processStyleValue = function processStyleValue(key, value) {
	  if (value == null || typeof value === 'boolean') {
	    return '';
	  }

	  if (unitlessKeys[key] !== 1 && key.charCodeAt(1) !== 45 && // custom properties
	  !isNaN(value) && value !== 0) {
	    return value + 'px';
	  }

	  return value;
	};

	var classnames = function classnames(args) {
	  var len = args.length;
	  var i = 0;
	  var cls = '';

	  for (; i < len; i++) {
	    var arg = args[i];
	    if (arg == null) continue;
	    var toAdd = void 0;

	    switch (typeof arg) {
	      case 'boolean':
	        break;

	      case 'function':

	        toAdd = classnames([arg()]);
	        break;

	      case 'object':
	        {
	          if (Array.isArray(arg)) {
	            toAdd = classnames(arg);
	          } else {
	            toAdd = '';

	            for (var k in arg) {
	              if (arg[k] && k) {
	                toAdd && (toAdd += ' ');
	                toAdd += k;
	              }
	            }
	          }

	          break;
	        }

	      default:
	        {
	          toAdd = arg;
	        }
	    }

	    if (toAdd) {
	      cls && (cls += ' ');
	      cls += toAdd;
	    }
	  }

	  return cls;
	};
	var isBrowser = typeof document !== 'undefined';

	/*

	high performance StyleSheet for css-in-js systems

	- uses multiple style tags behind the scenes for millions of rules
	- uses `insertRule` for appending in production for *much* faster performance
	- 'polyfills' on server side

	// usage

	import StyleSheet from 'glamor/lib/sheet'
	let styleSheet = new StyleSheet()

	styleSheet.inject()
	- 'injects' the stylesheet into the page (or into memory if on server)

	styleSheet.insert('#box { border: 1px solid red; }')
	- appends a css rule into the stylesheet

	styleSheet.flush()
	- empties the stylesheet of all its contents

	*/
	// $FlowFixMe
	function sheetForTag(tag) {
	  if (tag.sheet) {
	    // $FlowFixMe
	    return tag.sheet;
	  } // this weirdness brought to you by firefox


	  for (var i = 0; i < document.styleSheets.length; i++) {
	    if (document.styleSheets[i].ownerNode === tag) {
	      // $FlowFixMe
	      return document.styleSheets[i];
	    }
	  }
	}

	function makeStyleTag(opts) {
	  var tag = document.createElement('style');
	  tag.setAttribute('data-emotion', opts.key || '');

	  if (opts.nonce !== undefined) {
	    tag.setAttribute('nonce', opts.nonce);
	  }

	  tag.appendChild(document.createTextNode('')) // $FlowFixMe
	  ;
	  (opts.container !== undefined ? opts.container : document.head).appendChild(tag);
	  return tag;
	}

	var StyleSheet =
	/*#__PURE__*/
	function () {
	  function StyleSheet(options) {
	    this.isSpeedy = "production" === 'production'; // the big drawback here is that the css won't be editable in devtools

	    this.tags = [];
	    this.ctr = 0;
	    this.opts = options;
	  }

	  var _proto = StyleSheet.prototype;

	  _proto.inject = function inject() {
	    if (this.injected) {
	      throw new Error('already injected!');
	    }

	    this.tags[0] = makeStyleTag(this.opts);
	    this.injected = true;
	  };

	  _proto.speedy = function speedy(bool) {
	    if (this.ctr !== 0) {
	      // cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})
	      throw new Error("cannot change speedy now");
	    }

	    this.isSpeedy = !!bool;
	  };

	  _proto.insert = function insert(rule, sourceMap) {
	    // this is the ultrafast version, works across browsers
	    if (this.isSpeedy) {
	      var tag = this.tags[this.tags.length - 1];
	      var sheet = sheetForTag(tag);

	      try {
	        sheet.insertRule(rule, sheet.cssRules.length);
	      } catch (e) {
	      }
	    } else {
	      var _tag = makeStyleTag(this.opts);

	      this.tags.push(_tag);

	      _tag.appendChild(document.createTextNode(rule + (sourceMap || '')));
	    }

	    this.ctr++;

	    if (this.ctr % 65000 === 0) {
	      this.tags.push(makeStyleTag(this.opts));
	    }
	  };

	  _proto.flush = function flush() {
	    // $FlowFixMe
	    this.tags.forEach(function (tag) {
	      return tag.parentNode.removeChild(tag);
	    });
	    this.tags = [];
	    this.ctr = 0; // todo - look for remnants in document.styleSheets

	    this.injected = false;
	  };

	  return StyleSheet;
	}();

	function createEmotion(context, options) {
	  if (context.__SECRET_EMOTION__ !== undefined) {
	    return context.__SECRET_EMOTION__;
	  }

	  if (options === undefined) options = {};
	  var key = options.key || 'css';

	  var current;

	  function insertRule(rule) {
	    current += rule;

	    if (isBrowser) {
	      sheet.insert(rule, currentSourceMap);
	    }
	  }

	  var insertionPlugin = stylisRuleSheet(insertRule);
	  var stylisOptions;

	  if (options.prefix !== undefined) {
	    stylisOptions = {
	      prefix: options.prefix
	    };
	  }

	  var caches = {
	    registered: {},
	    inserted: {},
	    nonce: options.nonce,
	    key: key
	  };
	  var sheet = new StyleSheet(options);

	  if (isBrowser) {
	    // 🚀
	    sheet.inject();
	  }

	  var stylis = new W(stylisOptions);
	  stylis.use(options.stylisPlugins)(insertionPlugin);
	  var currentSourceMap = '';

	  function handleInterpolation(interpolation, couldBeSelectorInterpolation) {
	    if (interpolation == null) {
	      return '';
	    }

	    switch (typeof interpolation) {
	      case 'boolean':
	        return '';

	      case 'function':
	        if (interpolation.__emotion_styles !== undefined) {
	          var selector = interpolation.toString();

	          if (selector === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
	            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
	          }

	          return selector;
	        }

	        if (this === undefined && "production" !== 'production') {
	          console.error('Interpolating functions in css calls is deprecated and will be removed in the next major version of Emotion.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
	        }

	        return handleInterpolation.call(this, this === undefined ? interpolation() : // $FlowFixMe
	        interpolation(this.mergedProps, this.context), couldBeSelectorInterpolation);

	      case 'object':
	        return createStringFromObject.call(this, interpolation);

	      default:
	        var cached = caches.registered[interpolation];
	        return couldBeSelectorInterpolation === false && cached !== undefined ? cached : interpolation;
	    }
	  }

	  var objectToStringCache = new WeakMap();

	  function createStringFromObject(obj) {
	    if (objectToStringCache.has(obj)) {
	      // $FlowFixMe
	      return objectToStringCache.get(obj);
	    }

	    var string = '';

	    if (Array.isArray(obj)) {
	      obj.forEach(function (interpolation) {
	        string += handleInterpolation.call(this, interpolation, false);
	      }, this);
	    } else {
	      Object.keys(obj).forEach(function (key) {
	        if (typeof obj[key] !== 'object') {
	          if (caches.registered[obj[key]] !== undefined) {
	            string += key + "{" + caches.registered[obj[key]] + "}";
	          } else {
	            string += processStyleName(key) + ":" + processStyleValue(key, obj[key]) + ";";
	          }
	        } else {
	          if (key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
	            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
	          }

	          if (Array.isArray(obj[key]) && typeof obj[key][0] === 'string' && caches.registered[obj[key][0]] === undefined) {
	            obj[key].forEach(function (value) {
	              string += processStyleName(key) + ":" + processStyleValue(key, value) + ";";
	            });
	          } else {
	            string += key + "{" + handleInterpolation.call(this, obj[key], false) + "}";
	          }
	        }
	      }, this);
	    }

	    objectToStringCache.set(obj, string);
	    return string;
	  }

	  var name;
	  var stylesWithLabel;
	  var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;

	  var createClassName = function createClassName(styles, identifierName) {
	    return murmurhash2_32_gc(styles + identifierName) + identifierName;
	  };

	  var createStyles = function createStyles(strings) {
	    var stringMode = true;
	    var styles = '';
	    var identifierName = '';

	    if (strings == null || strings.raw === undefined) {
	      stringMode = false;
	      styles += handleInterpolation.call(this, strings, false);
	    } else {
	      styles += strings[0];
	    }

	    for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      interpolations[_key - 1] = arguments[_key];
	    }

	    interpolations.forEach(function (interpolation, i) {
	      styles += handleInterpolation.call(this, interpolation, styles.charCodeAt(styles.length - 1) === 46 // .
	      );

	      if (stringMode === true && strings[i + 1] !== undefined) {
	        styles += strings[i + 1];
	      }
	    }, this);
	    stylesWithLabel = styles;
	    styles = styles.replace(labelPattern, function (match, p1) {
	      identifierName += "-" + p1;
	      return '';
	    });
	    name = createClassName(styles, identifierName);
	    return styles;
	  };

	  function insert(scope, styles) {
	    if (caches.inserted[name] === undefined) {
	      current = '';
	      stylis(scope, styles);
	      caches.inserted[name] = current;
	    }
	  }

	  var css = function css() {
	    var styles = createStyles.apply(this, arguments);
	    var selector = key + "-" + name;

	    if (caches.registered[selector] === undefined) {
	      caches.registered[selector] = stylesWithLabel;
	    }

	    insert("." + selector, styles);
	    return selector;
	  };

	  var keyframes = function keyframes() {
	    var styles = createStyles.apply(this, arguments);
	    var animation = "animation-" + name;
	    insert('', "@keyframes " + animation + "{" + styles + "}");
	    return animation;
	  };

	  var injectGlobal = function injectGlobal() {
	    var styles = createStyles.apply(this, arguments);
	    insert('', styles);
	  };

	  function getRegisteredStyles(registeredStyles, classNames) {
	    var rawClassName = '';
	    classNames.split(' ').forEach(function (className) {
	      if (caches.registered[className] !== undefined) {
	        registeredStyles.push(className);
	      } else {
	        rawClassName += className + " ";
	      }
	    });
	    return rawClassName;
	  }

	  function merge(className, sourceMap) {
	    var registeredStyles = [];
	    var rawClassName = getRegisteredStyles(registeredStyles, className);

	    if (registeredStyles.length < 2) {
	      return className;
	    }

	    return rawClassName + css(registeredStyles, sourceMap);
	  }

	  function cx() {
	    for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      classNames[_key2] = arguments[_key2];
	    }

	    return merge(classnames(classNames));
	  }

	  function hydrateSingleId(id) {
	    caches.inserted[id] = true;
	  }

	  function hydrate(ids) {
	    ids.forEach(hydrateSingleId);
	  }

	  function flush() {
	    if (isBrowser) {
	      sheet.flush();
	      sheet.inject();
	    }

	    caches.inserted = {};
	    caches.registered = {};
	  }

	  if (isBrowser) {
	    var chunks = document.querySelectorAll("[data-emotion-" + key + "]");
	    Array.prototype.forEach.call(chunks, function (node) {
	      // $FlowFixMe
	      sheet.tags[0].parentNode.insertBefore(node, sheet.tags[0]); // $FlowFixMe

	      node.getAttribute("data-emotion-" + key).split(' ').forEach(hydrateSingleId);
	    });
	  }

	  var emotion = {
	    flush: flush,
	    hydrate: hydrate,
	    cx: cx,
	    merge: merge,
	    getRegisteredStyles: getRegisteredStyles,
	    injectGlobal: injectGlobal,
	    keyframes: keyframes,
	    css: css,
	    sheet: sheet,
	    caches: caches
	  };
	  context.__SECRET_EMOTION__ = emotion;
	  return emotion;
	}

	var context = typeof global !== 'undefined' ? global : {};

	var _createEmotion = createEmotion(context),
	    flush = _createEmotion.flush,
	    hydrate = _createEmotion.hydrate,
	    cx = _createEmotion.cx,
	    merge = _createEmotion.merge,
	    getRegisteredStyles = _createEmotion.getRegisteredStyles,
	    injectGlobal = _createEmotion.injectGlobal,
	    keyframes = _createEmotion.keyframes,
	    css = _createEmotion.css,
	    sheet = _createEmotion.sheet,
	    caches = _createEmotion.caches;

	var _emotion = /*#__PURE__*/Object.freeze({
		flush: flush,
		hydrate: hydrate,
		cx: cx,
		merge: merge,
		getRegisteredStyles: getRegisteredStyles,
		injectGlobal: injectGlobal,
		keyframes: keyframes,
		css: css,
		sheet: sheet,
		caches: caches
	});

	var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i;
	var index = memoize(reactPropsRegex.test.bind(reactPropsRegex));

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	var channel = '__EMOTION_THEMING__';

	// https://github.com/styled-components/styled-components/blob/e05b3fe247e9d956bcde786cec376e32afb85bca/src/utils/create-broadcast.js

	var _contextTypes;
	var contextTypes = (_contextTypes = {}, _contextTypes[channel] = propTypes.object, _contextTypes);

	function setTheme(theme) {
	  this.setState({
	    theme: theme
	  });
	}
	var testPickPropsOnStringTag = index;
	var testPickPropsOnComponent = function testPickPropsOnComponent(key) {
	  return key !== 'theme' && key !== 'innerRef';
	};
	var testAlwaysTrue = function testAlwaysTrue() {
	  return true;
	};
	var pickAssign = function pickAssign(testFn, target) {
	  var i = 2;
	  var length = arguments.length;

	  for (; i < length; i++) {
	    var source = arguments[i];

	    var _key = void 0;

	    for (_key in source) {
	      if (testFn(_key)) {
	        target[_key] = source[_key];
	      }
	    }
	  }

	  return target;
	};

	function createEmotionStyled(emotion, view) {
	  var _createStyled = function createStyled(tag, options) {

	    var staticClassName;
	    var identifierName;
	    var stableClassName;
	    var shouldForwardProp;

	    if (options !== undefined) {
	      staticClassName = options.e;
	      identifierName = options.label;
	      stableClassName = options.target;
	      shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
	        return tag.__emotion_forwardProp(propName) && // $FlowFixMe
	        options.shouldForwardProp(propName);
	      } : options.shouldForwardProp;
	    }

	    var isReal = tag.__emotion_real === tag;
	    var baseTag = staticClassName === undefined ? isReal && tag.__emotion_base || tag : tag;

	    if (typeof shouldForwardProp !== 'function') {
	      shouldForwardProp = typeof baseTag === 'string' && baseTag.charAt(0) === baseTag.charAt(0).toLowerCase() ? testPickPropsOnStringTag : testPickPropsOnComponent;
	    }

	    return function () {
	      var args = arguments;
	      var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

	      if (identifierName !== undefined) {
	        styles.push("label:" + identifierName + ";");
	      }

	      if (staticClassName === undefined) {
	        if (args[0] == null || args[0].raw === undefined) {
	          styles.push.apply(styles, args);
	        } else {
	          styles.push(args[0][0]);
	          var len = args.length;
	          var i = 1;

	          for (; i < len; i++) {
	            styles.push(args[i], args[0][i]);
	          }
	        }
	      }

	      var Styled =
	      /*#__PURE__*/
	      function (_view$Component) {
	        _inheritsLoose(Styled, _view$Component);

	        function Styled() {
	          return _view$Component.apply(this, arguments) || this;
	        }

	        var _proto = Styled.prototype;

	        _proto.componentWillMount = function componentWillMount() {
	          if (this.context[channel] !== undefined) {
	            this.unsubscribe = this.context[channel].subscribe(setTheme.bind(this));
	          }
	        };

	        _proto.componentWillUnmount = function componentWillUnmount() {
	          if (this.unsubscribe !== undefined) {
	            this.context[channel].unsubscribe(this.unsubscribe);
	          }
	        };

	        _proto.render = function render() {
	          var props = this.props,
	              state = this.state;
	          this.mergedProps = pickAssign(testAlwaysTrue, {}, props, {
	            theme: state !== null && state.theme || props.theme || {}
	          });
	          var className = '';
	          var classInterpolations = [];

	          if (props.className) {
	            if (staticClassName === undefined) {
	              className += emotion.getRegisteredStyles(classInterpolations, props.className);
	            } else {
	              className += props.className + " ";
	            }
	          }

	          if (staticClassName === undefined) {
	            className += emotion.css.apply(this, styles.concat(classInterpolations));
	          } else {
	            className += staticClassName;
	          }

	          if (stableClassName !== undefined) {
	            className += " " + stableClassName;
	          }

	          return view.createElement(baseTag, // $FlowFixMe
	          pickAssign(shouldForwardProp, {}, props, {
	            className: className,
	            ref: props.innerRef
	          }));
	        };

	        return Styled;
	      }(view.Component);

	      Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";

	      if (tag.defaultProps !== undefined) {
	        // $FlowFixMe
	        Styled.defaultProps = tag.defaultProps;
	      }

	      Styled.contextTypes = contextTypes;
	      Styled.__emotion_styles = styles;
	      Styled.__emotion_base = baseTag;
	      Styled.__emotion_real = Styled;
	      Styled.__emotion_forwardProp = shouldForwardProp;
	      Object.defineProperty(Styled, 'toString', {
	        value: function value() {


	          return "." + stableClassName;
	        }
	      });

	      Styled.withComponent = function (nextTag, nextOptions) {
	        return _createStyled(nextTag, nextOptions !== undefined ? // $FlowFixMe
	        pickAssign(testAlwaysTrue, {}, options, nextOptions) : options).apply(void 0, styles);
	      };

	      return Styled;
	    };
	  };

	  return _createStyled;
	}

	var index$1 = createEmotionStyled(_emotion, _react__default);

	var index_esm = /*#__PURE__*/Object.freeze({
		default: index$1,
		flush: flush,
		hydrate: hydrate,
		cx: cx,
		merge: merge,
		getRegisteredStyles: getRegisteredStyles,
		injectGlobal: injectGlobal,
		keyframes: keyframes,
		css: css,
		sheet: sheet,
		caches: caches
	});

	var sts = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var STS = function STS(sectionedStyles, tonedStyles, section, tone) {
	  var styles = null;
	  if (section !== 'magazine' && section !== 't-magazine' && tonedStyles && tonedStyles[tone]) {
	    styles = tonedStyles[tone];
	  }
	  if (sectionedStyles && sectionedStyles[section]) {
	    styles = sectionedStyles[section];
	  }
	  return styles;
	};

	exports.default = STS;
	});

	unwrapExports(sts);

	var a11y = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	exports.default = {
	  visuallyHidden: /*#__PURE__*/(0, _emotion.css)('border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;'),
	  focusable: /*#__PURE__*/(0, _emotion.css)('&:active,&:focus{clip:auto;overflow:visible;width:auto;height:auto;}'),
	  imageReplacement: /*#__PURE__*/(0, _emotion.css)('font-size:0;line-height:0;overflow:hidden;text-indent:100%;white-space:nowrap;')
	};
	});

	unwrapExports(a11y);

	var breakpoints = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var widths = exports.widths = {
	  small: 600,
	  medium: 740,
	  mediumLarge: 1024,
	  large: 1150,
	  extraLarge: 1440
	};

	var breakpointMap = exports.breakpointMap = {
	  small: '@media (min-width: ' + widths.small + 'px)',
	  medium: '@media (min-width: ' + widths.medium + 'px)',
	  mediumLarge: '@media (min-width: ' + widths.mediumLarge + 'px)',
	  large: '@media (min-width: ' + widths.large + 'px)',
	  extraLarge: '@media (min-width: ' + widths.extraLarge + 'px)'
	};

	exports.default = _extends({}, breakpointMap, {

	  width: widths,

	  maxMobileContentWidth: 600,
	  maxDesktopContentWidth: 1200,

	  mediaMaxWidth: 1200,
	  textBodyWidth: 600,
	  textBodyWidthExtralarge: 630,
	  mediumMediaExtralarge: 720,

	  mastheadMaxWidth: 1605,

	  mobileFullWidth: 'calc(100% - 40px)'
	});
	});

	unwrapExports(breakpoints);
	var breakpoints_1 = breakpoints.widths;
	var breakpoints_2 = breakpoints.breakpointMap;

	var colors = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var blue20 = '#326891';
	var gray20 = '#333';

	exports.default = {
	  black: '#000',

	  blue10: '#004276',
	  blue20: blue20,
	  blue30: '#6288a5',
	  blue40: '#879cb4',
	  blue45: '#b3c4ca',
	  blue50: '#f0f8fc',

	  gray10: '#121212',
	  gray20: gray20,
	  gray25: '#444',
	  gray27: '#555',
	  gray30: '#666',
	  gray35: '#888',
	  gray40: '#999',
	  gray45: '#b3b3b3',
	  gray50: '#ccc',
	  gray55: '#dcdcdc',
	  gray60: '#e2e2e2',
	  gray70: '#ebebeb',
	  gray75: '#eee',
	  gray80: '#f3f3f3',
	  gray90: '#f7f7f7',

	  red10: '#a81817',
	  red15: '#c52b03',
	  red20: '#d31e25',
	  red50: '#fcf6f6',

	  yellow10: '#fcb036',
	  yellow15: '#ffb932',
	  yellow20: '#f8f8d4',
	  yellow30: '#fbfbea',

	  white: '#fff',

	  green50: '#33c065',

	  newsprint10: '#bab8b3',
	  newsprint20: '#e9ebe4',
	  newsprint25: '#f4f5f2',
	  newsprint30: '#f7f7f5',

	  textColor: gray20,

	  linkColor: blue20,
	  linkVisitedColor: blue20,

	  insiderYellow: '#fed464',
	  opinionGray: '#a19d9d',
	  opinionBlue: '#0bb4f7',
	  developingOrange: '#eb6e00',

	  liveColor: '#ff3219',
	  developingColor: '#f48751',
	  breakingColor: '#d0021b'
	};
	});

	unwrapExports(colors);

	var fonts = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var cheltenham = 'nyt-cheltenham';
	var cheltenhamCond = 'nyt-cheltenham-cond';
	var cheltenhamSmall = 'nyt-cheltenham-small';
	var franklin = 'nyt-franklin';
	var graphik = 'nyt-graphik';
	var imperial = 'nyt-imperial';
	var karnak = 'nyt-karnak';
	var magsans = 'nyt-magsans';
	var magslab = 'nyt-magslab';
	var schnyderScond = 'nyt-schnyder-scond';
	var factDeck = 'nyt-fact-deck';
	var factDisplay = 'nyt-fact-display';
	var kippenberger = 'nyt-kippenberger';
	var sourceSansPro = 'Source Sans Pro';

	var serifSmall = cheltenhamSmall + ', georgia, \'times new roman\'';
	var serifBase = imperial + ', georgia, \'times new roman\', times, serif';
	var sansBase = 'helvetica, arial, sans-serif';
	var serifMedium = cheltenham + ', georgia, \'times new roman\', times, serif';
	var magazineSansBase = magsans + ', ' + sansBase;
	var franklinBase = franklin + ', ' + sansBase;
	var tmagSansBase = kippenberger + ', ' + sansBase;
	var tmagSerifDisplayBase = factDisplay + ', georgia, \'times new roman\', times, serif';
	var tmagSerifDeckBase = factDeck + ', georgia, \'times new roman\', times, serif';
	var opinionBase = cheltenhamCond + ', ' + serifMedium;
	var karnakBase = karnak + ', ' + franklinBase;
	var sponsoredBase = sourceSansPro + ', ' + sansBase;

	var baseFontSize = 16;

	exports.default = {
	  cheltenham: cheltenham,
	  cheltenhamCond: cheltenhamCond,
	  cheltenhamSmall: cheltenhamSmall,
	  franklin: franklin,
	  graphik: graphik,
	  imperial: imperial,
	  karnak: karnak,
	  magsans: magsans,
	  magslab: magslab,
	  schnyderScond: schnyderScond,
	  factDeck: factDeck,
	  factDisplay: factDisplay,
	  kippenberger: kippenberger,
	  serif: cheltenham,
	  sans: franklin,
	  serifSmall: serifSmall,
	  serifBase: serifBase,
	  sansBase: sansBase,
	  serifMedium: serifMedium,
	  magazineSansBase: magazineSansBase,
	  franklinBase: franklinBase,
	  tmagSansBase: tmagSansBase,
	  tmagSerifDisplayBase: tmagSerifDisplayBase,
	  tmagSerifDeckBase: tmagSerifDeckBase,
	  opinionBase: opinionBase,
	  karnakBase: karnakBase,
	  sponsoredBase: sponsoredBase,
	  baseFontSize: baseFontSize,

	  size: function size(px) {
	    return px / baseFontSize + 'rem';
	  },

	  weight: {
	    extraLight: 200,
	    light: 300,
	    book: 400,
	    medium: 500,
	    mediumBold: 600,
	    bold: 700,
	    extraBold: 800,
	    headline: 900
	  }
	};
	});

	unwrapExports(fonts);

	var buttons = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});





	var _colors2 = _interopRequireDefault(colors);



	var _fonts2 = _interopRequireDefault(fonts);



	var _breakpoints2 = _interopRequireDefault(breakpoints);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var base = /*#__PURE__*/(0, _emotion.css)('border-radius:3px;cursor:pointer;font-family:', _fonts2.default.franklinBase, ';transition:ease 0.6s;&::-moz-focus-inner{padding:0;border:0;}&:-moz-focusring{outline:1px dotted;}&:disabled,&.disabled{opacity:0.5;cursor:default;}');

	var action = /*#__PURE__*/(0, _emotion.css)(base, ';background-color:', _colors2.default.blue30, ';border:1px solid ', _colors2.default.blue20, ';color:', _colors2.default.white, ';font-size:11px;font-weight:', _fonts2.default.weight.bold, ';letter-spacing:0.05em;line-height:11px;padding:8px 9px 6px;text-transform:uppercase;', _breakpoints2.default.medium, '{&:hover{background-color:', _colors2.default.blue20, ';}}');

	var transparent = /*#__PURE__*/(0, _emotion.css)(base, ';background-color:transparent;color:', _colors2.default.black, ';font-size:11px;font-weight:', _fonts2.default.weight.bold, ';letter-spacing:0.02em;padding:7px 9px 9px;&:active,&.active{background-color:', _colors2.default.gray90, ';}', _breakpoints2.default.medium, '{&:hover{background-color:', _colors2.default.gray90, ';}}');

	var defaultButton = /*#__PURE__*/(0, _emotion.css)(base, ';appearance:button;background-color:', _colors2.default.white, ';border:1px solid ', _colors2.default.gray70, ';color:', _colors2.default.gray20, ';display:inline-block;font-size:11px;font-weight:', _fonts2.default.weight.medium, ';letter-spacing:0.02em;line-height:13px;margin:0;padding:8px 9px;text-transform:uppercase;vertical-align:middle;&:active,&.active{background-color:', _colors2.default.gray90, ';}', _breakpoints2.default.medium, '{&:hover{background-color:', _colors2.default.gray90, ';}}');

	var secondary = /*#__PURE__*/(0, _emotion.css)(base, ';appearance:button;background:', _colors2.default.gray80, ';border:1px solid ', _colors2.default.gray70, ';color:', _colors2.default.black, ';display:inline-block;font-size:15px;font-weight:', _fonts2.default.weight.book, ';letter-spacing:0.02em;line-height:19px;margin:0;padding:10px 20px 12px;text-transform:none;vertical-align:middle;&:active,&.active{background:', _colors2.default.gray70, ';border:1px solid ', _colors2.default.gray50, ';}', _breakpoints2.default.medium, '{&:hover{background:', _colors2.default.gray70, ';border:1px solid ', _colors2.default.gray50, ';}}');

	exports.default = {
	  base: base,
	  action: action,
	  transparent: transparent,
	  secondary: secondary,
	  default: defaultButton
	};
	});

	unwrapExports(buttons);

	var grid = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var pageMargin = 20;

	// eslint-disable-next-line
	var widthHelper = function widthHelper(columns) {
	  var gutterWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '15px';
	  var numColumns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;

	  var scrollBarWidth = '15px';

	  var numOfGutters = numColumns - 1;
	  var widthOfGutters = numOfGutters * gutterWidth + pageMargin * 2;

	  return 'calc(' + columns + ' * (((100vw - ' + widthOfGutters + ') - ' + scrollBarWidth + ') / ' + numColumns + ') + (' + columns + ' - 1) * ' + gutterWidth + ')';
	};

	exports.default = {
	  widthHelper: widthHelper,
	  pageMargin: pageMargin
	};
	});

	unwrapExports(grid);

	var print_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var print = /*#__PURE__*/(0, _emotion.css)('@media print{margin-left:0;margin-right:0;width:100%;max-width:100%;}');

	exports.default = print;
	});

	unwrapExports(print_1);

	var utils = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.STS = undefined;



	Object.defineProperty(exports, 'STS', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(sts).default;
	  }
	});



	var _a11y2 = _interopRequireDefault(a11y);



	var _breakpoints2 = _interopRequireDefault(breakpoints);



	var _buttons2 = _interopRequireDefault(buttons);



	var _colors2 = _interopRequireDefault(colors);



	var _fonts2 = _interopRequireDefault(fonts);



	var _grid2 = _interopRequireDefault(grid);



	var _print2 = _interopRequireDefault(print_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  a11y: _a11y2.default,
	  breakpoint: _breakpoints2.default,
	  button: _buttons2.default,
	  color: _colors2.default,
	  font: _fonts2.default,
	  grid: _grid2.default,
	  print: _print2.default,
	  zIndex: {
	    sectionOverlay: 100000000,
	    menuOverlay: 1000000000,
	    mastheadLogo: 1000000001,
	    mastheadButtongroup: 1000000002,
	    ribbon: 1000000100,
	    dock: 1000000101,
	    commentsPanel: 1000000109,
	    overlay: 1000000110,
	    modal: 1000000120,
	    searchModalResults: 1000000130,
	    navigation: 1000000140,
	    navigationModal: 1000000150,
	    interstitialModal: 1000000160
	  }
	};
	});

	unwrapExports(utils);
	var utils_1 = utils.STS;

	var styled = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.linkClass = undefined;





	var _utils2 = _interopRequireDefault(utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// eslint-disable-next-line
	var linkClass = /*#__PURE__*/exports.linkClass = (0, _emotion.css)('color:', _utils2.default.color.linkColor, ';&:visited{color:', _utils2.default.color.linkVisitedColor, ';}');
	});

	unwrapExports(styled);
	var styled_1 = styled.linkClass;

	var _reactEmotion = ( index_esm && index$1 ) || index_esm;

	var styled$2 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Paragraph = exports.baseParagraphStyles = undefined;



	var _reactEmotion2 = _interopRequireDefault(_reactEmotion);



	var _utils2 = _interopRequireDefault(utils);





	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseParagraphStyles = /*#__PURE__*/exports.baseParagraphStyles = (0, _emotion.css)('font-family:', _utils2.default.font.serifBase, ';font-size:1rem;line-height:1.47rem;margin-bottom:1rem;.', styled.linkClass, '{text-decoration:underline;&:hover,&:focus{text-decoration:none;}}');

	var Paragraph = /*#__PURE__*/exports.Paragraph = (0, _reactEmotion2.default)('p', {
	  target: 'e2kc3sl0'
	})(baseParagraphStyles, ';', function (p) {
	  return p.theme.breakpointMap.small;
	}, '{line-height:1.6rem;}');
	exports.default = Paragraph;
	});

	unwrapExports(styled$2);
	var styled_1$1 = styled$2.Paragraph;
	var styled_2 = styled$2.baseParagraphStyles;

	var Paragraph = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	exports.default = styled$2.Paragraph;
	});

	unwrapExports(Paragraph);

	var styled$4 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.answerClass = exports.clueClass = exports.revealClass = undefined;





	var _utils2 = _interopRequireDefault(utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */
	var revealClass = /*#__PURE__*/exports.revealClass = (0, _emotion.css)('margin-bottom:1rem;.show .answer{opacity:1;}.hide .answer{opacity:0;}');

	var clueClass = /*#__PURE__*/exports.clueClass = (0, _emotion.css)('font-family:', _utils2.default.font.serifBase, ';line-height:1.47rem;cursor pointer;margin:0 auto 1rem;text-decoration:underline;color:', _utils2.default.color.linkColor, ';&:hover{text-decoration:none;}&:focus{outline:none;}');

	var answerClass = /*#__PURE__*/exports.answerClass = (0, _emotion.css)('font-family:', _utils2.default.font.serifBase, ';opacity:1;transition:opacity 0.2s ease-out;opacity:0;&.show{opacity:1;}');
	});

	unwrapExports(styled$4);
	var styled_1$2 = styled$4.answerClass;
	var styled_2$1 = styled$4.clueClass;
	var styled_3 = styled$4.revealClass;

	var Clue_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Clue = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable import/no-extraneous-dependencies */




	var _react2 = _interopRequireDefault(_react__default);



	var _propTypes2 = _interopRequireDefault(propTypes);





	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// every piece that you want to be individually edited
	var Clue = exports.Clue = function Clue(props) {
	  return _react2.default.createElement(
	    'div',
	    _extends({}, props, { className: (0, _emotion.cx)(styled$4.clueClass, props.className) }),
	    props.children
	  );
	};

	Clue.defaultProps = {
	  className: ''
	};

	exports.default = Clue;
	});

	unwrapExports(Clue_1);
	var Clue_2 = Clue_1.Clue;

	var Answer_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Answer = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable import/no-extraneous-dependencies */




	var _react2 = _interopRequireDefault(_react__default);



	var _propTypes2 = _interopRequireDefault(propTypes);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Answer = exports.Answer = function Answer(props) {
	  return _react2.default.createElement(
	    'div',
	    _extends({}, props, { className: props.className + ' ' + styled$4.answerClass }),
	    props.children
	  );
	};

	Answer.defaultProps = {
	  className: ''
	};
	exports.default = Answer;
	});

	unwrapExports(Answer_1);
	var Answer_2 = Answer_1.Answer;

	var Reveal_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Paragraph = exports.Answer = exports.Clue = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _react2 = _interopRequireDefault(_react__default);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _Paragraph2 = _interopRequireDefault(Paragraph);





	var _Clue2 = _interopRequireDefault(Clue_1);



	var _Answer2 = _interopRequireDefault(Answer_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-extraneous-dependencies,import/no-named-as-default */


	var Reveal = function (_React$Component) {
	  _inherits(Reveal, _React$Component);

	  function Reveal() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Reveal);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Reveal.__proto__ || Object.getPrototypeOf(Reveal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      isRevealed: _this.props.isInEditor
	    }, _this.toggleReveal = function () {
	      _this.setState({ isRevealed: !_this.state.isRevealed });
	    }, _this.handleKeyPress = function (ev) {
	      if (ev.key === 'Enter' || ev.key === ' ') {
	        _this.toggleReveal();
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Reveal, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          hasReact = _props.hasReact,
	          className = _props.className,
	          clue = _props.clue,
	          answer = _props.answer,
	          paragraphContent = _props.paragraphContent;
	      // render this script within environments that don't support react, e.g. hybrid & amp

	      var nodeId = 'reveal-' + Math.floor(Math.random() * Math.floor(1000));
	      var hybridScript = '\n      (function(window, document, undefined){\n          var el = document.getElementById(\'' + nodeId + '\');\n          var ans = document.getElementById(\'' + nodeId + '-ans\');\n          el.onclick = function() {\n            ans.classList.toggle(\'show\');\n          }\n      })(window, document);\n    ';
	      var hideClass = this.state.isRevealed ? 'show' : 'hide';
	      /* eslint-disable jsx-a11y/no-static-element-interactions */
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _emotion.cx)(className, styled$4.revealClass) },
	        _react2.default.createElement(
	          _Clue2.default,
	          {
	            contentEditable: false,
	            id: hasReact ? null : nodeId,
	            onClick: this.toggleReveal,
	            onKeyPress: this.handleKeyPress,
	            tabIndex: '0'
	          },
	          clue
	        ),
	        _react2.default.createElement(
	          _Answer2.default,
	          { id: hasReact ? '' : nodeId + '-ans', className: hideClass },
	          _react2.default.createElement(
	            _Paragraph2.default,
	            null,
	            answer
	          ),
	          _react2.default.createElement(
	            _Paragraph2.default,
	            null,
	            children || paragraphContent
	          )
	        ),
	        hasReact ? null : _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: hybridScript } })
	      );
	    }
	  }]);

	  return Reveal;
	}(_react2.default.Component);

	Reveal.defaultProps = {
	  paragraphContent: [],
	  answer: '',
	  children: null,
	  className: '',
	  clue: '',
	  hasReact: true,
	  isInEditor: false
	};
	// additional named exports for Oak
	exports.Clue = _Clue2.default;
	exports.Answer = _Answer2.default;
	exports.Paragraph = _Paragraph2.default;
	exports.default = Reveal;
	});

	unwrapExports(Reveal_1);
	var Reveal_2 = Reveal_1.Paragraph;
	var Reveal_3 = Reveal_1.Answer;
	var Reveal_4 = Reveal_1.Clue;

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    getDerivedStateFromProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    callee: true,
	    arguments: true,
	    arity: true
	};

	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

	        if (objectPrototype) {
	            var inheritedComponent = getPrototypeOf(sourceComponent);
	            if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	            }
	        }

	        var keys = getOwnPropertyNames(sourceComponent);

	        if (getOwnPropertySymbols) {
	            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
	                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                try { // Avoid failures from read-only properties
	                    defineProperty(targetComponent, key, descriptor);
	                } catch (e) {}
	            }
	        }

	        return targetComponent;
	    }

	    return targetComponent;
	}

	var hoistNonReactStatics_cjs = hoistNonReactStatics;

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function _inheritsLoose$1(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	// https://github.com/styled-components/styled-components/blob/e05b3fe247e9d956bcde786cec376e32afb85bca/src/utils/create-broadcast.js
	var createBroadcast = function createBroadcast(initialState) {
	  var listeners = {};
	  var id = 0;
	  var state = initialState;

	  function publish(nextState) {
	    state = nextState;

	    for (var key in listeners) {
	      // $FlowFixMe
	      var listener = listeners[key];

	      if (listener === undefined) {
	        continue;
	      }

	      listener(state);
	    }
	  }

	  function subscribe(listener) {
	    var currentId = id;
	    listeners[currentId] = listener;
	    id += 1;
	    listener(state);
	    return currentId;
	  }

	  function unsubscribe(unsubID) {
	    listeners[unsubID] = undefined;
	  }

	  return {
	    publish: publish,
	    subscribe: subscribe,
	    unsubscribe: unsubscribe
	  };
	};

	var channel$1 = '__EMOTION_THEMING__';

	var _contextTypes$1;
	var contextTypes$1 = (_contextTypes$1 = {}, _contextTypes$1[channel$1] = propTypes.object, _contextTypes$1);

	var isPlainObject = function isPlainObject(test) {
	  return Object.prototype.toString.call(test) === '[object Object]';
	};

	// Get the theme from the props, supporting both (outerTheme) => {} as well as object notation
	function getTheme(theme, outerTheme) {
	  if (typeof theme === 'function') {
	    var mergedTheme = theme(outerTheme);

	    if (!isPlainObject(mergedTheme)) {
	      throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
	    }

	    return mergedTheme;
	  }

	  if (!isPlainObject(theme)) {
	    throw new Error('[ThemeProvider] Please make your theme prop a plain object');
	  }

	  if (outerTheme === undefined) {
	    return theme;
	  }

	  return _extends({}, outerTheme, theme);
	}

	var ThemeProvider =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose$1(ThemeProvider, _Component);

	  function ThemeProvider() {
	    return _Component.apply(this, arguments) || this;
	  }

	  var _proto = ThemeProvider.prototype;

	  _proto.componentWillMount = function componentWillMount() {
	    var _this = this;

	    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
	    // with the outer theme
	    if (this.context[channel$1] !== undefined) {
	      this.unsubscribeToOuterId = this.context[channel$1].subscribe(function (theme) {
	        _this.outerTheme = theme;

	        if (_this.broadcast !== undefined) {
	          _this.publish(_this.props.theme);
	        }
	      });
	    }

	    this.broadcast = createBroadcast(getTheme(this.props.theme, this.outerTheme));
	  };

	  _proto.getChildContext = function getChildContext() {
	    var _ref;

	    return _ref = {}, _ref[channel$1] = {
	      subscribe: this.broadcast.subscribe,
	      unsubscribe: this.broadcast.unsubscribe
	    }, _ref;
	  };

	  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.props.theme !== nextProps.theme) {
	      this.publish(nextProps.theme);
	    }
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    var themeContext = this.context[channel$1];

	    if (themeContext !== undefined) {
	      themeContext.unsubscribe(this.unsubscribeToOuterId);
	    }
	  };

	  _proto.publish = function publish(theme) {
	    this.broadcast.publish(getTheme(theme, this.outerTheme));
	  };

	  _proto.render = function render() {
	    if (!this.props.children) {
	      return null;
	    }

	    return _react.Children.only(this.props.children);
	  };

	  ThemeProvider.childContextTypes = contextTypes$1;
	  ThemeProvider.contextTypes = contextTypes$1;
	  return ThemeProvider;
	}(_react.Component);

	var withTheme = function withTheme(Component$$1) {
	  var componentName = Component$$1.displayName || Component$$1.name || 'Component';

	  var WithTheme =
	  /*#__PURE__*/
	  function (_React$Component) {
	    _inheritsLoose$1(WithTheme, _React$Component);

	    function WithTheme(props) {
	      return _React$Component.call(this, props) || this;
	    }

	    var _proto = WithTheme.prototype;

	    _proto.componentWillMount = function componentWillMount() {
	      var _this = this;

	      var themeContext = this.context[channel$1];

	      if (themeContext === undefined) {
	        // eslint-disable-next-line no-console
	        console.error('[withTheme] Please use ThemeProvider to be able to use withTheme');
	        return;
	      }

	      this.unsubscribeId = themeContext.subscribe(function (theme) {
	        _this.setState({
	          theme: theme
	        });
	      });
	    };

	    _proto.componentWillUnmount = function componentWillUnmount() {
	      if (this.unsubscribeId !== -1) {
	        this.context[channel$1].unsubscribe(this.unsubscribeId);
	      }
	    };

	    _proto.render = function render() {
	      return _react.createElement(Component$$1, _extends({
	        theme: this.state.theme
	      }, this.props));
	    };

	    return WithTheme;
	  }(_react.Component);

	  WithTheme.displayName = "WithTheme(" + componentName + ")";
	  WithTheme.contextTypes = contextTypes$1;
	  return hoistNonReactStatics_cjs(WithTheme, Component$$1);
	};

	var index_esm$1 = /*#__PURE__*/Object.freeze({
		ThemeProvider: ThemeProvider,
		withTheme: withTheme,
		channel: channel$1,
		contextTypes: contextTypes$1,
		createBroadcast: createBroadcast
	});

	var NYTThemeProvider_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sectionToneReducer = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



	var _react2 = _interopRequireDefault(_react__default);



	var _propTypes2 = _interopRequireDefault(propTypes);





	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var sectionToneReducer = function sectionToneReducer(theme) {
	  var section = theme.section,
	      tone = theme.tone,
	      others = _objectWithoutProperties(theme, ['section', 'tone']);

	  if (section === 'magazine' || section === 't-magazine') {
	    return _extends({
	      section: section
	    }, others);
	  }

	  return theme;
	};

	exports.sectionToneReducer = sectionToneReducer;
	var NYTThemeProvider = function NYTThemeProvider(_ref) {
	  var _theme = _ref.theme,
	      children = _ref.children;

	  if (typeof _theme === 'function') {
	    return _react2.default.createElement(
	      index_esm$1.ThemeProvider,
	      {
	        theme: function theme(providedTheme) {
	          return sectionToneReducer(_theme(_extends({ breakpointMap: breakpoints.breakpointMap }, providedTheme)));
	        }
	      },
	      children
	    );
	  }

	  return _react2.default.createElement(
	    index_esm$1.ThemeProvider,
	    { theme: sectionToneReducer(_extends({ breakpointMap: breakpoints.breakpointMap }, _theme)) },
	    children
	  );
	};

	NYTThemeProvider.defaultProps = {
	  theme: {}
	};

	exports.default = NYTThemeProvider;
	});

	unwrapExports(NYTThemeProvider_1);
	var NYTThemeProvider_2 = NYTThemeProvider_1.sectionToneReducer;

	function getThemeValue(name, props, values) {
	  var value = (
	    props.theme &&
	    props.theme[name]
	  );

	  var themeValue;

	  if (typeof value === 'function') {
	    themeValue = value(values);
	  } else {
	    themeValue = values[value];
	  }

	  if (typeof themeValue === 'function') {
	    return themeValue(props);
	  } else {
	    return themeValue;
	  }
	}

	function theme(name, values) {
	  return function(props) {
	    return getThemeValue(name, props, values);
	  };
	}

	theme.variants = function(name, prop, values) {
	  return function(props) {
	    var variant = props[prop] && values[props[prop]];
	    return variant && getThemeValue(name, props, variant);
	  };
	};

	var styledTheming = theme;

	var MediaFigureContainer_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mediaFigureContainerSizeStyles = undefined;



	var _reactEmotion2 = _interopRequireDefault(_reactEmotion);



	var _styledTheming2 = _interopRequireDefault(styledTheming);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = 'width:50%;';
	var _ref2 = '{width:300px;}';
	var _ref3 = '{max-width:300px;}';
	var _ref4 = '{width:300px;}';
	var _ref5 = '{width:300px;}';


	var mediaFigureContainerSizeStyles = (0, _styledTheming2.default)('mediaSize', {
	  small: function small(props) {
	    return (/*#__PURE__*/(0, _reactEmotion.css)(_ref, props.theme.breakpointMap.small, _ref2, props.theme.breakpointMap.medium, _ref3, props.theme.breakpointMap.mediumLarge, _ref4, props.theme.breakpointMap.extraLarge, _ref5)
	    );
	  }
	});

	var MediaFigureContainer = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
	  target: 'e1vv25i80'
	})(mediaFigureContainerSizeStyles, ';');

	exports.default = MediaFigureContainer;
	exports.mediaFigureContainerSizeStyles = mediaFigureContainerSizeStyles;
	});

	unwrapExports(MediaFigureContainer_1);
	var MediaFigureContainer_2 = MediaFigureContainer_1.mediaFigureContainerSizeStyles;

	var styled$6 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Caption = exports.sectionStyles = undefined;



	var _reactEmotion2 = _interopRequireDefault(_reactEmotion);



	var _utils2 = _interopRequireDefault(utils);



	var _styledTheming2 = _interopRequireDefault(styledTheming);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sectionStyles = exports.sectionStyles = (0, _styledTheming2.default)('section', {
	  magazine: /*#__PURE__*/(0, _reactEmotion.css)('font-family:', _utils2.default.font.magazineSansBase, ';color:', _utils2.default.color.gray25, ';font-size:0.8rem;line-height:1rem;'),
	  't-magazine': /*#__PURE__*/(0, _reactEmotion.css)('font-family:', _utils2.default.font.tmagSansBase, ';font-weight:', _utils2.default.font.weight.book, ';color:', _utils2.default.color.gray20, ';letter-spacing:0.02em;font-size:0.7rem;line-height:1.1rem;')
	});

	var Caption = /*#__PURE__*/exports.Caption = (0, _reactEmotion2.default)('span', {
	  target: 'e1olku6u0'
	})('font-family:', _utils2.default.font.serifBase, ';color:', _utils2.default.color.gray30, ';font-size:0.75rem;line-height:1rem;margin-right:7px;color:', _utils2.default.color.gray30, ';', _utils2.default.breakpoint.extraLarge, '{font-size:0.8175rem;line-height:1rem;}', sectionStyles, ';');
	});

	unwrapExports(styled$6);
	var styled_1$3 = styled$6.Caption;
	var styled_2$2 = styled$6.sectionStyles;

	var Caption = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return styled$6.Caption;
	  }
	});
	});

	unwrapExports(Caption);

	var MediaFigCaption_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mediaFigCaptionSizeStyles = undefined;



	var _reactEmotion2 = _interopRequireDefault(_reactEmotion);



	var _styledTheming2 = _interopRequireDefault(styledTheming);



	var _utils2 = _interopRequireDefault(utils);



	var _Caption2 = _interopRequireDefault(Caption);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = 'display:flex;flex-direction:column;width:calc(50% - 15px);margin:0 0 0 15px;';
	var _ref2 = '{width:260px;margin:auto 0 15px 15px;';
	var _ref3 = '{margin-top:auto;}}';
	var _ref4 = '{margin-left:15px;}';
	var _ref5 = '{width:330px;margin-left:15px;}';
	var _ref6 = '{max-width:';
	var _ref7 = 'px;}';
	var _ref8 = 'max-width:none;';
	var _ref9 = '{margin-left:';
	var _ref10 = 'px;}';
	var _ref11 = '{margin-left:';
	var _ref12 = 'px;}';
	var _ref13 = '{max-width:';
	var _ref14 = 'px;margin-left:0;}';
	var _ref15 = '{width:900px;margin-left:0;}';
	var _ref16 = 'max-width:';
	var _ref17 = 'px;margin-left:';
	var _ref18 = 'px;';
	var _ref19 = '{max-width:900px;margin-left:';
	var _ref20 = 'px;}';
	var _ref21 = '{max-width:900px;}';
	var _ref22 = '{max-width:900px;}';


	var mediaFigCaptionSizeStyles = (0, _styledTheming2.default)('mediaSize', {
	  small: function small(props) {
	    return (/*#__PURE__*/(0, _reactEmotion.css)(_ref, props.theme.breakpointMap.small, _ref2, _Caption2.default, _ref3, props.theme.breakpointMap.medium, _ref4, props.theme.breakpointMap.extraLarge, _ref5)
	    );
	  },
	  medium: function medium(props) {
	    return (/*#__PURE__*/(0, _reactEmotion.css)(props.theme.breakpointMap.extraLarge, _ref6, _utils2.default.breakpoint.textBodyWidthExtraLarge, _ref7)
	    );
	  },
	  large: function large(props) {
	    return (/*#__PURE__*/(0, _reactEmotion.css)(_ref8, props.theme.breakpointMap.small, _ref9, _utils2.default.grid.pageMargin, _ref10, props.theme.breakpointMap.medium, _ref11, _utils2.default.grid.pageMargin, _ref12, props.theme.breakpointMap.mediumLarge, _ref13, _utils2.default.breakpoint.mediumMediaExtralarge, _ref14, props.theme.breakpointMap.extraLarge, _ref15)
	    );
	  },
	  full: function full(props) {
	    return (/*#__PURE__*/(0, _reactEmotion.css)(_ref16, _utils2.default.breakpoint.textBodyWidth, _ref17, _utils2.default.grid.pageMargin, _ref18, props.theme.breakpointMap.small, _ref19, _utils2.default.grid.pageMargin, _ref20, props.theme.breakpointMap.medium, _ref21, props.theme.breakpointMap.extraLarge, _ref22)
	    );
	  }
	});

	var MediaFigCaption = /*#__PURE__*/(0, _reactEmotion2.default)('figcaption', {
	  target: 'e3zkro30'
	})('font-family:', _utils2.default.font.serifBase, ';color:', _utils2.default.color.gray30, ';a{color:', _utils2.default.color.linkColor, ';text-decoration:none;&:hover,&:focus{text-decoration:underline;}}margin:10px ', _utils2.default.grid.pageMargin, 'px 0 ', _utils2.default.grid.pageMargin, 'px;text-align:left;', function (props) {
	  return '\n    ' + props.theme.breakpointMap.small + ' {\n      margin-left: 0;\n      margin-right: 20px;\n    }\n  ';
	}, ';', mediaFigCaptionSizeStyles, ';');

	exports.default = MediaFigCaption;
	exports.mediaFigCaptionSizeStyles = mediaFigCaptionSizeStyles;
	});

	unwrapExports(MediaFigCaption_1);
	var MediaFigCaption_2 = MediaFigCaption_1.mediaFigCaptionSizeStyles;

	var styled$8 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Credit = exports.sectionStyles = undefined;



	var _reactEmotion2 = _interopRequireDefault(_reactEmotion);



	var _utils2 = _interopRequireDefault(utils);



	var _styledTheming2 = _interopRequireDefault(styledTheming);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sectionStyles = exports.sectionStyles = (0, _styledTheming2.default)('section', {
	  magazine: /*#__PURE__*/(0, _reactEmotion.css)('font-family:', _utils2.default.font.magazineSansBase, ';color:', _utils2.default.color.gray30, ';font-size:0.6875rem;line-height:1rem;', _utils2.default.breakpoint.small, '{font-size:0.6875rem;line-height:1.125rem;}'),
	  't-magazine': /*#__PURE__*/(0, _reactEmotion.css)('font-family:', _utils2.default.font.tmagSansBase, ';font-weight:', _utils2.default.font.weight.book, ';color:', _utils2.default.color.gray30, ';letter-spacing:0.02em;font-size:0.64rem;line-height:1.1rem;')
	});

	var Credit = /*#__PURE__*/exports.Credit = (0, _reactEmotion2.default)('span', {
	  target: 'e18m0s9i0'
	})('font-family:', _utils2.default.font.serifBase, ';color:', _utils2.default.color.gray40, ';font-size:0.64rem;line-height:1rem;display:inline-block;letter-spacing:0.01em;', sectionStyles, ';');
	});

	unwrapExports(styled$8);
	var styled_1$4 = styled$8.Credit;
	var styled_2$3 = styled$8.sectionStyles;

	var styled$a = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mediaFigureSizeStyles = exports.defaultMediaElementStyles = exports.mediaFigureVerticalSizeStyles = exports.mediaFigureSmallNoCreditStyles = exports.mediaOrientationStyles = undefined;



	var _reactEmotion2 = _interopRequireDefault(_reactEmotion);



	var _styledTheming2 = _interopRequireDefault(styledTheming);



	var _utils2 = _interopRequireDefault(utils);



	var _MediaFigureContainer2 = _interopRequireDefault(MediaFigureContainer_1);



	var _MediaFigCaption2 = _interopRequireDefault(MediaFigCaption_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// need to import from styled because index exports a wrapper

	var defaultMediaElementStyles = /*#__PURE__*/(0, _reactEmotion.css)('width:100%;vertical-align:top;');

	var _ref = 'display:block;';
	var _ref2 = '{margin-left:auto;margin-right:auto;}';
	var _ref3 = '{margin-left:auto;margin-right:auto;margin-top:10px;';
	var _ref4 = '{margin-left:-8px;}';
	var _ref5 = '{';
	var _ref6 = '{margin-left:5px;}}';
	var _ref7 = '{';
	var _ref8 = '{margin-left:5px;}}';
	var _ref9 = '{';
	var _ref10 = '{margin-left:40px;}}}';
	var mediaFigureSmallNoCreditStyles = function mediaFigureSmallNoCreditStyles(props) {
	  return (/*#__PURE__*/(0, _reactEmotion.css)(_ref, _MediaFigureContainer2.default, _ref2, _MediaFigCaption2.default, _ref3, styled$8.Credit, _ref4, props.theme.breakpointMap.small, _ref5, styled$8.Credit, _ref6, props.theme.breakpointMap.mediumLarge, _ref7, styled$8.Credit, _ref8, props.theme.breakpointMap.extraLarge, _ref9, styled$8.Credit, _ref10)
	  );
	};

	var _ref11 = '{/* TODO:if verticalVideo\n        width:';
	var _ref12 = 'px;display:flex;*/}';
	var _ref13 = '{width:';
	var _ref14 = 'px;}';
	var _ref15 = '{width:';
	var _ref16 = 'px;}';
	var _ref17 = '{width:';
	var _ref18 = 'px;/* TODO:if verticalVideo (this actually seems excessive,it should get this from above)\n        width:';
	var _ref19 = 'px;*/}';
	var _ref20 = '{';
	var _ref21 = '{/* TODO:if verticalVideo\n          width:310px;*/}}';
	var _ref22 = '{/* TODO:if verticalVideo\n        marign-left:0;margin-right:0;*/\n      ';
	var _ref23 = '{/* TODO:if verticalVideo\n          display:flex;flex-direction:column;width:255px;margin:auto 0 15px 15px;*/}';
	var _ref24 = '{/* TODO:if verticalVideo\n          width:325px;*/}}';
	var _ref25 = '{width:';
	var _ref26 = 'px;/** TODO:if verticalVideo\n        width:';
	var _ref27 = 'px;*/}';
	var _ref28 = '{width:';
	var _ref29 = 'px;/** TODO:if verticalVideo\n        width:';
	var _ref30 = 'px;*/}';
	var _ref31 = '{';
	var _ref32 = '{margin-left:0;}}';
	var mediaFigureVerticalSizeStyles = (0, _styledTheming2.default)('mediaSize', {
	  small: /*#__PURE__*/(0, _reactEmotion.css)(_MediaFigureContainer2.default, '{max-width:250px;}'),
	  medium: function medium(props) {
	    return (/*#__PURE__*/(0, _reactEmotion.css)(props.theme.breakpointMap.small, _ref11, _utils2.default.breakpoint.textBodyWidth, _ref12, props.theme.breakpointMap.medium, _ref13, _utils2.default.breakpoint.textBodyWidth, _ref14, props.theme.breakpointMap.mediumLarge, _ref15, _utils2.default.breakpoint.textBodyWidth, _ref16, props.theme.breakpointMap.extraLarge, _ref17, _utils2.default.breakpoint.textBodyWidthExtralarge, _ref18, _utils2.default.breakpoint.textBodyWidthExtralarge, _ref19, _MediaFigureContainer2.default, _ref20, props.theme.breakpointMap.small, _ref21, _MediaFigCaption2.default, _ref22, props.theme.breakpointMap.small, _ref23, props.theme.breakpointMap.extraLarge, _ref24)
	    );
	  },
	  large: function large(props) {
	    return (/*#__PURE__*/(0, _reactEmotion.css)(props.theme.breakpointMap.medium, _ref25, _utils2.default.breakpoint.textBodyWidthExtralarge, _ref26, _utils2.default.breakpoint.textBodyWidth, _ref27, props.theme.breakpointMap.extraLarge, _ref28, _utils2.default.breakpoint.mediumMediaExtralarge, _ref29, _utils2.default.breakpoint.textBodyWidthExtralarge, _ref30, _MediaFigCaption2.default, _ref31, props.theme.breakpointMap.medium, _ref32)
	    );
	  }
	});

	var _ref33 = 'width:';
	var _ref34 = ';display:flex;';
	var _ref35 = '{max-width:';
	var _ref36 = 'px;margin-left:auto;marign-right:auto;}';
	var _ref37 = '{max-width:';
	var _ref38 = 'px;width:100%;}';
	var _ref39 = '{max-width:';
	var _ref40 = 'px;}';
	var _ref41 = 'width:100%;max-width:';
	var _ref42 = 'px;';
	var _ref43 = '{width:';
	var _ref44 = ';}';
	var _ref45 = '{width:auto;max-width:';
	var _ref46 = 'px;}';
	var _ref47 = '{max-width:';
	var _ref48 = 'px;}';
	var _ref49 = 'max-width:';
	var _ref50 = 'px;margin-left:auto;margin-right:auto;';
	var _ref51 = '{width:auto;}';
	var _ref52 = '{width:945px;}';
	var _ref53 = '{width:';
	var _ref54 = 'px;}';
	var mediaFigureSizeStyles = (0, _styledTheming2.default)('mediaSize', {
	  small: function small(props) {
	    return (/*#__PURE__*/(0, _reactEmotion.css)(_ref33, _utils2.default.breakpoint.mobileFullWidth, _ref34, props.theme.breakpointMap.small, _ref35, _utils2.default.breakpoint.textBodyWidth, _ref36, props.theme.breakpointMap.mediumLarge, _ref37, _utils2.default.breakpoint.textBodyWidthExtralarge, _ref38, props.theme.breakpointMap.extraLarge, _ref39, _utils2.default.breakpoint.textBodyWidthExtralarge, _ref40)
	    );
	  },
	  medium: function medium(props) {
	    return (/*#__PURE__*/(0, _reactEmotion.css)(_ref41, _utils2.default.breakpoint.textBodyWidth, _ref42, props.theme.breakpointMap.small, _ref43, _utils2.default.breakpoint.mobileFullWidth, _ref44, props.theme.breakpointMap.medium, _ref45, _utils2.default.breakpoint.textBodyWidthExtralarge, _ref46, props.theme.breakpointMap.extraLarge, _ref47, _utils2.default.breakpoint.mediumMediaExtralarge, _ref48)
	    );
	  },
	  large: function large(props) {
	    return (/*#__PURE__*/(0, _reactEmotion.css)(_ref49, _utils2.default.breakpoint.mediaMaxWidth, _ref50, props.theme.breakpointMap.small, _ref51, props.theme.breakpointMap.mediumLarge, _ref52, props.theme.breakpointMap.extraLarge, _ref53, _utils2.default.breakpoint.mediaMaxWidth, _ref54)
	    );
	  }
	});

	var mediaOrientationStyles = exports.mediaOrientationStyles = (0, _styledTheming2.default)('mediaOrientation', {
	  vertical: mediaFigureVerticalSizeStyles
	});

	var MediaFigure = /*#__PURE__*/(0, _reactEmotion2.default)('figure', {
	  target: 'e1a8i6eb0'
	})(mediaFigureSizeStyles, ';', mediaOrientationStyles, ';');

	exports.default = MediaFigure;
	exports.mediaFigureSmallNoCreditStyles = mediaFigureSmallNoCreditStyles;
	exports.mediaFigureVerticalSizeStyles = mediaFigureVerticalSizeStyles;
	exports.defaultMediaElementStyles = defaultMediaElementStyles;
	exports.mediaFigureSizeStyles = mediaFigureSizeStyles;
	});

	unwrapExports(styled$a);
	var styled_1$5 = styled$a.mediaFigureSizeStyles;
	var styled_2$4 = styled$a.defaultMediaElementStyles;
	var styled_3$1 = styled$a.mediaFigureVerticalSizeStyles;
	var styled_4 = styled$a.mediaFigureSmallNoCreditStyles;
	var styled_5 = styled$a.mediaOrientationStyles;

	var AccessabilityLabel = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = /*#__PURE__*/(0, _reactEmotion2.default)('span', {
	  target: 'e1afaoz0'
	})('position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;clip:rect(0 0 0 0);overflow:hidden;');
	});

	unwrapExports(AccessabilityLabel);

	var MediaFigure_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MediaFigureContainer = exports.MediaFigCaption = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



	var _react2 = _interopRequireDefault(_react__default);



	var _propTypes2 = _interopRequireDefault(propTypes);







	var _NYTThemeProvider2 = _interopRequireDefault(NYTThemeProvider_1);



	var _styled2 = _interopRequireDefault(styled$a);



	var _MediaFigureContainer2 = _interopRequireDefault(MediaFigureContainer_1);



	var _MediaFigCaption2 = _interopRequireDefault(MediaFigCaption_1);



	var _AccessabilityLabel2 = _interopRequireDefault(AccessabilityLabel);



	var _Caption2 = _interopRequireDefault(Caption);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MediaFigCaption = function MediaFigCaption(props) {
	  return _react2.default.createElement(_MediaFigCaption2.default, _extends({ itemProp: 'caption description' }, props));
	};

	var MediaFigure = (0, index_esm$1.withTheme)(function (props) {
	  var size = props.size,
	      media = props.media,
	      mediaTypeLabel = props.mediaTypeLabel,
	      orientation = props.orientation,
	      itemID = props.itemID,
	      className = props.className,
	      children = props.children;

	  var smallNoCaption = size === 'small' && !_react2.default.Children.toArray(children).find(function (c) {
	    return c.type === _Caption2.default;
	  });
	  return _react2.default.createElement(
	    _NYTThemeProvider2.default,
	    {
	      theme: {
	        mediaSize: size,
	        mediaOrientation: orientation
	      }
	    },
	    _react2.default.createElement(
	      _styled2.default,
	      {
	        className: (0, _reactEmotion.cx)(smallNoCaption && (0, styled$a.mediaFigureSmallNoCreditStyles)(props), className),
	        'aria-label': 'media',
	        role: 'group',
	        itemProp: 'associatedMedia',
	        itemScope: true,
	        itemID: itemID,
	        itemType: 'http://schema.org/ImageObject'
	      },
	      _react2.default.createElement(
	        _MediaFigureContainer2.default,
	        null,
	        _react2.default.createElement(
	          _AccessabilityLabel2.default,
	          null,
	          mediaTypeLabel
	        ),
	        _react2.default.cloneElement(_react2.default.Children.only(media), {
	          className: (0, _reactEmotion.cx)(styled$a.defaultMediaElementStyles, media.props.className)
	        })
	      ),
	      _react2.default.createElement(
	        MediaFigCaption,
	        null,
	        children
	      )
	    )
	  );
	});

	MediaFigure.defaultProps = {
	  className: null,
	  itemID: '',
	  media: null,
	  mediaTypeLabel: '',
	  children: null,
	  size: null,
	  orientation: 'horizontal'
	};

	exports.default = MediaFigure;
	exports.MediaFigCaption = MediaFigCaption;
	exports.MediaFigureContainer = _MediaFigureContainer2.default;
	});

	unwrapExports(MediaFigure_1);
	var MediaFigure_2 = MediaFigure_1.MediaFigureContainer;
	var MediaFigure_3 = MediaFigure_1.MediaFigCaption;

	var Credit_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



	var _react2 = _interopRequireDefault(_react__default);



	var _propTypes2 = _interopRequireDefault(propTypes);





	var _AccessabilityLabel2 = _interopRequireDefault(AccessabilityLabel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var Credit = function Credit(props) {
	  var dangerouslySetInnerHTML = props.dangerouslySetInnerHTML,
	      children = props.children;

	  var rootProps = Object.keys(props).reduce(function (o, k) {
	    // these get passed on to inner span, so leave them off
	    if (k === 'children' || k === 'dangerouslySetInnerHTML') {
	      return o;
	    }
	    return Object.assign({}, o, _defineProperty({}, k, props[k]));
	  }, {});

	  return _react2.default.createElement(
	    styled$8.Credit,
	    _extends({ itemProp: 'copyrightHolder' }, rootProps),
	    _react2.default.createElement(
	      _AccessabilityLabel2.default,
	      null,
	      'Credit'
	    ),
	    dangerouslySetInnerHTML ? _react2.default.createElement('span', { dangerouslySetInnerHTML: dangerouslySetInnerHTML }) : _react2.default.createElement(
	      'span',
	      null,
	      children
	    )
	  );
	};

	Credit.defaultProps = {
	  dangerouslySetInnerHTML: null,
	  children: null
	};

	exports.default = Credit;
	});

	unwrapExports(Credit_1);

	var Image_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _react2 = _interopRequireDefault(_react__default);



	var _propTypes2 = _interopRequireDefault(propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getSrc = function getSrc(crops, rendition) {
	  if (!crops) return null;
	  if (crops[0] && crops[0].renditions) {
	    return (crops[0].renditions.find(function (c) {
	      return c.name === rendition;
	    }) || {}).url;
	  }
	  return (crops[rendition] || {}).url;
	};

	var Image = function Image(props) {
	  var crops = props.crops,
	      rendition = props.rendition;

	  var srcImage = getSrc(crops, rendition);
	  if (!srcImage) return null;
	  return _react2.default.createElement('img', { alt: '', src: srcImage });
	};

	Image.defaultProps = {
	  crops: undefined
	};

	exports.default = Image;
	});

	unwrapExports(Image_1);

	var PhotoQuote_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



	var _react2 = _interopRequireDefault(_react__default);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _reactEmotion2 = _interopRequireDefault(_reactEmotion);





	var _utils2 = _interopRequireDefault(utils);



	var _MediaFigure2 = _interopRequireDefault(MediaFigure_1);



	var _Credit2 = _interopRequireDefault(Credit_1);



	var _Caption2 = _interopRequireDefault(Caption);



	var _Image2 = _interopRequireDefault(Image_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var colorer = function colorer(_ref) {
	  var backgroundColor = _ref.backgroundColor;

	  if (backgroundColor === 'dark') {
	    return _utils2.default.color.gray80;
	  }
	  return _utils2.default.color.black;
	};

	var _ref3 = 'top:10%;left:10%;';
	var _ref4 = 'top:10%;right:10%;';
	var _ref5 = 'bottom:10%;left:10%;';
	var _ref6 = 'bottom:10%;right:10%;';
	var _ref7 = 'top:40%;left:40%;text-align:center;';
	var _ref8 = 'top:40%;left:40%;text-align:center;';
	var positioner = function positioner(_ref2) {
	  var position = _ref2.position;

	  switch (position) {
	    case 'top-left':
	      return (/*#__PURE__*/(0, _emotion.css)(_ref3)
	      );
	    case 'top-right':
	      return (/*#__PURE__*/(0, _emotion.css)(_ref4)
	      );
	    case 'bottom-left':
	      return (/*#__PURE__*/(0, _emotion.css)(_ref5)
	      );
	    case 'bottom-right':
	      return (/*#__PURE__*/(0, _emotion.css)(_ref6)
	      );
	    case 'center':
	      return (/*#__PURE__*/(0, _emotion.css)(_ref7)
	      );
	    default:
	      return (/*#__PURE__*/(0, _emotion.css)(_ref8)
	      );
	  }
	};

	var Container = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
	  target: 'e1ejmpka0'
	})('position:relative;.overText{position:absolute;', positioner, ';color:', colorer, ';}');

	var PhotoQuote = function PhotoQuote(props) {
	  var _props$overText = props.overText,
	      overText = _props$overText === undefined ? '' : _props$overText,
	      leadPhoto = props.leadPhoto,
	      position = props.position,
	      backgroundColor = props.backgroundColor,
	      _props$rendition = props.rendition,
	      rendition = _props$rendition === undefined ? 'articleLarge' : _props$rendition;

	  if (!leadPhoto) return null;
	  return _react2.default.createElement(
	    Container,
	    { position: position, backgroundColor: backgroundColor },
	    _react2.default.createElement(_MediaFigure2.default, {
	      size: 'medium',
	      media: _react2.default.createElement(
	        _react__default.Fragment,
	        null,
	        _react2.default.createElement(_Image2.default, _extends({}, leadPhoto, { rendition: rendition })),
	        _react2.default.createElement(
	          'p',
	          { className: 'overText' },
	          overText
	        )
	      )
	    }),
	    _react2.default.createElement(
	      _Caption2.default,
	      null,
	      leadPhoto.caption
	    ),
	    _react2.default.createElement(
	      _Credit2.default,
	      null,
	      leadPhoto.credit
	    )
	  );
	};

	PhotoQuote.defaultProps = {
	  leadPhoto: undefined,
	  rendition: 'articleLarge'
	};

	exports.default = PhotoQuote;
	});

	unwrapExports(PhotoQuote_1);

	var lib = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _Reveal2 = _interopRequireDefault(Reveal_1);



	var _PhotoQuote2 = _interopRequireDefault(PhotoQuote_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  Reveal: _Reveal2.default,
	  PhotoQuote: _PhotoQuote2.default
	};
	});

	var index$a = unwrapExports(lib);

	return index$a;

})));
