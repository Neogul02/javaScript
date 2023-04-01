let score = 80;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

let score_2 = "B";
switch (score_2) {
  default:
    console.log("nothing.");
    break;
  case "A":
    console.log("A");
    break;
  case "B":
    console.log("B");
    break;
  case "C":
    console.log("C");
    break;
  case "D":
    console.log("D");
    break;
  case "E":
    console.log("E");
    break;
}
