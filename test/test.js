
/**
 * Test.
 */

var assert = require('assert');
var waits = require('waits');
var fills = require('../');

var i = 0;

var fn = waits(next);

var cup = [];

async(fn(fills(cup)));
async(fn(fills(cup)));
async(fn(fills(cup)));

function next(){
  assert.deepEqual([0, 1, 2], cup);
}

function async(fn){
  setTimeout(function(x){
    fn(null, x);
  }, Math.random() * 1000, i++);
}
