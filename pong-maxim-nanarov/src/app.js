var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var canvas = document.getElementById('theArea');
var ctx = canvas.getContext('2d');
window.addEventListener('resize', function () {
    canvas.height = window.innerHeight - 200;
    canvas.width = window.innerWidth - 200;
});
canvas.height = window.innerHeight - 200;
canvas.width = window.innerWidth - 200;
function drewDashLine() {
    ctx.beginPath();
    ctx.setLineDash([5, 15]);
    ctx.moveTo(canvas.width / 2, 0);
    ctx.fillStyle = 'White';
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
}
var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, id, wid, hei) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.wid = wid;
        this.hei = hei;
        this.points = 0;
    }
    Rectangle.prototype.update = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return Rectangle;
}());
var player1 = new Rectangle(100, 100, 'player1', 20, 60);
var player2 = new Rectangle(1400, 100, 'player2', 20, 60);
drewRect(player1.x, player1.y, player1.wid, player1.hei);
drewRect(player2.x, player2.y, player2.wid, player2.hei);
window.addEventListener('keydown', MOVE1);
window.addEventListener('keydown', MOVE2);
function MOVE1(e) {
    return __awaiter(this, void 0, void 0, function () {
        var keyPr;
        return __generator(this, function (_a) {
            if (e.keyCode === 87 || e.keyCode === 83) {
                keyPr = e.keyCode;
                if (keyPr === 87 && player1.y > 0) {
                    player1.y = player1.y - 10; //top arrow subtract 20 from current
                }
                else if (keyPr === 83 && player1.y < window.innerHeight - 260) {
                    player1.y = player1.y + 10; //bottom arrow add 20 from current
                }
            }
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            drewDashLine();
            drewRect(player1.x, player1.y, player1.wid, player1.hei);
            drewRect(player2.x, player2.y, player2.wid, player2.hei);
            return [2 /*return*/];
        });
    });
}
function MOVE2(e) {
    return __awaiter(this, void 0, void 0, function () {
        var keyPr;
        return __generator(this, function (_a) {
            if (e.keyCode === 38 || e.keyCode === 40) {
                keyPr = e.keyCode;
                if (keyPr === 38 && player2.y > 0) {
                    player2.y = player2.y - 10;
                }
                else if (keyPr === 40 && player2.y < window.innerHeight - 260) {
                    player2.y = player2.y + 10;
                }
            }
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            drewDashLine();
            drewRect(player1.x, player1.y, player1.wid, player1.hei);
            drewRect(player2.x, player2.y, player2.wid, player2.hei);
            return [2 /*return*/];
        });
    });
}
function drewRect(x, y, wid, hei) {
    ctx.fillStyle = 'White';
    ctx.fillRect(x, y, wid, hei);
}
var raf;
var ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    vx: 3,
    vy: 1,
    radius: 10,
    color: 'black',
    draw: function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 90, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};
function draw() {
    startFromScratch();
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (ball.y + ball.vy > canvas.height ||
        ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
    }
    if (ball.vx + ball.x < 120 && ball.vy + ball.y > player1.hei + 1 && ball.vy + ball.y < (player1.hei - 61)) {
        ball.vx = -ball.vx;
        ball.vy = -ball.vy;
    }
    if (ball.vx + ball.x < 1380 && ball.vy + ball.y > player2.hei + 1 && ball.vy + ball.y < (player2.hei - 61)) {
        ball.vx = -ball.vx;
        ball.vy = -ball.vy;
    }
    if (ball.x + ball.vx > canvas.width) {
        player1.points++;
        startFromScratch();
    }
    if (ball.x + ball.vx < 0) {
        player2.points++;
        // ball.vx = -ball.vx;
        startFromScratch();
    }
    raf = window.requestAnimationFrame(draw);
}
canvas.addEventListener('mouseover', function () {
    raf = window.requestAnimationFrame(draw);
});
canvas.addEventListener('mouseout', function () {
    window.cancelAnimationFrame(raf);
});
ball.draw();
function startFromScratch() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    drewDashLine();
    drewRect(player1.x, player1.y, player1.wid, player1.hei);
    drewRect(player2.x, player2.y, player2.wid, player2.hei);
    ball.draw();
}
