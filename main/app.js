let arr = [];
let listings = [];
const results = document.querySelector('#resultText');
const submit = document.getElementById('submit');
const listingButtons = document.querySelectorAll('.listingLink');
const deleteListings = document.getElementById('deleteListings');
const submitPage = document.querySelector('.userInput');
const addButton = document.getElementById('newListing');
const form = document.getElementById('details');
const listingPage = document.getElementById('listing')
const logo = document.getElementById('logo')
const aside = document.querySelector('aside');
const noListings = document.getElementById('noListingsText')


// On load functions ===================================================================================================
console.log('JS Loaded');

// Add click listeners==================================================================================================

submit.addEventListener('click', function (event) {
        displayResult();
        changeListingsCount();
        formReset();
        hideNoListingsText();
});

logo.addEventListener('click', function (event){
    switchToSubmit();
})

deleteListings.addEventListener('click', function (event){
    removeListings();
    switchToSubmit();
    displayNoListingsText();
});

addButton.addEventListener('click', function(event){
    switchToSubmit();
})

// 'Submit' button function=============================================================================================

function displayResult() {
    resetArray();
    getValues();
    setResult();
    createListing();
    copyToClip(results.innerHTML);
}

function resetArray() {
    arr = [];
}


// Get values from form=================================================================================================

function getValues() {
    let values = document.querySelectorAll('.shortInput');
    let inputArr = [];

    values.forEach((input) => inputArr.push(input.value));
    arr.push(inputArr);
}

// Get info from array and add it to UI=================================================================================

function setResult() {
    let sku = arr[0][0];
    let title = arr[0][1];
    let features = arr[0][2];
    let included = arr[0][3];
    let notIncluded = arr[0][4];
    let condition = arr[0][5];
    let template = `Your satisfaction is our number one goal. Keep in mind that we offer hassle - free returns if needed. If you have any questions or problems, please contact us.
<br/>&nbsp;<br/>
Please Note: All included items are shown in the pictures
<br/>&nbsp;<br/>
${title}<br/>
${sku}
<br/>&nbsp;
<strong>Features:</strong><br/>
${features}
<br/>
<strong>What's included:</strong><br/>
${included}
<br/>
<strong>What's not included:</strong><br/>
${notIncluded}
<br/>
<strong>Condition:</strong><br/>
${condition}
`;

    // results.innerHTML = template;
    addToUi(sku);

}

// Add listing link to DOM==============================================================================================

function addToUi(sku) {
    var ul = document.getElementById('completed');
    var li = document.createElement('li');
    li.setAttribute('id', sku)
    li.setAttribute('class', 'listingLink')
    li.innerHTML = '<span class="deleteSpan"><i class="fas fa-trash-alt"></i></span>';
    li.appendChild(document.createTextNode(sku));
    ul.appendChild(li)
    li.addEventListener('click', function(){
        for(let i = 0; i < listings.length; i++){
            if(listings[i].sku === this.id){
                fillTemplate(i);
            }
        }
        switchToListing();
    })

    addDeleteButton();
}

// Copy text to clipboard==============================================================================================

function copyToClip(str) {
    function listener(e) {
        e.clipboardData.setData("text/html", str);
        e.clipboardData.setData("text/plain", str);
        e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
};

// Listing object Custructor===============================================================================================

function createListing() {
    let listing = new Object();

    listing.sku = arr[0][0];
    listing.title = arr[0][1];
    listing.features = arr[0][2];
    listing.included = arr[0][3];
    listing.notIncluded = arr[0][4];
    listing.condition = arr[0][5];
    listings.push(listing);
}

//Fill and display template=============================================================================================

function fillTemplate(i) {

    let sku = listings[i].sku;
    let title = listings[i].title;
    let features = listings[i].features;
    let included = listings[i].included;
    let notIncluded = listings[i].notIncluded;
    let condition = listings[i].condition;
    let template = `Your satisfaction is our number one goal. Keep in mind that we offer hassle - free returns if needed. If you have any questions or problems, please contact us.
        <br/>&nbsp;<br/>
        Please Note: All included items are shown in the pictures
        <br/>&nbsp;<br/>
        ${title}<br/>
        ${sku}
        <br/>&nbsp;<br/>
        <strong>Features:</strong><br/>
        <ul>${breakMultilines(features)}</ul>
        <br/>&nbsp;
        <strong>What's included:</strong><br/>
        <ul>${breakMultilines(included)}</ul>
        <br/>&nbsp;
        <strong>What's not included:</strong><br/>
        <ul>${breakMultilines(notIncluded)}</ul>
        <br/>&nbsp;
        <strong>Condition:</strong><br/>
        <ul>${breakMultilines(condition)}</ul>`;

    results.innerHTML = template;
    copyToClip(template);
    displayModal();
}

// Remove listings on 'Remove Listings' click ==========================================================================

function removeListings(){
    document.getElementById('completed').innerHTML = '';
    listings = [];
    changeListingsCount();
}

// Switch display to flex on Submit click ==============================================================================

function switchToSubmit(){
    listingPage.style.display = "none";
    submitPage.style.display = "flex";
}


// Switch display to flex on Listing click =============================================================================

function switchToListing(){
    submitPage.style.display = "none";
    listingPage.style.display = "flex";
}

// Clear form ==========================================================================================================

function formReset(){
    form.reset();
}

// Split multilines into html ==========================================================================================

function breakMultilines(str) {
    return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}

// Hide "No Listings Yet" ==============================================================================================

function hideNoListingsText() {
    noListings.style.display = 'none';
}

// Display "No Listings Yet" ===========================================================================================

function displayNoListingsText() {
    noListings.style.display = 'block';
}
// Modals ==============================================================================================================

function displayModal() {
    let modal = document.querySelector('.modal');

    modal.style.display = 'flex';
    
    setTimeout(function() {
        modal.style.opacity = '0'
    },800);

    setTimeout(function() {
        modal.style.display = 'none';
        modal.style.opacity = '.9'
    },850);
}

// Add Delete button to listing 

function addDeleteButton(){
    let buttons = document.querySelectorAll('.deleteSpan');

    buttons.forEach(function(button){
        button.addEventListener('click', function(event){
            event.stopPropagation();
            //Remove listing from array
            for(let i=0; i<listings.length; i++){
                if(listings[i].sku === event.currentTarget.parentNode.id){
                    listings.splice(i,1);
                }
            }
            //Remove listing from DOM
            event.currentTarget.parentNode.remove();
            changeListingsCount();
            if(listings.length === 0){
                displayNoListingsText();
            };
        });
    });
}

//Change Number of Listings Count

function changeListingsCount(){
    document.getElementById('listingsCount').innerText = listings.length;
}
