import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from, forkJoin, pipe } from 'rxjs';
import { tap, map, switchMap, mergeMap, toArray, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(public http:HttpClient) { }

    base = 'http://localhost:9001/api/';
    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    options = {
        withCredentials: true,
        headers: this.headers
    };

    get():Observable<any> {
        let t = new Date().getTime();

        return this.http.get(this.base, this.options)
            .pipe(
                map(res => res),
                toArray()
            )
    }

    getById(id) {
        return this.http.get(`${this.base}:${id}`, this.options)
            .pipe(
                map(res => res),
                toArray()
            )
    }

    post(dto) {
        console.log('dto: ', dto)
        let result: Observable<Object>;
        if (dto['id']) {
            result = this.http.put(dto.id, dto);
        } else {
            result = this.http.post(this.base, dto);
        }
        return result;
    }

    update() {

    }

    delete(id) {
        return this.http.delete(`${this.base}:${id}`);
    }
}
