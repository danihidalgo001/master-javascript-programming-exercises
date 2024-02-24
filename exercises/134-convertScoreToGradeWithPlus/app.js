function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    if (score > 100 || score < 0) return "INVALID SCORE"
    if (score < 60) return "F"
    if (score === 100) return "A+"

    return `${ ["D", "C", "B", "A"][Math.floor(score / 10) - 6] }${ (score % 10 < 3) ? "-" : (score % 10 > 7) ? "+" : "" }`
}

let output = convertScoreToGradeWithPlusAndMinus(83);
console.log(output); // --> 'A-'