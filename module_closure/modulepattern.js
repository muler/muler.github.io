/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
varrudyTimer=(function(){
     var timer= null;  // stores ID of interval timer
  if (timer == null) {
    timer = setInterval(print_Myname, 1000);
  } else {
    clearInterval(timer);
     
    timer = null;
  }


function print_Myname() {   // called each time the timer goes off
  document.getElementById("output").innerHTML += " Tesfamariam!";
}});

