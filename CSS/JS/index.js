
function showData(){
    let num1=document.getElementById("n1");
    let num2=document.getElementById("n2");


    let res=parseInt(num1.value)+parseInt(num2.value);
   console.log(res);
    document.getElementsById("n3").textContent= res;
}