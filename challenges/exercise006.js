/* 
⚠️
⚠️ See exercise006.md - this time you have to write your own tests! ⚠️
⚠️
*/

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("argument must be an Array");
  let sum = 0;
  arr.forEach((n) => {
    if (n % 3 === 0 || n % 5 === 0) {
      sum += n;
    }
  });
  return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string.
 * A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== "string") throw new Error("Input must be string");

  const validDNA = ["C", "G", "T", "A", "c", "g", "t", "a"];

  str = str.split("");
  return str.some((ch) => validDNA.includes(ch));
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs.
 * In DNA, T always pairs with A, and C always pairs with G.
 * So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== "string") throw new Error("Input must be string");

  const complements = {
    T: "A",
    C: "G",
    A: "T",
    G: "C",
    t: "a",
    c: "g",
    a: "t",
    g: "c",
  };
  str = str.split("");

  //Assuming isValidDNA is not invoked before calling this function, checking the validity of DNA
  const isValid = str.some((ch) => ch in complements);

  if (!isValid) {
    return "";
  }
  str = str.map((ch) => (ch in complements ? complements[ch] : ch)).join("");
  return str;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
  if (n === undefined) throw new Error("n is required");
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items.
 * The parameter "fill" should be used as the filler of the arrays.
 * For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  if (n < 0) throw new Error("n should be greater than 0");
  let matrix = Array.from({ length: n }, () => new Array(n).fill(fill));
  return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day.
 * The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  // filtering only the records that contains the given day
  staff = staff.filter((d) => {
    if (d.rota.includes(day)) return day;
  });

  return staff.length < 3 ? false : true;
};
