let fs = require("fs");

// PART 1
function calibrate() {
  let text = fs.readFileSync("./day_1/input.txt").toString('utf-8');
  let frequencies = text.split("\n")
  let frequency = 0
  for (let i=0; i < frequencies.length-1; i++) {
    let operation = frequencies[i][0]
    let change = parseInt(frequencies[i].substr(1,frequencies[i].length-1))
    if (operation === "+") {
      frequency = frequency + change;
    } else {
      frequency = frequency - change;
    }
  }
  return frequency;
}

// PART 2

function getFirstFrequencyReachedTwice() {
  let text = fs.readFileSync("./day_1/input.txt").toString('utf-8');
  let frequencies = text.split("\n")
  let frequency = 0
  let frequenciesReached = new Set();
  frequenciesReached.add(0);
  let i = 0;
  while (i < frequencies.length-1) {
    let operation = frequencies[i][0]
    let change = parseInt(frequencies[i].substr(1,frequencies[i].length-1))
    if (operation === "+") {
      frequency = frequency + change;
      i++;
    } else {
      frequency = frequency - change;
      i++;
    }
    if (frequenciesReached.has(frequency)) {
      return frequency;
    } else {
      frequenciesReached.add(frequency);
      if (i === frequencies.length-1) {
        i = 0;
      }
    }
  }
}
