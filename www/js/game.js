
(function(){

    var
        defined = typeof window.pinga == "object", //Asks if pinga namespace is already defined
        pinga = defined ? window.pinga : {}; // Creates the pinga namespace if it is not defined.

    if(!defined) {

        /**
         * Shuffles array in place.
         * @param {Array} a items The array containing the items.
         */
        pinga.shuffle = function(a) {
            for (let i = a.length; i; i--) {
                let j = Math.floor(Math.random() * i);
                [a[i - 1], a[j]] = [a[j], a[i - 1]];
            }
        }

        window.pinga = pinga;
    }
        
})();