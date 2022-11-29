import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPost } from '../../interfaces/post';
import { PostsApiService } from '../../services/posts-api.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  createForm!: FormGroup;
  disabled = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private postsApiService: PostsApiService
  ) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      article: ['', Validators.required],
    });
  }

  save() {
    const formValue = this.createForm.value;
    const newPost: Omit<IPost, 'id'> = {
      title: formValue.title,
      article: formValue.article,
      author: 'username',
      dateCreate: new Date(),
    };
    this.disabled = true;
    this.postsApiService.postPost(newPost).subscribe(async () => {
      await this.router.navigateByUrl('/');
    });
  }
}
