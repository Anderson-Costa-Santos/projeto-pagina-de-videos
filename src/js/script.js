
/*contantes*/

const video = document.getElementById("video");
const control = document.getElementById("ctrl");
const mudarimg = document.getElementById("img-play");
const mudarParaMute = document.getElementById("volume-img");
const volume = document.getElementById("volumeControl");
const barraVolume = document.getElementById("volumeControl");
const nextVideo = document.getElementById("next-button");
let index = 0

/*button functions*/

function retroceder() {

    video.currentTime -= 10;

}

function PlayPause() {
    if (video.paused) {

        mudarimg.setAttribute("src", "./src/imagens/button-pause.PNG");

        video.play();

    } else {

        mudarimg.setAttribute("src", "./src/imagens/button-play.PNG");

        video.pause();
    }

}

function stop() {

    video.pause();
    video.currentTime = 0;

    video.poster.setAttribute();
  
}

function avancar() {

    video.currentTime += 10;

}

function expandir() {

    video.requestFullscreen();

}

function volumeUpDown() {

    let mudarVolume = document.getElementById("volumeControl").value / 100;

    video.volume = mudarVolume;

    if (video.volume === 0) {

        mudarParaMute.setAttribute("src", "./src/imagens/mute.PNG");

    } else if (video.volume > 0.1) {

        mudarParaMute.setAttribute("src", "./src/imagens/volume.PNG");
    }

}

function mute() {

    if (video.volume > 0) {

        mudarParaMute.setAttribute("src", "./src/imagens/mute.PNG");

        video.volume = 0;

        barraVolume.value = 0;

    } else {

        mudarParaMute.setAttribute("src", "./src/imagens/volume.PNG");

        video.volume = 1;

        barraVolume.value = 100;

    }

}

/*style functions*/

function mostrar() {

    control.style.opacity = "1";

    control.style.transition = "0.5s";

}

function esconder() {

    control.style.opacity = "0";

    control.style.transition = "0.5s";

}

/*list functions*/

/*constantes*/

const listaDevideos = document.querySelectorAll(".videos");


listaDevideos.forEach((videos) => {

videos.addEventListener("click", () =>{

const idVideo = videos.attributes.id.value

video.src= `./src/videos/${idVideo}.mp4`;

video.poster = `./src/imagens/${idVideo}.jpeg`

    if (video.paused) {

        mudarimg.setAttribute("src", "./src/imagens/button-pause.PNG");

        video.play();

    } else {

        mudarimg.setAttribute("src", "./src/imagens/button-play.PNG");

        video.pause();
 
    }

})

})


let data = [

{
image: "./src/imagens/the-neighbourhood.jpeg",
arquivo: "videos/the-neighbourhood.mp4"
},
{
    image: "./src/imagens/aurora.jpeg",
    arquivo: "./src/videos/aurora.mp4"
},
{
    image: "./src/imagens/bishop-briggs.jpeg",
    arquivo: "./src/videos/bishop-briggs.mp4"
},
{
    image: "./src/imagens/cold-war-kids.jpeg",
    arquivo: "./src/videos/cold-war-kids.mp4"
},
{
    image: "./src/imagens/james-bay.jpeg",
    arquivo: "./src/videos/james-bay.mp4"
}


]

localStorage.setItem("newData", JSON.stringify(data))
let videosDados = JSON.parse(localStorage.newData)


function RenderMe(){

    video.src = videosDados[index].arquivo
    video.poster = videosDados[index].image

}


function nextVideoDaLista(){
    index ++
    if(index > videosDados.length - 1 ){
     index=0;   
    } 
    RenderMe()
    PlayPause()

}

nextVideo.addEventListener("click", nextVideoDaLista);
 

