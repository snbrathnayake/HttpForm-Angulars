import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpService } from '../services/http.service';
import { PostModel } from '../models/post-model';
import { AppError } from '../../common/errors/app-error';
import { NotFoundError } from '../../common/errors/not-found-error';
import { BadInputError } from '../../common/errors/bad-input';
import { InternalServerError } from '../../common/errors/server-error';
import { PostService } from './post.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  private posts: PostModel[] = [];
  /**
   * 
   * when result is ready it will notify while subscribing to this endpoint
    .subscribe()
    constructor creates an instance of the component class
    The ngOnInit method is called shortly after the component is created.
   */
  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.posts = [];
    this.service.getAll()
      .subscribe(
      (posts: PostModel[]) => {
          this.posts = posts;
        },
        (error: AppError) => {
          if (error instanceof InternalServerError) {
            alert('Internal Server Errorr');
          } else {
            throw error;
          }
        });
  }
  /**
   * body
   *  let playload: any = { userId: null,id: null,title: input.value,body: 'sample body'};
   */
  createPost(input: HTMLInputElement) {
    let playload: any = {
      title: input.value
    };
   
    input.value = '';

    this.service.create(playload)
      .subscribe(
        (newPost: PostModel) => {
          playload.id = newPost.id;
          this.posts.splice(0, 0 , playload); // splice method to add new records as first
        },
        (error: AppError) => {
          if (error instanceof BadInputError) {
            alert('Bad Request error');
            // this.form.setError(error.originalError);
          } else {
            throw error;
          }
        });
  }

  deletePost(post: any) {

    console.log(post.id);
    this.service.delete(post.id)
      .subscribe(
        () => { // nothing response from the server () => empty params
          let index = this.posts.indexOf(post); // get index of  all the valuefor single record
          this.posts.splice(index , 1);
      },
        (error:AppError) => {
          if (error instanceof NotFoundError)
            alert('Not Found error "alreay deleted" ');
          else {
            throw error;
          }
      });
  }

  updatePost(post: PostModel) {
    this.service.update(post , JSON.stringify({userId:200}))
      .subscribe(
        (updatedPost: PostModel) => {
        console.log(updatedPost);
      // globle error handler will handle the if hava an error.
        },
        (error:AppError) => {
          throw error;
        });
  }
  

}


