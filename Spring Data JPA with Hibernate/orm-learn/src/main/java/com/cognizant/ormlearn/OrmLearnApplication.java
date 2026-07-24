package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.*;
import com.cognizant.ormlearn.service.*;
import com.cognizant.ormlearn.service.exception.CountryNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.*;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

    private static CountryService countryService;
    private static StockService stockService;
    private static EmployeeService employeeService;
    private static DepartmentService departmentService;
    private static SkillService skillService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        LOGGER.info("Inside main");

        countryService = context.getBean(CountryService.class);
        stockService = context.getBean(StockService.class);
        employeeService = context.getBean(EmployeeService.class);
        departmentService = context.getBean(DepartmentService.class);
        skillService = context.getBean(SkillService.class);

        // Task 1 DML Tests
        testGetAllCountries();
        testFindCountryByCode();
        testAddCountry();
        testUpdateCountry();
        testDeleteCountry();

        // Task 2 Query Method Tests
        testCountryQueryMethods();
        testStockQueryMethods();

        // Task 2 Relationship Tests
        testGetEmployee();
        testAddEmployee();
        testUpdateEmployee();
        testGetDepartment();
        testAddSkillToEmployee();
    }

    private static void testGetAllCountries() {
        LOGGER.info("Start testGetAllCountries");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("countries={}", countries);
        LOGGER.info("End testGetAllCountries");
    }

    private static void testFindCountryByCode() {
        LOGGER.info("Start testFindCountryByCode");
        try {
            Country country = countryService.findCountryByCode("IN");
            LOGGER.debug("Country:{}", country);
        } catch (CountryNotFoundException e) {
            LOGGER.error(e.getMessage());
        }
        LOGGER.info("End testFindCountryByCode");
    }

    private static void testAddCountry() {
        LOGGER.info("Start testAddCountry");
        Country country = new Country("JP", "Japan");
        countryService.addCountry(country);
        try {
            Country fetchedCountry = countryService.findCountryByCode("JP");
            LOGGER.debug("Added Country:{}", fetchedCountry);
        } catch (CountryNotFoundException e) {
            LOGGER.error(e.getMessage());
        }
        LOGGER.info("End testAddCountry");
    }

    private static void testUpdateCountry() {
        LOGGER.info("Start testUpdateCountry");
        try {
            countryService.updateCountry("JP", "Japan Republic");
            Country updatedCountry = countryService.findCountryByCode("JP");
            LOGGER.debug("Updated Country:{}", updatedCountry);
        } catch (CountryNotFoundException e) {
            LOGGER.error(e.getMessage());
        }
        LOGGER.info("End testUpdateCountry");
    }

    private static void testDeleteCountry() {
        LOGGER.info("Start testDeleteCountry");
        countryService.deleteCountry("JP");
        try {
            countryService.findCountryByCode("JP");
        } catch (CountryNotFoundException e) {
            LOGGER.debug("Successfully deleted country JP: {}", e.getMessage());
        }
        LOGGER.info("End testDeleteCountry");
    }

    private static void testCountryQueryMethods() {
        LOGGER.info("Start testCountryQueryMethods");
        List<Country> ouCountries = countryService.searchCountriesByName("ou");
        LOGGER.debug("Countries containing 'ou': {}", ouCountries);

        List<Country> sortedOuCountries = countryService.searchCountriesByNameSorted("ou");
        LOGGER.debug("Sorted Countries containing 'ou': {}", sortedOuCountries);

        List<Country> zCountries = countryService.getCountriesStartingWith("Z");
        LOGGER.debug("Countries starting with 'Z': {}", zCountries);
        LOGGER.info("End testCountryQueryMethods");
    }

    private static void testStockQueryMethods() {
        LOGGER.info("Start testStockQueryMethods");
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            Date startDate = sdf.parse("2019-09-01");
            Date endDate = sdf.parse("2019-09-30");

            List<Stock> fbSept = stockService.getStockInPeriod("FB", startDate, endDate);
            LOGGER.debug("FB September 2019 Stocks count: {}", fbSept.size());

            List<Stock> googleHigh = stockService.getStocksAbovePrice("GOOGL", new BigDecimal("1250.00"));
            LOGGER.debug("Google Stocks above 1250 count: {}", googleHigh.size());

            List<Stock> top3Volume = stockService.getTop3HighestVolume();
            LOGGER.debug("Top 3 Highest Volume Stocks: {}", top3Volume);

            List<Stock> lowest3Netflix = stockService.getLowest3ClosePrices("NFLX");
            LOGGER.debug("Lowest 3 Netflix Stocks: {}", lowest3Netflix);
        } catch (Exception e) {
            LOGGER.error("Error in testStockQueryMethods: ", e);
        }
        LOGGER.info("End testStockQueryMethods");
    }

    private static void testGetEmployee() {
        LOGGER.info("Start testGetEmployee");
        Employee employee = employeeService.get(1);
        LOGGER.debug("Employee:{}", employee);
        LOGGER.debug("Department:{}", employee.getDepartment());
        LOGGER.debug("Skills:{}", employee.getSkillList());
        LOGGER.info("End testGetEmployee");
    }

    private static void testAddEmployee() {
        LOGGER.info("Start testAddEmployee");
        Department department = departmentService.get(1);
        Employee employee = new Employee("Alice Walker", 68000.0, true, new Date());
        employee.setDepartment(department);
        employeeService.save(employee);
        LOGGER.debug("Added Employee:{}", employee);
        LOGGER.info("End testAddEmployee");
    }

    private static void testUpdateEmployee() {
        LOGGER.info("Start testUpdateEmployee");
        Employee employee = employeeService.get(1);
        Department hrDept = departmentService.get(2);
        employee.setDepartment(hrDept);
        employeeService.save(employee);
        LOGGER.debug("Updated Employee Department:{}", employee.getDepartment());
        LOGGER.info("End testUpdateEmployee");
    }

    private static void testGetDepartment() {
        LOGGER.info("Start testGetDepartment");
        Department department = departmentService.get(1);
        LOGGER.debug("Department:{}", department);
        LOGGER.debug("Department Employees:{}", department.getEmployeeList());
        LOGGER.info("End testGetDepartment");
    }

    private static void testAddSkillToEmployee() {
        LOGGER.info("Start testAddSkillToEmployee");
        Employee employee = employeeService.get(1);
        Skill skill = skillService.get(3); // React
        if (employee.getSkillList() == null) {
            employee.setSkillList(new HashSet<>());
        }
        employee.getSkillList().add(skill);
        employeeService.save(employee);
        LOGGER.debug("Employee Skills after add:{}", employee.getSkillList());
        LOGGER.info("End testAddSkillToEmployee");
    }
}
