const PINGA_CARD_TEMPLATE = React.createElement(
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

class PingaCard extends HTMLElement {

    constructor() {
        super();
        this.__span = null;
    }

    /**
     * Fires when an instance was removed from the document.
     */
    detachedCallback() {}

    /**
     * Fires when an instance was inserted into the document.
     */
    attachedCallback() {
        this.__span = document.createElement('span');
        this.appendChild(this.__span);
        ReactDOM.render(PINGA_CARD_TEMPLATE, this.__span);
    }

    /**
     * 
     */
    createdCallback() {}

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
    attributeChangedCallback(attr, oldVal, newVal) {}
}

if (document.createElement('pinga-card').constructor !== PingaCard) {
    PingaCard.prototype.owner = (document._currentScript || document.currentScript).ownerDocument;
    document.registerElement('pinga-card', PingaCard);
}