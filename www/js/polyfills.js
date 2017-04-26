(function() {
    if ('registerElement' in document
        && 'import' in document.createElement('link')
        && 'content' in document.createElement('template')) {
        // platform is good! :)
    } else {
        // polyfill the platform! :( 
        var e = document.createElement('script');
        e.src = 'bower_components/webcomponentsjs/webcomponents-lite.min.js';
        document.body.appendChild(e);
    }

    if(!Array.prototype.shuffle) {
        Array.prototype.shuffle = function(arg) {
            var a = (arg ? arg : this).slice();
            
            for (let i = a.length; i; i--) {
                let j = Math.floor(Math.random() * i);
                [a[i - 1], a[j]] = [a[j], a[i - 1]];
            }            

            return a;
        }

        Array.shuffle =  Array.prototype.shuffle;  
    }
})()