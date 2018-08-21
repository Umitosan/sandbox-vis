/*jshint esversion: 6 */

//////////////////////////////////////////////////////////////////////////////////
// HELPERS
//////////////////////////////////////////////////////////////////////////////////
function clearCanvas() {
  ctx.clearRect(-1, -1, canvas.width+1, canvas.height+1); // offset by 1 px because the whole canvas is offset initially (for better pixel accuracy)
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function generalLoopReset() {
  if (State.myReq !== undefined) {  // reset game loop if already started
    cancelAnimationFrame(State.myReq);
  }
  softReset();
  myGame = new Game(State.simSpeed); // ms per update()
  myGame.init();
  State.myReq = requestAnimationFrame(gameLoop);
}

function randColor(type) { // 'hex' or 'rgba'
  // more muted colors example
      // return ( "#" + Math.round((getRandomIntInclusive(0,99999999) + 0x77000000)).toString(16) );
  // full spectum below
  if (type === 'hex') {
    return ( "#" + Math.round((getRandomIntInclusive(0,0xffffff))).toString(16) );
  } else if (type === 'rgba') {
    return ( 'rgba('+ getRandomIntInclusive(0,255) +','+ getRandomIntInclusive(0,255) +','+ getRandomIntInclusive(0,255) +','+1+')' );
  } else {
    console.log("Not valid option for randColor()");
    return undefined;
  }
}

function invertRGBAstr(str) {
  let arr1 = str.slice(5,-1); // arr1 = "173,216,230,0.2"
  let arr2 = arr1.split(','); // arr2 = ["173","216","230","0.2"]
  let r = -1 * arr2[0] + 255;
  let g = -1 * arr2[1] + 255;
  let b = -1 * arr2[2] + 255;
  let a = arr2[3];
  return 'rgba('+r+','+g+','+b+','+a+')';
}
