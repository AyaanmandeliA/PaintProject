canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);
var mouseEvent="empty";
radius=5;

function my_mousedown(e){

    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    console.log(color);
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_X=e.clientX - canvas.offsetLeft;
    current_position_of_Y=e.clientY - canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        ctx.arc(current_position_of_X , current_position_of_Y , radius ,0,2*Math.PI);
        ctx.stroke();
    }
}

function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}