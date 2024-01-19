let num = [5, 2, 4, 7, 9]
pos = 0 
//com WHILE
while (pos!=num.length){
    console.log(num[pos])
    pos = pos + 1
}
//com FOR
for(var pos = 0;pos!=num.length;pos = pos + 1){
    console.log(num[pos])
}
//FOR simplificado
for(var pos in num){
    console.log(num[pos])
}
console.log(num.indexOf(22))
