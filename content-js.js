function nameFunction() {

        var name = prompt ('Hi there, nice to see you on our site. What should we call you? :)');

        if (name != null) {                  

        document.getElementById("name").innerHTML ="Hello " + name + "! How are you today?";

        var contact = confirm (' would you like us to contact you for help? :)');
        
        if (contact == true) {
           alert("Thanks! will contact you ASAP :)") ;
          } else {
            alert("Feel free to contact us any time :)") ;;
          }
        

        }                                  
}

