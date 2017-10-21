
function LetterChanges(str) { 
    
  var letterChanged = str.replace(/[a-z]/gi, function(letter){
    return (letter === 'z' || letter === 'Z') ? 'a' : String.fromCharCode(letter.charCodeAt() + 1); 
  });  
  var capitalized = letterChanged.replace(/[a|e|i|o|u]/gi, function(vowel){
    return vowel.toUpperCase();
  });

  return capitalized;
         
}
   
LetterChanges("This is a test para los que 3st4n v1v0s!");  
