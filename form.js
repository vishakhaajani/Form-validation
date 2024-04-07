function save (){
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    let author = document.getElementById('author').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;

    let bodynot = document.getElementById('bodynot');
    let authornot = document.getElementById('authornot');
    let numbernot = document.getElementById('numbernot');
    let emailnot = document.getElementById('emailnot');

    let valid = true;

    if (!title) {
        alert("Please enter a title.");
        valid = false;
    }

    if(!body || body.length < 2 || body.length > 20){
        bodynot.innerHTML = "Text has to  between 2 and 20 charecters long";
        bodynot.style.color = "red";
        valid = false;
    }

    if (!author){
        authornot.innerHTML = " The author's name is required";
        authornot.style.color = "red";
        valid = false;
    }

    if(!number){
        numbernot.innerHTML = "A number is required";
        numbernot.style.color = "red";
        valid = false;
    }

    if(!email){
        emailnot.innerHTML = " Invalid email address";
        emailnot.style.color = "red";
        valid = false;
    }
    else {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(email) == false) {
            emailnot.innerHTML = " Invalid email address";
            emailnot.style.color = "red";
            valid = false;
        }
    }
    return valid;
}


