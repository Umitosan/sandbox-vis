/*jshint esversion: 6 */


function Sandbox(size) {
  this.boxes = undefined;
  this.boxSize = 20;
  this.rows = 28;
  this.cols = 38;
  this.updatesFinished = false;

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
  };

  this.getCell = function(dir) {
    let foundCell;
    if (dir === 'up') {

    } else if (dir === 'down') {

    } else if (dir === 'left') {

    } else if (dir === 'right') {

    } else {
      console.log('not a valid getCell dir');
    }
    return foundCell;
  };

  this.draw = function() {
    this.boxes.forEach(function(curRow) {
      curRow.forEach(function(curCell) {
        curCell.draw();
      });
    });
  };

  this.update = function() {
    if (this.updatesFinished === false) {
          let cellCountToUpdate = 0;
          let newBoxesVals = [];

          for (let i = 0; i < this.rows; i++) {
            let newRow = [];
            for (let j = 0; j < this.cols; j++) {
              newRow.push(0);
            } // for
            newBoxesVals.push(newRow);
          } // for

          // build the val changes for 1 pass
          for (let r = 0; r < this.boxes.length; r++) {
            let curRow = this.boxes[r];
            for (let c = 0; c < curRow.length; c++) {
              let curCell = this.boxes[r][c];
              if (curCell.val === 4) { // check if cell has max value
                // update cell vals in 4 directions
                if (r !== 0) {   // up
                  newBoxesVals[r-1][c]++;
                  cellCountToUpdate++;
                }
                if (r !== this.boxes.length) {  // Down
                  newBoxesVals[r+1][c]++;
                  cellCountToUpdate++;
                }
                if (c !== 0) {  //left
                  newBoxesVals[r][c-1]++;
                  cellCountToUpdate++;
                }
                if (c !== curRow.length) {  // right
                  newBoxesVals[r][c+1]++;
                  cellCountToUpdate++;
                }
                // update cell of origin
                newBoxesVals[r][c] = 1;
              }
            } // for
          } // for

          // console.dir(newBoxesVals);

          // add newBoxesVals to this.boxes
          for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
              // let sum = this.boxes[r][c].val + newBoxesVals[r][c];
              this.boxes[r][c].val = newBoxesVals[r][c];
              this.boxes[r][c].updateColor();
            }
          }

          // console.dir(this.boxes);

          if (cellCountToUpdate === 0) {
            console.log('Board update complete');
            this.updatesFinished = true;
          }
          console.log('1 pass of cells update complete');
    }
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

  this.addClickVal = function() {
    // if (this.val < 3) { this.val += 1; }
    this.val = 4;
    this.updateColor();
  };

  this.updateColor = function() {
    let v = this.val;
    if (v === 0) {
      this.color = myColors.c0;
    } else if (v === 1) {
      this.color = myColors.c1;
    } else if (v === 2) {
      this.color = myColors.c2;
    } else if (v === 3) {
      this.color = myColors.c3;
    } else if (v === 4) {
      this.color = myColors.c4;
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

  };

} // Cell
