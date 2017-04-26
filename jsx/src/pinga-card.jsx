'use strict';
const PINGA_CARD_TEMPLATE = 
(
    <table id="pingaCardLayout">
        <thead id="pingaCardLayoutHeader">
            <tr>
                <th><div className="column-btn">P</div></th>
                <th><div className="column-btn">I</div></th>
                <th><div className="column-btn">N</div></th>
                <th><div className="column-btn">G</div></th>
                <th><div className="column-btn">A</div></th>
            </tr>
        </thead>
        <tbody id="pingaCardLayoutBody">
            <tr>
                <td><div className="number-cell" data-index="0"></div></td>
                <td><div className="number-cell" data-index="1"></div></td>
                <td><div className="number-cell" data-index="2"></div></td>
                <td><div className="number-cell" data-index="3"></div></td>
                <td><div className="number-cell" data-index="4"></div></td>
            </tr>
            <tr>
                <td><div className="number-cell" data-index="0"></div></td>
                <td><div className="number-cell" data-index="1"></div></td>
                <td><div className="number-cell" data-index="2"></div></td>
                <td><div className="number-cell" data-index="3"></div></td>
                <td><div className="number-cell" data-index="4"></div></td>
            </tr>
            <tr>
                <td><div className="number-cell" data-index="0"></div></td>
                <td><div className="number-cell" data-index="1"></div></td>
                <td><div className="number-cell free-cell" data-index="2"></div></td>
                <td><div className="number-cell" data-index="3"></div></td>
                <td><div className="number-cell" data-index="4"></div></td>
            </tr>
            <tr>
                <td><div className="number-cell" data-index="0"></div></td>
                <td><div className="number-cell" data-index="1"></div></td>
                <td><div className="number-cell" data-index="2"></div></td>
                <td><div className="number-cell" data-index="3"></div></td>
                <td><div className="number-cell" data-index="4"></div></td>
            </tr>
            <tr>
                <td><div className="number-cell" data-index="0"></div></td>
                <td><div className="number-cell" data-index="1"></div></td>
                <td><div className="number-cell" data-index="2"></div></td>
                <td><div className="number-cell" data-index="3"></div></td>
                <td><div className="number-cell" data-index="4"></div></td>
            </tr>
        </tbody>
    </table>
);

const PINGA_CARD_DATA = [
    [ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75]
]

class PingaCard extends HTMLElement {

    constructor() {
        super();
        this.__span = null;
        this.__columns = null;
    }

    /**
     * Fires when an instance was removed from the document.
     */
    detachedCallback() {

    };

    
    /**
     * Fires when an instance was inserted into the document.
     */
    attachedCallback() {
        this.__span = document.createElement('span');
        this.appendChild(this.__span);
        ReactDOM.render(
            PINGA_CARD_TEMPLATE,   
            this.__span
        );
    };

    createdCallback() {

    };
    
    /**
     * Copies cards's state into session; session.state property is modified (antipattern ?).
     * Do not call this method if the roller is still running.
     * @param {object} session Instance of PingaSession.
     */
    save(session) {
        var state = session.state;

        if(!state.cards) {
            state.cards=[];
        }
        state.cards.push(this.columns);
    }

    /**
     * Retrieves roller's state from session.
     * Do not call this method if the roller is still running.
     * @param {object} session  Instance of PingaSession.
     * @param {integer} index The card position inside the container.
     */
    load(session, index) {
        var state = session.state;
        if(state.cards) {
            let columns = state.cards[index];
            this.columns = columns;
        }
    }

    /**
     * @returns {array} A two dimensional array containing card's numbers.
     */
    get columns() {
        return this.__columns;
    }

    /**
     * 
     * @param {array} __columns A two dimensional array containing card's numbers.
     */    
    set columns (__columns) {
        var
            span = this.__span,
            stars = span.querySelectorAll(".free-cell"),
            length = __columns.length;

        for(let j = 0; j < length; j++) {
            let cells = span.querySelectorAll(`div[data-index='${j}']`);

            for(let i = 0; i < length; i++) {                
                cells[i].innerHTML = __columns[i][j];
            }
        }

        for(let start of stars) {
            start.innerHTML = "&#x1F31F;"
        }

        this.__columns = __columns;
    }
    
    /**
     * Shuffles columnData and returns its 1st 5 elements.
     * @param {array} columnData A sub array which is member of PINGA_CARD_DATA.
     * @param {integer} index Index of columnData.
     */
    static shuffleColumn(columnData, index) {
        var
            a = columnData.slice(0),
            b;

        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }

        b = a.slice(0, 5).sort();

        return b;
    }

    /**
     * Fills this card with random data.
     */
    autofill() {
        var columns = PINGA_CARD_DATA.map(PingaCard.shuffleColumn);
        this.columns  = columns;
    }
    
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
    attributeChangedCallback(attr, oldVal, newVal) {

    };
}

if (document.createElement('pinga-card').constructor !== PingaCard) {
    PingaCard.prototype.owner = (document._currentScript || document.currentScript).ownerDocument;
    document.registerElement('pinga-card', PingaCard);
}
