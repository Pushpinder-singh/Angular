import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationHeaderModule } from './navigation-header/navigation-header-module';
import { FormsModule } from '@angular/forms';
import { NavigationHeader } from './navigation-header/navigation-header';
import { Footer } from './footer/footer';
import { CommonModule } from '@angular/common';
import { PostService } from './services/post-service';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    NavigationHeaderModule,
    NavigationHeader,
    Footer
  ],
  providers: [PostService,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-app');
  posts : any[] = [];

  isDisabled: boolean = false;
  count = 0;

  personName: string = "Mr. Singh";

  personList: string[] = ["Kabir"];
  // console.log(personList);
  
  incrementCounter() {
    this.personList.push(this.personName);
    this.count++;
  }

  // console.log(personList);

constructor(private postService: PostService){
}

ngOnInit(){
  // alert('ngOnInit() is called.')
  this.postService.getPosts().subscribe({
    next: (response) => {
  this.posts = response;
  },
    error: (error) => {
      console.error(error);
    }
  });
  


}

}
