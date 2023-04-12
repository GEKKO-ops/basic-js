const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],
  getLength() {
    return this.chain.length;
    // remove line with error and write your code here
  },
  addLink(value ) {
    if (value === undefined) {
      this.chain.push('(  )');
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (
      typeof position === 'string' ||
      //!Number.isInteger(position) ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
