$(document).ready(function() {
  $("form#creature").submit(function(event) {
    event.preventDefault();
var animal = $("#a1").val();
if (animal === "choose one") {
  $("#animal1").hide();
  $("#animal2").hide();
  $("#animal3").hide();
} else if (animal === "snake") {
  $("#animal2").show();
  $("#animal1").hide();
  $("#animal3").hide();
} else if (animal === "insects") {
  $("#animal3").show();
  $("#animal1").hide();
  $("#animal2").hide();
} else {
  $("#animal3").hide();
  $("#animal1").show();
  $("#animal2").hide();
}
});
});
