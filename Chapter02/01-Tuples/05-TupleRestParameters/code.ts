function logScores(...scores: [...number[]]) {
  console.log(scores);
}

logScores(50, 85, 75); // [50, 85, 75]

type Scores = [string, ...number[]];

function logNameAndScores(...scores: Scores) {
  console.log(scores);
}

logNameAndScores("Billy", 60, 70, 75);

logNameAndScores("Sally", 60, 70, 75, 70);
