var userPassword_Db=openDatabase('UserPasswordDb','1.0','This is userPassword Database',200000);



/* Function that verify  all three password */

function passwordVerification(userPassword,userConfirmPassword,userOldPassword){
    
alert("in passwordVerification");


var passwordTextIdName=["m_useroldpassword","m_userpassword","m_userconfirmpassword"];
var passwordLabelIdName=["labeloldpassword","labelpassword","labelconfirmpassword"];

var labelUserConfirmPassword=document.getElementById("labelconfirmpassword");
var labelUserPassword=document.getElementById("labelpassword");
var labelUserOldPassword=document.getElementById("labeloldpassword");
var count=0;
    



for(var i=0;i<passwordTextIdName.length;i++) {
    
        var temp=document.getElementById(passwordTextIdName[i]).value;
        
        if(temp==null||temp=="")
        {
             document.getElementById(passwordLabelIdName[i]).innerHTML=" Cannot Be Empty ";
             document.getElementById(passwordLabelIdName[i]).style.visibility="visible";
             
             document.getElementById(passwordTextIdName[i]).placeholder="";
             document.getElementById(passwordTextIdName[i]).style.borderColor="red";
             document.getElementById(passwordTextIdName[i]).style.borderStyle="solid";
            
                count=count+1;
           
        }
     
        
    }
    
    if(count==0)
    {

        if(validateUserPassword(userPassword,userConfirmPassword,labelUserPassword,labelUserConfirmPassword)==true)
        {
         
            count=0;
                 
        }   
     else{
        
        count=count+1;
    }
    
    }
    if(count==0){
        
        return true;
    }
    else{
        
        return false;
        
    }    
   
}

/* function that search user  master database password */

function updatedMasterPassword(){
    
    var userOldPassword=document.getElementById("m_useroldpassword");
     
 var userPassword=document.getElementById("m_userpassword");
 
 var userConfirmPassword=document.getElementById("m_userconfirmpassword");

if(passwordVerification(userPassword,userConfirmPassword,userOldPassword)==true){
  
    alert("welcome")
 userPassword_Db.transaction(search,errorDisplay);
 
 function errorDisplay(){

       
      

    }
 function search(tx){
    
    tx.executeSql('SELECT masterpassword from masterdb',[],querySuccess,errorDisplay);
    

    }

function querySuccess(tx,results){
    
    
    var flag=false;
    var mlen=results.rows.length;
    
    
    for(var i=0;i<mlen;i++){
        
        {
            var tempPassword=results.rows.item(i);
            if(userOldPassword.value==tempPassword){
                
                flag=true;
                break;
            
                
              }
            
            
         }
        
        if(flag==true){
            
                
                updateMasterPassword(userPassword.value,userConfirmPassword.value,userOldPassword.value);
                
        }
        else{
            
            alert("wrong password try again");
            
            
           }  
        
        
      }
    
    
  }



}


else{
    
   
    reloadPage();
    
    
    }

}

/* Function that validate new user password */











function validateUserPassword(userPassword,userConfirmPassword,labelUserPassword,labelUserConfirmPassword){
    
    var count=0;
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
        
    if(count==0){
        
        return true;
        
    }
    else{
        
        return false;        
    }
    
    

    
}

/* function that makes changes to Database */
function updateMasterPassword(newUserPassword,newUserConfirmPassword,userOldPassword){
    
    
   userPassword_Db.transaction(function(tx){
       
       
       tx.executeSql('UPDATE masterdb set masterpassword=? ,masterconfirmpassword=? where masterpassword=?',[newUserPassword,newUserConfirmPassword,userOldPassword])
       
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





function moveToPage(){
    
    window.location.href="../Databaselogin/newdatabase.html";

    
}

function reloadPage(){
    
    setTimeout(function(){window.location.href="../UpdateDatabase/updatedatabase.html"},500);
    
    
}