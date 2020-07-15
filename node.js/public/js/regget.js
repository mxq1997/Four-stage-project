 
function checkuser(){
    let usernamevalue=document.getElementById("username").value;
    let xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        // console.log(xhr.readyState)
        if(xhr.readyState==4){
            // console.log(xhr.responseText);
            document.getElementById("msg").innerHTML=xhr.responseText;
        }
    }
    xhr.open("get","/checkuser.do?username="+usernamevalue);

    xhr.send(null);

    
}