const baseUrl = 'https://adventure-time-quote-api.glitch.me/api/quotes';

let pictures = {
    finn: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7e/Finn_with_bionic_arm-0.png/revision/latest?cb=20190807133126",
    tarttoter: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7d/Toter.png/revision/latest?cb=20120713195935",
    lady: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/a/ad/1ATLadyRainicornLook.png/revision/latest?cb=20190807133156",
    marceline: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/e/e0/Marceline_Stock_Night.png/revision/latest/scale-to-width-down/95?cb=20190807133150",
    lumpy: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/9f/Lumpy_Space.png/revision/latest?cb=20110730224431",
    lemongrab: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f5/Earl.png/revision/latest?cb=20120723061821",
    dukeofnuts: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/5/57/Prince-of-nuts.png/revision/latest?cb=20100402183002",
    fionna: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/c3/Fionna_new_design.png/revision/latest?cb=20140704073319",
    princessbubblegum: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/00/Princess_Bubblegum.png/revision/latest/scale-to-width-down/100?cb=20190807133134",
    iceking: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png/revision/latest/scale-to-width-down/150?cb=20160405041324",
    bmo: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/81/BMO.png/revision/latest?cb=20190807133145",
    jake: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest/scale-to-width-down/310?cb=20190807133015",
}

//Event listener on button
window.onload = fetchResults(baseUrl);
document.querySelector('#theButton').addEventListener('click', fetchResults.bind(this, baseUrl));

//fetch API
function fetchResults(url) {
    fetch(url)
        .then(res => res.json())
        .then(json => generateQuote(json))
}

function generateQuote(element) {
    //generate a random quote
    let randomChar = element[getRandomInt(element.length)];
    let randomQuote = randomChar.quotes[getRandomInt(randomChar.quotes.length)]
    let name = randomChar.name;
    let imgSrc = '';
    console.log(name);
    console.log(randomChar.quotes[0]);

    //loop and compare to pics and get the right one
    for (pic in pictures) {
        if (name === pic) {
            imgSrc = pictures[pic];
        }
    }

    //add content to html elements 
    document.querySelector('p').innerHTML = randomQuote;
    document.querySelector('img').src = imgSrc;

}

//function I got on the internet to generate random integer  with a max
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}