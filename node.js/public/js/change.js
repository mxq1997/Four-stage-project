// function changeuser(){
//     let username=document.getElementById("username").value;
//     let password=document.getElementById("password").value;
//     let xhr=new XMLHttpRequest();
//     xhr.onreadystatechange=function(){
//         if(xhr.readyState==4&&xhr.status==200){
//             console.log("111")
//         }
//     }
// }
window.onload=function(){
    getusers()
};
function getusers(){
    let xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                // console.log("===")
                // console.log(xhr)
                let data=JSON.parse(xhr.responseText);
                if(data.length>0){
                    console.log("===")
                    console.log(data[0])
                    document.getElementById("username").value=data[0].l_usernmae;
                    document.getElementById("password").value=data[0].l_password;
                }
            }
        }
        // console.log("===")
        console.log(location)
    xhr.open("get","/getuser.do"+location.search);
    xhr.send(null);
    }