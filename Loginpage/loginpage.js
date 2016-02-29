



function reloadPage(){
    
     setTimeout(function () { location.reload(true); }, 500);
    
}



function clearPage() {
    
    document.getElementById("user_name").value="";
    document.getElementById("user_pass").value="";
    
}





function isEmpty(userData){
    
    if(userData===""){
        
        return false;
        
    }
    
    else{
        
        return true;
    }
    
}

function userDetail(){
  
    var userName=document.getElementById("user_name").value;
    
    var userPass=document.getElementById("user_pass").value;
    
    
    if(isEmpty(userName)===true && isEmpty(userPass)===true){
        
                
            if(userName==="asd" && userPass==="asd"){
            
                alert("Your are WELCOMED");
                
                clearPage();
              
                window.location.href="../Userpage/userpage.html";
            
            }   
            
            else{
            
                alert("Your Not \"Authorized User\" ");
            		clearPage();
            }
        
       
    }
    else{
        
        if( isEmpty(userName) ===false ){
            
                document.getElementById("user_name").placeholder="please enter the name";
                document.getElementById("user_name").style.borderWidth="2px";
                document.getElementById("user_name").style.borderStyle="solid";
                document.getElementById("user_name").style.borderColor="red";
                reloadPage();
        }   
        
           if( isEmpty(userPass) === false)
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


function onClosed(){
    
 close();
    
}


function newRegister(){
    
    window.location.href="../Loginpage/Registrationpage/registration.html";
}