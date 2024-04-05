'use strict';
(self.webpackChunkdash_query_builder =
    self.webpackChunkdash_query_builder || []).push([
    [852],
    {
        56842: (e, t, o) => {
            o.d(t, {r: () => i});
            var n = o(33010),
                r = o(65812);
            function i() {
                var e = r.useRef();
                return (
                    e.current || (e.current = new n.e()),
                    r.useEffect(function () {
                        return function () {
                            var t;
                            null === (t = e.current) ||
                                void 0 === t ||
                                t.dispose(),
                                (e.current = void 0);
                        };
                    }, []),
                    e.current
                );
            }
        },
        54008: (e, t, o) => {
            o.d(t, {B: () => r});
            var n = o(65812);
            function r(e) {
                var t = n.useRef();
                return (
                    void 0 === t.current &&
                        (t.current = {value: 'function' == typeof e ? e() : e}),
                    t.current.value
                );
            }
        },
        71387: (e, t, o) => {
            o.d(t, {G: () => i});
            var n = o(65812),
                r = o(54008);
            function i(e, t, o) {
                var i = n.useState(t),
                    a = i[0],
                    l = i[1],
                    s = (0, r.B)(void 0 !== e),
                    u = s ? e : a,
                    c = n.useRef(u),
                    d = n.useRef(o);
                n.useEffect(function () {
                    (c.current = u), (d.current = o);
                });
                var p = (0, r.B)(function () {
                    return function (e, t) {
                        var o = 'function' == typeof e ? e(c.current) : e;
                        d.current && d.current(t, o), s || l(o);
                    };
                });
                return [u, p];
            }
        },
        33223: (e, t, o) => {
            o.d(t, {$: () => a});
            var n = o(65812),
                r = o(54008),
                i = o(6906);
            function a(e) {
                var t = n.useRef(function () {
                    throw new Error(
                        'Cannot call an event handler while rendering'
                    );
                });
                return (
                    (0, i.L)(
                        function () {
                            t.current = e;
                        },
                        [e]
                    ),
                    (0, r.B)(function () {
                        return function () {
                            for (var e = [], o = 0; o < arguments.length; o++)
                                e[o] = arguments[o];
                            return t.current.apply(void 0, e);
                        };
                    })
                );
            }
        },
        36626: (e, t, o) => {
            o.d(t, {M: () => i});
            var n = o(65812),
                r = o(83510);
            function i(e, t) {
                var o = n.useRef(t);
                return o.current || (o.current = (0, r.z)(e)), o.current;
            }
        },
        267: (e, t, o) => {
            o.d(t, {r: () => i});
            var n = o(96583),
                r = o(65812);
            function i() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                var o = r.useCallback(
                    function (t) {
                        o.current = t;
                        for (var n = 0, r = e; n < r.length; n++) {
                            var i = r[n];
                            'function' == typeof i
                                ? i(t)
                                : i && (i.current = t);
                        }
                    },
                    (0, n.ev)([], e, !0)
                );
                return o;
            }
        },
        73298: (e, t, o) => {
            o.d(t, {d: () => i});
            var n = o(14040),
                r = o(65812);
            function i(e, t, o, i) {
                var a = r.useRef(o);
                (a.current = o),
                    r.useEffect(
                        function () {
                            var o = e && 'current' in e ? e.current : e;
                            if (o && o.addEventListener)
                                return (0, n.on)(
                                    o,
                                    t,
                                    function (e) {
                                        return a.current(e);
                                    },
                                    i
                                );
                        },
                        [e, t, i]
                    );
            }
        },
        85968: (e, t, o) => {
            o.d(t, {D: () => r});
            var n = o(65812);
            function r(e) {
                var t = (0, n.useRef)();
                return (
                    (0, n.useEffect)(function () {
                        t.current = e;
                    }),
                    t.current
                );
            }
        },
        72513: (e, t, o) => {
            o.d(t, {L: () => i});
            var n = o(65812),
                r = o(54008),
                i = function () {
                    var e = (0, r.B)({});
                    return (
                        n.useEffect(
                            function () {
                                return function () {
                                    for (
                                        var t = 0, o = Object.keys(e);
                                        t < o.length;
                                        t++
                                    ) {
                                        var n = o[t];
                                        clearTimeout(n);
                                    }
                                };
                            },
                            [e]
                        ),
                        (0, r.B)({
                            setTimeout: function (t, o) {
                                var n = setTimeout(t, o);
                                return (e[n] = 1), n;
                            },
                            clearTimeout: function (t) {
                                delete e[t], clearTimeout(t);
                            },
                        })
                    );
                };
        },
        92824: (e, t, o) => {
            o.d(t, {e: () => a});
            var n = o(62032),
                r = o(65812),
                i = o(63442);
            function a(e, t) {
                var o = r.useRef(),
                    a = r.useRef(null),
                    l = (0, i.zY)();
                if (!e || e !== o.current || 'string' == typeof e) {
                    var s = null == t ? void 0 : t.current;
                    if (e)
                        if ('string' == typeof e) {
                            var u = (0, n.M)(s);
                            a.current = u ? u.querySelector(e) : null;
                        } else
                            a.current =
                                'stopPropagation' in e ||
                                'getBoundingClientRect' in e
                                    ? e
                                    : 'current' in e
                                      ? e.current
                                      : e;
                    o.current = e;
                }
                return [a, l];
            }
        },
        69438: (e, t, o) => {
            o.d(t, {k: () => r});
            var n = o(65812),
                r = function (e) {
                    var t = n.useRef(e);
                    (t.current = e),
                        n.useEffect(function () {
                            return function () {
                                var e;
                                null === (e = t.current) ||
                                    void 0 === e ||
                                    e.call(t);
                            };
                        }, []);
                };
        },
        96696: (e, t, o) => {
            function n(e) {}
            o.d(t, {N: () => n}), o(65812);
        },
        20771: (e, t, o) => {
            o.d(t, {G: () => a});
            var n = o(65812),
                r = n.createContext(void 0),
                i = function () {
                    return function () {};
                };
            function a() {
                var e;
                return null !== (e = n.useContext(r)) && void 0 !== e ? e : i;
            }
            r.Provider;
        },
        63442: (e, t, o) => {
            o.d(t, {Hn: () => r, ky: () => a, zY: () => i});
            var n = o(65812),
                r = n.createContext({
                    window: 'object' == typeof window ? window : void 0,
                }),
                i = function () {
                    return n.useContext(r).window;
                },
                a = function () {
                    var e;
                    return null === (e = n.useContext(r).window) || void 0 === e
                        ? void 0
                        : e.document;
                };
        },
        53222: (e, t, o) => {
            o.d(t, {b: () => n});
            var n = {
                topLeftEdge: 0,
                topCenter: 1,
                topRightEdge: 2,
                topAutoEdge: 3,
                bottomLeftEdge: 4,
                bottomCenter: 5,
                bottomRightEdge: 6,
                bottomAutoEdge: 7,
                leftTopEdge: 8,
                leftCenter: 9,
                leftBottomEdge: 10,
                rightTopEdge: 11,
                rightCenter: 12,
                rightBottomEdge: 13,
            };
        },
        90066: (e, t, o) => {
            o.d(t, {G: () => m});
            var n = o(96583),
                r = o(65812),
                i = o(40838),
                a = o(28642),
                l = o(96208),
                s = o(33010),
                u = o(62032),
                c = o(48782),
                d = o(63442),
                p = 'backward',
                m = (function (e) {
                    function t(t) {
                        var o = e.call(this, t) || this;
                        return (
                            (o._inputElement = r.createRef()),
                            (o._autoFillEnabled = !0),
                            (o._onCompositionStart = function (e) {
                                o.setState({isComposing: !0}),
                                    (o._autoFillEnabled = !1);
                            }),
                            (o._onCompositionUpdate = function () {
                                (0, i.f)() &&
                                    o._updateValue(
                                        o._getCurrentInputValue(),
                                        !0
                                    );
                            }),
                            (o._onCompositionEnd = function (e) {
                                var t = o._getCurrentInputValue();
                                o._tryEnableAutofill(t, o.value, !1, !0),
                                    o.setState({isComposing: !1}),
                                    o._async.setTimeout(function () {
                                        o._updateValue(
                                            o._getCurrentInputValue(),
                                            !1
                                        );
                                    }, 0);
                            }),
                            (o._onClick = function () {
                                o.value &&
                                    '' !== o.value &&
                                    o._autoFillEnabled &&
                                    (o._autoFillEnabled = !1);
                            }),
                            (o._onKeyDown = function (e) {
                                if (
                                    (o.props.onKeyDown && o.props.onKeyDown(e),
                                    !e.nativeEvent.isComposing)
                                )
                                    switch (e.which) {
                                        case a.m.backspace:
                                            o._autoFillEnabled = !1;
                                            break;
                                        case a.m.left:
                                        case a.m.right:
                                            o._autoFillEnabled &&
                                                (o.setState(function (e) {
                                                    return {
                                                        inputValue:
                                                            o.props
                                                                .suggestedDisplayValue ||
                                                            e.inputValue,
                                                    };
                                                }),
                                                (o._autoFillEnabled = !1));
                                            break;
                                        default:
                                            o._autoFillEnabled ||
                                                (-1 !==
                                                    o.props.enableAutofillOnKeyPress.indexOf(
                                                        e.which
                                                    ) &&
                                                    (o._autoFillEnabled = !0));
                                    }
                            }),
                            (o._onInputChanged = function (e) {
                                var t = o._getCurrentInputValue(e);
                                if (
                                    (o.state.isComposing ||
                                        o._tryEnableAutofill(
                                            t,
                                            o.value,
                                            e.nativeEvent.isComposing
                                        ),
                                    !(0, i.f)() || !o.state.isComposing)
                                ) {
                                    var n = e.nativeEvent.isComposing,
                                        r =
                                            void 0 === n
                                                ? o.state.isComposing
                                                : n;
                                    o._updateValue(t, r);
                                }
                            }),
                            (o._onChanged = function () {}),
                            (o._updateValue = function (e, t) {
                                if (e || e !== o.value) {
                                    var n = o.props,
                                        r = n.onInputChange,
                                        i = n.onInputValueChange;
                                    r &&
                                        (e =
                                            (null == r ? void 0 : r(e, t)) ||
                                            ''),
                                        o.setState(
                                            {inputValue: e},
                                            function () {
                                                return null == i
                                                    ? void 0
                                                    : i(e, t);
                                            }
                                        );
                                }
                            }),
                            (0, l.l)(o),
                            (o._async = new s.e(o)),
                            (o.state = {
                                inputValue: t.defaultVisibleValue || '',
                                isComposing: !1,
                            }),
                            o
                        );
                    }
                    return (
                        (0, n.ZT)(t, e),
                        (t.getDerivedStateFromProps = function (e, t) {
                            if (e.updateValueInWillReceiveProps) {
                                var o = e.updateValueInWillReceiveProps();
                                if (
                                    null !== o &&
                                    o !== t.inputValue &&
                                    !t.isComposing
                                )
                                    return (0, n.pi)((0, n.pi)({}, t), {
                                        inputValue: o,
                                    });
                            }
                            return null;
                        }),
                        Object.defineProperty(t.prototype, 'cursorLocation', {
                            get: function () {
                                if (this._inputElement.current) {
                                    var e = this._inputElement.current;
                                    return 'forward' !== e.selectionDirection
                                        ? e.selectionEnd
                                        : e.selectionStart;
                                }
                                return -1;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'isValueSelected', {
                            get: function () {
                                return Boolean(
                                    this.inputElement &&
                                        this.inputElement.selectionStart !==
                                            this.inputElement.selectionEnd
                                );
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'value', {
                            get: function () {
                                return (
                                    this._getControlledValue() ||
                                    this.state.inputValue ||
                                    ''
                                );
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'selectionStart', {
                            get: function () {
                                return this._inputElement.current
                                    ? this._inputElement.current.selectionStart
                                    : -1;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'selectionEnd', {
                            get: function () {
                                return this._inputElement.current
                                    ? this._inputElement.current.selectionEnd
                                    : -1;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, 'inputElement', {
                            get: function () {
                                return this._inputElement.current;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.componentDidUpdate = function (e, t, o) {
                            var n,
                                r = this.props,
                                i = r.suggestedDisplayValue,
                                a =
                                    r.shouldSelectFullInputValueInComponentDidUpdate,
                                l = 0;
                            if (!r.preventValueSelection) {
                                var s =
                                    (null === (n = this.context) || void 0 === n
                                        ? void 0
                                        : n.window.document) ||
                                    (0, u.M)(this._inputElement.current);
                                if (
                                    this._inputElement.current &&
                                    this._inputElement.current ===
                                        (null == s
                                            ? void 0
                                            : s.activeElement) &&
                                    this._autoFillEnabled &&
                                    this.value &&
                                    i &&
                                    h(i, this.value)
                                ) {
                                    var c = !1;
                                    if ((a && (c = a()), c))
                                        this._inputElement.current.setSelectionRange(
                                            0,
                                            i.length,
                                            p
                                        );
                                    else {
                                        for (
                                            ;
                                            l < this.value.length &&
                                            this.value[
                                                l
                                            ].toLocaleLowerCase() ===
                                                i[l].toLocaleLowerCase();

                                        )
                                            l++;
                                        l > 0 &&
                                            this._inputElement.current.setSelectionRange(
                                                l,
                                                i.length,
                                                p
                                            );
                                    }
                                } else
                                    this._inputElement.current &&
                                        (null === o ||
                                            this._autoFillEnabled ||
                                            this.state.isComposing ||
                                            this._inputElement.current.setSelectionRange(
                                                o.start,
                                                o.end,
                                                o.dir
                                            ));
                            }
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            this._async.dispose();
                        }),
                        (t.prototype.render = function () {
                            var e = (0, c.pq)(this.props, c.Gg),
                                t = (0, n.pi)((0, n.pi)({}, this.props.style), {
                                    fontFamily: 'inherit',
                                });
                            return r.createElement(
                                'input',
                                (0, n.pi)(
                                    {
                                        autoCapitalize: 'off',
                                        autoComplete: 'off',
                                        'aria-autocomplete': 'both',
                                    },
                                    e,
                                    {
                                        style: t,
                                        ref: this._inputElement,
                                        value: this._getDisplayValue(),
                                        onCompositionStart:
                                            this._onCompositionStart,
                                        onCompositionUpdate:
                                            this._onCompositionUpdate,
                                        onCompositionEnd:
                                            this._onCompositionEnd,
                                        onChange: this._onChanged,
                                        onInput: this._onInputChanged,
                                        onKeyDown: this._onKeyDown,
                                        onClick: this.props.onClick
                                            ? this.props.onClick
                                            : this._onClick,
                                        'data-lpignore': !0,
                                    }
                                )
                            );
                        }),
                        (t.prototype.focus = function () {
                            this._inputElement.current &&
                                this._inputElement.current.focus();
                        }),
                        (t.prototype.clear = function () {
                            (this._autoFillEnabled = !0),
                                this._updateValue('', !1),
                                this._inputElement.current &&
                                    this._inputElement.current.setSelectionRange(
                                        0,
                                        0
                                    );
                        }),
                        (t.prototype.getSnapshotBeforeUpdate = function () {
                            var e,
                                t,
                                o = this._inputElement.current;
                            return o && o.selectionStart !== this.value.length
                                ? {
                                      start:
                                          null !== (e = o.selectionStart) &&
                                          void 0 !== e
                                              ? e
                                              : o.value.length,
                                      end:
                                          null !== (t = o.selectionEnd) &&
                                          void 0 !== t
                                              ? t
                                              : o.value.length,
                                      dir: o.selectionDirection || 'backward',
                                  }
                                : null;
                        }),
                        (t.prototype._getCurrentInputValue = function (e) {
                            return e && e.target && e.target.value
                                ? e.target.value
                                : this.inputElement && this.inputElement.value
                                  ? this.inputElement.value
                                  : '';
                        }),
                        (t.prototype._tryEnableAutofill = function (
                            e,
                            t,
                            o,
                            n
                        ) {
                            !o &&
                                e &&
                                this._inputElement.current &&
                                this._inputElement.current.selectionStart ===
                                    e.length &&
                                !this._autoFillEnabled &&
                                (e.length > t.length || n) &&
                                (this._autoFillEnabled = !0);
                        }),
                        (t.prototype._getDisplayValue = function () {
                            return this._autoFillEnabled
                                ? ((e = this.value),
                                  (t = this.props.suggestedDisplayValue),
                                  (o = e),
                                  t && e && h(t, o) && (o = t),
                                  o)
                                : this.value;
                            var e, t, o;
                        }),
                        (t.prototype._getControlledValue = function () {
                            var e = this.props.value;
                            return void 0 === e || 'string' == typeof e
                                ? e
                                : (console.warn(
                                      'props.value of Autofill should be a string, but it is '
                                          .concat(e, ' with type of ')
                                          .concat(typeof e)
                                  ),
                                  e.toString());
                        }),
                        (t.defaultProps = {
                            enableAutofillOnKeyPress: [a.m.down, a.m.up],
                        }),
                        (t.contextType = d.Hn),
                        t
                    );
                })(r.Component);
            function h(e, t) {
                return (
                    !(!e || !t) &&
                    0 === e.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())
                );
            }
        },
        49864: (e, t, o) => {
            o.d(t, {K: () => p});
            var n = o(96583),
                r = o(65812),
                i = o(97866),
                a = o(83175),
                l = o(17948),
                s = o(85446),
                u = o(25607),
                c = o(67802),
                d = (0, u.NF)(function (e, t) {
                    var o,
                        n,
                        r,
                        i = (0, c.W)(e),
                        a = {
                            root: {
                                padding: '0 4px',
                                height: '40px',
                                color: e.palette.neutralPrimary,
                                backgroundColor: 'transparent',
                                border: '1px solid transparent',
                                selectors:
                                    ((o = {}),
                                    (o[s.qJ] = {borderColor: 'Window'}),
                                    o),
                            },
                            rootHovered: {
                                color: e.palette.themePrimary,
                                selectors:
                                    ((n = {}),
                                    (n[s.qJ] = {color: 'Highlight'}),
                                    n),
                            },
                            iconHovered: {color: e.palette.themePrimary},
                            rootPressed: {color: e.palette.black},
                            rootExpanded: {color: e.palette.themePrimary},
                            iconPressed: {color: e.palette.themeDarker},
                            rootDisabled: {
                                color: e.palette.neutralTertiary,
                                backgroundColor: 'transparent',
                                borderColor: 'transparent',
                                selectors:
                                    ((r = {}),
                                    (r[s.qJ] = {color: 'GrayText'}),
                                    r),
                            },
                            rootChecked: {color: e.palette.black},
                            iconChecked: {color: e.palette.themeDarker},
                            flexContainer: {justifyContent: 'flex-start'},
                            icon: {color: e.palette.themeDarkAlt},
                            iconDisabled: {color: 'inherit'},
                            menuIcon: {color: e.palette.neutralSecondary},
                            textContainer: {flexGrow: 0},
                        };
                    return (0, s.E$)(i, a, t);
                }),
                p = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        (0, n.ZT)(t, e),
                        (t.prototype.render = function () {
                            var e = this.props,
                                t = e.styles,
                                o = e.theme;
                            return r.createElement(
                                i.Y,
                                (0, n.pi)({}, this.props, {
                                    variantClassName:
                                        'ms-Button--action ms-Button--command',
                                    styles: d(o, t),
                                    onRenderDescription: a.S,
                                })
                            );
                        }),
                        (0, n.gn)(
                            [(0, l.a)('ActionButton', ['theme', 'styles'], !0)],
                            t
                        )
                    );
                })(r.Component);
        },
        6559: (e, t, o) => {
            o.d(t, {f: () => a, n: () => i});
            var n = o(25607),
                r = o(85446),
                i = {
                    msButton: 'ms-Button',
                    msButtonHasMenu: 'ms-Button--hasMenu',
                    msButtonIcon: 'ms-Button-icon',
                    msButtonMenuIcon: 'ms-Button-menuIcon',
                    msButtonLabel: 'ms-Button-label',
                    msButtonDescription: 'ms-Button-description',
                    msButtonScreenReaderText: 'ms-Button-screenReaderText',
                    msButtonFlexContainer: 'ms-Button-flexContainer',
                    msButtonTextContainer: 'ms-Button-textContainer',
                },
                a = (0, n.NF)(function (e, t, o, n, a, l, s, u, c, d, p) {
                    var m,
                        h,
                        g = (0, r.Cn)(i, e || {}),
                        f = d && !p;
                    return (0, r.ZC)({
                        root: [
                            g.msButton,
                            t.root,
                            n,
                            c && ['is-checked', t.rootChecked],
                            f && [
                                'is-expanded',
                                t.rootExpanded,
                                {
                                    selectors:
                                        ((m = {}),
                                        (m[':hover .'.concat(g.msButtonIcon)] =
                                            t.iconExpandedHovered),
                                        (m[
                                            ':hover .'.concat(
                                                g.msButtonMenuIcon
                                            )
                                        ] =
                                            t.menuIconExpandedHovered ||
                                            t.rootExpandedHovered),
                                        (m[':hover'] = t.rootExpandedHovered),
                                        m),
                                },
                            ],
                            u && [i.msButtonHasMenu, t.rootHasMenu],
                            s && ['is-disabled', t.rootDisabled],
                            !s &&
                                !f &&
                                !c && {
                                    selectors:
                                        ((h = {':hover': t.rootHovered}),
                                        (h[':hover .'.concat(g.msButtonLabel)] =
                                            t.labelHovered),
                                        (h[':hover .'.concat(g.msButtonIcon)] =
                                            t.iconHovered),
                                        (h[
                                            ':hover .'.concat(
                                                g.msButtonDescription
                                            )
                                        ] = t.descriptionHovered),
                                        (h[
                                            ':hover .'.concat(
                                                g.msButtonMenuIcon
                                            )
                                        ] = t.menuIconHovered),
                                        (h[':focus'] = t.rootFocused),
                                        (h[':active'] = t.rootPressed),
                                        (h[':active .'.concat(g.msButtonIcon)] =
                                            t.iconPressed),
                                        (h[
                                            ':active .'.concat(
                                                g.msButtonDescription
                                            )
                                        ] = t.descriptionPressed),
                                        (h[
                                            ':active .'.concat(
                                                g.msButtonMenuIcon
                                            )
                                        ] = t.menuIconPressed),
                                        h),
                                },
                            s && c && [t.rootCheckedDisabled],
                            !s &&
                                c && {
                                    selectors: {
                                        ':hover': t.rootCheckedHovered,
                                        ':active': t.rootCheckedPressed,
                                    },
                                },
                            o,
                        ],
                        flexContainer: [
                            g.msButtonFlexContainer,
                            t.flexContainer,
                        ],
                        textContainer: [
                            g.msButtonTextContainer,
                            t.textContainer,
                        ],
                        icon: [
                            g.msButtonIcon,
                            a,
                            t.icon,
                            f && t.iconExpanded,
                            c && t.iconChecked,
                            s && t.iconDisabled,
                        ],
                        label: [
                            g.msButtonLabel,
                            t.label,
                            c && t.labelChecked,
                            s && t.labelDisabled,
                        ],
                        menuIcon: [
                            g.msButtonMenuIcon,
                            l,
                            t.menuIcon,
                            c && t.menuIconChecked,
                            s && !p && t.menuIconDisabled,
                            !s &&
                                !f &&
                                !c && {
                                    selectors: {
                                        ':hover': t.menuIconHovered,
                                        ':active': t.menuIconPressed,
                                    },
                                },
                            f && ['is-expanded', t.menuIconExpanded],
                        ],
                        description: [
                            g.msButtonDescription,
                            t.description,
                            c && t.descriptionChecked,
                            s && t.descriptionDisabled,
                        ],
                        screenReaderText: [
                            g.msButtonScreenReaderText,
                            t.screenReaderText,
                        ],
                    });
                });
        },
        97866: (e, t, o) => {
            o.d(t, {Y: () => I});
            var n = o(96583),
                r = o(65812),
                i = o(28190),
                a = o(25607),
                l = o(99976),
                s = o(23379),
                u = o(28642),
                c = o(98289),
                d = o(96208),
                p = o(33010),
                m = o(60702),
                h = o(18337),
                g = o(2463),
                f = o(83510),
                v = o(48782),
                b = o(90279),
                y = o(83175),
                C = o(66430),
                k = o(93484),
                D = o(56316),
                w = o(39758),
                B = o(6583),
                x = o(53222),
                _ = o(76615),
                E = o(6559),
                S = o(85446),
                N = (0, a.NF)(function (e, t, o, n, r) {
                    return {
                        root: (0, S.y0)(
                            e.splitButtonMenuButton,
                            o && [e.splitButtonMenuButtonExpanded],
                            t && [e.splitButtonMenuButtonDisabled],
                            n && !t && [e.splitButtonMenuButtonChecked],
                            r &&
                                !t && [
                                    {
                                        selectors: {
                                            ':focus': e.splitButtonMenuFocused,
                                        },
                                    },
                                ]
                        ),
                        splitButtonContainer: (0, S.y0)(
                            e.splitButtonContainer,
                            !t &&
                                n && [
                                    e.splitButtonContainerChecked,
                                    {
                                        selectors: {
                                            ':hover':
                                                e.splitButtonContainerCheckedHovered,
                                        },
                                    },
                                ],
                            !t &&
                                !n && [
                                    {
                                        selectors: {
                                            ':hover':
                                                e.splitButtonContainerHovered,
                                            ':focus':
                                                e.splitButtonContainerFocused,
                                        },
                                    },
                                ],
                            t && e.splitButtonContainerDisabled
                        ),
                        icon: (0, S.y0)(
                            e.splitButtonMenuIcon,
                            t && e.splitButtonMenuIconDisabled,
                            !t && r && e.splitButtonMenuIcon
                        ),
                        flexContainer: (0, S.y0)(e.splitButtonFlexContainer),
                        divider: (0, S.y0)(
                            e.splitButtonDivider,
                            (r || t) && e.splitButtonDividerDisabled
                        ),
                    };
                }),
                M = o(57174),
                R = o(39935),
                T = 'BaseButton',
                I = (function (e) {
                    function t(t) {
                        var o = e.call(this, t) || this;
                        return (
                            (o._buttonElement = r.createRef()),
                            (o._splitButtonContainer = r.createRef()),
                            (o._mergedRef = (0, i.S)()),
                            (o._renderedVisibleMenu = !1),
                            (o._getMemoizedMenuButtonKeytipProps = (0, a.NF)(
                                function (e) {
                                    return (0, n.pi)((0, n.pi)({}, e), {
                                        hasMenu: !0,
                                    });
                                }
                            )),
                            (o._onRenderIcon = function (e, t) {
                                var i = o.props.iconProps;
                                if (
                                    i &&
                                    (void 0 !== i.iconName || i.imageProps)
                                ) {
                                    var a = i.className,
                                        s = i.imageProps,
                                        u = (0, n._T)(i, [
                                            'className',
                                            'imageProps',
                                        ]);
                                    if (i.styles)
                                        return r.createElement(
                                            D.J,
                                            (0, n.pi)(
                                                {
                                                    className: (0, l.i)(
                                                        o._classNames.icon,
                                                        a
                                                    ),
                                                    imageProps: s,
                                                },
                                                u
                                            )
                                        );
                                    if (i.iconName)
                                        return r.createElement(
                                            w.xu,
                                            (0, n.pi)(
                                                {
                                                    className: (0, l.i)(
                                                        o._classNames.icon,
                                                        a
                                                    ),
                                                },
                                                u
                                            )
                                        );
                                    if (s)
                                        return r.createElement(
                                            B.X,
                                            (0, n.pi)(
                                                {
                                                    className: (0, l.i)(
                                                        o._classNames.icon,
                                                        a
                                                    ),
                                                    imageProps: s,
                                                },
                                                u
                                            )
                                        );
                                }
                                return null;
                            }),
                            (o._onRenderTextContents = function () {
                                var e = o.props,
                                    t = e.text,
                                    n = e.children,
                                    i = e.secondaryText,
                                    a = void 0 === i ? o.props.description : i,
                                    l = e.onRenderText,
                                    s = void 0 === l ? o._onRenderText : l,
                                    u = e.onRenderDescription,
                                    c =
                                        void 0 === u
                                            ? o._onRenderDescription
                                            : u;
                                return t || 'string' == typeof n || a
                                    ? r.createElement(
                                          'span',
                                          {
                                              className:
                                                  o._classNames.textContainer,
                                          },
                                          s(o.props, o._onRenderText),
                                          c(o.props, o._onRenderDescription)
                                      )
                                    : [
                                          s(o.props, o._onRenderText),
                                          c(o.props, o._onRenderDescription),
                                      ];
                            }),
                            (o._onRenderText = function () {
                                var e = o.props.text,
                                    t = o.props.children;
                                return (
                                    void 0 === e &&
                                        'string' == typeof t &&
                                        (e = t),
                                    o._hasText()
                                        ? r.createElement(
                                              'span',
                                              {
                                                  key: o._labelId,
                                                  className:
                                                      o._classNames.label,
                                                  id: o._labelId,
                                              },
                                              e
                                          )
                                        : null
                                );
                            }),
                            (o._onRenderChildren = function () {
                                var e = o.props.children;
                                return 'string' == typeof e ? null : e;
                            }),
                            (o._onRenderDescription = function (e) {
                                var t = e.secondaryText,
                                    n = void 0 === t ? o.props.description : t;
                                return n
                                    ? r.createElement(
                                          'span',
                                          {
                                              key: o._descriptionId,
                                              className:
                                                  o._classNames.description,
                                              id: o._descriptionId,
                                          },
                                          n
                                      )
                                    : null;
                            }),
                            (o._onRenderAriaDescription = function () {
                                var e = o.props.ariaDescription;
                                return e
                                    ? r.createElement(
                                          'span',
                                          {
                                              className:
                                                  o._classNames
                                                      .screenReaderText,
                                              id: o._ariaDescriptionId,
                                          },
                                          e
                                      )
                                    : null;
                            }),
                            (o._onRenderMenuIcon = function (e) {
                                var t = o.props.menuIconProps;
                                return r.createElement(
                                    w.xu,
                                    (0, n.pi)({iconName: 'ChevronDown'}, t, {
                                        className: o._classNames.menuIcon,
                                    })
                                );
                            }),
                            (o._onRenderMenu = function (e) {
                                var t = o.props.menuAs
                                    ? (0, R.Z)(o.props.menuAs, _.r)
                                    : _.r;
                                return r.createElement(t, (0, n.pi)({}, e));
                            }),
                            (o._onDismissMenu = function (e) {
                                var t = o.props.menuProps;
                                t && t.onDismiss && t.onDismiss(e),
                                    (e && e.defaultPrevented) ||
                                        o._dismissMenu();
                            }),
                            (o._dismissMenu = function () {
                                (o._menuShouldFocusOnMount = void 0),
                                    (o._menuShouldFocusOnContainer = void 0),
                                    o.setState({menuHidden: !0});
                            }),
                            (o._openMenu = function (e, t) {
                                void 0 === t && (t = !0),
                                    o.props.menuProps &&
                                        ((o._menuShouldFocusOnContainer = e),
                                        (o._menuShouldFocusOnMount = t),
                                        (o._renderedVisibleMenu = !0),
                                        o.setState({menuHidden: !1}));
                            }),
                            (o._onToggleMenu = function (e) {
                                var t = !0;
                                o.props.menuProps &&
                                    !1 ===
                                        o.props.menuProps.shouldFocusOnMount &&
                                    (t = !1),
                                    o.state.menuHidden
                                        ? o._openMenu(e, t)
                                        : o._dismissMenu();
                            }),
                            (o._onSplitContainerFocusCapture = function (e) {
                                var t = o._splitButtonContainer.current;
                                !t ||
                                    (e.target && (0, s.w)(e.target, t)) ||
                                    t.focus();
                            }),
                            (o._onSplitButtonPrimaryClick = function (e) {
                                o.state.menuHidden || o._dismissMenu();
                                var t = o._processingTouch && !o.props.toggle;
                                !t && o.props.onClick
                                    ? o.props.onClick(e)
                                    : t && o._onMenuClick(e);
                            }),
                            (o._onKeyDown = function (e) {
                                !o.props.disabled ||
                                (e.which !== u.m.enter && e.which !== u.m.space)
                                    ? o.props.disabled ||
                                      (o.props.menuProps
                                          ? o._onMenuKeyDown(e)
                                          : void 0 !== o.props.onKeyDown &&
                                            o.props.onKeyDown(e))
                                    : (e.preventDefault(), e.stopPropagation());
                            }),
                            (o._onKeyUp = function (e) {
                                o.props.disabled ||
                                    void 0 === o.props.onKeyUp ||
                                    o.props.onKeyUp(e);
                            }),
                            (o._onKeyPress = function (e) {
                                o.props.disabled ||
                                    void 0 === o.props.onKeyPress ||
                                    o.props.onKeyPress(e);
                            }),
                            (o._onMouseUp = function (e) {
                                o.props.disabled ||
                                    void 0 === o.props.onMouseUp ||
                                    o.props.onMouseUp(e);
                            }),
                            (o._onMouseDown = function (e) {
                                o.props.disabled ||
                                    void 0 === o.props.onMouseDown ||
                                    o.props.onMouseDown(e);
                            }),
                            (o._onClick = function (e) {
                                o.props.disabled ||
                                    (o.props.menuProps
                                        ? o._onMenuClick(e)
                                        : void 0 !== o.props.onClick &&
                                          o.props.onClick(e));
                            }),
                            (o._onSplitButtonContainerKeyDown = function (e) {
                                e.which === u.m.enter || e.which === u.m.space
                                    ? o._buttonElement.current &&
                                      (o._buttonElement.current.click(),
                                      e.preventDefault(),
                                      e.stopPropagation())
                                    : o._onMenuKeyDown(e);
                            }),
                            (o._onMenuKeyDown = function (e) {
                                var t;
                                if (!o.props.disabled) {
                                    o.props.onKeyDown && o.props.onKeyDown(e);
                                    var n = e.which === u.m.up,
                                        r = e.which === u.m.down;
                                    if (
                                        !e.defaultPrevented &&
                                        o._isValidMenuOpenKey(e)
                                    ) {
                                        var i = o.props.onMenuClick;
                                        i && i(e, o.props),
                                            o._onToggleMenu(!1),
                                            e.preventDefault(),
                                            e.stopPropagation();
                                    }
                                    (e.which !== u.m.enter &&
                                        e.which !== u.m.space) ||
                                        (0, c.MU)(
                                            !0,
                                            e.target,
                                            null === (t = o.context) ||
                                                void 0 === t
                                                ? void 0
                                                : t.registeredProviders
                                        ),
                                        e.altKey ||
                                            e.metaKey ||
                                            (!n && !r) ||
                                            (!o.state.menuHidden &&
                                                o.props.menuProps &&
                                                ((void 0 !==
                                                o._menuShouldFocusOnMount
                                                    ? o._menuShouldFocusOnMount
                                                    : o.props.menuProps
                                                          .shouldFocusOnMount) ||
                                                    (e.preventDefault(),
                                                    e.stopPropagation(),
                                                    (o._menuShouldFocusOnMount =
                                                        !0),
                                                    o.forceUpdate())));
                                }
                            }),
                            (o._onTouchStart = function () {
                                o._isSplitButton &&
                                    o._splitButtonContainer.current &&
                                    !(
                                        'onpointerdown' in
                                        o._splitButtonContainer.current
                                    ) &&
                                    o._handleTouchAndPointerEvent();
                            }),
                            (o._onMenuClick = function (e) {
                                var t = o.props,
                                    n = t.onMenuClick,
                                    r = t.menuProps;
                                n && n(e, o.props);
                                var i =
                                    'boolean' ==
                                    typeof (null == r
                                        ? void 0
                                        : r.shouldFocusOnContainer)
                                        ? r.shouldFocusOnContainer
                                        : 'mouse' === e.nativeEvent.pointerType;
                                e.defaultPrevented ||
                                    (o._onToggleMenu(i),
                                    e.preventDefault(),
                                    e.stopPropagation());
                            }),
                            (0, d.l)(o),
                            (o._async = new p.e(o)),
                            (o._events = new m.r(o)),
                            (0, h.w)(
                                T,
                                t,
                                ['menuProps', 'onClick'],
                                'split',
                                o.props.split
                            ),
                            (0, g.b)(T, t, {
                                rootProps: void 0,
                                description: 'secondaryText',
                                toggled: 'checked',
                            }),
                            (o._labelId = (0, f.z)()),
                            (o._descriptionId = (0, f.z)()),
                            (o._ariaDescriptionId = (0, f.z)()),
                            (o.state = {menuHidden: !0}),
                            o
                        );
                    }
                    return (
                        (0, n.ZT)(t, e),
                        Object.defineProperty(t.prototype, '_isSplitButton', {
                            get: function () {
                                return (
                                    !!this.props.menuProps &&
                                    !!this.props.onClick &&
                                    !0 === this.props.split
                                );
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.render = function () {
                            var e,
                                t = this.props,
                                o = t.ariaDescription,
                                n = t.ariaLabel,
                                r = t.ariaHidden,
                                i = t.className,
                                a = t.disabled,
                                l = t.allowDisabledFocus,
                                s = t.primaryDisabled,
                                u = t.secondaryText,
                                c = void 0 === u ? this.props.description : u,
                                d = t.href,
                                p = t.iconProps,
                                m = t.menuIconProps,
                                h = t.styles,
                                g = t.checked,
                                f = t.variantClassName,
                                C = t.theme,
                                k = t.toggle,
                                D = t.getClassNames,
                                w = t.role,
                                B = this.state.menuHidden,
                                x = a || s;
                            this._classNames = D
                                ? D(
                                      C,
                                      i,
                                      f,
                                      p && p.className,
                                      m && m.className,
                                      x,
                                      g,
                                      !B,
                                      !!this.props.menuProps,
                                      this.props.split,
                                      !!l
                                  )
                                : (0, E.f)(
                                      C,
                                      h,
                                      i,
                                      f,
                                      p && p.className,
                                      m && m.className,
                                      x,
                                      !!this.props.menuProps,
                                      g,
                                      !B,
                                      this.props.split
                                  );
                            var _ = this,
                                S = _._ariaDescriptionId,
                                N = _._labelId,
                                M = _._descriptionId,
                                R = !x && !!d,
                                T = R ? 'a' : 'button',
                                I = (0, v.pq)(
                                    (0, b.f0)(
                                        R ? {} : {type: 'button'},
                                        this.props.rootProps,
                                        this.props
                                    ),
                                    R ? v.h2 : v.Yq,
                                    ['disabled']
                                ),
                                P = n || I['aria-label'],
                                W = void 0;
                            o
                                ? (W = S)
                                : c && this.props.onRenderDescription !== y.S
                                  ? (W = M)
                                  : I['aria-describedby'] &&
                                    (W = I['aria-describedby']);
                            var H = void 0;
                            I['aria-labelledby']
                                ? (H = I['aria-labelledby'])
                                : W && !P && (H = this._hasText() ? N : void 0);
                            var F = !(
                                    !1 === this.props['data-is-focusable'] ||
                                    (a && !l) ||
                                    this._isSplitButton
                                ),
                                L =
                                    'menuitemcheckbox' === w ||
                                    'checkbox' === w,
                                Y = L || !0 === k ? !!g : void 0,
                                A = (0, b.f0)(
                                    I,
                                    (((e = {
                                        className: this._classNames.root,
                                        ref: this._mergedRef(
                                            this.props.elementRef,
                                            this._buttonElement
                                        ),
                                        disabled: x && !l,
                                        onKeyDown: this._onKeyDown,
                                        onKeyPress: this._onKeyPress,
                                        onKeyUp: this._onKeyUp,
                                        onMouseDown: this._onMouseDown,
                                        onMouseUp: this._onMouseUp,
                                        onClick: this._onClick,
                                        'aria-label': P,
                                        'aria-labelledby': H,
                                        'aria-describedby': W,
                                        'aria-disabled': x,
                                        'data-is-focusable': F,
                                    })[L ? 'aria-checked' : 'aria-pressed'] =
                                        Y),
                                    e)
                                );
                            if (
                                (r && (A['aria-hidden'] = !0),
                                this._isSplitButton)
                            )
                                return this._onRenderSplitButtonContent(T, A);
                            if (this.props.menuProps) {
                                var q = this.props.menuProps.id,
                                    O =
                                        void 0 === q
                                            ? ''.concat(this._labelId, '-menu')
                                            : q;
                                (0, b.f0)(A, {
                                    'aria-expanded': !B,
                                    'aria-controls': B ? null : O,
                                    'aria-haspopup': !0,
                                });
                            }
                            return this._onRenderContent(T, A);
                        }),
                        (t.prototype.componentDidMount = function () {
                            this._isSplitButton &&
                                this._splitButtonContainer.current &&
                                ('onpointerdown' in
                                    this._splitButtonContainer.current &&
                                    this._events.on(
                                        this._splitButtonContainer.current,
                                        'pointerdown',
                                        this._onPointerDown,
                                        !0
                                    ),
                                'onpointerup' in
                                    this._splitButtonContainer.current &&
                                    this.props.onPointerUp &&
                                    this._events.on(
                                        this._splitButtonContainer.current,
                                        'pointerup',
                                        this.props.onPointerUp,
                                        !0
                                    ));
                        }),
                        (t.prototype.componentDidUpdate = function (e, t) {
                            this.props.onAfterMenuDismiss &&
                                !t.menuHidden &&
                                this.state.menuHidden &&
                                this.props.onAfterMenuDismiss();
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            this._async.dispose(), this._events.dispose();
                        }),
                        (t.prototype.focus = function () {
                            var e, t;
                            this._isSplitButton &&
                            this._splitButtonContainer.current
                                ? ((0, c.MU)(
                                      !0,
                                      void 0,
                                      null === (e = this.context) ||
                                          void 0 === e
                                          ? void 0
                                          : e.registeredProviders
                                  ),
                                  this._splitButtonContainer.current.focus())
                                : this._buttonElement.current &&
                                  ((0, c.MU)(
                                      !0,
                                      void 0,
                                      null === (t = this.context) ||
                                          void 0 === t
                                          ? void 0
                                          : t.registeredProviders
                                  ),
                                  this._buttonElement.current.focus());
                        }),
                        (t.prototype.dismissMenu = function () {
                            this._dismissMenu();
                        }),
                        (t.prototype.openMenu = function (e, t) {
                            this._openMenu(e, t);
                        }),
                        (t.prototype._onRenderContent = function (e, t) {
                            var o = this,
                                i = this.props,
                                a = e,
                                l = i.menuIconProps,
                                s = i.menuProps,
                                u = i.onRenderIcon,
                                c = void 0 === u ? this._onRenderIcon : u,
                                d = i.onRenderAriaDescription,
                                p =
                                    void 0 === d
                                        ? this._onRenderAriaDescription
                                        : d,
                                m = i.onRenderChildren,
                                h = void 0 === m ? this._onRenderChildren : m,
                                g = i.onRenderMenu,
                                f = void 0 === g ? this._onRenderMenu : g,
                                v = i.onRenderMenuIcon,
                                b = void 0 === v ? this._onRenderMenuIcon : v,
                                y = i.disabled,
                                k = i.keytipProps;
                            k &&
                                s &&
                                (k = this._getMemoizedMenuButtonKeytipProps(k));
                            var D = function (e) {
                                    return r.createElement(
                                        a,
                                        (0, n.pi)({}, t, e),
                                        r.createElement(
                                            'span',
                                            {
                                                className:
                                                    o._classNames.flexContainer,
                                                'data-automationid':
                                                    'splitbuttonprimary',
                                            },
                                            c(i, o._onRenderIcon),
                                            o._onRenderTextContents(),
                                            p(i, o._onRenderAriaDescription),
                                            h(i, o._onRenderChildren),
                                            !o._isSplitButton &&
                                                (s ||
                                                    l ||
                                                    o.props.onRenderMenuIcon) &&
                                                b(o.props, o._onRenderMenuIcon),
                                            s &&
                                                !s.doNotLayer &&
                                                o._shouldRenderMenu() &&
                                                f(
                                                    o._getMenuProps(s),
                                                    o._onRenderMenu
                                                )
                                        )
                                    );
                                },
                                w = k
                                    ? r.createElement(
                                          M.a,
                                          {
                                              keytipProps: this._isSplitButton
                                                  ? void 0
                                                  : k,
                                              ariaDescribedBy:
                                                  t['aria-describedby'],
                                              disabled: y,
                                          },
                                          function (e) {
                                              return D(e);
                                          }
                                      )
                                    : D();
                            return s && s.doNotLayer
                                ? r.createElement(
                                      r.Fragment,
                                      null,
                                      w,
                                      this._shouldRenderMenu() &&
                                          f(
                                              this._getMenuProps(s),
                                              this._onRenderMenu
                                          )
                                  )
                                : r.createElement(
                                      r.Fragment,
                                      null,
                                      w,
                                      r.createElement(C.u, null)
                                  );
                        }),
                        (t.prototype._shouldRenderMenu = function () {
                            var e = this.state.menuHidden,
                                t = this.props,
                                o = t.persistMenu,
                                n = t.renderPersistedMenuHiddenOnMount;
                            return (
                                !e ||
                                !(!o || (!this._renderedVisibleMenu && !n))
                            );
                        }),
                        (t.prototype._hasText = function () {
                            return (
                                null !== this.props.text &&
                                (void 0 !== this.props.text ||
                                    'string' == typeof this.props.children)
                            );
                        }),
                        (t.prototype._getMenuProps = function (e) {
                            var t = this.props.persistMenu,
                                o = this.state.menuHidden;
                            return (
                                e.ariaLabel ||
                                    e.labelElementId ||
                                    !this._hasText() ||
                                    (e = (0, n.pi)((0, n.pi)({}, e), {
                                        labelElementId: this._labelId,
                                    })),
                                (0, n.pi)(
                                    (0, n.pi)(
                                        {
                                            id: this._labelId + '-menu',
                                            directionalHint: x.b.bottomLeftEdge,
                                        },
                                        e
                                    ),
                                    {
                                        shouldFocusOnContainer:
                                            this._menuShouldFocusOnContainer,
                                        shouldFocusOnMount:
                                            this._menuShouldFocusOnMount,
                                        hidden: t ? o : void 0,
                                        className: (0, l.i)(
                                            'ms-BaseButton-menuhost',
                                            e.className
                                        ),
                                        target: this._isSplitButton
                                            ? this._splitButtonContainer.current
                                            : this._buttonElement.current,
                                        onDismiss: this._onDismissMenu,
                                    }
                                )
                            );
                        }),
                        (t.prototype._onRenderSplitButtonContent = function (
                            e,
                            t
                        ) {
                            var o = this,
                                i = this.props,
                                a = i.styles,
                                l = void 0 === a ? {} : a,
                                s = i.disabled,
                                u = i.allowDisabledFocus,
                                c = i.checked,
                                d = i.getSplitButtonClassNames,
                                p = i.primaryDisabled,
                                m = i.menuProps,
                                h = i.toggle,
                                g = i.role,
                                f = i.primaryActionButtonProps,
                                y = this.props.keytipProps,
                                C = this.state.menuHidden,
                                D = d
                                    ? d(!!s, !C, !!c, !!u)
                                    : l && N(l, !!s, !C, !!c, !!p);
                            (0, b.f0)(t, {
                                onClick: void 0,
                                onPointerDown: void 0,
                                onPointerUp: void 0,
                                tabIndex: -1,
                                'data-is-focusable': !1,
                            }),
                                y &&
                                    m &&
                                    (y =
                                        this._getMemoizedMenuButtonKeytipProps(
                                            y
                                        ));
                            var w = (0, v.pq)(t, [], ['disabled']);
                            f && (0, b.f0)(t, f);
                            var B = function (i) {
                                return r.createElement(
                                    'div',
                                    (0, n.pi)({}, w, {
                                        'data-ktp-target': i
                                            ? i['data-ktp-target']
                                            : void 0,
                                        role: g || 'button',
                                        'aria-disabled': s,
                                        'aria-haspopup': !0,
                                        'aria-expanded': !C,
                                        'aria-pressed': h ? !!c : void 0,
                                        'aria-describedby': (0, k.I)(
                                            t['aria-describedby'],
                                            i ? i['aria-describedby'] : void 0
                                        ),
                                        className: D && D.splitButtonContainer,
                                        onKeyDown:
                                            o._onSplitButtonContainerKeyDown,
                                        onTouchStart: o._onTouchStart,
                                        ref: o._splitButtonContainer,
                                        'data-is-focusable': !0,
                                        onClick:
                                            s || p
                                                ? void 0
                                                : o._onSplitButtonPrimaryClick,
                                        tabIndex: (!s && !p) || u ? 0 : void 0,
                                        'aria-roledescription':
                                            t['aria-roledescription'],
                                        onFocusCapture:
                                            o._onSplitContainerFocusCapture,
                                    }),
                                    r.createElement(
                                        'span',
                                        {
                                            style: {
                                                display: 'flex',
                                                width: '100%',
                                            },
                                        },
                                        o._onRenderContent(e, t),
                                        o._onRenderSplitButtonMenuButton(D, i),
                                        o._onRenderSplitButtonDivider(D)
                                    )
                                );
                            };
                            return y
                                ? r.createElement(
                                      M.a,
                                      {keytipProps: y, disabled: s},
                                      function (e) {
                                          return B(e);
                                      }
                                  )
                                : B();
                        }),
                        (t.prototype._onRenderSplitButtonDivider = function (
                            e
                        ) {
                            return e && e.divider
                                ? r.createElement('span', {
                                      className: e.divider,
                                      'aria-hidden': !0,
                                      onClick: function (e) {
                                          e.stopPropagation();
                                      },
                                  })
                                : null;
                        }),
                        (t.prototype._onRenderSplitButtonMenuButton = function (
                            e,
                            o
                        ) {
                            var i = this.props,
                                a = i.allowDisabledFocus,
                                l = i.checked,
                                s = i.disabled,
                                u = i.splitButtonMenuProps,
                                c = i.splitButtonAriaLabel,
                                d = i.primaryDisabled,
                                p = this.state.menuHidden,
                                m = this.props.menuIconProps;
                            void 0 === m && (m = {iconName: 'ChevronDown'});
                            var h = (0, n.pi)((0, n.pi)({}, u), {
                                styles: e,
                                checked: l,
                                disabled: s,
                                allowDisabledFocus: a,
                                onClick: this._onMenuClick,
                                menuProps: void 0,
                                iconProps: (0, n.pi)((0, n.pi)({}, m), {
                                    className: this._classNames.menuIcon,
                                }),
                                ariaLabel: c,
                                'aria-haspopup': !0,
                                'aria-expanded': !p,
                                'data-is-focusable': !1,
                            });
                            return r.createElement(
                                t,
                                (0, n.pi)({}, h, {
                                    'data-ktp-execute-target': o
                                        ? o['data-ktp-execute-target']
                                        : o,
                                    onMouseDown: this._onMouseDown,
                                    tabIndex: d && !a ? 0 : -1,
                                })
                            );
                        }),
                        (t.prototype._onPointerDown = function (e) {
                            var t = this.props.onPointerDown;
                            t && t(e),
                                'touch' === e.pointerType &&
                                    (this._handleTouchAndPointerEvent(),
                                    e.preventDefault(),
                                    e.stopImmediatePropagation());
                        }),
                        (t.prototype._handleTouchAndPointerEvent = function () {
                            var e = this;
                            void 0 !== this._lastTouchTimeoutId &&
                                (this._async.clearTimeout(
                                    this._lastTouchTimeoutId
                                ),
                                (this._lastTouchTimeoutId = void 0)),
                                (this._processingTouch = !0),
                                (this._lastTouchTimeoutId =
                                    this._async.setTimeout(function () {
                                        (e._processingTouch = !1),
                                            (e._lastTouchTimeoutId = void 0),
                                            e.state.menuHidden && e.focus();
                                    }, 500));
                        }),
                        (t.prototype._isValidMenuOpenKey = function (e) {
                            return this.props.menuTriggerKeyCode
                                ? e.which === this.props.menuTriggerKeyCode
                                : !!this.props.menuProps &&
                                      e.which === u.m.down &&
                                      (e.altKey || e.metaKey);
                        }),
                        (t.defaultProps = {
                            baseClassName: 'ms-Button',
                            styles: {},
                            split: !1,
                        }),
                        (t.contextType = C.uK),
                        t
                    );
                })(r.Component);
        },
        67802: (e, t, o) => {
            o.d(t, {W: () => l});
            var n = o(25607),
                r = o(85446),
                i = {outline: 0},
                a = function (e) {
                    return {
                        fontSize: e,
                        margin: '0 4px',
                        height: '16px',
                        lineHeight: '16px',
                        textAlign: 'center',
                        flexShrink: 0,
                    };
                },
                l = (0, n.NF)(function (e) {
                    var t,
                        o,
                        n = e.semanticColors,
                        l = e.effects,
                        s = e.fonts,
                        u = n.buttonBorder,
                        c = n.disabledBackground,
                        d = n.disabledText,
                        p = {
                            left: -2,
                            top: -2,
                            bottom: -2,
                            right: -2,
                            outlineColor: 'ButtonText',
                        };
                    return {
                        root: [
                            (0, r.GL)(e, {
                                inset: 1,
                                highContrastStyle: p,
                                borderColor: 'transparent',
                            }),
                            e.fonts.medium,
                            {
                                border: '1px solid ' + u,
                                borderRadius: l.roundedCorner2,
                                boxSizing: 'border-box',
                                cursor: 'pointer',
                                display: 'inline-block',
                                padding: '0 16px',
                                textDecoration: 'none',
                                textAlign: 'center',
                                userSelect: 'none',
                                selectors: {
                                    ':active > span': {
                                        position: 'relative',
                                        left: 0,
                                        top: 0,
                                    },
                                },
                            },
                        ],
                        rootDisabled: [
                            (0, r.GL)(e, {
                                inset: 1,
                                highContrastStyle: p,
                                borderColor: 'transparent',
                            }),
                            {
                                backgroundColor: c,
                                borderColor: c,
                                color: d,
                                cursor: 'default',
                                selectors: {':hover': i, ':focus': i},
                            },
                        ],
                        iconDisabled: {
                            color: d,
                            selectors:
                                ((t = {}), (t[r.qJ] = {color: 'GrayText'}), t),
                        },
                        menuIconDisabled: {
                            color: d,
                            selectors:
                                ((o = {}), (o[r.qJ] = {color: 'GrayText'}), o),
                        },
                        flexContainer: {
                            display: 'flex',
                            height: '100%',
                            flexWrap: 'nowrap',
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                        description: {display: 'block'},
                        textContainer: {flexGrow: 1, display: 'block'},
                        icon: a(s.mediumPlus.fontSize),
                        menuIcon: a(s.small.fontSize),
                        label: {
                            margin: '0 4px',
                            lineHeight: '100%',
                            display: 'block',
                        },
                        screenReaderText: r.ul,
                    };
                });
        },
        36797: (e, t, o) => {
            o.d(t, {Q: () => h});
            var n = o(96583),
                r = o(65812),
                i = o(97866),
                a = o(83175),
                l = o(17948),
                s = o(85446),
                u = o(25607),
                c = o(67802),
                d = o(99979),
                p = o(6559),
                m = (0, u.NF)(function (e, t, o, r) {
                    var i,
                        a,
                        l,
                        u,
                        m,
                        h,
                        g,
                        f,
                        v,
                        b,
                        y,
                        C,
                        k,
                        D = (0, c.W)(e),
                        w = (0, d.W)(e),
                        B = e.palette,
                        x = e.semanticColors,
                        _ = {
                            root: [
                                (0, s.GL)(e, {
                                    inset: 2,
                                    highContrastStyle: {
                                        left: 4,
                                        top: 4,
                                        bottom: 4,
                                        right: 4,
                                        border: 'none',
                                    },
                                    borderColor: 'transparent',
                                }),
                                e.fonts.medium,
                                {
                                    minWidth: '40px',
                                    backgroundColor: B.white,
                                    color: B.neutralPrimary,
                                    padding: '0 4px',
                                    border: 'none',
                                    borderRadius: 0,
                                    selectors:
                                        ((i = {}),
                                        (i[s.qJ] = {border: 'none'}),
                                        i),
                                },
                            ],
                            rootHovered: {
                                backgroundColor: B.neutralLighter,
                                color: B.neutralDark,
                                selectors:
                                    ((a = {}),
                                    (a[s.qJ] = {color: 'Highlight'}),
                                    (a['.'.concat(p.n.msButtonIcon)] = {
                                        color: B.themeDarkAlt,
                                    }),
                                    (a['.'.concat(p.n.msButtonMenuIcon)] = {
                                        color: B.neutralPrimary,
                                    }),
                                    a),
                            },
                            rootPressed: {
                                backgroundColor: B.neutralLight,
                                color: B.neutralDark,
                                selectors:
                                    ((l = {}),
                                    (l['.'.concat(p.n.msButtonIcon)] = {
                                        color: B.themeDark,
                                    }),
                                    (l['.'.concat(p.n.msButtonMenuIcon)] = {
                                        color: B.neutralPrimary,
                                    }),
                                    l),
                            },
                            rootChecked: {
                                backgroundColor: B.neutralLight,
                                color: B.neutralDark,
                                selectors:
                                    ((u = {}),
                                    (u['.'.concat(p.n.msButtonIcon)] = {
                                        color: B.themeDark,
                                    }),
                                    (u['.'.concat(p.n.msButtonMenuIcon)] = {
                                        color: B.neutralPrimary,
                                    }),
                                    u),
                            },
                            rootCheckedHovered: {
                                backgroundColor: B.neutralQuaternaryAlt,
                                selectors:
                                    ((m = {}),
                                    (m['.'.concat(p.n.msButtonIcon)] = {
                                        color: B.themeDark,
                                    }),
                                    (m['.'.concat(p.n.msButtonMenuIcon)] = {
                                        color: B.neutralPrimary,
                                    }),
                                    m),
                            },
                            rootExpanded: {
                                backgroundColor: B.neutralLight,
                                color: B.neutralDark,
                                selectors:
                                    ((h = {}),
                                    (h['.'.concat(p.n.msButtonIcon)] = {
                                        color: B.themeDark,
                                    }),
                                    (h['.'.concat(p.n.msButtonMenuIcon)] = {
                                        color: B.neutralPrimary,
                                    }),
                                    h),
                            },
                            rootExpandedHovered: {
                                backgroundColor: B.neutralQuaternaryAlt,
                            },
                            rootDisabled: {
                                backgroundColor: B.white,
                                selectors:
                                    ((g = {}),
                                    (g['.'.concat(p.n.msButtonIcon)] = {
                                        color: x.disabledBodySubtext,
                                        selectors:
                                            ((f = {}),
                                            (f[s.qJ] = (0, n.pi)(
                                                {color: 'GrayText'},
                                                (0, s.xM)()
                                            )),
                                            f),
                                    }),
                                    (g[s.qJ] = (0, n.pi)(
                                        {
                                            color: 'GrayText',
                                            backgroundColor: 'Window',
                                        },
                                        (0, s.xM)()
                                    )),
                                    g),
                            },
                            splitButtonContainer: {
                                height: '100%',
                                selectors:
                                    ((v = {}), (v[s.qJ] = {border: 'none'}), v),
                            },
                            splitButtonDividerDisabled: {
                                selectors:
                                    ((b = {}),
                                    (b[s.qJ] = {backgroundColor: 'Window'}),
                                    b),
                            },
                            splitButtonDivider: {
                                backgroundColor: B.neutralTertiaryAlt,
                            },
                            splitButtonMenuButton: {
                                backgroundColor: B.white,
                                border: 'none',
                                borderTopRightRadius: '0',
                                borderBottomRightRadius: '0',
                                color: B.neutralSecondary,
                                selectors: {
                                    ':hover': {
                                        backgroundColor: B.neutralLighter,
                                        color: B.neutralDark,
                                        selectors:
                                            ((y = {}),
                                            (y[s.qJ] = {color: 'Highlight'}),
                                            (y['.'.concat(p.n.msButtonIcon)] = {
                                                color: B.neutralPrimary,
                                            }),
                                            y),
                                    },
                                    ':active': {
                                        backgroundColor: B.neutralLight,
                                        selectors:
                                            ((C = {}),
                                            (C['.'.concat(p.n.msButtonIcon)] = {
                                                color: B.neutralPrimary,
                                            }),
                                            C),
                                    },
                                },
                            },
                            splitButtonMenuButtonDisabled: {
                                backgroundColor: B.white,
                                selectors:
                                    ((k = {}),
                                    (k[s.qJ] = (0, n.pi)(
                                        {
                                            color: 'GrayText',
                                            border: 'none',
                                            backgroundColor: 'Window',
                                        },
                                        (0, s.xM)()
                                    )),
                                    k),
                            },
                            splitButtonMenuButtonChecked: {
                                backgroundColor: B.neutralLight,
                                color: B.neutralDark,
                                selectors: {
                                    ':hover': {
                                        backgroundColor: B.neutralQuaternaryAlt,
                                    },
                                },
                            },
                            splitButtonMenuButtonExpanded: {
                                backgroundColor: B.neutralLight,
                                color: B.black,
                                selectors: {
                                    ':hover': {
                                        backgroundColor: B.neutralQuaternaryAlt,
                                    },
                                },
                            },
                            splitButtonMenuIcon: {color: B.neutralPrimary},
                            splitButtonMenuIconDisabled: {
                                color: B.neutralTertiary,
                            },
                            label: {fontWeight: 'normal'},
                            icon: {color: B.themePrimary},
                            menuIcon: {color: B.neutralSecondary},
                        };
                    return (0, s.E$)(D, w, _, t);
                }),
                h = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        (0, n.ZT)(t, e),
                        (t.prototype.render = function () {
                            var e = this.props,
                                t = e.styles,
                                o = e.theme;
                            return r.createElement(
                                i.Y,
                                (0, n.pi)({}, this.props, {
                                    variantClassName: 'ms-Button--commandBar',
                                    styles: m(o, t),
                                    onRenderDescription: a.S,
                                })
                            );
                        }),
                        (0, n.gn)(
                            [
                                (0, l.a)(
                                    'CommandBarButton',
                                    ['theme', 'styles'],
                                    !0
                                ),
                            ],
                            t
                        )
                    );
                })(r.Component);
        },
        14879: (e, t, o) => {
            o.d(t, {M: () => n});
            var n = o(49864).K;
        },
        96623: (e, t, o) => {
            o.d(t, {a: () => h});
            var n = o(96583),
                r = o(65812),
                i = o(97866),
                a = o(83175),
                l = o(17948),
                s = o(85446),
                u = o(25607),
                c = o(67802),
                d = o(99979),
                p = o(98289),
                m = (0, u.NF)(function (e, t, o) {
                    var r = (0, c.W)(e),
                        i = (0, d.W)(e),
                        a = {
                            root: {minWidth: '80px', height: '32px'},
                            label: {fontWeight: s.lq.semibold},
                        };
                    return (0, s.E$)(
                        r,
                        a,
                        o
                            ? (function (e) {
                                  var t,
                                      o,
                                      r,
                                      i,
                                      a,
                                      l,
                                      u,
                                      c,
                                      d,
                                      m = e.palette,
                                      h = e.semanticColors;
                                  return {
                                      root: {
                                          backgroundColor:
                                              h.primaryButtonBackground,
                                          border: '1px solid '.concat(
                                              h.primaryButtonBackground
                                          ),
                                          color: h.primaryButtonText,
                                          selectors:
                                              ((t = {}),
                                              (t[s.qJ] = (0, n.pi)(
                                                  {
                                                      color: 'Window',
                                                      backgroundColor:
                                                          'WindowText',
                                                      borderColor: 'WindowText',
                                                  },
                                                  (0, s.xM)()
                                              )),
                                              (t['.'.concat(p.G$, ' &:focus')] =
                                                  {
                                                      selectors: {
                                                          ':after': {
                                                              border: 'none',
                                                              outlineColor:
                                                                  m.white,
                                                          },
                                                      },
                                                  }),
                                              t),
                                      },
                                      rootHovered: {
                                          backgroundColor:
                                              h.primaryButtonBackgroundHovered,
                                          border: '1px solid '.concat(
                                              h.primaryButtonBackgroundHovered
                                          ),
                                          color: h.primaryButtonTextHovered,
                                          selectors:
                                              ((o = {}),
                                              (o[s.qJ] = {
                                                  color: 'Window',
                                                  backgroundColor: 'Highlight',
                                                  borderColor: 'Highlight',
                                              }),
                                              o),
                                      },
                                      rootPressed: {
                                          backgroundColor:
                                              h.primaryButtonBackgroundPressed,
                                          border: '1px solid '.concat(
                                              h.primaryButtonBackgroundPressed
                                          ),
                                          color: h.primaryButtonTextPressed,
                                          selectors:
                                              ((r = {}),
                                              (r[s.qJ] = (0, n.pi)(
                                                  {
                                                      color: 'Window',
                                                      backgroundColor:
                                                          'WindowText',
                                                      borderColor: 'WindowText',
                                                  },
                                                  (0, s.xM)()
                                              )),
                                              r),
                                      },
                                      rootExpanded: {
                                          backgroundColor:
                                              h.primaryButtonBackgroundPressed,
                                          color: h.primaryButtonTextPressed,
                                      },
                                      rootChecked: {
                                          backgroundColor:
                                              h.primaryButtonBackgroundPressed,
                                          color: h.primaryButtonTextPressed,
                                      },
                                      rootCheckedHovered: {
                                          backgroundColor:
                                              h.primaryButtonBackgroundPressed,
                                          color: h.primaryButtonTextPressed,
                                      },
                                      rootDisabled: {
                                          color: h.primaryButtonTextDisabled,
                                          backgroundColor:
                                              h.primaryButtonBackgroundDisabled,
                                          selectors:
                                              ((i = {}),
                                              (i[s.qJ] = {
                                                  color: 'GrayText',
                                                  borderColor: 'GrayText',
                                                  backgroundColor: 'Window',
                                              }),
                                              i),
                                      },
                                      splitButtonContainer: {
                                          selectors:
                                              ((a = {}),
                                              (a[s.qJ] = {border: 'none'}),
                                              a),
                                      },
                                      splitButtonDivider: (0, n.pi)(
                                          (0, n.pi)(
                                              {},
                                              {
                                                  position: 'absolute',
                                                  width: 1,
                                                  right: 31,
                                                  top: 8,
                                                  bottom: 8,
                                              }
                                          ),
                                          {
                                              backgroundColor: m.white,
                                              selectors:
                                                  ((l = {}),
                                                  (l[s.qJ] = {
                                                      backgroundColor: 'Window',
                                                  }),
                                                  l),
                                          }
                                      ),
                                      splitButtonMenuButton: {
                                          backgroundColor:
                                              h.primaryButtonBackground,
                                          color: h.primaryButtonText,
                                          selectors:
                                              ((u = {}),
                                              (u[s.qJ] = {
                                                  backgroundColor: 'Canvas',
                                              }),
                                              (u[':hover'] = {
                                                  backgroundColor:
                                                      h.primaryButtonBackgroundHovered,
                                                  selectors:
                                                      ((c = {}),
                                                      (c[s.qJ] = {
                                                          color: 'Highlight',
                                                      }),
                                                      c),
                                              }),
                                              u),
                                      },
                                      splitButtonMenuButtonDisabled: {
                                          backgroundColor:
                                              h.primaryButtonBackgroundDisabled,
                                          selectors: {
                                              ':hover': {
                                                  backgroundColor:
                                                      h.primaryButtonBackgroundDisabled,
                                              },
                                          },
                                      },
                                      splitButtonMenuButtonChecked: {
                                          backgroundColor:
                                              h.primaryButtonBackgroundPressed,
                                          selectors: {
                                              ':hover': {
                                                  backgroundColor:
                                                      h.primaryButtonBackgroundPressed,
                                              },
                                          },
                                      },
                                      splitButtonMenuButtonExpanded: {
                                          backgroundColor:
                                              h.primaryButtonBackgroundPressed,
                                          selectors: {
                                              ':hover': {
                                                  backgroundColor:
                                                      h.primaryButtonBackgroundPressed,
                                              },
                                          },
                                      },
                                      splitButtonMenuIcon: {
                                          color: h.primaryButtonText,
                                      },
                                      splitButtonMenuIconDisabled: {
                                          color: m.neutralTertiary,
                                          selectors:
                                              ((d = {}),
                                              (d[s.qJ] = {color: 'GrayText'}),
                                              d),
                                      },
                                  };
                              })(e)
                            : (function (e) {
                                  var t,
                                      o,
                                      r,
                                      i,
                                      a,
                                      l = e.semanticColors,
                                      u = e.palette,
                                      c = l.buttonBackground,
                                      d = l.buttonBackgroundPressed,
                                      p = l.buttonBackgroundHovered,
                                      m = l.buttonBackgroundDisabled,
                                      h = l.buttonText,
                                      g = l.buttonTextHovered,
                                      f = l.buttonTextDisabled,
                                      v = l.buttonTextChecked,
                                      b = l.buttonTextCheckedHovered;
                                  return {
                                      root: {backgroundColor: c, color: h},
                                      rootHovered: {
                                          backgroundColor: p,
                                          color: g,
                                          selectors:
                                              ((t = {}),
                                              (t[s.qJ] = {
                                                  borderColor: 'Highlight',
                                                  color: 'Highlight',
                                              }),
                                              t),
                                      },
                                      rootPressed: {
                                          backgroundColor: d,
                                          color: v,
                                      },
                                      rootExpanded: {
                                          backgroundColor: d,
                                          color: v,
                                      },
                                      rootChecked: {
                                          backgroundColor: d,
                                          color: v,
                                      },
                                      rootCheckedHovered: {
                                          backgroundColor: d,
                                          color: b,
                                      },
                                      rootDisabled: {
                                          color: f,
                                          backgroundColor: m,
                                          selectors:
                                              ((o = {}),
                                              (o[s.qJ] = {
                                                  color: 'GrayText',
                                                  borderColor: 'GrayText',
                                                  backgroundColor: 'Window',
                                              }),
                                              o),
                                      },
                                      splitButtonContainer: {
                                          selectors:
                                              ((r = {}),
                                              (r[s.qJ] = {border: 'none'}),
                                              r),
                                      },
                                      splitButtonMenuButton: {
                                          color: u.white,
                                          backgroundColor: 'transparent',
                                          selectors: {
                                              ':hover': {
                                                  backgroundColor:
                                                      u.neutralLight,
                                                  selectors:
                                                      ((i = {}),
                                                      (i[s.qJ] = {
                                                          color: 'Highlight',
                                                      }),
                                                      i),
                                              },
                                          },
                                      },
                                      splitButtonMenuButtonDisabled: {
                                          backgroundColor:
                                              l.buttonBackgroundDisabled,
                                          selectors: {
                                              ':hover': {
                                                  backgroundColor:
                                                      l.buttonBackgroundDisabled,
                                              },
                                          },
                                      },
                                      splitButtonDivider: (0, n.pi)(
                                          (0, n.pi)(
                                              {},
                                              {
                                                  position: 'absolute',
                                                  width: 1,
                                                  right: 31,
                                                  top: 8,
                                                  bottom: 8,
                                              }
                                          ),
                                          {
                                              backgroundColor:
                                                  u.neutralTertiaryAlt,
                                              selectors:
                                                  ((a = {}),
                                                  (a[s.qJ] = {
                                                      backgroundColor:
                                                          'WindowText',
                                                  }),
                                                  a),
                                          }
                                      ),
                                      splitButtonDividerDisabled: {
                                          backgroundColor:
                                              e.palette.neutralTertiaryAlt,
                                      },
                                      splitButtonMenuButtonChecked: {
                                          backgroundColor:
                                              u.neutralQuaternaryAlt,
                                          selectors: {
                                              ':hover': {
                                                  backgroundColor:
                                                      u.neutralQuaternaryAlt,
                                              },
                                          },
                                      },
                                      splitButtonMenuButtonExpanded: {
                                          backgroundColor:
                                              u.neutralQuaternaryAlt,
                                          selectors: {
                                              ':hover': {
                                                  backgroundColor:
                                                      u.neutralQuaternaryAlt,
                                              },
                                          },
                                      },
                                      splitButtonMenuIcon: {
                                          color: l.buttonText,
                                      },
                                      splitButtonMenuIconDisabled: {
                                          color: l.buttonTextDisabled,
                                      },
                                  };
                              })(e),
                        i,
                        t
                    );
                }),
                h = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        (0, n.ZT)(t, e),
                        (t.prototype.render = function () {
                            var e = this.props,
                                t = e.primary,
                                o = void 0 !== t && t,
                                l = e.styles,
                                s = e.theme;
                            return r.createElement(
                                i.Y,
                                (0, n.pi)({}, this.props, {
                                    variantClassName: o
                                        ? 'ms-Button--primary'
                                        : 'ms-Button--default',
                                    styles: m(s, l, o),
                                    onRenderDescription: a.S,
                                })
                            );
                        }),
                        (0, n.gn)(
                            [
                                (0, l.a)(
                                    'DefaultButton',
                                    ['theme', 'styles'],
                                    !0
                                ),
                            ],
                            t
                        )
                    );
                })(r.Component);
        },
        83016: (e, t, o) => {
            o.d(t, {h: () => m});
            var n = o(96583),
                r = o(65812),
                i = o(97866),
                a = o(83175),
                l = o(17948),
                s = o(85446),
                u = o(25607),
                c = o(67802),
                d = o(99979),
                p = (0, u.NF)(function (e, t) {
                    var o,
                        n = (0, c.W)(e),
                        r = (0, d.W)(e),
                        i = e.palette,
                        a = {
                            root: {
                                padding: '0 4px',
                                width: '32px',
                                height: '32px',
                                backgroundColor: 'transparent',
                                border: 'none',
                                color: e.semanticColors.link,
                            },
                            rootHovered: {
                                color: i.themeDarkAlt,
                                backgroundColor: i.neutralLighter,
                                selectors:
                                    ((o = {}),
                                    (o[s.qJ] = {
                                        borderColor: 'Highlight',
                                        color: 'Highlight',
                                    }),
                                    o),
                            },
                            rootHasMenu: {width: 'auto'},
                            rootPressed: {
                                color: i.themeDark,
                                backgroundColor: i.neutralLight,
                            },
                            rootExpanded: {
                                color: i.themeDark,
                                backgroundColor: i.neutralLight,
                            },
                            rootChecked: {
                                color: i.themeDark,
                                backgroundColor: i.neutralLight,
                            },
                            rootCheckedHovered: {
                                color: i.themeDark,
                                backgroundColor: i.neutralQuaternaryAlt,
                            },
                            rootDisabled: {color: i.neutralTertiaryAlt},
                        };
                    return (0, s.E$)(n, a, r, t);
                }),
                m = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        (0, n.ZT)(t, e),
                        (t.prototype.render = function () {
                            var e = this.props,
                                t = e.styles,
                                o = e.theme;
                            return r.createElement(
                                i.Y,
                                (0, n.pi)({}, this.props, {
                                    variantClassName: 'ms-Button--icon',
                                    styles: p(o, t),
                                    onRenderText: a.S,
                                    onRenderDescription: a.S,
                                })
                            );
                        }),
                        (0, n.gn)(
                            [(0, l.a)('IconButton', ['theme', 'styles'], !0)],
                            t
                        )
                    );
                })(r.Component);
        },
        99979: (e, t, o) => {
            o.d(t, {W: () => i});
            var n = o(96583),
                r = o(85446),
                i = (0, o(25607).NF)(function (e, t) {
                    var o,
                        i,
                        a,
                        l,
                        s,
                        u,
                        c,
                        d,
                        p,
                        m,
                        h,
                        g,
                        f,
                        v = e.effects,
                        b = e.palette,
                        y = e.semanticColors,
                        C = {
                            left: -2,
                            top: -2,
                            bottom: -2,
                            right: -2,
                            border: 'none',
                        },
                        k = {
                            position: 'absolute',
                            width: 1,
                            right: 31,
                            top: 8,
                            bottom: 8,
                        },
                        D = {
                            splitButtonContainer: [
                                (0, r.GL)(e, {
                                    highContrastStyle: C,
                                    inset: 2,
                                    pointerEvents: 'none',
                                }),
                                {
                                    display: 'inline-flex',
                                    selectors: {
                                        '.ms-Button--default': {
                                            borderTopRightRadius: '0',
                                            borderBottomRightRadius: '0',
                                            borderRight: 'none',
                                            flexGrow: '1',
                                        },
                                        '.ms-Button--primary': {
                                            borderTopRightRadius: '0',
                                            borderBottomRightRadius: '0',
                                            border: 'none',
                                            flexGrow: '1',
                                            selectors:
                                                ((o = {}),
                                                (o[r.qJ] = (0, n.pi)(
                                                    {
                                                        color: 'WindowText',
                                                        backgroundColor:
                                                            'Window',
                                                        border: '1px solid WindowText',
                                                        borderRightWidth: '0',
                                                    },
                                                    (0, r.xM)()
                                                )),
                                                (o[':hover'] = {
                                                    border: 'none',
                                                }),
                                                (o[':active'] = {
                                                    border: 'none',
                                                }),
                                                o),
                                        },
                                        '.ms-Button--primary + .ms-Button': {
                                            border: 'none',
                                            selectors:
                                                ((i = {}),
                                                (i[r.qJ] = {
                                                    border: '1px solid WindowText',
                                                    borderLeftWidth: '0',
                                                }),
                                                i),
                                        },
                                    },
                                },
                            ],
                            splitButtonContainerHovered: {
                                selectors: {
                                    '.ms-Button--primary': {
                                        selectors:
                                            ((a = {}),
                                            (a[r.qJ] = {
                                                color: 'Window',
                                                backgroundColor: 'Highlight',
                                            }),
                                            a),
                                    },
                                    '.ms-Button.is-disabled': {
                                        color: y.buttonTextDisabled,
                                        selectors:
                                            ((l = {}),
                                            (l[r.qJ] = {
                                                color: 'GrayText',
                                                borderColor: 'GrayText',
                                                backgroundColor: 'Window',
                                            }),
                                            l),
                                    },
                                },
                            },
                            splitButtonContainerChecked: {
                                selectors: {
                                    '.ms-Button--primary': {
                                        selectors:
                                            ((s = {}),
                                            (s[r.qJ] = (0, n.pi)(
                                                {
                                                    color: 'Window',
                                                    backgroundColor:
                                                        'WindowText',
                                                },
                                                (0, r.xM)()
                                            )),
                                            s),
                                    },
                                },
                            },
                            splitButtonContainerCheckedHovered: {
                                selectors: {
                                    '.ms-Button--primary': {
                                        selectors:
                                            ((u = {}),
                                            (u[r.qJ] = (0, n.pi)(
                                                {
                                                    color: 'Window',
                                                    backgroundColor:
                                                        'WindowText',
                                                },
                                                (0, r.xM)()
                                            )),
                                            u),
                                    },
                                },
                            },
                            splitButtonContainerFocused: {
                                outline: 'none!important',
                            },
                            splitButtonMenuButton:
                                ((c = {
                                    padding: 6,
                                    height: 'auto',
                                    boxSizing: 'border-box',
                                    borderRadius: 0,
                                    borderTopRightRadius: v.roundedCorner2,
                                    borderBottomRightRadius: v.roundedCorner2,
                                    border: '1px solid '.concat(
                                        b.neutralSecondaryAlt
                                    ),
                                    borderLeft: 'none',
                                    outline: 'transparent',
                                    userSelect: 'none',
                                    display: 'inline-block',
                                    textDecoration: 'none',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    verticalAlign: 'top',
                                    width: 32,
                                    marginLeft: -1,
                                    marginTop: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                }),
                                (c[r.qJ] = {
                                    '.ms-Button-menuIcon': {
                                        color: 'WindowText',
                                    },
                                }),
                                c),
                            splitButtonDivider: (0, n.pi)((0, n.pi)({}, k), {
                                selectors:
                                    ((d = {}),
                                    (d[r.qJ] = {backgroundColor: 'WindowText'}),
                                    d),
                            }),
                            splitButtonDividerDisabled: (0, n.pi)(
                                (0, n.pi)({}, k),
                                {
                                    selectors:
                                        ((p = {}),
                                        (p[r.qJ] = {
                                            backgroundColor: 'GrayText',
                                        }),
                                        p),
                                }
                            ),
                            splitButtonMenuButtonDisabled: {
                                pointerEvents: 'none',
                                border: 'none',
                                selectors:
                                    ((m = {
                                        ':hover': {cursor: 'default'},
                                        '.ms-Button--primary': {
                                            selectors:
                                                ((h = {}),
                                                (h[r.qJ] = {
                                                    color: 'GrayText',
                                                    borderColor: 'GrayText',
                                                    backgroundColor: 'Window',
                                                }),
                                                h),
                                        },
                                        '.ms-Button-menuIcon': {
                                            selectors:
                                                ((g = {}),
                                                (g[r.qJ] = {color: 'GrayText'}),
                                                g),
                                        },
                                    }),
                                    (m[r.qJ] = {
                                        color: 'GrayText',
                                        border: '1px solid GrayText',
                                        backgroundColor: 'Window',
                                    }),
                                    m),
                            },
                            splitButtonFlexContainer: {
                                display: 'flex',
                                height: '100%',
                                flexWrap: 'nowrap',
                                justifyContent: 'center',
                                alignItems: 'center',
                            },
                            splitButtonContainerDisabled: {
                                outline: 'none',
                                border: 'none',
                                selectors:
                                    ((f = {}),
                                    (f[r.qJ] = (0, n.pi)(
                                        {
                                            color: 'GrayText',
                                            borderColor: 'GrayText',
                                            backgroundColor: 'Window',
                                        },
                                        (0, r.xM)()
                                    )),
                                    f),
                            },
                            splitButtonMenuFocused: (0, n.pi)(
                                {},
                                (0, r.GL)(e, {highContrastStyle: C, inset: 2})
                            ),
                        };
                    return (0, r.E$)(D, t);
                });
        },
        56709: (e, t, o) => {
            o.d(t, {f: () => fe});
            var n = o(98621),
                r = o(96583),
                i = o(65812),
                a = o(56414),
                l = o(8249),
                s = o(94981),
                u = o(11599),
                c = o(85118),
                d = o(99976),
                p = o(28642),
                m = o(56316),
                h = o(33749),
                g = o(46165),
                f = o(36061),
                v = o(64137),
                b = o(85577),
                y = o(85968),
                C = o(36626),
                k = o(41695),
                D = function (e) {
                    var t = e.showWeekNumbers,
                        o = e.strings,
                        n = e.firstDayOfWeek,
                        r = e.allFocusable,
                        l = e.weeksToShow,
                        s = e.weeks,
                        u = e.classNames,
                        c = o.shortDays.slice(),
                        p = (0, k.cx)(s[1], function (e) {
                            return 1 === e.originalDate.getDate();
                        });
                    if (1 === l && p >= 0) {
                        var m = (p + n) % a.NA;
                        c[m] = o.shortMonths[s[1][p].originalDate.getMonth()];
                    }
                    return i.createElement(
                        'tr',
                        null,
                        t && i.createElement('th', {className: u.dayCell}),
                        c.map(function (e, t) {
                            var l = (t + n) % a.NA,
                                s = o.days[l];
                            return i.createElement(
                                'th',
                                {
                                    className: (0, d.i)(
                                        u.dayCell,
                                        u.weekDayLabelCell
                                    ),
                                    scope: 'col',
                                    key: c[l] + ' ' + t,
                                    title: s,
                                    'aria-label': s,
                                    'data-is-focusable': !!r || void 0,
                                },
                                c[l]
                            );
                        })
                    );
                },
                w = o(56558),
                B = function (e) {
                    var t,
                        o = e.navigatedDate,
                        n = e.dateTimeFormatter,
                        r = e.allFocusable,
                        l = e.strings,
                        u = e.activeDescendantId,
                        c = e.navigatedDayRef,
                        m = e.calculateRoundedStyles,
                        g = e.weeks,
                        f = e.classNames,
                        v = e.day,
                        b = e.dayIndex,
                        y = e.weekIndex,
                        C = e.weekCorners,
                        k = e.ariaHidden,
                        D = e.customDayCellRef,
                        B = e.dateRangeType,
                        x = e.daysToSelectInDayView,
                        _ = e.onSelectDate,
                        E = e.restrictedDates,
                        S = e.minDate,
                        N = e.maxDate,
                        M = e.onNavigateDate,
                        R = e.getDayInfosInRangeOfDay,
                        T = e.getRefsFromDayInfos,
                        I =
                            null !==
                                (t = null == C ? void 0 : C[y + '_' + b]) &&
                            void 0 !== t
                                ? t
                                : '',
                        P = (0, s.aN)(o, v.originalDate),
                        W =
                            v.originalDate.getDate() +
                            ', ' +
                            l.months[v.originalDate.getMonth()] +
                            ', ' +
                            v.originalDate.getFullYear();
                    return (
                        v.isMarked && (W = W + ', ' + l.dayMarkedAriaLabel),
                        i.createElement(
                            'td',
                            {
                                className: (0, d.i)(
                                    f.dayCell,
                                    C && I,
                                    v.isSelected && f.daySelected,
                                    v.isSelected &&
                                        'ms-CalendarDay-daySelected',
                                    !v.isInBounds && f.dayOutsideBounds,
                                    !v.isInMonth && f.dayOutsideNavigatedMonth
                                ),
                                ref: function (e) {
                                    null == D || D(e, v.originalDate, f),
                                        v.setRef(e),
                                        P && (c.current = e);
                                },
                                'aria-hidden': k,
                                'aria-disabled': !k && !v.isInBounds,
                                onClick:
                                    v.isInBounds && !k ? v.onSelected : void 0,
                                onMouseOver: k
                                    ? void 0
                                    : function (e) {
                                          var t = R(v),
                                              o = T(t);
                                          o.forEach(function (e, n) {
                                              var r;
                                              if (
                                                  e &&
                                                  (e.classList.add(
                                                      'ms-CalendarDay-hoverStyle'
                                                  ),
                                                  !t[n].isSelected &&
                                                      B === a.NU.Day &&
                                                      x &&
                                                      x > 1)
                                              ) {
                                                  e.classList.remove(
                                                      f.bottomLeftCornerDate,
                                                      f.bottomRightCornerDate,
                                                      f.topLeftCornerDate,
                                                      f.topRightCornerDate
                                                  );
                                                  var i = m(
                                                      f,
                                                      !1,
                                                      !1,
                                                      n > 0,
                                                      n < o.length - 1
                                                  ).trim();
                                                  i &&
                                                      (r =
                                                          e.classList).add.apply(
                                                          r,
                                                          i.split(' ')
                                                      );
                                              }
                                          });
                                      },
                                onMouseDown: k
                                    ? void 0
                                    : function (e) {
                                          var t = R(v);
                                          T(t).forEach(function (e) {
                                              e &&
                                                  e.classList.add(
                                                      'ms-CalendarDay-pressedStyle'
                                                  );
                                          });
                                      },
                                onMouseUp: k
                                    ? void 0
                                    : function (e) {
                                          var t = R(v);
                                          T(t).forEach(function (e) {
                                              e &&
                                                  e.classList.remove(
                                                      'ms-CalendarDay-pressedStyle'
                                                  );
                                          });
                                      },
                                onMouseOut: k
                                    ? void 0
                                    : function (e) {
                                          var t = R(v),
                                              o = T(t);
                                          o.forEach(function (e, n) {
                                              var r;
                                              if (
                                                  e &&
                                                  (e.classList.remove(
                                                      'ms-CalendarDay-hoverStyle'
                                                  ),
                                                  e.classList.remove(
                                                      'ms-CalendarDay-pressedStyle'
                                                  ),
                                                  !t[n].isSelected &&
                                                      B === a.NU.Day &&
                                                      x &&
                                                      x > 1)
                                              ) {
                                                  var i = m(
                                                      f,
                                                      !1,
                                                      !1,
                                                      n > 0,
                                                      n < o.length - 1
                                                  ).trim();
                                                  i &&
                                                      (r =
                                                          e.classList).remove.apply(
                                                          r,
                                                          i.split(' ')
                                                      );
                                              }
                                          });
                                      },
                                onKeyDown: k
                                    ? void 0
                                    : function (e) {
                                          e.which === p.m.enter
                                              ? null == _ || _(v.originalDate)
                                              : (function (e, t) {
                                                    var o = void 0,
                                                        n = 1;
                                                    if (
                                                        (e.which === p.m.up
                                                            ? ((o = (0, s.jh)(
                                                                  t,
                                                                  -1
                                                              )),
                                                              (n = -1))
                                                            : e.which ===
                                                                p.m.down
                                                              ? (o = (0, s.jh)(
                                                                    t,
                                                                    1
                                                                ))
                                                              : e.which ===
                                                                  (0, h.dP)(
                                                                      p.m.left
                                                                  )
                                                                ? ((o = (0,
                                                                  s.E4)(t, -1)),
                                                                  (n = -1))
                                                                : e.which ===
                                                                      (0, h.dP)(
                                                                          p.m
                                                                              .right
                                                                      ) &&
                                                                  (o = (0,
                                                                  s.E4)(t, 1)),
                                                        o)
                                                    ) {
                                                        var r = {
                                                                initialDate: t,
                                                                targetDate: o,
                                                                direction: n,
                                                                restrictedDates:
                                                                    E,
                                                                minDate: S,
                                                                maxDate: N,
                                                            },
                                                            i = (0, w.e)(r);
                                                        i ||
                                                            ((r.direction = -n),
                                                            (i = (0, w.e)(r))),
                                                            (g &&
                                                                i &&
                                                                g
                                                                    .slice(
                                                                        1,
                                                                        g.length -
                                                                            1
                                                                    )
                                                                    .some(
                                                                        function (
                                                                            e
                                                                        ) {
                                                                            return e.some(
                                                                                function (
                                                                                    e
                                                                                ) {
                                                                                    return (0,
                                                                                    s.aN)(
                                                                                        e.originalDate,
                                                                                        i
                                                                                    );
                                                                                }
                                                                            );
                                                                        }
                                                                    )) ||
                                                                (i &&
                                                                    (M(i, !0),
                                                                    e.preventDefault()));
                                                    }
                                                })(e, v.originalDate);
                                      },
                                role: 'gridcell',
                                tabIndex: P ? 0 : void 0,
                                'aria-current': v.isToday ? 'date' : void 0,
                                'aria-selected': v.isInBounds
                                    ? v.isSelected
                                    : void 0,
                                'data-is-focusable':
                                    !k && (r || !!v.isInBounds || void 0),
                            },
                            i.createElement(
                                'button',
                                {
                                    key: v.key + 'button',
                                    'aria-hidden': k,
                                    className: (0, d.i)(
                                        f.dayButton,
                                        v.isToday && f.dayIsToday,
                                        v.isToday && 'ms-CalendarDay-dayIsToday'
                                    ),
                                    'aria-label': W,
                                    id: P ? u : void 0,
                                    disabled: !k && !v.isInBounds,
                                    type: 'button',
                                    tabIndex: -1,
                                    'data-is-focusable': 'false',
                                },
                                i.createElement(
                                    'span',
                                    {'aria-hidden': 'true'},
                                    n.formatDay(v.originalDate)
                                ),
                                v.isMarked &&
                                    i.createElement('div', {
                                        'aria-hidden': 'true',
                                        className: f.dayMarker,
                                    })
                            )
                        )
                    );
                },
                x = function (e) {
                    var t = e.classNames,
                        o = e.week,
                        n = e.weeks,
                        a = e.weekIndex,
                        l = e.rowClassName,
                        u = e.ariaRole,
                        d = e.showWeekNumbers,
                        p = e.firstDayOfWeek,
                        m = e.firstWeekOfYear,
                        h = e.navigatedDate,
                        g = e.strings,
                        f = d ? (0, s.iU)(n.length, p, m, h) : null,
                        v = f
                            ? g.weekNumberFormatString &&
                              (0, c.W)(g.weekNumberFormatString, f[a])
                            : '';
                    return i.createElement(
                        'tr',
                        {role: u, className: l, key: a + '_' + o[0].key},
                        d &&
                            f &&
                            i.createElement(
                                'th',
                                {
                                    className: t.weekNumberCell,
                                    key: a,
                                    title: v,
                                    'aria-label': v,
                                    scope: 'row',
                                },
                                i.createElement('span', null, f[a])
                            ),
                        o.map(function (t, o) {
                            return i.createElement(
                                B,
                                (0, r.pi)({}, e, {
                                    key: t.key,
                                    day: t,
                                    dayIndex: o,
                                })
                            );
                        })
                    );
                },
                _ = (0, u.y)(),
                E = function (e) {
                    var t = i.useRef(null),
                        o = (0, C.M)(),
                        n = (function () {
                            var e = i.useRef({});
                            return [
                                e,
                                function (t) {
                                    return function (o) {
                                        null === o
                                            ? delete e.current[t]
                                            : (e.current[t] = o);
                                    };
                                },
                            ];
                        })(),
                        l = n[0],
                        u = n[1],
                        c = (function (e, t, o) {
                            return i.useMemo(
                                function () {
                                    for (
                                        var n,
                                            i = (0, f.m)(e),
                                            l = i[1][0].originalDate,
                                            u = i[i.length - 1][6].originalDate,
                                            c =
                                                (null ===
                                                    (n = e.getMarkedDays) ||
                                                void 0 === n
                                                    ? void 0
                                                    : n.call(e, l, u)) || [],
                                            d = [],
                                            p = 0;
                                        p < i.length;
                                        p++
                                    ) {
                                        for (
                                            var m = [],
                                                h = function (e) {
                                                    var n = i[p][e],
                                                        a = (0, r.pi)(
                                                            (0, r.pi)(
                                                                {
                                                                    onSelected:
                                                                        function () {
                                                                            return t(
                                                                                n.originalDate
                                                                            );
                                                                        },
                                                                    setRef: o(
                                                                        n.key
                                                                    ),
                                                                },
                                                                n
                                                            ),
                                                            {
                                                                isMarked:
                                                                    n.isMarked ||
                                                                    (null == c
                                                                        ? void 0
                                                                        : c.some(
                                                                              function (
                                                                                  e
                                                                              ) {
                                                                                  return (0,
                                                                                  s.aN)(
                                                                                      n.originalDate,
                                                                                      e
                                                                                  );
                                                                              }
                                                                          )),
                                                            }
                                                        );
                                                    m.push(a);
                                                },
                                                g = 0;
                                            g < a.NA;
                                            g++
                                        )
                                            h(g);
                                        d.push(m);
                                    }
                                    return d;
                                },
                                [e]
                            );
                        })(
                            e,
                            function (t) {
                                var o,
                                    n,
                                    r = e.firstDayOfWeek,
                                    i = e.minDate,
                                    a = e.maxDate,
                                    l = e.workWeekDays,
                                    u = e.daysToSelectInDayView,
                                    c = {
                                        minDate: i,
                                        maxDate: a,
                                        restrictedDates: e.restrictedDates,
                                    },
                                    d = (0, s.e0)(t, S, r, l, u);
                                (d = (d = (0, v.x)(d, i, a)).filter(
                                    function (e) {
                                        return !(0, b.f)(e, c);
                                    }
                                )),
                                    null === (o = e.onSelectDate) ||
                                        void 0 === o ||
                                        o.call(e, t, d),
                                    null === (n = e.onNavigateDate) ||
                                        void 0 === n ||
                                        n.call(e, t, !0);
                            },
                            u
                        ),
                        d = (function (e) {
                            var t = (0, y.D)(e[0][0].originalDate);
                            return t &&
                                t.getTime() !== e[0][0].originalDate.getTime()
                                ? !(t <= e[0][0].originalDate)
                                : void 0;
                        })(c),
                        p = (function (e) {
                            var t = function (e, t, o, n, r) {
                                    var i = [],
                                        a = !t && !r,
                                        l = !o && !n,
                                        s = !o && !r;
                                    return (
                                        !t &&
                                            !n &&
                                            i.push(
                                                (0, h.zg)()
                                                    ? e.topRightCornerDate
                                                    : e.topLeftCornerDate
                                            ),
                                        a &&
                                            i.push(
                                                (0, h.zg)()
                                                    ? e.topLeftCornerDate
                                                    : e.topRightCornerDate
                                            ),
                                        l &&
                                            i.push(
                                                (0, h.zg)()
                                                    ? e.bottomRightCornerDate
                                                    : e.bottomLeftCornerDate
                                            ),
                                        s &&
                                            i.push(
                                                (0, h.zg)()
                                                    ? e.bottomLeftCornerDate
                                                    : e.bottomRightCornerDate
                                            ),
                                        i.join(' ')
                                    );
                                },
                                o = function (t, o, n, r) {
                                    var i = e.dateRangeType,
                                        l = e.firstDayOfWeek,
                                        u = e.workWeekDays,
                                        c = i === a.NU.WorkWeek ? a.NU.Week : i,
                                        d = (0, s.e0)(t, c, l, u);
                                    return (
                                        n === r &&
                                        (!(!n || !r) ||
                                            d.filter(function (e) {
                                                return (
                                                    e.getTime() === o.getTime()
                                                );
                                            }).length > 0)
                                    );
                                };
                            return [
                                function (e, n) {
                                    var r = {},
                                        i = n.slice(1, n.length - 1);
                                    return (
                                        i.forEach(function (n, a) {
                                            n.forEach(function (n, l) {
                                                var s =
                                                        i[a - 1] &&
                                                        i[a - 1][l] &&
                                                        o(
                                                            i[a - 1][l]
                                                                .originalDate,
                                                            n.originalDate,
                                                            i[a - 1][l]
                                                                .isSelected,
                                                            n.isSelected
                                                        ),
                                                    u =
                                                        i[a + 1] &&
                                                        i[a + 1][l] &&
                                                        o(
                                                            i[a + 1][l]
                                                                .originalDate,
                                                            n.originalDate,
                                                            i[a + 1][l]
                                                                .isSelected,
                                                            n.isSelected
                                                        ),
                                                    c =
                                                        i[a][l - 1] &&
                                                        o(
                                                            i[a][l - 1]
                                                                .originalDate,
                                                            n.originalDate,
                                                            i[a][l - 1]
                                                                .isSelected,
                                                            n.isSelected
                                                        ),
                                                    d =
                                                        i[a][l + 1] &&
                                                        o(
                                                            i[a][l + 1]
                                                                .originalDate,
                                                            n.originalDate,
                                                            i[a][l + 1]
                                                                .isSelected,
                                                            n.isSelected
                                                        ),
                                                    p = [];
                                                p.push(t(e, s, u, c, d)),
                                                    p.push(
                                                        (function (
                                                            e,
                                                            t,
                                                            o,
                                                            n,
                                                            r
                                                        ) {
                                                            var i = [];
                                                            return (
                                                                t ||
                                                                    i.push(
                                                                        e.datesAbove
                                                                    ),
                                                                o ||
                                                                    i.push(
                                                                        e.datesBelow
                                                                    ),
                                                                n ||
                                                                    i.push(
                                                                        (0,
                                                                        h.zg)()
                                                                            ? e.datesRight
                                                                            : e.datesLeft
                                                                    ),
                                                                r ||
                                                                    i.push(
                                                                        (0,
                                                                        h.zg)()
                                                                            ? e.datesLeft
                                                                            : e.datesRight
                                                                    ),
                                                                i.join(' ')
                                                            );
                                                        })(e, s, u, c, d)
                                                    ),
                                                    (r[a + '_' + l] =
                                                        p.join(' '));
                                            });
                                        }),
                                        r
                                    );
                                },
                                t,
                            ];
                        })(e),
                        m = p[0],
                        k = p[1];
                    i.useImperativeHandle(
                        e.componentRef,
                        function () {
                            return {
                                focus: function () {
                                    var e, o;
                                    null ===
                                        (o =
                                            null === (e = t.current) ||
                                            void 0 === e
                                                ? void 0
                                                : e.focus) ||
                                        void 0 === o ||
                                        o.call(e);
                                },
                            };
                        },
                        []
                    );
                    var w = e.styles,
                        B = e.theme,
                        E = e.className,
                        S = e.dateRangeType,
                        N = e.showWeekNumbers,
                        M = e.labelledBy,
                        R = e.lightenDaysOutsideNavigatedMonth,
                        T = e.animationDirection,
                        I = _(w, {
                            theme: B,
                            className: E,
                            dateRangeType: S,
                            showWeekNumbers: N,
                            lightenDaysOutsideNavigatedMonth: void 0 === R || R,
                            animationDirection: T,
                            animateBackwards: d,
                        }),
                        P = m(I, c),
                        W = {
                            weeks: c,
                            navigatedDayRef: t,
                            calculateRoundedStyles: k,
                            activeDescendantId: o,
                            classNames: I,
                            weekCorners: P,
                            getDayInfosInRangeOfDay: function (t) {
                                var o = (function (e, t) {
                                        if (t && e === a.NU.WorkWeek) {
                                            for (
                                                var o = t.slice().sort(),
                                                    n = !0,
                                                    r = 1;
                                                r < o.length;
                                                r++
                                            )
                                                if (o[r] !== o[r - 1] + 1) {
                                                    n = !1;
                                                    break;
                                                }
                                            if (!n || 0 === t.length)
                                                return a.NU.Week;
                                        }
                                        return e;
                                    })(e.dateRangeType, e.workWeekDays),
                                    n = (0, s.e0)(
                                        t.originalDate,
                                        o,
                                        e.firstDayOfWeek,
                                        e.workWeekDays,
                                        e.daysToSelectInDayView
                                    ).map(function (e) {
                                        return e.getTime();
                                    });
                                return c.reduce(function (e, t) {
                                    return e.concat(
                                        t.filter(function (e) {
                                            return (
                                                -1 !==
                                                n.indexOf(
                                                    e.originalDate.getTime()
                                                )
                                            );
                                        })
                                    );
                                }, []);
                            },
                            getRefsFromDayInfos: function (e) {
                                return e.map(function (e) {
                                    return l.current[e.key];
                                });
                            },
                        };
                    return i.createElement(
                        g.k,
                        {className: I.wrapper, preventDefaultWhenHandled: !0},
                        i.createElement(
                            'table',
                            {
                                className: I.table,
                                'aria-multiselectable': 'false',
                                'aria-labelledby': M,
                                'aria-activedescendant': o,
                                role: 'grid',
                            },
                            i.createElement(
                                'tbody',
                                null,
                                i.createElement(
                                    D,
                                    (0, r.pi)({}, e, {classNames: I, weeks: c})
                                ),
                                i.createElement(
                                    x,
                                    (0, r.pi)({}, e, W, {
                                        week: c[0],
                                        weekIndex: -1,
                                        rowClassName: I.firstTransitionWeek,
                                        ariaRole: 'presentation',
                                        ariaHidden: !0,
                                    })
                                ),
                                c.slice(1, c.length - 1).map(function (t, o) {
                                    return i.createElement(
                                        x,
                                        (0, r.pi)({}, e, W, {
                                            key: o,
                                            week: t,
                                            weekIndex: o,
                                            rowClassName: I.weekRow,
                                        })
                                    );
                                }),
                                i.createElement(
                                    x,
                                    (0, r.pi)({}, e, W, {
                                        week: c[c.length - 1],
                                        weekIndex: -2,
                                        rowClassName: I.lastTransitionWeek,
                                        ariaRole: 'presentation',
                                        ariaHidden: !0,
                                    })
                                )
                            )
                        )
                    );
                };
            E.displayName = 'CalendarDayGridBase';
            var S,
                N = o(85446);
            !(function (e) {
                (e[(e.Horizontal = 0)] = 'Horizontal'),
                    (e[(e.Vertical = 1)] = 'Vertical');
            })(S || (S = {}));
            var M = {
                    hoverStyle: 'ms-CalendarDay-hoverStyle',
                    pressedStyle: 'ms-CalendarDay-pressedStyle',
                    dayIsTodayStyle: 'ms-CalendarDay-dayIsToday',
                    daySelectedStyle: 'ms-CalendarDay-daySelected',
                },
                R = (0, N.F4)({
                    '100%': {width: 0, height: 0, overflow: 'hidden'},
                    '99.9%': {width: '100%', height: 28, overflow: 'visible'},
                    '0%': {width: '100%', height: 28, overflow: 'visible'},
                }),
                T = (0, n.z)(
                    E,
                    function (e) {
                        var t,
                            o,
                            n,
                            i,
                            l,
                            s,
                            u,
                            c,
                            d,
                            p,
                            m = e.theme,
                            h = e.dateRangeType,
                            g = e.showWeekNumbers,
                            f = e.lightenDaysOutsideNavigatedMonth,
                            v = e.animateBackwards,
                            b = e.animationDirection,
                            y = m.palette,
                            C = (0, N.Cn)(M, m),
                            k = {};
                        void 0 !== v &&
                            (k =
                                b === S.Horizontal
                                    ? v
                                        ? N.Ic.slideRightIn20
                                        : N.Ic.slideLeftIn20
                                    : v
                                      ? N.Ic.slideDownIn20
                                      : N.Ic.slideUpIn20);
                        var D = {},
                            w = {};
                        void 0 !== v &&
                            b !== S.Horizontal &&
                            ((D = v ? {animationName: ''} : N.Ic.slideUpOut20),
                            (w = v
                                ? N.Ic.slideDownOut20
                                : {animationName: ''}));
                        var B = {
                            selectors: {
                                '&, &:disabled, & button': {
                                    color: y.neutralTertiaryAlt,
                                    pointerEvents: 'none',
                                },
                            },
                        };
                        return {
                            wrapper: {paddingBottom: 10},
                            table: [
                                {
                                    textAlign: 'center',
                                    borderCollapse: 'collapse',
                                    borderSpacing: '0',
                                    tableLayout: 'fixed',
                                    fontSize: 'inherit',
                                    marginTop: 4,
                                    width: 196,
                                    position: 'relative',
                                    paddingBottom: 10,
                                },
                                g && {width: 226},
                            ],
                            dayCell: [
                                (0, N.GL)(m, {inset: -3}),
                                {
                                    margin: 0,
                                    padding: 0,
                                    width: 28,
                                    height: 28,
                                    lineHeight: 28,
                                    fontSize: N.TS.small,
                                    fontWeight: N.lq.regular,
                                    color: y.neutralPrimary,
                                    cursor: 'pointer',
                                    position: 'relative',
                                    selectors:
                                        ((t = {}),
                                        (t[N.qJ] = (0, r.pi)(
                                            {
                                                color: 'WindowText',
                                                backgroundColor: 'transparent',
                                                zIndex: 0,
                                            },
                                            (0, N.xM)()
                                        )),
                                        (t['&.' + C.hoverStyle] = {
                                            backgroundColor: y.neutralLighter,
                                            selectors:
                                                ((o = {}),
                                                (o[N.qJ] = {
                                                    zIndex: 3,
                                                    backgroundColor: 'Window',
                                                    outline:
                                                        '1px solid Highlight',
                                                }),
                                                o),
                                        }),
                                        (t['&.' + C.pressedStyle] = {
                                            backgroundColor: y.neutralLight,
                                            selectors:
                                                ((n = {}),
                                                (n[N.qJ] = {
                                                    borderColor: 'Highlight',
                                                    color: 'Highlight',
                                                    backgroundColor: 'Window',
                                                }),
                                                n),
                                        }),
                                        (t[
                                            '&.' +
                                                C.pressedStyle +
                                                '.' +
                                                C.hoverStyle
                                        ] = {
                                            selectors:
                                                ((i = {}),
                                                (i[N.qJ] = {
                                                    backgroundColor: 'Window',
                                                    outline:
                                                        '1px solid Highlight',
                                                }),
                                                i),
                                        }),
                                        t),
                                },
                            ],
                            daySelected: [
                                h !== a.NU.Month && {
                                    backgroundColor:
                                        y.neutralLight + '!important',
                                    selectors:
                                        ((l = {
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                            },
                                        }),
                                        (l[
                                            '&:hover, &.' +
                                                C.hoverStyle +
                                                ', &.' +
                                                C.pressedStyle
                                        ] =
                                            ((s = {
                                                backgroundColor:
                                                    y.neutralLight +
                                                    '!important',
                                            }),
                                            (s[N.qJ] = {
                                                color: 'HighlightText!important',
                                                background:
                                                    'Highlight!important',
                                            }),
                                            s)),
                                        (l[N.qJ] = (0, r.pi)(
                                            {
                                                background:
                                                    'Highlight!important',
                                                color: 'HighlightText!important',
                                                borderColor:
                                                    'Highlight!important',
                                            },
                                            (0, N.xM)()
                                        )),
                                        l),
                                },
                            ],
                            weekRow: k,
                            weekDayLabelCell: N.Ic.fadeIn200,
                            weekNumberCell: {
                                margin: 0,
                                padding: 0,
                                borderRight: '1px solid',
                                borderColor: y.neutralLight,
                                backgroundColor: y.neutralLighterAlt,
                                color: y.neutralSecondary,
                                boxSizing: 'border-box',
                                width: 28,
                                height: 28,
                                fontWeight: N.lq.regular,
                                fontSize: N.TS.small,
                            },
                            dayOutsideBounds: B,
                            dayOutsideNavigatedMonth: f && {
                                color: y.neutralSecondary,
                                fontWeight: N.lq.regular,
                            },
                            dayButton: {
                                width: 24,
                                height: 24,
                                lineHeight: 24,
                                fontSize: N.TS.small,
                                fontWeight: 'inherit',
                                borderRadius: 2,
                                border: 'none',
                                padding: 0,
                                color: 'inherit',
                                backgroundColor: 'transparent',
                                cursor: 'pointer',
                                overflow: 'visible',
                                selectors: {
                                    span: {
                                        height: 'inherit',
                                        lineHeight: 'inherit',
                                    },
                                },
                            },
                            dayIsToday: {
                                backgroundColor: y.themePrimary + '!important',
                                borderRadius: '100%',
                                color: y.white + '!important',
                                fontWeight: N.lq.semibold + '!important',
                                selectors:
                                    ((u = {}),
                                    (u[N.qJ] = (0, r.pi)(
                                        {
                                            background: 'WindowText!important',
                                            color: 'Window!important',
                                            borderColor: 'WindowText!important',
                                        },
                                        (0, N.xM)()
                                    )),
                                    u),
                            },
                            firstTransitionWeek: (0, r.pi)(
                                (0, r.pi)(
                                    {
                                        position: 'absolute',
                                        opacity: 0,
                                        width: 0,
                                        height: 0,
                                        overflow: 'hidden',
                                    },
                                    D
                                ),
                                {animationName: D.animationName + ',' + R}
                            ),
                            lastTransitionWeek: (0, r.pi)(
                                (0, r.pi)(
                                    {
                                        position: 'absolute',
                                        opacity: 0,
                                        width: 0,
                                        height: 0,
                                        overflow: 'hidden',
                                        marginTop: -28,
                                    },
                                    w
                                ),
                                {animationName: w.animationName + ',' + R}
                            ),
                            dayMarker: {
                                width: 4,
                                height: 4,
                                backgroundColor: y.neutralSecondary,
                                borderRadius: '100%',
                                bottom: 1,
                                left: 0,
                                right: 0,
                                position: 'absolute',
                                margin: 'auto',
                                selectors:
                                    ((c = {}),
                                    (c['.' + C.dayIsTodayStyle + ' &'] = {
                                        backgroundColor: y.white,
                                        selectors:
                                            ((d = {}),
                                            (d[N.qJ] = {
                                                backgroundColor: 'Window',
                                            }),
                                            d),
                                    }),
                                    (c['.' + C.daySelectedStyle + ' &'] = {
                                        selectors:
                                            ((p = {}),
                                            (p[N.qJ] = {
                                                backgroundColor:
                                                    'HighlightText',
                                            }),
                                            p),
                                    }),
                                    (c[N.qJ] = (0, r.pi)(
                                        {backgroundColor: 'WindowText'},
                                        (0, N.xM)()
                                    )),
                                    c),
                            },
                            topRightCornerDate: {borderTopRightRadius: '2px'},
                            topLeftCornerDate: {borderTopLeftRadius: '2px'},
                            bottomRightCornerDate: {
                                borderBottomRightRadius: '2px',
                            },
                            bottomLeftCornerDate: {
                                borderBottomLeftRadius: '2px',
                            },
                            datesAbove: {
                                '&::before': {
                                    borderTop: '1px solid '.concat(
                                        y.neutralSecondary
                                    ),
                                },
                            },
                            datesBelow: {
                                '&::before': {
                                    borderBottom: '1px solid '.concat(
                                        y.neutralSecondary
                                    ),
                                },
                            },
                            datesLeft: {
                                '&::before': {
                                    borderLeft: '1px solid '.concat(
                                        y.neutralSecondary
                                    ),
                                },
                            },
                            datesRight: {
                                '&::before': {
                                    borderRight: '1px solid '.concat(
                                        y.neutralSecondary
                                    ),
                                },
                            },
                        };
                    },
                    void 0,
                    {scope: 'CalendarDayGrid'}
                ),
                I = (0, u.y)(),
                P = function (e) {
                    var t = i.useRef(null);
                    i.useImperativeHandle(
                        e.componentRef,
                        function () {
                            return {
                                focus: function () {
                                    var e, o;
                                    null ===
                                        (o =
                                            null === (e = t.current) ||
                                            void 0 === e
                                                ? void 0
                                                : e.focus) ||
                                        void 0 === o ||
                                        o.call(e);
                                },
                            };
                        },
                        []
                    );
                    var o = e.strings,
                        n = e.navigatedDate,
                        a = e.dateTimeFormatter,
                        l = e.styles,
                        s = e.theme,
                        u = e.className,
                        d = e.onHeaderSelect,
                        p = e.showSixWeeksByDefault,
                        m = e.minDate,
                        h = e.maxDate,
                        g = e.restrictedDates,
                        f = e.onNavigateDate,
                        v = e.showWeekNumbers,
                        b = e.dateRangeType,
                        y = e.animationDirection,
                        k = (0, C.M)(),
                        D = I(l, {
                            theme: s,
                            className: u,
                            headerIsClickable: !!d,
                            showWeekNumbers: v,
                            animationDirection: y,
                        }),
                        w = a.formatMonthYear(n, o),
                        B = d ? 'button' : 'div',
                        x = o.yearPickerHeaderAriaLabel
                            ? (0, c.W)(o.yearPickerHeaderAriaLabel, w)
                            : w;
                    return i.createElement(
                        'div',
                        {className: D.root},
                        i.createElement(
                            'div',
                            {className: D.header},
                            i.createElement(
                                B,
                                {
                                    'aria-label': d ? x : void 0,
                                    className: D.monthAndYear,
                                    onClick: d,
                                    'data-is-focusable': !!d,
                                    tabIndex: d ? 0 : -1,
                                    onKeyDown: H(d),
                                    type: 'button',
                                },
                                i.createElement(
                                    'span',
                                    {
                                        id: k,
                                        'aria-live': 'polite',
                                        'aria-atomic': 'true',
                                    },
                                    w
                                )
                            ),
                            i.createElement(
                                W,
                                (0, r.pi)({}, e, {classNames: D})
                            )
                        ),
                        i.createElement(
                            T,
                            (0, r.pi)({}, e, {
                                styles: l,
                                componentRef: t,
                                strings: o,
                                navigatedDate: n,
                                weeksToShow: p ? 6 : void 0,
                                dateTimeFormatter: a,
                                minDate: m,
                                maxDate: h,
                                restrictedDates: g,
                                onNavigateDate: f,
                                labelledBy: k,
                                dateRangeType: b,
                            })
                        )
                    );
                };
            P.displayName = 'CalendarDayBase';
            var W = function (e) {
                var t,
                    o,
                    n = e.minDate,
                    r = e.maxDate,
                    a = e.navigatedDate,
                    l = e.allFocusable,
                    u = e.strings,
                    c = e.navigationIcons,
                    p = e.showCloseButton,
                    h = e.classNames,
                    g = e.onNavigateDate,
                    f = e.onDismiss,
                    v = function () {
                        g((0, s.zI)(a, 1), !1);
                    },
                    b = function () {
                        g((0, s.zI)(a, -1), !1);
                    },
                    y = c.leftNavigation,
                    C = c.rightNavigation,
                    k = c.closeIcon,
                    D = !n || (0, s.NJ)(n, (0, s.pU)(a)) < 0,
                    w = !r || (0, s.NJ)((0, s.D7)(a), r) < 0;
                return i.createElement(
                    'div',
                    {className: h.monthComponents},
                    i.createElement(
                        'button',
                        {
                            className: (0, d.i)(
                                h.headerIconButton,
                                ((t = {}), (t[h.disabledStyle] = !D), t)
                            ),
                            tabIndex: D ? void 0 : l ? 0 : -1,
                            'aria-disabled': !D,
                            onClick: D ? b : void 0,
                            onKeyDown: D ? H(b) : void 0,
                            title: u.prevMonthAriaLabel
                                ? u.prevMonthAriaLabel +
                                  ' ' +
                                  u.months[(0, s.zI)(a, -1).getMonth()]
                                : void 0,
                            type: 'button',
                        },
                        i.createElement(m.J, {iconName: y})
                    ),
                    i.createElement(
                        'button',
                        {
                            className: (0, d.i)(
                                h.headerIconButton,
                                ((o = {}), (o[h.disabledStyle] = !w), o)
                            ),
                            tabIndex: w ? void 0 : l ? 0 : -1,
                            'aria-disabled': !w,
                            onClick: w ? v : void 0,
                            onKeyDown: w ? H(v) : void 0,
                            title: u.nextMonthAriaLabel
                                ? u.nextMonthAriaLabel +
                                  ' ' +
                                  u.months[(0, s.zI)(a, 1).getMonth()]
                                : void 0,
                            type: 'button',
                        },
                        i.createElement(m.J, {iconName: C})
                    ),
                    p &&
                        i.createElement(
                            'button',
                            {
                                className: (0, d.i)(h.headerIconButton),
                                onClick: f,
                                onKeyDown: H(f),
                                title: u.closeButtonAriaLabel,
                                type: 'button',
                            },
                            i.createElement(m.J, {iconName: k})
                        )
                );
            };
            W.displayName = 'CalendarDayNavigationButtons';
            var H = function (e) {
                    return function (t) {
                        t.which === p.m.enter && (null == e || e());
                    };
                },
                F = (0, n.z)(
                    P,
                    function (e) {
                        var t,
                            o = e.className,
                            n = e.theme,
                            i = e.headerIsClickable,
                            a = e.showWeekNumbers,
                            l = n.palette,
                            s = {
                                selectors:
                                    ((t = {
                                        '&, &:disabled, & button': {
                                            color: l.neutralTertiaryAlt,
                                            pointerEvents: 'none',
                                        },
                                    }),
                                    (t[N.qJ] = {
                                        color: 'GrayText',
                                        forcedColorAdjust: 'none',
                                    }),
                                    t),
                            };
                        return {
                            root: [
                                N.Fv,
                                {
                                    width: 196,
                                    padding: 12,
                                    boxSizing: 'content-box',
                                },
                                a && {width: 226},
                                o,
                            ],
                            header: {
                                position: 'relative',
                                display: 'inline-flex',
                                height: 28,
                                lineHeight: 44,
                                width: '100%',
                            },
                            monthAndYear: [
                                (0, N.GL)(n, {inset: 1}),
                                (0, r.pi)((0, r.pi)({}, N.Ic.fadeIn200), {
                                    alignItems: 'center',
                                    fontSize: N.TS.medium,
                                    fontFamily: 'inherit',
                                    color: l.neutralPrimary,
                                    display: 'inline-block',
                                    flexGrow: 1,
                                    fontWeight: N.lq.semibold,
                                    padding: '0 4px 0 10px',
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                    borderRadius: 2,
                                    lineHeight: 28,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textAlign: 'left',
                                    textOverflow: 'ellipsis',
                                }),
                                i && {
                                    selectors: {
                                        '&:hover': {
                                            cursor: 'pointer',
                                            background: l.neutralLight,
                                            color: l.black,
                                        },
                                    },
                                },
                            ],
                            monthComponents: {
                                display: 'inline-flex',
                                alignSelf: 'flex-end',
                            },
                            headerIconButton: [
                                (0, N.GL)(n, {inset: -1}),
                                {
                                    width: 28,
                                    height: 28,
                                    display: 'block',
                                    textAlign: 'center',
                                    lineHeight: 28,
                                    fontSize: N.TS.small,
                                    fontFamily: 'inherit',
                                    color: l.neutralPrimary,
                                    borderRadius: 2,
                                    position: 'relative',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    padding: 0,
                                    overflow: 'visible',
                                    selectors: {
                                        '&:hover': {
                                            color: l.neutralDark,
                                            backgroundColor: l.neutralLight,
                                            cursor: 'pointer',
                                            outline: '1px solid transparent',
                                        },
                                    },
                                },
                            ],
                            disabledStyle: s,
                        };
                    },
                    void 0,
                    {scope: 'CalendarDay'}
                ),
                L = function (e) {
                    var t,
                        o,
                        n,
                        i,
                        a,
                        l,
                        s,
                        u = e.className,
                        c = e.theme,
                        d = e.hasHeaderClickCallback,
                        p = e.highlightCurrent,
                        m = e.highlightSelected,
                        h = e.animateBackwards,
                        g = e.animationDirection,
                        f = c.palette,
                        v = {};
                    void 0 !== h &&
                        (v =
                            g === S.Horizontal
                                ? h
                                    ? N.Ic.slideRightIn20
                                    : N.Ic.slideLeftIn20
                                : h
                                  ? N.Ic.slideDownIn20
                                  : N.Ic.slideUpIn20);
                    var b = void 0 !== h ? N.Ic.fadeIn200 : {};
                    return {
                        root: [
                            N.Fv,
                            {
                                width: 196,
                                padding: 12,
                                boxSizing: 'content-box',
                                overflow: 'hidden',
                            },
                            u,
                        ],
                        headerContainer: {display: 'flex'},
                        currentItemButton: [
                            (0, N.GL)(c, {inset: -1}),
                            (0, r.pi)((0, r.pi)({}, b), {
                                fontSize: N.TS.medium,
                                fontWeight: N.lq.semibold,
                                fontFamily: 'inherit',
                                textAlign: 'left',
                                color: 'inherit',
                                backgroundColor: 'transparent',
                                flexGrow: 1,
                                padding: '0 4px 0 10px',
                                border: 'none',
                                overflow: 'visible',
                            }),
                            d && {
                                selectors: {
                                    '&:hover, &:active': {
                                        cursor: d ? 'pointer' : 'default',
                                        color: f.neutralDark,
                                        outline: '1px solid transparent',
                                        backgroundColor: f.neutralLight,
                                    },
                                },
                            },
                        ],
                        navigationButtonsContainer: {
                            display: 'flex',
                            alignItems: 'center',
                        },
                        navigationButton: [
                            (0, N.GL)(c, {inset: -1}),
                            {
                                fontFamily: 'inherit',
                                width: 28,
                                minWidth: 28,
                                height: 28,
                                minHeight: 28,
                                display: 'block',
                                textAlign: 'center',
                                lineHeight: 28,
                                fontSize: N.TS.small,
                                color: f.neutralPrimary,
                                borderRadius: 2,
                                position: 'relative',
                                backgroundColor: 'transparent',
                                border: 'none',
                                padding: 0,
                                overflow: 'visible',
                                selectors: {
                                    '&:hover': {
                                        color: f.neutralDark,
                                        cursor: 'pointer',
                                        outline: '1px solid transparent',
                                        backgroundColor: f.neutralLight,
                                    },
                                },
                            },
                        ],
                        gridContainer: {marginTop: 4},
                        buttonRow: (0, r.pi)((0, r.pi)({}, v), {
                            marginBottom: 16,
                            selectors: {
                                '&:nth-child(n + 3)': {marginBottom: 0},
                            },
                        }),
                        itemButton: [
                            (0, N.GL)(c, {inset: -1}),
                            {
                                width: 40,
                                height: 40,
                                minWidth: 40,
                                minHeight: 40,
                                lineHeight: 40,
                                fontSize: N.TS.small,
                                fontFamily: 'inherit',
                                padding: 0,
                                margin: '0 12px 0 0',
                                color: f.neutralPrimary,
                                backgroundColor: 'transparent',
                                border: 'none',
                                borderRadius: 2,
                                overflow: 'visible',
                                selectors: {
                                    '&:nth-child(4n + 4)': {marginRight: 0},
                                    '&:nth-child(n + 9)': {marginBottom: 0},
                                    '& div': {fontWeight: N.lq.regular},
                                    '&:hover': {
                                        color: f.neutralDark,
                                        backgroundColor: f.neutralLight,
                                        cursor: 'pointer',
                                        outline: '1px solid transparent',
                                        selectors:
                                            ((t = {}),
                                            (t[N.qJ] = (0, r.pi)(
                                                {
                                                    background: 'Window',
                                                    color: 'WindowText',
                                                    outline:
                                                        '1px solid Highlight',
                                                },
                                                (0, N.xM)()
                                            )),
                                            t),
                                    },
                                    '&:active': {
                                        backgroundColor: f.themeLight,
                                        selectors:
                                            ((o = {}),
                                            (o[N.qJ] = (0, r.pi)(
                                                {
                                                    background: 'Window',
                                                    color: 'Highlight',
                                                },
                                                (0, N.xM)()
                                            )),
                                            o),
                                    },
                                },
                            },
                        ],
                        current: p
                            ? {
                                  color: f.white,
                                  backgroundColor: f.themePrimary,
                                  selectors:
                                      ((n = {
                                          '& div': {fontWeight: N.lq.semibold},
                                          '&:hover': {
                                              backgroundColor: f.themePrimary,
                                              selectors:
                                                  ((i = {}),
                                                  (i[N.qJ] = (0, r.pi)(
                                                      {
                                                          backgroundColor:
                                                              'WindowText',
                                                          color: 'Window',
                                                      },
                                                      (0, N.xM)()
                                                  )),
                                                  i),
                                          },
                                      }),
                                      (n[N.qJ] = (0, r.pi)(
                                          {
                                              backgroundColor: 'WindowText',
                                              color: 'Window',
                                          },
                                          (0, N.xM)()
                                      )),
                                      n),
                              }
                            : {},
                        selected: m
                            ? {
                                  color: f.neutralPrimary,
                                  backgroundColor: f.themeLight,
                                  fontWeight: N.lq.semibold,
                                  selectors:
                                      ((a = {
                                          '& div': {fontWeight: N.lq.semibold},
                                          '&:hover, &:active': {
                                              backgroundColor: f.themeLight,
                                              selectors:
                                                  ((l = {}),
                                                  (l[N.qJ] = (0, r.pi)(
                                                      {
                                                          color: 'Window',
                                                          background:
                                                              'Highlight',
                                                      },
                                                      (0, N.xM)()
                                                  )),
                                                  l),
                                          },
                                      }),
                                      (a[N.qJ] = (0, r.pi)(
                                          {
                                              background: 'Highlight',
                                              color: 'Window',
                                          },
                                          (0, N.xM)()
                                      )),
                                      a),
                              }
                            : {},
                        disabled: {
                            selectors:
                                ((s = {
                                    '&, &:disabled, & button': {
                                        color: f.neutralTertiaryAlt,
                                        pointerEvents: 'none',
                                    },
                                }),
                                (s[N.qJ] = {
                                    color: 'GrayText',
                                    forcedColorAdjust: 'none',
                                }),
                                s),
                        },
                    };
                },
                Y = function (e) {
                    return L(e);
                },
                A = o(4061),
                q = o(92672),
                O = (0, u.y)(),
                J = 12,
                z = {prevRangeAriaLabel: void 0, nextRangeAriaLabel: void 0},
                K = function (e) {
                    var t,
                        o,
                        n = e.styles,
                        r = e.theme,
                        a = e.className,
                        l = e.highlightCurrentYear,
                        s = e.highlightSelectedYear,
                        u = e.year,
                        c = e.selected,
                        m = e.disabled,
                        h = e.componentRef,
                        g = e.onSelectYear,
                        f = e.onRenderYear,
                        v = i.useRef(null);
                    i.useImperativeHandle(
                        h,
                        function () {
                            return {
                                focus: function () {
                                    var e, t;
                                    null ===
                                        (t =
                                            null === (e = v.current) ||
                                            void 0 === e
                                                ? void 0
                                                : e.focus) ||
                                        void 0 === t ||
                                        t.call(e);
                                },
                            };
                        },
                        []
                    );
                    var b = O(n, {
                        theme: r,
                        className: a,
                        highlightCurrent: l,
                        highlightSelected: s,
                    });
                    return i.createElement(
                        'button',
                        {
                            className: (0, d.i)(
                                b.itemButton,
                                ((t = {}),
                                (t[b.selected] = c),
                                (t[b.disabled] = m),
                                t)
                            ),
                            type: 'button',
                            role: 'gridcell',
                            onClick: m
                                ? void 0
                                : function () {
                                      null == g || g(u);
                                  },
                            onKeyDown: m
                                ? void 0
                                : function (e) {
                                      e.which === p.m.enter &&
                                          (null == g || g(u));
                                  },
                            disabled: m,
                            'aria-selected': c,
                            ref: v,
                        },
                        null !== (o = null == f ? void 0 : f(u)) && void 0 !== o
                            ? o
                            : u
                    );
                };
            K.displayName = 'CalendarYearGridCell';
            var G,
                V = function (e) {
                    var t = e.styles,
                        o = e.theme,
                        n = e.className,
                        a = e.fromYear,
                        l = e.toYear,
                        s = e.animationDirection,
                        u = e.animateBackwards,
                        c = e.minYear,
                        d = e.maxYear,
                        p = e.onSelectYear,
                        m = e.selectedYear,
                        h = e.componentRef,
                        f = i.useRef(null),
                        v = i.useRef(null);
                    i.useImperativeHandle(
                        h,
                        function () {
                            return {
                                focus: function () {
                                    var e, t;
                                    null ===
                                        (t =
                                            null ===
                                                (e = f.current || v.current) ||
                                            void 0 === e
                                                ? void 0
                                                : e.focus) ||
                                        void 0 === t ||
                                        t.call(e);
                                },
                            };
                        },
                        []
                    );
                    for (
                        var b,
                            y,
                            C,
                            k,
                            D = O(t, {
                                theme: o,
                                className: n,
                                animateBackwards: u,
                                animationDirection: s,
                            }),
                            w = function (t) {
                                var o, n;
                                return null !==
                                    (n =
                                        null === (o = e.onRenderYear) ||
                                        void 0 === o
                                            ? void 0
                                            : o.call(e, t)) && void 0 !== n
                                    ? n
                                    : t;
                            },
                            B = ''.concat(w(a), ' - ').concat(w(l)),
                            x = a,
                            _ = [],
                            E = 0;
                        E < (l - a + 1) / 4;
                        E++
                    ) {
                        _.push([]);
                        for (var S = 0; S < 4; S++)
                            _[E].push(
                                (void 0,
                                void 0,
                                void 0,
                                (y = (b = x) === m),
                                (C =
                                    (void 0 !== c && b < c) ||
                                    (void 0 !== d && b > d)),
                                (k = b === new Date().getFullYear()),
                                i.createElement(
                                    K,
                                    (0, r.pi)({}, e, {
                                        key: b,
                                        year: b,
                                        selected: y,
                                        current: k,
                                        disabled: C,
                                        onSelectYear: p,
                                        componentRef: y ? f : k ? v : void 0,
                                        theme: o,
                                    })
                                ))
                            ),
                                x++;
                    }
                    return i.createElement(
                        g.k,
                        null,
                        i.createElement(
                            'div',
                            {
                                className: D.gridContainer,
                                role: 'grid',
                                'aria-label': B,
                            },
                            _.map(function (e, t) {
                                return i.createElement.apply(
                                    i,
                                    (0, r.ev)(
                                        [
                                            'div',
                                            {
                                                key:
                                                    'yearPickerRow_' +
                                                    t +
                                                    '_' +
                                                    a,
                                                role: 'row',
                                                className: D.buttonRow,
                                            },
                                        ],
                                        e,
                                        !1
                                    )
                                );
                            })
                        )
                    );
                };
            (V.displayName = 'CalendarYearGrid'),
                (function (e) {
                    (e[(e.Previous = 0)] = 'Previous'),
                        (e[(e.Next = 1)] = 'Next');
                })(G || (G = {}));
            var U = function (e) {
                var t,
                    o = e.styles,
                    n = e.theme,
                    r = e.className,
                    a = e.navigationIcons,
                    l = void 0 === a ? q.XU : a,
                    s = e.strings,
                    u = void 0 === s ? z : s,
                    c = e.direction,
                    g = e.onSelectPrev,
                    f = e.onSelectNext,
                    v = e.fromYear,
                    b = e.toYear,
                    y = e.maxYear,
                    C = e.minYear,
                    k = O(o, {theme: n, className: r}),
                    D =
                        c === G.Previous
                            ? u.prevRangeAriaLabel
                            : u.nextRangeAriaLabel,
                    w = c === G.Previous ? -12 : J,
                    B = D
                        ? 'string' == typeof D
                            ? D
                            : D({fromYear: v + w, toYear: b + w})
                        : void 0,
                    x =
                        c === G.Previous
                            ? void 0 !== C && v < C
                            : void 0 !== y && e.fromYear + J > y,
                    _ = function () {
                        c === G.Previous ? null == g || g() : null == f || f();
                    },
                    E = (0, h.zg)() ? c === G.Next : c === G.Previous;
                return i.createElement(
                    'button',
                    {
                        className: (0, d.i)(
                            k.navigationButton,
                            ((t = {}), (t[k.disabled] = x), t)
                        ),
                        onClick: x ? void 0 : _,
                        onKeyDown: x
                            ? void 0
                            : function (e) {
                                  e.which === p.m.enter && _();
                              },
                        type: 'button',
                        title: B,
                        disabled: x,
                    },
                    i.createElement(m.J, {
                        iconName: E ? l.leftNavigation : l.rightNavigation,
                    })
                );
            };
            U.displayName = 'CalendarYearNavArrow';
            var j = function (e) {
                var t = e.styles,
                    o = e.theme,
                    n = e.className,
                    a = O(t, {theme: o, className: n});
                return i.createElement(
                    'div',
                    {className: a.navigationButtonsContainer},
                    i.createElement(
                        U,
                        (0, r.pi)({}, e, {direction: G.Previous})
                    ),
                    i.createElement(U, (0, r.pi)({}, e, {direction: G.Next}))
                );
            };
            j.displayName = 'CalendarYearNav';
            var Q = function (e) {
                var t = e.styles,
                    o = e.theme,
                    n = e.className,
                    r = e.fromYear,
                    a = e.toYear,
                    l = e.strings,
                    s = void 0 === l ? z : l,
                    u = e.animateBackwards,
                    d = e.animationDirection,
                    m = function () {
                        var t;
                        null === (t = e.onHeaderSelect) ||
                            void 0 === t ||
                            t.call(e, !0);
                    },
                    h = function (t) {
                        var o, n;
                        return null !==
                            (n =
                                null === (o = e.onRenderYear) || void 0 === o
                                    ? void 0
                                    : o.call(e, t)) && void 0 !== n
                            ? n
                            : t;
                    },
                    g = O(t, {
                        theme: o,
                        className: n,
                        hasHeaderClickCallback: !!e.onHeaderSelect,
                        animateBackwards: u,
                        animationDirection: d,
                    });
                if (e.onHeaderSelect) {
                    var f = s.rangeAriaLabel,
                        v = s.headerAriaLabelFormatString,
                        b = f ? ('string' == typeof f ? f : f(e)) : void 0,
                        y = v ? (0, c.W)(v, b) : b;
                    return i.createElement(
                        'button',
                        {
                            className: g.currentItemButton,
                            onClick: m,
                            onKeyDown: function (e) {
                                (e.which !== p.m.enter &&
                                    e.which !== p.m.space) ||
                                    m();
                            },
                            'aria-label': y,
                            role: 'button',
                            type: 'button',
                        },
                        i.createElement(
                            'span',
                            {'aria-live': 'assertive', 'aria-atomic': 'true'},
                            h(r),
                            ' - ',
                            h(a)
                        )
                    );
                }
                return i.createElement(
                    'div',
                    {className: g.current},
                    h(r),
                    ' - ',
                    h(a)
                );
            };
            Q.displayName = 'CalendarYearTitle';
            var Z = function (e) {
                var t,
                    o = e.styles,
                    n = e.theme,
                    a = e.className,
                    l = e.animateBackwards,
                    s = e.animationDirection,
                    u = e.onRenderTitle,
                    c = O(o, {
                        theme: n,
                        className: a,
                        hasHeaderClickCallback: !!e.onHeaderSelect,
                        animateBackwards: l,
                        animationDirection: s,
                    });
                return i.createElement(
                    'div',
                    {className: c.headerContainer},
                    null !== (t = null == u ? void 0 : u(e)) && void 0 !== t
                        ? t
                        : i.createElement(Q, (0, r.pi)({}, e)),
                    i.createElement(j, (0, r.pi)({}, e))
                );
            };
            Z.displayName = 'CalendarYearHeader';
            var $ = function (e) {
                var t = (function (e) {
                        var t = e.selectedYear,
                            o = e.navigatedYear,
                            n = t || o || new Date().getFullYear(),
                            r = 10 * Math.floor(n / 10),
                            i = (0, y.D)(r);
                        return i && i !== r ? i > r : void 0;
                    })(e),
                    o = (function (e) {
                        var t = e.selectedYear,
                            o = e.navigatedYear,
                            n = i.useMemo(
                                function () {
                                    return (
                                        t ||
                                        o ||
                                        10 *
                                            Math.floor(
                                                new Date().getFullYear() / 10
                                            )
                                    );
                                },
                                [o, t]
                            ),
                            r = i.useState(n),
                            a = r[0],
                            l = r[1];
                        return (
                            i.useEffect(
                                function () {
                                    l(n);
                                },
                                [n]
                            ),
                            [
                                a,
                                a + J - 1,
                                function () {
                                    l(function (e) {
                                        return e + J;
                                    });
                                },
                                function () {
                                    l(function (e) {
                                        return e - J;
                                    });
                                },
                            ]
                        );
                    })(e),
                    n = o[0],
                    a = o[1],
                    l = o[2],
                    s = o[3],
                    u = i.useRef(null);
                i.useImperativeHandle(e.componentRef, function () {
                    return {
                        focus: function () {
                            var e, t;
                            null ===
                                (t =
                                    null === (e = u.current) || void 0 === e
                                        ? void 0
                                        : e.focus) ||
                                void 0 === t ||
                                t.call(e);
                        },
                    };
                });
                var c = e.styles,
                    d = e.theme,
                    p = e.className,
                    m = O(c, {theme: d, className: p});
                return i.createElement(
                    'div',
                    {className: m.root},
                    i.createElement(
                        Z,
                        (0, r.pi)({}, e, {
                            fromYear: n,
                            toYear: a,
                            onSelectPrev: s,
                            onSelectNext: l,
                            animateBackwards: t,
                        })
                    ),
                    i.createElement(
                        V,
                        (0, r.pi)({}, e, {
                            fromYear: n,
                            toYear: a,
                            animateBackwards: t,
                            componentRef: u,
                        })
                    )
                );
            };
            $.displayName = 'CalendarYearBase';
            var X = (0, n.z)(
                    $,
                    function (e) {
                        return L(e);
                    },
                    void 0,
                    {scope: 'CalendarYear'}
                ),
                ee = (0, u.y)(),
                te = {
                    styles: Y,
                    strings: void 0,
                    navigationIcons: q.XU,
                    dateTimeFormatter: l.mR,
                    yearPickerHidden: !1,
                },
                oe = function (e) {
                    var t,
                        o,
                        n = (0, A.j)(te, e),
                        r = (function (e) {
                            var t = e.componentRef,
                                o = i.useRef(null),
                                n = i.useRef(null),
                                r = i.useRef(!1),
                                a = i.useCallback(function () {
                                    n.current
                                        ? n.current.focus()
                                        : o.current && o.current.focus();
                                }, []);
                            return (
                                i.useImperativeHandle(
                                    t,
                                    function () {
                                        return {focus: a};
                                    },
                                    [a]
                                ),
                                i.useEffect(function () {
                                    r.current && (a(), (r.current = !1));
                                }),
                                [
                                    o,
                                    n,
                                    function () {
                                        r.current = !0;
                                    },
                                ]
                            );
                        })(n),
                        a = r[0],
                        l = r[1],
                        u = r[2],
                        p = i.useState(!1),
                        f = p[0],
                        v = p[1],
                        b = (function (e) {
                            var t = e.navigatedDate.getFullYear(),
                                o = (0, y.D)(t);
                            return void 0 === o || o === t ? void 0 : o > t;
                        })(n),
                        C = n.navigatedDate,
                        k = n.selectedDate,
                        D = n.strings,
                        w = n.today,
                        B = void 0 === w ? new Date() : w,
                        x = n.navigationIcons,
                        _ = n.dateTimeFormatter,
                        E = n.minDate,
                        S = n.maxDate,
                        N = n.theme,
                        M = n.styles,
                        R = n.className,
                        T = n.allFocusable,
                        I = n.highlightCurrentMonth,
                        P = n.highlightSelectedMonth,
                        W = n.animationDirection,
                        H = n.yearPickerHidden,
                        F = n.onNavigateDate,
                        L = function (e) {
                            return function () {
                                return O(e);
                            };
                        },
                        Y = function () {
                            F((0, s.Bc)(C, 1), !1);
                        },
                        q = function () {
                            F((0, s.Bc)(C, -1), !1);
                        },
                        O = function (e) {
                            var t;
                            null === (t = n.onHeaderSelect) ||
                                void 0 === t ||
                                t.call(n),
                                F((0, s.q0)(C, e), !0);
                        },
                        J = function () {
                            var e;
                            H
                                ? null === (e = n.onHeaderSelect) ||
                                  void 0 === e ||
                                  e.call(n)
                                : (u(), v(!0));
                        },
                        z = x.leftNavigation,
                        K = x.rightNavigation,
                        G = _,
                        V = !E || (0, s.NJ)(E, (0, s.W8)(C)) < 0,
                        U = !S || (0, s.NJ)((0, s.Q9)(C), S) < 0,
                        j = ee(M, {
                            theme: N,
                            className: R,
                            hasHeaderClickCallback: !!n.onHeaderSelect || !H,
                            highlightCurrent: I,
                            highlightSelected: P,
                            animateBackwards: b,
                            animationDirection: W,
                        });
                    if (f) {
                        var Q = (function (e) {
                                var t = e.strings,
                                    o = e.navigatedDate,
                                    n = e.dateTimeFormatter,
                                    r = function (e) {
                                        if (n) {
                                            var t = new Date(o.getTime());
                                            return (
                                                t.setFullYear(e),
                                                n.formatYear(t)
                                            );
                                        }
                                        return String(e);
                                    },
                                    i = function (e) {
                                        return ''
                                            .concat(r(e.fromYear), ' - ')
                                            .concat(r(e.toYear));
                                    };
                                return [
                                    r,
                                    {
                                        rangeAriaLabel: i,
                                        prevRangeAriaLabel: function (e) {
                                            return t.prevYearRangeAriaLabel
                                                ? ''
                                                      .concat(
                                                          t.prevYearRangeAriaLabel,
                                                          ' '
                                                      )
                                                      .concat(i(e))
                                                : '';
                                        },
                                        nextRangeAriaLabel: function (e) {
                                            return t.nextYearRangeAriaLabel
                                                ? ''
                                                      .concat(
                                                          t.nextYearRangeAriaLabel,
                                                          ' '
                                                      )
                                                      .concat(i(e))
                                                : '';
                                        },
                                        headerAriaLabelFormatString:
                                            t.yearPickerHeaderAriaLabel,
                                    },
                                ];
                            })(n),
                            Z = Q[0],
                            $ = Q[1];
                        return i.createElement(X, {
                            key: 'calendarYear',
                            minYear: E ? E.getFullYear() : void 0,
                            maxYear: S ? S.getFullYear() : void 0,
                            onSelectYear: function (e) {
                                if ((u(), C.getFullYear() !== e)) {
                                    var t = new Date(C.getTime());
                                    t.setFullYear(e),
                                        S && t > S
                                            ? (t = (0, s.q0)(t, S.getMonth()))
                                            : E &&
                                              t < E &&
                                              (t = (0, s.q0)(t, E.getMonth())),
                                        F(t, !0);
                                }
                                v(!1);
                            },
                            navigationIcons: x,
                            onHeaderSelect: function (e) {
                                u(), v(!1);
                            },
                            selectedYear: k
                                ? k.getFullYear()
                                : C
                                  ? C.getFullYear()
                                  : void 0,
                            navigatedYear: C.getFullYear(),
                            onRenderYear: Z,
                            strings: $,
                            componentRef: l,
                            styles: M,
                            highlightCurrentYear: I,
                            highlightSelectedYear: P,
                            animationDirection: W,
                        });
                    }
                    for (
                        var oe = [], ie = 0;
                        ie < D.shortMonths.length / 4;
                        ie++
                    )
                        oe.push(ie);
                    var ae = G.formatYear(C),
                        le = D.monthPickerHeaderAriaLabel
                            ? (0, c.W)(D.monthPickerHeaderAriaLabel, ae)
                            : ae;
                    return i.createElement(
                        'div',
                        {className: j.root},
                        i.createElement(
                            'div',
                            {className: j.headerContainer},
                            i.createElement(
                                'button',
                                {
                                    className: j.currentItemButton,
                                    onClick: J,
                                    onKeyDown: re(J),
                                    'aria-label': le,
                                    'data-is-focusable':
                                        !!n.onHeaderSelect || !H,
                                    tabIndex: n.onHeaderSelect || !H ? 0 : -1,
                                    type: 'button',
                                },
                                i.createElement(
                                    'span',
                                    {
                                        'aria-live': 'polite',
                                        'aria-atomic': 'true',
                                    },
                                    ae
                                )
                            ),
                            i.createElement(
                                'div',
                                {className: j.navigationButtonsContainer},
                                i.createElement(
                                    'button',
                                    {
                                        className: (0, d.i)(
                                            j.navigationButton,
                                            ((t = {}), (t[j.disabled] = !V), t)
                                        ),
                                        'aria-disabled': !V,
                                        tabIndex: V ? void 0 : T ? 0 : -1,
                                        onClick: V ? q : void 0,
                                        onKeyDown: V ? re(q) : void 0,
                                        title: D.prevYearAriaLabel
                                            ? D.prevYearAriaLabel +
                                              ' ' +
                                              G.formatYear((0, s.Bc)(C, -1))
                                            : void 0,
                                        type: 'button',
                                    },
                                    i.createElement(m.J, {
                                        iconName: (0, h.zg)() ? K : z,
                                    })
                                ),
                                i.createElement(
                                    'button',
                                    {
                                        className: (0, d.i)(
                                            j.navigationButton,
                                            ((o = {}), (o[j.disabled] = !U), o)
                                        ),
                                        'aria-disabled': !U,
                                        tabIndex: U ? void 0 : T ? 0 : -1,
                                        onClick: U ? Y : void 0,
                                        onKeyDown: U ? re(Y) : void 0,
                                        title: D.nextYearAriaLabel
                                            ? D.nextYearAriaLabel +
                                              ' ' +
                                              G.formatYear((0, s.Bc)(C, 1))
                                            : void 0,
                                        type: 'button',
                                    },
                                    i.createElement(m.J, {
                                        iconName: (0, h.zg)() ? z : K,
                                    })
                                )
                            )
                        ),
                        i.createElement(
                            g.k,
                            null,
                            i.createElement(
                                'div',
                                {
                                    className: j.gridContainer,
                                    role: 'grid',
                                    'aria-label': ae,
                                },
                                oe.map(function (e) {
                                    var t = D.shortMonths.slice(
                                        4 * e,
                                        4 * (e + 1)
                                    );
                                    return i.createElement(
                                        'div',
                                        {
                                            key:
                                                'monthRow_' +
                                                e +
                                                C.getFullYear(),
                                            role: 'row',
                                            className: j.buttonRow,
                                        },
                                        t.map(function (t, o) {
                                            var n,
                                                r = 4 * e + o,
                                                l = (0, s.q0)(C, r),
                                                u = C.getMonth() === r,
                                                c = k.getMonth() === r,
                                                p =
                                                    k.getFullYear() ===
                                                    C.getFullYear(),
                                                m =
                                                    (!E ||
                                                        (0, s.NJ)(
                                                            E,
                                                            (0, s.D7)(l)
                                                        ) < 1) &&
                                                    (!S ||
                                                        (0, s.NJ)(
                                                            (0, s.pU)(l),
                                                            S
                                                        ) < 1);
                                            return i.createElement(
                                                'button',
                                                {
                                                    ref: u ? a : void 0,
                                                    role: 'gridcell',
                                                    className: (0, d.i)(
                                                        j.itemButton,
                                                        ((n = {}),
                                                        (n[j.current] =
                                                            I &&
                                                            ne(
                                                                r,
                                                                C.getFullYear(),
                                                                B
                                                            )),
                                                        (n[j.selected] =
                                                            P && c && p),
                                                        (n[j.disabled] = !m),
                                                        n)
                                                    ),
                                                    disabled: !T && !m,
                                                    key: r,
                                                    onClick: m ? L(r) : void 0,
                                                    onKeyDown: m
                                                        ? re(L(r))
                                                        : void 0,
                                                    'aria-label': G.formatMonth(
                                                        l,
                                                        D
                                                    ),
                                                    'aria-selected': u,
                                                    'data-is-focusable':
                                                        !!m || void 0,
                                                    type: 'button',
                                                },
                                                t
                                            );
                                        })
                                    );
                                })
                            )
                        )
                    );
                };
            function ne(e, t, o) {
                return o.getFullYear() === t && o.getMonth() === e;
            }
            function re(e) {
                return function (t) {
                    t.which === p.m.enter && e();
                };
            }
            oe.displayName = 'CalendarMonthBase';
            var ie = (0, n.z)(oe, Y, void 0, {scope: 'CalendarMonth'}),
                ae = o(57957),
                le = o(66430),
                se = o(84346),
                ue = o(71387),
                ce = 440,
                de = (0, u.y)(),
                pe = [
                    a.eO.Monday,
                    a.eO.Tuesday,
                    a.eO.Wednesday,
                    a.eO.Thursday,
                    a.eO.Friday,
                ],
                me = {
                    isMonthPickerVisible: !0,
                    isDayPickerVisible: !0,
                    showMonthPickerAsOverlay: !1,
                    today: new Date(),
                    firstDayOfWeek: a.eO.Sunday,
                    dateRangeType: a.NU.Day,
                    showGoToToday: !0,
                    strings: l.tf,
                    highlightCurrentMonth: !1,
                    highlightSelectedMonth: !1,
                    navigationIcons: q.XU,
                    showWeekNumbers: !1,
                    firstWeekOfYear: a.On.FirstDay,
                    dateTimeFormatter: l.mR,
                    showSixWeeksByDefault: !1,
                    workWeekDays: pe,
                    showCloseButton: !1,
                    allFocusable: !1,
                },
                he = i.forwardRef(function (e, t) {
                    var o = (0, A.j)(me, e),
                        n = (function (e) {
                            var t = e.value,
                                o = e.today,
                                n = e.onSelectDate,
                                r = i.useMemo(
                                    function () {
                                        return void 0 === o ? new Date() : o;
                                    },
                                    [o]
                                ),
                                a = (0, ue.G)(t, r),
                                l = a[0],
                                s = void 0 === l ? r : l,
                                u = a[1],
                                c = i.useState(t),
                                d = c[0],
                                p = void 0 === d ? r : d,
                                m = c[1],
                                h = i.useState(t),
                                g = h[0],
                                f = void 0 === g ? r : g,
                                v = h[1],
                                b = i.useState(t),
                                y = b[0],
                                C = void 0 === y ? r : y,
                                k = b[1];
                            return (
                                t &&
                                    C.valueOf() !== t.valueOf() &&
                                    (m(t), v(t), k(t)),
                                [
                                    s,
                                    p,
                                    f,
                                    function (e, t) {
                                        v(e), m(e), u(e), null == n || n(e, t);
                                    },
                                    function (e) {
                                        v(e), m(e);
                                    },
                                    function (e) {
                                        v(e);
                                    },
                                ]
                            );
                        })(o),
                        a = n[0],
                        l = n[1],
                        u = n[2],
                        m = n[3],
                        h = n[4],
                        g = n[5],
                        f = (function (e) {
                            var t = (0, ue.G)(
                                    ge(e) ? void 0 : e.isMonthPickerVisible,
                                    !1
                                ),
                                o = t[0],
                                n = void 0 === o || o,
                                r = t[1],
                                i = (0, ue.G)(
                                    ge(e) ? void 0 : e.isDayPickerVisible,
                                    !0
                                ),
                                a = i[0],
                                l = void 0 === a || a,
                                s = i[1];
                            return [
                                n,
                                l,
                                function () {
                                    r(!n), s(!l);
                                },
                            ];
                        })(o),
                        v = f[0],
                        b = f[1],
                        y = f[2],
                        C = (function (e, t, o) {
                            var n = e.componentRef,
                                r = i.useRef(null),
                                a = i.useRef(null),
                                l = i.useRef(!1),
                                s = i.useCallback(
                                    function () {
                                        t && r.current
                                            ? (0, ae.um)(r.current)
                                            : o &&
                                              a.current &&
                                              (0, ae.um)(a.current);
                                    },
                                    [t, o]
                                );
                            return (
                                i.useImperativeHandle(
                                    n,
                                    function () {
                                        return {focus: s};
                                    },
                                    [s]
                                ),
                                i.useEffect(function () {
                                    l.current && (s(), (l.current = !1));
                                }),
                                [
                                    r,
                                    a,
                                    function () {
                                        l.current = !0;
                                    },
                                ]
                            );
                        })(o, b, v),
                        k = C[0],
                        D = C[1],
                        w = C[2],
                        B = function () {
                            var e = R;
                            return (
                                e &&
                                    Z &&
                                    (e =
                                        l.getFullYear() !== Z.getFullYear() ||
                                        l.getMonth() !== Z.getMonth() ||
                                        u.getFullYear() !== Z.getFullYear() ||
                                        u.getMonth() !== Z.getMonth()),
                                R &&
                                    i.createElement(
                                        'button',
                                        {
                                            className: (0, d.i)(
                                                'js-goToday',
                                                te.goTodayButton
                                            ),
                                            onClick: _,
                                            onKeyDown: E(_),
                                            type: 'button',
                                            disabled: !e,
                                        },
                                        M.goToToday
                                    )
                            );
                        },
                        x = ge(o)
                            ? function () {
                                  y(), w();
                              }
                            : void 0,
                        _ = function () {
                            h(Z), w();
                        },
                        E = function (e) {
                            return function (t) {
                                switch (t.which) {
                                    case p.m.enter:
                                    case p.m.space:
                                        e();
                                }
                            };
                        },
                        S = o.firstDayOfWeek,
                        N = o.dateRangeType,
                        M = o.strings,
                        R = o.showGoToToday,
                        T = o.highlightCurrentMonth,
                        I = o.highlightSelectedMonth,
                        P = o.navigationIcons,
                        W = o.minDate,
                        H = o.maxDate,
                        L = o.restrictedDates,
                        Y = o.id,
                        q = o.className,
                        O = o.showCloseButton,
                        J = o.allFocusable,
                        z = o.styles,
                        K = o.showWeekNumbers,
                        G = o.theme,
                        V = o.calendarDayProps,
                        U = o.calendarMonthProps,
                        j = o.dateTimeFormatter,
                        Q = o.today,
                        Z = void 0 === Q ? new Date() : Q,
                        $ = ge(o),
                        X = !$ && !b,
                        ee = $ && R,
                        te = de(z, {
                            theme: G,
                            className: q,
                            isMonthPickerVisible: v,
                            isDayPickerVisible: b,
                            monthPickerOnly: X,
                            showMonthPickerAsOverlay: $,
                            overlaidWithButton: ee,
                            overlayedWithButton: ee,
                            showGoToToday: R,
                            showWeekNumbers: K,
                        }),
                        oe = '',
                        ne = '';
                    if (
                        (j &&
                            M.todayDateFormatString &&
                            (oe = (0, c.W)(
                                M.todayDateFormatString,
                                j.formatMonthDayYear(Z, M)
                            )),
                        j && M.selectedDateFormatString)
                    ) {
                        var re = X ? j.formatMonthYear : j.formatMonthDayYear;
                        ne = (0, c.W)(M.selectedDateFormatString, re(a, M));
                    }
                    var se = ne + ', ' + oe;
                    return i.createElement(
                        'div',
                        {
                            id: Y,
                            ref: t,
                            role: 'group',
                            'aria-label': se,
                            className: (0, d.i)(
                                'ms-DatePicker',
                                te.root,
                                q,
                                'ms-slideDownIn10'
                            ),
                            onKeyDown: function (e) {
                                var t;
                                switch (e.which) {
                                    case p.m.enter:
                                    case p.m.backspace:
                                        e.preventDefault();
                                        break;
                                    case p.m.escape:
                                        null === (t = o.onDismiss) ||
                                            void 0 === t ||
                                            t.call(o);
                                        break;
                                    case p.m.pageUp:
                                        e.ctrlKey
                                            ? h((0, s.Bc)(l, 1))
                                            : h((0, s.zI)(l, 1)),
                                            e.preventDefault();
                                        break;
                                    case p.m.pageDown:
                                        e.ctrlKey
                                            ? h((0, s.Bc)(l, -1))
                                            : h((0, s.zI)(l, -1)),
                                            e.preventDefault();
                                }
                            },
                        },
                        i.createElement(
                            'div',
                            {
                                className: te.liveRegion,
                                'aria-live': 'polite',
                                'aria-atomic': 'true',
                            },
                            i.createElement('span', null, ne)
                        ),
                        b &&
                            i.createElement(
                                F,
                                (0, r.pi)(
                                    {
                                        selectedDate: a,
                                        navigatedDate: l,
                                        today: o.today,
                                        onSelectDate: m,
                                        onNavigateDate: function (e, t) {
                                            h(e), t && w();
                                        },
                                        onDismiss: o.onDismiss,
                                        firstDayOfWeek: S,
                                        dateRangeType: N,
                                        strings: M,
                                        onHeaderSelect: x,
                                        navigationIcons: P,
                                        showWeekNumbers: o.showWeekNumbers,
                                        firstWeekOfYear: o.firstWeekOfYear,
                                        dateTimeFormatter: o.dateTimeFormatter,
                                        showSixWeeksByDefault:
                                            o.showSixWeeksByDefault,
                                        minDate: W,
                                        maxDate: H,
                                        restrictedDates: L,
                                        workWeekDays: o.workWeekDays,
                                        componentRef: k,
                                        showCloseButton: O,
                                        allFocusable: J,
                                    },
                                    V
                                )
                            ),
                        b &&
                            v &&
                            i.createElement('div', {className: te.divider}),
                        v
                            ? i.createElement(
                                  'div',
                                  {className: te.monthPickerWrapper},
                                  i.createElement(
                                      ie,
                                      (0, r.pi)(
                                          {
                                              navigatedDate: u,
                                              selectedDate: l,
                                              strings: M,
                                              onNavigateDate: function (e, t) {
                                                  t && w(),
                                                      t
                                                          ? (X && m(e), h(e))
                                                          : g(e);
                                              },
                                              today: o.today,
                                              highlightCurrentMonth: T,
                                              highlightSelectedMonth: I,
                                              onHeaderSelect: x,
                                              navigationIcons: P,
                                              dateTimeFormatter:
                                                  o.dateTimeFormatter,
                                              minDate: W,
                                              maxDate: H,
                                              componentRef: D,
                                          },
                                          U
                                      )
                                  ),
                                  B()
                              )
                            : B(),
                        i.createElement(le.u, null)
                    );
                });
            function ge(e) {
                var t = e.showMonthPickerAsOverlay,
                    o = e.isDayPickerVisible,
                    n = (0, se.J)();
                return t || (o && n && n.innerWidth <= ce);
            }
            he.displayName = 'CalendarBase';
            var fe = (0, n.z)(
                he,
                function (e) {
                    var t,
                        o = e.className,
                        n = e.theme,
                        r = e.isDayPickerVisible,
                        i = e.isMonthPickerVisible,
                        a = e.showWeekNumbers,
                        l = n.palette,
                        s = r && i ? 440 : 220;
                    return (
                        a && r && (s += 30),
                        {
                            root: [
                                N.Fv,
                                {display: 'flex', width: s},
                                !i && {flexDirection: 'column'},
                                o,
                            ],
                            divider: {
                                top: 0,
                                borderRight: '1px solid',
                                borderColor: l.neutralLight,
                            },
                            monthPickerWrapper: [
                                {display: 'flex', flexDirection: 'column'},
                            ],
                            goTodayButton: [
                                (0, N.GL)(n, {inset: -1}),
                                {
                                    bottom: 0,
                                    color: l.neutralPrimary,
                                    height: 30,
                                    lineHeight: 30,
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    boxSizing: 'content-box',
                                    padding: '0 4px',
                                    alignSelf: 'flex-end',
                                    marginRight: 16,
                                    marginTop: 3,
                                    fontSize: N.TS.small,
                                    fontFamily: 'inherit',
                                    overflow: 'visible',
                                    selectors: {
                                        '& div': {fontSize: N.TS.small},
                                        '&:hover': {
                                            color: l.themePrimary,
                                            backgroundColor: 'transparent',
                                            cursor: 'pointer',
                                            selectors:
                                                ((t = {}),
                                                (t[N.qJ] = {
                                                    outline:
                                                        '1px solid Buttontext',
                                                    borderRadius: '2px',
                                                }),
                                                t),
                                        },
                                        '&:active': {color: l.themeDark},
                                        '&:disabled': {
                                            color: l.neutralTertiaryAlt,
                                            pointerEvents: 'none',
                                        },
                                    },
                                },
                            ],
                            liveRegion: {
                                border: 0,
                                height: '1px',
                                margin: '-1px',
                                overflow: 'hidden',
                                padding: 0,
                                width: '1px',
                                position: 'absolute',
                            },
                        }
                    );
                },
                void 0,
                {scope: 'Calendar'}
            );
        },
        92672: (e, t, o) => {
            o.d(t, {V3: () => n, XU: () => r});
            var n = o(8249).tf,
                r = {
                    leftNavigation: 'Up',
                    rightNavigation: 'Down',
                    closeIcon: 'CalculatorMultiply',
                };
        },
        36133: (e, t, o) => {
            o.d(t, {U: () => Y});
            var n,
                r = o(96583),
                i = o(65812),
                a = o(98621),
                l = o(53222),
                s = o(57957),
                u = o(44557),
                c = o(14040),
                d = o(4061),
                p = o(48782),
                m = o(99976),
                h = o(90279),
                g = o(4458),
                f = o(86221),
                v = o(3135),
                b = o(11599),
                y = o(85446),
                C = o(56842),
                k = o(73298),
                D = o(54008),
                w = o(267),
                B = o(92824),
                x = o(81262),
                _ =
                    (((n = {})[f.z.top] = y.k4.slideUpIn10),
                    (n[f.z.bottom] = y.k4.slideDownIn10),
                    (n[f.z.left] = y.k4.slideLeftIn10),
                    (n[f.z.right] = y.k4.slideRightIn10),
                    n),
                E = {top: 0, left: 0},
                S = {opacity: 0, filter: 'opacity(0)', pointerEvents: 'none'},
                N = ['role', 'aria-roledescription'],
                M = {
                    preventDismissOnLostFocus: !1,
                    preventDismissOnScroll: !1,
                    preventDismissOnResize: !1,
                    isBeakVisible: !0,
                    beakWidth: 16,
                    gapSpace: 0,
                    minPagePadding: 8,
                    directionalHint: l.b.bottomAutoEdge,
                },
                R = (0, b.y)({disableCaching: !0});
            var T = i.memo(
                i.forwardRef(function (e, t) {
                    var o = (0, d.j)(M, e),
                        n = o.styles,
                        a = o.style,
                        l = o.ariaLabel,
                        h = o.ariaDescribedBy,
                        b = o.ariaLabelledBy,
                        y = o.className,
                        E = o.isBeakVisible,
                        T = o.children,
                        W = o.beakWidth,
                        H = o.calloutWidth,
                        F = o.calloutMaxWidth,
                        L = o.calloutMinWidth,
                        Y = o.doNotLayer,
                        A = o.finalHeight,
                        q = o.hideOverflow,
                        O = void 0 === q ? !!A : q,
                        J = o.backgroundColor,
                        z = o.calloutMaxHeight,
                        K = o.onScroll,
                        G = o.shouldRestoreFocus,
                        V = void 0 === G || G,
                        U = o.target,
                        j = o.hidden,
                        Q = o.onLayerMounted,
                        Z = o.popupProps,
                        $ = i.useRef(null),
                        X = i.useRef(null),
                        ee = (0, w.r)(X, null == Z ? void 0 : Z.ref),
                        te = i.useState(null),
                        oe = te[0],
                        ne = te[1],
                        re = i.useCallback(function (e) {
                            ne(e);
                        }, []),
                        ie = (0, w.r)($, t),
                        ae = (0, B.e)(o.target, {current: oe}),
                        le = ae[0],
                        se = ae[1],
                        ue = (function (e, t, o) {
                            var n = e.bounds,
                                r = e.minPagePadding,
                                a = void 0 === r ? M.minPagePadding : r,
                                l = e.target,
                                s = i.useState(!1),
                                u = s[0],
                                c = s[1],
                                d = i.useRef(),
                                p = i.useCallback(
                                    function () {
                                        if (!d.current || u) {
                                            var e =
                                                'function' == typeof n
                                                    ? o
                                                        ? n(l, o)
                                                        : void 0
                                                    : n;
                                            !e &&
                                                o &&
                                                (e = {
                                                    top:
                                                        (e = (0, g.qE)(
                                                            t.current,
                                                            o
                                                        )).top + a,
                                                    left: e.left + a,
                                                    right: e.right - a,
                                                    bottom: e.bottom - a,
                                                    width: e.width - 2 * a,
                                                    height: e.height - 2 * a,
                                                }),
                                                (d.current = e),
                                                u && c(!1);
                                        }
                                        return d.current;
                                    },
                                    [n, a, l, t, o, u]
                                ),
                                m = (0, C.r)();
                            return (
                                (0, k.d)(
                                    o,
                                    'resize',
                                    m.debounce(
                                        function () {
                                            c(!0);
                                        },
                                        500,
                                        {leading: !0}
                                    )
                                ),
                                p
                            );
                        })(o, le, se),
                        ce = (function (e, t, o, n, a, l) {
                            var s,
                                u = i.useState(),
                                c = u[0],
                                d = u[1],
                                p = i.useRef(0),
                                m = i.useRef(),
                                h = (0, C.r)(),
                                f = e.hidden,
                                v = e.target,
                                b = e.finalHeight,
                                y = e.calloutMaxHeight,
                                k = e.onPositioned,
                                D = e.directionalHint,
                                w = e.hideOverflow,
                                B = e.preferScrollResizePositioning,
                                _ = (0, x.xw)(),
                                E = i.useRef();
                            E.current !== l.current &&
                                ((E.current = l.current),
                                (s = l.current
                                    ? null == _
                                        ? void 0
                                        : _.getComputedStyle(l.current)
                                    : void 0));
                            var S = null == s ? void 0 : s.overflowY;
                            return (
                                i.useEffect(
                                    function () {
                                        if (!f) {
                                            var i = h.requestAnimationFrame(
                                                function () {
                                                    var i, l, s, u;
                                                    if (t.current && o) {
                                                        var h = (0, r.pi)(
                                                                (0, r.pi)(
                                                                    {},
                                                                    e
                                                                ),
                                                                {
                                                                    target: n.current,
                                                                    bounds: a(),
                                                                }
                                                            ),
                                                            f = o.cloneNode(!0);
                                                        (f.style.maxHeight = y
                                                            ? ''.concat(y)
                                                            : ''),
                                                            (f.style.visibility =
                                                                'hidden'),
                                                            null ===
                                                                (i =
                                                                    o.parentElement) ||
                                                                void 0 === i ||
                                                                i.appendChild(
                                                                    f
                                                                );
                                                        var C =
                                                                m.current === v
                                                                    ? c
                                                                    : void 0,
                                                            D =
                                                                B &&
                                                                !(
                                                                    w ||
                                                                    'clip' ===
                                                                        S ||
                                                                    'hidden' ===
                                                                        S
                                                                ),
                                                            x = b
                                                                ? (0, g.Su)(
                                                                      h,
                                                                      t.current,
                                                                      f,
                                                                      C,
                                                                      _
                                                                  )
                                                                : (0, g.c5)(
                                                                      h,
                                                                      t.current,
                                                                      f,
                                                                      C,
                                                                      D,
                                                                      void 0,
                                                                      _
                                                                  );
                                                        null ===
                                                            (l =
                                                                o.parentElement) ||
                                                            void 0 === l ||
                                                            l.removeChild(f),
                                                            (!c && x) ||
                                                            (c &&
                                                                x &&
                                                                ((u = x),
                                                                !P(
                                                                    (s = c)
                                                                        .elementPosition,
                                                                    u.elementPosition
                                                                ) ||
                                                                    !P(
                                                                        s
                                                                            .beakPosition
                                                                            .elementPosition,
                                                                        u
                                                                            .beakPosition
                                                                            .elementPosition
                                                                    )) &&
                                                                p.current < 5)
                                                                ? (p.current++,
                                                                  d(x))
                                                                : p.current >
                                                                      0 &&
                                                                  ((p.current = 0),
                                                                  null == k ||
                                                                      k(c));
                                                    }
                                                },
                                                o
                                            );
                                            return (
                                                (m.current = v),
                                                function () {
                                                    h.cancelAnimationFrame(i),
                                                        (m.current = void 0);
                                                }
                                            );
                                        }
                                        d(void 0), (p.current = 0);
                                    },
                                    [
                                        f,
                                        D,
                                        h,
                                        o,
                                        y,
                                        t,
                                        n,
                                        b,
                                        a,
                                        k,
                                        c,
                                        e,
                                        v,
                                        w,
                                        B,
                                        S,
                                        _,
                                    ]
                                ),
                                c
                            );
                        })(o, $, oe, le, ue, ee),
                        de = (function (e, t, o, n) {
                            var r,
                                a = e.calloutMaxHeight,
                                l = e.finalHeight,
                                s = e.directionalHint,
                                u = e.directionalHintFixed,
                                c = e.hidden,
                                d = e.gapSpace,
                                p = e.beakWidth,
                                m = e.isBeakVisible,
                                h = e.coverTarget,
                                v = i.useState(),
                                b = v[0],
                                y = v[1],
                                C =
                                    null !==
                                        (r =
                                            null == n
                                                ? void 0
                                                : n.elementPosition) &&
                                    void 0 !== r
                                        ? r
                                        : {},
                                k = C.top,
                                D = C.bottom,
                                w = (null == o ? void 0 : o.current)
                                    ? (0, g.DQ)(o.current)
                                    : void 0;
                            return (
                                i.useEffect(
                                    function () {
                                        var e,
                                            o,
                                            r =
                                                null !== (e = t()) &&
                                                void 0 !== e
                                                    ? e
                                                    : {},
                                            i = r.top,
                                            l = r.bottom;
                                        (null == n ? void 0 : n.targetEdge) ===
                                            f.z.top &&
                                            (null == w ? void 0 : w.top) &&
                                            !h &&
                                            (l = w.top - (0, g.qs)(m, p, d)),
                                            'number' == typeof k && l
                                                ? (o = l - k)
                                                : 'number' == typeof D &&
                                                  'number' == typeof i &&
                                                  l &&
                                                  (o = l - i - D),
                                            y(
                                                (!a && !c) || (a && o && a > o)
                                                    ? o
                                                    : a || void 0
                                            );
                                    },
                                    [D, a, l, s, u, t, c, n, k, d, p, m, w, h]
                                ),
                                b
                            );
                        })(o, ue, le, ce),
                        pe = (function (e, t, o, n, r) {
                            var a = e.hidden,
                                l = e.onDismiss,
                                s = e.preventDismissOnScroll,
                                d = e.preventDismissOnResize,
                                p = e.preventDismissOnLostFocus,
                                m = e.dismissOnTargetClick,
                                h = e.shouldDismissOnWindowFocus,
                                g = e.preventDismissOnEvent,
                                f = i.useRef(!1),
                                v = (0, C.r)(),
                                b = (0, D.B)([
                                    function () {
                                        f.current = !0;
                                    },
                                    function () {
                                        f.current = !1;
                                    },
                                ]),
                                y = !!t;
                            return (
                                i.useEffect(
                                    function () {
                                        var e = function (e) {
                                                y && !s && b(e);
                                            },
                                            t = function (e) {
                                                d ||
                                                    (g && g(e)) ||
                                                    null == l ||
                                                    l(e);
                                            },
                                            i = function (e) {
                                                p || b(e);
                                            },
                                            b = function (e) {
                                                var t = e.composedPath
                                                        ? e.composedPath()
                                                        : [],
                                                    i =
                                                        t.length > 0
                                                            ? t[0]
                                                            : e.target,
                                                    a =
                                                        o.current &&
                                                        !(0, u.t)(o.current, i);
                                                if (a && f.current)
                                                    f.current = !1;
                                                else if (
                                                    (!n.current && a) ||
                                                    (e.target !== r &&
                                                        a &&
                                                        (!n.current ||
                                                            'stopPropagation' in
                                                                n.current ||
                                                            m ||
                                                            (i !== n.current &&
                                                                !(0, u.t)(
                                                                    n.current,
                                                                    i
                                                                ))))
                                                ) {
                                                    if (g && g(e)) return;
                                                    null == l || l(e);
                                                }
                                            },
                                            C = function (e) {
                                                h &&
                                                    (((!g || g(e)) &&
                                                        (g || p)) ||
                                                        (null == r
                                                            ? void 0
                                                            : r.document.hasFocus()) ||
                                                        null !==
                                                            e.relatedTarget ||
                                                        null == l ||
                                                        l(e));
                                            },
                                            k = new Promise(function (o) {
                                                v.setTimeout(function () {
                                                    if (!a && r) {
                                                        var n = [
                                                            (0, c.on)(
                                                                r,
                                                                'scroll',
                                                                e,
                                                                !0
                                                            ),
                                                            (0, c.on)(
                                                                r,
                                                                'resize',
                                                                t,
                                                                !0
                                                            ),
                                                            (0, c.on)(
                                                                r.document
                                                                    .documentElement,
                                                                'focus',
                                                                i,
                                                                !0
                                                            ),
                                                            (0, c.on)(
                                                                r.document
                                                                    .documentElement,
                                                                'click',
                                                                i,
                                                                !0
                                                            ),
                                                            (0, c.on)(
                                                                r,
                                                                'blur',
                                                                C,
                                                                !0
                                                            ),
                                                        ];
                                                        o(function () {
                                                            n.forEach(
                                                                function (e) {
                                                                    return e();
                                                                }
                                                            );
                                                        });
                                                    }
                                                }, 0);
                                            });
                                        return function () {
                                            k.then(function (e) {
                                                return e();
                                            });
                                        };
                                    },
                                    [a, v, o, n, r, l, h, m, p, d, s, y, g]
                                ),
                                b
                            );
                        })(o, ce, $, le, se),
                        me = pe[0],
                        he = pe[1],
                        ge =
                            (null == ce ? void 0 : ce.elementPosition.top) &&
                            (null == ce ? void 0 : ce.elementPosition.bottom),
                        fe = (0, r.pi)(
                            (0, r.pi)(
                                {},
                                null == ce ? void 0 : ce.elementPosition
                            ),
                            {maxHeight: de}
                        );
                    if (
                        (ge && (fe.bottom = void 0),
                        (function (e, t, o) {
                            var n = e.hidden,
                                r = e.setInitialFocus,
                                a = (0, C.r)(),
                                l = !!t;
                            i.useEffect(
                                function () {
                                    if (!n && r && l && o) {
                                        var e = a.requestAnimationFrame(
                                            function () {
                                                return (0, s.uo)(o);
                                            },
                                            o
                                        );
                                        return function () {
                                            return a.cancelAnimationFrame(e);
                                        };
                                    }
                                },
                                [n, l, a, o, r]
                            );
                        })(o, ce, oe),
                        i.useEffect(
                            function () {
                                j || null == Q || Q();
                            },
                            [j]
                        ),
                        !se)
                    )
                        return null;
                    var ve = O,
                        be = E && !!U,
                        ye = R(n, {
                            theme: o.theme,
                            className: y,
                            overflowYHidden: ve,
                            calloutWidth: H,
                            positions: ce,
                            beakWidth: W,
                            backgroundColor: J,
                            calloutMaxWidth: F,
                            calloutMinWidth: L,
                            doNotLayer: Y,
                        }),
                        Ce = (0, r.pi)(
                            (0, r.pi)({maxHeight: z || '100%'}, a),
                            ve && {overflowY: 'hidden'}
                        ),
                        ke = o.hidden ? {visibility: 'hidden'} : void 0;
                    return i.createElement(
                        'div',
                        {ref: ie, className: ye.container, style: ke},
                        i.createElement(
                            'div',
                            (0, r.pi)({}, (0, p.pq)(o, p.n7, N), {
                                className: (0, m.i)(
                                    ye.root,
                                    ce && ce.targetEdge && _[ce.targetEdge]
                                ),
                                style: ce ? (0, r.pi)({}, fe) : S,
                                tabIndex: -1,
                                ref: re,
                            }),
                            be &&
                                i.createElement('div', {
                                    className: ye.beak,
                                    style: I(ce),
                                }),
                            be &&
                                i.createElement('div', {
                                    className: ye.beakCurtain,
                                }),
                            i.createElement(
                                v.G,
                                (0, r.pi)(
                                    {
                                        role: o.role,
                                        'aria-roledescription':
                                            o['aria-roledescription'],
                                        ariaDescribedBy: h,
                                        ariaLabel: l,
                                        ariaLabelledBy: b,
                                        className: ye.calloutMain,
                                        onDismiss: o.onDismiss,
                                        onMouseDown: me,
                                        onMouseUp: he,
                                        onRestoreFocus: o.onRestoreFocus,
                                        onScroll: K,
                                        shouldRestoreFocus: V,
                                        style: Ce,
                                    },
                                    Z,
                                    {ref: ee}
                                ),
                                T
                            )
                        )
                    );
                }),
                function (e, t) {
                    return (
                        !(t.shouldUpdateWhenHidden || !e.hidden || !t.hidden) ||
                        (0, h.Vv)(e, t)
                    );
                }
            );
            function I(e) {
                var t,
                    o,
                    n = (0, r.pi)(
                        (0, r.pi)(
                            {},
                            null ===
                                (t = null == e ? void 0 : e.beakPosition) ||
                                void 0 === t
                                ? void 0
                                : t.elementPosition
                        ),
                        {
                            display: (
                                null ===
                                    (o = null == e ? void 0 : e.beakPosition) ||
                                void 0 === o
                                    ? void 0
                                    : o.hideBeak
                            )
                                ? 'none'
                                : void 0,
                        }
                    );
                return (
                    n.top ||
                        n.bottom ||
                        n.left ||
                        n.right ||
                        ((n.left = E.left), (n.top = E.top)),
                    n
                );
            }
            function P(e, t) {
                for (var o in t)
                    if (t.hasOwnProperty(o)) {
                        var n = e[o],
                            r = t[o];
                        if (void 0 === n || void 0 === r) return !1;
                        if (n.toFixed(2) !== r.toFixed(2)) return !1;
                    }
                return !0;
            }
            function W(e) {
                return {height: e, width: e};
            }
            T.displayName = 'CalloutContentBase';
            var H = {
                    container: 'ms-Callout-container',
                    root: 'ms-Callout',
                    beak: 'ms-Callout-beak',
                    beakCurtain: 'ms-Callout-beakCurtain',
                    calloutMain: 'ms-Callout-main',
                },
                F = (0, a.z)(
                    T,
                    function (e) {
                        var t,
                            o = e.theme,
                            n = e.className,
                            r = e.overflowYHidden,
                            i = e.calloutWidth,
                            a = e.beakWidth,
                            l = e.backgroundColor,
                            s = e.calloutMaxWidth,
                            u = e.calloutMinWidth,
                            c = e.doNotLayer,
                            d = (0, y.Cn)(H, o),
                            p = o.semanticColors,
                            m = o.effects;
                        return {
                            container: [d.container, {position: 'relative'}],
                            root: [
                                d.root,
                                o.fonts.medium,
                                {
                                    position: 'absolute',
                                    display: 'flex',
                                    zIndex: c ? y.bR.Layer : void 0,
                                    boxSizing: 'border-box',
                                    borderRadius: m.roundedCorner2,
                                    boxShadow: m.elevation16,
                                    selectors:
                                        ((t = {}),
                                        (t[y.qJ] = {
                                            borderWidth: 1,
                                            borderStyle: 'solid',
                                            borderColor: 'WindowText',
                                        }),
                                        t),
                                },
                                (0, y.e2)(),
                                n,
                                !!i && {width: i},
                                !!s && {maxWidth: s},
                                !!u && {minWidth: u},
                            ],
                            beak: [
                                d.beak,
                                {
                                    position: 'absolute',
                                    backgroundColor: p.menuBackground,
                                    boxShadow: 'inherit',
                                    border: 'inherit',
                                    boxSizing: 'border-box',
                                    transform: 'rotate(45deg)',
                                },
                                W(a),
                                l && {backgroundColor: l},
                            ],
                            beakCurtain: [
                                d.beakCurtain,
                                {
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    backgroundColor: p.menuBackground,
                                    borderRadius: m.roundedCorner2,
                                },
                            ],
                            calloutMain: [
                                d.calloutMain,
                                {
                                    backgroundColor: p.menuBackground,
                                    overflowX: 'hidden',
                                    overflowY: 'auto',
                                    position: 'relative',
                                    width: '100%',
                                    borderRadius: m.roundedCorner2,
                                },
                                r && {overflowY: 'hidden'},
                                l && {backgroundColor: l},
                            ],
                        };
                    },
                    void 0,
                    {scope: 'CalloutContent'}
                ),
                L = o(18200),
                Y = i.forwardRef(function (e, t) {
                    var o = e.layerProps,
                        n = e.doNotLayer,
                        a = (0, r._T)(e, ['layerProps', 'doNotLayer']),
                        l = i.createElement(
                            F,
                            (0, r.pi)({}, a, {doNotLayer: n, ref: t})
                        );
                    return n ? l : i.createElement(L.m, (0, r.pi)({}, o), l);
                });
            Y.displayName = 'Callout';
        },
    },
]);
