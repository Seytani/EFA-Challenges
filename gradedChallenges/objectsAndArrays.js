let favMovie = {
    nameOfMovie: 'Howl\'s moving castle', runTime: '1hr 59min', 
    characters: 
    [{ character1: { name: 'Howl', age: 27, items: ['Wings', 'Calcifer']},
    character2: { name: 'Sophie', age: 18, items: ['Dress', 'Hat']},}], 
    genre: 'Fantasy',
};

console.log(favMovie.nameOfMovie);
console.log(favMovie.runTime);
console.log(favMovie.characters);
console.log(favMovie.characters[0].character1.name);
console.log(favMovie.characters[0].character1.items[0]);