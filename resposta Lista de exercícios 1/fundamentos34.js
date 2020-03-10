function comparaString(string1, string2) {
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    string1Array = string1.split('');
    string2Array = string2.split('');
    
    let string1ContemTodos2 = comparaCaracteresStringArray(string1Array, string2Array)
    let string2ContemTodos1 = comparaCaracteresStringArray(string2Array, string1Array)

    return string1ContemTodos2 && string2ContemTodos1
  }

  function comparaCaracteresStringArray(string1, string2){
      let contem = true;
      for( char of string1){
        let encontrou = string2.find(c => c == char)
        if (!encontrou) {
            contem = false
            break
        }
      }
      return contem;
  }

  console.log(comparaString('abc','cba'))