const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
  }
  

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');}
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encryptedMessage = '';

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++) {
      if (alphabet.indexOf(message.charAt(i)) === -1) {
        encryptedMessage += message.charAt(i);
        continue;
      }

      const char = key.charAt(j % key.length);
      const index = alphabet.indexOf(char);
      const messageIndex = alphabet.indexOf(message.charAt(i));

      let encryptedIndex;
      if (this.direct) {
        encryptedIndex = (messageIndex + index) % alphabet.length;
      } else {
        encryptedIndex = (messageIndex - index + alphabet.length) % alphabet.length;
      }



      encryptedMessage += alphabet.charAt(encryptedIndex);
      j++;
    }

    if (this.direct) {
      return encryptedMessage;
    } else {
      return this.reverse(encryptedMessage);
    }
    // remove line with error and write your code here
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let decryptedMessage = '';

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if (alphabet.indexOf(encryptedMessage.charAt(i)) === -1) {
        decryptedMessage += encryptedMessage.charAt(i);
        continue;
      }

      const char = key.charAt(j % key.length);
      const index = alphabet.indexOf(char);
      const encryptedIndex = alphabet.indexOf(encryptedMessage.charAt(i));

      let decryptedIndex;
      if (this.direct) {
        decryptedIndex = (encryptedIndex - index + alphabet.length) % alphabet.length;
      } else {
        decryptedIndex = (encryptedIndex + index) % alphabet.length;
      }

      decryptedMessage += alphabet.charAt(decryptedIndex);
      j++;
    }

    if (this.direct) {
      return decryptedMessage;
    } else {
      return this.reverse(decryptedMessage);
    }
    
  }

  reverse(message) {
    return message.split('').reverse().join('');
  }
    // remove line with error and write your code here
  }


module.exports = {
  VigenereCipheringMachine
};
