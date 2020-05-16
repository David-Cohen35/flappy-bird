/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bird.js":
/*!*********************!*\
  !*** ./src/bird.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bird; });\nconst CONSTANTS = {\n  GRAVITY: 0.4,\n  FLAP_SPEED: 8,\n  TERMINAL_VEL: 12,\n  BIRD_WIDTH: 40,\n  BIRD_HEIGHT: 30\n};\n\nclass Bird {\n\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.x = this.dimensions.width / 3;\n    this.y = this.dimensions.height / 2;\n    this.vel = 0;\n  }\n\n  flap() {\n    //if this were a more realistic bird simulation, we would be adding to the velocity\n    //instead of just assigning it outright\n    //to make the experience more fun and 'bouncy' we just set it directly\n    this.vel = -1 * CONSTANTS.FLAP_SPEED;\n  }\n\n  moveBird() {\n    //for each frame, the bird should move by it's current velocity\n    //velocity is 'pixels per frame', so each frame it should update position by vel\n    this.y += this.vel;\n    //the acceleration of gravity is in pixels per second per second\n    //so each second, it changes the velocity by whatever the gravity constant is\n    this.vel += CONSTANTS.GRAVITY;\n    //we set a 'terminal velocity', a maximum speed the bird can travel\n    //this keeps the game from becoming too wild because the bird is moving too fast to control\n    if (Math.abs(this.vel) > CONSTANTS.TERMINAL_VEL) {\n      //if the terminal velocity is exceeded, we set it to the terminal velicty\n      if (this.vel > 0) {\n        this.vel = CONSTANTS.TERMINAL_VEL;\n      } else {\n        this.vel = CONSTANTS.TERMINAL_VEL * -1;\n      }\n    }\n  }\n\n  animate(ctx) {\n    this.moveBird();\n    this.drawBird(ctx);\n  }\n\n  drawBird(ctx) {\n    ctx.fillStyle = \"yellow\";\n    ctx.fillRect(this.x, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);\n  }\n\n  bounds() {\n    return {\n      left: this.x,\n      right: this.x + CONSTANTS.BIRD_WIDTH,\n      top: this.y,\n      bottom: this.y + CONSTANTS.BIRD_HEIGHT\n    };\n  }\n\n  outOfBounds() {\n    const aboveTheTop = this.y < 0;\n    const belowTheBottom = this.y + CONSTANTS.BIRD_HEIGHT > this.dimensions.height;\n    return aboveTheTop || belowTheBottom;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/bird.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FlappyBird; });\n/* harmony import */ var _bird__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bird */ \"./src/bird.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n\n\n\nclass FlappyBird {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.registerEvents();\n    this.restart();\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n\n  restart() {\n    this.running = false;\n    this.score = 0;\n    this.bird = new _bird__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\n\n    this.animate();\n  }\n\n  registerEvents() {\n    this.boundClickHandler = this.click.bind(this);\n    this.ctx.canvas.addEventListener(\"mousedown\", this.boundClickHandler);\n  }\n\n  click(e) {\n    if (!this.running) {\n      this.play();\n    }\n    this.bird.flap();\n  }\n\n  gameOver() {\n    return (\n      this.level.collidesWith(this.bird.bounds()) || this.bird.outOfBounds(this.height)\n    );\n  }\n\n  //this is the key method of gaming action\n  //animate tells the game to advance one bit\n  //the bird moves, the level moves\n  //everything is redrawn to the screen\n  animate() {\n    //first we move and draw the level\n    this.level.animate(this.ctx);\n    //then we move and draw the bird\n    this.bird.animate(this.ctx);\n    //then we check to see if the game is over and let the player know\n    if (this.gameOver()) {\n      alert(this.score);\n      this.restart();\n    }\n\n    //we see if they have scored a point by passing a pipe\n    this.level.passedPipe(this.bird.bounds(), () => {\n      this.score += 1;\n      console.log(this.score);\n    });\n\n    //and draw the score\n    this.drawScore();\n\n    //if the game is NOT running, we do not animate the next frame\n    if (this.running) {\n      //This calls this function again, after around 1/60th of a second\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n\n  drawScore() {\n    //loc will be the location \n    const loc = { x: this.dimensions.width / 2, y: this.dimensions.height / 4 }\n    this.ctx.font = \"bold 50pt serif\";\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillText(this.score, loc.x, loc.y);\n    this.ctx.strokeStyle = \"black\";\n    this.ctx.lineWidth = 2;\n    this.ctx.strokeText(this.score, loc.x, loc.y);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst canvas = document.getElementById('bird-game');\nnew _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\nconst CONSTANTS = {\n  PIPE_SPEED: 2,\n  GAP_HEIGHT: 150,\n  PIPE_WIDTH: 50,\n  EDGE_BUFFER: 50,\n  PIPE_SPACING: 220,\n  WARM_UP_SECONDS: 1\n};\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n\n    const firstPipeDistance =\n      this.dimensions.width +\n      (CONSTANTS.WARM_UP_SECONDS * 60 * CONSTANTS.PIPE_SPEED);\n\n    this.pipes = [\n      this.randomPipe(firstPipeDistance),\n      this.randomPipe(firstPipeDistance + CONSTANTS.PIPE_SPACING),\n      this.randomPipe(firstPipeDistance + (CONSTANTS.PIPE_SPACING * 2)),\n    ];\n  }\n\n  randomPipe(x) {\n    const heightRange = this.dimensions.height - (2 * CONSTANTS.EDGE_BUFFER) - CONSTANTS.GAP_HEIGHT;\n    const gapTop = (Math.random() * heightRange) + CONSTANTS.EDGE_BUFFER;\n    const pipe = {\n      topPipe: {\n        left: x,\n        right: CONSTANTS.PIPE_WIDTH + x,\n        top: 0,\n        bottom: gapTop\n      },\n      bottomPipe: {\n        left: x,\n        right: CONSTANTS.PIPE_WIDTH + x,\n        top: gapTop + CONSTANTS.GAP_HEIGHT,\n        bottom: this.dimensions.height\n      },\n      passed: false\n    };\n    return pipe\n  }\n\n  animate(ctx) {\n    this.drawBackground(ctx);\n    this.movePipes();\n    this.drawPipes(ctx);\n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = \"skyblue\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n\n  passedPipe(bird, callback) {\n    this.eachPipe((pipe) => {\n      if (pipe.topPipe.right < bird.left) {\n        if (!pipe.passed) {\n          pipe.passed = true;\n          callback();\n        }\n      }\n    });\n  }\n\n  movePipes() {\n    this.eachPipe(function (pipe) {\n      pipe.topPipe.left -= CONSTANTS.PIPE_SPEED;\n      pipe.topPipe.right -= CONSTANTS.PIPE_SPEED;\n      pipe.bottomPipe.left -= CONSTANTS.PIPE_SPEED;\n      pipe.bottomPipe.right -= CONSTANTS.PIPE_SPEED;\n    });\n\n    //if a pipe has left the screen add a new one to the end\n    if (this.pipes[0].topPipe.right <= 0) {\n      this.pipes.shift();\n      const newX = this.pipes[1].topPipe.left + CONSTANTS.PIPE_SPACING;\n      this.pipes.push(this.randomPipe(newX));\n    }\n  }\n\n  drawPipes(ctx) {\n    this.eachPipe(function (pipe) {\n      ctx.fillStyle = \"green\";\n\n      //draw top pipe\n      ctx.fillRect(\n        pipe.topPipe.left,\n        pipe.topPipe.top,\n        CONSTANTS.PIPE_WIDTH,\n        pipe.topPipe.bottom - pipe.topPipe.top\n      );\n      //draw bottom pipe\n      ctx.fillRect(\n        pipe.bottomPipe.left,\n        pipe.bottomPipe.top,\n        CONSTANTS.PIPE_WIDTH,\n        pipe.bottomPipe.bottom - pipe.bottomPipe.top\n      );\n    });\n  }\n\n  eachPipe(callback) {\n    this.pipes.forEach(callback.bind(this));\n  }\n  //This method shall return true if the bird passed in is currently\n  //colliding with any pipe.\n  collidesWith(bird) {\n    //this function returns true if the the rectangles overlap\n    const _overlap = (rect1, rect2) => {\n      //check that they don't overlap in the x axis\n      if (rect1.left > rect2.right || rect1.right < rect2.left) {\n        return false;\n      }\n      //check that they don't overlap in the y axis\n      if (rect1.top > rect2.bottom || rect1.bottom < rect2.top) {\n        return false;\n      }\n      return true;\n    };\n    let collision = false;\n    this.eachPipe((pipe) => {\n      if (\n        //check if the bird is overlapping (colliding) with either pipe\n        _overlap(pipe.topPipe, bird) ||\n        _overlap(pipe.bottomPipe, bird)\n      ) { collision = true; }\n    });\n    return collision;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ })

/******/ });