import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-api',
    templateUrl: './api.component.html',
    styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

    constructor(public apiService:ApiService) { }

    apiDto: ApiDto = new ApiDto();

    ngOnInit() {
        this.loadApi();
    }

    loadApi() {
        this.apiService.get().subscribe(res => {
            console.warn(res)
        })
    }

    postApi(form:NgForm) {
        console.log(form);
        this.apiService.post(form).subscribe(result => {console.log(result)}, error => console.error(error));
    }

}


export class ApiDto {
    id:number;
    content:string;
}