export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      result.push(nums[i]);
    }
  }
  return result;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  let result = [];
  for (let i = 0; i < names.length; i++) {
    //comparing the first character of the string with the given charecter
    if (names[i].charAt(0) == char) {
      result.push(names[i]);
    }
  }
  return result;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here

  let result = [];
  for (let i = 0; i < words.length; i++) {
    //splitting the given words by space
    const wordSplit = words[i].split(" ");

    // checking if there are more than one elements in the list
    // and the first element is "to"
    if (wordSplit.length > 1 && wordSplit[0] == "to") {
      result.push(words[i]);
    }
  }
  return result;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    // checking if each element is an integer
    if (Number.isInteger(nums[i])) {
      result.push(nums[i]);
    }
  }
  return result;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let cities = [];

  for (let i = 0; i < users.length; i++) {
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  let squareRoots = [];
  for (let i = 0; i < nums.length; i++) {
    //using Math.sqrt function for square roots
    const sq = Math.sqrt(nums[i]);
    const rounded = Number(Math.round(sq + "e2") + "e-2");
    squareRoots.push(rounded);
  }
  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let result = [];
  for (let s = 0; s < sentences.length; s++) {
    //converting the given sentence and the string into lowercase since this is not case sensitive
    let inputSentence = sentences[s].toLowerCase();
    let givenSubstring = str.toLowerCase();

    //Checking if the given string "str" is present in the sentences
    if (inputSentence.includes(givenSubstring)) {
      result.push(sentences[s]);
    }
  }
  return result;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  let longestSides = [];

  for (let i = 0; i < triangles.length; i++) {
    //initialising the max to 0
    let max = 0;
    for (let j = 0; j < triangles[i].length; j++) {
      //reassigning the longest side to max
      if (max < triangles[i][j]) {
        max = triangles[i][j];
      }

    }
	//pushing the longest side of this particular Array
	longestSides.push(max);
  }
  return longestSides;
}
