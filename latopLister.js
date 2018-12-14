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
    copyToClip(title.value)
    
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
        width.value = '18';
        height.value = '14';
        depth.value = '8';
        weight.value = '9';
    }

    //Remove commas from Short Title
    function removeFromShortTitle(str) {
        CKEDITOR.instances.app_bundle_product_form_shortDescription.setData(`<p>${str}</p>`)
    }
    
    //Copy title to clipboard
    function copyToClip() {
        title.select()
        document.execCommand('copy')
        alert(title + ' copied!')
    };

}
