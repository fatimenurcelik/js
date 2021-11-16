function findPrime(...numbers) {
    for (let index = 0; index < numbers.length; index++) {
        if(numbers[index] == 1){
            console.log(numbers[index] + " asal değildir")
        }else if(numbers[index] == 2){
            console.log(numbers[index] + " asaldır")
        }else{
            let flag=0
            for(let i =2; i < numbers[index]; i++){
                let x;
                x = numbers[index] / i
                if(x % 1 == 0){
                    console.log(numbers[index] + " asal değildir")
                    flag=1;
                    break;
                }else{
                    flag=0;
                }
            }
            if(flag == 0){
                console.log(numbers[index] + " asaldır")
            }
        }
    }
}
findPrime(1)
console.log("********")
findPrime(1,20)
console.log("********")
findPrime(1,5,50)
console.log("********")
findPrime(1,5,50,3,13)
console.log("--------------")

function friendNumber(number1, number2){
    let sum1 =0;
    let sum2 =0;
    for(let i =1; i < number1; i++){
        let x;
        x = number1 / i
        if(x % 1 == 0)
            sum1 += i
    }
    //console.log("sum1 : "+sum1)
    for(let i =1; i < number2; i++){
        x = number2 / i
        if(x % 1 == 0)
            sum2 += i
    }
    //console.log("sum2 : "+sum2)
    if(sum1 == number2 && sum2 == number1){
        console.log(number1 +" ve "+ number2 + " arkadaş sayılardır")
    }else{
        console.log(number1 +" ve "+ number2 + " arkadaş sayılar değillerdir")
    }
}
friendNumber(220,284)
friendNumber(200,284)
console.log("--------------")

function perfectNumbers(){
    let sum = 0;
    for(let i =1; i < 1000; i++){
        for(let j = 1; j<=i ; j++){
            let x;
            x=i/ j
            if(x % 1 == 0)
                sum += j
        }
        if(sum == i*2){
            console.log(i + " mükemmel sayıdır")
        }
        sum=0
    }
}
perfectNumbers()
console.log("-------------")

function primeNumbers(){
    for(let i =1; i < 1000; i++){
        if(i == 1){
        }else if(i == 2){
            console.log(i + " asaldır")
        }else{
            let flag=0
            for(let index =2; index < i; index++){
                let x;
                x = i / index
                if(x % 1 == 0){
                    flag=1;
                    break;
                }else{
                    flag=0;
                }
            }
            if(flag == 0){
                console.log(i+ " asaldır")
            }
        }
    }
}
primeNumbers()
