/*jshint esversion: 6 */


function Sandbox(size) {
  this.boxes = undefined;
  this.boxSize = 20;
  this.rows = 28;
  this.cols = 38;
  this.doneSorting = false;
  this.c0 = 'rgba(227, 225, 227, 1)';
  this.c1 = 'rgba(102, 101, 100, 1)';
  this.c2 = 'rgba(52, 50, 57, 1)';
  this.c3 = 'rgba(240, 61, 51, 1)';

  this.init = function() {
    this.boxes = [];
    for (let i = 0; i < this.rows; i++) {
      let newRow = [];
      for (let j = 0; j < this.cols; j++) {
        let x = this.boxSize+(j*this.boxSize);
        let y = this.boxSize+(i*this.boxSize);
        let c = new Cell(x,y,this.boxSize);
        c.init();
        newRow.push(c);
      }
      this.boxes.push(newRow);
    }
    // console.dir(this.boxes);
  };

  this.draw = function() {
    this.boxes.forEach(function(curRow) {
      curRow.forEach(function(curCell) {
        curCell.draw();
      });
    });
  };

  this.update = function() {
    this.boxes.forEach(function(curRow) {
      curRow.forEach(function(curCell) {
        curCell.update();
      });
    });
  };

} // Sandbox


function Cell(xx,yy,s) {
  this.color = undefined;
  this.val = undefined;
  this.size = s;
  this.x = xx;
  this.y = yy;

  this.init = function() {
    this.val = 0;
    this.color = myColors.lightGreyBox;
  };

  this.draw = function() {
    ctx.beginPath();
    ctx.rect(this.x,this.y,this.size,this.size);
    ctx.fillStyle = this.color;
    ctx.strokeStyle = myColors.darkGrey;
    ctx.fill();
    ctx.stroke();
  };

  this.update = function() {
    // this.color = randColor('rgba');
  };

} // Cell
