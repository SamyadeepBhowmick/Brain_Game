var n;
var person=new Array();
var person1=new Array();
function limit(){
    var str1;
    str1=prompt("Enter the limit");
    while(str1.length == 0 || !(str1.charCodeAt(0)>47 && str1.charCodeAt(0)<58)){
        str1= prompt("Enter any number");     
    }
    n=parseInt(str1);
    document.getElementById("demo1").innerHTML = null;
    mFunction();
}

function mFunction() { 
    for (i=0; i<n; i++)
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

    document.getElementById("abc").disabled=true;


}
function myFunction(){
    document.getElementById("demo").innerHTML = "";
    var str;
    for (i=0; i<n; i++)
    {
                        
        str = prompt("Enter the sequence number:"+(i+1));
        while(str.length != 1 || !(str.charCodeAt(0)>47 && str.charCodeAt(0)<58)){
            str= prompt("Wrong Input!\nEnter only one numeric character.\nFor Example:3");     
        }
        person1[i]=parseInt(str);
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
    document.getElementById("abc").disabled=false;
    document.getElementById("abcd").style.visibility="hidden";
    person=new Array();
    person1=new Array();
}