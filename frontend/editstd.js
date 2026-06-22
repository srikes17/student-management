async function loadStudent() {

    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");
    
    const response = await fetch(
        `http://localhost:8080/students/${id}`
    );
    
    const student = await response.json();
    
    document.getElementById("name").value = student.name;
    document.getElementById("branch").value = student.branch;
    document.getElementById("rollnumber").value = student.rollnumber;
    document.getElementById("cgpa").value = student.cgpa;
}

loadStudent();

async function updateStudent(){
    event.preventDefault()
    const params = new URLSearchParams(window.location.search);
    
    const id = params.get("id");
    
    const name = document.getElementById("name").value
    const branch = document.getElementById("branch").value
    const rollnumber = document.getElementById("rollnumber").value
    const cgpa = parseFloat(document.getElementById("cgpa").value)

    const student = {name,branch,rollnumber,cgpa}
    
    await fetch(`http://localhost:8080/students/${id}`,{
        method : "PUT",
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(student)
    });
    
    window.location.href = './viewstd.html'
    
}