'use strict';

(function(module){
    let stores = module.stores;
    let toDOM = module.toDOM;
    let html = module.html;
    let totals = module.totals;

    let table = document.getElementById('stores');
    let tfooter = document.getElementById('tfoot');

    let render = function(store) {
        //let store = value that was passed in
        return toDOM(html`        
            <tr>
                <td>${store.name}</td>
                <td>${store.cookiesSalesPerStore[0]}</td>
                <td>${store.cookiesSalesPerStore[1]}</td>
                <td>${store.cookiesSalesPerStore[2]}</td>
                <td>${store.cookiesSalesPerStore[3]}</td>
                <td>${store.cookiesSalesPerStore[4]}</td>
                <td>${store.cookiesSalesPerStore[5]}</td>
                <td>${store.cookiesSalesPerStore[6]}</td>
                <td>${store.cookiesSalesPerStore[7]}</td>
                <td>${store.cookiesSalesPerStore[8]}</td>
                <td>${store.cookiesSalesPerStore[9]}</td>
                <td>${store.cookiesSalesPerStore[10]}</td>
                <td>${store.cookiesSalesPerStore[11]}</td>
                <td>${store.cookiesSalesPerStore[12]}</td>
                <td>${store.cookiesSalesPerStore[13]}</td>
                <td class="totals">${store.dailyStoreTotal}</td>
            </tr>
        `);
    };

    let store;
    for(let i = 0; i < stores.length; i++) {
        store = stores[i];
        let dom = render(store);
        table.appendChild(dom);
    }
    
    let totalsRow = render(totals);
    tfooter.appendChild(totalsRow);
    

})(window.module = window.module || {});