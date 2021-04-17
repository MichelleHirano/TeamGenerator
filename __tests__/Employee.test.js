const Employee = require('../lib/Employee');

test ('creates employee object', () =>{
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test ('Set ID', () => {
    const name = "Jimin"
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});
