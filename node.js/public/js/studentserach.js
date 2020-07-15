window.onload=function () {
    getAllStudent();
};

function  getAllStudent() {
    myAjax("get","/getStudent.do","",showStudent);

}


function searchStudent() {
    let s_name=document.getElementById("s_name").value;
    let s_id=document.getElementById("s_id").value;
    let s_grade=document.getElementById("s_grade").value;
    let s_sex=document.getElementById("s_sex").value;

    console.log(s_name+s_id+s_grade+s_sex);

    myAjax("get","/mySearch.do","s_name="+s_name+"&s_id="+s_id+"&s_grade="+s_grade+"&s_sex="+s_sex,showStudent)

}



function showStudent() {
    console.log(xhr.responseText);
    let data=JSON.parse(xhr.responseText)
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