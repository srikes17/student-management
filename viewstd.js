
let tbody = document.querySelector('tbody')
const studentsList = JSON.parse(localStorage.getItem('studentsList') || '[]')

function deleteRow(idx){
    studentsList.splice(idx,1)
    localStorage.setItem('studentsList',JSON.stringify(studentsList))
    tbody.innerHTML = ''
    display()
}

function editStudent(idx){

}

function display(){

    for(let i=0; i<studentsList.length; i++){
        const student = studentsList[i]
        tbody.innerHTML += `
            <tr>
                <td>${student.rollnumber}</td>
                <td>${student.name}</td>
                <td>${student.branch}</td>
                <td>${student.cgpa}</td>
                <td>
                    <a href='editstd.html'>
                        <button class='btn btn-danger' onclick='editstd.html'>Edit</button>
                    </a>
                </td>
                <td>
                    <button class='btn btn-danger' onclick='deleteRow(${i})'>Delete</button>
                </td>
            </tr>
        `
    }
}

display()