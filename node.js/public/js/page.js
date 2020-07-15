let currentPage=1;
let pageTotal=0;

window.onload=function(){
        getAllStudent();
        getPageTotal();
};
function getAllStudent(){
         myAjax("get","/getStudent1.do","currentPage="+currentPage,showStudent,false);

}
function getPageTotal(){
myAjax("get","/getPageTotal.do","",function () {
        let data=JSON.parse(xhr.responseText);
        console.log(data);
        pageTotal=data;
        document.getElementById("totalPage").innerHTML=currentPage+"/"+pageTotal;
    })
}
function nextPage(){
    currentPage++;
    if(currentPage>pageTotal){
        alert("已经是最后一页了");
        currentPage=pageTotal
    }else{
        getAllStudent()
        document.getElementById("totalPage").innerHTML=currentPage+"/"+pageTotal;
    }

}
function prevPage(){
    currentPage--;
    if(currentPage<=0){
        alert("已经是最新一页了");

    }else{
        getAllStudent()
        document.getElementById("totalPage").innerHTML=currentPage+"/"+pageTotal;
    }
}
function showStudent() {
        console.log(xhr.responseText);
        let data=JSON.parse(xhr.responseText);
        document.getElementById("studentTable").innerHTML="";

        for(let i=0;i<data.length;i++){
        document.getElementById("studentTable").innerHTML+=`<tr>
        <td>${data[i].s_id}</td>
        <td>${data[i].s_name}</td>
        <td>${data[i].s_grade}</td>
        <td>${data[i].s_classid}</td>
        <td>${data[i].s_sex}</td>
        </tr>`;
            }
        }