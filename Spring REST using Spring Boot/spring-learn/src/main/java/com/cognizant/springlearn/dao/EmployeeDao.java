package com.cognizant.springlearn.dao;

import com.cognizant.springlearn.model.Employee;
import com.cognizant.springlearn.service.exception.EmployeeNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class EmployeeDao {

    private static final Logger LOGGER = LoggerFactory.getLogger(EmployeeDao.class);
    private static List<Employee> EMPLOYEE_LIST;

    public EmployeeDao() {
        LOGGER.info("START EmployeeDao Constructor");
        ApplicationContext context = new ClassPathXmlApplicationContext("employee.xml");
        EMPLOYEE_LIST = (ArrayList<Employee>) context.getBean("employeeList");
        LOGGER.info("END EmployeeDao Constructor");
    }

    public List<Employee> getAllEmployees() {
        LOGGER.info("START getAllEmployees");
        LOGGER.info("END getAllEmployees");
        return EMPLOYEE_LIST;
    }

    public void updateEmployee(Employee employee) throws EmployeeNotFoundException {
        LOGGER.info("START updateEmployee");
        boolean found = false;
        for (int i = 0; i < EMPLOYEE_LIST.size(); i++) {
            if (EMPLOYEE_LIST.get(i).getId().equals(employee.getId())) {
                EMPLOYEE_LIST.set(i, employee);
                found = true;
                break;
            }
        }
        if (!found) {
            throw new EmployeeNotFoundException("Employee with ID " + employee.getId() + " not found!");
        }
        LOGGER.info("END updateEmployee");
    }

    public void deleteEmployee(int id) throws EmployeeNotFoundException {
        LOGGER.info("START deleteEmployee");
        boolean removed = EMPLOYEE_LIST.removeIf(emp -> emp.getId() == id);
        if (!removed) {
            throw new EmployeeNotFoundException("Employee with ID " + id + " not found for deletion!");
        }
        LOGGER.info("END deleteEmployee");
    }
}
