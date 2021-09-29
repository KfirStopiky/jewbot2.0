import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css'],
})
export class SwapComponent implements OnInit {
  showmodal: boolean = false;
  transactionSettingsForm!: FormGroup;
  constructor(public _FormBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.transactionSettingsForm = this._FormBuilder.group({
      slipaggeToleranceLeft: new FormControl(
        localStorage.getItem('transactionSettings') || 0
      ),
      slipaggeToleranceRight: new FormControl(0),
      GWei: new FormControl(0),
      MWei: new FormControl(0),
      buyAt: new FormControl(0),
      sellAt: new FormControl(0),
      // target:new FormControl(0),
      stopLossX: new FormControl(0),
      stopLossPrecentage: new FormControl(0),
      moonBag: new FormControl(0),
      timeOut: new FormControl(0),
      transferLimit: new FormControl(0),
    });
  }
  openSettingsModal() {
    this.showmodal = !this.showmodal;
  }
  closeSettingsModal() {
    this.showmodal = !this.showmodal;
  }
  saveSettings() {
    localStorage.setItem(
      'transactionSettings',
      JSON.stringify(this.transactionSettingsForm.value)
    );
    this.closeSettingsModal();
  }
}
