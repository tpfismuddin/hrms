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
      // Master data
      GET_ACC: environment.baseUrl + 'getAcc',
      POST_ACC: environment.baseUrl + 'postAcc',
      GET_DES: environment.baseUrl + 'getDes',
      POST_DES: environment.baseUrl + 'postDes',
      GET_LOC: environment.baseUrl + 'getLoc',
      POST_LOC: environment.baseUrl + 'postLoc',
      GET_JOB: environment.baseUrl + 'getJob',
      POST_JOB: environment.baseUrl + 'postJob',
    }
    return obj[param];
  }
}
