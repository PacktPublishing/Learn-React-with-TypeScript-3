function logScores(scores: any) {
  console.log(scores.firstName);
  console.log(scores.scores);
}

logScores({
  name: "Billy",
  scores: [60, 70, 75]
});
// undefined; [60, 70, 75]

function logScoresBetter(scores: unknown) {
  console.log(scores.firstName);
  console.log(scores.scores);
}
