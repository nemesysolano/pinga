"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PINGA_CARD_TEMPLATE = React.createElement(
    "table",
    { id: "pingaCardLayout" },
    React.createElement(
        "thead",
        { id: "pingaCardLayoutHeader" },
        React.createElement(
            "tr",
            null,
            React.createElement(
                "th",
                null,
                React.createElement(
                    "div",
                    { className: "column-btn" },
                    "P"
                )
            ),
            React.createElement(
                "th",
                null,
                React.createElement(
                    "div",
                    { className: "column-btn" },
                    "I"
                )
            ),
            React.createElement(
                "th",
                null,
                React.createElement(
                    "div",
                    { className: "column-btn" },
                    "N"
                )
            ),
            React.createElement(
                "th",
                null,
                React.createElement(
                    "div",
                    { className: "column-btn" },
                    "G"
                )
            ),
            React.createElement(
                "th",
                null,
                React.createElement(
                    "div",
                    { className: "column-btn" },
                    "A"
                )
            )
        )
    ),
    React.createElement(
        "tbody",
        { id: "pingaCardLayoutBody" },
        React.createElement(
            "tr",
            null,
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "28"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "15"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "40"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "31"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "22"
                )
            )
        ),
        React.createElement(
            "tr",
            null,
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "15"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "89"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "63"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "76"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "66"
                )
            )
        ),
        React.createElement(
            "tr",
            null,
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "41"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "52"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell free-cell" },
                    "\uD83C\uDF1F"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "66"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "67"
                )
            )
        ),
        React.createElement(
            "tr",
            null,
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "33"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "45"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "78"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "99"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "71"
                )
            )
        ),
        React.createElement(
            "tr",
            null,
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "66"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "67"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "23"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "56"
                )
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "div",
                    { className: "number-cell" },
                    "34"
                )
            )
        )
    )
);

var PingaCard = function (_HTMLElement) {
    _inherits(PingaCard, _HTMLElement);

    function PingaCard() {
        _classCallCheck(this, PingaCard);

        var _this = _possibleConstructorReturn(this, (PingaCard.__proto__ || Object.getPrototypeOf(PingaCard)).call(this));

        _this.__span = null;
        return _this;
    }

    /**
     * Fires when an instance was removed from the document.
     */


    _createClass(PingaCard, [{
        key: "detachedCallback",
        value: function detachedCallback() {}
    }, {
        key: "attachedCallback",


        /**
         * Fires when an instance was inserted into the document.
         */
        value: function attachedCallback() {
            this.__span = document.createElement('span');
            this.appendChild(this.__span);
            ReactDOM.render(PINGA_CARD_TEMPLATE, this.__span);
        }
    }, {
        key: "createdCallback",


        /**
         * 
         */
        value: function createdCallback() {}
    }, {
        key: "attributeChangedCallback",


        /**
         * 
        static get observedAttributes() {return ['name']; }
        */

        /**
         * Fires when an attribute was added, removed, or updated.
         * @param {string} attr Non null/empty string representing an attribute name
         * @param {any} oldVal Previous attribute value.
         * @param {any} newVal New attribute value.
         */
        value: function attributeChangedCallback(attr, oldVal, newVal) {}
    }]);

    return PingaCard;
}(HTMLElement);

if (document.createElement('pinga-card').constructor !== PingaCard) {
    PingaCard.prototype.owner = (document._currentScript || document.currentScript).ownerDocument;
    document.registerElement('pinga-card', PingaCard);
}