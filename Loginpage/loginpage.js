
var regdb=openDatabase('RegisterDatabase','1.0','created user',20000);


  regdb.transaction(function(tx){
      
        tx.executeSql('CREATE TABLE  IF NOT EXISTS register(reg_name TEXT,reg_password TEXT,reg_confirmpassword TEXT,reg_email Text,reg_mobile NUMBER)');
       
    }); 


function reloadPage(){
    
     setTimeout(function () { location.reload(true); }, 500);
    
}



function clearPage() {
    
    document.getElementById("user_name").value="";
    document.getElementById("user_pass").value="";
    
}





function isEmpty(userData){
    
    if(userData=="" && userData==""){
        
        return true;
        
    }
    
    else{
        
        return false;
    }
    
}





function userDetail(){
  
   
 accessUserDetail();

    
    
}   




function accessUserDetail(){
    
    //alert("start");
   
   var count=0;
   
   regdb.transaction(function (tx) {
            
                            tx.executeSql('SELECT * FROM register', [], function (tx, results){
            
                            var len = results.rows.length;
             
                                 for (var i = 0; i < len; i++){
                            
                                    var recordName=results.rows.item(i).reg_name;
                                    var recordPass=results.rows.item(i).reg_password;
                                        
                                        count=count+1;
                                        if(userVerification(recordName,recordPass)==true)
                                        {
                                             alert("Your are WELCOMED");
                                         
                                               window.location.href="../Userpage/userpage.html";
                                                    break;
                                                 
                                        }
                                        else{
                                             
                                             if( count==len )
                                             {
                                                alert("User name or Password is Incorrect");
                                            
                                              
                                          reloadPage();
                                         
                                             }
                                        }
                                    }                                
            }, null);
         });
    


}

function onClosed(){
    
 close();
    
}


function newRegister(){
    
    window.location.href="../Loginpage/Registrationpage/registration.html";
}



function userVerification(username,userpassword){
    
    
     var userName=document.getElementById("user_name").value;
    
    var userPass=document.getElementById("user_pass").value;

               
    
    if(isEmpty(userName)== false && isEmpty(userPass)==false){
    
            if(userName == username && userpassword==userPass){
    
              return true;
             
            }   
        else{
            
                    return false;
                
            }
        
       
    }
    else{
        
        if( isEmpty(userName) == true ){
            
                document.getElementById("user_name").placeholder="please enter the name";
                document.getElementById("user_name").style.borderWidth="2px";
                document.getElementById("user_name").style.borderStyle="solid";
                document.getElementById("user_name").style.borderColor="red";
                reloadPage();
        }   
        
           if( isEmpty(userPass) == true)
           {
                 document.getElementById("user_pass").placeholder="please enter password here";
                 document.getElementById("user_pass").textContent.color="black";
                 document.getElementById("user_pass").style.borderWidth="2px";
                 document.getElementById("user_pass").style.borderStyle="solid";
                 document.getElementById("user_pass").style.borderColor="red";
                 
                reloadPage();
           }
           
           
           
    }
    
    
    
    
    
}



