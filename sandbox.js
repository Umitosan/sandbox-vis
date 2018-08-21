/*jshint esversion: 6 */


function Sandbox(size) {
  this.boxes = undefined;
  this.boxSize = 20;
  this.rows = 28;
  this.cols = 38;
  this.doneSorting = false;

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

  this.addVal = function() {
    this.val += 1;
    let v = this.val;
    if (v === 0) {
      this.color = myColors.c0;
    } else if (v === 1) {
      this.color = myColors.c1;
    } else if (v === 2) {
      this.color = myColors.c2;
    } else if (v === 3) {
      this.color = myColors.c3;
    } else {
      console.log('changeVal probs or num too high');
    }
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
