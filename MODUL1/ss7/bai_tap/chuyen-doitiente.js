function ChangeMoney() {
    let a = document.getElementById("Amount").value;
    let b = document.getElementById("From Currency").value;
    let c = document.getElementById("To Currency").value;
    let result
    if(b == "VND" && c =="USD"){
        result = a/23000
    }

    else if( b == "USD" && c == "VND" ){
        result = a*23000
    }

    else if ( b == "VND" && c == "VND" ){
        result = a
    }

    else if( b == "USD" && c == "USD" ){
        result = a
    }
    document.getElementById('result').innerHTML ='Result = '+ result;
}