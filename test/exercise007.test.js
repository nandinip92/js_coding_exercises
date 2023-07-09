import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
} from "../challenges/exercise007-optional";

describe("sumDigits", () => {
  test("Throws error is a string is passed as an input", () => {
    expect(() => {
      sumDigits("Booo");
    }).toThrow("Input must be a number");
  });
  test("Returns 0 if the given number is 0", () => {
    expect(sumDigits(0)).toBe(0);
  });

  test("Returns sum of the digits in the given number 'n'", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(8)).toBe(8);
    expect(sumDigits(395)).toBe(17);
  });
  test("Ignores the decimal point if a Float is given as input", () => {
    expect(sumDigits(56.8)).toBe(19);
  });

  test("Returns Sum if the given number is less than 0/ negative number", () => {
    expect(sumDigits(-3)).toBe(3);
    expect(sumDigits(-57)).toBe(12);
  });
});

describe("createRange", () => {
  test("Throws exceptions when input cpnstraints are not met", () => {
    expect(() => createRange(-1, 2)).toThrow(
      "start and end should be greater than 0"
    );
    expect(() => createRange(4, -7)).toThrow(
      "start and end should be greater than 0"
    );
    expect(() => createRange(-3, -8)).toThrow(
      "start and end should be greater than 0"
    );
    expect(() => createRange(12, 5)).toThrow(
      "end should be greater than start"
    );
    expect(() => createRange(9, 6)).toThrow("end should be greater than start");
  });

  test("Return a range of numbers as an array", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(5, 15, 3)).toEqual([5, 8, 11, 14]);
  });

  test(`Check if the optional parameter 'step' is taking the default value 1,
when it is not provided with input`, () => {
    expect(createRange(0, 5)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(createRange(4, 10)).toEqual([4, 5, 6, 7, 8, 9, 10]);
  });

  test("Returns [start/end] when start===end", () => {
    expect(createRange(8, 8, 2)).toEqual([8]);
    expect(createRange(10, 10, 2)).toEqual([10]);
  });
});

describe("getScreentimeAlertList", () => {
  test("return an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 15, facebook: 19 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
    ];

    const users1 = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 15, facebook: 19 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 50, facebook: 51 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 12, instagram: 15, facebook: 19 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 30, instagram: 50, facebook: 25 },
          },
        ],
      },
    ];

    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
    expect(getScreentimeAlertList(users1, "2019-05-04")).toEqual([
      "beth_1234",
      "sam_j_1989",
    ]);
  });

  test("Returns empty array if there are no users who have used more than 100 minutes", () => {
    const users = [
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
    ];

    expect(getScreentimeAlertList(users, "2019-06-11")).toEqual([]);
  });
});

describe("hexToRGB", () => {
  test("Throws error if the given hexadecimal string is invalid", () => {
    //No short hands are allowed
    expect(() => {
      hexToRGB("#fc9");
    }).toThrow("No Short hand notations of Hexadecimal");
    //If the given string is a valid color or not
    expect(() => hexToRGB("#AEGFHR")).toThrow(
      "Given Hex input is not a valid color"
    );
  });

  test("Returns RGB code for the given hexadecimal value", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    expect(hexToRGB("#0000FF")).toBe("rgb(0,0,255)");
    expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
    expect(hexToRGB("#FFFFFF")).toBe("rgb(255,255,255)");
    expect(hexToRGB("#F0F8FF")).toBe("rgb(240,248,255)");
  });

  test("Hexadecimal value is not case sensitive", () => {
    expect(hexToRGB("#b2dfee")).toBe("rgb(178,223,238)");
    expect(hexToRGB("#fe6f5e")).toBe("rgb(254,111,94)");
  });
});
