var katzDeliLine = [];
function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
};

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var firstName = katzDeliLine.shift();
    return `Currently serving ${firstName}.`;
  }
};

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var line = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
      line.push(` ${i + 1}. ${katzDeliLine[i]}`);
    }
    return "The line is currently:" + line;
  }
}
