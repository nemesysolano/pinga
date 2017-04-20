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
                <td><div className="number-cell">28</div></td>
                <td><div className="number-cell">15</div></td>
                <td><div className="number-cell">40</div></td>
                <td><div className="number-cell">31</div></td>
                <td><div className="number-cell">22</div></td>
            </tr>
            <tr>
                <td><div className="number-cell">15</div></td>
                <td><div className="number-cell">89</div></td>
                <td><div className="number-cell">63</div></td>
                <td><div className="number-cell">76</div></td>
                <td><div className="number-cell">66</div></td>
            </tr>
            <tr>
                <td><div className="number-cell">41</div></td>
                <td><div className="number-cell">52</div></td>
                <td><div className="number-cell free-cell">&#x1F31F;</div></td>
                <td><div className="number-cell">66</div></td>
                <td><div className="number-cell">67</div></td>
            </tr>
            <tr>
                <td><div className="number-cell">33</div></td>
                <td><div className="number-cell">45</div></td>
                <td><div className="number-cell">78</div></td>
                <td><div className="number-cell">99</div></td>
                <td><div className="number-cell">71</div></td>
            </tr>
            <tr>
                <td><div className="number-cell">66</div></td>
                <td><div className="number-cell">67</div></td>
                <td><div className="number-cell">23</div></td>
                <td><div className="number-cell">56</div></td>
                <td><div className="number-cell">34</div></td>
            </tr>                                                                                                    
        </tbody>
    </table>
);

class PingaCard extends HTMLElement {

    constructor() {
        super();
        this.__span = null;
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

    /**
     * 
     */
    createdCallback() {

    };

    
    
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
