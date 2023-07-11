/* 
	👉 These exercises are a great extra challenge to push your JavaScript skills. Go for it!
*/

/**
 * This function takes a number, e.g. 123 and
 * returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
export const sumDigits = (n) => {
  if (n === undefined) throw new Error("n is required");
  if (isNaN(n)) throw new Error("Input must be a number");
  if (n >= 0 && n < 10) return n;
  n = n.toString().split("");
  n = n.map((ch) => Number(ch));
  n = n.filter((ch) => !isNaN(ch)).reduce((acc, val) => acc + val);
  return n;
};

/**
 * This function creates a range of numbers as an array.
 * It received a start, an end and a step.
 * Step is the gap between numbers in the range.
 * For example, if start = 3, end = 11 and step = 2
 * the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter.
 * If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
export const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (start < 0 || end < 0)
    throw new Error("start and end should be greater than 0");
  if (start > end) throw new Error("end should be greater than start");
  if (step === undefined) step = 1;
  const range = Array.from(
    { length: (end - start) / step + 1 },
    (_, i) => start + i * step
  );
  return range;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications.
 * The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime
 * for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"]
 * as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
export const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  for (const [key, value] of Object.entries(users)) {
    // Filtering only the records with the given date.
    //screenTime will have only the records matching with the given date
    let screenTime = value.screenTime.filter((d) => d.date.includes(date));

    // Calculating the ScreenTime by adding usage values of all the apps
    screenTime = screenTime.map((st) =>
      Object.values(st.usage).reduce((acc, val) => acc + val)
    );

    value.screenTime = screenTime;
  }
  const result = users
    .map((u) => {
      if (u.screenTime.some((n) => n > 100)) return u.username;
    })
    .filter((st) => !(st === undefined));

  return result;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133.
 * A hexadecimal code is a number written in hexadecimal notation, i.e. base 16.
 * If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red,
 * the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 *
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
export const hexToRGB = (hexStr) => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (hexStr.length < 7)
    throw new Error("No Short hand notations of Hexadecimal");

  //Checking if the given input is a Hexadecimal or not
  const regExp = /^#[0-9A-F]{6}$/i;
  if (!regExp.test(hexStr))
    throw new Error("Given Hex input is not a valid color");

  //Ignoring '#' at starting of the string if passed as an argument
  hexStr =
    hexStr.charAt(0) === "#" ? hexStr.substring(1, hexStr.length) : hexStr;

  //Splitting the value by 2 letters
  let rgb = hexStr.match(/.{2}/g) ?? []; //?? -> Null coalescing operator

  rgb = rgb.map((v) => parseInt(v, 16));

  return `rgb(${rgb})`;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
export const findWinner = (board) => {
  if (board === undefined) throw new Error("board is required");
  const sqMatrix = board.filter((r) => r.length === board.length);
  if (sqMatrix.length !== board.length)
    throw new Error("Given input matrix is not a square matrix");

  const validValues = ["X", "0", null];
  const isValid = board.every((row) => {
    return row.every((val) => validValues.includes(val));
  });

  if (!isValid)
    throw new Error("Given matrix should only contain X,0 or null values only");

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let r = 0,
        c = 0;
      //Empty spaces are ignored
      if (board[i][j] === null) break;
      for (let k = 0; k < board.length; k++) {
        //Checking Row
        if (board[i][k] === board[i][j]) {
          r += 1;
        }
        //checking column
        if (board[k][j] === board[i][j]) {
          c += 1;
        }
      }
      if (r === board.length || c === board.length) return board[i][j];
    }
  }

  //Checking Diagonal if elements [(0,0),(1,1),(2,2)] are same
  let d = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (i == j) d.push(board[i][j]);
    }
  }

  if (d.every((ele) => ele === d[0])) return d[0];
  ////Checking Diagonal if elements [(0,2),(1,1),(2,0)] are same
  d = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (i + j === board.length - 1) d.push(board[i][j]);
    }
  }

  if (d.every((ele) => ele === d[0])) return d[0];

  return null;
};
