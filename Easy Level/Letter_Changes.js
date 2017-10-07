

function LetterChanges(str) { 
    var arr = str.split('');
    var alp = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var vowels = 'aeiouAEIOU'.split('');
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === ' ' ) {
        arr[i] = ' ';
        } else if (arr[i] === 'z') {
          arr[i] === 'A';
        } else if (alp.indexOf(arr[i]) !== -1) {     //checks if character is in the alp array;
          var ind = alp.indexOf(arr[i]);
          arr[i] = alp[ind + 1];
        } 
      }
    var newArr = arr;
    for (i = 0; i < newArr.length; i++) {           
      if (vowels.indexOf(newArr[i]) >= 0 && vowels.indexOf(newArr[i]) <= vowels.length) {     //checks if character is in the vowels array;
          newArr[i] = newArr[i].toUpperCase();
      }
    }
  str = newArr.join('');       
  // code goes here  
  return str; 
         
}

LetterChanges('hello world');

