import { Injectable } from '@angular/core';
import { Http, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  url = '/api/articles.json';

  constructor(private http: Http) { }

  searchArticles(keyword: string) {
    return this.http.get(this.url)
      .flatMap(res => {
        return Observable.from(res.json());
      })
      .filter((x: any) => {
        if (keyword) {
          return x.title.toLowerCase().indexOf(keyword.toLowerCase()) >= 0;
        } else {
          return true;
        }
      }).toArray();
  }
}
