$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("#numberInput").val());
    for (var i=num; i>1; i-= 1) {
      num = num* (i-1);
      console.log(num);
    }
    $(".answer").text(num)
  });
});

//line 4 - num will equal what you put in the form
// for loop - var i = form num. It will loop -1 until it reaches 1 (5,4,3,2,1)
//It will stop at one so it doesn't multiply by 0
//Inside the for loop, the num variable will keep being redefined (20,60,120)
