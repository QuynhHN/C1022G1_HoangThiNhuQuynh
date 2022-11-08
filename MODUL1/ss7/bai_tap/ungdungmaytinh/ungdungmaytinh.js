function addition(){
   let a=parseInt(document.getElementById('a1').value);
   let b=parseInt(document.getElementById('a2').value);
   alert(a)
   alert(b)
   result= a + b
    document.getElementById('N').innerHTML ='Result Addition'+ result;
}
function subtraction() {
    let a=parseInt(document.getElementById('a1').value);
    let b=parseInt(document.getElementById('a2').value);
    result= a - b
    document.getElementById('N').innerHTML ='Result Subtraction'+ result;
}
function multiplication() {
    let a=parseInt(document.getElementById('a1').value);
    let b=parseInt(document.getElementById('a2').value);
    result= a * b
    document.getElementById('N').innerHTML ='Result Multiplication'+ result;
}
function division() {
    let a=parseInt(document.getElementById('a1').value);
    let b=parseInt(document.getElementById('a2').value);
    result= a / b
    document.getElementById('N').innerHTML ='Result Division'+ result;
}
