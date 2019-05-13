function call_multFunction() {
 document.getElementById("big_deco").onclick = alert_helloworld;
 document.getElementById("big_deco").onclick = changeFont;
 document.getElementById("chk_bling").onchange = chk_changeStyle;
 document.getElementById("igpay").onclick = LatinPhrase;
 document.getElementById("malkavitch").onclick = malkavitchFunction; 
}


function alert_helloworld() {
  alert("Hello, world!");
}
function changeFont() {
    var sizeMe = document.getElementById("sample_text");
   //sizeMe.style.fontSize = "24pt";
   	var size = parseInt(sizeMe.style.fontSize || 12);
	size += 2;
	sizeMe.style.fontSize=size+"pt";	
    setTimeout(changeFont, 500);
   
  
  
}

window.onload=call_multFunction;

function chk_changeStyle()
{
	 var area=document.getElementById("sample_text");
   if(chk_bling.checked)
   {   
	   area.style.fontWeight="bold";
	   area.style.color="Green";
	   area.style.textDecoration="underline";
	   document.body.style.backgroundImage="url('http://courses.cs.washington.edu/courses/cse190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
		
		
   }
   else
   {
	   area.style.fontWeight="normal";
	   area.style.color="inherit";
	   area.style.textDecoration="none";
	   document.body.style.backgroundImage="";
	}
}

function LatinPhrase(){
  var read_text=document.getElementById("sample_text").value.trim();
 
  var str = '';
  var tarr = read_text.split(' ');
  for (var i=0; i<tarr.length; ++i) 
  {
	  str += LatinWord(tarr[i])+' '; 
   }
   alert(str);
   document.getElementById("sample_text").value=str;
}
 function LatinWord(word) {
 var index;
 index = word.search(/[aeiouAEIOU]/);
 if (index <= 0) 
    {
		return word + "ay";
    }
 else
	 {
		 return word.substring(index, word.length) + word.substring(0,index) + "ay";
    }
}

function malkavitchFunction()
{
	var read_text=document.getElementById("sample_text").value.trim();
	var tarr = read_text.split(' ');
	for (var i=0; i<tarr.length; ++i)
	{				
		var len=tarr[i].length;
	    if(len>=5)
			read_text=read_text.replace(tarr[i],"Malkovich");	    
   }	
	document.getElementById("sample_text").value=read_text;
}