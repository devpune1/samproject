

function isEmpty(user_detail)
{
    if(user_detail==="")
    {
        alert("enter the value in text box");
    
        return false;
        
    }
    else
    {
        return true;
    }
    
    
    
}

function clear()
{
    
    
    document.getElementById("user_name").value="";
    document.getElementById("user_pass").value="";
}

function userDetail(){
    
    var name=document.getElementById("user_name").value;
    isEmpty(name);
    
    var password=document.getElementById("user_pass").value;
    isEmpty(password);
    
    
    
    if(isEmpty(name)&&isEmpty(password))
    {
        alert("NAME="+name+"\nPASSWORD="+password);
    }
    clear();
  
}


