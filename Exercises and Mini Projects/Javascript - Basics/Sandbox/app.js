// Return the character that is most common in a string
// ex. maxChar('javascript') returns 'a'

function maxChar(str) {
    let incumbent = '';
    let incumbentCount = 0;
    let challengerCount = 0;
    
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < str.length; j++) {
        if (str[i] === str[j]) challengerCount++
      }
      if (challengerCount > incumbentCount) incumbent = str[i]
    }
    
    console.log(incumbent);
  }
  
  maxChar('tyrannosaurus');
  maxChar('aaaavvb');