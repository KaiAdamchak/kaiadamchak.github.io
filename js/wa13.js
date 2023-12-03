const employeeDetails = {
    "employees": [
        {
            "Name" : "Sam",
            "Department" : "Tech",
            "Designation" : "Manager",
            "Salary" : "40000",
            "Eligible" : "True",
        },
        {
            "Name" : "Mary",
            "Department" : "Finanace",
            "Designation" : "Trainee",
            "Salary" : "18500",
            "Eligible" : "True",
        },
        {
            "Name" : "Bill",
            "Department" : "HR",
            "Designation" : "Executive",
            "Salary" : "21200",
            "Eligible" : "False",
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

employeeDetails.employees.push({"Name":"Anna", "Department":"Finance", "Designation":"Executive", "Salary":"25600", "Eligible":"False"});

console.log("Question3:");
console.log(employeeDetails);

let totalSalary = 0;
employeeDetails.employees.forEach(employee => {
    totalSalary += parseInt(employee.Salary);
});  

console.log("Question4:");
console.log('Total $',totalSalary);

for (employees of employeeDetails.employees){
    if( employees["Eligible"] === "True"){
    employees.Salary = employees.Salary*1.1
    employees["Raise Eligible"] = "False"
    }
}

console.log("Question5:");
console.log(employeeDetails);

const workFromHome = ["Anna", "Sam"]
for ( employee of employeeDetails.employees){
    if (workFromHome.includes(employee.Name)){
        employee.wfh = "True";
    }    
    else{
        employee.wfh = "False";
    }
}

console.log("Question6:");
console.log(employeeDetails);