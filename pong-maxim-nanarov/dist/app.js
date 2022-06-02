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
	ctx.fillStyle = 'white';
	ctx.fillRect(100, 100, 100, 100);
	ctx.fillStyle = 'white';
	ctx.fillRect(1300, 100, 100, 100);
	document.addEventListener('keydown', logKey);
	let player1 = new Rectangle(100, 100, 'player1', 30, 40);
	let player2 = new Rectangle(1400, 100, 'player2', 30, 40);
	function logKey(e) {
	    p1.textContent += ` ${e.keyCode}`;
	    //two importand keys w = 87 s = 83 && upkey = 38 downkey = 40
	    if (e.keyCode === 87 || e.keyCode === 83) {
	        console.log('player one moves!');
	        drewRect(player1.x, player1.y, player1.wid, player1.hei);
	        window.addEventListener('keydown', (e) => {
	            var keyPr = e.keyCode; //Key code of key pressed
	            if (keyPr === 38) {
	                player1.y = player1.y - 20; //top arrow subtract 20 from current
	            }
	            else if (keyPr === 40) {
	                player1.y = player1.y + 20; //bottom arrow add 20 from current
	            }
	            ctx.clearRect(0, 0, 500, 500);
	            //Drawing rectangle at new position
	            drewRect(player1.x, player1.y, player1.wid, player1.hei);
	            drewRect(player2.x, player2.y, player2.wid, player2.hei);
	        });
	    }
	    if (e.keyCode === 38 || e.keyCode === 40) {
	        console.log('player one moves!');
	        drewRect(player2.x, player2.y, player2.wid, player2.hei);
	        window.addEventListener('keydown', (e) => {
	            var keyPr = e.keyCode; //Key code of key pressed
	            if (keyPr === 38) {
	                player1.y = player1.y - 20; //top arrow subtract 20 from current
	            }
	            else if (keyPr === 40) {
	                player1.y = player1.y + 20; //bottom arrow add 20 from current
	            }
	            ctx.clearRect(0, 0, 500, 500);
	            //Drawing rectangle at new position
	            drewRect(player1.x, player1.y, player1.wid, player1.hei);
	            drewRect(player2.x, player2.y, player2.wid, player2.hei);
	        });
	    }
	}
	function drewRect(x, y, wid, hei) {
	    ctx.fillStyle = 'green';
	    ctx.fillRect(x, y, wid, hei);
	}


/***/ })
/******/ ]);