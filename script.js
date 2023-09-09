function firstNonRepeatedChar(str) {
 // Write your code here
       for(let i=0,i<=str.length,i++)
		   {
			    for(let j=0,j<=str.length,j++)
					{
						if(str.charAt(i)===str.charAt(j))
						{
							alert(charAt(j));
						}else
						{
							alert(null);
						}
					}
		   }
			
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
