

              function firstNonRepeatedChar(inputString) {
    for (let i = 0; i < inputString.length; i++) {
      let isRepeated = false;
      for (let j = 0; j < inputString.length; j++) {
        if (i !== j && inputString[i] === inputString[j]) {
          isRepeated = true;
          break;
        }
      }
      if (!isRepeated) {
        return inputString[i];
      }
    }
    return null;
  }
  

 
   const input = prompt("Enter a string")
   alert(firstNonRepeatedChar(input)); 