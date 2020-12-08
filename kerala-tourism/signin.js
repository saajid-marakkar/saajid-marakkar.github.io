let mail = document.getElementById("email");
let pwd = document.getElementById("password1");

function validate(){
    var regexp = /^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/; // email
    var a =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //phone no xxx xxx xxx, xxx-xxx-xxx, xxx.xxx.xxx
    if (regexp.test(mail.value) )
     {
         return (true);      
     }
     else if( a.test(mail.value))
     {
        return(true);
     }
     else{

     alert("You have entered an invalid Email/PhoneNo ");
    return (false);
     }
        
}


function validatepassword()
{
    var rgxp=/^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if(rgxp.test(pwd.value) )
    {
       
        return true;
       
        
    }

    else{
        alert("enter valid password")
        return (false);
        
    }
    
}