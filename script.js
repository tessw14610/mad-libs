function myFunction() {
  var adjective = document.getElementById("adjective1").value;
  var noun = document.getElementById("noun").value;
  var adjective2 = document.getElementById("adjective2").value;
  var adjective3 = document.getElementById("adjective3").value;
  var verb = document.getElementById("verb").value;
    document.getElementById("demo").innerHTML = "Once upon a time, there was a(n) <b>"+adjective+" "+noun+"</b>. This <b>"+noun+"</b> went camping and <b>"+adjective2+"</b> kids started to harass the <b>"+noun+"</b> for being <b>"+adjective3+"</b>. In fury, the <b>"+noun+" "+verb+"</b> them, and in shame, went home and cried.";
}
alert ("Welcome guests!")
