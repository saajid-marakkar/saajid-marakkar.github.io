let mail = document.getElementById("email");
let pwd = document.getElementById("pass");

function ValidateEmailPhone(){
    var regexp = /^admin$/; 
   
    if (regexp.test(mail.value) )
     {
         return (true);      
     }
     else{

     document.getElementById("email-error").innerHTML="You have entered an invalid Email/PhoneNo ";
    return (false);
     }
        
}


function ValidatePassword()
{
    var rgxp=/^12345$/;
    if(rgxp.test(pwd.value) )
    {
       
        return true;
       
        
    }

    else{
        document.getElementById("password-error").innerHTML="You have entered an invalid password ";
        return (false);
        
    }
    
}



