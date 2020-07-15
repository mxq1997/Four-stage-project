function searchs(){
    let username=document.getElementById("username").value;
    let xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            console.log(xhr.responseText);
            let data=JSON.parse(xhr.responseText);
            document.getElementById("mybody").innerHTML=""
            for(i=0;i<data.length;i++){
                document.getElementById("mybody").innerHTML+=`
                 <tr>
                    <td>${data[i].l_usernmae}</td>
                    <td>${data[i].l_password}</td>
                    <td>
                    <button onclick="deleteusers()">删除</button>
                    <a href="xiangqing.html?id=${data[i].l_id}"><button>修改</button></a>
                    </td>
                 </tr>
            `
            } 
          
        }
    };
    // xhr.open("get","/searchuser.do?username="+username);
    xhr.open("post","/searchuser.do");
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
    xhr.send("username="+username)
}