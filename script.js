var canvas = document.querySelector('canvas');
//Query selector selects the very first query for eg only first p tag from code
//QuerySelector all is used to select all the queries for eg all p tag from code
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
//doing so to set size of canvas as screen size which was complex with css
//still some gap left which will be covered by css body margin
var c = canvas.getContext('2d');
//c is like the paint brush

// // c.fillRect(x, y, width, height)
// // used to make rectangles
// //it always take x,y coordinates with respect to top left point
// c.fillStyle = "rgba(0, 0, 255)";
// c.fillRect(100, 100, 200, 200);
// c.fillStyle = "rgba(255, 0, 0)";
// c.fillRect(500, 100, 200, 200);
// c.fillStyle = "rgba(0, 255, 0)";
// c.fillRect(900, 100, 200, 200);

// //Line waala part
// c.beginPath();
// c.moveTo(300, 400);
// c.strokeStyle = "rgba(255, 0, 0)"
// c.lineTo(1100, 400);
// c.lineTo(1100, 700);
// c.stroke();

// for(let i=0; i<100; i++){
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     c.beginPath();
//     // c.arc(x, y, radius, startAngle in radius,  endAngle in radius) 1 pie = 180 degree sale khan ne bataya tha
//     c.arc(x, y, 20, 0, Math.PI*2);
//     c.strokeStyle = "rgba(255, 0, 0, 1)";
//     c.stroke(); 
// }

// var x = Math.random() * window.innerWidth;
// var y = Math.random() * window.innerHeight;
// var dx = Math.random()*100;//velocity
// var dy = Math.random()*100;
// var radius = 50;

// function animate(){
//     requestAnimationFrame(animate);//This will create loop for me
//     c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    // c.beginPath();
    // c.strokeStyle = "rgb(255, 0, 0)"
    // c.arc(x, y, radius, 0, Math.PI*2);
    // c.stroke();
    // if(x+radius > window.innerWidth) {
    //     dx = -5;
    // }
    // else if(x < radius){
    //     dx = 5;
    // }
    // if(y+radius > window.innerHeight){
    //     dy = -5;
    // }
    // else if(y < radius){
    //     dy = 5;
    // }
    // x += dx;
    // y += dy;
// }

// animate();

var mouse = {
    x:undefined,
    y:undefined
}

var colorArray = [
    "#ffaa33", "#99ffaaa", "#00ff00", "#4411aa", "#ff1100", "rgb(136, 173, 246)"
]

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.col = colorArray[Math.floor(Math.random()*colorArray.length)]

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        c.fillStyle = this.col;
        c.fill();//mandatory to right after c.fillStyle
        c.stroke();
        this.update();
    }

    this.update = function(){
        if(this.x+this.radius > window.innerWidth || this.x < this.radius) {
            this.dx = -this.dx;
        }
        if(this.y+this.radius > window.innerHeight || this.y < this.radius){
            this.dy = -this.dy;   
        }
        this.x += this.dx;
        this.y += this.dy;
        // this.draw();
        if(Math.abs(this.x-mouse.x) < 50 && this.radius < 60){
            this.radius += 1;
        }
        else if(this.radius > 10){
            this.radius -= 1;
        }
        if(Math.abs(this.y-mouse.y) < 50 && this.radius < 60){
            this.radius += 1;
        }
        else if(this.radius > 10){
            this.radius -= 1;
        }
    }
}

var circleArray = [];
for(let i=0; i<200; i++){
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let dx = Math.random()*5;//velocity
    let dy = Math.random()*5;
    let radius = 40;
    circleArray.push(new Circle(x,y,dx,dy,radius));
}


function animate(){
    requestAnimationFrame(animate);//This will create loop for me
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for(let i=0; i<circleArray.length; i++){
        circleArray[i].draw();
    }
}

animate()
