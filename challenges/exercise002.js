export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich["fillings"];
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return person["city"] === "Manchester" ? true : false;
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  return people <= 40 ? 1 : Math.ceil(people / 40);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  //Creating a list of unique values using Set
  const uniqueArr = new Set(arr);
  //if (!("sheep" in uniqueArr))
  //{
  //	return 0;
  //}

  // Creating an empty dictionary to store frequency count
  let freq = {};
  for (let value of uniqueArr) {
    freq[value] = arr.filter((ele) => ele === value).length;
  }

  return "sheep" in freq ? freq["sheep"] : 0;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return person.address.postCode.charAt(0) === "M" &&
    person.address.city === "Manchester"
    ? true
    : false;
}
