import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DynamicDataService {
  constructor(private httpClient: HttpClient) {}

  getAllData(): Observable<any> {
    return this.httpClient.get('http://localhost:2000/products');
  }

  getDataByID(id: number): Observable<any> {
    return this.httpClient.get(`http://localhost:2000/products/${id}`);
  }

  deleteDataBYID(id: number): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:2000/products/${id}`);
  }

  addNewData(prd: any): Observable<any> {
    const newProduct = {
      ...prd,
      id: Date.now().toString(),
    };
    return this.httpClient.post('http://localhost:2000/products', newProduct);
  }

  EditData(prd: any, id: number): Observable<any> {
    return this.httpClient.put(`http://localhost:2000/products/${id}`, prd);
  }
}
