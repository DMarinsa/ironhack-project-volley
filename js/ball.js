function Ball(game){
  this.game = game;
  this.x = 0;
  this.y = 0;
  this.vX = 5;
  this.vY = 5;
  this.gravity = 0.8;
}

Ball.prototype.draw = function(){
  this.game.ctx.save();
  this.game.ctx.translate(this.game.canvas.width/2, 20);
  this.game.ctx.fillStyle = 'red';
  this.game.ctx.arc(0,0,40,0,2*Math.PI);
  this.game.restore();
};

Ball.prototype.update = function(delta){
  this.vy += this.gravity;
  this.x += this.vx * delta;
  this.y += this.vy * delta;
  // Limits in X axis for canvas
  if((this.x+this.vx) >= this.game.canvas.width || (this.x+this.vx) <= 0){
    this.vx *= -0.8;
  }
  // Limits in Y axis for game.canvas
  if((this.y+this.vy) >= this.game.canvas.height || (this.y+this.vy) <= 0){
    this.vy *= -0.8;
  }
}