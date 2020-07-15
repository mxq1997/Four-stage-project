// const mysql=require("mysql")
// const database=require("../config/dbconfig")

const db=require("../config/dbpoolconfig")

const userdao=require("../dao/userdao")

const usercontroller={

    checkuser(req,resp){
        console.log(req.query.username)
        let username=req.query.username;
        db.connect("select * from student where s_name=?",
        [username],
        (error,data)=>{
            if(!error){
                console.log(data.length);
                if(data.length>0){
                    resp.send("该用户名已经被注册了")
                }else{
                    resp.send("用户名可以使用")
                }
            }
            else{
                resp.send(error.message)
            }
        }
        )
    },
    checkuser1(req,resp){
        console.log(req.body.username)
        let username=req.body.username;
        db.connect("select * from student where s_name=?",
        [username],
        (error,data)=>{
            if(!error){
                console.log(data.length);
                if(data.length>0){
                    resp.send("该用户名已经被注册了")
                }else{
                    resp.send("用户名可以使用")
                }
            }
            else{
                resp.send(error.message)
            }
        }
        )
    },
    getUser(req,resp){
        // console.log("接收到任务")
        // console.log(req)
        let username=req.body.username;
        let password=req.body.password;
        // const db=database.dbconfig();
        // const db=mysql.createConnection({
        //     host:"localhost",
        //     port:"3306",
        //     user:"root",
        //     password:"root",
        //     database:"login"
        // })
        db.connect("SELECT * FROM login WHERE l_usernmae=? AND l_password=?",
        [username,password],
        (error,data)=>{
            console.log(error);
            console.log(data);
            if(error==null&&data!=undefined){
                if(data.length>0){
                    resp.redirect("login.html")
                }else{
                    resp.send("登录失败")
                }
            }else{
                resp.send(error.message)
            }
        }
        
        );
        
        // db.query("SELECT * FROM login WHERE l_usernmae=? AND l_password=?",[username,password],
        // (error,data)=>{
        //     if(error==null&&data!=undefined){
        //         if(data.length>0){
        //             resp.redirect("login.html")
        //         }else{
        //             resp.send("登录失败")
        //         }
        //     }
        //     else{
        //         resp.send("数据库报错"+error.message)
        //     }
        // });
        // db.end();
        
       
        
    },
    getalluser(req,resp){
        db.connect("select * from login",
        [null],
        (error,data)=>{
            // console.log(error);
            // console.log(data);
           resp.send(data)
        //    console.log(data)
        })
    },
    deleteuser(req,resp){
        console.log(req.query)
        db.connect("delete from login where l_id=?",
        [req.query.id],
        (error,data)=>{
          if(error){
              console.log(error)
              console.log(data)
          }
            
        }

        )
    },
    searchuser(req,resp){
        // console.log("===")
        // console.log(req.body.username)
        let username=req.body.username;
        
        db.connect("select * from login where l_usernmae like ?",
        ["%"+username+"%"],
        (error,data)=>{
            // console.log(data)
            resp.send(data)

        })
    },
    getuserbyid(req,resp){
        console.log(req)

        let userid=req.query.id;
        db.connect("select * from login where l_id=?",
        [userid],
        (error,data)=>{
            resp.send(data)
        }
        )
    },
    getStudent(req,resp){
         db.connect("select * from student",
         [null],
         (error,data)=>{
             resp.send(data)
         })
    },
    seartstudent(req,resp){
        let s_name=req.query.s_name||"";
        let s_id=req.query.s_id||"";
        let s_grade=req.query.s_grade||"";
        let s_sex=req.query.s_sex||"";
        console.log(s_name+s_id+s_grade+s_sex);
        let sql="select * from student where 1=1 ";
        let params=[];
        if(s_name!=""){
            sql+="and s_name like ?"
            s_name="%"+s_name+"%";
            params.push(s_name);
        }
        if(s_id!=""){
            sql+=" and s_id=?"
            params.push(s_id);
        }
        if(s_grade!=""){
            sql+=" and s_grade=?"
            params.push(s_grade);
        }
        if(s_sex!=""){
            sql+=" and s_sex=?"
            params.push(s_sex);

        }
        db.connect(sql,params,(error,data)=>{
            resp.send(data)
        })
    },
    getStudent1(req,resp){
        console.log(req.query.currentPage);
        let pageCount=4; 
        let currentPage=req.query.currentPage; 
        let sql="select * from student limit ?,?";
        db.connect(sql,[(currentPage-1)*pageCount,pageCount],(err,data)=>{
            console.log(data);
            console.log(err);
            resp.send(data);
        })
    },
    getPageTotal(req,resp){
        let pageCount=4;
        db.connect("select count(*) as totalcount from student",[],(err,data)=>{
            let result=Math.ceil(data[0].totalcount/pageCount);
            result=String(result);
           // console.log(result);
            resp.send(result);


        })

    },
    //6.15
    sclogin(req,resp){
        // console.log("/////");
        
        // console.log(req)
        let username=req.body.username;
        let password=req.body.password;
        // console.log(username,password)
        userdao.check([username,password])

        .then((data)=>{
            console.log("===");
            console.log(data);
            console.log("****");
            
            console.log(req);
            console.log("777777");
            
          
            console.log(data[0].username);
            
           req.session.username=data[0].username;
             resp.render("index",{username:data[0].username})
            
            
        })


    },
    deleteUserMsg(req,resp){
        // req.session.username=null;
 
         req.session.destroy();
         resp.redirect("sclogin.html");
 
     }
     

};
module.exports=usercontroller;