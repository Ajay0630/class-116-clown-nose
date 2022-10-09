noseX = 0;
noseY = 0;
loadImage
function preload() {
    TheOneAndOnlyIMAGE = loadImage("https://i.postimg.cc/T3whdBkb/istockphoto-1192834521-1024x1024-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 400, 400);
    image(TheOneAndOnlyIMAGE, noseX, noseY, 50, 50);
}

function takeSnapshot() {
    save("you-are-a-clown-now.png");
}

function modelLoaded() {
    console.log("Successful initialization.");
}

function gotPoses(results) {
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 23;
        noseY = results[0].pose.nose.y - 23;
        console.log("The nose's x coordinate is " + noseX);
        console.log("The nose's y coordinate is " + noseY);
    } else {
        console.error("No body found.");
    }
}