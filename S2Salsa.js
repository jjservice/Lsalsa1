const songs = [
    {
        "id": 1,
        "name": "Ella Me Busca",
        "artist": "Yiyo Sarante",
        "img": "YiyoMeBuscaPic.jpg",
        "music": "Yiyo Sarante - Ella Me Busca.mp3"
    },
    {
        "id": 2,
        "name": "Qué Precio Tiene el Cielo",
        "artist": "Marc Anthony",
        "img": "markpic1.jpg",
        "music": "Marc Anthony - Qué Precio Tiene el Cielo.mp3"
    },
    {
        "id": 3,
        "name": "Se Me Sigue Olvidando",
        "artist": "Marc Anthony",
        "img": "markpic222.jpg",
        "music": "Mark Anthony-Se Me Sigue Olvidando.mp3"
    },
    {
        "id": 4,
        "name": "Tu Amor Me Hace Bien",
        "artist": "Marc Anthony",
        "img": "markpic1.jpg",
        "music": "Mark Anthony-Tu Amor Me Hace Bien.mp3"
    },
    {
        "id": 5,
        "name": "Fabricando Fantasías",
        "artist": "Tito Nieves",
        "img": "fabricandopicc.jpg",
        "music": "Tito Nieves - Fabricando Fantasías.mp3"
    },
    {
        "id": 6,
        "name": "Valió la Pena",
        "artist": "Marc Anthony",
        "img": "markpic222.jpg",
        "music": "Marc Anthony - Valió la Pena.mp3"
    },
    {
        "id": 7,
        "name": "De Mi Enamorate",
        "artist": "Tito Nieves",
        "img": "titonievespiccc.jpg",
        "music": "Tito Nieves-De Mí Enamórate.mp3"
    },
    {
        "id": 8,
        "name": "Ahora Quien",
        "artist": "Marc Anthony",
        "img": "markpic222.jpg",
        "music": "Mark Anthony-Ahora Quien.mp3"
    },
    {
        "id": 9,
        "name": "La Cita",
        "artist": "Galy Galiano",
        "img": "galypicc.jpg",
        "music": "Galy GalianoLa Cita.mp3"
    },
    {
        "id": 10,
        "name": "Me Mata La Soledad",
        "artist": "Tito Rojas",
        "img": "titopic44.jpg",
        "music": "Tito Rojas-Me Mata La Soledad.mp3"
    },
    {
        "id": 11,
        "name": "Mirándote",
        "artist": "Frankie Ruiz",
        "img": "frankiepic3.jpg",
        "music": "Frankie Ruiz-Mirándote.mp3"
    },
    {
        "id": 12,
        "name": "Lloro",
        "artist": "Tito Rojas",
        "img": "TITORPIC.jpg",
        "music": "Tito Rojas-Lloro.mp3"
    },
    {
        "id": 13,
        "name": "Hablame",
        "artist": "Frankie Ruiz",
        "img": "frankiepic2.jpg",
        "music": "Frankie Ruiz-Hablame.mp3"
    },
    {
        "id": 14,
        "name": "Quien Entiende Este Amor",
        "artist": "Galy Galiano",
        "img": "galypicc.jpg",
        "music": "gary-Quien Entiende Este Amor.mp3"
    },
    {
        "id": 15,
        "name": "Para Darte Fuego",
        "artist": "Frankie Ruiz",
        "img": "Frankiepic444.jpg",
        "music": "Frankie Ruiz-Para Darte Fuego.mp3"
    },
    {
        "id": 16,
        "name": "Tú Eres",
        "artist": "Frankie Ruiz",
        "img": "frankiepic555.jpg",
        "music": "Frankie Ruiz-Tú Eres.mp3"
    },
    {
        "id": 17,
        "name": "Tú Con Él",
        "artist": "Frankie Ruiz",
        "img": "frankiepic3.jpg",
        "music": "Frankie Ruiz-Tú Con Él.mp3"
    },
    {
        "id": 18,
        "name": "Pequeñas Cosas",
        "artist": "Willie Gonzalez",
        "img": "williepic111.jpg",
        "music": "Willie Gonzalez-Pequeñas Cosas.mp3"
    },
    {
        "id": 19,
        "name": "Amor Pirata",
        "artist": "Willie Gonzalez",
        "img": "williepic22.jpg",
        "music": "Willie Gonzalez-Amor Pirata.mp3"
    },
    {
        "id": 20,
        "name": "He Vuelto",
        "artist": "Willie Gonzalez",
        "img": "williepic33.jpg",
        "music": "Willie Gonzalez-He Vuelto.mp3"
    },
    {
        "id": 21,
        "name": "Aquel Lugar",
        "artist": "Adolescentes Orquesta",
        "img": "adolescentespic1.jpg",
        "music": "Adolescent's Orquesta - Aquel Lugar.mp3"
    },
    {
        "id": 22,
        "name": "Es Mi Mujer",
        "artist": "Tito Rojas",
        "img": "titopic33.jpg",
        "music": "Tito Rojas-Es Mi Mujer.mp3"
    },
    {
        "id": 23,
        "name": "Se Acabó el Amor",
        "artist": "Adolescentes Orquesta",
        "img": "adolescentespic2.jpg",
        "music": "Adolescent's Orquesta - Se Acabó el Amor.mp3"
    },
    {
        "id": 24,
        "name": "Me Voy O Me Quedo",
        "artist": "Tito Rojas",
        "img": "TITORPIC.jpg",
        "music": "Tito Rojas-Me Voy O Me Quedo.mp3"
    },
    {
        "id": 25,
        "name": "Ella Se Hizo Deseo",
        "artist": "Tito Rojas",
        "img": "titopic222.jpg",
        "music": "Tito Rojas-Ella Se Hizo Deseo.mp3"
    },
    {
        "id": 26,
        "name": "Persona Ideal",
        "artist": "Adolescentes Orquesta",
        "img": "adolescentespic3.jpg",
        "music": "Adolescent's Orquesta - Persona Ideal.mp3"
    },
    {
        "id": 27,
        "name": "Este Amor",
        "artist": "Tito Rojas",
        "img": "titopic44.jpg",
        "music": "Tito Rojas-Este Amor.mp3"
    },
    {
        "id": 28,
        "name": "Clase Social",
        "artist": "Adolescentes Orquesta",
        "img": "adolescentespic2.jpg",
        "music": "Adolescentes Orquesta - Clase Social.mp3"
    },
    {
        "id": 29,
        "name": "Porque Este Amor",
        "artist": "Tito Rojas",
        "img": "TITORPIC.jpg",
        "music": "Tito Rojas-Porque Este Amor.mp3"
    },
    {
        "id": 30,
        "name": "Anhelo",
        "artist": "Adolescentes Orquesta",
        "img": "adolescentespic1.jpg",
        "music": "Adolescent's Orquesta - Anhelo.mp3"
    },
    {
        "id": 31,
        "name": "Como Te Hago Entender",
        "artist": "Roberto Roena",
        "img": "COMOTEHAGOPIC.jpg",
        "music": "Como Te Hago ENTENDER  - Roberto Roena [Video Lyric].mp3"
    },
    {
        "id": 32,
        "name": "Virgen",
        "artist": "Adolescentes Orquesta",
        "img": "adolescentespic3.jpg",
        "music": "Adolescentes Orquesta - Virgen.mp3"
    },
    {
        "id": 33,
        "name": "La Cura",
        "artist": "Frankie Ruiz",
        "img": "frankieCurapic.jpg",
        "music": "Frankie Ruiz-La Cura.mp3"
    },
    {
        "id": 34,
        "name": "Hoy Aprendí",
        "artist": "Adolescentes Orquesta",
        "img": "adolepic444.jpg",
        "music": "Adolescentes Orquesta - Hoy Aprendí.mp3"
    },
    {
        "id": 35,
        "name": "Hola",
        "artist": "Hildemaro",
        "img": "holapic.jpg",
        "music": "Hola - Hildemaro (.mp3"
    },
    {
        "id": 36,
        "name": "Probablemente",
        "artist": "Yiyo Sarante",
        "img": "YiyoPic.jpg",
        "music": "Yiyo Sarante - Probablemente (Audio Oficial).mp3"
    },
    {
        "id": 37,
        "name": "Deseandote",
        "artist": "Frankie Ruiz",
        "img": "frankiepic2.jpg",
        "music": "Frankie Ruiz-Deseandote.mp3"
    },
    {
        "id": 38,
        "name": "Me Hubieras Dicho",
        "artist": "Yiyo Sarante",
        "img": "YIYOPIC2222.jpg",
        "music": "Yiyo Sarante - Me Hubieras Dicho (Video Oficial).mp3"
    },
    {
        "id": 39,
        "name": "El Camionero",
        "artist": "Frankie Ruiz",
        "img": "frankiepic3.jpg",
        "music": "Frankie Ruiz-El Camionero.mp3"
    },
    {
        "id": 40,
        "name": "Se Pareció Tanto a Ti",
        "artist": "Grupo Niche",
        "img": "NICHEPIC.jpg",
        "music": "Se Pareció Tanto a Ti.mp3"
    },
    {
        "id": 41,
        "name": "Por Mujeres Como Tú",
        "artist": "Tito Rojas",
        "img": "titopic222.jpg",
        "music": "Tito Rojas-Por Mujeres Como Tú.mp3"
    },
    {
        "id": 42,
        "name": "Haremos el Amor",
        "artist": "Tony Vega",
        "img": "tonyharemospic.jpg",
        "music": "Tony Vega-Haremos el Amor.mp3"
    },
    {
        "id": 43,
        "name": "Hasta Que Me Olvides",
        "artist": "Raulin Rosendo",
        "img": "ROSENDOPIC.jpg",
        "music": "Raulin Rosendo-Hasta Que Me Olvides.mp3"
    },
    {
        "id": 44,
        "name": "Siempre Sere",
        "artist": "Tito Rojas",
        "img": "titopic222.jpg",
        "music": "Tito Rojas-Siempre Sere.mp3"
    },
    {
        "id": 45,
        "name": "No podras escapar",
        "artist": "Willie Gonzalez",
        "img": "WILLIE2PIC.jpg",
        "music": "No Podrás ESCAPAR De Mi  - Willie Gonzalez [Video Oficial].mp3"
    },
    {
        "id": 46,
        "name": "Algo Facil De Olvidar",
        "artist": "VICTOR WAILL",
        "img": "VICTORWPICCC.jpg",
        "music": "VICTOR WAILL - Algo Facil De Olvidar.mp3"
    },
    {
        "id": 47,
        "name": "Que voy hacer",
        "artist": "Raulin Rosendo",
        "img": "ROSENDOPIC.jpg",
        "music": "Que Voy Hacer.mp3"
    },
    {
        "id": 48,
        "name": "Como da vuelta la vida",
        "artist": "La Franquicia",
        "img": "COMODAVUELTASPIC.jpg",
        "music": "Como da Vueltas la Vida.mp3"
    },
    {
        "id": 49,
        "name": "Deseo",
        "artist": "Raulin Rosendo",
        "img": "ROSENDOPIC.jpg",
        "music": "Deseo.mp3"
    },
    {
        "id": 50,
        "name": "Ironia",
        "artist": "Frankie Ruiz",
        "img": "ironiapic.jpg",
        "music": "Ironía.mp3"
    },
    {
        "id": 51,
        "name": "Quiero ser tuyo",
        "artist": "Tito Rojas",
        "img": "titoamarmepic.jpg",
        "music": "QUIERO Ser Tuyo  - Tito Rojas [Lyric Video].mp3"
    } 
         
 ];
 
 const searchInput = document.getElementById("search-input");
 const songList = document.getElementById("song-list");
 const audioPlayer = document.getElementById("audio-player");
 const audioSource = document.getElementById("audio-source");
 const prevButton = document.getElementById("prev-button");
 const nextButton = document.getElementById("next-button");
 const randomButton = document.getElementById("random-button");
 const playPauseButton = document.getElementById("play-pause-button");
 const progressBar = document.getElementById("progress-bar");
 const volumeSlider = document.getElementById("volume-slider");
 const muteButton = document.getElementById("mute-button");
 
 let isPlaying = false;
 let currentSongId = null;
 let isMuted = false;
 
 function renderSongs(filteredSongs = songs) {
     songList.innerHTML = "";
 
     filteredSongs.forEach(song => {
         const songItem = document.createElement("div");
         songItem.classList.add("song-item");
         songItem.dataset.songId = song.id;
         songItem.innerHTML = `
             <img src="${song.img}" alt="${song.name}">
             <span>${song.name} - ${song.artist}</span>
             <button class="play-button"><i class="fas fa-play"></i></button>
         `;
 
         const playButton = songItem.querySelector(".play-button");
         playButton.addEventListener("click", () => {
             playOrPauseSong(song, playButton);
         });
 
         songList.appendChild(songItem);
     });
 }
 
 function playOrPauseSong(song, button) {
     if (isPlaying && currentSongId === song.id) {
         audioPlayer.pause();
         button.querySelector("i").classList.replace("fa-pause", "fa-play");
         playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
         isPlaying = false;
     } else {
         audioSource.src = song.music;
         audioSource.dataset.songId = song.id;
         audioPlayer.load();
         audioPlayer.play();
         button.querySelector("i").classList.replace("fa-play", "fa-pause");
         playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
         isPlaying = true;
         currentSongId = song.id;
     }
 }
 
 audioPlayer.addEventListener("ended", function() {
     const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
     const nextSongIndex = (currentSongIndex + 1) % songs.length;
     playOrPauseSong(songs[nextSongIndex], document.querySelector(`[data-song-id="${songs[nextSongIndex].id}"] .play-button`));
 });
 
 function playNextSong() {
     const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
     const nextSongIndex = (currentSongIndex + 1) % songs.length;
     playOrPauseSong(songs[nextSongIndex], document.querySelector(`[data-song-id="${songs[nextSongIndex].id}"] .play-button`));
 }
 
 function playPrevSong() {
     const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
     const prevSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
     playOrPauseSong(songs[prevSongIndex], document.querySelector(`[data-song-id="${songs[prevSongIndex].id}"] .play-button`));
 }
 
 function playRandomSong() {
     const randomIndex = Math.floor(Math.random() * songs.length);
     playOrPauseSong(songs[randomIndex], document.querySelector(`[data-song-id="${songs[randomIndex].id}"] .play-button`));
 }
 
 prevButton.addEventListener("click", playPrevSong);
 nextButton.addEventListener("click", playNextSong);
 randomButton.addEventListener("click", playRandomSong);
 
 // Handle play/pause button toggle
 playPauseButton.addEventListener("click", () => {
     if (isPlaying) {
         audioPlayer.pause();
         playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
         isPlaying = false;
     } else {
         if (currentSongId === null) {
             // If no song is playing, start the first song
             playOrPauseSong(songs[0], document.querySelector(`[data-song-id="${songs[0].id}"] .play-button`));
         } else {
             audioPlayer.play();
             playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
             isPlaying = true;
         }
     }
 });
 
 // Progress Bar update
 audioPlayer.addEventListener("timeupdate", () => {
     if (audioPlayer.duration) {
         const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
         progressBar.value = progress;
     }
 });
 
 // Seek functionality
 progressBar.addEventListener("click", (event) => {
     const seekTime = (event.offsetX / progressBar.offsetWidth) * audioPlayer.duration;
     audioPlayer.currentTime = seekTime;
 });
 
 // Handle volume control slider
 volumeSlider.addEventListener("input", (event) => {
     audioPlayer.volume = event.target.value;
 });
 
 // Handle mute/unmute button
 muteButton.addEventListener("click", () => {
     if (isMuted) {
         audioPlayer.muted = false;
         volumeSlider.value = audioPlayer.volume;
         muteButton.querySelector("i").classList.replace("fa-volume-mute", "fa-volume-up");
     } else {
         audioPlayer.muted = true;
         muteButton.querySelector("i").classList.replace("fa-volume-up", "fa-volume-mute");
     }
     isMuted = !isMuted;
 });
 
 audioPlayer.addEventListener("play", () => {
     playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
     isPlaying = true;
 });
 
 audioPlayer.addEventListener("pause", () => {
     playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
     isPlaying = false;
 });
 
 renderSongs();
 
 searchInput.addEventListener("input", function() {
     const searchQuery = searchInput.value.toLowerCase();
 
     const filteredSongs = songs.filter(song =>
         song.name.toLowerCase().includes(searchQuery) ||
         song.artist.toLowerCase().includes(searchQuery)
     );
 
     renderSongs(filteredSongs);
 });
 // Lights Section //////////////////////////////////
function toggleClassPlayer(){

    const body = document.querySelector('body');
    body.classList.toggle('lightPlayer');
    
    }