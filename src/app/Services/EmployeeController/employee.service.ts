import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post('https://localhost:7208/api/Employee/AddEmployee', data);
  }

  updateEmployee(employeeId: number, data: any): Observable<any> {
    return this._http.put(`https://localhost:7208/api/Employee/EditEmployee/${employeeId}`, data);
  }

  getEmployeeList(): Observable<any> {

     return this._http.get('https://localhost:7208/api/Employee/GetEmployeeList');
    // return fetch('https://localhost:7208/api/Employee/GetEmployeeList').then(res => res.json());
  }


  

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`https://localhost:7208/api/Employee/PostDeleteEmployee?data=${id}&data1=152`);
  }
}
