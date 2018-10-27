import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from '../models/post-model';
import { Observable } from 'rxjs';
/**
 *In Angular 5 all the operator can be imported using single import 
  and combine using the pipe method. 
*/
import { catchError, map } from 'rxjs/operators';

import { AppError } from '../../common/errors/app-error';
import { NotFoundError } from '../../common/errors/not-found-error';
import { BadInputError } from '../../common/errors/bad-input';
import { InternalServerError } from '../../common/errors/server-error';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private url: string , private http: HttpClient) { }

  getAll(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.url).pipe(
      map(response => response),  // observable stream to array [] value
      catchError(this.handleError)
    );
  }

  create(resource): Observable<PostModel> {
    return this.http.post<PostModel>(this.url, JSON.stringify(resource)).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  update(resource, body): Observable<PostModel> {
    //  this.http.put<PostModel[]>(this.url + '/' + post.id, body)
    return this.http.patch<PostModel>(this.url + '/' + resource.id, body).pipe(
      map(response => response),
      catchError(this.handleError)
    );

  }

  delete(id): Observable<PostModel> {
    return this.http.delete<PostModel>(this.url + '/' + id).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }


  private handleError(error: Response) {
    /*
    application specific error. => NOT respose object
    *  // throw new error object 
    */
    if (error.status === 404)
      return Observable.throw(new NotFoundError());

    if (error.status === 400)
      return Observable.throw(new BadInputError(error.json()));

    if (error.status === 500)
      return Observable.throw(new InternalServerError(error.json()));

    return Observable.throw(new AppError(error.json()));
  }

  /*
  test() {
    const secondsObservable = new Observable((observer) => { 
      // cade block use to send value to parameeter;
      observer.next(5);
      observer.next(10);
    });

    secondsObservable.subscribe((value: any) => {
      console.log(value); // print both 5,10
    });
  }
*/
}


