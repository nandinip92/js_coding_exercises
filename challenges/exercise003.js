export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  return nums.map((n) => n * n);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  if (words.length == 0) {
    return words;
  }
  if (words.length == 1) {
    return words[0];
  }
  // If there are more than 1 words in the given list
  let camelCase = words[0];
  for (let w = 1; w < words.length; w++) {
    camelCase += words[w].charAt(0).toUpperCase();
    camelCase += words[w].substring(1, words[w].length);
  }

  return camelCase;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  const numberOfSubjectsPerPerson = people.map((d) => d.subjects.length);
  const totalSubjects = numberOfSubjectsPerPerson.reduce(
    (acc, currVal) => acc + currVal
  );

  return totalSubjects;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  const checkMenu = menu.filter((d) => d.ingredients.includes(ingredient));

  return checkMenu.length > 0 ? true : false;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  // Removing the duplicates for each array by converting them into Sets
  const arr1Set = new Set(arr1);
  const arr2Set = new Set(arr2);
  // Converting back these Sets into Lists and reassigning them into original variables
  arr1 = Array.from(arr1Set);
  arr2 = Array.from(arr2Set);
  // Finding the duplicates using filter and sorting them in ascending order
  const duplicates = arr1.filter((val) => arr2.includes(val)).sort();

  return duplicates;
}
