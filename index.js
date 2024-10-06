let firstEven = 20;
for(i = 1; i <= firstEven ; i++){
    if(i % 2 == 0 ){
        console.log(i);
        continue;
    }
}

for(j = 1; j <= firstEven ; j++){
    if(j % 2 !== 0 ){
        console.log(j);
        continue;
    }
}

let myNumber = 47;
for(i = 2; i <= myNumber/2 ; i++){
    if(myNumber % i !== 0 ){
        console.log(myNumber, "is prime");
    } else {
        console.log(myNumber, "is NOT prime");
    } break;
}

let multipliers3and5 = 100;
let sum = 0;
for(i = 0; i <= multipliers3and5 ; i++){
    if(i % 3 == 0 || i % 5 == 0){
        console.log(i);
        continue;
    }

    sum += i;
}   console.log("Suma primelor ",multipliers3and5, " divizibile", 
                " cu 3 sau 5 este: ", sum);

let sirul1 = ["ala", "bala", "portocala", "ce-ai", "mancat"];
for(i = 0; i < sirul1.length; i++) {
    console.log("word: ",sirul1[i]);
    continue;
}

