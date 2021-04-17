function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var ans=document.getElementById("result");
    ans.innerHTML="if you deposit "+ principal  +"<br>"+
                " at an intrest rate of " + rate +"<br>"+
                "you will receive an amount of "+ interest +"<br>"+
                "in the year "+year;


    
}
function newintrest()
{
    var ans=document.getElementById("rate_val");
    ans.innerHTML=document.getElementById("rate").value+"%";
    
}      