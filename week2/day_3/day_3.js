// // Saturday 05/30/20

// //Challenge 1
// let netflix = {
//     id: 9,
//     likes: 932,
//     name: "The Good Place",
//     seasonInfo: {
//         season1: {
//             numberOfEpisodes: 5,
//             episodeInfo: [
//                 { episode: 1, episodeName: "Pilot" },
//                 { episode: 2, episodeName: "Flying" },
//                 { episode: 3, episodeName: "Tahani Al-Jamil" },
//                 { episode: 4, episodeName: "Jason Mendoza" },
//                 { episode: 5, episodeName: "Category 55 Emergency Doomsday Crisis" }
//             ]
//         },
//         season2: {
//             numberOfEpisodes: 6,
//             episodeInfo: [
//                 { episode: 1, episodeName: "Everything is Great!" },
//                 { episode: 2, episodeName: "Dance Dance Resolution" },
//                 { episode: 3, episodeName: "Team Cockroach" },
//                 { episode: 4, episodeName: "Existential Crisis" },
//                 { episode: 5, episodeName: "The Trolley Problem" },
//                 { episode: 6, episodeName: "Janet and Michael" }
//             ]
//         },
//         season3: {
//             numberOfEpisodes: 5,
//             episodeInfo: [
//                 { episode: 1, episodeName: "Everything Is Bonzer!" },
//                 { episode: 2, episodeName: "The Brainy Bunch" },
//                 { episode: 3, episodeName: "The Snowplow" },
//                 { episode: 4, episodeName: "Jeremy Bearimy" },
//                 { episode: 5, episodeName: "The Ballad of Donkey Doug" }
//             ]
//         }
//     },
//     description: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good."
// };

// function episodeNames(episode) {
//     for (let i = 0; i < episode.length; i++) {
//         console.log(episode[i].episodeName);
//     }
// }
// console.log(netflix.description);
// console.log(netflix.seasonInfo.season2.episodeInfo[2]);
// episodeNames(netflix.seasonInfo.season3.episodeInfo);

// //Challenge 2
// //Function still works no matter the position of elements because of hoisting
// //The order of parameter is kept
// function main() {
//     let a = 1;
//     let b = 2;
//     let c = -3;
//     mystery(a, b, c); //-3 + 1 = 2
//     mystery(c, 4, a); //1 + -3 = 4
//     mystery(a + b, b + c, c + a);//-2 + 3 = -1
// }
// main();
// function mystery(w, z, y) {
//     console.log(`${y} + ${w} = ${z}`);
// }

//Challenge 3
// PALINDROME CHALLENGE
// Create a function that accepts a string as a parameter
// within the function write a conditional that checks if the word is the same forwards and backwards
// If it is the same both ways console.log 'The string is a palindrome'
// If it is not console.log 'It is not a palindrome'
let string = 'radar';

function palindrome(word) {
    let result = false;
    wordLength = word.length;
    for (let i = 0; i < wordLength; i++) {
        for (let p = wordLength; p >= 0; p--) {
            if (word.charAt(i) === word.charAt(p)) {
                result = true;
            } else {
                result = false;
            }
        }
    }
    if (result) {
        console.log('The string is a palindrome');
    } else {
        console.log('It is not a palindrome');
    }
}

palindrome('kiss');
palindrome('anna');
palindrome('detroit');
palindrome('wow');
palindrome(string);