'use strict';

(function(module){
    let form = document.getElementById('add-store');
    let error = document.getElementById('form-error');

    function initStoreForm(onStoreAdded) {
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            let elements = form.elements;
            
            let store = {
                name: elements.name.value,
                min: elements.min.value,
                max: elements.max.value,
                avgCookiesPerHour: elements.avgCookiesPerHour.value
            };

            try {
                error.textContet = '';
                onStoreAdded(store);
                form.reset();
                document.activeElement.blur();
            }
            catch(err) {
                error.textContent = err.message;
            }
    }
}
    
})(window.module = window.module || {});