interface AudioPlayer {
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;
}

interface Details {
    author:string;
    year: number;
}

const audioPlayer:AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "mess",
    details: {
        author: "Ed Sheeran",
        year:2015
    }
}

const {song:anotherSong, songDuration:duration, details} = audioPlayer;
const {author} = details;

// console.log('Song:' ,anotherSong);
// console.log('Duration:' ,duration);
// console.log('Author:' ,author);

const [,,trunks = 'Not found']: string[] = ['Goku','Vegeta'];


console.log('Personaje 3:',trunks || 'Ho  hay personaje');


export {};