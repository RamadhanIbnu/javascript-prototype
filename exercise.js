// Soal No.1

// Buatlah method pada string yang dapat mengembalikan nilai string itu sendiri dalam keadaan terbalik

// Contoh:

// thor -> roht

// rusak -> kasur

String.prototype.reverseString = function(str){
    return str.split("").reverse().join("");
}

console.log(String.prototype.reverseString("ibnu"))


// Soal No.2

// Buatlah method pada number bernama ‘isPrima()’ yang dapat
// mengembalikan nilai boolean ‘true’ jika number tersebut
// merupakan bilangan prima

// Contoh:

// 7.isPrima() -> true

// 6.isPrima() -> false

Number.prototype.isPrima = function(n){
    if (n % 2 == 0){
        console.log("nilai yang anda masukan bukanlah bilangan prima")
    }
        else{
            console.log("nilai yang anda masukan adalah bilangan prima")
        }
}

console.log(Number.prototype.isPrima(5))