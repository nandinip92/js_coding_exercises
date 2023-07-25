import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("throws an error if array is not passed", () => {
    //Arrange, Act and Assert
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");

    expect(() => {
      sumMultiples("string");
    }).toThrow("argument must be an Array");
  });

  test("Returns 0 if there are no multiples of 3 or 5", () => {
    //Arrange and Act
    const result = sumMultiples([2, 4, 7, 8, 11, 47]);
    const expected = 0;
    //Assert
    expect(result).toBe(expected);
  });

  test("Returns sum of numbers that are multiples of 3 or 5", () => {
    //Arrange, Act and Assert
    expect(sumMultiples([1, 3, 5])).toBe(8);
    expect(sumMultiples([10, 27, 15, 96, 23, 12, 35, 71])).toBe(195);
    expect(sumMultiples([3.0, 5.0])).toBe(8);
    expect(sumMultiples([24.6, 35.5, 93.0, 11.3])).toBe(93);
  });
});

describe("isValidDNA", () => {
  test("throws an error if array is not passed", () => {
    //Arrange, Act and Assert
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");

    expect(() => {
      isValidDNA(123);
    }).toThrow("Input must be string");
  });

  test("Returns 'false' if DNA string doesnot contain characters C, G, T or A only.", () => {
    //Arrange, Act and Assert
    expect(isValidDNA("brown")).toBe(false);
    expect(isValidDNA("run")).toBe(false);
    expect(isValidDNA("deer")).toBe(false);
  });

  test("Returns 'true' if string contains valid DNA characters C, G, T or A only.", () => {
    //Arrange, Act and Assert
    expect(isValidDNA("CAPE")).toBe(true);
    expect(isValidDNA("DOG")).toBe(true);
    expect(isValidDNA("TEE")).toBe(true);
  });

  test("DNA should not be case sensitive", () => {
    //Arrange, Act and Assert
    expect(isValidDNA("hat")).toBe(true);
    expect(isValidDNA("glue")).toBe(true);
    expect(isValidDNA("tree")).toBe(true);
    expect(isValidDNA("goAt")).toBe(true);
  });
});

describe("getComplementaryDNA", () => {
  test("throws an error if input is not valid", () => {
    //Arrange, Act and Assert
    expect(() => {
      getComplementaryDNA();
    }).toThrow("str is required");

    expect(() => {
      getComplementaryDNA(123);
    }).toThrow("Input must be string");
  });

  //Assuming isValidDNA is not invoked before calling this function!
  test("Returns empty String if string contains valid DNA characters C, G, T or A only.", () => {
    //Arrange, Act and Assert
    expect(getComplementaryDNA("brown")).toBe("");
    expect(getComplementaryDNA("run")).toBe("");
    expect(getComplementaryDNA("deer")).toBe("");
  });

  test(`Returns a string of the complementary base pairs.\n 
    \ T always pairs with A, and C always pairs with G`, () => {
    //Arrange, Act and Assert
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("CAPE")).toBe("GTPE");
    expect(getComplementaryDNA("DOG")).toBe("DOC");
    expect(getComplementaryDNA("TEE")).toBe("AEE");
  });

  test("DNA should not be case sensitive", () => {
    //Arrange, Act and Assert

    expect(getComplementaryDNA("hat")).toBe("hta");
    expect(getComplementaryDNA("tree")).toBe("aree");
    expect(getComplementaryDNA("goAt")).toBe("coTa");
  });
});

describe("createMatrix", () => {
  //Arrange, Act and Assert
  test("throws an error if input is not valid", () => {
    expect(() => {
      createMatrix(-1, "test");
    }).toThrow("n should be greater than 0");
  });
  test("Returns empty array when 0 is passed", () => {
    expect(createMatrix(0, "boo")).toEqual([]);
  });

  test("Returns an array of n arrays", () => {
    //Act and Assert
    expect(createMatrix(1, "hello")).toEqual([["hello"]]);
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
    expect(createMatrix(5, "x")).toEqual([
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
    ]);
  });

  test("When a number is passed as a 'fill'", () => {
    //Act and Assert
    expect(createMatrix(2, 10)).toEqual([
      [10, 10],
      [10, 10],
    ]);
    expect(createMatrix(4, 2)).toEqual([
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [2, 2, 2, 2],
    ]);
  });

  test("When a floating point is passed", () => {
    //Act and Assert
    expect(createMatrix(2, 1.5)).toEqual([
      [1.5, 1.5],
      [1.5, 1.5],
    ]);
    expect(createMatrix(3, 3.2)).toEqual([
      [3.2, 3.2, 3.2],
      [3.2, 3.2, 3.2],
      [3.2, 3.2, 3.2],
    ]);
  });
});

describe("areWeCovered", () => {
  test("Returns false when there are  no staff at all", () => {
    //Arrange, Act and Assert
    expect(areWeCovered([], "Sunday")).toBe(false);
    expect(areWeCovered([], "Monday")).toBe(false);
    expect(areWeCovered([], "Tuesday")).toBe(false);
    expect(areWeCovered([], "Wednesday")).toBe(false);
    expect(areWeCovered([], "Thursday")).toBe(false);
    expect(areWeCovered([], "Friday")).toBe(false);
    expect(areWeCovered([], "Saturday")).toBe(false);
  });

  test("Returns 'false' if there are no sufficient staff", () => {
    //Arrange
    const staff = [
      { name: "Tom", rota: ["Sunday", "Monday", "Tuesday"] },
      { name: "Jay", rota: ["Sunday", "Monday", "Tuesday"] },
    ];
    const staff1 = [
      { name: "Tom", rota: ["Sunday", "Monday", "Tuesday"] },
      { name: "Jay", rota: ["Sunday", "Monday", "Wednesday"] },
      { name: "Poppy", rota: ["Sunday", "Monday", "Friday"] },
    ];

    //Act and Assert
    expect(areWeCovered(staff, "Sunday")).toBe(false);
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
    expect(areWeCovered(staff1, "Friday")).toBe(false);
  });

  test("Returns 'true' if there are at least 3 staff members per day", () => {
    //Arrange
    const staff = [
      { name: "Tom", rota: ["Sunday", "Monday", "Tuesday"] },
      { name: "Jay", rota: ["Sunday", "Monday", "Wednesday"] },
      { name: "Poppy", rota: ["Sunday", "Monday", "Friday"] },
    ];
    const staff1 = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Tuesday", "Wednesday", "Saturday", "Sunday"] },
      { name: "Kate", rota: ["Monday", "Tuesday", "Friday", "Saturday"] },
    ];

    //Act and Assert
    expect(areWeCovered(staff, "Sunday")).toBe(true);
    expect(areWeCovered(staff, "Monday")).toBe(true);
    expect(areWeCovered(staff1, "Tuesday")).toBe(true);
  });

  test("Returns 'true' if there are more than 3 staff members per day", () => {
    //Arrange
    const staff = [
      { name: "Tom", rota: ["Sunday", "Monday", "Tuesday"] },
      { name: "Jay", rota: ["Sunday", "Monday", "Tuesday"] },
      { name: "Poppy", rota: ["Sunday", "Monday", "Wednesday"] },
      { name: "Rex", rota: ["Sunday", "Monday", "Thursday"] },
    ];

    //Act and Assert
    expect(areWeCovered(staff, "Monday")).toBe(true);
  });
});
