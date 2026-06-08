


function saveUser(){
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const age = parseInt(document.getElementById('age'));
    const pass = document.getElementById('pass');
    const repass = document.getElementById('repass');
    
    if(username.length < 8){
        return alert('username length atleast 8 characters')
    }
    
    if(!email.endsWith('@gmail.com') && !email.endsWith('@cvr.ac.in')){
        return alert('Enter email correctly')
    }
    
    if(ageNum < 17 || ageNum > 30){
        return alert('Enter age in between 17 and 30')
    }

    if(pass === repass){
        localStorage.setItem('user',JSON.stringify({username,email,age,pass}))
        window.location.href = './login.html'
    }
    else{
        return alert('Password Mismatched Retype Password')
    }

}