function Game(canvasId){
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.prevTime = 0;
}

Game.prototype.start = function(){
  this.player1 = new Player(this, 20, this.canvas.width-100);
  this.player2 = new Player(this, this.canvas.width-20,  this.canvas.width-100);
  this.ball = new Ball(this);
  this.update();
};

Game.prototype.update = function(time){
  var delta = time - this.prevTime;
  this.prevTime = time;
  ctx.clearRect(0,0, canvas.width, canvas.height);

  ball.update(delta);
  ball.draw();

};

Game.prototype.stop = function() {
  window.cancelAnimationFrame();
};

Game.prototype.clear = function(){
  this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
};

Game.prototype.gameOver = function() {
  this.stop();
  
  if(confirm("GAME OVER. Play again?")) {
    this.reset();
    this.start();
  }
};

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.score1 = 0;
  this.score2 = 0;
};

Game.prototype.drawAll = function() {
  this.ball.draw();
  this.player1.draw();
  this.player2.draw();
};