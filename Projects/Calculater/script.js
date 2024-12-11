let currval = "";

function addval(btn) {
  if (btn.value === "c") {
    currval = "";
  } else {
    currval += btn.value;
  }
  document.querySelector("#display").value = currval;
}

function equals() {
  document.querySelector("#display").value = eval(currval);
}
