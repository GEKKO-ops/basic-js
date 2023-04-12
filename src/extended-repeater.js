const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
     let addition = Array( options.additionRepeatTimes || 1)
     .fill(options.addition !== undefined ? String(options.addition) : '')
     .join(options.additionSeparator || '|');



    let result = Array(options.repeatTimes || 1)
    .fill(str + addition)
    .join(options.separator || '+');
  return result;
  // remove line with error and write your code here
}
module.exports = {
  repeater
};
