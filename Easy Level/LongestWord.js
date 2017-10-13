//Longest word excluding characters that are not part of the alphabet
var string = 'This is a string8888 but which!@#$% one is the *(^$)gest';

function LongestWord(sen) { 
  var arr = sen.split('');
  var alf = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
      if(alf.indexOf(arr[i]) !== -1 || arr[i] === ' ') {
          newArr.push(arr[i]);
      }
  }
  var arrayOfWords = newArr.join('').split(' ');
  var longest = arrayOfWords.shift();
  for(i = 0; i < arrayOfWords.length; i++) {
        if(arrayOfWords[i].length > longest.length) {
          longest = arrayOfWords[i];
        }
  }
  return longest;
}
LongestWord(string);

/////////////////////////////////////////////////////////////////////////

function eliminateUnwantedCharacteres(s) {
  var arr = s.split('');
  var alf = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
      if (alf.indexOf(arr[i]) !== -1 || arr[i] === ' ') {
          newArr.push(arr[i]);
      }
  }
  return newArr.join('').split(' ');
}
function longestWord(array) {
  var longest = array.shift();
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
}
longestWord(eliminateUnwantedCharacteres(string));
