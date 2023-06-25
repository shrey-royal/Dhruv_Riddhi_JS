// var person = {
//     firstName: "Dhruv",
//     lastName: "Sharma",
//     age: 21,
//     eyeColor: "black"
// };

// document.write(person.firstName + " is " + person.age + " years old.");

// var person = new Object();  // Create Object

// person.firstName = "Riddhi";
// person.lastName = "Sharma";
// person.age = 21;
// person.eyeColor = "black";

// document.write(person.firstName + " is " + person.age + " years old.");

// function person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// friend = new person("Dhruv", "Adani", 27, "black");
// another_friend = new person("Riddhi", "Ambani", 21, "black");

// document.write(friend.firstName + " is " + friend.age + " years old.");
// document.write("<br>");
// document.write(another_friend.firstName + " is " + another_friend.age + " years old.");
// document.write("<br>");


// function employee(id, name, salary) {
//     this.id = id;
//     this.name = name;
//     this.salary = salary;

//     this.changeSalary = changeSalary;
//     function changeSalary(otherSalary) {
//         this.salary = otherSalary;
//     }
// }

// var emp = new employee(1, "Dhruv", 10000);
// document.write(emp.id + " " + emp.name + " " + emp.salary);
// emp.changeSalary(20000);
// document.write("<br>");
// document.write(emp.id + " " + emp.name + " " + emp.salary);
// ----------------------------------------------------------------------------
var myObj = {
    "university": {
      "name": "Central University",
      "location": "Cityville",
      "established": 1950,
      "faculties": [
        {
          "name": "Faculty of Science",
          "departments": [
            {
              "name": "Physics",
              "courses": [
                {
                  "code": "PHY101",
                  "name": "Introduction to Physics",
                  "credits": 3,
                  "students": [
                    {
                      "id": 101,
                      "name": "John Doe",
                      "grades": [85, 92, 78]
                    },
                    {
                      "id": 102,
                      "name": "Jane Smith",
                      "grades": [79, 88, 91]
                    }
                  ]
                },
                {
                  "code": "PHY201",
                  "name": "Advanced Physics",
                  "credits": 4,
                  "students": [
                    {
                      "id": 103,
                      "name": "Alex Johnson",
                      "grades": [72, 81, 89]
                    },
                    {
                      "id": 104,
                      "name": "Emily Brown",
                      "grades": [94, 87, 76]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Chemistry",
              "courses": [
                {
                  "code": "CHM101",
                  "name": "Basic Chemistry",
                  "credits": 3,
                  "students": [
                    {
                      "id": 105,
                      "name": "Michael Wilson",
                      "grades": [88, 90, 82]
                    },
                    {
                      "id": 106,
                      "name": "Sophia Davis",
                      "grades": [91, 83, 95]
                    }
                  ]
                },
                {
                  "code": "CHM201",
                  "name": "Organic Chemistry",
                  "credits": 4,
                  "students": [
                    {
                      "id": 107,
                      "name": "Daniel Martinez",
                      "grades": [76, 84, 90]
                    },
                    {
                      "id": 108,
                      "name": "Olivia Johnson",
                      "grades": [93, 89, 77]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Faculty of Arts",
          "departments": [
            {
              "name": "English",
              "courses": [
                {
                  "code": "ENG101",
                  "name": "Introduction to Literature",
                  "credits": 3,
                  "students": [
                    {
                      "id": 109,
                      "name": "William Taylor",
                      "grades": [85, 92, 78]
                    },
                    {
                      "id": 110,
                      "name": "Elizabeth Anderson",
                      "grades": [79, 88, 91]
                    }
                  ]
                },
                {
                  "code": "ENG201",
                  "name": "Shakespearean Literature",
                  "credits": 4,
                  "students": [
                    {
                      "id": 111,
                      "name": "Joseph Moore",
                      "grades": [72, 81, 89]
                    },
                    {
                      "id": 112,
                      "name": "Samantha Walker",
                      "grades": [94, 87, 76]
                    }
                  ]
                }
              ]
            },
            {
              "name": "History",
              "courses": [
                {
                  "code": "HIS101",
                  "name": "World History",
                  "credits": 3,
                  "students": [
                    {
                      "id": 113,
                      "name": "David Turner",
                      "grades": [88, 90, 82]
                    },
                    {
                      "id": 114,
                      "name": "Ava Harris",
                      "grades": [91, 83, 95]
                    }
                  ]
                },
                {
                  "code": "HIS201",
                  "name": "Ancient Civilizations",
                  "credits": 4,
                  "students": [
                    {
                      "id": 115,
                      "name": "Matthew Clark",
                      "grades": [76, 84, 90]
                    },
                    {
                      "id": 116,
                      "name": "Grace Turner",
                      "grades": [93, 89, 77]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }

/*
Let's break down the structure and explain the JSON object:

- The top-level object represents a university and contains the following properties:
  - `"name"`: The name of the university is set to "Central University."
  - `"location"`: The location of the university is set to "Cityville."
  - `"established"`: The year of establishment of the university is set to 1950.

- The university has two faculties, each represented as an object within the `"faculties"` array. The faculties are:
  1. Faculty of Science:
     - `"name"`: The name of the faculty is set to "Faculty of Science."
     - `"departments"`: An array of departments within the faculty.

  2. Faculty of Arts:
     - `"name"`: The name of the faculty is set to "Faculty of Arts."
     - `"departments"`: An array of departments within the faculty.

- Each department is represented as an object within the `"departments"` array, and it contains the following properties:
  - `"name"`: The name of the department.
  - `"courses"`: An array of courses offered by the department.

- Each course is represented as an object within the `"courses"` array, and it has the following properties:
  - `"code"`: The code of the course.
  - `"name"`: The name of the course.
  - `"credits"`: The number of credits associated with the course.
  - `"students"`: An array of students enrolled in the course.

- Each student is represented as an object within the `"students"` array, and it has the following properties:
  - `"id"`: The unique identifier of the student.
  - `"name"`: The name of the student.
  - `"grades"`: An array of grades obtained by the student.

The JSON object follows a hierarchical structure, with the university containing faculties, which contain departments, which in turn contain courses, and finally, courses contain students. This structure allows for easy organization and retrieval of information related to the university's academic data.

The JSON object can be utilized to demonstrate concepts like mapping and reducing when processing the student data. For example, you could map over the students' grades to calculate their average grades or use reduce to find the student with the highest overall grade. These methods enable data manipulation and analysis in a concise and efficient manner.
*/


// Q1: Using the map method, create an array of all course codes offered in the Faculty of Science.

const facultyOfScience = myObj.university.faculties.find(faculty => faculty.name === "Faculty of Science");

//flatmap method is used to flatten the array of arrays into a single array
const courseCodes = facultyOfScience.departments.flatMap(departments => departments.courses).map(course => course.code);

console.log(courseCodes);

// Q2: Using the map method, generate an array of objects containing the names and IDs of all students enrolled in the "Introduction to Literature" course.

const IntroToLiteratureStudents = myObj.university.faculties
    .flatMap(faculty => faculty.departments)
    .flatMap(departments => departments.courses)
    .find(courses => courses.name === "Introduction to Literature")
    .students
    .map(student => ({name: student.name, id: student.id}));

console.log(IntroToLiteratureStudents);
// JSON -> JavaScript Object Notation

// Q3: Using the reduce method, calculate the total number of credits for all courses in the Faculty of Arts.

const facultyOfArts = myObj.university.faculties.find(faculty => faculty.name === "Faculty of Arts");

//array.reduce(callback, initialValue)
const totalCredits = facultyOfArts.departments
    .flatMap(department => department.courses)
    .reduce((total, course) => total + course.credits, 0);

console.log(totalCredits)

// Q4: Using the reduce method, find the student with the highest average grade across all courses.



// Q5: Using the filter method, create an array of students who have obtained a grade higher than 94 in any course.

const studentsWithHighGrades = myObj.university.faculties
    .flatMap(faculty => faculty.departments)
    .flatMap(department => department.courses)
    .flatMap(course => course.students)
    .filter(student => student.grades.some(grade => grade > 94));

console.log(studentsWithHighGrades)


// Q6: Using the filter method, generate an array of courses in the Faculty of Science that have more than 2 credits.