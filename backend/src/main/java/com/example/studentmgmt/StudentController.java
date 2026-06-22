package com.example.studentmgmt;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class StudentController{
	
	private StudentService ps;
	
	public StudentController(StudentService ps) {
		this.ps = ps;
	}
	
	
	@GetMapping
	public List<Student> getStudents(){
		return ps.findAll();
	}
	
	@GetMapping("/{studentId}")
    public Student getStudentById(@PathVariable("studentId") int studentId){
        return ps.find(studentId);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Student addStudent(@RequestBody Student student){
        return ps.save(student);
    }

    @PutMapping("/{studentId}")
    public Student updateStudent(@PathVariable("studentId") int studentId,@RequestBody Student student){
        return ps.update(studentId,student);
    }

    @DeleteMapping("/{studentId}")
    public String deletePlayer(@PathVariable("studentId") int studentId){
        return ps.delete(studentId);
    }	
	
}
