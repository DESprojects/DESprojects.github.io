let arr = [];
const results = document.querySelector('#resultText');
const submit = document.getElementById('submit');

console.log('JS Loaded');

submit.addEventListener('click', function (event) {
    displayResult();
});

function displayResult() {
    resetArray();
    getValues();
    setResult();
    copyToClip(results.innerHTML);
    alert('Text copied to clipboard');
}

function resetArray() {
    arr = [];
}

function getValues() {
    let values = document.querySelectorAll('input');
    let inputArr = [];

    values.forEach((input) => inputArr.push(input.value));
    arr.push(inputArr);
}

function setResult() {
    let sku = arr[0][0];
    let title = arr[0][1];
    let features = arr[0][2];
    let included = arr[0][3];
    let notIncluded = arr[0][4];
    let condition = arr[0][5];
    let script = `Your satisfaction is our number one goal. Keep in mind that we offer hassle - free returns if needed. If you have any questions or problems, please contact us.
<br/>&nbsp;<br/>
Please Note: All included items are shown in the pictures
<br/>&nbsp;<br/>
${title}<br/>
${sku}
<br/>&nbsp;<br/>
<strong>Features:</strong><br/>
${features}
<br/>&nbsp;<br/>
<strong>What's included:</strong><br/>
${included}
<br/>&nbsp;<br/>
<strong>What's not included:</strong><br/>
${notIncluded}
<br/>&nbsp;<br/>
<strong>Condition:</strong><br/>
${condition}
`;

    results.innerHTML = script;
}


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