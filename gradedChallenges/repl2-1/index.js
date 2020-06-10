let url = 'https://rickandmortyapi.com/api/character/';

fetch(url)
.then(res => res.json())
.then(json => {
    console.log(json);
    displayResults(json);
})

function displayResults(stuff) {
    let image1 = stuff.results[0].image;
    let image2 = stuff.results[1].image;

    document.querySelector('.img1').src = image1;
    document.querySelector('.img2').src = image2;


}
