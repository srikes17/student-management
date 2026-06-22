
let tbody = document.querySelector('tbody')


async function getStudents(){
    const data = await fetch('http://localhost:8080/students')
    
    const studentsList = await data.json();
    
    return studentsList

}

async function deleteRow(idx){
    await fetch(`http://localhost:8080/students/${idx}`,{
        method : "DELETE",
        "Content-Type" : "application/json"
    })
    tbody.innerHTML = ''
    helper()
}

function editStudent(student){
    console.log(student)
    const {name,branch,rollnumber,cgpa} = student
    document.getElementById('name').value = name;
    document.getElementById('branch').value = branch;
    document.getElementById('rollnumber').value = rollnumber;
    document.getElementById('cgpa').value = cgpa;
    window.location.href = './editstd.html'

}

function display(studentsList){

    for(let i=0; i<studentsList.length; i++){
        const student = studentsList[i]
        console.log(student)
        tbody.innerHTML += `
            <tr>
                <td>${student.rollnumber}</td>
                <td>${student.name}</td>
                <td>${student.branch}</td>
                <td>${student.cgpa}</td>
                <td>
                    <button class='btn btn-danger' onclick='editStudent()'>Edit</button>
                </td>
                <td>
                    <button class='btn btn-danger' onclick='deleteRow(${student.id})'>Delete</button>
                </td>
            </tr>
        `
    }
}


function helper(){
    getStudents().then(res=>display(res));
}

helper()

// console.log(studentsList)

// display(studentsList)