let user=[];
    function catWomen()
    {
        var check = document.getElementById("ccounter").innerHTML
        if (check!="00:00")
        {
            alert("already booked");
        }
        else
        {
            var cmail=document.getElementById("cmail").value;
            var cname=document.getElementById("cname").value;
            var ctime=document.getElementById("ctime").value;
            if (cmail==""){
                alert("E-mail field required");
            }
            else 
            {
                var checkmail = user.findIndex(function(user,index){
                    return user.mail===cmail})
                if (checkmail=="-1")//if mail-id is not existing
                {
                    user.push({name:cname, mail:cmail, count:0});
                    user[user.length-1].count++;
                    console.log(user[user.length-1].count);
                    document.getElementById("catwomen").style.opacity="0.5"
                    document.getElementById("cat-booked").innerHTML="booked"
                    const startingMinutes=document.getElementById("ctime").value;
                    console.log(user);
                    let time=startingMinutes*60;
                    let stop=setInterval(updateCountdown,1000)
                    function updateCountdown(){
                        const minutes = Math.floor(time/60);
                        seconds=time%60;
                        seconds=seconds<10? '0' + seconds : seconds;
                        document.getElementById("ccounter").innerHTML= `${minutes}:${seconds}`; 
                        if (time<=0)
                        {
                            clearInterval(stop)
                            document.getElementById("ccounter").innerHTML= '00:00';
                            user[user.length-1].count--;
                            console.log(user[user.length-1].count);
                            document.getElementById("cat-booked").innerHTML="";
                            document.getElementById("catwomen").style.opacity="1.0"
                        }
                        else{
                            time--;
                        }
                    }
                }
                else
                {
                    var index_value;
                    user.findIndex(function(user,index){
                    if (user.mail===cmail)
                         index_value=index;})
                    if (user[index_value].count>=3)
                    {
                        alert("only 3 films can be booked at time");
                    }
                    else
                    {
                        user[index_value].count++;
                        document.getElementById("catwomen").style.opacity="0.5"
                        document.getElementById("cat-booked").innerHTML="booked"
                        const startingMinutes=document.getElementById("ctime").value;
                        let time=startingMinutes*60;
                        let stop=setInterval(updateCountdown,1000)
                        function updateCountdown(){
                            const minutes = Math.floor(time/60);
                            seconds=time%60;
                            seconds=seconds<10? '0' + seconds : seconds;
                            document.getElementById("ccounter").innerHTML= `${minutes}:${seconds}`; 
                            if (time<=0)
                            {
                                clearInterval(stop)
                                document.getElementById("ccounter").innerHTML= '00:00';
                                user[index_value].count--;
                                document.getElementById("cat-booked").innerHTML="";
                                document.getElementById("catwomen").style.opacity="1.0"
                            }
                            else{
                                time--;
                            }   
                        }
                    }
                }
            }
            
            
        }
    }
    
    function batMan()
    {
        var check = document.getElementById("bcounter").innerHTML
        if (check!="00:00")
        {
            alert("already booked");
        }
        else
        {
            var bmail=document.getElementById("bmail").value;
            var bname=document.getElementById("bname").value;
            var btime=document.getElementById("btime").value
            if (bmail==""){
                alert("E-mail field required");
            }
            else 
            {
                var checkmail = user.findIndex(function(user,index){
                    return user.mail===bmail})
                if (checkmail=="-1")//if mail-id is not existing
                {
                    user.push({name:bname, mail:bmail, count:0});
                    user[user.length-1].count++;
                    document.getElementById("batman").style.opacity="0.5"
                    document.getElementById("bat-booked").innerHTML="booked"
                    const startingMinutes=document.getElementById("btime").value;
                    let time=startingMinutes*60;
                    let stop=setInterval(updateCountdown,1000)
                    //var id=setInterval(updateCountdown,1000);
                    function updateCountdown(){
                        const minutes = Math.floor(time/60);
                        seconds=time%60;
                        seconds=seconds<10? '0' + seconds : seconds;
                        document.getElementById("bcounter").innerHTML= `${minutes}:${seconds}`; 
                        if (time<=0)
                        {
                            clearInterval(stop)
                            document.getElementById("bcounter").innerHTML= '00:00';
                            user[user.length-1].count--;
                            document.getElementById("bat-booked").innerHTML="";
                            document.getElementById("batman").style.opacity="1.0";
                        }
                        else{
                            time--;
                        }
                    }
                }
                else
                {
                    var index_value;
                    user.findIndex(function(user,index){
                    if (user.mail===bmail)
                         index_value=index;})
                    console.log(index_value)
                    if (user[index_value].count>=3)
                    {
                        alert("only 3 films can be booked at time");
                    }
                    else
                    {
                        user[index_value].count++;
                        document.getElementById("batman").style.opacity="0.5"
                        document.getElementById("bat-booked").innerHTML="booked"
                        const startingMinutes=document.getElementById("btime").value;
                        console.log(startingMinutes)
                        let time=startingMinutes*60;
                        let stop=setInterval(updateCountdown,1000)
                        function updateCountdown(){
                            const minutes = Math.floor(time/60);
                            seconds=time%60;
                            seconds=seconds<10? '0' + seconds : seconds;
                            document.getElementById("bcounter").innerHTML= `${minutes}:${seconds}`; 
                            if (time<=0)
                            {
                                clearInterval(stop)
                                document.getElementById("bcounter").innerHTML= '00:00';
                                user[index_value].count--;
                                document.getElementById("bat-booked").innerHTML="";
                                document.getElementById("batman").style.opacity="1.0";
                            }
                            else{
                                time--;
                            }   
                        }
                    }
                }
                
            }
            
        }
    }
    function dareDevil()
    {
        var check = document.getElementById("dcounter").innerHTML
        if (check!="00:00")
        {
            alert("already booked");
        }
        else
        {
            var dmail=document.getElementById("dmail").value;
            var dname=document.getElementById("dname").value;
            var dtime=document.getElementById("dtime").value
            if (dmail==""){
                alert("E-mail field required");
            }
            else
            {
                var checkmail = user.findIndex(function(user,index){
                    return user.mail===dmail})
                if (checkmail=="-1")//if mail-id is not existing
                {
                    user.push({name:dname, mail:dmail, count:0});
                    user[user.length-1].count++;
                    document.getElementById("daredevil").style.opacity="0.5"
                    document.getElementById("dar-booked").innerHTML="booked"
                    const startingMinutes=document.getElementById("dtime").value;
                    let time=startingMinutes*60;
                    let stop=setInterval(updateCountdown,1000)
                    function updateCountdown(){
                        const minutes = Math.floor(time/60);
                        seconds=time%60;
                        seconds=seconds<10? '0' + seconds : seconds;
                        document.getElementById("dcounter").innerHTML= `${minutes}:${seconds}`; 
                        if (time<=0)
                        {
                            clearInterval(stop)
                            document.getElementById("dcounter").innerHTML= '00:00';
                            user[user.length-1].count--;
                            document.getElementById("dar-booked").innerHTML="";
                            document.getElementById("daredevil").style.opacity="1.0"
                        }
                        else{
                            time--;
                        }
                    }
                }
                else
                {
                    var index_value;
                    user.findIndex(function(user,index){
                    if (user.mail===dmail)
                         index_value=index;})
                    console.log(user[index_value].count);
                    if (user[index_value].count>=3)
                    {
                        alert("only 3 films can be booked at time");
                    }
                    else
                    {
                        user[index_value].count++;
                        document.getElementById("daredevil").style.opacity="0.5"
                        document.getElementById("dar-booked").innerHTML="booked"
                        const startingMinutes=document.getElementById("dtime").value;
                        let time=startingMinutes*60;
                        let stop=setInterval(updateCountdown,1000)
                        function updateCountdown(){
                            const minutes = Math.floor(time/60);
                            seconds=time%60;
                            seconds=seconds<10? '0' + seconds : seconds;
                            document.getElementById("dcounter").innerHTML= `${minutes}:${seconds}`; 
                            if (time<=0)
                            {
                                clearInterval(stop)
                                document.getElementById("dcounter").innerHTML= '00:00';
                                user[index_value].count--;
                                document.getElementById("dar-booked").innerHTML="";
                                document.getElementById("daredevil").style.opacity="1.0"
                            }
                            else{
                                time--;
                            }   
                        }
                    }
                }
            }
        }
    }
    function wolverine()
    {
        var check = document.getElementById("wcounter").innerHTML
        if (check!="00:00")
        {
            alert("already booked");
        }
        else
        {
            var wmail=document.getElementById("wmail").value;
            var wname=document.getElementById("wname").value;
            var wtime=document.getElementById("wtime").value
            if (wmail==""){
                alert("E-mail field required");
            }
            else
            {
                var checkmail = user.findIndex(function(user,index){
                    return user.mail===wmail})
                if (checkmail=="-1")//if mail-id is not existing
                {
                    user.push({name:wname, mail:wmail, count:0});
                    user[user.length-1].count++;
                    document.getElementById("wolverine").style.opacity="0.5"
                    document.getElementById("wol-booked").innerHTML="booked"
                    const startingMinutes=document.getElementById("wtime").value;
                    let time=startingMinutes*60;
                    let stop=setInterval(updateCountdown,1000)
                    function updateCountdown(){
                        const minutes = Math.floor(time/60);
                        seconds=time%60;
                        seconds=seconds<10? '0' + seconds : seconds;
                        document.getElementById("wcounter").innerHTML= `${minutes}:${seconds}`; 
                        if (time<=0)
                        {
                            clearInterval(stop)
                            document.getElementById("wcounter").innerHTML= '00:00';
                            user[user.length-1].count--;
                            document.getElementById("wol-booked").innerHTML="";
                            document.getElementById("wolverine").style.opacity="1.0"
                        }
                        else{
                            time--;
                        }
                    }
                }
                else
                {
                    var index_value;
                    user.findIndex(function(user,index){
                    if (user.mail===wmail)
                         index_value=index;})
                    if (user[index_value].count>=3)
                    {
                        alert("only 3 films can be booked at time");
                    }
                    else
                    {
                        user[index_value].count++;
                        document.getElementById("wolverine").style.opacity="0.5"
                        document.getElementById("wol-booked").innerHTML="booked"
                        const startingMinutes=document.getElementById("wtime").value;
                        let time=startingMinutes*60;
                        let stop=setInterval(updateCountdown,1000)
                        function updateCountdown(){
                            const minutes = Math.floor(time/60);
                            seconds=time%60;
                            seconds=seconds<10? '0' + seconds : seconds;
                            document.getElementById("wcounter").innerHTML= `${minutes}:${seconds}`; 
                            if (time<=0)
                            {
                                clearInterval(stop)
                                document.getElementById("wcounter").innerHTML= '00:00';
                                user[index_value].count--;
                                document.getElementById("wol-booked").innerHTML="";
                                document.getElementById("wolverine").style.opacity="1.0"
                            }
                            else{
                                time--;
                            }   
                        }
                    }
                }
            }

        }
    }