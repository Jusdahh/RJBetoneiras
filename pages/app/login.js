container = document.querySelector(".container"),
pwFields = document.querySelector(".password"),
signUp = document.querySelector(".signupLink"),
logIn = document.querySelector(".loginLink");

//mostrar e esconder senha
{
    pwFields2 = document.querySelectorAll(".password"),
    pwShowHide = document.querySelectorAll(".hideshowpw");

    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", ()=>{
            pwFields2.forEach(pwfield => {
                if (pwfield.type === "password") {
                    pwfield.type ="text";
                    pwShowHide.forEach(Icon => {
                        Icon.classList.replace("fa-eye-low-vision", "fa-eye")
                    });
                }
                else{
                    pwfield.type = "password";
    
                    pwShowHide.forEach(icon => {
                        icon.classList.replace("fa-eye", "fa-eye-low-vision")
                    });
                }
            });
        })
    });
}

//alternar login/signup

signUp.addEventListener("click", function(){
    container.classList.add("active")
})

logIn.addEventListener("click", function(){
    container.classList.remove("active");
})


//form validation
function loginValidation() {
    let email = document.forms.loginForm.email.value;
    let password = document.forms.loginForm.password.value;
    let regEmail = /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+.)+([a-zA-Z]{2,4})+$/;
    if (email == "" || !regEmail.test(email)) {
        alert("Por favor, entre com um e-mail válido.");
        email.focus()
        return false;
    }
    if (password = ""){
        alert("Por favor, entre com sua senha.");
        password.focus();
        return false;
    }
    else{
        alert("Login efeituado com sucesso!");
    }
}

function signupValidation(){
    let name = document.forms.signupForm.name.value;
    let email = document.forms.signupForm.email.value;
    let password = document.forms.signupForm.password.value;
    let confirmpw = document.forms.signupForm.passwordConfirm.value;
    let signupCheck = document.forms.signupForm.termCon.value;

    let regEmail = /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+.)+([a-zA-Z]{2,4})+$/;
    let regName = /\d+/g;
    let regPassword = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;

    if (name == " " || regName.test(name)) {
        alert("Entre com um nome válido!")
        name.focus();
        return false;
    }
    if (email == " " || !regEmail.test(email)) {
        alert("Entre com um e-mail válido!")
        email.focus();
        return false;
    }
    if (password == " " || regPassword.test(password)) {
        alert("Entre com uma senha válida!")
        password.focus();
        return false;
    }
    if (confirmpw == " " || regPassword.test(confirmpw) || confirmpw!=password) {
        alert("Confirme sua senha!")
        confirmpw.focus();
        return false;
    }
    if (signupCheck == false) {
        alert("Confirme os termos de uso!")
        signupCheck.focus();
        return false;
    }
    else{
        alert("Resgistro efeituado com sucesso!")
    }

}