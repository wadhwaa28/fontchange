noseX=0;
noseY=0;
leftwrist=0;
rightwrist=0;
difference=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#969A97');
    document.getElementById("text").innerHTML="size of the text will be" + difference + "px"
    fill("whitesmoke");
    textSize(difference);
    text("Arnav", noseX, noseY)
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftwrist=results[0].pose.leftWrist.x;
        rightwrist=results[0].pose.rightWrist.y;
        difference=rightwrist-leftwrist
    }
}