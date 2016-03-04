 


function isFiledEmpty( filedData ) {
    
    if(filedData==""){
        
        return true;
    }
    else{
    
         return false;

    }
}

function clickRegister() {

//document.getElementById("nametxt").innerHTML="asds";


    var detail=["name","password","confirmpassword","email","mobile"];
    var setLabel=["nametxt","passwordtxt","confirmpasswordtxt","emailtxt","mobiletxt"];
    var count=0;
   
        
        
        var regname=document.getElementById("name").value;
  
    var regemail=document.getElementById("email").value;

     var regpassword=document.getElementById("password").value;
   var regcpassword=document.getElementById("confirmpassword").value;
  var regmobile=document.getElementById("mobile").value;
    
    
   
    for(var i=0;i<detail.length;i++) {
        var temp=document.getElementById(detail[i]).value;
        
        if(temp==null||temp=="")
        {
             document.getElementById(setLabel[i]).innerHTML=" Cannot Be Empty ";
             document.getElementById(setLabel[i]).style.visibility="visible";
             
           //document.getElementById(detail[i]).placeholder=detail[i].toUpperCase()+" field cannot be empty  ";
             document.getElementById(detail[i]).placeholder="";
           
             document.getElementById(detail[i]).style.borderColor="red";
             document.getElementById(detail[i]).style.borderStyle="solid";
            count=count+1;
           
        }
     
        
    }
    
    
    if(!validateString(regname) && !isFiledEmpty(regname)){
        
                    document.getElementById("name").value="";
                    document.getElementById("name").placeholder="";
                    document.getElementById("name").style.borderColor="red";
                    
                    document.getElementById("nametxt").innerHTML=" Only Characater Required";
                    document.getElementById("nametxt").style.color="red";
                    document.getElementById("nametxt").style.visibility="visible";
                    
                count=count+1;
        
        
        
    }
    
    
    
   
    
    /*mobile number validation */
    
    if(!validateNumber(regmobile)&& !isFiledEmpty(regmobile)){           
        
                    document.getElementById("mobile").value="";
                    document.getElementById("mobile").placeholder="";
                    document.getElementById("mobile").style.borderColor="red";
                    
                    
                  
                    document.getElementById("mobiletxt").innerHTML=" Only number are accepted";
                    document.getElementById("mobiletxt").style.color="red";
                    document.getElementById("mobiletxt").style.visibility="visible";
                
                
                count=count+1;
    }
    
    /*password validation*/
    
    if(regpassword.length==regcpassword.length)
    {
        if( regpassword == regcpassword ){
            
            if(!validatePassword( regpassword ) && !isFiledEmpty(regpassword)){    
        
                document.getElementById("password").value="";
                document.getElementById("passwordtxt").placeholder="";
                document.getElementById("passwordtxt").innerHTML="TOO Small Password";
                document.getElementById("password").style.borderColor="red";
                document.getElementById("passwordtxt").style.visibility="visible";
               
               document.getElementById("confirmpassword").value="";
               document.getElementById("confirmpasswordtxt").placeholder="Password Must have 8 Character";
               document.getElementById("confirmpasswordtxt").innerHTML="TOO Small Password";           
               document.getElementById("confirmpasswordtxt").style.visibility="visible";
                
                count=count+1; 
      
            }
            else {
                
                   document.getElementById("password").value="";
                  document.getElementById("passwordtxt").placeholder="NO Match ";
                  document.getElementById("passwordtxt").style.borderColor="red";
                  document.getElementById("passwordtxt").style.visibility="visible";
               
               
                  document.getElementById("confirmpassword").value="";
                  document.getElementById("confirmpasswordtxt").placeholder="NO Match";
                  document.getElementById("confirmpasswordtxt").style.borderColor="red";
                document.getElementById("confirmpassword").style.visibility="visible";   
            count=count+1;    
                
            }
    
                if(!validatePassword(regcpassword) && !isFiledEmpty(regcpassword)){    
        
                    document.getElementById("confirmpassword").value="";
                    document.getElementById("confirmpassword").placeholder="pls enter valid password";
                    document.getElementById("confirmpassword").style.borderColor="red";
                count=count+1; 
      
            }
        }
        
        else{
            
            
               document.getElementById("password").value="";
               document.getElementById("passwordtxt").placeholder="";
               document.getElementById("passwordtxt").innerHTML="NO Match";
               document.getElementById("password").style.borderColor="red";
               document.getElementById("passwordtxt").style.color="red";            
               document.getElementById("passwordtxt").style.visibility="visible";
               
               
               document.getElementById("confirmpassword").value="";
               document.getElementById("confirmpassword").placeholder="NO Match";
               document.getElementById("confirmpassword").style.borderColor="red";
               document.getElementById("confirmpasswordtxt").style.color="red";
               document.getElementById("confirmpasswordtxt").innerHTML="NO MATCH";
               document.getElementById("confirmpasswordtxt").style.visibility="visible";
               
               count=count+1;
                     
        }
    
    }
    else{
        
                     document.getElementById("password").value="";
                     document.getElementById("password").placeholder="";
                     document.getElementById("passwordtxt").innerHTML="Password Not Match ";
                     document.getElementById("password").style.borderColor="red";
                     document.getElementById("passwordtxt").style.color="red";
                     document.getElementById("passwordtxt").style.visibility="visible";            
             
             
             
                      document.getElementById("confirmpassword").value="";
                      document.getElementById("confirmpassword").placeholder="";
                      document.getElementById("confirmpasswordtxt").placeholder="Password Not Match";
                      document.getElementById("confirmpasswordtxt").style.color="red";
                      document.getElementById("confirmpassword").style.borderColor="red";
                      document.getElementById("confirmpasswordtxt").style.visibility="visible";
         count=count+1;
     }
    
/*email valiation*/

    if(!validateEmail(regemail) && !isFiledEmpty(regemail)){
    
        
                     document.getElementById("email").value="";
                     document.getElementById("email").placeholder="";
                     document.getElementById("email").style.borderColor="red";
                
                     document.getElementById("emailtxt").innerHTML="Enter vaild email address";
                     document.getElementById("emailtxt").style.color="red";
                     document.getElementById("emailtxt").style.visibility="visible";  
                
                count=count+1;
    
    }
    
    
    
    
    if(count==0){
                
             alert("THANKS FOR  REGISTRATION");
            window.location.href="../loginpage.html";
             
            }
            else{
                
                setTimeout(function(){window.location.reload(true)},500);
            }
    
 }

