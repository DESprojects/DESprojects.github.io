const searchTerm = document.querySelector('#search-term');
const query = 'https://www.ebay.com/dsc/m.html?_ssn=epawnamerica&_from=R40&_sacat=0&LH_TitleDesc=1&_nkw=';

document.addEventListener('keydown', (e)=>{
    if (e.which == 13) {
        window.open(query+searchTerm.value);
        searchTerm.value = '';
    }
})

setTimeout( ()=> {
    searchTerm.focus()
}, 500);