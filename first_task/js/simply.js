var str = [];
answer:
    for (var i = 1; i <= 1001; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue answer;
        }
        str.push(i);
}
     
console.log(str);


