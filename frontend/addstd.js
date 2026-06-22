


async function addStudent(){

    const name = document.getElementById('name').value;
    const branch = document.getElementById('branch').value;
    const rollnumber = document.getElementById('roll').value;
    const cgpa = parseFloat(document.getElementById('cgpa').value);

    const student = {name, branch, rollnumber, cgpa}

    const isBranchValid = /^(CSE|ECE|EEE|eee|cse|ece)$/.test(branch)

    if(!isBranchValid){
        return alert('Enter Valid Branch !')
    }

    const isRollNumberValid = /^2[3-9]['b'|'B']81['a'|'A'][0-9]{2}[a-zA-Z0-9]{2}/.test(rollnumber)

    if(!isRollNumberValid){
        return alert('Enter Valid Roll Number')
    }



    if(cgpa <= 4.0 && cgpa >= 10.0){
        return alert('Enter Valid cgpa !')
    }

    const data = await fetch('http://localhost:8080/students',{
        method: "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(student)
    })
 

    window.location.href = './viewstd.html'
}