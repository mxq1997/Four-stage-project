const express=require("express");

const bodyparser=require("body-parser");

const http=require("http");

const logger=require("morgan");

const seesion=require("express-session");

const cookieParser=require("cookie-parser")

const route=require("./router/indexrouter");

const path=require("path");
const ws=require("ws");
const { array } = require("./config/fileconfig");

 

 

const app=express();

app.use(logger("dev"));

app.use(bodyparser.urlencoded({
    extended:false
}));

app.use(bodyparser.json())

app.use(route);

app.use(cookieParser())

app.use(seesion({
    name:"demomxq",
    secret:"mxq123",
    saveUninitialized:true,
    resave:true,
    cookie:{
        maxAge:1000*60*60*24*30,
        rolling:true,       
    }

}));

app.set("views",path.join(__dirname,"views"));//视图文件路径

//视图解析引擎
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));

app.use(express.static(__dirname+"/public/html"));

app.set("port",8897);

app.listen(8897,(req,resp)=>{
    console.log("服务已经启动"+app.get("port"))
});

const wss=new ws.Server({
    host:"172.16.2.58",
    port:8896
})

let arr=Array();
wss.on("connection",function(ws){
    // console.log("有人来了");
    // console.log(ws);
    arr.push(ws);
    ws.on("message",function(data){
        console.log(data);
        for(let i=0;i<arr.length;i++){
            arr[i].send(data);

        }
        
    });
    ws.on("close",function(){
        for(let i=0;i<arr.length;i++){
            if(arr[i]==ws){
                arr.splice(i,1);
                break;
            }
             
        }
    })
    
    
})