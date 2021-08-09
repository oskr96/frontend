import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees() 
  }

  //method for add employee
  createEmployee(form: NgForm){

    this.employeeService.createEmployee(form.value).subscribe(
      res => {
        this.getEmployees();
        form.reset()
        console.log(res)
        alert('Empleado creado')
      },
      err => {
        console.log(err)
        alert('Error creando empleado')
      }
    )
  }

  //method for get employees
  getEmployees(){
    this.employeeService.getEmployees().subscribe( 
      res => {
        this.employeeService.employees = res;
      },
      err => console.log(err))
  }

  //method for delete
  deleteEmployee(id_employee: number){
    if(confirm('Seguro?')){
      this.employeeService.deleteEmployee(id_employee).subscribe(
        res => {
          this.getEmployees();
          console.log(res)
          alert('Empleado eliminado')
        },
        err => {
          console.log(err)
          alert('Error al eliminar, quizas tiene otros asignados')
        }
      )
    }
  }

}
