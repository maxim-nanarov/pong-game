const p1 = <HTMLElement>document.getElementById('p1');
const p2 = <HTMLElement>document.getElementById('p2');


  

var canvas =<HTMLCanvasElement>document.getElementById('theArea');
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');



 

window.addEventListener('resize',() => {
  canvas.height = window.innerHeight - 200;
  canvas.width = window.innerWidth - 200;
  });

canvas.height = window.innerHeight -200;
canvas.width = window.innerWidth -200;



function drewDashLine(){
  ctx.beginPath();
  ctx.setLineDash([5, 15]);
  ctx.moveTo(canvas.width/2, 0);
  ctx.fillStyle = 'White';
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke()
  }
  
class Rectangle{
  x:number;
  y:number;
  id:string;
  wid:number;
  hei:number;

    constructor(x:number,y:number, id:string,wid:number,hei:number){
      this.x = x;
      this.y =y; 
      this.id = id;
      this.wid = wid;
      this.hei = hei;
    }

    update(x:number, y:number){
      this.x = x;
      this.y = y; 
    }
}

let player1:Rectangle = new Rectangle(100, 100, 'player1', 20,60); 
let player2:Rectangle = new Rectangle(1400, 100, 'player2', 20,60); 

drewRect(player1.x,player1.y,player1.wid,player1.hei);
drewRect(player2.x,player2.y,player2.wid,player2.hei);

window.addEventListener('keydown', MOVE1);
window.addEventListener('keydown', MOVE2);

async function MOVE1(e:any) {
  if(e.keyCode === 87 ||  e.keyCode === 83){

        var keyPr = e.keyCode; 

      if(keyPr === 87 && player1.y > 0) {
        player1.y = player1.y-10; //top arrow subtract 20 from current
      }
      else if(keyPr === 83 && player1.y < window.innerHeight - 260){              
        player1.y = player1.y+10; //bottom arrow add 20 from current
      }
    }
  

  ctx.clearRect(0,0,window.innerWidth , window.innerHeight);
  drewDashLine();
  drewRect(player1.x,player1.y,player1.wid,player1.hei);
  drewRect(player2.x,player2.y,player2.wid,player2.hei);
}

async function MOVE2(e:any) {
  if(e.keyCode === 38 ||  e.keyCode === 40){

    var keyPr = e.keyCode;

    if(keyPr === 38 && player2.y > 0) {
      player2.y = player2.y-10; 
    }
    else if(keyPr === 40 && player2.y < window.innerHeight - 260){
      player2.y = player2.y+10; 
    }
    
  }

  ctx.clearRect(0,0,window.innerWidth , window.innerHeight);
  drewDashLine();
  drewRect(player1.x,player1.y,player1.wid,player1.hei);
  drewRect(player2.x,player2.y,player2.wid,player2.hei);
}
  function drewRect(x:number,y:number,wid:number,hei:number){
  ctx.fillStyle = 'White';
  ctx.fillRect(x, y, wid, hei);
  }
  
    
var raf:any;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: 'black',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvas.height ||
      ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width ||
      ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover',() => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', () => {
  window.cancelAnimationFrame(raf);
});

ball.draw();
