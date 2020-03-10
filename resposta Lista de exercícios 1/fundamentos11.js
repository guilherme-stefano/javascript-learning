function anoBissexto(n) {
   if(n%400 == 0){
       return true
   } 
   if( n%100 == 0){
        return true
   }
   if(n%4 == 0){
       return true
   }
   return false
  
}

console.log(anoBissexto(2007))


