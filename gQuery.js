;(function() {
    if (window && window.document && window.document.querySelectorAll) {
        window.S = window.gQuery = function(query) {
            var type = typeof query;
            if (type === 'function') {
                document.addEventListener('DOMContentLoaded', function() {
                    query();
                })
            } else if (type === 'string') {
                var result = document.querySelectorAll(query);
                var length = result.length >> 0;
                var array  = [];
                while(length) {
                    --length;
                    array[length] = result[length];
                }
                return array;
            } else if ((type === 'object') && (query.nodeType === 1) && (typeof query.style === 'object') && (typeof query.ownerDocument ==='object')) {
                return query;
            } else {
                console.error('gQuery did not understand the argument you passed it');
            }
        }
    } else {
        console.error('gQuery is not supported by your browser')
    }
}())
