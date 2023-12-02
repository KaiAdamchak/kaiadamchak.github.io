const employeeDetails = {
    "employee": [
        {
            "Name" : "Sam",
            "Department" : "Tech",
            "Designation" : "Manager",
            "Salary" : "40000",
            "Raise Eligible" : "True",
        },
        {
            "Name" : "Mary",
            "Department" : "Finanace",
            "Designation" : "Trainee",
            "Salary" : "18500",
            "Raise Eligible" : "True",
        },
        {
            "Name" : "Bill",
            "Department" : "HR",
            "Designation" : "Executive",
            "Salary" : "21200",
            "Raise Eligible" : "False",
        }
    ]
};

console.log("Question1:");
console.log(employeeDetails);

const companyinfo = {
    "company": [
        {
            "CompanyName" : "Tech Stars",
            "Website" : "www.techstars.site",
            "Employees": employeeDetails,
        }
    ]
};

console.log("Question2:");
console.log(companyinfo);

employeeDetails.employee.push({"Name":"Anna", "Department":"Finance", "Designation":"Executive", "Salary":"25600", "Raise Eligible":"False"})

console.log("Question3:");
console.log(employeeDetails);

const totalSalary = 0;
for (employee in employeeDetails.employee) {
    totalSalary += employee.Salary;
};

console.log("Question4:");
console.log(totalSalary);


