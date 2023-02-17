type Employee = {
  [key: string]: string;
};

const emp: Employee = {};

// ✅ Explicitly checking
if (emp.department !== undefined) {
  console.log(emp.department.toLowerCase()); // now string
}

// ✅ Using optional chaining
console.log(emp.department?.toLowerCase());