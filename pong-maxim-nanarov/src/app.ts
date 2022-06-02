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





ctx.fillStyle = 'white'; 
ctx.fillRect(100, 100, 100, 100);


ctx.fillStyle = 'white'; 
ctx.fillRect(1300, 100, 100, 100);
document.addEventListener('keydown', logKey);

let player1:Rectangle = new Rectangle(100, 100, 'player1', 30,40); 
let player2:Rectangle = new Rectangle(1400, 100, 'player2', 30,40); 


function logKey(e:any) {
  p1.textContent += ` ${e.keyCode}`;
  //two importand keys w = 87 s = 83 && upkey = 38 downkey = 40
  if(e.keyCode === 87 ||  e.keyCode === 83){
      console.log('player one moves!');
      drewRect(player1.x,player1.y,player1.wid,player1.hei);
      window.addEventListener('keydown',(e:any)=>{
      var keyPr = e.keyCode; //Key code of key pressed
        if(keyPr === 38) {
          player1.y = player1.y-20; //top arrow subtract 20 from current
        }
        else if(keyPr === 40){
         player1.y = player1.y+20; //bottom arrow add 20 from current
        }
      ctx.clearRect(0,0, 500, 500);
    //Drawing rectangle at new position
      drewRect(player1.x,player1.y,player1.wid,player1.hei);
      drewRect(player2.x,player2.y,player2.wid,player2.hei);
      });

    }if(e.keyCode === 38 ||  e.keyCode === 40){
    console.log('player one moves!');
    drewRect(player2.x,player2.y,player2.wid,player2.hei);
    window.addEventListener('keydown',(e:any)=>{
    var keyPr = e.keyCode; //Key code of key pressed
    if(keyPr === 38) {
      player1.y = player1.y-20; //top arrow subtract 20 from current
    }
    else if(keyPr === 40){
      player1.y = player1.y+20; //bottom arrow add 20 from current
    }
    ctx.clearRect(0,0, 500, 500);
    //Drawing rectangle at new position
    drewRect(player1.x,player1.y,player1.wid,player1.hei);
    drewRect(player2.x,player2.y,player2.wid,player2.hei);
    });
  }
}


  function drewRect(x:number,y:number,wid:number,hei:number){
  ctx.fillStyle = 'green';
  ctx.fillRect(x, y, wid, hei);
  }
  