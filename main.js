status1="";
status2="";
var song1="";
var song2="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
scoreleftwrist=0;
scorerightwrist=0;

function preload(){
song1=loadsound("music.mp3");
song2=loadsound("music2.mp3");
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.position(450,200);
    video=createCapture(VIDEO);
    video.hide();
   posenet=ml5.poseNet(video,modelloaded);
   posenet.on("pose",gotposes);
}
function draw(){
   image(video,0,0,500,500);
   status1=song1.isPlaying();
   status2=song2.isPlaying();
   fill("red");
   stroke("red");
 if(scorerightwrist>0.2){
circle(rightwristx,rightwristy,20);
song2.stop();
if(status1==false){
song1.play();
document.getElementById("speed101").innerHTML="playingmusic1";
}
 }
 if(scoreleftwrist>0.2){
    circle(leftwristx,leftwristy,20);
    song1.stop();
    if(status2==false){
    song2.play();
    document.getElementById("speed101").innerHTML="playingmusic2";
    }
     }
}
function gotposes(results){
    if(results.length>0){
console.log(results);
scoreleftwrist=results[0].pose.keypoints[9].score;
scorerightwrist=results[0].pose.keypoints[10].score;
    }
}
function play(){
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}