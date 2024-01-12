
const form = document.getElementById('form')
const email = document.getElementById('email')
const button = document.getElementById('button')

form.addEventListener('submit', (e)=> {
    e.preventDefault()

    validate()
})

function validate(){
    const emailValue = email.ariaValueMax.trim()

    if(emailValue== '' || !isEmail(emailValue)){
        setErrorFor(email, 'Please provide a valid email address')
    }else{
        setSuccessFor(email)
    }
}

function setErrorFor(){
    document.getElementById("email").innerHTML=".....";
}

function setSuccessFor(){

}

function isEmail(){

}