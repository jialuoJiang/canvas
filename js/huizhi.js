/**
 * Created by MLS on 15/10/20.
 */

var WINDOW_HEIGHT=768;
var WINDOW_WIDTH=1224;
var RADIUS=8;
var MARGIN_TOP=60;
var MARGIN_LEFT=30;

const endTime=new Date(2015,11,19,23,47,52);
var curShowTimeSeconds=0;

window.onload=function(){
    var canvas=document.getElementById("canvas");
    var context=canvas.getContext("2d");

    canvas.width=WINDOW_WIDTH;
    canvas.height=WINDOW_HEIGHT;
    curShowTimeSeconds=getCurrentShowTimeSeconds();
    render(context)
}

function curShowTimeSeconds(){
    var curTime=0;
}

function render(ctx){

    var hours=12;
    var minutes=34;
    var seconds=56;
    renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),ctx);
    renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(hours%10),ctx)
    renderDigit(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,ctx);
    renderDigit(MARGIN_LEFT+45*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),ctx);
    renderDigit(MARGIN_LEFT+60*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),ctx)
    renderDigit(MARGIN_LEFT+75*(RADIUS+1),MARGIN_TOP,10,ctx);
    renderDigit(MARGIN_LEFT+90*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),ctx);
    renderDigit(MARGIN_LEFT+105*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),ctx)
}

function renderDigit(x,y,num,ctx){
    ctx.fillStyle="#DdF";
    for(var i=0;i<digit[num].length;i++){
        for(var j=0;j<digit[num][j].length;j++){
            if(digit[num][i][j]==1){
                ctx.beginPath();
                ctx.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);
                ctx.closePath();
                ctx.fill();
            }
        }
    }
}