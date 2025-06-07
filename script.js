function validate()
{
    var fname=document.getElementById("fname").value
    var fnameCheck=/^[a-zA-Z]+[a-zA-Z ]+$/
    var exampleInputEmail1=document.getElementById('exampleInputEmail1').value
    var mailCheck=/^[a-zA-Z0-9&$*.#]+@+[a-z0-9]+\.+[a-z]{2,3}$/
    var exampleInputPassword1=document.getElementById('exampleInputPassword1').value
    var passError=document.getElementById('passError')
    var passwordCheck=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/
    if(fname=="")
    {
        alert("Please enter your name.")
        return false
    }

    if(!fname.match(fnameCheck))
    {
        alert("Please enter a valid name.")
        return false
    }
    if(exampleInputEmail1=="")
    {
        alert("Please enter your email address.")
        return false
    }
    if(!exampleInputEmail1.match(mailCheck))
    {
        alert("Please enter a valid email address")
        return false
    }

    if(!exampleInputPassword1.match(passwordCheck))
    {
        passError.innerHTML="Password must contain at least:<br>1. One uppercase letter<br>2. One lowercase letter<br>3. One number<br>4. One special character<br>5. Minimum 8 characters";
        return false
    }
    return true
}