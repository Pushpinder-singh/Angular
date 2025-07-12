import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationHeaderModule } from './navigation-header/navigation-header-module';
import { FormsModule } from '@angular/forms';
import { NavigationHeader } from './navigation-header/navigation-header';
import { Footer } from './footer/footer';
import { CommonModule } from '@angular/common';

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
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-app');

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


}
