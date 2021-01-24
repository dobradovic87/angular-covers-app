import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CoversService } from './covers.service';
import { CoversComponent } from './covers/covers.component';

@NgModule({
  declarations: [
    AppComponent,
    CoversComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CoversService],
  bootstrap: [AppComponent]
})
export class AppModule { }
