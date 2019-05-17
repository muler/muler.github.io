/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready( function()
{
     var control=1;
    $("#start").click(function(){
       control=1;
        $(".boundary").css("background-color","#eeeeee");
        $('.example').text("Started");
        $('h2').text("Click the \"S\" to begin.");
       
        $(".boundary").mouseover( function(){
          if(control==1){
          $(".boundary").css("background-color","red");
          $('h2').text("you lose!");
          control=2;
      }
        });      
        $("#end").mouseover(function(){
            if(control==1){
             $('h2').text("you won! Click the \"S\" to re-begin.");
             control=3;
         }
         }); 
         
         $("#maze").mouseleave(function()
         {
             if(control==1){
              //$('h2').css("color","red");
              $('h2').text("You are not in the maze.");
               control=4; 
             }
         });
    });
   
});
