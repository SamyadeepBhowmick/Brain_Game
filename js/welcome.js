var n;
var person=new Array();
var person1=new Array();
function limit(){
    n=prompt("Enter the limit");
    mFunction(n)
}

function mFunction(v) { 
    for (i=0; i<v; i++)
    {
        //person[i] = prompt("Enter  the numbers");
        person[i] = Math.floor(Math.random() * 10);
    }

    document.getElementById("demo").innerHTML=person;



    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();


var x = setInterval(function() {

  
  var now = new Date().getTime();


  var distance = 5-now;

  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Time Up";
  }
}, 5000);


}
function myFunction(){
    document.getElementById("demo").innerHTML = "";
    for (i=0; i<n; i++)
    {
                        
        person1[i] = prompt("Enter the sequence numbers");
    }
    var nw;
    nw=0;
    for (i=0; i<n; i++)
    {
        if(person[i]!=person1[i]){
            nw++;
        }   
    }
    if(nw>0){
        alert("Sequence not Correct");
    }

    document.getElementById("demo").innerHTML =person;
    
}