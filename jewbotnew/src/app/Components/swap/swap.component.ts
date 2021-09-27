import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css'],
})
export class SwapComponent implements OnInit {
  showmodal: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  openSettingsModal() {
    this.showmodal = !this.showmodal;
  }
  closeSettingsModal() {
    this.showmodal = !this.showmodal;
  }
}
