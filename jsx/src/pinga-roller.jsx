const PINGA_ROLLER_TEMPLATE = 
(
    <div className="balls-container">
        <div className="pinga-ball"></div>
        <div className="pinga-ball"></div>
        <div className="pinga-ball"></div>
        <div className="pinga-ball"></div>
    </div>
);

class PingaRoller extends HTMLElement {

    constructor() {
        super();
        this.__span = null;
    }

    /**
     * Fires when an instance was inserted into the document.
     */
    attachedCallback() {
        this.__span = document.createElement('span');
        this.appendChild(this.__span);
        ReactDOM.render(
            PINGA_ROLLER_TEMPLATE,   
            this.__span
        );
    };

}

if (document.createElement('pinga-roller').constructor !== PingaRoller) {
    PingaRoller.prototype.owner = (document._currentScript || document.currentScript).ownerDocument;
    document.registerElement('pinga-roller', PingaRoller);
}