// Saturday 05/30/20

let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place",
    seasonInfo: {
        season1: {
            numberOfEpisodes: 5,
            episodeInfo: [
                { episode: 1, episodeName: "Pilot" },
                { episode: 2, episodeName: "Flying" },
                { episode: 3, episodeName: "Tahani Al-Jamil" },
                { episode: 4, episodeName: "Jason Mendoza" },
                { episode: 5, episodeName: "Category 55 Emergency Doomsday Crisis" }
            ]
        },
        season2: {
            numberOfEpisodes: 6,
            episodeInfo: [
                { episode: 1, episodeName: "Everything is Great!" },
                { episode: 2, episodeName: "Dance Dance Resolution" },
                { episode: 3, episodeName: "Team Cockroach" },
                { episode: 4, episodeName: "Existential Crisis" },
                { episode: 5, episodeName: "The Trolley Problem" },
                { episode: 6, episodeName: "Janet and Michael" }
            ]
        },
        season3: {
            numberOfEpisodes: 5,
            episodeInfo: [
                { episode: 1, episodeName: "Everything Is Bonzer!" },
                { episode: 2, episodeName: "The Brainy Bunch" },
                { episode: 3, episodeName: "The Snowplow" },
                { episode: 4, episodeName: "Jeremy Bearimy" },
                { episode: 5, episodeName: "The Ballad of Donkey Doug" }
            ]
        }
    },
    description: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good."
};
// let episodes = netflix.seasonInfo.season3.episodeInfo;
function episodeNames (episodes) {
    let arr = [];
    for(i = 0; i < episodes.length; i++) {
        arr.push(episodes[i].episodeName);
    }
    return arr;
}
console.log(netflix.description);
console.log(netflix.seasonInfo.season2.episodeInfo[2]);
console.log(episodeNames(netflix.seasonInfo.season3.episodeInfo));
// console.log(episodeNames(episodes));