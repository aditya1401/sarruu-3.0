var count=0;
function nextButtonAppear(){
  document.getElementById("message-ref").style.cssText="display:block";
  document.getElementById("nextButton").style.display="block";
  document.getElementById("no").style.display="none";
  document.getElementById("yes").style.display="none";
}

function styling(){
    let value = document.getElementById("no").style.float;
    count+=1;
    if(value==="left"){
        document.getElementById("no").style.float="right";
    }
    else{
      document.getElementById("no").style.float="left";
    }
    console.log(count);
    if(count===2){
      document.getElementById("popUp").style.display="block";
    }
    else if(count>2 && count<=4){
      document.getElementById("demo").innerHTML="Last Chance Diya tha na, no more No";
      document.getElementById("popUp").style.display="block";
    }
    else if(count>4 && count<=6){
      document.getElementById("demo").innerHTML="Ek baar me samaj nhi aata";
      document.getElementById("popUp").style.display="block";
    }
    else if(count>6){
      document.getElementById("demo").innerHTML="fir mars pr chli gye";
      document.getElementById("popUp").style.display="block";
    }
}

function hide(){
  document.getElementById("popUp").style.display="none";
}
