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
    }
    return obj[param];
  }
}
