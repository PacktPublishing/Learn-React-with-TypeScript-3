type Empty = [];

// Okay
const empty: Empty = [];

// Error
const notEmpty: Empty = ["Billy"];

type Scores = [] | [number] | [number, number] | [number, number, number];

const benScores: Scores = [];
const samScores: Scores = [55];
const bobScores: Scores = [95, 75];
const jayneScores: Scores = [65, 50, 70];
const sarahScores: Scores = [95, 50, 75, 75];
