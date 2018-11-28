function logScore(score1: number, score2: number, score3: number) {
  console.log(score1, score2, score3);
}

const scores: [number, number, number] = [75, 65, 80];

logScore(...scores);

const scoresUnlimited: [...number[]] = [75, 65, 80];

logScore(...scoresUnlimited);
