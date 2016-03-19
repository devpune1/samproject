var userPassword_Db=openDatabase('UserPasswordDb','1.0','This is userPassword Database',200000);



function createTable(){
   userPassword_Db.transaction(function(tx){
   
   tx.executeSql('CREATE TABLE  IF NOT EXISTS masterdb(masterpassword TEXT,masterconfirmpassword TEXT)'); 
    
});
    
}   





/* Function that initialize variable */





/* Function that verify  all three password */

function passwordVerification(userPassword,userConfirmPassword,userOldPassword){
    



var passwordTextIdName=["m_useroldpassword","m_userpassword","m_userconfirmpassword"];
var passwordLabelIdName=["labeloldpassword","labelpassword","labelconfirmpassword"];

var labelUserConfirmPassword=getLabelConfirmMasterPassword();
var labelUserPassword=getLabelMasterPassword();
var labelUserOldPassword=getLabelOldMasterPassword();
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
        if(checkPassword(userOldPassword,labelUserOldPassword)==true){
                
                if(passwordDifferent(userOldPassword,userPassword,labelUserOldPassword,labelUserPassword)==true)
                {   //alert("her");
                   if(validateUserPassword(userPassword,userConfirmPassword,labelUserPassword,labelUserConfirmPassword)==true){
         
                            count=0;
                 
                    }   
                    else{
        
                          count=count+1;
                     }
        
                }
                else{
                    
                    
                    count=count+1;
                }
    
                    
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
    
    var labelUserOldPassword=getLabelOldMasterPassword();
    var userOldPassword=getOldMasterPassword();
    var userPassword=getMasterPassword();
    var userConfirmPassword=getConfirmMasterPassword();

 var flag=false;
var count=0;
createTable();




if(passwordVerification(userPassword,userConfirmPassword,userOldPassword)==true){
  
    alert("welcome");
     userPassword_Db.transaction(search,errorDisplay);
 
   function errorDisplay(){
     
       
   }
 
 
   function search(tx){
    
             tx.executeSql('SELECT masterpassword from masterdb',[],querySuccess,errorDisplay);
    
      }

function querySuccess(tx,results){
    
    
   
    var mlen=results.rows.length;
    
    
       for(var i=0;i<mlen;i++){
        
         
               var tempPassword=results.rows.item(i).masterpassword;
                   //alert(""+tempPassword);
            
                    count=count+1;
                         //alert("here out");
                    if(validatOldPassword(tempPassword)==true){
                
                       alert("here in update");
                                
                                   
                                   updateMasterPassword(userPassword.value,userConfirmPassword.value,userOldPassword.value);
                               
                                 moveToMasterPage();
                                 break;
                                
                       
                        }
                       
                       
                        else{
                             
                             if(count==mlen)
                             {
                                 alert("here in out of update");
                                     
                                          reloadPage();
                             }
                            
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
    
       
      // alert("inside update");
       tx.executeSql('UPDATE masterdb set masterpassword=? ,masterconfirmpassword=? where masterpassword=?',[newUserPassword,newUserConfirmPassword,userOldPassword])
    
       //alert("done");
   });
        
    

    
}


/*function check wheather filed is not empty */

function isFiledEmpty(filedData)
{
    
    
    
      if(filedData =="" || filedData == null){
        
        return true;
      }
    else{
    
         return false;

    }
    
    
}


/* function to validate user enter password */

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

/*function that check for valid password*/



function checkPassword(userOldPassword,labelUserOldPassword){
    
    var errorNumber=0;
   // alert("checking");
    
    if(userOldPassword.value.length>=8)
    {
                //alert("checking valid");
        if(!validateuserPassword(userOldPassword.value)){
                
                errorNumber=1;
        
                displayErrorMsg(userOldPassword,errorNumber,labelUserOldPassword);
    
                return false;
        
        
            }
            
            return true;
    
    }
    else{
        
        errorNumber=2;
        displayErrorMsg(userOldPassword,errorNumber,labelUserOldPassword);
        return false;
    }
    
}

/* Function that Displaying error message and set value to label */

function displayErrorMsg(userOldPassword,errNumber,labelUserOldPassword){
    
    
    switch (errNumber) {
        case 1:
               userOldPassword.value="";
                userOldPassword.placeholder="";
               userOldPassword.style.borderColor="red";
               labelUserOldPassword.innerHTML="Enter Valid Password";
               labelUserOldPassword.style.visibility="visible";
               
            break;
            
        case 2:
            
                userOldPassword.placeholder="";
               userOldPassword.style.borderColor="red";
               labelUserOldPassword.innerHTML="Password Too Small";
               labelUserOldPassword.style.visibility="visible";
              
            break;
            
        case 3:
            
                userOldPassword.placeholder="";
               userOldPassword.style.borderColor="red";
               labelUserOldPassword.innerHTML="Master Password Not Found ";
               labelUserOldPassword.style.visibility="visible";
              
            break;
        
        default:
            break;
    }
    
    
}




/* function check old password and new password  */


function passwordDifferent(userPassword,userOldPassword,labelUserOldPassword,labelUserPassword){

                //alert("inside different");
            if(userPassword.value==userOldPassword.value){

                //alert("here in different");
                //alert(""+userPassword);
                
                userPassword.value="";
                userPassword.placeholder="";
                userPassword.style.borderColor="red";
                labelUserPassword.innerHTML="Password Should Be Different";
                labelUserPassword.style.visibility="visible";
               

                userOldPassword.value="";
                userOldPassword.placeholder="";
                userOldPassword.style.borderColor="red";
                labelUserOldPassword.innerHTML="Password Should Be Different";
                labelUserOldPassword.style.visibility="visible";
               
               return false;
             
                
               }
               else{
                
                //alert("safe from different")
                return true;
            }
    
    
    
}


/* function make changes from */



/* Reloads the page here */


function reloadPage(){
    
    setTimeout(function(){window.location.href="../UpdateDatabase/updatedatabase.html"},500);
    
    
}



/* function move to next add detail page */

function moveToMasterPage(){
    
    window.location.href="../Userpage/userpage.html";

    
}
/*  getter  function */  


function getOldMasterPassword(){
    
    return document.getElementById("m_useroldpassword");
    
}




function getMasterPassword(){
    
  return   document.getElementById("m_userpassword");
    
    
}

function getConfirmMasterPassword(){
    
       return document.getElementById("m_userconfirmpassword");
    
    
}




/*  setter  function */  

function getLabelOldMasterPassword() {
    
   return  document.getElementById("labeloldpassword");
    
     
    
}

function getLabelMasterPassword() {
    
      return document.getElementById("labelpassword");
    
    
    
}

function getLabelConfirmMasterPassword() {
    
    return document.getElementById("labelconfirmpassword");
   
    
}



function validatOldPassword(userOldPassword){
    
      
        var oldpassword=getOldMasterPassword();
            
            
            if(userOldPassword==oldpassword.value)
            {
                
                return true;
            }
            else{
                
                return false;
                
            }

    
    
}

