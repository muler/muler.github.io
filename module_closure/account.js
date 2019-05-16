/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload=call_onclick;
function call_onclick()
{
    
document.getElementById("btn_newacount").onclick=abcd;
}
accountInfoList=(function(){
                var account;
                var balance;              
                function setValues(acc,bal)
                {
                   account=acc;
                   balance=bal;
                }
                return{
                getvalues: function(){
                  var acc=document.getElementById("acount_name").value;
                  var bal=document.getElementById("balance_amount").value;
                  setValues(acc,bal);
                },
                display:function()
                {
                    return "Account Name : "+account+" Balance : "+balance+"\n";  
                }
            }
                
            })();
             
     function abcd()
     {
          accountInfoList.getvalues();
          document.getElementById("display_account_area").value+=accountInfoList.display();
     }