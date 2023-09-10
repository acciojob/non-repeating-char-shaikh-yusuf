function firstNonRepeatedChar(str) {
    // Write your code here
    let i=0;
          while(i<=str.length)
              { 
                let j=0;
                   while(j<=str.length)
                       {
                           if(str.charAt(i)!=str.charAt(j))
                           {
                              return str.charAt(i);
                           }else
                           {
                            return null;
                           }
                           
                           
                       }
                       j++;

                       i++;
              }
               
   }
   const input = prompt("Enter a string")
   alert(firstNonRepeatedChar(input)); 