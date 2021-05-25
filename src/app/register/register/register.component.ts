import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/_service/auth.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
     this.authService.register(this.model).subscribe((data) => {
        console.log("Registered successfully");
     }, error => {
        console.log(error);
     });
  }

  cancel() {
     this.cancelRegister.emit(false);
     console.log("cancelled");
  }

}
