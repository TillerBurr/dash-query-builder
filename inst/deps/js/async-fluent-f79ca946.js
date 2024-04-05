'use strict';
(self.webpackChunkdash_query_builder =
    self.webpackChunkdash_query_builder || []).push([
    [60],
    {
        95599: (e, t, o) => {
            o.d(t, {X: () => x});
            var n = o(98621),
                r = o(96583),
                i = o(65812),
                s = o(36626),
                a = o(267),
                l = o(71387),
                c = o(11599),
                d = o(66430),
                u = o(56316),
                p = (0, c.y)(),
                m = i.forwardRef(function (e, t) {
                    var o = e.disabled,
                        n = e.required,
                        c = e.inputProps,
                        m = e.name,
                        h = e.ariaLabel,
                        f = e.ariaLabelledBy,
                        v = e.ariaDescribedBy,
                        b = e.ariaPositionInSet,
                        g = e.ariaSetSize,
                        _ = e.title,
                        x = e.checkmarkIconProps,
                        y = e.styles,
                        C = e.theme,
                        I = e.className,
                        k = e.boxSide,
                        S = void 0 === k ? 'start' : k,
                        M = (0, s.M)('checkbox-', e.id),
                        w = i.useRef(null),
                        D = (0, a.r)(w, t),
                        T = i.useRef(null),
                        P = (0, l.G)(e.checked, e.defaultChecked, e.onChange),
                        O = P[0],
                        E = P[1],
                        N = (0, l.G)(e.indeterminate, e.defaultIndeterminate),
                        F = N[0],
                        R = N[1];
                    (0, d.Pr)(w);
                    var B = p(y, {
                            theme: C,
                            className: I,
                            disabled: o,
                            indeterminate: F,
                            checked: O,
                            reversed: 'start' !== S,
                            isUsingCustomLabelRender: !!e.onRenderLabel,
                        }),
                        H = i.useCallback(
                            function (e) {
                                F ? (E(!!O, e), R(!1)) : E(!O, e);
                            },
                            [E, R, F, O]
                        ),
                        L = i.useCallback(
                            function (e) {
                                return e && e.label
                                    ? i.createElement(
                                          'span',
                                          {className: B.text, title: e.title},
                                          e.label
                                      )
                                    : null;
                            },
                            [B.text]
                        ),
                        A = i.useCallback(
                            function (e) {
                                if (T.current) {
                                    var t = !!e;
                                    (T.current.indeterminate = t), R(t);
                                }
                            },
                            [R]
                        );
                    !(function (e, t, o, n, r) {
                        i.useImperativeHandle(
                            e.componentRef,
                            function () {
                                return {
                                    get checked() {
                                        return !!t;
                                    },
                                    get indeterminate() {
                                        return !!o;
                                    },
                                    set indeterminate(e) {
                                        n(e);
                                    },
                                    focus: function () {
                                        r.current && r.current.focus();
                                    },
                                };
                            },
                            [r, t, o, n]
                        );
                    })(e, O, F, A, T),
                        i.useEffect(
                            function () {
                                return A(F);
                            },
                            [A, F]
                        );
                    var V = e.onRenderLabel || L,
                        W = F ? 'mixed' : void 0,
                        K = (0, r.pi)(
                            (0, r.pi)(
                                {className: B.input, type: 'checkbox'},
                                c
                            ),
                            {
                                checked: !!O,
                                disabled: o,
                                required: n,
                                name: m,
                                id: M,
                                title: _,
                                onChange: H,
                                'aria-disabled': o,
                                'aria-label': h,
                                'aria-labelledby': f,
                                'aria-describedby': v,
                                'aria-posinset': b,
                                'aria-setsize': g,
                                'aria-checked': W,
                            }
                        );
                    return i.createElement(
                        'div',
                        {className: B.root, title: _, ref: D},
                        i.createElement(
                            'input',
                            (0, r.pi)({}, K, {
                                ref: T,
                                title: _,
                                'data-ktp-execute-target': !0,
                            })
                        ),
                        i.createElement(
                            'label',
                            {className: B.label, htmlFor: M},
                            i.createElement(
                                'div',
                                {className: B.checkbox, 'data-ktp-target': !0},
                                i.createElement(
                                    u.J,
                                    (0, r.pi)({iconName: 'CheckMark'}, x, {
                                        className: B.checkmark,
                                    })
                                )
                            ),
                            V(e, L)
                        )
                    );
                });
            m.displayName = 'CheckboxBase';
            var h = o(85446),
                f = o(98289),
                v = {
                    root: 'ms-Checkbox',
                    label: 'ms-Checkbox-label',
                    checkbox: 'ms-Checkbox-checkbox',
                    checkmark: 'ms-Checkbox-checkmark',
                    text: 'ms-Checkbox-text',
                },
                b = '20px',
                g = '200ms',
                _ = 'cubic-bezier(.4, 0, .23, 1)',
                x = (0, n.z)(
                    m,
                    function (e) {
                        var t,
                            o,
                            n,
                            i,
                            s,
                            a,
                            l,
                            c,
                            d,
                            u,
                            p,
                            m,
                            x,
                            y,
                            C,
                            I,
                            k,
                            S,
                            M = e.className,
                            w = e.theme,
                            D = e.reversed,
                            T = e.checked,
                            P = e.disabled,
                            O = e.isUsingCustomLabelRender,
                            E = e.indeterminate,
                            N = w.semanticColors,
                            F = w.effects,
                            R = w.palette,
                            B = w.fonts,
                            H = (0, h.Cn)(v, w),
                            L = N.inputForegroundChecked,
                            A = R.neutralSecondary,
                            V = R.neutralPrimary,
                            W = N.inputBackgroundChecked,
                            K = N.inputBackgroundChecked,
                            q = N.disabledBodySubtext,
                            z = N.inputBorderHovered,
                            J = N.inputBackgroundCheckedHovered,
                            G = N.inputBackgroundChecked,
                            U = N.inputBackgroundCheckedHovered,
                            Z = N.inputBackgroundCheckedHovered,
                            $ = N.inputTextHovered,
                            j = N.disabledBodySubtext,
                            Y = N.bodyText,
                            X = N.disabledText,
                            Q = [
                                ((t = {
                                    content: '""',
                                    borderRadius: F.roundedCorner2,
                                    position: 'absolute',
                                    width: 10,
                                    height: 10,
                                    top: 4,
                                    left: 4,
                                    boxSizing: 'border-box',
                                    borderWidth: 5,
                                    borderStyle: 'solid',
                                    borderColor: P ? q : W,
                                    transitionProperty:
                                        'border-width, border, border-color',
                                    transitionDuration: g,
                                    transitionTimingFunction: _,
                                }),
                                (t[h.qJ] = {borderColor: 'WindowText'}),
                                t),
                            ];
                        return {
                            root: [
                                H.root,
                                {position: 'relative', display: 'flex'},
                                D && 'reversed',
                                T && 'is-checked',
                                !P && 'is-enabled',
                                P && 'is-disabled',
                                !P && [
                                    !T &&
                                        ((o = {}),
                                        (o[':hover .'.concat(H.checkbox)] =
                                            ((n = {borderColor: z}),
                                            (n[h.qJ] = {
                                                borderColor: 'Highlight',
                                            }),
                                            n)),
                                        (o[':focus .'.concat(H.checkbox)] = {
                                            borderColor: z,
                                        }),
                                        (o[':hover .'.concat(H.checkmark)] =
                                            ((i = {color: A, opacity: '1'}),
                                            (i[h.qJ] = {color: 'Highlight'}),
                                            i)),
                                        o),
                                    T &&
                                        !E &&
                                        ((s = {}),
                                        (s[':hover .'.concat(H.checkbox)] = {
                                            background: U,
                                            borderColor: Z,
                                        }),
                                        (s[':focus .'.concat(H.checkbox)] = {
                                            background: U,
                                            borderColor: Z,
                                        }),
                                        (s[h.qJ] =
                                            ((a = {}),
                                            (a[':hover .'.concat(H.checkbox)] =
                                                {
                                                    background: 'Highlight',
                                                    borderColor: 'Highlight',
                                                }),
                                            (a[':focus .'.concat(H.checkbox)] =
                                                {background: 'Highlight'}),
                                            (a[
                                                ':focus:hover .'.concat(
                                                    H.checkbox
                                                )
                                            ] = {background: 'Highlight'}),
                                            (a[
                                                ':focus:hover .'.concat(
                                                    H.checkmark
                                                )
                                            ] = {color: 'Window'}),
                                            (a[':hover .'.concat(H.checkmark)] =
                                                {color: 'Window'}),
                                            a)),
                                        s),
                                    E &&
                                        ((l = {}),
                                        (l[
                                            ':hover .'
                                                .concat(
                                                    H.checkbox,
                                                    ', :hover .'
                                                )
                                                .concat(H.checkbox, ':after')
                                        ] =
                                            ((c = {borderColor: J}),
                                            (c[h.qJ] = {
                                                borderColor: 'WindowText',
                                            }),
                                            c)),
                                        (l[':focus .'.concat(H.checkbox)] = {
                                            borderColor: J,
                                        }),
                                        (l[':hover .'.concat(H.checkmark)] = {
                                            opacity: '0',
                                        }),
                                        l),
                                    ((d = {}),
                                    (d[
                                        ':hover .'
                                            .concat(H.text, ', :focus .')
                                            .concat(H.text)
                                    ] =
                                        ((u = {color: $}),
                                        (u[h.qJ] = {
                                            color: P
                                                ? 'GrayText'
                                                : 'WindowText',
                                        }),
                                        u)),
                                    d),
                                ],
                                M,
                            ],
                            input:
                                ((p = {
                                    position: 'absolute',
                                    background: 'none',
                                    opacity: 0,
                                }),
                                (p[
                                    '.'.concat(f.G$, ' &:focus + label::before')
                                ] =
                                    ((m = {
                                        outline:
                                            '1px solid ' +
                                            w.palette.neutralSecondary,
                                        outlineOffset: '2px',
                                    }),
                                    (m[h.qJ] = {
                                        outline: '1px solid WindowText',
                                    }),
                                    m)),
                                p),
                            label: [
                                H.label,
                                w.fonts.medium,
                                {
                                    display: 'flex',
                                    alignItems: O ? 'center' : 'flex-start',
                                    cursor: P ? 'default' : 'pointer',
                                    position: 'relative',
                                    userSelect: 'none',
                                },
                                D && {
                                    flexDirection: 'row-reverse',
                                    justifyContent: 'flex-end',
                                },
                                {
                                    '&::before': {
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        top: 0,
                                        bottom: 0,
                                        content: '""',
                                        pointerEvents: 'none',
                                    },
                                },
                            ],
                            checkbox: [
                                H.checkbox,
                                ((x = {
                                    position: 'relative',
                                    display: 'flex',
                                    flexShrink: 0,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: b,
                                    width: b,
                                    border: '1px solid '.concat(V),
                                    borderRadius: F.roundedCorner2,
                                    boxSizing: 'border-box',
                                    transitionProperty:
                                        'background, border, border-color',
                                    transitionDuration: g,
                                    transitionTimingFunction: _,
                                    overflow: 'hidden',
                                    ':after': E ? Q : null,
                                }),
                                (x[h.qJ] = (0, r.pi)(
                                    {borderColor: 'WindowText'},
                                    (0, h.xM)()
                                )),
                                x),
                                E && {borderColor: W},
                                D ? {marginLeft: 4} : {marginRight: 4},
                                !P &&
                                    !E &&
                                    T &&
                                    ((y = {background: G, borderColor: K}),
                                    (y[h.qJ] = {
                                        background: 'Highlight',
                                        borderColor: 'Highlight',
                                    }),
                                    y),
                                P &&
                                    ((C = {borderColor: q}),
                                    (C[h.qJ] = {borderColor: 'GrayText'}),
                                    C),
                                T &&
                                    P &&
                                    ((I = {background: j, borderColor: q}),
                                    (I[h.qJ] = {background: 'Window'}),
                                    I),
                            ],
                            checkmark: [
                                H.checkmark,
                                ((k = {opacity: T && !E ? '1' : '0', color: L}),
                                (k[h.qJ] = (0, r.pi)(
                                    {color: P ? 'GrayText' : 'Window'},
                                    (0, h.xM)()
                                )),
                                k),
                            ],
                            text: [
                                H.text,
                                ((S = {
                                    color: P ? X : Y,
                                    fontSize: B.medium.fontSize,
                                    lineHeight: '20px',
                                }),
                                (S[h.qJ] = (0, r.pi)(
                                    {color: P ? 'GrayText' : 'WindowText'},
                                    (0, h.xM)()
                                )),
                                S),
                                D ? {marginRight: 4} : {marginLeft: 4},
                            ],
                        };
                    },
                    void 0,
                    {scope: 'Checkbox'}
                );
        },
        70740: (e, t, o) => {
            o.d(t, {C: () => Q});
            var n,
                r,
                i,
                s,
                a = o(96583),
                l = o(65812),
                c = o(90066),
                d = o(90279),
                u = o(4061),
                p = o(57957),
                m = o(93484),
                h = o(2089),
                f = o(99976),
                v = o(28642),
                b = o(56357),
                g = o(12321),
                _ = o(96208),
                x = o(33010),
                y = o(60702),
                C = o(25057),
                I = o(83510),
                k = o(48782),
                S = o(17948),
                M = o(41695),
                w = o(36133),
                D = o(53222),
                T = o(95599),
                P = o(85446),
                O = o(25607),
                E = (0, O.NF)(function (e) {
                    var t,
                        o = e.semanticColors;
                    return {
                        backgroundColor: o.disabledBackground,
                        color: o.disabledText,
                        cursor: 'default',
                        selectors:
                            ((t = {
                                ':after': {borderColor: o.disabledBackground},
                            }),
                            (t[P.qJ] = {
                                color: 'GrayText',
                                selectors: {
                                    ':after': {borderColor: 'GrayText'},
                                },
                            }),
                            t),
                    };
                }),
                N = {
                    selectors:
                        ((n = {}),
                        (n[P.qJ] = (0, a.pi)(
                            {
                                backgroundColor: 'Highlight',
                                borderColor: 'Highlight',
                                color: 'HighlightText',
                            },
                            (0, P.xM)()
                        )),
                        n),
                },
                F = {
                    selectors:
                        ((r = {}),
                        (r[P.qJ] = (0, a.pi)(
                            {color: 'WindowText', backgroundColor: 'Window'},
                            (0, P.xM)()
                        )),
                        r),
                },
                R = (0, O.NF)(function (e, t, o, n, r, i) {
                    var s,
                        l = e.palette,
                        c = e.semanticColors,
                        d = {
                            textHoveredColor: c.menuItemTextHovered,
                            textSelectedColor: l.neutralDark,
                            textDisabledColor: c.disabledText,
                            backgroundHoveredColor: c.menuItemBackgroundHovered,
                            backgroundPressedColor: c.menuItemBackgroundPressed,
                        },
                        u = {
                            root: [
                                e.fonts.medium,
                                {
                                    backgroundColor: n
                                        ? d.backgroundHoveredColor
                                        : 'transparent',
                                    boxSizing: 'border-box',
                                    cursor: 'pointer',
                                    display: r ? 'none' : 'block',
                                    width: '100%',
                                    height: 'auto',
                                    minHeight: 36,
                                    lineHeight: '20px',
                                    padding: '0 8px',
                                    position: 'relative',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderColor: 'transparent',
                                    borderRadius: 0,
                                    wordWrap: 'break-word',
                                    overflowWrap: 'break-word',
                                    textAlign: 'left',
                                    selectors: (0, a.pi)(
                                        (0, a.pi)(
                                            ((s = {}),
                                            (s[P.qJ] = {
                                                border: 'none',
                                                borderColor: 'Background',
                                            }),
                                            s),
                                            !r && {
                                                '&.ms-Checkbox': {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                },
                                            }
                                        ),
                                        {
                                            '&.ms-Button--command:hover:active':
                                                {
                                                    backgroundColor:
                                                        d.backgroundPressedColor,
                                                },
                                            '.ms-Checkbox-label': {
                                                width: '100%',
                                            },
                                        }
                                    ),
                                },
                                i
                                    ? [
                                          {
                                              backgroundColor: 'transparent',
                                              color: d.textSelectedColor,
                                              selectors: {
                                                  ':hover': [
                                                      {
                                                          backgroundColor:
                                                              d.backgroundHoveredColor,
                                                      },
                                                      N,
                                                  ],
                                              },
                                          },
                                          (0, P.GL)(e, {
                                              inset: -1,
                                              isFocusedOnly: !1,
                                          }),
                                          N,
                                      ]
                                    : [],
                            ],
                            rootHovered: {
                                backgroundColor: d.backgroundHoveredColor,
                                color: d.textHoveredColor,
                            },
                            rootFocused: {
                                backgroundColor: d.backgroundHoveredColor,
                            },
                            rootDisabled: {
                                color: d.textDisabledColor,
                                cursor: 'default',
                            },
                            optionText: {
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                minWidth: '0px',
                                maxWidth: '100%',
                                wordWrap: 'break-word',
                                overflowWrap: 'break-word',
                                display: 'inline-block',
                            },
                            optionTextWrapper: {
                                maxWidth: '100%',
                                display: 'flex',
                                alignItems: 'center',
                            },
                        };
                    return (0, P.E$)(u, t, o);
                }),
                B = (0, O.NF)(function (e, t) {
                    var o,
                        n,
                        r = e.semanticColors,
                        i = e.fonts,
                        s = {
                            buttonTextColor: r.bodySubtext,
                            buttonTextHoveredCheckedColor: r.buttonTextChecked,
                            buttonBackgroundHoveredColor:
                                r.listItemBackgroundHovered,
                            buttonBackgroundCheckedColor:
                                r.listItemBackgroundChecked,
                            buttonBackgroundCheckedHoveredColor:
                                r.listItemBackgroundCheckedHovered,
                        },
                        l = {
                            selectors:
                                ((o = {}),
                                (o[P.qJ] = (0, a.pi)(
                                    {
                                        backgroundColor: 'Highlight',
                                        borderColor: 'Highlight',
                                        color: 'HighlightText',
                                    },
                                    (0, P.xM)()
                                )),
                                o),
                        },
                        c = {
                            root: {
                                color: s.buttonTextColor,
                                fontSize: i.small.fontSize,
                                position: 'absolute',
                                top: 0,
                                height: '100%',
                                lineHeight: 30,
                                width: 32,
                                textAlign: 'center',
                                cursor: 'default',
                                selectors:
                                    ((n = {}),
                                    (n[P.qJ] = (0, a.pi)(
                                        {
                                            backgroundColor: 'ButtonFace',
                                            borderColor: 'ButtonText',
                                            color: 'ButtonText',
                                        },
                                        (0, P.xM)()
                                    )),
                                    n),
                            },
                            icon: {fontSize: i.small.fontSize},
                            rootHovered: [
                                {
                                    backgroundColor:
                                        s.buttonBackgroundHoveredColor,
                                    color: s.buttonTextHoveredCheckedColor,
                                    cursor: 'pointer',
                                },
                                l,
                            ],
                            rootPressed: [
                                {
                                    backgroundColor:
                                        s.buttonBackgroundCheckedColor,
                                    color: s.buttonTextHoveredCheckedColor,
                                },
                                l,
                            ],
                            rootChecked: [
                                {
                                    backgroundColor:
                                        s.buttonBackgroundCheckedColor,
                                    color: s.buttonTextHoveredCheckedColor,
                                },
                                l,
                            ],
                            rootCheckedHovered: [
                                {
                                    backgroundColor:
                                        s.buttonBackgroundCheckedHoveredColor,
                                    color: s.buttonTextHoveredCheckedColor,
                                },
                                l,
                            ],
                            rootDisabled: [E(e), {position: 'absolute'}],
                        };
                    return (0, P.E$)(c, t);
                }),
                H = (0, O.NF)(function (e, t, o) {
                    var n,
                        r,
                        i,
                        s,
                        l,
                        c,
                        d = e.semanticColors,
                        u = e.fonts,
                        p = e.effects,
                        m = {
                            textColor: d.inputText,
                            borderColor: d.inputBorder,
                            borderHoveredColor: d.inputBorderHovered,
                            borderPressedColor: d.inputFocusBorderAlt,
                            borderFocusedColor: d.inputFocusBorderAlt,
                            backgroundColor: d.inputBackground,
                            erroredColor: d.errorText,
                        },
                        h = {
                            headerTextColor: d.menuHeader,
                            dividerBorderColor: d.bodyDivider,
                        },
                        f = {
                            selectors:
                                ((n = {}), (n[P.qJ] = {color: 'GrayText'}), n),
                        },
                        v = [{color: d.inputPlaceholderText}, f],
                        b = [{color: d.inputTextHovered}, f],
                        g = [{color: d.disabledText}, f],
                        _ = (0, a.pi)(
                            (0, a.pi)(
                                {
                                    color: 'HighlightText',
                                    backgroundColor: 'Window',
                                },
                                (0, P.xM)()
                            ),
                            {selectors: {':after': {borderColor: 'Highlight'}}}
                        ),
                        x = (0, P.$Y)(
                            m.borderPressedColor,
                            p.roundedCorner2,
                            'border',
                            0
                        ),
                        y = {
                            container: {},
                            label: {},
                            labelDisabled: {},
                            root: [
                                e.fonts.medium,
                                {
                                    boxShadow: 'none',
                                    marginLeft: '0',
                                    paddingRight: 32,
                                    paddingLeft: 9,
                                    color: m.textColor,
                                    position: 'relative',
                                    outline: '0',
                                    userSelect: 'none',
                                    backgroundColor: m.backgroundColor,
                                    cursor: 'text',
                                    display: 'block',
                                    height: 32,
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    boxSizing: 'border-box',
                                    selectors: {
                                        '.ms-Label': {
                                            display: 'inline-block',
                                            marginBottom: '8px',
                                        },
                                        '&.is-open': {
                                            selectors:
                                                ((r = {}), (r[P.qJ] = _), r),
                                        },
                                        ':after': {
                                            pointerEvents: 'none',
                                            content: "''",
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            bottom: 0,
                                            right: 0,
                                            borderWidth: '1px',
                                            borderStyle: 'solid',
                                            borderColor: m.borderColor,
                                            borderRadius: p.roundedCorner2,
                                        },
                                    },
                                },
                            ],
                            rootHovered: {
                                selectors:
                                    ((i = {
                                        ':after': {
                                            borderColor: m.borderHoveredColor,
                                        },
                                        '.ms-ComboBox-Input': [
                                            {color: d.inputTextHovered},
                                            (0, P.Sv)(b),
                                            F,
                                        ],
                                    }),
                                    (i[P.qJ] = (0, a.pi)(
                                        (0, a.pi)(
                                            {
                                                color: 'HighlightText',
                                                backgroundColor: 'Window',
                                            },
                                            (0, P.xM)()
                                        ),
                                        {
                                            selectors: {
                                                ':after': {
                                                    borderColor: 'Highlight',
                                                },
                                            },
                                        }
                                    )),
                                    i),
                            },
                            rootPressed: [
                                {
                                    position: 'relative',
                                    selectors: ((s = {}), (s[P.qJ] = _), s),
                                },
                            ],
                            rootFocused: [
                                {
                                    selectors:
                                        ((l = {
                                            '.ms-ComboBox-Input': [
                                                {color: d.inputTextHovered},
                                                F,
                                            ],
                                        }),
                                        (l[P.qJ] = _),
                                        l),
                                },
                                x,
                            ],
                            rootDisabled: E(e),
                            rootError: {
                                selectors: {
                                    ':after': {borderColor: m.erroredColor},
                                    ':hover:after': {
                                        borderColor: d.inputBorderHovered,
                                    },
                                },
                            },
                            rootDisallowFreeForm: {},
                            input: [
                                (0, P.Sv)(v),
                                {
                                    backgroundColor: m.backgroundColor,
                                    color: m.textColor,
                                    boxSizing: 'border-box',
                                    width: '100%',
                                    height: '100%',
                                    borderStyle: 'none',
                                    outline: 'none',
                                    font: 'inherit',
                                    textOverflow: 'ellipsis',
                                    padding: '0',
                                    selectors: {
                                        '::-ms-clear': {display: 'none'},
                                    },
                                },
                                F,
                            ],
                            inputDisabled: [E(e), (0, P.Sv)(g)],
                            errorMessage: [
                                e.fonts.small,
                                {color: m.erroredColor, marginTop: '5px'},
                            ],
                            callout: {boxShadow: p.elevation8},
                            optionsContainerWrapper: {width: o},
                            optionsContainer: {display: 'block'},
                            screenReaderText: P.ul,
                            header: [
                                u.medium,
                                {
                                    fontWeight: P.lq.semibold,
                                    color: h.headerTextColor,
                                    backgroundColor: 'none',
                                    borderStyle: 'none',
                                    height: 36,
                                    lineHeight: 36,
                                    cursor: 'default',
                                    padding: '0 8px',
                                    userSelect: 'none',
                                    textAlign: 'left',
                                    selectors:
                                        ((c = {}),
                                        (c[P.qJ] = (0, a.pi)(
                                            {color: 'GrayText'},
                                            (0, P.xM)()
                                        )),
                                        c),
                                },
                            ],
                            divider: {
                                height: 1,
                                backgroundColor: h.dividerBorderColor,
                            },
                        };
                    return (0, P.E$)(y, t);
                }),
                L = (0, O.NF)(function (e, t, o, n, r, i, s, a) {
                    return {
                        container: (0, P.y0)(
                            'ms-ComboBox-container',
                            t,
                            e.container
                        ),
                        label: (0, P.y0)(e.label, n && e.labelDisabled),
                        root: (0, P.y0)(
                            'ms-ComboBox',
                            a ? e.rootError : o && 'is-open',
                            r && 'is-required',
                            e.root,
                            !s && e.rootDisallowFreeForm,
                            a && !i ? e.rootError : !n && i && e.rootFocused,
                            !n && {
                                selectors: {
                                    ':hover': a
                                        ? e.rootError
                                        : !o && !i && e.rootHovered,
                                    ':active': a ? e.rootError : e.rootPressed,
                                    ':focus': a ? e.rootError : e.rootFocused,
                                },
                            },
                            n && ['is-disabled', e.rootDisabled]
                        ),
                        input: (0, P.y0)(
                            'ms-ComboBox-Input',
                            e.input,
                            n && e.inputDisabled
                        ),
                        errorMessage: (0, P.y0)(e.errorMessage),
                        callout: (0, P.y0)('ms-ComboBox-callout', e.callout),
                        optionsContainerWrapper: (0, P.y0)(
                            'ms-ComboBox-optionsContainerWrapper',
                            e.optionsContainerWrapper
                        ),
                        optionsContainer: (0, P.y0)(
                            'ms-ComboBox-optionsContainer',
                            e.optionsContainer
                        ),
                        header: (0, P.y0)('ms-ComboBox-header', e.header),
                        divider: (0, P.y0)('ms-ComboBox-divider', e.divider),
                        screenReaderText: (0, P.y0)(e.screenReaderText),
                    };
                }),
                A = (0, O.NF)(function (e) {
                    return {
                        optionText: (0, P.y0)(
                            'ms-ComboBox-optionText',
                            e.optionText
                        ),
                        root: (0, P.y0)('ms-ComboBox-option', e.root, {
                            selectors: {
                                ':hover': e.rootHovered,
                                ':focus': e.rootFocused,
                                ':active': e.rootPressed,
                            },
                        }),
                        optionTextWrapper: (0, P.y0)(e.optionTextWrapper),
                    };
                }),
                V = o(11839),
                W = o(38582),
                K = o(42169),
                q = o(83016),
                z = o(14879),
                J = o(267),
                G = o(32494),
                U = o(63442),
                Z = o(81262);
            !(function (e) {
                (e[(e.backward = -1)] = 'backward'),
                    (e[(e.none = 0)] = 'none'),
                    (e[(e.forward = 1)] = 'forward');
            })(i || (i = {})),
                (function (e) {
                    (e[(e.clearAll = -2)] = 'clearAll'),
                        (e[(e.default = -1)] = 'default');
                })(s || (s = {}));
            var $ = 250,
                j = l.memo(
                    function (e) {
                        return (0, e.render)();
                    },
                    function (e, t) {
                        e.render;
                        var o = (0, a._T)(e, ['render']),
                            n = (t.render, (0, a._T)(t, ['render']));
                        return (0, d.Vv)(o, n);
                    }
                ),
                Y = 'ComboBox',
                X = {
                    options: [],
                    allowFreeform: !1,
                    autoComplete: 'on',
                    buttonIconProps: {iconName: 'ChevronDown'},
                };
            var Q = l.forwardRef(function (e, t) {
                var o = (0, u.j)(X, e),
                    n = (o.ref, (0, a._T)(o, ['ref'])),
                    r = l.useRef(null),
                    i = (0, J.r)(r, t),
                    s = (function (e) {
                        var t = e.options,
                            o = e.defaultSelectedKey,
                            n = e.selectedKey,
                            r = l.useState(function () {
                                return oe(
                                    t,
                                    (function (e, t) {
                                        var o = ne(e);
                                        return o.length ? o : ne(t);
                                    })(o, n)
                                );
                            }),
                            i = r[0],
                            s = r[1],
                            a = l.useState(t),
                            c = a[0],
                            d = a[1],
                            u = l.useState(),
                            p = u[0],
                            m = u[1];
                        return (
                            l.useEffect(
                                function () {
                                    if (void 0 !== n) {
                                        var e = ne(n),
                                            o = oe(t, e);
                                        s(o);
                                    }
                                    d(t);
                                },
                                [t, n]
                            ),
                            l.useEffect(
                                function () {
                                    null === n && m(void 0);
                                },
                                [n]
                            ),
                            [i, s, c, d, p, m]
                        );
                    })(n),
                    c = s[0],
                    d = s[1],
                    p = s[2],
                    m = s[3],
                    h = s[4],
                    f = s[5];
                return l.createElement(
                    te,
                    (0, a.pi)({}, n, {
                        hoisted: {
                            mergedRootRef: i,
                            rootRef: r,
                            selectedIndices: c,
                            setSelectedIndices: d,
                            currentOptions: p,
                            setCurrentOptions: m,
                            suggestedDisplayValue: h,
                            setSuggestedDisplayValue: f,
                        },
                    })
                );
            });
            function ee(e, t) {
                for (var o = (0, G.G)(e), n = 0; n < o.length; n++) {
                    var r = o[n];
                    if (t(r)) return r;
                    var i = ee(r, t);
                    if (i) return i;
                }
                return null;
            }
            Q.displayName = Y;
            var te = (function (e) {
                function t(t) {
                    var o = e.call(this, t) || this;
                    return (
                        (o._autofill = l.createRef()),
                        (o._comboBoxWrapper = l.createRef()),
                        (o._comboBoxMenu = l.createRef()),
                        (o._selectedElement = l.createRef()),
                        (o._overrideScrollDismiss = !1),
                        (o.focus = function (e, t) {
                            o.props.disabled ||
                                (o._autofill.current &&
                                    (t
                                        ? (0, p.um)(o._autofill.current)
                                        : o._autofill.current.focus(),
                                    e && o.setState({isOpen: !0})),
                                o._hasFocus() ||
                                    o.setState({focusState: 'focused'}));
                        }),
                        (o.dismissMenu = function () {
                            o.state.isOpen && o.setState({isOpen: !1});
                        }),
                        (o._onUpdateValueInAutofillWillReceiveProps =
                            function () {
                                var e = o._autofill.current;
                                return e
                                    ? null === e.value || void 0 === e.value
                                        ? null
                                        : re(o._currentVisibleValue)
                                    : null;
                            }),
                        (o._renderComboBoxWrapper = function (e, t) {
                            var n = o.props,
                                r = n.label,
                                i = n.disabled,
                                s = n.ariaLabel,
                                d = n.ariaDescribedBy,
                                u =
                                    void 0 === d
                                        ? o.props['aria-describedby']
                                        : d,
                                p = n.required,
                                h = n.errorMessage,
                                f = n.buttonIconProps,
                                v = n.isButtonAriaHidden,
                                b = n.title,
                                g = n.placeholder,
                                _ = n.tabIndex,
                                x = n.autofill,
                                y = n.iconButtonProps,
                                C = n.hoisted.suggestedDisplayValue,
                                I = o.state,
                                k = I.ariaActiveDescendantValue,
                                S = I.isOpen,
                                M =
                                    o._hasFocus() && o.props.multiSelect && e
                                        ? e
                                        : g,
                                w = {
                                    'aria-labelledby':
                                        [
                                            o.props['aria-labelledby'],
                                            r && o._id + '-label',
                                        ]
                                            .join(' ')
                                            .trim() || void 0,
                                    'aria-label': s && !r ? s : void 0,
                                };
                            return l.createElement(
                                'div',
                                {
                                    'data-ktp-target': !0,
                                    ref: o._comboBoxWrapper,
                                    id: o._id + 'wrapper',
                                    className: o._classNames.root,
                                    'aria-owns': S ? o._id + '-list' : void 0,
                                },
                                l.createElement(
                                    c.G,
                                    (0, a.pi)(
                                        {
                                            'data-ktp-execute-target': !0,
                                            'data-is-interactable': !i,
                                            componentRef: o._autofill,
                                            id: o._id + '-input',
                                            className: o._classNames.input,
                                            type: 'text',
                                            onFocus: o._onFocus,
                                            onBlur: o._onBlur,
                                            onKeyDown: o._onInputKeyDown,
                                            onKeyUp: o._onInputKeyUp,
                                            onClick: o._onAutofillClick,
                                            onTouchStart: o._onTouchStart,
                                            onInputValueChange:
                                                o._onInputChange,
                                            'aria-expanded': S,
                                            'aria-autocomplete':
                                                o._getAriaAutoCompleteValue(),
                                            role: 'combobox',
                                            readOnly: i,
                                        },
                                        w,
                                        {
                                            'aria-describedby':
                                                void 0 !== h
                                                    ? (0, m.I)(u, t)
                                                    : u,
                                            'aria-activedescendant': k,
                                            'aria-required': p,
                                            'aria-disabled': i,
                                            'aria-controls': S
                                                ? o._id + '-list'
                                                : void 0,
                                            spellCheck: !1,
                                            defaultVisibleValue:
                                                o._currentVisibleValue,
                                            suggestedDisplayValue: C,
                                            updateValueInWillReceiveProps:
                                                o._onUpdateValueInAutofillWillReceiveProps,
                                            shouldSelectFullInputValueInComponentDidUpdate:
                                                o._onShouldSelectFullInputValueInAutofillComponentDidUpdate,
                                            title: b,
                                            preventValueSelection:
                                                !o._hasFocus(),
                                            placeholder: M,
                                            tabIndex: i ? -1 : _,
                                        },
                                        x
                                    )
                                ),
                                l.createElement(
                                    q.h,
                                    (0, a.pi)(
                                        {
                                            className:
                                                'ms-ComboBox-CaretDown-button',
                                            styles: o._getCaretButtonStyles(),
                                            role: v ? 'presentation' : void 0,
                                            'aria-hidden': v,
                                        },
                                        v ? void 0 : w,
                                        {
                                            'data-is-focusable': !1,
                                            tabIndex: -1,
                                            onClick: o._onComboBoxClick,
                                            onBlur: o._onBlur,
                                            iconProps: f,
                                            disabled: i,
                                            checked: S,
                                        },
                                        y
                                    )
                                )
                            );
                        }),
                        (o._onShouldSelectFullInputValueInAutofillComponentDidUpdate =
                            function () {
                                return (
                                    o._currentVisibleValue ===
                                    o.props.hoisted.suggestedDisplayValue
                                );
                            }),
                        (o._getVisibleValue = function () {
                            var e = o.props,
                                t = e.text,
                                n = e.allowFreeform,
                                r = e.allowFreeInput,
                                i = e.autoComplete,
                                s = e.hoisted,
                                a = s.suggestedDisplayValue,
                                l = s.selectedIndices,
                                c = s.currentOptions,
                                d = o.state,
                                u = d.currentPendingValueValidIndex,
                                p = d.currentPendingValue,
                                m = d.isOpen,
                                h = ie(c, u);
                            if ((!m || !h) && (t || '' === t) && null == p)
                                return t;
                            if (o.props.multiSelect) {
                                if (o._hasFocus()) {
                                    var f = -1;
                                    return (
                                        'on' === i && h && (f = u),
                                        o._getPendingString(p, c, f)
                                    );
                                }
                                return o._getMultiselectDisplayString(l, c, a);
                            }
                            return (
                                (f = o._getFirstSelectedIndex()),
                                n || r
                                    ? ('on' === i && h && (f = u),
                                      o._getPendingString(p, c, f))
                                    : h && 'on' === i
                                      ? ((f = u), re(p))
                                      : !o.state.isOpen && p
                                        ? ie(c, f)
                                            ? p
                                            : re(a)
                                        : ie(c, f)
                                          ? le(c[f])
                                          : re(a)
                            );
                        }),
                        (o._onInputChange = function (e) {
                            o.props.disabled
                                ? o._handleInputWhenDisabled(null)
                                : (o.props.onInputValueChange &&
                                      o.props.onInputValueChange(e),
                                  o.props.allowFreeform ||
                                  o.props.allowFreeInput
                                      ? o._processInputChangeWithFreeform(e)
                                      : o._processInputChangeWithoutFreeform(
                                            e
                                        ));
                        }),
                        (o._onFocus = function () {
                            var e, t;
                            null ===
                                (t =
                                    null === (e = o._autofill.current) ||
                                    void 0 === e
                                        ? void 0
                                        : e.inputElement) ||
                                void 0 === t ||
                                t.select(),
                                o._hasFocus() ||
                                    o.setState({focusState: 'focusing'});
                        }),
                        (o._onResolveOptions = function () {
                            if (o.props.onResolveOptions) {
                                var e = o.props.onResolveOptions(
                                    (0, a.ev)(
                                        [],
                                        o.props.hoisted.currentOptions,
                                        !0
                                    )
                                );
                                Array.isArray(e)
                                    ? o.props.hoisted.setCurrentOptions(e)
                                    : e &&
                                      e.then &&
                                      ((o._currentPromise = e),
                                      e.then(function (t) {
                                          e === o._currentPromise &&
                                              o.props.hoisted.setCurrentOptions(
                                                  t
                                              );
                                      }));
                            }
                        }),
                        (o._onBlur = function (e) {
                            var t,
                                n,
                                r = (0, Z.NA)(o.context),
                                i = e.relatedTarget;
                            if (
                                (null === e.relatedTarget &&
                                    (i = null == r ? void 0 : r.activeElement),
                                i)
                            ) {
                                var s =
                                        null ===
                                            (t =
                                                o.props.hoisted.rootRef
                                                    .current) || void 0 === t
                                            ? void 0
                                            : t.contains(i),
                                    a =
                                        null ===
                                            (n = o._comboBoxMenu.current) ||
                                        void 0 === n
                                            ? void 0
                                            : n.contains(i),
                                    l =
                                        o._comboBoxMenu.current &&
                                        (0, h.X)(
                                            o._comboBoxMenu.current,
                                            function (e) {
                                                return e === i;
                                            },
                                            r
                                        );
                                if (s || a || l)
                                    return (
                                        l &&
                                            o._hasFocus() &&
                                            (!o.props.multiSelect ||
                                                o.props.allowFreeform) &&
                                            o._submitPendingValue(e),
                                        e.preventDefault(),
                                        void e.stopPropagation()
                                    );
                            }
                            o._hasFocus() &&
                                (o.setState({focusState: 'none'}),
                                (o.props.multiSelect &&
                                    !o.props.allowFreeform) ||
                                    o._submitPendingValue(e));
                        }),
                        (o._onRenderContainer = function (e, t) {
                            var n = e.onRenderList,
                                r = e.calloutProps,
                                i = e.dropdownWidth,
                                s = e.dropdownMaxWidth,
                                c = e.onRenderUpperContent,
                                d = void 0 === c ? o._onRenderUpperContent : c,
                                u = e.onRenderLowerContent,
                                p = void 0 === u ? o._onRenderLowerContent : u,
                                m = e.useComboBoxAsMenuWidth,
                                h = e.persistMenu,
                                v = e.shouldRestoreFocus,
                                b = void 0 === v || v,
                                g = o.state.isOpen,
                                _ = o._id,
                                x =
                                    m && o._comboBoxWrapper.current
                                        ? o._comboBoxWrapper.current
                                              .clientWidth + 2
                                        : void 0;
                            return l.createElement(
                                w.U,
                                (0, a.pi)(
                                    {
                                        isBeakVisible: !1,
                                        gapSpace: 0,
                                        doNotLayer: !1,
                                        directionalHint: D.b.bottomLeftEdge,
                                        directionalHintFixed: !1,
                                    },
                                    r,
                                    {
                                        onLayerMounted: o._onLayerMounted,
                                        className: (0, f.i)(
                                            o._classNames.callout,
                                            null == r ? void 0 : r.className
                                        ),
                                        target: o._comboBoxWrapper.current,
                                        onDismiss: o._onDismiss,
                                        onMouseDown: o._onCalloutMouseDown,
                                        onScroll: o._onScroll,
                                        setInitialFocus: !1,
                                        calloutWidth:
                                            m && o._comboBoxWrapper.current
                                                ? x && x
                                                : i,
                                        calloutMaxWidth: s || x,
                                        hidden: h ? !g : void 0,
                                        shouldRestoreFocus: b,
                                        preventDismissOnEvent: function (e) {
                                            return o._preventDismissOnScrollOrResize(
                                                e
                                            );
                                        },
                                    }
                                ),
                                d(o.props, o._onRenderUpperContent),
                                l.createElement(
                                    'div',
                                    {
                                        className:
                                            o._classNames
                                                .optionsContainerWrapper,
                                        ref: o._comboBoxMenu,
                                    },
                                    null == n
                                        ? void 0
                                        : n(
                                              (0, a.pi)((0, a.pi)({}, e), {
                                                  id: _,
                                              }),
                                              o._onRenderList
                                          )
                                ),
                                p(o.props, o._onRenderLowerContent)
                            );
                        }),
                        (o._onLayerMounted = function () {
                            o._onCalloutLayerMounted(),
                                o._async.setTimeout(function () {
                                    o._scrollIntoView();
                                }, 0),
                                o.props.calloutProps &&
                                    o.props.calloutProps.onLayerMounted &&
                                    o.props.calloutProps.onLayerMounted();
                        }),
                        (o._onRenderLabel = function (e) {
                            var t = e.props,
                                n = t.label,
                                r = t.disabled,
                                i = t.required;
                            return n
                                ? l.createElement(
                                      V._,
                                      {
                                          id: o._id + '-label',
                                          disabled: r,
                                          required: i,
                                          className: o._classNames.label,
                                      },
                                      n,
                                      e.multiselectAccessibleText &&
                                          l.createElement(
                                              'span',
                                              {
                                                  className:
                                                      o._classNames
                                                          .screenReaderText,
                                              },
                                              e.multiselectAccessibleText
                                          )
                                  )
                                : null;
                        }),
                        (o._onRenderList = function (e) {
                            var t = e.onRenderItem,
                                n = void 0 === t ? o._onRenderItem : t,
                                r = e.label,
                                i = e.ariaLabel,
                                s = e.multiSelect,
                                c = {items: []},
                                d = [],
                                u = function () {
                                    var e = c.id
                                        ? [
                                              l.createElement(
                                                  'div',
                                                  {
                                                      role: 'group',
                                                      key: c.id,
                                                      'aria-labelledby': c.id,
                                                  },
                                                  c.items
                                              ),
                                          ]
                                        : c.items;
                                    (d = (0, a.ev)(
                                        (0, a.ev)([], d, !0),
                                        e,
                                        !0
                                    )),
                                        (c = {items: []});
                                };
                            e.options.forEach(function (e, t) {
                                !(function (e, t) {
                                    switch (e.itemType) {
                                        case W.F.Header:
                                            c.items.length > 0 && u();
                                            var r = o._id + e.key;
                                            c.items.push(
                                                n(
                                                    (0, a.pi)(
                                                        (0, a.pi)({id: r}, e),
                                                        {index: t}
                                                    ),
                                                    o._onRenderItem
                                                )
                                            ),
                                                (c.id = r);
                                            break;
                                        case W.F.Divider:
                                            t > 0 &&
                                                c.items.push(
                                                    n(
                                                        (0, a.pi)(
                                                            (0, a.pi)({}, e),
                                                            {index: t}
                                                        ),
                                                        o._onRenderItem
                                                    )
                                                ),
                                                c.items.length > 0 && u();
                                            break;
                                        default:
                                            c.items.push(
                                                n(
                                                    (0, a.pi)(
                                                        (0, a.pi)({}, e),
                                                        {index: t}
                                                    ),
                                                    o._onRenderItem
                                                )
                                            );
                                    }
                                })(e, t);
                            }),
                                c.items.length > 0 && u();
                            var p = o._id;
                            return l.createElement(
                                'div',
                                {
                                    id: p + '-list',
                                    className: o._classNames.optionsContainer,
                                    'aria-labelledby': r && p + '-label',
                                    'aria-label': i && !r ? i : void 0,
                                    'aria-multiselectable': s ? 'true' : void 0,
                                    role: 'listbox',
                                },
                                d
                            );
                        }),
                        (o._onRenderItem = function (e) {
                            switch (e.itemType) {
                                case W.F.Divider:
                                    return o._renderSeparator(e);
                                case W.F.Header:
                                    return o._renderHeader(e);
                                default:
                                    return o._renderOption(e);
                            }
                        }),
                        (o._onRenderLowerContent = function () {
                            return null;
                        }),
                        (o._onRenderUpperContent = function () {
                            return null;
                        }),
                        (o._renderOption = function (e) {
                            var t,
                                n = o.props.onRenderOption,
                                r = void 0 === n ? o._onRenderOptionContent : n,
                                i =
                                    null !== (t = e.id) && void 0 !== t
                                        ? t
                                        : o._id + '-list' + e.index,
                                s = o._isOptionSelected(e.index),
                                c = o._isOptionChecked(e.index),
                                d = o._isOptionIndeterminate(e.index),
                                u = o._getCurrentOptionStyles(e),
                                p = A(o._getCurrentOptionStyles(e)),
                                m = e.title;
                            return l.createElement(j, {
                                key: e.key,
                                index: e.index,
                                disabled: e.disabled,
                                isSelected: s,
                                isChecked: c,
                                isIndeterminate: d,
                                text: e.text,
                                render: function () {
                                    return o.props.multiSelect
                                        ? l.createElement(T.X, {
                                              id: i,
                                              ariaLabel: e.ariaLabel,
                                              ariaLabelledBy: e.ariaLabel
                                                  ? void 0
                                                  : i + '-label',
                                              key: e.key,
                                              styles: u,
                                              className: 'ms-ComboBox-option',
                                              onChange: o._onItemClick(e),
                                              label: e.text,
                                              checked: c,
                                              indeterminate: d,
                                              title: m,
                                              disabled: e.disabled,
                                              onRenderLabel:
                                                  o._renderCheckboxLabel.bind(
                                                      o,
                                                      (0, a.pi)(
                                                          (0, a.pi)({}, e),
                                                          {id: i + '-label'}
                                                      )
                                                  ),
                                              inputProps: (0, a.pi)(
                                                  {
                                                      'aria-selected': c
                                                          ? 'true'
                                                          : 'false',
                                                      role: 'option',
                                                  },
                                                  {
                                                      'data-index': e.index,
                                                      'data-is-focusable': !0,
                                                  }
                                              ),
                                          })
                                        : l.createElement(
                                              z.M,
                                              {
                                                  id: i,
                                                  key: e.key,
                                                  'data-index': e.index,
                                                  styles: u,
                                                  checked: s,
                                                  className:
                                                      'ms-ComboBox-option',
                                                  onClick: o._onItemClick(e),
                                                  onMouseEnter:
                                                      o._onOptionMouseEnter.bind(
                                                          o,
                                                          e.index
                                                      ),
                                                  onMouseMove:
                                                      o._onOptionMouseMove.bind(
                                                          o,
                                                          e.index
                                                      ),
                                                  onMouseLeave:
                                                      o._onOptionMouseLeave,
                                                  role: 'option',
                                                  'aria-selected': s
                                                      ? 'true'
                                                      : 'false',
                                                  ariaLabel: e.ariaLabel,
                                                  disabled: e.disabled,
                                                  title: m,
                                              },
                                              l.createElement(
                                                  'span',
                                                  {
                                                      className:
                                                          p.optionTextWrapper,
                                                      ref: s
                                                          ? o._selectedElement
                                                          : void 0,
                                                  },
                                                  r(e, o._onRenderOptionContent)
                                              )
                                          );
                                },
                                data: e.data,
                            });
                        }),
                        (o._onCalloutMouseDown = function (e) {
                            e.preventDefault();
                        }),
                        (o._onScroll = function () {
                            var e;
                            o._isScrollIdle || void 0 === o._scrollIdleTimeoutId
                                ? (o._isScrollIdle = !1)
                                : (o._async.clearTimeout(
                                      o._scrollIdleTimeoutId
                                  ),
                                  (o._scrollIdleTimeoutId = void 0)),
                                (null === (e = o.props.calloutProps) ||
                                void 0 === e
                                    ? void 0
                                    : e.onScroll) &&
                                    o.props.calloutProps.onScroll(),
                                (o._scrollIdleTimeoutId = o._async.setTimeout(
                                    function () {
                                        o._isScrollIdle = !0;
                                    },
                                    $
                                ));
                        }),
                        (o._onRenderOptionContent = function (e) {
                            var t = A(o._getCurrentOptionStyles(e));
                            return l.createElement(
                                'span',
                                {className: t.optionText},
                                e.text
                            );
                        }),
                        (o._onRenderMultiselectOptionContent = function (e) {
                            var t = A(o._getCurrentOptionStyles(e));
                            return l.createElement(
                                'span',
                                {
                                    id: e.id,
                                    'aria-hidden': 'true',
                                    className: t.optionText,
                                },
                                e.text
                            );
                        }),
                        (o._onDismiss = function () {
                            var e = o.props.onMenuDismiss;
                            e && e(),
                                o.props.persistMenu &&
                                    o._onCalloutLayerMounted(),
                                o._setOpenStateAndFocusOnClose(!1, !1),
                                o._resetSelectedIndex();
                        }),
                        (o._onAfterClearPendingInfo = function () {
                            o._processingClearPendingInfo = !1;
                        }),
                        (o._onInputKeyDown = function (e) {
                            var t = o.props,
                                n = t.disabled,
                                r = t.allowFreeform,
                                a = t.allowFreeInput,
                                l = t.autoComplete,
                                c = t.hoisted.currentOptions,
                                d = o.state,
                                u = d.isOpen,
                                p = d.currentPendingValueValidIndexOnHover;
                            if (((o._lastKeyDownWasAltOrMeta = ce(e)), n))
                                o._handleInputWhenDisabled(e);
                            else {
                                var m = o._getPendingSelectedIndex(!1);
                                switch (e.which) {
                                    case v.m.enter:
                                        o._autofill.current &&
                                            o._autofill.current.inputElement &&
                                            o._autofill.current.inputElement.select(),
                                            o._submitPendingValue(e),
                                            o.props.multiSelect && u
                                                ? o.setState({
                                                      currentPendingValueValidIndex:
                                                          m,
                                                  })
                                                : (u ||
                                                      ((!r ||
                                                          void 0 ===
                                                              o.state
                                                                  .currentPendingValue ||
                                                          null ===
                                                              o.state
                                                                  .currentPendingValue ||
                                                          o.state
                                                              .currentPendingValue
                                                              .length <= 0) &&
                                                          o.state
                                                              .currentPendingValueValidIndex <
                                                              0)) &&
                                                  o.setState({isOpen: !u});
                                        break;
                                    case v.m.tab:
                                        return (
                                            o.props.multiSelect ||
                                                o._submitPendingValue(e),
                                            void (
                                                u &&
                                                o._setOpenStateAndFocusOnClose(
                                                    !u,
                                                    !1
                                                )
                                            )
                                        );
                                    case v.m.escape:
                                        if ((o._resetSelectedIndex(), !u))
                                            return;
                                        o.setState({isOpen: !1});
                                        break;
                                    case v.m.up:
                                        if (
                                            (p === s.clearAll &&
                                                (m =
                                                    o.props.hoisted
                                                        .currentOptions.length),
                                            e.altKey || e.metaKey)
                                        ) {
                                            if (u) {
                                                o._setOpenStateAndFocusOnClose(
                                                    !u,
                                                    !0
                                                );
                                                break;
                                            }
                                            return;
                                        }
                                        e.preventDefault(),
                                            o._setPendingInfoFromIndexAndDirection(
                                                m,
                                                i.backward
                                            );
                                        break;
                                    case v.m.down:
                                        e.altKey || e.metaKey
                                            ? o._setOpenStateAndFocusOnClose(
                                                  !0,
                                                  !0
                                              )
                                            : (p === s.clearAll && (m = -1),
                                              e.preventDefault(),
                                              o._setPendingInfoFromIndexAndDirection(
                                                  m,
                                                  i.forward
                                              ));
                                        break;
                                    case v.m.home:
                                    case v.m.end:
                                        if (r || a) return;
                                        m = -1;
                                        var h = i.forward;
                                        e.which === v.m.end &&
                                            ((m = c.length), (h = i.backward)),
                                            o._setPendingInfoFromIndexAndDirection(
                                                m,
                                                h
                                            );
                                        break;
                                    case v.m.space:
                                        if (!r && !a && 'off' === l) break;
                                    default:
                                        if (e.which >= 112 && e.which <= 123)
                                            return;
                                        if (
                                            e.keyCode === v.m.alt ||
                                            'Meta' === e.key
                                        )
                                            return;
                                        if (!r && !a && 'on' === l) {
                                            o._onInputChange(e.key);
                                            break;
                                        }
                                        return;
                                }
                                e.stopPropagation(), e.preventDefault();
                            }
                        }),
                        (o._onInputKeyUp = function (e) {
                            var t = o.props,
                                n = t.disabled,
                                r = t.allowFreeform,
                                i = t.allowFreeInput,
                                s = t.autoComplete,
                                a = o.state.isOpen,
                                l = o._lastKeyDownWasAltOrMeta && ce(e);
                            o._lastKeyDownWasAltOrMeta = !1;
                            var c = l && !((0, b.V)() || (0, g.g)());
                            n
                                ? o._handleInputWhenDisabled(e)
                                : e.which !== v.m.space
                                  ? c && a
                                      ? o._setOpenStateAndFocusOnClose(!a, !0)
                                      : ('focusing' === o.state.focusState &&
                                            o.props.openOnKeyboardFocus &&
                                            o.setState({isOpen: !0}),
                                        'focused' !== o.state.focusState &&
                                            o.setState({focusState: 'focused'}))
                                  : r ||
                                    i ||
                                    'off' !== s ||
                                    o._setOpenStateAndFocusOnClose(!a, !!a);
                        }),
                        (o._onOptionMouseLeave = function () {
                            o._shouldIgnoreMouseEvent() ||
                                (o.props.persistMenu && !o.state.isOpen) ||
                                o.setState({
                                    currentPendingValueValidIndexOnHover:
                                        s.clearAll,
                                });
                        }),
                        (o._onComboBoxClick = function () {
                            var e = o.props.disabled,
                                t = o.state.isOpen;
                            e ||
                                (o._setOpenStateAndFocusOnClose(!t, !1),
                                o.setState({focusState: 'focused'}));
                        }),
                        (o._onAutofillClick = function () {
                            var e = o.props,
                                t = e.disabled;
                            e.allowFreeform && !t
                                ? o.focus(o.state.isOpen || o._processingTouch)
                                : o._onComboBoxClick();
                        }),
                        (o._onTouchStart = function () {
                            o._comboBoxWrapper.current &&
                                !('onpointerdown' in o._comboBoxWrapper) &&
                                o._handleTouchAndPointerEvent();
                        }),
                        (o._onPointerDown = function (e) {
                            'touch' === e.pointerType &&
                                (o._handleTouchAndPointerEvent(),
                                e.preventDefault(),
                                e.stopImmediatePropagation());
                        }),
                        (0, _.l)(o),
                        (o._async = new x.e(o)),
                        (o._events = new y.r(o)),
                        (0, C.L)(Y, t, {
                            defaultSelectedKey: 'selectedKey',
                            text: 'defaultSelectedKey',
                            selectedKey: 'value',
                            dropdownWidth: 'useComboBoxAsMenuWidth',
                            ariaLabel: 'label',
                        }),
                        (o._id = t.id || (0, I.z)('ComboBox')),
                        (o._isScrollIdle = !0),
                        (o._processingTouch = !1),
                        (o._gotMouseMove = !1),
                        (o._processingClearPendingInfo = !1),
                        (o.state = {
                            isOpen: !1,
                            focusState: 'none',
                            currentPendingValueValidIndex: -1,
                            currentPendingValue: void 0,
                            currentPendingValueValidIndexOnHover: s.default,
                        }),
                        o
                    );
                }
                return (
                    (0, a.ZT)(t, e),
                    Object.defineProperty(t.prototype, 'selectedOptions', {
                        get: function () {
                            var e = this.props.hoisted,
                                t = e.currentOptions,
                                o = e.selectedIndices;
                            return (0, K.t)(t, o);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (t.prototype.componentDidMount = function () {
                        this._comboBoxWrapper.current &&
                            !this.props.disabled &&
                            (this._events.on(
                                this._comboBoxWrapper.current,
                                'focus',
                                this._onResolveOptions,
                                !0
                            ),
                            'onpointerdown' in this._comboBoxWrapper.current &&
                                this._events.on(
                                    this._comboBoxWrapper.current,
                                    'pointerdown',
                                    this._onPointerDown,
                                    !0
                                ));
                    }),
                    (t.prototype.componentDidUpdate = function (e, t) {
                        var o,
                            n,
                            r,
                            i = this,
                            s = this.props,
                            l = s.allowFreeform,
                            c = s.allowFreeInput,
                            u = s.text,
                            p = s.onMenuOpen,
                            m = s.onMenuDismissed,
                            h = s.hoisted,
                            f = h.currentOptions,
                            v = h.selectedIndices,
                            b = this.state,
                            g = b.currentPendingValue,
                            _ = b.currentPendingValueValidIndex,
                            x = b.isOpen;
                        !x ||
                            (t.isOpen &&
                                t.currentPendingValueValidIndex === _) ||
                            this._async.setTimeout(function () {
                                return i._scrollIntoView();
                            }, 0);
                        var y = (0, Z.NA)(this.context);
                        this._hasFocus() &&
                            (x ||
                                (t.isOpen &&
                                    !x &&
                                    this._focusInputAfterClose &&
                                    this._autofill.current &&
                                    (null == y ? void 0 : y.activeElement) !==
                                        this._autofill.current.inputElement)) &&
                            this.focus(void 0, !0),
                            this._focusInputAfterClose &&
                                ((t.isOpen && !x) ||
                                    (this._hasFocus() &&
                                        ((!x &&
                                            !this.props.multiSelect &&
                                            e.hoisted.selectedIndices &&
                                            v &&
                                            e.hoisted.selectedIndices[0] !==
                                                v[0]) ||
                                            (!l && !c) ||
                                            u !== e.text))) &&
                                this._onFocus(),
                            this._notifyPendingValueChanged(t),
                            x &&
                                !t.isOpen &&
                                ((this._overrideScrollDismiss = !0),
                                this._async.clearTimeout(
                                    this._overrideScrollDimissTimeout
                                ),
                                (this._overrideScrollDimissTimeout =
                                    this._async.setTimeout(function () {
                                        i._overrideScrollDismiss = !1;
                                    }, 100)),
                                null == p || p()),
                            !x && t.isOpen && m && m();
                        var C = _,
                            I = f.map(function (e, t) {
                                return (0, a.pi)((0, a.pi)({}, e), {index: t});
                            });
                        !(0, d.Vv)(e.hoisted.currentOptions, f) &&
                            g &&
                            (C =
                                this.props.allowFreeform ||
                                this.props.allowFreeInput
                                    ? this._processInputChangeWithFreeform(g)
                                    : this._updateAutocompleteIndexWithoutFreeform(
                                          g
                                      ));
                        var k = void 0;
                        x && this._hasFocus() && -1 !== C
                            ? (k =
                                  null !== (o = I[C].id) && void 0 !== o
                                      ? o
                                      : this._id + '-list' + C)
                            : x &&
                              v.length &&
                              (k =
                                  null !==
                                      (r =
                                          null === (n = I[v[0]]) || void 0 === n
                                              ? void 0
                                              : n.id) && void 0 !== r
                                      ? r
                                      : this._id + '-list' + v[0]),
                            k !== this.state.ariaActiveDescendantValue &&
                                this.setState({ariaActiveDescendantValue: k});
                    }),
                    (t.prototype.componentWillUnmount = function () {
                        this._async.dispose(), this._events.dispose();
                    }),
                    (t.prototype.render = function () {
                        var e = this._id + '-error',
                            t = this.props,
                            o = t.className,
                            n = t.disabled,
                            r = t.required,
                            i = t.errorMessage,
                            s = t.onRenderContainer,
                            c = void 0 === s ? this._onRenderContainer : s,
                            d = t.onRenderLabel,
                            u = void 0 === d ? this._onRenderLabel : d,
                            p = t.onRenderList,
                            m = void 0 === p ? this._onRenderList : p,
                            h = t.onRenderItem,
                            f = void 0 === h ? this._onRenderItem : h,
                            v = t.onRenderOption,
                            b = void 0 === v ? this._onRenderOptionContent : v,
                            g = t.allowFreeform,
                            _ = t.styles,
                            x = t.theme,
                            y = t.persistMenu,
                            C = t.multiSelect,
                            I = t.hoisted,
                            S = I.suggestedDisplayValue,
                            M = I.selectedIndices,
                            w = I.currentOptions,
                            D = this.state.isOpen;
                        this._currentVisibleValue = this._getVisibleValue();
                        var T = C
                                ? this._getMultiselectDisplayString(M, w, S)
                                : void 0,
                            P = (0, k.pq)(this.props, k.n7, [
                                'onChange',
                                'value',
                                'aria-describedby',
                                'aria-labelledby',
                            ]),
                            O = !!(i && i.length > 0);
                        this._classNames = this.props.getClassNames
                            ? this.props.getClassNames(
                                  x,
                                  !!D,
                                  !!n,
                                  !!r,
                                  !!this._hasFocus(),
                                  !!g,
                                  !!O,
                                  o
                              )
                            : L(
                                  H(x, _),
                                  o,
                                  !!D,
                                  !!n,
                                  !!r,
                                  !!this._hasFocus(),
                                  !!g,
                                  !!O
                              );
                        var E = this._renderComboBoxWrapper(T, e);
                        return l.createElement(
                            'div',
                            (0, a.pi)({}, P, {
                                ref: this.props.hoisted.mergedRootRef,
                                className: this._classNames.container,
                            }),
                            u(
                                {
                                    props: this.props,
                                    multiselectAccessibleText: T,
                                },
                                this._onRenderLabel
                            ),
                            E,
                            (y || D) &&
                                c(
                                    (0, a.pi)((0, a.pi)({}, this.props), {
                                        onRenderList: m,
                                        onRenderItem: f,
                                        onRenderOption: b,
                                        options: w.map(function (e, t) {
                                            return (0, a.pi)((0, a.pi)({}, e), {
                                                index: t,
                                            });
                                        }),
                                        onDismiss: this._onDismiss,
                                    }),
                                    this._onRenderContainer
                                ),
                            O &&
                                l.createElement(
                                    'div',
                                    {
                                        role: 'alert',
                                        id: e,
                                        className:
                                            this._classNames.errorMessage,
                                    },
                                    i
                                )
                        );
                    }),
                    (t.prototype._getPendingString = function (e, t, o) {
                        return null != e ? e : ie(t, o) ? le(t[o]) : '';
                    }),
                    (t.prototype._getMultiselectDisplayString = function (
                        e,
                        t,
                        o
                    ) {
                        for (var n = [], r = 0; e && r < e.length; r++) {
                            var i = e[r];
                            t[i].itemType !== W.F.SelectAll &&
                                n.push(ie(t, i) ? t[i].text : re(o));
                        }
                        var s = this.props.multiSelectDelimiter,
                            a = void 0 === s ? ', ' : s;
                        return n.join(a);
                    }),
                    (t.prototype._preventDismissOnScrollOrResize = function (
                        e
                    ) {
                        var t = this.props.calloutProps;
                        return (null == t ? void 0 : t.preventDismissOnEvent)
                            ? t.preventDismissOnEvent(e)
                            : !(
                                  !this._overrideScrollDismiss ||
                                  ('scroll' !== e.type && 'resize' !== e.type)
                              );
                    }),
                    (t.prototype._processInputChangeWithFreeform = function (
                        e
                    ) {
                        var t = this.props.hoisted.currentOptions,
                            o = -1;
                        if ('' === e)
                            return (
                                1 ===
                                    (r = t
                                        .map(function (e, t) {
                                            return (0, a.pi)((0, a.pi)({}, e), {
                                                index: t,
                                            });
                                        })
                                        .filter(function (t) {
                                            return (
                                                se(t) &&
                                                !t.disabled &&
                                                le(t) === e
                                            );
                                        })).length && (o = r[0].index),
                                this._setPendingInfo(e, o, e),
                                o
                            );
                        var n = e;
                        e = e.toLocaleLowerCase();
                        var r,
                            i = '';
                        if ('on' === this.props.autoComplete) {
                            if (
                                (r = t
                                    .map(function (e, t) {
                                        return (0, a.pi)((0, a.pi)({}, e), {
                                            index: t,
                                        });
                                    })
                                    .filter(function (t) {
                                        return (
                                            se(t) &&
                                            !t.disabled &&
                                            0 ===
                                                le(t)
                                                    .toLocaleLowerCase()
                                                    .indexOf(e)
                                        );
                                    })).length > 0
                            ) {
                                var s = le(r[0]);
                                (i = s.toLocaleLowerCase() !== e ? s : ''),
                                    (o = r[0].index);
                            }
                        } else
                            1 ===
                                (r = t
                                    .map(function (e, t) {
                                        return (0, a.pi)((0, a.pi)({}, e), {
                                            index: t,
                                        });
                                    })
                                    .filter(function (t) {
                                        return (
                                            se(t) &&
                                            !t.disabled &&
                                            le(t).toLocaleLowerCase() === e
                                        );
                                    })).length && (o = r[0].index);
                        return this._setPendingInfo(n, o, i), o;
                    }),
                    (t.prototype._processInputChangeWithoutFreeform = function (
                        e
                    ) {
                        var t = this,
                            o = this.state,
                            n = o.currentPendingValue,
                            r = o.currentPendingValueValidIndex;
                        if ('on' === this.props.autoComplete && '' !== e) {
                            this._autoCompleteTimeout &&
                                (this._async.clearTimeout(
                                    this._autoCompleteTimeout
                                ),
                                (this._autoCompleteTimeout = void 0),
                                (e = re(n) + e));
                            var i =
                                this._updateAutocompleteIndexWithoutFreeform(e);
                            return (
                                (this._autoCompleteTimeout =
                                    this._async.setTimeout(function () {
                                        t._autoCompleteTimeout = void 0;
                                    }, 1e3)),
                                i
                            );
                        }
                        var s = r >= 0 ? r : this._getFirstSelectedIndex();
                        return this._setPendingInfoFromIndex(s), s;
                    }),
                    (t.prototype._updateAutocompleteIndexWithoutFreeform =
                        function (e) {
                            var t = this.props.hoisted.currentOptions,
                                o = e;
                            e = e.toLocaleLowerCase();
                            var n = t
                                .map(function (e, t) {
                                    return (0, a.pi)((0, a.pi)({}, e), {
                                        index: t,
                                    });
                                })
                                .filter(function (t) {
                                    return (
                                        se(t) &&
                                        !t.disabled &&
                                        0 ===
                                            t.text
                                                .toLocaleLowerCase()
                                                .indexOf(e)
                                    );
                                });
                            return n.length > 0
                                ? (this._setPendingInfo(
                                      o,
                                      n[0].index,
                                      le(n[0])
                                  ),
                                  n[0].index)
                                : -1;
                        }),
                    (t.prototype._getFirstSelectedIndex = function () {
                        var e = this.props.hoisted.selectedIndices;
                        return (null == e ? void 0 : e.length) ? e[0] : -1;
                    }),
                    (t.prototype._getNextSelectableIndex = function (e, t) {
                        var o = this.props.hoisted.currentOptions,
                            n = e + t;
                        if (
                            !ie(o, (n = Math.max(0, Math.min(o.length - 1, n))))
                        )
                            return -1;
                        var r = o[n];
                        if (!ae(r) || !0 === r.hidden) {
                            if (
                                t === i.none ||
                                !(
                                    (n > 0 && t < i.none) ||
                                    (n >= 0 && n < o.length && t > i.none)
                                )
                            )
                                return e;
                            n = this._getNextSelectableIndex(n, t);
                        }
                        return n;
                    }),
                    (t.prototype._setSelectedIndex = function (e, t, o) {
                        void 0 === o && (o = i.none);
                        var n = this.props,
                            r = n.onChange,
                            s = n.onPendingValueChanged,
                            l = n.hoisted,
                            c = l.selectedIndices,
                            d = l.currentOptions,
                            u = c ? c.slice() : [],
                            p = d.slice();
                        if (ie(d, (e = this._getNextSelectableIndex(e, o)))) {
                            if (
                                this.props.multiSelect ||
                                u.length < 1 ||
                                (1 === u.length && u[0] !== e)
                            ) {
                                var m = (0, a.pi)({}, d[e]);
                                if (!m || m.disabled) return;
                                if (this.props.multiSelect)
                                    if (
                                        ((m.selected =
                                            void 0 !== m.selected
                                                ? !m.selected
                                                : u.indexOf(e) < 0),
                                        m.itemType === W.F.SelectAll)
                                    )
                                        (u = []),
                                            m.selected
                                                ? d.forEach(function (e, t) {
                                                      !e.disabled &&
                                                          ae(e) &&
                                                          (u.push(t),
                                                          (p[t] = (0, a.pi)(
                                                              (0, a.pi)({}, e),
                                                              {selected: !0}
                                                          )));
                                                  })
                                                : (p = d.map(function (e) {
                                                      return (0, a.pi)(
                                                          (0, a.pi)({}, e),
                                                          {selected: !1}
                                                      );
                                                  }));
                                    else {
                                        m.selected && u.indexOf(e) < 0
                                            ? u.push(e)
                                            : !m.selected &&
                                              u.indexOf(e) >= 0 &&
                                              (u = u.filter(function (t) {
                                                  return t !== e;
                                              })),
                                            (p[e] = m);
                                        var h = p.filter(function (e) {
                                            return e.itemType === W.F.SelectAll;
                                        })[0];
                                        if (h) {
                                            var f = this._isSelectAllChecked(u),
                                                v = p.indexOf(h);
                                            f
                                                ? (u.push(v),
                                                  (p[v] = (0, a.pi)(
                                                      (0, a.pi)({}, h),
                                                      {selected: !0}
                                                  )))
                                                : ((u = u.filter(function (e) {
                                                      return e !== v;
                                                  })),
                                                  (p[v] = (0, a.pi)(
                                                      (0, a.pi)({}, h),
                                                      {selected: !1}
                                                  )));
                                        }
                                    }
                                else u[0] = e;
                                t.persist(),
                                    this.props.selectedKey ||
                                        null === this.props.selectedKey ||
                                        (this.props.hoisted.setSelectedIndices(
                                            u
                                        ),
                                        this.props.hoisted.setCurrentOptions(
                                            p
                                        )),
                                    this._hasPendingValue &&
                                        s &&
                                        (s(), (this._hasPendingValue = !1)),
                                    r && r(t, m, e, le(m));
                            }
                            (this.props.multiSelect && this.state.isOpen) ||
                                this._clearPendingInfo();
                        }
                    }),
                    (t.prototype._submitPendingValue = function (e) {
                        var t,
                            o = this.props,
                            n = o.onChange,
                            r = o.allowFreeform,
                            i = o.autoComplete,
                            s = o.multiSelect,
                            a = o.hoisted,
                            l = a.currentOptions,
                            c = this.state,
                            d = c.currentPendingValue,
                            u = c.currentPendingValueValidIndex,
                            p = c.currentPendingValueValidIndexOnHover,
                            m = this.props.hoisted.selectedIndices;
                        if (!this._processingClearPendingInfo) {
                            if (r) {
                                if (null == d)
                                    return void (
                                        p >= 0 &&
                                        (this._setSelectedIndex(p, e),
                                        this._clearPendingInfo())
                                    );
                                if (ie(l, u)) {
                                    var h = le(l[u]).toLocaleLowerCase(),
                                        f = this._autofill.current;
                                    if (
                                        d.toLocaleLowerCase() === h ||
                                        (i &&
                                            0 ===
                                                h.indexOf(
                                                    d.toLocaleLowerCase()
                                                ) &&
                                            (null == f
                                                ? void 0
                                                : f.isValueSelected) &&
                                            d.length +
                                                (f.selectionEnd -
                                                    f.selectionStart) ===
                                                h.length) ||
                                        (null ===
                                            (t =
                                                null == f
                                                    ? void 0
                                                    : f.inputElement) ||
                                        void 0 === t
                                            ? void 0
                                            : t.value.toLocaleLowerCase()) === h
                                    ) {
                                        if (
                                            (this._setSelectedIndex(u, e),
                                            s && this.state.isOpen)
                                        )
                                            return;
                                        return void this._clearPendingInfo();
                                    }
                                }
                                if (n) n && n(e, void 0, void 0, d);
                                else {
                                    var v = {key: d || (0, I.z)(), text: re(d)};
                                    s && (v.selected = !0);
                                    var b = l.concat([v]);
                                    m && (s || (m = []), m.push(b.length - 1)),
                                        a.setCurrentOptions(b),
                                        a.setSelectedIndices(m);
                                }
                            } else
                                u >= 0
                                    ? this._setSelectedIndex(u, e)
                                    : p >= 0 && this._setSelectedIndex(p, e);
                            this._clearPendingInfo();
                        }
                    }),
                    (t.prototype._onCalloutLayerMounted = function () {
                        this._gotMouseMove = !1;
                    }),
                    (t.prototype._renderSeparator = function (e) {
                        var t = e.index,
                            o = e.key;
                        return t && t > 0
                            ? l.createElement('div', {
                                  role: 'presentation',
                                  key: o,
                                  className: this._classNames.divider,
                              })
                            : null;
                    }),
                    (t.prototype._renderHeader = function (e) {
                        var t = this.props.onRenderOption,
                            o = void 0 === t ? this._onRenderOptionContent : t;
                        return l.createElement(
                            'div',
                            {
                                id: e.id,
                                key: e.key,
                                className: this._classNames.header,
                            },
                            o(e, this._onRenderOptionContent)
                        );
                    }),
                    (t.prototype._renderCheckboxLabel = function (e) {
                        var t = this.props.onRenderOption;
                        return (
                            void 0 === t
                                ? this._onRenderMultiselectOptionContent
                                : t
                        )(e, this._onRenderMultiselectOptionContent);
                    }),
                    (t.prototype._isOptionHighlighted = function (e) {
                        var t = this.state.currentPendingValueValidIndexOnHover;
                        return (
                            t !== s.clearAll &&
                            (t >= 0 ? t === e : this._isOptionSelected(e))
                        );
                    }),
                    (t.prototype._isOptionSelected = function (e) {
                        return this._getPendingSelectedIndex(!0) === e;
                    }),
                    (t.prototype._isOptionChecked = function (e) {
                        return (
                            !(
                                !this.props.multiSelect ||
                                void 0 === e ||
                                !this.props.hoisted.selectedIndices
                            ) &&
                            this.props.hoisted.selectedIndices.indexOf(e) >= 0
                        );
                    }),
                    (t.prototype._isOptionIndeterminate = function (e) {
                        var t = this.props,
                            o = t.multiSelect,
                            n = t.hoisted;
                        if (
                            o &&
                            void 0 !== e &&
                            n.selectedIndices &&
                            n.currentOptions
                        ) {
                            var r = n.currentOptions[e];
                            if (r && r.itemType === W.F.SelectAll)
                                return (
                                    n.selectedIndices.length > 0 &&
                                    !this._isSelectAllChecked()
                                );
                        }
                        return !1;
                    }),
                    (t.prototype._isSelectAllChecked = function (e) {
                        var t = this.props,
                            o = t.multiSelect,
                            n = t.hoisted,
                            r = n.currentOptions.find(function (e) {
                                return e.itemType === W.F.SelectAll;
                            }),
                            i = e || n.selectedIndices;
                        if (!o || !i || !r) return !1;
                        var s = n.currentOptions.indexOf(r),
                            a = i.filter(function (e) {
                                return e !== s;
                            }),
                            l = n.currentOptions.filter(function (e) {
                                return (
                                    !e.disabled &&
                                    e.itemType !== W.F.SelectAll &&
                                    ae(e)
                                );
                            });
                        return a.length === l.length;
                    }),
                    (t.prototype._getPendingSelectedIndex = function (e) {
                        var t = this.state,
                            o = t.currentPendingValueValidIndex,
                            n = t.currentPendingValue;
                        return o >= 0 || (e && null != n)
                            ? o
                            : this.props.multiSelect
                              ? -1
                              : this._getFirstSelectedIndex();
                    }),
                    (t.prototype._scrollIntoView = function () {
                        var e = this.props,
                            t = e.onScrollToItem,
                            o = e.scrollSelectedToTop,
                            n = this._getPendingSelectedIndex(!0);
                        if (t) t(n >= 0 ? n : this._getFirstSelectedIndex());
                        else {
                            var r = this._selectedElement.current;
                            if (
                                (this.props.multiSelect &&
                                    this._comboBoxMenu.current &&
                                    (r = ee(
                                        this._comboBoxMenu.current,
                                        function (e) {
                                            var t;
                                            return (
                                                (null === (t = e.dataset) ||
                                                void 0 === t
                                                    ? void 0
                                                    : t.index) === n.toString()
                                            );
                                        }
                                    )),
                                r && r.offsetParent)
                            ) {
                                var i = !0;
                                if (
                                    this._comboBoxMenu.current &&
                                    this._comboBoxMenu.current.offsetParent
                                ) {
                                    var s =
                                            this._comboBoxMenu.current
                                                .offsetParent,
                                        a = r.offsetParent,
                                        l = a.offsetHeight,
                                        c = a.offsetTop,
                                        d = s,
                                        u = d.offsetHeight,
                                        p = d.scrollTop,
                                        m = c + l > p + u;
                                    c < p || o
                                        ? ((i = !1), s.scrollTo(0, c))
                                        : m && s.scrollTo(0, c - u + l);
                                } else r.offsetParent.scrollIntoView(i);
                            }
                        }
                    }),
                    (t.prototype._onItemClick = function (e) {
                        var t = this,
                            o = this.props.onItemClick,
                            n = e.index;
                        return function (r) {
                            t.props.multiSelect ||
                                (t._autofill.current &&
                                    t._autofill.current.focus(),
                                t.setState({isOpen: !1})),
                                o && o(r, e, n),
                                t._setSelectedIndex(n, r);
                        };
                    }),
                    (t.prototype._resetSelectedIndex = function () {
                        var e = this.props.hoisted.currentOptions;
                        this._clearPendingInfo();
                        var t = this._getFirstSelectedIndex();
                        t > 0 && t < e.length
                            ? this.props.hoisted.setSuggestedDisplayValue(
                                  e[t].text
                              )
                            : this.props.text &&
                              this.props.hoisted.setSuggestedDisplayValue(
                                  this.props.text
                              );
                    }),
                    (t.prototype._clearPendingInfo = function () {
                        (this._processingClearPendingInfo = !0),
                            this.props.hoisted.setSuggestedDisplayValue(void 0),
                            this.setState(
                                {
                                    currentPendingValue: void 0,
                                    currentPendingValueValidIndex: -1,
                                    currentPendingValueValidIndexOnHover:
                                        s.default,
                                },
                                this._onAfterClearPendingInfo
                            );
                    }),
                    (t.prototype._setPendingInfo = function (e, t, o) {
                        void 0 === t && (t = -1),
                            this._processingClearPendingInfo ||
                                (this.props.hoisted.setSuggestedDisplayValue(o),
                                this.setState({
                                    currentPendingValue: re(e),
                                    currentPendingValueValidIndex: t,
                                    currentPendingValueValidIndexOnHover:
                                        s.default,
                                }));
                    }),
                    (t.prototype._setPendingInfoFromIndex = function (e) {
                        var t = this.props.hoisted.currentOptions;
                        if (e >= 0 && e < t.length) {
                            var o = t[e];
                            this._setPendingInfo(le(o), e, le(o));
                        } else this._clearPendingInfo();
                    }),
                    (t.prototype._setPendingInfoFromIndexAndDirection =
                        function (e, t) {
                            var o = this.props.hoisted.currentOptions;
                            t === i.forward && e >= o.length - 1
                                ? (e = -1)
                                : t === i.backward && e <= 0 && (e = o.length);
                            var n = this._getNextSelectableIndex(e, t);
                            e === n
                                ? t === i.forward
                                    ? (e = this._getNextSelectableIndex(-1, t))
                                    : t === i.backward &&
                                      (e = this._getNextSelectableIndex(
                                          o.length,
                                          t
                                      ))
                                : (e = n),
                                ie(o, e) && this._setPendingInfoFromIndex(e);
                        }),
                    (t.prototype._notifyPendingValueChanged = function (e) {
                        var t = this.props.onPendingValueChanged;
                        if (t) {
                            var o = this.props.hoisted.currentOptions,
                                n = this.state,
                                r = n.currentPendingValue,
                                i = n.currentPendingValueValidIndex,
                                s = n.currentPendingValueValidIndexOnHover,
                                a = void 0,
                                l = void 0;
                            s !== e.currentPendingValueValidIndexOnHover &&
                            ie(o, s)
                                ? (a = s)
                                : i !== e.currentPendingValueValidIndex &&
                                    ie(o, i)
                                  ? (a = i)
                                  : r !== e.currentPendingValue && (l = r),
                                (void 0 !== a ||
                                    void 0 !== l ||
                                    this._hasPendingValue) &&
                                    (t(void 0 !== a ? o[a] : void 0, a, l),
                                    (this._hasPendingValue =
                                        void 0 !== a || void 0 !== l));
                        }
                    }),
                    (t.prototype._setOpenStateAndFocusOnClose = function (
                        e,
                        t
                    ) {
                        (this._focusInputAfterClose = t),
                            this.setState({isOpen: e});
                    }),
                    (t.prototype._onOptionMouseEnter = function (e) {
                        this._shouldIgnoreMouseEvent() ||
                            this.setState({
                                currentPendingValueValidIndexOnHover: e,
                            });
                    }),
                    (t.prototype._onOptionMouseMove = function (e) {
                        (this._gotMouseMove = !0),
                            this._isScrollIdle &&
                                this.state
                                    .currentPendingValueValidIndexOnHover !==
                                    e &&
                                this.setState({
                                    currentPendingValueValidIndexOnHover: e,
                                });
                    }),
                    (t.prototype._shouldIgnoreMouseEvent = function () {
                        return !this._isScrollIdle || !this._gotMouseMove;
                    }),
                    (t.prototype._handleInputWhenDisabled = function (e) {
                        this.props.disabled &&
                            (this.state.isOpen && this.setState({isOpen: !1}),
                            null !== e &&
                                e.which !== v.m.tab &&
                                e.which !== v.m.escape &&
                                (e.which < 112 || e.which > 123) &&
                                (e.stopPropagation(), e.preventDefault()));
                    }),
                    (t.prototype._handleTouchAndPointerEvent = function () {
                        var e = this;
                        void 0 !== this._lastTouchTimeoutId &&
                            (this._async.clearTimeout(this._lastTouchTimeoutId),
                            (this._lastTouchTimeoutId = void 0)),
                            (this._processingTouch = !0),
                            (this._lastTouchTimeoutId = this._async.setTimeout(
                                function () {
                                    (e._processingTouch = !1),
                                        (e._lastTouchTimeoutId = void 0);
                                },
                                500
                            ));
                    }),
                    (t.prototype._getCaretButtonStyles = function () {
                        var e = this.props.caretDownButtonStyles;
                        return B(this.props.theme, e);
                    }),
                    (t.prototype._getCurrentOptionStyles = function (e) {
                        var t = this.props.comboBoxOptionStyles,
                            o = e.styles;
                        return R(
                            this.props.theme,
                            t,
                            o,
                            this._isPendingOption(e),
                            e.hidden,
                            this._isOptionHighlighted(e.index)
                        );
                    }),
                    (t.prototype._getAriaAutoCompleteValue = function () {
                        return this.props.disabled ||
                            'on' !== this.props.autoComplete
                            ? 'list'
                            : this.props.allowFreeform
                              ? 'inline'
                              : 'both';
                    }),
                    (t.prototype._isPendingOption = function (e) {
                        return (
                            e &&
                            e.index === this.state.currentPendingValueValidIndex
                        );
                    }),
                    (t.prototype._hasFocus = function () {
                        return 'none' !== this.state.focusState;
                    }),
                    (t.contextType = U.Hn),
                    (0, a.gn)(
                        [(0, S.a)('ComboBox', ['theme', 'styles'], !0)],
                        t
                    )
                );
            })(l.Component);
            function oe(e, t) {
                if (!e || !t) return [];
                var o = {};
                e.forEach(function (e, t) {
                    e.selected && (o[t] = !0);
                });
                for (
                    var n = function (t) {
                            var n = (0, M.cx)(e, function (e) {
                                return e.key === t;
                            });
                            n > -1 && (o[n] = !0);
                        },
                        r = 0,
                        i = t;
                    r < i.length;
                    r++
                )
                    n(i[r]);
                return Object.keys(o).map(Number).sort();
            }
            function ne(e) {
                return void 0 === e ? [] : e instanceof Array ? e : [e];
            }
            function re(e) {
                return e || '';
            }
            function ie(e, t) {
                return !!e && t >= 0 && t < e.length;
            }
            function se(e) {
                return (
                    e.itemType !== W.F.Header &&
                    e.itemType !== W.F.Divider &&
                    e.itemType !== W.F.SelectAll
                );
            }
            function ae(e) {
                return e.itemType !== W.F.Header && e.itemType !== W.F.Divider;
            }
            function le(e) {
                return e.useAriaLabelAsText && e.ariaLabel
                    ? e.ariaLabel
                    : e.text;
            }
            function ce(e) {
                return e.which === v.m.alt || 'Meta' === e.key;
            }
        },
        76615: (e, t, o) => {
            o.d(t, {r: () => Fe});
            var n,
                r = o(96583),
                i = o(65812),
                s = o(98621),
                a = o(68867);
            !(function (e) {
                (e[(e.Normal = 0)] = 'Normal'),
                    (e[(e.Divider = 1)] = 'Divider'),
                    (e[(e.Header = 2)] = 'Header'),
                    (e[(e.Section = 3)] = 'Section');
            })(n || (n = {}));
            var l = o(53222),
                c = o(12436),
                d = o(46165),
                u = o(11599),
                p = o(25607),
                m = o(33749),
                h = o(90279),
                f = o(62032),
                v = o(28642),
                b = o(57957),
                g = o(56357),
                _ = o(12321),
                x = o(4061),
                y = o(39935),
                C = o(48782),
                I = o(99976),
                k = o(66430),
                S = o(73606),
                M = o(36133),
                w = o(96208),
                D = o(56316),
                T = function (e) {
                    var t = e.item,
                        o = e.classNames,
                        n = t.iconProps;
                    return i.createElement(
                        D.J,
                        (0, r.pi)({}, n, {className: o.icon})
                    );
                },
                P = function (e) {
                    var t = e.item;
                    return e.hasIcons
                        ? t.onRenderIcon
                            ? t.onRenderIcon(e, T)
                            : T(e)
                        : null;
                },
                O = function (e) {
                    var t = e.onCheckmarkClick,
                        o = e.item,
                        n = e.classNames,
                        r = (0, S.E3)(o);
                    return t
                        ? i.createElement(D.J, {
                              iconName:
                                  !1 !== o.canCheck && r ? 'CheckMark' : '',
                              className: n.checkmarkIcon,
                              onClick: function (e) {
                                  return t(o, e);
                              },
                          })
                        : null;
                },
                E = function (e) {
                    var t = e.item,
                        o = e.classNames;
                    return t.text || t.name
                        ? i.createElement(
                              'span',
                              {className: o.label},
                              t.text || t.name
                          )
                        : null;
                },
                N = function (e) {
                    var t = e.item,
                        o = e.classNames;
                    return t.secondaryText
                        ? i.createElement(
                              'span',
                              {className: o.secondaryText},
                              t.secondaryText
                          )
                        : null;
                },
                F = function (e) {
                    var t = e.item,
                        o = e.classNames,
                        n = e.theme;
                    return (0, S.Df)(t)
                        ? i.createElement(
                              D.J,
                              (0, r.pi)(
                                  {
                                      iconName: (0, m.zg)(n)
                                          ? 'ChevronLeft'
                                          : 'ChevronRight',
                                  },
                                  t.submenuIconProps,
                                  {className: o.subMenuIcon}
                              )
                          )
                        : null;
                },
                R = (function (e) {
                    function t(t) {
                        var o = e.call(this, t) || this;
                        return (
                            (o.openSubMenu = function () {
                                var e = o.props,
                                    t = e.item,
                                    n = e.openSubMenu,
                                    r = e.getSubmenuTarget;
                                if (r) {
                                    var i = r();
                                    (0, S.Df)(t) && n && i && n(t, i);
                                }
                            }),
                            (o.dismissSubMenu = function () {
                                var e = o.props,
                                    t = e.item,
                                    n = e.dismissSubMenu;
                                (0, S.Df)(t) && n && n();
                            }),
                            (o.dismissMenu = function (e) {
                                var t = o.props.dismissMenu;
                                t && t(void 0, e);
                            }),
                            (0, w.l)(o),
                            o
                        );
                    }
                    return (
                        (0, r.ZT)(t, e),
                        (t.prototype.render = function () {
                            var e = this.props,
                                t = e.item,
                                o = e.classNames,
                                n = t.onRenderContent || this._renderLayout;
                            return i.createElement(
                                'div',
                                {
                                    className: t.split
                                        ? o.linkContentMenu
                                        : o.linkContent,
                                },
                                n(this.props, {
                                    renderCheckMarkIcon: O,
                                    renderItemIcon: P,
                                    renderItemName: E,
                                    renderSecondaryText: N,
                                    renderSubMenuIcon: F,
                                })
                            );
                        }),
                        (t.prototype._renderLayout = function (e, t) {
                            return i.createElement(
                                i.Fragment,
                                null,
                                t.renderCheckMarkIcon(e),
                                t.renderItemIcon(e),
                                t.renderItemName(e),
                                t.renderSecondaryText(e),
                                t.renderSubMenuIcon(e)
                            );
                        }),
                        t
                    );
                })(i.Component),
                B = o(85446),
                H = (0, p.NF)(function (e) {
                    return (0, B.ZC)({
                        wrapper: {
                            display: 'inline-flex',
                            height: '100%',
                            alignItems: 'center',
                        },
                        divider: {
                            width: 1,
                            height: '100%',
                            backgroundColor: e.palette.neutralTertiaryAlt,
                        },
                    });
                }),
                L = 36,
                A = (0, B.sK)(0, B.yp),
                V = (0, p.NF)(function (e) {
                    var t,
                        o,
                        n,
                        i,
                        s,
                        a = e.semanticColors,
                        l = e.fonts,
                        c = e.palette,
                        d = a.menuItemBackgroundHovered,
                        u = a.menuItemTextHovered,
                        p = a.menuItemBackgroundPressed,
                        m = a.bodyDivider,
                        h = {
                            item: [
                                l.medium,
                                {
                                    color: a.bodyText,
                                    position: 'relative',
                                    boxSizing: 'border-box',
                                },
                            ],
                            divider: {
                                display: 'block',
                                height: '1px',
                                backgroundColor: m,
                                position: 'relative',
                            },
                            root: [
                                (0, B.GL)(e),
                                l.medium,
                                {
                                    color: a.bodyText,
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    width: '100%',
                                    height: L,
                                    lineHeight: L,
                                    display: 'block',
                                    cursor: 'pointer',
                                    padding: '0px 8px 0 4px',
                                    textAlign: 'left',
                                },
                            ],
                            rootDisabled: {
                                color: a.disabledBodyText,
                                cursor: 'default',
                                pointerEvents: 'none',
                                selectors:
                                    ((t = {}),
                                    (t[B.qJ] = {color: 'GrayText', opacity: 1}),
                                    t),
                            },
                            rootHovered: {
                                backgroundColor: d,
                                color: u,
                                selectors: {
                                    '.ms-ContextualMenu-icon': {
                                        color: c.themeDarkAlt,
                                    },
                                    '.ms-ContextualMenu-submenuIcon': {
                                        color: c.neutralPrimary,
                                    },
                                },
                            },
                            rootFocused: {backgroundColor: c.white},
                            rootChecked: {
                                selectors: {
                                    '.ms-ContextualMenu-checkmarkIcon': {
                                        color: c.neutralPrimary,
                                    },
                                },
                            },
                            rootPressed: {
                                backgroundColor: p,
                                selectors: {
                                    '.ms-ContextualMenu-icon': {
                                        color: c.themeDark,
                                    },
                                    '.ms-ContextualMenu-submenuIcon': {
                                        color: c.neutralPrimary,
                                    },
                                },
                            },
                            rootExpanded: {
                                backgroundColor: p,
                                color: a.bodyTextChecked,
                                selectors:
                                    ((o = {
                                        '.ms-ContextualMenu-submenuIcon':
                                            ((n = {}),
                                            (n[B.qJ] = {color: 'inherit'}),
                                            n),
                                    }),
                                    (o[B.qJ] = (0, r.pi)({}, (0, B.xM)())),
                                    o),
                            },
                            linkContent: {
                                whiteSpace: 'nowrap',
                                height: 'inherit',
                                display: 'flex',
                                alignItems: 'center',
                                maxWidth: '100%',
                            },
                            anchorLink: {
                                padding: '0px 8px 0 4px',
                                textRendering: 'auto',
                                color: 'inherit',
                                letterSpacing: 'normal',
                                wordSpacing: 'normal',
                                textTransform: 'none',
                                textIndent: '0px',
                                textShadow: 'none',
                                textDecoration: 'none',
                                boxSizing: 'border-box',
                            },
                            label: {
                                margin: '0 4px',
                                verticalAlign: 'middle',
                                display: 'inline-block',
                                flexGrow: '1',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                            },
                            secondaryText: {
                                color: e.palette.neutralSecondary,
                                paddingLeft: '20px',
                                textAlign: 'right',
                            },
                            icon: {
                                display: 'inline-block',
                                minHeight: '1px',
                                maxHeight: L,
                                fontSize: B.ld.medium,
                                width: B.ld.medium,
                                margin: '0 4px',
                                verticalAlign: 'middle',
                                flexShrink: '0',
                                selectors:
                                    ((i = {}),
                                    (i[A] = {
                                        fontSize: B.ld.large,
                                        width: B.ld.large,
                                    }),
                                    i),
                            },
                            iconColor: {color: a.menuIcon},
                            iconDisabled: {color: a.disabledBodyText},
                            checkmarkIcon: {color: a.bodySubtext},
                            subMenuIcon: {
                                height: L,
                                lineHeight: L,
                                color: c.neutralSecondary,
                                textAlign: 'center',
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                flexShrink: '0',
                                fontSize: B.ld.small,
                                selectors:
                                    ((s = {
                                        ':hover': {color: c.neutralPrimary},
                                        ':active': {color: c.neutralPrimary},
                                    }),
                                    (s[A] = {fontSize: B.ld.medium}),
                                    s),
                            },
                            splitButtonFlexContainer: [
                                (0, B.GL)(e),
                                {
                                    display: 'flex',
                                    height: L,
                                    flexWrap: 'nowrap',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                },
                            ],
                        };
                    return (0, B.E$)(h);
                }),
                W = o(98289),
                K = '28px',
                q = (0, B.sK)(0, B.yp),
                z = (0, p.NF)(function (e) {
                    var t;
                    return (0, B.ZC)(H(e), {
                        wrapper: {
                            position: 'absolute',
                            right: 28,
                            selectors: ((t = {}), (t[q] = {right: 32}), t),
                        },
                        divider: {height: 16, width: 1},
                    });
                }),
                J = {
                    item: 'ms-ContextualMenu-item',
                    divider: 'ms-ContextualMenu-divider',
                    root: 'ms-ContextualMenu-link',
                    isChecked: 'is-checked',
                    isExpanded: 'is-expanded',
                    isDisabled: 'is-disabled',
                    linkContent: 'ms-ContextualMenu-linkContent',
                    linkContentMenu: 'ms-ContextualMenu-linkContent',
                    icon: 'ms-ContextualMenu-icon',
                    iconColor: 'ms-ContextualMenu-iconColor',
                    checkmarkIcon: 'ms-ContextualMenu-checkmarkIcon',
                    subMenuIcon: 'ms-ContextualMenu-submenuIcon',
                    label: 'ms-ContextualMenu-itemText',
                    secondaryText: 'ms-ContextualMenu-secondaryText',
                    splitMenu: 'ms-ContextualMenu-splitMenu',
                    screenReaderText: 'ms-ContextualMenu-screenReaderText',
                },
                G = (0, p.NF)(function (e, t, o, n, r, i, s, a, l, c, d, u) {
                    var p,
                        m,
                        h,
                        f,
                        v = V(e),
                        b = (0, B.Cn)(J, e);
                    return (0, B.ZC)({
                        item: [b.item, v.item, s],
                        divider: [b.divider, v.divider, a],
                        root: [
                            b.root,
                            v.root,
                            n && [b.isChecked, v.rootChecked],
                            r && v.anchorLink,
                            o && [b.isExpanded, v.rootExpanded],
                            t && [b.isDisabled, v.rootDisabled],
                            !t &&
                                !o && [
                                    {
                                        selectors:
                                            ((p = {
                                                ':hover': v.rootHovered,
                                                ':active': v.rootPressed,
                                            }),
                                            (p[
                                                '.'
                                                    .concat(W.G$, ' &:focus, .')
                                                    .concat(
                                                        W.G$,
                                                        ' &:focus:hover'
                                                    )
                                            ] = v.rootFocused),
                                            (p['.'.concat(W.G$, ' &:hover')] = {
                                                background: 'inherit;',
                                            }),
                                            p),
                                    },
                                ],
                            u,
                        ],
                        splitPrimary: [
                            v.root,
                            {width: 'calc(100% - '.concat(K, ')')},
                            n && ['is-checked', v.rootChecked],
                            (t || d) && ['is-disabled', v.rootDisabled],
                            !(t || d) &&
                                !n && [
                                    {
                                        selectors:
                                            ((m = {':hover': v.rootHovered}),
                                            (m[
                                                ':hover ~ .'.concat(b.splitMenu)
                                            ] = v.rootHovered),
                                            (m[':active'] = v.rootPressed),
                                            (m[
                                                '.'
                                                    .concat(W.G$, ' &:focus, .')
                                                    .concat(
                                                        W.G$,
                                                        ' &:focus:hover'
                                                    )
                                            ] = v.rootFocused),
                                            (m['.'.concat(W.G$, ' &:hover')] = {
                                                background: 'inherit;',
                                            }),
                                            m),
                                    },
                                ],
                        ],
                        splitMenu: [
                            b.splitMenu,
                            v.root,
                            {flexBasis: '0', padding: '0 8px', minWidth: K},
                            o && ['is-expanded', v.rootExpanded],
                            t && ['is-disabled', v.rootDisabled],
                            !t &&
                                !o && [
                                    {
                                        selectors:
                                            ((h = {
                                                ':hover': v.rootHovered,
                                                ':active': v.rootPressed,
                                            }),
                                            (h[
                                                '.'
                                                    .concat(W.G$, ' &:focus, .')
                                                    .concat(
                                                        W.G$,
                                                        ' &:focus:hover'
                                                    )
                                            ] = v.rootFocused),
                                            (h['.'.concat(W.G$, ' &:hover')] = {
                                                background: 'inherit;',
                                            }),
                                            h),
                                    },
                                ],
                        ],
                        anchorLink: v.anchorLink,
                        linkContent: [b.linkContent, v.linkContent],
                        linkContentMenu: [
                            b.linkContentMenu,
                            v.linkContent,
                            {justifyContent: 'center'},
                        ],
                        icon: [
                            b.icon,
                            i && v.iconColor,
                            v.icon,
                            l,
                            t && [b.isDisabled, v.iconDisabled],
                        ],
                        iconColor: v.iconColor,
                        checkmarkIcon: [
                            b.checkmarkIcon,
                            i && v.checkmarkIcon,
                            v.icon,
                            l,
                        ],
                        subMenuIcon: [
                            b.subMenuIcon,
                            v.subMenuIcon,
                            c,
                            o && {color: e.palette.neutralPrimary},
                            t && [v.iconDisabled],
                        ],
                        label: [b.label, v.label],
                        secondaryText: [b.secondaryText, v.secondaryText],
                        splitContainer: [
                            v.splitButtonFlexContainer,
                            !t &&
                                !n && [
                                    {
                                        selectors:
                                            ((f = {}),
                                            (f[
                                                '.'
                                                    .concat(W.G$, ' &:focus, .')
                                                    .concat(
                                                        W.G$,
                                                        ' &:focus:hover'
                                                    )
                                            ] = v.rootFocused),
                                            f),
                                    },
                                ],
                        ],
                        screenReaderText: [
                            b.screenReaderText,
                            v.screenReaderText,
                            B.ul,
                            {visibility: 'hidden'},
                        ],
                    });
                }),
                U = function (e) {
                    var t = e.theme,
                        o = e.disabled,
                        n = e.expanded,
                        r = e.checked,
                        i = e.isAnchorLink,
                        s = e.knownIcon,
                        a = e.itemClassName,
                        l = e.dividerClassName,
                        c = e.iconClassName,
                        d = e.subMenuClassName,
                        u = e.primaryDisabled,
                        p = e.className;
                    return G(t, o, n, r, i, s, a, l, c, d, u, p);
                },
                Z = (0, s.z)(R, U, void 0, {scope: 'ContextualMenuItem'}),
                $ = o(83510),
                j = o(93484),
                Y = (function (e) {
                    function t(t) {
                        var o = e.call(this, t) || this;
                        return (
                            (o._onItemMouseEnter = function (e) {
                                var t = o.props,
                                    n = t.item,
                                    r = t.onItemMouseEnter;
                                r && r(n, e, e.currentTarget);
                            }),
                            (o._onItemClick = function (e) {
                                var t = o.props,
                                    n = t.item,
                                    r = t.onItemClickBase;
                                r && r(n, e, e.currentTarget);
                            }),
                            (o._onItemMouseLeave = function (e) {
                                var t = o.props,
                                    n = t.item,
                                    r = t.onItemMouseLeave;
                                r && r(n, e);
                            }),
                            (o._onItemKeyDown = function (e) {
                                var t = o.props,
                                    n = t.item,
                                    r = t.onItemKeyDown;
                                r && r(n, e);
                            }),
                            (o._onItemMouseMove = function (e) {
                                var t = o.props,
                                    n = t.item,
                                    r = t.onItemMouseMove;
                                r && r(n, e, e.currentTarget);
                            }),
                            (o._getSubmenuTarget = function () {}),
                            (0, w.l)(o),
                            o
                        );
                    }
                    return (
                        (0, r.ZT)(t, e),
                        (t.prototype.shouldComponentUpdate = function (e) {
                            return !(0, h.Vv)(e, this.props);
                        }),
                        t
                    );
                })(i.Component),
                X = o(57174),
                Q = (function (e) {
                    function t() {
                        var t =
                            (null !== e && e.apply(this, arguments)) || this;
                        return (
                            (t._anchor = i.createRef()),
                            (t._getMemoizedMenuButtonKeytipProps = (0, p.NF)(
                                function (e) {
                                    return (0, r.pi)((0, r.pi)({}, e), {
                                        hasMenu: !0,
                                    });
                                }
                            )),
                            (t._getSubmenuTarget = function () {
                                return t._anchor.current
                                    ? t._anchor.current
                                    : void 0;
                            }),
                            (t._onItemClick = function (e) {
                                var o = t.props,
                                    n = o.item,
                                    r = o.onItemClick;
                                r && r(n, e);
                            }),
                            (t._renderAriaDescription = function (e, o) {
                                return e
                                    ? i.createElement(
                                          'span',
                                          {
                                              id: t._ariaDescriptionId,
                                              className: o,
                                          },
                                          e
                                      )
                                    : null;
                            }),
                            t
                        );
                    }
                    return (
                        (0, r.ZT)(t, e),
                        (t.prototype.render = function () {
                            var e = this,
                                t = this.props,
                                o = t.item,
                                n = t.classNames,
                                s = t.index,
                                a = t.focusableElementIndex,
                                l = t.totalItemCount,
                                c = t.hasCheckmarks,
                                d = t.hasIcons,
                                u = t.expandedMenuItemKey,
                                p = t.onItemClick,
                                m = t.openSubMenu,
                                h = t.dismissSubMenu,
                                f = t.dismissMenu,
                                v = Z;
                            this.props.item.contextualMenuItemAs &&
                                (v = (0, y.Z)(
                                    this.props.item.contextualMenuItemAs,
                                    v
                                )),
                                this.props.contextualMenuItemAs &&
                                    (v = (0, y.Z)(
                                        this.props.contextualMenuItemAs,
                                        v
                                    ));
                            var b = o.rel;
                            o.target &&
                                '_blank' === o.target.toLowerCase() &&
                                (b = b || 'nofollow noopener noreferrer');
                            var g = (0, S.Df)(o),
                                _ = (0, C.pq)(o, C.h2),
                                x = (0, S.P_)(o),
                                I = o.itemProps,
                                k = o.ariaDescription,
                                M = o.keytipProps;
                            M &&
                                g &&
                                (M = this._getMemoizedMenuButtonKeytipProps(M)),
                                k && (this._ariaDescriptionId = (0, $.z)());
                            var w = (0, j.I)(
                                    o.ariaDescribedBy,
                                    k ? this._ariaDescriptionId : void 0,
                                    _['aria-describedby']
                                ),
                                D = {'aria-describedby': w};
                            return i.createElement(
                                'div',
                                null,
                                i.createElement(
                                    X.a,
                                    {
                                        keytipProps: o.keytipProps,
                                        ariaDescribedBy: w,
                                        disabled: x,
                                    },
                                    function (t) {
                                        return i.createElement(
                                            'a',
                                            (0, r.pi)({}, D, _, t, {
                                                ref: e._anchor,
                                                href: o.href,
                                                target: o.target,
                                                rel: b,
                                                className: n.root,
                                                role: 'menuitem',
                                                'aria-haspopup': g || void 0,
                                                'aria-expanded': g
                                                    ? o.key === u
                                                    : void 0,
                                                'aria-posinset': a + 1,
                                                'aria-setsize': l,
                                                'aria-disabled': (0, S.P_)(o),
                                                style: o.style,
                                                onClick: e._onItemClick,
                                                onMouseEnter:
                                                    e._onItemMouseEnter,
                                                onMouseLeave:
                                                    e._onItemMouseLeave,
                                                onMouseMove: e._onItemMouseMove,
                                                onKeyDown: g
                                                    ? e._onItemKeyDown
                                                    : void 0,
                                            }),
                                            i.createElement(
                                                v,
                                                (0, r.pi)(
                                                    {
                                                        componentRef:
                                                            o.componentRef,
                                                        item: o,
                                                        classNames: n,
                                                        index: s,
                                                        onCheckmarkClick:
                                                            c && p ? p : void 0,
                                                        hasIcons: d,
                                                        openSubMenu: m,
                                                        dismissSubMenu: h,
                                                        dismissMenu: f,
                                                        getSubmenuTarget:
                                                            e._getSubmenuTarget,
                                                    },
                                                    I
                                                )
                                            ),
                                            e._renderAriaDescription(
                                                k,
                                                n.screenReaderText
                                            )
                                        );
                                    }
                                )
                            );
                        }),
                        t
                    );
                })(Y),
                ee = o(33010),
                te = o(60702),
                oe = (0, u.y)(),
                ne = i.forwardRef(function (e, t) {
                    var o = e.styles,
                        n = e.theme,
                        r = e.getClassNames,
                        s = e.className,
                        a = oe(o, {theme: n, getClassNames: r, className: s});
                    return i.createElement(
                        'span',
                        {className: a.wrapper, ref: t},
                        i.createElement('span', {className: a.divider})
                    );
                });
            ne.displayName = 'VerticalDividerBase';
            var re = (0, s.z)(
                    ne,
                    function (e) {
                        var t = e.theme,
                            o = e.getClassNames,
                            n = e.className;
                        if (!t) throw new Error('Theme is undefined or null.');
                        if (o) {
                            var r = o(t);
                            return {wrapper: [r.wrapper], divider: [r.divider]};
                        }
                        return {
                            wrapper: [
                                {
                                    display: 'inline-flex',
                                    height: '100%',
                                    alignItems: 'center',
                                },
                                n,
                            ],
                            divider: [
                                {
                                    width: 1,
                                    height: '100%',
                                    backgroundColor:
                                        t.palette.neutralTertiaryAlt,
                                },
                            ],
                        };
                    },
                    void 0,
                    {scope: 'VerticalDivider'}
                ),
                ie = (function (e) {
                    function t(t) {
                        var o = e.call(this, t) || this;
                        return (
                            (o._getMemoizedMenuButtonKeytipProps = (0, p.NF)(
                                function (e) {
                                    return (0, r.pi)((0, r.pi)({}, e), {
                                        hasMenu: !0,
                                    });
                                }
                            )),
                            (o._onItemKeyDown = function (e) {
                                var t = o.props,
                                    n = t.item,
                                    r = t.onItemKeyDown;
                                e.which === v.m.enter
                                    ? (o._executeItemClick(e),
                                      e.preventDefault(),
                                      e.stopPropagation())
                                    : r && r(n, e);
                            }),
                            (o._getSubmenuTarget = function () {
                                return o._splitButton;
                            }),
                            (o._renderAriaDescription = function (e, t) {
                                return e
                                    ? i.createElement(
                                          'span',
                                          {
                                              id: o._ariaDescriptionId,
                                              className: t,
                                          },
                                          e
                                      )
                                    : null;
                            }),
                            (o._onItemMouseEnterPrimary = function (e) {
                                var t = o.props,
                                    n = t.item,
                                    i = t.onItemMouseEnter;
                                i &&
                                    i(
                                        (0, r.pi)((0, r.pi)({}, n), {
                                            subMenuProps: void 0,
                                            items: void 0,
                                        }),
                                        e,
                                        o._splitButton
                                    );
                            }),
                            (o._onItemMouseEnterIcon = function (e) {
                                var t = o.props,
                                    n = t.item,
                                    r = t.onItemMouseEnter;
                                r && r(n, e, o._splitButton);
                            }),
                            (o._onItemMouseMovePrimary = function (e) {
                                var t = o.props,
                                    n = t.item,
                                    i = t.onItemMouseMove;
                                i &&
                                    i(
                                        (0, r.pi)((0, r.pi)({}, n), {
                                            subMenuProps: void 0,
                                            items: void 0,
                                        }),
                                        e,
                                        o._splitButton
                                    );
                            }),
                            (o._onItemMouseMoveIcon = function (e) {
                                var t = o.props,
                                    n = t.item,
                                    r = t.onItemMouseMove;
                                r && r(n, e, o._splitButton);
                            }),
                            (o._onIconItemClick = function (e) {
                                var t = o.props,
                                    n = t.item,
                                    r = t.onItemClickBase;
                                r &&
                                    r(
                                        n,
                                        e,
                                        o._splitButton
                                            ? o._splitButton
                                            : e.currentTarget
                                    );
                            }),
                            (o._executeItemClick = function (e) {
                                var t = o.props,
                                    n = t.item,
                                    r = t.executeItemClick,
                                    i = t.onItemClick;
                                if (!n.disabled && !n.isDisabled)
                                    return o._processingTouch &&
                                        !n.canCheck &&
                                        i
                                        ? i(n, e)
                                        : void (r && r(n, e));
                            }),
                            (o._onTouchStart = function (e) {
                                o._splitButton &&
                                    !('onpointerdown' in o._splitButton) &&
                                    o._handleTouchAndPointerEvent(e);
                            }),
                            (o._onPointerDown = function (e) {
                                'touch' === e.pointerType &&
                                    (o._handleTouchAndPointerEvent(e),
                                    e.preventDefault(),
                                    e.stopImmediatePropagation());
                            }),
                            (o._async = new ee.e(o)),
                            (o._events = new te.r(o)),
                            (o._dismissLabelId = (0, $.z)()),
                            o
                        );
                    }
                    return (
                        (0, r.ZT)(t, e),
                        (t.prototype.componentDidMount = function () {
                            this._splitButton &&
                                'onpointerdown' in this._splitButton &&
                                this._events.on(
                                    this._splitButton,
                                    'pointerdown',
                                    this._onPointerDown,
                                    !0
                                );
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            this._async.dispose(), this._events.dispose();
                        }),
                        (t.prototype.render = function () {
                            var e,
                                t = this,
                                o = this.props,
                                n = o.item,
                                s = o.classNames,
                                a = o.index,
                                l = o.focusableElementIndex,
                                c = o.totalItemCount,
                                d = o.hasCheckmarks,
                                u = o.hasIcons,
                                p = o.onItemMouseLeave,
                                m = o.expandedMenuItemKey,
                                h = (0, S.Df)(n),
                                f = n.keytipProps;
                            f &&
                                (f = this._getMemoizedMenuButtonKeytipProps(f));
                            var v = n.ariaDescription;
                            v && (this._ariaDescriptionId = (0, $.z)());
                            var b =
                                null !== (e = (0, S.E3)(n)) && void 0 !== e
                                    ? e
                                    : void 0;
                            return i.createElement(
                                X.a,
                                {keytipProps: f, disabled: (0, S.P_)(n)},
                                function (e) {
                                    return i.createElement(
                                        'div',
                                        {
                                            'data-ktp-target':
                                                e['data-ktp-target'],
                                            ref: function (e) {
                                                return (t._splitButton = e);
                                            },
                                            role: (0, S.JF)(n),
                                            'aria-label': n.ariaLabel,
                                            className: s.splitContainer,
                                            'aria-disabled': (0, S.P_)(n),
                                            'aria-expanded': h
                                                ? n.key === m
                                                : void 0,
                                            'aria-haspopup': !0,
                                            'aria-describedby': (0, j.I)(
                                                n.ariaDescribedBy,
                                                v
                                                    ? t._ariaDescriptionId
                                                    : void 0,
                                                e['aria-describedby']
                                            ),
                                            'aria-checked': b,
                                            'aria-posinset': l + 1,
                                            'aria-setsize': c,
                                            onMouseEnter:
                                                t._onItemMouseEnterPrimary,
                                            onMouseLeave: p
                                                ? p.bind(
                                                      t,
                                                      (0, r.pi)(
                                                          (0, r.pi)({}, n),
                                                          {
                                                              subMenuProps:
                                                                  null,
                                                              items: null,
                                                          }
                                                      )
                                                  )
                                                : void 0,
                                            onMouseMove:
                                                t._onItemMouseMovePrimary,
                                            onKeyDown: t._onItemKeyDown,
                                            onClick: t._executeItemClick,
                                            onTouchStart: t._onTouchStart,
                                            tabIndex: 0,
                                            'data-is-focusable': !0,
                                            'aria-roledescription':
                                                n['aria-roledescription'],
                                        },
                                        t._renderSplitPrimaryButton(
                                            n,
                                            s,
                                            a,
                                            d,
                                            u
                                        ),
                                        t._renderSplitDivider(n),
                                        t._renderSplitIconButton(n, s, a, e),
                                        t._renderAriaDescription(
                                            v,
                                            s.screenReaderText
                                        )
                                    );
                                }
                            );
                        }),
                        (t.prototype._renderSplitPrimaryButton = function (
                            e,
                            t,
                            o,
                            n,
                            s
                        ) {
                            var a = this.props,
                                l = a.contextualMenuItemAs,
                                c = void 0 === l ? Z : l,
                                d = a.onItemClick,
                                u = {
                                    key: e.key,
                                    disabled: (0, S.P_)(e) || e.primaryDisabled,
                                    name: e.name,
                                    text: e.text || e.name,
                                    secondaryText: e.secondaryText,
                                    className: t.splitPrimary,
                                    canCheck: e.canCheck,
                                    isChecked: e.isChecked,
                                    checked: e.checked,
                                    iconProps: e.iconProps,
                                    id: this._dismissLabelId,
                                    onRenderIcon: e.onRenderIcon,
                                    data: e.data,
                                    'data-is-focusable': !1,
                                },
                                p = e.itemProps;
                            return i.createElement(
                                'button',
                                (0, r.pi)({}, (0, C.pq)(u, C.Yq)),
                                i.createElement(
                                    c,
                                    (0, r.pi)(
                                        {
                                            'data-is-focusable': !1,
                                            item: u,
                                            classNames: t,
                                            index: o,
                                            onCheckmarkClick:
                                                n && d ? d : void 0,
                                            hasIcons: s,
                                        },
                                        p
                                    )
                                )
                            );
                        }),
                        (t.prototype._renderSplitDivider = function (e) {
                            var t =
                                e.getSplitButtonVerticalDividerClassNames || z;
                            return i.createElement(re, {getClassNames: t});
                        }),
                        (t.prototype._renderSplitIconButton = function (
                            e,
                            t,
                            o,
                            n
                        ) {
                            var s = this.props,
                                a = s.onItemMouseLeave,
                                l = s.onItemMouseDown,
                                c = s.openSubMenu,
                                d = s.dismissSubMenu,
                                u = s.dismissMenu,
                                p = Z;
                            this.props.item.contextualMenuItemAs &&
                                (p = (0, y.Z)(
                                    this.props.item.contextualMenuItemAs,
                                    p
                                )),
                                this.props.contextualMenuItemAs &&
                                    (p = (0, y.Z)(
                                        this.props.contextualMenuItemAs,
                                        p
                                    ));
                            var m = {
                                    onClick: this._onIconItemClick,
                                    disabled: (0, S.P_)(e),
                                    className: t.splitMenu,
                                    subMenuProps: e.subMenuProps,
                                    submenuIconProps: e.submenuIconProps,
                                    split: !0,
                                    key: e.key,
                                    'aria-labelledby': this._dismissLabelId,
                                },
                                h = (0, r.pi)(
                                    (0, r.pi)({}, (0, C.pq)(m, C.Yq)),
                                    {
                                        onMouseEnter:
                                            this._onItemMouseEnterIcon,
                                        onMouseLeave: a
                                            ? a.bind(this, e)
                                            : void 0,
                                        onMouseDown: function (t) {
                                            return l ? l(e, t) : void 0;
                                        },
                                        onMouseMove: this._onItemMouseMoveIcon,
                                        'data-is-focusable': !1,
                                        'data-ktp-execute-target':
                                            n['data-ktp-execute-target'],
                                        'aria-haspopup': !0,
                                    }
                                ),
                                f = e.itemProps;
                            return i.createElement(
                                'button',
                                (0, r.pi)({}, h),
                                i.createElement(
                                    p,
                                    (0, r.pi)(
                                        {
                                            componentRef: e.componentRef,
                                            item: m,
                                            classNames: t,
                                            index: o,
                                            hasIcons: !1,
                                            openSubMenu: c,
                                            dismissSubMenu: d,
                                            dismissMenu: u,
                                            getSubmenuTarget:
                                                this._getSubmenuTarget,
                                        },
                                        f
                                    )
                                )
                            );
                        }),
                        (t.prototype._handleTouchAndPointerEvent = function (
                            e
                        ) {
                            var t = this,
                                o = this.props.onTap;
                            o && o(e),
                                this._lastTouchTimeoutId &&
                                    (this._async.clearTimeout(
                                        this._lastTouchTimeoutId
                                    ),
                                    (this._lastTouchTimeoutId = void 0)),
                                (this._processingTouch = !0),
                                (this._lastTouchTimeoutId =
                                    this._async.setTimeout(function () {
                                        (t._processingTouch = !1),
                                            (t._lastTouchTimeoutId = void 0);
                                    }, 500));
                        }),
                        t
                    );
                })(Y),
                se = (function (e) {
                    function t() {
                        var t =
                            (null !== e && e.apply(this, arguments)) || this;
                        return (
                            (t._btn = i.createRef()),
                            (t._getMemoizedMenuButtonKeytipProps = (0, p.NF)(
                                function (e) {
                                    return (0, r.pi)((0, r.pi)({}, e), {
                                        hasMenu: !0,
                                    });
                                }
                            )),
                            (t._renderAriaDescription = function (e, o) {
                                return e
                                    ? i.createElement(
                                          'span',
                                          {
                                              id: t._ariaDescriptionId,
                                              className: o,
                                          },
                                          e
                                      )
                                    : null;
                            }),
                            (t._getSubmenuTarget = function () {
                                return t._btn.current ? t._btn.current : void 0;
                            }),
                            t
                        );
                    }
                    return (
                        (0, r.ZT)(t, e),
                        (t.prototype.render = function () {
                            var e = this,
                                t = this.props,
                                o = t.item,
                                n = t.classNames,
                                s = t.index,
                                a = t.focusableElementIndex,
                                l = t.totalItemCount,
                                c = t.hasCheckmarks,
                                d = t.hasIcons,
                                u = t.contextualMenuItemAs,
                                p = t.expandedMenuItemKey,
                                m = t.onItemMouseDown,
                                h = t.onItemClick,
                                f = t.openSubMenu,
                                v = t.dismissSubMenu,
                                b = t.dismissMenu,
                                g = Z;
                            o.contextualMenuItemAs &&
                                (g = (0, y.Z)(o.contextualMenuItemAs, g)),
                                u && (g = (0, y.Z)(u, g));
                            var _ = (0, S.E3)(o),
                                x = null !== _,
                                I = (0, S.JF)(o),
                                k = (0, S.Df)(o),
                                M = o.itemProps,
                                w = o.ariaLabel,
                                D = o.ariaDescription,
                                T = (0, C.pq)(o, C.Yq);
                            delete T.disabled;
                            var P = o.role || I;
                            D && (this._ariaDescriptionId = (0, $.z)());
                            var O = (0, j.I)(
                                    o.ariaDescribedBy,
                                    D ? this._ariaDescriptionId : void 0,
                                    T['aria-describedby']
                                ),
                                E = {
                                    className: n.root,
                                    onClick: this._onItemClick,
                                    onKeyDown: k ? this._onItemKeyDown : void 0,
                                    onMouseEnter: this._onItemMouseEnter,
                                    onMouseLeave: this._onItemMouseLeave,
                                    onMouseDown: function (e) {
                                        return m ? m(o, e) : void 0;
                                    },
                                    onMouseMove: this._onItemMouseMove,
                                    href: o.href,
                                    title: o.title,
                                    'aria-label': w,
                                    'aria-describedby': O,
                                    'aria-haspopup': k || void 0,
                                    'aria-expanded': k ? o.key === p : void 0,
                                    'aria-posinset': a + 1,
                                    'aria-setsize': l,
                                    'aria-disabled': (0, S.P_)(o),
                                    'aria-checked':
                                        ('menuitemcheckbox' !== P &&
                                            'menuitemradio' !== P) ||
                                        !x
                                            ? void 0
                                            : !!_,
                                    'aria-selected':
                                        'menuitem' === P && x ? !!_ : void 0,
                                    role: P,
                                    style: o.style,
                                },
                                N = o.keytipProps;
                            return (
                                N &&
                                    k &&
                                    (N =
                                        this._getMemoizedMenuButtonKeytipProps(
                                            N
                                        )),
                                i.createElement(
                                    X.a,
                                    {
                                        keytipProps: N,
                                        ariaDescribedBy: O,
                                        disabled: (0, S.P_)(o),
                                    },
                                    function (t) {
                                        return i.createElement(
                                            'button',
                                            (0, r.pi)({ref: e._btn}, T, E, t),
                                            i.createElement(
                                                g,
                                                (0, r.pi)(
                                                    {
                                                        componentRef:
                                                            o.componentRef,
                                                        item: o,
                                                        classNames: n,
                                                        index: s,
                                                        onCheckmarkClick:
                                                            c && h ? h : void 0,
                                                        hasIcons: d,
                                                        openSubMenu: f,
                                                        dismissSubMenu: v,
                                                        dismissMenu: b,
                                                        getSubmenuTarget:
                                                            e._getSubmenuTarget,
                                                    },
                                                    M
                                                )
                                            ),
                                            e._renderAriaDescription(
                                                D,
                                                n.screenReaderText
                                            )
                                        );
                                    }
                                )
                            );
                        }),
                        t
                    );
                })(Y),
                ae = o(85968),
                le = o(36626),
                ce = o(6906),
                de = o(56842),
                ue = o(96696),
                pe = o(92824),
                me = o(51444),
                he = o(44375),
                fe = o(40654),
                ve = (0, u.y)(),
                be = (0, u.y)(),
                ge = {
                    items: [],
                    shouldFocusOnMount: !0,
                    gapSpace: 0,
                    directionalHint: l.b.bottomAutoEdge,
                    beakWidth: 16,
                };
            function _e(e) {
                for (var t = 0, o = 0, r = e; o < r.length; o++) {
                    var i = r[o];
                    i.itemType !== n.Divider &&
                        i.itemType !== n.Header &&
                        (t += i.customOnRenderListLength
                            ? i.customOnRenderListLength
                            : 1);
                }
                return t;
            }
            function xe(e, t) {
                var o = null == t ? void 0 : t.target,
                    n = e.subMenuProps ? e.subMenuProps.items : e.items;
                if (n) {
                    for (var i = [], s = 0, a = n; s < a.length; s++) {
                        var l = a[s];
                        if (l.preferMenuTargetAsEventTarget) {
                            var c = l.onClick,
                                d = (0, r._T)(l, ['onClick']);
                            i.push(
                                (0, r.pi)((0, r.pi)({}, d), {onClick: Te(c, o)})
                            );
                        } else i.push(l);
                    }
                    return i;
                }
            }
            var ye = 'ContextualMenu',
                Ce = (0, p.NF)(function () {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    return function (t) {
                        return B.l7.apply(void 0, (0, r.ev)([t, U], e, !1));
                    };
                });
            function Ie(e, t) {
                var o = e.hidden,
                    n = e.items,
                    r = e.theme,
                    s = e.className,
                    a = e.id,
                    c = e.target,
                    d = i.useState(),
                    u = d[0],
                    p = d[1],
                    f = i.useState(),
                    v = f[0],
                    b = f[1],
                    g = i.useState(),
                    _ = g[0],
                    x = g[1],
                    y = (0, le.M)(ye, a),
                    C = i.useCallback(function () {
                        x(void 0), p(void 0), b(void 0);
                    }, []),
                    I = i.useCallback(
                        function (e, t, o) {
                            var n = e.key;
                            u !== n && (t.focus(), x(o), p(n), b(t));
                        },
                        [u]
                    );
                i.useEffect(
                    function () {
                        o && C();
                    },
                    [o, C]
                );
                var k = (function (e, t) {
                    var o = i.useRef(!1);
                    i.useEffect(function () {
                        return (
                            (o.current = !0),
                            function () {
                                o.current = !1;
                            }
                        );
                    }, []);
                    return function (n, r) {
                        r ? e(n, r) : o.current && t();
                    };
                })(t, C);
                return [
                    u,
                    I,
                    function () {
                        var e = De(u, n),
                            t = null;
                        if (
                            e &&
                            ((t = {
                                items: xe(e, {target: c}),
                                target: v,
                                onDismiss: k,
                                isSubMenu: !0,
                                id: y,
                                shouldFocusOnMount: !0,
                                shouldFocusOnContainer: _,
                                directionalHint: (0, m.zg)(r)
                                    ? l.b.leftTopEdge
                                    : l.b.rightTopEdge,
                                className: s,
                                gapSpace: 0,
                                isBeakVisible: !1,
                            }),
                            e.subMenuProps && (0, h.f0)(t, e.subMenuProps),
                            e.preferMenuTargetAsEventTarget)
                        ) {
                            var o = e.onItemClick;
                            t.onItemClick = Te(o, c);
                        }
                        return t;
                    },
                    k,
                ];
            }
            var ke = i.memo(
                i.forwardRef(function (e, t) {
                    var o,
                        s = (0, x.j)(ge, e),
                        a = (s.ref, (0, r._T)(s, ['ref'])),
                        l = i.useRef(null),
                        u = (0, de.r)(),
                        p = (0, le.M)(ye, a.id);
                    (0, ue.N)({
                        name: ye,
                        props: a,
                        deprecations: {getMenuClassNames: 'styles'},
                    });
                    var h = function (e, t) {
                            var o;
                            return null === (o = a.onDismiss) || void 0 === o
                                ? void 0
                                : o.call(a, e, t);
                        },
                        w = (0, pe.e)(a.target, l),
                        D = w[0],
                        T = w[1],
                        P = (function (e, t, o) {
                            var n = e.hidden,
                                r = e.onRestoreFocus,
                                s = i.useRef(),
                                a = i.useCallback(
                                    function (e) {
                                        var t, o;
                                        r
                                            ? r(e)
                                            : (null == e
                                                  ? void 0
                                                  : e.documentContainsFocus) &&
                                              (null ===
                                                  (o =
                                                      null ===
                                                          (t = s.current) ||
                                                      void 0 === t
                                                          ? void 0
                                                          : t.focus) ||
                                                  void 0 === o ||
                                                  o.call(t));
                                    },
                                    [r]
                                );
                            return (
                                (0, ce.L)(
                                    function () {
                                        var e, r;
                                        if (n)
                                            s.current &&
                                                (a({
                                                    originalElement: s.current,
                                                    containsFocus: !0,
                                                    documentContainsFocus:
                                                        (null ===
                                                            (r = (0, f.M)()) ||
                                                        void 0 === r
                                                            ? void 0
                                                            : r.hasFocus()) ||
                                                        !1,
                                                }),
                                                (s.current = void 0));
                                        else {
                                            var i =
                                                null == t
                                                    ? void 0
                                                    : t.document.activeElement;
                                            (null === (e = o.current) ||
                                            void 0 === e
                                                ? void 0
                                                : e.contains(i)) ||
                                                'BODY' === i.tagName ||
                                                (s.current = i);
                                        }
                                    },
                                    [
                                        n,
                                        null == t
                                            ? void 0
                                            : t.document.activeElement,
                                        a,
                                        o,
                                    ]
                                ),
                                [a]
                            );
                        })(a, T, l)[0],
                        O = Ie(a, h),
                        E = O[0],
                        N = O[1],
                        F = O[2],
                        R = O[3],
                        B = (function (e) {
                            var t = e.delayUpdateFocusOnHover,
                                o = e.hidden,
                                n = i.useRef(!t),
                                r = i.useRef(!1);
                            i.useEffect(
                                function () {
                                    (n.current = !t),
                                        (r.current = !o && !t && r.current);
                                },
                                [t, o]
                            );
                            var s = i.useCallback(
                                function () {
                                    t && (n.current = !1);
                                },
                                [t]
                            );
                            return [n, r, s];
                        })(a),
                        H = B[0],
                        L = B[1],
                        A = B[2],
                        V = (function (e) {
                            var t = i.useRef(!0),
                                o = i.useRef();
                            return [
                                function () {
                                    t.current || void 0 === o.current
                                        ? (t.current = !1)
                                        : (e.clearTimeout(o.current),
                                          (o.current = void 0)),
                                        (o.current = e.setTimeout(function () {
                                            t.current = !0;
                                        }, 250));
                                },
                                t,
                            ];
                        })(u),
                        W = V[0],
                        K = V[1],
                        q = (function (e, t) {
                            var o = e.subMenuHoverDelay,
                                n = void 0 === o ? 250 : o,
                                r = i.useRef(void 0),
                                s = function () {
                                    void 0 !== r.current &&
                                        (t.clearTimeout(r.current),
                                        (r.current = void 0));
                                };
                            return [
                                s,
                                function (e) {
                                    r.current = t.setTimeout(function () {
                                        e(), s();
                                    }, n);
                                },
                                r,
                            ];
                        })(a, u),
                        z = q[0],
                        J = q[1],
                        G = q[2],
                        U = (0, me.q)(l, a.responsiveMode);
                    !(function (e, t) {
                        var o = e.hidden,
                            n = void 0 !== o && o,
                            r = e.onMenuDismissed,
                            s = e.onMenuOpened,
                            a = (0, ae.D)(n),
                            l = i.useRef(s),
                            c = i.useRef(r),
                            d = i.useRef(e);
                        (l.current = s),
                            (c.current = r),
                            (d.current = e),
                            i.useEffect(
                                function () {
                                    var e, t;
                                    n && !1 === a
                                        ? null === (e = c.current) ||
                                          void 0 === e ||
                                          e.call(c, d.current)
                                        : n ||
                                          !1 === a ||
                                          null === (t = l.current) ||
                                          void 0 === t ||
                                          t.call(l, d.current);
                                },
                                [n, a]
                            ),
                            i.useEffect(function () {
                                return function () {
                                    var e;
                                    return null === (e = c.current) ||
                                        void 0 === e
                                        ? void 0
                                        : e.call(c, d.current);
                                };
                            }, []);
                    })(a);
                    var $,
                        j = (function (e, t, o, n) {
                            var r = e.theme,
                                s = e.isSubMenu,
                                a = e.focusZoneProps,
                                l = void 0 === a ? {} : a,
                                d = l.checkForNoWrap,
                                u = l.direction,
                                p = void 0 === u ? c.U.vertical : u,
                                h = i.useRef(),
                                f = function (e, o, n) {
                                    var r = !1;
                                    return (
                                        o(e) &&
                                            (t(e, n),
                                            e.preventDefault(),
                                            e.stopPropagation(),
                                            (r = !0)),
                                        r
                                    );
                                },
                                x = function (e) {
                                    return (
                                        e.which === v.m.escape ||
                                        (function (e) {
                                            var t = (0, m.zg)(r)
                                                ? v.m.right
                                                : v.m.left;
                                            return !(
                                                e.which !== t ||
                                                !s ||
                                                (p !== c.U.vertical &&
                                                    (!d ||
                                                        (0, b.mM)(
                                                            e.target,
                                                            'data-no-horizontal-wrap'
                                                        )))
                                            );
                                        })(e) ||
                                        (e.which === v.m.up &&
                                            (e.altKey || e.metaKey))
                                    );
                                },
                                y = function (e) {
                                    h.current = Se(e);
                                    var t =
                                        e.which === v.m.escape &&
                                        ((0, g.V)() || (0, _.g)());
                                    return f(e, x, t);
                                },
                                C = function (e) {
                                    var t = h.current && Se(e);
                                    return (
                                        (h.current = !1),
                                        !!t && !((0, _.g)() || (0, g.V)())
                                    );
                                };
                            return [
                                y,
                                function (e) {
                                    return f(e, C, !0);
                                },
                                function (e) {
                                    if (!y(e) && o.current) {
                                        var t = !(!e.altKey && !e.metaKey),
                                            n = e.which === v.m.up,
                                            r = e.which === v.m.down;
                                        if (!t && (n || r)) {
                                            var i = n
                                                ? (0, b.TE)(
                                                      o.current,
                                                      o.current.lastChild,
                                                      !0
                                                  )
                                                : (0, b.ft)(
                                                      o.current,
                                                      o.current.firstChild,
                                                      !0
                                                  );
                                            i &&
                                                (i.focus(),
                                                e.preventDefault(),
                                                e.stopPropagation());
                                        }
                                    }
                                },
                                function (e, t) {
                                    var o = (0, m.zg)(r) ? v.m.left : v.m.right;
                                    e.disabled ||
                                        (t.which !== o &&
                                            t.which !== v.m.enter &&
                                            (t.which !== v.m.down ||
                                                (!t.altKey && !t.metaKey))) ||
                                        (n(e, t.currentTarget),
                                        t.preventDefault());
                                },
                            ];
                        })(a, h, l, N),
                        Y = j[0],
                        X = j[1],
                        ee = j[2],
                        te = j[3],
                        oe = (function (e, t, o, n, r, i, s, a, l, c, d, u, p) {
                            var m = e.target,
                                h = function () {
                                    return !t.current || !i.current;
                                },
                                f = function (e, t, o) {
                                    var n = o || t.currentTarget;
                                    e.key !== s &&
                                        (c(),
                                        void 0 === s && n.focus(),
                                        (0, S.Df)(e)
                                            ? (t.stopPropagation(),
                                              l(function () {
                                                  n.focus(), d(e, n, !0);
                                              }))
                                            : l(function () {
                                                  u(t), n.focus();
                                              }));
                                },
                                v = function (t, o, n) {
                                    var r = xe(t, {target: m});
                                    if (
                                        (c(), (0, S.Df)(t) || (r && r.length))
                                    ) {
                                        if (t.key !== s) {
                                            var i =
                                                'boolean' ==
                                                typeof e.shouldFocusOnContainer
                                                    ? e.shouldFocusOnContainer
                                                    : 'mouse' ===
                                                      o.nativeEvent.pointerType;
                                            d(t, n, i);
                                        }
                                    } else b(t, o);
                                    o.stopPropagation(), o.preventDefault();
                                },
                                b = function (t, o) {
                                    if (!t.disabled && !t.isDisabled) {
                                        t.preferMenuTargetAsEventTarget &&
                                            Pe(o, m);
                                        var n = !1;
                                        t.onClick
                                            ? (n = !!t.onClick(o, t))
                                            : e.onItemClick &&
                                              (n = !!e.onItemClick(o, t)),
                                            (!n && o.defaultPrevented) ||
                                                p(o, !0);
                                    }
                                };
                            return [
                                function (e, t, o) {
                                    r.current && (i.current = !0),
                                        h() || f(e, t, o);
                                },
                                function (e, s, a) {
                                    var l = s.currentTarget;
                                    r.current &&
                                        ((i.current = !0),
                                        t.current &&
                                            void 0 === o.current &&
                                            l !==
                                                (null == n
                                                    ? void 0
                                                    : n.document
                                                          .activeElement) &&
                                            f(e, s, a));
                                },
                                function (e, t) {
                                    var o;
                                    if (!h() && (c(), void 0 === s))
                                        if (a.current.setActive)
                                            try {
                                                a.current.setActive();
                                            } catch (e) {}
                                        else
                                            null === (o = a.current) ||
                                                void 0 === o ||
                                                o.focus();
                                },
                                function (e, t) {
                                    v(e, t, t.currentTarget);
                                },
                                function (e, t) {
                                    b(e, t), t.stopPropagation();
                                },
                                b,
                                v,
                            ];
                        })(a, K, G, T, H, L, E, l, J, z, N, R, h),
                        ne = oe[0],
                        re = oe[1],
                        ke = oe[2],
                        De = oe[3],
                        Te = oe[4],
                        Oe = oe[5],
                        Ee = oe[6],
                        Ne = function (e, t, o) {
                            var r = 0,
                                s = e.items,
                                a = e.totalItemCount,
                                l = e.hasCheckmarks,
                                c = e.hasIcons;
                            return i.createElement(
                                'ul',
                                {
                                    className: t.list,
                                    onKeyDown: Y,
                                    onKeyUp: X,
                                    role: 'presentation',
                                },
                                s.map(function (e, o) {
                                    var i = Fe(e, o, r, a, l, c, t);
                                    if (
                                        e.itemType !== n.Divider &&
                                        e.itemType !== n.Header
                                    ) {
                                        var s = e.customOnRenderListLength
                                            ? e.customOnRenderListLength
                                            : 1;
                                        r += s;
                                    }
                                    return i;
                                })
                            );
                        },
                        Fe = function (e, t, o, r, s, l, c) {
                            var d,
                                u,
                                p = [],
                                m = e.iconProps || {iconName: 'None'},
                                h = e.getItemClassNames,
                                f = e.itemProps,
                                v = f ? f.styles : void 0,
                                b =
                                    e.itemType === n.Divider
                                        ? e.className
                                        : void 0,
                                g = e.submenuIconProps
                                    ? e.submenuIconProps.className
                                    : '';
                            if (h)
                                u = h(
                                    a.theme,
                                    (0, S.P_)(e),
                                    E === e.key,
                                    !!(0, S.E3)(e),
                                    !!e.href,
                                    'None' !== m.iconName,
                                    e.className,
                                    b,
                                    m.className,
                                    g,
                                    e.primaryDisabled
                                );
                            else {
                                var _ = {
                                    theme: a.theme,
                                    disabled: (0, S.P_)(e),
                                    expanded: E === e.key,
                                    checked: !!(0, S.E3)(e),
                                    isAnchorLink: !!e.href,
                                    knownIcon: 'None' !== m.iconName,
                                    itemClassName: e.className,
                                    dividerClassName: b,
                                    iconClassName: m.className,
                                    subMenuClassName: g,
                                    primaryDisabled: e.primaryDisabled,
                                };
                                u = be(
                                    Ce(
                                        null === (d = c.subComponentStyles) ||
                                            void 0 === d
                                            ? void 0
                                            : d.menuItem,
                                        v
                                    ),
                                    _
                                );
                            }
                            switch (
                                (('-' !== e.text && '-' !== e.name) ||
                                    (e.itemType = n.Divider),
                                e.itemType)
                            ) {
                                case n.Divider:
                                    p.push(He(t, u));
                                    break;
                                case n.Header:
                                    p.push(He(t, u));
                                    var x = Ae(e, u, c, t, s, l);
                                    p.push(Be(x, e.key || t, u, e.title));
                                    break;
                                case n.Section:
                                    p.push(Re(e, u, c, t, s, l));
                                    break;
                                default:
                                    var y = function () {
                                            return Le(e, u, t, o, r, s, l);
                                        },
                                        C = a.onRenderContextualMenuItem
                                            ? a.onRenderContextualMenuItem(e, y)
                                            : y();
                                    p.push(Be(C, e.key || t, u, e.title));
                            }
                            return i.createElement(i.Fragment, {key: e.key}, p);
                        },
                        Re = function (e, t, o, s, a, l) {
                            var c = e.sectionProps;
                            if (c) {
                                var d, u;
                                if (c.title) {
                                    var m = void 0,
                                        h = '';
                                    if ('string' == typeof c.title) {
                                        var f = p + c.title.replace(/\s/g, '');
                                        (m = {
                                            key: 'section-'.concat(
                                                c.title,
                                                '-title'
                                            ),
                                            itemType: n.Header,
                                            text: c.title,
                                            id: f,
                                        }),
                                            (h = f);
                                    } else {
                                        var v =
                                            c.title.id ||
                                            p + c.title.key.replace(/\s/g, '');
                                        (m = (0, r.pi)((0, r.pi)({}, c.title), {
                                            id: v,
                                        })),
                                            (h = v);
                                    }
                                    m &&
                                        ((u = {
                                            role: 'group',
                                            'aria-labelledby': h,
                                        }),
                                        (d = Ae(m, t, o, s, a, l)));
                                }
                                if (c.items && c.items.length > 0) {
                                    var b = 0;
                                    return i.createElement(
                                        'li',
                                        {
                                            role: 'presentation',
                                            key:
                                                c.key ||
                                                e.key ||
                                                'section-'.concat(s),
                                        },
                                        i.createElement(
                                            'div',
                                            (0, r.pi)({}, u),
                                            i.createElement(
                                                'ul',
                                                {
                                                    className: o.list,
                                                    role: 'presentation',
                                                },
                                                c.topDivider &&
                                                    He(s, t, !0, !0),
                                                d &&
                                                    Be(
                                                        d,
                                                        e.key || s,
                                                        t,
                                                        e.title
                                                    ),
                                                c.items.map(function (e, t) {
                                                    var r = Fe(
                                                        e,
                                                        t,
                                                        b,
                                                        _e(c.items),
                                                        a,
                                                        l,
                                                        o
                                                    );
                                                    if (
                                                        e.itemType !==
                                                            n.Divider &&
                                                        e.itemType !== n.Header
                                                    ) {
                                                        var i =
                                                            e.customOnRenderListLength
                                                                ? e.customOnRenderListLength
                                                                : 1;
                                                        b += i;
                                                    }
                                                    return r;
                                                }),
                                                c.bottomDivider &&
                                                    He(s, t, !1, !0)
                                            )
                                        )
                                    );
                                }
                            }
                        },
                        Be = function (e, t, o, n) {
                            return i.createElement(
                                'li',
                                {
                                    role: 'presentation',
                                    title: n,
                                    key: t,
                                    className: o.item,
                                },
                                e
                            );
                        },
                        He = function (e, t, o, n) {
                            return n || e > 0
                                ? i.createElement('li', {
                                      role: 'separator',
                                      key:
                                          'separator-' +
                                          e +
                                          (void 0 === o
                                              ? ''
                                              : o
                                                ? '-top'
                                                : '-bottom'),
                                      className: t.divider,
                                      'aria-hidden': 'true',
                                  })
                                : null;
                        },
                        Le = function (e, t, o, n, s, l, c) {
                            if (e.onRender)
                                return e.onRender(
                                    (0, r.pi)(
                                        {
                                            'aria-posinset': n + 1,
                                            'aria-setsize': s,
                                        },
                                        e
                                    ),
                                    h
                                );
                            var d = {
                                item: e,
                                classNames: t,
                                index: o,
                                focusableElementIndex: n,
                                totalItemCount: s,
                                hasCheckmarks: l,
                                hasIcons: c,
                                contextualMenuItemAs: a.contextualMenuItemAs,
                                onItemMouseEnter: ne,
                                onItemMouseLeave: ke,
                                onItemMouseMove: re,
                                onItemMouseDown: Me,
                                executeItemClick: Oe,
                                onItemKeyDown: te,
                                expandedMenuItemKey: E,
                                openSubMenu: N,
                                dismissSubMenu: R,
                                dismissMenu: h,
                            };
                            if (e.href) {
                                var u = Q;
                                return (
                                    e.contextualMenuItemWrapperAs &&
                                        (u = (0, y.Z)(
                                            e.contextualMenuItemWrapperAs,
                                            u
                                        )),
                                    i.createElement(
                                        u,
                                        (0, r.pi)({}, d, {onItemClick: Te})
                                    )
                                );
                            }
                            if (e.split && (0, S.Df)(e)) {
                                var p = ie;
                                return (
                                    e.contextualMenuItemWrapperAs &&
                                        (p = (0, y.Z)(
                                            e.contextualMenuItemWrapperAs,
                                            p
                                        )),
                                    i.createElement(
                                        p,
                                        (0, r.pi)({}, d, {
                                            onItemClick: De,
                                            onItemClickBase: Ee,
                                            onTap: z,
                                        })
                                    )
                                );
                            }
                            var m = se;
                            return (
                                e.contextualMenuItemWrapperAs &&
                                    (m = (0, y.Z)(
                                        e.contextualMenuItemWrapperAs,
                                        m
                                    )),
                                i.createElement(
                                    m,
                                    (0, r.pi)({}, d, {
                                        onItemClick: De,
                                        onItemClickBase: Ee,
                                    })
                                )
                            );
                        },
                        Ae = function (e, t, o, n, s, l) {
                            var c = Z;
                            e.contextualMenuItemAs &&
                                (c = (0, y.Z)(e.contextualMenuItemAs, c)),
                                a.contextualMenuItemAs &&
                                    (c = (0, y.Z)(a.contextualMenuItemAs, c));
                            var d = e.itemProps,
                                u = e.id,
                                p = d && (0, C.pq)(d, C.n7);
                            return i.createElement(
                                'div',
                                (0, r.pi)({id: u, className: o.header}, p, {
                                    style: e.style,
                                }),
                                i.createElement(
                                    c,
                                    (0, r.pi)(
                                        {
                                            item: e,
                                            classNames: t,
                                            index: n,
                                            onCheckmarkClick: s ? De : void 0,
                                            hasIcons: l,
                                        },
                                        d
                                    )
                                )
                            );
                        },
                        Ve = a.isBeakVisible,
                        We = a.items,
                        Ke = a.labelElementId,
                        qe = a.id,
                        ze = a.className,
                        Je = a.beakWidth,
                        Ge = a.directionalHint,
                        Ue = a.directionalHintForRTL,
                        Ze = a.alignTargetEdge,
                        $e = a.gapSpace,
                        je = a.coverTarget,
                        Ye = a.ariaLabel,
                        Xe = a.doNotLayer,
                        Qe = a.target,
                        et = a.bounds,
                        tt = a.useTargetWidth,
                        ot = a.useTargetAsMinWidth,
                        nt = a.directionalHintFixed,
                        rt = a.shouldFocusOnMount,
                        it = a.shouldFocusOnContainer,
                        st = a.title,
                        at = a.styles,
                        lt = a.theme,
                        ct = a.calloutProps,
                        dt = a.onRenderSubMenu,
                        ut = void 0 === dt ? we : dt,
                        pt = a.onRenderMenuList,
                        mt =
                            void 0 === pt
                                ? function (e, t) {
                                      return Ne(e, vt);
                                  }
                                : pt,
                        ht = a.focusZoneProps,
                        ft = a.getMenuClassNames,
                        vt = ft
                            ? ft(lt, ze)
                            : ve(at, {theme: lt, className: ze}),
                        bt = (function e(t) {
                            for (var o = 0, r = t; o < r.length; o++) {
                                var i = r[o];
                                if (i.iconProps) return !0;
                                if (
                                    i.itemType === n.Section &&
                                    i.sectionProps &&
                                    e(i.sectionProps.items)
                                )
                                    return !0;
                            }
                            return !1;
                        })(We),
                        gt = (0, r.pi)(
                            (0, r.pi)(
                                {
                                    direction: c.U.vertical,
                                    handleTabKey: c.J.all,
                                    isCircularNavigation: !0,
                                },
                                ht
                            ),
                            {
                                className: (0, I.i)(
                                    vt.root,
                                    null === (o = a.focusZoneProps) ||
                                        void 0 === o
                                        ? void 0
                                        : o.className
                                ),
                            }
                        ),
                        _t = (function (e) {
                            return e.some(function (e) {
                                return (
                                    !!e.canCheck ||
                                    !(
                                        !e.sectionProps ||
                                        !e.sectionProps.items.some(
                                            function (e) {
                                                return !0 === e.canCheck;
                                            }
                                        )
                                    )
                                );
                            });
                        })(We),
                        xt = E && !0 !== a.hidden ? F() : null;
                    Ve = void 0 === Ve ? U <= he.eD.medium : Ve;
                    var yt = D.current;
                    if ((tt || ot) && yt && yt.offsetWidth) {
                        var Ct = yt.getBoundingClientRect().width - 2;
                        tt ? ($ = {width: Ct}) : ot && ($ = {minWidth: Ct});
                    }
                    if (We && We.length > 0) {
                        var It = _e(We),
                            kt = vt.subComponentStyles
                                ? vt.subComponentStyles.callout
                                : void 0;
                        return i.createElement(
                            fe.p.Consumer,
                            null,
                            function (e) {
                                return i.createElement(
                                    M.U,
                                    (0, r.pi)(
                                        {styles: kt, onRestoreFocus: P},
                                        ct,
                                        {
                                            target: Qe || e.target,
                                            isBeakVisible: Ve,
                                            beakWidth: Je,
                                            directionalHint: Ge,
                                            directionalHintForRTL: Ue,
                                            gapSpace: $e,
                                            coverTarget: je,
                                            doNotLayer: Xe,
                                            className: (0, I.i)(
                                                'ms-ContextualMenu-Callout',
                                                ct && ct.className
                                            ),
                                            setInitialFocus: rt,
                                            onDismiss:
                                                a.onDismiss || e.onDismiss,
                                            onScroll: W,
                                            bounds: et,
                                            directionalHintFixed: nt,
                                            alignTargetEdge: Ze,
                                            hidden: a.hidden || e.hidden,
                                            ref: t,
                                        }
                                    ),
                                    i.createElement(
                                        'div',
                                        {
                                            style: $,
                                            ref: l,
                                            id: qe,
                                            className: vt.container,
                                            tabIndex: it ? 0 : -1,
                                            onKeyDown: ee,
                                            onKeyUp: X,
                                            onFocusCapture: A,
                                            'aria-label': Ye,
                                            'aria-labelledby': Ke,
                                            role: 'menu',
                                        },
                                        st &&
                                            i.createElement(
                                                'div',
                                                {className: vt.title},
                                                ' ',
                                                st,
                                                ' '
                                            ),
                                        We && We.length
                                            ? (function (e, t) {
                                                  var o = a.focusZoneAs,
                                                      n =
                                                          void 0 === o
                                                              ? d.k
                                                              : o;
                                                  return i.createElement(
                                                      n,
                                                      (0, r.pi)({}, t),
                                                      e
                                                  );
                                              })(
                                                  mt(
                                                      {
                                                          ariaLabel: Ye,
                                                          items: We,
                                                          totalItemCount: It,
                                                          hasCheckmarks: _t,
                                                          hasIcons: bt,
                                                          defaultMenuItemRenderer:
                                                              function (e) {
                                                                  return (function (
                                                                      e,
                                                                      t
                                                                  ) {
                                                                      var o =
                                                                              e.index,
                                                                          n =
                                                                              e.focusableElementIndex,
                                                                          r =
                                                                              e.totalItemCount,
                                                                          i =
                                                                              e.hasCheckmarks,
                                                                          s =
                                                                              e.hasIcons;
                                                                      return Fe(
                                                                          e,
                                                                          o,
                                                                          n,
                                                                          r,
                                                                          i,
                                                                          s,
                                                                          t
                                                                      );
                                                                  })(e, vt);
                                                              },
                                                          labelElementId: Ke,
                                                      },
                                                      function (e, t) {
                                                          return Ne(e, vt);
                                                      }
                                                  ),
                                                  gt
                                              )
                                            : null,
                                        xt && ut(xt, we)
                                    ),
                                    i.createElement(k.u, null)
                                );
                            }
                        );
                    }
                    return null;
                }),
                function (e, t) {
                    return (
                        !(t.shouldUpdateWhenHidden || !e.hidden || !t.hidden) ||
                        (0, h.Vv)(e, t)
                    );
                }
            );
            function Se(e) {
                return e.which === v.m.alt || 'Meta' === e.key;
            }
            function Me(e, t) {
                var o;
                null === (o = e.onMouseDown) || void 0 === o || o.call(e, e, t);
            }
            function we(e, t) {
                throw Error(
                    'ContextualMenuBase: onRenderSubMenu callback is null or undefined. Please ensure to set `onRenderSubMenu` property either manually or with `styled` helper.'
                );
            }
            function De(e, t) {
                for (var o = 0, r = t; o < r.length; o++) {
                    var i = r[o];
                    if (i.itemType === n.Section && i.sectionProps) {
                        var s = De(e, i.sectionProps.items);
                        if (s) return s;
                    } else if (i.key && i.key === e) return i;
                }
            }
            function Te(e, t) {
                return e
                    ? function (o, n) {
                          return Pe(o, t), e(o, n);
                      }
                    : e;
            }
            function Pe(e, t) {
                e &&
                    t &&
                    (e.persist(),
                    t instanceof Event
                        ? (e.target = t.target)
                        : t instanceof Element && (e.target = t));
            }
            ke.displayName = 'ContextualMenuBase';
            var Oe = {
                root: 'ms-ContextualMenu',
                container: 'ms-ContextualMenu-container',
                list: 'ms-ContextualMenu-list',
                header: 'ms-ContextualMenu-header',
                title: 'ms-ContextualMenu-title',
                isopen: 'is-open',
            };
            function Ee(e) {
                return i.createElement(Ne, (0, r.pi)({}, e));
            }
            var Ne = (0, s.z)(
                    ke,
                    function (e) {
                        var t = e.className,
                            o = e.theme,
                            n = (0, B.Cn)(Oe, o),
                            r = o.fonts,
                            i = o.semanticColors,
                            s = o.effects;
                        return {
                            root: [
                                o.fonts.medium,
                                n.root,
                                n.isopen,
                                {
                                    backgroundColor: i.menuBackground,
                                    minWidth: '180px',
                                },
                                t,
                            ],
                            container: [
                                n.container,
                                {selectors: {':focus': {outline: 0}}},
                            ],
                            list: [
                                n.list,
                                n.isopen,
                                {
                                    listStyleType: 'none',
                                    margin: '0',
                                    padding: '0',
                                },
                            ],
                            header: [
                                n.header,
                                r.small,
                                {
                                    fontWeight: B.lq.semibold,
                                    color: i.menuHeader,
                                    background: 'none',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    height: L,
                                    lineHeight: L,
                                    cursor: 'default',
                                    padding: '0px 6px',
                                    userSelect: 'none',
                                    textAlign: 'left',
                                },
                            ],
                            title: [
                                n.title,
                                {
                                    fontSize: r.mediumPlus.fontSize,
                                    paddingRight: '14px',
                                    paddingLeft: '14px',
                                    paddingBottom: '5px',
                                    paddingTop: '5px',
                                    backgroundColor:
                                        i.menuItemBackgroundPressed,
                                },
                            ],
                            subComponentStyles: {
                                callout: {root: {boxShadow: s.elevation8}},
                                menuItem: {},
                            },
                        };
                    },
                    function (e) {
                        return {
                            onRenderSubMenu: e.onRenderSubMenu
                                ? (0, a.k)(e.onRenderSubMenu, Ee)
                                : Ee,
                        };
                    },
                    {scope: 'ContextualMenu'}
                ),
                Fe = Ne;
            Fe.displayName = 'ContextualMenu';
        },
        30631: (e, t, o) => {
            o.d(t, {M: () => P});
            var n = o(98621),
                r = o(96583),
                i = o(65812),
                s = o(11599),
                a = o(85118),
                l = o(4061),
                c = o(28642),
                d = o(48782),
                u = o(99976),
                p = o(56709),
                m = o(56414),
                h = o(94981),
                f = o(36133),
                v = o(53222),
                b = o(85446),
                g = o(28553),
                _ = o(59384),
                x = o(56842),
                y = o(71387),
                C = o(36626),
                I = o(92672),
                k = (0, r.pi)((0, r.pi)({}, I.V3), {
                    prevMonthAriaLabel: 'Go to previous month',
                    nextMonthAriaLabel: 'Go to next month',
                    prevYearAriaLabel: 'Go to previous year',
                    nextYearAriaLabel: 'Go to next year',
                    closeButtonAriaLabel: 'Close date picker',
                    isRequiredErrorMessage: 'Field is required',
                    invalidInputErrorMessage: 'Invalid date format',
                    isResetStatusMessage:
                        'Invalid entry "{0}", date reset to "{1}"',
                }),
                S = (0, s.y)(),
                M = {
                    allowTextInput: !1,
                    formatDate: function (e) {
                        return e ? e.toDateString() : '';
                    },
                    parseDateFromString: function (e) {
                        e.match(/^\d{4}(-\d{2}){2}$/) && (e += 'T12:00');
                        var t = Date.parse(e);
                        return t ? new Date(t) : null;
                    },
                    firstDayOfWeek: m.eO.Sunday,
                    initialPickerDate: new Date(),
                    isRequired: !1,
                    isMonthPickerVisible: !0,
                    showMonthPickerAsOverlay: !1,
                    strings: k,
                    highlightCurrentMonth: !1,
                    highlightSelectedMonth: !1,
                    borderless: !1,
                    pickerAriaLabel: 'Calendar',
                    showWeekNumbers: !1,
                    firstWeekOfYear: m.On.FirstDay,
                    showGoToToday: !0,
                    showCloseButton: !1,
                    underlined: !1,
                    allFocusable: !1,
                },
                w = i.forwardRef(function (e, t) {
                    var o,
                        n,
                        s = (0, l.j)(M, e),
                        m = s.firstDayOfWeek,
                        I = s.strings,
                        k = s.label,
                        w = s.theme,
                        T = s.className,
                        P = s.styles,
                        O = s.initialPickerDate,
                        E = s.isRequired,
                        N = s.disabled,
                        F = s.ariaLabel,
                        R = s.pickerAriaLabel,
                        B = s.placeholder,
                        H = s.allowTextInput,
                        L = s.borderless,
                        A = s.minDate,
                        V = s.maxDate,
                        W = s.showCloseButton,
                        K = s.calendarProps,
                        q = s.calloutProps,
                        z = s.textField,
                        J = s.underlined,
                        G = s.allFocusable,
                        U = s.calendarAs,
                        Z = void 0 === U ? p.f : U,
                        $ = s.tabIndex,
                        j = s.disableAutoFocus,
                        Y = void 0 === j || j,
                        X = (0, C.M)('DatePicker', s.id),
                        Q = (0, C.M)('DatePicker-Callout'),
                        ee = i.useRef(null),
                        te = i.useRef(null),
                        oe = (function () {
                            var e = i.useRef(null),
                                t = i.useRef(!1);
                            return [
                                e,
                                function () {
                                    var t, o;
                                    null ===
                                        (o =
                                            null === (t = e.current) ||
                                            void 0 === t
                                                ? void 0
                                                : t.focus) ||
                                        void 0 === o ||
                                        o.call(t);
                                },
                                t,
                                function () {
                                    t.current = !0;
                                },
                            ];
                        })(),
                        ne = oe[0],
                        re = oe[1],
                        ie = oe[2],
                        se = oe[3],
                        ae = (function (e, t) {
                            var o = e.allowTextInput,
                                n = e.onAfterMenuDismiss,
                                r = i.useState(!1),
                                s = r[0],
                                a = r[1],
                                l = i.useRef(!1),
                                c = (0, x.r)();
                            return (
                                i.useEffect(
                                    function () {
                                        l.current &&
                                            !s &&
                                            (o && c.requestAnimationFrame(t),
                                            null == n || n()),
                                            (l.current = !0);
                                    },
                                    [s]
                                ),
                                [s, a]
                            );
                        })(s, re),
                        le = ae[0],
                        ce = ae[1],
                        de = (function (e) {
                            var t = e.formatDate,
                                o = e.value,
                                n = e.onSelectDate,
                                r = (0, y.G)(o, void 0, function (e, t) {
                                    return null == n ? void 0 : n(t);
                                }),
                                s = r[0],
                                a = r[1],
                                l = i.useState(function () {
                                    return o && t ? t(o) : '';
                                }),
                                c = l[0],
                                d = l[1];
                            return (
                                i.useEffect(
                                    function () {
                                        d(o && t ? t(o) : '');
                                    },
                                    [t, o]
                                ),
                                [
                                    s,
                                    c,
                                    function (e) {
                                        a(e), d(e && t ? t(e) : '');
                                    },
                                    d,
                                ]
                            );
                        })(s),
                        ue = de[0],
                        pe = de[1],
                        me = de[2],
                        he = de[3],
                        fe = (function (e, t, o, n, r) {
                            var s,
                                l = e.isRequired,
                                c = e.allowTextInput,
                                d = e.strings,
                                u = e.parseDateFromString,
                                p = e.onSelectDate,
                                m = e.formatDate,
                                f = e.minDate,
                                v = e.maxDate,
                                b = e.textField,
                                g = i.useState(),
                                _ = g[0],
                                x = g[1],
                                y = i.useState(),
                                C = y[0],
                                I = y[1],
                                k = i.useRef(!0),
                                S =
                                    null ===
                                        (s =
                                            null == b
                                                ? void 0
                                                : b.validateOnLoad) ||
                                    void 0 === s ||
                                    s;
                            return (
                                i.useEffect(
                                    function () {
                                        (k.current && ((k.current = !1), !S)) ||
                                            (l && !t
                                                ? x(
                                                      d.isRequiredErrorMessage ||
                                                          ' '
                                                  )
                                                : t && D(t, f, v)
                                                  ? x(
                                                        d.isOutOfBoundsErrorMessage ||
                                                            ' '
                                                    )
                                                  : x(void 0));
                                    },
                                    [
                                        f && (0, h.c8)(f),
                                        v && (0, h.c8)(v),
                                        t && (0, h.c8)(t),
                                        l,
                                        S,
                                    ]
                                ),
                                [
                                    r ? void 0 : _,
                                    function (e) {
                                        if ((void 0 === e && (e = null), c))
                                            if (n || e) {
                                                if (
                                                    t &&
                                                    !_ &&
                                                    m &&
                                                    m(null != e ? e : t) === n
                                                )
                                                    return;
                                                if (
                                                    !(e = e || u(n)) ||
                                                    isNaN(e.getTime())
                                                ) {
                                                    o(t);
                                                    var r = m ? m(t) : '',
                                                        i =
                                                            d.isResetStatusMessage
                                                                ? (0, a.W)(
                                                                      d.isResetStatusMessage,
                                                                      n,
                                                                      r
                                                                  )
                                                                : d.invalidInputErrorMessage ||
                                                                  '';
                                                    I(i);
                                                } else
                                                    D(e, f, v)
                                                        ? x(
                                                              d.isOutOfBoundsErrorMessage ||
                                                                  ' '
                                                          )
                                                        : (o(e),
                                                          x(void 0),
                                                          I(void 0));
                                            } else
                                                x(
                                                    l
                                                        ? d.isRequiredErrorMessage ||
                                                              ' '
                                                        : void 0
                                                ),
                                                    null == p || p(e);
                                        else
                                            l && !n
                                                ? x(
                                                      d.isRequiredErrorMessage ||
                                                          ' '
                                                  )
                                                : (x(void 0), I(void 0));
                                    },
                                    x,
                                    r ? void 0 : C,
                                    I,
                                ]
                            );
                        })(s, ue, me, pe, le),
                        ve = fe[0],
                        be = fe[1],
                        ge = fe[2],
                        _e = fe[3],
                        xe = fe[4],
                        ye = i.useCallback(
                            function () {
                                le || (se(), ce(!0));
                            },
                            [le, se, ce]
                        );
                    i.useImperativeHandle(
                        s.componentRef,
                        function () {
                            return {
                                focus: re,
                                reset: function () {
                                    ce(!1), me(void 0), ge(void 0), xe(void 0);
                                },
                                showDatePickerPopup: ye,
                            };
                        },
                        [re, ge, ce, me, xe, ye]
                    );
                    var Ce = function (e) {
                            le && (ce(!1), be(e), !H && e && me(e));
                        },
                        Ie = function (e) {
                            se(), Ce(e);
                        },
                        ke = S(P, {
                            theme: w,
                            className: T,
                            disabled: N,
                            underlined: J,
                            label: !!k,
                            isDatePickerShown: le,
                        }),
                        Se = (0, d.pq)(s, d.n7, ['value']),
                        Me = z && z.iconProps,
                        we = z && z.id && z.id !== X ? z.id : X + '-label',
                        De = !H && !N,
                        Te =
                            null ===
                                (n =
                                    null !==
                                        (o =
                                            null == z
                                                ? void 0
                                                : z['data-is-focusable']) &&
                                    void 0 !== o
                                        ? o
                                        : s['data-is-focusable']) ||
                            void 0 === n ||
                            n,
                        Pe = H
                            ? {
                                  role: 'button',
                                  'aria-expanded': le,
                                  'aria-label': null != F ? F : k,
                                  'aria-labelledby': z && z['aria-labelledby'],
                              }
                            : {};
                    return i.createElement(
                        'div',
                        (0, r.pi)({}, Se, {className: ke.root, ref: t}),
                        i.createElement(
                            'div',
                            {
                                ref: te,
                                'aria-owns': le ? Q : void 0,
                                className: ke.wrapper,
                            },
                            i.createElement(
                                g.n,
                                (0, r.pi)(
                                    {
                                        role: 'combobox',
                                        label: k,
                                        'aria-expanded': le,
                                        ariaLabel: F,
                                        'aria-haspopup': 'dialog',
                                        'aria-controls': le ? Q : void 0,
                                        required: E,
                                        disabled: N,
                                        errorMessage: ve,
                                        placeholder: B,
                                        borderless: L,
                                        value: pe,
                                        componentRef: ne,
                                        underlined: J,
                                        tabIndex: $,
                                        readOnly: !H,
                                    },
                                    z,
                                    {
                                        'data-is-focusable': Te,
                                        id: we,
                                        className: (0, u.i)(
                                            ke.textField,
                                            z && z.className
                                        ),
                                        iconProps: (0, r.pi)(
                                            (0, r.pi)(
                                                (0, r.pi)(
                                                    {iconName: 'Calendar'},
                                                    Pe
                                                ),
                                                Me
                                            ),
                                            {
                                                className: (0, u.i)(
                                                    ke.icon,
                                                    Me && Me.className
                                                ),
                                                onClick: function (e) {
                                                    e.stopPropagation(),
                                                        le || s.disabled
                                                            ? s.allowTextInput &&
                                                              Ce()
                                                            : ye();
                                                },
                                            }
                                        ),
                                        onRenderDescription: function (e, t) {
                                            return i.createElement(
                                                i.Fragment,
                                                null,
                                                e.description ||
                                                    e.onRenderDescription
                                                    ? t(e)
                                                    : null,
                                                i.createElement(
                                                    'div',
                                                    {
                                                        'aria-live':
                                                            'assertive',
                                                        className:
                                                            ke.statusMessage,
                                                    },
                                                    _e
                                                )
                                            );
                                        },
                                        onKeyDown: function (e) {
                                            switch (e.which) {
                                                case c.m.enter:
                                                    e.preventDefault(),
                                                        e.stopPropagation(),
                                                        le
                                                            ? s.allowTextInput &&
                                                              Ce()
                                                            : (be(), ye());
                                                    break;
                                                case c.m.escape:
                                                    !(function (e) {
                                                        le &&
                                                            (e.stopPropagation(),
                                                            Ie());
                                                    })(e);
                                                    break;
                                                case c.m.down:
                                                    e.altKey && !le && ye();
                                            }
                                        },
                                        onFocus: function () {
                                            Y ||
                                                H ||
                                                (ie.current || ye(),
                                                (ie.current = !1));
                                        },
                                        onBlur: function (e) {
                                            be();
                                        },
                                        onClick: function (e) {
                                            (!s.openOnClick &&
                                                s.disableAutoFocus) ||
                                            le ||
                                            s.disabled
                                                ? s.allowTextInput && Ce()
                                                : ye();
                                        },
                                        onChange: function (e, t) {
                                            var o,
                                                n = s.textField;
                                            H && (le && Ce(), he(t)),
                                                null ===
                                                    (o =
                                                        null == n
                                                            ? void 0
                                                            : n.onChange) ||
                                                    void 0 === o ||
                                                    o.call(n, e, t);
                                        },
                                        onRenderInput: De
                                            ? function (e) {
                                                  var t = (0, d.pq)(e, d.n7),
                                                      o = (0, b.y0)(
                                                          t.className,
                                                          ke.readOnlyTextField
                                                      );
                                                  return i.createElement(
                                                      'div',
                                                      (0, r.pi)({}, t, {
                                                          className: o,
                                                          tabIndex: $ || 0,
                                                      }),
                                                      pe ||
                                                          i.createElement(
                                                              'span',
                                                              {
                                                                  className:
                                                                      ke.readOnlyPlaceholder,
                                                              },
                                                              B
                                                          )
                                                  );
                                              }
                                            : void 0,
                                    }
                                )
                            )
                        ),
                        le &&
                            i.createElement(
                                f.U,
                                (0, r.pi)(
                                    {
                                        id: Q,
                                        role: 'dialog',
                                        ariaLabel: R,
                                        isBeakVisible: !1,
                                        gapSpace: 0,
                                        doNotLayer: !1,
                                        target: te.current,
                                        directionalHint: v.b.bottomLeftEdge,
                                    },
                                    q,
                                    {
                                        className: (0, u.i)(
                                            ke.callout,
                                            q && q.className
                                        ),
                                        onDismiss: function (e) {
                                            Ie();
                                        },
                                        onPositioned: function () {
                                            var e = !0;
                                            s.calloutProps &&
                                                void 0 !==
                                                    s.calloutProps
                                                        .setInitialFocus &&
                                                (e =
                                                    s.calloutProps
                                                        .setInitialFocus),
                                                ee.current &&
                                                    e &&
                                                    ee.current.focus();
                                        },
                                    }
                                ),
                                i.createElement(
                                    _.P,
                                    {
                                        isClickableOutsideFocusTrap: !0,
                                        disableFirstFocus: Y,
                                    },
                                    i.createElement(
                                        Z,
                                        (0, r.pi)({}, K, {
                                            onSelectDate: function (e) {
                                                s.calendarProps &&
                                                    s.calendarProps
                                                        .onSelectDate &&
                                                    s.calendarProps.onSelectDate(
                                                        e
                                                    ),
                                                    Ie(e);
                                            },
                                            onDismiss: function (e) {
                                                Ie();
                                            },
                                            isMonthPickerVisible:
                                                s.isMonthPickerVisible,
                                            showMonthPickerAsOverlay:
                                                s.showMonthPickerAsOverlay,
                                            today: s.today,
                                            value: ue || O,
                                            firstDayOfWeek: m,
                                            strings: I,
                                            highlightCurrentMonth:
                                                s.highlightCurrentMonth,
                                            highlightSelectedMonth:
                                                s.highlightSelectedMonth,
                                            showWeekNumbers: s.showWeekNumbers,
                                            firstWeekOfYear: s.firstWeekOfYear,
                                            showGoToToday: s.showGoToToday,
                                            dateTimeFormatter:
                                                s.dateTimeFormatter,
                                            minDate: A,
                                            maxDate: V,
                                            componentRef: ee,
                                            showCloseButton: W,
                                            allFocusable: G,
                                        })
                                    )
                                )
                            )
                    );
                });
            function D(e, t, o) {
                return (
                    (!!t && (0, h.NJ)(t, e) > 0) || (!!o && (0, h.NJ)(o, e) < 0)
                );
            }
            w.displayName = 'DatePickerBase';
            var T = {
                    root: 'ms-DatePicker',
                    callout: 'ms-DatePicker-callout',
                    withLabel: 'ms-DatePicker-event--with-label',
                    withoutLabel: 'ms-DatePicker-event--without-label',
                    disabled: 'msDatePickerDisabled ',
                },
                P = (0, n.z)(
                    w,
                    function (e) {
                        var t,
                            o = e.className,
                            n = e.theme,
                            r = e.disabled,
                            i = e.underlined,
                            s = e.label,
                            a = e.isDatePickerShown,
                            l = n.palette,
                            c = n.semanticColors,
                            d = n.fonts,
                            u = (0, b.Cn)(T, n),
                            p = {
                                color: l.neutralSecondary,
                                fontSize: b.TS.icon,
                                lineHeight: '18px',
                                pointerEvents: 'none',
                                position: 'absolute',
                                right: '4px',
                                padding: '5px',
                            };
                        return {
                            root: [
                                u.root,
                                n.fonts.large,
                                a && 'is-open',
                                b.Fv,
                                o,
                            ],
                            textField: [
                                {
                                    position: 'relative',
                                    selectors: {
                                        '& input[readonly]': {
                                            cursor: 'pointer',
                                        },
                                        input: {
                                            selectors: {
                                                '::-ms-clear': {
                                                    display: 'none',
                                                },
                                            },
                                        },
                                    },
                                },
                                r && {
                                    selectors: {
                                        '& input[readonly]': {
                                            cursor: 'default',
                                        },
                                    },
                                },
                            ],
                            callout: [u.callout],
                            icon: [
                                p,
                                s ? u.withLabel : u.withoutLabel,
                                {paddingTop: '7px'},
                                !r && [
                                    u.disabled,
                                    {
                                        pointerEvents: 'initial',
                                        cursor: 'pointer',
                                    },
                                ],
                                r && {color: c.disabledText, cursor: 'default'},
                            ],
                            statusMessage: [
                                d.small,
                                {color: c.errorText, marginTop: 5},
                            ],
                            readOnlyTextField: [
                                {
                                    cursor: 'pointer',
                                    height: 32,
                                    lineHeight: 30,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                },
                                i && {lineHeight: 34},
                            ],
                            readOnlyPlaceholder:
                                ((t = {color: c.inputPlaceholderText}),
                                (t[b.qJ] = {color: 'GrayText'}),
                                t),
                        };
                    },
                    void 0,
                    {scope: 'DatePicker'}
                );
        },
        90278: (e, t, o) => {
            o.d(t, {L: () => ee});
            var n = o(98621),
                r = o(96583),
                i = o(65812),
                s = o(11599),
                a = o(41695),
                l = o(11535),
                c = o(99976),
                d = o(62032),
                u = o(28642),
                p = o(57957),
                m = o(96208),
                h = o(83510),
                f = o(48782),
                v = o(93484),
                b = o(56357),
                g = o(12321),
                _ = o(36133),
                x = o(53222),
                y = o(14879),
                C = o(38582),
                I = (function () {
                    function e() {
                        this._size = 0;
                    }
                    return (
                        (e.prototype.updateOptions = function (e) {
                            for (
                                var t = [], o = [], n = 0, i = 0;
                                i < e.length;
                                i++
                            ) {
                                var s = e[i],
                                    a = s.itemType,
                                    l = s.hidden;
                                a === C.F.Divider || a === C.F.Header
                                    ? (t.push(i), o.push(i))
                                    : l
                                      ? o.push(i)
                                      : n++;
                            }
                            (this._size = n),
                                (this._displayOnlyOptionsCache = t),
                                (this._notSelectableOptionsCache = o),
                                (this._cachedOptions = (0, r.ev)([], e, !0));
                        }),
                        Object.defineProperty(e.prototype, 'optionSetSize', {
                            get: function () {
                                return this._size;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'cachedOptions', {
                            get: function () {
                                return this._cachedOptions;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.positionInSet = function (e) {
                            if (void 0 !== e) {
                                for (
                                    var t = 0;
                                    e > this._notSelectableOptionsCache[t];

                                )
                                    t++;
                                if (this._displayOnlyOptionsCache[t] === e)
                                    throw new Error(
                                        'Unexpected: Option at index '.concat(
                                            e,
                                            ' is not a selectable element.'
                                        )
                                    );
                                if (this._notSelectableOptionsCache[t] !== e)
                                    return e - t + 1;
                            }
                        }),
                        e
                    );
                })(),
                k = o(46165),
                S = o(12436),
                M = o(56316),
                w = o(11839),
                D = o(82672),
                T = o(51444),
                P = o(44375),
                O = o(42169),
                E = o(95599),
                N = o(4061),
                F = o(85968),
                R = o(267),
                B = o(63442),
                H = o(81262),
                L = (0, s.y)(),
                A = {options: []},
                V = i.forwardRef(function (e, t) {
                    var o = (0, N.j)(A, e),
                        n = i.useRef(null),
                        s = (0, R.r)(t, n),
                        l = (0, T.q)(n, o.responsiveMode),
                        c = (function (e) {
                            var t,
                                o = e.defaultSelectedKeys,
                                n = e.selectedKeys,
                                r = e.defaultSelectedKey,
                                s = e.selectedKey,
                                l = e.options,
                                c = e.multiSelect,
                                d = (0, F.D)(l),
                                u = i.useState([]),
                                p = u[0],
                                m = u[1],
                                h = l !== d;
                            t = c
                                ? h && void 0 !== o
                                    ? o
                                    : n
                                : h && void 0 !== r
                                  ? r
                                  : s;
                            var f = (0, F.D)(t);
                            return (
                                i.useEffect(
                                    function () {
                                        var e = function (e) {
                                            return (0, a.cx)(l, function (t) {
                                                return null != e
                                                    ? t.key === e
                                                    : !!t.selected ||
                                                          !!t.isSelected;
                                            });
                                        };
                                        (void 0 === t && d) ||
                                            (t === f && !h) ||
                                            m(
                                                (function () {
                                                    if (void 0 === t)
                                                        return c
                                                            ? l
                                                                  .map(
                                                                      function (
                                                                          e,
                                                                          t
                                                                      ) {
                                                                          return e.selected
                                                                              ? t
                                                                              : -1;
                                                                      }
                                                                  )
                                                                  .filter(
                                                                      function (
                                                                          e
                                                                      ) {
                                                                          return (
                                                                              -1 !==
                                                                              e
                                                                          );
                                                                      }
                                                                  )
                                                            : -1 !==
                                                                (i = e(null))
                                                              ? [i]
                                                              : [];
                                                    if (!Array.isArray(t))
                                                        return -1 !== (i = e(t))
                                                            ? [i]
                                                            : [];
                                                    for (
                                                        var o = [],
                                                            n = 0,
                                                            r = t;
                                                        n < r.length;
                                                        n++
                                                    ) {
                                                        var i,
                                                            s = r[n];
                                                        -1 !== (i = e(s)) &&
                                                            o.push(i);
                                                    }
                                                    return o;
                                                })()
                                            );
                                    },
                                    [h, c, d, f, l, t]
                                ),
                                [p, m]
                            );
                        })(o),
                        d = c[0],
                        u = c[1];
                    return i.createElement(
                        J,
                        (0, r.pi)({}, o, {
                            responsiveMode: l,
                            hoisted: {
                                rootRef: s,
                                selectedIndices: d,
                                setSelectedIndices: u,
                            },
                        })
                    );
                });
            V.displayName = 'DropdownBase';
            var W,
                K,
                q,
                z,
                J = (function (e) {
                    function t(t) {
                        var o = e.call(this, t) || this;
                        (o._host = i.createRef()),
                            (o._focusZone = i.createRef()),
                            (o._dropDown = i.createRef()),
                            (o._scrollIdleDelay = 250),
                            (o._sizePosCache = new I()),
                            (o._requestAnimationFrame = (0, l.J)(o)),
                            (o.dismissMenu = function () {
                                o.state.isOpen && o.setState({isOpen: !1});
                            }),
                            (o._onChange = function (e, t, n, i, s) {
                                var a = o.props,
                                    l = a.onChange,
                                    c = a.onChanged;
                                if (l || c) {
                                    var d = s
                                        ? (0, r.pi)((0, r.pi)({}, t[n]), {
                                              selected: !i,
                                          })
                                        : t[n];
                                    l &&
                                        l(
                                            (0, r.pi)((0, r.pi)({}, e), {
                                                target: o._dropDown.current,
                                            }),
                                            d,
                                            n
                                        ),
                                        c && c(d, n);
                                }
                            }),
                            (o._getPlaceholder = function () {
                                return (
                                    o.props.placeholder || o.props.placeHolder
                                );
                            }),
                            (o._getTitle = function (e, t) {
                                var n = o.props.multiSelectDelimiter,
                                    r = void 0 === n ? ', ' : n;
                                return e
                                    .map(function (e) {
                                        return e.text;
                                    })
                                    .join(r);
                            }),
                            (o._onRenderTitle = function (e) {
                                return i.createElement(
                                    i.Fragment,
                                    null,
                                    o._getTitle(e)
                                );
                            }),
                            (o._onRenderPlaceholder = function (e) {
                                return o._getPlaceholder()
                                    ? i.createElement(
                                          i.Fragment,
                                          null,
                                          o._getPlaceholder()
                                      )
                                    : null;
                            }),
                            (o._onRenderContainer = function (e) {
                                var t = e.calloutProps,
                                    n = e.panelProps,
                                    s = o.props,
                                    a = s.responsiveMode,
                                    l = s.dropdownWidth,
                                    c = a <= P.eD.medium,
                                    d = {
                                        firstFocusableTarget: '#'.concat(
                                            o._listId,
                                            '1'
                                        ),
                                    },
                                    u = o._classNames.subComponentStyles
                                        ? o._classNames.subComponentStyles.panel
                                        : void 0,
                                    p = void 0,
                                    m = void 0;
                                return (
                                    'auto' === l
                                        ? (m = o._dropDown.current
                                              ? o._dropDown.current.clientWidth
                                              : 0)
                                        : (p =
                                              l ||
                                              (o._dropDown.current
                                                  ? o._dropDown.current
                                                        .clientWidth
                                                  : 0)),
                                    c
                                        ? i.createElement(
                                              D.s,
                                              (0, r.pi)(
                                                  {
                                                      closeButtonAriaLabel:
                                                          'Close',
                                                      focusTrapZoneProps: d,
                                                      hasCloseButton: !0,
                                                      isOpen: !0,
                                                      isLightDismiss: !0,
                                                      onDismiss: o._onDismiss,
                                                      styles: u,
                                                  },
                                                  n
                                              ),
                                              o._renderFocusableList(e)
                                          )
                                        : i.createElement(
                                              _.U,
                                              (0, r.pi)(
                                                  {
                                                      isBeakVisible: !1,
                                                      gapSpace: 0,
                                                      doNotLayer: !1,
                                                      directionalHintFixed: !1,
                                                      directionalHint:
                                                          x.b.bottomLeftEdge,
                                                      calloutWidth: p,
                                                      calloutMinWidth: m,
                                                  },
                                                  t,
                                                  {
                                                      className:
                                                          o._classNames.callout,
                                                      target: o._dropDown
                                                          .current,
                                                      onDismiss: o._onDismiss,
                                                      onScroll: o._onScroll,
                                                      onPositioned:
                                                          o._onPositioned,
                                                  }
                                              ),
                                              o._renderFocusableList(e)
                                          )
                                );
                            }),
                            (o._onRenderCaretDown = function (e) {
                                return i.createElement(M.J, {
                                    className: o._classNames.caretDown,
                                    iconName: 'ChevronDown',
                                    'aria-hidden': !0,
                                });
                            }),
                            (o._onRenderList = function (e) {
                                var t = e.onRenderItem,
                                    n = void 0 === t ? o._onRenderItem : t,
                                    s = {items: []},
                                    a = [],
                                    l = function () {
                                        var e = s.id
                                            ? [
                                                  i.createElement(
                                                      'div',
                                                      {
                                                          role: 'group',
                                                          key: s.id,
                                                          'aria-labelledby':
                                                              s.id,
                                                      },
                                                      s.items
                                                  ),
                                              ]
                                            : s.items;
                                        (a = (0, r.ev)(
                                            (0, r.ev)([], a, !0),
                                            e,
                                            !0
                                        )),
                                            (s = {items: []});
                                    };
                                return (
                                    e.options.forEach(function (e, t) {
                                        !(function (e, t) {
                                            switch (e.itemType) {
                                                case C.F.Header:
                                                    s.items.length > 0 && l();
                                                    var i = o._id + e.key;
                                                    s.items.push(
                                                        n(
                                                            (0, r.pi)(
                                                                (0, r.pi)(
                                                                    {id: i},
                                                                    e
                                                                ),
                                                                {index: t}
                                                            ),
                                                            o._onRenderItem
                                                        )
                                                    ),
                                                        (s.id = i);
                                                    break;
                                                case C.F.Divider:
                                                    t > 0 &&
                                                        s.items.push(
                                                            n(
                                                                (0, r.pi)(
                                                                    (0, r.pi)(
                                                                        {},
                                                                        e
                                                                    ),
                                                                    {index: t}
                                                                ),
                                                                o._onRenderItem
                                                            )
                                                        ),
                                                        s.items.length > 0 &&
                                                            l();
                                                    break;
                                                default:
                                                    s.items.push(
                                                        n(
                                                            (0, r.pi)(
                                                                (0, r.pi)(
                                                                    {},
                                                                    e
                                                                ),
                                                                {index: t}
                                                            ),
                                                            o._onRenderItem
                                                        )
                                                    );
                                            }
                                        })(e, t);
                                    }),
                                    s.items.length > 0 && l(),
                                    i.createElement(i.Fragment, null, a)
                                );
                            }),
                            (o._onRenderItem = function (e) {
                                switch (e.itemType) {
                                    case C.F.Divider:
                                        return o._renderSeparator(e);
                                    case C.F.Header:
                                        return o._renderHeader(e);
                                    default:
                                        return o._renderOption(e);
                                }
                            }),
                            (o._renderOption = function (e) {
                                var t,
                                    n = o.props,
                                    s = n.onRenderOption,
                                    a = void 0 === s ? o._onRenderOption : s,
                                    l = n.hoisted.selectedIndices,
                                    d = void 0 === l ? [] : l,
                                    u =
                                        !(void 0 === e.index || !d) &&
                                        d.indexOf(e.index) > -1,
                                    p = e.hidden
                                        ? o._classNames.dropdownItemHidden
                                        : u && !0 === e.disabled
                                          ? o._classNames
                                                .dropdownItemSelectedAndDisabled
                                          : u
                                            ? o._classNames.dropdownItemSelected
                                            : !0 === e.disabled
                                              ? o._classNames
                                                    .dropdownItemDisabled
                                              : o._classNames.dropdownItem,
                                    m = e.title,
                                    h = o._listId + e.index,
                                    f =
                                        null !== (t = e.id) && void 0 !== t
                                            ? t
                                            : h + '-label',
                                    v = o._classNames.subComponentStyles
                                        ? o._classNames.subComponentStyles
                                              .multiSelectItem
                                        : void 0;
                                return o.props.multiSelect
                                    ? i.createElement(E.X, {
                                          id: h,
                                          key: e.key,
                                          disabled: e.disabled,
                                          onChange: o._onItemClick(e),
                                          inputProps: (0, r.pi)(
                                              {
                                                  'aria-selected': u,
                                                  onMouseEnter:
                                                      o._onItemMouseEnter.bind(
                                                          o,
                                                          e
                                                      ),
                                                  onMouseLeave:
                                                      o._onMouseItemLeave.bind(
                                                          o,
                                                          e
                                                      ),
                                                  onMouseMove:
                                                      o._onItemMouseMove.bind(
                                                          o,
                                                          e
                                                      ),
                                                  role: 'option',
                                              },
                                              {
                                                  'data-index': e.index,
                                                  'data-is-focusable': !(
                                                      e.disabled || e.hidden
                                                  ),
                                              }
                                          ),
                                          label: e.text,
                                          title: m,
                                          onRenderLabel:
                                              o._onRenderItemLabel.bind(
                                                  o,
                                                  (0, r.pi)((0, r.pi)({}, e), {
                                                      id: f,
                                                  })
                                              ),
                                          className: (0, c.i)(
                                              p,
                                              'is-multi-select'
                                          ),
                                          checked: u,
                                          styles: v,
                                          ariaPositionInSet: e.hidden
                                              ? void 0
                                              : o._sizePosCache.positionInSet(
                                                    e.index
                                                ),
                                          ariaSetSize: e.hidden
                                              ? void 0
                                              : o._sizePosCache.optionSetSize,
                                          ariaLabel: e.ariaLabel,
                                          ariaLabelledBy: e.ariaLabel
                                              ? void 0
                                              : f,
                                      })
                                    : i.createElement(
                                          y.M,
                                          {
                                              id: h,
                                              key: e.key,
                                              'data-index': e.index,
                                              'data-is-focusable': !e.disabled,
                                              disabled: e.disabled,
                                              className: p,
                                              onClick: o._onItemClick(e),
                                              onMouseEnter:
                                                  o._onItemMouseEnter.bind(
                                                      o,
                                                      e
                                                  ),
                                              onMouseLeave:
                                                  o._onMouseItemLeave.bind(
                                                      o,
                                                      e
                                                  ),
                                              onMouseMove:
                                                  o._onItemMouseMove.bind(o, e),
                                              role: 'option',
                                              'aria-selected': u
                                                  ? 'true'
                                                  : 'false',
                                              ariaLabel: e.ariaLabel,
                                              title: m,
                                              'aria-posinset':
                                                  o._sizePosCache.positionInSet(
                                                      e.index
                                                  ),
                                              'aria-setsize':
                                                  o._sizePosCache.optionSetSize,
                                          },
                                          a(e, o._onRenderOption)
                                      );
                            }),
                            (o._onRenderOption = function (e) {
                                return i.createElement(
                                    'span',
                                    {
                                        className:
                                            o._classNames.dropdownOptionText,
                                    },
                                    e.text
                                );
                            }),
                            (o._onRenderMultiselectOption = function (e) {
                                return i.createElement(
                                    'span',
                                    {
                                        id: e.id,
                                        'aria-hidden': 'true',
                                        className:
                                            o._classNames.dropdownOptionText,
                                    },
                                    e.text
                                );
                            }),
                            (o._onRenderItemLabel = function (e) {
                                var t = o.props.onRenderOption;
                                return (
                                    void 0 === t
                                        ? o._onRenderMultiselectOption
                                        : t
                                )(e, o._onRenderMultiselectOption);
                            }),
                            (o._onPositioned = function (e) {
                                o._focusZone.current &&
                                    o._requestAnimationFrame(function () {
                                        var e = o.props.hoisted.selectedIndices;
                                        if (o._focusZone.current)
                                            if (
                                                !o._hasBeenPositioned &&
                                                e &&
                                                e[0] &&
                                                !o.props.options[e[0]].disabled
                                            ) {
                                                var t = (0,
                                                d.M)().getElementById(
                                                    ''
                                                        .concat(o._id, '-list')
                                                        .concat(e[0])
                                                );
                                                t &&
                                                    o._focusZone.current.focusElement(
                                                        t
                                                    ),
                                                    (o._hasBeenPositioned = !0);
                                            } else o._focusZone.current.focus();
                                    }),
                                    (o.state.calloutRenderEdge &&
                                        o.state.calloutRenderEdge ===
                                            e.targetEdge) ||
                                        o.setState({
                                            calloutRenderEdge: e.targetEdge,
                                        });
                            }),
                            (o._onItemClick = function (e) {
                                return function (t) {
                                    e.disabled ||
                                        (o.setSelectedIndex(t, e.index),
                                        o.props.multiSelect ||
                                            o.setState({isOpen: !1}));
                                };
                            }),
                            (o._onScroll = function () {
                                var e = (0, H.hX)(o.context);
                                o._isScrollIdle ||
                                void 0 === o._scrollIdleTimeoutId
                                    ? (o._isScrollIdle = !1)
                                    : (e.clearTimeout(o._scrollIdleTimeoutId),
                                      (o._scrollIdleTimeoutId = void 0)),
                                    (o._scrollIdleTimeoutId = e.setTimeout(
                                        function () {
                                            o._isScrollIdle = !0;
                                        },
                                        o._scrollIdleDelay
                                    ));
                            }),
                            (o._onMouseItemLeave = function (e, t) {
                                if (
                                    !o._shouldIgnoreMouseEvent() &&
                                    o._host.current
                                )
                                    if (o._host.current.setActive)
                                        try {
                                            o._host.current.setActive();
                                        } catch (e) {}
                                    else o._host.current.focus();
                            }),
                            (o._onDismiss = function () {
                                o.setState({isOpen: !1});
                            }),
                            (o._onDropdownBlur = function (e) {
                                o._isDisabled() ||
                                    o.state.isOpen ||
                                    (o.setState({hasFocus: !1}),
                                    o.props.onBlur && o.props.onBlur(e));
                            }),
                            (o._onDropdownKeyDown = function (e) {
                                if (
                                    !o._isDisabled() &&
                                    ((o._lastKeyDownWasAltOrMeta =
                                        o._isAltOrMeta(e)),
                                    !o.props.onKeyDown ||
                                        (o.props.onKeyDown(e),
                                        !e.defaultPrevented))
                                ) {
                                    var t,
                                        n = o.props.hoisted.selectedIndices
                                            .length
                                            ? o.props.hoisted.selectedIndices[0]
                                            : -1,
                                        r = e.altKey || e.metaKey,
                                        i = o.state.isOpen;
                                    switch (e.which) {
                                        case u.m.enter:
                                            o.setState({isOpen: !i});
                                            break;
                                        case u.m.escape:
                                            if (!i) return;
                                            o.setState({isOpen: !1});
                                            break;
                                        case u.m.up:
                                            if (r) {
                                                if (i) {
                                                    o.setState({isOpen: !1});
                                                    break;
                                                }
                                                return;
                                            }
                                            o.props.multiSelect
                                                ? o.setState({isOpen: !0})
                                                : o._isDisabled() ||
                                                  (t = o._moveIndex(
                                                      e,
                                                      -1,
                                                      n - 1,
                                                      n
                                                  ));
                                            break;
                                        case u.m.down:
                                            r &&
                                                (e.stopPropagation(),
                                                e.preventDefault()),
                                                (r && !i) || o.props.multiSelect
                                                    ? o.setState({isOpen: !0})
                                                    : o._isDisabled() ||
                                                      (t = o._moveIndex(
                                                          e,
                                                          1,
                                                          n + 1,
                                                          n
                                                      ));
                                            break;
                                        case u.m.home:
                                            o.props.multiSelect ||
                                                (t = o._moveIndex(e, 1, 0, n));
                                            break;
                                        case u.m.end:
                                            o.props.multiSelect ||
                                                (t = o._moveIndex(
                                                    e,
                                                    -1,
                                                    o.props.options.length - 1,
                                                    n
                                                ));
                                            break;
                                        case u.m.space:
                                            break;
                                        default:
                                            return;
                                    }
                                    t !== n &&
                                        (e.stopPropagation(),
                                        e.preventDefault());
                                }
                            }),
                            (o._onDropdownKeyUp = function (e) {
                                if (!o._isDisabled()) {
                                    var t = o._shouldHandleKeyUp(e),
                                        n = o.state.isOpen;
                                    (o.props.onKeyUp &&
                                        (o.props.onKeyUp(e),
                                        e.defaultPrevented)) ||
                                        (e.which === u.m.space
                                            ? (o.setState({isOpen: !n}),
                                              e.stopPropagation(),
                                              e.preventDefault())
                                            : t &&
                                              n &&
                                              o.setState({isOpen: !1}));
                                }
                            }),
                            (o._onZoneKeyDown = function (e) {
                                var t, n, r;
                                o._lastKeyDownWasAltOrMeta = o._isAltOrMeta(e);
                                var i = e.altKey || e.metaKey;
                                switch (e.which) {
                                    case u.m.up:
                                        i
                                            ? o.setState({isOpen: !1})
                                            : o._host.current &&
                                              (r = (0, p.TE)(
                                                  o._host.current,
                                                  o._host.current.lastChild,
                                                  !0
                                              ));
                                        break;
                                    case u.m.home:
                                    case u.m.end:
                                    case u.m.pageUp:
                                    case u.m.pageDown:
                                        break;
                                    case u.m.down:
                                        !i &&
                                            o._host.current &&
                                            (r = (0, p.ft)(
                                                o._host.current,
                                                o._host.current.firstChild,
                                                !0
                                            ));
                                        break;
                                    case u.m.escape:
                                        o.setState({isOpen: !1});
                                        break;
                                    case u.m.tab:
                                        o.setState({isOpen: !1});
                                        var s = (0, d.M)();
                                        s &&
                                            (e.shiftKey
                                                ? null ===
                                                      (t = (0, p.TD)(
                                                          s.body,
                                                          o._dropDown.current,
                                                          !1,
                                                          !1,
                                                          !0,
                                                          !0
                                                      )) ||
                                                  void 0 === t ||
                                                  t.focus()
                                                : null ===
                                                      (n = (0, p.dc)(
                                                          s.body,
                                                          o._dropDown.current,
                                                          !1,
                                                          !1,
                                                          !0,
                                                          !0
                                                      )) ||
                                                  void 0 === n ||
                                                  n.focus());
                                        break;
                                    default:
                                        return;
                                }
                                r && r.focus(),
                                    e.stopPropagation(),
                                    e.preventDefault();
                            }),
                            (o._onZoneKeyUp = function (e) {
                                o._shouldHandleKeyUp(e) &&
                                    o.state.isOpen &&
                                    (o.setState({isOpen: !1}),
                                    e.preventDefault());
                            }),
                            (o._onDropdownClick = function (e) {
                                if (
                                    !o.props.onClick ||
                                    (o.props.onClick(e), !e.defaultPrevented)
                                ) {
                                    var t = o.state.isOpen;
                                    o._isDisabled() ||
                                        o._shouldOpenOnFocus() ||
                                        o.setState({isOpen: !t}),
                                        (o._isFocusedByClick = !1);
                                }
                            }),
                            (o._onDropdownMouseDown = function () {
                                o._isFocusedByClick = !0;
                            }),
                            (o._onFocus = function (e) {
                                if (!o._isDisabled()) {
                                    o.props.onFocus && o.props.onFocus(e);
                                    var t = {hasFocus: !0};
                                    o._shouldOpenOnFocus() && (t.isOpen = !0),
                                        o.setState(t);
                                }
                            }),
                            (o._isDisabled = function () {
                                var e = o.props.disabled,
                                    t = o.props.isDisabled;
                                return void 0 === e && (e = t), e;
                            }),
                            (o._onRenderLabel = function (e) {
                                var t = e.label,
                                    n = e.required,
                                    r = e.disabled,
                                    s = o._classNames.subComponentStyles
                                        ? o._classNames.subComponentStyles.label
                                        : void 0;
                                return t
                                    ? i.createElement(
                                          w._,
                                          {
                                              className: o._classNames.label,
                                              id: o._labelId,
                                              required: n,
                                              styles: s,
                                              disabled: r,
                                          },
                                          t
                                      )
                                    : null;
                            }),
                            (0, m.l)(o),
                            t.multiSelect,
                            t.selectedKey,
                            t.selectedKeys,
                            t.defaultSelectedKey,
                            t.defaultSelectedKeys;
                        var n = t.options;
                        return (
                            (o._id = t.id || (0, h.z)('Dropdown')),
                            (o._labelId = o._id + '-label'),
                            (o._listId = o._id + '-list'),
                            (o._optionId = o._id + '-option'),
                            (o._isScrollIdle = !0),
                            (o._hasBeenPositioned = !1),
                            o._sizePosCache.updateOptions(n),
                            (o.state = {
                                isOpen: !1,
                                hasFocus: !1,
                                calloutRenderEdge: void 0,
                            }),
                            o
                        );
                    }
                    return (
                        (0, r.ZT)(t, e),
                        Object.defineProperty(t.prototype, 'selectedOptions', {
                            get: function () {
                                var e = this.props,
                                    t = e.options,
                                    o = e.hoisted.selectedIndices;
                                return (0, O.t)(t, o);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            clearTimeout(this._scrollIdleTimeoutId);
                        }),
                        (t.prototype.componentDidUpdate = function (e, t) {
                            !0 === t.isOpen &&
                                !1 === this.state.isOpen &&
                                ((this._gotMouseMove = !1),
                                (this._hasBeenPositioned = !1),
                                this.props.onDismiss && this.props.onDismiss());
                        }),
                        (t.prototype.render = function () {
                            var e = this._id,
                                t = this.props,
                                o = t.className,
                                n = t.label,
                                s = t.options,
                                a = t.ariaLabel,
                                l = t.required,
                                c = t.errorMessage,
                                d = t.styles,
                                u = t.theme,
                                p = t.panelProps,
                                m = t.calloutProps,
                                h = t.onRenderTitle,
                                b = void 0 === h ? this._getTitle : h,
                                g = t.onRenderContainer,
                                _ = void 0 === g ? this._onRenderContainer : g,
                                x = t.onRenderCaretDown,
                                y = void 0 === x ? this._onRenderCaretDown : x,
                                C = t.onRenderLabel,
                                I = void 0 === C ? this._onRenderLabel : C,
                                k = t.onRenderItem,
                                S = void 0 === k ? this._onRenderItem : k,
                                M = t.hoisted.selectedIndices,
                                w = this.state,
                                D = w.isOpen,
                                T = w.calloutRenderEdge,
                                P = w.hasFocus,
                                E =
                                    t.onRenderPlaceholder ||
                                    t.onRenderPlaceHolder ||
                                    this._getPlaceholder;
                            s !== this._sizePosCache.cachedOptions &&
                                this._sizePosCache.updateOptions(s);
                            var N = (0, O.t)(s, M),
                                F = (0, f.pq)(t, f.n7),
                                R = this._isDisabled(),
                                B = e + '-errorMessage';
                            this._classNames = L(d, {
                                theme: u,
                                className: o,
                                hasError: !!(c && c.length > 0),
                                hasLabel: !!n,
                                isOpen: D,
                                required: l,
                                disabled: R,
                                isRenderingPlaceholder: !N.length,
                                panelClassName: p ? p.className : void 0,
                                calloutClassName: m ? m.className : void 0,
                                calloutRenderEdge: T,
                            });
                            var H = !!c && c.length > 0;
                            return i.createElement(
                                'div',
                                {
                                    className: this._classNames.root,
                                    ref: this.props.hoisted.rootRef,
                                    'aria-owns': D ? this._listId : void 0,
                                },
                                I(this.props, this._onRenderLabel),
                                i.createElement(
                                    'div',
                                    (0, r.pi)(
                                        {
                                            'data-is-focusable': !R,
                                            'data-ktp-target': !0,
                                            ref: this._dropDown,
                                            id: e,
                                            tabIndex: R ? -1 : 0,
                                            role: 'combobox',
                                            'aria-haspopup': 'listbox',
                                            'aria-expanded': D
                                                ? 'true'
                                                : 'false',
                                            'aria-label': a,
                                            'aria-labelledby':
                                                n && !a
                                                    ? (0, v.I)(
                                                          this._labelId,
                                                          this._optionId
                                                      )
                                                    : void 0,
                                            'aria-describedby': H
                                                ? this._id + '-errorMessage'
                                                : void 0,
                                            'aria-required': l,
                                            'aria-disabled': R,
                                            'aria-controls': D
                                                ? this._listId
                                                : void 0,
                                        },
                                        F,
                                        {
                                            className:
                                                this._classNames.dropdown,
                                            onBlur: this._onDropdownBlur,
                                            onKeyDown: this._onDropdownKeyDown,
                                            onKeyUp: this._onDropdownKeyUp,
                                            onClick: this._onDropdownClick,
                                            onMouseDown:
                                                this._onDropdownMouseDown,
                                            onFocus: this._onFocus,
                                        }
                                    ),
                                    i.createElement(
                                        'span',
                                        {
                                            id: this._optionId,
                                            className: this._classNames.title,
                                            'aria-live': P ? 'polite' : void 0,
                                            'aria-atomic': !!P || void 0,
                                            'aria-invalid': H,
                                        },
                                        N.length
                                            ? b(N, this._onRenderTitle)
                                            : E(t, this._onRenderPlaceholder)
                                    ),
                                    i.createElement(
                                        'span',
                                        {
                                            className:
                                                this._classNames
                                                    .caretDownWrapper,
                                        },
                                        y(t, this._onRenderCaretDown)
                                    )
                                ),
                                D &&
                                    _(
                                        (0, r.pi)((0, r.pi)({}, t), {
                                            onDismiss: this._onDismiss,
                                            onRenderItem: S,
                                        }),
                                        this._onRenderContainer
                                    ),
                                H &&
                                    i.createElement(
                                        'div',
                                        {
                                            role: 'alert',
                                            id: B,
                                            className:
                                                this._classNames.errorMessage,
                                        },
                                        c
                                    )
                            );
                        }),
                        (t.prototype.focus = function (e) {
                            this._dropDown.current &&
                                (this._dropDown.current.focus(),
                                e && this.setState({isOpen: !0}));
                        }),
                        (t.prototype.setSelectedIndex = function (e, t) {
                            var o = this.props,
                                n = o.options,
                                r = o.selectedKey,
                                i = o.selectedKeys,
                                s = o.multiSelect,
                                a = o.notifyOnReselect,
                                l = o.hoisted.selectedIndices,
                                c = void 0 === l ? [] : l,
                                d = !!c && c.indexOf(t) > -1,
                                u = [];
                            if (
                                ((t = Math.max(0, Math.min(n.length - 1, t))),
                                void 0 === r && void 0 === i)
                            ) {
                                if (s || a || t !== c[0]) {
                                    if (s)
                                        if (
                                            ((u = c ? this._copyArray(c) : []),
                                            d)
                                        ) {
                                            var p = u.indexOf(t);
                                            p > -1 && u.splice(p, 1);
                                        } else u.push(t);
                                    else u = [t];
                                    e.persist(),
                                        this.props.hoisted.setSelectedIndices(
                                            u
                                        ),
                                        this._onChange(e, n, t, d, s);
                                }
                            } else this._onChange(e, n, t, d, s);
                        }),
                        (t.prototype._copyArray = function (e) {
                            for (var t = [], o = 0, n = e; o < n.length; o++) {
                                var r = n[o];
                                t.push(r);
                            }
                            return t;
                        }),
                        (t.prototype._moveIndex = function (e, t, o, n) {
                            var r = this.props.options;
                            if (n === o || 0 === r.length) return n;
                            o >= r.length
                                ? (o = 0)
                                : o < 0 && (o = r.length - 1);
                            for (
                                var i = 0;
                                r[o].itemType === C.F.Header ||
                                r[o].itemType === C.F.Divider ||
                                r[o].disabled;

                            ) {
                                if (i >= r.length) return n;
                                o + t < 0
                                    ? (o = r.length)
                                    : o + t >= r.length && (o = -1),
                                    (o += t),
                                    i++;
                            }
                            return this.setSelectedIndex(e, o), o;
                        }),
                        (t.prototype._renderFocusableList = function (e) {
                            var t = e.onRenderList,
                                o = void 0 === t ? this._onRenderList : t,
                                n = e.label,
                                r = e.ariaLabel,
                                s = e.multiSelect;
                            return i.createElement(
                                'div',
                                {
                                    className:
                                        this._classNames.dropdownItemsWrapper,
                                    onKeyDown: this._onZoneKeyDown,
                                    onKeyUp: this._onZoneKeyUp,
                                    ref: this._host,
                                    tabIndex: 0,
                                },
                                i.createElement(
                                    k.k,
                                    {
                                        ref: this._focusZone,
                                        direction: S.U.vertical,
                                        id: this._listId,
                                        className:
                                            this._classNames.dropdownItems,
                                        role: 'listbox',
                                        'aria-label': r,
                                        'aria-labelledby':
                                            n && !r ? this._labelId : void 0,
                                        'aria-multiselectable': s,
                                    },
                                    o(e, this._onRenderList)
                                )
                            );
                        }),
                        (t.prototype._renderSeparator = function (e) {
                            var t = e.index,
                                o = e.key,
                                n = e.hidden
                                    ? this._classNames.dropdownDividerHidden
                                    : this._classNames.dropdownDivider;
                            return t > 0
                                ? i.createElement('div', {
                                      role: 'presentation',
                                      key: o,
                                      className: n,
                                  })
                                : null;
                        }),
                        (t.prototype._renderHeader = function (e) {
                            var t = this.props.onRenderOption,
                                o = void 0 === t ? this._onRenderOption : t,
                                n = e.key,
                                r = e.id,
                                s = e.hidden
                                    ? this._classNames.dropdownItemHeaderHidden
                                    : this._classNames.dropdownItemHeader;
                            return i.createElement(
                                'div',
                                {id: r, key: n, className: s},
                                o(e, this._onRenderOption)
                            );
                        }),
                        (t.prototype._onItemMouseEnter = function (e, t) {
                            this._shouldIgnoreMouseEvent() ||
                                t.currentTarget.focus();
                        }),
                        (t.prototype._onItemMouseMove = function (e, t) {
                            var o = (0, H.NA)(this.context),
                                n = t.currentTarget;
                            (this._gotMouseMove = !0),
                                this._isScrollIdle &&
                                    o.activeElement !== n &&
                                    n.focus();
                        }),
                        (t.prototype._shouldIgnoreMouseEvent = function () {
                            return !this._isScrollIdle || !this._gotMouseMove;
                        }),
                        (t.prototype._isAltOrMeta = function (e) {
                            return e.which === u.m.alt || 'Meta' === e.key;
                        }),
                        (t.prototype._shouldHandleKeyUp = function (e) {
                            var t =
                                this._lastKeyDownWasAltOrMeta &&
                                this._isAltOrMeta(e);
                            return (
                                (this._lastKeyDownWasAltOrMeta = !1),
                                !!t && !((0, b.V)() || (0, g.g)())
                            );
                        }),
                        (t.prototype._shouldOpenOnFocus = function () {
                            var e = this.state.hasFocus,
                                t = this.props.openOnKeyboardFocus;
                            return !this._isFocusedByClick && !0 === t && !e;
                        }),
                        (t.defaultProps = {options: []}),
                        (t.contextType = B.Hn),
                        t
                    );
                })(i.Component),
                G = o(98289),
                U = o(86221),
                Z = o(85446),
                $ = {
                    root: 'ms-Dropdown-container',
                    label: 'ms-Dropdown-label',
                    dropdown: 'ms-Dropdown',
                    title: 'ms-Dropdown-title',
                    caretDownWrapper: 'ms-Dropdown-caretDownWrapper',
                    caretDown: 'ms-Dropdown-caretDown',
                    callout: 'ms-Dropdown-callout',
                    panel: 'ms-Dropdown-panel',
                    dropdownItems: 'ms-Dropdown-items',
                    dropdownItem: 'ms-Dropdown-item',
                    dropdownDivider: 'ms-Dropdown-divider',
                    dropdownOptionText: 'ms-Dropdown-optionText',
                    dropdownItemHeader: 'ms-Dropdown-header',
                    titleIsPlaceHolder: 'ms-Dropdown-titleIsPlaceHolder',
                    titleHasError: 'ms-Dropdown-title--hasError',
                },
                j =
                    (((W = {})[
                        ''
                            .concat(Z.qJ, ', ')
                            .concat(Z.bO.replace('@media ', ''))
                    ] = (0, r.pi)({}, (0, Z.xM)())),
                    W),
                Y = {
                    selectors: (0, r.pi)(
                        ((K = {}),
                        (K[Z.qJ] = {
                            backgroundColor: 'Highlight',
                            borderColor: 'Highlight',
                            color: 'HighlightText',
                        }),
                        (K['.ms-Checkbox-checkbox'] =
                            ((q = {}),
                            (q[Z.qJ] = {borderColor: 'HighlightText'}),
                            q)),
                        K),
                        j
                    ),
                },
                X = {
                    selectors:
                        ((z = {}), (z[Z.qJ] = {borderColor: 'Highlight'}), z),
                },
                Q = (0, Z.sK)(0, Z.dd),
                ee = (0, n.z)(
                    V,
                    function (e) {
                        var t,
                            o,
                            n,
                            i,
                            s,
                            a,
                            l,
                            c,
                            d,
                            u,
                            p,
                            m,
                            h = e.theme,
                            f = e.hasError,
                            v = e.hasLabel,
                            b = e.className,
                            g = e.isOpen,
                            _ = e.disabled,
                            x = e.required,
                            y = e.isRenderingPlaceholder,
                            C = e.panelClassName,
                            I = e.calloutClassName,
                            k = e.calloutRenderEdge;
                        if (!h)
                            throw new Error(
                                'theme is undefined or null in base Dropdown getStyles function.'
                            );
                        var S = (0, Z.Cn)($, h),
                            M = h.palette,
                            w = h.semanticColors,
                            D = h.effects,
                            T = h.fonts,
                            P = {color: w.menuItemTextHovered},
                            O = {color: w.menuItemText},
                            E = {borderColor: w.errorText},
                            N = [
                                S.dropdownItem,
                                {
                                    backgroundColor: 'transparent',
                                    boxSizing: 'border-box',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '0 8px',
                                    width: '100%',
                                    minHeight: 36,
                                    lineHeight: 20,
                                    height: 0,
                                    position: 'relative',
                                    border: '1px solid transparent',
                                    borderRadius: 0,
                                    wordWrap: 'break-word',
                                    overflowWrap: 'break-word',
                                    textAlign: 'left',
                                    '.ms-Button-flexContainer': {width: '100%'},
                                },
                            ],
                            F = [
                                S.dropdownItemHeader,
                                (0, r.pi)((0, r.pi)({}, T.medium), {
                                    fontWeight: Z.lq.semibold,
                                    color: w.menuHeader,
                                    background: 'none',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    height: 36,
                                    lineHeight: 36,
                                    cursor: 'default',
                                    padding: '0 8px',
                                    userSelect: 'none',
                                    textAlign: 'left',
                                    selectors:
                                        ((t = {}),
                                        (t[Z.qJ] = (0, r.pi)(
                                            {color: 'GrayText'},
                                            (0, Z.xM)()
                                        )),
                                        t),
                                }),
                            ],
                            R = w.menuItemBackgroundPressed,
                            B = function (e) {
                                var t, o;
                                return (
                                    void 0 === e && (e = !1),
                                    {
                                        selectors:
                                            ((t = {
                                                '&:hover': [
                                                    {
                                                        color: w.menuItemTextHovered,
                                                        backgroundColor: e
                                                            ? R
                                                            : w.menuItemBackgroundHovered,
                                                    },
                                                    Y,
                                                ],
                                                '&.is-multi-select:hover': [
                                                    {
                                                        backgroundColor: e
                                                            ? R
                                                            : 'transparent',
                                                    },
                                                    Y,
                                                ],
                                                '&:active:hover': [
                                                    {
                                                        color: w.menuItemTextHovered,
                                                        backgroundColor: e
                                                            ? w.menuItemBackgroundHovered
                                                            : w.menuItemBackgroundPressed,
                                                    },
                                                    Y,
                                                ],
                                            }),
                                            (t[
                                                '.'.concat(
                                                    G.G$,
                                                    ' &:focus:after'
                                                )
                                            ] =
                                                ((o = {
                                                    left: 0,
                                                    top: 0,
                                                    bottom: 0,
                                                    right: 0,
                                                }),
                                                (o[Z.qJ] = {inset: '2px'}),
                                                o)),
                                            (t[Z.qJ] = {border: 'none'}),
                                            t),
                                    }
                                );
                            },
                            H = (0, r.ev)(
                                (0, r.ev)([], N, !0),
                                [
                                    {
                                        backgroundColor: R,
                                        color: w.menuItemTextHovered,
                                    },
                                    B(!0),
                                    Y,
                                ],
                                !1
                            ),
                            L = (0, r.ev)(
                                (0, r.ev)([], N, !0),
                                [
                                    {
                                        color: w.disabledText,
                                        cursor: 'default',
                                        selectors:
                                            ((o = {}),
                                            (o[Z.qJ] = {
                                                color: 'GrayText',
                                                border: 'none',
                                            }),
                                            o),
                                    },
                                ],
                                !1
                            ),
                            A =
                                k === U.z.bottom
                                    ? ''
                                          .concat(D.roundedCorner2, ' ')
                                          .concat(D.roundedCorner2, ' 0 0')
                                    : '0 0 '
                                          .concat(D.roundedCorner2, ' ')
                                          .concat(D.roundedCorner2),
                            V =
                                k === U.z.bottom
                                    ? '0 0 '
                                          .concat(D.roundedCorner2, ' ')
                                          .concat(D.roundedCorner2)
                                    : ''
                                          .concat(D.roundedCorner2, ' ')
                                          .concat(D.roundedCorner2, ' 0 0');
                        return {
                            root: [S.root, b],
                            label: S.label,
                            dropdown: [
                                S.dropdown,
                                Z.Fv,
                                T.medium,
                                {
                                    color: w.menuItemText,
                                    borderColor: w.focusBorder,
                                    position: 'relative',
                                    outline: 0,
                                    userSelect: 'none',
                                    selectors:
                                        ((n = {}),
                                        (n['&:hover .' + S.title] = [
                                            !_ && P,
                                            {
                                                borderColor: g
                                                    ? M.neutralSecondary
                                                    : M.neutralPrimary,
                                            },
                                            X,
                                        ]),
                                        (n['&:focus .' + S.title] = [
                                            !_ && P,
                                            {
                                                selectors:
                                                    ((i = {}),
                                                    (i[Z.qJ] = {
                                                        color: 'Highlight',
                                                    }),
                                                    i),
                                            },
                                        ]),
                                        (n['&:focus:after'] = [
                                            {
                                                pointerEvents: 'none',
                                                content: "''",
                                                position: 'absolute',
                                                boxSizing: 'border-box',
                                                top: '0px',
                                                left: '0px',
                                                width: '100%',
                                                height: '100%',
                                                border: _
                                                    ? 'none'
                                                    : '2px solid '.concat(
                                                          M.themePrimary
                                                      ),
                                                borderRadius: '2px',
                                                selectors:
                                                    ((s = {}),
                                                    (s[Z.qJ] = {
                                                        color: 'Highlight',
                                                    }),
                                                    s),
                                            },
                                        ]),
                                        (n['&:active .' + S.title] = [
                                            !_ && P,
                                            {borderColor: M.themePrimary},
                                            X,
                                        ]),
                                        (n['&:hover .' + S.caretDown] =
                                            !_ && O),
                                        (n['&:focus .' + S.caretDown] = [
                                            !_ && O,
                                            {
                                                selectors:
                                                    ((a = {}),
                                                    (a[Z.qJ] = {
                                                        color: 'Highlight',
                                                    }),
                                                    a),
                                            },
                                        ]),
                                        (n['&:active .' + S.caretDown] =
                                            !_ && O),
                                        (n['&:hover .' + S.titleIsPlaceHolder] =
                                            !_ && O),
                                        (n['&:focus .' + S.titleIsPlaceHolder] =
                                            !_ && O),
                                        (n[
                                            '&:active .' + S.titleIsPlaceHolder
                                        ] = !_ && O),
                                        (n['&:hover .' + S.titleHasError] = E),
                                        (n['&:active .' + S.titleHasError] = E),
                                        n),
                                },
                                g && 'is-open',
                                _ && 'is-disabled',
                                x && 'is-required',
                                x &&
                                    !v && {
                                        selectors:
                                            ((l = {
                                                ':before': {
                                                    content: "'*'",
                                                    color: w.errorText,
                                                    position: 'absolute',
                                                    top: -5,
                                                    right: -10,
                                                },
                                            }),
                                            (l[Z.qJ] = {
                                                selectors: {
                                                    ':after': {right: -14},
                                                },
                                            }),
                                            l),
                                    },
                            ],
                            title: [
                                S.title,
                                Z.Fv,
                                {
                                    backgroundColor: w.inputBackground,
                                    borderWidth: 1,
                                    borderStyle: 'solid',
                                    borderColor: w.inputBorder,
                                    borderRadius: g ? A : D.roundedCorner2,
                                    cursor: 'pointer',
                                    display: 'block',
                                    height: 32,
                                    lineHeight: 30,
                                    padding: '0 28px 0 8px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                },
                                y && [
                                    S.titleIsPlaceHolder,
                                    {color: w.inputPlaceholderText},
                                ],
                                f && [S.titleHasError, E],
                                _ && {
                                    backgroundColor: w.disabledBackground,
                                    border: 'none',
                                    color: w.disabledText,
                                    cursor: 'default',
                                    selectors:
                                        ((c = {}),
                                        (c[Z.qJ] = (0, r.pi)(
                                            {
                                                border: '1px solid GrayText',
                                                color: 'GrayText',
                                                backgroundColor: 'Window',
                                            },
                                            (0, Z.xM)()
                                        )),
                                        c),
                                },
                            ],
                            caretDownWrapper: [
                                S.caretDownWrapper,
                                {
                                    height: 32,
                                    lineHeight: 30,
                                    paddingTop: 1,
                                    position: 'absolute',
                                    right: 8,
                                    top: 0,
                                },
                                !_ && {cursor: 'pointer'},
                            ],
                            caretDown: [
                                S.caretDown,
                                {
                                    color: M.neutralSecondary,
                                    fontSize: T.small.fontSize,
                                    pointerEvents: 'none',
                                },
                                _ && {
                                    color: w.disabledText,
                                    selectors:
                                        ((d = {}),
                                        (d[Z.qJ] = (0, r.pi)(
                                            {color: 'GrayText'},
                                            (0, Z.xM)()
                                        )),
                                        d),
                                },
                            ],
                            errorMessage: (0, r.pi)(
                                (0, r.pi)({color: w.errorText}, h.fonts.small),
                                {paddingTop: 5}
                            ),
                            callout: [
                                S.callout,
                                {
                                    boxShadow: D.elevation8,
                                    borderRadius: V,
                                    selectors:
                                        ((u = {}),
                                        (u['.ms-Callout-main'] = {
                                            borderRadius: V,
                                        }),
                                        u),
                                },
                                I,
                            ],
                            dropdownItemsWrapper: {
                                selectors: {'&:focus': {outline: 0}},
                            },
                            dropdownItems: [
                                S.dropdownItems,
                                {display: 'block'},
                            ],
                            dropdownItem: (0, r.ev)(
                                (0, r.ev)([], N, !0),
                                [B()],
                                !1
                            ),
                            dropdownItemSelected: H,
                            dropdownItemDisabled: L,
                            dropdownItemSelectedAndDisabled: [
                                H,
                                L,
                                {backgroundColor: 'transparent'},
                            ],
                            dropdownItemHidden: (0, r.ev)(
                                (0, r.ev)([], N, !0),
                                [{display: 'none'}],
                                !1
                            ),
                            dropdownDivider: [
                                S.dropdownDivider,
                                {height: 1, backgroundColor: w.bodyDivider},
                            ],
                            dropdownDividerHidden: [
                                S.dropdownDivider,
                                {display: 'none'},
                            ],
                            dropdownOptionText: [
                                S.dropdownOptionText,
                                {
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    minWidth: 0,
                                    maxWidth: '100%',
                                    wordWrap: 'break-word',
                                    overflowWrap: 'break-word',
                                    margin: '1px',
                                },
                            ],
                            dropdownItemHeader: F,
                            dropdownItemHeaderHidden: (0, r.ev)(
                                (0, r.ev)([], F, !0),
                                [{display: 'none'}],
                                !1
                            ),
                            subComponentStyles: {
                                label: {root: {display: 'inline-block'}},
                                multiSelectItem: {
                                    root: {padding: 0},
                                    label: {
                                        alignSelf: 'stretch',
                                        padding: '0 8px',
                                        width: '100%',
                                    },
                                    input: {
                                        selectors:
                                            ((p = {}),
                                            (p[
                                                '.'.concat(
                                                    G.G$,
                                                    ' &:focus + label::before'
                                                )
                                            ] = {outlineOffset: '0px'}),
                                            p),
                                    },
                                },
                                panel: {
                                    root: [C],
                                    main: {
                                        selectors:
                                            ((m = {}),
                                            (m[Q] = {width: 272}),
                                            m),
                                    },
                                    contentInner: {padding: '0 0 20px'},
                                },
                            },
                        };
                    },
                    void 0,
                    {scope: 'Dropdown'}
                );
            ee.displayName = 'Dropdown';
        },
        40037: (e, t, o) => {
            o.d(t, {P: () => y});
            var n = o(98621),
                r = o(96583),
                i = o(65812),
                s = o(11599),
                a = o(25607),
                l = o(33749),
                c = o(48782),
                d = o(39259),
                u = o(57933),
                p = o(62032),
                m = o(3293),
                h = o(267),
                f = (0, s.y)(),
                v = (0, a.NF)(function (e, t) {
                    return (0, m.j)((0, r.pi)((0, r.pi)({}, e), {rtl: t}));
                }),
                b = i.forwardRef(function (e, t) {
                    var o = e.className,
                        n = e.theme,
                        s = e.applyTheme,
                        a = e.applyThemeToBody,
                        m = e.styles,
                        b = f(m, {theme: n, applyTheme: s, className: o}),
                        g = i.useRef(null);
                    return (
                        (function (e, t, o) {
                            var n = t.bodyThemed;
                            i.useEffect(
                                function () {
                                    if (e) {
                                        var t = (0, p.M)(o.current);
                                        if (t)
                                            return (
                                                t.body.classList.add(n),
                                                function () {
                                                    t.body.classList.remove(n);
                                                }
                                            );
                                    }
                                },
                                [n, e, o]
                            );
                        })(a, b, g),
                        i.createElement(
                            i.Fragment,
                            null,
                            (function (e, t, o, n) {
                                var s = t.root,
                                    a = e.as,
                                    p = void 0 === a ? 'div' : a,
                                    m = e.dir,
                                    f = e.theme,
                                    b = (0, c.pq)(e, c.n7, ['dir']),
                                    g = (function (e) {
                                        var t = e.theme,
                                            o = e.dir,
                                            n = (0, l.zg)(t) ? 'rtl' : 'ltr',
                                            r = (0, l.zg)() ? 'rtl' : 'ltr',
                                            i = o || n;
                                        return {
                                            rootDir: i !== n || i !== r ? i : o,
                                            needsTheme: i !== n,
                                        };
                                    })(e),
                                    _ = g.rootDir,
                                    x = g.needsTheme,
                                    y = i.createElement(
                                        d.Y,
                                        {providerRef: o},
                                        i.createElement(
                                            p,
                                            (0, r.pi)({dir: _}, b, {
                                                className: s,
                                                ref: (0, h.r)(o, n),
                                            })
                                        )
                                    );
                                return (
                                    x &&
                                        (y = i.createElement(
                                            u.N,
                                            {
                                                settings: {
                                                    theme: v(f, 'rtl' === m),
                                                },
                                            },
                                            y
                                        )),
                                    y
                                );
                            })(e, b, g, t)
                        )
                    );
                });
            b.displayName = 'FabricBase';
            var g = o(85446),
                _ = {fontFamily: 'inherit'},
                x = {root: 'ms-Fabric', bodyThemed: 'ms-Fabric-bodyThemed'},
                y = (0, n.z)(
                    b,
                    function (e) {
                        var t = e.applyTheme,
                            o = e.className,
                            n = e.preventBlanketFontInheritance,
                            r = e.theme;
                        return {
                            root: [
                                (0, g.Cn)(x, r).root,
                                r.fonts.medium,
                                {color: r.palette.neutralPrimary},
                                !n && {
                                    '& button': _,
                                    '& input': _,
                                    '& textarea': _,
                                },
                                t && {
                                    color: r.semanticColors.bodyText,
                                    backgroundColor:
                                        r.semanticColors.bodyBackground,
                                },
                                o,
                            ],
                            bodyThemed: [
                                {
                                    backgroundColor:
                                        r.semanticColors.bodyBackground,
                                },
                            ],
                        };
                    },
                    void 0,
                    {scope: 'Fabric'}
                );
        },
        59384: (e, t, o) => {
            o.d(t, {P: () => x});
            var n = o(96583),
                r = o(65812),
                i = o(4061),
                s = o(57957),
                a = o(44557),
                l = o(14040),
                c = o(39326),
                d = o(48782),
                u = o(267),
                p = o(85968),
                m = o(54008),
                h = o(36626),
                f = o(33223),
                v = o(69438),
                b = o(63442),
                g = o(81262),
                _ = {
                    disabled: !1,
                    disableFirstFocus: !1,
                    forceFocusInsideTrap: !0,
                    isClickableOutsideFocusTrap: !1,
                    'data-tabster': '{"uncontrolled": {"completely": true}}',
                },
                x = r.forwardRef(function (e, t) {
                    var o,
                        y = r.useRef(null),
                        C = r.useRef(null),
                        I = r.useRef(null),
                        k = (0, u.r)(y, t),
                        S = (0, b.ky)(),
                        M = (0, g.xw)(),
                        w = null === (o = (0, p.D)(!1)) || void 0 === o || o,
                        D = (0, i.j)(_, e),
                        T = (0, m.B)({
                            hasFocus: !1,
                            focusStackId: (0, h.M)('ftz-', D.id),
                        }),
                        P = D.children,
                        O = D.componentRef,
                        E = D.disabled,
                        N = D.disableFirstFocus,
                        F = D.forceFocusInsideTrap,
                        R = D.focusPreviouslyFocusedInnerElement,
                        B = D.firstFocusableSelector,
                        H = D.firstFocusableTarget,
                        L = D.disableRestoreFocus,
                        A = void 0 === L ? D.ignoreExternalFocusing : L,
                        V = D.isClickableOutsideFocusTrap,
                        W = D.enableAriaHiddenSiblings,
                        K = {
                            'aria-hidden': !0,
                            style: {pointerEvents: 'none', position: 'fixed'},
                            tabIndex: E ? -1 : 0,
                            'data-is-visible': !0,
                            'data-is-focus-trap-zone-bumper': !0,
                        },
                        q = r.useCallback(function (e) {
                            e !== C.current && e !== I.current && (0, s.um)(e);
                        }, []),
                        z = (0, f.$)(function () {
                            if (y.current) {
                                var e = T.previouslyFocusedElementInTrapZone;
                                if (R && e && (0, a.t)(y.current, e)) q(e);
                                else {
                                    var t = null;
                                    if ('string' == typeof H)
                                        t = y.current.querySelector(H);
                                    else if (H) t = H(y.current);
                                    else if (B) {
                                        var o = 'string' == typeof B ? B : B();
                                        t = y.current.querySelector('.' + o);
                                    }
                                    t ||
                                        (t = (0, s.dc)(
                                            y.current,
                                            y.current.firstChild,
                                            !1,
                                            !1,
                                            !1,
                                            !0
                                        )),
                                        t && q(t);
                                }
                            }
                        }),
                        J = function (e) {
                            if (!E && y.current) {
                                var t =
                                    e === T.hasFocus
                                        ? (0, s.xY)(
                                              y.current,
                                              I.current,
                                              !0,
                                              !1
                                          )
                                        : (0, s.RK)(
                                              y.current,
                                              C.current,
                                              !0,
                                              !1
                                          );
                                t &&
                                    (t === C.current || t === I.current
                                        ? z()
                                        : t.focus());
                            }
                        },
                        G = (0, f.$)(function (e) {
                            if (
                                ((x.focusStack = x.focusStack.filter(
                                    function (e) {
                                        return T.focusStackId !== e;
                                    }
                                )),
                                S)
                            ) {
                                var t = S.activeElement;
                                A ||
                                    'function' !=
                                        typeof (null == e ? void 0 : e.focus) ||
                                    (!(0, a.t)(y.current, t) && t !== S.body) ||
                                    q(e);
                            }
                        }),
                        U = (0, f.$)(function (e) {
                            if (
                                !E &&
                                T.focusStackId === x.focusStack.slice(-1)[0]
                            ) {
                                var t = e.target;
                                t &&
                                    !(0, a.t)(y.current, t) &&
                                    (S && S.activeElement === S.body
                                        ? setTimeout(function () {
                                              S &&
                                                  S.activeElement === S.body &&
                                                  (z(), (T.hasFocus = !0));
                                          }, 0)
                                        : (z(), (T.hasFocus = !0)),
                                    e.preventDefault(),
                                    e.stopPropagation());
                            }
                        });
                    return (
                        r.useEffect(
                            function () {
                                var e = [];
                                return (
                                    F && e.push((0, l.on)(M, 'focus', U, !0)),
                                    V || e.push((0, l.on)(M, 'click', U, !0)),
                                    function () {
                                        e.forEach(function (e) {
                                            return e();
                                        });
                                    }
                                );
                            },
                            [F, V, M]
                        ),
                        r.useEffect(
                            function () {
                                if (!E && (w || F) && y.current) {
                                    x.focusStack.push(T.focusStackId);
                                    var e =
                                        D.elementToFocusOnDismiss ||
                                        S.activeElement;
                                    return (
                                        N || (0, a.t)(y.current, e) || z(),
                                        function () {
                                            return G(e);
                                        }
                                    );
                                }
                            },
                            [F, E]
                        ),
                        r.useEffect(
                            function () {
                                if (!E && W) return (0, c.O)(y.current);
                            },
                            [E, W, y]
                        ),
                        (0, v.k)(function () {
                            delete T.previouslyFocusedElementInTrapZone;
                        }),
                        (function (e, t, o) {
                            r.useImperativeHandle(
                                e,
                                function () {
                                    return {
                                        get previouslyFocusedElement() {
                                            return t;
                                        },
                                        focus: o,
                                    };
                                },
                                [o, t]
                            );
                        })(O, T.previouslyFocusedElementInTrapZone, z),
                        r.createElement(
                            'div',
                            (0, n.pi)(
                                {'aria-labelledby': D.ariaLabelledBy},
                                (0, d.pq)(D, d.n7),
                                {
                                    ref: k,
                                    onFocusCapture: function (e) {
                                        var t;
                                        null === (t = D.onFocusCapture) ||
                                            void 0 === t ||
                                            t.call(D, e),
                                            e.target === C.current
                                                ? J(!0)
                                                : e.target === I.current &&
                                                  J(!1),
                                            (T.hasFocus = !0),
                                            e.target !== e.currentTarget &&
                                                e.target !== C.current &&
                                                e.target !== I.current &&
                                                (T.previouslyFocusedElementInTrapZone =
                                                    e.target);
                                    },
                                    onBlurCapture: function (e) {
                                        var t;
                                        null === (t = D.onBlurCapture) ||
                                            void 0 === t ||
                                            t.call(D, e);
                                        var o = e.relatedTarget;
                                        null === e.relatedTarget &&
                                            (o = S.activeElement),
                                            (0, a.t)(y.current, o) ||
                                                (T.hasFocus = !1);
                                    },
                                }
                            ),
                            r.createElement('div', (0, n.pi)({}, K, {ref: C})),
                            P,
                            r.createElement('div', (0, n.pi)({}, K, {ref: I}))
                        )
                    );
                });
            (x.displayName = 'FocusTrapZone'), (x.focusStack = []);
        },
    },
]);
