//On load run functions ============================================================================
setTimeout(main(), 500);

//Main =============================================================================================
function main(){
    let title = document.querySelector('#app_bundle_product_form_title');
    let disclosure = document.querySelector('#app_bundle_product_form_carrier2')
    let addToEbay = document.querySelector('#app_bundle_product_form_addToEbay');
    let width = document.querySelector('#app_bundle_product_form_width');
    let height = document.querySelector('#app_bundle_product_form_height');
    let depth = document.querySelector('#app_bundle_product_form_depth');
    let weight = document.querySelector('#app_bundle_product_form_weight');
    let titleString = title.value.replace(/,/g, '');
    
    removeFromTitle(titleString);
    removeFromShortTitle(titleString);
    addItemToEbay();
    setDisclosure();
    shipping();
    
    //Functions ========================================================================================

    //Remove commas from Title
    function removeFromTitle(str) {
        title.value = str;
    }

    //Change "Add to eBay" Value
    function addItemToEbay() {
        addToEbay.value = '1';
    }

    //Set shipping disclosure
    function setDisclosure() {
        disclosure.checked = true;
    }

    //Change shipping dimensions
    function shipping() {
        width.value = '12';
        height.value = '8';
        depth.value = '6';
        weight.value = '6';
    }

    //Remove commas from Short Title
    function removeFromShortTitle(str) {
        CKEDITOR.instances.app_bundle_product_form_shortDescription.setData(`<p>${str}</p>`)
    }


}