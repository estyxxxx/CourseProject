import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Category } from '../entities/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`https://meetings-app-server-svds.onrender.com/api/Category/${id}`);
  }
  
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`https://meetings-app-server-svds.onrender.com/api/Category`);
  }
}