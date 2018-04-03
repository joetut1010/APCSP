function RainDropEnemy(x, y, team){
    

    Sprite.call(this, x, y, team);
    
    this.speed = 15;

}

RainDropEnemy.prototype = Object.create(Sprite.prototype);  
RainDropEnemy.prototype.constructor = RainDropEnemy;
RainDropEnemy.prototype.r = 10;

RainDropEnemy.prototype.move = function(){ 
    this.y += this.speed;
    if(this.y > height){
        this.x = random(0+this.r, width-this.r);
        this.y = random(-250, -50);
    }
}
    
RainDropEnemy.prototype.display = function(){
    fill(255,0,0);
    ellipse(this.x, this.y, 2*this.r, 2*this.r);
}