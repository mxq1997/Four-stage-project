 
function checkuser1(){
    let usernamevalue=document.getElementById("username").value;
    let xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        // console.log(xhr.readyState)
        if(xhr.readyState==4){
            // console.log(xhr.responseText);
            document.getElementById("msg").innerHTML=xhr.responseText;
        }
    }
    xhr.open("post","/checkuser.do");

    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    

    xhr.send("username="+usernamevalue);

    
}