 

let xhr=new XMLHttpRequest();
if(async=undefined)async=true;

function myAjax(method,url,params,callback,async) {


    xhr.onreadystatechange=function () {
        if(xhr.readyState==4&&xhr.status==200){
            callback()
        }
    };

    if(method=="get"){
        xhr.open(method,url+"?"+params,async);
        xhr.send(null);
    }else if(method=="post"){
        xhr.open(method,url,async);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(params);
    }

}
