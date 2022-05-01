let textField;
const ROW_SIZE = 4;


function sortWords(words){
  words.sort();
  const nRows = Math.floor(words.length/ROW_SIZE);
  let maxLength = nRows;
  if (words.length%4 != 0){
    maxLength = maxLength+1;
  }
  let splitWords = [];
  const timesToIncludeLastRow = words.length%4;
  for (i=0; i<timesToIncludeLastRow;i++){
    splitWords.push(words.splice(0,maxLength));
  }
  while (words.length != 0) {
    splitWords.push(words.splice(0,nRows));
  }
  return splitWords;
}


function createMatrix(words){
  let nRows = Math.floor(words.length/ROW_SIZE);
  if (words.length%4 != 0){
    nRows = nRows+1;
  }
  var matrix = [];
  for(var i=0; i<nRows; i++) {
      matrix[i] = new Array(ROW_SIZE);
  }
  return matrix;
}



function alignMatix(matrix, sortedWords, nRows){
  for (j=0; j<nRows;j++){
    for (i in sortedWords){
      matrix[j][i] = sortedWords[i][j];
    }
  }
  return matrix;
}


function generateID(i,j){
  return `matrixLabel_${i}_${j}`
}



function createLabels(matrix) {
  const nRows = matrix.length;
  const nColumns = matrix[0].length;
  var parentDiv = document.getElementById('arrangedData');

  var mytable = "";
  for (i=0; i<nRows;i++){
    mytable += "<tr>";
    for (j=0; j<nColumns; j++){
      let label = `${matrix[i][j]}`;
      if ( label == 'undefined') {
        mytable += `<td > </td>`;
      }
      
      else{
        mytable += `<td > <button type = "button" class="btn btn-secondary btn-lg" > ${label} </button></td>`;
      }
      
     
    }
    mytable += "</tr>";
  }

  parentDiv.innerHTML = `<table border=1> ${mytable} </table>`
}



function arrangeButtonHandler(){
  const textField = document.getElementById("textField").value;
  const words = textField.split(' ');

  // Create Matrix
  matrix = createMatrix(words);
  
  let nRows = Math.floor(words.length/ROW_SIZE);
  if (words.length%4 != 0){
    nRows = nRows+1;
  }
  // Obtain sorted words
  const sortedWords = sortWords(words);

  //align in matrix
  alignedMatrix = alignMatix(matrix, sortedWords, nRows);

  createLabels(alignedMatrix);
}



function clearButtonHandler(){
  var parentDiv = document.getElementById('arrangedData');
  parentDiv.innerHTML = '';
}