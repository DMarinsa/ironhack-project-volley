function Background(game){
  this.game = game;

  this.img = new Image();
  this.img.src = 'images/bg.png';

  this.x = 0;
  this.y = 0;
}

Background.prototype.draw = function(){
  this.game.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.heigth);
}