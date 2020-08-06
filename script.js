//Calculate Tip
function calculateTip() {
  var bill = document.getElementById("bill").value;
  var service = document.getElementById("service").value;
  var people = document.getElementById("people").value;

  //validate input
  if (bill === "" || service == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (people === "" || people <= 1) {
    people = 1;
    document.getElementById("totalPrice").style.display = "none";
  } else {
    document.getElementById("totalPrice").style.display = "block";
  }

  //Calculate tip
  let base = bill / people;
  let tip = base * service
  let total = base + tip
  //round to two decimal places
  // let t= Math.round(base * 100) / 100;

  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalPrice").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalPrice").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};