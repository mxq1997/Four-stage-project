const userdao=require("../dao/userdao");
const productcontroller= {
    buy(req, resp) {
        console.log("=============================");
        console.log(req.session.username);
        let username=req.session.username;
        if(req.session.username!=undefined&&req.session.username!=null){//有保存
            resp.render("buybuybuy",{username:username});
        }else{
            resp.redirect("sclogin.html");
        }


    }
};
module.exports=productcontroller;