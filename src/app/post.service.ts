import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class PostService {
	constructor(private http: HttpClient) {}

	getPost(): Observable<Post[]> {
		return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
	}
}
