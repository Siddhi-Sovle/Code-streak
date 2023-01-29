function Rand(){
  a = Math.floor(Math.random()*6) + 1;
  return a;
}


setInterval(function(){
  b = Rand();
  console.log(b)
  if(b==3){
    document.getElementsByClassName("whatsapp")[0].style.visibility = "visible";
  }
  else{
    document.getElementsByClassName("whatsapp")[0].style.visibility = "hidden";

  }
},1000)
