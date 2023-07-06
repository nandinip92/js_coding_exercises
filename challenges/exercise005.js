export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  //Finding the index of the given number in the array
  const indx = nums.indexOf(n);

  // .indexOf() returns -1 if element is not present in the array
  // So returning "null" when element is not present
  // OR if the element is the final position return null
  if (indx === -1 || indx === nums.length - 1) {
    return null;
  }
  //returning the next element
  return nums[indx + 1];
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  //Initializing a dictionary with 0 and 1 Keys and Values/count as 0
  let freq = { 1: 0, 0: 0 };

  // splitting the given string into induvidual charectars
  let sp = str.split("");
  sp.forEach((n) => (freq[n] = freq[n] + 1));
  return freq;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  //converting the number into string then splitting, reversing and joining
  let result = n.toString().split("").reverse().join("");
  //converting string into number and returning
  return parseInt(result);
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  //Using 'map' converting the multi dimensional array into simple array

  let result = arrs.map((ele) => {
    let x = ele.reduce((acc, currVal) => acc + currVal);
    return x;
  });

  //Using reduce calculating the Sum of array

  result = result.reduce((acc, currVal) => acc + currVal);
  return result;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  const len = arr.length;

  if (len < 2) {
    return arr;
  }

  const temp = arr[0];
  arr[0] = arr[len - 1];
  arr[len - 1] = temp;

  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  
  //Since the search should not be case sensitive,
  //converting the search term into lowercase
  searchTerm = searchTerm.toLowerCase();

  //The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
for ( const [key, value] of Object.entries(haystack))
{
  //If the value is a string AND
  // as it should not be case sensitive,
  // checking if the lowercased string contains given searchTerm
  if(typeof(value) === "string" && value.toLowerCase().includes(searchTerm))
  {
    return true;
  }
}
 return false;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!

  // creating an empty dictionary for storing frequency counts
  let freq = {};

  //Removes everything except alphanumeric characters and whitespace,
  //then collapses multiple adjacent whitespace to single spaces.
  str = str.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");

  // splitting the string by space and initializing thevale to ZERO
  let s = str.split(" ");

  //Using map function and converting every word into LowerCase (since case must be ignored)
  //and then adding the word with value 1 into the dictionary if it doesnot exist
  //if it already exists increment the value by 1
  s.map((ele) => {
    ele = ele.toLowerCase();
    if (freq[ele] === undefined) {
      freq[ele] = 1;
    } else {
      freq[ele]++;
    }
  });

  return freq;
};
