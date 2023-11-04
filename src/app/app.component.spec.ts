import { TestBed, ComponentFixture} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PlantasListComponent } from './plantas-list/plantas-list.component';
import { PlantasService } from './plantas-list/plantas.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

// describe('PlantasListComponent', () => {
//   let component: PlantasListComponent;
//   let fixture: ComponentFixture<PlantasListComponent>;
//   let debug: DebugElement;

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debug: DebugElement;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule,HttpClientModule],
    declarations: [AppComponent, PlantasListComponent],
    providers:[PlantasService,HttpClient,HttpHandler]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
  });

  // it(`should have as title 'plantas'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('plantas');
  // });

  
});
