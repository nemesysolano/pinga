/**
 * Credits to http://stackoverflow.com/questions/6971583/node-style-require-for-in-browser-javascript.
 */

(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1),
        parameters = {};

    while (match = search.exec(query))
       parameters[decode(match[1])] = decode(match[2]);

    window.parameters = parameters;
})();