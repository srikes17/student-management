package com.example.studentmgmt;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class StudentService {
	
	// @Autowired
	private StudentRepository pr;
	
	public StudentService(StudentRepository pr) {
		this.pr = pr;
	}
	
	public Student save(Student p){
		return pr.save(p);
	}
	
	public Student find(int id) {
		try {
			Student s = pr.findById(id).get();
			return s;			
		}
		catch(Exception e){
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
	}
	
	public List<Student> findAll(){
		return pr.findAll();
	}
	
	public Student update(int id, Student student){
	    Student existing = find(id);
	    existing.setName(student.getName());
	    existing.setBranch(student.getBranch());
	    existing.setRollnumber(student.getRollnumber());
	    existing.setCgpa(student.getCgpa());
	    return pr.save(existing);
	}

	public String delete(int id){
		try {
			Student student = find(id);			
			pr.delete(student);
			return "Student deleted Successfully";
		}
		catch(Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
	}
	
	
}
