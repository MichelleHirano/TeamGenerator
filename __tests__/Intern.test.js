const Intern = require('../lib/Intern');

test ('adding Intern school', () => {
    const testValue = "UCI";
    const e = new Intern("Jenny", 1, "jenny@bp.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() to return Intern", () => {
    const testValue = "Intern";
    const e = new Intern("Jenny", 1, "jenny@bp.com", testValue);
    expect(e.getRole()).toBe(testValue);
});

test("getSchool function", () => {
    const testValue = "Engineer";
    const e = new Intern("Jenny", 1, "jenny@bp.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});