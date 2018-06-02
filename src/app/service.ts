import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {

  }

  getComments() : Observable<Comment[]> {

    // ...using get request
    return this.http.get('https://api.openaq.org/v1/cities?city=Chennai')
                   // ...and calling .json() on the response to return data
                    .map((res:Response) => {
                        console.log("I CAN SEE DATA HERE: ", res);
                        res.json()})
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}
}