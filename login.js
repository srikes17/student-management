

function onLogin(){
    const username = document.getElementById('username').value;
    const pass = document.getElementById('pass').value;
    console.log(username,pass)
    const savedUser = JSON.parse(localStorage.getItem('user'))

    if(savedUser.username === username && pass === savedUser.pass){
        console.log(savedUser)
        window.location.href = './home.html'
    }
    else{
        return alert('user details doesn\'t matched')
    }
}