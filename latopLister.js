const title = document.querySelector('#app_bundle_product_form_title');
const disclosure = document.querySelector('#app_bundle_product_form_carrier2')
const addToEbay = document.querySelector('#app_bundle_product_form_addToEbay');
const width = document.querySelector('#app_bundle_product_form_width');
const height = document.querySelector('#app_bundle_product_form_height');
const depth = document.querySelector('#app_bundle_product_form_depth');
const weight = document.querySelector('#app_bundle_product_form_weight');

//On load run functions ============================================================================
setTimeout(main(), 500);

//Main =============================================================================================
function main(){
let titleString = title.value.replace(/,/g, '');
    removeFromTitle(titleString);
    removeFromShortTitle(titleString);
    addItemToEbay();
    setDisclosure();
    shipping();
}

//Functions ========================================================================================

//Remove commas from Title
function removeFromTitle(str){
    title.value = str;
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

//Remove commas from Short Title
function removeFromShortTitle(str){
    CKEDITOR.instances.app_bundle_product_form_shortDescription.setData(`<p>${str}</p>`)
}
