import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Jayna Thanki - Software Engineer';
  technologies = ['Angular', 'React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'WordPress'];
  experience = [
    { company: 'Fuzzy Cloud', role: 'Software Engineer', duration: '2019 - 2022' },
    { company: 'Company B', role: 'Web Developer', duration: '2017 - 2019' },
  ];
}