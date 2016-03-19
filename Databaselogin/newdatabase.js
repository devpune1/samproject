var userPassword_Db=openDatabase('UserPasswordDb','1.0','This is userPassword Database',200000);








function passwordVerification(){
    
    

    
   
 var userPassword=document.getElementById("m_userpassword");
 
 var userConfirmPassword=document.getElementById("m_userconfirmpassword");
  
var labelUserConfirmPassword=document.getElementById("labelconfirmpassword");
var labelUserPassword=document.getElementById("labelpassword");
var count=0;
    

        
                
                

   
    
    if(!isFiledEmpty(userPassword.value) || !isFiledEmpty(userConfirmPassword.value)){
                 
      
    
     if( userPassword.length == userConfirmPassword.length ){
    

        if(userPassword.value == userConfirmPassword.value ){
            
           
            if(!validateuserPassword( userPassword.value ) && !isFiledEmpty( userPassword.value )){    
               
               userPassword.value="";
                userPassword.placeholder="";
               userPassword.style.borderColor="red";
               labelUserPassword.innerHTML="Enter Valid Password";
               labelUserPassword.style.visibility="visible";
               
               userConfirmPassword.value="";
               userConfirmPassword.placeholder="";
               userConfirmPassword.style.borderColor="red";
              labelUserConfirmPassword.innerHTML="Enter Valid Password";           
              labelUserConfirmPassword.style.visibility="visible";
                
                count=count+1; 
      
            }
           
    
            if(!validateuserPassword( userConfirmPassword.value ) && !isFiledEmpty( userConfirmPassword.value )){    
                    
               userConfirmPassword.value="";
               userConfirmPassword.placeholder="";
               userConfirmPassword.style.borderColor="red";
              labelUserConfirmPassword.innerHTML=" Enter Valid userPassword";           
              labelUserConfirmPassword.style.visibility="visible";
                count=count+1; 
      
            }
        }
      
        else{
            
            
               
               userPassword.value="";
                userPassword.placeholder="";
                userPassword.style.borderColor="red";
               labelUserPassword.innerHTML="NO MATCH FOUND";
                     labelUserPassword.style.visibility="visible";
              
    
               userConfirmPassword.value="";
               userConfirmPassword.placeholder="";
               userConfirmPassword.style.borderColor="red";
               labelUserConfirmPassword.innerHTML="NO MATCH FOUND";           
               labelUserConfirmPassword.style.visibility="visible";
                
               count=count+1;
                     
            }
    
        }
    else{
        

               userPassword.value="";
                userPassword.placeholder="";
                userPassword.style.borderColor="red";
               labelUserPassword.innerHTML="Password Too Small";
               labelUserPassword.style.visibility="visible";
               
               userConfirmPassword.value="";
               userConfirmPassword.placeholder="";
               userConfirmPassword.style.borderColor="red";
              labelUserConfirmPassword.innerHTML="Password Too Small";           
              labelUserConfirmPassword.style.visibility="visible";
                
         count=count+1;
     }
    }
    else{
        
            userPassword.value="";
                userPassword.placeholder="";
               userPassword.style.borderColor="red";
               labelUserPassword.innerHTML="Cannot be Empty";
               labelUserPassword.style.visibility="visible";
               
               userConfirmPassword.value="";
               userConfirmPassword.placeholder="";
               userConfirmPassword.style.borderColor="red";
              labelUserConfirmPassword.innerHTML="Cannot be Empty";           
              labelUserConfirmPassword.style.visibility="visible";
               count=count+1;
                reloadPage();
        
        
    }
    
    
    if(count==0){
        
        
     alert("Creating Master Password");
     
     insertMasterPassword(userPassword.value,userConfirmPassword.value);
         alert("Thanks Created");
     moveToMasterPage();
 
        
        
        
    }
   else{
       
       reloadPage();
       
   } 
    
 
}




function insertMasterPassword(userPassword,userConfirmPassword){
    
    
   

        userPassword_Db.transaction(function(tx){
   
              tx.executeSql('INSERT INTO masterdb(masterpassword,masterconfirmpassword) values (?,?)',[userPassword,userConfirmPassword]);

            
        });
    

    
}


function isFiledEmpty(filedData)
{
    
    
    
      if(filedData =="" || filedData == null){
        
        return true;
      }
    else{
    
         return false;

    }
    
    
}




function validateuserPassword(userPasswordtxt)
{
    
    
var passuserPassword=/^\w{8}|^\d{8}$/;


        if(passuserPassword.test(userPasswordtxt)){
    
                        return true;
             
                   
        }
        else{
            
            
                return false;
                     
                }
   
    
    
    
}





function moveToMasterPage(){
    
    window.location.href="../Userpage/userpage.html";

    
}

function reloadPage(){
    
    setTimeout(function(){window.location.href="../Databaselogin/newdatabase.html"},500);
    
    
}