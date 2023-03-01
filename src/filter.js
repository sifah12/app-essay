var arr=[22,24,26,28,100,12,67,90,10,5]

function filterApp(){

   console.log(arr); 
   var newarr= arr.filter((element,index) =>{
return element>50

 } )
 console.log(newarr);
   
}
filterApp();