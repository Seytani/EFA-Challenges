let url = 'https://swapi.dev/api/people';

async function demo() {
    await fetch(url)
        .then(res => res.json())
        .then(json => console.log(json));

    console.log("this should print last");
}
demo();