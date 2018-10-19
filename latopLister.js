const title = document.querySelector('#app_bundle_product_form_title');
const disclosure = document.querySelector('#app_bundle_product_form_carrier2')
let addToEbay = document.querySelector('#app_bundle_product_form_addToEbay');
const width = document.querySelector('#app_bundle_product_form_width');
const height = document.querySelector('#app_bundle_product_form_height');
const depth = document.querySelector('#app_bundle_product_form_depth');
const weight = document.querySelector('#app_bundle_product_form_weight');

setTimeout(main(), 500);

//Main =============================================================================================
function main(){
    removeFromTitle();
    addItemToEbay();
    setDisclosure();
    shipping();
}
//On load run functions
//Functions ========================================================================================

//Remove commas from Title
function removeFromTitle(){
    title.value = title.value.replace(/,/g, '');
}
//Change "Add to eBay" Value
function addItemToEbay(){
    addToEbay.value = '1';
}

//Set shipping disclosure
function setDisclosure(){
    disclosure.checked = true;
}

//Change shipping dimensions
function shipping(){
    width.value = '18';
    height.value = '14';
    depth.value = '8';
    weight.value = '9';
}

//Future features ===================================================================================

//Remove commas from Short Title
function removeFromShortTitle(){

}
