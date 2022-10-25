function perimeter(a, b){
    let p=2*(a+b)
    console.log(p)
}

perimeter(5, 7)

function sumSquares(a, b){
    let s=(a*a) + (b*b)
    console.log(s)
}

sumSquares(5, 7)

function checkNumber(n){
    if (n > 0) {
    console.log("The given number:", n, " is positive")
    }

    else if (n==0) {
    console.log("The given number:", n, " is 0")
    }

    else { 
    console.log("The given number:", n, " is negative")
        }
}

checkNumber(-1)
