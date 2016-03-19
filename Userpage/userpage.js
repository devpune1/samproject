
var userPassword_Db=openDatabase('UserPasswordDb','1.0','This is userPassword Database',200000);

 userPassword_Db.transaction(function(tx){
   
   tx.executeSql('CREATE TABLE  IF NOT EXISTS masterdb(masterpassword TEXT,masterconfirmpassword TEXT)'); 

    
});

function newDatabase(){
    
  window.location.href="../Databaselogin/newdatabase.html";
    
    
}


function updateDatabase(){
    
  window.location.href="../Databaselogin/updatedatabase.html";
    
    
}


function enterMasterPage(){
    
   window.location.href="../MasterPasswordLogin/masterpassword.html";
    
}