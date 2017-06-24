$(document).ready(function(){
  $("form#groceryform").submit(function(event){
    event.preventDefault();
    var shoppings=$("input#shopping").val();
    var newwarray=shoppings.split(" ");
    for(var index=0;index<=newwarray.length-1;index+=1){
      newwarray[index]=newwarray[index].split("");/*split word in array into letters*/
      newwarray[index][0]=newwarray[index][0].toUpperCase();/*convert first letter of each word into uppercase*/
      newwarray[index]=newwarray[index].join("");/*join letters into words*/
    }
      $("#results").text("");
    for(var indices=0;indices<=newwarray.length-1;indices+=1){
      printThis = "<li>" + newwarray[indices] + "</li>";
      $("#results").append(printThis);
    }


  });
});
