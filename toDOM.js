'use strict';

(function(module){
    
    function toDOM(html) {
        let template = document.createElement('template');
        template.innerHTML = html;
        
        return template.content;
    }

    module.toDOM = toDOM;
    module.html = String.raw;

})(window.module = window.module || {});