package com.example.SpringCURD.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringCURD.Entity.Employee;
import com.example.SpringCURD.Service.EmployeeService;

@RestController
public class EmployeeController {
	
	@Autowired
	private EmployeeService empservice;
	
	@CrossOrigin
	@GetMapping("/")
	public List<Employee> getEmp(){
		return empservice.getAllEmployee();
	}
	
	@CrossOrigin
	@PostMapping("/InsertEmployee")
	public String addEmp(@RequestBody Employee emp) {
		empservice.addEmp(emp);
		return "Data Inserted Successfully";
	}
	
	@CrossOrigin
	@PutMapping("/AllEmployee/{id}")
	public String updateEmp(@PathVariable long id, @RequestBody Employee emp) {
		empservice.updateEmp(id, emp);
		return "Data updated Successfully";
	}
	@CrossOrigin
	@DeleteMapping("/AllEmployee/{id}")
	public String deleteEmp(@PathVariable long id) {
		empservice.deleteEmp(id);
		return "Data Deleted Successfully";
	}
}
