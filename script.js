function vypisPosloupnosti() {
  let s = "while: ";
  let i = 0;
  while (i < 10) {
    s = s + i + " ";
    i++; 
  }
  s = s + "<br>for: ";
  for (let i = 0; i < 10; i++) {
    s = s + i + " ";
  }
  document.getElementById("vystup").innerHTML = s;
}
function soucetCisel() {
  let n = document.getElementById("n").valueAsNumber;
  let sum1 = 0;
  for (let i = 1; i <= n; i++) {
    sum1 += i;
  }
  let s = "sum1="+sum1+"<br>";
  let sum2 = n*(n+1)/2;
  s += "sum2="+sum2+"<br>";
  if (sum1 == sum2) {
    s += "výsledky se shodují<br>";
  } else {
    s += "<b style='color:red'>něco je špatně</b><br>";
  }

  document.getElementById("vystup2").innerHTML = s;
}
