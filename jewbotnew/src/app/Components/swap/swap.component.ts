import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css'],
})
export class SwapComponent implements OnInit {
  showmodal: boolean = false;
  slipaggeTolerance: any = 0;
  constructor() {}

  ngOnInit(): void {
    this.slipaggeTolerance = this.slipaggeTolerance;
  }
  openSettingsModal() {
    this.showmodal = !this.showmodal;
  }
  closeSettingsModal() {
    this.showmodal = !this.showmodal;
  }
  onKey(event: any) {
    this.slipaggeTolerance = event.target.value;
  }
}
