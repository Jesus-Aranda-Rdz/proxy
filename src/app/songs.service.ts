import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Song } from './song'; // Adjust this import according to your actual model

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  private apiUrl = 'http://3.139.104.28/api/songs';  // Adjust base URL if needed

  constructor(private http: HttpClient) { }

  // Get all songs
  index(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }

  // Create a new song
  create(song: Song): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiUrl, song);
  }

  // Get a single song by ID
  show(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
  }

  // Update an existing song
  update(id: number, song: Song): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/${id}`, song);
  }

  // Delete a song by ID
  delete(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
  }
}
