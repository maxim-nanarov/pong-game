var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict";
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	const p1 = document.getElementById('p1');
	const p2 = document.getElementById('p2');
	var canvas = document.getElementById('theArea');
	const ctx = canvas.getContext('2d');
	window.addEventListener('resize', () => {
	    canvas.height = window.innerHeight - 200;
	    canvas.width = window.innerWidth - 200;
	});
	canvas.height = window.innerHeight - 200;
	canvas.width = window.innerWidth - 200;
	ctx.beginPath();
	ctx.setLineDash([5, 15]);
	ctx.moveTo(canvas.width / 2, 0);
	ctx.fillStyle = 'White';
	ctx.lineTo(canvas.width / 2, canvas.height);
	ctx.stroke();
	class Rectangle {
	    constructor(x, y, id, wid, hei) {
	        this.x = x;
	        this.y = y;
	        this.id = id;
	        this.wid = wid;
	        this.hei = hei;
	    }
	    update(x, y) {
	        this.x = x;
	        this.y = y;
	    }
	}
	let player1 = new Rectangle(100, 100, 'player1', 20, 60);
	let player2 = new Rectangle(1400, 100, 'player2', 20, 60);
	drewRect(player1.x, player1.y, player1.wid, player1.hei);
	drewRect(player2.x, player2.y, player2.wid, player2.hei);
	window.addEventListener('keydown', MOVE1);
	window.addEventListener('keydown', MOVE2);
	function MOVE1(e) {
	    return __awaiter(this, void 0, void 0, function* () {
	        if (e.keyCode === 87 || e.keyCode === 83) {
	            var keyPr = e.keyCode;
	            if (keyPr === 87 && player1.y > 0) {
	                player1.y = player1.y - 10; //top arrow subtract 20 from current
	            }
	            else if (keyPr === 83 && player1.y < window.innerHeight - 22) {
	                player1.y = player1.y + 10; //bottom arrow add 20 from current
	            }
	        }
	        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
	        drewRect(player1.x, player1.y, player1.wid, player1.hei);
	        drewRect(player2.x, player2.y, player2.wid, player2.hei);
	    });
	}
	function MOVE2(e) {
	    return __awaiter(this, void 0, void 0, function* () {
	        if (e.keyCode === 38 || e.keyCode === 40) {
	            var keyPr = e.keyCode;
	            if (keyPr === 38 && player2.y > 0) {
	                player2.y = player2.y - 10;
	            }
	            else if (keyPr === 40 && player2.y < window.innerHeight - 220) {
	                player2.y = player2.y + 10;
	            }
	        }
	        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
	        drewRect(player1.x, player1.y, player1.wid, player1.hei);
	        drewRect(player2.x, player2.y, player2.wid, player2.hei);
	    });
	}
	function drewRect(x, y, wid, hei) {
	    ctx.fillStyle = 'White';
	    ctx.fillRect(x, y, wid, hei);
	}
	// var raf:any;
	// var ball = {
	//   x: 100,
	//   y: 100,
	//   vx: 5,
	//   vy: 2,
	//   radius: 25,
	//   color: 'blue',
	//   draw: function() {
	//     ctx.beginPath();
	//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
	//     ctx.closePath();
	//     ctx.fillStyle = this.color;
	//     ctx.fill();
	//   }
	// };
	// function draw() {
	//   ctx.clearRect(0,0, canvas.width, canvas.height);
	//   ball.draw();
	//   ball.x += ball.vx;
	//   ball.y += ball.vy;
	//   if (ball.y + ball.vy > canvas.height ||
	//       ball.y + ball.vy < 0) {
	//     ball.vy = -ball.vy;
	//   }
	//   if (ball.x + ball.vx > canvas.width ||
	//       ball.x + ball.vx < 0) {
	//     ball.vx = -ball.vx;
	//   }
	//   raf = window.requestAnimationFrame(draw);
	// }
	// canvas.addEventListener('mouseover',() => {
	//   raf = window.requestAnimationFrame(draw);
	// });
	// canvas.addEventListener('mouseout', () => {
	//   window.cancelAnimationFrame(raf);
	// });
	// ball.draw();


/***/ })
/******/ ]);