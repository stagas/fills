
/**
 * Example.
 */

var waits = require('waits');
var fills = require('./');

var i = 0;

var fn = waits(next);

var cup = [];

async(fn(fills(cup)));
async(fn(fills(cup)));
async(fn(fills(cup)));

//
// output:
//
//   x is 2
//   x is 0
//   x is 1
//

function next(){
  console.log(cup); // => [ 0, 1, 2 ]
}

function async(fn){
  setTimeout(function(x){
    console.log('x is', x);
    fn(null, x);
  }, Math.random() * 1000, i++);
}
