function generateAndSaveIds() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("Sheet1"); // Change "Sheet1" to the name of your sheet
  var startNumber = 1;
  var endNumber = 1999;
  var idPrefix = "PR-";
  var idLength = 4;
  
  for (var i = startNumber; i <= endNumber; i++) {
    var id = idPrefix + padNumberWithZeros(i, idLength);
    sheet.appendRow([id]); // Change [id] to [id, value1, value2, ...] if you want to save additional data
  }
}

function padNumberWithZeros(number, length) {
  var paddedNumber = "" + number;
  while (paddedNumber.length < length) {
    paddedNumber = "0" + paddedNumber;
  }
  return paddedNumber;
}
