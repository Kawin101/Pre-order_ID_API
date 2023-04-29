function generateAndSaveIds() {
  var sheet = SpreadsheetApp.openById("1fKCbWeAwrbpICkqVHMI9cJwHQupxfOBeEEwd1KL-Xzs").getSheetByName("Sheet1"); // Change "Sheet1" to the name of your sheet
  // var sheet = SpreadsheetApp.getActive().getSheetByName("Sheet1"); // Change "Sheet1" to the name of your sheet
  var idPrefix = "PR-";
  var idLength = 4;
  
  var lastRow = sheet.getLastRow();
  if (lastRow == 0) { // if there are no existing IDs in the sheet, create the first ID as "PR-0000"
    var newId = idPrefix + padNumberWithZeros(0, idLength); // create the new ID with the number 0
    sheet.appendRow([newId]); // add the new ID to the sheet
    return;
  }

  var lastId = sheet.getRange(lastRow, 1).getValue(); // get the last generated ID from the sheet
  var lastNumber = parseInt(lastId.substring(3)) || 0; // extract the numeric part of the ID and convert it to a number, defaulting to 0 if it is not a valid number
  if (lastNumber < 1) lastNumber = 0; // set the lastNumber to 0 if it is less than 1

  var newNumber = lastNumber + 1; // generate the next number in sequence
  var newId = idPrefix + padNumberWithZeros(newNumber, idLength); // create the new ID with the next number
  
  sheet.appendRow([newId]); // add the new ID to the sheet
}

function padNumberWithZeros(number, length) {
  var paddedNumber = "" + number;
  while (paddedNumber.length < length) {
    paddedNumber = "0" + paddedNumber;
  }
  console.log(paddedNumber);
  return paddedNumber;
}
