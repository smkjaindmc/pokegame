var c=document.querySelector(".am");
var d=document.querySelector(".why");
var m=document.querySelector(".dom")
c.onclick= function(){
    if(d.className == "why"){
        d.className="quo";
        m.style.display="initial"
        c.innerHTML="Show less"
    }else{
        d.className="why";
        m.style.display="none";
        c.innerHTML="Show more"
    }
}
var col=["red","blue","green","yellow","pink","grey"];
c=0;
function show(){
    if(c>=col.length){
        c=0;
    }
    d.style.background=col[c];
    c++;
}
var k=setInterval(show,1000);
d.onclick= function(){
    clearInterval(k);
    k.innerHTML="<h1>focus</h1>";
}
var v=document.querySelector(".mat");
v.onfocus= function(){
    v.style.border="2px solid red";
}
v.onblur= function(){
    v.style.border="none";
}