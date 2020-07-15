

window.onload=function(){
    getallusers();
}
function getallusers(){
    let xhr=new XMLHttpRequest();

    xhr.onreadystatechange=function(){

        if(xhr.readyState==4&&xhr.status==200){
            // console.log(xhr)
        
            // console.log("===")
            // console.log(xhr.responseText)
            // console.log("===")
            let data=JSON.parse(xhr.responseText);
            
            console.log(data)
            for(i=0;i<data.length;i++){
                document.getElementById("mybody").innerHTML+=`
                 <tr>
                    <td>${data[i].l_usernmae}</td>
                    <td>${data[i].l_password}</td>
                    <td>
                    <button onclick="deleteusers('${data[i].l_id}')">删除</button>
                    <a href="xiangqing.html?id=${data[i].l_id}"><button>修改</button></a>
                    </td>
                 </tr>
            `
            } 

        }
    };
    xhr.open("get","/getalluser.do");
    xhr.send(null);
}