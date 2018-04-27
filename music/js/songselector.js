function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const prefix = './audio';

const songs = [
    'Frederic Chopin - A comme amour.mp3',
    'Blonde Redhead - For The Damaged Coda.mp3'
];

shuffle(songs);

if (!document.createElement("audio").play) {
    alert('Здесь должна быть музыка, но ты - некрофил. Поставь уже настоящий браузер');
} else {
    let i = 0;
    let track = songs[i % songs.length];

    const player = new Audio(`${prefix}/${track}`);
    player.play();

    player.addEventListener('ended', () => {
        track = songs[++i % songs.length];

        player.src = `${prefix}/${track}`;
        player.play();
    });
}
