package com.example.SpringCURD.Respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SpringCURD.Entity.Employee;

public interface EmployeeRespository extends JpaRepository<Employee, Long> {

}
