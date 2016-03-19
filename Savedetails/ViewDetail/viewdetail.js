var detailsDb=openDatabase('UserDetail','1.0','this is user details database',2000000)


function createTable(){
    
detailsDb.transaction(function(tx){
    
    
    //alert("here");
    tx.executeSql('CREATE TABLE IF NOT EXISTS user(user_account TEXT,user_id TEXT,user_password TEXT,user_note TEXT)');
   // alert("here");
   
});

}


function viewDetails(){
    
    
    
    detailsDb.transaction(getDetail,displayError);
    
    function getDetail(tx){
        
        
        tx.executeSql('Select * from user',[],getData,displayError);
        
        
        
    }
    
    function getData(tx,results){
        
        
        
        
        
        
        
    }
    
    
    
    function displayError(){
        
        
        
    }
}