// type
enum Role {
  ADMIN,
  STUDENT,
}

interface Iuser {
  id: number;
  name: string;
  role: Role;
}

interface Icourse {
  id: number;
  title: string;
  description: string;
  student: Iuser[];
}

// Role checking
function isAdmin(user: Iuser): user is Iuser & { role: Role.ADMIN } {
  return user.role === Role.ADMIN;
}

// courses list
const courses: Icourse[] = [];

// add course
function addCourse(user: Iuser, course: Icourse) {
  if (isAdmin(user)) {
    courses.push(course);
    console.log(`Course added ${course.title}`);
  } else {
    console.log("only admin can add course");
  }
}

// enroll student
function enrollStudent(user: Iuser, courseId: number) {
  const course = courses.find((course) => course.id === courseId);

  if (!course) {
    console.log("course not found");
    return;
  }

  if (user.role === Role.STUDENT) {
    course.student.push(user);
    console.log(`student enrolled ${user.name}`);
  } else {
    console.log(`only student can enroll`);
  }
}

// student list

function listStudent(user: Iuser, courseId: number) {
  if (!isAdmin(user)) {
    console.log("only admin show list students.");
    return;
  }

  const course = courses.find((course) => course.id === courseId);

  if (!course) {
    console.log("course not found");
    return;
  }

  console.log(
    `Students in ${course.title}: ${course.student
      .map((c) => c.name)
      .join(", ")} `
  );
}

// practise
const admin: Iuser = {
  id: 1,
  name: "admin",
  role: Role.ADMIN,
};

const student1: Iuser = {
  id: 2,
  name: "Leo",
  role: Role.STUDENT,
};

const student2: Iuser = {
  id: 3,
  name: "David",
  role: Role.STUDENT,
};

const student3: Iuser = {
  id: 4,
  name: "Joe",
  role: Role.STUDENT,
};

// data
const course: Icourse = {
  id: 1,
  title: "TypeScript",
  description: "learn typescript",
  student: [],
};

// call function
addCourse(admin, course);
enrollStudent(student1, course.id);
enrollStudent(student2, course.id);
enrollStudent(student3, course.id);
listStudent(admin, course.id);
console.log(courses);
