import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    constructor(public userService:UserService) { }

    userDto: UserDto = new UserDto();

    ngOnInit() {
        
    }

    postApi(form:NgForm) {
        console.log(form);
        this.userService.register(form).subscribe(result => {console.log(result)}, error => console.error(error));
    }

}


export class UserDto {
    username:any;
    password:any;
}
