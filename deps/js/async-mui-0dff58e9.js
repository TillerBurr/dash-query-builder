'use strict';
(self.webpackChunkdash_query_builder =
    self.webpackChunkdash_query_builder || []).push([
    [652],
    {
        97809: (e, t, n) => {
            n.d(t, {i: () => c});
            var r = n(65812),
                o = n(73914),
                l = n(6531),
                i = n(11527);
            const a = [
                'input',
                'select',
                'textarea',
                'a[href]',
                'button',
                '[tabindex]',
                'audio[controls]',
                'video[controls]',
                '[contenteditable]:not([contenteditable="false"])',
            ].join(',');
            function s(e) {
                const t = [],
                    n = [];
                return (
                    Array.from(e.querySelectorAll(a)).forEach((e, r) => {
                        const o = (function (e) {
                            const t = parseInt(
                                e.getAttribute('tabindex') || '',
                                10
                            );
                            return Number.isNaN(t)
                                ? 'true' === e.contentEditable ||
                                  (('AUDIO' === e.nodeName ||
                                      'VIDEO' === e.nodeName ||
                                      'DETAILS' === e.nodeName) &&
                                      null === e.getAttribute('tabindex'))
                                    ? 0
                                    : e.tabIndex
                                : t;
                        })(e);
                        -1 !== o &&
                            (function (e) {
                                return !(
                                    e.disabled ||
                                    ('INPUT' === e.tagName &&
                                        'hidden' === e.type) ||
                                    (function (e) {
                                        if (
                                            'INPUT' !== e.tagName ||
                                            'radio' !== e.type
                                        )
                                            return !1;
                                        if (!e.name) return !1;
                                        const t = (t) =>
                                            e.ownerDocument.querySelector(
                                                `input[type="radio"]${t}`
                                            );
                                        let n = t(`[name="${e.name}"]:checked`);
                                        return (
                                            n || (n = t(`[name="${e.name}"]`)),
                                            n !== e
                                        );
                                    })(e)
                                );
                            })(e) &&
                            (0 === o
                                ? t.push(e)
                                : n.push({
                                      documentOrder: r,
                                      tabIndex: o,
                                      node: e,
                                  }));
                    }),
                    n
                        .sort((e, t) =>
                            e.tabIndex === t.tabIndex
                                ? e.documentOrder - t.documentOrder
                                : e.tabIndex - t.tabIndex
                        )
                        .map((e) => e.node)
                        .concat(t)
                );
            }
            function u() {
                return !0;
            }
            function c(e) {
                const {
                        children: t,
                        disableAutoFocus: n = !1,
                        disableEnforceFocus: a = !1,
                        disableRestoreFocus: c = !1,
                        getTabbable: d = s,
                        isEnabled: f = u,
                        open: p,
                    } = e,
                    v = r.useRef(!1),
                    m = r.useRef(null),
                    h = r.useRef(null),
                    g = r.useRef(null),
                    b = r.useRef(null),
                    y = r.useRef(!1),
                    x = r.useRef(null),
                    P = (0, o.Z)(t.ref, x),
                    w = r.useRef(null);
                r.useEffect(() => {
                    p && x.current && (y.current = !n);
                }, [n, p]),
                    r.useEffect(() => {
                        if (!p || !x.current) return;
                        const e = (0, l.Z)(x.current);
                        return (
                            x.current.contains(e.activeElement) ||
                                (x.current.hasAttribute('tabIndex') ||
                                    x.current.setAttribute('tabIndex', '-1'),
                                y.current && x.current.focus()),
                            () => {
                                c ||
                                    (g.current &&
                                        g.current.focus &&
                                        ((v.current = !0), g.current.focus()),
                                    (g.current = null));
                            }
                        );
                    }, [p]),
                    r.useEffect(() => {
                        if (!p || !x.current) return;
                        const e = (0, l.Z)(x.current),
                            t = (t) => {
                                (w.current = t),
                                    !a &&
                                        f() &&
                                        'Tab' === t.key &&
                                        e.activeElement === x.current &&
                                        t.shiftKey &&
                                        ((v.current = !0),
                                        h.current && h.current.focus());
                            },
                            n = () => {
                                const t = x.current;
                                if (null === t) return;
                                if (!e.hasFocus() || !f() || v.current)
                                    return void (v.current = !1);
                                if (t.contains(e.activeElement)) return;
                                if (
                                    a &&
                                    e.activeElement !== m.current &&
                                    e.activeElement !== h.current
                                )
                                    return;
                                if (e.activeElement !== b.current)
                                    b.current = null;
                                else if (null !== b.current) return;
                                if (!y.current) return;
                                let n = [];
                                if (
                                    ((e.activeElement !== m.current &&
                                        e.activeElement !== h.current) ||
                                        (n = d(x.current)),
                                    n.length > 0)
                                ) {
                                    var r, o;
                                    const e = Boolean(
                                            (null == (r = w.current)
                                                ? void 0
                                                : r.shiftKey) &&
                                                'Tab' ===
                                                    (null == (o = w.current)
                                                        ? void 0
                                                        : o.key)
                                        ),
                                        t = n[0],
                                        l = n[n.length - 1];
                                    'string' != typeof t &&
                                        'string' != typeof l &&
                                        (e ? l.focus() : t.focus());
                                } else t.focus();
                            };
                        e.addEventListener('focusin', n),
                            e.addEventListener('keydown', t, !0);
                        const r = setInterval(() => {
                            e.activeElement &&
                                'BODY' === e.activeElement.tagName &&
                                n();
                        }, 50);
                        return () => {
                            clearInterval(r),
                                e.removeEventListener('focusin', n),
                                e.removeEventListener('keydown', t, !0);
                        };
                    }, [n, a, c, f, p, d]);
                const E = (e) => {
                    null === g.current && (g.current = e.relatedTarget),
                        (y.current = !0);
                };
                return (0, i.jsxs)(r.Fragment, {
                    children: [
                        (0, i.jsx)('div', {
                            tabIndex: p ? 0 : -1,
                            onFocus: E,
                            ref: m,
                            'data-testid': 'sentinelStart',
                        }),
                        r.cloneElement(t, {
                            ref: P,
                            onFocus: (e) => {
                                null === g.current &&
                                    (g.current = e.relatedTarget),
                                    (y.current = !0),
                                    (b.current = e.target);
                                const n = t.props.onFocus;
                                n && n(e);
                            },
                        }),
                        (0, i.jsx)('div', {
                            tabIndex: p ? 0 : -1,
                            onFocus: E,
                            ref: h,
                            'data-testid': 'sentinelEnd',
                        }),
                    ],
                });
            }
        },
        42546: (e, t, n) => {
            n.d(t, {r: () => S});
            var r = n(57260),
                o = n(63051),
                l = n(65812),
                i = n(73914),
                a = n(36454),
                s = n(6531),
                u = n(60510),
                c = n(48892),
                d = n(77219),
                f = n(65034);
            const p = 'base';
            function v(e, t) {
                const n = f._v[t];
                return n
                    ? `${p}--${n}`
                    : (function (e, t) {
                          return `${p}-${e}-${t}`;
                      })(e, t);
            }
            const m = 'Popper';
            function h(e) {
                return v(m, e);
            }
            !(function (e, t) {
                const n = {};
                ['root'].forEach((t) => {
                    n[t] = v(e, t);
                });
            })(m);
            var g = n(33805),
                b = n(11527);
            const y = {disableDefaultClasses: !1},
                x = l.createContext(y),
                P = [
                    'anchorEl',
                    'children',
                    'direction',
                    'disablePortal',
                    'modifiers',
                    'open',
                    'placement',
                    'popperOptions',
                    'popperRef',
                    'slotProps',
                    'slots',
                    'TransitionProps',
                    'ownerState',
                ],
                w = [
                    'anchorEl',
                    'children',
                    'container',
                    'direction',
                    'disablePortal',
                    'keepMounted',
                    'modifiers',
                    'open',
                    'placement',
                    'popperOptions',
                    'popperRef',
                    'style',
                    'transition',
                    'slotProps',
                    'slots',
                ];
            function E(e) {
                return 'function' == typeof e ? e() : e;
            }
            const Z = {},
                O = l.forwardRef(function (e, t) {
                    var n;
                    const {
                            anchorEl: s,
                            children: d,
                            direction: f,
                            disablePortal: p,
                            modifiers: v,
                            open: m,
                            placement: y,
                            popperOptions: w,
                            popperRef: Z,
                            slotProps: O = {},
                            slots: S = {},
                            TransitionProps: R,
                        } = e,
                        k = (0, o.Z)(e, P),
                        C = l.useRef(null),
                        T = (0, i.Z)(C, t),
                        A = l.useRef(null),
                        I = (0, i.Z)(A, Z),
                        D = l.useRef(I);
                    (0, a.Z)(() => {
                        D.current = I;
                    }, [I]),
                        l.useImperativeHandle(Z, () => A.current, []);
                    const L = (function (e, t) {
                            if ('ltr' === t) return e;
                            switch (e) {
                                case 'bottom-end':
                                    return 'bottom-start';
                                case 'bottom-start':
                                    return 'bottom-end';
                                case 'top-end':
                                    return 'top-start';
                                case 'top-start':
                                    return 'top-end';
                                default:
                                    return e;
                            }
                        })(y, f),
                        [N, $] = l.useState(L),
                        [j, M] = l.useState(E(s));
                    l.useEffect(() => {
                        A.current && A.current.forceUpdate();
                    }),
                        l.useEffect(() => {
                            s && M(E(s));
                        }, [s]),
                        (0, a.Z)(() => {
                            if (!j || !m) return;
                            let e = [
                                {
                                    name: 'preventOverflow',
                                    options: {altBoundary: p},
                                },
                                {name: 'flip', options: {altBoundary: p}},
                                {
                                    name: 'onUpdate',
                                    enabled: !0,
                                    phase: 'afterWrite',
                                    fn: ({state: e}) => {
                                        $(e.placement);
                                    },
                                },
                            ];
                            null != v && (e = e.concat(v)),
                                w &&
                                    null != w.modifiers &&
                                    (e = e.concat(w.modifiers));
                            const t = (0, u.fi)(
                                j,
                                C.current,
                                (0, r.Z)({placement: L}, w, {modifiers: e})
                            );
                            return (
                                D.current(t),
                                () => {
                                    t.destroy(), D.current(null);
                                }
                            );
                        }, [j, p, v, m, w, L]);
                    const F = {placement: N};
                    null !== R && (F.TransitionProps = R);
                    const B = (0, c.Z)(
                            {root: ['root']},
                            (function (e) {
                                const {disableDefaultClasses: t} =
                                    l.useContext(x);
                                return (n) => (t ? '' : e(n));
                            })(h)
                        ),
                        K = null != (n = S.root) ? n : 'div',
                        V = (0, g.y)({
                            elementType: K,
                            externalSlotProps: O.root,
                            externalForwardedProps: k,
                            additionalProps: {role: 'tooltip', ref: T},
                            ownerState: e,
                            className: B.root,
                        });
                    return (0, b.jsx)(
                        K,
                        (0, r.Z)({}, V, {
                            children: 'function' == typeof d ? d(F) : d,
                        })
                    );
                }),
                S = l.forwardRef(function (e, t) {
                    const {
                            anchorEl: n,
                            children: i,
                            container: a,
                            direction: u = 'ltr',
                            disablePortal: c = !1,
                            keepMounted: f = !1,
                            modifiers: p,
                            open: v,
                            placement: m = 'bottom',
                            popperOptions: h = Z,
                            popperRef: g,
                            style: y,
                            transition: x = !1,
                            slotProps: P = {},
                            slots: S = {},
                        } = e,
                        R = (0, o.Z)(e, w),
                        [k, C] = l.useState(!0);
                    if (!f && !v && (!x || k)) return null;
                    let T;
                    if (a) T = a;
                    else if (n) {
                        const e = E(n);
                        T =
                            e && void 0 !== e.nodeType
                                ? (0, s.Z)(e).body
                                : (0, s.Z)(null).body;
                    }
                    const A = v || !f || (x && !k) ? void 0 : 'none',
                        I = x
                            ? {
                                  in: v,
                                  onEnter: () => {
                                      C(!1);
                                  },
                                  onExited: () => {
                                      C(!0);
                                  },
                              }
                            : void 0;
                    return (0, b.jsx)(d.h, {
                        disablePortal: c,
                        container: T,
                        children: (0, b.jsx)(
                            O,
                            (0, r.Z)(
                                {
                                    anchorEl: n,
                                    direction: u,
                                    disablePortal: c,
                                    modifiers: p,
                                    ref: t,
                                    open: x ? !k : v,
                                    placement: m,
                                    popperOptions: h,
                                    popperRef: g,
                                    slotProps: P,
                                    slots: S,
                                },
                                R,
                                {
                                    style: (0, r.Z)(
                                        {
                                            position: 'fixed',
                                            top: 0,
                                            left: 0,
                                            display: A,
                                        },
                                        y
                                    ),
                                    TransitionProps: I,
                                    children: i,
                                }
                            )
                        ),
                    });
                });
        },
        77219: (e, t, n) => {
            n.d(t, {h: () => u});
            var r = n(65812),
                o = n(54587),
                l = n(73914),
                i = n(36454),
                a = n(15123),
                s = n(11527);
            const u = r.forwardRef(function (e, t) {
                const {children: n, container: u, disablePortal: c = !1} = e,
                    [d, f] = r.useState(null),
                    p = (0, l.Z)(r.isValidElement(n) ? n.ref : null, t);
                if (
                    ((0, i.Z)(() => {
                        c ||
                            f(
                                (function (e) {
                                    return 'function' == typeof e ? e() : e;
                                })(u) || document.body
                            );
                    }, [u, c]),
                    (0, i.Z)(() => {
                        if (d && !c)
                            return (
                                (0, a.Z)(t, d),
                                () => {
                                    (0, a.Z)(t, null);
                                }
                            );
                    }, [t, d, c]),
                    c)
                ) {
                    if (r.isValidElement(n)) {
                        const e = {ref: p};
                        return r.cloneElement(n, e);
                    }
                    return (0, s.jsx)(r.Fragment, {children: n});
                }
                return (0, s.jsx)(r.Fragment, {
                    children: d ? o.createPortal(n, d) : d,
                });
            });
        },
        1987: (e, t, n) => {
            n.d(t, {u: () => v});
            var r = n(57260),
                o = n(63051),
                l = n(65812),
                i = n(73914),
                a = n(69087),
                s = n(36454),
                u = n(66698),
                c = n(11527);
            const d = ['onChange', 'maxRows', 'minRows', 'style', 'value'];
            function f(e) {
                return parseInt(e, 10) || 0;
            }
            const p = {
                    visibility: 'hidden',
                    position: 'absolute',
                    overflow: 'hidden',
                    height: 0,
                    top: 0,
                    left: 0,
                    transform: 'translateZ(0)',
                },
                v = l.forwardRef(function (e, t) {
                    const {
                            onChange: n,
                            maxRows: v,
                            minRows: m = 1,
                            style: h,
                            value: g,
                        } = e,
                        b = (0, o.Z)(e, d),
                        {current: y} = l.useRef(null != g),
                        x = l.useRef(null),
                        P = (0, i.Z)(t, x),
                        w = l.useRef(null),
                        E = l.useCallback(() => {
                            const t = x.current,
                                n = (0, a.Z)(t).getComputedStyle(t);
                            if ('0px' === n.width)
                                return {outerHeightStyle: 0, overflowing: !1};
                            const r = w.current;
                            (r.style.width = n.width),
                                (r.value = t.value || e.placeholder || 'x'),
                                '\n' === r.value.slice(-1) && (r.value += ' ');
                            const o = n.boxSizing,
                                l = f(n.paddingBottom) + f(n.paddingTop),
                                i =
                                    f(n.borderBottomWidth) +
                                    f(n.borderTopWidth),
                                s = r.scrollHeight;
                            r.value = 'x';
                            const u = r.scrollHeight;
                            let c = s;
                            return (
                                m && (c = Math.max(Number(m) * u, c)),
                                v && (c = Math.min(Number(v) * u, c)),
                                (c = Math.max(c, u)),
                                {
                                    outerHeightStyle:
                                        c + ('border-box' === o ? l + i : 0),
                                    overflowing: Math.abs(c - s) <= 1,
                                }
                            );
                        }, [v, m, e.placeholder]),
                        Z = l.useCallback(() => {
                            const e = E();
                            if (
                                null == (t = e) ||
                                0 === Object.keys(t).length ||
                                (0 === t.outerHeightStyle && !t.overflowing)
                            )
                                return;
                            var t;
                            const n = x.current;
                            (n.style.height = `${e.outerHeightStyle}px`),
                                (n.style.overflow = e.overflowing
                                    ? 'hidden'
                                    : '');
                        }, [E]);
                    return (
                        (0, s.Z)(() => {
                            const e = () => {
                                Z();
                            };
                            const t = (0, u.Z)(e),
                                n = x.current,
                                r = (0, a.Z)(n);
                            let o;
                            return (
                                r.addEventListener('resize', t),
                                'undefined' != typeof ResizeObserver &&
                                    ((o = new ResizeObserver(e)), o.observe(n)),
                                () => {
                                    t.clear(),
                                        cancelAnimationFrame(undefined),
                                        r.removeEventListener('resize', t),
                                        o && o.disconnect();
                                }
                            );
                        }, [E, Z]),
                        (0, s.Z)(() => {
                            Z();
                        }),
                        (0, c.jsxs)(l.Fragment, {
                            children: [
                                (0, c.jsx)(
                                    'textarea',
                                    (0, r.Z)(
                                        {
                                            value: g,
                                            onChange: (e) => {
                                                y || Z(), n && n(e);
                                            },
                                            ref: P,
                                            rows: m,
                                            style: h,
                                        },
                                        b
                                    )
                                ),
                                (0, c.jsx)('textarea', {
                                    'aria-hidden': !0,
                                    className: e.className,
                                    readOnly: !0,
                                    ref: w,
                                    tabIndex: -1,
                                    style: (0, r.Z)({}, p, h, {
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                    }),
                                }),
                            ],
                        })
                    );
                });
        },
        56168: (e, t, n) => {
            n.d(t, {d: () => g});
            var r = n(57260),
                o = n(65812),
                l = n(73914),
                i = n(6531),
                a = n(22757),
                s = n(10558),
                u = n(14573),
                c = n(69087),
                d = n(8357);
            function f(e, t) {
                t
                    ? e.setAttribute('aria-hidden', 'true')
                    : e.removeAttribute('aria-hidden');
            }
            function p(e) {
                return (
                    parseInt(
                        (0, c.Z)(e).getComputedStyle(e).paddingRight,
                        10
                    ) || 0
                );
            }
            function v(e, t, n, r, o) {
                const l = [t, n, ...r];
                [].forEach.call(e.children, (e) => {
                    const t = -1 === l.indexOf(e),
                        n = !(function (e) {
                            const t =
                                    -1 !==
                                    [
                                        'TEMPLATE',
                                        'SCRIPT',
                                        'STYLE',
                                        'LINK',
                                        'MAP',
                                        'META',
                                        'NOSCRIPT',
                                        'PICTURE',
                                        'COL',
                                        'COLGROUP',
                                        'PARAM',
                                        'SLOT',
                                        'SOURCE',
                                        'TRACK',
                                    ].indexOf(e.tagName),
                                n =
                                    'INPUT' === e.tagName &&
                                    'hidden' === e.getAttribute('type');
                            return t || n;
                        })(e);
                    t && n && f(e, o);
                });
            }
            function m(e, t) {
                let n = -1;
                return e.some((e, r) => !!t(e) && ((n = r), !0)), n;
            }
            const h = new (class {
                constructor() {
                    (this.containers = void 0),
                        (this.modals = void 0),
                        (this.modals = []),
                        (this.containers = []);
                }
                add(e, t) {
                    let n = this.modals.indexOf(e);
                    if (-1 !== n) return n;
                    (n = this.modals.length),
                        this.modals.push(e),
                        e.modalRef && f(e.modalRef, !1);
                    const r = (function (e) {
                        const t = [];
                        return (
                            [].forEach.call(e.children, (e) => {
                                'true' === e.getAttribute('aria-hidden') &&
                                    t.push(e);
                            }),
                            t
                        );
                    })(t);
                    v(t, e.mount, e.modalRef, r, !0);
                    const o = m(this.containers, (e) => e.container === t);
                    return -1 !== o
                        ? (this.containers[o].modals.push(e), n)
                        : (this.containers.push({
                              modals: [e],
                              container: t,
                              restore: null,
                              hiddenSiblings: r,
                          }),
                          n);
                }
                mount(e, t) {
                    const n = m(
                            this.containers,
                            (t) => -1 !== t.modals.indexOf(e)
                        ),
                        r = this.containers[n];
                    r.restore ||
                        (r.restore = (function (e, t) {
                            const n = [],
                                r = e.container;
                            if (!t.disableScrollLock) {
                                if (
                                    (function (e) {
                                        const t = (0, i.Z)(e);
                                        return t.body === e
                                            ? (0, c.Z)(e).innerWidth >
                                                  t.documentElement.clientWidth
                                            : e.scrollHeight > e.clientHeight;
                                    })(r)
                                ) {
                                    const e = (0, d.Z)((0, i.Z)(r));
                                    n.push({
                                        value: r.style.paddingRight,
                                        property: 'padding-right',
                                        el: r,
                                    }),
                                        (r.style.paddingRight = `${
                                            p(r) + e
                                        }px`);
                                    const t = (0, i.Z)(r).querySelectorAll(
                                        '.mui-fixed'
                                    );
                                    [].forEach.call(t, (t) => {
                                        n.push({
                                            value: t.style.paddingRight,
                                            property: 'padding-right',
                                            el: t,
                                        }),
                                            (t.style.paddingRight = `${
                                                p(t) + e
                                            }px`);
                                    });
                                }
                                let e;
                                if (r.parentNode instanceof DocumentFragment)
                                    e = (0, i.Z)(r).body;
                                else {
                                    const t = r.parentElement,
                                        n = (0, c.Z)(r);
                                    e =
                                        'HTML' ===
                                            (null == t ? void 0 : t.nodeName) &&
                                        'scroll' ===
                                            n.getComputedStyle(t).overflowY
                                            ? t
                                            : r;
                                }
                                n.push(
                                    {
                                        value: e.style.overflow,
                                        property: 'overflow',
                                        el: e,
                                    },
                                    {
                                        value: e.style.overflowX,
                                        property: 'overflow-x',
                                        el: e,
                                    },
                                    {
                                        value: e.style.overflowY,
                                        property: 'overflow-y',
                                        el: e,
                                    }
                                ),
                                    (e.style.overflow = 'hidden');
                            }
                            return () => {
                                n.forEach(({value: e, el: t, property: n}) => {
                                    e
                                        ? t.style.setProperty(n, e)
                                        : t.style.removeProperty(n);
                                });
                            };
                        })(r, t));
                }
                remove(e, t = !0) {
                    const n = this.modals.indexOf(e);
                    if (-1 === n) return n;
                    const r = m(
                            this.containers,
                            (t) => -1 !== t.modals.indexOf(e)
                        ),
                        o = this.containers[r];
                    if (
                        (o.modals.splice(o.modals.indexOf(e), 1),
                        this.modals.splice(n, 1),
                        0 === o.modals.length)
                    )
                        o.restore && o.restore(),
                            e.modalRef && f(e.modalRef, t),
                            v(
                                o.container,
                                e.mount,
                                e.modalRef,
                                o.hiddenSiblings,
                                !1
                            ),
                            this.containers.splice(r, 1);
                    else {
                        const e = o.modals[o.modals.length - 1];
                        e.modalRef && f(e.modalRef, !1);
                    }
                    return n;
                }
                isTopModal(e) {
                    return (
                        this.modals.length > 0 &&
                        this.modals[this.modals.length - 1] === e
                    );
                }
            })();
            function g(e) {
                const {
                        container: t,
                        disableEscapeKeyDown: n = !1,
                        disableScrollLock: c = !1,
                        manager: d = h,
                        closeAfterTransition: p = !1,
                        onTransitionEnter: v,
                        onTransitionExited: m,
                        children: g,
                        onClose: b,
                        open: y,
                        rootRef: x,
                    } = e,
                    P = o.useRef({}),
                    w = o.useRef(null),
                    E = o.useRef(null),
                    Z = (0, l.Z)(E, x),
                    [O, S] = o.useState(!y),
                    R = (function (e) {
                        return !!e && e.props.hasOwnProperty('in');
                    })(g);
                let k = !0;
                ('false' !== e['aria-hidden'] && !1 !== e['aria-hidden']) ||
                    (k = !1);
                const C = () => (
                        (P.current.modalRef = E.current),
                        (P.current.mount = w.current),
                        P.current
                    ),
                    T = () => {
                        d.mount(C(), {disableScrollLock: c}),
                            E.current && (E.current.scrollTop = 0);
                    },
                    A = (0, a.Z)(() => {
                        const e =
                            (function (e) {
                                return 'function' == typeof e ? e() : e;
                            })(t) || (0, i.Z)(w.current).body;
                        d.add(C(), e), E.current && T();
                    }),
                    I = o.useCallback(() => d.isTopModal(C()), [d]),
                    D = (0, a.Z)((e) => {
                        (w.current = e),
                            e &&
                                (y && I() ? T() : E.current && f(E.current, k));
                    }),
                    L = o.useCallback(() => {
                        d.remove(C(), k);
                    }, [k, d]);
                o.useEffect(
                    () => () => {
                        L();
                    },
                    [L]
                ),
                    o.useEffect(() => {
                        y ? A() : (R && p) || L();
                    }, [y, L, R, p, A]);
                const N = (e) => (t) => {
                        var r;
                        null == (r = e.onKeyDown) || r.call(e, t),
                            'Escape' === t.key &&
                                229 !== t.which &&
                                I() &&
                                (n ||
                                    (t.stopPropagation(),
                                    b && b(t, 'escapeKeyDown')));
                    },
                    $ = (e) => (t) => {
                        var n;
                        null == (n = e.onClick) || n.call(e, t),
                            t.target === t.currentTarget &&
                                b &&
                                b(t, 'backdropClick');
                    };
                return {
                    getRootProps: (t = {}) => {
                        const n = (0, u._)(e);
                        delete n.onTransitionEnter, delete n.onTransitionExited;
                        const o = (0, r.Z)({}, n, t);
                        return (0, r.Z)({role: 'presentation'}, o, {
                            onKeyDown: N(o),
                            ref: Z,
                        });
                    },
                    getBackdropProps: (e = {}) => {
                        const t = e;
                        return (0, r.Z)({'aria-hidden': !0}, t, {
                            onClick: $(t),
                            open: y,
                        });
                    },
                    getTransitionProps: () => ({
                        onEnter: (0, s.Z)(
                            () => {
                                S(!1), v && v();
                            },
                            null == g ? void 0 : g.props.onEnter
                        ),
                        onExited: (0, s.Z)(
                            () => {
                                S(!0), m && m(), p && L();
                            },
                            null == g ? void 0 : g.props.onExited
                        ),
                    }),
                    rootRef: Z,
                    portalRef: D,
                    isTopModal: I,
                    exited: O,
                    hasTransition: R,
                };
            }
        },
        39760: (e, t, n) => {
            n.d(t, {D: () => d, o: () => h});
            var r = n(57260),
                o = n(65812),
                l = n(76640),
                i = n(56672),
                a = n(11830),
                s = n(22757),
                u = n(15123);
            function c(e) {
                return void 0 !== e.normalize
                    ? e.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                    : e;
            }
            function d(e = {}) {
                const {
                    ignoreAccents: t = !0,
                    ignoreCase: n = !0,
                    limit: r,
                    matchFrom: o = 'any',
                    stringify: l,
                    trim: i = !1,
                } = e;
                return (e, {inputValue: a, getOptionLabel: s}) => {
                    let u = i ? a.trim() : a;
                    n && (u = u.toLowerCase()), t && (u = c(u));
                    const d = u
                        ? e.filter((e) => {
                              let r = (l || s)(e);
                              return (
                                  n && (r = r.toLowerCase()),
                                  t && (r = c(r)),
                                  'start' === o
                                      ? 0 === r.indexOf(u)
                                      : r.indexOf(u) > -1
                              );
                          })
                        : e;
                    return 'number' == typeof r ? d.slice(0, r) : d;
                };
            }
            function f(e, t) {
                for (let n = 0; n < e.length; n += 1) if (t(e[n])) return n;
                return -1;
            }
            const p = d(),
                v = 5,
                m = (e) => {
                    var t;
                    return (
                        null !== e.current &&
                        (null == (t = e.current.parentElement)
                            ? void 0
                            : t.contains(document.activeElement))
                    );
                };
            function h(e) {
                const {
                        unstable_isActiveElementInListbox: t = m,
                        unstable_classNamePrefix: n = 'Mui',
                        autoComplete: c = !1,
                        autoHighlight: d = !1,
                        autoSelect: h = !1,
                        blurOnSelect: g = !1,
                        clearOnBlur: b = !e.freeSolo,
                        clearOnEscape: y = !1,
                        componentName: x = 'useAutocomplete',
                        defaultValue: P = e.multiple ? [] : null,
                        disableClearable: w = !1,
                        disableCloseOnSelect: E = !1,
                        disabled: Z,
                        disabledItemsFocusable: O = !1,
                        disableListWrap: S = !1,
                        filterOptions: R = p,
                        filterSelectedOptions: k = !1,
                        freeSolo: C = !1,
                        getOptionDisabled: T,
                        getOptionKey: A,
                        getOptionLabel: I = (e) => {
                            var t;
                            return null != (t = e.label) ? t : e;
                        },
                        groupBy: D,
                        handleHomeEndKeys: L = !e.freeSolo,
                        id: N,
                        includeInputInList: $ = !1,
                        inputValue: j,
                        isOptionEqualToValue: M = (e, t) => e === t,
                        multiple: F = !1,
                        onChange: B,
                        onClose: K,
                        onHighlightChange: V,
                        onInputChange: H,
                        onOpen: U,
                        open: q,
                        openOnFocus: _ = !1,
                        options: z,
                        readOnly: W = !1,
                        selectOnFocus: Y = !e.freeSolo,
                        value: X,
                    } = e,
                    G = (0, l.Z)(N);
                let J = I;
                J = (e) => {
                    const t = I(e);
                    return 'string' != typeof t ? String(t) : t;
                };
                const Q = o.useRef(!1),
                    ee = o.useRef(!0),
                    te = o.useRef(null),
                    ne = o.useRef(null),
                    [re, oe] = o.useState(null),
                    [le, ie] = o.useState(-1),
                    ae = d ? 0 : -1,
                    se = o.useRef(ae),
                    [ue, ce] = (0, i.Z)({controlled: X, default: P, name: x}),
                    [de, fe] = (0, i.Z)({
                        controlled: j,
                        default: '',
                        name: x,
                        state: 'inputValue',
                    }),
                    [pe, ve] = o.useState(!1),
                    me = o.useCallback(
                        (e, t) => {
                            if (!(F ? ue.length < t.length : null !== t) && !b)
                                return;
                            let n;
                            if (F) n = '';
                            else if (null == t) n = '';
                            else {
                                const e = J(t);
                                n = 'string' == typeof e ? e : '';
                            }
                            de !== n && (fe(n), H && H(e, n, 'reset'));
                        },
                        [J, de, F, H, fe, b, ue]
                    ),
                    [he, ge] = (0, i.Z)({
                        controlled: q,
                        default: !1,
                        name: x,
                        state: 'open',
                    }),
                    [be, ye] = o.useState(!0),
                    xe = !F && null != ue && de === J(ue),
                    Pe = he && !W,
                    we = Pe
                        ? R(
                              z.filter(
                                  (e) =>
                                      !k ||
                                      !(F ? ue : [ue]).some(
                                          (t) => null !== t && M(e, t)
                                      )
                              ),
                              {
                                  inputValue: xe && be ? '' : de,
                                  getOptionLabel: J,
                              }
                          )
                        : [],
                    Ee = (0, a.Z)({
                        filteredOptions: we,
                        value: ue,
                        inputValue: de,
                    });
                o.useEffect(() => {
                    const e = ue !== Ee.value;
                    (pe && !e) || (C && !e) || me(null, ue);
                }, [ue, me, pe, Ee.value, C]);
                const Ze = he && we.length > 0 && !W,
                    Oe = (0, s.Z)((e) => {
                        -1 === e
                            ? te.current.focus()
                            : re
                                  .querySelector(`[data-tag-index="${e}"]`)
                                  .focus();
                    });
                o.useEffect(() => {
                    F && le > ue.length - 1 && (ie(-1), Oe(-1));
                }, [ue, F, le, Oe]);
                const Se = (0, s.Z)(
                        ({event: e, index: t, reason: r = 'auto'}) => {
                            if (
                                ((se.current = t),
                                -1 === t
                                    ? te.current.removeAttribute(
                                          'aria-activedescendant'
                                      )
                                    : te.current.setAttribute(
                                          'aria-activedescendant',
                                          `${G}-option-${t}`
                                      ),
                                V && V(e, -1 === t ? null : we[t], r),
                                !ne.current)
                            )
                                return;
                            const o = ne.current.querySelector(
                                `[role="option"].${n}-focused`
                            );
                            o &&
                                (o.classList.remove(`${n}-focused`),
                                o.classList.remove(`${n}-focusVisible`));
                            let l = ne.current;
                            if (
                                ('listbox' !==
                                    ne.current.getAttribute('role') &&
                                    (l =
                                        ne.current.parentElement.querySelector(
                                            '[role="listbox"]'
                                        )),
                                !l)
                            )
                                return;
                            if (-1 === t) return void (l.scrollTop = 0);
                            const i = ne.current.querySelector(
                                `[data-option-index="${t}"]`
                            );
                            if (
                                i &&
                                (i.classList.add(`${n}-focused`),
                                'keyboard' === r &&
                                    i.classList.add(`${n}-focusVisible`),
                                l.scrollHeight > l.clientHeight &&
                                    'mouse' !== r &&
                                    'touch' !== r)
                            ) {
                                const e = i,
                                    t = l.clientHeight + l.scrollTop,
                                    n = e.offsetTop + e.offsetHeight;
                                n > t
                                    ? (l.scrollTop = n - l.clientHeight)
                                    : e.offsetTop -
                                          e.offsetHeight * (D ? 1.3 : 0) <
                                          l.scrollTop &&
                                      (l.scrollTop =
                                          e.offsetTop -
                                          e.offsetHeight * (D ? 1.3 : 0));
                            }
                        }
                    ),
                    Re = (0, s.Z)(
                        ({
                            event: e,
                            diff: t,
                            direction: n = 'next',
                            reason: r = 'auto',
                        }) => {
                            if (!Pe) return;
                            const o = (function (e, t) {
                                if (!ne.current || e < 0 || e >= we.length)
                                    return -1;
                                let n = e;
                                for (;;) {
                                    const r = ne.current.querySelector(
                                            `[data-option-index="${n}"]`
                                        ),
                                        o =
                                            !O &&
                                            (!r ||
                                                r.disabled ||
                                                'true' ===
                                                    r.getAttribute(
                                                        'aria-disabled'
                                                    ));
                                    if (r && r.hasAttribute('tabindex') && !o)
                                        return n;
                                    if (
                                        ((n =
                                            'next' === t
                                                ? (n + 1) % we.length
                                                : (n - 1 + we.length) %
                                                  we.length),
                                        n === e)
                                    )
                                        return -1;
                                }
                            })(
                                (() => {
                                    const e = we.length - 1;
                                    if ('reset' === t) return ae;
                                    if ('start' === t) return 0;
                                    if ('end' === t) return e;
                                    const n = se.current + t;
                                    return n < 0
                                        ? -1 === n && $
                                            ? -1
                                            : (S && -1 !== se.current) ||
                                                Math.abs(t) > 1
                                              ? 0
                                              : e
                                        : n > e
                                          ? n === e + 1 && $
                                              ? -1
                                              : S || Math.abs(t) > 1
                                                ? e
                                                : 0
                                          : n;
                                })(),
                                n
                            );
                            if (
                                (Se({index: o, reason: r, event: e}),
                                c && 'reset' !== t)
                            )
                                if (-1 === o) te.current.value = de;
                                else {
                                    const e = J(we[o]);
                                    (te.current.value = e),
                                        0 ===
                                            e
                                                .toLowerCase()
                                                .indexOf(de.toLowerCase()) &&
                                            de.length > 0 &&
                                            te.current.setSelectionRange(
                                                de.length,
                                                e.length
                                            );
                                }
                        }
                    ),
                    ke = o.useCallback(() => {
                        if (!Pe) return;
                        const e = (() => {
                            if (
                                -1 !== se.current &&
                                Ee.filteredOptions &&
                                Ee.filteredOptions.length !== we.length &&
                                Ee.inputValue === de &&
                                (F
                                    ? ue.length === Ee.value.length &&
                                      Ee.value.every(
                                          (e, t) => J(ue[t]) === J(e)
                                      )
                                    : ((e = Ee.value),
                                      (t = ue),
                                      (e ? J(e) : '') === (t ? J(t) : '')))
                            ) {
                                const e = Ee.filteredOptions[se.current];
                                if (e) return f(we, (t) => J(t) === J(e));
                            }
                            var e, t;
                            return -1;
                        })();
                        if (-1 !== e) return void (se.current = e);
                        const t = F ? ue[0] : ue;
                        if (0 !== we.length && null != t) {
                            if (ne.current)
                                if (null == t)
                                    se.current >= we.length - 1
                                        ? Se({index: we.length - 1})
                                        : Se({index: se.current});
                                else {
                                    const e = we[se.current];
                                    if (F && e && -1 !== f(ue, (t) => M(e, t)))
                                        return;
                                    const n = f(we, (e) => M(e, t));
                                    -1 === n
                                        ? Re({diff: 'reset'})
                                        : Se({index: n});
                                }
                        } else Re({diff: 'reset'});
                    }, [we.length, !F && ue, k, Re, Se, Pe, de, F]),
                    Ce = (0, s.Z)((e) => {
                        (0, u.Z)(ne, e), e && ke();
                    });
                o.useEffect(() => {
                    ke();
                }, [ke]);
                const Te = (e) => {
                        he || (ge(!0), ye(!0), U && U(e));
                    },
                    Ae = (e, t) => {
                        he && (ge(!1), K && K(e, t));
                    },
                    Ie = (e, t, n, r) => {
                        if (F) {
                            if (
                                ue.length === t.length &&
                                ue.every((e, n) => e === t[n])
                            )
                                return;
                        } else if (ue === t) return;
                        B && B(e, t, n, r), ce(t);
                    },
                    De = o.useRef(!1),
                    Le = (e, t, n = 'selectOption', r = 'options') => {
                        let o = n,
                            l = t;
                        if (F) {
                            l = Array.isArray(ue) ? ue.slice() : [];
                            const e = f(l, (e) => M(t, e));
                            -1 === e
                                ? l.push(t)
                                : 'freeSolo' !== r &&
                                  (l.splice(e, 1), (o = 'removeOption'));
                        }
                        me(e, l),
                            Ie(e, l, o, {option: t}),
                            E || (e && (e.ctrlKey || e.metaKey)) || Ae(e, o),
                            (!0 === g ||
                                ('touch' === g && De.current) ||
                                ('mouse' === g && !De.current)) &&
                                te.current.blur();
                    },
                    Ne = (e, t) => {
                        if (!F) return;
                        '' === de && Ae(e, 'toggleInput');
                        let n = le;
                        -1 === le
                            ? '' === de &&
                              'previous' === t &&
                              (n = ue.length - 1)
                            : ((n += 'next' === t ? 1 : -1),
                              n < 0 && (n = 0),
                              n === ue.length && (n = -1)),
                            (n = (function (e, t) {
                                if (-1 === e) return -1;
                                let n = e;
                                for (;;) {
                                    if (
                                        ('next' === t && n === ue.length) ||
                                        ('previous' === t && -1 === n)
                                    )
                                        return -1;
                                    const e = re.querySelector(
                                        `[data-tag-index="${n}"]`
                                    );
                                    if (
                                        e &&
                                        e.hasAttribute('tabindex') &&
                                        !e.disabled &&
                                        'true' !==
                                            e.getAttribute('aria-disabled')
                                    )
                                        return n;
                                    n += 'next' === t ? 1 : -1;
                                }
                            })(n, t)),
                            ie(n),
                            Oe(n);
                    },
                    $e = (e) => {
                        (Q.current = !0),
                            fe(''),
                            H && H(e, '', 'clear'),
                            Ie(e, F ? [] : null, 'clear');
                    },
                    je = (e) => (t) => {
                        if (
                            (e.onKeyDown && e.onKeyDown(t),
                            !t.defaultMuiPrevented &&
                                (-1 !== le &&
                                    -1 ===
                                        ['ArrowLeft', 'ArrowRight'].indexOf(
                                            t.key
                                        ) &&
                                    (ie(-1), Oe(-1)),
                                229 !== t.which))
                        )
                            switch (t.key) {
                                case 'Home':
                                    Pe &&
                                        L &&
                                        (t.preventDefault(),
                                        Re({
                                            diff: 'start',
                                            direction: 'next',
                                            reason: 'keyboard',
                                            event: t,
                                        }));
                                    break;
                                case 'End':
                                    Pe &&
                                        L &&
                                        (t.preventDefault(),
                                        Re({
                                            diff: 'end',
                                            direction: 'previous',
                                            reason: 'keyboard',
                                            event: t,
                                        }));
                                    break;
                                case 'PageUp':
                                    t.preventDefault(),
                                        Re({
                                            diff: -v,
                                            direction: 'previous',
                                            reason: 'keyboard',
                                            event: t,
                                        }),
                                        Te(t);
                                    break;
                                case 'PageDown':
                                    t.preventDefault(),
                                        Re({
                                            diff: v,
                                            direction: 'next',
                                            reason: 'keyboard',
                                            event: t,
                                        }),
                                        Te(t);
                                    break;
                                case 'ArrowDown':
                                    t.preventDefault(),
                                        Re({
                                            diff: 1,
                                            direction: 'next',
                                            reason: 'keyboard',
                                            event: t,
                                        }),
                                        Te(t);
                                    break;
                                case 'ArrowUp':
                                    t.preventDefault(),
                                        Re({
                                            diff: -1,
                                            direction: 'previous',
                                            reason: 'keyboard',
                                            event: t,
                                        }),
                                        Te(t);
                                    break;
                                case 'ArrowLeft':
                                    Ne(t, 'previous');
                                    break;
                                case 'ArrowRight':
                                    Ne(t, 'next');
                                    break;
                                case 'Enter':
                                    if (-1 !== se.current && Pe) {
                                        const e = we[se.current],
                                            n = !!T && T(e);
                                        if ((t.preventDefault(), n)) return;
                                        Le(t, e, 'selectOption'),
                                            c &&
                                                te.current.setSelectionRange(
                                                    te.current.value.length,
                                                    te.current.value.length
                                                );
                                    } else
                                        C &&
                                            '' !== de &&
                                            !1 === xe &&
                                            (F && t.preventDefault(),
                                            Le(
                                                t,
                                                de,
                                                'createOption',
                                                'freeSolo'
                                            ));
                                    break;
                                case 'Escape':
                                    Pe
                                        ? (t.preventDefault(),
                                          t.stopPropagation(),
                                          Ae(t, 'escape'))
                                        : y &&
                                          ('' !== de || (F && ue.length > 0)) &&
                                          (t.preventDefault(),
                                          t.stopPropagation(),
                                          $e(t));
                                    break;
                                case 'Backspace':
                                    if (F && !W && '' === de && ue.length > 0) {
                                        const e =
                                                -1 === le ? ue.length - 1 : le,
                                            n = ue.slice();
                                        n.splice(e, 1),
                                            Ie(t, n, 'removeOption', {
                                                option: ue[e],
                                            });
                                    }
                                    break;
                                case 'Delete':
                                    if (
                                        F &&
                                        !W &&
                                        '' === de &&
                                        ue.length > 0 &&
                                        -1 !== le
                                    ) {
                                        const e = le,
                                            n = ue.slice();
                                        n.splice(e, 1),
                                            Ie(t, n, 'removeOption', {
                                                option: ue[e],
                                            });
                                    }
                            }
                    },
                    Me = (e) => {
                        ve(!0), _ && !Q.current && Te(e);
                    },
                    Fe = (e) => {
                        t(ne)
                            ? te.current.focus()
                            : (ve(!1),
                              (ee.current = !0),
                              (Q.current = !1),
                              h && -1 !== se.current && Pe
                                  ? Le(e, we[se.current], 'blur')
                                  : h && C && '' !== de
                                    ? Le(e, de, 'blur', 'freeSolo')
                                    : b && me(e, ue),
                              Ae(e, 'blur'));
                    },
                    Be = (e) => {
                        const t = e.target.value;
                        de !== t && (fe(t), ye(!1), H && H(e, t, 'input')),
                            '' === t ? w || F || Ie(e, null, 'clear') : Te(e);
                    },
                    Ke = (e) => {
                        const t = Number(
                            e.currentTarget.getAttribute('data-option-index')
                        );
                        se.current !== t &&
                            Se({event: e, index: t, reason: 'mouse'});
                    },
                    Ve = (e) => {
                        Se({
                            event: e,
                            index: Number(
                                e.currentTarget.getAttribute(
                                    'data-option-index'
                                )
                            ),
                            reason: 'touch',
                        }),
                            (De.current = !0);
                    },
                    He = (e) => {
                        const t = Number(
                            e.currentTarget.getAttribute('data-option-index')
                        );
                        Le(e, we[t], 'selectOption'), (De.current = !1);
                    },
                    Ue = (e) => (t) => {
                        const n = ue.slice();
                        n.splice(e, 1),
                            Ie(t, n, 'removeOption', {option: ue[e]});
                    },
                    qe = (e) => {
                        he ? Ae(e, 'toggleInput') : Te(e);
                    },
                    _e = (e) => {
                        e.currentTarget.contains(e.target) &&
                            e.target.getAttribute('id') !== G &&
                            e.preventDefault();
                    },
                    ze = (e) => {
                        e.currentTarget.contains(e.target) &&
                            (te.current.focus(),
                            Y &&
                                ee.current &&
                                te.current.selectionEnd -
                                    te.current.selectionStart ==
                                    0 &&
                                te.current.select(),
                            (ee.current = !1));
                    },
                    We = (e) => {
                        Z || ('' !== de && he) || qe(e);
                    };
                let Ye = C && de.length > 0;
                Ye = Ye || (F ? ue.length > 0 : null !== ue);
                let Xe = we;
                return (
                    D &&
                        (new Map(),
                        (Xe = we.reduce((e, t, n) => {
                            const r = D(t);
                            return (
                                e.length > 0 && e[e.length - 1].group === r
                                    ? e[e.length - 1].options.push(t)
                                    : e.push({
                                          key: n,
                                          index: n,
                                          group: r,
                                          options: [t],
                                      }),
                                e
                            );
                        }, []))),
                    Z && pe && Fe(),
                    {
                        getRootProps: (e = {}) =>
                            (0, r.Z)(
                                {'aria-owns': Ze ? `${G}-listbox` : null},
                                e,
                                {onKeyDown: je(e), onMouseDown: _e, onClick: ze}
                            ),
                        getInputLabelProps: () => ({
                            id: `${G}-label`,
                            htmlFor: G,
                        }),
                        getInputProps: () => ({
                            id: G,
                            value: de,
                            onBlur: Fe,
                            onFocus: Me,
                            onChange: Be,
                            onMouseDown: We,
                            'aria-activedescendant': Pe ? '' : null,
                            'aria-autocomplete': c ? 'both' : 'list',
                            'aria-controls': Ze ? `${G}-listbox` : void 0,
                            'aria-expanded': Ze,
                            autoComplete: 'off',
                            ref: te,
                            autoCapitalize: 'none',
                            spellCheck: 'false',
                            role: 'combobox',
                            disabled: Z,
                        }),
                        getClearProps: () => ({
                            tabIndex: -1,
                            type: 'button',
                            onClick: $e,
                        }),
                        getPopupIndicatorProps: () => ({
                            tabIndex: -1,
                            type: 'button',
                            onClick: qe,
                        }),
                        getTagProps: ({index: e}) =>
                            (0, r.Z)(
                                {key: e, 'data-tag-index': e, tabIndex: -1},
                                !W && {onDelete: Ue(e)}
                            ),
                        getListboxProps: () => ({
                            role: 'listbox',
                            id: `${G}-listbox`,
                            'aria-labelledby': `${G}-label`,
                            ref: Ce,
                            onMouseDown: (e) => {
                                e.preventDefault();
                            },
                        }),
                        getOptionProps: ({index: e, option: t}) => {
                            var n;
                            const r = (F ? ue : [ue]).some(
                                    (e) => null != e && M(t, e)
                                ),
                                o = !!T && T(t);
                            return {
                                key:
                                    null != (n = null == A ? void 0 : A(t))
                                        ? n
                                        : J(t),
                                tabIndex: -1,
                                role: 'option',
                                id: `${G}-option-${e}`,
                                onMouseMove: Ke,
                                onClick: He,
                                onTouchStart: Ve,
                                'data-option-index': e,
                                'aria-disabled': o,
                                'aria-selected': r,
                            };
                        },
                        id: G,
                        inputValue: de,
                        value: ue,
                        dirty: Ye,
                        expanded: Pe && re,
                        popupOpen: Pe,
                        focused: pe || -1 !== le,
                        anchorEl: re,
                        setAnchorEl: oe,
                        focusedTag: le,
                        groupedOptions: Xe,
                    }
                );
            }
        },
        35912: (e, t, n) => {
            n.d(t, {oN: () => S, Rg: () => b});
            var r = n(57260),
                o = n(65812),
                l = n(6531),
                i = n(56672),
                a = n(7001),
                s = n(75002),
                u = n(73914),
                c = n(36454),
                d = n(22757),
                f = n(29790),
                p = n(14573);
            const v = 2;
            function m(e, t) {
                return e - t;
            }
            function h(e, t) {
                var n;
                const {index: r} =
                    null !=
                    (n = e.reduce((e, n, r) => {
                        const o = Math.abs(t - n);
                        return null === e || o < e.distance || o === e.distance
                            ? {distance: o, index: r}
                            : e;
                    }, null))
                        ? n
                        : {};
                return r;
            }
            function g(e, t) {
                if (void 0 !== t.current && e.changedTouches) {
                    const n = e;
                    for (let e = 0; e < n.changedTouches.length; e += 1) {
                        const r = n.changedTouches[e];
                        if (r.identifier === t.current)
                            return {x: r.clientX, y: r.clientY};
                    }
                    return !1;
                }
                return {x: e.clientX, y: e.clientY};
            }
            function b(e, t, n) {
                return (100 * (e - t)) / (n - t);
            }
            function y({values: e, newValue: t, index: n}) {
                const r = e.slice();
                return (r[n] = t), r.sort(m);
            }
            function x({sliderRef: e, activeIndex: t, setActive: n}) {
                var r, o;
                const i = (0, l.Z)(e.current);
                var a;
                (null != (r = e.current) &&
                    r.contains(i.activeElement) &&
                    Number(
                        null == i || null == (o = i.activeElement)
                            ? void 0
                            : o.getAttribute('data-index')
                    ) === t) ||
                    null == (a = e.current) ||
                    a
                        .querySelector(`[type="range"][data-index="${t}"]`)
                        .focus(),
                    n && n(t);
            }
            function P(e, t) {
                return 'number' == typeof e && 'number' == typeof t
                    ? e === t
                    : 'object' == typeof e &&
                          'object' == typeof t &&
                          (function (e, t, n = (e, t) => e === t) {
                              return (
                                  e.length === t.length &&
                                  e.every((e, r) => n(e, t[r]))
                              );
                          })(e, t);
            }
            const w = {
                    horizontal: {
                        offset: (e) => ({left: `${e}%`}),
                        leap: (e) => ({width: `${e}%`}),
                    },
                    'horizontal-reverse': {
                        offset: (e) => ({right: `${e}%`}),
                        leap: (e) => ({width: `${e}%`}),
                    },
                    vertical: {
                        offset: (e) => ({bottom: `${e}%`}),
                        leap: (e) => ({height: `${e}%`}),
                    },
                },
                E = (e) => e;
            let Z;
            function O() {
                return (
                    void 0 === Z &&
                        (Z =
                            'undefined' == typeof CSS ||
                            'function' != typeof CSS.supports ||
                            CSS.supports('touch-action', 'none')),
                    Z
                );
            }
            function S(e) {
                const {
                        'aria-labelledby': t,
                        defaultValue: n,
                        disabled: Z = !1,
                        disableSwap: S = !1,
                        isRtl: R = !1,
                        marks: k = !1,
                        max: C = 100,
                        min: T = 0,
                        name: A,
                        onChange: I,
                        onChangeCommitted: D,
                        orientation: L = 'horizontal',
                        rootRef: N,
                        scale: $ = E,
                        step: j = 1,
                        shiftStep: M = 10,
                        tabIndex: F,
                        value: B,
                    } = e,
                    K = o.useRef(),
                    [V, H] = o.useState(-1),
                    [U, q] = o.useState(-1),
                    [_, z] = o.useState(!1),
                    W = o.useRef(0),
                    [Y, X] = (0, i.Z)({
                        controlled: B,
                        default: null != n ? n : T,
                        name: 'Slider',
                    }),
                    G =
                        I &&
                        ((e, t, n) => {
                            const r = e.nativeEvent || e,
                                o = new r.constructor(r.type, r);
                            Object.defineProperty(o, 'target', {
                                writable: !0,
                                value: {value: t, name: A},
                            }),
                                I(o, t, n);
                        }),
                    J = Array.isArray(Y);
                let Q = J ? Y.slice().sort(m) : [Y];
                Q = Q.map((e) => (null == e ? T : (0, a.Z)(e, T, C)));
                const ee =
                        !0 === k && null !== j
                            ? [...Array(Math.floor((C - T) / j) + 1)].map(
                                  (e, t) => ({value: T + j * t})
                              )
                            : k || [],
                    te = ee.map((e) => e.value),
                    {
                        isFocusVisibleRef: ne,
                        onBlur: re,
                        onFocus: oe,
                        ref: le,
                    } = (0, s.Z)(),
                    [ie, ae] = o.useState(-1),
                    se = o.useRef(),
                    ue = (0, u.Z)(le, se),
                    ce = (0, u.Z)(N, ue),
                    de = (e) => (t) => {
                        var n;
                        const r = Number(
                            t.currentTarget.getAttribute('data-index')
                        );
                        oe(t),
                            !0 === ne.current && ae(r),
                            q(r),
                            null == e ||
                                null == (n = e.onFocus) ||
                                n.call(e, t);
                    },
                    fe = (e) => (t) => {
                        var n;
                        re(t),
                            !1 === ne.current && ae(-1),
                            q(-1),
                            null == e || null == (n = e.onBlur) || n.call(e, t);
                    },
                    pe = (e, t) => {
                        const n = Number(
                                e.currentTarget.getAttribute('data-index')
                            ),
                            r = Q[n],
                            o = te.indexOf(r);
                        let l = t;
                        if (ee && null == j) {
                            const e = te[te.length - 1];
                            l =
                                l > e
                                    ? e
                                    : l < te[0]
                                      ? te[0]
                                      : l < r
                                        ? te[o - 1]
                                        : te[o + 1];
                        }
                        if (((l = (0, a.Z)(l, T, C)), J)) {
                            S &&
                                (l = (0, a.Z)(
                                    l,
                                    Q[n - 1] || -1 / 0,
                                    Q[n + 1] || 1 / 0
                                ));
                            const e = l;
                            l = y({values: Q, newValue: l, index: n});
                            let t = n;
                            S || (t = l.indexOf(e)),
                                x({sliderRef: se, activeIndex: t});
                        }
                        X(l), ae(n), G && !P(l, Y) && G(e, l, n), D && D(e, l);
                    },
                    ve = (e) => (t) => {
                        var n;
                        if (null !== j) {
                            const e = Number(
                                    t.currentTarget.getAttribute('data-index')
                                ),
                                n = Q[e];
                            let r = null;
                            (('ArrowLeft' === t.key || 'ArrowDown' === t.key) &&
                                t.shiftKey) ||
                            'PageDown' === t.key
                                ? (r = Math.max(n - M, T))
                                : ((('ArrowRight' === t.key ||
                                      'ArrowUp' === t.key) &&
                                      t.shiftKey) ||
                                      'PageUp' === t.key) &&
                                  (r = Math.min(n + M, C)),
                                null !== r && (pe(t, r), t.preventDefault());
                        }
                        null == e || null == (n = e.onKeyDown) || n.call(e, t);
                    };
                (0, c.Z)(() => {
                    var e;
                    Z &&
                        se.current.contains(document.activeElement) &&
                        (null == (e = document.activeElement) || e.blur());
                }, [Z]),
                    Z && -1 !== V && H(-1),
                    Z && -1 !== ie && ae(-1);
                const me = o.useRef();
                let he = L;
                R && 'horizontal' === L && (he += '-reverse');
                const ge = ({finger: e, move: t = !1}) => {
                        const {current: n} = se,
                            {
                                width: r,
                                height: o,
                                bottom: l,
                                left: i,
                            } = n.getBoundingClientRect();
                        let s, u;
                        if (
                            ((s =
                                0 === he.indexOf('vertical')
                                    ? (l - e.y) / o
                                    : (e.x - i) / r),
                            -1 !== he.indexOf('-reverse') && (s = 1 - s),
                            (u = (function (e, t, n) {
                                return (n - t) * e + t;
                            })(s, T, C)),
                            j)
                        )
                            u = (function (e, t, n) {
                                const r = Math.round((e - n) / t) * t + n;
                                return Number(
                                    r.toFixed(
                                        (function (e) {
                                            if (Math.abs(e) < 1) {
                                                const t = e
                                                        .toExponential()
                                                        .split('e-'),
                                                    n = t[0].split('.')[1];
                                                return (
                                                    (n ? n.length : 0) +
                                                    parseInt(t[1], 10)
                                                );
                                            }
                                            const t = e
                                                .toString()
                                                .split('.')[1];
                                            return t ? t.length : 0;
                                        })(t)
                                    )
                                );
                            })(u, j, T);
                        else {
                            const e = h(te, u);
                            u = te[e];
                        }
                        u = (0, a.Z)(u, T, C);
                        let c = 0;
                        if (J) {
                            (c = t ? me.current : h(Q, u)),
                                S &&
                                    (u = (0, a.Z)(
                                        u,
                                        Q[c - 1] || -1 / 0,
                                        Q[c + 1] || 1 / 0
                                    ));
                            const e = u;
                            (u = y({values: Q, newValue: u, index: c})),
                                (S && t) ||
                                    ((c = u.indexOf(e)), (me.current = c));
                        }
                        return {newValue: u, activeIndex: c};
                    },
                    be = (0, d.Z)((e) => {
                        const t = g(e, K);
                        if (!t) return;
                        if (
                            ((W.current += 1),
                            'mousemove' === e.type && 0 === e.buttons)
                        )
                            return void ye(e);
                        const {newValue: n, activeIndex: r} = ge({
                            finger: t,
                            move: !0,
                        });
                        x({sliderRef: se, activeIndex: r, setActive: H}),
                            X(n),
                            !_ && W.current > v && z(!0),
                            G && !P(n, Y) && G(e, n, r);
                    }),
                    ye = (0, d.Z)((e) => {
                        const t = g(e, K);
                        if ((z(!1), !t)) return;
                        const {newValue: n} = ge({finger: t, move: !0});
                        H(-1),
                            'touchend' === e.type && q(-1),
                            D && D(e, n),
                            (K.current = void 0),
                            Pe();
                    }),
                    xe = (0, d.Z)((e) => {
                        if (Z) return;
                        O() || e.preventDefault();
                        const t = e.changedTouches[0];
                        null != t && (K.current = t.identifier);
                        const n = g(e, K);
                        if (!1 !== n) {
                            const {newValue: t, activeIndex: r} = ge({
                                finger: n,
                            });
                            x({sliderRef: se, activeIndex: r, setActive: H}),
                                X(t),
                                G && !P(t, Y) && G(e, t, r);
                        }
                        W.current = 0;
                        const r = (0, l.Z)(se.current);
                        r.addEventListener('touchmove', be, {passive: !0}),
                            r.addEventListener('touchend', ye, {passive: !0});
                    }),
                    Pe = o.useCallback(() => {
                        const e = (0, l.Z)(se.current);
                        e.removeEventListener('mousemove', be),
                            e.removeEventListener('mouseup', ye),
                            e.removeEventListener('touchmove', be),
                            e.removeEventListener('touchend', ye);
                    }, [ye, be]);
                o.useEffect(() => {
                    const {current: e} = se;
                    return (
                        e.addEventListener('touchstart', xe, {passive: O()}),
                        () => {
                            e.removeEventListener('touchstart', xe), Pe();
                        }
                    );
                }, [Pe, xe]),
                    o.useEffect(() => {
                        Z && Pe();
                    }, [Z, Pe]);
                const we = b(J ? Q[0] : T, T, C),
                    Ee = b(Q[Q.length - 1], T, C) - we,
                    Ze = (e) => (t) => {
                        var n;
                        null == (n = e.onMouseLeave) || n.call(e, t), q(-1);
                    };
                return {
                    active: V,
                    axis: he,
                    axisProps: w,
                    dragging: _,
                    focusedThumbIndex: ie,
                    getHiddenInputProps: (n = {}) => {
                        var o;
                        const l = (0, p._)(n),
                            i = {
                                onChange:
                                    ((a = l || {}),
                                    (e) => {
                                        var t;
                                        null == (t = a.onChange) ||
                                            t.call(a, e),
                                            pe(e, e.target.valueAsNumber);
                                    }),
                                onFocus: de(l || {}),
                                onBlur: fe(l || {}),
                                onKeyDown: ve(l || {}),
                            };
                        var a;
                        const s = (0, r.Z)({}, l, i);
                        return (0, r.Z)(
                            {
                                tabIndex: F,
                                'aria-labelledby': t,
                                'aria-orientation': L,
                                'aria-valuemax': $(C),
                                'aria-valuemin': $(T),
                                name: A,
                                type: 'range',
                                min: e.min,
                                max: e.max,
                                step:
                                    null === e.step && e.marks
                                        ? 'any'
                                        : null != (o = e.step)
                                          ? o
                                          : void 0,
                                disabled: Z,
                            },
                            n,
                            s,
                            {
                                style: (0, r.Z)({}, f.Z, {
                                    direction: R ? 'rtl' : 'ltr',
                                    width: '100%',
                                    height: '100%',
                                }),
                            }
                        );
                    },
                    getRootProps: (e = {}) => {
                        const t = (0, p._)(e),
                            n = {
                                onMouseDown:
                                    ((o = t || {}),
                                    (e) => {
                                        var t;
                                        if (
                                            (null == (t = o.onMouseDown) ||
                                                t.call(o, e),
                                            Z)
                                        )
                                            return;
                                        if (e.defaultPrevented) return;
                                        if (0 !== e.button) return;
                                        e.preventDefault();
                                        const n = g(e, K);
                                        if (!1 !== n) {
                                            const {
                                                newValue: t,
                                                activeIndex: r,
                                            } = ge({finger: n});
                                            x({
                                                sliderRef: se,
                                                activeIndex: r,
                                                setActive: H,
                                            }),
                                                X(t),
                                                G && !P(t, Y) && G(e, t, r);
                                        }
                                        W.current = 0;
                                        const r = (0, l.Z)(se.current);
                                        r.addEventListener('mousemove', be, {
                                            passive: !0,
                                        }),
                                            r.addEventListener('mouseup', ye);
                                    }),
                            };
                        var o;
                        const i = (0, r.Z)({}, t, n);
                        return (0, r.Z)({}, e, {ref: ce}, i);
                    },
                    getThumbProps: (e = {}) => {
                        const t = (0, p._)(e),
                            n = {
                                onMouseOver:
                                    ((o = t || {}),
                                    (e) => {
                                        var t;
                                        null == (t = o.onMouseOver) ||
                                            t.call(o, e);
                                        const n = Number(
                                            e.currentTarget.getAttribute(
                                                'data-index'
                                            )
                                        );
                                        q(n);
                                    }),
                                onMouseLeave: Ze(t || {}),
                            };
                        var o;
                        return (0, r.Z)({}, e, t, n);
                    },
                    marks: ee,
                    open: U,
                    range: J,
                    rootRef: ce,
                    trackLeap: Ee,
                    trackOffset: we,
                    values: Q,
                    getThumbStyle: (e) => ({
                        pointerEvents: -1 !== V && V !== e ? 'none' : void 0,
                    }),
                };
            }
        },
        76743: (e, t, n) => {
            n.d(t, {$: () => l});
            var r = n(57260),
                o = n(31716);
            function l(e, t, n) {
                return void 0 === e || (0, o.X)(e)
                    ? t
                    : (0, r.Z)({}, t, {
                          ownerState: (0, r.Z)({}, t.ownerState, n),
                      });
            }
        },
        14573: (e, t, n) => {
            function r(e, t = []) {
                if (void 0 === e) return {};
                const n = {};
                return (
                    Object.keys(e)
                        .filter(
                            (n) =>
                                n.match(/^on[A-Z]/) &&
                                'function' == typeof e[n] &&
                                !t.includes(n)
                        )
                        .forEach((t) => {
                            n[t] = e[t];
                        }),
                    n
                );
            }
            n.d(t, {_: () => r});
        },
        31716: (e, t, n) => {
            function r(e) {
                return 'string' == typeof e;
            }
            n.d(t, {X: () => r});
        },
        53202: (e, t, n) => {
            function r(e, t, n) {
                return 'function' == typeof e ? e(t, n) : e;
            }
            n.d(t, {x: () => r});
        },
        33805: (e, t, n) => {
            n.d(t, {y: () => f});
            var r = n(57260),
                o = n(63051),
                l = n(73914),
                i = n(76743),
                a = n(86259),
                s = n(14573);
            function u(e) {
                if (void 0 === e) return {};
                const t = {};
                return (
                    Object.keys(e)
                        .filter(
                            (t) =>
                                !(
                                    t.match(/^on[A-Z]/) &&
                                    'function' == typeof e[t]
                                )
                        )
                        .forEach((n) => {
                            t[n] = e[n];
                        }),
                    t
                );
            }
            var c = n(53202);
            const d = [
                'elementType',
                'externalSlotProps',
                'ownerState',
                'skipResolvingSlotProps',
            ];
            function f(e) {
                var t;
                const {
                        elementType: n,
                        externalSlotProps: f,
                        ownerState: p,
                        skipResolvingSlotProps: v = !1,
                    } = e,
                    m = (0, o.Z)(e, d),
                    h = v ? {} : (0, c.x)(f, p),
                    {props: g, internalRef: b} = (function (e) {
                        const {
                            getSlotProps: t,
                            additionalProps: n,
                            externalSlotProps: o,
                            externalForwardedProps: l,
                            className: i,
                        } = e;
                        if (!t) {
                            const e = (0, a.Z)(
                                    null == n ? void 0 : n.className,
                                    i,
                                    null == l ? void 0 : l.className,
                                    null == o ? void 0 : o.className
                                ),
                                t = (0, r.Z)(
                                    {},
                                    null == n ? void 0 : n.style,
                                    null == l ? void 0 : l.style,
                                    null == o ? void 0 : o.style
                                ),
                                s = (0, r.Z)({}, n, l, o);
                            return (
                                e.length > 0 && (s.className = e),
                                Object.keys(t).length > 0 && (s.style = t),
                                {props: s, internalRef: void 0}
                            );
                        }
                        const c = (0, s._)((0, r.Z)({}, l, o)),
                            d = u(o),
                            f = u(l),
                            p = t(c),
                            v = (0, a.Z)(
                                null == p ? void 0 : p.className,
                                null == n ? void 0 : n.className,
                                i,
                                null == l ? void 0 : l.className,
                                null == o ? void 0 : o.className
                            ),
                            m = (0, r.Z)(
                                {},
                                null == p ? void 0 : p.style,
                                null == n ? void 0 : n.style,
                                null == l ? void 0 : l.style,
                                null == o ? void 0 : o.style
                            ),
                            h = (0, r.Z)({}, p, n, f, d);
                        return (
                            v.length > 0 && (h.className = v),
                            Object.keys(m).length > 0 && (h.style = m),
                            {props: h, internalRef: p.ref}
                        );
                    })((0, r.Z)({}, m, {externalSlotProps: h})),
                    y = (0, l.Z)(
                        b,
                        null == h ? void 0 : h.ref,
                        null == (t = e.additionalProps) ? void 0 : t.ref
                    );
                return (0, i.$)(n, (0, r.Z)({}, g, {ref: y}), p);
            }
        },
        31930: (e, t, n) => {
            n.d(t, {N: () => E, W: () => w});
            var r = n(65812),
                o = n.n(r),
                l = n(13234),
                i = n(56311),
                a = n(94254),
                s = n(5007),
                u = n(38517),
                c = n(91080),
                d = n(39092);
            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t)
                                .enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? f(Object(n), !0).forEach(function (t) {
                              v(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n)
                            )
                          : f(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(n, t)
                                );
                            });
                }
                return e;
            }
            function v(e, t, n) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n),
                    e
                );
            }
            function m() {
                return (
                    (m =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    m.apply(this, arguments)
                );
            }
            function h(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var n =
                            null == e
                                ? null
                                : ('undefined' != typeof Symbol &&
                                      e[Symbol.iterator]) ||
                                  e['@@iterator'];
                        if (null != n) {
                            var r,
                                o,
                                l = [],
                                i = !0,
                                a = !1;
                            try {
                                for (
                                    n = n.call(e);
                                    !(i = (r = n.next()).done) &&
                                    (l.push(r.value), !t || l.length !== t);
                                    i = !0
                                );
                            } catch (e) {
                                (a = !0), (o = e);
                            } finally {
                                try {
                                    i || null == n.return || n.return();
                                } finally {
                                    if (a) throw o;
                                }
                            }
                            return l;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return g(e, t);
                            var n = Object.prototype.toString
                                .call(e)
                                .slice(8, -1);
                            return (
                                'Object' === n &&
                                    e.constructor &&
                                    (n = e.constructor.name),
                                'Map' === n || 'Set' === n
                                    ? Array.from(e)
                                    : 'Arguments' === n ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                            n
                                        )
                                      ? g(e, t)
                                      : void 0
                            );
                        }
                    })(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            var b = (0, r.createContext)(),
                y = function (e) {
                    var t = e.open,
                        n = e.options,
                        r = e.onCancel,
                        f = e.onConfirm,
                        p = e.onClose,
                        v = n.title,
                        g = n.description,
                        b = n.content,
                        y = n.confirmationText,
                        x = n.cancellationText,
                        P = n.dialogProps,
                        w = n.dialogActionsProps,
                        E = n.confirmationButtonProps,
                        Z = n.cancellationButtonProps,
                        O = n.titleProps,
                        S = n.contentProps,
                        R = n.allowClose,
                        k = n.confirmationKeyword,
                        C = n.confirmationKeywordTextFieldProps,
                        T = n.hideCancelButton,
                        A = h(o().useState(''), 2),
                        I = A[0],
                        D = A[1],
                        L = k && I !== k,
                        N = o().createElement(
                            o().Fragment,
                            null,
                            k &&
                                o().createElement(
                                    d.Z,
                                    m(
                                        {
                                            onChange: function (e) {
                                                return D(e.target.value);
                                            },
                                            value: I,
                                            fullWidth: !0,
                                        },
                                        C
                                    )
                                )
                        );
                    return o().createElement(
                        i.Z,
                        m({fullWidth: !0}, P, {open: t, onClose: R ? p : null}),
                        v && o().createElement(c.Z, O, v),
                        b
                            ? o().createElement(s.Z, S, b, N)
                            : g
                              ? o().createElement(
                                    s.Z,
                                    S,
                                    o().createElement(u.Z, null, g),
                                    N
                                )
                              : k && o().createElement(s.Z, S, N),
                        o().createElement(
                            a.Z,
                            w,
                            !T &&
                                o().createElement(
                                    l.Z,
                                    m({}, Z, {onClick: r}),
                                    x
                                ),
                            o().createElement(
                                l.Z,
                                m({color: 'primary', disabled: L}, E, {
                                    onClick: f,
                                }),
                                y
                            )
                        )
                    );
                },
                x = {
                    title: 'Are you sure?',
                    description: '',
                    content: null,
                    confirmationText: 'Ok',
                    cancellationText: 'Cancel',
                    dialogProps: {},
                    dialogActionsProps: {},
                    confirmationButtonProps: {},
                    cancellationButtonProps: {},
                    titleProps: {},
                    contentProps: {},
                    allowClose: !0,
                    confirmationKeywordTextFieldProps: {},
                    hideCancelButton: !1,
                },
                P = function (e, t) {
                    var n = p(
                            p({}, e.dialogProps || x.dialogProps),
                            t.dialogProps || {}
                        ),
                        r = p(
                            p({}, e.dialogActionsProps || x.dialogActionsProps),
                            t.dialogActionsProps || {}
                        ),
                        o = p(
                            p(
                                {},
                                e.confirmationButtonProps ||
                                    x.confirmationButtonProps
                            ),
                            t.confirmationButtonProps || {}
                        ),
                        l = p(
                            p(
                                {},
                                e.cancellationButtonProps ||
                                    x.cancellationButtonProps
                            ),
                            t.cancellationButtonProps || {}
                        ),
                        i = p(
                            p({}, e.titleProps || x.titleProps),
                            t.titleProps || {}
                        ),
                        a = p(
                            p({}, e.contentProps || x.contentProps),
                            t.contentProps || {}
                        ),
                        s = p(
                            p(
                                {},
                                e.confirmationKeywordTextFieldProps ||
                                    x.confirmationKeywordTextFieldProps
                            ),
                            t.confirmationKeywordTextFieldProps || {}
                        );
                    return p(
                        p(p(p({}, x), e), t),
                        {},
                        {
                            dialogProps: n,
                            dialogActionsProps: r,
                            confirmationButtonProps: o,
                            cancellationButtonProps: l,
                            titleProps: i,
                            contentProps: a,
                            confirmationKeywordTextFieldProps: s,
                        }
                    );
                },
                w = function (e) {
                    var t = e.children,
                        n = e.defaultOptions,
                        l = void 0 === n ? {} : n,
                        i = h((0, r.useState)({}), 2),
                        a = i[0],
                        s = i[1],
                        u = h((0, r.useState)([]), 2),
                        c = u[0],
                        d = u[1],
                        f = h(c, 2),
                        p = f[0],
                        v = f[1],
                        m = (0, r.useCallback)(function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {};
                            return new Promise(function (t, n) {
                                s(e), d([t, n]);
                            });
                        }, []),
                        g = (0, r.useCallback)(function () {
                            d([]);
                        }, []),
                        x = (0, r.useCallback)(
                            function () {
                                v && (v(), g());
                            },
                            [v, g]
                        ),
                        w = (0, r.useCallback)(
                            function () {
                                p && (p(), g());
                            },
                            [p, g]
                        );
                    return o().createElement(
                        r.Fragment,
                        null,
                        o().createElement(b.Provider, {value: m}, t),
                        o().createElement(y, {
                            open: 2 === c.length,
                            options: P(l, a),
                            onClose: g,
                            onCancel: x,
                            onConfirm: w,
                        })
                    );
                },
                E = function () {
                    return (0, r.useContext)(b);
                };
        },
    },
]);
