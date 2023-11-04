import { ComponentFixture, TestBed,async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PlantasListComponent } from './plantas-list.component';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PlantasService } from './plantas.service';
import { Plantas } from './plantas';


describe('PlantasListComponent', () => {
  let component: PlantasListComponent;
  let fixture: ComponentFixture<PlantasListComponent>;
  let debug: DebugElement;
  
  beforeEach(async (() => {
     TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantasListComponent],
      providers: [PlantasService, HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const  planta = new Plantas(
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
      );
      component.plantas.push(planta);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 3 table rows', () => {
    const tableRows = debug.queryAll(By.css('tbody tr'));
    expect(tableRows.length).toBe(3); 
  });
  it('should have 3  headers', () => {
    const tableRows = debug.queryAll(By.css('tbody th'));
    expect(tableRows.length).toBe(3); 
  });
  
  });
  
  
  
  





  // it('should have 3 table rows', () => {
  //   const tableRows = debug.queryAll(By.css('tbody tr'));
  //   expect(tableRows.length).toBe(3);
  // });
  //   it('should have 4 <div.col.mb-2> elements', () => {
  //     expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(4)
  //   });

  //   it('should have 4 <card.p-2> elements', () => {
  //     expect(debug.queryAll(By.css('div.card.p-2'))).toHaveSize(4)
  //   });

  //   /*it('should have 10 <img> elements', () => {
  //     expect(debug.queryAll(By.css('img'))).toHaveSize(10)
  //   });*/

  // // //   it('should have 10 <div.card-body> elements', () => {
  // // //     expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
  // // //   });

  //   it('should have th tag with the directores.name', () => {
  //     debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
  //       expect(h5.nativeElement.textContent).toContain(component.directores[i].name)
  //     });
  //   });







