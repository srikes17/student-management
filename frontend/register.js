


function saveUser(){
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const age = parseInt(document.getElementById('age'));
    const pass = document.getElementById('pass');
    const repass = document.getElementById('repass');
    
    const isValidUserName = /^[a-zA-Z0-9]{8}/
    if(isValidUserName){
        return alert('username length atleast 8 characters')
    }
    
    if(!email.endsWith('@gmail.com') && !email.endsWith('@cvr.ac.in')){
        return alert('Enter email correctly')
    }
    
    if(ageNum < 17 || ageNum > 30){
        return alert('Enter age in between 17 and 30')
    }

    if(pass === repass){

        if(pass.length < 8){
            return alert('Enter password atleast of 8 characters')
        }
        const isStrongPassword = /['@'|'!'|'$'|'#'|'%'|'^'|'&'|'*']/.test(pass) && /[a-z]/.test(pass) && /[A-Z]/.test(pass) && /[0-9]/.test(pass)
        
        if(!isStrongPassword){
            return alert('Enter Strong Password it should contain atleat one alphabet, capital alphabet, number, and special character')
        }
        
        localStorage.setItem('user',JSON.stringify({username,email,age,pass}))
        window.location.href = './login.html'
    }
    else{
        return alert('Password Mismatched Retype Password')
    }

}