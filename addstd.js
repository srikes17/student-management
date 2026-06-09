


function addStudent(){

    const name = document.getElementById('name').value;
    const branch = document.getElementById('branch').value;
    const rollnumber = document.getElementById('roll').value;
    const cgpa = document.getElementById('cgpa').value;

    const student = {name, branch, rollnumber, cgpa}

    const isBranchValid = /^[(CSE)|(ECE)|(EEE)|(eee)|(cse)|(ece)]/.test(branch)

    if(!isBranchValid){
        return alert('Enter Valid Branch !')
    }

    const isRollNumberValid = /^2[3-9]['b'|'B']81['a'|'A'][0-9]{2}[a-zA-Z0-9]{2}/.test(rollnumber)

    if(!isRollNumberValid){
        return alert('Enter Valid Roll Number')
    }

    const CGPA = parseFloat(cgpa)

    if(CGPA <= 4.0 && CGPA >= 10.0){
        return alert('Enter Valid CGPA !')
    }

    const studentsList = JSON.parse(localStorage.getItem('studentsList') || '[]')

    localStorage.setItem('studentsList',JSON.stringify([...studentsList,student]))

    window.location.href = './viewstd.html'
}