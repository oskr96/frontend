import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})


export class EmployeeService {

  URL_API_BASE = 'http://127.0.0.1:3000/api/emp'

  //variable for construct employee
  auxEmp: Employee = {
    address: '', 
    charge: '',
    email: '',
    fullname: '',
    id_boss: 0,
    id_employee: 0,
    salary: 100
}

  //variable for storage employees from backend
  employees: Employee[];

  constructor(private http: HttpClient) { }

  //service for get all employees
  getEmployees(){
    return this.http.get<Employee[]>(this.URL_API_BASE+'/getEmployees')
  }

  //service for create new employee
  createEmployee(employee: Employee){
    return this.http.post(this.URL_API_BASE+'/createEmployee', employee)
  }

  //service for delete employee
  deleteEmployee(id_employee: number){
    return this.http.delete(`${this.URL_API_BASE+'/deleteEmployee'}&${id_employee}`)
  }
}
