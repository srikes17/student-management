package com.example.studentmgmt;

import jakarta.persistence.*;

@Entity
@Table(name = "students")
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int id;
	@Column
	private String name;
	@Column(name = "branch", nullable = false, columnDefinition = "VARCHAR(10) CHECK (branch IN ('CSE', 'ECE', 'EEE'))")
	private String branch;
	@Column(unique = true, nullable = false)
	private String rollnumber;
	@Column
	private double cgpa;

	public Student() {}

	public Student(String name,String branch,String rollnumber,double cgpa) {
		this.name = name;
		this.branch = branch;
		this.rollnumber = rollnumber;
		this.cgpa = cgpa;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getCgpa() {
		return cgpa;
	}

	public void setCgpa(double cgpa) {
		this.cgpa = cgpa;
	}

	public String getBranch() {
		return branch;
	}

	public void setBranch(String branch) {
		this.branch = branch;
	}

	public String getRollnumber() {
		return rollnumber;
	}

	public void setRollnumber(String rollnumber) {
		this.rollnumber = rollnumber;
	}
}

