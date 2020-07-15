function deleteusers(id){
    let xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            console.log(xhr);
            
            let data=JSON.parse(xhr.responseText);
            for(let i=0;i<data.length;i++){
              
                
            }
        }
    };
    xhr.open("get",`/deleteuser.do?id=${id}`);
    xhr.send(null)
}