import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import {Address} from '../Address';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiUrl= 'http://localhost:5000/addresses';

  constructor(private http: HttpClient) { }

  getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(this.apiUrl);
  }
  deleteAddress(address: Address): Observable<Address> {
    const url = `${this.apiUrl}/${address.id}`;
    return this.http.delete<Address>(url);
  }
  addAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(this.apiUrl, address, httpOptions)
  }
  updateAddress(address: Address): Observable<Task> {
    const url = `${this.apiUrl}/${address.id}`;
    return this.http.put<Task>(url, address, httpOptions)
  }
  sort(): Observable<Address[]> {
    return this.http.get<Address[]>(this.apiUrl).pipe(
      tap(address => address.sort((a,b) => {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
      }))
    );
  }
}
