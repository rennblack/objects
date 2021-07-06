var player = function(name, livesLeft, score, speed, gridLocationX, gridLocationY){
    //Properties
    this.name = name;
    this.livesLeft = livesLeft;
    this.score = score;
    this.speed = speed;
    this.gridLocationX = 0;
    this.gridLocationY = 0;

    //Methods
    player.prototype.die = function()
    {
       alert(this.name + " has died.");
    }
    player.prototype.moveLeft = function()
    {
        if(this.gridLocationX > 0){
            this.gridLocationX -= 1;
            alert(this.name + " is now at position " + "(" + this.gridLocationX + "," + this.gridLocationY + ")");
        }else
        {
            alert("That position is off the game board.");
        }
        
    }
    player.prototype.moveRight = function()
    {
        if(this.gridLocationX < 9){
            this.gridLocationX += 1;
            alert(this.name + " is now at position " + "(" + this.gridLocationX + "," + this.gridLocationY + ")");
        }else
        {
            alert("That position is off the game board.");
        }
}
    player.prototype.moveUp = function()
    {
        if(this.gridLocationY > 0){
            this.gridLocationY -= 1;
            alert(this.name + " is now at position " + "(" + this.gridLocationX + "," + this.gridLocationY + ")");
        }else
        {
            alert("That position is off the game board.");
        }
    }
    player.prototype.moveDown = function()
    {
        if(this.gridLocationY < 9){
            this.gridLocationY += 1;
            alert(this.name + " is now at position " + "(" + this.gridLocationX + "," + this.gridLocationY + ")");
        }else{
            alert("That position is off the game board.");
        }
    }

}