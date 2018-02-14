import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators';
import { PostService } from './post.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'app';
	postTitle: string;
	postBody: string;
	postId = 0;
	posts: Post[] = [];

	constructor(private postService: PostService) {
		postService.getPost().subscribe((posts) => {
			this.posts = posts;
		});
	}

	addPost(id: number): void {
		if (id === 0) {
			this.posts.push(new Post(1, this.posts.length + 1, this.postTitle, this.postBody));
		} else {
			this.posts.find((post) => post.id === id).title = this.postTitle;
			this.posts.find((post) => post.id === id).body = this.postBody;
		}
		this.postBody = '';
		this.postTitle = '';
		this.postId = 0;
	}

	deletePost(id: number): void {
		this.posts = this.posts.filter((post) => post.id !== id);
	}

	updatePost(id: number) {
		let newPost: Post;

		newPost = this.posts.find((post) => post.id === id);
		this.postId = newPost.id;
		this.postTitle = newPost.title;
		this.postBody = newPost.body;
	}
}
