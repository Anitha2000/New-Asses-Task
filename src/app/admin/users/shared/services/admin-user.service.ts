import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UsersList } from '../interfaces/admin-users-grid-list.interface';
import { Users } from '../interfaces/admin-users-grid.interface';
import { AppHttpClient } from 'src/core/services/app-http-client.service';
import { ApiResponse } from 'src/core/interface/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {

  constructor(public http: AppHttpClient) {}

  // Getting List of data
  getUserData(params: HttpParams): Observable<UsersList> {
    return this.http.Get<UsersList>('/users', {params});
  }

  // Update API call
  sendUsersData(data: Users,userId: number): Observable<ApiResponse> {
    return this.http.Put<ApiResponse>(`/posts/${userId}`,{data});
  }

  // Save API call
  saveUsersData(data: Users): Observable<ApiResponse> {
    return this.http.Post<ApiResponse>('/posts/',{data});
  }

  // Delete API call
  deleteUser(userId: number): Observable<Users> {
    return this.http.Delete<Users>(`/posts/${userId}`);
  }
}