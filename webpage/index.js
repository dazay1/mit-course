const allStudents = [
  { firstName: "Ali", lastName: "Valiyev", grade: 85 },
  { firstName: "Sitora", lastName: "Karimova", grade: 92 },
  { firstName: "Jamshid", lastName: "Tohirov", grade: 78 },
  { firstName: "Gulnoza", lastName: "Rahimova", grade: 96 },
  { firstName: "Otabek", lastName: "Ismoilov", grade: 88 },
  { firstName: "Madina", lastName: "Sobirova", grade: 74 },
  { firstName: "Farrux", lastName: "Axmedov", grade: 90 },
  { firstName: "Rustam", lastName: "Nazarov", grade: 62 },
  { firstName: "Lola", lastName: "Jumayeva", grade: 58 },
  { firstName: "Aziz", lastName: "Qodirov", grade: 65 },
];

// 1. Calculate average grade
function calculateAverageGrade(arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].grade;
  }
  return Math.round((sum / arr.length) * 100) / 100;
}

// 2. Get students with grade < 70 (full names)
function getLowGradeStudents(arr) {
  const names = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].grade < 70) {
      names.push(`${arr[i].firstName} ${arr[i].lastName}`);
    }
  }
  return names;
}

// 3. Get student with highest grade
function getHighestGradeStudent(arr) {
  if (arr.length === 0) return null;
  let best = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].grade > best.grade) {
      best = arr[i];
    }
  }
  return best;
}

function reverseStudents(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

function getEvenGradesAverage(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].grade % 2 === 0) {
      // even check
      sum += arr[i].grade;
      count++;
    }
  }

  if (count === 0) {
    return "Just sonlar yo'q";
  }

  return Math.round((sum / count) * 100) / 100;
}
// === TEST / OUTPUT ===
console.log("O'rtacha baho:", calculateAverageGrade(allStudents)); // 76.7

const past = getLowGradeStudents(allStudents);
console.log(
  "70 dan past baholi talabalar:",
  past.length ? past.join(", ") : "Yo'q"
);

const baland = getHighestGradeStudent(allStudents);
console.log(
  `Eng yuqori baho: ${baland.firstName} ${baland.lastName} – ${baland.grade}`
);

console.log("\nTalabalar (teskari tartibda):");
const reversed = reverseStudents(allStudents);
for (let i = 0; i < reversed.length; i++) {
  console.log(
    `${i + 1}. ${reversed[i].firstName} ${reversed[i].lastName} – ${
      reversed[i].grade
    }`
  );
}

console.log("\nJust baholar o'rtachasi:", getEvenGradesAverage(allStudents));
