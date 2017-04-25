'use strict';
const PINGA_SESSION_STATE = Symbol("PINGA_SESSION_STATE");
const PINGA_SESSION_USER_ID = Symbol("PINGA_SESSION_USER_ID");

/**
 * This provides convenience methods to handle session state.
 */
class PingaSession {

    /**
     * 
     * @param {string} userId Non null/empty string that identifies the user in the preferred social network.
     */
    constructor (userId) {
        this[PINGA_SESSION_USER_ID] = userId;
        this[PINGA_SESSION_STATE] = null;
        this.load();
    }

    /**
     * @returns {string} The string that identifies the user in the preferred social network.
     */
    get userId () {
        return this[PINGA_SESSION_USER_ID];
    }

    /**
     * @returns {string} The string that identifies the user in the preferred social network.
     */
    get state () {
        return this[PINGA_SESSION_STATE];
    }

    /**
     * Loads session state from local storage.
     * @returns {object} A JSON object representing session state.
     */
    load() {
        var string = localStorage.getItem(this.userId);

        if(string == null) 
            this[PINGA_SESSION_STATE] = {};
        else
            this[PINGA_SESSION_STATE] = JSON.parse(string);

        return this[PINGA_SESSION_STATE];
    }

    /**
     * Saves current session state to local storage.
     */
    save() {
        var string = JSON.stringify(this[PINGA_SESSION_STATE]);

        localStorage.setItem(this.userId, string);
    }
}