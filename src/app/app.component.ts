import { Component } from '@angular/core';
import { JsonplaceholderService } from './jsonplaceholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users: any[];
  selectedUser: number;
  posts: any[];
  selectedPost: number;
  comments: any[];
  selectedComment: number;

  constructor(private apiService: JsonplaceholderService) {
    this.getUsers();
  }

  getUsers(): void {
    this.apiService.getUsers().subscribe((data) => {
      this.users = JSON.parse(data._body);
    });
  }

  userSelected(event: Event) {
    console.log('Selected User: ', this.selectedUser);
    this.getPosts();
  }

  getPosts(): void {
    this.apiService.getPostsByUser(this.selectedUser).subscribe((data) => {
      this.posts = JSON.parse(data._body);
    });
  }

  postSelected(event: Event) {
    console.log('Selected Post: ', this.selectedPost);
    this.getComments();
  }

  getComments(): void {
    this.apiService.getCommentsByPost(this.selectedPost).subscribe((data) => {
      this.comments = JSON.parse(data._body);
    });
  }

  commentSelected(event: Event) {
    console.log('Selected Comment: ', this.selectedComment);
    const comment = (this.comments.filter(cmnt => cmnt.id == this.selectedComment))[0].body;
    alert(comment);
  }

  reset(event: Event): void {
    this.users = [];
    this.posts = [];
    this.comments = [];
    this.selectedUser = null;
    this.selectedPost = null;
    this.selectedComment = null;
    this.getUsers();
  }
}
