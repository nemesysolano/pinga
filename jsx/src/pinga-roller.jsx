const PINGA_ROLLER_TEMPLATE = 
(
    <div className="balls-container">
        <div className="purple-ball"><span>I00</span></div>
        <div className="red-ball"><span>P00</span></div>
        <div className="orange-ball"><span>A00</span></div>
        <div className="blue-ball"><span>G00</span></div>
    </div>
);

/**
 * This compoment represents the ball roller.
 * The roller displays the last 4 balls.
 */
class PingaRoller extends HTMLElement { 

    constructor() {
        super();
    }

    /**
     * This timeout function is invoked every 3 seconds. 
     * If current round is complete (this.exhausted == true) then, it stops the geration loop.
     */
    onTimeOut() {
       if(this.exhausted) {
            this.stop();
            return;
        }
                
        this.roll();
    }

    /**
     * Changes the balls' styles in order to catch user's attention.
     */
    updateUI() {
        var
            balls = this.__balls,
            lastClassName = balls[balls.length-1].className,
            index = 0;
            
        pinga.shuffle(this.__classes);

        for(let className of this.__classes) {
            balls[index].className = className;
            index++;
        }

    }   

    /**
     * Generates a ball and update roller's UI.
     */
    roll() {
        var
            min = 1,
            max = 89,
            r = (Math.floor(Math.random() * (max - min + 1)) | 0) + min,
            numberIndex = 0,
            selectedNumbers = this.__selectedNumbers,
            ballLabels = this.__ballLabels;
        
        selectedNumbers.push(r); 
        numberIndex = selectedNumbers.length-1;
        
        for (let ballLabel of ballLabels) {
            ballLabel.innerHTML = selectedNumbers[numberIndex];
            numberIndex--;
            
            if(numberIndex < 0)
                break;
        }      

        this.updateUI();
        return r;
    }

    /**
     * Returns true if all balls for the current round were generated.
     * @return this.__selectedNumbers.length > 88
     */
    get exhausted () {
        return this.__selectedNumbers.length > 88;
    }

    /**
     * Returns true if when the generation loop is still running.
     * @return return this.__running;
     */
    get running() {
        return this.__running;
    }

    /**
     * 
     */
    start() {       
        var self = this;   

        if(!this.running) {

            this.__running = true;
            this.__selectedNumbers = [];

            this.__interval = setInterval(
                function(){ 
                    self.onTimeOut();
                }, 
                3000
            );
        }
    }

    stop() {
        clearInterval(this.__interval);
        this.__running = false;
    }

    balls() {
        return this.__balls;
    }

    /**
     * Fired when an instance was inserted into the document.
     */
    attachedCallback() {
        this.__span = document.createElement('span');
        this.__selectedNumbers = []; 
        this.__running = false;
        this.__interval == null; 
        
        this.appendChild(this.__span);
        ReactDOM.render(
            PINGA_ROLLER_TEMPLATE,   
            this.__span
        );

        this.__balls = this.__span.querySelectorAll(".balls-container div");
        this.__ballLabels = this.__span.querySelectorAll(".balls-container div span");
        this.__classes = [];

        for(let ball of this.__balls) {
            this.__classes.push(ball.className);
        }
    };

}

if (document.createElement('pinga-roller').constructor !== PingaRoller) {
    PingaRoller.prototype.owner = (document._currentScript || document.currentScript).ownerDocument;
    document.registerElement('pinga-roller', PingaRoller);
}