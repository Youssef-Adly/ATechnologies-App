import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { ChartComponent } from './Components/chart/chart.component';
import { CardComponent } from './Components/card/card.component';
import { TableComponent } from './Components/table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LandingPageComponent,
    ChartComponent,
    CardComponent,
    TableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
