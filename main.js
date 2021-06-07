function myFunction(){
    var americandollar=document.getElementById("quantity").value;
    
    
    
    
   var  currency=document.getElementById("currency").value;
   
   
   
   var result=0,total;
   
   
     if(currency=="A$"){
       currencyValue=1.42;
       result=americandollar*currencyValue;
       result=result.toFixed(2);
       
     total="American $"+americandollar+"="+" "+result+" A$";  
       
     }  
   
   
   else if(currency=="Can$"){
       currencyValue=1.33;
       result=americandollar*currencyValue;
       result=result.toFixed(2);
       
     total="American $"+americandollar+"="+""+result+" Can$";  
       
     }   
   
   
   
     else if(currency=="Euro(€)"){
       currencyValue=0.86;       result=americandollar*currencyValue;
       result=result.toFixed(2);       
       total="American $ "+americandollar+"="+" "+result+"Euro(€)";     
     }  
     
     
  
  
  else   if(currency=="Pound(£)"){
       currencyValue=0.78;       result=americandollar*currencyValue;
       result=result.toFixed(2)      
       total="American $ "+americandollar+"="+" "+result+" Pound(£)";     
     }  
     
  
   
 else   if(currency=="Rupee(₹)"){
       currencyValue=74.46;       result=americandollar*currencyValue;
       result=result.toFixed(2)      
       total="American $ "+americandollar+"="+" "+result+" Rupees(₹)";     
     }  
     
   
   
   
  
      
   
   
   
   document.getElementById("answer").value=total;
   
}