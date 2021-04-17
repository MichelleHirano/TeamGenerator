const Manager = require('../lib/Manager');

test ('Adding office number', () => {
    const testValue = "310-999-9999";
    const e = new Manager("Boss", 1, "boss@boss.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() to return Manager", () => {
    const testValue = "Manager";
    const e = new Manager("Boss", 1, "boss@boss.com", testValue);
    expect(e.getRole()).toBe(testValue);
});

test ('Get office number vie getOffice', () => {
    const testValue = "310-999-9999";
    const e = new Manager("Boss", 1, "boss@boss.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

