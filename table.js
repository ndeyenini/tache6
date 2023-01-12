/** @format */

// tab = [ 'janvier' , 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet']
// // var index = tab.indexOf('juillet');
//   tab.pop();
//   // console.log(tab.length);
//   var x = tab.push('août');
//   // console.log(tab.splice );o
//   tab.splice(1,1,"septembre")
//   document.write(tab)



//   let i = 0;
//   let a= 50;
// function calc() {
//   n1 = document.getElementById("n1").value;
//     i--;
  
//      if(i >= 7){

// }else if(a>=10 && a<=100){
//   alert("vous avez attiend le maximun de nombre posible");
// }




// }
var num = Math.floor(Math.random() * 100) + 10;
var NbEssais = 0;
function Devine() {
  var choisi = document.form1.devine1.value;
  NbEssais++;
  var status = "Nombre d'essais : " + NbEssais;
  
  if (choisi == num) {
    alert("Correct ! Vous avez trouvé en " + NbEssais + "essais.");
  } else if (NbEssais == 7) {
    alert("Désolé, c'est fini. Le nombre correct était : " + num);
  }
  else if (choisi > num) {
    red = document.getElementById("red").value;
    document.getElementById("nombre").innerHTML =
      "Non, le nombre est plus grand.";
  } else {
    hi = document.getElementById("hi").value;
    document.getElementById("nombre").innerHTML =
      "Non, le nombre est plus petite.";
  } 
}
