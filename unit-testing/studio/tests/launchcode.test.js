// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  // Write your unit tests here!
  test("should have key = organization and value = nonprofit", function() {
    expect(launchcode.organization).toEqual("nonprofit");
  })
  test("should have key = executiveDirector and value = Jeff", function() {
    expect(launchcode.executiveDirector).toEqual("Jeff");
  })
  test("should have key = percentageCoolEmployees and value = 100", function() {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  })
  test("should have array called programsOffered = ['Web Development', 'Data Analysis', 'Liftoff']", function() {
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
  })
  test("should have method launchOutput() return to a string", function() {
    expect(typeof launchcode.launchOutput()).toEqual("string");
  })
  
  
});