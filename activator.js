const disclosure = document.querySelector('#app_bundle_product_form_carrier2')
const addToEbay = document.querySelector('#app_bundle_product_form_addToEbay');
const itemStatus = document.querySelector('#app_bundle_product_form_status');

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

//Set item Status
function setStatus(){
    itemStatus.value = '1';
}