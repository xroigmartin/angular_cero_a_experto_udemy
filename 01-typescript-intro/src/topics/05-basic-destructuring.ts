interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayr: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const { song: anotherSong, songDuration: duration, details} = audioPlayr;

const {author, year} = details;

console.log('Song: ', anotherSong);
console.log('Author: ', author);
console.log('Duration: ', duration);
console.log('Year: ', year);

//const [p1, p2, trunks]: string[] = ['Goku', 'Vegeta', 'Trunks'];
//const [, , trunks]: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];
//const trunks = dbz[3] || 'No hay personaje'

console.log('Personaje 3: ', trunks);

export {};
