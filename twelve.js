//On load run functions ============================================================================
setTimeout(main(), 500);

//Main =============================================================================================
function main(){
    let title = document.querySelector('#app_bundle_product_form_title');
    let newTitle = document.querySelector('#app_bundle_product_form_title').value;
    let disclosure = document.querySelector('#app_bundle_product_form_carrier2')
    let addToEbay = document.querySelector('#app_bundle_product_form_addToEbay');
    let width = document.querySelector('#app_bundle_product_form_width');
    let height = document.querySelector('#app_bundle_product_form_height');
    let depth = document.querySelector('#app_bundle_product_form_depth');
    let weight = document.querySelector('#app_bundle_product_form_weight');
    let titleString = title.value.replace(/,/g, '');
    let itemNumber = document.getElementsByClassName('description-header')[0].innerText

    
    removeFromTitle(titleString);
    removeFromShortTitle(titleString);
    addItemToEbay();
    setDisclosure();
    shipping();
   // selectTitle();
    setDescriptionTemplate();
    
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

        //Set template for Long Description
    function setDescriptionTemplate(){
        CKEDITOR.instances.app_bundle_product_form_longDescription.setData(`<p>Your satisfaction is our number one goal. Keep in mind that we offer hassle-free returns if needed. If you have any questions or problems, please contact us.</p>

<p>Please Note: All included items are shown in the pictures</p>

<p>${newTitle}<br />
${itemNumber}</p>

<p><strong>Features:</strong></p>

<ul>
	<li>Feature 1</li>
</ul>

<p><strong>What&#39;s included:</strong></p>

<ul>
	<li>${newTitle}</li>
</ul>

<p><strong>What&#39;s not included:</strong></p>

<ul>
	<li>Any other accessories</li>
</ul>

<p><strong>Condition:</strong></p>

<ul>
	<li>Used in good working condition</li>
	<li>Shows signs of use such as scuffs and scratches</li>
	<li>See photos for details</li>
</ul>
`)
    }
    
   /* function selectTitle(){
       title.select()
    };
    */
}
