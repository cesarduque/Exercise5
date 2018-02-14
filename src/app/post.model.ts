export class Post {
	userId: number;
	id: number;
	title: string;
	body: string;

	constructor(userId, id, title, body) {
		this.userId = userId;
		this.id = id;
		this.title = title;
		this.body = body;
	}
}
