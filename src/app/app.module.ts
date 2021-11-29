import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
//import { WineComponent } from './wine/wine.component';
import { NestedcomponentComponent } from './nestedcomponent/nestedcomponent.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WineComponent } from './wine/wine.component';




@NgModule({
  declarations: [
    AppComponent,
    //WineComponent,
    NestedcomponentComponent,
    WineComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
