// 0 100 200 300 400 500
for (var i = 0; i <= 5; i++) {
    console.log(i*100)
}

// 1 2 4 8 16 32 64
for (var i = 0; i <= 5; i++) {
    console.log(Math.pow(2,i))
}

// 1 1 1 2 2 2 3 3 3
for (var i = 1; i <= 9; i++) {
    console.log(Math.floor(1+i*.33))
}

// 0 2 4 6 8 10
for (var i = 0; i <= 5; i++) {
    console.log(i*2)
}

// 3 6 9 12 15
for (var i = 1; i <= 5; i++) {
    console.log(i*3)
}

// 9 8 7 6 5 4 3 2 1 0
for (var i=9; i>=0; i--){
    console.log(i)
}

// 0 1 2 3 0 1 2 3 0 1 2 3
for (var i = 0; i <=2; i++){
    for (var n=0; n<=3; n++){
        console.log(n)
    }
}