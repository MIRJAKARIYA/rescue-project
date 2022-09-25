const passowordField = document.getElementById('password__field');
const emailField = document.getElementById('email__field');
const logintButton = document.getElementById('login__button');
const eyeButton = document.getElementById('eye__button');


// event listener functions
logintButton.addEventListener('click',()=>{
    const email = emailField.value;
    const password = passowordField.value;
    emailField.value = ''
    passowordField.value = ''
    if(email === "jakariya@gmail.com" && password === 'jakariya123'){
        location.pathname = '/home.html'
    }
    else{
        if(email !== 'jakariya@gmail.com' && password !== 'jakariya123'){
            alert('email and password both are incorrect')
        }
        else if(email !=='jakariya@gmail.com'){
            alert('email is incorrect')
        }
        else if(password !== 'jakariya123'){
            alert('password is incorrect')
        }
    }
})


eyeButton.addEventListener('change',(e)=>{
    const isShow = e.target.checked;
    if(isShow){
        passowordField.setAttribute('type','text')
    }
    else{
        passowordField.setAttribute('type','password')
    }
})