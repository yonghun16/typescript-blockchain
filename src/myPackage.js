// @ts-check
// "JSDoc" 타입스크립트가 자바스크립트의 문법을 검사함
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */

export function init(config) {
  return true; 
} 

/**
 * Exits the program
 * @param {number} code
 * @returns
 */
export function exit(code) {
  return code + 1;
}
