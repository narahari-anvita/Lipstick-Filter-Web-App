lipX=0;
lipY=0;
function preload(){
    lipstick = loadImage("https://i.postimg.cc/hGk0wzsV/Lipstick-filter-img.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Intialized');
}



function draw(){
    image(video, 0, 0, 300, 300);
    image(lipstick,lipX, lipY, 50,50);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        lipX= results[0].pose.nose.x-25;
        lipY= results[0].pose.nose.y-1;
        console.log("lip x = " + lipX);
        console.log("lip y = " + lipY);
    }
}

