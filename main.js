
 
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function formvalidate(){
   let form = document.getElementById("myform")
    var name, email, password, confirmpassword = false

    if(form.name.value == "" || form.name.value.lenght < 6 ){
    name = true;
    document.querySelector(".pname").innerHTML="name required"
}else{
    name=false;
    document.querySelector(".pname").innerHTML=" "
}



if( form.email.value == "" || !validateEmail(form.email.value) ){
       
    email = true;
    document.querySelector(".pemail").innerHTML= "invalid email" 
}else{
    email = false;
    document.querySelector(".pemail").innerHTML= " " 
}

if(form.password.value == ""){
    password= true;
    document.querySelector(".ppassword").innerHTML="password must contain capital letter, small letter, letters(8), special characters,and number"
}else{
    password = false;
    document.querySelector(".ppassword").innerHTML=""
}



if(form.confirmpassword.value != form.password.value){
    confirmpassword = true;
    document.querySelector(".pconfirmpassword").innerHTML="incorrect password"
}else{
    confirmpassword = false;
    document.querySelector(".pconfirmpassword").innerHTML=""   
}

if(name == false && email == false && password == false && confirmpassword == false){
    form.reset()
    window.alert("successful")
}

// window.alert("successful")

}











    
const togglepasswordd = document.querySelector("#togglepassword")
const passwordn = document.querySelector("#password")
togglepasswordd.addEventListener("click", function(){
    if(passwordn.type === "password"){
        passwordn.type = "text";
        this.classList.toggle("fa-eye-slash")
    }else{
        passwordn.type = "password";
        
    }
})
