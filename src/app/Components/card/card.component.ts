import { Component } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TooltipModule, InputTextModule, RippleModule, QRCodeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  value = 'www.tazkty.com/473847';
  copy = 'نسخ';

  copyText() {
    navigator.clipboard.writeText(this.value).then(() => {
      this.copy = 'تم النسخ';
      setTimeout(() => {
        this.copy = 'نسخ';
      }, 2000);
    });
  }
}
