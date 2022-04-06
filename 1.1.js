let min = Number (prompt("Enter a minimal number"));

let max =Number(prompt("Enter a maximal number"));

let  cur = Number (prompt("Enter a current number"));

if ((cur >= min) && (cur <= max)) {
  alert("The number is between" + " " + min + " " + "and" + " " + max);
} else {
  alert(
    "Please don't be dumb enter a number between" + " " + min + " " + "and" + " " + max);
}


// Why i need to write 0 before 1 for do 10 ?
