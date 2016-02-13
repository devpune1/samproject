function clear()
{
    
    document.getElementById("user_name").innerHTML="";
    document.getElementById("user_pass").innerHTML="";
    
}




function userDetail()
{
    
    var userName=document.getElementById("user_name").value;
    
    var userPass=document.getElementById("user_pass").value;
    
    
        if(userName==="asd" && userPass==="asd")
        {
            
                alert("Your are WELCOMED");
            
                window.location.href="../Userpage/userpage.html";
            
        }    
        else
        {
            
            alert("Your Not \"Authorized User\" ");
        }
    
    
    
}   
