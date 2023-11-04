import { Component, OnInit } from '@angular/core';
import {Plantas} from "./plantas"
import { PlantasService } from './plantas.service';

@Component({
  selector: 'app-plantas-list',
  templateUrl: './plantas-list.component.html',
  styleUrls: ['./plantas-list.component.css']
})
export class PlantasListComponent implements OnInit {

  constructor(private plantasService: PlantasService) { }

  plantas: Array<Plantas> =[];
  countInt : number=0;
  countExt: number=0;
  
  
  planInt! : Array<Plantas>;
  
  

  plantasInteriores(element:Plantas){
    
    if (element.tipo=="Interior"){
      this.countInt++;
      
    }
    else{
      this.countExt++;
    }
   
  }


  ngOnInit() {
    this.getPlantas();
    
  }

  getPlantas(){
    this.planInt=[];
    this.plantasService.getPlantas().subscribe(plantas=>{
      this.plantas = plantas;
      plantas.forEach(element => {this.planInt.push(element);
        this.plantasInteriores(element);
      });
      
      console.log(this.plantas);
    });
  }

  }


