'use strict';
(self.webpackChunkdash_query_builder =
    self.webpackChunkdash_query_builder || []).push([
    [459],
    {
        46165: (t, e, o) => {
            o.d(e, {k: () => O});
            var r,
                n = o(96583),
                i = o(65812),
                s = o(12436),
                a = o(28190),
                u = o(57957),
                l = o(85298),
                c = o(28642),
                h = o(33749),
                _ = o(96208),
                f = o(83510),
                d = o(44557),
                p = o(48782),
                m = o(99976),
                v = o(94863),
                b = o(23379),
                g = o(62032),
                E = o(16096),
                F = o(85446),
                y = 'data-is-focusable',
                A = 'data-focuszone-id',
                k = 'tabindex',
                w = 'data-no-vertical-wrap',
                I = 'data-no-horizontal-wrap',
                C = 999999999,
                D = -999999999;
            function T(t, e) {
                var o;
                'function' == typeof MouseEvent
                    ? (o = new MouseEvent('click', {
                          ctrlKey: null == e ? void 0 : e.ctrlKey,
                          metaKey: null == e ? void 0 : e.metaKey,
                          shiftKey: null == e ? void 0 : e.shiftKey,
                          altKey: null == e ? void 0 : e.altKey,
                          bubbles: null == e ? void 0 : e.bubbles,
                          cancelable: null == e ? void 0 : e.cancelable,
                      }))
                    : (o = document.createEvent('MouseEvents')).initMouseEvent(
                          'click',
                          !!e && e.bubbles,
                          !!e && e.cancelable,
                          window,
                          0,
                          0,
                          0,
                          0,
                          0,
                          !!e && e.ctrlKey,
                          !!e && e.altKey,
                          !!e && e.shiftKey,
                          !!e && e.metaKey,
                          0,
                          null
                      ),
                    t.dispatchEvent(o);
            }
            var x = {},
                K = new Set(),
                M = [
                    'text',
                    'number',
                    'password',
                    'email',
                    'tel',
                    'url',
                    'search',
                    'textarea',
                ],
                R = !1,
                O = (function (t) {
                    function e(o) {
                        var r,
                            n,
                            d,
                            p,
                            m = this;
                        ((m = t.call(this, o) || this)._root = i.createRef()),
                            (m._mergedRef = (0, a.S)()),
                            (m._onFocus = function (t) {
                                if (!m._portalContainsElement(t.target)) {
                                    var e,
                                        o = m.props,
                                        r = o.onActiveElementChanged,
                                        n = o.doNotAllowFocusEventToPropagate,
                                        i = o.stopFocusPropagation,
                                        s = o.onFocusNotification,
                                        a = o.onFocus,
                                        c =
                                            o.shouldFocusInnerElementWhenReceivedFocus,
                                        h = o.defaultTabbableElement,
                                        _ = m._isImmediateDescendantOfZone(
                                            t.target
                                        );
                                    if (_) e = t.target;
                                    else
                                        for (
                                            var f = t.target;
                                            f && f !== m._root.current;

                                        ) {
                                            if (
                                                (0, u.MW)(f) &&
                                                m._isImmediateDescendantOfZone(
                                                    f
                                                )
                                            ) {
                                                e = f;
                                                break;
                                            }
                                            f = (0, l.G)(f, R);
                                        }
                                    if (c && t.target === m._root.current) {
                                        var d =
                                            h &&
                                            'function' == typeof h &&
                                            m._root.current &&
                                            h(m._root.current);
                                        d && (0, u.MW)(d)
                                            ? ((e = d), d.focus())
                                            : (m.focus(!0),
                                              m._activeElement && (e = null));
                                    }
                                    var p = !m._activeElement;
                                    e &&
                                        e !== m._activeElement &&
                                        ((_ || p) &&
                                            m._setFocusAlignment(e, !0, !0),
                                        (m._activeElement = e),
                                        p && m._updateTabIndexes()),
                                        r && r(m._activeElement, t),
                                        (i || n) && t.stopPropagation(),
                                        a ? a(t) : s && s();
                                }
                            }),
                            (m._onBlur = function () {
                                m._setParkedFocus(!1);
                            }),
                            (m._onMouseDown = function (t) {
                                if (
                                    !m._portalContainsElement(t.target) &&
                                    !m.props.disabled
                                ) {
                                    for (
                                        var e = t.target, o = [];
                                        e && e !== m._root.current;

                                    )
                                        o.push(e), (e = (0, l.G)(e, R));
                                    for (
                                        ;
                                        o.length &&
                                        ((e = o.pop()) &&
                                            (0, u.MW)(e) &&
                                            m._setActiveElement(e, !0),
                                        !(0, u.jz)(e));

                                    );
                                }
                            }),
                            (m._onKeyDown = function (t, e) {
                                if (!m._portalContainsElement(t.target)) {
                                    var o = m.props,
                                        r = o.direction,
                                        n = o.disabled,
                                        i = o.isInnerZoneKeystroke,
                                        a = o.pagingSupportDisabled,
                                        l = o.shouldEnterInnerZone;
                                    if (
                                        !(
                                            n ||
                                            (m.props.onKeyDown &&
                                                m.props.onKeyDown(t),
                                            t.isDefaultPrevented() ||
                                                (m._getDocument()
                                                    .activeElement ===
                                                    m._root.current &&
                                                    m._isInnerZone))
                                        )
                                    ) {
                                        if (
                                            ((l && l(t)) || (i && i(t))) &&
                                            m._isImmediateDescendantOfZone(
                                                t.target
                                            )
                                        ) {
                                            var _ = m._getFirstInnerZone();
                                            if (_) {
                                                if (!_.focus(!0)) return;
                                            } else {
                                                if (!(0, u.gc)(t.target))
                                                    return;
                                                if (
                                                    !m.focusElement(
                                                        (0, u.dc)(
                                                            t.target,
                                                            t.target.firstChild,
                                                            !0
                                                        )
                                                    )
                                                )
                                                    return;
                                            }
                                        } else {
                                            if (t.altKey) return;
                                            switch (t.which) {
                                                case c.m.space:
                                                    if (
                                                        m._shouldRaiseClicksOnSpace &&
                                                        m._tryInvokeClickForFocusable(
                                                            t.target,
                                                            t
                                                        )
                                                    )
                                                        break;
                                                    return;
                                                case c.m.left:
                                                    if (
                                                        r !== s.U.vertical &&
                                                        (m._preventDefaultWhenHandled(
                                                            t
                                                        ),
                                                        m._moveFocusLeft(e))
                                                    )
                                                        break;
                                                    return;
                                                case c.m.right:
                                                    if (
                                                        r !== s.U.vertical &&
                                                        (m._preventDefaultWhenHandled(
                                                            t
                                                        ),
                                                        m._moveFocusRight(e))
                                                    )
                                                        break;
                                                    return;
                                                case c.m.up:
                                                    if (
                                                        r !== s.U.horizontal &&
                                                        (m._preventDefaultWhenHandled(
                                                            t
                                                        ),
                                                        m._moveFocusUp())
                                                    )
                                                        break;
                                                    return;
                                                case c.m.down:
                                                    if (
                                                        r !== s.U.horizontal &&
                                                        (m._preventDefaultWhenHandled(
                                                            t
                                                        ),
                                                        m._moveFocusDown())
                                                    )
                                                        break;
                                                    return;
                                                case c.m.pageDown:
                                                    if (
                                                        !a &&
                                                        m._moveFocusPaging(!0)
                                                    )
                                                        break;
                                                    return;
                                                case c.m.pageUp:
                                                    if (
                                                        !a &&
                                                        m._moveFocusPaging(!1)
                                                    )
                                                        break;
                                                    return;
                                                case c.m.tab:
                                                    if (
                                                        m.props.allowTabKey ||
                                                        m.props.handleTabKey ===
                                                            s.J.all ||
                                                        (m.props
                                                            .handleTabKey ===
                                                            s.J.inputOnly &&
                                                            m._isElementInput(
                                                                t.target
                                                            ))
                                                    ) {
                                                        var f = !1;
                                                        if (
                                                            ((m._processingTabKey =
                                                                !0),
                                                            (f =
                                                                r !==
                                                                    s.U
                                                                        .vertical &&
                                                                m._shouldWrapFocus(
                                                                    m._activeElement,
                                                                    I
                                                                )
                                                                    ? (
                                                                          (0,
                                                                          h.zg)(
                                                                              e
                                                                          )
                                                                              ? !t.shiftKey
                                                                              : t.shiftKey
                                                                      )
                                                                        ? m._moveFocusLeft(
                                                                              e
                                                                          )
                                                                        : m._moveFocusRight(
                                                                              e
                                                                          )
                                                                    : t.shiftKey
                                                                      ? m._moveFocusUp()
                                                                      : m._moveFocusDown()),
                                                            (m._processingTabKey =
                                                                !1),
                                                            f)
                                                        )
                                                            break;
                                                        m.props
                                                            .shouldResetActiveElementWhenTabFromZone &&
                                                            (m._activeElement =
                                                                null);
                                                    }
                                                    return;
                                                case c.m.home:
                                                    if (
                                                        m._isContentEditableElement(
                                                            t.target
                                                        ) ||
                                                        (m._isElementInput(
                                                            t.target
                                                        ) &&
                                                            !m._shouldInputLoseFocus(
                                                                t.target,
                                                                !1
                                                            ))
                                                    )
                                                        return !1;
                                                    var d =
                                                        m._root.current &&
                                                        m._root.current
                                                            .firstChild;
                                                    if (
                                                        m._root.current &&
                                                        d &&
                                                        m.focusElement(
                                                            (0, u.dc)(
                                                                m._root.current,
                                                                d,
                                                                !0
                                                            )
                                                        )
                                                    )
                                                        break;
                                                    return;
                                                case c.m.end:
                                                    if (
                                                        m._isContentEditableElement(
                                                            t.target
                                                        ) ||
                                                        (m._isElementInput(
                                                            t.target
                                                        ) &&
                                                            !m._shouldInputLoseFocus(
                                                                t.target,
                                                                !0
                                                            ))
                                                    )
                                                        return !1;
                                                    var p =
                                                        m._root.current &&
                                                        m._root.current
                                                            .lastChild;
                                                    if (
                                                        m._root.current &&
                                                        m.focusElement(
                                                            (0, u.TD)(
                                                                m._root.current,
                                                                p,
                                                                !0,
                                                                !0,
                                                                !0
                                                            )
                                                        )
                                                    )
                                                        break;
                                                    return;
                                                case c.m.enter:
                                                    if (
                                                        m._shouldRaiseClicksOnEnter &&
                                                        m._tryInvokeClickForFocusable(
                                                            t.target,
                                                            t
                                                        )
                                                    )
                                                        break;
                                                    return;
                                                default:
                                                    return;
                                            }
                                        }
                                        t.preventDefault(), t.stopPropagation();
                                    }
                                }
                            }),
                            (m._getHorizontalDistanceFromCenter = function (
                                t,
                                e,
                                o
                            ) {
                                var r =
                                        m._focusAlignment.left ||
                                        m._focusAlignment.x ||
                                        0,
                                    n = Math.floor(o.top),
                                    i = Math.floor(e.bottom),
                                    s = Math.floor(o.bottom),
                                    a = Math.floor(e.top);
                                return (t && n > i) || (!t && s < a)
                                    ? r >= o.left && r <= o.left + o.width
                                        ? 0
                                        : Math.abs(o.left + o.width / 2 - r)
                                    : m._shouldWrapFocus(m._activeElement, w)
                                      ? C
                                      : D;
                            }),
                            (0, _.l)(m),
                            (m._id = (0, f.z)('FocusZone')),
                            (m._focusAlignment = {left: 0, top: 0}),
                            (m._processingTabKey = !1);
                        var v =
                            null ===
                                (n =
                                    null !== (r = o.shouldRaiseClicks) &&
                                    void 0 !== r
                                        ? r
                                        : e.defaultProps.shouldRaiseClicks) ||
                            void 0 === n ||
                            n;
                        return (
                            (m._shouldRaiseClicksOnEnter =
                                null !== (d = o.shouldRaiseClicksOnEnter) &&
                                void 0 !== d
                                    ? d
                                    : v),
                            (m._shouldRaiseClicksOnSpace =
                                null !== (p = o.shouldRaiseClicksOnSpace) &&
                                void 0 !== p
                                    ? p
                                    : v),
                            m
                        );
                    }
                    return (
                        (0, n.ZT)(e, t),
                        (e.getOuterZones = function () {
                            return K.size;
                        }),
                        (e._onKeyDownCapture = function (t) {
                            t.which === c.m.tab &&
                                K.forEach(function (t) {
                                    return t._updateTabIndexes();
                                });
                        }),
                        (e.prototype.componentDidMount = function () {
                            var t = this._root.current;
                            if (((x[this._id] = this), t)) {
                                for (
                                    var o = (0, l.G)(t, R);
                                    o &&
                                    o !== this._getDocument().body &&
                                    1 === o.nodeType;

                                ) {
                                    if ((0, u.jz)(o)) {
                                        this._isInnerZone = !0;
                                        break;
                                    }
                                    o = (0, l.G)(o, R);
                                }
                                this._isInnerZone ||
                                    (K.add(this),
                                    this._root.current &&
                                        this._root.current.addEventListener(
                                            'keydown',
                                            e._onKeyDownCapture,
                                            !0
                                        )),
                                    this._root.current &&
                                        this._root.current.addEventListener(
                                            'blur',
                                            this._onBlur,
                                            !0
                                        ),
                                    this._updateTabIndexes(),
                                    this.props.defaultTabbableElement &&
                                    'string' ==
                                        typeof this.props.defaultTabbableElement
                                        ? (this._activeElement =
                                              this._getDocument().querySelector(
                                                  this.props
                                                      .defaultTabbableElement
                                              ))
                                        : this.props.defaultActiveElement &&
                                          (this._activeElement =
                                              this._getDocument().querySelector(
                                                  this.props
                                                      .defaultActiveElement
                                              )),
                                    this.props.shouldFocusOnMount &&
                                        this.focus();
                            }
                        }),
                        (e.prototype.componentDidUpdate = function () {
                            var t = this._root.current,
                                e = this._getDocument();
                            if (
                                (((this._activeElement &&
                                    !(0, d.t)(
                                        this._root.current,
                                        this._activeElement,
                                        R
                                    )) ||
                                    (this._defaultFocusElement &&
                                        !(0, d.t)(
                                            this._root.current,
                                            this._defaultFocusElement,
                                            R
                                        ))) &&
                                    ((this._activeElement = null),
                                    (this._defaultFocusElement = null),
                                    this._updateTabIndexes()),
                                !this.props.preventFocusRestoration &&
                                    e &&
                                    this._lastIndexPath &&
                                    (e.activeElement === e.body ||
                                        null === e.activeElement ||
                                        e.activeElement === t))
                            ) {
                                var o = (0, u.bF)(t, this._lastIndexPath);
                                o
                                    ? (this._setActiveElement(o, !0),
                                      o.focus(),
                                      this._setParkedFocus(!1))
                                    : this._setParkedFocus(!0);
                            }
                        }),
                        (e.prototype.componentWillUnmount = function () {
                            delete x[this._id],
                                this._isInnerZone ||
                                    (K.delete(this),
                                    this._root.current &&
                                        this._root.current.removeEventListener(
                                            'keydown',
                                            e._onKeyDownCapture,
                                            !0
                                        )),
                                this._root.current &&
                                    this._root.current.removeEventListener(
                                        'blur',
                                        this._onBlur,
                                        !0
                                    ),
                                (this._activeElement = null),
                                (this._defaultFocusElement = null);
                        }),
                        (e.prototype.render = function () {
                            var t = this,
                                e = this.props,
                                o = e.as,
                                s = e.elementType,
                                a = e.rootProps,
                                u = e.ariaDescribedBy,
                                l = e.ariaLabelledBy,
                                c = e.className,
                                h = (0, p.pq)(this.props, p.iY),
                                _ = o || s || 'div';
                            this._evaluateFocusBeforeRender();
                            var f = (0, F.gh)();
                            return i.createElement(
                                _,
                                (0, n.pi)(
                                    {
                                        'aria-labelledby': l,
                                        'aria-describedby': u,
                                    },
                                    h,
                                    a,
                                    {
                                        className: (0, m.i)(
                                            (r ||
                                                (r = (0, E.y)(
                                                    {
                                                        selectors: {
                                                            ':focus': {
                                                                outline: 'none',
                                                            },
                                                        },
                                                    },
                                                    'ms-FocusZone'
                                                )),
                                            r),
                                            c
                                        ),
                                        ref: this._mergedRef(
                                            this.props.elementRef,
                                            this._root
                                        ),
                                        'data-focuszone-id': this._id,
                                        onKeyDown: function (e) {
                                            return t._onKeyDown(e, f);
                                        },
                                        onFocus: this._onFocus,
                                        onMouseDownCapture: this._onMouseDown,
                                    }
                                ),
                                this.props.children
                            );
                        }),
                        (e.prototype.focus = function (t, e) {
                            if (
                                (void 0 === t && (t = !1),
                                void 0 === e && (e = !1),
                                this._root.current)
                            ) {
                                if (
                                    !t &&
                                    'true' ===
                                        this._root.current.getAttribute(y) &&
                                    this._isInnerZone
                                ) {
                                    var o = this._getOwnerZone(
                                        this._root.current
                                    );
                                    if (o !== this._root.current) {
                                        var r = x[o.getAttribute(A)];
                                        return (
                                            !!r &&
                                            r.focusElement(this._root.current)
                                        );
                                    }
                                    return !1;
                                }
                                if (
                                    !t &&
                                    this._activeElement &&
                                    (0, d.t)(
                                        this._root.current,
                                        this._activeElement
                                    ) &&
                                    (0, u.MW)(this._activeElement) &&
                                    (!e || (0, u.BS)(this._activeElement))
                                )
                                    return this._activeElement.focus(), !0;
                                var n = this._root.current.firstChild;
                                return this.focusElement(
                                    (0, u.dc)(
                                        this._root.current,
                                        n,
                                        !0,
                                        void 0,
                                        void 0,
                                        void 0,
                                        void 0,
                                        void 0,
                                        e
                                    )
                                );
                            }
                            return !1;
                        }),
                        (e.prototype.focusLast = function () {
                            if (this._root.current) {
                                var t =
                                    this._root.current &&
                                    this._root.current.lastChild;
                                return this.focusElement(
                                    (0, u.TD)(this._root.current, t, !0, !0, !0)
                                );
                            }
                            return !1;
                        }),
                        (e.prototype.focusElement = function (t, e) {
                            var o = this.props,
                                r = o.onBeforeFocus,
                                n = o.shouldReceiveFocus;
                            return !(
                                (n && !n(t)) ||
                                (r && !r(t)) ||
                                !t ||
                                (this._setActiveElement(t, e),
                                this._activeElement &&
                                    this._activeElement.focus(),
                                0)
                            );
                        }),
                        (e.prototype.setFocusAlignment = function (t) {
                            this._focusAlignment = t;
                        }),
                        Object.defineProperty(
                            e.prototype,
                            'defaultFocusElement',
                            {
                                get: function () {
                                    return this._defaultFocusElement;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }
                        ),
                        Object.defineProperty(e.prototype, 'activeElement', {
                            get: function () {
                                return this._activeElement;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype._evaluateFocusBeforeRender = function () {
                            var t = this._root.current,
                                e = this._getDocument();
                            if (e) {
                                var o = e.activeElement;
                                if (o !== t) {
                                    var r = (0, d.t)(t, o, !1);
                                    this._lastIndexPath = r
                                        ? (0, u.xu)(t, o)
                                        : void 0;
                                }
                            }
                        }),
                        (e.prototype._setParkedFocus = function (t) {
                            var e = this._root.current;
                            e &&
                                this._isParked !== t &&
                                ((this._isParked = t),
                                t
                                    ? (this.props.allowFocusRoot ||
                                          ((this._parkedTabIndex =
                                              e.getAttribute('tabindex')),
                                          e.setAttribute('tabindex', '-1')),
                                      e.focus())
                                    : this.props.allowFocusRoot ||
                                      (this._parkedTabIndex
                                          ? (e.setAttribute(
                                                'tabindex',
                                                this._parkedTabIndex
                                            ),
                                            (this._parkedTabIndex = void 0))
                                          : e.removeAttribute('tabindex')));
                        }),
                        (e.prototype._setActiveElement = function (t, e) {
                            var o = this._activeElement;
                            (this._activeElement = t),
                                o &&
                                    ((0, u.jz)(o) && this._updateTabIndexes(o),
                                    (o.tabIndex = -1)),
                                this._activeElement &&
                                    ((this._focusAlignment && !e) ||
                                        this._setFocusAlignment(t, !0, !0),
                                    (this._activeElement.tabIndex = 0));
                        }),
                        (e.prototype._preventDefaultWhenHandled = function (t) {
                            this.props.preventDefaultWhenHandled &&
                                t.preventDefault();
                        }),
                        (e.prototype._tryInvokeClickForFocusable = function (
                            t,
                            e
                        ) {
                            var o = t;
                            if (o === this._root.current) return !1;
                            do {
                                if (
                                    'BUTTON' === o.tagName ||
                                    'A' === o.tagName ||
                                    'INPUT' === o.tagName ||
                                    'TEXTAREA' === o.tagName ||
                                    'SUMMARY' === o.tagName
                                )
                                    return !1;
                                if (
                                    this._isImmediateDescendantOfZone(o) &&
                                    'true' === o.getAttribute(y) &&
                                    'true' !==
                                        o.getAttribute(
                                            'data-disable-click-on-enter'
                                        )
                                )
                                    return T(o, e), !0;
                                o = (0, l.G)(o, R);
                            } while (o !== this._root.current);
                            return !1;
                        }),
                        (e.prototype._getFirstInnerZone = function (t) {
                            if (
                                !(t =
                                    t ||
                                    this._activeElement ||
                                    this._root.current)
                            )
                                return null;
                            if ((0, u.jz)(t)) return x[t.getAttribute(A)];
                            for (var e = t.firstElementChild; e; ) {
                                if ((0, u.jz)(e)) return x[e.getAttribute(A)];
                                var o = this._getFirstInnerZone(e);
                                if (o) return o;
                                e = e.nextElementSibling;
                            }
                            return null;
                        }),
                        (e.prototype._moveFocus = function (t, e, o, r) {
                            void 0 === r && (r = !0);
                            var n = this._activeElement,
                                i = -1,
                                a = void 0,
                                l = !1,
                                c = this.props.direction === s.U.bidirectional;
                            if (!n || !this._root.current) return !1;
                            if (
                                this._isElementInput(n) &&
                                !this._shouldInputLoseFocus(n, t)
                            )
                                return !1;
                            var h = c ? n.getBoundingClientRect() : null;
                            do {
                                if (
                                    ((n = t
                                        ? (0, u.dc)(this._root.current, n)
                                        : (0, u.TD)(this._root.current, n)),
                                    !c)
                                ) {
                                    a = n;
                                    break;
                                }
                                if (n) {
                                    var _ = e(h, n.getBoundingClientRect());
                                    if (-1 === _ && -1 === i) {
                                        a = n;
                                        break;
                                    }
                                    if (
                                        (_ > -1 &&
                                            (-1 === i || _ < i) &&
                                            ((i = _), (a = n)),
                                        i >= 0 && _ < 0)
                                    )
                                        break;
                                }
                            } while (n);
                            if (a && a !== this._activeElement)
                                (l = !0), this.focusElement(a);
                            else if (this.props.isCircularNavigation && r)
                                return t
                                    ? this.focusElement(
                                          (0, u.dc)(
                                              this._root.current,
                                              this._root.current
                                                  .firstElementChild,
                                              !0
                                          )
                                      )
                                    : this.focusElement(
                                          (0, u.TD)(
                                              this._root.current,
                                              this._root.current
                                                  .lastElementChild,
                                              !0,
                                              !0,
                                              !0
                                          )
                                      );
                            return l;
                        }),
                        (e.prototype._moveFocusDown = function () {
                            var t = this,
                                e = -1,
                                o =
                                    this._focusAlignment.left ||
                                    this._focusAlignment.x ||
                                    0;
                            return (
                                !!this._moveFocus(!0, function (r, n) {
                                    var i = -1,
                                        s = Math.floor(n.top),
                                        a = Math.floor(r.bottom);
                                    return s < a
                                        ? t._shouldWrapFocus(
                                              t._activeElement,
                                              w
                                          )
                                            ? C
                                            : D
                                        : (((-1 === e && s >= a) || s === e) &&
                                              ((e = s),
                                              (i =
                                                  o >= n.left &&
                                                  o <= n.left + n.width
                                                      ? 0
                                                      : Math.abs(
                                                            n.left +
                                                                n.width / 2 -
                                                                o
                                                        ))),
                                          i);
                                }) &&
                                (this._setFocusAlignment(
                                    this._activeElement,
                                    !1,
                                    !0
                                ),
                                !0)
                            );
                        }),
                        (e.prototype._moveFocusUp = function () {
                            var t = this,
                                e = -1,
                                o =
                                    this._focusAlignment.left ||
                                    this._focusAlignment.x ||
                                    0;
                            return (
                                !!this._moveFocus(!1, function (r, n) {
                                    var i = -1,
                                        s = Math.floor(n.bottom),
                                        a = Math.floor(n.top),
                                        u = Math.floor(r.top);
                                    return s > u
                                        ? t._shouldWrapFocus(
                                              t._activeElement,
                                              w
                                          )
                                            ? C
                                            : D
                                        : (((-1 === e && s <= u) || a === e) &&
                                              ((e = a),
                                              (i =
                                                  o >= n.left &&
                                                  o <= n.left + n.width
                                                      ? 0
                                                      : Math.abs(
                                                            n.left +
                                                                n.width / 2 -
                                                                o
                                                        ))),
                                          i);
                                }) &&
                                (this._setFocusAlignment(
                                    this._activeElement,
                                    !1,
                                    !0
                                ),
                                !0)
                            );
                        }),
                        (e.prototype._moveFocusLeft = function (t) {
                            var e = this,
                                o = this._shouldWrapFocus(
                                    this._activeElement,
                                    I
                                );
                            return (
                                !!this._moveFocus(
                                    (0, h.zg)(t),
                                    function (r, n) {
                                        var i = -1;
                                        return (
                                            ((0, h.zg)(t)
                                                ? parseFloat(n.top.toFixed(3)) <
                                                  parseFloat(
                                                      r.bottom.toFixed(3)
                                                  )
                                                : parseFloat(
                                                      n.bottom.toFixed(3)
                                                  ) >
                                                  parseFloat(
                                                      r.top.toFixed(3)
                                                  )) &&
                                            n.right <= r.right &&
                                            e.props.direction !== s.U.vertical
                                                ? (i = r.right - n.right)
                                                : o || (i = D),
                                            i
                                        );
                                    },
                                    void 0,
                                    o
                                ) &&
                                (this._setFocusAlignment(
                                    this._activeElement,
                                    !0,
                                    !1
                                ),
                                !0)
                            );
                        }),
                        (e.prototype._moveFocusRight = function (t) {
                            var e = this,
                                o = this._shouldWrapFocus(
                                    this._activeElement,
                                    I
                                );
                            return (
                                !!this._moveFocus(
                                    !(0, h.zg)(t),
                                    function (r, n) {
                                        var i = -1;
                                        return (
                                            ((0, h.zg)(t)
                                                ? parseFloat(
                                                      n.bottom.toFixed(3)
                                                  ) >
                                                  parseFloat(r.top.toFixed(3))
                                                : parseFloat(n.top.toFixed(3)) <
                                                  parseFloat(
                                                      r.bottom.toFixed(3)
                                                  )) &&
                                            n.left >= r.left &&
                                            e.props.direction !== s.U.vertical
                                                ? (i = n.left - r.left)
                                                : o || (i = D),
                                            i
                                        );
                                    },
                                    void 0,
                                    o
                                ) &&
                                (this._setFocusAlignment(
                                    this._activeElement,
                                    !0,
                                    !1
                                ),
                                !0)
                            );
                        }),
                        (e.prototype._moveFocusPaging = function (t, e) {
                            void 0 === e && (e = !0);
                            var o = this._activeElement;
                            if (!o || !this._root.current) return !1;
                            if (
                                this._isElementInput(o) &&
                                !this._shouldInputLoseFocus(o, t)
                            )
                                return !1;
                            var r = (0, v.zj)(o);
                            if (!r) return !1;
                            var n = -1,
                                i = void 0,
                                s = -1,
                                a = -1,
                                l = r.clientHeight,
                                c = o.getBoundingClientRect();
                            do {
                                if (
                                    (o = t
                                        ? (0, u.dc)(this._root.current, o)
                                        : (0, u.TD)(this._root.current, o))
                                ) {
                                    var h = o.getBoundingClientRect(),
                                        _ = Math.floor(h.top),
                                        f = Math.floor(c.bottom),
                                        d = Math.floor(h.bottom),
                                        p = Math.floor(c.top),
                                        m =
                                            this._getHorizontalDistanceFromCenter(
                                                t,
                                                c,
                                                h
                                            );
                                    if ((t && _ > f + l) || (!t && d < p - l))
                                        break;
                                    m > -1 &&
                                        (t && _ > s
                                            ? ((s = _), (n = m), (i = o))
                                            : !t && d < a
                                              ? ((a = d), (n = m), (i = o))
                                              : (-1 === n || m <= n) &&
                                                ((n = m), (i = o)));
                                }
                            } while (o);
                            var b = !1;
                            if (i && i !== this._activeElement)
                                (b = !0),
                                    this.focusElement(i),
                                    this._setFocusAlignment(i, !1, !0);
                            else if (this.props.isCircularNavigation && e)
                                return t
                                    ? this.focusElement(
                                          (0, u.dc)(
                                              this._root.current,
                                              this._root.current
                                                  .firstElementChild,
                                              !0
                                          )
                                      )
                                    : this.focusElement(
                                          (0, u.TD)(
                                              this._root.current,
                                              this._root.current
                                                  .lastElementChild,
                                              !0,
                                              !0,
                                              !0
                                          )
                                      );
                            return b;
                        }),
                        (e.prototype._setFocusAlignment = function (t, e, o) {
                            if (
                                this.props.direction === s.U.bidirectional &&
                                (!this._focusAlignment || e || o)
                            ) {
                                var r = t.getBoundingClientRect(),
                                    n = r.left + r.width / 2,
                                    i = r.top + r.height / 2;
                                this._focusAlignment ||
                                    (this._focusAlignment = {left: n, top: i}),
                                    e && (this._focusAlignment.left = n),
                                    o && (this._focusAlignment.top = i);
                            }
                        }),
                        (e.prototype._isImmediateDescendantOfZone = function (
                            t
                        ) {
                            return this._getOwnerZone(t) === this._root.current;
                        }),
                        (e.prototype._getOwnerZone = function (t) {
                            for (
                                var e = (0, l.G)(t, R);
                                e &&
                                e !== this._root.current &&
                                e !== this._getDocument().body;

                            ) {
                                if ((0, u.jz)(e)) return e;
                                e = (0, l.G)(e, R);
                            }
                            return e;
                        }),
                        (e.prototype._updateTabIndexes = function (t) {
                            !this._activeElement &&
                                this.props.defaultTabbableElement &&
                                'function' ==
                                    typeof this.props.defaultTabbableElement &&
                                (this._activeElement =
                                    this.props.defaultTabbableElement(
                                        this._root.current
                                    )),
                                !t &&
                                    this._root.current &&
                                    ((this._defaultFocusElement = null),
                                    (t = this._root.current),
                                    this._activeElement &&
                                        !(0, d.t)(t, this._activeElement) &&
                                        (this._activeElement = null)),
                                this._activeElement &&
                                    !(0, u.MW)(this._activeElement) &&
                                    (this._activeElement = null);
                            for (
                                var e = t && t.children, o = 0;
                                e && o < e.length;
                                o++
                            ) {
                                var r = e[o];
                                (0, u.jz)(r)
                                    ? 'true' === r.getAttribute(y) &&
                                      (this._isInnerZone ||
                                      ((this._activeElement ||
                                          this._defaultFocusElement) &&
                                          this._activeElement !== r)
                                          ? '-1' !== r.getAttribute(k) &&
                                            r.setAttribute(k, '-1')
                                          : ((this._defaultFocusElement = r),
                                            '0' !== r.getAttribute(k) &&
                                                r.setAttribute(k, '0')))
                                    : (r.getAttribute &&
                                          'false' === r.getAttribute(y) &&
                                          r.setAttribute(k, '-1'),
                                      (0, u.MW)(r)
                                          ? this.props.disabled
                                              ? r.setAttribute(k, '-1')
                                              : this._isInnerZone ||
                                                  ((this._activeElement ||
                                                      this
                                                          ._defaultFocusElement) &&
                                                      this._activeElement !== r)
                                                ? '-1' !== r.getAttribute(k) &&
                                                  r.setAttribute(k, '-1')
                                                : ((this._defaultFocusElement =
                                                      r),
                                                  '0' !== r.getAttribute(k) &&
                                                      r.setAttribute(k, '0'))
                                          : 'svg' === r.tagName &&
                                            'false' !==
                                                r.getAttribute('focusable') &&
                                            r.setAttribute(
                                                'focusable',
                                                'false'
                                            )),
                                    this._updateTabIndexes(r);
                            }
                        }),
                        (e.prototype._isContentEditableElement = function (t) {
                            return (
                                t &&
                                'true' === t.getAttribute('contenteditable')
                            );
                        }),
                        (e.prototype._isElementInput = function (t) {
                            return !(
                                !t ||
                                !t.tagName ||
                                ('input' !== t.tagName.toLowerCase() &&
                                    'textarea' !== t.tagName.toLowerCase())
                            );
                        }),
                        (e.prototype._shouldInputLoseFocus = function (t, e) {
                            if (
                                !this._processingTabKey &&
                                t &&
                                t.type &&
                                M.indexOf(t.type.toLowerCase()) > -1
                            ) {
                                var o = t.selectionStart,
                                    r = o !== t.selectionEnd,
                                    n = t.value,
                                    i = t.readOnly;
                                if (
                                    r ||
                                    (o > 0 && !e && !i) ||
                                    (o !== n.length && e && !i) ||
                                    (this.props.handleTabKey &&
                                        (!this.props
                                            .shouldInputLoseFocusOnArrowKey ||
                                            !this.props.shouldInputLoseFocusOnArrowKey(
                                                t
                                            )))
                                )
                                    return !1;
                            }
                            return !0;
                        }),
                        (e.prototype._shouldWrapFocus = function (t, e) {
                            return (
                                !this.props.checkForNoWrap || (0, u.mM)(t, e)
                            );
                        }),
                        (e.prototype._portalContainsElement = function (t) {
                            return (
                                t &&
                                !!this._root.current &&
                                (0, b.w)(t, this._root.current)
                            );
                        }),
                        (e.prototype._getDocument = function () {
                            return (0, g.M)(this._root.current);
                        }),
                        (e.defaultProps = {
                            isCircularNavigation: !1,
                            direction: s.U.bidirectional,
                            shouldRaiseClicks: !0,
                            'data-tabster': '{"uncontrolled": {}}',
                        }),
                        e
                    );
                })(i.Component);
        },
        12436: (t, e, o) => {
            o.d(e, {J: () => n, U: () => r});
            var r,
                n = {none: 0, all: 1, inputOnly: 2};
            !(function (t) {
                (t[(t.vertical = 0)] = 'vertical'),
                    (t[(t.horizontal = 1)] = 'horizontal'),
                    (t[(t.bidirectional = 2)] = 'bidirectional'),
                    (t[(t.domOrder = 3)] = 'domOrder');
            })(r || (r = {}));
        },
    },
]);
