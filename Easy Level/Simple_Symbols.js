


function simpleSymbols(str) {
 // pad the strings so that if a character exists at the beginning
  // of the string for example, we don't get on out-of-bounds error by
  // trying to get the character before it
   str = '=' + str + '=';
  
  for(var i = 0; i < str.length; i++) {
    if(str[i].match(/[a-z]/gi) !== null)  {
      if(str[i-1] !== '+' || str[i+1] !== '+' ) {
        return false;
      }
    }
  }
  return true;
}


simpleSymbols('+b++3+l+');