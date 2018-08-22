/*jshint esversion: 6 */


function Sandbox(size) {
  this.boxes = undefined;
  this.boxSize = 5;
  this.rows = 120;
  this.cols = 160;
  this.updatesFinished = false;

  this.init = function() {
    this.boxes = [];
    for (let i = 0; i < this.rows; i++) {
      let newRow = [];
      for (let j = 0; j < this.cols; j++) {
        let x = (j*this.boxSize);
        let y = (i*this.boxSize);
        let c = new Cell(x,y,this.boxSize);
        c.init();
        newRow.push(c);
      }
      this.boxes.push(newRow);
    }
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
          for (let r = 0; r < this.rows-1; r++) {
            for (let c = 0; c < this.cols-1; c++) {
              let curCell = this.boxes[r][c];
              if (curCell.val >= 4) { // check if cell has max value
                    // update cell vals in 4 directions
                    if (r !== 0) {   // up
                      newBoxesVals[r-1][c] += 1;
                    }
                    if (r !== this.rows) {  // Down
                      newBoxesVals[r+1][c] += 1;
                    }
                    if (c !== 0) {  //left
                      newBoxesVals[r][c-1] += 1;
                    }
                    if (c !== this.cols) {  // right
                      newBoxesVals[r][c+1] += 1;
                    }
                    cellCountToUpdate++;
              }
            } // for
          } // for

          // add newBoxesVals to this.boxes
          for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
              // first must subtract -4 from all cells that previously had 4 or more val
              if (this.boxes[r][c].val >= 4) { this.boxes[r][c].val -= 4; }
              // only now is it save to add from the computed array
              this.boxes[r][c].val += newBoxesVals[r][c];
            }
          }

          // update all colors with new vals
          for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
              this.boxes[r][c].updateColor();
            }
          }

          // if (cellCountToUpdate === 0) {
          //   console.log('Board update complete');
          //   this.updatesFinished = true;
          // }
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
    this.color = myColors.c0;
  };

  this.addClickVal = function() {
    // if (this.val < 4) { this.val += 1; }
    this.val += 200;
    // this.val = 4;
    this.updateColor();
  };

  this.updateColor = function() {
    let v = this.val;
    switch (v) {
      case 0: this.color = myColors.c0; break;
      case 1: this.color = myColors.c1; break;
      case 2: this.color = myColors.c2; break;
      case 3: this.color = myColors.c3; break;
      case 4: this.color = myColors.c4; break;
      case 5: this.color = myColors.c5; break;
      case 6: this.color = myColors.c6; break;
      case 7: this.color = myColors.c7; break;
      case 8: this.color = myColors.c8; break;
      case 9: this.color = myColors.c9; break;
      default: this.color = myColors.c9; break; // same as case 9
    }
  }; // updateCol

  this.draw = function() {
    ctx.beginPath();
    ctx.rect(this.x,this.y,this.size,this.size);
    ctx.fillStyle = this.color;
    // ctx.strokeStyle = myColors.darkGrey;
    ctx.fill();
    // ctx.stroke();
  };

  this.update = function() {

  };

} // Cell
