import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [MatCardModule, RouterLink],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {
  category = input.required<string>();
  playlistID = input.required<string>();
  backgroundColor = input.required<string>();
}