const express=require("express");
const fs=require("fs");
const studentcontroller=require("../controller/studentcontroller")
const filecontroller=require("../controller/filecontroller")
const upload=require("../config/fileconfig")
const productcontroller=require("../controller/productcontroller")

const router=express.Router();

const usercontroller=require("../controller/usercontroller")

router.post("/login.do",usercontroller.getUser)

router.get("/addstudent.do",studentcontroller.addstudent);


router.get("/checkuser.do",usercontroller.checkuser);

router.get("/getalluser.do",usercontroller.getalluser);

router.get("/deleteuser.do",usercontroller.deleteuser);

router.post("/searchuser.do",usercontroller.searchuser);

router.get("/getuser.do",usercontroller.getuserbyid)

router.get("/getStudent.do",usercontroller.getStudent);

router.get("/mySearch.do",usercontroller.seartstudent);

router.get("/getPageTotal.do",usercontroller.getPageTotal);

router.get("/getStudent1.do",usercontroller.getStudent1);
// router.post("/checkuser.do",usercontroller.checkuser1);

//文件上传
router.post("/upload.do",upload.single("myfile"),filecontroller.uploads);

router.get("/getImage.do",filecontroller.getImages);


router.post("/uploads.do",upload.array("myFiles"),filecontroller.uploadss);

router.get("/fileDownload.do",(req,resp)=>{
    resp.download("./public/uploads/1.png","2.png")
})

router.post("/sclogin.do",usercontroller.sclogin);

router.get("/buy.do",productcontroller.buy);

router.get("/deleteUser.do",usercontroller.deleteUserMsg);

router.get("/vip.html",(req,resp,next )=>{
    if(req.session.username==undefined){
        resp.redirect("sclogin.html");
    } else{
        next();
    }
 });
//6.17
 router.post("/uploadsss.do",filecontroller.uploads1)
module.exports=router;