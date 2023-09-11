function firstNonRepeatedChar(str) {
    // Write your code here
    let i=0;
	
          while(i<=str.length)
              { 
				   let scor=0
                let j=0;
				  
                   while(j<=str.length)
                       {   
						  
                           if(str.charAt(i)===str.charAt(j))
                           {
                              score++
                           }
                           
                           j++;  
                       }
				  
                     
          if(score<2){
		return str.str.charAt(i)
		  }else{
			  return null
		  }
                       i++;
              }
	
	}
               
   }
   const input = prompt("Enter a string");

   alert(firstNonRepeatedChar(input)); 