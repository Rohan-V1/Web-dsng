function animateSS()
{
    var ss=document.getElementById('solarSystem');
    var ssContext=ss.getContext('2d');
    ssContext.clearRect(0,0,450,400);
    ssContext.fillStyle="blue";
    ssContext.fillRect(0,0,450,400);
    ssContext.save();
    ssContext.translate(220,200);
    ssContext.fillStyle="Yellow";
    ssContext.beginPath();
    ssContext.arc(0,0,25,0,Math.PI*2,true);
    ssContext.fill();
    ssContext.strokeStyle="black";
    ssContext.beginPath();
    ssContext.arc(0,0,150,0,Math.PI*2);
    ssContext.lineWidth="1";
    ssContext.stroke();
    var now=new Date();
    var seconds=((now.getSeconds()*1000)+now.getMilliseconds())/1000;
    var anglePerSecond=((Math.PI*2)/60);
    ssContext.rotate(anglePerSecond*seconds);
    ssContext.translate(150,0);
    ssContext.fillStyle="green";
    ssContext.beginPath();
    ssContext.arc(0,0,10,0,Math.PI*2,true);
    ssContext.fill();
    anglePerSecond=12*((Math.PI*2)/60);
    ssContext.rotate(anglePerSecond*seconds);
    ssContext.translate(0,35);
    ssContext.fillStyle="white";
    ssContext.beginPath();
    ssContext.arc(0,0,5,0,Math.PI*2,true);
    ssContext.fill();
    ssContext.restore();
}
setInterval(animateSS,100);
