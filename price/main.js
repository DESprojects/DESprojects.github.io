const searchInput = document.querySelector('#search-text')

window.onload = ()=>{
    setTimeout( ()=>{
        searchInput.focus();
        document.querySelector('h1').style.transform = 'scale(1)';
        document.querySelector('h1').style.opacity = '1';
    },100)
}

searchInput.addEventListener('focusout', (e)=>{
    searchInput.placeholder = "Enter search term here"
})

searchInput.addEventListener('focusin', ()=>{
    searchInput.placeholder = 'Press "Enter" to submit'
})

searchInput.addEventListener('keydown' , (e)=>{
    if(e.key === 'Enter'){
        sendAllQuery(searchInput.value);
    }
})

function sendAllQuery(searchTerm) {
        window.open(`https://www.ebay.com/sch/i.html?_from=R40&_nkw=${searchTerm}&_sacat=0&LH_TitleDesc=0&LH_Complete=1&LH_Sold=1&LH_TitleDesc=0&_oac=1&LH_BIN=1&LH_ItemCondition=4&LH_PrefLoc=1&_sop=16`, '_blank');
}