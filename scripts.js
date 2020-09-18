function validName(){
    var name = document.getElementById("name").value;
    var pattern =/^[A-Za-z]+$/;
    if (pattern.test(name)) {
        // document.getElementById("sub").style.cursor="unset";
        document.querySelector(".checked").style.color="green";
        document.querySelector(".checked").innerHTML="valid";
    }
    else {
        // document.getElementById("sub").style.cursor="not-allowed"
        document.querySelector(".checked").style.color="red";
        document.querySelector(".checked").innerHTML="invalid";
    }
}

function validLName(){
    var name = document.getElementById("l_name").value;
    var pattern =/^[A-Za-z]+$/;
    if (pattern.test(name)) {
        // document.getElementById("sub").style.cursor="unset";
        document.querySelector(".checkedLastName").style.color="green";
        document.querySelector(".checkedLastName").innerHTML="valid";
    }
    else {
        // document.getElementById("sub").style.cursor="not-allowed"
        document.querySelector(".checkedLastName").style.color="red";
        document.querySelector(".checkedLastName").innerHTML="invalid";
    }
}

// Something was wrong with global variables, so i had to copy some of them in another func.

function printInfo() {
    var name = document.getElementById("name").value;
    var l_name = document.getElementById("l_name").value;
    var date = document.getElementById("date").value;
    var mail = document.getElementById("mail").value;
    var phone = document.getElementById("tel").value;
    var country = document.getElementById("country").value;
    document.querySelector(".Main").style.marginTop="10%";
    document.querySelector(".Main").style.width="50%";
    document.querySelector(".Main").innerHTML= "Thank you, " + name +" "+ l_name + "! " + "You were born in " + date + ". " +
        "We know, that " + mail + " is your email. Your phone number is " + phone + ". " +
        "We also know, that you, probably, live in " + country + ". Have a nice day!";
}
