
function FirstReverse(str) { 

  str = str.split('').reverse('').join('');
  return str; 
         
}

FirstReverse('This is the reverse exercise');

//--------------------------------------------------

function FirstReverse2(str) { 
    var reverseStr = '';
    for (var i = str.length - 1;  i > 0; i = i - 1 ) {
      reverseStr = reverseStr + str[i];
    }
  str = reverseStr;
  return str; 
         
}

FirstReverse2('This is the reverse exercise 2');
