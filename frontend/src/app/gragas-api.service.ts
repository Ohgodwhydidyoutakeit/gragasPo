import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';




export interface IApiReponse {
  title: string,
  [id: number]: string,
  videoUrl: string,
}



@Injectable({
  providedIn: 'root'
})

export class GragasApiService {
  url = "http://localhost:3000/v1/getAll"

  constructor(private http: HttpClient) {
    this.getData()

  }

  getData = (): Observable<IApiReponse[]> => {
    return this.http.get<IApiReponse[]>(this.url).pipe(
   
      // map(response => response)
      

    )
  }
}
