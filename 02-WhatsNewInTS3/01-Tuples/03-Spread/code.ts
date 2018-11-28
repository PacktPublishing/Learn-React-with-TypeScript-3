function logScore(score1, score2, score3) {
  console.log(score1 + ", " + score2 + ", " + score3);
}

const scores = [75, 65, 80];

logScore(...scores); // 75, 65, 80
