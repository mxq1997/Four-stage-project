


const socket=new WebSocket("ws://172.16.2.58:8896")
socket.onopen=function(ev){
    // console.log(ev);
    socket.onmessage=function(ev){
        console.log(ev.data);
        console.log(typeof ev.data);
        let mydata=JSON.parse(ev.data)
        $("#con").append(` <p class="i0">
        <i class="i1">${mydata.name}</i>
        <b class="i2">${mydata.msg}</b>
    </p>`)
        
        
    }
}

$("#btn").click(function(){
    let msg={name:"桃桃",msg:$("#msg").val()};
    // console.log(msg);
    socket.send(JSON.stringify(msg));
     
  
})

$("#exit").click(function(){
    if(confirm("您确定要关闭本页吗？")) {
        closeCurrentPage();
    } else {}
   
})

function closeCurrentPage() {
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") !=-1) {
        window.location.href="about:blank";
        window.close();
    } else {
        window.opener = null;
        window.open("", "_self");
        window.close();
    }
} 
