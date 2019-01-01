setTimeout(main(), 500);

//Main =============================================================================================
function main(){
    let disclosure = document.querySelector('#app_bundle_product_form_carrier2');
    let addToEbay = document.querySelector('#app_bundle_product_form_addToEbay');
    let itemStatus = document.querySelector('#app_bundle_product_form_status');
    let form = document.getElementsByName('app_bundle_product_form')[0];
    
    addItemToEbay();
    setDisclosure();
    setStatus();
    submitForm();
    console.log('debug test');

    //Change "Add to eBay" Value
    function addItemToEbay(){
        addToEbay.value = '1';
    }
    
    //Submit the form when clicked
    function submitForm(){
        form.submit();
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
}
