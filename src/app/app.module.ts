

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantasListModule} from './plantas-list/plantas-list.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlantasListComponent } from './plantas-list/plantas-list.component';










@NgModule({
  declarations: [
    AppComponent,
    PlantasListComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlantasListModule,
    HttpClientModule,
    BrowserAnimationsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[PlantasListComponent]
})
export class AppModule { }
