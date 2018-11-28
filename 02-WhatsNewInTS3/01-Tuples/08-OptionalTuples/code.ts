type Scores = [number, number?, number?];

// Okay
const samScores: Scores = [55];
const bobScores: Scores = [95, 75];
const jayneScores: Scores = [65, 50, 70];

// Error
const sarahScores: Scores = [95, 50, 75, 75];
const benScores: Scores = [];

// Can't have required elements after optional elements
type ProblematicScores = [number?, number?, number];

function logScores(...scores: Scores) {
  console.log(scores);
}

// Okay
logScores(60, 70, 75);
logScores(45, 80);
logScores(95);

// Error
logScores();
logScores(45, 70, 80, 65);

function logScoresEnhanced(...scores: Scores) {
  console.log(`${scores.length - 1} score(s) passed`);
  if (scores.length === 3) {
    console.log(scores, "Thank you for logging all 3 scores");
  } else {
    console.log(scores);
  }
}

logScoresEnhanced(60, 70, 75); // Thank you for logging all 3 scores
logScoresEnhanced(45, 80);
logScoresEnhanced(95);
