const reverseString = require('./reverseString');

test("reverse string", () => {
    //Arrange
    string = "zuhra";
    //Act
    const value = string;
    //Assert
    expect( reverseString(value)).toBe("arhuz");
  });
  