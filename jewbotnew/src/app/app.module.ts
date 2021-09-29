import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SwapComponent } from './Components/swap/swap.component';
import { TransactionSettingsComponent } from './Components/transaction-settings/transaction-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwapComponent,
    TransactionSettingsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
