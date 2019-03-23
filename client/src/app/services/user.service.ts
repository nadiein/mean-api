import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from, forkJoin, pipe } from 'rxjs';
import { tap, map, switchMap, mergeMap, toArray, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(public http:HttpClient) { }

    base = 'http://localhost:9001/user/';
    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    options = {
        withCredentials: true,
        headers: this.headers
    };

    register(dto) {
        console.log('dto: ', dto)
        let result: Observable<Object>;
        if (dto['id']) {
            result = this.http.put(dto.id, dto);
        } else {
            result = this.http.post(`${this.base}register/`, dto);
        }
        return result;
    }
}
