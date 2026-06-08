


function addStudent(){

    const name = document.getElementById('name').value;
    const branch = document.getElementById('branch').value;
    const rollnumber = document.getElementById('roll').value;
    const cgpa = document.getElementById('cgpa').value;

    const student = {name, branch, rollnumber, cgpa}

    const studentsList = JSON.parse(localStorage.getItem('studentsList') || '[]')

    localStorage.setItem('studentsList',JSON.stringify([...studentsList,student]))

    window.location.href = './viewstd.html'
}