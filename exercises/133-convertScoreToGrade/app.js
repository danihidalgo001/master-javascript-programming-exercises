function convertScoreToGrade(score) {
    // your code here
    if (score > 100 || score < 0) return "INVALID SCORE"
    if (score > 89) return 'A'
    if (score > 79) return 'B'
    if (score > 69) return 'C'
    if (score > 50) return 'D'
    return 'F'
}

let output = convertScoreToGrade(5);
console.log(output); // --> 'A'
