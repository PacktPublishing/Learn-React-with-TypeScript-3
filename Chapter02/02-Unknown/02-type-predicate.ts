type Scores = { name: string; scores: number[] };

const scoresCheck = (scores: any): scores is Scores => {
  return "name" in scores && "scores" in scores;
};

function logScoresWithPredicate(scores: unknown) {
  if (scoresCheck(scores)) {
    console.log(scores.firstName);
    console.log(scores.scores);
  }
}

logScoresWithPredicate({
  name: "Billy",
  scores: [60, 70, 75]
});
