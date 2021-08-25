var rubachiek=loadSong('music.mp3');
var pirate=loadSong('music2.mp3');

function preload() {

}

function setup(){
    canvas=createCanvas(450,300);
    canvas.center();
    video=createCapture(VIDEO);
video.hide();
}

function  draw(){
    image(video,0,0,450,300)
}