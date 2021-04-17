const Engineer = require('../lib/Engineer');

test ('setting up github via constructor', () => {
    const testValue = "MichelleHirano";
    const employee = new Engineer("Jimin", 1, "jimin@bts.com", testValue);
    expect(employee.github).toBe(testValue);
});

test("getRole function", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Jimin", 1, "jimin@bts.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get gitHub", () => {
    const testValue = "MichelleHirano";
    const employee = new Engineer("Jimin", 1, "jimin@bts.com", testValue);
    expect(employee.getGitHub()).toBenpm(testValue);
})