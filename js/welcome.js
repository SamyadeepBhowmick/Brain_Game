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
        person[i] = Math.floor(Math.random() * 10);
    }

    document.getElementById("demo").innerHTML=person;



    var x = setInterval(function() {

    
    var now = new Date().getTime();


    var distance = 5-now;

    
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "Time Up";
            document.getElementById("abcd").style.visibility = "visible";
        }
    }, 5000);

    //document.getElementById("abcd").style.visibility = "visible";
    document.getElementById("abc").disabled=true;


}
function myFunction(){
    document.getElementById("demo").innerHTML = "";
    for (i=0; i<n; i++)
    {
                        
        person1[i] = prompt("Enter the sequence number:"+(i+1));
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
    else{
        alert("Sequence Correct");
    }

    document.getElementById("demo").innerHTML ="Random Sequence was:    "+person;
    document.getElementById("demo1").innerHTML ="Your Input Sequence is:  "+person1;
    document.getElementById("abcd").disabled=true;
    
}