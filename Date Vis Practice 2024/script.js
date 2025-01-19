let cowImg;
let pigImg;
let chickenImg;
let treeImg;
let plasticImg;
let phoneImg;

function preload() {
    cowImg = loadImage('/img/cow.png');
    pigImg = loadImage('/img/pig.png');
    chickenImg = loadImage('/img/chicken.png');
    treeImg = loadImage('/img/tree.png');
    plasticImg = loadImage('/img/plastic.png');
    phoneImg = loadImage('/img/ewaste.png');
}

function setup(){
    createCanvas(1000, 800);
    frameRate(30);
}

function draw(){
    background(255, 255, 0);

    title();

    timer();

    image(cowImg, 50, 185, 200, 200);
    image(pigImg, 400, 170, 200, 200);
    image(chickenImg, 760, 170, 200, 200);

    image(treeImg, 50, 470, 200, 200);
    image(plasticImg, 400, 470, 200, 200);
    image(phoneImg, 770, 470, 200, 200);

}

function title(){
    textStyle(BOLD);
    textSize(48);
    text("Costs of the modern life style", 180, 80);
    textStyle(NORMAL);
    textSize(24);
    text("(Per second)", 420, 110);
}

function timer(){
let currentTime = int(millis() / 1000);

let hours = floor(currentTime / 3600);
    let minutes = floor((currentTime % 3600) / 60);
    let seconds = currentTime % 60;

    // Convert each unit to two digits
    let hoursStr = nf(hours, 2);
    let minutesStr = nf(minutes, 2);
    let secondsStr = nf(seconds, 2);

    // Display the digital clock
    textSize(48);
    fill(0, 0, 0);
    text(hoursStr + ":" + minutesStr + ":" + secondsStr, 400, 180);

    let cow = currentTime * 2000;
    let pig = currentTime * 13000;
    let chicken = currentTime * 21000;

    let tree = currentTime * 12;
    let plastic = currentTime * 270;
    let ewaste = (currentTime * 1.586).toFixed(3);
    
    textSize(24);
    fill(0, 0, 0);
    text("Cows: " + cow, 80, 410);
    text("Pigs: " + pig, 430, 410);
    text("Chickens: " + chicken, 760, 410);

    text("Trees: " + tree, 80, 710);
    text("Plastic: " + plastic + " metric tons", 380, 710);
    text("(Into the ocean)", 460, 730);
    text("E-waste: " + ewaste + " tons", 740, 710);
}