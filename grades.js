function CalculateGrade(marks){
    let grade;
if (marks >= 90) {
    console.log("Grade: A");
} 
else if (marks <90 && marks >80) {
    console.log("Grade: B");
} 
else if (marks <80 && marks >70) {
    console.log("Grade: C");
} 
else if (marks <70 && marks >60) {
    console.log("Grade: D");
} 
else {
    console.log("Grade:f");
}
   return grade;
}
let marks=92
let result=CalculateGrade(marks);

console.log("marks:"+marks)
console.log("grades"+result);
