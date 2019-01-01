const disclosure = document.querySelector('#app_bundle_product_form_carrier2')
const addToEbay = document.querySelector('#app_bundle_product_form_addToEbay');
const itemStatus = document.querySelector('#app_bundle_product_form_status');
const form = document.getElementsByName('app_bundle_product_form')[0];

setTimeout(main(), 500);

//Main =============================================================================================
function main(){
    addItemToEbay();
    setDisclosure();
    setStatus();
}

//Change "Add to eBay" Value
function addItemToEbay(){
    addToEbay.value = '1';
}

//Set shipping disclosure
function setDisclosure(){
    disclosure.checked = true;
}

//Set item Status and Submit
function setStatus(){
    itemStatus.value = '1';
    
    function submitForm(){
        form.submit();
    }
}
