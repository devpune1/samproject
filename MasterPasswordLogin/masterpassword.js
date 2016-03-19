
 var userPassword_Db=openDatabase('UserPasswordDb','1.0','This is userPassword Database',200000);
    
/*Function that return master Password  value */
function getLabelMasterPassword(){
    
var labelMasterPassword=document.getElementById("labelmasterpassword");

return labelMasterPassword;
    
}


/*Function that return master Password  value */
function getMasterPassword(){
    
var masterPassword=document.getElementById("masterpassword");
return masterPassword;
    
}

/* Function open master database */


 
    
    
    
    
/*function to check wheather password is */
    
function isPasswordEmpty(masterpassword){
    
        
    if(masterpassword.value==null || masterpassword.value==""){
        
        
            masterpassword.style.borderColor="red";
            masterpassword.value="";
          
            return true;
        
        
    }
    else{
        
        return false;
    }

        
    
    
}





/* function that verify master password */

function verifyMasterPassword(){
    
    
      
            
    
    
    var flag=false;
    
    
    var masterpassword=getMasterPassword();

    var labelMasterPassword=getLabelMasterPassword();
    
      // alert("i am here");
       
   
    
    if(isPasswordEmpty(masterpassword)==false){
        
        
        validateMasterPassword(masterpassword);
        
    }
    else{
        
            labelMasterPassword.style.visibility="visible";
            labelMasterPassword.innerHTML="Cannot Be Empty";
        
        alert("password Do not match");
        reloadPage();
        
    }
    

}




    
   
    
   




function validateMasterPassword(masterPassword){
    
    
    
       
   
  userPassword_Db.transaction(function (tx){
       
        
        tx.executeSql('CREATE TABLE  IF NOT EXISTS masterdb(masterpassword TEXT,masterconfirmpassword TEXT)');
        
    });

 //alert("inside validate master password");
 
    var flags=false;
   
    userPassword_Db.transaction(search,errorDisplay);
    
     function errorDisplay(){
         
        // alert("error here");
     }   
    
    
    function search(tx){
        
       tx.executeSql('SELECT masterpassword from masterdb',[],querySuccess,errorDisplay);
        
    }
    
    function querySuccess(tx,results){
        
        var records=results.rows.length;
        
        //alert(records);
        
        for(var i=0;i<records;i++){
        
          if(masterPassword.value==results.rows.item(i).masterpassword){
            
            
                 flags=true;
                 break;
            
            }
            else{
                
                flags=false;
                
            }
            
            
            
            
        
        }
        
      
      if(flags==true){
          
          //alert("Found");
          
          window.location.href="../Savedetails/savedetails.html";
         
         
      }
     else{
          
          //alert("Password Not Found");
          reloadPage();
          
       }
        
    
    }
    
}



function reloadPage(){
    
setTimeout(function() {window.location.href="../MasterPasswordLogin/masterpassword.html"}, 500);
    
}


function moveToAddDetail(){
    
     
    
}

function verifyPassword(userPassword){
    
    
    

    
    
}