'use strict';

(function(module){
    let render = module.render;
    let totals = module.totals;

    let tfooter = document.getElementById('tfoot');

    let totalsRow = render(totals);
    tfooter.appendChild(totalsRow);

    
})(window.module = window.module || {});