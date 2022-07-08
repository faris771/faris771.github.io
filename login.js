function validate() {

    var username = document.getElementById("uname").value;
    var passwd = document.getElementById("passwd").value;
    var gender = document.getElementById("gender").value;


    if (username == "v=ir" && passwd == "v=ir" && gender == "شعبة الصبح") {

        alert("WELCOME");
        return false;


    } else {
        alert("INVALID USERNAME, PASSWORD, OR GENDER \nHINT: BEST FORMULA ??")

    }


}