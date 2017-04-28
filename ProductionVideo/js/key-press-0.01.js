
var hght = 250;
var timerid = null;
function move()
{
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
document.getElementById('fish1').style.right = parseInt(document.getElementById('fish1').style.right) + 1 + 'px'; 
document.getElementById('fish2').style.right = parseInt(document.getElementById('fish2').style.right) + 2 + 'px'; 
sleep(50);
document.getElementById('fish3').style.right = parseInt(document.getElementById('fish3').style.right) + 1 + 'px'; 
}
window.onload=function()
{ 


            document.getElementById('button1').onclick=function(){
                if(timerid == null){
                    timerid = setInterval("move()", 1);
                }else{
                    clearInterval(timerid);
                    timerid = null;
                }
            }  



            var button2 = document.getElementById('button2');
            button2.onclick= reloadPage;
             
             function reloadPage(){
                    window.location.reload();
                }
  

            document.getElementById('button3').onclick=function(){
                if(timerid == null){
                    timerid = setInterval("move()", 10);
                }else{
                    clearInterval(timerid);
                    timerid = null;
                }
            }



            var button4 = document.getElementById('button4');
            button4.onclick= reloadPage;
             
             function reloadPage(){
                    window.location.reload();
                }
}

