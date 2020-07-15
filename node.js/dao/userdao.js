const db=require("../config/dbpoolconfig");
const { resolve } = require("path");
const { rejects } = require("assert");

const userlogin={
    check(params){
        return new Promise((resolve,rejects)=>{
            db.connect("select * from login where username=? and password=?",
            params,
            (err,data)=>{
                // console.log(err);
                // console.log(data);
                if(!err){
                    if(data.length>0){
                        // console.log(data[0].username);
                        // console.log("-----");
                        
                        // console.log(data);
                        
                        resolve(data);
                    }
                }
            })
        }

        )
    }
};


module.exports=userlogin;