var lastUsedTextBox = "";

function search(n) {

   var name = n;//document.getElementById("search").value;
   console.log(name);
   var pattern = name.toLowerCase();
   var targetId = "";
   var indexArray = [];
 
   var divs = document.getElementsByTagName("div");
   for (var i = 0; i < divs.length; i++) {
    console.log(divs[i].innerText.toLowerCase());
      if(divs[i].id == "textbox"){
        if(pattern == ""){
          pattern = "...Clear.Text..."
        }
      var index = divs[i].innerText.toLowerCase().indexOf(pattern);
      var str = divs[i].innerText;
      while(index != -1){

        indexArray.push(index);
        var tempString = str.substring(index, index+pattern.length);

        var replacementString = "<span style=\"background:yellow\">"+tempString+"</span>";
        str = replaceAt(str, name, replacementString, index);
        if(str.substring(index+replacementString.length, str.length).toLowerCase().indexOf(pattern) != -1){
       index += str.substring(index+replacementString.length, str.length).toLowerCase().indexOf(pattern) + replacementString.length;
     }
     else{
      index = -1;
     }

    }
    divs[i].innerHTML = str;
    }
   }  
   return indexArray;var lastUsedTextBox = "";
}

function replaceAt(str, whatString, replacedString, replaceIndex){

var newString = str;

newString = newString.substring(0, replaceIndex) + replacedString + newString.substring((replaceIndex+whatString.length), newString.length);

return newString; 

}