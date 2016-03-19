var detailsDb=openDatabase('UserDetail','1.0','this is user details database',2000000)


function createTable(){
    
detailsDb.transaction(function(tx){
    
    //alert("here");
    tx.executeSql('CREATE TABLE IF NOT EXISTS user(user_account TEXT,user_id TEXT,user_password TEXT,user_note TEXT)');
   // alert("here");
});

}



function getUserAccountName(){
    
    return document.getElementById("useraccountname");
    
   
}


function getUserAccountUserID(){
    
    
    return document.getElementById("userid");
    
 
    
}


function getUserPassword(){
    
    
    return document.getElementById("userpassword");
    
    
}

function getUserNote(){
    
    
    return document.getElementById("usernote");
    
    
    
}


function enterDetail(){




 var userAccountName=getUserAccountName();
// alert("inserting ");   

 var userAccountID=getUserAccountUserID();
 var userAccountPassword=getUserPassword();
 var userAccountNote=getUserNote();
  


 createTable();   

   

//alert("inserting ");   

  if(validateUserDetail()==true){
    
    
     alert("inserting records");   
    
    insertUserAccountDetail(userAccountName.value,userAccountID.value,userAccountPassword.value,userAccountNote.value);
     
     window.location.href="../savedetails.html";
      //alert("done inserting");
    
    }
    else{
        
   //alert("no");
    
    reloadPage();
    
}




    
    
    
}





function validateUserDetail(){
    
    var count=0;
    
    var userDetail=["useraccountname","userid","userpassword","usernote"];

   var userDetailLabel=["labelaccountname","labeluserid","labeluserpassword","labelusernote"];
    
  
    
    var userLength=userDetail.length;
   // alert(userLength);
    
    
    
    for(var i=0;i<userLength;i++){
        
        var userTemp=document.getElementById(userDetail[i]).value;
    
        if( userTemp == null || userTemp == ""){
            
          
            
             document.getElementById(userDetail[i]).value="Cannot Be Empty";
             document.getElementById(userDetailLabel[i]).innerHTML="Cannot Be Empty";    
             document.getElementById(userDetail[i]).style.borderColor="red";
             document.getElementById(userDetailLabel[i]).style.visibility="visible";
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


function insertUserAccountDetail(userAccountName,userAccountID,userAccountPassword,userAccountNote){
    
    
    detailsDb.transaction(function(tx) {
       
       tx.executeSql('INSERT INTO user(user_account,user_id,user_password,user_note) values (?,?,?,?)',[userAccountName,userAccountID,userAccountPassword,userAccountNote],null);
       //alert("done");
        
    });
    
    
}

function reloadPage(){
    
    
   setTimeout(function() {window.location.href="../AddDetail/adddetail.html";
    }, 500); 
}


function clear(){
    
    
    
}