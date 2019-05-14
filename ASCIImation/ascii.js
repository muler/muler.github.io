"use strict";

window.onload=call_animation;
function call_animation()
{
    document.getElementById("stop_animation").disabled = true;
     document.getElementById("start_animation").onclick = start_animations;
     document.getElementById("animation_type").onchange=display_animations;
     document.getElementById("fontsize_textarea").onchange=change_fontsize;
      document.getElementById("chk_tirbo").onchange=change_speed;
     document.getElementById("stop_animation").onclick=stop_animations;
}
function change_fontsize()
{
    var id_textarea=document.getElementById("mytextarea");
    var font=document.getElementById("fontsize_textarea").value;
    id_textarea.style.fontSize=font;
}
function display_animations()
{   
    var whichOne = document.getElementById("animation_type").value;
    if(whichOne!="Custom")
     {
     document.getElementById("mytextarea").value =ANIMATIONS[whichOne];
      }
}
function stop_animations()
{
   
    clearInterval(id_timer);
    document.getElementById("mytextarea").value=before_animation;
    document.getElementById("start_animation").disabled = false;
    document.getElementById("animation_type").disabled = false;
    document.getElementById("stop_animation").disabled = true;
}
var id_timer;
var before_animation;
var time=0;
var arr_animated;
var i=0;
function start_animations()
{
    document.getElementById("start_animation").disabled = true;
    document.getElementById("animation_type").disabled = true;
    document.getElementById("stop_animation").disabled = false;
    var read_text=document.getElementById("mytextarea").value;
    var chk_tirbo=document.getElementById("chk_tirbo"); 
    before_animation=read_text;
    arr_animated = read_text.split("=====\n");   
    
    if(chk_tirbo.checked)
    {
        time=50;
    }
    else
    {
        time=250;
    }
   id_timer=setInterval(timer,time);   
      
}


function timer()
{
    document.getElementById("mytextarea").value=arr_animated[i];
      i++;
      if(i>=arr_animated.length)
      {
          i=0;
      } 
}
function change_speed()
{
    clearInterval(id_timer);
     if(chk_tirbo.checked)
    {
        time=50;
    }
    else
    {
        time=250;
    }
    if(document.getElementById("start_animation").disabled)
      id_timer=setInterval(timer,time); 
}
