var getData = function (){
    var name = document.getElementById("nameClient").value;
    var lastName = document.getElementById("lastNameClient").value;
    var email = document.getElementById("emailClient").value;
    var typeService = document.getElementById("typeService").value;

    if(name == ""){
        document.getElementById("nameClient").focus();
    } else { 
        if(lastName == ""){
            document.getElementById("lastNameClient").focus();
        } else {
            if(email == ""){
                document.getElementById("emailClient").focus();
            } else {
                if(typeService == ""){
                    document.getElementById("typeService").focus();
                } else {
                    alert("Su informacion fue enviada");
                    document.getElementById("nameClient").value = "";
                    document.getElementById("lastNameClient").value = "";
                    document.getElementById("emailClient").value = "";
                    document.getElementById("typeService").value = "Elige una opción";
                }
            }
        }
    }
}