/*String vailidation funvtion*/

function validateString(userString) {
    
    
    
      var namepattern=/[a-zA-Z]{5}/;

    if(namepattern.test(userString))
    {
                
                 
                return true;
    }
    else{   
    
            
                
                return false;
    }
    

}

/*email validation*/

function validateEmail( userEmail ) {
    
    var emailpattern = /\S+@\S+\.\S+/;
    
    if(emailpattern.test(userEmail)){
        
        return true;
        
        
    }
    else{
        
        return false;
    }
    
    
    
}

/* mobile number  validation */

function validateNumber(usernum){
    
    
    var numberpattern=/^[978]{1}[0-9]{9}$/;
    
    
    if(numberpattern.test(usernum))
    {
        
     
        return true;
        
        
    }
    else
    {
        
        return false;
    }
    
}




function validatePassword(password){
    

var passPassword=/^\w{8}|^\d{8}$/;


        if(passPassword.test(password)){
    
                        return true;
             
                   
        }
        else{
            
                return false;
                     
                }

}



/*page reloading */

function reloadPage(){
    
    
    setTimeout(function () { location.reload(true); },500);
}


function moveToLogin()
{
    window.location.href="../loginpage.html";
  
}


function setText()
{
    
    document.getElementById("nametxt").value="empty"
    
}