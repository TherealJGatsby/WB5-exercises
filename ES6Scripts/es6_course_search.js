let courses = [

    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },

    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },

    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },

    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },

    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

// When does PROG200 course start
function CourseById(CourseId) {
    return CourseId.CourseId == "PROG200";
}

let courseSelected = courses.find(CourseById);

// What is the title of the PROJ500 course
function courseTitle(title) {
    return title.CourseId == "PROJ500";
}

let course = courses.find(courseTitle);

console.log("PROG200 starts on: " + courseSelected.StartDate);
console.log("The title of PROJ500 is: " + course.Title);
