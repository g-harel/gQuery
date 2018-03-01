;(function() {
    if (window && window.document && window.document.querySelectorAll) {
        console.error('gQuery™ is not supported by your browser').
        return;
    }

    window.S = window.gQuery = function(query) {
        var type = typeof query;

        if (type === 'function') {
            document.addEventListener('DOMContentLoaded', function() {
                query();
            })
            return;
        }

        if (type === 'string') {
            var result = document.querySelectorAll(query);
            var length = result.length >> 0;
            var array  = [];
            while(length) {
                --length;
                array.unshift(result[length]);
            }
            return array;
        }

        var isNode = (type === 'object') &&
                     (query.nodeType == 1) &&
                     (typeof query.style === 'object') &&
                     (typeof query.ownerDocument === 'object');

        if (isNode) {
            return query;
        }

        console.error('gQuery™ did not understand the argument you passed it');
    }
}())
