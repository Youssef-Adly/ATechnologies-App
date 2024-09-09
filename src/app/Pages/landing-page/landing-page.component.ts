import { Component } from '@angular/core';
import { ChartComponent } from '../../Components/chart/chart.component';
import { TableComponent } from '../../Components/table/table.component';
import { CardComponent } from '../../Components/card/card.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ChartComponent, TableComponent, CardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  private data = {
    
  }
}
