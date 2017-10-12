//Longest word excluding characters that are not part of the alphabet

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
   
// keep this function call here 
LongestWord(readline());