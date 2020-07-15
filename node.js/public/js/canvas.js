let bigcanvas=document.getElementById("mycanvas").getContext("2d");
let newcanvas;
$("#uploadimg").change(function(){
    // console.log("uploadimg")
    let imgfile=$("#uploadimg")[0].files[0];
    let reader=new FileReader();
    reader.readAsDataURL(imgfile);
    reader.onload=function(){
        console.log($("#cutbox"));

        $("img")[0].src=this.result;
        $("#myimg")[0].onload=function(){
            bigcanvas.drawImage($("#myimg")[0],0,0,500,500,0,0,500,500);
        }
    }

});

$("#cutbox").on("mousedown",function(e){
    if($("#uploadimg")[0].files.length==0){
        alert("请选择图片")
    }else{
        let clickE=e;
        $(this).on("mousemove",function(e){
            let curentE=e;
            $(this).css({
                left:curentE.clientX-clickE.offsetX+"px",
                top:curentE.clientY-clickE.offsetY+"px"
            });
            if(parseInt($(this).css("left"))<=10){
                $(this).css("left","10px");
            }
            if(parseInt($(this).css("left"))>=238){
                $(this).css("left","238px");
            };
            if(parseInt($(this).css("top"))<=0){
                $(this).css("top","0px");
            };
            if(parseInt($(this).css("top"))>=230){
                $(this).css("top","230px");
            }
            

        })
    }
});
$(document).on("mouseup",function(){
    $("#cutbox").off("mousemove");
    $("#imgshow").html("<h1>预览</h1><canvas id='newcanvas' width='270' height='270'></canvas>");
    newcanvas=$("#newcanvas")[0].getContext("2d");

    let cutboxleft=$("#cutbox").position().left;
    let cutboxtop=$("#cutbox").position().top;

    let imgdata=bigcanvas.getImageData(cutboxleft,cutboxtop,270,270);
    console.log(imgdata);
    
    newcanvas.putImageData(imgdata,0,0)
    
});
$("#btnsave").click(function(){
    let imgdataurl=$("#newcanvas")[0].toDataURL();
    console.log(imgdataurl);
    $.ajax({
        type:"post",
        url:"/uploadsss.do",
        data:{
            imgdata:imgdataurl
        },
        success:function(data){
            console.log(data);
            
        }
    })
})