'use strict';
(self.webpackChunkdash_query_builder =
    self.webpackChunkdash_query_builder || []).push([
    [350],
    {
        12874: (e, n, r) => {
            r.d(n, {jz: () => u});
            var t,
                o = function () {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (
                                    var n, r = 1, t = arguments.length;
                                    r < t;
                                    r++
                                )
                                    for (var o in (n = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(
                                            n,
                                            o
                                        ) && (e[o] = n[o]);
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                },
                l = 'undefined' == typeof window ? r.g : window,
                i = l && l.CSPSettings && l.CSPSettings.nonce,
                a =
                    ((t = l.__themeState__ || {
                        theme: void 0,
                        lastStyleElement: void 0,
                        registeredStyles: [],
                    }).runState ||
                        (t = o(o({}, t), {
                            perf: {count: 0, duration: 0},
                            runState: {flushTimer: 0, mode: 0, buffer: []},
                        })),
                    t.registeredThemableStyles ||
                        (t = o(o({}, t), {registeredThemableStyles: []})),
                    (l.__themeState__ = t),
                    t);
            function u(e) {
                (a.theme = e),
                    (function () {
                        if (a.theme) {
                            for (
                                var e = [],
                                    n = 0,
                                    r = a.registeredThemableStyles;
                                n < r.length;
                                n++
                            ) {
                                var t = r[n];
                                e.push(t.themableStyle);
                            }
                            e.length > 0 &&
                                (void 0 === (l = 1) && (l = 3),
                                (3 !== l && 2 !== l) ||
                                    (c(a.registeredStyles),
                                    (a.registeredStyles = [])),
                                (3 !== l && 1 !== l) ||
                                    (c(a.registeredThemableStyles),
                                    (a.registeredThemableStyles = [])),
                                (o = [].concat.apply([], e)),
                                a.loadStyles
                                    ? a.loadStyles(d(o).styleString, o)
                                    : (function (e) {
                                          if ('undefined' != typeof document) {
                                              var n =
                                                      document.getElementsByTagName(
                                                          'head'
                                                      )[0],
                                                  r =
                                                      document.createElement(
                                                          'style'
                                                      ),
                                                  t = d(e),
                                                  o = t.styleString,
                                                  l = t.themable;
                                              r.setAttribute(
                                                  'data-load-themed-styles',
                                                  'true'
                                              ),
                                                  i &&
                                                      r.setAttribute(
                                                          'nonce',
                                                          i
                                                      ),
                                                  r.appendChild(
                                                      document.createTextNode(o)
                                                  ),
                                                  a.perf.count++,
                                                  n.appendChild(r);
                                              var u =
                                                  document.createEvent(
                                                      'HTMLEvents'
                                                  );
                                              u.initEvent(
                                                  'styleinsert',
                                                  !0,
                                                  !1
                                              ),
                                                  (u.args = {newStyle: r}),
                                                  document.dispatchEvent(u);
                                              var c = {
                                                  styleElement: r,
                                                  themableStyle: e,
                                              };
                                              l
                                                  ? a.registeredThemableStyles.push(
                                                        c
                                                    )
                                                  : a.registeredStyles.push(c);
                                          }
                                      })(o));
                        }
                        var o, l;
                    })();
            }
            function c(e) {
                e.forEach(function (e) {
                    var n = e && e.styleElement;
                    n && n.parentElement && n.parentElement.removeChild(n);
                });
            }
            function d(e) {
                var n = a.theme,
                    r = !1;
                return {
                    styleString: (e || [])
                        .map(function (e) {
                            var t = e.theme;
                            if (t) {
                                r = !0;
                                var o = n ? n[t] : void 0,
                                    l = e.defaultValue || 'inherit';
                                return (
                                    n &&
                                        !o &&
                                        console &&
                                        !(t in n) &&
                                        'undefined' != typeof DEBUG &&
                                        DEBUG &&
                                        console.warn(
                                            'Theming value not provided for "'
                                                .concat(
                                                    t,
                                                    '". Falling back to "'
                                                )
                                                .concat(l, '".')
                                        ),
                                    o || l
                                );
                            }
                            return e.rawString;
                        })
                        .join(''),
                    themable: r,
                };
            }
        },
        3472: (e, n, r) => {
            r.d(n, {Z: () => a});
            var t = r(84039),
                o = r.n(t),
                l = r(76499),
                i = r.n(l)()(o());
            i.push([
                e.id,
                '/******************************************************************************/\n/** MAIN ********************************************************************/\n/******************************************************************************/\n.qb-drag-handler, .qb-draggable, .query-builder {\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.rule--header:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n\n.query-builder {\n  overflow: hidden;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.25;\n  margin: 1rem;\n}\n\n.group {\n  background: rgba(250, 240, 210, 0.5);\n  border: 1px solid #DCC896;\n}\n\n.rule {\n  background-color: white;\n  border: 1px solid transparent;\n  padding: 10px;\n}\n\n.rule-with-error .rule {\n  border: 1px solid #e0a1a1;\n}\n\n.rule--body {\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n}\n\n.rule--body--wrapper {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.rule--error {\n  color: red;\n  margin-bottom: -5px;\n  margin-top: 5px;\n}\n\n.group-or-rule {\n  border-radius: 2px;\n  position: relative;\n}\n\n.rule_group {\n  background: rgba(255, 252, 242, 0.5);\n  border: 1px solid #f9f1dd;\n}\n\n.locked {\n  border: 1px dashed red;\n}\n\n.qb-placeholder {\n  border: 1px dashed gray;\n}\n\n/******************************************************************************/\n/** DRAG *********************************************************************/\n/******************************************************************************/\n.query-builder.qb-dragging {\n  cursor: -webkit-grabbing !important;\n  cursor: grabbing !important;\n}\n.query-builder.qb-dragging button {\n  pointer-events: none;\n}\n\n.qb-draggable {\n  pointer-events: none;\n  position: absolute;\n  opacity: 0.7;\n  z-index: 1000;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.qb-drag-handler {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n/******************************************************************************/\n/** TREE LINES *********************************************************************/\n/******************************************************************************/\n.group--header:not(.no--children):not(.hide--conjs) {\n  position: relative;\n}\n.group--header:not(.no--children):not(.hide--conjs)::before {\n  z-index: 0;\n  content: "";\n  position: absolute;\n  border-width: 0 0 0 2px;\n  border-color: #ccc;\n  border-style: solid;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.group--header:not(.no--children):not(.hide--conjs).hide--line::before {\n  border-color: rgba(128, 128, 128, 0.1);\n}\n.group--header:not(.no--children):not(.hide--conjs)::before {\n  top: 20px;\n  height: calc(100% + 10px - 20px);\n  left: 11px;\n  width: 13px;\n}\n\n.group--children > .group-or-rule-container > .group-or-rule::before {\n  border-width: 0 0 2px 2px;\n}\n.group--children > .group-or-rule-container > .group-or-rule::after {\n  border-width: 0 0 0 2px;\n}\n.group--children > .group-or-rule-container > .group-or-rule::before, .group--children > .group-or-rule-container > .group-or-rule::after {\n  content: "";\n  position: absolute;\n  border-color: #ccc;\n  border-style: solid;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.group--children > .group-or-rule-container > .group-or-rule::before {\n  top: -1px;\n  height: calc(50% + 1px + 1px);\n}\n.group--children > .group-or-rule-container > .group-or-rule::after {\n  top: calc(50% + 1px);\n  height: calc(50% - 1px + 10px + 2px);\n}\n.group--children > .group-or-rule-container > .group-or-rule::before, .group--children > .group-or-rule-container > .group-or-rule::after {\n  left: -14px;\n  width: 13px;\n}\n.group--children > .group-or-rule-container:last-child > .group-or-rule::before {\n  border-radius: 0 0 0 2px;\n}\n.group--children > .group-or-rule-container:last-child > .group-or-rule::after {\n  display: none;\n}\n.group--children.hide--conjs > .group-or-rule-container:first-child > .group-or-rule::before {\n  display: none;\n}\n.group--children.hide--conjs > .group-or-rule-container:first-child > .group-or-rule::after {\n  border-radius: 2px 0 0 0;\n  border-width: 2px 0 0 2px;\n}\n.group--children.hide--conjs > .group-or-rule-container:first-child > .group-or-rule::after {\n  top: calc(50% - 1px);\n  height: calc(50% + 1px + 10px + 2px);\n}\n.group--children.hide--line > .group-or-rule-container > .group-or-rule::before, .group--children.hide--line > .group-or-rule-container > .group-or-rule::after {\n  border-color: rgba(128, 128, 128, 0.1);\n}\n\n.rule_group--children > .group-or-rule-container:first-child > .group-or-rule::before {\n  display: none;\n}\n.rule_group--children > .group-or-rule-container:first-child > .group-or-rule::after {\n  border-radius: 2px 0 0 0;\n  border-width: 2px 0 0 2px;\n}\n.rule_group--children > .group-or-rule-container:first-child > .group-or-rule::after {\n  top: calc(50% - 1px);\n  height: calc(50% + 1px + 5px + 2px);\n}\n.rule_group--children > .group-or-rule-container > .group-or-rule::before {\n  top: -1px;\n  height: calc(50% + 1px + 1px);\n}\n.rule_group--children > .group-or-rule-container > .group-or-rule::after {\n  top: calc(50% + 1px);\n  height: calc(50% - 1px + 5px + 2px);\n}\n.rule_group--children > .group-or-rule-container > .group-or-rule::before, .rule_group--children > .group-or-rule-container > .group-or-rule::after {\n  left: -11px;\n  width: 10px;\n}\n\n.switch_group > .group--children > .group-or-rule-container > .group-or-rule::before {\n  top: -2px;\n  height: calc(50% + 1px + 2px);\n}\n.switch_group > .group--children > .group-or-rule-container > .group-or-rule::after {\n  top: calc(50% + 1px);\n  height: calc(50% - 1px + 10px + 4px);\n}\n.switch_group > .group--children > .group-or-rule-container > .group-or-rule::before, .switch_group > .group--children > .group-or-rule-container > .group-or-rule::after {\n  left: -15px;\n  width: 13px;\n}\n.switch_group > .group--header:not(.no--children):not(.hide--conjs)::before {\n  top: 20px;\n  height: calc(100% + 10px - 20px);\n  left: 11px;\n  width: 13px;\n}\n\n.qb-draggable::before, .qb-draggable::after {\n  display: none;\n}\n\n/******************************************************************************/\n/** GROUP *********************************************************************/\n/******************************************************************************/\n.group--header,\n.group--footer {\n  display: flex;\n  align-items: stretch;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.group-or-rule-container {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding-right: 10px;\n}\n.group-or-rule-container:first-child {\n  margin-top: 0px !important;\n}\n.group-or-rule-container:last-child {\n  margin-bottom: 0px !important;\n}\n\n.group--drag-handler {\n  margin-right: 8px;\n  margin-top: 3px;\n  position: relative;\n  align-self: center;\n}\n\n.group--conjunctions {\n  flex-shrink: 0;\n  display: flex;\n}\n.group--conjunctions .group--drag-handler {\n  margin-left: 10px;\n}\n\n.group--children {\n  padding-left: 24px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.group--children .group--field--count--rule {\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.group--conjunctions.hide--conj {\n  opacity: 0.3;\n}\n\n.group--actions {\n  margin-left: 10px;\n  flex: 1;\n  display: flex;\n}\n.group--actions--tl, .group--actions--bl {\n  justify-content: flex-start;\n}\n.group--actions--tl {\n  margin-left: 20px;\n}\n.group--actions--tc, .group--actions--bc {\n  justify-content: center;\n}\n.group--actions--tr, .group--actions--br {\n  justify-content: flex-end;\n}\n\n/******************************************************************************/\n/** CASE_GROUP *********************************************************************/\n/******************************************************************************/\n.case_group {\n  border-width: 2px;\n}\n\n.case_group--body {\n  display: flex;\n  flex-direction: row;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.case_group--body .case_group--children {\n  flex: auto;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n.case_group--body .case_group--value {\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-right: 10px;\n}\n\n/******************************************************************************/\n/** RULE_GROUP *********************************************************************/\n/******************************************************************************/\n.rule_group {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 10px;\n}\n.rule_group .group--field {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  align-self: center;\n}\n.rule_group .group--actions {\n  margin-left: 10px;\n  align-self: center;\n  flex: 0;\n}\n.rule_group .rule_group--children {\n  flex: 1;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding-left: 18px;\n}\n.rule_group .rule_group--children .group-or-rule-container {\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-right: 5px;\n}\n.rule_group .rule_group--children.one--child {\n  padding-left: 9px;\n}\n\n/******************************************************************************/\n/** RULE_GROUP_EXT *********************************************************************/\n/******************************************************************************/\n.rule_group_ext .group--actions {\n  flex: none;\n}\n\n.group--header.hide--drag.with--conjs > .group--field--count--rule {\n  margin-left: 20px;\n}\n\n/******************************************************************************/\n/** RULE **********************************************************************/\n/******************************************************************************/\n.rule {\n  flex: 1;\n  display: flex;\n}\n\n.rule--header {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n}\n\n.rule--drag-handler {\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n}\n\n.rule--field, .rule--fieldsrc, .group--field, .rule--operator, .rule--value, .rule--operator-options, .rule--widget, .widget--widget, .widget--valuesrc, .widget--sep, .operator--options--sep, .rule--before-widget, .rule--after-widget {\n  display: inline-block;\n}\n\n.widget--sep, .operator--options--sep, .rule--func--bracket-before, .rule--func--bracket-after, .rule--func--arg-sep {\n  vertical-align: bottom;\n  align-self: flex-end;\n  margin-bottom: 10px;\n}\n\n.rule--func--arg-sep {\n  margin-bottom: 5px;\n}\n\n.widget--sep {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.widget--sep.widget--sep-first {\n  margin-right: 10px;\n  margin-left: 0;\n}\n\n.rule--operator {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.operator--options--sep {\n  margin-right: 10px;\n}\n\n.rule--func--arg-sep {\n  margin-left: 3px;\n  margin-right: 6px;\n}\n\n.rule--func--bracket-after {\n  margin-left: 5px;\n  margin-right: 2px;\n}\n\n.rule--func--bracket-before {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.widget--valuesrc {\n  vertical-align: top;\n}\n\n.rule--fieldsrc {\n  vertical-align: top;\n}\n\n.operator--options {\n  display: flex;\n}\n\n.rule--operator-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.rule--operator-text-wrapper {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\ndiv.tooltip-inner {\n  max-width: 500px;\n}\n\n.rule--label {\n  display: block;\n  font-weight: bold;\n}\n\n/******************************************************************************/\n/** FUNC **********************************************************************/\n/******************************************************************************/\n.rule--func--wrapper, .rule--func, .rule--func--args, .rule--func--arg, .rule--func--arg-value, .rule--func--bracket-before, .rule--func--bracket-after, .rule--func--arg-sep, .rule--func--arg-label, .rule--func--arg-label-sep {\n  display: inline-block;\n}\n\n.rule--func--wrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.rule--func--args {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.rule--func--arg {\n  display: flex;\n}\n\n.rule--field-wrapper,\n.rule--field--func,\n.rule--func--wrapper,\n.rule--func--args,\n.rule--func--arg,\n.rule--func--arg-value,\n.rule--func--arg-value > .rule--widget,\n.widget--func {\n  display: contents;\n}\n\n.rule--func, .widget--widget {\n  margin-bottom: 2px;\n}\n\n.rule--body--wrapper {\n  margin-bottom: -2px;\n}\n\n/******************************************************************************/\n/** Minimalism ****************************************************************/\n/******************************************************************************/\n.qb-lite .group--drag-handler, .qb-lite .group--actions {\n  transition: opacity 0.2s;\n}\n.qb-lite .group--header:hover .group--header .group--drag-handler, .qb-lite .group--header:hover .group--header .group--actions,\n.qb-lite .group--header:not(:hover) .group--drag-handler,\n.qb-lite .group--header:not(:hover) .group--actions,\n.qb-lite .rule_group:not(:hover) .group--drag-handler,\n.qb-lite .rule_group:not(:hover) .group--actions {\n  opacity: 0;\n}\n.qb-lite .rule--fieldsrc, .qb-lite .widget--valuesrc, .qb-lite .rule--drag-handler, .qb-lite .rule--header {\n  transition: opacity 0.2s;\n}\n.qb-lite .rule:hover .rule .rule--fieldsrc, .qb-lite .rule:hover .rule .widget--valuesrc, .qb-lite .rule:hover .rule .rule--drag-handler, .qb-lite .rule:hover .rule .rule--header,\n.qb-lite .rule:not(:hover) .rule--fieldsrc,\n.qb-lite .rule:not(:hover) .widget--valuesrc,\n.qb-lite .rule:not(:hover) .rule--drag-handler,\n.qb-lite .rule:not(:hover) .rule--header {\n  opacity: 0;\n}\n.qb-lite.qb-dragging .rule--fieldsrc, .qb-lite.qb-dragging .widget--valuesrc, .qb-lite.qb-dragging .rule--drag-handler, .qb-lite.qb-dragging .rule--header, .qb-lite.qb-dragging .group--drag-handler, .qb-lite.qb-dragging .group--actions {\n  opacity: 0 !important;\n}\n\n/******************************************************************************/\n/** Shrink textarea ***********************************************************/\n/******************************************************************************/\n.rule--body.can--shrink--value .rule--value {\n  flex: 1;\n}\n.rule--body.can--shrink--value .rule--value > .rule--widget {\n  width: 100%;\n  display: flex;\n}\n.rule--body.can--shrink--value .rule--value > .rule--widget .widget--widget {\n  flex: 1;\n}\n\n.widget--widget > .ms-Toggle {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.rule--body--wrapper .rule--value {\n  align-items: center;\n}\n\n.group--actions > .ms-Button {\n  height: 100%;\n}\n\n.rule--header > .ms-Button {\n  height: 100%;\n}\n\n.group--conjunctions > .ms-Button {\n  min-width: auto;\n  padding: 0px 4px;\n}\n\n.rule_group .group--actions > .ms-Button {\n  padding: 8px 0;\n}\n\n.widget--valuesrc span .ms-Icon {\n  transform: rotate(90deg);\n}\n\n.group--header.no--children > .group--actions {\n  min-height: 32px;\n}\n',
                '',
            ]);
            const a = i;
        },
        31618: (e, n, r) => {
            r.r(n), r.d(n, {default: () => te});
            var t = r(98314),
                o = r(65812),
                l = r.n(o),
                i = r(58457),
                a = r(15329),
                u = r(28553);
            var c = r(64778),
                d = r(30631),
                p = r(78492),
                s = p.cQ.moment,
                g = r(59087),
                f = r(65167),
                h = p.cQ.moment,
                b = p.cQ.moment,
                m = r(90278),
                x = p.cQ.ListUtils.mapListValues;
            var y = r(93030),
                v = r(82584),
                w = ['width'],
                E = r(83666);
            var S = r(77188),
                C = p.cQ.ListUtils.mapListValues,
                k = r(38582);
            function I(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t;
            }
            var _ = r(56316),
                j = p.cQ.DragIcon,
                F = {
                    addRuleGroup: 'CirclePlus',
                    addRuleGroupExt: 'Add',
                    addRule: 'Add',
                    addGroup: 'CirclePlus',
                    delGroup: 'Delete',
                    delRuleGroup: 'Delete',
                    delRule: 'Delete',
                    drag: 'GripperBarHorizontal',
                };
            var O = r(83016),
                U = r(49864),
                W = r(36797),
                q = r(96623),
                R = {addRuleGroup: !0, delRuleGroup: !0, delRule: !0},
                P = {addRuleGroup: !0};
            (0, a.l)();
            const T = {
                FluentUITextWidget: function (e) {
                    var n = e.value,
                        r = e.setValue,
                        t = e.readonly,
                        o = e.placeholder,
                        i = e.maxLength,
                        a = n || '';
                    return l().createElement(u.n, {
                        value: a,
                        placeholder: o,
                        disabled: t,
                        onChange: function (e, n) {
                            '' === n && (n = void 0), r(n);
                        },
                        maxLength: i,
                    });
                },
                FluentUITextAreaWidget: function (e) {
                    var n = e.value,
                        r = e.setValue,
                        t = (e.config, e.readonly),
                        o = e.placeholder,
                        i = e.maxLength,
                        a = e.maxRows,
                        d = (e.fullWidth, e.customProps),
                        p = n || '';
                    return l().createElement(
                        u.n,
                        (0, c.Z)(
                            {
                                readonly: t,
                                multiline: !0,
                                rows: a,
                                maxLength: i,
                                placeholder: o,
                                value: p,
                                onChange: function (e) {
                                    var n = e.target.value;
                                    '' === n && (n = void 0), r(n);
                                },
                            },
                            d
                        )
                    );
                },
                FluentUIDateWidget: function (e) {
                    var n = e.value,
                        r = e.setValue,
                        t = (e.config, e.valueFormat),
                        o = e.dateFormat,
                        i = e.readonly,
                        a = e.customProps,
                        u = e.placeholder,
                        p = n ? s(n, t) : void 0,
                        g = p ? p.toDate() : void 0;
                    return l().createElement(
                        d.M,
                        (0, c.Z)(
                            {
                                disabled: i,
                                value: g,
                                onSelectDate: function (e) {
                                    ('' == e ||
                                        (e instanceof Date && isNaN(e))) &&
                                        (e = void 0);
                                    var n = e ? s(e).format(t) : void 0;
                                    r(n);
                                },
                                style: {marginRight: '0.25rem', width: '150px'},
                                placeholder: u,
                                formatDate: function (e) {
                                    return s(e).format(o);
                                },
                            },
                            a
                        )
                    );
                },
                FluentUIDateTimeWidget: function (e) {
                    var n = e.value,
                        r = e.setValue,
                        t = (e.config, e.valueFormat),
                        i = e.dateFormat,
                        a = (e.timeFormat, e.use12Hours),
                        u = e.readonly,
                        c = (e.customProps, n ? h(n, t) : void 0),
                        p = c ? c.toDate() : void 0,
                        s = (0, o.useState)(p),
                        b = (0, g.Z)(s, 2),
                        m = b[0],
                        x = b[1],
                        y = -1 != t.indexOf(':ss');
                    return l().createElement(
                        'div',
                        {style: {display: 'flex', flexDirection: 'row'}},
                        l().createElement(d.M, {
                            disabled: u,
                            value: p,
                            formatDate: function (e) {
                                return h(e).format(i);
                            },
                            onSelectDate: function (e) {
                                var n;
                                if (
                                    (('' == e ||
                                        (e instanceof Date && isNaN(e))) &&
                                        (e = void 0),
                                    e)
                                ) {
                                    var o = h(e);
                                    if (m) {
                                        var l = h(m);
                                        o.set('hour', l.get('hour')),
                                            o.set('minute', l.get('minute')),
                                            o.set('second', l.get('second'));
                                    }
                                    n = o.format(t);
                                }
                                n && r(n);
                            },
                            style: {width: '150px'},
                        }),
                        l().createElement(f.j, {
                            useHour12: a,
                            value: m,
                            showSeconds: y,
                            disabled: u,
                            onChange: function (e, n) {
                                var o;
                                ('' == n || (n instanceof Date && isNaN(n))) &&
                                    (n = void 0),
                                    x(n);
                                var l = n ? h(n) : void 0;
                                if (c) {
                                    var i = h(c);
                                    l &&
                                        (i.set('hour', l.get('hour')),
                                        i.set('minute', l.get('minute')),
                                        i.set('second', l.get('second'))),
                                        (o = i.format(t));
                                }
                                o && r(o);
                            },
                            useComboBoxAsMenuWidth: !0,
                            style: {marginRight: '5px'},
                        })
                    );
                },
                FluentUITimeWidget: function (e) {
                    var n = e.value,
                        r = e.setValue,
                        t = (e.config, e.valueFormat),
                        o = e.use12Hours,
                        i = e.readonly,
                        a = e.customProps,
                        u = n ? b(n, t) : void 0,
                        d = u ? u.toDate() : void 0,
                        p = -1 != t.indexOf(':ss');
                    return l().createElement(
                        f.j,
                        (0, c.Z)(
                            {
                                styles: {
                                    optionsContainerWrapper: {height: '500px'},
                                },
                                useHour12: o,
                                onChange: function (e, n) {
                                    ('' == n ||
                                        (n instanceof Date && isNaN(n))) &&
                                        (n = void 0);
                                    var o = n ? b(n).format(t) : void 0;
                                    r(o);
                                },
                                disabled: i,
                                allowFreeform: !0,
                                showSeconds: p,
                                value: d,
                                useComboBoxAsMenuWidth: !0,
                            },
                            a
                        )
                    );
                },
                FluentUISelectWidget: function (e) {
                    var n = e.listValues,
                        r = e.value,
                        t = e.setValue,
                        o = (e.allowCustomValues, e.readonly),
                        i = e.customProps,
                        a = e.placeholder;
                    return l().createElement(
                        m.L,
                        (0, c.Z)(
                            {
                                placeholder: a,
                                options: (function (e) {
                                    var r = [];
                                    return (
                                        x(n, function (e) {
                                            var n = e.title,
                                                t = e.value;
                                            r.push({key: t, text: n});
                                        }),
                                        r
                                    );
                                })(),
                                selectedKey: r,
                                onChange: function (e, n) {
                                    void 0 !== n.key && t(n.key.toString());
                                },
                                dropdownWidth: 'auto',
                                disabled: o,
                            },
                            i
                        )
                    );
                },
                FluentUINumberWidget: function (e) {
                    var n = e.value,
                        r = e.setValue,
                        t = e.readonly,
                        o = e.min,
                        i = e.max,
                        a = e.step,
                        c = e.placeholder;
                    return l().createElement(u.n, {
                        type: 'number',
                        value: n,
                        placeholder: c,
                        disabled: t,
                        min: o,
                        max: i,
                        step: a,
                        onChange: function (e, n) {
                            var t;
                            (t =
                                '' === n || null == n
                                    ? void 0
                                    : Number.isInteger(a)
                                      ? parseInt(n)
                                      : parseFloat(n)),
                                r(t);
                        },
                    });
                },
                FluentUISliderWidget: function (e) {
                    var n = e.config,
                        r = e.placeholder,
                        t = e.customProps,
                        o = e.value,
                        i = e.setValue,
                        a = e.min,
                        d = e.max,
                        p = e.step,
                        s = e.marks,
                        g = e.readonly,
                        f = n.settings.defaultSliderWidth,
                        h = t || {},
                        b = h.width,
                        m = (0, y.Z)(h, w),
                        x = m.input || {},
                        E = m.slider || m,
                        S = l().createElement(
                            u.n,
                            (0, c.Z)(
                                {
                                    type: 'number',
                                    style: {width: 'auto'},
                                    value: o,
                                    min: a,
                                    max: d,
                                    step: p,
                                    placeholder: r,
                                    disabled: g,
                                    onChange: function (e, n) {
                                        (n =
                                            '' === n || null === n
                                                ? void 0
                                                : Number(n)),
                                            i(n);
                                    },
                                },
                                x
                            )
                        ),
                        C = l().createElement(
                            v.i,
                            (0, c.Z)(
                                {
                                    min: a,
                                    max: d,
                                    step: p,
                                    value: o,
                                    disabled: g,
                                    marks: s,
                                    showValue: !1,
                                    onChange: function (e) {
                                        (e =
                                            '' === e || null === e
                                                ? void 0
                                                : Number(e)),
                                            i(e);
                                    },
                                },
                                E
                            )
                        ),
                        k = {width: b || f};
                    return l().createElement(
                        'div',
                        {style: {display: 'flex', flexDirection: 'row'}},
                        S,
                        l().createElement('div', {style: k}, C)
                    );
                },
                FluentUIBooleanWidget: function (e) {
                    var n = e.value,
                        r = e.setValue,
                        t = e.labelYes,
                        o = e.labelNo,
                        i = e.readonly,
                        a = 'string' == typeof t ? t : 'Yes',
                        u = 'string' == typeof o ? o : 'No';
                    return l().createElement(E.Z, {
                        disabled: i,
                        onText: a,
                        offText: u,
                        onChange: function () {
                            return r(!n);
                        },
                    });
                },
                FluentUIMultiSelectWidget: function (e) {
                    var n = e.listValues,
                        r = e.value,
                        t = e.setValue,
                        i = (e.allowCustomValues, e.readonly),
                        a = (e.customProps, e.placeholder),
                        u = (0, o.useState)(null != r ? r : []),
                        c = (0, g.Z)(u, 2),
                        d = c[0],
                        p = c[1];
                    return l().createElement(m.L, {
                        placeholder: a || 'Select options',
                        selectedKeys: d,
                        onChange: function (e, n) {
                            n &&
                                (p(
                                    n.selected
                                        ? [].concat((0, S.Z)(d), [n.key])
                                        : d.filter(function (e) {
                                              return e !== n.key;
                                          })
                                ),
                                t(d));
                        },
                        multiSelect: !0,
                        options: C(n, function (e) {
                            var n = e.title;
                            return {key: e.value, text: n};
                        }),
                        disabled: i,
                    });
                },
                FluentUIFieldSelect: function (e) {
                    var n = e.items,
                        r = e.setField,
                        t = e.selectedKey,
                        o = e.placeholder,
                        i = e.errorText;
                    return l().createElement(m.L, {
                        placeholder: o,
                        options: (function e(n) {
                            var r =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : 0,
                                t = [],
                                o = 0;
                            return (
                                Object.keys(n).map(function (i) {
                                    var a = {},
                                        u = n[i],
                                        c = '  '.repeat(r),
                                        d = u.items,
                                        p = u.path,
                                        s = u.label,
                                        g = u.disabled;
                                    if (d) {
                                        (a.key = p),
                                            (a.title = s),
                                            (a.text = c + s),
                                            (a.itemType = k.F.Header);
                                        var f = e(d, r + 1);
                                        t.push(a);
                                        var h,
                                            b = (function (e, n) {
                                                var r =
                                                    ('undefined' !=
                                                        typeof Symbol &&
                                                        e[Symbol.iterator]) ||
                                                    e['@@iterator'];
                                                if (!r) {
                                                    if (
                                                        Array.isArray(e) ||
                                                        (r = (function (e, n) {
                                                            if (e) {
                                                                if (
                                                                    'string' ==
                                                                    typeof e
                                                                )
                                                                    return I(
                                                                        e,
                                                                        n
                                                                    );
                                                                var r =
                                                                    Object.prototype.toString
                                                                        .call(e)
                                                                        .slice(
                                                                            8,
                                                                            -1
                                                                        );
                                                                return (
                                                                    'Object' ===
                                                                        r &&
                                                                        e.constructor &&
                                                                        (r =
                                                                            e
                                                                                .constructor
                                                                                .name),
                                                                    'Map' ===
                                                                        r ||
                                                                    'Set' === r
                                                                        ? Array.from(
                                                                              e
                                                                          )
                                                                        : 'Arguments' ===
                                                                                r ||
                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                r
                                                                            )
                                                                          ? I(
                                                                                e,
                                                                                n
                                                                            )
                                                                          : void 0
                                                                );
                                                            }
                                                        })(e)) ||
                                                        (n &&
                                                            e &&
                                                            'number' ==
                                                                typeof e.length)
                                                    ) {
                                                        r && (e = r);
                                                        var t = 0,
                                                            o = function () {};
                                                        return {
                                                            s: o,
                                                            n: function () {
                                                                return t >=
                                                                    e.length
                                                                    ? {done: !0}
                                                                    : {
                                                                          done: !1,
                                                                          value: e[
                                                                              t++
                                                                          ],
                                                                      };
                                                            },
                                                            e: function (e) {
                                                                throw e;
                                                            },
                                                            f: o,
                                                        };
                                                    }
                                                    throw new TypeError(
                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                                    );
                                                }
                                                var l,
                                                    i = !0,
                                                    a = !1;
                                                return {
                                                    s: function () {
                                                        r = r.call(e);
                                                    },
                                                    n: function () {
                                                        var e = r.next();
                                                        return (i = e.done), e;
                                                    },
                                                    e: function (e) {
                                                        (a = !0), (l = e);
                                                    },
                                                    f: function () {
                                                        try {
                                                            i ||
                                                                null ==
                                                                    r.return ||
                                                                r.return();
                                                        } finally {
                                                            if (a) throw l;
                                                        }
                                                    },
                                                };
                                            })(f);
                                        try {
                                            for (b.s(); !(h = b.n()).done; ) {
                                                var m = h.value;
                                                t.push(m);
                                            }
                                        } catch (e) {
                                            b.e(e);
                                        } finally {
                                            b.f();
                                        }
                                        t.push({
                                            key: 'divider_' + o.toString(),
                                            text: '-',
                                            title: '',
                                            itemType: k.F.Divider,
                                        }),
                                            (o += 1);
                                    } else {
                                        var x = u.matchesType
                                            ? l().createElement(
                                                  'b',
                                                  null,
                                                  c + s
                                              )
                                            : c + s;
                                        (a.key = p),
                                            (a.title = s),
                                            (a.text = x),
                                            (a.disabled = g),
                                            t.push(a);
                                    }
                                }),
                                t
                            );
                        })(n),
                        selectedKey: t,
                        onChange: function (e, n) {
                            void 0 !== n.key && r(n.key.toString());
                        },
                        onRenderTitle: function (e) {
                            var n = e[0];
                            return l().createElement(
                                'div',
                                null,
                                l().createElement('span', null, n.title)
                            );
                        },
                        dropdownWidth: 'auto',
                        styles: {title: {color: i ? 'red' : null}},
                    });
                },
                FluentUIIcon: function (e) {
                    var n = e.type,
                        r = e.readonly,
                        t = e.renderBtn,
                        o = e.renderDefaultButton;
                    return F[n] || 'drag' !== n
                        ? F[n]
                            ? t
                                ? t({iconProps: {iconName: F[n]}})
                                : l().createElement(_.J, {
                                      key: n,
                                      disabled: r,
                                      iconName: F[n],
                                      color: 'primary',
                                  })
                            : o({})
                        : l().createElement(j, null);
                },
                FluentUIButton: function (e) {
                    var n = e.type,
                        r = e.label,
                        t = e.onClick,
                        o = e.readonly,
                        i = e.renderIcon;
                    return null == i
                        ? void 0
                        : i({
                              type: n,
                              readonly: o,
                              renderBtn:
                                  !r || R[n]
                                      ? function (e) {
                                            return l().createElement(
                                                O.h,
                                                (0, c.Z)(
                                                    {
                                                        key: n,
                                                        onClick: t,
                                                        disabled: o,
                                                        color: 'primary',
                                                    },
                                                    e
                                                )
                                            );
                                        }
                                      : P[n]
                                        ? function (e) {
                                              return l().createElement(
                                                  U.K,
                                                  (0, c.Z)(
                                                      {
                                                          key: n,
                                                          onClick: t,
                                                          disabled: o,
                                                          text: r,
                                                      },
                                                      e
                                                  )
                                              );
                                          }
                                        : function (e) {
                                              return l().createElement(
                                                  W.Q,
                                                  (0, c.Z)(
                                                      {
                                                          key: n,
                                                          onClick: t,
                                                          disabled: o,
                                                          text: r,
                                                          color: 'primary',
                                                          styles: {
                                                              root: {
                                                                  backgroundColor:
                                                                      'transparent',
                                                              },
                                                          },
                                                      },
                                                      e
                                                  )
                                              );
                                          },
                              renderDefaultButton: function (e) {
                                  return l().createElement(
                                      q.a,
                                      (0, c.Z)(
                                          {
                                              key: n,
                                              onClick: t,
                                              disabled: o,
                                              text: r,
                                              color: 'primary',
                                          },
                                          e
                                      )
                                  );
                              },
                          });
                },
                FluentUIButtonGroup: function (e) {
                    var n = e.children;
                    return e.config, l().createElement(l().Fragment, null, n);
                },
                FluentUIConjs: function (e) {
                    var n = e.id,
                        r = e.not,
                        t = e.setNot,
                        o = e.conjunctionOptions,
                        i = e.setConjunction,
                        a = e.disabled,
                        u = e.readonly,
                        c = e.config,
                        d = e.showNot,
                        p = e.notLabel,
                        s = Object.keys(o).length,
                        g = a,
                        f = c.settings.forceShowConj || (s > 1 && !g),
                        h = {backgroundColor: r ? '#fed9cc' : '#ffffff'},
                        b = function (e) {
                            return i(e);
                        };
                    return l().createElement(
                        l().Fragment,
                        null,
                        d &&
                            (u && !r
                                ? null
                                : l().createElement(q.a, {
                                      toggle: t,
                                      checked: r,
                                      key: n,
                                      id: n + '__not',
                                      onClick: function (e) {
                                          return t(e);
                                      }.bind(null, !r),
                                      disabled: u,
                                      text: p || 'NOT',
                                      style: h,
                                  })),
                        f &&
                            Object.keys(o).map(function (e) {
                                var n = o[e],
                                    r = n.id,
                                    t = (n.name, n.label),
                                    c = n.checked,
                                    d = i.isDummyFn ? '__dummy' : '';
                                return (!u && !a) || c
                                    ? l().createElement(q.a, {
                                          toggle: i,
                                          checked: c,
                                          key: r + d,
                                          id: r + d,
                                          value: e,
                                          onClick: b.bind(null, e),
                                          disabled: u || a,
                                          text: t,
                                      })
                                    : null;
                            })
                    );
                },
                FluentUIValueSources: function (e) {
                    e.config;
                    var n = e.valueSources,
                        r = e.valueSrc,
                        t = (e.title, e.setValueSrc),
                        o =
                            (e.readonly,
                            function (e, n) {
                                null != n && n.key && t(n.key);
                            });
                    return l().createElement(O.h, {
                        menuProps: (function (e) {
                            var n = [];
                            return (
                                e.map(function (e) {
                                    var t = (0, g.Z)(e, 2),
                                        o = t[0],
                                        l = t[1];
                                    return n.push({
                                        key: o,
                                        text: l.label,
                                        checked: r == o || (!r && 'value' == o),
                                        canCheck: !0,
                                    });
                                }),
                                {onItemClick: o, items: n}
                            );
                        })(n),
                        text: 'here',
                        title: 'ValueSource',
                        onChange: o,
                        iconProps: {iconName: 'ChevronRight'},
                        onRenderMenuIcon: function () {
                            return l().createElement('div', null);
                        },
                    });
                },
                FluentUIConfirm: function (e) {
                    var n = e.onOk,
                        r = (e.okText, e.cancelText, e.title);
                    confirm(r) && n();
                },
                FluentUIProvider: function (e) {
                    return e.config, e.children;
                },
            };
            function D(e, n) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n &&
                        (t = t.filter(function (n) {
                            return Object.getOwnPropertyDescriptor(e, n)
                                .enumerable;
                        })),
                        r.push.apply(r, t);
                }
                return r;
            }
            function N(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {};
                    n % 2
                        ? D(Object(r), !0).forEach(function (n) {
                              (0, i.Z)(e, n, r[n]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(r)
                            )
                          : D(Object(r)).forEach(function (n) {
                                Object.defineProperty(
                                    e,
                                    n,
                                    Object.getOwnPropertyDescriptor(r, n)
                                );
                            });
                }
                return e;
            }
            var B = N(
                    N({}, p.I4.settings),
                    {},
                    {
                        renderField: function (e, n) {
                            return (0, n.RCE)(n.W.FluentUIFieldSelect, e);
                        },
                        renderOperator: function (e, n) {
                            return (0, n.RCE)(n.W.FluentUIFieldSelect, e);
                        },
                        renderFunc: function (e, n) {
                            return (0, n.RCE)(n.W.FluentUIFieldSelect, e);
                        },
                        renderConjs: function (e, n) {
                            return (0, n.RCE)(n.W.FluentUIConjs, e);
                        },
                        renderButton: function (e, n) {
                            return (0, n.RCE)(n.W.FluentUIButton, e);
                        },
                        renderIcon: function (e, n) {
                            return (0, n.RCE)(n.W.FluentUIIcon, e);
                        },
                        renderButtonGroup: function (e, n) {
                            return (0, n.RCE)(n.W.FluentUIButtonGroup, e);
                        },
                        renderValueSources: function (e, n) {
                            return (0, n.RCE)(n.W.FluentUIValueSources, e);
                        },
                        renderFieldSources: function (e, n) {
                            return (0, n.RCE)(n.W.FluentUIValueSources, e);
                        },
                        renderProvider: function (e, n) {
                            return (0, n.RCE)(n.W.FluentUIProvider, e);
                        },
                        renderConfirm: function (e, n) {
                            return (0, n.W.FluentUIConfirm)(e);
                        },
                    }
                ),
                V = N(
                    N({}, p.I4.widgets),
                    {},
                    {
                        text: N(
                            N({}, p.I4.widgets.text),
                            {},
                            {
                                factory: function (e, n) {
                                    return (0, n.RCE)(
                                        n.W.FluentUITextWidget,
                                        e
                                    );
                                },
                            }
                        ),
                        textarea: N(
                            N({}, p.I4.widgets.textarea),
                            {},
                            {
                                factory: function (e, n) {
                                    return (0, n.RCE)(
                                        n.W.FluentUITextAreaWidget,
                                        e
                                    );
                                },
                            }
                        ),
                        number: N(
                            N({}, p.I4.widgets.number),
                            {},
                            {
                                factory: function (e, n) {
                                    return (0, n.RCE)(
                                        n.W.FluentUINumberWidget,
                                        e
                                    );
                                },
                            }
                        ),
                        multiselect: N(
                            N({}, p.I4.widgets.multiselect),
                            {},
                            {
                                factory: function (e, n) {
                                    return (0, n.RCE)(
                                        n.W.FluentUIMultiSelectWidget,
                                        e
                                    );
                                },
                            }
                        ),
                        select: N(
                            N({}, p.I4.widgets.select),
                            {},
                            {
                                factory: function (e, n) {
                                    return (0, n.RCE)(
                                        n.W.FluentUISelectWidget,
                                        e
                                    );
                                },
                            }
                        ),
                        slider: N(
                            N({}, p.I4.widgets.slider),
                            {},
                            {
                                factory: function (e, n) {
                                    return (0, n.RCE)(
                                        n.W.FluentUISliderWidget,
                                        e
                                    );
                                },
                            }
                        ),
                        boolean: N(
                            N({}, p.I4.widgets.boolean),
                            {},
                            {
                                factory: function (e, n) {
                                    return (0, n.RCE)(
                                        n.W.FluentUIBooleanWidget,
                                        e
                                    );
                                },
                            }
                        ),
                        date: N(
                            N({}, p.I4.widgets.date),
                            {},
                            {
                                factory: function (e, n) {
                                    return (0, n.RCE)(
                                        n.W.FluentUIDateWidget,
                                        e
                                    );
                                },
                            }
                        ),
                        time: N(
                            N({}, p.I4.widgets.time),
                            {},
                            {
                                factory: function (e, n) {
                                    return (0, n.RCE)(
                                        n.W.FluentUITimeWidget,
                                        e
                                    );
                                },
                            }
                        ),
                        datetime: N(
                            N({}, p.I4.widgets.datetime),
                            {},
                            {
                                factory: function (e, n) {
                                    return (0, n.RCE)(
                                        n.W.FluentUIDateTimeWidget,
                                        e
                                    );
                                },
                            }
                        ),
                    }
                ),
                Z = N({}, p.I4.types),
                A = N(N({}, p.I4.ctx), {}, {W: N(N({}, p.I4.ctx.W), T)});
            const G = N(
                N({}, p.I4),
                {},
                {ctx: A, types: Z, widgets: V, settings: B}
            );
            var L = r(57856),
                z = r.n(L),
                M = r(38470),
                H = r.n(M),
                Q = r(28458),
                K = r.n(Q),
                Y = r(71278),
                J = r.n(Y),
                X = r(29488),
                $ = r.n(X),
                ee = r(3472),
                ne = {};
            (ne.styleTagTransform = $()),
                (ne.setAttributes = K()),
                (ne.insert = function (e) {
                    var n = document.querySelector('head'),
                        r = window._lastElementInsertedByStyleLoader;
                    r
                        ? r.nextSibling
                            ? n.insertBefore(e, r.nextSibling)
                            : n.appendChild(e)
                        : n.insertBefore(e, n.firstChild),
                        (window._lastElementInsertedByStyleLoader = e);
                }),
                (ne.domAPI = H()),
                (ne.insertStyleElement = J()),
                z()(ee.Z, ne),
                ee.Z && ee.Z.locals && ee.Z.locals;
            var re = function () {
                return (
                    (re =
                        Object.assign ||
                        function (e) {
                            for (var n, r = 1, t = arguments.length; r < t; r++)
                                for (var o in (n = arguments[r]))
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        o
                                    ) && (e[o] = n[o]);
                            return e;
                        }),
                    re.apply(this, arguments)
                );
            };
            const te = function (e) {
                return l().createElement(t.Z, re({}, e, {styleConfig: G}));
            };
        },
        96583: (e, n, r) => {
            r.d(n, {
                ZT: () => o,
                _T: () => i,
                ev: () => u,
                gn: () => a,
                pi: () => l,
            });
            var t = function (e, n) {
                return (
                    (t =
                        Object.setPrototypeOf ||
                        ({__proto__: []} instanceof Array &&
                            function (e, n) {
                                e.__proto__ = n;
                            }) ||
                        function (e, n) {
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) &&
                                    (e[r] = n[r]);
                        }),
                    t(e, n)
                );
            };
            function o(e, n) {
                if ('function' != typeof n && null !== n)
                    throw new TypeError(
                        'Class extends value ' +
                            String(n) +
                            ' is not a constructor or null'
                    );
                function r() {
                    this.constructor = e;
                }
                t(e, n),
                    (e.prototype =
                        null === n
                            ? Object.create(n)
                            : ((r.prototype = n.prototype), new r()));
            }
            var l = function () {
                return (
                    (l =
                        Object.assign ||
                        function (e) {
                            for (var n, r = 1, t = arguments.length; r < t; r++)
                                for (var o in (n = arguments[r]))
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        o
                                    ) && (e[o] = n[o]);
                            return e;
                        }),
                    l.apply(this, arguments)
                );
            };
            function i(e, n) {
                var r = {};
                for (var t in e)
                    Object.prototype.hasOwnProperty.call(e, t) &&
                        n.indexOf(t) < 0 &&
                        (r[t] = e[t]);
                if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                ) {
                    var o = 0;
                    for (t = Object.getOwnPropertySymbols(e); o < t.length; o++)
                        n.indexOf(t[o]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                                e,
                                t[o]
                            ) &&
                            (r[t[o]] = e[t[o]]);
                }
                return r;
            }
            function a(e, n, r, t) {
                var o,
                    l = arguments.length,
                    i =
                        l < 3
                            ? n
                            : null === t
                              ? (t = Object.getOwnPropertyDescriptor(n, r))
                              : t;
                if (
                    'object' == typeof Reflect &&
                    'function' == typeof Reflect.decorate
                )
                    i = Reflect.decorate(e, n, r, t);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (o = e[a]) &&
                            (i =
                                (l < 3 ? o(i) : l > 3 ? o(n, r, i) : o(n, r)) ||
                                i);
                return l > 3 && i && Object.defineProperty(n, r, i), i;
            }
            function u(e, n, r) {
                if (r || 2 === arguments.length)
                    for (var t, o = 0, l = n.length; o < l; o++)
                        (!t && o in n) ||
                            (t || (t = Array.prototype.slice.call(n, 0, o)),
                            (t[o] = n[o]));
                return e.concat(t || Array.prototype.slice.call(n));
            }
            Object.create, Object.create;
        },
    },
]);
