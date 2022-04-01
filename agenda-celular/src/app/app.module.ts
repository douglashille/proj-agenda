
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule, MatStepperModule, MatTableModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,   
  ],  
  imports: [    
    AppRoutingModule,
    CommonModule,
    MatStepperModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatIconModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule, 
    MatTooltipModule, 
    MatTreeModule,    
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,    
  ],
  providers: [    
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }