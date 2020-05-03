var employees;

function nameFunction() {

  var name = prompt('Hi there, nice to see you on our site. What should we call you?:)');

  if (name == String || name != "") {

    var contact = confirm(' would you like us to contact you for help? :)');

    if (contact == true) {
      alert("Thanks! will contact you ASAP :)");
    } else {
      alert("Feel free to contact us any time :)");
    }

    return "Hello " + name + "! How are you today?";

  } else {

    alert("Name must be filled out");
  }


}

function icons() {

  var icon=1;

  employees = prompt('how many employees are in your company?:)');

  for (var i = 0; i < employees; i++) {

    icon = icon +'<img src ="images/user.png"/>';

  }
  return icon;
}