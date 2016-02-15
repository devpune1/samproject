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
        
        
    }
    else
    {
        
        if(len>=6)
        {
            
            alert("medim password");
            
            
        }
        else
        {
            
            alert("poor password");
        
        }
    
    }

}



function display()
{
    
    
    alert("hello");
}