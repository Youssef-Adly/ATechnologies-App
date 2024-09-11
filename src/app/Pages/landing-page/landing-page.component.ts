import { Component } from '@angular/core';
import { ChartComponent } from '../../Components/chart/chart.component';
import { TableComponent } from '../../Components/table/table.component';
import { CardComponent } from '../../Components/card/card.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    ChartComponent,
    TableComponent,
    CardComponent,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    InputSwitchModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
