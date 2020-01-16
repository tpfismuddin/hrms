import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppUrlServiceService {

  constructor() { }


  geturlfunction(param) {
    let obj: any =
    {
      GET_CAT_LIST: environment.baseUrl + 'getCar',
      CREATE_USER:environment.baseUrl + 'postCar',
      UPDATE_USER:environment.baseUrl + 'updateCar',
    }
    return obj[param];
  }
}
