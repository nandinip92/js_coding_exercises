export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let result = [];
  nums.forEach( function(ele){
    if (ele < 1) {
      result.push(ele);
    }
  });
  return result;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  let result = [];
  names.forEach(item => {
    //comparing the first character of the string with the given charecter
    if (item.charAt(0) == char) {
      result.push(item);
    }
  });
  return result;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here

  let result = [];
  words.forEach( item =>{
    //splitting the given words by space
    const wordSplit = item.split(" ");

    // checking if there are more than one elements in the list
    // and the first element is "to"
    if (wordSplit.length > 1 && wordSplit[0] == "to") {
      result.push(item);
    }
  });
  return result;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let result = [];
  nums.forEach( n=> {
    // checking if each element is an integer
    if (Number.isInteger(n)) {
      result.push(n);
    }
  });
  return result;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let cities = [];

  users.forEach( user => {
    cities.push(user.data.city.displayName);
  });
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  let squareRoots = [];
  nums.forEach( n => {
    //using Math.sqrt function for square roots
    const sq = Math.sqrt(n);
    const rounded = Number(Math.round(sq + "e2") + "e-2");
    squareRoots.push(rounded);
  });
  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let result = [];
  sentences.forEach( s => {
    //converting the given sentence and the string into lowercase since this is not case sensitive
    let inputSentence = s.toLowerCase();
    let givenSubstring = str.toLowerCase();

    //Checking if the given string "str" is present in the sentences
    if (inputSentence.includes(givenSubstring)) {
      result.push(s);
    }
  });
  return result;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  let longestSides = [];

  triangles.forEach( i => {
    //initialising the max to 0
    let max = 0;
    i.forEach( j =>{
      //reassigning the longest side to max
      if (max < j) {
        max = j;
      }
    });
	//pushing the longest side of this particular Array
	longestSides.push(max);
  });
  return longestSides;
}
