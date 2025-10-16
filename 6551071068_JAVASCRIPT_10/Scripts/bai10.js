var display = document.getElementById("display");
document.addEventListener("keydown", function(e) {
  var key = e.key;
  if (/[0-9+\-*/]/.test(key)) {
    display.value += key;
  } else if (key === "Enter") {
    tinhToan_DOM();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape") {
    display.value = "";
  }
});
function tinhToan_DOM() {
  var exp = display.value.trim();
  var pattern = /^(\d+)\s*([+\-*/])\s*(\d+)$/;
  var match = exp.match(pattern);
  if (!match) {
    alert("Biểu thức không hợp lệ (DOM). Vui lòng nhập như: 12+3");
    return;
  }
  var a = parseFloat(match[1]);
  var op = match[2];
  var b = parseFloat(match[3]);
  var result = 0;
  switch (op) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/':
      if (b === 0) { alert("Không thể chia cho 0 (DOM)!"); return; }
      result = a / b;
      break;
  }
  display.value = result;
}
$(document).ready(function() {
  $(".btn").click(function() {
    var val = $(this).text();
    if (val === "=") {
      var exp = $("#display").val().trim();
      var pattern = /^(\d+)\s*([+\-*/])\s*(\d+)$/;
      var match = exp.match(pattern);
      if (!match) {
        alert("Biểu thức không hợp lệ (jQuery).");
        return;
      }
      var a = parseFloat(match[1]);
      var op = match[2];
      var b = parseFloat(match[3]);
      var result = 0;
      switch (op) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/':
          if (b === 0) { alert("Không thể chia cho 0 (jQuery)!"); return; }
          result = a / b;
          break;
      }
      $("#display").val(result);
    } else if (val === "C") {
      $("#display").val("");
    } else {
      $("#display").val($("#display").val() + val);
    }
  });
});
