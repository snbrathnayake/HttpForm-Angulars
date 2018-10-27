import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../services/http.service';
import { Subject } from 'rxjs';
import { PostModel } from '../models/post-model';

@Injectable({
  providedIn: 'root'
})
export class PostService extends HttpService {
  /**
   * this service is specific for the post components 
   * this service drive form the HttpService class.
   * @param http 
   * @param url
   * 
   * if not extends the Httpservice then:
   * inject to condtructor
   * constructor(private app: HttpService) {
   */


  // private _post: PostModel[] = [];

  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }

  /**
   * * To compose a multicast observable that forwards the source observable’s 
  last-emitted (latest updated result observed )next notification to all subscribers

  getPosts() {
    const result = new Subject<PostModel[]>();
    const {app} = this;

    this._post = [];

    app.getAll<c[]>(this.url)
    .subscribe((post: PostModel[]) => {
      this._post = post;

      result.next(this.post);
    },
    () => result.next(this.post));

    return result;

  }

  get post(): post[] {
    return this._post;
  }

  */

}
