function calcular(cal){
  if (cal == 1){
      return 1
  }
  else{
      return cal * calcular(cal - 1)
  }
}
function fatorial(num){
  return calcular(num)
}
var n = 5 
var final = fatorial(n)
console.log(final)

