package com.example.SpringCURD.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.SpringCURD.Entity.Employee;
import com.example.SpringCURD.Respository.EmployeeRespository;

@Service
public class EmployeeService {

	@Autowired
	EmployeeRespository emprespository;
	
	
	public List<Employee> getAllEmployee(){
		List<Employee> emp = new ArrayList<Employee>();
		emprespository.findAll().forEach(emp::add);
		return emp;
	}


	public void addEmp(Employee emp) {
		emprespository.save(emp);
	}


	public void updateEmp(long id, Employee emp) {
		emprespository.save(emp);
		
	}


	public void deleteEmp(long id) {
		emprespository.deleteById(id);
		
	}
	
}
