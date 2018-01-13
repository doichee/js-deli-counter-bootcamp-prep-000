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
  if(katzDeliLine.length > 0); {
    var line = "The line is currently: ";
    for (var i = 1; i <= katzDeliLine.length; i++) {
      if (i === katzDeliLine.length) {
        line += `${i}. ${katzDeliLine[i-1]}`;
      } else {
        line += `${i}. ${katzDeliLine[i-1]}, `;
      }
      return line;
    } else {
      return 'The line is currently empty.';
    }
  }
}
