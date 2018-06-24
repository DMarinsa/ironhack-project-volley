function Player(game, x, y){
  this.game = game;
  this.x = x;
  this.y = y;
  this.vx = 5;
  this.vY = 5;
  this.gravity = 0.25;
  this.img = new Image();
  this.img.src = '';
  this.setListeners();
}

Player.prototype.draw = function(){
  this.game.ctx.save();
  this.game.ctx.translate(this.x,this.y);
  this.game.ctx.fillStyle='black';
  this.game.ctx.fillRect(0,0,60,60);
  this.game.ctx.restore();
};

Player.prototype.setListeners = function(){

}