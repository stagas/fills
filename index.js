
/*!
 *
 * fills
 *
 * ordered callback results accumulator
 *
 * MIT
 *
 */

/**
 * Expose `fills`.
 */

module.exports = fills;

/**
 * Factories a callback filling results in `cup`.
 *
 * @param {Array} cup
 * @return {Function}
 * @api public
 */

function fills(cup){
  var i = cup.length;
  cup[i] = null;
  return function(err, res){
    cup[i] = res;
  };
}
