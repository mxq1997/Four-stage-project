const db=require("../config/dbpoolconfig");
const fs=require("fs");
const filecontroller={
    uploads(req,resp){
        // console.log("======")
        // console.log(req.file.filename);
        // let pathname="uploads/"+req.file.filename;
        // let filename=(req.file.originalname).split(".")[0];
        // db.connect("insert into images values (?,?,?)",
        // [null,filename,pathname],
        // (err,data)=>{
        //     console.log(data);
        //     console.log(err);
        //     if(!err){
        //         resp.send("上传成功")
        //     }
        // }
        // )
    },
    getImages(req,resp){
        // db.connect("select * from images where imgname=?",
        //     ["123456"],
        //     (err,data)=>{
        //     console.log(data);
        //     console.log("===")
        //     console.log(err);
        //     if(!err){
        //         resp.send(data);
        //     }
        //     })
    },
    uploadss(req,resp){
        // console.log("======")
        // console.log(req.file.filename);
        // let pathname="uploads/"+req.file.filename;
        // let filename=(req.file.originalname).split(".")[0];
        // db.connect("insert into images values (?,?,?)",
        // [null,filename,pathname],
        // (err,data)=>{
        //     console.log(data);
        //     console.log(err);
        //     if(!err){
        //         resp.send("上传成功")
        //     }
        // }
        // )
        
    },

    //6.17
    uploads1(req,resp){
        console.log("进入路由")

        let imgdata=req.body.imgdata;
        
        let base64data=imgdata.replace(/data:image\/png;base64,/,"")
        
        let databuffer=Buffer.from(base64data,"base64");

        console.log(databuffer);

        let filename=new Date().getTime()+"_small.png";

        fs.writeFile("public/images/"+filename,databuffer,function(err){
            if(err){
                resp.send(err);
            }else{
                resp.send("保存成功")
            }
        })
        
    }

};
module.exports=filecontroller;