import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HashTag } from './Components/Model/HashTag';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HashtagService {


  private urlTagByText ='http://localhost:8080/getHashTagByText'
  private urlTagById   ='http://localhost:8080/getHashagById'


  constructor(private http : HttpClient) { }
   

    getTagByText(tagText : string): Observable<HashTag[]> {
      const url =`${this.urlTagByText}/${encodeURIComponent(tagText)}`

    return this.http.get<HashTag[]>(url).pipe(
      catchError(this.handleError('getTag', []))
    );
   }

   getTagById(id: string): Observable<HashTag> {
    // TODO: send the message _after_ fetching the tag
    const url =`${this.urlTagById}/${id}`

    return this.http.get<HashTag>(url).pipe(
     
      catchError(this.handleError<HashTag>(`getId id=${id}`))
    );
  }

   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
