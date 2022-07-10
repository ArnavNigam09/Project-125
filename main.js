difference = 0;
rightwristX = 0;
leftwristX = 0;

function setup()
{
    video = createCapture(VIDEO)
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('poseNet is initialized')
    
}

function draw()
{
    background('#ADD8E6')
    
    document.getElementById("square_size").innerHTML = "font size of the text will be ="+difference+"px";
    textsize(difference);
    fill('#00FFFF');
    text('Steve',50,400);

}

function gotPoses(results)
{
    if(results.lenght>0)
    {
        console.log(results);
        leftwristX = results[0].pose.leftwristX;
        rightwristX = results[0].pose.rightwristX;
        difference = floor(leftwristX-rightwristX);
        console.log("leftwristX =" + leftwristX + "rightwristX =" + rightwristX + "difference =" + difference);

    }
}