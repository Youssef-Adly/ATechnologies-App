import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { FileSaverModule } from 'ngx-filesaver';
import FileSaver from 'file-saver';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    AvatarModule,
    BadgeModule,
    FileSaverModule,
    TooltipModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  customers = [
    {
      id: 1,
      name: 'احمد محمود',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 10,
      numOfPeople: 1,
    },
    {
      id: 2,
      name: 'احمد سيد',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 20,
      numOfPeople: 1,
    },
    {
      id: 3,
      name: 'احمد محمود',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 40,
      numOfPeople: 1,
    },
    {
      id: 4,
      name: 'احمد محمود',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 100,
      numOfPeople: 1,
    },
    {
      id: 5,
      name: 'احمد محمود',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 80,
      numOfPeople: 1,
    },
    {
      id: 1,
      name: 'احمد محمود',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 180,
      numOfPeople: 1,
    },
    {
      id: 1,
      name: 'احمد محمود',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 40,
      numOfPeople: 1,
    },
    {
      id: 1,
      name: 'احمد محمود',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 100,
      numOfPeople: 1,
    },
    {
      id: 1,
      name: 'احمد محمود',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 80,
      numOfPeople: 1,
    },
    {
      id: 1,
      name: 'احمد محمود',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 180,
      numOfPeople: 1,
    },
    {
      id: 1,
      name: 'احمد محمود',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 10,
      numOfPeople: 1,
    },
    {
      id: 1,
      name: 'احمد محمود',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 20,
      numOfPeople: 1,
    },
    {
      id: 1,
      name: 'احمد محمود',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 40,
      numOfPeople: 1,
    },
    {
      id: 1,
      name: 'احمد محمود',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 100,
      numOfPeople: 1,
    },
    {
      id: 1,
      name: 'احمد محمود',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 80,
      numOfPeople: 1,
    },
    {
      id: 1,
      name: 'احمد محمود',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 180,
      numOfPeople: 1,
    },
    {
      id: 1,
      name: 'احمد محمود',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 40,
      numOfPeople: 1,
    },
    {
      id: 1,
      name: 'احمد محمود',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 100,
      numOfPeople: 1,
    },
    {
      id: 1,
      name: 'احمد محمود',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 80,
      numOfPeople: 1,
    },
    {
      id: 1,
      name: 'احمد محمود',
      ticketNumber: 'C-107',
      phone: '01286546',
      numofBuys: 'مره واحده',
      address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      price: 180,
      numOfPeople: 1,
    },
  ];

  downloadFile() {
    const fileUrl =
      'https://drive.google.com/file/d/1Kdryi45jLttwmbWhQtiPtbjOz_Ja_y3E/view';

    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);
        FileSaver.saveAs(blobUrl, 'Youssef-Adly CV.pdf');
      })
      .catch((error) => {
        console.error('Error downloading file:', error);
      });
  }
}
