const db=require("../config/dbpoolconfig");
const studentcontroller={
    addstudent(req,resp){
      let s_name=req.query.s_name;
      let s_phone=req.query.s_phone;
      let s_sex=req.query.s_sex;
      let s_age=req.query.s_age;
      let s_grade=req.query.s_grade;
      let s_classid=req.query.s_classid;
       db.connect("insert into student values(?,?,?,?,?,?,?)",
       [null,s_name,s_phone,s_sex,s_age,s_grade,s_classid],
       (error,data)=>{
        console.log(error);
        console.log(data)
       })
    }
}
module.exports=studentcontroller;