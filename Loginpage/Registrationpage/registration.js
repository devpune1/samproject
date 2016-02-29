
/*
function isFiledEmpty( filedData ) {
    
    if(filedData==""){
        
        return false;
    }
    else{
    
         return true;

    }
}
*/

function clickRegister() {
    

    var regname=document.getElementById("nametxt").value;
   var regpassword=document.getElementById("passtxt").value;
   // var regcpassword=document.getElementById("cpasstxt").value;
   // var regemail=document.getElementById("emailtxt").value;
  var regmobile=document.getElementById("mobiletxt").value;
    
    validateString(regname);
    if(validateString(regname) && validatePassword(regpassword) && validateNumber(regmobile)){
        
        
           
                     
                     document.getElementById("nametxt").style.borderWidth="1px";
                    document.getElementById("nametxt").style.borderStyle="solid";
                     document.getElementById("nametxt").style.borderColor="lightgreen";
        }           
        else{
        
                          document.getElementById("nametxt").value="";
                     document.getElementById("nametxt").placeholder="pls enter valid name";
                    
                     document.getElementById("nametxt").style.borderWidth="1px";
                     document.getElementById("nametxt").style.borderColor="red";  
                     document.getElementById("nametxt").style.borderStyle="solid";
            
        }
    
  
}



function validateString(userString) {
    
    
    
      var namepattern=/[a-zA-Z]{5}/;

    if(namepattern.test(userString))
    {
                 var check=namepattern.test(userString);
                 
                return true;
    }
    else{   
    
               check=namepattern.test(userString);
                
                return false;
    }
    
    
}

/*
function validateEmail(){
    
    var emailpattern="";
    
    
}

*/
function validateNumber(usernum){
    
    
   // alert("hello");
   
    var numberpattern=/^[978]{1}[0-9]{9}$/;
    alert("number"+usernum.value);
    
    if(numberpattern.test(usernum))
    {
        
        alert("valid");
        
    }
    else
    {
        alert("invalid "+numberpattern.test(usernum));
        
    }
    
}




function validatePassword(password){
    
var passPassword=/^\w{6,8}$/;

            

        if(passPassword.test(password)){
    
                        return true;
             
                   
        }
        else{
            
                return false;
                     
                }

}


