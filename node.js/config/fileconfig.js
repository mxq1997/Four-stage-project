const multer=require("multer");


const storage=multer.diskStorage({
    destination:function(req,file,callback){
        // console.log(file);
        callback(null,"./public/uploads")//"./public/uploads" 文件上传的地址
    },
    filename:function(req,file,callback){
        let flieformat=(file.originalname).split(".");
        callback(null,flieformat[0]+"-"+Date.now()+"."+flieformat[flieformat.length-1],"./public/uploads");
    }
})

const upload=multer({
    storage:storage
});

module.exports=upload;