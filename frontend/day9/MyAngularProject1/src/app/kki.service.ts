import { Injectable } from '@angular/core';

@Injectable()
export class calculatorService {
  getADDition(a:number,b:number){
    return a+b;
  }
    getSubraction(a:number,b:number){
      return a-b;
    }
    }
