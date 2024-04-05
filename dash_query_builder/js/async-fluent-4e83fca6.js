'use strict';
(self.webpackChunkdash_query_builder =
    self.webpackChunkdash_query_builder || []).push([
    [676],
    {
        39758: (e, t, o) => {
            o.d(t, {xu: () => u, z1: () => c});
            var i = o(96583),
                r = o(65812),
                n = o(80298),
                a = o(25607),
                s = o(48782),
                l = o(99976),
                d = o(85446),
                c = (0, a.NF)(
                    function (e) {
                        var t = (0, d.q7)(e) || {subset: {}, code: void 0},
                            o = t.code,
                            i = t.subset;
                        return o
                            ? {
                                  children: o,
                                  iconClassName: i.className,
                                  fontFamily:
                                      i.fontFace && i.fontFace.fontFamily,
                                  mergeImageProps: i.mergeImageProps,
                              }
                            : null;
                    },
                    void 0,
                    !0
                ),
                u = function (e) {
                    var t = e.iconName,
                        o = e.className,
                        a = e.style,
                        d = void 0 === a ? {} : a,
                        u = c(t) || {},
                        p = u.iconClassName,
                        m = u.children,
                        h = u.fontFamily,
                        v = u.mergeImageProps,
                        f = (0, s.pq)(e, s.iY),
                        g = e['aria-label'] || e.title,
                        b =
                            e['aria-label'] || e['aria-labelledby'] || e.title
                                ? {role: v ? void 0 : 'img'}
                                : {'aria-hidden': !0},
                        y = m;
                    return (
                        v &&
                            'object' == typeof m &&
                            'object' == typeof m.props &&
                            g &&
                            (y = r.cloneElement(m, {alt: g})),
                        r.createElement(
                            'i',
                            (0, i.pi)(
                                {'data-icon-name': t},
                                b,
                                f,
                                v ? {title: void 0, 'aria-label': void 0} : {},
                                {
                                    className: (0, l.i)(
                                        n.Sk,
                                        n.AK.root,
                                        p,
                                        !t && n.AK.placeholder,
                                        o
                                    ),
                                    style: (0, i.pi)({fontFamily: h}, d),
                                }
                            ),
                            y
                        )
                    );
                };
            (0, a.NF)(function (e, t, o) {
                return u({iconName: e, className: t, 'aria-label': o});
            });
        },
        56316: (e, t, o) => {
            o.d(t, {J: () => v});
            var i,
                r = o(98621),
                n = o(96583),
                a = o(65812);
            !(function (e) {
                (e[(e.default = 0)] = 'default'),
                    (e[(e.image = 1)] = 'image'),
                    (e[(e.Default = 1e5)] = 'Default'),
                    (e[(e.Image = 100001)] = 'Image');
            })(i || (i = {}));
            var s = o(43597),
                l = o(73879),
                d = o(11599),
                c = o(48782),
                u = o(39758),
                p = (0, d.y)({cacheSize: 100}),
                m = (function (e) {
                    function t(t) {
                        var o = e.call(this, t) || this;
                        return (
                            (o._onImageLoadingStateChange = function (e) {
                                o.props.imageProps &&
                                    o.props.imageProps.onLoadingStateChange &&
                                    o.props.imageProps.onLoadingStateChange(e),
                                    e === l.U9.error &&
                                        o.setState({imageLoadError: !0});
                            }),
                            (o.state = {imageLoadError: !1}),
                            o
                        );
                    }
                    return (
                        (0, n.ZT)(t, e),
                        (t.prototype.render = function () {
                            var e = this.props,
                                t = e.children,
                                o = e.className,
                                r = e.styles,
                                l = e.iconName,
                                d = e.imageErrorAs,
                                m = e.theme,
                                h = 'string' == typeof l && 0 === l.length,
                                v =
                                    !!this.props.imageProps ||
                                    this.props.iconType === i.image ||
                                    this.props.iconType === i.Image,
                                f = (0, u.z1)(l) || {},
                                g = f.iconClassName,
                                b = f.children,
                                y = f.mergeImageProps,
                                x = p(r, {
                                    theme: m,
                                    className: o,
                                    iconClassName: g,
                                    isImage: v,
                                    isPlaceholder: h,
                                }),
                                C = v ? 'span' : 'i',
                                _ = (0, c.pq)(this.props, c.iY, ['aria-label']),
                                k = this.state.imageLoadError,
                                w = (0, n.pi)(
                                    (0, n.pi)({}, this.props.imageProps),
                                    {
                                        onLoadingStateChange:
                                            this._onImageLoadingStateChange,
                                    }
                                ),
                                N = (k && d) || s.E,
                                T =
                                    this.props['aria-label'] ||
                                    this.props.ariaLabel,
                                S = w.alt || T || this.props.title,
                                E =
                                    S ||
                                    this.props['aria-labelledby'] ||
                                    w['aria-label'] ||
                                    w['aria-labelledby']
                                        ? {
                                              role: v || y ? void 0 : 'img',
                                              'aria-label': v || y ? void 0 : S,
                                          }
                                        : {'aria-hidden': !0},
                                F = b;
                            return (
                                y &&
                                    b &&
                                    'object' == typeof b &&
                                    S &&
                                    (F = a.cloneElement(b, {alt: S})),
                                a.createElement(
                                    C,
                                    (0, n.pi)(
                                        {'data-icon-name': l},
                                        E,
                                        _,
                                        y
                                            ? {
                                                  title: void 0,
                                                  'aria-label': void 0,
                                              }
                                            : {},
                                        {className: x.root}
                                    ),
                                    v
                                        ? a.createElement(N, (0, n.pi)({}, w))
                                        : t || F
                                )
                            );
                        }),
                        t
                    );
                })(a.Component),
                h = o(80298),
                v = (0, r.z)(m, h.Wi, void 0, {scope: 'Icon'}, !0);
            v.displayName = 'Icon';
        },
        80298: (e, t, o) => {
            o.d(t, {AK: () => i, Sk: () => r, Wi: () => n});
            var i = (0, o(85446).ZC)({
                    root: {display: 'inline-block'},
                    placeholder: ['ms-Icon-placeHolder', {width: '1em'}],
                    image: ['ms-Icon-imageContainer', {overflow: 'hidden'}],
                }),
                r = 'ms-Icon',
                n = function (e) {
                    var t = e.className,
                        o = e.iconClassName,
                        r = e.isPlaceholder,
                        n = e.isImage,
                        a = e.styles;
                    return {
                        root: [
                            r && i.placeholder,
                            i.root,
                            n && i.image,
                            o,
                            t,
                            a && a.root,
                            a && a.imageContainer,
                        ],
                    };
                };
        },
        6583: (e, t, o) => {
            o.d(t, {X: () => d});
            var i = o(96583),
                r = o(65812),
                n = o(43597),
                a = o(48782),
                s = o(99976),
                l = o(80298),
                d = function (e) {
                    var t = e.className,
                        o = e.imageProps,
                        d = (0, a.pq)(e, a.iY, [
                            'aria-label',
                            'aria-labelledby',
                            'title',
                            'aria-describedby',
                        ]),
                        c = o.alt || e['aria-label'],
                        u =
                            c ||
                            e['aria-labelledby'] ||
                            e.title ||
                            o['aria-label'] ||
                            o['aria-labelledby'] ||
                            o.title,
                        p = {
                            'aria-labelledby': e['aria-labelledby'],
                            'aria-describedby': e['aria-describedby'],
                            title: e.title,
                        },
                        m = u ? {} : {'aria-hidden': !0};
                    return r.createElement(
                        'div',
                        (0, i.pi)({}, m, d, {
                            className: (0, s.i)(l.Sk, l.AK.root, l.AK.image, t),
                        }),
                        r.createElement(
                            n.E,
                            (0, i.pi)({}, p, o, {alt: u ? c : ''})
                        )
                    );
                };
        },
        43597: (e, t, o) => {
            o.d(t, {E: () => g});
            var i = o(98621),
                r = o(96583),
                n = o(65812),
                a = o(11599),
                s = o(48782),
                l = o(73879),
                d = o(6906),
                c = o(267),
                u = (0, a.y)(),
                p = /\.svg$/i,
                m = n.forwardRef(function (e, t) {
                    var o = n.useRef(),
                        i = n.useRef(),
                        a = (function (e, t) {
                            var o = e.onLoadingStateChange,
                                i = e.onLoad,
                                r = e.onError,
                                a = e.src,
                                s = n.useState(l.U9.notLoaded),
                                c = s[0],
                                u = s[1];
                            (0, d.L)(
                                function () {
                                    u(l.U9.notLoaded);
                                },
                                [a]
                            ),
                                n.useEffect(function () {
                                    c === l.U9.notLoaded &&
                                        t.current &&
                                        ((a &&
                                            t.current.naturalWidth > 0 &&
                                            t.current.naturalHeight > 0) ||
                                            (t.current.complete &&
                                                p.test(a))) &&
                                        u(l.U9.loaded);
                                }),
                                n.useEffect(
                                    function () {
                                        null == o || o(c);
                                    },
                                    [c]
                                );
                            var m = n.useCallback(
                                    function (e) {
                                        null == i || i(e), a && u(l.U9.loaded);
                                    },
                                    [a, i]
                                ),
                                h = n.useCallback(
                                    function (e) {
                                        null == r || r(e), u(l.U9.error);
                                    },
                                    [r]
                                );
                            return [c, m, h];
                        })(e, i),
                        m = a[0],
                        h = a[1],
                        v = a[2],
                        f = (0, s.pq)(e, s.it, ['width', 'height']),
                        g = e.src,
                        b = e.alt,
                        y = e.width,
                        x = e.height,
                        C = e.shouldFadeIn,
                        _ = void 0 === C || C,
                        k = e.shouldStartVisible,
                        w = e.className,
                        N = e.imageFit,
                        T = e.role,
                        S = e.maximizeFrame,
                        E = e.styles,
                        F = e.theme,
                        B = e.loading,
                        I = (function (e, t, o, i) {
                            var r = n.useRef(t),
                                a = n.useRef();
                            return (
                                (void 0 === a ||
                                    (r.current === l.U9.notLoaded &&
                                        t === l.U9.loaded)) &&
                                    (a.current = (function (e, t, o, i) {
                                        var r = e.imageFit,
                                            n = e.width,
                                            a = e.height;
                                        if (void 0 !== e.coverStyle)
                                            return e.coverStyle;
                                        if (
                                            t === l.U9.loaded &&
                                            (r === l.kQ.cover ||
                                                r === l.kQ.contain ||
                                                r === l.kQ.centerContain ||
                                                r === l.kQ.centerCover) &&
                                            o.current &&
                                            i.current
                                        ) {
                                            var s;
                                            if (
                                                ((s =
                                                    'number' == typeof n &&
                                                    'number' == typeof a &&
                                                    r !== l.kQ.centerContain &&
                                                    r !== l.kQ.centerCover
                                                        ? n / a
                                                        : i.current
                                                              .clientWidth /
                                                          i.current
                                                              .clientHeight),
                                                o.current.naturalWidth /
                                                    o.current.naturalHeight >
                                                    s)
                                            )
                                                return l.yZ.landscape;
                                        }
                                        return l.yZ.portrait;
                                    })(e, t, o, i)),
                                (r.current = t),
                                a.current
                            );
                        })(e, m, i, o),
                        L = u(E, {
                            theme: F,
                            className: w,
                            width: y,
                            height: x,
                            maximizeFrame: S,
                            shouldFadeIn: _,
                            shouldStartVisible: k,
                            isLoaded:
                                m === l.U9.loaded ||
                                (m === l.U9.notLoaded && e.shouldStartVisible),
                            isLandscape: I === l.yZ.landscape,
                            isCenter: N === l.kQ.center,
                            isCenterContain: N === l.kQ.centerContain,
                            isCenterCover: N === l.kQ.centerCover,
                            isContain: N === l.kQ.contain,
                            isCover: N === l.kQ.cover,
                            isNone: N === l.kQ.none,
                            isError: m === l.U9.error,
                            isNotImageFit: void 0 === N,
                        });
                    return n.createElement(
                        'div',
                        {
                            className: L.root,
                            style: {width: y, height: x},
                            ref: o,
                        },
                        n.createElement(
                            'img',
                            (0, r.pi)({}, f, {
                                onLoad: h,
                                onError: v,
                                key: 'fabricImage' + e.src || '',
                                className: L.image,
                                ref: (0, c.r)(i, t),
                                src: g,
                                alt: b,
                                role: T,
                                loading: B,
                            })
                        )
                    );
                });
            m.displayName = 'ImageBase';
            var h = o(85446),
                v = o(84346),
                f = {
                    root: 'ms-Image',
                    rootMaximizeFrame: 'ms-Image--maximizeFrame',
                    image: 'ms-Image-image',
                    imageCenter: 'ms-Image-image--center',
                    imageContain: 'ms-Image-image--contain',
                    imageCover: 'ms-Image-image--cover',
                    imageCenterContain: 'ms-Image-image--centerContain',
                    imageCenterCover: 'ms-Image-image--centerCover',
                    imageNone: 'ms-Image-image--none',
                    imageLandscape: 'ms-Image-image--landscape',
                    imagePortrait: 'ms-Image-image--portrait',
                },
                g = (0, i.z)(
                    m,
                    function (e) {
                        var t = e.className,
                            o = e.width,
                            i = e.height,
                            r = e.maximizeFrame,
                            n = e.isLoaded,
                            a = e.shouldFadeIn,
                            s = e.shouldStartVisible,
                            l = e.isLandscape,
                            d = e.isCenter,
                            c = e.isContain,
                            u = e.isCover,
                            p = e.isCenterContain,
                            m = e.isCenterCover,
                            g = e.isNone,
                            b = e.isError,
                            y = e.isNotImageFit,
                            x = e.theme,
                            C = (0, h.Cn)(f, x),
                            _ = {
                                position: 'absolute',
                                left: '50% /* @noflip */',
                                top: '50%',
                                transform: 'translate(-50%,-50%)',
                            },
                            k = (0, v.J)(),
                            w =
                                void 0 !== k &&
                                void 0 === k.navigator.msMaxTouchPoints,
                            N =
                                (c && l) || (u && !l)
                                    ? {width: '100%', height: 'auto'}
                                    : {width: 'auto', height: '100%'};
                        return {
                            root: [
                                C.root,
                                x.fonts.medium,
                                {overflow: 'hidden'},
                                r && [
                                    C.rootMaximizeFrame,
                                    {height: '100%', width: '100%'},
                                ],
                                n && a && !s && h.k4.fadeIn400,
                                (d || c || u || p || m) && {
                                    position: 'relative',
                                },
                                t,
                            ],
                            image: [
                                C.image,
                                {display: 'block', opacity: 0},
                                n && ['is-loaded', {opacity: 1}],
                                d && [C.imageCenter, _],
                                c && [
                                    C.imageContain,
                                    w && {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                    },
                                    !w && N,
                                    !w && _,
                                ],
                                u && [
                                    C.imageCover,
                                    w && {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    },
                                    !w && N,
                                    !w && _,
                                ],
                                p && [
                                    C.imageCenterContain,
                                    l && {maxWidth: '100%'},
                                    !l && {maxHeight: '100%'},
                                    _,
                                ],
                                m && [
                                    C.imageCenterCover,
                                    l && {maxHeight: '100%'},
                                    !l && {maxWidth: '100%'},
                                    _,
                                ],
                                g && [
                                    C.imageNone,
                                    {width: 'auto', height: 'auto'},
                                ],
                                y && [
                                    !!o &&
                                        !i && {height: 'auto', width: '100%'},
                                    !o &&
                                        !!i && {height: '100%', width: 'auto'},
                                    !!o &&
                                        !!i && {height: '100%', width: '100%'},
                                ],
                                l && C.imageLandscape,
                                !l && C.imagePortrait,
                                !n && 'is-notLoaded',
                                a && 'is-fadeIn',
                                b && 'is-error',
                            ],
                        };
                    },
                    void 0,
                    {scope: 'Image'},
                    !0
                );
            g.displayName = 'Image';
        },
        73879: (e, t, o) => {
            var i, r, n;
            o.d(t, {U9: () => n, kQ: () => i, yZ: () => r}),
                (function (e) {
                    (e[(e.center = 0)] = 'center'),
                        (e[(e.contain = 1)] = 'contain'),
                        (e[(e.cover = 2)] = 'cover'),
                        (e[(e.none = 3)] = 'none'),
                        (e[(e.centerCover = 4)] = 'centerCover'),
                        (e[(e.centerContain = 5)] = 'centerContain');
                })(i || (i = {})),
                (function (e) {
                    (e[(e.landscape = 0)] = 'landscape'),
                        (e[(e.portrait = 1)] = 'portrait');
                })(r || (r = {})),
                (function (e) {
                    (e[(e.notLoaded = 0)] = 'notLoaded'),
                        (e[(e.loaded = 1)] = 'loaded'),
                        (e[(e.error = 2)] = 'error'),
                        (e[(e.errorLoaded = 3)] = 'errorLoaded');
                })(n || (n = {}));
        },
        57174: (e, t, o) => {
            o.d(t, {a: () => p});
            var i = o(96583),
                r = o(64519),
                n = o(65812),
                a = o(54008),
                s = o(85968),
                l = o(6906),
                d = o(93484),
                c = o(34602),
                u = o(62785);
            var p = function (e) {
                var t,
                    o = e.children,
                    p = (function (e) {
                        var t = n.useRef(),
                            o = e.keytipProps
                                ? (0, i.pi)(
                                      {disabled: e.disabled},
                                      e.keytipProps
                                  )
                                : void 0,
                            r = (0, a.B)(c.K.getInstance()),
                            p = (0, s.D)(e);
                        (0, l.L)(function () {
                            t.current &&
                                o &&
                                ((null == p ? void 0 : p.keytipProps) !==
                                    e.keytipProps ||
                                    (null == p ? void 0 : p.disabled) !==
                                        e.disabled) &&
                                r.update(o, t.current);
                        }),
                            (0, l.L)(function () {
                                return (
                                    o && (t.current = r.register(o)),
                                    function () {
                                        o && r.unregister(o, t.current);
                                    }
                                );
                            }, []);
                        var m = {ariaDescribedBy: void 0, keytipId: void 0};
                        return (
                            o &&
                                (m = (function (e, t, o) {
                                    var r = e.addParentOverflow(t),
                                        n = (0, d.I)(
                                            o,
                                            (0, u.w7)(r.keySequences)
                                        ),
                                        a = (0, i.ev)([], r.keySequences, !0);
                                    return (
                                        r.overflowSetSequence &&
                                            (a = (0, u.a1)(
                                                a,
                                                r.overflowSetSequence
                                            )),
                                        {
                                            ariaDescribedBy: n,
                                            keytipId: (0, u.aB)(a),
                                        }
                                    );
                                })(r, o, e.ariaDescribedBy)),
                            m
                        );
                    })((0, i._T)(e, ['children'])),
                    m = p.keytipId,
                    h = p.ariaDescribedBy;
                return o(
                    (((t = {})[r.fV] = m),
                    (t[r.ms] = m),
                    (t['aria-describedby'] = h),
                    t)
                );
            };
        },
        11839: (e, t, o) => {
            o.d(t, {_: () => c});
            var i = o(98621),
                r = o(96583),
                n = o(65812),
                a = o(48782),
                s = (0, o(11599).y)({cacheSize: 100}),
                l = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        (0, r.ZT)(t, e),
                        (t.prototype.render = function () {
                            var e = this.props,
                                t = e.as,
                                o = void 0 === t ? 'label' : t,
                                i = e.children,
                                l = e.className,
                                d = e.disabled,
                                c = e.styles,
                                u = e.required,
                                p = e.theme,
                                m = s(c, {
                                    className: l,
                                    disabled: d,
                                    required: u,
                                    theme: p,
                                });
                            return n.createElement(
                                o,
                                (0, r.pi)({}, (0, a.pq)(this.props, a.n7), {
                                    className: m.root,
                                }),
                                i
                            );
                        }),
                        t
                    );
                })(n.Component),
                d = o(85446),
                c = (0, i.z)(
                    l,
                    function (e) {
                        var t,
                            o = e.theme,
                            i = e.className,
                            n = e.disabled,
                            a = e.required,
                            s = o.semanticColors,
                            l = d.lq.semibold,
                            c = s.bodyText,
                            u = s.disabledBodyText,
                            p = s.errorText;
                        return {
                            root: [
                                'ms-Label',
                                o.fonts.medium,
                                {
                                    fontWeight: l,
                                    color: c,
                                    boxSizing: 'border-box',
                                    boxShadow: 'none',
                                    margin: 0,
                                    display: 'block',
                                    padding: '5px 0',
                                    wordWrap: 'break-word',
                                    overflowWrap: 'break-word',
                                },
                                n && {
                                    color: u,
                                    selectors:
                                        ((t = {}),
                                        (t[d.qJ] = (0, r.pi)(
                                            {color: 'GrayText'},
                                            (0, d.xM)()
                                        )),
                                        t),
                                },
                                a && {
                                    selectors: {
                                        '::after': {
                                            content: "' *'",
                                            color: p,
                                            paddingRight: 12,
                                        },
                                    },
                                },
                                i,
                            ],
                        };
                    },
                    void 0,
                    {scope: 'Label'}
                );
        },
        18200: (e, t, o) => {
            o.d(t, {m: () => F});
            var i,
                r = o(98621),
                n = o(96583),
                a = o(20771),
                s = o(65812),
                l = o(54587),
                d = o(40037),
                c = o(11599),
                u = o(98289),
                p = o(66430),
                m = o(62032),
                h = o(24413),
                v = o(46337),
                f = o(39259),
                g = o(99976),
                b = {},
                y = {},
                x = 'fluent-default-layer-host',
                C = '#'.concat(x),
                _ = o(267),
                k = o(6906),
                w = (0, c.y)(),
                N = s.forwardRef(function (e, t) {
                    var o = (0, a.G)(),
                        r = s.useRef(null),
                        c = (0, _.r)(r, t),
                        N = s.useRef(),
                        S = s.useRef(null),
                        E = s.useContext(p.uK),
                        F = s.useState(!1),
                        B = F[0],
                        I = F[1],
                        L = s.useCallback(
                            function (e) {
                                var t,
                                    o =
                                        !!(null ==
                                        (t = null == E ? void 0 : E.providerRef)
                                            ? void 0
                                            : t.current) &&
                                        t.current.classList.contains(u.G$);
                                e && o && e.classList.add(u.G$);
                            },
                            [E]
                        ),
                        R = e.children,
                        P = e.className,
                        O = e.eventBubblingEnabled,
                        D = e.fabricProps,
                        M = e.hostId,
                        V = e.insertFirst,
                        H = e.onLayerDidMount,
                        q = void 0 === H ? function () {} : H,
                        A = e.onLayerMounted,
                        z = void 0 === A ? function () {} : A,
                        G = e.onLayerWillUnmount,
                        J = e.styles,
                        W = e.theme,
                        j = (0, _.r)(S, null == D ? void 0 : D.ref, L),
                        U = w(J, {theme: W, className: P, isNotHost: !M}),
                        Z = function () {
                            null == G || G();
                            var e = N.current;
                            (N.current = void 0),
                                e &&
                                    e.parentNode &&
                                    e.parentNode.removeChild(e);
                        },
                        K = function () {
                            var e,
                                t = (0, m.M)(r.current);
                            if (t) {
                                var o = (function (e) {
                                    var t, o;
                                    if (M) {
                                        var i = (function (e) {
                                            var t = y[e];
                                            return (t && t[0]) || void 0;
                                        })(M);
                                        return i
                                            ? null !==
                                                  (t = i.rootRef.current) &&
                                              void 0 !== t
                                                ? t
                                                : null
                                            : null !==
                                                    (o = e.getElementById(M)) &&
                                                void 0 !== o
                                              ? o
                                              : null;
                                    }
                                    var r = C,
                                        n = r ? e.querySelector(r) : null;
                                    return (
                                        n ||
                                            (n = (function (e) {
                                                var t = e.createElement('div');
                                                return (
                                                    t.setAttribute('id', x),
                                                    (t.style.cssText =
                                                        'position:fixed;z-index:1000000'),
                                                    null == e ||
                                                        e.body.appendChild(t),
                                                    t
                                                );
                                            })(e)),
                                        n
                                    );
                                })(t);
                                if (o) {
                                    Z();
                                    var i = (
                                        null !== (e = o.ownerDocument) &&
                                        void 0 !== e
                                            ? e
                                            : t
                                    ).createElement('div');
                                    (i.className = U.root),
                                        (0, h.U)(i),
                                        (0, v.N)(i, r.current),
                                        V
                                            ? o.insertBefore(i, o.firstChild)
                                            : o.appendChild(i),
                                        (N.current = i),
                                        I(!0);
                                }
                            }
                        };
                    return (
                        (0, k.L)(
                            function () {
                                K(),
                                    M &&
                                        (function (e, t) {
                                            b[e] || (b[e] = []), b[e].push(t);
                                            var o = y[e];
                                            if (o)
                                                for (
                                                    var i = 0, r = o;
                                                    i < r.length;
                                                    i++
                                                )
                                                    r[i].notifyLayersChanged();
                                        })(M, K);
                                var e = N.current ? o(N.current) : void 0;
                                return function () {
                                    e && e(),
                                        Z(),
                                        M &&
                                            (function (e, t) {
                                                var o = b[e];
                                                if (o) {
                                                    var i = o.indexOf(t);
                                                    i >= 0 &&
                                                        (o.splice(i, 1),
                                                        0 === o.length &&
                                                            delete b[e]);
                                                }
                                                var r = y[e];
                                                if (r)
                                                    for (
                                                        var n = 0, a = r;
                                                        n < a.length;
                                                        n++
                                                    )
                                                        a[
                                                            n
                                                        ].notifyLayersChanged();
                                            })(M, K);
                                };
                            },
                            [M]
                        ),
                        s.useEffect(
                            function () {
                                N.current &&
                                    B &&
                                    (null == z || z(), null == q || q(), I(!1));
                            },
                            [B, z, q]
                        ),
                        s.createElement(
                            'span',
                            {className: 'ms-layer', ref: c},
                            N.current &&
                                l.createPortal(
                                    s.createElement(
                                        f.Y,
                                        {layerRoot: !0, providerRef: j},
                                        s.createElement(
                                            d.P,
                                            (0, n.pi)(
                                                {},
                                                !O &&
                                                    (i ||
                                                        ((i = {}),
                                                        [
                                                            'onClick',
                                                            'onContextMenu',
                                                            'onDoubleClick',
                                                            'onDrag',
                                                            'onDragEnd',
                                                            'onDragEnter',
                                                            'onDragExit',
                                                            'onDragLeave',
                                                            'onDragOver',
                                                            'onDragStart',
                                                            'onDrop',
                                                            'onMouseDown',
                                                            'onMouseEnter',
                                                            'onMouseLeave',
                                                            'onMouseMove',
                                                            'onMouseOver',
                                                            'onMouseOut',
                                                            'onMouseUp',
                                                            'onTouchMove',
                                                            'onTouchStart',
                                                            'onTouchCancel',
                                                            'onTouchEnd',
                                                            'onKeyDown',
                                                            'onKeyPress',
                                                            'onKeyUp',
                                                            'onFocus',
                                                            'onBlur',
                                                            'onChange',
                                                            'onInput',
                                                            'onInvalid',
                                                            'onSubmit',
                                                        ].forEach(function (e) {
                                                            return (i[e] = T);
                                                        })),
                                                    i),
                                                D,
                                                {
                                                    className: (0, g.i)(
                                                        U.content,
                                                        null == D
                                                            ? void 0
                                                            : D.className
                                                    ),
                                                    ref: j,
                                                }
                                            ),
                                            R
                                        )
                                    ),
                                    N.current
                                )
                        )
                    );
                });
            N.displayName = 'LayerBase';
            var T = function (e) {
                    e.eventPhase === Event.BUBBLING_PHASE &&
                        'mouseenter' !== e.type &&
                        'mouseleave' !== e.type &&
                        'touchstart' !== e.type &&
                        'touchend' !== e.type &&
                        e.stopPropagation();
                },
                S = o(85446),
                E = {
                    root: 'ms-Layer',
                    rootNoHost: 'ms-Layer--fixed',
                    content: 'ms-Layer-content',
                },
                F = (0, r.z)(
                    N,
                    function (e) {
                        var t = e.className,
                            o = e.isNotHost,
                            i = e.theme,
                            r = (0, S.Cn)(E, i);
                        return {
                            root: [
                                r.root,
                                i.fonts.medium,
                                o && [
                                    r.rootNoHost,
                                    {
                                        position: 'fixed',
                                        zIndex: S.bR.Layer,
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                        visibility: 'hidden',
                                    },
                                ],
                                t,
                            ],
                            content: [r.content, {visibility: 'visible'}],
                        };
                    },
                    void 0,
                    {scope: 'Layer', fields: ['hostId', 'theme', 'styles']}
                );
        },
        82672: (e, t, o) => {
            o.d(t, {s: () => U});
            var i,
                r = o(98621),
                n = o(96583),
                a = o(65812),
                s = o(83016),
                l = o(18200),
                d = o(11599),
                c = o(96208),
                u = o(94863),
                p = o(48782),
                m = (0, d.y)(),
                h = (function (e) {
                    function t(t) {
                        var o = e.call(this, t) || this;
                        (0, c.l)(o);
                        var i = o.props.allowTouchBodyScroll,
                            r = void 0 !== i && i;
                        return (o._allowTouchBodyScroll = r), o;
                    }
                    return (
                        (0, n.ZT)(t, e),
                        (t.prototype.componentDidMount = function () {
                            !this._allowTouchBodyScroll && (0, u.Qp)();
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            !this._allowTouchBodyScroll && (0, u.tG)();
                        }),
                        (t.prototype.render = function () {
                            var e = this.props,
                                t = e.isDarkThemed,
                                o = e.className,
                                i = e.theme,
                                r = e.styles,
                                s = (0, p.pq)(this.props, p.n7),
                                l = m(r, {theme: i, className: o, isDark: t});
                            return a.createElement(
                                'div',
                                (0, n.pi)({}, s, {className: l.root})
                            );
                        }),
                        t
                    );
                })(a.Component),
                v = o(85446),
                f = {root: 'ms-Overlay', rootDark: 'ms-Overlay--dark'},
                g = (0, r.z)(
                    h,
                    function (e) {
                        var t,
                            o = e.className,
                            i = e.theme,
                            r = e.isNone,
                            n = e.isDark,
                            a = i.palette,
                            s = (0, v.Cn)(f, i);
                        return {
                            root: [
                                s.root,
                                i.fonts.medium,
                                {
                                    backgroundColor: a.whiteTranslucent40,
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    position: 'absolute',
                                    selectors:
                                        ((t = {}),
                                        (t[v.qJ] = {
                                            border: '1px solid WindowText',
                                            opacity: 0,
                                        }),
                                        t),
                                },
                                r && {visibility: 'hidden'},
                                n && [
                                    s.rootDark,
                                    {backgroundColor: a.blackTranslucent40},
                                ],
                                o,
                            ],
                        };
                    },
                    void 0,
                    {scope: 'Overlay'}
                ),
                b = o(3135),
                y = o(99976),
                x = o(2463),
                C = o(83510),
                _ = o(33010),
                k = o(60702),
                w = o(33749),
                N = o(44557),
                T = o(59384);
            !(function (e) {
                (e[(e.smallFluid = 0)] = 'smallFluid'),
                    (e[(e.smallFixedFar = 1)] = 'smallFixedFar'),
                    (e[(e.smallFixedNear = 2)] = 'smallFixedNear'),
                    (e[(e.medium = 3)] = 'medium'),
                    (e[(e.large = 4)] = 'large'),
                    (e[(e.largeFixed = 5)] = 'largeFixed'),
                    (e[(e.extraLarge = 6)] = 'extraLarge'),
                    (e[(e.custom = 7)] = 'custom'),
                    (e[(e.customNear = 8)] = 'customNear');
            })(i || (i = {}));
            var S,
                E = o(63442),
                F = o(81262),
                B = (0, d.y)(),
                I = 'Panel';
            !(function (e) {
                (e[(e.closed = 0)] = 'closed'),
                    (e[(e.animatingOpen = 1)] = 'animatingOpen'),
                    (e[(e.open = 2)] = 'open'),
                    (e[(e.animatingClosed = 3)] = 'animatingClosed');
            })(S || (S = {}));
            var L,
                R,
                P,
                O,
                D,
                M = (function (e) {
                    function t(t) {
                        var o = e.call(this, t) || this;
                        (o._panel = a.createRef()),
                            (o._animationCallback = null),
                            (o._hasCustomNavigation = !(
                                !o.props.onRenderNavigation &&
                                !o.props.onRenderNavigationContent
                            )),
                            (o.dismiss = function (e) {
                                o.props.onDismiss &&
                                    o.isActive &&
                                    o.props.onDismiss(e),
                                    (!e || (e && !e.defaultPrevented)) &&
                                        o.close();
                            }),
                            (o._allowScrollOnPanel = function (e) {
                                e
                                    ? o._allowTouchBodyScroll
                                        ? (0, u.eC)(e, o._events)
                                        : (0, u.C7)(e, o._events)
                                    : o._events.off(o._scrollableContent),
                                    (o._scrollableContent = e);
                            }),
                            (o._onRenderNavigation = function (e) {
                                if (
                                    !o.props.onRenderNavigationContent &&
                                    !o.props.onRenderNavigation &&
                                    !o.props.hasCloseButton
                                )
                                    return null;
                                var t = o.props.onRenderNavigationContent,
                                    i =
                                        void 0 === t
                                            ? o._onRenderNavigationContent
                                            : t;
                                return a.createElement(
                                    'div',
                                    {className: o._classNames.navigation},
                                    i(e, o._onRenderNavigationContent)
                                );
                            }),
                            (o._onRenderNavigationContent = function (e) {
                                var t,
                                    i = e.closeButtonAriaLabel,
                                    r = e.hasCloseButton,
                                    n = e.onRenderHeader,
                                    l = void 0 === n ? o._onRenderHeader : n;
                                if (r) {
                                    var d =
                                        null ===
                                            (t =
                                                o._classNames
                                                    .subComponentStyles) ||
                                        void 0 === t
                                            ? void 0
                                            : t.closeButton();
                                    return a.createElement(
                                        a.Fragment,
                                        null,
                                        !o._hasCustomNavigation &&
                                            l(
                                                o.props,
                                                o._onRenderHeader,
                                                o._headerTextId
                                            ),
                                        a.createElement(s.h, {
                                            styles: d,
                                            className:
                                                o._classNames.closeButton,
                                            onClick: o._onPanelClick,
                                            ariaLabel: i,
                                            title: i,
                                            'data-is-visible': !0,
                                            iconProps: {iconName: 'Cancel'},
                                        })
                                    );
                                }
                                return null;
                            }),
                            (o._onRenderHeader = function (e, t, i) {
                                var r = e.headerText,
                                    s = e.headerTextProps,
                                    l = void 0 === s ? {} : s;
                                return r
                                    ? a.createElement(
                                          'div',
                                          {className: o._classNames.header},
                                          a.createElement(
                                              'div',
                                              (0, n.pi)(
                                                  {
                                                      id: i,
                                                      role: 'heading',
                                                      'aria-level': 1,
                                                  },
                                                  l,
                                                  {
                                                      className: (0, y.i)(
                                                          o._classNames
                                                              .headerText,
                                                          l.className
                                                      ),
                                                  }
                                              ),
                                              r
                                          )
                                      )
                                    : null;
                            }),
                            (o._onRenderBody = function (e) {
                                return a.createElement(
                                    'div',
                                    {className: o._classNames.content},
                                    e.children
                                );
                            }),
                            (o._onRenderFooter = function (e) {
                                var t = o.props.onRenderFooterContent,
                                    i = void 0 === t ? null : t;
                                return i
                                    ? a.createElement(
                                          'div',
                                          {className: o._classNames.footer},
                                          a.createElement(
                                              'div',
                                              {
                                                  className:
                                                      o._classNames.footerInner,
                                              },
                                              i()
                                          )
                                      )
                                    : null;
                            }),
                            (o._animateTo = function (e) {
                                e === S.open &&
                                    o.props.onOpen &&
                                    o.props.onOpen(),
                                    (o._animationCallback = o._async.setTimeout(
                                        function () {
                                            o.setState({visibility: e}),
                                                o._onTransitionComplete(e);
                                        },
                                        200
                                    ));
                            }),
                            (o._clearExistingAnimationTimer = function () {
                                null !== o._animationCallback &&
                                    o._async.clearTimeout(o._animationCallback);
                            }),
                            (o._onPanelClick = function (e) {
                                o.dismiss(e);
                            }),
                            (o._onTransitionComplete = function (e) {
                                o._updateFooterPosition(),
                                    e === S.open &&
                                        o.props.onOpened &&
                                        o.props.onOpened(),
                                    e === S.closed &&
                                        o.props.onDismissed &&
                                        o.props.onDismissed();
                            });
                        var i = o.props.allowTouchBodyScroll,
                            r = void 0 !== i && i;
                        return (
                            (o._allowTouchBodyScroll = r),
                            (0, c.l)(o),
                            (0, x.b)(I, t, {
                                ignoreExternalFocusing: 'focusTrapZoneProps',
                                forceFocusInsideTrap: 'focusTrapZoneProps',
                                firstFocusableSelector: 'focusTrapZoneProps',
                            }),
                            (o.state = {
                                isFooterSticky: !1,
                                visibility: S.closed,
                                id: (0, C.z)('Panel'),
                            }),
                            o
                        );
                    }
                    return (
                        (0, n.ZT)(t, e),
                        (t.getDerivedStateFromProps = function (e, t) {
                            return void 0 === e.isOpen
                                ? null
                                : !e.isOpen ||
                                    (t.visibility !== S.closed &&
                                        t.visibility !== S.animatingClosed)
                                  ? e.isOpen ||
                                    (t.visibility !== S.open &&
                                        t.visibility !== S.animatingOpen)
                                      ? null
                                      : {visibility: S.animatingClosed}
                                  : {visibility: S.animatingOpen};
                        }),
                        (t.prototype.componentDidMount = function () {
                            (this._async = new _.e(this)),
                                (this._events = new k.r(this));
                            var e = (0, F.hX)(this.context),
                                t = (0, F.NA)(this.context);
                            this._events.on(
                                e,
                                'resize',
                                this._updateFooterPosition
                            ),
                                this._shouldListenForOuterClick(this.props) &&
                                    this._events.on(
                                        null == t ? void 0 : t.body,
                                        'mousedown',
                                        this._dismissOnOuterClick,
                                        !0
                                    ),
                                this.props.isOpen &&
                                    this.setState({
                                        visibility: S.animatingOpen,
                                    });
                        }),
                        (t.prototype.componentDidUpdate = function (e, t) {
                            var o = this._shouldListenForOuterClick(this.props),
                                i = this._shouldListenForOuterClick(e);
                            this.state.visibility !== t.visibility &&
                                (this._clearExistingAnimationTimer(),
                                this.state.visibility === S.animatingOpen
                                    ? this._animateTo(S.open)
                                    : this.state.visibility ===
                                          S.animatingClosed &&
                                      this._animateTo(S.closed));
                            var r = (0, F.NA)(this.context);
                            o && !i
                                ? this._events.on(
                                      null == r ? void 0 : r.body,
                                      'mousedown',
                                      this._dismissOnOuterClick,
                                      !0
                                  )
                                : !o &&
                                  i &&
                                  this._events.off(
                                      null == r ? void 0 : r.body,
                                      'mousedown',
                                      this._dismissOnOuterClick,
                                      !0
                                  );
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            this._async.dispose(), this._events.dispose();
                        }),
                        (t.prototype.render = function () {
                            var e = this.props,
                                t = e.className,
                                o = void 0 === t ? '' : t,
                                r = e.elementToFocusOnDismiss,
                                s = e.firstFocusableSelector,
                                d = e.focusTrapZoneProps,
                                c = e.forceFocusInsideTrap,
                                u = e.hasCloseButton,
                                m = e.headerText,
                                h = e.headerClassName,
                                v = void 0 === h ? '' : h,
                                f = e.ignoreExternalFocusing,
                                y = e.isBlocking,
                                x = e.isFooterAtBottom,
                                C = e.isLightDismiss,
                                _ = e.isHiddenOnDismiss,
                                k = e.layerProps,
                                N = e.overlayProps,
                                E = e.popupProps,
                                F = e.type,
                                I = e.styles,
                                L = e.theme,
                                R = e.customWidth,
                                P = e.onLightDismissClick,
                                O = void 0 === P ? this._onPanelClick : P,
                                D = e.onRenderNavigation,
                                M = void 0 === D ? this._onRenderNavigation : D,
                                V = e.onRenderHeader,
                                H = void 0 === V ? this._onRenderHeader : V,
                                q = e.onRenderBody,
                                A = void 0 === q ? this._onRenderBody : q,
                                z = e.onRenderFooter,
                                G = void 0 === z ? this._onRenderFooter : z,
                                J = this.state,
                                W = J.isFooterSticky,
                                j = J.visibility,
                                U = J.id,
                                Z =
                                    F === i.smallFixedNear ||
                                    F === i.customNear,
                                K = (0, w.zg)(L) ? Z : !Z,
                                Y =
                                    F === i.custom || F === i.customNear
                                        ? {width: R}
                                        : {},
                                Q = (0, p.pq)(this.props, p.n7),
                                X = this.isActive,
                                $ =
                                    j === S.animatingClosed ||
                                    j === S.animatingOpen;
                            if (
                                ((this._headerTextId = m && U + '-headerText'),
                                !X && !$ && !_)
                            )
                                return null;
                            this._classNames = B(I, {
                                theme: L,
                                className: o,
                                focusTrapZoneClassName: d
                                    ? d.className
                                    : void 0,
                                hasCloseButton: u,
                                headerClassName: v,
                                isAnimating: $,
                                isFooterSticky: W,
                                isFooterAtBottom: x,
                                isOnRightSide: K,
                                isOpen: X,
                                isHiddenOnDismiss: _,
                                type: F,
                                hasCustomNavigation: this._hasCustomNavigation,
                            });
                            var ee,
                                te = this._classNames,
                                oe = this._allowTouchBodyScroll;
                            return (
                                y &&
                                    X &&
                                    (ee = a.createElement(
                                        g,
                                        (0, n.pi)(
                                            {
                                                className: te.overlay,
                                                isDarkThemed: !1,
                                                onClick: C ? O : void 0,
                                                allowTouchBodyScroll: oe,
                                            },
                                            N
                                        )
                                    )),
                                a.createElement(
                                    l.m,
                                    (0, n.pi)({}, k),
                                    a.createElement(
                                        b.G,
                                        (0, n.pi)(
                                            {
                                                role: 'dialog',
                                                'aria-modal': y
                                                    ? 'true'
                                                    : void 0,
                                                ariaLabelledBy: this
                                                    ._headerTextId
                                                    ? this._headerTextId
                                                    : void 0,
                                                onDismiss: this.dismiss,
                                                className: te.hiddenPanel,
                                                enableAriaHiddenSiblings: !!X,
                                            },
                                            E
                                        ),
                                        a.createElement(
                                            'div',
                                            (0, n.pi)(
                                                {'aria-hidden': !X && $},
                                                Q,
                                                {
                                                    ref: this._panel,
                                                    className: te.root,
                                                }
                                            ),
                                            ee,
                                            a.createElement(
                                                T.P,
                                                (0, n.pi)(
                                                    {
                                                        ignoreExternalFocusing:
                                                            f,
                                                        forceFocusInsideTrap:
                                                            !(
                                                                !y ||
                                                                (_ && !X)
                                                            ) && c,
                                                        firstFocusableSelector:
                                                            s,
                                                        isClickableOutsideFocusTrap:
                                                            !0,
                                                    },
                                                    d,
                                                    {
                                                        className: te.main,
                                                        style: Y,
                                                        elementToFocusOnDismiss:
                                                            r,
                                                    }
                                                ),
                                                a.createElement(
                                                    'div',
                                                    {
                                                        className:
                                                            te.contentInner,
                                                    },
                                                    a.createElement(
                                                        'div',
                                                        {
                                                            ref: this
                                                                ._allowScrollOnPanel,
                                                            className:
                                                                te.scrollableContent,
                                                            'data-is-scrollable':
                                                                !0,
                                                        },
                                                        a.createElement(
                                                            'div',
                                                            {
                                                                className:
                                                                    te.commands,
                                                                'data-is-visible':
                                                                    !0,
                                                            },
                                                            M(
                                                                this.props,
                                                                this
                                                                    ._onRenderNavigation
                                                            )
                                                        ),
                                                        (this
                                                            ._hasCustomNavigation ||
                                                            !u) &&
                                                            H(
                                                                this.props,
                                                                this
                                                                    ._onRenderHeader,
                                                                this
                                                                    ._headerTextId
                                                            ),
                                                        A(
                                                            this.props,
                                                            this._onRenderBody
                                                        ),
                                                        G(
                                                            this.props,
                                                            this._onRenderFooter
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            );
                        }),
                        (t.prototype.open = function () {
                            void 0 === this.props.isOpen &&
                                (this.isActive ||
                                    this.setState({
                                        visibility: S.animatingOpen,
                                    }));
                        }),
                        (t.prototype.close = function () {
                            void 0 === this.props.isOpen &&
                                this.isActive &&
                                this.setState({visibility: S.animatingClosed});
                        }),
                        Object.defineProperty(t.prototype, 'isActive', {
                            get: function () {
                                return (
                                    this.state.visibility === S.open ||
                                    this.state.visibility === S.animatingOpen
                                );
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype._shouldListenForOuterClick = function (e) {
                            return !!e.isBlocking && !!e.isOpen;
                        }),
                        (t.prototype._updateFooterPosition = function () {
                            var e = this._scrollableContent;
                            if (e) {
                                var t = e.clientHeight,
                                    o = e.scrollHeight;
                                this.setState({isFooterSticky: t < o});
                            }
                        }),
                        (t.prototype._dismissOnOuterClick = function (e) {
                            var t = this._panel.current;
                            this.isActive &&
                                t &&
                                !e.defaultPrevented &&
                                ((0, N.t)(t, e.target) ||
                                    (this.props.onOuterClick
                                        ? this.props.onOuterClick(e)
                                        : this.dismiss(e)));
                        }),
                        (t.defaultProps = {
                            isHiddenOnDismiss: !1,
                            isOpen: void 0,
                            isBlocking: !0,
                            hasCloseButton: !0,
                            type: i.smallFixedFar,
                        }),
                        (t.contextType = E.Hn),
                        t
                    );
                })(a.Component),
                V = {
                    root: 'ms-Panel',
                    main: 'ms-Panel-main',
                    commands: 'ms-Panel-commands',
                    contentInner: 'ms-Panel-contentInner',
                    scrollableContent: 'ms-Panel-scrollableContent',
                    navigation: 'ms-Panel-navigation',
                    closeButton: 'ms-Panel-closeButton ms-PanelAction-close',
                    header: 'ms-Panel-header',
                    headerText: 'ms-Panel-headerText',
                    content: 'ms-Panel-content',
                    footer: 'ms-Panel-footer',
                    footerInner: 'ms-Panel-footerInner',
                    isOpen: 'is-open',
                    hasCloseButton: 'ms-Panel--hasCloseButton',
                    smallFluid: 'ms-Panel--smFluid',
                    smallFixedNear: 'ms-Panel--smLeft',
                    smallFixedFar: 'ms-Panel--sm',
                    medium: 'ms-Panel--md',
                    large: 'ms-Panel--lg',
                    largeFixed: 'ms-Panel--fixed',
                    extraLarge: 'ms-Panel--xl',
                    custom: 'ms-Panel--custom',
                    customNear: 'ms-Panel--customLeft',
                },
                H = 'auto',
                q =
                    (((L = {})['@media (min-width: '.concat(v.dd, 'px)')] = {
                        width: 340,
                    }),
                    L),
                A =
                    (((R = {})['@media (min-width: '.concat(v.AV, 'px)')] = {
                        width: 592,
                    }),
                    (R['@media (min-width: '.concat(v.qv, 'px)')] = {
                        width: 644,
                    }),
                    R),
                z =
                    (((P = {})['@media (min-width: '.concat(v.bE, 'px)')] = {
                        left: 48,
                        width: 'auto',
                    }),
                    (P['@media (min-width: '.concat(v.B, 'px)')] = {left: 428}),
                    P),
                G =
                    (((O = {})['@media (min-width: '.concat(v.B, 'px)')] = {
                        left: H,
                        width: 940,
                    }),
                    O),
                J =
                    (((D = {})['@media (min-width: '.concat(v.B, 'px)')] = {
                        left: 176,
                    }),
                    D),
                W = function (e) {
                    var t;
                    switch (e) {
                        case i.smallFixedFar:
                            t = (0, n.pi)({}, q);
                            break;
                        case i.medium:
                            t = (0, n.pi)((0, n.pi)({}, q), A);
                            break;
                        case i.large:
                            t = (0, n.pi)((0, n.pi)((0, n.pi)({}, q), A), z);
                            break;
                        case i.largeFixed:
                            t = (0, n.pi)(
                                (0, n.pi)((0, n.pi)((0, n.pi)({}, q), A), z),
                                G
                            );
                            break;
                        case i.extraLarge:
                            t = (0, n.pi)(
                                (0, n.pi)((0, n.pi)((0, n.pi)({}, q), A), z),
                                J
                            );
                    }
                    return t;
                },
                j = {paddingLeft: '24px', paddingRight: '24px'},
                U = (0, r.z)(
                    M,
                    function (e) {
                        var t,
                            o,
                            r,
                            a,
                            s = e.className,
                            l = e.focusTrapZoneClassName,
                            d = e.hasCloseButton,
                            c = e.headerClassName,
                            u = e.isAnimating,
                            p = e.isFooterSticky,
                            m = e.isFooterAtBottom,
                            h = e.isOnRightSide,
                            f = e.isOpen,
                            g = e.isHiddenOnDismiss,
                            b = e.hasCustomNavigation,
                            y = e.theme,
                            x = e.type,
                            C = void 0 === x ? i.smallFixedFar : x,
                            _ = y.effects,
                            k = y.fonts,
                            w = y.semanticColors,
                            N = (0, v.Cn)(V, y),
                            T = C === i.custom || C === i.customNear;
                        return {
                            root: [
                                N.root,
                                y.fonts.medium,
                                f && N.isOpen,
                                d && N.hasCloseButton,
                                {
                                    pointerEvents: 'none',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                },
                                T && h && N.custom,
                                T && !h && N.customNear,
                                s,
                            ],
                            overlay: [
                                {pointerEvents: 'auto', cursor: 'pointer'},
                                f && u && v.k4.fadeIn100,
                                !f && u && v.k4.fadeOut100,
                            ],
                            hiddenPanel: [
                                !f && !u && g && {visibility: 'hidden'},
                            ],
                            main: [
                                N.main,
                                {
                                    backgroundColor: w.bodyBackground,
                                    boxShadow: _.elevation64,
                                    pointerEvents: 'auto',
                                    position: 'absolute',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    overflowX: 'hidden',
                                    overflowY: 'auto',
                                    WebkitOverflowScrolling: 'touch',
                                    bottom: 0,
                                    top: 0,
                                    left: H,
                                    right: 0,
                                    width: '100%',
                                    selectors: (0, n.pi)(
                                        ((t = {}),
                                        (t[v.qJ] = {
                                            borderLeft: '3px solid '.concat(
                                                w.variantBorder
                                            ),
                                            borderRight: '3px solid '.concat(
                                                w.variantBorder
                                            ),
                                        }),
                                        t),
                                        W(C)
                                    ),
                                },
                                C === i.smallFluid && {left: 0},
                                C === i.smallFixedNear && {
                                    left: 0,
                                    right: H,
                                    width: 272,
                                },
                                C === i.customNear && {right: 'auto', left: 0},
                                T && {maxWidth: '100vw'},
                                f && u && !h && v.k4.slideRightIn40,
                                f && u && h && v.k4.slideLeftIn40,
                                !f && u && !h && v.k4.slideLeftOut40,
                                !f && u && h && v.k4.slideRightOut40,
                                l,
                            ],
                            commands: [
                                N.commands,
                                {
                                    backgroundColor: w.bodyBackground,
                                    paddingTop: 18,
                                    selectors:
                                        ((o = {}),
                                        (o[
                                            '@media (min-height: '.concat(
                                                v.dd,
                                                'px)'
                                            )
                                        ] = {
                                            position: 'sticky',
                                            top: 0,
                                            zIndex: 1,
                                        }),
                                        o),
                                },
                                b && {paddingTop: 'inherit'},
                            ],
                            navigation: [
                                N.navigation,
                                {display: 'flex', justifyContent: 'flex-end'},
                                b && {height: '44px'},
                            ],
                            contentInner: [
                                N.contentInner,
                                {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexGrow: 1,
                                    overflowY: 'hidden',
                                },
                            ],
                            header: [
                                N.header,
                                j,
                                {alignSelf: 'flex-start'},
                                d && !b && {flexGrow: 1},
                                b && {flexShrink: 0},
                            ],
                            headerText: [
                                N.headerText,
                                k.xLarge,
                                {
                                    color: w.bodyText,
                                    lineHeight: '27px',
                                    overflowWrap: 'break-word',
                                    wordWrap: 'break-word',
                                    wordBreak: 'break-word',
                                    hyphens: 'auto',
                                },
                                c,
                            ],
                            scrollableContent: [
                                N.scrollableContent,
                                {overflowY: 'auto'},
                                m && {
                                    flexGrow: 1,
                                    display: 'inherit',
                                    flexDirection: 'inherit',
                                },
                            ],
                            content: [
                                N.content,
                                j,
                                {paddingBottom: 20},
                                m && {
                                    selectors:
                                        ((r = {}),
                                        (r[
                                            '@media (min-height: '.concat(
                                                v.dd,
                                                'px)'
                                            )
                                        ] = {flexGrow: 1}),
                                        r),
                                },
                            ],
                            footer: [
                                N.footer,
                                {
                                    flexShrink: 0,
                                    borderTop: '1px solid transparent',
                                    transition: 'opacity '
                                        .concat(v.D1.durationValue3, ' ')
                                        .concat(v.D1.easeFunction2),
                                    selectors:
                                        ((a = {}),
                                        (a[
                                            '@media (min-height: '.concat(
                                                v.dd,
                                                'px)'
                                            )
                                        ] = {position: 'sticky', bottom: 0}),
                                        a),
                                },
                                p && {
                                    backgroundColor: w.bodyBackground,
                                    borderTopColor: w.variantBorder,
                                },
                            ],
                            footerInner: [
                                N.footerInner,
                                j,
                                {paddingBottom: 16, paddingTop: 16},
                            ],
                            subComponentStyles: {
                                closeButton: {
                                    root: [
                                        N.closeButton,
                                        {
                                            marginRight: 14,
                                            color: y.palette.neutralSecondary,
                                            fontSize: v.ld.large,
                                        },
                                        b && {
                                            marginRight: 0,
                                            height: 'auto',
                                            width: '44px',
                                        },
                                    ],
                                    rootHovered: {
                                        color: y.palette.neutralPrimary,
                                    },
                                },
                            },
                        };
                    },
                    void 0,
                    {scope: 'Panel'}
                );
        },
        3135: (e, t, o) => {
            o.d(t, {G: () => g});
            var i = o(96583),
                r = o(65812),
                n = o(84346),
                a = o(62032),
                s = o(57957),
                l = o(39326),
                d = o(4061),
                c = o(28642),
                u = o(48782),
                p = o(56842),
                m = o(73298),
                h = o(267),
                v = o(63442);
            function f(e) {
                var t = e.originalElement,
                    o = e.containsFocus;
                t &&
                    o &&
                    t !== (0, n.J)() &&
                    setTimeout(function () {
                        var e;
                        null === (e = t.focus) || void 0 === e || e.call(t);
                    }, 0);
            }
            var g = r.forwardRef(function (e, t) {
                var o = (0, d.j)(
                        {shouldRestoreFocus: !0, enableAriaHiddenSiblings: !0},
                        e
                    ),
                    n = r.useRef(),
                    g = (0, h.r)(n, t);
                !(function (e, t) {
                    var o =
                        'true' === String(e['aria-modal']).toLowerCase() &&
                        e.enableAriaHiddenSiblings;
                    r.useEffect(
                        function () {
                            if (o && t.current) return (0, l.O)(t.current);
                        },
                        [t, o]
                    );
                })(o, n),
                    (function (e, t) {
                        var o = e.onRestoreFocus,
                            i = void 0 === o ? f : o,
                            n = r.useRef(),
                            l = r.useRef(!1);
                        r.useEffect(function () {
                            return (
                                (n.current = (0, a.M)().activeElement),
                                (0, s.WU)(t.current) && (l.current = !0),
                                function () {
                                    var e;
                                    null == i ||
                                        i({
                                            originalElement: n.current,
                                            containsFocus: l.current,
                                            documentContainsFocus:
                                                (null === (e = (0, a.M)()) ||
                                                void 0 === e
                                                    ? void 0
                                                    : e.hasFocus()) || !1,
                                        }),
                                        (n.current = void 0);
                                }
                            );
                        }, []),
                            (0, m.d)(
                                t,
                                'focus',
                                r.useCallback(function () {
                                    l.current = !0;
                                }, []),
                                !0
                            ),
                            (0, m.d)(
                                t,
                                'blur',
                                r.useCallback(function (e) {
                                    t.current &&
                                        e.relatedTarget &&
                                        !t.current.contains(e.relatedTarget) &&
                                        (l.current = !1);
                                }, []),
                                !0
                            );
                    })(o, n);
                var b = o.role,
                    y = o.className,
                    x = o.ariaLabel,
                    C = o.ariaLabelledBy,
                    _ = o.ariaDescribedBy,
                    k = o.style,
                    w = o.children,
                    N = o.onDismiss,
                    T = (function (e, t) {
                        var o = (0, p.r)(),
                            i = r.useState(!1),
                            n = i[0],
                            a = i[1];
                        return (
                            r.useEffect(function () {
                                return (
                                    o.requestAnimationFrame(function () {
                                        var o;
                                        if (!e.style || !e.style.overflowY) {
                                            var i = !1;
                                            if (
                                                t &&
                                                t.current &&
                                                (null === (o = t.current) ||
                                                void 0 === o
                                                    ? void 0
                                                    : o.firstElementChild)
                                            ) {
                                                var r = t.current.clientHeight,
                                                    s =
                                                        t.current
                                                            .firstElementChild
                                                            .clientHeight;
                                                r > 0 &&
                                                    s > r &&
                                                    (i = s - r > 1);
                                            }
                                            n !== i && a(i);
                                        }
                                    }),
                                    function () {
                                        return o.dispose();
                                    }
                                );
                            }),
                            n
                        );
                    })(o, n),
                    S = r.useCallback(
                        function (e) {
                            e.which === c.m.escape &&
                                N &&
                                (N(e), e.preventDefault(), e.stopPropagation());
                        },
                        [N]
                    ),
                    E = (0, v.zY)();
                return (
                    (0, m.d)(E, 'keydown', S),
                    r.createElement(
                        'div',
                        (0, i.pi)({ref: g}, (0, u.pq)(o, u.n7), {
                            className: y,
                            role: b,
                            'aria-label': x,
                            'aria-labelledby': C,
                            'aria-describedby': _,
                            onKeyDown: S,
                            style: (0, i.pi)(
                                {
                                    overflowY: T ? 'scroll' : void 0,
                                    outline: 'none',
                                },
                                k
                            ),
                        }),
                        w
                    )
                );
            });
            g.displayName = 'Popup';
        },
        82584: (e, t, o) => {
            o.d(t, {i: () => N});
            var i = o(98621),
                r = o(96583),
                n = o(65812),
                a = o(66430),
                s = o(11839),
                l = o(72513),
                d = o(71387),
                c = o(54008),
                u = o(36626),
                p = o(11599),
                m = o(33749),
                h = o(28642),
                v = o(14040),
                f = o(99976),
                g = o(48782),
                b = o(81262),
                y = (0, p.y)(),
                x = function (e) {
                    return function (t) {
                        var o;
                        return ((o = {})[e] = ''.concat(t, '%')), o;
                    };
                },
                C = function (e, t, o) {
                    return o === t ? 0 : ((e - t) / (o - t)) * 100;
                },
                _ = n.forwardRef(function (e, t) {
                    var o = (function (e, t) {
                        var o = e.step,
                            i = void 0 === o ? 1 : o,
                            a = e.className,
                            s = e.disabled,
                            p = void 0 !== s && s,
                            _ = e.label,
                            k = e.max,
                            w = void 0 === k ? 10 : k,
                            N = e.min,
                            T = void 0 === N ? 0 : N,
                            S = e.showValue,
                            E = void 0 === S || S,
                            F = e.buttonProps,
                            B = void 0 === F ? {} : F,
                            I = e.vertical,
                            L = void 0 !== I && I,
                            R = e.snapToStep,
                            P = e.valueFormat,
                            O = e.styles,
                            D = e.theme,
                            M = e.originFromZero,
                            V = e['aria-labelledby'],
                            H = e.ariaLabel,
                            q = void 0 === H ? e['aria-label'] : H,
                            A = e.ranged,
                            z = e.onChange,
                            G = e.onChanged,
                            J = n.useRef([]),
                            W = (0, l.L)(),
                            j = W.setTimeout,
                            U = W.clearTimeout,
                            Z = n.useRef(null),
                            K = (0, b.xw)(),
                            Y = (0, d.G)(
                                e.value,
                                e.defaultValue,
                                function (e, t) {
                                    return null == z
                                        ? void 0
                                        : z(
                                              t,
                                              A
                                                  ? [re.latestLowerValue, t]
                                                  : void 0,
                                              e
                                          );
                                }
                            ),
                            Q = Y[0],
                            X = Y[1],
                            $ = (0, d.G)(
                                e.lowerValue,
                                e.defaultLowerValue,
                                function (e, t) {
                                    return null == z
                                        ? void 0
                                        : z(
                                              re.latestValue,
                                              [t, re.latestValue],
                                              e
                                          );
                                }
                            ),
                            ee = $[0],
                            te = $[1],
                            oe = Math.max(T, Math.min(w, Q || 0)),
                            ie = Math.max(T, Math.min(oe, ee || 0)),
                            re = (0, c.B)({
                                onKeyDownTimer: -1,
                                isAdjustingLowerValue: !1,
                                latestValue: oe,
                                latestLowerValue: ie,
                            });
                        (re.latestValue = oe), (re.latestLowerValue = ie);
                        var ne = (0, u.M)(
                                'Slider',
                                e.id || (null == B ? void 0 : B.id)
                            ),
                            ae = y(O, {
                                className: a,
                                disabled: p,
                                vertical: L,
                                showTransitions: !R && !re.isBetweenSteps,
                                showValue: E,
                                ranged: A,
                                theme: D,
                            }),
                            se = (w - T) / i,
                            le = function () {
                                U(re.onKeyDownTimer), (re.onKeyDownTimer = -1);
                            },
                            de = function (e) {
                                le(),
                                    G &&
                                        (re.onKeyDownTimer = j(function () {
                                            G(
                                                e,
                                                re.latestValue,
                                                A
                                                    ? [
                                                          re.latestLowerValue,
                                                          re.latestValue,
                                                      ]
                                                    : void 0
                                            );
                                        }, 1e3));
                            },
                            ce = function (t) {
                                var o = e.ariaValueText;
                                if (void 0 !== t)
                                    return o ? o(t) : t.toString();
                            },
                            ue = function (e, t, o) {
                                (t = Math.min(w, Math.max(T, t))),
                                    (o =
                                        void 0 !== o
                                            ? Math.min(w, Math.max(T, o))
                                            : void 0);
                                var r = 0;
                                if (isFinite(i))
                                    for (
                                        ;
                                        Math.round(i * Math.pow(10, r)) /
                                            Math.pow(10, r) !==
                                        i;

                                    )
                                        r++;
                                var n = parseFloat(t.toFixed(r));
                                (re.isBetweenSteps = void 0 !== o && o !== n),
                                    A
                                        ? re.isAdjustingLowerValue &&
                                          (M ? n <= 0 : n <= re.latestValue)
                                            ? te(n, e)
                                            : !re.isAdjustingLowerValue &&
                                              (M
                                                  ? n >= 0
                                                  : n >= re.latestLowerValue) &&
                                              X(n, e)
                                        : X(n, e);
                            },
                            pe = function (e, t) {
                                var o = 0;
                                switch (e.type) {
                                    case 'mousedown':
                                    case 'mousemove':
                                        o = t ? e.clientY : e.clientX;
                                        break;
                                    case 'touchstart':
                                    case 'touchmove':
                                        o = t
                                            ? e.touches[0].clientY
                                            : e.touches[0].clientX;
                                }
                                return o;
                            },
                            me = function (t) {
                                var o,
                                    i = Z.current.getBoundingClientRect(),
                                    r = (e.vertical ? i.height : i.width) / se;
                                if (e.vertical) {
                                    var n = pe(t, e.vertical);
                                    o = (i.bottom - n) / r;
                                } else {
                                    var a = pe(t, e.vertical);
                                    o =
                                        ((0, m.zg)(e.theme)
                                            ? i.right - a
                                            : a - i.left) / r;
                                }
                                return o;
                            },
                            he = function (e, t) {
                                var o = me(e),
                                    r = T + i * o,
                                    n = T + i * Math.round(o);
                                ue(e, n, r),
                                    t ||
                                        (e.preventDefault(),
                                        e.stopPropagation());
                            },
                            ve = function (e) {
                                if (A) {
                                    var t = me(e),
                                        o = T + i * t;
                                    re.isAdjustingLowerValue =
                                        o <= re.latestLowerValue ||
                                        o - re.latestLowerValue <=
                                            re.latestValue - o;
                                }
                                'mousedown' === e.type
                                    ? J.current.push(
                                          (0, v.on)(K, 'mousemove', he, !0),
                                          (0, v.on)(K, 'mouseup', fe, !0)
                                      )
                                    : 'touchstart' === e.type &&
                                      J.current.push(
                                          (0, v.on)(K, 'touchmove', he, !0),
                                          (0, v.on)(K, 'touchend', fe, !0)
                                      ),
                                    he(e, !0);
                            },
                            fe = function (e) {
                                (re.isBetweenSteps = void 0),
                                    null == G ||
                                        G(
                                            e,
                                            re.latestValue,
                                            A
                                                ? [
                                                      re.latestLowerValue,
                                                      re.latestValue,
                                                  ]
                                                : void 0
                                        ),
                                    ge();
                            },
                            ge = n.useCallback(function () {
                                J.current.forEach(function (e) {
                                    return e();
                                }),
                                    (J.current = []);
                            }, []);
                        n.useEffect(
                            function () {
                                return ge;
                            },
                            [ge]
                        );
                        var be = n.useRef(null),
                            ye = n.useRef(null),
                            xe = n.useRef(null);
                        !(function (e, t, o, i) {
                            n.useImperativeHandle(
                                e.componentRef,
                                function () {
                                    return {
                                        get value() {
                                            return o;
                                        },
                                        get range() {
                                            return i;
                                        },
                                        focus: function () {
                                            var e;
                                            null === (e = t.current) ||
                                                void 0 === e ||
                                                e.focus();
                                        },
                                    };
                                },
                                [i, t, o]
                            );
                        })(e, xe, oe, A ? [ie, oe] : void 0);
                        var Ce = x(
                                L
                                    ? 'bottom'
                                    : (0, m.zg)(e.theme)
                                      ? 'right'
                                      : 'left'
                            ),
                            _e = x(L ? 'height' : 'width'),
                            ke = M ? 0 : T,
                            we = C(oe, T, w),
                            Ne = C(ie, T, w),
                            Te = C(ke, T, w),
                            Se = A ? we - Ne : Math.abs(Te - we),
                            Ee = Math.min(100 - we, 100 - Te),
                            Fe = A ? Ne : Math.min(we, Te),
                            Be = {className: ae.root, ref: t},
                            Ie = {
                                className: ae.titleLabel,
                                children: _,
                                disabled: p,
                                htmlFor: q ? void 0 : ne,
                            },
                            Le = E
                                ? {
                                      className: ae.valueLabel,
                                      children: P ? P(oe) : oe,
                                      disabled: p,
                                      htmlFor: p ? ne : void 0,
                                  }
                                : void 0,
                            Re =
                                A && E
                                    ? {
                                          className: ae.valueLabel,
                                          children: P ? P(ie) : ie,
                                          disabled: p,
                                      }
                                    : void 0,
                            Pe = M
                                ? {className: ae.zeroTick, style: Ce(Te)}
                                : void 0,
                            Oe = {
                                className: (0, f.i)(
                                    ae.lineContainer,
                                    ae.activeSection
                                ),
                                style: _e(Se),
                            },
                            De = {
                                className: (0, f.i)(
                                    ae.lineContainer,
                                    ae.inactiveSection
                                ),
                                style: _e(Ee),
                            },
                            Me = {
                                className: (0, f.i)(
                                    ae.lineContainer,
                                    ae.inactiveSection
                                ),
                                style: _e(Fe),
                            },
                            Ve = (0, r.pi)(
                                {
                                    'aria-disabled': p,
                                    role: 'slider',
                                    tabIndex: p ? void 0 : 0,
                                },
                                {'data-is-focusable': !p}
                            ),
                            He = (0, r.pi)(
                                (0, r.pi)(
                                    (0, r.pi)(
                                        {
                                            id: ne,
                                            className: (0, f.i)(
                                                ae.slideBox,
                                                B.className
                                            ),
                                            ref: xe,
                                        },
                                        !p && {
                                            onMouseDown: ve,
                                            onTouchStart: ve,
                                            onKeyDown: function (t) {
                                                var o = re.isAdjustingLowerValue
                                                        ? re.latestLowerValue
                                                        : re.latestValue,
                                                    r = 0;
                                                switch (t.which) {
                                                    case (0, m.dP)(
                                                        h.m.left,
                                                        e.theme
                                                    ):
                                                    case h.m.down:
                                                        (r = -i), le(), de(t);
                                                        break;
                                                    case (0, m.dP)(
                                                        h.m.right,
                                                        e.theme
                                                    ):
                                                    case h.m.up:
                                                        (r = i), le(), de(t);
                                                        break;
                                                    case h.m.home:
                                                        (o = T), le(), de(t);
                                                        break;
                                                    case h.m.end:
                                                        (o = w), le(), de(t);
                                                        break;
                                                    default:
                                                        return;
                                                }
                                                ue(t, o + r),
                                                    t.preventDefault(),
                                                    t.stopPropagation();
                                            },
                                        }
                                    ),
                                    B && (0, g.pq)(B, g.n7, ['id', 'className'])
                                ),
                                !A &&
                                    (0, r.pi)((0, r.pi)({}, Ve), {
                                        'aria-valuemin': T,
                                        'aria-valuemax': w,
                                        'aria-valuenow': oe,
                                        'aria-valuetext': ce(oe),
                                        'aria-label': q || _,
                                        'aria-labelledby': V,
                                    })
                            ),
                            qe = p
                                ? {}
                                : {
                                      onFocus: function (e) {
                                          re.isAdjustingLowerValue =
                                              e.target === be.current;
                                      },
                                  },
                            Ae = (0, r.pi)(
                                {ref: ye, className: ae.thumb, style: Ce(we)},
                                A &&
                                    (0, r.pi)(
                                        (0, r.pi)((0, r.pi)({}, Ve), qe),
                                        {
                                            id: 'max-'.concat(ne),
                                            'aria-valuemin': ie,
                                            'aria-valuemax': w,
                                            'aria-valuenow': oe,
                                            'aria-valuetext': ce(oe),
                                            'aria-label': 'max '.concat(q || _),
                                        }
                                    )
                            ),
                            ze = A
                                ? (0, r.pi)(
                                      (0, r.pi)(
                                          (0, r.pi)(
                                              {
                                                  ref: be,
                                                  className: ae.thumb,
                                                  style: Ce(Ne),
                                              },
                                              Ve
                                          ),
                                          qe
                                      ),
                                      {
                                          id: 'min-'.concat(ne),
                                          'aria-valuemin': T,
                                          'aria-valuemax': oe,
                                          'aria-valuenow': ie,
                                          'aria-valuetext': ce(ie),
                                          'aria-label': 'min '.concat(q || _),
                                      }
                                  )
                                : void 0;
                        return {
                            root: Be,
                            label: Ie,
                            sliderBox: He,
                            container: {className: ae.container},
                            valueLabel: Le,
                            lowerValueLabel: Re,
                            thumb: Ae,
                            lowerValueThumb: ze,
                            zeroTick: Pe,
                            activeTrack: Oe,
                            topInactiveTrack: De,
                            bottomInactiveTrack: Me,
                            sliderLine: {ref: Z, className: ae.line},
                        };
                    })(e, t);
                    return n.createElement(
                        'div',
                        (0, r.pi)({}, o.root),
                        o && n.createElement(s._, (0, r.pi)({}, o.label)),
                        n.createElement(
                            'div',
                            (0, r.pi)({}, o.container),
                            e.ranged &&
                                (e.vertical
                                    ? o.valueLabel &&
                                      n.createElement(
                                          s._,
                                          (0, r.pi)({}, o.valueLabel)
                                      )
                                    : o.lowerValueLabel &&
                                      n.createElement(
                                          s._,
                                          (0, r.pi)({}, o.lowerValueLabel)
                                      )),
                            n.createElement(
                                'div',
                                (0, r.pi)({}, o.sliderBox),
                                n.createElement(
                                    'div',
                                    (0, r.pi)({}, o.sliderLine),
                                    e.ranged &&
                                        n.createElement(
                                            'span',
                                            (0, r.pi)({}, o.lowerValueThumb)
                                        ),
                                    n.createElement(
                                        'span',
                                        (0, r.pi)({}, o.thumb)
                                    ),
                                    o.zeroTick &&
                                        n.createElement(
                                            'span',
                                            (0, r.pi)({}, o.zeroTick)
                                        ),
                                    n.createElement(
                                        'span',
                                        (0, r.pi)({}, o.bottomInactiveTrack)
                                    ),
                                    n.createElement(
                                        'span',
                                        (0, r.pi)({}, o.activeTrack)
                                    ),
                                    n.createElement(
                                        'span',
                                        (0, r.pi)({}, o.topInactiveTrack)
                                    )
                                )
                            ),
                            e.ranged && e.vertical
                                ? o.lowerValueLabel &&
                                      n.createElement(
                                          s._,
                                          (0, r.pi)({}, o.lowerValueLabel)
                                      )
                                : o.valueLabel &&
                                      n.createElement(
                                          s._,
                                          (0, r.pi)({}, o.valueLabel)
                                      )
                        ),
                        n.createElement(a.u, null)
                    );
                });
            _.displayName = 'SliderBase';
            var k = o(85446),
                w = {
                    root: 'ms-Slider',
                    enabled: 'ms-Slider-enabled',
                    disabled: 'ms-Slider-disabled',
                    row: 'ms-Slider-row',
                    column: 'ms-Slider-column',
                    container: 'ms-Slider-container',
                    slideBox: 'ms-Slider-slideBox',
                    line: 'ms-Slider-line',
                    thumb: 'ms-Slider-thumb',
                    activeSection: 'ms-Slider-active',
                    inactiveSection: 'ms-Slider-inactive',
                    valueLabel: 'ms-Slider-value',
                    showValue: 'ms-Slider-showValue',
                    showTransitions: 'ms-Slider-showTransitions',
                    zeroTick: 'ms-Slider-zeroTick',
                },
                N = (0, i.z)(
                    _,
                    function (e) {
                        var t,
                            o,
                            i,
                            n,
                            a,
                            s,
                            l,
                            d,
                            c,
                            u,
                            p,
                            h,
                            v,
                            f = e.className,
                            g = e.titleLabelClassName,
                            b = e.theme,
                            y = e.vertical,
                            x = e.disabled,
                            C = e.showTransitions,
                            _ = e.showValue,
                            N = e.ranged,
                            T = b.semanticColors,
                            S = b.palette,
                            E = (0, k.Cn)(w, b),
                            F = T.inputBackgroundCheckedHovered,
                            B = T.inputBackgroundChecked,
                            I = S.neutralSecondaryAlt,
                            L = S.neutralPrimary,
                            R = S.neutralSecondaryAlt,
                            P = T.disabledText,
                            O = T.disabledBackground,
                            D = T.inputBackground,
                            M = T.smallInputBorder,
                            V = T.disabledBorder,
                            H = !x && {
                                backgroundColor: F,
                                selectors:
                                    ((t = {}),
                                    (t[k.qJ] = {backgroundColor: 'Highlight'}),
                                    t),
                            },
                            q = !x && {
                                backgroundColor: I,
                                selectors:
                                    ((o = {}),
                                    (o[k.qJ] = {borderColor: 'Highlight'}),
                                    o),
                            },
                            A = !x && {
                                backgroundColor: B,
                                selectors:
                                    ((i = {}),
                                    (i[k.qJ] = {backgroundColor: 'Highlight'}),
                                    i),
                            },
                            z = !x && {
                                border: '2px solid '.concat(F),
                                selectors:
                                    ((n = {}),
                                    (n[k.qJ] = {borderColor: 'Highlight'}),
                                    n),
                            },
                            G = !e.disabled && {
                                backgroundColor:
                                    T.inputPlaceholderBackgroundChecked,
                                selectors:
                                    ((a = {}),
                                    (a[k.qJ] = {backgroundColor: 'Highlight'}),
                                    a),
                            };
                        return {
                            root: (0, r.ev)(
                                (0, r.ev)(
                                    (0, r.ev)(
                                        (0, r.ev)(
                                            (0, r.ev)(
                                                [
                                                    E.root,
                                                    b.fonts.medium,
                                                    {userSelect: 'none'},
                                                    y && {marginRight: 8},
                                                ],
                                                [x ? void 0 : E.enabled],
                                                !1
                                            ),
                                            [x ? E.disabled : void 0],
                                            !1
                                        ),
                                        [y ? void 0 : E.row],
                                        !1
                                    ),
                                    [y ? E.column : void 0],
                                    !1
                                ),
                                [f],
                                !1
                            ),
                            titleLabel: [{padding: 0}, g],
                            container: [
                                E.container,
                                {
                                    display: 'flex',
                                    flexWrap: 'nowrap',
                                    alignItems: 'center',
                                },
                                y && {
                                    flexDirection: 'column',
                                    height: '100%',
                                    textAlign: 'center',
                                    margin: '8px 0',
                                },
                            ],
                            slideBox: (0, r.ev)(
                                (0, r.ev)(
                                    [
                                        E.slideBox,
                                        !N && (0, k.GL)(b),
                                        {
                                            background: 'transparent',
                                            border: 'none',
                                            flexGrow: 1,
                                            lineHeight: 28,
                                            display: 'flex',
                                            alignItems: 'center',
                                            selectors:
                                                ((s = {}),
                                                (s[
                                                    ':active .'.concat(
                                                        E.activeSection
                                                    )
                                                ] = H),
                                                (s[
                                                    ':hover .'.concat(
                                                        E.activeSection
                                                    )
                                                ] = A),
                                                (s[
                                                    ':active .'.concat(
                                                        E.inactiveSection
                                                    )
                                                ] = q),
                                                (s[
                                                    ':hover .'.concat(
                                                        E.inactiveSection
                                                    )
                                                ] = q),
                                                (s[
                                                    ':active .'.concat(E.thumb)
                                                ] = z),
                                                (s[':hover .'.concat(E.thumb)] =
                                                    z),
                                                (s[
                                                    ':active .'.concat(
                                                        E.zeroTick
                                                    )
                                                ] = G),
                                                (s[
                                                    ':hover .'.concat(
                                                        E.zeroTick
                                                    )
                                                ] = G),
                                                (s[k.qJ] = {
                                                    forcedColorAdjust: 'none',
                                                }),
                                                s),
                                        },
                                        y
                                            ? {
                                                  height: '100%',
                                                  width: 28,
                                                  padding: '8px 0',
                                              }
                                            : {
                                                  height: 28,
                                                  width: 'auto',
                                                  padding: '0 8px',
                                              },
                                    ],
                                    [_ ? E.showValue : void 0],
                                    !1
                                ),
                                [C ? E.showTransitions : void 0],
                                !1
                            ),
                            thumb: [
                                E.thumb,
                                N && (0, k.GL)(b, {inset: -4}),
                                {
                                    borderWidth: 2,
                                    borderStyle: 'solid',
                                    borderColor: M,
                                    borderRadius: 10,
                                    boxSizing: 'border-box',
                                    background: D,
                                    display: 'block',
                                    width: 16,
                                    height: 16,
                                    position: 'absolute',
                                },
                                y
                                    ? {
                                          left: -6,
                                          margin: '0 auto',
                                          transform: 'translateY(8px)',
                                      }
                                    : {
                                          top: -6,
                                          transform: (0, m.zg)(b)
                                              ? 'translateX(50%)'
                                              : 'translateX(-50%)',
                                      },
                                C && {
                                    transition: 'left '
                                        .concat(k.D1.durationValue3, ' ')
                                        .concat(k.D1.easeFunction1),
                                },
                                x && {
                                    borderColor: V,
                                    selectors:
                                        ((l = {}),
                                        (l[k.qJ] = {borderColor: 'GrayText'}),
                                        l),
                                },
                            ],
                            line: [
                                E.line,
                                {display: 'flex', position: 'relative'},
                                y
                                    ? {
                                          height: '100%',
                                          width: 4,
                                          margin: '0 auto',
                                          flexDirection: 'column-reverse',
                                      }
                                    : {width: '100%'},
                            ],
                            lineContainer: [
                                {borderRadius: 4, boxSizing: 'border-box'},
                                y
                                    ? {width: 4, height: '100%'}
                                    : {height: 4, width: '100%'},
                            ],
                            activeSection: [
                                E.activeSection,
                                {
                                    background: L,
                                    selectors:
                                        ((d = {}),
                                        (d[k.qJ] = {
                                            backgroundColor: 'WindowText',
                                        }),
                                        d),
                                },
                                C && {
                                    transition: 'width '
                                        .concat(k.D1.durationValue3, ' ')
                                        .concat(k.D1.easeFunction1),
                                },
                                x && {
                                    background: P,
                                    selectors:
                                        ((c = {}),
                                        (c[k.qJ] = {
                                            backgroundColor: 'GrayText',
                                            borderColor: 'GrayText',
                                        }),
                                        c),
                                },
                            ],
                            inactiveSection: [
                                E.inactiveSection,
                                {
                                    background: R,
                                    selectors:
                                        ((u = {}),
                                        (u[k.qJ] = {
                                            border: '1px solid WindowText',
                                        }),
                                        u),
                                },
                                C && {
                                    transition: 'width '
                                        .concat(k.D1.durationValue3, ' ')
                                        .concat(k.D1.easeFunction1),
                                },
                                x && {
                                    background: O,
                                    selectors:
                                        ((p = {}),
                                        (p[k.qJ] = {borderColor: 'GrayText'}),
                                        p),
                                },
                            ],
                            zeroTick: [
                                E.zeroTick,
                                {
                                    position: 'absolute',
                                    background: T.disabledBorder,
                                    selectors:
                                        ((h = {}),
                                        (h[k.qJ] = {
                                            backgroundColor: 'WindowText',
                                        }),
                                        h),
                                },
                                e.disabled && {
                                    background: T.disabledBackground,
                                    selectors:
                                        ((v = {}),
                                        (v[k.qJ] = {
                                            backgroundColor: 'GrayText',
                                        }),
                                        v),
                                },
                                e.vertical
                                    ? {
                                          width: '16px',
                                          height: '1px',
                                          transform: (0, m.zg)(b)
                                              ? 'translateX(6px)'
                                              : 'translateX(-6px)',
                                      }
                                    : {
                                          width: '1px',
                                          height: '16px',
                                          transform: 'translateY(-6px)',
                                      },
                            ],
                            valueLabel: [
                                E.valueLabel,
                                {flexShrink: 1, width: 30, lineHeight: '1'},
                                y
                                    ? {
                                          margin: '0 auto',
                                          whiteSpace: 'nowrap',
                                          width: 40,
                                      }
                                    : {
                                          margin: '0 8px',
                                          whiteSpace: 'nowrap',
                                          width: 40,
                                      },
                            ],
                        };
                    },
                    void 0,
                    {scope: 'Slider'}
                );
        },
        28553: (e, t, o) => {
            o.d(t, {n: () => F});
            var i,
                r = o(98621),
                n = o(96583),
                a = o(65812),
                s = o(11839),
                l = o(56316),
                d = o(11599),
                c = o(96208),
                u = o(33010),
                p = o(83510),
                m = o(12294),
                h = o(47414),
                v = o(60586),
                f = o(25153),
                g = o(48782),
                b = o(84346),
                y = o(40838),
                x = (0, d.y)(),
                C = '',
                _ = 'TextField',
                k = (function (e) {
                    function t(t) {
                        var o = e.call(this, t) || this;
                        (o._textElement = a.createRef()),
                            (o._onFocus = function (e) {
                                o.props.onFocus && o.props.onFocus(e),
                                    o.setState({isFocused: !0}, function () {
                                        o.props.validateOnFocusIn &&
                                            o._validate(o.value);
                                    });
                            }),
                            (o._onBlur = function (e) {
                                o.props.onBlur && o.props.onBlur(e),
                                    o.setState({isFocused: !1}, function () {
                                        o.props.validateOnFocusOut &&
                                            o._validate(o.value);
                                    });
                            }),
                            (o._onRenderLabel = function (e) {
                                var t = e.label,
                                    i = e.required,
                                    r = o._classNames.subComponentStyles
                                        ? o._classNames.subComponentStyles.label
                                        : void 0;
                                return t
                                    ? a.createElement(
                                          s._,
                                          {
                                              required: i,
                                              htmlFor: o._id,
                                              styles: r,
                                              disabled: e.disabled,
                                              id: o._labelId,
                                          },
                                          e.label
                                      )
                                    : null;
                            }),
                            (o._onRenderDescription = function (e) {
                                return e.description
                                    ? a.createElement(
                                          'span',
                                          {
                                              className:
                                                  o._classNames.description,
                                          },
                                          e.description
                                      )
                                    : null;
                            }),
                            (o._onRevealButtonClick = function (e) {
                                o.setState(function (e) {
                                    return {
                                        isRevealingPassword:
                                            !e.isRevealingPassword,
                                    };
                                });
                            }),
                            (o._onInputChange = function (e) {
                                var t,
                                    i,
                                    r = e.target.value,
                                    n = w(o.props, o.state) || '';
                                void 0 !== r &&
                                r !== o._lastChangeValue &&
                                r !== n
                                    ? ((o._lastChangeValue = r),
                                      null === (i = (t = o.props).onChange) ||
                                          void 0 === i ||
                                          i.call(t, e, r),
                                      o._isControlled ||
                                          o.setState({uncontrolledValue: r}))
                                    : (o._lastChangeValue = void 0);
                            }),
                            (0, c.l)(o),
                            (o._async = new u.e(o)),
                            (o._fallbackId = (0, p.z)(_)),
                            (o._descriptionId = (0, p.z)(_ + 'Description')),
                            (o._labelId = (0, p.z)(_ + 'Label')),
                            (o._prefixId = (0, p.z)(_ + 'Prefix')),
                            (o._suffixId = (0, p.z)(_ + 'Suffix')),
                            o._warnControlledUsage();
                        var i = t.defaultValue,
                            r = void 0 === i ? C : i;
                        return (
                            'number' == typeof r && (r = String(r)),
                            (o.state = {
                                uncontrolledValue: o._isControlled ? void 0 : r,
                                isFocused: !1,
                                errorMessage: '',
                            }),
                            (o._delayedValidate = o._async.debounce(
                                o._validate,
                                o.props.deferredValidationTime
                            )),
                            (o._lastValidation = 0),
                            o
                        );
                    }
                    return (
                        (0, n.ZT)(t, e),
                        Object.defineProperty(t.prototype, 'value', {
                            get: function () {
                                return w(this.props, this.state);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.componentDidMount = function () {
                            this._adjustInputHeight(),
                                this.props.validateOnLoad &&
                                    this._validate(this.value);
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            this._async.dispose();
                        }),
                        (t.prototype.getSnapshotBeforeUpdate = function (e, t) {
                            return {
                                selection: [
                                    this.selectionStart,
                                    this.selectionEnd,
                                ],
                            };
                        }),
                        (t.prototype.componentDidUpdate = function (e, t, o) {
                            var i = this.props,
                                r = (o || {}).selection,
                                n = void 0 === r ? [null, null] : r,
                                a = n[0],
                                s = n[1];
                            !!e.multiline != !!i.multiline &&
                                t.isFocused &&
                                (this.focus(),
                                null !== a &&
                                    null !== s &&
                                    a >= 0 &&
                                    s >= 0 &&
                                    this.setSelectionRange(a, s)),
                                e.value !== i.value &&
                                    (this._lastChangeValue = void 0);
                            var l = w(e, t),
                                d = this.value;
                            l !== d &&
                                (this._warnControlledUsage(e),
                                this.state.errorMessage &&
                                    !i.errorMessage &&
                                    this.setState({errorMessage: ''}),
                                this._adjustInputHeight(),
                                N(i) && this._delayedValidate(d));
                        }),
                        (t.prototype.render = function () {
                            var e = this.props,
                                t = e.borderless,
                                o = e.className,
                                r = e.disabled,
                                s = e.invalid,
                                d = e.iconProps,
                                c = e.inputClassName,
                                u = e.label,
                                p = e.multiline,
                                h = e.required,
                                v = e.underlined,
                                f = e.prefix,
                                g = e.resizable,
                                C = e.suffix,
                                _ = e.theme,
                                k = e.styles,
                                w = e.autoAdjustHeight,
                                N = e.canRevealPassword,
                                T = e.revealPasswordAriaLabel,
                                S = e.type,
                                E = e.onRenderPrefix,
                                F = void 0 === E ? this._onRenderPrefix : E,
                                B = e.onRenderSuffix,
                                I = void 0 === B ? this._onRenderSuffix : B,
                                L = e.onRenderLabel,
                                R = void 0 === L ? this._onRenderLabel : L,
                                P = e.onRenderDescription,
                                O =
                                    void 0 === P
                                        ? this._onRenderDescription
                                        : P,
                                D = this.state,
                                M = D.isFocused,
                                V = D.isRevealingPassword,
                                H = this._errorMessage,
                                q = 'boolean' == typeof s ? s : !!H,
                                A =
                                    !!N &&
                                    'password' === S &&
                                    (function () {
                                        if ('boolean' != typeof i) {
                                            var e = (0, b.J)();
                                            if (
                                                null == e ? void 0 : e.navigator
                                            ) {
                                                var t = /Edg/.test(
                                                    e.navigator.userAgent || ''
                                                );
                                                i = !((0, y.f)() || t);
                                            } else i = !0;
                                        }
                                        return i;
                                    })(),
                                z = (this._classNames = x(k, {
                                    theme: _,
                                    className: o,
                                    disabled: r,
                                    focused: M,
                                    required: h,
                                    multiline: p,
                                    hasLabel: !!u,
                                    hasErrorMessage: q,
                                    borderless: t,
                                    resizable: g,
                                    hasIcon: !!d,
                                    underlined: v,
                                    inputClassName: c,
                                    autoAdjustHeight: w,
                                    hasRevealButton: A,
                                }));
                            return a.createElement(
                                'div',
                                {ref: this.props.elementRef, className: z.root},
                                a.createElement(
                                    'div',
                                    {className: z.wrapper},
                                    R(this.props, this._onRenderLabel),
                                    a.createElement(
                                        'div',
                                        {className: z.fieldGroup},
                                        (void 0 !== f ||
                                            this.props.onRenderPrefix) &&
                                            a.createElement(
                                                'div',
                                                {
                                                    className: z.prefix,
                                                    id: this._prefixId,
                                                },
                                                F(
                                                    this.props,
                                                    this._onRenderPrefix
                                                )
                                            ),
                                        p
                                            ? this._renderTextArea()
                                            : this._renderInput(),
                                        d &&
                                            a.createElement(
                                                l.J,
                                                (0, n.pi)(
                                                    {className: z.icon},
                                                    d
                                                )
                                            ),
                                        A &&
                                            a.createElement(
                                                'button',
                                                {
                                                    'aria-label': T,
                                                    className: z.revealButton,
                                                    onClick:
                                                        this
                                                            ._onRevealButtonClick,
                                                    'aria-pressed': !!V,
                                                    type: 'button',
                                                },
                                                a.createElement(
                                                    'span',
                                                    {className: z.revealSpan},
                                                    a.createElement(l.J, {
                                                        className: z.revealIcon,
                                                        iconName: V
                                                            ? 'Hide'
                                                            : 'RedEye',
                                                    })
                                                )
                                            ),
                                        (void 0 !== C ||
                                            this.props.onRenderSuffix) &&
                                            a.createElement(
                                                'div',
                                                {
                                                    className: z.suffix,
                                                    id: this._suffixId,
                                                },
                                                I(
                                                    this.props,
                                                    this._onRenderSuffix
                                                )
                                            )
                                    )
                                ),
                                this._isDescriptionAvailable &&
                                    a.createElement(
                                        'span',
                                        {id: this._descriptionId},
                                        O(
                                            this.props,
                                            this._onRenderDescription
                                        ),
                                        H &&
                                            a.createElement(
                                                'div',
                                                {role: 'alert'},
                                                a.createElement(
                                                    m.U,
                                                    null,
                                                    this._renderErrorMessage()
                                                )
                                            )
                                    )
                            );
                        }),
                        (t.prototype.focus = function () {
                            this._textElement.current &&
                                this._textElement.current.focus();
                        }),
                        (t.prototype.blur = function () {
                            this._textElement.current &&
                                this._textElement.current.blur();
                        }),
                        (t.prototype.select = function () {
                            this._textElement.current &&
                                this._textElement.current.select();
                        }),
                        (t.prototype.setSelectionStart = function (e) {
                            this._textElement.current &&
                                (this._textElement.current.selectionStart = e);
                        }),
                        (t.prototype.setSelectionEnd = function (e) {
                            this._textElement.current &&
                                (this._textElement.current.selectionEnd = e);
                        }),
                        Object.defineProperty(t.prototype, 'selectionStart', {
                            get: function () {
                                return this._textElement.current
                                    ? this._textElement.current.selectionStart
                                    : -1;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'selectionEnd', {
                            get: function () {
                                return this._textElement.current
                                    ? this._textElement.current.selectionEnd
                                    : -1;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.setSelectionRange = function (e, t) {
                            this._textElement.current &&
                                this._textElement.current.setSelectionRange(
                                    e,
                                    t
                                );
                        }),
                        (t.prototype._warnControlledUsage = function (e) {
                            (0, h.Q)({
                                componentId: this._id,
                                componentName: _,
                                props: this.props,
                                oldProps: e,
                                valueProp: 'value',
                                defaultValueProp: 'defaultValue',
                                onChangeProp: 'onChange',
                                readOnlyProp: 'readOnly',
                            }),
                                null !== this.props.value ||
                                    this._hasWarnedNullValue ||
                                    ((this._hasWarnedNullValue = !0),
                                    (0, v.Z)(
                                        "Warning: 'value' prop on '".concat(
                                            _,
                                            "' should not be null. Consider using an "
                                        ) +
                                            'empty string to clear the component or undefined to indicate an uncontrolled component.'
                                    ));
                        }),
                        Object.defineProperty(t.prototype, '_id', {
                            get: function () {
                                return this.props.id || this._fallbackId;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, '_isControlled', {
                            get: function () {
                                return (0, f.s)(this.props, 'value');
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype._onRenderPrefix = function (e) {
                            var t = e.prefix;
                            return a.createElement(
                                'span',
                                {style: {paddingBottom: '1px'}},
                                t
                            );
                        }),
                        (t.prototype._onRenderSuffix = function (e) {
                            var t = e.suffix;
                            return a.createElement(
                                'span',
                                {style: {paddingBottom: '1px'}},
                                t
                            );
                        }),
                        Object.defineProperty(t.prototype, '_errorMessage', {
                            get: function () {
                                var e = this.props.errorMessage;
                                return (
                                    (void 0 === e
                                        ? this.state.errorMessage
                                        : e) || ''
                                );
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype._renderErrorMessage = function () {
                            var e = this._errorMessage;
                            return e
                                ? 'string' == typeof e
                                    ? a.createElement(
                                          'p',
                                          {
                                              className:
                                                  this._classNames.errorMessage,
                                          },
                                          a.createElement(
                                              'span',
                                              {
                                                  'data-automation-id':
                                                      'error-message',
                                              },
                                              e
                                          )
                                      )
                                    : a.createElement(
                                          'div',
                                          {
                                              className:
                                                  this._classNames.errorMessage,
                                              'data-automation-id':
                                                  'error-message',
                                          },
                                          e
                                      )
                                : null;
                        }),
                        Object.defineProperty(
                            t.prototype,
                            '_isDescriptionAvailable',
                            {
                                get: function () {
                                    var e = this.props;
                                    return !!(
                                        e.onRenderDescription ||
                                        e.description ||
                                        this._errorMessage
                                    );
                                },
                                enumerable: !1,
                                configurable: !0,
                            }
                        ),
                        (t.prototype._renderTextArea = function () {
                            var e = this.props.invalid,
                                t = void 0 === e ? !!this._errorMessage : e,
                                o = (0, g.pq)(this.props, g.FI, [
                                    'defaultValue',
                                ]),
                                i =
                                    this.props['aria-labelledby'] ||
                                    (this.props.label ? this._labelId : void 0);
                            return a.createElement(
                                'textarea',
                                (0, n.pi)({id: this._id}, o, {
                                    ref: this._textElement,
                                    value: this.value || '',
                                    onInput: this._onInputChange,
                                    onChange: this._onInputChange,
                                    className: this._classNames.field,
                                    'aria-labelledby': i,
                                    'aria-describedby': this
                                        ._isDescriptionAvailable
                                        ? this._descriptionId
                                        : this.props['aria-describedby'],
                                    'aria-invalid': t,
                                    'aria-label': this.props.ariaLabel,
                                    readOnly: this.props.readOnly,
                                    onFocus: this._onFocus,
                                    onBlur: this._onBlur,
                                })
                            );
                        }),
                        (t.prototype._renderInput = function () {
                            var e = this.props,
                                t = e.ariaLabel,
                                o = e.invalid,
                                i = void 0 === o ? !!this._errorMessage : o,
                                r = e.onRenderPrefix,
                                s = e.onRenderSuffix,
                                l = e.prefix,
                                d = e.suffix,
                                c = e.type,
                                u = void 0 === c ? 'text' : c,
                                p = [];
                            e.label && p.push(this._labelId),
                                (void 0 !== l || r) && p.push(this._prefixId),
                                (void 0 !== d || s) && p.push(this._suffixId);
                            var m = (0, n.pi)(
                                    (0, n.pi)(
                                        {
                                            type: this.state.isRevealingPassword
                                                ? 'text'
                                                : u,
                                            id: this._id,
                                        },
                                        (0, g.pq)(this.props, g.Gg, [
                                            'defaultValue',
                                            'type',
                                        ])
                                    ),
                                    {
                                        'aria-labelledby':
                                            this.props['aria-labelledby'] ||
                                            (p.length > 0
                                                ? p.join(' ')
                                                : void 0),
                                        ref: this._textElement,
                                        value: this.value || '',
                                        onInput: this._onInputChange,
                                        onChange: this._onInputChange,
                                        className: this._classNames.field,
                                        'aria-label': t,
                                        'aria-describedby': this
                                            ._isDescriptionAvailable
                                            ? this._descriptionId
                                            : this.props['aria-describedby'],
                                        'aria-invalid': i,
                                        onFocus: this._onFocus,
                                        onBlur: this._onBlur,
                                    }
                                ),
                                h = function (e) {
                                    return a.createElement(
                                        'input',
                                        (0, n.pi)({}, e)
                                    );
                                };
                            return (this.props.onRenderInput || h)(m, h);
                        }),
                        (t.prototype._validate = function (e) {
                            var t = this;
                            if (
                                this._latestValidateValue !== e ||
                                !N(this.props)
                            ) {
                                this._latestValidateValue = e;
                                var o = this.props.onGetErrorMessage,
                                    i = o && o(e || '');
                                if (void 0 !== i)
                                    if ('string' != typeof i && 'then' in i) {
                                        var r = ++this._lastValidation;
                                        i.then(function (o) {
                                            r === t._lastValidation &&
                                                t.setState({errorMessage: o}),
                                                t._notifyAfterValidate(e, o);
                                        });
                                    } else
                                        this.setState({errorMessage: i}),
                                            this._notifyAfterValidate(e, i);
                                else this._notifyAfterValidate(e, '');
                            }
                        }),
                        (t.prototype._notifyAfterValidate = function (e, t) {
                            e === this.value &&
                                this.props.onNotifyValidationResult &&
                                this.props.onNotifyValidationResult(t, e);
                        }),
                        (t.prototype._adjustInputHeight = function () {
                            var e, t;
                            if (
                                this._textElement.current &&
                                this.props.autoAdjustHeight &&
                                this.props.multiline
                            ) {
                                var o =
                                        null ===
                                            (t =
                                                null ===
                                                    (e =
                                                        this.props
                                                            .scrollContainerRef) ||
                                                void 0 === e
                                                    ? void 0
                                                    : e.current) || void 0 === t
                                            ? void 0
                                            : t.scrollTop,
                                    i = this._textElement.current;
                                (i.style.height = ''),
                                    (i.style.height = i.scrollHeight + 'px'),
                                    o &&
                                        (this.props.scrollContainerRef.current.scrollTop =
                                            o);
                            }
                        }),
                        (t.defaultProps = {
                            resizable: !0,
                            deferredValidationTime: 200,
                            validateOnLoad: !0,
                        }),
                        t
                    );
                })(a.Component);
            function w(e, t) {
                var o = e.value,
                    i = void 0 === o ? t.uncontrolledValue : o;
                return 'number' == typeof i ? String(i) : i;
            }
            function N(e) {
                return !(e.validateOnFocusIn || e.validateOnFocusOut);
            }
            var T = o(85446),
                S = {
                    root: 'ms-TextField',
                    description: 'ms-TextField-description',
                    errorMessage: 'ms-TextField-errorMessage',
                    field: 'ms-TextField-field',
                    fieldGroup: 'ms-TextField-fieldGroup',
                    prefix: 'ms-TextField-prefix',
                    suffix: 'ms-TextField-suffix',
                    wrapper: 'ms-TextField-wrapper',
                    revealButton: 'ms-TextField-reveal',
                    multiline: 'ms-TextField--multiline',
                    borderless: 'ms-TextField--borderless',
                    underlined: 'ms-TextField--underlined',
                    unresizable: 'ms-TextField--unresizable',
                    required: 'is-required',
                    disabled: 'is-disabled',
                    active: 'is-active',
                };
            function E(e) {
                var t = e.underlined,
                    o = e.disabled,
                    i = e.focused,
                    r = e.theme,
                    n = r.palette,
                    a = r.fonts;
                return function () {
                    var e;
                    return {
                        root: [
                            t && o && {color: n.neutralTertiary},
                            t && {
                                fontSize: a.medium.fontSize,
                                marginRight: 8,
                                paddingLeft: 12,
                                paddingRight: 0,
                                lineHeight: '22px',
                                height: 32,
                            },
                            t &&
                                i && {
                                    selectors:
                                        ((e = {}), (e[T.qJ] = {height: 31}), e),
                                },
                        ],
                    };
                };
            }
            var F = (0, r.z)(
                k,
                function (e) {
                    var t,
                        o,
                        i,
                        r,
                        a,
                        s,
                        l,
                        d,
                        c,
                        u,
                        p,
                        m,
                        h = e.theme,
                        v = e.className,
                        f = e.disabled,
                        g = e.focused,
                        b = e.required,
                        y = e.multiline,
                        x = e.hasLabel,
                        C = e.borderless,
                        _ = e.underlined,
                        k = e.hasIcon,
                        w = e.resizable,
                        N = e.hasErrorMessage,
                        F = e.inputClassName,
                        B = e.autoAdjustHeight,
                        I = e.hasRevealButton,
                        L = h.semanticColors,
                        R = h.effects,
                        P = h.fonts,
                        O = (0, T.Cn)(S, h),
                        D = {
                            background: L.disabledBackground,
                            color: f ? L.disabledText : L.inputPlaceholderText,
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0 10px',
                            lineHeight: 1,
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                            selectors:
                                ((t = {}),
                                (t[T.qJ] = {
                                    background: 'Window',
                                    color: f ? 'GrayText' : 'WindowText',
                                }),
                                t),
                        },
                        M = [
                            {
                                color: L.inputPlaceholderText,
                                opacity: 1,
                                selectors:
                                    ((o = {}),
                                    (o[T.qJ] = {color: 'GrayText'}),
                                    o),
                            },
                        ],
                        V = {
                            color: L.disabledText,
                            selectors:
                                ((i = {}), (i[T.qJ] = {color: 'GrayText'}), i),
                        };
                    return {
                        root: [
                            O.root,
                            P.medium,
                            b && O.required,
                            f && O.disabled,
                            g && O.active,
                            y && O.multiline,
                            C && O.borderless,
                            _ && O.underlined,
                            T.Fv,
                            {position: 'relative'},
                            v,
                        ],
                        wrapper: [
                            O.wrapper,
                            _ && [
                                {
                                    display: 'flex',
                                    borderBottom: '1px solid '.concat(
                                        N ? L.errorText : L.inputBorder
                                    ),
                                    width: '100%',
                                },
                                f && {
                                    borderBottomColor: L.disabledBackground,
                                    selectors:
                                        ((r = {}),
                                        (r[T.qJ] = (0, n.pi)(
                                            {borderColor: 'GrayText'},
                                            (0, T.xM)()
                                        )),
                                        r),
                                },
                                !f && {
                                    selectors: {
                                        ':hover': {
                                            borderBottomColor: N
                                                ? L.errorText
                                                : L.inputBorderHovered,
                                            selectors:
                                                ((a = {}),
                                                (a[T.qJ] = (0, n.pi)(
                                                    {
                                                        borderBottomColor:
                                                            'Highlight',
                                                    },
                                                    (0, T.xM)()
                                                )),
                                                a),
                                        },
                                    },
                                },
                                g && [
                                    {position: 'relative'},
                                    (0, T.$Y)(
                                        N ? L.errorText : L.inputFocusBorderAlt,
                                        0,
                                        'borderBottom'
                                    ),
                                ],
                            ],
                        ],
                        fieldGroup: [
                            O.fieldGroup,
                            T.Fv,
                            {
                                border: '1px solid '.concat(L.inputBorder),
                                borderRadius: R.roundedCorner2,
                                background: L.inputBackground,
                                cursor: 'text',
                                height: 32,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'stretch',
                                position: 'relative',
                            },
                            y && {
                                minHeight: '60px',
                                height: 'auto',
                                display: 'flex',
                            },
                            !g &&
                                !f && {
                                    selectors: {
                                        ':hover': {
                                            borderColor: L.inputBorderHovered,
                                            selectors:
                                                ((s = {}),
                                                (s[T.qJ] = (0, n.pi)(
                                                    {borderColor: 'Highlight'},
                                                    (0, T.xM)()
                                                )),
                                                s),
                                        },
                                    },
                                },
                            g &&
                                !_ &&
                                (0, T.$Y)(
                                    N ? L.errorText : L.inputFocusBorderAlt,
                                    R.roundedCorner2
                                ),
                            f && {
                                borderColor: L.disabledBackground,
                                selectors:
                                    ((l = {}),
                                    (l[T.qJ] = (0, n.pi)(
                                        {borderColor: 'GrayText'},
                                        (0, T.xM)()
                                    )),
                                    l),
                                cursor: 'default',
                            },
                            C && {border: 'none'},
                            C &&
                                g && {
                                    border: 'none',
                                    selectors: {':after': {border: 'none'}},
                                },
                            _ && {
                                flex: '1 1 0px',
                                border: 'none',
                                textAlign: 'left',
                            },
                            _ && f && {backgroundColor: 'transparent'},
                            N &&
                                !_ && {
                                    borderColor: L.errorText,
                                    selectors: {
                                        '&:hover': {borderColor: L.errorText},
                                    },
                                },
                            !x &&
                                b && {
                                    selectors:
                                        ((d = {
                                            ':before': {
                                                content: "'*'",
                                                color: L.errorText,
                                                position: 'absolute',
                                                top: -5,
                                                right: -10,
                                            },
                                        }),
                                        (d[T.qJ] = {
                                            selectors: {
                                                ':before': {
                                                    color: 'WindowText',
                                                    right: -14,
                                                },
                                            },
                                        }),
                                        d),
                                },
                        ],
                        field: [
                            P.medium,
                            O.field,
                            T.Fv,
                            {
                                borderRadius: 0,
                                border: 'none',
                                background: 'none',
                                backgroundColor: 'transparent',
                                color: L.inputText,
                                padding: '0 8px',
                                width: '100%',
                                minWidth: 0,
                                textOverflow: 'ellipsis',
                                outline: 0,
                                selectors:
                                    ((c = {
                                        '&:active, &:focus, &:hover': {
                                            outline: 0,
                                        },
                                        '::-ms-clear': {display: 'none'},
                                    }),
                                    (c[T.qJ] = {
                                        background: 'Window',
                                        color: f ? 'GrayText' : 'WindowText',
                                    }),
                                    c),
                            },
                            (0, T.Sv)(M),
                            y && !w && [O.unresizable, {resize: 'none'}],
                            y && {
                                minHeight: 'inherit',
                                lineHeight: 17,
                                flexGrow: 1,
                                paddingTop: 6,
                                paddingBottom: 6,
                                overflow: 'auto',
                                width: '100%',
                            },
                            y && B && {overflow: 'hidden'},
                            k && !I && {paddingRight: 24},
                            y && k && {paddingRight: 40},
                            f && [
                                {
                                    backgroundColor: L.disabledBackground,
                                    color: L.disabledText,
                                    borderColor: L.disabledBackground,
                                },
                                (0, T.Sv)(V),
                            ],
                            _ && {textAlign: 'left'},
                            g &&
                                !C && {
                                    selectors:
                                        ((u = {}),
                                        (u[T.qJ] = {
                                            paddingLeft: 11,
                                            paddingRight: 11,
                                        }),
                                        u),
                                },
                            g &&
                                y &&
                                !C && {
                                    selectors:
                                        ((p = {}),
                                        (p[T.qJ] = {paddingTop: 4}),
                                        p),
                                },
                            F,
                        ],
                        icon: [
                            y && {paddingRight: 24, alignItems: 'flex-end'},
                            {
                                pointerEvents: 'none',
                                position: 'absolute',
                                bottom: 6,
                                right: 8,
                                top: 'auto',
                                fontSize: T.ld.medium,
                                lineHeight: 18,
                            },
                            f && {color: L.disabledText},
                        ],
                        description: [
                            O.description,
                            {color: L.bodySubtext, fontSize: P.xSmall.fontSize},
                        ],
                        errorMessage: [
                            O.errorMessage,
                            T.k4.slideDownIn20,
                            P.small,
                            {
                                color: L.errorText,
                                margin: 0,
                                paddingTop: 5,
                                display: 'flex',
                                alignItems: 'center',
                            },
                        ],
                        prefix: [O.prefix, D],
                        suffix: [O.suffix, D],
                        revealButton: [
                            O.revealButton,
                            'ms-Button',
                            'ms-Button--icon',
                            (0, T.GL)(h, {inset: 1}),
                            {
                                height: 30,
                                width: 32,
                                border: 'none',
                                padding: '0px 4px',
                                backgroundColor: 'transparent',
                                color: L.link,
                                selectors: {
                                    ':hover': {
                                        outline: 0,
                                        color: L.primaryButtonBackgroundHovered,
                                        backgroundColor:
                                            L.buttonBackgroundHovered,
                                        selectors:
                                            ((m = {}),
                                            (m[T.qJ] = {
                                                borderColor: 'Highlight',
                                                color: 'Highlight',
                                            }),
                                            m),
                                    },
                                    ':focus': {outline: 0},
                                },
                            },
                            k && {marginRight: 28},
                        ],
                        revealSpan: {
                            display: 'flex',
                            height: '100%',
                            alignItems: 'center',
                        },
                        revealIcon: {
                            margin: '0px 4px',
                            pointerEvents: 'none',
                            bottom: 6,
                            right: 8,
                            top: 'auto',
                            fontSize: T.ld.medium,
                            lineHeight: 18,
                        },
                        subComponentStyles: {label: E(e)},
                    };
                },
                void 0,
                {scope: 'TextField'}
            );
        },
        65167: (e, t, o) => {
            o.d(t, {j: () => g});
            var i = o(96583),
                r = o(65812),
                n = o(28642),
                a = o(25938),
                s = o(58980),
                l = o(34532),
                d = o(70740),
                c = o(85118),
                u = o(54008),
                p = o(71387),
                m =
                    /^((1[0-2]|0?[1-9]):([0-5][0-9]):([0-5][0-9])\s([AaPp][Mm]))$/,
                h = /^((1[0-2]|0?[1-9]):[0-5][0-9]\s([AaPp][Mm]))$/,
                v = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
                f = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
                g = function (e) {
                    var t = e.label,
                        o = e.increments,
                        l = void 0 === o ? 30 : o,
                        g = e.showSeconds,
                        y = void 0 !== g && g,
                        C = e.allowFreeform,
                        _ = void 0 === C || C,
                        k = e.useHour12,
                        w = void 0 !== k && k,
                        N = e.timeRange,
                        T = e.strings,
                        S =
                            void 0 === T
                                ? (function (e, t) {
                                      var o = e ? '12-hour' : '24-hour',
                                          i = 'hh:mm'
                                              .concat(t ? ':ss' : '')
                                              .concat(e ? ' AP' : '');
                                      return {
                                          invalidInputErrorMessage:
                                              'Enter a valid time in the '
                                                  .concat(o, ' format: ')
                                                  .concat(i),
                                          timeOutOfBoundsErrorMessage:
                                              'Please enter a time within the range of {0} and {1}',
                                      };
                                  })(w, y)
                                : T,
                        E = e.defaultValue,
                        F = e.value,
                        B = e.dateAnchor,
                        I = e.onChange,
                        L = e.onFormatDate,
                        R = e.onValidateUserInput,
                        P = e.onValidationResult,
                        O = (0, i._T)(e, [
                            'label',
                            'increments',
                            'showSeconds',
                            'allowFreeform',
                            'useHour12',
                            'timeRange',
                            'strings',
                            'defaultValue',
                            'value',
                            'dateAnchor',
                            'onChange',
                            'onFormatDate',
                            'onValidateUserInput',
                            'onValidationResult',
                        ]),
                        D = r.useState(''),
                        M = D[0],
                        V = D[1],
                        H = r.useState(),
                        q = H[0],
                        A = H[1],
                        z = r.useState(''),
                        G = z[0],
                        J = z[1],
                        W = (0, u.B)(new Date()),
                        j = (0, p.G)(F, E),
                        U = j[0],
                        Z = j[1],
                        K = x(l, N),
                        Y = B || F || E || W,
                        Q = r.useMemo(
                            function () {
                                return b(Y, 'start', l, N);
                            },
                            [Y, l, N]
                        ),
                        X = r.useMemo(
                            function () {
                                return b(Y, 'end', l, N);
                            },
                            [Y, l, N]
                        ),
                        $ = r.useMemo(
                            function () {
                                for (var e = Array(K), t = 0; t < K; t++)
                                    e[t] = 0;
                                return e.map(function (e, t) {
                                    var o = (0, a.mH)(Q, l * t);
                                    o.setSeconds(0);
                                    var i = (0, s.T)(o, y, w);
                                    return {
                                        key: i,
                                        text: L ? L(o) : i,
                                        data: o,
                                    };
                                });
                            },
                            [Q, l, K, y, L, w]
                        );
                    r.useEffect(
                        function () {
                            if (U && !isNaN(U.valueOf())) {
                                var e = (0, s.T)(U, y, w),
                                    t = $.find(function (t) {
                                        return t.key === e;
                                    });
                                A(null == t ? void 0 : t.key),
                                    V(t ? t.text : e);
                            } else A(null);
                        },
                        [U, $, L, y, w]
                    );
                    var ee = r.useCallback(
                        function (e, t, o, i) {
                            var r,
                                n = '';
                            if (
                                (i &&
                                    _ &&
                                    !t &&
                                    (L
                                        ? R && (n = R(i))
                                        : (n = (function (e) {
                                              var t = '';
                                              if (
                                                  (w
                                                      ? y
                                                          ? m
                                                          : h
                                                      : y
                                                        ? v
                                                        : f
                                                  ).test(e)
                                              ) {
                                                  if (
                                                      N &&
                                                      S.timeOutOfBoundsErrorMessage
                                                  ) {
                                                      var o = (0, a.m1)(
                                                          w,
                                                          Q,
                                                          e
                                                      );
                                                      (o < Q || o > X) &&
                                                          (t = (0, c.W)(
                                                              S.timeOutOfBoundsErrorMessage,
                                                              Q.toString(),
                                                              X.toString()
                                                          ));
                                                  }
                                              } else
                                                  t =
                                                      S.invalidInputErrorMessage;
                                              return t;
                                          })(i))),
                                P && G !== n && P(e, {errorMessage: n}),
                                n || (void 0 !== i && !i.length))
                            ) {
                                var s =
                                    i || (null == t ? void 0 : t.text) || '';
                                V(s),
                                    Z(n ? new Date('invalid') : void 0),
                                    (r = new Date('invalid'));
                            } else {
                                var l = void 0;
                                (null == t ? void 0 : t.data) instanceof Date
                                    ? (l = t.data)
                                    : ((s =
                                          (null == t ? void 0 : t.key) ||
                                          i ||
                                          ''),
                                      (l = (0, a.m1)(w, Q, s))),
                                    Z(l),
                                    (r = l);
                            }
                            null == I || I(e, r), J(n);
                        },
                        [
                            N,
                            Q,
                            X,
                            _,
                            L,
                            R,
                            y,
                            w,
                            S.invalidInputErrorMessage,
                            S.timeOutOfBoundsErrorMessage,
                            Z,
                            P,
                            I,
                            G,
                        ]
                    );
                    return r.createElement(
                        d.C,
                        (0, i.pi)({}, O, {
                            allowFreeform: _,
                            selectedKey: q,
                            label: t,
                            errorMessage: G,
                            options: $,
                            onChange: ee,
                            text: M,
                            onKeyPress: function (e) {
                                var t = e.charCode;
                                L ||
                                    (t >= n.m.zero && t <= n.m.colon) ||
                                    t === n.m.space ||
                                    t === n.m.a ||
                                    t === n.m.m ||
                                    t === n.m.p ||
                                    e.preventDefault();
                            },
                            useComboBoxAsMenuWidth: !0,
                        })
                    );
                };
            g.displayName = 'TimePicker';
            var b = function (e, t, o, i) {
                    var r = new Date(e.getTime());
                    if (i) {
                        var n = y(i),
                            s = 'start' === t ? n.start : n.end;
                        r.getHours() !== s && r.setHours(s);
                    } else 'end' === t && r.setDate(r.getDate() + 1);
                    return (
                        r.setMinutes(0),
                        r.setSeconds(0),
                        r.setMilliseconds(0),
                        (0, a.Wp)(r, o)
                    );
                },
                y = function (e) {
                    return {
                        start: Math.min(Math.max(e.start, 0), 23),
                        end: Math.min(Math.max(e.end, 0), 23),
                    };
                },
                x = function (e, t) {
                    var o = (function (e) {
                        var t = l.r.HoursInOneDay;
                        if (e) {
                            var o = y(e);
                            o.start > o.end
                                ? (t = l.r.HoursInOneDay - e.start - e.end)
                                : e.end > e.start && (t = e.end - e.start);
                        }
                        return t;
                    })(t);
                    return Math.floor((l.r.MinutesInOneHour * o) / e);
                };
        },
        83666: (e, t, o) => {
            o.d(t, {Z: () => g});
            var i = o(98621),
                r = o(96583),
                n = o(65812),
                a = o(71387),
                s = o(36626),
                l = o(11599),
                d = o(48782),
                c = o(66430),
                u = o(11839),
                p = (0, l.y)(),
                m = 'Toggle',
                h = n.forwardRef(function (e, t) {
                    var o = e.as,
                        i = void 0 === o ? 'div' : o,
                        l = e.ariaLabel,
                        h = e.checked,
                        f = e.className,
                        g = e.defaultChecked,
                        b = void 0 !== g && g,
                        y = e.disabled,
                        x = e.inlineLabel,
                        C = e.label,
                        _ = e.offAriaLabel,
                        k = e.offText,
                        w = e.onAriaLabel,
                        N = e.onChange,
                        T = e.onChanged,
                        S = e.onClick,
                        E = e.onText,
                        F = e.role,
                        B = e.styles,
                        I = e.theme,
                        L = (0, a.G)(
                            h,
                            b,
                            n.useCallback(
                                function (e, t) {
                                    null == N || N(e, t), null == T || T(t);
                                },
                                [N, T]
                            )
                        ),
                        R = L[0],
                        P = L[1],
                        O = p(B, {
                            theme: I,
                            className: f,
                            disabled: y,
                            checked: R,
                            inlineLabel: x,
                            onOffMissing: !E && !k,
                        }),
                        D = R ? w : _,
                        M = (0, s.M)(m, e.id),
                        V = ''.concat(M, '-label'),
                        H = ''.concat(M, '-stateText'),
                        q = R ? E : k,
                        A = (0, d.pq)(e, d.Gg, ['defaultChecked']),
                        z = void 0;
                    l || D || (C && (z = V), q && !z && (z = H));
                    var G = n.useRef(null);
                    (0, c.Pr)(G), v(e, R, G);
                    var J = {
                        root: {className: O.root, hidden: A.hidden},
                        label: {
                            children: C,
                            className: O.label,
                            htmlFor: M,
                            id: V,
                        },
                        container: {className: O.container},
                        pill: (0, r.pi)((0, r.pi)({}, A), {
                            'aria-disabled': y,
                            'aria-checked': R,
                            'aria-label': l || D,
                            'aria-labelledby': z,
                            className: O.pill,
                            'data-is-focusable': !0,
                            'data-ktp-target': !0,
                            disabled: y,
                            id: M,
                            onClick: function (e) {
                                y || (P(!R, e), S && S(e));
                            },
                            ref: G,
                            role: F || 'switch',
                            type: 'button',
                        }),
                        thumb: {className: O.thumb},
                        stateText: {
                            children: q,
                            className: O.text,
                            htmlFor: M,
                            id: H,
                        },
                    };
                    return n.createElement(
                        i,
                        (0, r.pi)({ref: t}, J.root),
                        C && n.createElement(u._, (0, r.pi)({}, J.label)),
                        n.createElement(
                            'div',
                            (0, r.pi)({}, J.container),
                            n.createElement(
                                'button',
                                (0, r.pi)({}, J.pill),
                                n.createElement('span', (0, r.pi)({}, J.thumb))
                            ),
                            ((R && E) || k) &&
                                n.createElement(u._, (0, r.pi)({}, J.stateText))
                        )
                    );
                });
            h.displayName = m + 'Base';
            var v = function (e, t, o) {
                    n.useImperativeHandle(
                        e.componentRef,
                        function () {
                            return {
                                get checked() {
                                    return !!t;
                                },
                                focus: function () {
                                    o.current && o.current.focus();
                                },
                            };
                        },
                        [t, o]
                    );
                },
                f = o(85446),
                g = (0, i.z)(
                    h,
                    function (e) {
                        var t,
                            o,
                            i,
                            n,
                            a,
                            s,
                            l,
                            d = e.theme,
                            c = e.className,
                            u = e.disabled,
                            p = e.checked,
                            m = e.inlineLabel,
                            h = e.onOffMissing,
                            v = d.semanticColors,
                            g = d.palette,
                            b = v.bodyBackground,
                            y = v.inputBackgroundChecked,
                            x = v.inputBackgroundCheckedHovered,
                            C = g.neutralDark,
                            _ = v.disabledBodySubtext,
                            k = v.smallInputBorder,
                            w = v.inputForegroundChecked,
                            N = v.disabledBodySubtext,
                            T = v.disabledBackground,
                            S = v.smallInputBorder,
                            E = v.inputBorderHovered,
                            F = v.disabledBodySubtext,
                            B = v.disabledText;
                        return {
                            root: [
                                'ms-Toggle',
                                p && 'is-checked',
                                !u && 'is-enabled',
                                u && 'is-disabled',
                                d.fonts.medium,
                                {marginBottom: '8px'},
                                m && {display: 'flex', alignItems: 'center'},
                                c,
                            ],
                            label: [
                                'ms-Toggle-label',
                                {display: 'inline-block'},
                                u && {
                                    color: B,
                                    selectors:
                                        ((t = {}),
                                        (t[f.qJ] = {color: 'GrayText'}),
                                        t),
                                },
                                m && !h && {marginRight: 16},
                                h && m && {order: 1, marginLeft: 16},
                                m && {wordBreak: 'break-word'},
                            ],
                            container: [
                                'ms-Toggle-innerContainer',
                                {display: 'flex', position: 'relative'},
                            ],
                            pill: [
                                'ms-Toggle-background',
                                (0, f.GL)(d, {inset: -3}),
                                {
                                    fontSize: '20px',
                                    boxSizing: 'border-box',
                                    width: 40,
                                    height: 20,
                                    borderRadius: 10,
                                    transition: 'all 0.1s ease',
                                    border: '1px solid '.concat(S),
                                    background: b,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '0 3px',
                                    overflow: 'visible',
                                },
                                !u && [
                                    !p && {
                                        selectors: {
                                            ':hover': [{borderColor: E}],
                                            ':hover .ms-Toggle-thumb': [
                                                {
                                                    backgroundColor: C,
                                                    selectors:
                                                        ((o = {}),
                                                        (o[f.qJ] = {
                                                            borderColor:
                                                                'Highlight',
                                                        }),
                                                        o),
                                                },
                                            ],
                                        },
                                    },
                                    p && [
                                        {
                                            background: y,
                                            borderColor: 'transparent',
                                            justifyContent: 'flex-end',
                                        },
                                        {
                                            selectors:
                                                ((i = {
                                                    ':hover': [
                                                        {
                                                            backgroundColor: x,
                                                            borderColor:
                                                                'transparent',
                                                            selectors:
                                                                ((n = {}),
                                                                (n[f.qJ] = {
                                                                    backgroundColor:
                                                                        'Highlight',
                                                                }),
                                                                n),
                                                        },
                                                    ],
                                                }),
                                                (i[f.qJ] = (0, r.pi)(
                                                    {
                                                        backgroundColor:
                                                            'Highlight',
                                                    },
                                                    (0, f.xM)()
                                                )),
                                                i),
                                        },
                                    ],
                                ],
                                u && [
                                    {cursor: 'default'},
                                    !p && [{borderColor: F}],
                                    p && [
                                        {
                                            backgroundColor: _,
                                            borderColor: 'transparent',
                                            justifyContent: 'flex-end',
                                        },
                                    ],
                                ],
                                !u && {
                                    selectors: {
                                        '&:hover': {
                                            selectors:
                                                ((a = {}),
                                                (a[f.qJ] = {
                                                    borderColor: 'Highlight',
                                                }),
                                                a),
                                        },
                                    },
                                },
                            ],
                            thumb: [
                                'ms-Toggle-thumb',
                                {
                                    display: 'block',
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    transition: 'all 0.1s ease',
                                    backgroundColor: k,
                                    borderColor: 'transparent',
                                    borderWidth: 6,
                                    borderStyle: 'solid',
                                    boxSizing: 'border-box',
                                },
                                !u &&
                                    p && [
                                        {
                                            backgroundColor: w,
                                            selectors:
                                                ((s = {}),
                                                (s[f.qJ] = {
                                                    backgroundColor: 'Window',
                                                    borderColor: 'Window',
                                                }),
                                                s),
                                        },
                                    ],
                                u && [
                                    !p && [{backgroundColor: N}],
                                    p && [{backgroundColor: T}],
                                ],
                            ],
                            text: [
                                'ms-Toggle-stateText',
                                {
                                    selectors: {
                                        '&&': {
                                            padding: '0',
                                            margin: '0 8px',
                                            userSelect: 'none',
                                            fontWeight: f.lq.regular,
                                        },
                                    },
                                },
                                u && {
                                    selectors: {
                                        '&&': {
                                            color: B,
                                            selectors:
                                                ((l = {}),
                                                (l[f.qJ] = {color: 'GrayText'}),
                                                l),
                                        },
                                    },
                                },
                            ],
                        };
                    },
                    void 0,
                    {scope: 'Toggle'}
                );
        },
    },
]);
