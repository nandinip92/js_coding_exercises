export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const result = nums.filter( n => n<1);
  return result;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  const result = names.filter(item => {
    //comparing the first character of the string with the given charecter
    if (item.charAt(0) === char) {
      return item;
    }
  });
  return result;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here

  let result = words.filter( item =>{
    //splitting the given words by space
    const wordSplit = item.split(" ");

    // checking if there are more than one elements in the list
    // and the first element is "to"
    if (wordSplit.length > 1 && wordSplit[0] === "to") 
	{
      return item;
    }
  });
  return result;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let result = nums.filter( n=> {
    // checking if each element is an integer
    if (Number.isInteger(n)) {
      return n;
    }
  });
  return result;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let cities = users.map( user => user.data.city.displayName);
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  let squareRoots = nums.map( n => {
    //using Math.sqrt function for square roots
    const sq = Math.sqrt(n);
    const rounded = Number(Math.round(sq + "e2") + "e-2");
    return rounded;
  });
  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  //converting the given string into lowercase since this is not case sensitive
  let givenSubstring = str.toLowerCase();

  let result = sentences.filter( s => {
    //converting the given sentence into lowercase since this is not case sensitive
    let inputSentence = s.toLowerCase();

    //Checking if the given string "str" is present in the sentences
    if (inputSentence.includes(givenSubstring)) {
      return s;
    }
  });
  return result;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  let longestSides = triangles.map( i => {
    //initialising the max to 0
    let max = 0;
    i.map( j =>{
      //reassigning the longest side to max
      if (max < j) {
        max = j;
      }
    });
	//pushing the longest side of this particular Array
	return max;
  });
  return longestSides;
}
