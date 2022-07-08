function validate() {

    var username = document.getElementById("uname").value;
    var passwd = document.getElementById("passwd").value;

    if (username == "v=ir" && passwd == "v=ir") {

        alert("WELCOME");
        return false;


    } else {
        alert("INVALID USERNAME OR PASSWORD, HINT: BEST FORMULA ??")

    }


}