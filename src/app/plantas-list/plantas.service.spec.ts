/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantasService } from './plantas.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Plantas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantasService,HttpClient, HttpHandler],
      imports: [ HttpClientTestingModule]
    });
  });

  it('should ...', inject([PlantasService], (service: PlantasService) => {
    expect(service).toBeTruthy();
  }));
});
