function countPasswordLen()
{
    
    
}


function passwordS()
{
    
     var passlenght=document.getElementById("lpasstxt").value;
    
    alert(passlenght);
    var len=passlenght.length;
    if(len>=8)
    {
        
        alert("strong password");
        savepage();
        
    }
    else
    {
        
        if(len>=6)
        {
            
            alert("medim password");
            savepage();
            
        }
        else
        {
            
            alert(" \"poor password \" please enter strong password");
        
        }
    
    }

}



function display()
{
    
    
    alert("hello");
}

function savepage(){
    
    
    window.location.href="../Savedetails/savedetails.html"
}