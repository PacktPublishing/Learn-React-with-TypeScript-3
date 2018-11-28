class Scores {
  name: string;
  scores: number[];
}

function logScores(scores: unknown) {
  if (scores instanceof Scores) {
    console.log(scores.firstName);
    console.log(scores.scores);
  }
}

logScores({
  name: "Billy",
  scores: [60, 70, 75]
});
