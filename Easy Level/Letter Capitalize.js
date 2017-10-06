

var string  = 'learning to capitalize words';



function LetterCapitalize(str) { 
        var words = str.split(' ');                                         //Splits string in the space and creates an array of words
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substring(1);   //Capitalize first letter
        }
        str = words.join(' ');
  // code goes here  
  return str; 
         
}

LetterCapitalize(string);